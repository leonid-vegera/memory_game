<template>
  <div class="board">
    <div class="board__field" :class="getBoardClasses">
      <board-cell
        v-for="cell in cells"
        :key="`item-${cell.id}`"
        :cell="cell"
        :game-status="gameStatus"
        @selectCell="selectCell($event)"
      ></board-cell>
    </div>
    <div class="board__description">Важкість <strong>{{ difficult }}</strong></div>
    <div class="board__description">Перемоги <strong>{{ wins }}</strong></div>
    <button class="board__start" @click="startGame" :disabled="toDisableStartButton">Почати</button>
  </div>
</template>

<script>
import BoardCell from "@/components/BoardCell";
import useGameInit from "@/components/composables/useGameInit";
import useStartGame from "@/components/composables/useStartGame";
import {GAME_STATUS} from "@/constans";
import {computed, ref} from "vue";
import useGameProcess from "@/components/composables/useGameProcess";

export default {
  name: "Board-panel",
  components: {
    BoardCell
  },
  setup() {
    const cellsNumber = 36;
    const gameStatus = ref(GAME_STATUS.NONE);

    const { difficult, cells, initField, wins} = useGameInit(cellsNumber);
    const { startGame, toDisableStartButton } = useStartGame(difficult, cellsNumber, cells, initField, gameStatus);
    const { selectCell } = useGameProcess(cells, gameStatus, difficult, startGame, wins);

    const getBoardClasses = computed(() => {
      let boardClass = 'board__field';
      if (gameStatus.value === GAME_STATUS.WIN) {
        return boardClass + '--success';
      }
      if (gameStatus.value === GAME_STATUS.FAIL) {
        return boardClass + '--error';
      }
      return boardClass;
    })

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
      wins,
      getBoardClasses,
    };
  },
}
</script>

<style scoped lang="scss">
  .board {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    &__field {
       width: 360px;
       min-height: 100px;
       background-color: #f7d700;
       margin: auto;
       display: flex;
       justify-content: center;
       flex-wrap: wrap;

      &--error {
        background-color: #ea4c59;
      }

      &--success {
        background-color: #86ea4c;
      }
     }

    &__description {
      margin: 10px 0;
    }

    &__start {
      align-self: center;
      width: 150px;
      margin: 10px 0 25px;
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
