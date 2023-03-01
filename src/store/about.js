import { getAbout } from "@/api/about";

export default {
  namespaced: true,
  state: {
    loading: false,
    data: "",
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
    async fetchAbout(ctx) {
      if (ctx.state.data) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getAbout();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    }
  }
}