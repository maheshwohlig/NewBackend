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
                color="#e76f26"
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
                  <tbody
                    v-if="
                      membersData &&
                      membersData.data &&
                      membersData.data.results &&
                      membersData.data.results.length > 0
                    "
                  >
                    <tr
                      v-for="(memberList, i) in membersData.data.results"
                      :key="i"
                    >
                      <td>{{ i }}</td>
                      <td>{{ memberList.username }}</td>
                      <td>{{ memberList.currency.name }}</td>
                      <td>{{ memberList.creditLimit }}</td>
                      <td>{{ memberList.netExposure }}</td>
                      <td>0</td>
                      <td>0</td>
                      <td>{{ memberList.status }}</td>
                      <td>
                        <v-icon>mdi-alpha-i-circle-outline</v-icon>
                      </td>
                      <td>
                        <v-icon
                          size="22"
                          @click="memberDetails()"
                          color="#e76f26"
                          >mdi-eye</v-icon
                        >
                      </td>
                      <td>
                        <v-icon
                          size="22"
                          @click="newMember('Edit')"
                          color="#e76f26"
                          >mdi-pen</v-icon
                        >
                      </td>
                      <td class="d-flex align-center">
                        <v-icon size="22" @click="showModal()" color="#e76f26"
                          >mdi-lock</v-icon
                        >
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>

              <member_accessDetails
                @clicked="onClickChild"
                :visible="isModalVisible"
              />

              <v-flex xs12 md3>
                <v-pagination
                  v-model="pagination.page"
                  v-on:click.native="paginationNav(pagination.page)"
                  :length="15"
                  :total-visible="7"
                ></v-pagination>
              </v-flex>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import member_accessDetails from "./model/member_accessDetails.vue";

export default {
  components: { member_accessDetails },
  name: "IndexPage",

  data() {
    return {
      pagination: {
        page: 1,
        total: 0,
        perPage: 0,
        visible: 7,
      },
      changeTitle: "",
      isModalVisible: false,
      data: {},
      membersLists: [],
      accessToken: "",
    };
  },

  computed: {
    ...mapState({
      membersData: (state) => state.memberList.membersData,
    }),
  },

  methods: {
    async getMemberList(page) {
      this.accessToken = JSON.parse(localStorage.getItem("accessToken"))[0];
      this.data = {
        page: page ? page : 1,
        type: "",
        keyword: "",
        _accessToken: this.accessToken,
      };
      await this.$store.dispatch("memberList/getMemberList", this.data);
    },
    memberDetails() {
      this.$router.push("/memberDetails");
    },

    paginationNav(data) {
      this.getMemberList(data);
    },

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

  created() {
    this.getMemberList();
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
