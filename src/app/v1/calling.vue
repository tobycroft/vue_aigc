<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>网页模拟</v-tab>

  </v-tabs>

  <qianwen v-if="tab===1"></qianwen>


</template>

<script>
import Topheader from "@/components/topheader.vue";
import qianwen from "@/app/v1/calling/qianwen.vue";

export default {
  components: {qianwen,Topheader},
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
