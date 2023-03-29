export const state = () => ({
  data: {},
  loading: false,
  error: {},
  userLoginVerify: {},
});

export const mutations = {
  set_data(state, data) {
    state.data = data;
  },
  set_user_verify_data(state, data) {
    state.userLoginVerify = data;
  },
  set_error(state, data) {
    state.error = data;
  },
  set_loading(state, data) {
    state.loading = data;
  },
};
export const actions = {
  // user calling api
  async configLogin({ commit }, userForm) {
    try {
      const response = await this.$axios({
        method: "post",
        // baseURL: process.env.USERS_API_URL,
        url: "https://user-backend-api.zodexchange.com/api/member/memberLogin",
        data: {
          username: userForm.username,
          password: userForm.password,
          siteOrigin: "zodexchange.com",
        },
      });
      console.log("response>>>>>", response);
      if (response.data.value === true) {
        commit("set_user_verify_data", response.data);
        console.log(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.data.memberData.accessToken)
        );
        this.$router.push("/config");
        console.log(localStorage.getItem("userData"));
      }
      commit("set_loading", false);
    } catch (error) {
      commit("set_error", error);
      console.log(error);
    }
  },
};
