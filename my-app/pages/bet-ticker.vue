<template>
  <div>
    <v-container>
      <v-card class="pa-8">
        <v-row class="m-0">
          <v-col class="d-flex align-center" cols="12" sm="3" md="3">
            <v-card-title class="pa-5">bet ticker</v-card-title>
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
        <v-row>
          <v-col class="mb-2" cols="12">
            <v-text-field
              dense
              class=""
              outlined
              label="Search Member"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <div class="pa-2">Select TM</div>
            <v-text-field
              dense
              class=""
              outlined
              label="Select TM"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <div class="pa-2">Select SubGame</div>
            <v-select
              outlined
              :items="items"
              dense
              label="Select TM"
              solo
            ></v-select>
          </v-col>
          <v-col cols="3">
            <div class="pa-2">Min Bet</div>
            <v-text-field
              dense
              class=""
              outlined
              label="Search Member"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <div class="pa-2">Select Bet</div>
            <v-text-field
              class=""
              dense
              outlined
              label="Search Member"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <div class="pa-2">Select MinBet</div>
            <v-text-field
              class=""
              dense
              outlined
              label="Select TM"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <div class="pa-2">Select Bets</div>
            <v-select
              dense
              outlined
              :items="items"
              label="Select TM"
              solo
            ></v-select>
          </v-col>
          <v-col cols="3">
            <div class="pa-2">Select Bet</div>
            <v-text-field
              dense
              class=""
              outlined
              label="Search Member"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <div class="pa-2">Select Bet</div>
            <v-text-field
              dense
              class=""
              outlined
              label="Search Member"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <div class="pa-2">Select Bet</div>
            <v-text-field
              class=""
              dense
              outlined
              label="Select TM"
              single-line
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <div class="pa-2">Select Bet</div>
            <v-select
              outlined
              dense
              :items="items"
              label="Select TM"
              solo
            ></v-select>
          </v-col>
          <v-col class="mt-10" cols="3">
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
                    <th class="text-left">#</th>
                    <th class="text-left">UserName</th>
                    <th class="text-left">Currency</th>
                    <th class="text-left">Credit Limit</th>
                    <th class="text-left">Net Exposure</th>
                    <th class="text-left">Take</th>
                    <th class="text-left">Give</th>
                    <th class="text-left">Status</th>
                    <th class="text-left">Info</th>
                    <th class="text-left">Detail</th>
                    <th class="text-left">Action</th>
                    <th class="text-left">Lock</th>
                  </tr>
                </thead>
                <tbody style="overflow-x: auto">
                  <tr>
                    <td>1</td>
                    <td>bunny</td>
                    <td>POINT@1</td>
                    <td>1,00,000</td>
                    <td>NA</td>
                    <td>0</td>
                    <td>0</td>
                    <td>Active</td>
                    <td>
                      <v-icon>mdi-alpha-i-circle-outline</v-icon>
                    </td>
                    <td>
                      <v-btn to="/memberDetails"
                        ><v-icon>mdi-eye</v-icon></v-btn
                      >
                    </td>
                    <td>
                      <v-btn @click="newMember('Edit')"
                        ><v-icon>mdi-pen</v-icon></v-btn
                      >
                    </td>
                    <td class="lockIcon d-flex align-center">
                      <v-btn @click="showModal()"
                        ><v-icon>mdi-lock</v-icon></v-btn
                      >
                      <member-lists
                        @clicked="onClickChild"
                        :visible="isModalVisible"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>bunny</td>
                    <td>POINT@1</td>
                    <td>1,00,000</td>
                    <td>NA</td>
                    <td>0</td>
                    <td>0</td>
                    <td>Active</td>
                    <td>
                      <v-icon>mdi-alpha-i-circle-outline</v-icon>
                    </td>
                    <td>
                      <v-btn to="/memberDetails"
                        ><v-icon>mdi-eye</v-icon></v-btn
                      >
                    </td>
                    <td>
                      <v-btn @click="newMember('Edit')"
                        ><v-icon>mdi-pen</v-icon></v-btn
                      >
                    </td>
                    <td class="lockIcon d-flex align-center">
                      <v-btn @click="showModal()"
                        ><v-icon>mdi-lock</v-icon></v-btn
                      >
                      <member-lists
                        @clicked="onClickChild"
                        :visible="isModalVisible"
                      />
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>

          <v-flex xs12 md3>
            <v-pagination :length="15" :total-visible="7"></v-pagination>
          </v-flex>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import MemberLists from "./model/memberlists.vue";
export default {
  components: { MemberLists },

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    changeTitle: "",
    isModalVisible: false,
  }),
  methods: {
    showModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    onClickChild(value) {
      this.isModalVisible = value;
    },
    newMember(data) {
      this.$router.push({
        path: `member/${data}`,
        query: {
          memberId: "13312312",
        },
      });
    },
  },
};
</script>
<style scoped>
.seachBtn {
  display: grid;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none !important;
}
</style>
