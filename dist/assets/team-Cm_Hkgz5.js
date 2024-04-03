import { N as Net } from "./Net-DdxOK3uL.js";
import { T as Topheader } from "./topheader-DpGJnLVD.js";
import { _ as _export_sfc, c as createBlock, y as withCtx, Q as VCard, o as openBlock, v as createVNode, z as createTextVNode, aJ as VSpacer, W as VBtn, a4 as VCardTitle, aE as VIcon, a3 as toDisplayString } from "./index-BioJxT31.js";
import { V as VDivider, a as VListItem, b as VListItemTitle, c as VListItemSubtitle } from "./VListItem-CYu6XPQ4.js";
import { V as VVirtualScroll } from "./VVirtualScroll-CqBw8RzY.js";
import "./TokenModel-fnmBdSAh.js";
import "./gobotq-CybS7j7m.js";
import "./index-Bum68bcS.js";
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
      this.$router.push("/v1/team/team/create");
    },
    async deleteTeam(team) {
      const ret = await new Net("/v1/user/team/delete").PostFormData(team);
      if (ret.code === 0) {
        this.fetchTeamList();
      } else {
        console.error(ret.echo);
      }
    },
    async editTeam(team) {
      this.$router.push({ path: "/v1/team/team/edit", query: team });
    }
  },
  mounted() {
    this.fetchTeamList();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VCard, { class: "mx-auto" }, {
    default: withCtx(() => [
      createVNode(VCardTitle, null, {
        default: withCtx(() => [
          createTextVNode(" 团队成员列表 "),
          createVNode(VSpacer),
          createVNode(VBtn, {
            color: "primary",
            onClick: $options.addTeam
          }, {
            default: withCtx(() => [
              createTextVNode(" 新增团队成员 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }),
      createVNode(VDivider),
      createVNode(VVirtualScroll, {
        items: $data.teamList,
        "item-height": "48"
      }, {
        default: withCtx(({ item }) => [
          createVNode(VListItem, null, {
            prepend: withCtx(() => [
              createVNode(VIcon, { class: "bg-primary" }, {
                default: withCtx(() => [
                  createTextVNode("mdi-group")
                ]),
                _: 1
              })
            ]),
            append: withCtx(() => [
              createVNode(VBtn, {
                class: "ma-2",
                icon: "",
                color: "primary",
                onClick: ($event) => $options.editTeam(item)
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-pencil")
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1032, ["onClick"]),
              createVNode(VBtn, {
                class: "ma-2",
                icon: "",
                color: "error",
                onClick: ($event) => $options.deleteTeam(item)
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-delete")
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            default: withCtx(() => [
              createVNode(VListItemTitle, null, {
                default: withCtx(() => [
                  createTextVNode("团队名称：" + toDisplayString(item.team_info.name), 1)
                ]),
                _: 2
              }, 1024),
              createVNode(VListItemSubtitle, null, {
                default: withCtx(() => [
                  createTextVNode("团队权限：" + toDisplayString(item.role), 1)
                ]),
                _: 2
              }, 1024),
              createVNode(VListItemSubtitle, null, {
                default: withCtx(() => [
                  createTextVNode("团队备注：" + toDisplayString(item.team_info.content), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["items"])
    ]),
    _: 1
  });
}
const Team = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Team as default
};
