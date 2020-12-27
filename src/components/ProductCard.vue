<template>
  <v-col cols="12" sm="6" md="4" class="d-flex justify-center">
    <v-card
      width="270"
      height="360"
      rounded="10"
      :elevation="elevation"
      hover
      @mouseover="activeCard"
      @mouseleave="disactiveCard"
    >
      <div class="d-flex flex-row">
        <v-card-title class="name-product pa-0 mt-2 ml-3">
          {{ properties.name }}
        </v-card-title>
      </div>
      <div
        class="content d-flex align-center justify-center"
        :class="{ 'content-active': detailsActive }"
      >
        <div class="img-product" :class="{ 'img-active': detailsActive }">
          <img :src="require(`../assets/${properties.img}`)" alt="product" />
        </div>
      </div>
      <div class="price d-flex justify-end mt-3 mr-4">
        <p class="txt-price">{{ properties.price }} р.</p>
      </div>
      <div class="description d-flex justify-end mt-1 mr-4">
        <p class="txt-price-description">{{ properties.short_description }}</p>
      </div>
      <transition name="fade">
        <div
          v-if="detailsActive"
          class="btn d-flex align-center justify-center"
          @click="handleClick"
        >
          <p class="txt-btn mb-0">В КОРЗИНУ</p>
        </div>
      </transition>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    name: "ProductCard",
    props: ["properties"],
    data: () => ({
      detailsActive: false,
      elevation: 0,
    }),
    methods: {
      activeCard() {
        this.detailsActive = true;
        this.elevation = 5;
      },
      disactiveCard() {
        this.detailsActive = false;
        this.elevation = 0;
      },
      handleClick() {
        this.$emit("handleClick");
      },
    },
  };
</script>

<style lang="scss" scoped>
  .v-card {
    overflow: hidden;
  }

  .floor {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    opacity: 0.8;
  }

  .name-product {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #2c323a;
  }

  .content {
    width: 250px;
    height: 250px;
    background: #ffffff;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 5px;
    margin-left: 10px;
    transition: 0.5s;
  }

  .content-active {
    height: 200px;
    transition: 0.5s;
  }

  .number {
    width: 62px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    border-radius: 0px 5px;
    margin-left: 187px;
    margin-top: -1px;
  }

  .img-product img {
    width: 230px;
    height: 188px;
    transition: 0.5s;
  }

  .img-active img {
    width: 186px;
    height: 152px;
    transition: 0.5s;
  }

  .txt-number {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #2c323a;
  }

  .price {
    height: 28px;
  }

  .txt-price {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #2c323a;
    line-height: 28px;
  }

  .txt-price-description {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #2c323a;
    opacity: 0.6;
  }

  .btn {
    width: 250px;
    height: 40px;
    background: #70d24e;
    border-radius: 2px 2px 5px 5px;
    margin-left: 10px;
    cursor: pointer;
  }

  .txt-btn {
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0.8;
  }
</style>
