export const state = () => ({
  userData: [],
  loading: false,
  error: {},
  userDetails: [],
});

export const mutations = {
  set_recordsData(state, data) {
    state.userData = data;
  },
  set_userDatas(state, data) {
    state.userDetails = data;
    console.log("set_userDatas>>>", state.userDetails);
  },
  set_error(state, data) {
    state.error = data;
  },
  set_loading(state, data) {
    state.loading = data;
  },
};

export const actions = {
  async getUsersName({ commit }, data) {
    try {
      const response = await this.$axios({
        method: "Post",
        baseURL: process.env.API_BASE_URL,
        url: "/api/Member/searchHierarchyWithoutPagination",
        data,
      });

      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.data
      ) {
        if (data.filter.length === 0) {
          commit("set_userDatas", response.data.data.data);
        } else {
          const resData = response.data.data.data;
          const records = resData.filter((singleUser) => {
            return data.filter.includes(singleUser.username);
          });
          commit("set_recordsData", records);
        }
      }
      commit("set_loading", false);
    } catch (error) {
      commit("set_error", error);
      console.log(error);
    }
  },
};
