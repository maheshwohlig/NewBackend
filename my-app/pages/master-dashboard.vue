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
                <template v-slot:activator="{ on }">
                  <div class="pa-2">From Date</div>
                  <v-text-field
                    v-model="dateFormatted"
                    persistent-hint
                    dense
                    outlined
                    append-icon="mdi-calendar"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
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
                <template v-slot:activator="{ on }">
                  <div class="pa-2">To Date</div>

                  <v-text-field
                    v-model="computedDateFormatted"
                    dense
                    outlined
                    append-icon="mdi-calendar"
                    persistent-hint
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
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
              <div class="pa-2">Select Event Name</div>
              <v-select
                outlined
                :items="items"
                dense
                label="Select TM"
                solo
              ></v-select>
            </v-col>
          </v-row>
        </div>
        <div>
          <v-row>
            <v-col cols="3">
              <div class="pa-2">Select Event Type</div>
              <v-select
                outlined
                :items="items"
                dense
                label="Select TM"
                solo
              ></v-select>
            </v-col>
            <v-col class="mt-10" cols="12" sm="3">
              <div class="seachBtn">
                <v-btn color="error" class="py-4 rounded-pill">Search</v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
      <div class="SearchContainer">No Data Found</div>
    </v-container>
  </div>
</template>

<script>
export default {
  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
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
