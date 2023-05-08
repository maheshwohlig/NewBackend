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
        <div class="mt-10 ml-10">
          <v-layout row>
            <v-flex>
              <v-select
                v-model="selectedItems"
                label="Select One Or Many"
                :items="items"
                item-text="PlayerId"
                item-value="Player"
                multiple
                outlined
                :menu-props="{ closeOnContentClick: true }"
              >
                <template v-slot:selection="data">
                  <v-chip
                    :key="JSON.stringify(data.item.Player)"
                    close
                    class="chip--select-multi"
                    @input="data.parent.viewMarketData(data.item.Player)"
                    @click:close="remove(data.item.Player)"
                  >
                    {{ data.item.Player }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ data.item.Player }}
                    </v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
        </div>
      </v-card>
      <div class="SearchContainer">Search result will be listed here.</div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItems: [],
      chosenItems: [],
      items: [],
    };
  },

  methods: {
    remove(item) {
      const index = this.selectedItems.indexOf(item);
      if (index >= 0) this.selectedItems.splice(index, 1);
    },

    async viewMarketData(event) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let data = {
        accessLevel: "CompanyMaster",
        currencyRate: 1,
        filter: this.selectedItems,
        page: 1,
        _accessToken: this.accessToken,
      };

      try {
        const response = await this.$axios({
          method: "Post",
          baseURL: process.env.API_BASE_URL,
          url: "/api/Member/searchHierarchyWithoutPagination",
          data,
        });
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.data
        ) {
          this.items = response.data.data.data;
        }
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
    },
  },
  created() {
    this.viewMarketData(this.selectedItems);
  },
};
</script>

<style scoped>
.v-list {
  margin-top: 50px !important;
}
.SearchContainer {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 1px solid rgb(120, 117, 117);
}
</style>
