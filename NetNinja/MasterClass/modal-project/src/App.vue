<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <h1>{{ title }}</h1>
  <hr />
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <Modal :header="header" :text="text" theme="sale" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      title: "Hey vue cli!",
      header: "Passed Modal Header",
      text: "Some other text!",
    };
  },
  methods: {
    handleClick() {
      console.log("click it", this.$refs.name.value);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
  components: {
    // HelloWorld,
    Modal,
  },
};
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
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
