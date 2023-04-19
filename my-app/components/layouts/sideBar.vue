<template>
  <div>
    <v-navigation-drawer
      width="300"
      class="sideBar"
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <div v-for="(item, i) in items" :key="i">
          <v-list-item
            v-if="!item.subLinks"
            :key="i"
            :to="item.to"
            class="v-list-item"
          >
            <v-list-item-icon>
              <v-icon color="#FB8C00">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-else :key="item.text" no-action>
            <template v-slot:activator>
              <v-list-item class="px-0">
                <v-list-item-icon>
                  <v-icon color="#FB8C00">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="white--text">
                    {{ item.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item
              v-for="(sublink, i) in item.subLinks"
              :to="sublink.to"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title class="white--text">
                  {{ sublink.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "sideBar",
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          title: "Member",
          text: "Member",
          icon: "mdi-account-settings",
          subLinks: [
            {
              title: "Member List",
              to: "/",
              icon: "mdi-chart-bubble",
            },
            {
              title: "Hierarchy Search",
              to: "/hierarchy-search",
              icon: "mdi-chart-bubble",
            },
            {
              title: "User Access Level",
              to: "/",
              icon: "mdi-chart-bubble",
            },
          ],
        },
        {
          title: "Book Management",
          icon: "mdi-tennis",
          subLinks: [
            {
              title: "Net Exposure",
              to: "/memberDetails",
              icon: "mdi-chart-bubble",
            },
            {
              title: "Bet Ticker",
              to: "model/memberLists",
              icon: "mdi-chart-bubble",
            },
          ],
        },
        {
          icon: "mdi-chart-bubble",
          title: "Login",
          to: "/login",
        },
        {
          icon: "mdi-apps",
          title: "Member List",
          to: "/",
        },
        {
          to: "/memberNew",
          icon: "mdi-view-dashboard",
          title: "Dashboard",
        },
        {
          icon: "mdi-tennis",
          title: "Account Statement",
          subLinks: [
            {
              title: "Cricket_Players",
              to: "/memberDetails",
              icon: "mdi-chart-bubble",
            },
            {
              title: "Soccer_Players",
              to: "model/memberLists",
              icon: "mdi-chart-bubble",
            },
          ],
        },
        {
          to: "/",
          icon: "mdi-trophy",
          title: "Tournaments",
        },
        {
          logout: "Logout",
          icon: "mdi-trophy",
          to: "/login",
          title: "Logout",
        },
      ],
      right: true,
      title: "",
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters["sidebar/value"];
      },
      set(v) {
        return this.$store.commit("sidebar/toggle", v);
      },
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("accessToken");
    },
  },
};
</script>

<style scoped>
.sideBar {
  top: 62px !important;
}
.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 70px;
}
</style>
