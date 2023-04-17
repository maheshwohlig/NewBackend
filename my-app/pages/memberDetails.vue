<template>
  <div>
    <v-card>
      <!-- <v-container class="ma-0">
        <v-list flat class="mt-50">
          <v-list-item-group class="d-flex" v-model="tab" color="black">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              active-class="border"
              class="mr-3"
              :ripple="false"
              link
            >
              <v-btn class="SubNav" v-text="item.title"></v-btn>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-window v-model="tab">
          <v-window-item v-for="i in 3" :key="i" :value="i">
            <v-card>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-container> -->

      <v-tabs v-model="tab" grow>
        <v-tab v-for="item in items" :key="item" :value="tab">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item v-for="item in items" :key="item">
          <v-card-text>{{ text }}</v-card-text>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "memberDetails",
  data() {
    return {
      // selectedItem: 0,
      // items: [
      //   { title: "Activity", link: "/dashboard/test", value: "one" },
      //   { title: "Balance", link: "/dashboard/test2", value: "two" },
      //   { title: "Bet List", link: "/dashboard/test3", value: "three" },
      //   { title: "Account Statement", link: "/dashboard/test3", value: "four" },
      //   { title: "Transfer List", link: "/dashboard/test3", value: "five" },
      //   { title: "Login List", link: "/dashboard/test3", value: "six" },
      // ],
      // model: "tab-2",
      text: "Text",
      tab: "Appetizers",
      items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
    };
  },
};
</script>

<style scoped>
.v-list-item {
  flex: none;
}
.SubNav {
  padding: 25px !important;
}
</style>
