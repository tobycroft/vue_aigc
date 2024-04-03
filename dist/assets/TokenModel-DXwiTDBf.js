import { p as propsFactory, m as makeComponentProps, w as makeTagProps, l as genericComponent, q as useRtl, t as useRender, v as createVNode } from "./index-CwHd84mN.js";
const makeVContainerProps = propsFactory({
  fluid: {
    type: Boolean,
    default: false
  },
  ...makeComponentProps(),
  ...makeTagProps()
}, "VContainer");
const VContainer = genericComponent()({
  name: "VContainer",
  props: makeVContainerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      rtlClasses
    } = useRtl();
    useRender(() => createVNode(props.tag, {
      "class": ["v-container", {
        "v-container--fluid": props.fluid
      }, rtlClasses.value, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});
class TokenModel {
  static Api_set_uidAndToken(uid, token) {
    localStorage.setItem("uid", uid);
    localStorage.setItem("token", token);
  }
  static Api_clear_uidAndToken() {
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
  }
  static Api_find_uidAndToken() {
    return { uid: localStorage.getItem("uid"), token: localStorage.getItem("token") };
  }
  static Api_find_uid() {
    return localStorage.getItem("uid");
  }
  static Api_find_token() {
    return localStorage.getItem("token");
  }
  static Api_is_login() {
    return localStorage.getItem("uid") != null && localStorage.getItem("token") != null;
  }
}
const TokenModel$1 = TokenModel;
export {
  TokenModel$1 as T,
  VContainer as V
};
