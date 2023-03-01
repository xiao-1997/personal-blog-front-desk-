<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      :src="src"
      class="about-content"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //请求的页面加载完成
      srcLoaded: false,
    };
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  }),
  created() {
    //开始加载页面数据
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>
