<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>我的信息</v-tab>

  </v-tabs>

  <info v-if="tab===0"></info>


</template>

<script>
import Topheader from "@/components/topheader.vue";
import info from "@/app/v1/user/info.vue";

export default {
  components: {info, Topheader},
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
