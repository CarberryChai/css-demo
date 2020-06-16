<template>
  <div class="flex-container">
    <div class="box" v-for="item in list" :key="item.id">{{ item.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'FlexJustifyContent',
  data() {
    return {
      list: Array.from({ length: 7 }, (_, index) => ({
        text: index + 1,
        id: index + 'id',
      })),
    }
  },
  props: {
    msg: String,
  },
  mounted() {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.flex-container {
  display: grid;
  // justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px 10px;
  .box {
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: lightgreen;
  }
}
</style>
