import { N as Net } from "./Net-CfaFoo1k.js";
import { h as hooks } from "./moment-D5u_x0RX.js";
import { T as Topheader } from "./topheader-BQbz4qkI.js";
import { _ as _export_sfc, c as createBlock, y as withCtx, o as openBlock, v as createVNode, a6 as VCardTitle, z as createTextVNode, V as VCardText, a0 as createElementBlock, a3 as renderList, a2 as Fragment, W as VCard, aG as toDisplayString, X as createCommentVNode, aL as VBtnGroup, E as VBtn } from "./index-949p_sDn.js";
import { V as VContainer } from "./VContainer-CojaPIuz.js";
import { a as VList, b as VListItem, c as VListItemTitle, d as VListItemSubtitle } from "./VList-_sPoRDTN.js";
import { V as VRow, a as VCol } from "./VRow-BOAxxBYv.js";
import "./TokenModel-fnmBdSAh.js";
import "./gobotq-CybS7j7m.js";
import "./index-CRjXcZ4I.js";
import "./ssrBoot-B5fi3Mha.js";
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
    async deleteTeam(team2) {
      const ret = await new Net("/v1/user/team/delete").PostFormData(team2);
      if (ret.code === 0) {
        this.fetchTeamList();
      } else {
        console.error(ret.echo);
      }
    },
    async editTeam(team2) {
      this.$router.push({ path: "/v1/user/team/edit", query: team2 });
    },
    async subtoken(team2) {
      this.$router.push({ path: `/v1/team/subtoken`, query: team2 });
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
                  (openBlock(true), createElementBlock(Fragment, null, renderList($data.teamList, (team2) => {
                    return openBlock(), createBlock(VListItem, {
                      key: team2.id
                    }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          justify: "space-between"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, { cols: "8" }, {
                              default: withCtx(() => [
                                createVNode(VListItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(team2.team_info.name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                team2.nickname ? (openBlock(), createBlock(VListItemSubtitle, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(team2.nickname), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(team2.role), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VListItemSubtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($options.formattedDate(team2.date)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCol, { cols: "4" }, {
                              default: withCtx(() => [
                                createVNode(VBtnGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      class: "mt-4",
                                      onClick: ($event) => $options.subtoken(team2),
                                      color: "green"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("团队token管理")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    createVNode(VBtn, {
                                      class: "mt-4",
                                      onClick: ($event) => $options.editTeam(team2),
                                      color: "primary"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("修改团队信息")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]),
                                    team2.role === "admin" || team2.role === "owner" ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      class: "mt-4",
                                      onClick: ($event) => $options.deleteTeam(team2),
                                      color: "error"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("解散团队")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      class: "mt-4",
                                      onClick: ($event) => $options.deleteTeam(team2),
                                      color: "error"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("退出团队")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
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
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  team as default
};
