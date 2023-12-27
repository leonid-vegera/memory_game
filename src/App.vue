<template>
  <div class="app">
    <img class="app__logo" alt="homer logo" src="./assets/homer-simpson.gif">
    <h1 class="app__title">{{state.text.title}}</h1>
    <section class="app__section">
      <p class="app__description">{{state.text.description}}</p>
      <div class="app__toggler">
        <ToggleContainer />
      </div>
    </section>
    <BoardPanel v-bind="state.text"/>
  </div>
</template>

<script>
import BoardPanel from './components/BoardPanel'
import { useTranslations } from '@/services/lang/useTranslations';
import ToggleContainer from '@/components/ToggleContainer.vue';
import { provide, reactive, watch } from 'vue';

export default {
  name: 'App',
  components: {
    ToggleContainer,
    BoardPanel,
  },

  setup() {
    const {translate} = useTranslations();

    const state = reactive({
      lang: JSON.parse(localStorage.getItem('checked')) ? 'ua' : 'en' || 'en',
      isInputChecked: false,
      text: {
        title: translate().title,
        description: translate().description,
        difficultText: translate().difficultText,
        winsText: translate().winsText,
        startText: translate().startText,
      }
    })

    function changeLanguage() {
      localStorage.setItem('checked', JSON.stringify(!state.isInputChecked));
      state.lang = (state.isInputChecked) ? 'en' : 'ua';
      state.isInputChecked = !state.isInputChecked;
    }

    provide('langChanger', changeLanguage);

    watch(() => state.lang,
  (newVal) => {
        const translations = translate(newVal);
        for(const key in state.text) {
          state.text[key] = translations[key]
        }
      },
{deep: true}
    )

    return {
      state,
    }
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
  align-items: center;

  &__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    max-width: 360px;
  }

  &__description {
    margin: 0;
    font-size: 0.8em;
    align-self: flex-start;
  }

  &__toggler {
    flex-basis: 100px;
    flex-grow: 1;
  }

  &__logo {
    height: 100px;
    align-self: center;
  }

  &__title {
    font-family: 'Rubik Iso', cursive;
    margin: 0;
  }
}
</style>
