import { N as Net } from "./Net-BAsFofxM.js";
import { T as TokenModel } from "./TokenModel-fnmBdSAh.js";
import { p as propsFactory, H as makeBorderProps, m as makeComponentProps, I as makeDimensionProps, J as makeElevationProps, K as makeLocationProps, L as makePositionProps, M as makeRoundedProps, w as makeTagProps, k as makeThemeProps, l as genericComponent, n as provideTheme, N as useBackgroundColor, O as toRef, P as useBorder, Q as useDimension, R as useElevation, S as useLocation, T as usePosition, U as useRounded, t as useRender, v as createVNode, _ as _export_sfc, c as createBlock, y as withCtx, o as openBlock, W as VCard, X as createCommentVNode, Y as withDirectives, Z as vShow, $ as withModifiers, E as VBtn, z as createTextVNode, G as createBaseVNode } from "./index-o_pSkn9Q.js";
import { _ as _imports_0 } from "./gobotq-CybS7j7m.js";
import { V as VSlideYTransition } from "./index-d8d5cF66.js";
import { V as VContainer } from "./VContainer-U2-LSaTb.js";
import { V as VForm } from "./VForm-DMhNmgGF.js";
import { V as VTextField } from "./VTextField-Dfo6pM1k.js";
const makeVSheetProps = propsFactory({
  color: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VSheet");
const VSheet = genericComponent()({
  name: "VSheet",
  props: makeVSheetProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-sheet", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, dimensionStyles.value, locationStyles.value, props.style]
    }, slots));
    return {};
  }
});
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var md5$1 = { exports: {} };
var crypt = { exports: {} };
(function() {
  var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt$1 = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return n << b | n >>> 32 - b;
    },
    // Bit-wise rotation right
    rotr: function(n, b) {
      return n << 32 - b | n >>> b;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      if (n.constructor == Number) {
        return crypt$1.rotl(n, 8) & 16711935 | crypt$1.rotl(n, 24) & 4278255360;
      }
      for (var i = 0; i < n.length; i++)
        n[i] = crypt$1.endian(n[i]);
      return n;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << 24 - b % 32;
      return words;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
      return bytes;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 15).toString(16));
      }
      return hex.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
          else
            base64.push("=");
      }
      return base64.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
      for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 == 0)
          continue;
        bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
      }
      return bytes;
    }
  };
  crypt.exports = crypt$1;
})();
var cryptExports = crypt.exports;
var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },
    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 255);
      return bytes;
    },
    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join("");
    }
  }
};
var charenc_1 = charenc;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer_1 = function(obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};
function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
}
(function() {
  var crypt2 = cryptExports, utf8 = charenc_1.utf8, isBuffer2 = isBuffer_1, bin = charenc_1.bin, md52 = function(message, options) {
    if (message.constructor == String)
      if (options && options.encoding === "binary")
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer2(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    var m = crypt2.bytesToWords(message), l = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (var i = 0; i < m.length; i++) {
      m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
    }
    m[l >>> 5] |= 128 << l % 32;
    m[(l + 64 >>> 9 << 4) + 14] = l;
    var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
    for (var i = 0; i < m.length; i += 16) {
      var aa = a, bb = b, cc = c, dd = d;
      a = FF(a, b, c, d, m[i + 0], 7, -680876936);
      d = FF(d, a, b, c, m[i + 1], 12, -389564586);
      c = FF(c, d, a, b, m[i + 2], 17, 606105819);
      b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i + 4], 7, -176418897);
      d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
      c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i + 7], 22, -45705983);
      a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
      d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i + 10], 17, -42063);
      b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
      a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
      d = FF(d, a, b, c, m[i + 13], 12, -40341101);
      c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
      b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
      a = GG(a, b, c, d, m[i + 1], 5, -165796510);
      d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
      c = GG(c, d, a, b, m[i + 11], 14, 643717713);
      b = GG(b, c, d, a, m[i + 0], 20, -373897302);
      a = GG(a, b, c, d, m[i + 5], 5, -701558691);
      d = GG(d, a, b, c, m[i + 10], 9, 38016083);
      c = GG(c, d, a, b, m[i + 15], 14, -660478335);
      b = GG(b, c, d, a, m[i + 4], 20, -405537848);
      a = GG(a, b, c, d, m[i + 9], 5, 568446438);
      d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
      c = GG(c, d, a, b, m[i + 3], 14, -187363961);
      b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
      a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
      d = GG(d, a, b, c, m[i + 2], 9, -51403784);
      c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
      b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
      a = HH(a, b, c, d, m[i + 5], 4, -378558);
      d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
      b = HH(b, c, d, a, m[i + 14], 23, -35309556);
      a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
      d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
      c = HH(c, d, a, b, m[i + 7], 16, -155497632);
      b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
      a = HH(a, b, c, d, m[i + 13], 4, 681279174);
      d = HH(d, a, b, c, m[i + 0], 11, -358537222);
      c = HH(c, d, a, b, m[i + 3], 16, -722521979);
      b = HH(b, c, d, a, m[i + 6], 23, 76029189);
      a = HH(a, b, c, d, m[i + 9], 4, -640364487);
      d = HH(d, a, b, c, m[i + 12], 11, -421815835);
      c = HH(c, d, a, b, m[i + 15], 16, 530742520);
      b = HH(b, c, d, a, m[i + 2], 23, -995338651);
      a = II(a, b, c, d, m[i + 0], 6, -198630844);
      d = II(d, a, b, c, m[i + 7], 10, 1126891415);
      c = II(c, d, a, b, m[i + 14], 15, -1416354905);
      b = II(b, c, d, a, m[i + 5], 21, -57434055);
      a = II(a, b, c, d, m[i + 12], 6, 1700485571);
      d = II(d, a, b, c, m[i + 3], 10, -1894986606);
      c = II(c, d, a, b, m[i + 10], 15, -1051523);
      b = II(b, c, d, a, m[i + 1], 21, -2054922799);
      a = II(a, b, c, d, m[i + 8], 6, 1873313359);
      d = II(d, a, b, c, m[i + 15], 10, -30611744);
      c = II(c, d, a, b, m[i + 6], 15, -1560198380);
      b = II(b, c, d, a, m[i + 13], 21, 1309151649);
      a = II(a, b, c, d, m[i + 4], 6, -145523070);
      d = II(d, a, b, c, m[i + 11], 10, -1120210379);
      c = II(c, d, a, b, m[i + 2], 15, 718787259);
      b = II(b, c, d, a, m[i + 9], 21, -343485551);
      a = a + aa >>> 0;
      b = b + bb >>> 0;
      c = c + cc >>> 0;
      d = d + dd >>> 0;
    }
    return crypt2.endian([a, b, c, d]);
  };
  md52._ff = function(a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md52._gg = function(a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md52._hh = function(a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md52._ii = function(a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return (n << s | n >>> 32 - s) + b;
  };
  md52._blocksize = 16;
  md52._digestsize = 16;
  md5$1.exports = function(message, options) {
    if (message === void 0 || message === null)
      throw new Error("Illegal argument " + message);
    var digestbytes = crypt2.wordsToBytes(md52(message, options));
    return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt2.bytesToHex(digestbytes);
  };
})();
var md5Exports = md5$1.exports;
const md5 = /* @__PURE__ */ getDefaultExportFromCjs(md5Exports);
const _sfc_main = {
  beforeCreate() {
    if (TokenModel.Api_is_login()) {
      this.$router.push("/center");
    }
  },
  created() {
    this.username = localStorage.getItem("username");
  },
  data: () => ({
    show1: true,
    show2: false,
    username: "",
    password: "",
    rules: [
      (value) => {
        if (value)
          return true;
        return "这里填写的应该是你的用户名，而不是你机器人的用户名";
      }
    ]
  }),
  methods: {
    gotonext() {
      if (this.username.length > 1) {
        this.show1 = false;
        this.show2 = true;
        localStorage.setItem("username", this.username);
      }
    },
    clearout() {
      this.show2 = false;
      this.show1 = true;
      this.username = "";
      localStorage.removeItem("username");
    },
    async login() {
      var ret = await new Net("/v1/user/auth/login").PostFormData({
        username: this.username,
        password: md5(this.password)
      });
      if (ret.isSuccess) {
        TokenModel.Api_set_uidAndToken(ret.data["uid"], ret.data["token"]);
        this.$router.push("/center");
      }
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-h6 mb-4" }, "填写密码", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-body-2" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(VContainer, { class: "align-self-center" }, {
    default: withCtx(() => [
      _ctx.show1 ? (openBlock(), createBlock(VCard, {
        key: 0,
        class: "mx-auto",
        "max-width": "200",
        height: "200",
        image: _imports_0,
        title: "GobotQ",
        theme: "dark"
      })) : createCommentVNode("", true),
      withDirectives(createVNode(VSheet, {
        width: "100%",
        class: "mx-auto mt-6"
      }, {
        default: withCtx(() => [
          createVNode(VForm, {
            onSubmit: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent"]))
          }, {
            default: withCtx(() => [
              createVNode(VTextField, {
                autofocus: "",
                modelValue: _ctx.username,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.username = $event),
                rules: _ctx.rules,
                label: "这里输入你的用户名"
              }, null, 8, ["modelValue", "rules"]),
              createVNode(VBtn, {
                type: "submit",
                block: "",
                class: "mt-0",
                color: "blue",
                onClick: $options.gotonext
              }, {
                default: withCtx(() => [
                  createTextVNode("下一步")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(VBtn, {
                type: "submit",
                block: "",
                class: "mt-4",
                color: "grey",
                onClick: $options.clearout
              }, {
                default: withCtx(() => [
                  createTextVNode("清空数据")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 512), [
        [vShow, _ctx.show1]
      ]),
      createVNode(VSlideYTransition, null, {
        default: withCtx(() => [
          withDirectives(createVNode(VCard, {
            class: "py-8 px-6 text-center mx-auto ma-4",
            elevation: "12",
            "max-width": "100%",
            width: "100%"
          }, {
            default: withCtx(() => [
              _hoisted_1,
              _hoisted_2,
              createVNode(VSheet, { color: "surface" }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.password = $event),
                    type: "password",
                    label: "密码",
                    "max-width": "400"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(VBtn, {
                onClick: $options.login,
                class: "my-4",
                color: "blue",
                height: "40",
                text: "验证并登录",
                variant: "flat",
                width: "70%"
              }, null, 8, ["onClick"]),
              createVNode(VBtn, {
                onClick: $options.clearout,
                class: "my-4",
                color: "grey",
                height: "40",
                text: "返回",
                variant: "flat",
                width: "70%"
              }, null, 8, ["onClick"])
            ]),
            _: 1
          }, 512), [
            [vShow, _ctx.show2]
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  login as default
};
