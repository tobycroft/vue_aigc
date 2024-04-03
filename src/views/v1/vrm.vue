<script>
import Topheader from "@/components/center/header/topheader.vue";
import vrm from '@/lib/vrm/main.vue'
import TokenModel from "@/model/TokenModel.js";


export default {
  name: 'App',
  components: {
    Topheader,
    vrm,
  },
  data() {
    return {
      message: "",
      uid: TokenModel.Api_find_uid(),
      token: TokenModel.Api_find_token(),
      width: screen.width,
      height: screen.height / 3,
      currentState: "无状态",
      recognition: new webkitSpeechRecognition(),
    }
  },
  async mounted() {

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
  },
}
</script>

<template>
  <Topheader></Topheader>
  <v-container>
    <vrm
        :height="height"
        :width="width"
        :uid="uid"
        :token="token"
    ></vrm>
    <v-card>当前状态:{{ currentState }}
    </v-card>
    <v-card class="ma-2">
      <v-card-title>VRM智能展示</v-card-title>
      <v-text-field v-model="message" label="这里输入你想让VRM说的话"></v-text-field>
      <v-btn @click="updateMessage" size="large" color="primary" class="mt-4 ma-2">使用TTS生成语音</v-btn>
      <v-btn @click="chatMessage" size="large" type="submit" color="primary" class="mt-4 ma-2">发送到GPT聊天</v-btn>
      <v-btn @click="startSpeechRecognition(true)" size="large" type="submit" color="primary" class="mt-4 ma-2">使用自动聊天</v-btn>
    </v-card>
    <v-card class="ma-2">
      <v-card-title>VRM动作控制</v-card-title>
      <v-btn @click="idle" color="green" class="mt-4 ma-2">IDLE</v-btn>
    </v-card>
    <v-card class="ma-2">
      <v-card-title>语音识别</v-card-title>
      <v-btn color="red" @click="startSpeechRecognition" class="ma-2">Start Recognition</v-btn>
      <v-btn color="grey" @click="stopSpeechRecognition" class="ma-2">Stop Recognition</v-btn>
    </v-card>
  </v-container>

</template>

<style scoped>
/* Add any necessary styles here */
</style>
