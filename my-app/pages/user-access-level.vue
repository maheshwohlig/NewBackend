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
                Create</v-btn
              >
            </div></v-col
          >
          <v-col class="d-flex align-center justify-start" sm="1" md="1">
            Total : 25
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <div>
      <v-container>
        <v-card class="pa-10 mb-5">
          <v-row justify="center">
            <v-col cols="12">
              <div>
                <v-simple-table
                  v-if="usersData.length > 0"
                  class="py-1 px-3 elevation-1"
                >
                  <template v-slot:default>
                    <thead>
                      <tr class="grey lighten-25">
                        <th class="text-left">#</th>
                        <th class="text-left">User Name</th>
                        <th class="text-left">Status</th>
                        <th class="text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody v-for="(user, i) in usersData" :key="i">
                      <tr>
                        <td>{{ i }}</td>
                        <td>{{ user.username }}</td>
                        <td>
                          <v-btn color="green" class="py-2 px-6 rounded-pill">{{
                            user.status
                          }}</v-btn>
                        </td>
                        <td>
                          <v-btn color="#e76f26" class="py-2 px-6 rounded-pill">
                            Edit
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-flex xs12 md3>
                  <v-pagination :length="15" :total-visible="7"></v-pagination>
                </v-flex>
              </div>
            </v-col>
          </v-row>
          <div v-if="usersData.length === 0" class="SearchContainer">
            Search result will be listed here.
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersData: [],
    };
  },

  methods: {
    async getUserData(value) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];

      let data = {
        keyword: "",
        page: 1,
        _accessToken: this.accessToken,
      };

      try {
        const response = await this.$axios({
          method: "Post",
          baseURL: process.env.API_BASE_URL,
          url: "/api/User/getMyUsers",
          data,
        });

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.results
        ) {
          this.usersData = response.data.data.results;
          console.log("userData>>>", this.usersData);
        }
      } catch (error) {
        console.log("errorrr>>>>", error);
      }
    },
  },
  created() {
    this.getUserData(this.selectedItems);
  },
};
</script>

<style scoped>
.SearchContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border: 1px solid rgb(120, 117, 117);
}
</style>
