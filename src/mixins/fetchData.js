// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法  fetchData

export default function (defaultDataValue = null) {
  return {
    data() {
      //相当于在页面生成时，数据等于传入的数据
      return {
        data: defaultDataValue,//加入数组/
        isLoading: true, //是否出现加载图标
      };
    },
    async created() {
      //在页面创建时传入新请求到的数据
      this.data = await this.fetchData();//远程获取数据
      this.isLoading = false; //图片加载完成，删除图标
    },
  }
}