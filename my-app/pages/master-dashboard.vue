<template>
  <div>
    <v-container>
      <v-card class="pa-8 mb-5">
        <v-row class="m-0">
          <v-col class="d-flex align-center" cols="12" sm="3" md="3">
            <v-card-title class="pa-5">Master Dashboard </v-card-title>
          </v-col>
        </v-row>
        <div class="d-flex">
          <v-row>
            <v-col cols="12" sm="3" md="3">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div class="pa-2">From Date</div>
                  <v-text-field
                    v-model="form.fromDate"
                    persistent-hint
                    dense
                    outlined
                    append-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="form.fromDate"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" sm="3" md="3">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div class="pa-2">To Date</div>
                  <v-text-field
                    v-model="form.toDate"
                    dense
                    outlined
                    append-icon="mdi-calendar"
                    persistent-hint
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="form.toDate"
                  no-title
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="3">
              <div class="pa-2">Select SubGame</div>
              <v-select
                outlined
                v-model="form.SubGame"
                :items="SubGame"
                dense
                label="Select TM"
                solo
              ></v-select>
            </v-col>

            <v-col
              v-if="
                !(
                  form.SubGame == 'Premium SportsBook' ||
                  form.SubGame == 'Live Casino' ||
                  form.SubGame == 'Card Game'
                )
              "
              cols="3"
            >
              <div class="pa-2">Select Event Name</div>
              <v-select
                outlined
                v-model="form.EventName"
                :items="EventName"
                dense
                label="Select TM"
                solo
              ></v-select>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col
              v-if="
                !(
                  form.SubGame == 'Premium SportsBook' ||
                  form.SubGame == 'Live Casino' ||
                  form.SubGame == 'Card Game'
                )
              "
              cols="3"
            >
              <div class="pa-2">Select Event Type</div>
              <v-select
                outlined
                v-model="form.EventType"
                :items="EventType"
                dense
                label="Select TM"
                solo
              ></v-select>
            </v-col>
            <v-col class="mt-10" cols="12" sm="3">
              <div class="seachBtn">
                <v-btn
                  color="error"
                  @click="viewTableData(form)"
                  class="py-4 rounded-pill"
                  >Search</v-btn
                >
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>

      <v-row v-if="eventDetails.length > 0" justify="center">
        <v-col cols="12">
          <div>
            <v-simple-table class="py-1 px-3 elevation-1">
              <template v-slot:default>
                <thead>
                  <tr class="grey lighten-25">
                    <th class="text-left">Date</th>
                    <th class="text-left">Game</th>
                    <th class="text-left">SubGame</th>
                    <th class="text-left">Event</th>
                    <th class="text-left">Win</th>
                    <th class="text-left">Commission</th>
                    <th class="text-left">NetAmount</th>
                    <th class="text-left">Win (INR)</th>
                    <th class="text-left">Commission(INR)</th>
                    <th class="text-left">NetAmount (INR)</th>
                    <th class="text-left">Bet Fair PL</th>
                    <th class="text-left">U/L Commission</th>
                    <th class="text-left">D/L Commission</th>
                    <th class="text-left">User Count</th>
                    <th class="text-left">Bet Count</th>
                    <th class="text-left"></th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody v-for="(event, i) in eventDetails" :key="i">
                  <tr>
                    <td>{{ event.createdAt }}</td>
                    <td>{{ event.gameName }}</td>
                    <td>{{ event.subGame }}</td>
                    <td>{{ event.eventName }}</td>
                    <td>{{ event.win }}</td>
                    <td>{{ event.commission }}</td>
                    <td>{{ event.netAmt }}</td>
                    <td>{{ event.winINR }}</td>
                    <td>{{ event.commissionINR }}</td>
                    <td>{{ event.netAmtINR }}</td>
                    <td>{{ event.betFairAmount }}</td>
                    <td>{{ event.uplineCommission || 0 }}</td>
                    <td>{{ event.downlineCommission }}</td>
                    <td>{{ event.userCount }}</td>
                    <td>{{ event.betCount }}</td>
                    <td>
                      <v-btn
                        size="22"
                        class="rounded-pill"
                        @click="viewMarketData(event)"
                        color="#d01c35"
                        item-key="name"
                      >
                        Market</v-btn
                      >
                    </td>
                    <td>
                      <v-btn
                        size="22"
                        class="rounded-pill"
                        @click="viewUserData(event)"
                        color="#2a4caf"
                      >
                        User</v-btn
                      >
                    </td>
                  </tr>
                  <tr
                    v-show="event.rowActive"
                    v-for="(market, i) in marketData"
                    :key="i"
                  >
                    <td class="text-capitalize" width="10%"></td>
                    <td width="10%"></td>
                    <td width="10%"></td>
                    <td class="text-capitalize" width="10%">
                      {{ market._id }}
                    </td>
                    <td class="text-capitalize" width="10%">
                      {{ market.win }}
                    </td>
                    <td class="text-capitalize" width="10%">
                      {{ market.commission }}
                    </td>
                    <td class="text-capitalize" width="10%">
                      {{ market.netAmt }}
                    </td>
                    <td>
                      {{ market.winINR }}
                    </td>
                    <td>{{ market.commissionINR }}</td>
                    <td>{{ market.netAmtINR }}</td>
                    <td>{{ market.betFairAmount }}</td>
                    <td>{{ market.uplineCommission }}</td>
                    <td>{{ market.downlineCommission }}</td>
                    <td>{{ market.userCount }}</td>
                    <td>{{ market.betCount }}</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr
                    v-show="event.rowActive2"
                    v-for="(user, i) in userData"
                    :key="i"
                  >
                    <td class="text-capitalize" width="10%"></td>
                    <td width="10%"></td>
                    <td width="10%"></td>
                    <td class="text-capitalize" width="10%">
                      {{ user._id }}
                    </td>
                    <td class="text-capitalize" width="10%">
                      {{ user.win }}
                    </td>
                    <td class="text-capitalize" width="10%">
                      {{ user.commission }}
                    </td>
                    <td class="text-capitalize" width="10%">
                      {{ user.netAmt }}
                    </td>
                    <td>
                      {{ user.winINR }}
                    </td>
                    <td>{{ user.commissionINR }}</td>
                    <td>{{ user.netAmtINR }}</td>
                    <td>{{ user.betFairAmount }}</td>
                    <td>{{ user.uplineCommission }}</td>
                    <td>{{ user.downlineCommission }}</td>
                    <td>{{ user.userCount }}</td>
                    <td>{{ user.betCount }}</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-col>
        <v-flex xs12 md3>
          <v-pagination
            v-model="form.page"
            v-on:click.native="paginationNav(form.page)"
            :length="15"
            :total-visible="7"
          ></v-pagination>
        </v-flex>
      </v-row>

      <div v-if="eventDetails.length === 0" class="SearchContainer">
        No Data Found
      </div>
    </v-container>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data: (vm) => ({
    pagination: {
      page: 1,
      total: 0,
      perPage: 0,
      visible: 7,
    },
    Markets: "",
    expanded: [],
    eventName: "",
    marketData: "",
    userData: "",

    event: { rowActive: false, rowActive2: false },

    menu1: false,
    menu2: false,

    form: {
      SubGame: "All",
      EventName: "All",
      EventType: "All",
      fromDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      toDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      page: 1,
    },
    SubGame: [
      "All",
      "Card Game",
      "Live Casino",
      "Premium SportsBook",
      "Cricket",
      "Tennis",
      "Soccer",
    ],
    EventType: [
      "All",
      "Metch Odds",
      "Completed Match",
      "Tied Metch",
      "Bookmaker",
      "Session",
      "Linesessoin",
    ],
    EventName: ["All"],
    eventDetails: "",
  }),

  methods: {
    async getSubGame() {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let data = {
        game: "5b36053e46123555cca93993",
        fromDate: this.form.fromDate,
        toDate: this.form.toDate,
        subGame: this.form.SubGame,
        _accessToken: this.accessToken,
      };

      try {
        const response = await this.$axios({
          method: "Post",
          baseURL: process.env.API_BASE_URL,
          url: "/api/Account/getEventsForPLL",
          data,
        });
        this.EventName = this.EventName.concat(response.data.data);
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
    },

    async viewTableData(value) {
      const fromDate = new Date(value.fromDate).toISOString();
      const toDate = new Date(value.toDate).toISOString();

      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let data = {
        game: "5b36053e46123555cca93993",
        fromDate: fromDate,
        toDate: toDate,
        subGame: value.SubGame,
        matchName: "All",
        page: value.page ? value.page : 1,
      };

      try {
        const response = await this.$axios({
          method: "Post",
          baseURL: process.env.snowflake_URL,
          url: "/account/getPLBySubGame",
          data,
        });
        console.log("response>>", response);
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.results &&
          response.data.data.results.data
        ) {
          this.eventDetails = response.data.data.results.data;
        }
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
    },

    async viewMarketData(event) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let data = {
        game: "5b36053e46123555cca93993",
        fromDate: this.form.fromDate,
        toDate: this.form.toDate,
        eventId: "64463371a747ade25c7b4272",
        typeName: "All",
        accessToken: this.accessToken,
      };

      try {
        const response = await this.$axios({
          method: "Post",
          url: "https://mypl.playexchangeuat.co/account/getMarketWithinEvent",
          data,
        });
        this.marketData = response.data.data;
        console.log("response>>>>market>>>>", response.data.data[0]);
        this.Markets = response.data;
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
      _.each(this.eventDetails, (n, key) => {
        if (n.eventName == "null") {
          n.eventName = key;
        }
        // console.log("n.eventName>>>", n.eventName, event.eventName);

        if (n.eventName.toString() == event.eventName.toString()) {
          this.eventName = event.eventName;
          n.rowActive = true;
          n.rowActive2 = false;
        } else {
          n.rowActive = false;
          n.rowActive2 = false;
        }
      });
      // console.log("eventDetails>>>", this.eventDetails);
    },

    async viewUserData(event) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let data = {
        game: "5b36053e46123555cca93993",
        fromDate: this.form.fromDate,
        toDate: this.form.toDate,
        eventId: "64463371a747ade25c7b4272",
        typeName: "All",
        accessToken: this.accessToken,
      };

      try {
        const response = await this.$axios({
          method: "Post",
          url: "https://mypl.playexchangeuat.co/account/getUsersWithinEvent",
          data,
        });
        this.userData = response.data.data;
        console.log("response>>>>market>>>>", response.data.data[0]);
        this.Markets = response.data;
      } catch (error) {
        console.log("errorrr>>>>", error);
      }

      _.each(this.eventDetails, (n, key) => {
        if (n.eventName == "null") {
          n.eventName = key;
        }
        // console.log("n.eventName>>>", n.eventName, event.eventName);

        if (n.eventName.toString() == event.eventName.toString()) {
          this.eventName = event.eventName;
          n.rowActive = false;
          n.rowActive2 = true;
          console.log("evnt.rowActive2>>", this.eventDetails);
        } else {
          n.rowActive = false;
          n.rowActive2 = false;
        }
      });
    },

    paginationNav(data) {
      this.form.page = data;
      this.viewTableData(this.form);
    },
  },
  created() {
    this.getSubGame(this.form);
  },
};
</script>
<style scoped>
.seachBtn {
  display: grid;
}
.SearchContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 1px solid rgb(120, 117, 117);
}
</style>
