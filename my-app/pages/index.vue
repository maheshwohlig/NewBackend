<template>
  <div>
    <v-container>
      <v-card>
        <v-row class="m-0">
          <v-col class="pt-4 pl-6" cols="12" sm="6" md="6">
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
          <v-col class="d-flex align-center">
            <div>
              <v-btn
                @click="newMember('Create')"
                color="error"
                class="py-6 px-6 rounded-pill"
              >
                <v-icon>mdi-account-plus</v-icon>Create New</v-btn
              >
            </div></v-col
          >
        </v-row>

        <v-row justify="center">
          <v-col cols="12">
            <div>
              <v-simple-table class="py-1 px-3 elevation-1">
                <template v-slot:default>
                  <thead>
                    <tr class="grey lighten-25">
                      <th class="text-left">#</th>
                      <th class="text-left">UserName</th>
                      <th class="text-left">Currency</th>
                      <th class="text-left">Credit Limit</th>
                      <th class="text-left">Net Exposure</th>
                      <th class="text-left">Take</th>
                      <th class="text-left">Give</th>
                      <th class="text-left">Status</th>
                      <th class="text-left">Info</th>
                      <th class="text-left">Detail</th>
                      <th class="text-left">Action</th>
                      <th class="text-left">Lock</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>bunny</td>
                      <td>POINT@1</td>
                      <td>1,00,000</td>
                      <td>NA</td>
                      <td>0</td>
                      <td>0</td>
                      <td>Active</td>
                      <td>
                        <v-icon>mdi-alpha-i-circle-outline</v-icon>
                      </td>
                      <td>
                        <v-btn to="/memberDetails"
                          ><v-icon>mdi-eye</v-icon></v-btn
                        >
                      </td>
                      <td>
                        <v-btn @click="newMember('Edit')"
                          ><v-icon>mdi-pen</v-icon></v-btn
                        >
                      </td>
                      <td class="lockIcon d-flex align-center">
                        <v-btn @click="showModal()"
                          ><v-icon>mdi-lock</v-icon></v-btn
                        >
                        <member-lists
                          @clicked="onClickChild"
                          :visible="isModalVisible"
                        />
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <v-flex xs12 md3 class="">
                <v-pagination :length="15" :total-visible="7"></v-pagination>
              </v-flex>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import MemberLists from "./model/memberlists.vue";
export default {
  components: { MemberLists },
  name: "IndexPage",
  data() {
    return {
      changeTitle: "",
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    onClickChild(value) {
      this.isModalVisible = value;
    },
    newMember(data) {
      this.$router.push({
        path: `member/${data}`,
        query: {
          memberId: "13312312",
        },
      });
    },
  },
};
</script>
<style scoped>
.lockIcon {
  padding: 0 !important;
}
.v-text-field--outlined >>> fieldset {
  border-color: rgba(218, 118, 41, 0.986);
}
</style>
