export default function useGameProcess(cells) {
  const selectCell = (id) => {
    const index = cells.value.findIndex(item => item.id === id);

    if (index > -1) {
      cells.value[index].clicked = true;
    }
  }

  return {
    selectCell
  };
}
