import {CELL, GAME_STATUS} from "@/constans";
import {computed} from "vue";

export default function useStartGame (difficult, cellsNumber, cells, initField, gameStatus) {
  // const preview = ref(false);

  function occasionalIndex (min, max) {
    return ~~(Math.random() * (max - min));
  }

  function setCellsToFind() {
    // console.log(gameStatus)
    gameStatus.value = GAME_STATUS.PREVIEW;
    // preview.value = true;
    for (let i = 0; i < difficult.value; i++) {
      const index = occasionalIndex(0, cellsNumber);
      if (cells.value[index].value !== CELL.FILLED) {
        cells.value[index].value = CELL.FILLED;
      } else {
        i--;
      }
    }

    setTimeout(() => {
      // preview.value = false;
      gameStatus.value = GAME_STATUS.STARTED;
    }, 2000)

    // setTimeout(() => {
    //   cells.value.forEach(item => item.value = 0)
    // }, 2000)
  }

  const toDisableStartButton = computed(() => {
    // return gameStatus.value !== GAME_STATUS.NONE
    return gameStatus.value === GAME_STATUS.PREVIEW
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
