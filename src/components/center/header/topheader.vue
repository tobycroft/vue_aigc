<template>
  <v-toolbar app color="#222222">
    <!--    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>-->

    <v-icon size="60px" @click="navigateTo('/center')">
      <v-img src="@/assets/gobotq.png"></v-img>
    </v-icon>
    <v-toolbar-title>AIGC-Web</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="navigateTo('/center/bot')">VRM体验</v-btn>
    <v-btn text @click="navigateTo('/center/group')">Live2D</v-btn>
<!--    <v-btn text @click="navigateTo('/center/index')">设置中心</v-btn>-->
    <v-btn text @click="navigateTo('/center/user')">我的</v-btn>
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
