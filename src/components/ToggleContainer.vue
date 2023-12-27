<script>
import { inject } from 'vue';

export default {
  name: 'ToggleContainer',

  setup() {
    const changeLanguage = inject('langChanger');
    const isChecked = JSON.parse(localStorage.getItem('checked')) || false;

    return {
      changeLanguage,
      isChecked
    }
  }
}
</script>

<template>
  <div class="toggle-container" >
    <label class="toggle-container__switch">
      <input
          class="toggle-container__input"
          type="checkbox"
          :checked="isChecked"
          @change="changeLanguage"
      />
      <span class="toggle-container__slider round" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.toggle-container {
  min-width: 36px;
  box-sizing: border-box;

  &__switch {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 19px;
    outline: none;
    border: none;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    font-size: 9px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &:before{
      position: absolute;
      box-sizing: border-box;
      padding: 2.5px 0;
      content: 'EN';
      height: 15px;
      width: 15px;
      left: 2px;
      bottom: 2px;
      background-color: #f7d700;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  &__input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .toggle-container__slider {
      background-color:#f7d700;

      &:before {
        content: 'UA';
        left: 0;
        color: #f7d700;
        background-color: #000000;
        -webkit-transition: 0.4s;
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
      }
    }

    &:focus + .toggle-container__slider {
      box-shadow: 0 0 1px #2196f3;
    }
  }
}
</style>