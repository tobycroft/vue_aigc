import { T as Topheader } from "./topheader-0cCq9irW.js";
import { _ as _export_sfc, a0 as createElementBlock, v as createVNode, y as withCtx, a2 as Fragment, o as openBlock, a6 as VCardTitle, z as createTextVNode, $ as withModifiers, G as createBaseVNode, E as VBtn, B as resolveComponent } from "./index-CuxFFZ4S.js";
import { V as VContainer } from "./VContainer-DsjXmrYk.js";
import { V as VForm } from "./VForm-CesX6RsC.js";
import { V as VTextField } from "./VTextField-DeRscHrO.js";
import "./gobotq-CybS7j7m.js";
import "./index-CT8j0z4_.js";
const _sfc_main = {
  name: "App",
  components: {
    Topheader
    // vrm,
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
const vrm = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fc93bafc"]]);
export {
  vrm as default
};
