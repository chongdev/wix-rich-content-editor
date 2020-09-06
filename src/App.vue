<template>
  <div id="app">
    <img alt="Vue logo" width="100" src="./assets/images/logos/twitter.svg">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <TinymceEditor /> -->

    <div class="nav">
      <router-link to="/tiptap">Tiptap Editor</router-link>
      <router-link to="/tinymce">Tinymce Editor</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TinymceEditor from './components/TinymceEditor.vue'
// import TiptapEditor from './components/TiptapEditor.vue'
// import Icon from './components/Icon'

// import twitterLogo from './assets/images/logos/twitter.svg';
// const rendered = `
// <svg viewBox="${twitterLogo.viewBox}">
//   <use xlink:href="#${twitterLogo.id}" />
// </svg>`;

// console.log( twitterLogo );



export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TinymceEditor,
    // TiptapEditor,
    
    // Icon,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
