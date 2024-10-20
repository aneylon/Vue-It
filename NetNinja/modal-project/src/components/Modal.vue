<template>
  <div class="backdrop">
    <div class="modal">
      <h1 id="modal">{{ title }}</h1>

      <p>{{ content }}</p>
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
  },
};
</script>

<style>
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
</style>
