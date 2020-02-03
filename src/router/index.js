import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import AddAnimation from "@/components/AddAnimation";
import EditMovie from "@/components/EditMovie";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/add-animation",
      name: "AddAnimation",
      component: AddAnimation
    },
    {
      path: "/edit-movie/:movie_slug",
      name: "EditMovie",
      component: EditMovie
    }
  ]
});
