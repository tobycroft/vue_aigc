import { N as Net } from "./Net-DdxOK3uL.js";
import { h as hooks } from "./moment-D5u_x0RX.js";
import { T as Topheader } from "./topheader-DpGJnLVD.js";
import { _ as _export_sfc, c as createBlock, y as withCtx, o as openBlock, v as createVNode, a4 as VCardTitle, z as createTextVNode, V as VCardText, Y as createElementBlock, a0 as renderList, Z as Fragment, Q as VCard, a3 as toDisplayString, R as createCommentVNode, aK as VBtnGroup, W as VBtn } from "./index-BioJxT31.js";
import { V as VContainer } from "./VContainer-Bll6ipDc.js";
import { V as VList } from "./VList-tVNTjfnb.js";
import { a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VListItem-CYu6XPQ4.js";
import { V as VRow, a as VCol } from "./VRow-BZhJiUNJ.js";
import "./TokenModel-fnmBdSAh.js";
import "./gobotq-CybS7j7m.js";
import "./index-Bum68bcS.js";
import "./ssrBoot-C-RdI84s.js";
const _sfc_main = {
  components: { top_header: Topheader },
  data() {
    return {
      teamList: []
      // 存储团队列表数据
    };
  },
  methods: {
    async fetchTeamList() {
      const ret = await new Net("/v1/user/team/list").PostFormData();
      if (ret.code === 0) {
        this.teamList = ret.data;
      } else {
        console.error(ret.echo);
      }
    },
    async addTeam() {
      this.$router.push("/v1/user/team/create");
    },
    async deleteTeam(team) {
      const ret = await new Net("/v1/user/team/delete").PostFormData(fastgpt);
      if (ret.code === 0) {
        this.fetchTeamList();
      } else {
        console.error(ret.echo);
      }
    },
    async editTeam(team) {
      this.$router.push({ path: "/v1/user/team/edit", query: fastgpt });
    },
    async subtoken(team) {
      this.$router.push({ path: `/v1/team/subtoken`, query: fastgpt });
    },
    formattedDate(date) {
      return hooks(date).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  mounted() {
    this.fetchTeamList();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, null, {
    default: withCtx(() => [
      createVNode(VCard, null, {
        default: withCtx(() => [
          createVNode(VCardTitle, null, {
            default: withCtx(() => [
              createTextVNode("团队列表")
            ]),
            _: 1
          }),
          createVNode(VCardText, null, {
            default: withCtx(() => [
              createVNode(VList, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($data.teamList, (team) => {
                    return openBlock(), createBlock(VListItem, {
                      key: _ctx.fastgpt.id
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          justify: "space-around"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.fastgpt.team_info.name), 1)
                                  ]),
                                  _: 1
                                }),
                                _ctx.fastgpt.nickname ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.fastgpt.nickname), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(_ctx.fastgpt.role), 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($options.formattedDate(_ctx.fastgpt.date)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VCol, null, {
                              default: withCtx(() => [
                                createVNode(VBtnGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      onClick: _cache[0] || (_cache[0] = ($event) => $options.subtoken(_ctx.fastgpt)),
                                      color: "green"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("团队token管理")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VBtn, {
                                      onClick: _cache[1] || (_cache[1] = ($event) => $options.editTeam(_ctx.fastgpt)),
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("修改团队信息")
                                      ]),
                                      _: 1
                                    }),
                                    _ctx.fastgpt.role === "admin" || _ctx.fastgpt.role === "owner" ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      onClick: _cache[2] || (_cache[2] = ($event) => $options.deleteTeam(_ctx.fastgpt)),
                                      color: "error"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("解散团队")
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      onClick: _cache[3] || (_cache[3] = ($event) => $options.deleteTeam(_ctx.fastgpt)),
                                      color: "error"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("退出团队")
                                      ]),
                                      _: 1
                                    }))
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
                  }), 128))
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
const Fastgpt = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Fastgpt as default
};
