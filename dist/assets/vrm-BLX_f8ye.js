import { T as Topheader } from "./topheader-BYzeFyLp.js";
import { _ as _export_sfc, a5 as __vitePreload, o as openBlock, c as createBlock, a0 as createElementBlock, v as createVNode, y as withCtx, a2 as Fragment, W as VCard, a6 as VCardTitle, z as createTextVNode, E as VBtn, B as resolveComponent } from "./index-BmZsnFJT.js";
import { V as VContainer } from "./VContainer-BBX-5yLs.js";
import { T as TokenModel } from "./TokenModel-fnmBdSAh.js";
import { V as VTextField } from "./VTextField-C_BLe-pO.js";
import "./gobotq-CybS7j7m.js";
import "./index-DNWOVar3.js";
const _sfc_main$1 = {
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
      this.dance();
      await this.iflyVoice(msg);
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, { id: "canvas" });
}
const vrm$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-b12282ca"]]);
const _sfc_main = {
  name: "App",
  components: {
    Topheader,
    vrm: vrm$1
  },
  data() {
    return {
      message: "",
      uid: TokenModel.Api_find_uid(),
      token: TokenModel.Api_find_token(),
      width: screen.width,
      height: screen.height / 3,
      speechText: "",
      recognition: new webkitSpeechRecognition()
    };
  },
  async mounted() {
  },
  methods: {
    updateMessage() {
      this.doAction("say", this.message);
    },
    chatMessage() {
      this.doAction("chat", this.message);
    },
    idle() {
      this.doAction("idle", this.message);
    },
    doAction(type, text) {
      localStorage.setItem("doAction", JSON.stringify({
        type,
        text
      }));
    },
    startSpeechRecognition() {
      this.recognition.lang = "en-US";
      this.recognition.onresult = (event) => {
        this.message = event.results[0][0].transcript;
      };
      this.recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
      this.recognition.start();
    },
    stopSpeechRecognition() {
      this.recognition.stop();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Topheader = resolveComponent("Topheader");
  const _component_vrm = resolveComponent("vrm", true);
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Topheader),
    createVNode(VContainer, null, {
      default: withCtx(() => [
        createVNode(_component_vrm, {
          height: $data.height,
          width: $data.width,
          uid: $data.uid,
          token: $data.token
        }, null, 8, ["height", "width", "uid", "token"]),
        createVNode(VCard, { class: "ma-2" }, {
          default: withCtx(() => [
            createVNode(VCardTitle, null, {
              default: withCtx(() => [
                createTextVNode("VRM智能展示")
              ]),
              _: 1
            }),
            createVNode(VTextField, {
              modelValue: $data.message,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.message = $event),
              label: "这里输入你想让VRM说的话"
            }, null, 8, ["modelValue"]),
            createVNode(VBtn, {
              onClick: $options.updateMessage,
              size: "large",
              color: "primary",
              class: "mt-4 ma-2"
            }, {
              default: withCtx(() => [
                createTextVNode("使用TTS生成语音")
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(VBtn, {
              onClick: $options.chatMessage,
              size: "large",
              type: "submit",
              color: "primary",
              class: "mt-4 ma-2"
            }, {
              default: withCtx(() => [
                createTextVNode("发送到GPT聊天")
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        }),
        createVNode(VCard, { class: "ma-2" }, {
          default: withCtx(() => [
            createVNode(VCardTitle, null, {
              default: withCtx(() => [
                createTextVNode("VRM动作控制")
              ]),
              _: 1
            }),
            createVNode(VBtn, {
              onClick: $options.idle,
              color: "green",
              class: "mt-4 ma-2"
            }, {
              default: withCtx(() => [
                createTextVNode("IDLE")
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        }),
        createVNode(VCard, { class: "ma-2" }, {
          default: withCtx(() => [
            createVNode(VCardTitle, null, {
              default: withCtx(() => [
                createTextVNode("语音识别")
              ]),
              _: 1
            }),
            createVNode(VBtn, {
              color: "red",
              onClick: $options.startSpeechRecognition,
              class: "ma-2"
            }, {
              default: withCtx(() => [
                createTextVNode("Start Recognition")
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(VBtn, {
              color: "grey",
              onClick: $options.stopSpeechRecognition,
              class: "ma-2"
            }, {
              default: withCtx(() => [
                createTextVNode("Stop Recognition")
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ], 64);
}
const vrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a88b91c9"]]);
export {
  vrm as default
};
