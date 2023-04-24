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
                <tbody>
                  <tr v-for="(event, i) in eventDetails" :key="i">
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
                        @click="newMember('Edit')"
                        color="#d01c35"
                        >Market</v-btn
                      >
                    </td>
                    <td>
                      <v-btn
                        size="22"
                        class="rounded-pill"
                        @click="newMember('Edit')"
                        color="#2a4caf"
                        >User</v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-col>
      </v-row>
      <div v-if="eventDetails.length === 0" class="SearchContainer">
        No Data Found
      </div>
      <!-- <div>
        <v-app id="inspire">
          <v-data-table
            :headers="dessertHeaders"
            :items="desserts"
            :expanded.sync="expanded"
            item-key="name"
            show-expand
            class="elevation-1"
          >
            <template v-slot:expanded-item="{ item }">
              <td>
                <div v-for="(source, i) in item.sources" :key="i">
                  {{ source.name }}
                </div>
              </td>
              <td>
                <p v-for="(source, i) in item.sources" :key="i">
                  {{ source.calories }}
                </p>
              </td>
              <td>
                <p v-for="(source, i) in item.sources" :key="i">
                  {{ source.fat }}
                </p>
              </td>
              <td>
                <p v-for="(source, i) in item.sources" :key="i">
                  {{ source.carbs }}
                </p>
              </td>
            </template>
          </v-data-table>
        </v-app>
      </div> -->
    </v-container>
  </div>
</template>

<script>
export default {
  data: (vm) => ({
    expanded: [],
    dessertHeaders: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "", value: "data-table-expand" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        sources: [
          {
            name: "USDA",
            calories: 167,
            fat: 5.2,
            carbs: 25,
          },
          {
            name: "BLS",
            calories: 143,
            fat: 7.1,
            carbs: 22,
          },
          {
            name: "SLV",
            calories: 157,
            fat: 6.2,
            carbs: 24,
          },
        ],
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        sources: [
          {
            name: "USDA",
            calories: 237,
            fat: 9.0,
            carbs: 37,
          },
        ],
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        sources: [
          {
            name: "USDA",
            calories: 262,
            fat: 16.0,
            carbs: 23,
          },
        ],
      },
    ],

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
          url: "https://user-backend-api.playexchangeuat.co/api/Account/getEventsForPLL",
          data,
        });
        this.EventName = this.EventName.concat(response.data.data);
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
    },

    async viewTableData(value) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let data = {
        game: "5b36053e46123555cca93993",
        fromDate: value.fromDate,
        toDate: value.toDate,
        subGame: value.SubGame,
        bookmakerSessionFlag: "CompanyMaster",
        _accessToken: this.accessToken,
        page: 1,
      };

      try {
        const response = await this.$axios({
          method: "Post",
          url: "https://mypl.playexchangeuat.co/account/getMasterDashboard",
          data,
        });
        this.eventDetails = response.data.data.results;
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
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
