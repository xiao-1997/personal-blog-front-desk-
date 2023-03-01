<template>
  <div class="blog-list-container" ref="mainContainer" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}
            </RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils"; //获取时间戳
import mainScroll from "@/mixins/mainScroll.js";
export default {
  mixins: [fetchData({}), mainScroll("mainContainer")],
  components: {
    Pager,
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage, //当前页
        limit: this.routeInfo.limit, //页容量
      };
      if (this.routeInfo.categoryId === -1) {
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
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true;
      // 滚动高度为0
      this.$refs.mainContainer.scrollTop = 0;
      this.data = await this.fetchData(); //重新请求数据
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>

