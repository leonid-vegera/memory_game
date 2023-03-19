<template>
  <div class="board">
    <div class="board__field">
<!--      <board-cell v-for="cell in cells" :key="`item-${cell.id}`" :class="{ active: cell.value === 1 && gameStatus === GAME_STATUS.PREVIEW}"></board-cell>-->
      <board-cell
        v-for="cell in cells"
        :key="`item-${cell.id}`"
        :cell="cell"
        :game-status="gameStatus"
        @selectCell="selectCell($event)"
      ></board-cell>

      {{gameStatus}}

    </div>
    <div class="board__difficulty">Важкість <strong>{{ difficult }}</strong></div>
    <button class="board__start" @click="startGame" :disabled="toDisableStartButton">Почати</button>
  </div>
</template>

<script>
import BoardCell from "@/components/BoardCell";
import useGameInit from "@/components/composables/useGameInit";
import useStartGame from "@/components/composables/useStartGame";
import {GAME_STATUS} from "@/constans";
import {ref} from "vue";
import useGameProcess from "@/components/composables/useGameProcess";

export default {
  name: "Board-panel",
  components: {
    BoardCell
  },
  setup() {
    const cellsNumber = 25;
    const gameStatus = ref(GAME_STATUS.NONE);

    const { difficult, cells, initField} = useGameInit(cellsNumber);
    const { startGame, toDisableStartButton } = useStartGame(difficult, cellsNumber, cells, initField, gameStatus);
    const { selectCell } = useGameProcess(cells);

    return {
      difficult,
      cells,
      cellsNumber,
      initField,
      startGame,
      gameStatus,
      GAME_STATUS,
      toDisableStartButton,
      selectCell,
    };
  },
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

      &:disabled {
        background-color: rgba(52, 52, 180, 0.73);
        color: #e5e5e5;
        cursor: default;

        &:hover {
          background-color: rgba(52, 52, 180, 0.73);
          color: #e5e5e5;
          box-shadow: none;
        }
      }

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
