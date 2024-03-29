<template>
  <Topheader></Topheader>

  <v-tabs v-model="tab" @click="changetab"
          fixed-tabs
          bg-color="indigo-darken-2"
  >
    <v-tab>我的信息</v-tab>

  </v-tabs>

  <My v-if="tab===0"></My>


</template>

<script>
import Topheader from "@/components/center/header/topheader.vue";
import My from "@/views/v1/user/myInfo.vue"; // 引入 Net 方法

export default {
  components: {My, Topheader},
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
