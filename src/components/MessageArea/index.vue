<template>
  <div class="message-area-container">
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm"; //提交评论
import DataList from "./DataList"; //展示评论
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>
