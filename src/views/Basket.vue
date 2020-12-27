<template>
  <div>
    <v-row v-if="productsInBasket != 0" class="d-flex flex-column align-center">
      <h3>Ваша корзина</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Название товара</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsInBasket" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}р.</td>
            <td>
              <input
                type="text"
                :value="product.cnt"
                @change="onChangeCnt(product.id, $event)"
              />
              шт.
            </td>
            <td>
              <v-btn icon @click="removeFromBasket(product)"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>
      <v-row>
        <strong>Итого: {{ total }} RUB</strong>
      </v-row>
    </v-row>
    <v-row v-else class="">
      <h3>Ваша корзина пуста</h3>
    </v-row>
  </div>
</template>     

<script>
  import { mapState, mapGetters, mapActions } from "vuex";

  export default {
    name: "Basket",

    data: () => ({
      //
    }),
    methods: {
      ...mapActions({
        removeFromBasket: "basket/remove",
        changeCnt: "basket/changeCnt",
      }),
      onChangeCnt(id, e) {
        let cntStr = e.target.value.trim();
        let cnt = parseInt(cntStr);

        this.changeCnt({
          id,
          cnt,
        }).then((newCnt) => {
          if (cnt === newCnt && newCnt.toString() !== cntStr) {
            this.$forceUpdate();
          }
        });
      },
    },
    computed: {
      ...mapGetters({
        total: "basket/total",
      }),
      ...mapState({
        productsInBasket: (state) => state.basket.basket,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .table {
    border: 1px solid #000;
    border-collapse: collapse;

    td,
    th {
      border: 1px solid #000;
      padding: 5px;
    }

    td {
      text-align: center;
    }

    input {
      width: 30px;
      text-align: center;
    }
  }
</style>