<template>
  <div class="add-animation container">
    <h2 class="center-align green-text darken-3">
      Ajouter des conseils 🌲
    </h2>
    <form @submit.prevent="AddAnimation">
      <div class="field movies">
        <label for="movies">Où être plus 🌿 ?</label>
        <input type="text" name="movies" v-model="movies" />
      </div>
      <div v-for="(info, index) in infos" :key="index" class="field">
        <label for="info">Info:</label>
        <input type="text" name="info" v-model="infos[index]" />
        <i class="material-icons delete" @click="deleteInfo(info)">delete</i>
      </div>
      <div class="field add-infos">
        <label for="add-infos"
          >Ajoute tes conseils 🙏 (Appuie sur tab pour valider/ajouter des
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
        <button class="btn green darken-3 white-text">J'ai finis !</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "AddAnimation",
  data() {
    return {
      movies: null,
      another: null,
      infos: [],
      feedback: null,
      slug: null
    };
  },
  methods: {
    AddAnimation() {
      if (this.movies) {
        this.feedback = null;
        // create slug for URL
        this.slug = slugify(this.movies, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        db.collection("animations")
          .add({
            movies: this.movies,
            infos: this.infos,
            slug: this.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = " You must enter a movies to add your movie 🎬";
      }
    },
    AddInfos() {
      if (this.another) {
        this.infos.push(this.another);
        console.log(this.infos);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You have to get those infos ! 🎬";
      }
    },
    deleteInfo(info) {
      this.infos = this.infos.filter(el => {
        el != info;
      });
    }
  }
};
</script>

<style>
.add-animation {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.add-animation h2 {
  font-size: 2em;
  margin: 40px auto;
}

.add-animation .field {
  margin: 20px auto;
  position: relative;
}

.add-animation .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
