<template>
  <div class="card">
    <b-card-group>
      <b-card
        v-for="recipes in hotel"
        :key="recipes"
        :title="recipes.name"
        :img-src="recipes.imageUrl"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 30rem; margin-right: 3rem"
        class="mb-3"
      >
        <b-card-text> </b-card-text>

        <p class="text">{{ recipes.price }} TL</p>
        <p class="text">
          {{ recipes.location }}
        </p>

        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>

        <br />
        <br />

        <b-button variant="outline-primary">
          <router-link to="/hotel/1"
            ><h6 style="color: black">View</h6></router-link
          >
        </b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import data from "../store/data.json";
export default {
  props: {
    hotel: Array,
  },
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style>
.card {
  margin-left: 3%;
  margin-top: 20px;
  background-color: white;
}
.checked {
  color: orange;
}
</style>