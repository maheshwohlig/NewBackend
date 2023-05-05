<template>
  <div>
    <v-card-title class="headline black justify-space-between" primary-title>
      Member {{ pageName }} Profile
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-card class="mb-3 py-12 px-8">
          <v-row class="m-0">
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="UserName*"
                v-model="form.username"
                v-on:blur="checkUserName(form.username)"
                id="username"
                :rules="rules.UserName_rules"
                required
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Display name"
                required
                v-model="form.displayName"
                :rules="rules.Display_rules"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Site URL*"
                v-model="form.sideURL"
                hint="example of persistent helper text"
                :rules="rules.SideURL_rules"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Password*"
                ref="password"
                type="password"
                v-model="form.Password"
                :rules="rules.Password"
                hint="At least 8 characters"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Confirm Password*"
                v-model="form.Confirm_Password"
                hint="re-enter password"
                :rules="rules.Confirm_Password"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Currancy Type*"
                v-model="form.Currancy_Type"
                :rules="rules.Currancy_Type"
                required
              ></v-text-field>
            </v-col>

            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Triple Master Credit Limit*"
                v-model="form.TripleMasterMaxCreditLimit"
                :rules="rules.TripleMasterMaxCreditLimit"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Double Master Max Credit Limit*"
                v-model="form.DoubleMasterMaxCreditLimit"
                :rules="rules.DoubleMasterMaxCreditLimit"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Super Master Max Credit Limit*"
                hint="example of persistent helper text"
                v-model="form.SuperMasterMaxCreditLimit"
                :rules="rules.SuperMasterMaxCreditLimit"
                required
              ></v-text-field>
            </v-col>

            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Master Max Credit Limit*"
                v-model="form.MasterMaxCreditLimit"
                :rules="rules.MasterMaxCreditLimit"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Player Max Credit Limit*"
                v-model="form.PlayerMaxCreditLimit"
                :rules="rules.PlayerMaxCreditLimit"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Multiplier*"
                v-model="form.Multiplier"
                :rules="rules.Multiplier"
                required
              ></v-text-field>
            </v-col>

            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-select
                label="Racing Currancy Type*"
                v-model="form.Racing_currancy_type"
                :rules="rules.Racing_currancy_type"
                :items="['HKD', 'AED', 'SGD', 'USD']"
                required
              ></v-select>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-select
                label="Betby Currency Type*"
                v-model="form.Betby_Currency_Type"
                :rules="rules.Betby_Currency_Type"
                :items="['HKD', 'AED', 'SGD', 'USD']"
                required
                hint="example of helper text only on focus"
              ></v-select>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-select
                label="Finsa Cuurency Type*"
                v-model="form.Finsa_Cuurency_Type"
                :rules="rules.Finsa_Cuurency_Type"
                :items="['HKD', 'AED', 'SGD', 'USD']"
                required
                hint="example of persistent helper text"
                persistent-hint
              ></v-select>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Comments*"
                v-model="form.Comments"
                :rules="rules.Comments"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="mb-3 py-5 px-8">
          <v-row>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-card-title class="headline pa-0"> Min Bet </v-card-title>
              <v-text-field
                label="Min Bet*"
                v-model="form.MinBet"
                :rules="rules.MinBet"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-card-title class="headline pa-0"> Max Bet </v-card-title>
              <v-text-field
                label="Max Bet*"
                v-model="form.MaxBet"
                :rules="rules.MaxBet"
                required
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-card-title class="headline pa-0"> Max Exposure </v-card-title>
              <v-text-field
                label="Max Exposure*"
                hint="example of persistent helper text"
                persistent-hint
                v-model="form.Max_Exposure"
                :rules="rules.Max_Exposure"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="py-12 px-8">
          <v-row>
            <v-col cols="12">
              <v-card-title class="headline pa-0">
                Commission for Downline
              </v-card-title>
              <v-text-field
                label="URL*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump',
                ]"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-card>

        <div class="my-10 d-flex justify-center">
          <div>
            <v-btn to="/" color="error" class="py-6 px-14 mr-4 rounded-pill"
              >Save</v-btn
            >
            <v-btn to="/" color="error" class="py-6 px-14 rounded-pill"
              >Cancle</v-btn
            >
          </div>
        </div>
      </v-container>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },

  data: function () {
    return {
      form: {
        username: "",
        TripleMasterMaxCreditLimit: "10,000",
        DoubleMasterMaxCreditLimit: "5000",
        SuperMasterMaxCreditLimit: "5000",
        MasterMaxCreditLimit: "1000",
        Racing_currancy_type: "HKD",
      },
      rules: {
        UserName_rules: [(v) => !!v || "Username is required"],
        Display_rules: [(v) => !!v || "Display name is required"],
        SideURL_rules: [(v) => !!v || "SideURL is required"],
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+/.test(v) || "E-mail must be valid",
        ],
        Password: [
          (v) => !!v || "Password is required",
          (v) => (v && v.length >= 8) || "minimum 8 characters",
          (v) => (v && /\d/.test(v)) || "At least one digit",
          (v) => (v && /[A-Z]{1}/.test(v)) || "At least one capital latter",
          (v) =>
            (v && /[^A-Za-z0-9]/.test(v)) || "At least one special character",
        ],
        Confirm_Password: [
          (v) => !!v || "Confirm_Password is required",
          (v) =>
            v === this.form.Password ||
            "The password confirmation does not match.",
        ],
        Currancy_Type: [(v) => !!v || "Currancy Type is required"],
      },
      accessToken: "",
    };
  },

  methods: {
    onClickButton() {
      this.$emit("clicked", false);
    },

    async checkUserName(data) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let params = {
        username: data,
        _accessToken: this.accessToken,
      };

      if (this.pageName == "Create") {
        try {
          const response = await this.$axios({
            method: "Post",
            baseURL: process.env.API_BASE_URL,
            url: "/api/member/checkMemberByName",
            params,
          });
          console.log("response>>>>>", response);
        } catch (error) {
          console.log("errorrr>>>>", error);
        }
      }
    },
  },

  created() {
    this.pageName = this.$route.params.name;
  },
};
</script>
