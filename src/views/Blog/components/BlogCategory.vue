<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData.js";
import { getBlogCategories } from "@/api/blog.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    categoryId() {
      //分类
      console.log(this.$route.query);
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      //页容量
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1, //切换到这个分类的第一页
        limit: this.limit, //页容量
      };
      if (item.id === -1) {
        //说明是全部分类
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        //说明是单个分类
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
