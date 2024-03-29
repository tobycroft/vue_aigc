<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>我的信息</v-tab>
    <v-tab>我的团队</v-tab>

  </v-tabs>

  <info v-if="tab===0"></info>
  <team v-if="tab===1"></team>


</template>

<script>
import Topheader from "@/components/center/header/topheader.vue";
import info from "@/views/v1/user/info.vue"; // 引入 Net 方法
import team from "@/views/v1/user/team.vue";

export default {
  components: {info, team, Topheader},
  data() {
    return {
      tab: 0
    };
  },
  methods: {},
  mounted() {
  },
};
</script>
