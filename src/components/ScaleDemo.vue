<template>
  <div class="scale-container">
    <div>
      <p class="scale-one">Hover Me</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.scale-one {
  font-size: 20px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px 15px;
  cursor: pointer;
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: deeppink;
    transition: transform 0.5s;
    transform: scaleX(0);
  }
  &:hover::after {
    transform: scaleX(1);
  }
}
</style>
