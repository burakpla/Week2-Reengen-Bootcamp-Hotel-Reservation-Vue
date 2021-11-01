<template>
  <div>
    <NavBar />

    <hotel-card :hotel="hotel" />
  </div>
</template>

<script>
import HotelCard from "./HotelCard.vue";
import data from "@/store/data.json";
import NavBar from "./NavBar.vue";
export default {
  name: "App",
  components: {
    HotelCard,
    NavBar,
  },
  data() {
    return {
      hotel: data.hotel,
    };
  },
};
</script>