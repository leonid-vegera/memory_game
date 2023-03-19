<template>
<!--  <div class="cell"></div>-->
<!--  <div class="cell" :class="{active: cell.value === 1 && gameStatus === GAME_STATUS.PREVIEW}"></div>-->
  <div class="cell" :class="getBoardCellClasses" @click="select(cell.id)"></div>
<!--  <div class="cell" :class="{active: cell.value === 1 && preview}"></div>-->
<!--  <div :class="'cell ' + ((cell.value === 1 && preview) ? 'active' : '')"></div>-->
</template>

<script>
import {CELL, GAME_STATUS} from "@/constans";
import {computed} from "vue";

export default {
  name: "BoardCell",
  props: {
    cell: {
      type: Object,
      required: true,
    },
    // preview: {
    //   type: Boolean,
    //   required: false,
    //   default: false,
    // },
    gameStatus: {
      type: Number,
      required: false,
      default: GAME_STATUS.NONE,
    }
  },
  setup(props) {
    const getBoardCellClasses = computed(() => {
      return (props.cell.value === CELL.FILLED && props.gameStatus === GAME_STATUS.PREVIEW || props.cell.clicked === true) ? 'active' : '';
      // return isActiveClass;
    });

    return ({
      getBoardCellClasses,
    })
  },
  methods: {
    select(id) {
      if (this.gameStatus === GAME_STATUS.STARTED) {
        this.$emit('selectCell', id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cell {
  /*position: relative;*/
  width: 50px;
  height: 50px;
  margin: 5px;
  /*float: left;*/
  /*display: inline-block;*/
  /*border: 2px solid rgba(34, 69, 89, 1);*/
  //background-color: rgba(13, 29, 38, 1);
  background-color: rgb(127, 161, 180);
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
  transform-style: preserve-3d;
  //transform-style: flat;

  &.active {
    //background-color: rgb(90, 159, 58);
    background-image: url("../assets/homer-white.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: rotateY(180deg);
  }

  &:hover {
    //background-color: rgba(13, 29, 38, 0.8)
    background-color: rgb(91, 130, 152)
  }
}

</style>
