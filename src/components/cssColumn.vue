<template>
  <div class="column-container">
    <div class="box" v-for="item in list" :key="item.id">{{ item.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'cssColumn',
  data() {
    return {
      list: Array.from({ length: 3 }, (_, index) => ({
        text: index + 1,
        id: index + 'id',
      })),
    }
  },
  props: {
    msg: String,
  },
  mounted() {
    console.log(this.$router)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.column-container {
  columns: 3 30px;
  text-align: center;
  .box {
    height: 100px;
    background: lightblue;
    line-height: 100px;
  }
}
</style>
