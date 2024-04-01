<script>

const Viewer = (await import("https://ai.aerofsx.com:444/vrm/features/vrmViewer/viewer.js")).Viewer;
let viewer = null;
viewer = new Viewer();

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
  async created() {

  },
  data() {
    return {
      message: "",
      AudioStream: new Audio(),
    }
  },
  async mounted() {
    setInterval(this.say, 500)


    const canvas = document.createElement("canvas");
    canvas.height = this.height ? this.height : 300;
    canvas.width = this.width ? this.width : 300;
    //attach the canvas to the DOM which id is "canvas"
    document.getElementById("canvas").appendChild(canvas);
    // document.body.appendChild(canvas);
    // canvas.style.cssText = "width:300px; height:300px; display:block;";
    // document.body.style.cssText = "margin:0; padding:0;";

    viewer.setup(canvas);

    await viewer.loadVrm("https://ai.aerofsx.com:444/vrm/avatars/AvatarSample_B.vrm");

    viewer.model.emoteController.playEmotion("relaxed"); // Valid expressions: neutral, happy, angry, sad, relaxed
    // await viewer.model.loadAnimation("https://ai.aerofsx.com:444/vrm/OpenCharacters/animations/silly_dancing.fbx");
    // await viewer.model.loadAnimation("https://ai.aerofsx.com:444/vrm/OpenCharacters/animations/angry.fbx");

    // if (!navigator.userActivation?.hasBeenActive) {
    //   await new Promise(resolve => window.addEventListener("click", resolve, {once: false}));
    // }

    // let arrayBuffer = await fetch("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.22/OpenCharacters/dummy-audio/12.mp3").then(r => r.arrayBuffer());
    // await viewer.model.speak(arrayBuffer, {expression: "happy"});
  },
  methods: {
    async say() {
      const action = localStorage.getItem("doAction")
      if (action) {
        localStorage.removeItem("doAction")
        try {
          const act = JSON.parse(action)
          switch (act.type) {
            case "say":
              this.speak(act["text"])
              break

            case "chat":
              this.chat(act["text"])
              break

            default:
              console.log(act)

          }

        } catch (e) {
          console.log("doAction-error", e)
        }
      }
    },
    async speak(msg) {
      this.iflyVoice(msg)
    },
    async iflyVoice(msg = '') {
      let fm = new FormData();
      fm.set("message", msg)
      const audio = await this.Post(`${this.aigcUrl}/v1/iflytek/tts/auto`, fm)
      // play audio stream and make it play as blob as background level
      try {
        const blob = await audio.blob()
        // this.AudioStream = new Audio()
        let arrayBuffer = await fetch(URL.createObjectURL(blob)).then(r => r.arrayBuffer());
        await viewer.model.speak(arrayBuffer, {expression: "happy"});

        this.AudioStream.src = URL.createObjectURL(blob)
        this.AudioStream.play()
      } catch (e) {
        console.log("iflyVoice-error", e)
      }
    },
    async chat(msg) {
      let fd = new FormData();
      fd.set("message", msg)
      fd.set("chat_id", "111")
      let ret = await (await this.Post(`${this.aigcUrl}/v1/fastgpt/api/auto`, fd)).json();
      if (ret.code !== 0) {
        console.log("chat-error", ret.echo)
      }
      this.speak(ret.echo)
      return ret.echo
    },
    async Post(url, data) {
      return await fetch(url, {
        method: 'POST',
        headers: {
          uid: this.uid,
          token: this.token
        },
        body: data,
        mode: 'cors',
        credentials: 'include',
        // timeout: 1000
      })
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
