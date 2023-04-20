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
              to: "/user-access-level",
              icon: "mdi-chart-bubble",
            },
          ],
        },
        {
          title: "Book Management",
          icon: "mdi-tennis",
          subLinks: [
            {
              title: "Bet Ticker",
              to: "bet-ticker",
              icon: "mdi-chart-bubble",
            },
            {
              title: "Premium Sportsbook",
              to: "premium-sportsbook",
              icon: "mdi-trophy",
            },
          ],
        },
        {
          icon: "mdi-tennis",
          title: "Account Statement",
          subLinks: [
            {
              title: "My P/L",
              to: "/master-dashboard",
              icon: "mdi-chart-bubble",
            },
            {
              title: "Player P/L",
              to: "/pl-statement",
              icon: "mdi-chart-bubble",
            },
            {
              title: "Transfer Statement",
              to: "/transfer-statement",
              icon: "mdi-chart-bubble",
            },
          ],
        },
        {
          icon: "mdi-apps",
          title: "Member List",
          to: "/",
        },
        {
          icon: "mdi-view-dashboard",
          title: "Dashboard",
          to: "/",
        },
        {
          icon: "mdi-trophy",
          title: "Tournaments",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Login",
          to: "/login",
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
