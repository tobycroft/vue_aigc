import { T as Topheader } from "./topheader-CHB2pZSk.js";
import { _ as _export_sfc, a5 as __vitePreload, o as openBlock, c as createBlock, a0 as createElementBlock, v as createVNode, y as withCtx, a2 as Fragment, a6 as VCardTitle, z as createTextVNode, $ as withModifiers, G as createBaseVNode, E as VBtn, B as resolveComponent } from "./index-KwTp66Fd.js";
import { V as VContainer } from "./VContainer-BqnsARYB.js";
import { V as VForm } from "./VForm-C_eKDtU4.js";
import { V as VTextField } from "./VTextField-B_h-dY-c.js";
import "./gobotq-CybS7j7m.js";
import "./index-BtsNw6wv.js";
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
  data() {
    return {
      message: ""
    };
  },
  async mounted() {
    const Viewer = await __vitePreload(() => import("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.28/features/vrmViewer/viewer.js"), true ? [] : void 0).then((m) => m.Viewer);
    let viewer = null;
    viewer = new Viewer();
    const canvas = document.createElement("canvas");
    canvas.height = this.height ? this.height : 300;
    canvas.width = this.width ? this.width : 300;
    document.getElementById("canvas").appendChild(canvas);
    viewer.setup(canvas);
    await viewer.loadVrm("https://raw.githubusercontent.com/josephrocca/ChatVRM-js/main/avatars/AvatarSample_B.vrm");
    viewer.model.emoteController.playEmotion("relaxed");
    await viewer.model.loadAnimation("https://cdn.jsdelivr.net/gh/josephrocca/ChatVRM-js@v0.0.28/OpenCharacters/animations/silly_dancing.fbx");
  },
  methods: {}
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, { id: "canvas" });
}
const vrm$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-8e0d28bd"]]);
const _sfc_main = {
  name: "App",
  components: {
    Topheader,
    vrm: vrm$1
  },
  data() {
    return {
      message: ""
    };
  },
  async mounted() {
  },
  methods: {
    updateMessage() {
    },
    chatMessage() {
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
          height: 300,
          width: 300
        }),
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
        }, 8, ["onSubmit"])
      ]),
      _: 1
    })
  ], 64);
}
const vrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3ff224cb"]]);
export {
  vrm as default
};
