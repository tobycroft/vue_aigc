import { _ as _export_sfc, a5 as __vitePreload, o as openBlock, c as createBlock } from "./index-DQIMGpmm.js";
import { V as VContainer } from "./VContainer-D2zSohrN.js";
const _sfc_main = {
  name: "App",
  components: {
    // Live,
  },
  props: {
    aigcUrl: {
      default: "https://aigc.aerofsx.com:444",
      type: String
    },
    sdkUrl: {
      default: "",
      type: String
    },
    model: {
      default: () => ["Potion-Maker/Pio", "school-2017-costume-yellow"],
      type: Array
    },
    homePage: {
      default: "https://ai.aerofsx.com:444",
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
      default: 0
    },
    token: {
      default: ""
    }
  },
  async created() {
  },
  async data() {
    return {
      message: "",
      AudioStream: new Audio(),
      viewer: null,
      ViewerJS: null
    };
  },
  async beforeMount() {
  },
  watch() {
  },
  async mounted() {
    this.ViewerJS = (await __vitePreload(() => import("https://vrm.ai.aerofsx.com:444/features/vrmViewer/viewer.js"), true ? [] : void 0)).Viewer;
    this.viewer = null;
    this.viewer = new this.ViewerJS();
    setInterval(this.say, 500);
    const canvas = document.createElement("canvas");
    canvas.height = this.height ? this.height : 300;
    canvas.width = this.width ? this.width : 300;
    document.getElementById("canvas").appendChild(canvas);
    this.viewer.setup(canvas);
    await this.viewer.loadVrm("https://vrm.ai.aerofsx.com:444/avatars/2368129704508832941.vrm");
    this.viewer.model.emoteController.playEmotion("neutral");
  },
  methods: {
    async say() {
      const action = localStorage.getItem("doAction");
      if (action) {
        localStorage.removeItem("doAction");
        try {
          const act = JSON.parse(action);
          switch (act.type) {
            case "say":
              this.speak(act["text"]);
              break;
            case "chat":
              this.chat(act["text"]);
              break;
            case "idle":
              this.idle();
              break;
            default:
              console.log(act);
          }
        } catch (e) {
          console.log("doAction-error", e);
        }
      }
    },
    async speak(msg) {
      await this.iflyVoice(msg);
      this.viewer.model.emoteController.playEmotion("neutral");
    },
    async iflyVoice(msg = "") {
      let fm = new FormData();
      fm.set("message", msg);
      const audio = await this.Post(`${this.aigcUrl}/v1/iflytek/tts/auto`, fm);
      try {
        const blob = await audio.blob();
        let arrayBuffer = await fetch(URL.createObjectURL(blob)).then((r) => r.arrayBuffer());
        await this.viewer.model.speak(arrayBuffer, { expression: "happy" });
      } catch (e) {
        console.log("iflyVoice-error", e);
      }
    },
    async chat(msg) {
      let fd = new FormData();
      fd.set("message", msg);
      fd.set("chat_id", "111");
      let ret = await (await this.Post(`${this.aigcUrl}/v1/fastgpt/api/auto`, fd)).json();
      if (ret.code !== 0) {
        console.log("chat-error", ret.echo);
      }
      this.speak(ret.echo);
      return ret.echo;
    },
    async dance() {
      this.viewer.model.loadAnimation("https://vrm.ai.aerofsx.com:444/OpenCharacters/animations/silly_dancing.fbx");
    },
    async idle() {
      this.viewer.model.loadAnimation("https://vrm.ai.aerofsx.com:444/idle_loop.vrma");
    },
    async Post(url, data) {
      return await fetch(url, {
        method: "POST",
        headers: {
          uid: this.uid,
          token: this.token
        },
        body: data,
        mode: "cors",
        credentials: "include"
        // timeout: 1000
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, { id: "canvas" });
}
const vrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d2d9b5f6"]]);
export {
  vrm as v
};
