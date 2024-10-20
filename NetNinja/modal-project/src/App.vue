<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">Click it</button>
  <Modal title="Stuff!" content="Things goes here." />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <MyComponent message="Hey Vue!" /> -->
</template>

<script>
import Modal from "./components/Modal.vue";

// import HelloWorld from "./components/HelloWorld.vue";
// import MyComponent from "./components/MyComponent.vue";
export default {
  name: "App",
  components: {
    Modal,
    // HelloWorld,
    // MyComponent,
  },
  data() {
    return {
      title: "My First Vue App!",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
      this.$refs.name.value = "Steve!";
    },
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
</style>
