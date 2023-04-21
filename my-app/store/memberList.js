export const state = () => ({
  data: {},
  loading: false,
  error: {},
  membersData: [],
});

export const mutations = {
  membersList_data(state, data) {
    state.membersData = data;
  },
  set_error(state, data) {
    state.error = data;
  },
  set_loading(state, data) {
    state.loading = data;
  },
};

export const actions = {
  // getMemberList calling api
  async getMemberList({ commit }, data) {
    try {
      const response = await this.$axios({
        method: "post",
        url: "https://user-backend-api.playexchangeuat.co/api/Member/searchMemberData",
        data,
      });
      console.log("response>>>>>", response);

      if (response.data.value === true) {
        commit("membersList_data", response.data);
        localStorage.setItem("userData", JSON.stringify(response.data.data));

        // localStorage.setItem(
        //   "accessToken",
        //   JSON.stringify(response.data.data.memberData.accessToken)
        // );
      }
      commit("set_loading", false);
    } catch (error) {
      console.log("errorrr>>>>", error);
      commit("set_error", error);
      console.log(error);
    }
  },
};
