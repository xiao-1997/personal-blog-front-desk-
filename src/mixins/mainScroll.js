export default function (refValue) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
    },
    beforeDestroy() {
      //当组件销毁抛出事件“mainScroll”
      this.$bus.$emit("mainScroll");
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
    },
    methods: {
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
    },
  };
}