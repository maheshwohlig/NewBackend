<template>
  <div>
    <v-container>
      <v-card class="pa-10 mb-5">
        <div class="d-flex ml-5">
          <v-icon size="25" class="mr-5" color="#FB8C00"
            >mdi-chart-bubble</v-icon
          >
          <h2>Hierarchy Search</h2>
        </div>
        <div>
          <v-text-field
            class="mt-10 mx-5"
            outlined
            density="compact"
            variant="solo"
            label="Search Member"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
        </div>
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
</style>
