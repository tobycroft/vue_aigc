<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <Topheader></Topheader>
    <v-tabs v-model="tab" @click="changetab"
            fixed-tabs
            bg-color="indigo-darken-2"
    >
      <v-tab>添加我的机器人</v-tab>

    </v-tabs>
    <!-- 主页面内容区域 -->
    <BotRequest v-if="tab===0"></BotRequest>
  </v-app>

</template>


<script>

import {defineComponent} from "vue";
import BotRequest from "@/views/v1/index/BotRequest.vue";
import Topheader from "@/components/center/header/topheader.vue";

export default defineComponent({
  components: {Topheader, BotRequest},
  computed: {},
  mounted() {
  },
  data: () => ({
    tab: '',
  }),
  methods: {
    changetab() {
      // console.log(this.tab)
    },
  },
})

</script>

<style scoped>

</style>
