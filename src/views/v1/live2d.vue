<template>
  <topheader></topheader>
  <v-container>
    <v-card>当前状态:{{ currentState }}
    </v-card>
    <v-card class="ma-2">
      <v-card-title>Live2d智能展示</v-card-title>
      <v-text-field v-model="message" label="这里输入你想让VRM说的话"></v-text-field>
      <v-btn @click="updateMessage" size="large" color="primary" class="mt-4 ma-2">使用TTS生成语音</v-btn>
      <v-btn @click="chatMessage" size="large" type="submit" color="primary" class="mt-4 ma-2">发送到GPT聊天</v-btn>
      <v-btn @click="startSpeechRecognition(true)" size="large" type="submit" color="primary" class="mt-4 ma-2">使用自动聊天</v-btn>
    </v-card>
    <!--    <v-card class="ma-2">-->
    <!--      <v-card-title>L2D作控制</v-card-title>-->
    <!--      <v-btn @click="idle" color="green" class="mt-4 ma-2">IDLE</v-btn>-->
    <!--    </v-card>-->
    <v-card class="ma-2">
      <v-card-title>语音识别</v-card-title>
      <v-btn color="red" @click="startSpeechRecognition" class="ma-2">Start Recognition</v-btn>
      <v-btn color="grey" @click="stopSpeechRecognition" class="ma-2">Stop Recognition</v-btn>
    </v-card>
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
import live2d from '@/lib/l2d/main.vue'
import TokenModel from "@/model/TokenModel.js";
import vrm from "@/lib/vrm/main.vue";

export default {
  name: 'App',
  components: {
    vrm,
    Topheader,
    live2d,
    // Live,
  },
  data() {
    return {
      currentState: "无状态",
      recognition: new webkitSpeechRecognition(),
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
      this.currentState = "正在发声……"
      this.doAction("say", this.message)
    },
    chatMessage() {
      this.currentState = "正在生成答案……"
      this.doAction("chat", this.message)
    },
    idle() {
      this.doAction("idle", this.message)
    },
    doAction(type, text) {
      localStorage.setItem("doAction", JSON.stringify({
        type: type,
        text: text
      }))
    },
    startSpeechRecognition(auto = false) {
      this.recognition.lang = ['zh-CN'];

      // this.recognition.lang = 'en-US'; // 设置识别语言为英语，可以根据需要修改
      this.currentState = "语音识别中……"
      this.recognition.onresult = (event) => {
        this.message = event.results[0][0].transcript;
        if (auto) {
          this.chatMessage()
        }
      };

      this.recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };
      this.recognition.onend = () => {
        this.currentState = "语音识别完成"
        console.log('Speech recognition ended.');
      };
      this.recognition.start();
    },
    stopSpeechRecognition() {
      this.currentState = "语音识别停止"
      this.recognition.stop(); // 停止语音识别
    },
  }
}
</script>

<style>
</style>