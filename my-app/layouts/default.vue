<template>
  <v-app dark>
    <div v-if="accessToken">
      <header-bar style="left: 0" />
      <side-bar />
    </div>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderBar from "@/components/layouts/HeaderBar.vue";
import sideBar from "@/components/layouts/sideBar.vue";
export default {
  name: "Default",
  components: {
    HeaderBar,
    sideBar,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      right: true,
      titles: "",
      accessToken: null,
    };
  },
  mounted() {
    this.accessToken = JSON.parse(localStorage.getItem("accessToken"));
    if (!this.accessToken) {
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
.container {
  max-width: 100% !important;
  padding: 0;
}
</style>
