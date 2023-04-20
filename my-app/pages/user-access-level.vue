<template>
  <div>
    <v-container>
      <v-card class="d-flex pa-10 mb-5">
        <v-row class="m-0">
          <v-col class="pt-4 pl-6" cols="12" sm="5" md="5">
            <div class="d-flex">
              <v-icon size="25" class="mr-5" color="#FB8C00"
                >mdi-chart-bubble</v-icon
              >
              <div class="d-flex align-center"><h2>List of Users</h2></div>
            </div>
          </v-col>
          <v-col class="pt-4 pl-6" cols="12" sm="5" md="5">
            <div>
              <v-text-field
                class="rounded-pill"
                outlined
                label="Search Member"
                single-line
                hide-details
              ></v-text-field>
            </div>
          </v-col>
          <v-col sm="1" md="1" class="d-flex align-center justify-start">
            <div>
              <v-btn color="error" class="py-6 px-6 rounded-pill">
                Search</v-btn
              >
            </div></v-col
          >
          <v-col class="d-flex align-center justify-start" sm="1" md="1">
            Total : 25
          </v-col>
        </v-row>
      </v-card>
      <div class="SearchContainer">Search result will be listed here.</div>
    </v-container>
  </div>
</template>
<style scoped>
.SearchContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 1px solid rgb(120, 117, 117);
}
/* .v-text-field {
  width: 500px;
} */
</style>
