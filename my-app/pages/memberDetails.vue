<template>
  <div>
    <v-container>
      <v-card class="px-10 py-8">
        <div class="d-flex pl-5 mb-8">
          <div class="d-flex">
            <v-icon @click="goBack()">mdi-arrow-left-bold-circle</v-icon>
          </div>
          <div class="headline mx-3 d-flex align-center">
            Member Listing Downline > xyz
          </div>
          <v-text-field
            class="rounded-pill mx-5"
            outlined
            density="compact"
            variant="solo"
            label="Search Member"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
          ></v-text-field>
          <div class="pr-5 d-flex align-center">
            Created On: 1 Oct, 2022 22:31:46
          </div>
        </div>
        <v-tabs v-model="currentItem" hide-slider>
          <v-tab
            class="font-weight-bold white--text v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--dark text--accent-4 mx-3 my-2 py-5 px-5"
            v-for="item in items"
            :key="item.title"
            :value="'tab-' + item"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </v-card>
    </v-container>
    <v-container>
      <v-window v-model="currentItem">
        <v-window-item
          :transition="false"
          v-for="item in items"
          :key="item.title"
        >
          <h2>{{ item.title }}</h2>
          text
          <component v-bind:is="item.link"></component>
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "memberDetails",
  data() {
    return {
      currentItem: "tab-Web",
      items: [
        { title: "Activity", link: "memberActivity", value: "one" },
        { title: "Balance", link: "memberBalance", value: "two" },
        { title: "Bet List", link: "memberActivity", value: "three" },
        { title: "Account Statement", link: "memberActivity", value: "four" },
        { title: "Transfer List", link: "memberActivity", value: "five" },
        { title: "Login List", link: "memberActivity", value: "six" },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.btn-link a {
  text-decoration: none;
}
.v-text-field--outlined >>> fieldset {
  border-color: rgba(218, 118, 41, 0.986);
}
</style>
