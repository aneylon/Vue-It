<template>
  <h1 id="myThing">{{ message }}</h1>
</template>

<script>
console.log("Component!");
export default {
  name: "MyComponent",
  props: {
    message: String,
  },
};
</script>

<style>
#myThing {
  color: red;
  background-color: green;
}
</style>
