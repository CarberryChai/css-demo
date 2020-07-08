<template>
  <div class="nav">
    <a href="#" class="nav-item">导航一</a>
    <a href="#" class="nav-item">导航二</a>
    <a href="#" class="nav-item">导航三</a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.nav {
  padding: 0 10px;
  background-color: #cd0000;
  .nav-item {
    padding: 10px;
    display: block;
    border-bottom: 1px solid #b70000;
    color: #fff;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
