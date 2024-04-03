import { o as openBlock, c as createBlock, y as withCtx, v as createVNode, C as VResponsive, D as VImg, E as VBtn, F as VIcon, z as createTextVNode, G as createBaseVNode } from "./index-BmZsnFJT.js";
import { V as VRow, a as VCol } from "./VRow-BD2S0AzV.js";
import { V as VContainer } from "./VContainer-BBX-5yLs.js";
const _imports_0 = "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M261.126%20140.65L164.624%20307.732L256.001%20466L377.028%20256.5L498.001%2047H315.192L261.126%20140.65Z'%20fill='%231697F6'/%3e%3cpath%20d='M135.027%20256.5L141.365%20267.518L231.64%20111.178L268.731%2047H256H14L135.027%20256.5Z'%20fill='%23AEDDFF'/%3e%3cpath%20d='M315.191%2047C360.935%20197.446%20256%20466%20256%20466L164.624%20307.732L315.191%2047Z'%20fill='%231867C0'/%3e%3cpath%20d='M268.731%2047C76.0026%2047%20141.366%20267.518%20141.366%20267.518L268.731%2047Z'%20fill='%237BC6FF'/%3e%3c/svg%3e";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-body-2 font-weight-light mb-n1" }, "Welcome to", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", { class: "text-h2 font-weight-bold" }, "Vuetify", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "py-14" }, null, -1);
const _sfc_main$1 = {
  __name: "HelloWorld",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VContainer, { class: "fill-height" }, {
        default: withCtx(() => [
          createVNode(VResponsive, { class: "align-center text-center fill-height" }, {
            default: withCtx(() => [
              createVNode(VImg, {
                height: "300",
                src: _imports_0
              }),
              _hoisted_1,
              _hoisted_2,
              _hoisted_3,
              createVNode(VRow, { class: "d-flex align-center justify-center" }, {
                default: withCtx(() => [
                  createVNode(VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        href: "https://vuetifyjs.com/components/all/",
                        "min-width": "164",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        variant: "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-view-dashboard",
                            size: "large",
                            start: ""
                          }),
                          createTextVNode(" Components ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        color: "primary",
                        href: "https://vuetifyjs.com/introduction/why-vuetify/#feature-guides",
                        "min-width": "228",
                        rel: "noopener noreferrer",
                        size: "x-large",
                        target: "_blank",
                        variant: "flat"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-speedometer",
                            size: "large",
                            start: ""
                          }),
                          createTextVNode(" Get Started ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, { cols: "auto" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        href: "https://community.vuetifyjs.com/",
                        "min-width": "164",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        variant: "text"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-account-group",
                            size: "large",
                            start: ""
                          }),
                          createTextVNode(" Community ")
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
    };
  }
};
const _sfc_main = {
  __name: "home",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1);
    };
  }
};
export {
  _sfc_main as default
};
