import {CELL, GAME_SPEED, GAME_STATUS} from "@/constans";
import {computed} from "vue";

export default function useStartGame (difficult, cellsNumber, cells, initField, gameStatus) {
  function occasionalIndex (min, max) {
    return ~~(Math.random() * (max - min));
  }

  function setCellsToFind() {
    gameStatus.value = GAME_STATUS.PREVIEW;
    for (let i = 0; i < difficult.value; i++) {
      const index = occasionalIndex(0, cellsNumber);
      if (cells.value[index].value !== CELL.FILLED) {
        cells.value[index].value = CELL.FILLED;
      } else {
        i--;
      }
    }

    setTimeout(() => {
      gameStatus.value = GAME_STATUS.STARTED;
    }, GAME_SPEED)
  }

  const toDisableStartButton = computed(() => {
    return gameStatus.value === GAME_STATUS.PREVIEW || gameStatus.value === GAME_STATUS.WIN
  })

  function startGame() {
    initField();
    setCellsToFind();
  }

  return {
    startGame,
    toDisableStartButton,
  };
}
