<template>
  <v-toolbar app color="#222222">
    <!--    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>-->

    <v-icon size="60px" @click="navigateTo('/center')">
      <v-img src="@/assets/gobotq.png"></v-img>
    </v-icon>
    <v-toolbar-title>AIGC-Web</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="navigateTo('/v1/calling')">通信聊天</v-btn>
    <v-btn @click="navigateTo('/v1/vrm')">VRM体验</v-btn>
    <v-btn @click="navigateTo('/v1/live2d')">Live2D</v-btn>
    <v-btn @click="navigateTo('/v1/team')">团队</v-btn>
    <v-btn @click="navigateTo('/v1/key')">API能力</v-btn>
    <v-btn @click="navigateTo('/v1/combi')">API+底层混合</v-btn>
    <v-btn @click="navigateTo('/v1/aigc')">底层能力</v-btn>
    <v-btn @click="navigateTo('/v1/user')">我的</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo(tab) {
      // 使用路由导航到指定的页面
      this.$router.push(tab);
    },
    toggleDrawer() {
      // 可选：在这里添加抽屉的显示/隐藏逻辑
    },
  },
}
</script>
