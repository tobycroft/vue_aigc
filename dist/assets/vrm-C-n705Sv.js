import { T as Topheader } from "./topheader-tsRBQJOy.js";
import { _ as _export_sfc, a5 as __vitePreload, o as openBlock, c as createBlock, a0 as createElementBlock, v as createVNode, y as withCtx, a2 as Fragment, a6 as VCardTitle, z as createTextVNode, $ as withModifiers, G as createBaseVNode, E as VBtn, B as resolveComponent } from "./index-g6RCWvBw.js";
import { V as VContainer } from "./VContainer-WMbP03BJ.js";
import { T as TokenModel } from "./TokenModel-fnmBdSAh.js";
import { V as VForm } from "./VForm-D-VR7ToO.js";
import { V as VTextField } from "./VTextField-BLd5DeHs.js";
import "./gobotq-CybS7j7m.js";
import "./index-pryuJT9q.js";
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
      const vrma = await loadVRMAnimation("https://raw.githubusercontent.com/josephrocca/ChatVRM-js/main/idle_loop.vrma");
      this.viewer.model.loadAnimation(vrma);
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
const vrm$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8ef2c87a"]]);
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
      height: screen.height / 3
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
    }
  }
};
const _hoisted_1 = { class: "d-flex flex-column" };
const _hoisted_2 = { class: "d-flex flex-column" };
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
        createVNode(VCardTitle, null, {
          default: withCtx(() => [
            createTextVNode("VRM语音+显示")
          ]),
          _: 1
        }),
        createVNode(VForm, {
          onSubmit: withModifiers($options.updateMessage, ["prevent"])
        }, {
          default: withCtx(() => [
            createVNode(VTextField, {
              modelValue: $data.message,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.message = $event),
              label: "这里输入你想让VRM说的话"
            }, null, 8, ["modelValue"]),
            createBaseVNode("div", _hoisted_1, [
              createVNode(VBtn, {
                size: "large",
                type: "submit",
                color: "primary",
                class: "mt-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("确认")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["onSubmit"]),
        createVNode(VCardTitle, null, {
          default: withCtx(() => [
            createTextVNode("VRM语音+聊天")
          ]),
          _: 1
        }),
        createVNode(VForm, {
          onSubmit: withModifiers($options.chatMessage, ["prevent"])
        }, {
          default: withCtx(() => [
            createVNode(VTextField, {
              modelValue: $data.message,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.message = $event),
              label: "这里输入你想和VRM聊的内容，AI会自动回复你"
            }, null, 8, ["modelValue"]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(VBtn, {
                size: "large",
                type: "submit",
                color: "primary",
                class: "mt-4"
              }, {
                default: withCtx(() => [
                  createTextVNode("确认")
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["onSubmit"]),
        createVNode(VBtn, {
          onClick: $options.idle,
          color: "green",
          class: "mt-4"
        }, {
          default: withCtx(() => [
            createTextVNode("IDLE")
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })
  ], 64);
}
const vrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-95ae3cea"]]);
export {
  vrm as default
};
