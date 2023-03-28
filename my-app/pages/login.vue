<template>
  <div class="bgImg">
    <v-container
      width="100%"
      height="100%"
      id="login"
      fluid
      class="fill-height"
    >
      <v-row align="center" justify="center">
        <v-col class="card" cols="12" sm="8" md="4" lg="4">
          <v-card>
            <nuxt-link to="/">
              <v-img
                width="80%"
                height="80%"
                style="margin: auto"
                class="logo"
                :src="require('../assets/Img/logo.png')"
              ></v-img>
            </nuxt-link>
            <v-card-text class="text-center">
              <v-form
                id="loginForm"
                ref="loginForm"
                v-model="valid"
                autocomplete="false"
                lazy-validation
                @submit.prevent="userLogin"
              >
                <v-text-field
                  v-model="form.username"
                  class="my-1 transparent"
                  autocomplete="false"
                  outlined
                  append-icon="mdi-account"
                  label="Enter User Name"
                  required
                ></v-text-field>

                <v-text-field
                  id="password"
                  v-model="form.password"
                  class="my-1 transparent"
                  autocomplete="false"
                  outlined
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  label="Enter Password"
                  :rules="rules.password"
                  required
                  @click:append="showPassword = !showPassword"
                ></v-text-field>

                <div class="py-2">
                  <v-btn
                    class="pa-6"
                    id="login-btn"
                    block
                    :loading="loading"
                    :disabled="!valid"
                    color="primary"
                    type="submit"
                  >
                    Login
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  layout: "empty",
  data() {
    return {
      form: { username: "", password: "" },
      rules: {
        password: [(v) => !!v || "Password is required"],
        username: [(v) => !!v || "Username is required"],
      },
      valid: false,
      showPassword: false,
      loading: false,
    };
  },
  // computed: {
  //   ...mapState({
  //     userLoginVerify: (state) => state.user.userLoginVerify,
  //   }),
  // },

  methods: {
    //user login function
    async userLogin() {
      const userForm = this.form;
      try {
        // user calling api
        await this.$store.dispatch("user/configLogin", userForm);
        console.log("sucessfully");

        this.$store.commit("snackbar/open", {
          text: "Login sucessfully",
          color: "success",
        });
      } catch (error) {
        console.log("error", error);

        this.$store.commit("snackbar/open", {
          text: error,
          color: "error",
        });
      }
    },
  },
  mounted() {
    this.accessToken = JSON.parse(localStorage.getItem("accessToken"));
    console.log("this.accessToke<<<<", this.accessToke);
    if (this.accessToken) {
      console.log("login successfully");
      this.$router.push("/");
    }
  },
};
</script>
<style scoped>
.bgImg {
  background: url("../assets/Img/bg-3.jpg") no-repeat center;
  background-size: cover;
  height: 100vh;
}

.logo {
  width: auto;
  height: 12rem;
  margin: auto;
}

.v-card {
  background-color: transparent !important;
}

.card {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  margin: 0px !important;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.75);
  border: 0.2rem solid #da562b;
  border-radius: 5px;
  color: #fff;
  max-width: 580px;
  width: 100%;
  padding: 0 3rem 2rem 3rem;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0);
}
</style>
