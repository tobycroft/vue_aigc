<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>我的信息</v-tab>
    <v-tab>API</v-tab>

  </v-tabs>

  <info v-if="tab===0"></info>
  <api v-if="tab===1"></api>


</template>

<script>
import Topheader from "@/components/topheader.vue";
import info from "@/app/v1/user/info.vue";
import api from "@/app/v1/user/api.vue";

export default {
  components: {info, api, Topheader},
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
