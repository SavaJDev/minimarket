<template>
  <v-row class="product-content">
    <product-card
      v-for="product in products"
      :properties="product"
      :key="product.id"
      @handleClick="addToBasket(product)"
    ></product-card>
  </v-row>
</template>     

<script>
  import ProductCard from "../components/ProductCard.vue";
  import { mapGetters, mapActions } from "vuex";

  export default {
    components: { ProductCard },
    name: "ProductList",

    data: () => ({
      //
    }),
    methods: {
      ...mapActions({
        addToBasket: "basket/add",
      }),
    },
    computed: {
      ...mapGetters({
        sectionProducts: "products/sectionProducts",
      }),
      products() {
        return this.sectionProducts(this.$route.params.id);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .product-content {
    background-color: rgb(214, 221, 221);
  }
</style>