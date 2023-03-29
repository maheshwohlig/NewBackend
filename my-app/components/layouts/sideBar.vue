<template>
  <div>
    <v-navigation-drawer class="sideBar" v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <div v-if="item.logout">
            <v-list-item-title
              ><v-btn @click="logout()">{{ item.logout }}</v-btn>
            </v-list-item-title>
          </div>
        </v-list-item>
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
          icon: "mdi-chart-bubble",
          title: "Login",
          to: "/login",
        },
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          logout: "Logout",
          to: "/login",
        },
      ],
      right: true,
      titles: "",
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
</style>
