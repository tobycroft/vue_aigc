import { T as Topheader } from "./topheader-Dmb9_9Jt.js";
import info from "./info-xUsyDgtz.js";
import team from "./team-CbQ6CzT5.js";
import { p as propsFactory, a7 as omit, a8 as makeVBtnProps, l as genericComponent, a9 as useTextColor, b as ref, a as computed, t as useRender, E as VBtn, v as createVNode, a2 as Fragment, aa as mergeProps, ab as forwardRefs, ac as animate, ad as standardEasing, ae as makeDensityProps, w as makeTagProps, af as useProxiedModel, ag as useDensity, N as useBackgroundColor, O as toRef, ah as provideDefaults, h as convertToUnit, ai as isObject, _ as _export_sfc, a0 as createElementBlock, y as withCtx, c as createBlock, X as createCommentVNode, o as openBlock, z as createTextVNode, B as resolveComponent } from "./index-DcvAd3NA.js";
import { m as makeVSlideGroupProps, V as VSlideGroup } from "./VSlideGroup-DHKYgHMQ.js";
import "./gobotq-CybS7j7m.js";
import "./index-BKcMlBDW.js";
import "./Net-Dmp2l3p2.js";
import "./TokenModel-fnmBdSAh.js";
import "./moment-D5u_x0RX.js";
import "./VContainer-wq5_P_JB.js";
import "./VRow-De0pC_qF.js";
import "./VList-Ctjqzgln.js";
import "./ssrBoot-D7OnaSVG.js";
const VTabsSymbol = Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(props, "sliderColor");
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a, _b;
      return ((_b = (_a = rootEl.value) == null ? void 0 : _a.group) == null ? void 0 : _b.isSelected.value) ?? false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? void 0 : _a.$el.parentElement) == null ? void 0 : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl)
          return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a;
          return createVNode(Fragment, null, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.text, !props.hideSlider && createVNode("div", {
            "ref": sliderEl,
            "class": ["v-tab__slider", sliderColorClasses.value],
            "style": sliderColorStyles.value
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});
function parseItems(items) {
  if (!items)
    return [];
  return items.map((item) => {
    if (!isObject(item))
      return {
        text: item,
        value: item
      };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const parsedItems = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        sliderColor: toRef(props, "sliderColor"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      return createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }), {
        default: () => [slots.default ? slots.default() : parsedItems.value.map((item) => createVNode(VTab, mergeProps(item, {
          "key": item.text
        }), null))]
      });
    });
    return {};
  }
});
const _sfc_main = {
  components: { info, team, Topheader },
  data() {
    return {
      tab: 0
    };
  },
  methods: {
    changetab() {
    }
  },
  mounted() {
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Topheader = resolveComponent("Topheader");
  const _component_info = resolveComponent("info");
  const _component_team = resolveComponent("team");
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
            createTextVNode("我的信息")
          ]),
          _: 1
        }),
        createVNode(VTab, null, {
          default: withCtx(() => [
            createTextVNode("我的团队")
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "onClick"]),
    $data.tab === 0 ? (openBlock(), createBlock(_component_info, { key: 0 })) : createCommentVNode("", true),
    $data.tab === 1 ? (openBlock(), createBlock(_component_team, { key: 1 })) : createCommentVNode("", true)
  ], 64);
}
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  user as default
};
