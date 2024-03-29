<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>我的信息</v-tab>
    <v-tab>我的团队</v-tab>

  </v-tabs>

  <myInfo v-if="tab===0"></myInfo>


</template>

<script>
import Topheader from "@/components/center/header/topheader.vue";
import myInfo from "@/views/v1/user/myInfo.vue"; // 引入 Net 方法

export default {
  components: {myInfo, Topheader},
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
