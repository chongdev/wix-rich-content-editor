import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import TinymceEditor from "./components/TinymceEditor";
import TiptapEditor from "./components/TiptapEditor";


// import svgSpriteLoader from './helpers/svg-sprite-loader.js'
// const __svg__ = { path: './assets/images/icons/*.svg', name: 'assets/images/[hash].sprite.svg' }
// svgSpriteLoader(__svg__.path)

const routes = [
  { path: "/tinymce", component: TinymceEditor },
  { path: "/tiptap", component: TiptapEditor },
];

new Vue({
  routes,
  render: (h) => h(App),
}).$mount("#app");
