import {onBeforeMount, ref} from "vue";
import {CELL, DIFFICULTY} from "@/constans";

export default function useGameInit (cellsNumber) {
  const difficult = ref(DIFFICULTY);
  const cells = ref([]);

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

  onBeforeMount(initField);

  return ({
    difficult,
    cells,
    initField,
  })
}
