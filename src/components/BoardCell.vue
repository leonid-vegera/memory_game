<template>
  <div class="cell" :class="getBoardCellClasses" @click="select(cell.id)"></div>
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
    gameStatus: {
      type: Number,
      required: false,
      default: GAME_STATUS.NONE,
    }
  },
  setup(props) {
    const getBoardCellClasses = computed(() => {
        let cellClass = '';
        if ((props.cell.value === CELL.FILLED)
            && (props.gameStatus === GAME_STATUS.PREVIEW || props.cell.clicked)) {
          return cellClass + 'active';
        }
        if (props.cell.clicked === true && props.gameStatus === GAME_STATUS.FAIL) {
          return cellClass + 'error'
        }
      return cellClass;
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
@mixin cell-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transform: rotateY(180deg);
  opacity: 1;
  cursor: pointer;
  pointer-events: none;
}
.cell {
  width: 50px;
  height: 50px;
  margin: 5px;
  background-color: rgba(229, 232, 234, 0.91);
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
  transform-style: preserve-3d;

  &.active {
    background-image: url("../assets/homer-white.svg");
    @include cell-image;
  }

  &.error {
    background-image: url("../assets/bart.svg");
    @include cell-image;
  }

  &:hover {
    opacity: 0.5;
  }
}

</style>
