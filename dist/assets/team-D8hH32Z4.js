import { T as Topheader } from "./topheader-DpGJnLVD.js";
import Team from "./team-Cm_Hkgz5.js";
import subtoken from "./subtoken-BjTIif3k.js";
import { _ as _export_sfc, Y as createElementBlock, v as createVNode, y as withCtx, c as createBlock, R as createCommentVNode, Z as Fragment, o as openBlock, z as createTextVNode, B as resolveComponent } from "./index-BioJxT31.js";
import { V as VTabs, a as VTab } from "./VTabs-CeLtGhlL.js";
import "./gobotq-CybS7j7m.js";
import "./index-Bum68bcS.js";
import "./Net-DdxOK3uL.js";
import "./TokenModel-fnmBdSAh.js";
import "./VListItem-CYu6XPQ4.js";
import "./VVirtualScroll-CqBw8RzY.js";
import "./VContainer-Bll6ipDc.js";
import "./VSelect-C9EpYHcB.js";
import "./VTextField-CfmN63Er.js";
import "./VList-tVNTjfnb.js";
import "./ssrBoot-C-RdI84s.js";
import "./VSlideGroup-B6U9t7N3.js";
const _sfc_main = {
  components: { Team, subtoken, Topheader },
  data() {
    return {
      tab: 0
    };
  },
  methods: {
    changetab() {
      this.$router.push({ query: { tab: this.tab } });
    }
  },
  mounted() {
    if (this.$route.query.tab) {
      this.tab = parseInt(this.$route.query.tab);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Topheader = resolveComponent("Topheader");
  const _component_team = resolveComponent("team", true);
  const _component_subtoken = resolveComponent("subtoken");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_Topheader),
    createVNode(VTabs, {
      modelValue: $data.tab,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.tab = $event),
      onClick: $options.changetab,
      "fixed-tabs": "",
      "bg-color": "indigo-darken-2"
    }, {
      default: withCtx(() => [
        createVNode(VTab, null, {
          default: withCtx(() => [
            createTextVNode("我的团队")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "onClick"]),
    $data.tab === 0 ? (openBlock(), createBlock(_component_team, { key: 0 })) : createCommentVNode("", true),
    $data.tab === 1 ? (openBlock(), createBlock(_component_subtoken, { key: 1 })) : createCommentVNode("", true)
  ], 64);
}
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  team as default
};
