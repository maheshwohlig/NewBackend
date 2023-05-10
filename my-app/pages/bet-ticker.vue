<template>
  <div>
    <v-container>
      <v-card class="pa-5">
        <v-row class="m-0">
          <v-col class="d-flex align-center" cols="12" sm="3" md="3">
            <v-card-title class="pa-5">Bet Ticker</v-card-title>
          </v-col>
          <v-col class="d-flex align-center" cols="12" sm="5" md="5">
            <v-btn
              class="rounded-pill font-weight-bold orange--text v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark text--accent-4 mx-3 my-2 py-5 px-15"
              >Members Name</v-btn
            >
            <v-btn
              class="rounded-pill font-weight-bold orange--text v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark text--accent-4 mx-3 my-2 py-5 px-15"
              >Members Ip</v-btn
            >
          </v-col>
        </v-row>

        <div class="mt-6 mx-3">
          <v-layout row>
            <v-flex>
              <v-select
                v-model="form.userName"
                placeholder="Enter or Select Member Name to Search"
                :items="items"
                item-text="PlayerId"
                item-value="Player"
                multiple
                @change="getMemberList(form)"
                outlined
                :menu-props="{ closeOnContentClick: true }"
              >
                <template v-slot:selection="data">
                  <v-chip
                    :key="JSON.stringify(data.item.Player)"
                    close
                    class="chip--select-multi"
                    @input="data.parent.getMemberList(form)"
                    @click:close="remove(data.item.Player)"
                  >
                    {{ data.item.Player }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ data.item.Player }}
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
        </div>

        <v-row>
          <v-col cols="3">
            <div class="px-2">Select TM</div>
            <v-select
              outlined
              v-model="form.tm"
              :items="AllTm"
              item-text="username"
              dense
              label="Select TM"
              single-line
              hide-details
            ></v-select>
          </v-col>
          <v-col class="clearMemberBtn" cols="3">
            <v-btn
              class="rounded-pill font-weight-bold orange--text v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark text--accent-4 mx-3 my-2 py-5 px-15"
            >
              Clear Members</v-btn
            >
          </v-col>
          <v-col cols="3">
            <div class="px-2">Select SubGames</div>
            <v-select
              outlined
              v-model="form.subGame"
              :items="subGames"
              dense
              label="Select TM"
              solo
            ></v-select>
          </v-col>
          <v-col cols="3">
            <div class="px-2">Select Event</div>
            <v-text-field
              dense
              v-model="form.event"
              outlined
              label="Search Member"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <div class="px-2">Select Market Type</div>
            <v-text-field
              v-model="form.market"
              dense
              outlined
              label="Select TM"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <div class="px-2">Currency Types</div>
            <v-select
              v-model="form.currencyType"
              dense
              outlined
              :items="items"
              label="Select TM"
              solo
            ></v-select>
          </v-col>
          <v-col cols="3">
            <div class="px-2">Market Types</div>
            <v-text-field
              dense
              v-model="form.marketType"
              class=""
              outlined
              label="Search Member"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <div class="px-2">Stakes From Value</div>
            <v-text-field
              dense
              v-model="form.stakesFromValue"
              outlined
              label="Search Member"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <div class="px-2">Stakes To Value</div>
            <v-text-field
              v-model="form.stakesToValue"
              dense
              outlined
              label="Select TM"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <div class="px-2">Flag</div>
            <v-select
              v-model="form.flag"
              outlined
              dense
              :items="items"
              label="Select TM"
              solo
            ></v-select>
          </v-col>
          <v-col class="mt-6" cols="3">
            <div class="seachBtn">
              <v-btn color="error" class="py-4 rounded-pill">Search</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>

      <v-row justify="center">
        <v-col cols="12">
          <div>
            <v-simple-table class="py-1 px-3 elevation-1">
              <template v-slot:default>
                <thead>
                  <tr class="grey lighten-25">
                    <th class="text-left">Flag</th>
                    <th class="text-left">Member</th>
                    <th class="text-left">Place time</th>
                    <th class="text-left">Matched time</th>
                    <th class="text-left">Event</th>
                    <th class="text-left">Market</th>
                    <th class="text-left">Selection</th>
                    <th class="text-left">Odds Placed</th>
                    <th class="text-left">Odds Matched</th>
                    <th class="text-left">Matched</th>
                    <th class="text-left">Unmatched</th>
                    <th class="text-left">Profit/Liability</th>
                    <th class="text-left">Amount Placed on betfair</th>
                    <th class="text-left">Betfair Id</th>
                    <th class="text-left">Betfair Executed</th>
                    <th class="text-left">Betfair Cancelled</th>
                    <th class="text-left">IP</th>
                    <th class="text-left">Multiplier</th>
                    <th class="text-left">Betfair Status</th>
                  </tr>
                </thead>
                <tbody style="overflow-x: auto"></tbody>
              </template>
            </v-simple-table>
          </div>

          <v-flex xs12 md3>
            <v-pagination
              v-model="form.page"
              :length="15"
              :total-visible="7"
            ></v-pagination>
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    form: {
      userName: "",
      tm: "",
      event: "",
      subGame: "",
      markets: "",
      market: "",
      currencyType: "",
      marketType: "",
      stakesFromValue: "",
      stakesToValue: "",
      flag: "",
      page: 1,
    },
    AllTm: [{ username: "All", _id: "all" }],
    subGames: ["All"],
  }),
  computed: {
    ...mapState({
      items: (state) => state.memberDetails.userDetails,
    }),
  },
  methods: {
    async getAllTm(value) {
      let data = { name: value };
      try {
        const response = await this.$axios({
          method: "Post",
          baseURL: process.env.API_BASE_URL,
          url: "api/member/getAllTm",
          data,
        });
        if (response && response.data && response.data.data) {
          this.AllTm = this.AllTm.concat(response.data.data);
        }
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
    },

    async getSubGames(value) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let data = { _accessToken: this.accessToken };
      try {
        const response = await this.$axios({
          method: "Post",
          url: "https://sportsbookbackend.playexchangeuat.co/api/Bet/getSubGames",
          data,
        });
        console.log("subgame>>>", response);
        if (response && response.data && response.data.data) {
          this.subGames = this.subGames.concat(response.data.data);
        }
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
    },

    remove(item) {
      const index = this.form.userName.indexOf(item);
      if (index >= 0) this.form.userName.splice(index, 1);
      this.getMemberList(this.form);
    },

    async getMemberList(resData) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];
      let data = {
        accessLevel: "CompanyMaster",
        currencyRate: 1,
        filter: resData.userName,
        page: resData.page,
        _accessToken: this.accessToken,
      };
      await this.$store.dispatch("memberDetails/getUsersName", data);
    },
  },
  created() {
    this.getMemberList(this.form);
    this.getAllTm({});
    this.getSubGames();
  },
};
</script>
<style scoped>
.seachBtn {
  display: grid;
}

.clearMemberBtn {
  display: grid;
  align-items: center;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none !important;
}
</style>
