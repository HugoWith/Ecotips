<template>
  <div v-if="movie" class="edit-movie container">
    <h2 class="center-align green-text darken-3">
      On fait des efforts {{ movie.movies }}
    </h2>
    <form @submit.prevent="EditMovie">
      <div class="field movies">
        <label for="movies">Où être plus 🌿 ?</label>
        <input type="text" name="movies" v-model="movie.movies" />
      </div>
      <div v-for="(info, index) in movie.infos" :key="index" class="field">
        <label for="info">Les vieux conseils 👌</label>
        <input type="text" name="info" v-model="movie.infos[index]" />
        <i class="material-icons delete" @click="deleteInfo(info)">delete</i>
      </div>
      <div class="field add-infos">
        <label for="add-infos"
          >Tes nouveaux conseils 🙏 (Appuie sur tab pour valider/ajouter des
          conseils)</label
        >
        <input
          type="text"
          name="add-infos"
          v-model="another"
          @keydown.tab.prevent="AddInfos"
        />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn green darken-3">J'ai finis !</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "EditMovie",
  data() {
    return {
      movie: null,
      another: null,
      feedback: null
    };
  },
  created() {
    let ref = db
      .collection("animations")
      .where("slug", "==", this.$route.params.movie_slug);

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.movie = doc.data();
        this.movie.id = doc.id;
      });
    });
  },
  methods: {
    EditMovie() {
      if (this.movie.movies) {
        this.feedback = null;
        // create slug for URL
        this.movie.slug = slugify(this.movie.movies, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        db.collection("animations")
          .doc(this.movie.id)
          .update({
            movies: this.movie.movies,
            infos: this.movie.infos,
            slug: this.movie.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = " You must enter a title to update your movie 🎬";
      }
    },
    AddInfos() {
      if (this.another) {
        this.movie.infos.push(this.another);
        console.log(this.infos);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You have to get those infos ! 🎬";
      }
    },
    deleteInfo(info) {
      this.movie.infos = this.movie.infos.filter(el => {
        el != info;
      });
    }
  }
};
</script>

<style>
.edit-movie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.edit-movie h2 {
  font-size: 2em;
  margin: 20px auto;
}

.edit-movie .field {
  margin: 20px auto;
  position: relative;
}

.edit-movie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
