<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <top_header></top_header>
    <v-container>
      <v-stepper-header>AIGC主页面</v-stepper-header>
    </v-container>

    <v-container>
      <v-stepper-header>当前为控制中心</v-stepper-header>
      <v-card-text>当前为测试版</v-card-text>
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

import top_header from "@/components/topheader.vue";
import TokenModel from "@/model/TokenModel.js";
import Alert from "@/plugins/Alert.js";

export default {
  components: {top_header: top_header},
  data: () => ({}),
  mounted() {
    if (!TokenModel.Api_is_login()) {
      Alert.SetGo("/")
      Alert.SetAlert("未登录")
    }
  },
  methods: {},

};
</script>
