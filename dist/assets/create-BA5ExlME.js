import { N as Net } from "./Net-BCAlBwwO.js";
import { _ as _export_sfc, c as createBlock, y as withCtx, o as openBlock, v as createVNode, z as createTextVNode, a6 as VCardTitle, G as createBaseVNode, E as VBtn, $ as withModifiers } from "./index-CQqqxKV4.js";
import { V as VContainer } from "./VContainer-e9pQfuHK.js";
import { V as VTextField } from "./VTextField-B6vZaGM7.js";
import { V as VForm } from "./VForm-FA4eC7CW.js";
import "./TokenModel-fnmBdSAh.js";
import "./index-BxK0EBjD.js";
const _sfc_main = {
  data() {
    return {
      name: ""
      // 存储输入框中的团队名称
    };
  },
  methods: {
    async submitTeamInfo() {
      const ret = await new Net("/v1/team/info/create").PostFormData(this.$data);
      if (ret.code === 0) {
        console.log("团队信息创建成功");
        this.goBack();
      } else {
        console.error(ret.echo);
      }
    },
    goBack() {
      this.$router.push("/v1/user/team");
    }
  }
};
const _hoisted_1 = { class: "d-flex flex-column" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, null, {
    default: withCtx(() => [
      createVNode(VCardTitle, null, {
        default: withCtx(() => [
          createTextVNode("创建团队信息")
        ]),
        _: 1
      }),
      createVNode(VForm, {
        onSubmit: withModifiers($options.submitTeamInfo, ["prevent"])
      }, {
        default: withCtx(() => [
          createVNode(VTextField, {
            modelValue: $data.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.name = $event),
            label: "团队名称"
          }, null, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_1, [
            createVNode(VBtn, {
              size: "large",
              type: "submit",
              color: "primary",
              class: "mt-4"
            }, {
              default: withCtx(() => [
                createTextVNode("提交")
              ]),
              _: 1
            }),
            createVNode(VBtn, {
              size: "large",
              onClick: $options.goBack,
              color: "primary",
              class: "mt-4"
            }, {
              default: withCtx(() => [
                createTextVNode("返回")
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        _: 1
      }, 8, ["onSubmit"])
    ]),
    _: 1
  });
}
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  create as default
};
