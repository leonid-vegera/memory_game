<template>
  <div class="app">
    <img class="app__logo" alt="homer logo" src="./assets/homer-simpson.gif">
    <h1 class="app__title">Memory game</h1>
    <p class="app__description">Запам'ятай всі клітинки з Гомером <br/> і спробуй їх знайти</p>
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
  font-family: "Roboto Light", Avenir, Helvetica, Arial, sans-serif;
  font-size: 24px;
  box-sizing: border-box;
  text-align: center;
  height: 98vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  &__description {
    margin-bottom: 0;
    font-size: 0.8em;
  }

  &__logo {
    width: 300px;
    align-self: center;
  }

  &__title {
    font-family: 'Rubik Iso', cursive;
    margin: 0;
  }
}
</style>
