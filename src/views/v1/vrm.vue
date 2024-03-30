<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <Topheader></Topheader>
    <v-tabs v-model="tab" @click="changetab"
            fixed-tabs
            bg-color="indigo-darken-2"
    >

      <v-tab>我管理的群</v-tab>
      <v-tab>我加入的群</v-tab>

      <v-tab>机器人加入的群</v-tab>

    </v-tabs>
    <!-- 主页面内容区域 -->
    <MyAdminGroup v-if="tab===0"></MyAdminGroup>
    <MyJoinGroup v-if="tab===1"></MyJoinGroup>
    <BotAdminGroup v-if="tab===2"></BotAdminGroup>
  </v-app>

</template>


<script>

import {defineComponent} from "vue";
import Topheader from "@/components/center/header/topheader.vue";
import BotAdminGroup from "@/views/v1/group/BotAdminGroup.vue";
import MyAdminGroup from "@/views/v1/group/MyAdminGroup.vue";
import MyJoinGroup from "@/views/v1/group/MyJoinGroup.vue";

export default defineComponent({
  components: {MyJoinGroup, MyAdminGroup, BotAdminGroup, Topheader},
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
