import { getProjects } from "@/api/project";

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
    async fetchProject(ctx) {
      ctx.commit("setLoading", true);
      const resp = await getProjects();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    }
  }
}