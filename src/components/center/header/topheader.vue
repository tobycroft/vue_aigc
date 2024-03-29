<template>
  <v-toolbar app color="#222222">
    <!--    <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>-->

    <v-icon size="60px" @click="navigateTo('/center')">
      <v-img src="@/assets/gobotq.png"></v-img>
    </v-icon>
    <v-toolbar-title>GobotQ控制台</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="navigateTo('/center/bot')">机器人控制</v-btn>
    <v-btn text @click="navigateTo('/center/group')">群管理</v-btn>
    <v-btn text @click="navigateTo('/center/index')">发现</v-btn>
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
