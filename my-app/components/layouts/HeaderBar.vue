<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <div class="LogoImg">
      <router-link to="/">
        <v-img height="inherit" :src="require('@/assets/Img/logo.png')"></v-img>
      </router-link>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  name: "HeaderBar",
  data() {
    return { clipped: false };
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
};
</script>
<style scoped>
.LogoImg {
  width: 200px;
}
</style>
