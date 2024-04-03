<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>我的团队</v-tab>

  </v-tabs>

  <team v-if="tab===0"></team>
  <subtoken v-if="tab===1"></subtoken>


</template>

<script>
import Topheader from "@/components/topheader.vue";
import Team from "@/app/v1/team/team.vue";
import subtoken from "@/app/v1/team/subtoken.vue";

export default {
  components: {Team, subtoken, Topheader},
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
      this.tab = parseInt(this.$route.query.tab);
    }
  },
};
</script>
