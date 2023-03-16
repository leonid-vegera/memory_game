<template>
  <div class="board">
    <div class="board__field">
      <board-cell v-for="cell in cells" :key="`item-${cell.id}`" :class="{ active: cell.value === 1 }"></board-cell>
    </div>
    <div class="board__difficulty">Важкість <strong>{{ difficult }}</strong></div>
    <button class="board__start" @click="startGame">Почати</button>
  </div>
</template>

<script>
import BoardCell from "@/components/BoardCell";
import {onBeforeMount, ref} from 'vue';

export default {
  name: "Board-panel",
  components: {
    BoardCell
  },
  setup() {
    const difficult = ref(4);
    const cells = ref([]);
    const cellsNumber = 25;

    const initField = function () {
      cells.value = [];

      for (let i = 0; i < cellsNumber; i++) {
        cells.value.push({
          id: i,
          clicked: false,
          value: 0,
        })
      }
    }

    onBeforeMount(initField);

    return {
      difficult,
      cells,
      cellsNumber,
      initField,
    };
  },
  methods: {
    occasionalIndex (min, max) {
      return ~~(Math.random() * (max - min));
    },
    setCellsToFind() {
      for (let i = 0; i < this.difficult; i++) {
        const index = this.occasionalIndex(0, this.cellsNumber);
        console.log('index', index)
        if (this.cells[index].value !== 1) {
          this.cells[index].value = 1;
        } else {
          i--;
        }
      }

      console.log(this.cells)
    },
    startGame() {
      this.initField();
      this.setCellsToFind();
    }
  }
}
</script>

<style scoped lang="scss">
  .board {
    &__field {
       width: 300px;
       min-height: 100px;
       background-color: #11788f;
       margin: auto;
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
     }

    &__difficulty {
      margin: 10px 0;
    }

    &__start {
      padding: 10px 20px;
      font-size: 0.8em;
      background-color: #3434b4;
      color: white;
      border: 2px solid #6969d9;
      border-radius: 5px;
      outline: none;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        background-color: #222291;
        color: white;
        box-shadow: 2px 2px 12px #3434b4;
      }

      &:active {
        color: #cecccc;
      }
    }
  }
</style>
