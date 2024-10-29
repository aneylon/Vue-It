<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">Click it</button>
    <button @click.alt="toggleModal">open modal (alt)</button>

    <div v-if="showModal">
      <Modal
        title="Stuff!"
        content="Things goes here."
        :moarThings="moarThings"
        theme="sale"
        @close="toggleModal"
      />
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <MyComponent message="Hey Vue!" /> -->
  </div>
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
      moarThings: "Moar things here",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
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
