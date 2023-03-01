<template>
  <div>
    <h1>组件测试</h1>
    <Page
      :current="current"
      :total="total"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Page from "./";

export default {
  name: "app",
  components: {
    Page,
  },
  data() {
    return {
      current: 1,
      total: 20,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>
