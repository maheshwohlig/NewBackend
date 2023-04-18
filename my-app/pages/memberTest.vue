<template>
  <v-card>
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
  </v-card>
</template>
<script>
export default {
  name: "memberTest",
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
};
</script>
<style scoped>
.btn-link a {
  text-decoration: none;
}
</style>
