<template>
  <topheader></topheader>
  <v-container>
    <v-card-title>L2D语音+显示</v-card-title>
    <v-form @submit.prevent="updateMessage">
      <v-text-field v-model="message" label="你想让L2D说什么"></v-text-field>
      <div class="d-flex flex-column">
        <v-btn size="large" type="submit" color="primary" class="mt-4">确认</v-btn>
      </div>
    </v-form>
    <v-card-title>L2D语音+聊天</v-card-title>
    <v-form @submit.prevent="chatMessage">
      <v-text-field v-model="message" label="输入聊天内容"></v-text-field>
      <div class="d-flex flex-column">
        <v-btn size="large" type="submit" color="primary" class="mt-4">确认</v-btn>
      </div>
    </v-form>
  </v-container>
  <live2d autofocus
          :style="style"
          :direction="direction"
          :size="size"
          :model="models"
          :uid="uid"
          :token="token"
          :aigcUrl="aigcUrl"
          :sdkUrl="sdkUrl"
          :apiKey="apiKey"

  ></live2d>
</template>

<script>
/*
 * 项目中引用包时，将 import 内容替换
 * import live2d from 'vue-live2d'
 */
import Topheader from "@/components/center/header/topheader.vue";
import live2d from '@/lib/main.vue'
import TokenModel from "@/model/TokenModel.js";

export default {
  name: 'App',
  components: {
    Topheader,
    live2d,
    // Live,
  },
  data() {
    return {
      message: "",
      direction: 'right',
      style: 'position: fixed; bottom: 0; right: 0;',
      width: screen.width / 3,
      height: screen.height / 3,
      // size: screen.width / 3,
      apiKey: "testtest",
      tips: {},
      // aigcUrl: "https://aigc.aerofsx.com:444",
      // sdkUrl: "http://127.0.0.1:84",
      models: ['ShizukuTalk/shizuku-48', 'default'],
      uid: TokenModel.Api_find_uid(),
      token: TokenModel.Api_find_token()
    }
  },
  created() {
  },
  methods: {
    updateMessage() {
      this.doAction("say", this.message)
    },
    chatMessage() {
      this.doAction("chat", this.message)
    },
    doAction(type, text) {
      localStorage.setItem("doAction", JSON.stringify({
        type: type,
        text: text
      }))
    }
  }
}
</script>

<style>
</style>