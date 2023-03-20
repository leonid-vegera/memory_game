import {CELL as FIELD, GAME_SPEED, GAME_STATUS} from "@/constans";
import {nextTick} from "vue";

export default function useGameProcess(cells, gameStatus, difficult, startGame, wins) {
  const setGameOver = () => {
    gameStatus.value = GAME_STATUS.FAIL;
    difficult.value -= 1;
    setTimeout(() => {
      startGame()
    }, GAME_SPEED)
  }

  const setWin = () => {
    gameStatus.value = GAME_STATUS.WIN;

    setTimeout(async () => {
      difficult.value += 1;
      wins.value += 1;
      await nextTick();
      startGame();
    }, GAME_SPEED)
  }

  const checkCell = () => {
    const wrongCellIndex = cells.value.findIndex(cell => cell.clicked && cell.value === FIELD.EMPTY);
    if (wrongCellIndex > -1) {
      setGameOver();
      return;
    }

    const notFoundCellIndex = cells.value.findIndex(cell => !cell.clicked && cell.value === FIELD.FILLED);
    if (notFoundCellIndex === -1) {
      setWin();
    }
  }

  const selectCell = (id) => {
    const index = cells.value.findIndex(item => item.id === id);

    if (index > -1 && !cells.value[index].clicked) {
      cells.value[index].clicked = true;
    }

    checkCell()
  }

  return {
    selectCell
  };
}
