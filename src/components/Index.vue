<template>
  <div class="index container">
    <div class="card" v-for="animation in Animations" :key="animation.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteAnimation(animation.id)"
          >delete</i
        >
        <h2 class="teal-text accent-3">{{ animation.movies }}</h2>
        <ul class="infos">
          <li v-for="(info, index) in animation.infos" :key="index">
            <span class="chip center-align">🌵</span>
            <p class="center-align">{{ info }}</p>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab green accent-1">
        <router-link
          :to="{ name: 'EditMovie', params: { movie_slug: animation.slug } }"
        >
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Index",
  data() {
    return {
      Animations: []
      // {
      //   movies: "Toy Story",
      //   slug: "toy-story",
      //   infos: ["1996", "John Lasseter"],
      //   id: "1"
      // },
      // {
      //   movies: "Big Hero",
      //   slug: "big-hero",
      //   infos: ["2015", "Don Hall"],
      //   id: "2"
      // },
      // {
      //   movies: "Dumbo",
      //   slug: "dumbo",
      //   infos: ["1941", "Ben Sharpsteen"],
      //   id: "3"
      // }
    };
  },
  methods: {
    deleteAnimation(id) {
      console.log(id);
      db.collection("animations")
        .doc(id)
        .delete()
        .then(() => {
          this.Animations = this.Animations.filter(animation => {
            return animation.id != id;
          });
        });
    }
  },
  created() {
    //fetch db
    db.collection("animations")
      .get()
      .then(snapshot => {
        snapshot.forEach(el => {
          let animation = el.data();
          animation.id = el.id;
          this.Animations.push(animation);
          console.log(el.data(), el.id);
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 49px;
}

@media only screen and (min-width: 500px) {
  .index {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin-top: 49px;
  }
}

.index h2 {
  text-align: center;
  font-size: 3em;
  margin-top: 0;
}

.index .infos {
  display: flex;
  margin: 30px 10px;
  justify-content: space-evenly;
}

.index .infos .chip {
  display: flex;
  justify-content: center;
}

.index .infos li {
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1.4em;
  color: #aaa;
  cursor: pointer;
}
</style>
