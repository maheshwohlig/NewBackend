<template>
  <v-app dark>
    <header-bar style="left: 0" />
    <side-bar />
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
    };
  },
};
</script>
<style scoped>
nav,
main {
  margin-top: 4rem !important;
  max-height: calc(100% - 100px) !important;
}
.container {
  max-width: 100% !important;
}
</style>
