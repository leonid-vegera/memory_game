import {onBeforeMount, ref, watch} from "vue";
import {CELL, DEFAULT_DIFFICULTY, MAX_DIFFICULTY} from "@/constans";

export default function useGameInit (cellsNumber) {
  const difficult = ref(DEFAULT_DIFFICULTY);
  const cells = ref([]);
  const wins = ref(0);

  const initField = function () {
    cells.value = [];

    for (let i = 0; i < cellsNumber; i++) {
      cells.value.push({
        id: i,
        clicked: false,
        value: CELL.EMPTY,
      })
    }
  }

  watch(difficult, (newDifficult) => {
    if (newDifficult > MAX_DIFFICULTY) {
      difficult.value = MAX_DIFFICULTY;
    }
    if (newDifficult < DEFAULT_DIFFICULTY) {
      difficult.value = DEFAULT_DIFFICULTY;
    }
  })

  onBeforeMount(initField);

  return ({
    difficult,
    cells,
    initField,
    wins,
  })
}
