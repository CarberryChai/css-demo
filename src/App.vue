<template>
  <div id="app">
    <h2>CSS Demo 练习</h2>
    <div class="container">
      <div class="left">
        <div class="link">
          <router-link to="/cssColumn">CSS columns轻松实现两端对齐</router-link>
        </div>
        <div class="link">
          <router-link to="/FlexJustifyContent"
            >flex多行布局最后一行布局问题</router-link
          >
        </div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  h2 {
    text-align: center;
    margin: 10px 0;
  }
}
a {
  text-decoration: none;
  &:focus {
    outline: none;
  }
}
.container {
  display: flex;
  font-size: 16px;
  padding: 10px;
  align-items: flex-start;
  .left {
    width: 300px;
    overflow: hidden;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0.5em;
    .link {
      margin-top: 10px;
    }
  }
  .right {
    flex: 1;
  }
}
</style>
