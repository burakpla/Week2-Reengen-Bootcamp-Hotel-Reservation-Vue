<template>
  <div>
    <NavBar />
    <Form />
    <navbar class="mb-5" />
    <formres v-for="n in parseInt(values)" :key="n" />

    <b-button @click="addToBasket" v-b-modal.modal-1 class="colors"
      >Book And Pay {{ arayhos.price * values }}</b-button
    >

    <b-modal id="modal-1" title="Payment Configuration">
      <b-spinner v-show="loading" label="Spinning"></b-spinner>
      <h6 v-if="!loading">
        Your Payment Confirmed <span class="price"></span>
      </h6>
    </b-modal>
  </div>
</template>

<script>
import Form from "./Form.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "App",
  components: {
    Form,
    NavBar,
  },
  data() {
    return {
      loading: true,
    };
  },
  props: {
    values: {
      type: Number,
    },
    arayhos: {
      type: Number,
    },
  },
  methods: {
    addToBasket() {
      setTimeout(() => (this.loading = false), 3000);
    },
  },
  mounted() {
    this.$root.$on("People", (s, price) => {
      this.arayhos = price;
      this.values = s;
    });
  },
};
</script>
<style scoped>
.colors {
  background-color: black;
}
</style>