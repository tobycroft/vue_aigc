import { T as Topheader } from "./topheader-28P7Mrol.js";
import { v as vrm$1 } from "./main-IMLiTzNB.js";
import { T as TokenModel } from "./TokenModel-fnmBdSAh.js";
import { _ as _export_sfc, a0 as createElementBlock, v as createVNode, y as withCtx, a2 as Fragment, o as openBlock, W as VCard, z as createTextVNode, a6 as toDisplayString, a7 as VCardTitle, E as VBtn, B as resolveComponent } from "./index-DQIMGpmm.js";
import { V as VContainer } from "./VContainer-D2zSohrN.js";
import { V as VTextField } from "./VTextField-BZv9tI1p.js";
import "./gobotq-CybS7j7m.js";
import "./index-3ailoIQu.js";
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
      currentState: "无状态",
      recognition: new webkitSpeechRecognition()
    };
  },
  async mounted() {
  },
  methods: {
    updateMessage() {
      this.currentState = "正在发声……";
      this.doAction("say", this.message);
    },
    chatMessage() {
      this.currentState = "正在生成答案……";
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
    startSpeechRecognition(auto = false) {
      this.recognition.lang = ["zh-CN"];
      this.currentState = "语音识别中……";
      this.recognition.onresult = (event) => {
        this.message = event.results[0][0].transcript;
        if (auto) {
          this.chatMessage();
        }
      };
      this.recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
      };
      this.recognition.onend = () => {
        this.currentState = "语音识别完成";
        console.log("Speech recognition ended.");
      };
      this.recognition.start();
    },
    stopSpeechRecognition() {
      this.currentState = "语音识别停止";
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
        createVNode(VCard, null, {
          default: withCtx(() => [
            createTextVNode("当前状态:" + toDisplayString($data.currentState), 1)
          ]),
          _: 1
        }),
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
            }, 8, ["onClick"]),
            createVNode(VBtn, {
              onClick: _cache[1] || (_cache[1] = ($event) => $options.startSpeechRecognition(true)),
              size: "large",
              type: "submit",
              color: "primary",
              class: "mt-4 ma-2"
            }, {
              default: withCtx(() => [
                createTextVNode("使用自动聊天")
              ]),
              _: 1
            })
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
const vrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0c6e0c62"]]);
export {
  vrm as default
};
