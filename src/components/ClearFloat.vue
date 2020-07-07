<template>
  <div>
    <p>
      清除浮动就是当父元素的子元素有浮动元素时，而此时父元素高度没有设定，
      子元素由于浮动脱离了正常的文档流而使父元素高度坍塌，当然最简单的是直接设置父元素的高度，但此方法不够灵活
    </p>
    <div class="box" :class="{ clear: isShow }">
      <img class="content" src="../assets/IMG_0047.JPG" alt />
    </div>
    <button class="btn" @click="toogle">{{ isShow ? '取消' : '添加' }}浮动</button>
    <p>
      <code>
        .clear { &::after { content: " "; display: block; clear: both; }
        }
      </code>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    toogle() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style scoped lang="scss">
.box {
  padding: 10px;
  background-color: #cd0000;
  .content {
    width: 100px;
    height: 100px;
    object-fit: cover;
    float: left;
  }
}
.clear {
  &::after {
    content: " ";
    display: block;
    clear: both;
  }
}
.btn {
  outline: none;
  padding: 0.5em 1em;
  border-radius: 0.3em;
  border: 1px solid #ddd;
  cursor: pointer;
  background-color: #fff;
  margin: 10px;
  color: #666;
}
</style>
