import { getBanners } from "@/api/banner";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(ctx, payload) {
      ctx.loading = payload;
    },
    setData(ctx, payload) {
      ctx.data = payload;
    },
  },
  actions: {
    //获取首页图片的数据
    async fetchBanner(ctx) {
      //如果数据内有数据就不再请求
      if (ctx.state.data.length) {
        return;
      }
      //如果数据内没数据
      ctx.commit("setLoading", true);
      const resp = await getBanners();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
