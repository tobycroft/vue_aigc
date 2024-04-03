import { _ as _export_sfc, o as openBlock, c as createBlock, r as resolveDynamicComponent } from "./index-DCCa22eB.js";
const _sfc_main = {
  computed: {
    component() {
      return this.$route.meta.component;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($options.component));
}
const superRouter = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  superRouter as default
};
