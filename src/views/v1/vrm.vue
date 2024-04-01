<script>
import Topheader from "@/components/center/header/topheader.vue";
import live2d from "@/lib/l2d/main.vue";

const Viewer = await import("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.28/features/vrmViewer/viewer.js").then(m => m.Viewer);
let viewer = null;

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
    }
  },
  async mounted() {

    viewer = new Viewer();

    const canvas = document.createElement("canvas");
    canvas.height = 300;
    canvas.width = 300;
    //attach the canvas to the DOM which id is "canvas"
    document.getElementById("canvas").appendChild(canvas);
    // document.body.appendChild(canvas);
    // canvas.style.cssText = "width:300px; height:300px; display:block;";
    // document.body.style.cssText = "margin:0; padding:0;";

    viewer.setup(canvas);

    await viewer.loadVrm("https://raw.githubusercontent.com/josephrocca/ChatVRM-js/main/avatars/AvatarSample_B.vrm");

    viewer.model.emoteController.playEmotion("angry"); // Valid expressions: neutral, happy, angry, sad, relaxed

    await viewer.model.loadAnimation("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.28/OpenCharacters/animations/silly_dancing.fbx");

    if (!navigator.userActivation?.hasBeenActive) {
      await new Promise(resolve => window.addEventListener("click", resolve, {once: true}));
    }

    let arrayBuffer = await fetch("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.22/OpenCharacters/dummy-audio/12.mp3").then(r => r.arrayBuffer());
    await viewer.model.speak(arrayBuffer, {expression: "happy", volume: 0});
  },
  methods: {
    updateMessage() {

    },
    chatMessage() {

    }
  },
}
</script>

<template>
  <Topheader></Topheader>
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
  <v-card id="canvas">

  </v-card>
</template>

<style scoped>
/* Add any necessary styles here */
</style>
