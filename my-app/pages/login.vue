<template>
  <div class="text-center pb-5">
    <v-img src="../assets/Img/bg-3.jpg" contain></v-img>
  </div>
  <!-- <v-container width="100%" height="100%" id="login" fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="4">
        <div style="width: 100%; height: 100%" class="text-center pb-5">
          <nuxt-link to="/">
            <v-img src="../assets/Img/bg-3.jpg" contain></v-img>
          </nuxt-link>
        </div>
        <v-card class="login-block">
          <v-card-text class="text-center">
            <v-form
              id="loginForm"
              ref="loginForm"
              v-model="valid"
              autocomplete="false"
              lazy-validation
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
  </v-container> -->
</template>
<script>
export default {
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
      loadings: false,
    };
  },
};
</script>
<style scoped></style>
