import { N as Net } from "./Net-BiwGZK6p.js";
import { _ as _export_sfc, c as createBlock, y as withCtx, o as openBlock, v as createVNode, z as createTextVNode, a7 as VCardTitle, G as createBaseVNode, E as VBtn, $ as withModifiers } from "./index-DQIMGpmm.js";
import { V as VContainer } from "./VContainer-D2zSohrN.js";
import { V as VTextField } from "./VTextField-BZv9tI1p.js";
import { V as VForm } from "./VForm-DyJdEB0p.js";
import "./TokenModel-fnmBdSAh.js";
import "./index-3ailoIQu.js";
const _sfc_main = {
  data() {
    return {
      name: "",
      // 存储输入框中的团队名称
      content: "",
      // 存储输入框中的团队名称
      prefix: "",
      // 存储输入框中的团队名称
      team: this.$route.query
      // 获取团队ID
    };
  },
  methods: {
    async fetchTeamInfo() {
      const ret = await new Net(`/v1/user/team/get`).PostFormData(this.team);
      if (ret.code === 0) {
        this.name = ret.data.team_info.name;
        this.content = ret.data.team_info.content;
        this.prefix = ret.data.team_info.prefix;
      } else {
        console.error(ret.echo);
      }
    },
    async updateTeamInfo() {
      const payload = {
        id: this.team.team_id,
        name: this.name,
        img: "",
        content: this.content,
        prefix: this.prefix
      };
      const ret = await new Net("/v1/team/info/update").PostFormData(payload);
      if (ret.code === 0) {
        this.goBack();
      } else {
        console.error(ret.echo);
      }
    },
    goBack() {
      this.$router.push("/v1/user/team");
    }
  },
  mounted() {
    this.fetchTeamInfo();
  }
};
const _hoisted_1 = { class: "d-flex flex-column" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, null, {
    default: withCtx(() => [
      createVNode(VCardTitle, null, {
        default: withCtx(() => [
          createTextVNode("编辑团队信息")
        ]),
        _: 1
      }),
      createVNode(VForm, {
        onSubmit: withModifiers($options.updateTeamInfo, ["prevent"])
      }, {
        default: withCtx(() => [
          createVNode(VTextField, {
            modelValue: $data.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.name = $event),
            label: "团队名称"
          }, null, 8, ["modelValue"]),
          createVNode(VTextField, {
            modelValue: $data.content,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.content = $event),
            label: "团队简介"
          }, null, 8, ["modelValue"]),
          createVNode(VTextField, {
            modelValue: $data.prefix,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.prefix = $event),
            label: "key标头"
          }, null, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_1, [
            createVNode(VBtn, {
              size: "large",
              type: "submit",
              color: "primary",
              class: "mt-4"
            }, {
              default: withCtx(() => [
                createTextVNode("保存")
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
const edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  edit as default
};
