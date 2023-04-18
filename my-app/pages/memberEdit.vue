<template>
  <div>
    <v-card-title class="headline black justify-space-between" primary-title>
      Member Edit Profile
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-card class="mb-3 py-12 px-8">
          <v-row class="m-0">
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field label="UserName*" required></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Display name"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Site URL*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field label="Password*" required></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Confirm Password*"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Currancy Type*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Triple Master Credit Limit*"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Double Master Max Credit Limit*"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Super Master Max Credit Limit*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Master Max Credit Limit *"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Player Max Credit Limit *"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Multiplier*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Racing Currancy Type*"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Betby Cuurency Type*"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-text-field
                label="Finsa Cuurency Type*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Comments*" required></v-text-field>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="mb-3 py-5 px-8">
          <v-row>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-card-title class="headline pa-0"> Min Bet </v-card-title>
              <v-text-field
                label="Racing Currancy Type*"
                required
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-card-title class="headline pa-0"> Max Bet </v-card-title>
              <v-text-field
                label="Betby Cuurency Type*"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col class="mb-5" cols="12" sm="6" md="4">
              <v-card-title class="headline pa-0"> Max Exposure </v-card-title>
              <v-text-field
                label="Finsa Cuurency Type*"
                hint="example of persistent helper text"
                persistent-hint
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
            <v-btn to="/" color="error" class="py-8 px-14 rounded-pill"
              >Save</v-btn
            >
            <v-btn to="/" color="error" class="py-8 px-14 rounded-pill"
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
    return {};
  },
  methods: {
    onClickButton() {
      this.$emit("clicked", false);
    },
  },
};
</script>
