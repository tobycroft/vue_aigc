import { N as Net } from "./Net-CR8c9zlz.js";
import { h as hooks } from "./moment-D5u_x0RX.js";
import { T as TokenModel } from "./TokenModel-D5JZCkZZ.js";
import { _ as _export_sfc, c as createBlock, y as withCtx, o as openBlock, v as createVNode, a6 as VCardTitle, z as createTextVNode, V as VCardText, W as VCard, aG as toDisplayString, E as VBtn, G as createBaseVNode } from "./index-4OKBOMX4.js";
import { V as VContainer } from "./VContainer-BAC1tqtJ.js";
import { V as VRow, a as VCol } from "./VRow-DZ_OIz1I.js";
const _sfc_main = {
  data() {
    return {
      formData: {}
      // 存储接口返回的数据
    };
  },
  computed: {
    formattedDate() {
      return hooks(this.formData.date).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
    async fetchData() {
      const ret = await new Net("/v1/user/info/get").PostFormData();
      if (ret.code === 0) {
        this.formData = ret.data;
      } else {
        console.error(ret.echo);
      }
    },
    logout() {
      TokenModel.Api_clear_uidAndToken();
      this.$router.push("/");
    }
  },
  mounted() {
    this.fetchData();
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("strong", null, "用户ID：", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("strong", null, "集团头像：", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("strong", null, "集团名称：", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("strong", null, "加入时间：", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, null, {
    default: withCtx(() => [
      createVNode(VCard, null, {
        default: withCtx(() => [
          createVNode(VCardTitle, null, {
            default: withCtx(() => [
              createTextVNode("个人信息")
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "12" }, {
                    default: withCtx(() => [
                      createVNode(VContainer, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VCard, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          _hoisted_1,
                                          createTextVNode(" " + toDisplayString($data.formData.uid), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VCard, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          _hoisted_2,
                                          createTextVNode(" " + toDisplayString($data.formData.group_img || "暂无"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VCard, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          _hoisted_3,
                                          createTextVNode(" " + toDisplayString($data.formData.group_name || "暂无"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, { cols: "12" }, {
                                default: withCtx(() => [
                                  createVNode(VCard, null, {
                                    default: withCtx(() => [
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          _hoisted_4,
                                          createTextVNode(" " + toDisplayString($options.formattedDate), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: "tonal",
                                class: "flex-grow-1",
                                size: "x-large",
                                onClick: $options.logout,
                                color: "primary",
                                large: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("退出")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
const info = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  info as default
};
//# sourceMappingURL=info-Dv7p8134.js.map
