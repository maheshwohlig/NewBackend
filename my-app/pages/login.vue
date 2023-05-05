<template>
  <div class="bgImg">
    <v-container
      width="100%"
      height="100%"
      id="login"
      fluid
      class="fill-height"
    >
      <v-row justify="center">
        <v-col class="card" cols="12" sm="8" md="4" lg="4">
          <v-card>
            <nuxt-link to="/">
              <v-img
                width="80%"
                style="margin: auto"
                class="logo"
                :src="require('../assets/Img/logo.png')"
              ></v-img>
            </nuxt-link>
            <v-card-text class="text-center">
              <v-form
                id="loginForm"
                v-model="valid"
                autocomplete="false"
                lazy-validation
                @submit.prevent="userLogin"
              >
                <v-container>
                  <v-text-field
                    v-model="form.username"
                    color="primary"
                    autocomplete="false"
                    label="Username"
                    append-icon="mdi-account"
                    variant="underlined"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="form.password"
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="showPassword ? 'text' : 'password'"
                    color="primary"
                    autocomplete="false"
                    label="Password"
                    :rules="rules.password"
                    variant="underlined"
                    class="mb-0"
                    @click:append="showPassword = !showPassword"
                    required
                  ></v-text-field>

                  <div class="py-2 m-a">
                    <v-btn
                      class="pa-6 black-text"
                      width="10px"
                      id="login-btn"
                      block
                      :loading="loading"
                      :disabled="!valid"
                      color="primary"
                      type="submit"
                      style="color: white; background-color: #dc6e4a"
                    >
                      Login
                    </v-btn>
                  </div>
                </v-container>
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
      // user calling api
      await this.$store.dispatch("user/UserLogin", userForm);

      this.accessToken = JSON.parse(localStorage.getItem("accessToken"));
      if (this.accessToken) {
        this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];
        this.$axios.defaults.headers.common[
          "x-key-id"
        ] = `Bearer ${this.accessToken}`;
        this.$router.push("/");
      }
    },
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
  height: 12rem;
}

.v-card {
  padding: 0 !important;
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
