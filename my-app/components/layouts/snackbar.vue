<template>
  <div>
    <v-snackbar
      v-for="(snackbarText, i) in snackbarTexts"
      :key="i"
      v-model="model"
      :style="{ 'margin-top': i * 60 + 'px' }"
      dark
      :color="$store.state.snackbar.color"
      top
      v-bind="$attrs"
      v-on="$listeners"
    >
      {{ snackbarText }}

      <template #action="{ attrs }">
        <v-btn text v-bind="attrs" @click="$store.commit('snackbar/close', i)">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Snackbar",
  computed: {
    ...mapState({
      snackbarTexts: (state) => state.snackbar.texts,
    }),
    created() {
      console.log("snackbarText>>", this.snackbarTexts);
    },
    model: {
      get() {
        return this.$store.getters["snackbar/model"];
      },
      set(v) {
        return this.$store.commit("snackbar/set_model", v);
      },
    },
  },
};
</script>
