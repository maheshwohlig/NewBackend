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
                item-text="firstName"
                multiple
                outlined
                :menu-props="{ closeOnContentClick: true }"
              >
                <template v-slot:selection="data">
                  <v-chip
                    :key="JSON.stringify(data.item)"
                    close
                    class="chip--select-multi"
                    @input="data.parent.selectItem(data.item)"
                    @click:close="remove(data.item.firstName)"
                  >
                    {{ data.item.firstName }}
                  </v-chip>
                </template>
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ data.item.firstName }}
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
      items: [
        {
          firstName: "John",
          lastName: "Smith",
          Age: 44,
        },
        {
          firstName: "Sarah",
          lastName: "Martin",
          Age: 32,
        },
        {
          firstName: "Derick",
          lastName: "Johnson",
          Age: 39,
        },
        {
          firstName: "Mary",
          lastName: "Spitzer",
          Age: 22,
        },
        {
          firstName: "Wendy",
          lastName: "Macdonald",
          Age: 57,
        },
      ],
    };
  },

  methods: {
    remove(item) {
      const index = this.selectedItems.indexOf(item);
      if (index >= 0) this.selectedItems.splice(index, 1);
    },

    // async viewMarketData(event) {
    //   this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

    //   let data = {
    //     _accessToken: this.accessToken,
    //   };

    //   try {
    //     const response = await this.$axios({
    //       method: "Post",
    //       url: "https://user-backend-api.playexchangeuat.co/api/Member/searchHierarchyWithoutPagination",
    //       data,
    //     });
    //     console.log("response>>>>market>>>>", response);
    //   } catch (error) {
    //     console.log("errorrr>>>>", error);
    //   }
    // },
  },
};
</script>

<style scoped>
.v-list {
  margin-top: 50px !important;
}
.SearchContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 1px solid rgb(120, 117, 117);
}
</style>
