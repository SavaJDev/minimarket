<template>
  <div class="main d-flex justify-center align-center">
    <h3>Здесь располагается различная рекламная информация</h3>
  </div>
</template>     

<script>
  export default {
    name: "Main",

    data: () => ({
      //
    }),
    methods: {
      //
    },
  };
</script>

<style lang="scss" scoped>
  .main {
    width: 100%;
    height: 100vh;
    color: blue;
    background: url(../assets/banner/banner.png) no-repeat;
    background-size: contain;
    background-position: center;
  }
</style>