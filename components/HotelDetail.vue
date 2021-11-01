<template>
  <div>
    <NavBar />
    <br />
    <label for="range-1" class="mb-3 mt-3">Enter the number of People</label>
    <br />
    <b-form-input
      id="range-1"
      v-model="value"
      type="range"
      min="1"
      max="7"
    ></b-form-input>
    <div class="mt-2 mb-4">Number of People {{ value }}</div>
    <b-button size="lg" class="check" @click="Peoples"
      ><router-link to="/reservation">Booking</router-link></b-button
    >
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import data from "@/store/data.json";
export default {
  data() {
    return {
      value: 3,
      hotel: data.hotel,
      testEvent: "String to change",
    };
  },
  props: {
    header: {
      type: String,
    },
    id: {
      type: Array,
    },
  },
  name: "App",
  components: {
    NavBar,
  },

  methods: {
    Peoples() {
      this.$root.$emit("People", this.value, this.hotel[this.id - 1]);
    },
  },
};
</script>
<style scoped>
a {
  list-style: none !important;
  text-decoration: none;
  color: white;
}
a:hover {
  list-style: none !important;
  text-decoration: none !important;
  color: #fff;
}
.check {
  background-color: black;
  text-align: left;
}
.check:hover {
  background-color: blue;
  transform: all 3;
}
</style>