<template>
  <v-app app>
    <v-navigation-drawer app clipped v-model="drawer">
      <div class="d-flex align-center flex-column mt-2">
        <h3>Популярные</h3>
        <h3>товары</h3>
        <v-carousel
          cycle
          height="230"
          class="mt-2"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="popular in popularProducts" :key="popular.id">
            <v-sheet light>
              <v-row align="center" justify="center"
                ><img :src="require(`./assets/${popular.img}`)" alt="product" />
              </v-row>
              <v-row class="mt-2" justify="center">{{ popular.name }}</v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>

      <v-divider></v-divider>
      <div class="nav d-flex align-center flex-column mt-2">
        <h3>Каталог</h3>
      </div>
      <v-list nav class="ml-2">
        <v-list-item v-for="(item, i) in productList" :key="i" link>
          <v-list-item-content @click="toProduct(item.name)">{{
            item.title
          }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left height="80">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-if="!drawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <div
        class="heading d-flex"
        :class="{ headingMobile: screenMobile }"
        @click="toMain"
      >
        <p class="mb-0">МиниМаркет</p>
        <p class="mx-1 mb-0 d-flex justify-center">для</p>
        <p class="mb-0">Спортивных</p>
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-btn icon @click="toBasket">
          <v-icon :large="!screenMobile" class="mr-1">mdi-basket</v-icon>
        </v-btn>
        <span class="count-product">{{ countProducts }}</span>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid class="py-0 d-flex align-center">
        <v-row>
          <v-col cols="12" class="d-flex justify-center py-0">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "App",

    components: {},

    data: () => ({
      drawer: true,
      productList: [
        { title: "Мячи", name: "balls" },
        { title: "Тренажеры", name: "trainer" },
        { title: "Спортивная одежда", name: "sportswear" },
        { title: "Спортивное питание", name: "sports-nutrition" },
      ],
    }),
    methods: {
      toMain() {
        this.$router.push("/main");
      },
      toBasket() {
        this.$router.push("/basket");
      },
      toProduct(name) {
        this.$router.push("/productlist/" + name);
      },
    },
    computed: {
      screenMobile() {
        if (this.$vuetify.breakpoint.xs) return true;
        else return false;
      },
      ...mapGetters({
        countProducts: "basket/cnt",
        sectionProducts: "products/sectionProducts",
      }),
      popularProducts() {
        return this.sectionProducts("popular");
      },
    },
  };
</script>

<style lang="scss" scoped>
  h3 {
    color: blue;
  }

  img {
    width: 150px;
    height: 150px;
  }

  .heading p {
    font-size: 22px;
    color: #70d24e;
    text-shadow: blue 1px 1px 0, blue -1px -1px 0, blue -1px 1px 0,
      blue 1px -1px 0;
    cursor: pointer;
  }

  .headingMobile {
    flex-direction: column !important;

    p {
      font-size: 16px;
    }
  }

  .count-product {
    background-color: #70d24e;
    display: inline-block;
    width: 20px;
    height: 25px;
    border-radius: 100%;
    text-align: center;
  }
</style>
