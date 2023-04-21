<template>
  <div>
    <v-container>
      <v-card class="pa-8 mb-5">
        <v-row class="m-0">
          <v-col class="d-flex align-center" cols="12" sm="2" md="2">
            <v-card-title>Betfair Market Fetch</v-card-title>
          </v-col>
          <v-col class="mb-2" cols="12" sm="8" md="8">
            <v-text-field
              class="rounded-pill"
              outlined
              dense
              label="Search Member"
              solo
              multiple
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" md="2">
            <div class="seachBtn">
              <v-btn color="error" class="py-4 rounded-pill">Search</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <div class="SearchContainer">No Data Found</div>
    </v-container>
  </div>
</template>
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
