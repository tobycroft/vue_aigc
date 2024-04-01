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
  async mounted() {

    viewer = new Viewer();

    const canvas = document.createElement("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    document.body.appendChild(canvas);
    canvas.style.cssText = "width:300; height:300; display:block;";
    document.body.style.cssText = "margin:0; padding:0;";

    viewer.setup(canvas);

    await viewer.loadVrm("https://raw.githubusercontent.com/josephrocca/ChatVRM-js/main/avatars/AvatarSample_B.vrm");

    viewer.model.emoteController.playEmotion("happy"); // Valid expressions: neutral, happy, angry, sad, relaxed

    await viewer.model.loadAnimation("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.28/OpenCharacters/animations/silly_dancing.fbx");

    if (!navigator.userActivation?.hasBeenActive) {
      await new Promise(resolve => window.addEventListener("click", resolve, {once: true}));
    }

    let arrayBuffer = await fetch("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.22/OpenCharacters/dummy-audio/12.mp3").then(r => r.arrayBuffer());
    await viewer.model.speak(arrayBuffer, {expression: "happy", volume: 0});
  }
}
</script>

<template>
  <div>
    <Topheader></Topheader>
    <div ref="container" style="width: 100vw; height: 100vh;"></div>
  </div>
</template>

<style scoped>
/* Add any necessary styles here */
</style>
