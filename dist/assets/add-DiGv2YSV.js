import { N as Net } from "./Net-C7x45aDP.js";
import { _ as _export_sfc, c as createBlock, y as withCtx, o as openBlock, v as createVNode, a6 as VCardTitle, z as createTextVNode, V as VCardText, $ as withModifiers, E as VBtn, W as VCard } from "./index-BG_w0Khm.js";
import { V as VContainer } from "./VContainer-CU1T9I-k.js";
import { V as VForm } from "./VForm-BB--1k60.js";
import { V as VRow, a as VCol } from "./VRow-Ca7D4DSj.js";
import { V as VSelect } from "./VSelect-CCiiAp2J.js";
import { V as VTextField } from "./VTextField-ehMtwEoz.js";
import "./TokenModel-fnmBdSAh.js";
import "./VList-B5oGquvm.js";
import "./index-BCbdFtaS.js";
import "./ssrBoot-DIj4mRt2.js";
import "./VSlideGroup-BfB-Nzvw.js";
const _sfc_main = {
  data() {
    return {
      team_info: {},
      team: this.$route.query,
      coinList: [],
      selectedCoinId: null,
      formData: {
        name: "测试key名称，随便起一个",
        team_id: "",
        prefix: "",
        amount: "-1",
        from_id: "1"
      }
    };
  },
  methods: {
    async fetchTeamInfo() {
      const ret = await new Net(`/v1/user/team/get`).PostFormData(this.team);
      if (ret.code === 0) {
        this.team_info = ret.data.team_info;
        this.formData.prefix = ret.data.team_info.prefix;
        this.formData.team_id = ret.data.team_info.id;
      } else {
        console.error(ret.echo);
      }
    },
    async fetchCoinList() {
      try {
        const response = await new Net("/v1/coin/info/list").PostFormData();
        if (response.code === 0) {
          this.coinList = response.data.map((coin) => ({ id: coin.id, title: coin.name }));
        } else {
          console.error("Failed to fetch coin list:", response.echo);
        }
      } catch (error) {
        console.error("Failed to fetch coin list:", error);
      }
    },
    async createToken() {
      try {
        const payload = {
          name: this.formData.name,
          team_id: this.formData.team_id,
          coin_id: this.selectedCoinId,
          prefix: this.formData.prefix,
          amount: this.formData.amount,
          from_id: this.formData.from_id
        };
        const response = await new Net("/v1/team/subtoken/create").PostFormData(payload);
        if (response.code === 0) {
          this.$router.push({ path: `/v1/team/subtoken`, query: this.team });
        } else {
          console.error("Failed to create token:", response.echo);
        }
      } catch (error) {
        console.error("Failed to create token:", error);
      }
    },
    goBack() {
      this.$router.push({ path: `/v1/team/subtoken`, query: this.team });
    }
  },
  mounted() {
    this.fetchTeamInfo();
    this.fetchCoinList();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, null, {
    default: withCtx(() => [
      createVNode(VCard, null, {
        default: withCtx(() => [
          createVNode(VCardTitle, null, {
            default: withCtx(() => [
              createTextVNode("添加团队 Token")
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VForm, {
                onSubmit: withModifiers($options.createToken, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, null, {
                        default: withCtx(() => [
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VSelect, {
                                modelValue: $data.selectedCoinId,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.selectedCoinId = $event),
                                items: $data.coinList,
                                label: "选择GPT类型",
                                "item-text": "name",
                                "item-value": "id"
                              }, null, 8, ["modelValue", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.formData.name,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.name = $event),
                                label: "key名称"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.formData.team_id,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.team_id = $event),
                                label: "团队id"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.formData.prefix,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.formData.prefix = $event),
                                label: "prefix标签"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.formData.amount,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.formData.amount = $event),
                                label: "可以使用的余额,如果是-1就是无线，大于0就按正常的扣"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                modelValue: $data.formData.from_id,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.formData.from_id = $event),
                                label: "上级id"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    type: "submit",
                    color: "primary",
                    block: "",
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("添加")
                    ]),
                    _: 1
                  }),
                  createVNode(VBtn, {
                    onClick: $options.goBack,
                    color: "grey",
                    block: "",
                    class: "mt-4"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("返回")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["onSubmit"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const add = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  add as default
};
