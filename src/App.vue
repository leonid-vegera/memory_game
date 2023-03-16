<template>
  <div class="app">
    <img class="app__logo" alt="homer logo" src="./assets/homer-simpson.gif">
    <h1 class="app__title">Memory game</h1>
    <p class="app__description">Запам'ятай всі зелені поля і спробуй їх вказати</p>
    <board-panel></board-panel>
  </div>
</template>

<script>
import BoardPanel from './components/BoardPanel'
export default {
  name: 'App',
  components: {
    BoardPanel,
  }
}
</script>

<style scoped lang="scss">
.app {
  font-family: 'Smokum', cursive, "Roboto Light", Avenir, Helvetica, Arial, sans-serif;
  font-size: 24px;
  box-sizing: border-box;
  text-align: center;

  &__logo {
    width: 300px;
  }

  &__title {
    margin: 0;
  }
}
</style>
