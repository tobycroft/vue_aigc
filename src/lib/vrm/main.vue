<script>

const Viewer = await import("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.28/features/vrmViewer/viewer.js").then(m => m.Viewer);
let viewer = null;

export default {
  name: 'App',
  components: {
    // Live,
  },
  props: {
    aigcUrl: {
      default: 'https://aigc.aerofsx.com:444',
      type: String
    },
    sdkUrl: {
      default: '',
      type: String,
    },
    model: {
      default: () => ['Potion-Maker/Pio', 'school-2017-costume-yellow'],
      type: Array
    },
    homePage: {
      default: 'https://ai.aerofsx.com:444',
      type: String
    },
    width: {
      default: 0,
      type: Number
    },
    height: {
      default: 0,
      type: Number
    },
    size: {
      default: 255,
      type: Number
    },
    uid: {
      default: 0,
    },
    token: {
      default: "",
    }
  },
  data() {
    return {
      message: "",
    }
  },
  async mounted() {

    viewer = new Viewer();

    const canvas = document.createElement("canvas");
    canvas.height = this.height ? this.height : 300;
    canvas.width = this.width ? this.width : 300;
    //attach the canvas to the DOM which id is "canvas"
    document.getElementById("canvas").appendChild(canvas);
    // document.body.appendChild(canvas);
    // canvas.style.cssText = "width:300px; height:300px; display:block;";
    // document.body.style.cssText = "margin:0; padding:0;";

    viewer.setup(canvas);

    await viewer.loadVrm("https://raw.githubusercontent.com/josephrocca/ChatVRM-js/main/avatars/AvatarSample_B.vrm");

    viewer.model.emoteController.playEmotion("relaxed"); // Valid expressions: neutral, happy, angry, sad, relaxed

    await viewer.model.loadAnimation("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.28/OpenCharacters/animations/silly_dancing.fbx");

    // if (!navigator.userActivation?.hasBeenActive) {
    //   await new Promise(resolve => window.addEventListener("click", resolve, {once: false}));
    // }

    // let arrayBuffer = await fetch("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.22/OpenCharacters/dummy-audio/12.mp3").then(r => r.arrayBuffer());
    // await viewer.model.speak(arrayBuffer, {expression: "happy"});
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
  <v-container id="canvas">
  </v-container>

</template>

<style scoped>
/* Add any necessary styles here */
</style>
