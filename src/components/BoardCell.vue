<template>
  <div class="cell"></div>
</template>

<script>
export default {
  name: "BoardCell"
}
</script>

<style scoped lang="scss">
.cell {
  /*position: relative;*/
  width: 50px;
  height: 50px;
  margin: 5px;
  /*float: left;*/
  /*display: inline-block;*/
  /*border: 2px solid rgba(34, 69, 89, 1);*/
  //background-color: rgba(13, 29, 38, 1);
  background-color: rgb(127, 161, 180);
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
  transform-style: preserve-3d;
  //transform-style: flat;

  &.active {
    //background-color: rgb(90, 159, 58);
    background-image: url("../assets/homer-white.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transform: rotateY(180deg);
  }

  &:hover {
    //background-color: rgba(13, 29, 38, 0.8)
    background-color: rgb(91, 130, 152)
  }
}

</style>
