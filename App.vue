<template>
  <div id="app">
    <home />

    <router-view></router-view>
  </div>
</template>

<script>
import { Home } from "@/components/Home";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  color: #000000;
}
</style>