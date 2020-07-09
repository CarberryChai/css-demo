<template>
  <div class="upload">
    <div>
      <label class="upload-icon" for="upload-img"></label>
      <input type="file" id="upload-img" @change="getFile" />
    </div>
    <div v-if="imgUrl">
      <p>预览：</p>
      <img class="img" :src="imgUrl" alt />
    </div>
    <button class="btn" @click="upload">上传</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl:
        'http://carberry-static.oss-cn-hangzhou.aliyuncs.com/images/cslhseg7fs8carbon.png',
      file: null,
    }
  },
  created() {
    console.log(this.$http)
  },
  methods: {
    getFile(e) {
      const file = e.target.files[0]
      if (!/image/.test(file.type)) {
        window.alert('请上传图片')
        return
      }
      if (!this._validFileSize(file.size)) {
        window.alert('上传图片不能大于10M')
        return
      }
      this.file = file
      this.imgUrl = window.URL.createObjectURL(file)
    },
    upload() {
      const formData = new FormData()
      formData.append('file', this.file)
      this.$http
        .post(`/upload/upload?_csrf=${this.$cookie.get('csrfToken')}`, formData)
        .then(res => {
          console.log(res)
        })
    },
    _validFileSize(num) {
      // 上传图片不能大于10M
      if (num >= 10485760) return false
      return true
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-icon {
  display: block;
  margin: 10px;
  width: 80px;
  height: 80px;
  border: 1px dashed #ddd;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  &::after {
    content: " ";
    position: absolute;
    height: 2px;
    width: 20px;
    background-color: #ddd;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &::before {
    content: " ";
    position: absolute;
    height: 20px;
    width: 2px;
    background-color: #ddd;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  & + input {
    opacity: 0;
  }
}
.img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
</style>
