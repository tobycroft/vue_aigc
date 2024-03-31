<template>
  <topheader></topheader>
  <v-container>
    <v-card-title>创建团队信息</v-card-title>
    <v-form @submit.prevent="submitTeamInfo">
      <v-text-field v-model="message" label="你想让L2D说什么"></v-text-field>
      <div class="d-flex flex-column">
        <v-btn size="large" type="submit" color="primary" class="mt-4">确认</v-btn>
      </div>
    </v-form>
  </v-container>
  <live2d
      :style="style"
      :model="models"
      :direction="direction"
      :size="size"
      :api-key="apiKey"
      :aigc-url="aigcUrl"
      :sdk-url="sdkUrl"
      :doAction="doAction"
  ></live2d>
</template>

<script>
/*
 * 项目中引用包时，将 import 内容替换
 * import live2d from 'vue-live2d'
 */
import Topheader from "@/components/center/header/topheader.vue";
import live2d from '@/views/v1/live2d/index.vue'

export default {
  name: 'App',
  components: {
    Topheader,
    live2d
  },
  data() {
    return {
      message: "",
      direction: 'right',
      style: 'position: fixed; bottom: 0; right: 0;',
      // width: 800,
      // height: 800,
      size: 600,
      apiKey: "testtest",
      tips: {},
      aigcUrl: "http://127.0.0.1:84/v1",
      sdkUrl: "http://127.0.0.1:84/v1",
      models: ['ShizukuTalk/shizuku-48', 'default'],
      doAction: '',
    }
  },
  created() {
    // this.components.live2d.methods.showMessage("aaa", 2000)
    // live2d.methods.showMessage("aaa", 2000)
    // tips 未使用，可自行在组件绑定此参数，注意此参数只会初始化一次
    // this.tips = this.customTips
  },
  methods: {
    submitTeamInfo() {

    }
  }
}
</script>

<style>
</style>