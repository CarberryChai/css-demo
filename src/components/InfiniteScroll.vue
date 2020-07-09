<template>
  <div class="scroll-container">
    <div class="product-list" v-if="productList.length">
      <div class="product-item" v-for="item in productList" :key="item.id">
        <img :src="item.picture1 | convertImage" loading="lazy" />
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div ref="flag"></div>
    <Loading :loading="loading" :noMore="noMore" />
  </div>
</template>

<script>
import Loading from './Loading'
const api = '/api/search/s.htm'
export default {
  filters: {
    convertImage(url) {
      return `//img1.yiwugou.com/${url}`
    },
  },
  data() {
    return {
      query: {
        q: '玩具',
        cpage: 1,
        pageSize: 20,
        st: 0,
        m: '',
        f: '',
        s: '',
        marketCode: 10,
      },
      productList: [],
      loading: false,
      noMore: false,
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this._getList()
          }
        })
      },
      {
        root: null,
        threshold: 0,
      }
    )
    observer.observe(this.$refs.flag)
  },
  methods: {
    _getList() {
      this.loading = true
      this.$http
        .get(api, this.query)
        .then(res => {
          if (
            Array.isArray(res.prslist) &&
            res.prslist.length < this.query.pageSize
          ) {
            this.noMore = true
          }
          const list = res.prslist.map(({ id, picture1, title }) => ({
            id,
            picture1,
            title,
          }))
          this.productList.push(...list)
          this.query.cpage++
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  components: {
    Loading,
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  // justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px 10px;
  .product-item {
    img {
      object-fit: cover;
      width: 100%;
      height: 240px;
    }
    p {
      font-size: 14px;
      color: #333;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px;
    }
  }
}
</style>
