<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout"; //布局
import BlogList from "./components/BlogList.vue"; //文章内容
import BlogCategory from "./components/BlogCategory.vue"; //文章分类
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style></style>
