<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>API</v-tab>

  </v-tabs>

  <api v-if="tab===1"></api>


</template>

<script>
import Topheader from "@/components/topheader.vue";
import api from "@/app/v1/user/api.vue";

export default {
  components: {api, Topheader},
  data() {
    return {
      tab: 0
    };
  },
  methods: {
    changetab() {
      // set tab to query
      this.$router.push({query: {tab: this.tab}});
    },
  },
  mounted() {
    if (this.$route.query.tab) {
      let tab = parseInt(this.$route.query.tab)
      if (tab || tab === 0) {
        this.tab = parseInt(this.$route.query.tab);
      } else {
        this.tab = this.$route.query.tab;
      }
    }
  },
};
</script>
