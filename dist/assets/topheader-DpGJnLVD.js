import { _ as _imports_0 } from "./gobotq-CybS7j7m.js";
import { p as propsFactory, m as makeComponentProps, w as makeTagProps, l as genericComponent, t as useRender, v as createVNode, C as makeBorderProps, E as makeElevationProps, H as makeRoundedProps, k as makeThemeProps, I as useBackgroundColor, J as toRef, K as useBorder, M as useElevation, P as useRounded, n as provideTheme, q as useRtl, s as shallowRef, a as computed, af as provideDefaults, aL as VImg, aM as VDefaultsProvider, h as convertToUnit, _ as _export_sfc, o as openBlock, c as createBlock, y as withCtx, aE as VIcon, z as createTextVNode, aJ as VSpacer, W as VBtn } from "./index-BioJxT31.js";
import { a as VExpandTransition } from "./index-Bum68bcS.js";
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": ["v-toolbar-title", props.class],
        "style": props.style
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(!!(props.extended || ((_a = slots.extension) == null ? void 0 : _a.call(slots))));
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? void 0 : _a2.call(slots);
      isExtended.value = !!(props.extended || extension);
      return createVNode(props.tag, {
        "class": ["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => [hasImage && createVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? void 0 : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? void 0 : _b.call(slots), slots.append && createVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const _sfc_main = {
  methods: {
    navigateTo(tab) {
      this.$router.push(tab);
    },
    toggleDrawer() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VToolbar, {
    app: "",
    color: "#222222"
  }, {
    default: withCtx(() => [
      createVNode(VIcon, {
        size: "60px",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.navigateTo("/center"))
      }, {
        default: withCtx(() => [
          createVNode(VImg, { src: _imports_0 })
        ]),
        _: 1
      }),
      createVNode(VToolbarTitle, null, {
        default: withCtx(() => [
          createTextVNode("AIGC-Web")
        ]),
        _: 1
      }),
      createVNode(VSpacer),
      createVNode(VBtn, {
        onClick: _cache[1] || (_cache[1] = ($event) => $options.navigateTo("/v1/vrm"))
      }, {
        default: withCtx(() => [
          createTextVNode("VRM体验")
        ]),
        _: 1
      }),
      createVNode(VBtn, {
        onClick: _cache[2] || (_cache[2] = ($event) => $options.navigateTo("/v1/live2d"))
      }, {
        default: withCtx(() => [
          createTextVNode("Live2D")
        ]),
        _: 1
      }),
      createVNode(VBtn, {
        onClick: _cache[3] || (_cache[3] = ($event) => $options.navigateTo("/v1/team"))
      }, {
        default: withCtx(() => [
          createTextVNode("团队")
        ]),
        _: 1
      }),
      createVNode(VBtn, {
        onClick: _cache[4] || (_cache[4] = ($event) => $options.navigateTo("/v1/key"))
      }, {
        default: withCtx(() => [
          createTextVNode("密钥")
        ]),
        _: 1
      }),
      createVNode(VBtn, {
        onClick: _cache[5] || (_cache[5] = ($event) => $options.navigateTo("/v1/user"))
      }, {
        default: withCtx(() => [
          createTextVNode("我的")
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Topheader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Topheader as T
};
