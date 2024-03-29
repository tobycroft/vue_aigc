<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <Topheader></Topheader>
    <v-container>
      <v-stepper-header>欢迎使用GobotQ</v-stepper-header>
      <v-card-text>这是GobotQ的首页，请通过顶部按钮进入功能</v-card-text>
      <v-card-text>相关功能还在从Flutter版本迁移到Vue版</v-card-text>
    </v-container>

    <v-container>
      <v-stepper-header>当前为控制中心</v-stepper-header>
      <v-card-text>未来将会在这里显示更多数据</v-card-text>
    </v-container>
    <!-- 主页面内容区域 -->
    <v-main>
      <!-- 根据路由显示不同的页面 -->
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>

import Topheader from "@/components/center/header/topheader.vue";

export default {
  components: {Topheader},
  data: () => ({}),
  mounted() {
  },
  methods: {},

};
</script>
