<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ title }}</h1>

      <p>{{ content }}</p>
      <p>{{ moarThings }}</p>
    </div>
  </div>
</template>

<script>
console.log("modal!");
export default {
  name: "Modal",
  props: {
    title: String,
    content: String,
    moarThings: String,
    theme: String,
  },
  methods: {
    closeModal() {
      console.log("close modal");
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
#modal {
  color: blue;
  background-color: orange;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: teal;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
</style>
