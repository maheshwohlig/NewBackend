<template>
  <div>
    <div>
      <v-container>
        <v-card class="pa-10">
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
                  v-model="form.selectedItems"
                  placeholder="Enter or Select Member Name to Search"
                  :items="items"
                  item-text="PlayerId"
                  item-value="Player"
                  multiple
                  @change="getMemberList(form)"
                  outlined
                  :menu-props="{ closeOnContentClick: true }"
                >
                  <template v-slot:selection="data">
                    <v-chip
                      :key="JSON.stringify(data.item.Player)"
                      close
                      class="chip--select-multi"
                      @input="data.parent.getMemberList(form)"
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
      </v-container>
    </div>
    <div>
      <v-container>
        <v-card class="pa-10 mb-5">
          <v-row justify="center">
            <v-col cols="12">
              <div>
                <v-simple-table
                  v-if="records.length > 0"
                  class="py-1 px-3 elevation-1"
                >
                  <template v-slot:default>
                    <thead>
                      <tr class="grey lighten-25">
                        <th class="text-left">#</th>
                        <th class="text-left">Player (P/L)</th>
                        <th class="text-left">Master (P/L)</th>
                        <th class="text-left">SM (P/L)</th>
                        <th class="text-left">DM (P/L)</th>
                        <th class="text-left">TM (P/L)</th>
                      </tr>
                    </thead>
                    <tbody v-for="(event, i) in records" :key="i">
                      <tr>
                        <td>{{ i }}</td>
                        <td>{{ event.Player }}</td>
                        <td>{{ event.Master }}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>{{ event.TripleMaster }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </div>
            </v-col>
          </v-row>
          <div v-if="records.length === 0" class="SearchContainer">
            Search result will be listed here.
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        selectedItems: "",
        page: 1,
      },
      chosenItems: [],
      records: [],
    };
  },

  computed: {
    ...mapState({
      items: (state) => state.memberDetails.userDetails,
    }),
  },

  methods: {
    remove(item) {
      const index = this.form.selectedItems.indexOf(item);
      if (index >= 0) this.form.selectedItems.splice(index, 1);
      this.getMemberList(this.form);
    },

    async getMemberList(resData) {
      console.log("resData>>>", resData);
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];
      let data = {
        accessLevel: "CompanyMaster",
        currencyRate: 1,
        filter: resData.selectedItems,
        page: resData.page,
        _accessToken: this.accessToken,
      };
      console.log("data>>>", data);
      await this.$store.dispatch("memberDetails/getUsersName", data);
    },

    // async getMemberList(value) {
    //   this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

    //   let data = {
    //     accessLevel: "CompanyMaster",
    //     currencyRate: 1,
    //     filter: this.selectedItems,
    //     page: 1,
    //     _accessToken: this.accessToken,
    //   };

    //   try {
    //     const response = await this.$axios({
    //       method: "Post",
    //       baseURL: process.env.API_BASE_URL,
    //       url: "/api/Member/searchHierarchyWithoutPagination",
    //       data,
    //     });

    //     if (
    //       response &&
    //       response.data &&
    //       response.data.data &&
    //       response.data.data.data
    //     ) {
    //       if (value.length === 0) {
    //         this.items = response.data.data.data;
    //       } else {
    //         const resData = response.data.data.data;

    //         this.records = resData.filter((singleUser) => {
    //           return value.includes(singleUser.username);
    //         });
    //       }
    //     }
    //   } catch (error) {
    //     console.log("errorrr>>>>", error);
    //   }
    // },
  },
  created() {
    this.getMemberList(this.form);
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
