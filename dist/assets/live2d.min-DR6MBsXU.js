!function(t) {
  function i(r) {
    if (e[r])
      return e[r].exports;
    var o = e[r] = { i: r, l: false, exports: {} };
    return t[r].call(o.exports, o, o.exports, i), o.l = true, o.exports;
  }
  var e = {};
  i.m = t, i.c = e, i.d = function(t2, e2, r) {
    i.o(t2, e2) || Object.defineProperty(t2, e2, { configurable: false, enumerable: true, get: r });
  }, i.n = function(t2) {
    var e2 = t2 && t2.__esModule ? function() {
      return t2.default;
    } : function() {
      return t2;
    };
    return i.d(e2, "a", e2), e2;
  }, i.o = function(t2, i2) {
    return Object.prototype.hasOwnProperty.call(t2, i2);
  }, i.p = "", i(i.s = 4);
}([function(t, i, e) {
  function r() {
    this.live2DModel = null, this.modelMatrix = null, this.eyeBlink = null, this.physics = null, this.pose = null, this.debugMode = false, this.initialized = false, this.updating = false, this.alpha = 1, this.accAlpha = 0, this.lipSync = false, this.lipSyncValue = 0, this.accelX = 0, this.accelY = 0, this.accelZ = 0, this.dragX = 0, this.dragY = 0, this.startTimeMSec = null, this.mainMotionManager = new h(), this.expressionManager = new h(), this.motions = {}, this.expressions = {}, this.isTexLoaded = false;
  }
  function o() {
    AMotion.prototype.constructor.call(this), this.paramList = new Array();
  }
  function n() {
    this.id = "", this.type = -1, this.value = null;
  }
  function s() {
    this.nextBlinkTime = null, this.stateStartTime = null, this.blinkIntervalMsec = null, this.eyeState = g.STATE_FIRST, this.blinkIntervalMsec = 4e3, this.closingMotionMsec = 100, this.closedMotionMsec = 50, this.openingMotionMsec = 150, this.closeIfZero = true, this.eyeID_L = "PARAM_EYE_L_OPEN", this.eyeID_R = "PARAM_EYE_R_OPEN";
  }
  function _() {
    this.tr = new Float32Array(16), this.identity();
  }
  function a(t2, i2) {
    _.prototype.constructor.call(this), this.width = t2, this.height = i2;
  }
  function h() {
    MotionQueueManager.prototype.constructor.call(this), this.currentPriority = null, this.reservePriority = null, this.super = MotionQueueManager.prototype;
  }
  function l() {
    this.physicsList = new Array(), this.startTimeMSec = UtSystem.getUserTimeMSec();
  }
  function $() {
    this.lastTime = 0, this.lastModel = null, this.partsGroups = new Array();
  }
  function u(t2) {
    this.paramIndex = -1, this.partsIndex = -1, this.link = null, this.id = t2;
  }
  function p() {
    this.EPSILON = 0.01, this.faceTargetX = 0, this.faceTargetY = 0, this.faceX = 0, this.faceY = 0, this.faceVX = 0, this.faceVY = 0, this.lastTimeSec = 0;
  }
  function f() {
    _.prototype.constructor.call(this), this.screenLeft = null, this.screenRight = null, this.screenTop = null, this.screenBottom = null, this.maxLeft = null, this.maxRight = null, this.maxTop = null, this.maxBottom = null, this.max = Number.MAX_VALUE, this.min = 0;
  }
  function c() {
  }
  var d = 0;
  r.prototype.getModelMatrix = function() {
    return this.modelMatrix;
  }, r.prototype.setAlpha = function(t2) {
    t2 > 0.999 && (t2 = 1), t2 < 1e-3 && (t2 = 0), this.alpha = t2;
  }, r.prototype.getAlpha = function() {
    return this.alpha;
  }, r.prototype.isInitialized = function() {
    return this.initialized;
  }, r.prototype.setInitialized = function(t2) {
    this.initialized = t2;
  }, r.prototype.isUpdating = function() {
    return this.updating;
  }, r.prototype.setUpdating = function(t2) {
    this.updating = t2;
  }, r.prototype.getLive2DModel = function() {
    return this.live2DModel;
  }, r.prototype.setLipSync = function(t2) {
    this.lipSync = t2;
  }, r.prototype.setLipSyncValue = function(t2) {
    this.lipSyncValue = t2;
  }, r.prototype.setAccel = function(t2, i2, e2) {
    this.accelX = t2, this.accelY = i2, this.accelZ = e2;
  }, r.prototype.setDrag = function(t2, i2) {
    this.dragX = t2, this.dragY = i2;
  }, r.prototype.getMainMotionManager = function() {
    return this.mainMotionManager;
  }, r.prototype.getExpressionManager = function() {
    return this.expressionManager;
  }, r.prototype.loadModelData = function(t2, i2) {
    var e2 = c.getPlatformManager();
    this.debugMode && e2.log("Load model : " + t2);
    var r2 = this;
    e2.loadLive2DModel(t2, function(t3) {
      if (r2.live2DModel = t3, r2.live2DModel.saveParam(), Live2D.getError() != 0)
        return void console.error("Error : Failed to loadModelData().");
      r2.modelMatrix = new a(r2.live2DModel.getCanvasWidth(), r2.live2DModel.getCanvasHeight()), r2.modelMatrix.setWidth(2), r2.modelMatrix.setCenterPosition(0, 0), i2(r2.live2DModel);
    });
  }, r.prototype.loadTexture = function(t2, i2, e2) {
    d++;
    var r2 = c.getPlatformManager();
    this.debugMode && r2.log("Load Texture : " + i2);
    var o2 = this;
    r2.loadTexture(this.live2DModel, t2, i2, function() {
      d--, d == 0 && (o2.isTexLoaded = true), typeof e2 === "function" && e2();
    });
  }, r.prototype.loadMotion = function(t2, i2, e2) {
    var r2 = c.getPlatformManager();
    this.debugMode && r2.log("Load Motion : " + i2);
    var o2 = null;
    var n2 = this;
    r2.loadBytes(i2, function(i3) {
      o2 = Live2DMotion.loadMotion(i3), t2 != null && (n2.motions[t2] = o2), e2(o2);
    });
  }, r.prototype.loadExpression = function(t2, i2, e2) {
    var r2 = c.getPlatformManager();
    this.debugMode && r2.log("Load Expression : " + i2);
    var n2 = this;
    r2.loadBytes(i2, function(i3) {
      t2 != null && (n2.expressions[t2] = o.loadJson(i3)), typeof e2 === "function" && e2();
    });
  }, r.prototype.loadPose = function(t2, i2) {
    var e2 = c.getPlatformManager();
    this.debugMode && e2.log("Load Pose : " + t2);
    var r2 = this;
    try {
      e2.loadBytes(t2, function(t3) {
        r2.pose = $.load(t3), typeof i2 === "function" && i2();
      });
    } catch (t3) {
      console.warn(t3);
    }
  }, r.prototype.loadPhysics = function(t2) {
    var i2 = c.getPlatformManager();
    this.debugMode && i2.log("Load Physics : " + t2);
    var e2 = this;
    try {
      i2.loadBytes(t2, function(t3) {
        e2.physics = l.load(t3);
      });
    } catch (t3) {
      console.warn(t3);
    }
  }, r.prototype.hitTestSimple = function(t2, i2, e2) {
    if (this.live2DModel === null)
      return false;
    var r2 = this.live2DModel.getDrawDataIndex(t2);
    if (r2 < 0)
      return false;
    for (var o2 = this.live2DModel.getTransformedPoints(r2), n2 = this.live2DModel.getCanvasWidth(), s2 = 0, _2 = this.live2DModel.getCanvasHeight(), a2 = 0, h2 = 0; h2 < o2.length; h2 += 2) {
      var l2 = o2[h2];
      var $2 = o2[h2 + 1];
      l2 < n2 && (n2 = l2), l2 > s2 && (s2 = l2), $2 < _2 && (_2 = $2), $2 > a2 && (a2 = $2);
    }
    var u2 = this.modelMatrix.invertTransformX(i2);
    var p2 = this.modelMatrix.invertTransformY(e2);
    return n2 <= u2 && u2 <= s2 && _2 <= p2 && p2 <= a2;
  }, r.prototype.hitTestSimpleCustom = function(t2, i2, e2, r2) {
    return this.live2DModel !== null && (e2 >= t2[0] && e2 <= i2[0] && r2 <= t2[1] && r2 >= i2[1]);
  }, o.prototype = new AMotion(), o.EXPRESSION_DEFAULT = "DEFAULT", o.TYPE_SET = 0, o.TYPE_ADD = 1, o.TYPE_MULT = 2, o.loadJson = function(t2) {
    var i2 = new o();
    var e2 = c.getPlatformManager();
    var r2 = e2.jsonParseFromBytes(t2);
    if (i2.setFadeIn(parseInt(r2.fade_in) > 0 ? parseInt(r2.fade_in) : 1e3), i2.setFadeOut(parseInt(r2.fade_out) > 0 ? parseInt(r2.fade_out) : 1e3), r2.params == null)
      return i2;
    var s2 = r2.params;
    var _2 = s2.length;
    i2.paramList = [];
    for (var a2 = 0; a2 < _2; a2++) {
      var h2 = s2[a2];
      var l2 = h2.id.toString();
      var $2 = parseFloat(h2.val);
      var u2 = o.TYPE_ADD;
      var p2 = h2.calc != null ? h2.calc.toString() : "add";
      if ((u2 = p2 === "add" ? o.TYPE_ADD : p2 === "mult" ? o.TYPE_MULT : p2 === "set" ? o.TYPE_SET : o.TYPE_ADD) == o.TYPE_ADD) {
        var f2 = h2.def == null ? 0 : parseFloat(h2.def);
        $2 -= f2;
      } else if (u2 == o.TYPE_MULT) {
        var f2 = h2.def == null ? 1 : parseFloat(h2.def);
        f2 == 0 && (f2 = 1), $2 /= f2;
      }
      var d2 = new n();
      d2.id = l2, d2.type = u2, d2.value = $2, i2.paramList.push(d2);
    }
    return i2;
  }, o.prototype.updateParamExe = function(t2, i2, e2, r2) {
    for (var n2 = this.paramList.length - 1; n2 >= 0; --n2) {
      var s2 = this.paramList[n2];
      s2.type == o.TYPE_ADD ? t2.addToParamFloat(s2.id, s2.value, e2) : s2.type == o.TYPE_MULT ? t2.multParamFloat(s2.id, s2.value, e2) : s2.type == o.TYPE_SET && t2.setParamFloat(s2.id, s2.value, e2);
    }
  }, s.prototype.calcNextBlink = function() {
    return UtSystem.getUserTimeMSec() + Math.random() * (2 * this.blinkIntervalMsec - 1);
  }, s.prototype.setInterval = function(t2) {
    this.blinkIntervalMsec = t2;
  }, s.prototype.setEyeMotion = function(t2, i2, e2) {
    this.closingMotionMsec = t2, this.closedMotionMsec = i2, this.openingMotionMsec = e2;
  }, s.prototype.updateParam = function(t2) {
    var i2;
    var e2 = UtSystem.getUserTimeMSec();
    var r2 = 0;
    switch (this.eyeState) {
      case g.STATE_CLOSING:
        r2 = (e2 - this.stateStartTime) / this.closingMotionMsec, r2 >= 1 && (r2 = 1, this.eyeState = g.STATE_CLOSED, this.stateStartTime = e2), i2 = 1 - r2;
        break;
      case g.STATE_CLOSED:
        r2 = (e2 - this.stateStartTime) / this.closedMotionMsec, r2 >= 1 && (this.eyeState = g.STATE_OPENING, this.stateStartTime = e2), i2 = 0;
        break;
      case g.STATE_OPENING:
        r2 = (e2 - this.stateStartTime) / this.openingMotionMsec, r2 >= 1 && (r2 = 1, this.eyeState = g.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink()), i2 = r2;
        break;
      case g.STATE_INTERVAL:
        this.nextBlinkTime < e2 && (this.eyeState = g.STATE_CLOSING, this.stateStartTime = e2), i2 = 1;
        break;
      case g.STATE_FIRST:
      default:
        this.eyeState = g.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink(), i2 = 1;
    }
    this.closeIfZero || (i2 = -i2), t2.setParamFloat(this.eyeID_L, i2), t2.setParamFloat(this.eyeID_R, i2);
  };
  var g = function() {
  };
  g.STATE_FIRST = "STATE_FIRST", g.STATE_INTERVAL = "STATE_INTERVAL", g.STATE_CLOSING = "STATE_CLOSING", g.STATE_CLOSED = "STATE_CLOSED", g.STATE_OPENING = "STATE_OPENING", _.mul = function(t2, i2, e2) {
    var r2;
    var o2;
    var n2;
    var s2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (r2 = 0; r2 < 4; r2++)
      for (o2 = 0; o2 < 4; o2++)
        for (n2 = 0; n2 < 4; n2++)
          s2[r2 + 4 * o2] += t2[r2 + 4 * n2] * i2[n2 + 4 * o2];
    for (r2 = 0; r2 < 16; r2++)
      e2[r2] = s2[r2];
  }, _.prototype.identity = function() {
    for (var t2 = 0; t2 < 16; t2++)
      this.tr[t2] = t2 % 5 == 0 ? 1 : 0;
  }, _.prototype.getArray = function() {
    return this.tr;
  }, _.prototype.getCopyMatrix = function() {
    return new Float32Array(this.tr);
  }, _.prototype.setMatrix = function(t2) {
    if (this.tr != null && this.tr.length == this.tr.length)
      for (var i2 = 0; i2 < 16; i2++)
        this.tr[i2] = t2[i2];
  }, _.prototype.getScaleX = function() {
    return this.tr[0];
  }, _.prototype.getScaleY = function() {
    return this.tr[5];
  }, _.prototype.transformX = function(t2) {
    return this.tr[0] * t2 + this.tr[12];
  }, _.prototype.transformY = function(t2) {
    return this.tr[5] * t2 + this.tr[13];
  }, _.prototype.invertTransformX = function(t2) {
    return (t2 - this.tr[12]) / this.tr[0];
  }, _.prototype.invertTransformY = function(t2) {
    return (t2 - this.tr[13]) / this.tr[5];
  }, _.prototype.multTranslate = function(t2, i2) {
    var e2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, i2, 0, 1];
    _.mul(e2, this.tr, this.tr);
  }, _.prototype.translate = function(t2, i2) {
    this.tr[12] = t2, this.tr[13] = i2;
  }, _.prototype.translateX = function(t2) {
    this.tr[12] = t2;
  }, _.prototype.translateY = function(t2) {
    this.tr[13] = t2;
  }, _.prototype.multScale = function(t2, i2) {
    var e2 = [t2, 0, 0, 0, 0, i2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    _.mul(e2, this.tr, this.tr);
  }, _.prototype.scale = function(t2, i2) {
    this.tr[0] = t2, this.tr[5] = i2;
  }, a.prototype = new _(), a.prototype.setPosition = function(t2, i2) {
    this.translate(t2, i2);
  }, a.prototype.setCenterPosition = function(t2, i2) {
    var e2 = this.width * this.getScaleX();
    var r2 = this.height * this.getScaleY();
    this.translate(t2 - e2 / 2, i2 - r2 / 2);
  }, a.prototype.top = function(t2) {
    this.setY(t2);
  }, a.prototype.bottom = function(t2) {
    var i2 = this.height * this.getScaleY();
    this.translateY(t2 - i2);
  }, a.prototype.left = function(t2) {
    this.setX(t2);
  }, a.prototype.right = function(t2) {
    var i2 = this.width * this.getScaleX();
    this.translateX(t2 - i2);
  }, a.prototype.centerX = function(t2) {
    var i2 = this.width * this.getScaleX();
    this.translateX(t2 - i2 / 2);
  }, a.prototype.centerY = function(t2) {
    var i2 = this.height * this.getScaleY();
    this.translateY(t2 - i2 / 2);
  }, a.prototype.setX = function(t2) {
    this.translateX(t2);
  }, a.prototype.setY = function(t2) {
    this.translateY(t2);
  }, a.prototype.setHeight = function(t2) {
    var i2 = t2 / this.height;
    var e2 = -i2;
    this.scale(i2, e2);
  }, a.prototype.setWidth = function(t2) {
    var i2 = t2 / this.width;
    var e2 = -i2;
    this.scale(i2, e2);
  }, h.prototype = new MotionQueueManager(), h.prototype.getCurrentPriority = function() {
    return this.currentPriority;
  }, h.prototype.getReservePriority = function() {
    return this.reservePriority;
  }, h.prototype.reserveMotion = function(t2) {
    return !(this.reservePriority >= t2) && (!(this.currentPriority >= t2) && (this.reservePriority = t2, true));
  }, h.prototype.setReservePriority = function(t2) {
    this.reservePriority = t2;
  }, h.prototype.updateParam = function(t2) {
    var i2 = MotionQueueManager.prototype.updateParam.call(this, t2);
    return this.isFinished() && (this.currentPriority = 0), i2;
  }, h.prototype.startMotionPrio = function(t2, i2) {
    return i2 == this.reservePriority && (this.reservePriority = 0), this.currentPriority = i2, this.startMotion(t2, false);
  }, l.load = function(t2) {
    for (var i2 = new l(), e2 = c.getPlatformManager(), r2 = e2.jsonParseFromBytes(t2), o2 = r2.physics_hair, n2 = o2.length, s2 = 0; s2 < n2; s2++) {
      var _2 = o2[s2];
      var a2 = new PhysicsHair();
      var h2 = _2.setup;
      var $2 = parseFloat(h2.length);
      var u2 = parseFloat(h2.regist);
      var p2 = parseFloat(h2.mass);
      a2.setup($2, u2, p2);
      for (var f2 = _2.src, d2 = f2.length, g2 = 0; g2 < d2; g2++) {
        var y = f2[g2];
        var m2 = y.id;
        var T = PhysicsHair.Src.SRC_TO_X;
        var P = y.ptype;
        P === "x" ? T = PhysicsHair.Src.SRC_TO_X : P === "y" ? T = PhysicsHair.Src.SRC_TO_Y : P === "angle" ? T = PhysicsHair.Src.SRC_TO_G_ANGLE : UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
        var S = parseFloat(y.scale);
        var v = parseFloat(y.weight);
        a2.addSrcParam(T, m2, S, v);
      }
      for (var L = _2.targets, M = L.length, g2 = 0; g2 < M; g2++) {
        var E = L[g2];
        var m2 = E.id;
        var T = PhysicsHair.Target.TARGET_FROM_ANGLE;
        var P = E.ptype;
        P === "angle" ? T = PhysicsHair.Target.TARGET_FROM_ANGLE : P === "angle_v" ? T = PhysicsHair.Target.TARGET_FROM_ANGLE_V : UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target");
        var S = parseFloat(E.scale);
        var v = parseFloat(E.weight);
        a2.addTargetParam(T, m2, S, v);
      }
      i2.physicsList.push(a2);
    }
    return i2;
  }, l.prototype.updateParam = function(t2) {
    for (var i2 = UtSystem.getUserTimeMSec() - this.startTimeMSec, e2 = 0; e2 < this.physicsList.length; e2++)
      this.physicsList[e2].update(t2, i2);
  }, $.load = function(t2) {
    for (var i2 = new $(), e2 = c.getPlatformManager(), r2 = e2.jsonParseFromBytes(t2), o2 = r2.parts_visible, n2 = o2.length, s2 = 0; s2 < n2; s2++) {
      for (var _2 = o2[s2], a2 = _2.group, h2 = a2.length, l2 = new Array(), p2 = 0; p2 < h2; p2++) {
        var f2 = a2[p2];
        var d2 = new u(f2.id);
        if (l2[p2] = d2, f2.link != null) {
          var g2 = f2.link;
          var y = g2.length;
          d2.link = new Array();
          for (var m2 = 0; m2 < y; m2++) {
            var T = new u(g2[m2]);
            d2.link.push(T);
          }
        }
      }
      i2.partsGroups.push(l2);
    }
    return i2;
  }, $.prototype.updateParam = function(t2) {
    if (t2 != null) {
      t2 != this.lastModel && this.initParam(t2), this.lastModel = t2;
      var i2 = UtSystem.getUserTimeMSec();
      var e2 = this.lastTime == 0 ? 0 : (i2 - this.lastTime) / 1e3;
      this.lastTime = i2, e2 < 0 && (e2 = 0);
      for (var r2 = 0; r2 < this.partsGroups.length; r2++)
        this.normalizePartsOpacityGroup(t2, this.partsGroups[r2], e2), this.copyOpacityOtherParts(t2, this.partsGroups[r2]);
    }
  }, $.prototype.initParam = function(t2) {
    if (t2 != null)
      for (var i2 = 0; i2 < this.partsGroups.length; i2++)
        for (var e2 = this.partsGroups[i2], r2 = 0; r2 < e2.length; r2++) {
          e2[r2].initIndex(t2);
          var o2 = e2[r2].partsIndex;
          var n2 = e2[r2].paramIndex;
          if (!(o2 < 0)) {
            var s2 = t2.getParamFloat(n2) != 0;
            if (t2.setPartsOpacity(o2, s2 ? 1 : 0), t2.setParamFloat(n2, s2 ? 1 : 0), e2[r2].link != null)
              for (var _2 = 0; _2 < e2[r2].link.length; _2++)
                e2[r2].link[_2].initIndex(t2);
          }
        }
  }, $.prototype.normalizePartsOpacityGroup = function(t2, i2, e2) {
    for (var r2 = -1, o2 = 1, n2 = 0; n2 < i2.length; n2++) {
      var s2 = i2[n2].partsIndex;
      var _2 = i2[n2].paramIndex;
      if (!(s2 < 0) && t2.getParamFloat(_2) != 0) {
        if (r2 >= 0)
          break;
        r2 = n2, o2 = t2.getPartsOpacity(s2), o2 += e2 / 0.5, o2 > 1 && (o2 = 1);
      }
    }
    r2 < 0 && (r2 = 0, o2 = 1);
    for (var n2 = 0; n2 < i2.length; n2++) {
      var s2 = i2[n2].partsIndex;
      if (!(s2 < 0))
        if (r2 == n2)
          t2.setPartsOpacity(s2, o2);
        else {
          var a2;
          var h2 = t2.getPartsOpacity(s2);
          a2 = o2 < 0.5 ? -0.5 * o2 / 0.5 + 1 : 0.5 * (1 - o2) / 0.5;
          var l2 = (1 - a2) * (1 - o2);
          l2 > 0.15 && (a2 = 1 - 0.15 / (1 - o2)), h2 > a2 && (h2 = a2), t2.setPartsOpacity(s2, h2);
        }
    }
  }, $.prototype.copyOpacityOtherParts = function(t2, i2) {
    for (var e2 = 0; e2 < i2.length; e2++) {
      var r2 = i2[e2];
      if (r2.link != null && !(r2.partsIndex < 0))
        for (var o2 = t2.getPartsOpacity(r2.partsIndex), n2 = 0; n2 < r2.link.length; n2++) {
          var s2 = r2.link[n2];
          s2.partsIndex < 0 || t2.setPartsOpacity(s2.partsIndex, o2);
        }
    }
  }, u.prototype.initIndex = function(t2) {
    this.paramIndex = t2.getParamIndex("VISIBLE:" + this.id), this.partsIndex = t2.getPartsDataIndex(PartsDataID.getID(this.id)), t2.setParamFloat(this.paramIndex, 1);
  }, p.FRAME_RATE = 30, p.prototype.setPoint = function(t2, i2) {
    this.faceTargetX = t2, this.faceTargetY = i2;
  }, p.prototype.getX = function() {
    return this.faceX;
  }, p.prototype.getY = function() {
    return this.faceY;
  }, p.prototype.update = function() {
    var t2 = 40 / 7.5 / p.FRAME_RATE;
    if (this.lastTimeSec == 0)
      return void (this.lastTimeSec = UtSystem.getUserTimeMSec());
    var i2 = UtSystem.getUserTimeMSec();
    var e2 = (i2 - this.lastTimeSec) * p.FRAME_RATE / 1e3;
    this.lastTimeSec = i2;
    var r2 = 0.15 * p.FRAME_RATE;
    var o2 = e2 * t2 / r2;
    var n2 = this.faceTargetX - this.faceX;
    var s2 = this.faceTargetY - this.faceY;
    if (!(Math.abs(n2) <= this.EPSILON && Math.abs(s2) <= this.EPSILON)) {
      var _2 = Math.sqrt(n2 * n2 + s2 * s2);
      var a2 = t2 * n2 / _2;
      var h2 = t2 * s2 / _2;
      var l2 = a2 - this.faceVX;
      var $2 = h2 - this.faceVY;
      var u2 = Math.sqrt(l2 * l2 + $2 * $2);
      (u2 < -o2 || u2 > o2) && (l2 *= o2 / u2, $2 *= o2 / u2, u2 = o2), this.faceVX += l2, this.faceVY += $2;
      var f2 = 0.5 * (Math.sqrt(o2 * o2 + 16 * o2 * _2 - 8 * o2 * _2) - o2);
      var c2 = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
      c2 > f2 && (this.faceVX *= f2 / c2, this.faceVY *= f2 / c2), this.faceX += this.faceVX, this.faceY += this.faceVY;
    }
  }, f.prototype = new _(), f.prototype.getMaxScale = function() {
    return this.max;
  }, f.prototype.getMinScale = function() {
    return this.min;
  }, f.prototype.setMaxScale = function(t2) {
    this.max = t2;
  }, f.prototype.setMinScale = function(t2) {
    this.min = t2;
  }, f.prototype.isMaxScale = function() {
    return this.getScaleX() == this.max;
  }, f.prototype.isMinScale = function() {
    return this.getScaleX() == this.min;
  }, f.prototype.adjustTranslate = function(t2, i2) {
    this.tr[0] * this.maxLeft + (this.tr[12] + t2) > this.screenLeft && (t2 = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12]), this.tr[0] * this.maxRight + (this.tr[12] + t2) < this.screenRight && (t2 = this.screenRight - this.tr[0] * this.maxRight - this.tr[12]), this.tr[5] * this.maxTop + (this.tr[13] + i2) < this.screenTop && (i2 = this.screenTop - this.tr[5] * this.maxTop - this.tr[13]), this.tr[5] * this.maxBottom + (this.tr[13] + i2) > this.screenBottom && (i2 = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13]);
    var e2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, i2, 0, 1];
    _.mul(e2, this.tr, this.tr);
  }, f.prototype.adjustScale = function(t2, i2, e2) {
    var r2 = e2 * this.tr[0];
    r2 < this.min ? this.tr[0] > 0 && (e2 = this.min / this.tr[0]) : r2 > this.max && this.tr[0] > 0 && (e2 = this.max / this.tr[0]);
    var o2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, i2, 0, 1];
    var n2 = [e2, 0, 0, 0, 0, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    var s2 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t2, -i2, 0, 1];
    _.mul(s2, this.tr, this.tr), _.mul(n2, this.tr, this.tr), _.mul(o2, this.tr, this.tr);
  }, f.prototype.setScreenRect = function(t2, i2, e2, r2) {
    this.screenLeft = t2, this.screenRight = i2, this.screenTop = r2, this.screenBottom = e2;
  }, f.prototype.setMaxScreenRect = function(t2, i2, e2, r2) {
    this.maxLeft = t2, this.maxRight = i2, this.maxTop = r2, this.maxBottom = e2;
  }, f.prototype.getScreenLeft = function() {
    return this.screenLeft;
  }, f.prototype.getScreenRight = function() {
    return this.screenRight;
  }, f.prototype.getScreenBottom = function() {
    return this.screenBottom;
  }, f.prototype.getScreenTop = function() {
    return this.screenTop;
  }, f.prototype.getMaxLeft = function() {
    return this.maxLeft;
  }, f.prototype.getMaxRight = function() {
    return this.maxRight;
  }, f.prototype.getMaxBottom = function() {
    return this.maxBottom;
  }, f.prototype.getMaxTop = function() {
    return this.maxTop;
  }, c.platformManager = null, c.getPlatformManager = function() {
    return c.platformManager;
  }, c.setPlatformManager = function(t2) {
    c.platformManager = t2;
  }, t.exports = { L2DTargetPoint: p, Live2DFramework: c, L2DViewMatrix: f, L2DPose: $, L2DPartsParam: u, L2DPhysics: l, L2DMotionManager: h, L2DModelMatrix: a, L2DMatrix44: _, EYE_STATE: g, L2DEyeBlink: s, L2DExpressionParam: n, L2DExpressionMotion: o, L2DBaseModel: r };
}, function(t, i, e) {
  var r = { DEBUG_LOG: false, DEBUG_MOUSE_LOG: false, DEBUG_DRAW_HIT_AREA: false, DEBUG_DRAW_ALPHA_MODEL: false, VIEW_MAX_SCALE: 2, VIEW_MIN_SCALE: 0.8, VIEW_LOGICAL_LEFT: -1, VIEW_LOGICAL_RIGHT: 1, VIEW_LOGICAL_MAX_LEFT: -2, VIEW_LOGICAL_MAX_RIGHT: 2, VIEW_LOGICAL_MAX_BOTTOM: -2, VIEW_LOGICAL_MAX_TOP: 2, PRIORITY_NONE: 0, PRIORITY_IDLE: 1, PRIORITY_SLEEPY: 2, PRIORITY_NORMAL: 3, PRIORITY_FORCE: 4, MOTION_GROUP_IDLE: "idle", MOTION_GROUP_SLEEPY: "sleepy", MOTION_GROUP_TAP_BODY: "tap_body", MOTION_GROUP_FLICK_HEAD: "flick_head", MOTION_GROUP_PINCH_IN: "pinch_in", MOTION_GROUP_PINCH_OUT: "pinch_out", MOTION_GROUP_SHAKE: "shake", HIT_AREA_HEAD: "head", HIT_AREA_BODY: "body" };
  t.exports = r;
}, function(t, i, e) {
  function r(t2) {
    n = t2;
  }
  function o() {
    return n;
  }
  Object.defineProperty(i, "__esModule", { value: true }), i.setContext = r, i.getContext = o;
  var n = void 0;
}, function(t, i, e) {
  function r() {
  }
  r.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.depth = 0, r.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.tmp = new Array(16), r.reset = function() {
    this.depth = 0;
  }, r.loadIdentity = function() {
    for (var t2 = 0; t2 < 16; t2++)
      this.currentMatrix[t2] = t2 % 5 == 0 ? 1 : 0;
  }, r.push = function() {
    var t2 = (this.depth, 16 * (this.depth + 1));
    this.matrixStack.length < t2 + 16 && (this.matrixStack.length = t2 + 16);
    for (var i2 = 0; i2 < 16; i2++)
      this.matrixStack[t2 + i2] = this.currentMatrix[i2];
    this.depth++;
  }, r.pop = function() {
    --this.depth < 0 && (myError("Invalid matrix stack."), this.depth = 0);
    for (var t2 = 16 * this.depth, i2 = 0; i2 < 16; i2++)
      this.currentMatrix[i2] = this.matrixStack[t2 + i2];
  }, r.getMatrix = function() {
    return this.currentMatrix;
  }, r.multMatrix = function(t2) {
    var i2, e2, r2;
    for (i2 = 0; i2 < 16; i2++)
      this.tmp[i2] = 0;
    for (i2 = 0; i2 < 4; i2++)
      for (e2 = 0; e2 < 4; e2++)
        for (r2 = 0; r2 < 4; r2++)
          this.tmp[i2 + 4 * e2] += this.currentMatrix[i2 + 4 * r2] * t2[r2 + 4 * e2];
    for (i2 = 0; i2 < 16; i2++)
      this.currentMatrix[i2] = this.tmp[i2];
  }, t.exports = r;
}, function(t, i, e) {
  t.exports = e(5);
}, function(t, i, e) {
  function r(t2) {
    return t2 && t2.__esModule ? t2 : { default: t2 };
  }
  function o(t2) {
    C = document.getElementById(t2), C.addEventListener && (window.addEventListener("click", g), window.addEventListener("mousedown", g), window.addEventListener("mousemove", g), window.addEventListener("mouseup", g), document.addEventListener("mouseout", g), window.addEventListener("touchstart", y), window.addEventListener("touchend", y), window.addEventListener("touchmove", y));
  }
  function n(t2) {
    var i2 = C.width;
    var e2 = C.height;
    N = new M.L2DTargetPoint();
    var r2 = e2 / i2;
    var o2 = w.default.VIEW_LOGICAL_LEFT;
    var n2 = w.default.VIEW_LOGICAL_RIGHT;
    var _2 = -r2;
    var h2 = r2;
    if (window.Live2D.captureFrame = false, B = new M.L2DViewMatrix(), B.setScreenRect(o2, n2, _2, h2), B.setMaxScreenRect(w.default.VIEW_LOGICAL_MAX_LEFT, w.default.VIEW_LOGICAL_MAX_RIGHT, w.default.VIEW_LOGICAL_MAX_BOTTOM, w.default.VIEW_LOGICAL_MAX_TOP), B.setMaxScale(w.default.VIEW_MAX_SCALE), B.setMinScale(w.default.VIEW_MIN_SCALE), U = new M.L2DMatrix44(), U.multScale(1, i2 / e2), G = new M.L2DMatrix44(), G.multTranslate(-i2 / 2, -e2 / 2), G.multScale(2 / i2, -2 / i2), F = v(), (0, D.setContext)(F), !F)
      return console.error("Failed to create WebGL context."), void (window.WebGLRenderingContext && console.error("Your browser don't support WebGL, check https://get.webgl.org/ for futher information."));
    window.Live2D.setGL(F), F.clearColor(0, 0, 0, 0), a(t2), s();
  }
  function s() {
    b || (b = true, function t2() {
      _();
      var i2 = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      if (window.Live2D.captureFrame) {
        window.Live2D.captureFrame = false;
        var e2 = document.createElement("a");
        document.body.appendChild(e2), e2.setAttribute("type", "hidden"), e2.href = C.toDataURL(), e2.download = window.Live2D.captureName || "live2d.png", e2.click();
      }
      i2(t2, C);
    }());
  }
  function _() {
    O.default.reset(), O.default.loadIdentity(), N.update(), R.setDrag(N.getX(), N.getY()), F.clear(F.COLOR_BUFFER_BIT), O.default.multMatrix(U.getArray()), O.default.multMatrix(B.getArray()), O.default.push();
    for (var t2 = 0; t2 < R.numModels(); t2++) {
      var i2 = R.getModel(t2);
      if (i2 == null)
        return;
      i2.initialized && !i2.updating && (i2.update(), i2.draw(F));
    }
    O.default.pop();
  }
  function a(t2) {
    R.reloadFlg = true, R.count++, R.changeModel(F, t2);
  }
  function h(t2, i2) {
    return t2.x * i2.x + t2.y * i2.y;
  }
  function l(t2, i2) {
    var e2 = Math.sqrt(t2 * t2 + i2 * i2);
    return { x: t2 / e2, y: i2 / e2 };
  }
  function $(t2, i2, e2) {
    function r2(t3, i3) {
      return 180 * Math.acos(h({ x: 0, y: 1 }, l(t3, i3))) / Math.PI;
    }
    if (i2.x < e2.left + e2.width && i2.y < e2.top + e2.height && i2.x > e2.left && i2.y > e2.top)
      return i2;
    var o2 = t2.x - i2.x;
    var n2 = t2.y - i2.y;
    var s2 = r2(o2, n2);
    i2.x < t2.x && (s2 = 360 - s2);
    var _2 = 360 - r2(e2.left - t2.x, -1 * (e2.top - t2.y));
    var a2 = 360 - r2(e2.left - t2.x, -1 * (e2.top + e2.height - t2.y));
    var $2 = r2(e2.left + e2.width - t2.x, -1 * (e2.top - t2.y));
    var u2 = r2(e2.left + e2.width - t2.x, -1 * (e2.top + e2.height - t2.y));
    var p2 = n2 / o2;
    var f2 = {};
    if (s2 < $2) {
      var c2 = e2.top - t2.y;
      var d2 = c2 / p2;
      f2 = { y: t2.y + c2, x: t2.x + d2 };
    } else if (s2 < u2) {
      var g2 = e2.left + e2.width - t2.x;
      var y2 = g2 * p2;
      f2 = { y: t2.y + y2, x: t2.x + g2 };
    } else if (s2 < a2) {
      var m3 = e2.top + e2.height - t2.y;
      var T2 = m3 / p2;
      f2 = { y: t2.y + m3, x: t2.x + T2 };
    } else if (s2 < _2) {
      var P2 = t2.x - e2.left;
      var S2 = P2 * p2;
      f2 = { y: t2.y - S2, x: t2.x - P2 };
    } else {
      var v2 = e2.top - t2.y;
      var L2 = v2 / p2;
      f2 = { y: t2.y + v2, x: t2.x + L2 };
    }
    return f2;
  }
  function u(t2) {
    Y = true;
    var i2 = C.getBoundingClientRect();
    P(t2.clientX - i2.left);
    S(t2.clientY - i2.top);
    var o2 = $({ x: i2.left + i2.width / 2, y: i2.top + i2.height * X }, { x: t2.clientX, y: t2.clientY }, i2);
    var n2 = m2(o2.x - i2.left);
    var s2 = T(o2.y - i2.top);
    w.default.DEBUG_MOUSE_LOG && console.log("onMouseMove device( x:" + t2.clientX + " y:" + t2.clientY + " ) view( x:" + n2 + " y:" + s2 + ")"), N.setPoint(n2, s2);
  }
  function p(t2) {
    Y = true;
    var i2 = C.getBoundingClientRect();
    P(t2.clientX - i2.left);
    S(t2.clientY - i2.top);
    var o2 = $({ x: i2.left + i2.width / 2, y: i2.top + i2.height * X }, { x: t2.clientX, y: t2.clientY }, i2);
    var n2 = m2(o2.x - i2.left);
    var s2 = T(o2.y - i2.top);
    w.default.DEBUG_MOUSE_LOG && console.log("onMouseDown device( x:" + t2.clientX + " y:" + t2.clientY + " ) view( x:" + n2 + " y:" + s2 + ")"), R.tapEvent(n2, s2);
  }
  function f(t2) {
    var i2 = C.getBoundingClientRect();
    P(t2.clientX - i2.left);
    S(t2.clientY - i2.top);
    var o2 = $({ x: i2.left + i2.width / 2, y: i2.top + i2.height * X }, { x: t2.clientX, y: t2.clientY }, i2);
    var n2 = m2(o2.x - i2.left);
    var s2 = T(o2.y - i2.top);
    w.default.DEBUG_MOUSE_LOG && console.log("onMouseMove device( x:" + t2.clientX + " y:" + t2.clientY + " ) view( x:" + n2 + " y:" + s2 + ")"), Y && N.setPoint(n2, s2);
  }
  function c() {
    Y && (Y = false), N.setPoint(0, 0);
  }
  function d() {
    w.default.DEBUG_LOG && console.log("Set Session Storage."), sessionStorage.setItem("Sleepy", "1");
  }
  function g(t2) {
    if (t2.type == "mousewheel")
      ;
    else if (t2.type == "mousedown")
      p(t2);
    else if (t2.type == "mousemove") {
      var i2 = sessionStorage.getItem("Sleepy");
      i2 === "1" && sessionStorage.setItem("Sleepy", "0"), u(t2);
    } else if (t2.type == "mouseup") {
      if ("button" in t2 && t2.button != 0)
        return;
    } else if (t2.type == "mouseout") {
      w.default.DEBUG_LOG && console.log("Mouse out Window."), c();
      var e2 = sessionStorage.getItem("SleepyTimer");
      window.clearTimeout(e2), e2 = window.setTimeout(d, 5e4), sessionStorage.setItem("SleepyTimer", e2);
    }
  }
  function y(t2) {
    var i2 = t2.touches[0];
    t2.type == "touchstart" ? t2.touches.length == 1 && u(i2) : t2.type == "touchmove" ? f(i2) : t2.type == "touchend" && c();
  }
  function m2(t2) {
    var i2 = G.transformX(t2);
    return B.invertTransformX(i2);
  }
  function T(t2) {
    var i2 = G.transformY(t2);
    return B.invertTransformY(i2);
  }
  function P(t2) {
    return G.transformX(t2);
  }
  function S(t2) {
    return G.transformY(t2);
  }
  function v() {
    for (var t2 = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], i2 = 0; i2 < t2.length; i2++)
      try {
        var e2 = C.getContext(t2[i2], { premultipliedAlpha: true });
        if (e2)
          return e2;
      } catch (t3) {
      }
    return null;
  }
  function L(t2, i2, e2) {
    X = void 0 === e2 ? 0.5 : e2, o(t2), n(i2);
  }
  e(6);
  var M = e(0);
  var E = e(8);
  var A = r(E);
  var I = e(1);
  var w = r(I);
  var x = e(3);
  var O = r(x);
  var D = e(2);
  var R = (window.navigator.platform.toLowerCase(), new A.default());
  var b = false;
  var F = null;
  var C = null;
  var N = null;
  var B = null;
  var U = null;
  var G = null;
  var Y = false;
  var X = 0.5;
  window.loadlive2d = L;
}, function(t, i, e) {
  (function(t2) {
    !function() {
      function i2() {
        At || (this._$MT = null, this._$5S = null, this._$NP = 0, i2._$42++, this._$5S = new Y(this));
      }
      function e2(t3) {
        if (!At) {
          this.clipContextList = new Array(), this.glcontext = t3.gl, this.dp_webgl = t3, this.curFrameNo = 0, this.firstError_clipInNotUpdate = true, this.colorBuffer = 0, this.isInitGLFBFunc = false, this.tmpBoundsOnModel = new S(), at.glContext.length > at.frameBuffers.length && (this.curFrameNo = this.getMaskRenderTexture()), this.tmpModelToViewMatrix = new R(), this.tmpMatrix2 = new R(), this.tmpMatrixForMask = new R(), this.tmpMatrixForDraw = new R(), this.CHANNEL_COLORS = new Array();
          var i3 = new A();
          i3 = new A(), i3.r = 0, i3.g = 0, i3.b = 0, i3.a = 1, this.CHANNEL_COLORS.push(i3), i3 = new A(), i3.r = 1, i3.g = 0, i3.b = 0, i3.a = 0, this.CHANNEL_COLORS.push(i3), i3 = new A(), i3.r = 0, i3.g = 1, i3.b = 0, i3.a = 0, this.CHANNEL_COLORS.push(i3), i3 = new A(), i3.r = 0, i3.g = 0, i3.b = 1, i3.a = 0, this.CHANNEL_COLORS.push(i3);
          for (var e3 = 0; e3 < this.CHANNEL_COLORS.length; e3++)
            this.dp_webgl.setChannelFlagAsColor(e3, this.CHANNEL_COLORS[e3]);
        }
      }
      function r(t3, i3, e3) {
        this.clipIDList = new Array(), this.clipIDList = e3, this.clippingMaskDrawIndexList = new Array();
        for (var r2 = 0; r2 < e3.length; r2++)
          this.clippingMaskDrawIndexList.push(i3.getDrawDataIndex(e3[r2]));
        this.clippedDrawContextList = new Array(), this.isUsing = true, this.layoutChannelNo = 0, this.layoutBounds = new S(), this.allClippedDrawRect = new S(), this.matrixForMask = new Float32Array(16), this.matrixForDraw = new Float32Array(16), this.owner = t3;
      }
      function o(t3, i3) {
        this._$gP = t3, this.drawDataIndex = i3;
      }
      function n() {
        At || (this.color = null);
      }
      function s() {
        At || (this._$dP = null, this._$eo = null, this._$V0 = null, this._$dP = 1e3, this._$eo = 1e3, this._$V0 = 1, this._$a0());
      }
      function _() {
      }
      function a() {
        this._$r = null, this._$0S = null;
      }
      function h() {
        At || (this.x = null, this.y = null, this.width = null, this.height = null);
      }
      function l(t3) {
        At || et.prototype.constructor.call(this, t3);
      }
      function $() {
      }
      function u(t3) {
        At || et.prototype.constructor.call(this, t3);
      }
      function p() {
        At || (this._$vo = null, this._$F2 = null, this._$ao = 400, this._$1S = 400, p._$42++);
      }
      function f() {
        At || (this.p1 = new c(), this.p2 = new c(), this._$Fo = 0, this._$Db = 0, this._$L2 = 0, this._$M2 = 0, this._$ks = 0, this._$9b = 0, this._$iP = 0, this._$iT = 0, this._$lL = new Array(), this._$qP = new Array(), this.setup(0.3, 0.5, 0.1));
      }
      function c() {
        this._$p = 1, this.x = 0, this.y = 0, this.vx = 0, this.vy = 0, this.ax = 0, this.ay = 0, this.fx = 0, this.fy = 0, this._$s0 = 0, this._$70 = 0, this._$7L = 0, this._$HL = 0;
      }
      function d(t3, i3, e3) {
        this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t3, this.scale = i3, this._$V0 = e3;
      }
      function g(t3, i3, e3, r2) {
        d.prototype.constructor.call(this, i3, e3, r2), this._$tL = null, this._$tL = t3;
      }
      function y(t3, i3, e3) {
        this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t3, this.scale = i3, this._$V0 = e3;
      }
      function T(t3, i3, e3, r2) {
        y.prototype.constructor.call(this, i3, e3, r2), this._$YP = null, this._$YP = t3;
      }
      function P() {
        At || (this._$fL = 0, this._$gL = 0, this._$B0 = 1, this._$z0 = 1, this._$qT = 0, this.reflectX = false, this.reflectY = false);
      }
      function S() {
        At || (this.x = null, this.y = null, this.width = null, this.height = null);
      }
      function v() {
      }
      function L() {
        At || (this.x = null, this.y = null);
      }
      function M() {
        At || (this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null, this.clipID = null, this.clipIDList = new Array());
      }
      function E() {
        At || (this._$Eb = E._$ps, this._$lT = 1, this._$C0 = 1, this._$tT = 1, this._$WL = 1, this.culling = false, this.matrix4x4 = new Float32Array(16), this.premultipliedAlpha = false, this.anisotropy = 0, this.clippingProcess = E.CLIPPING_PROCESS_NONE, this.clipBufPre_clipContextMask = null, this.clipBufPre_clipContextDraw = null, this.CHANNEL_COLORS = new Array());
      }
      function A() {
        At || (this.a = 1, this.r = 1, this.g = 1, this.b = 1, this.scale = 1, this._$ho = 1, this.blendMode = at.L2D_COLOR_BLEND_MODE_MULT);
      }
      function I() {
        At || (this._$kP = null, this._$dr = null, this._$Ai = true, this._$mS = null);
      }
      function w() {
      }
      function x() {
        At || (this._$VP = 0, this._$wL = null, this._$GP = null, this._$8o = x._$ds, this._$2r = -1, this._$O2 = 0, this._$ri = 0);
      }
      function O() {
      }
      function D() {
        At || (this._$Ob = null);
      }
      function R() {
        this.m = new Float32Array(16), this.identity();
      }
      function b(t3) {
        At || et.prototype.constructor.call(this, t3);
      }
      function F() {
        At || (this._$7 = 1, this._$f = 0, this._$H = 0, this._$g = 1, this._$k = 0, this._$w = 0, this._$hi = STATE_IDENTITY, this._$Z = _$pS);
      }
      function C() {
        At || (s.prototype.constructor.call(this), this.motions = new Array(), this._$7r = null, this._$7r = C._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = true, this.loopFadeIn = true, this._$AS = -1, _$a0());
      }
      function N() {
        this._$P = new Float32Array(100), this.size = 0;
      }
      function B() {
        this._$4P = null, this._$I0 = null, this._$RP = null;
      }
      function U() {
      }
      function G() {
      }
      function Y(t3) {
        At || (this._$QT = true, this._$co = -1, this._$qo = 0, this._$pb = new Array(Y._$is), this._$_2 = new Float32Array(Y._$is), this._$vr = new Float32Array(Y._$is), this._$Rr = new Float32Array(Y._$is), this._$Or = new Float32Array(Y._$is), this._$fs = new Float32Array(Y._$is), this._$Js = new Array(Y._$is), this._$3S = new Array(), this._$aS = new Array(), this._$Bo = null, this._$F2 = new Array(), this._$db = new Array(), this._$8b = new Array(), this._$Hr = new Array(), this._$Ws = null, this._$Vs = null, this._$Er = null, this._$Es = new Int16Array(U._$Qb), this._$ZP = new Float32Array(2 * U._$1r), this._$Ri = t3, this._$b0 = Y._$HP++, this.clipManager = null, this.dp_webgl = null);
      }
      function k() {
      }
      function X() {
        At || (E.prototype.constructor.call(this), this._$sb = new Int32Array(X._$As), this._$U2 = new Array(), this.transform = null, this.gl = null, X._$NT == null && (X._$NT = X._$9r(256), X._$vS = X._$9r(256), X._$no = X._$vb(256)));
      }
      function z() {
        At || (I.prototype.constructor.call(this), this._$GS = null, this._$Y0 = null);
      }
      function H(t3) {
        _t.prototype.constructor.call(this, t3), this._$8r = I._$ur, this._$Yr = null, this._$Wr = null;
      }
      function W() {
        At || (M.prototype.constructor.call(this), this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null);
      }
      function j() {
        At || (this._$NL = null, this._$3S = null, this._$aS = null, j._$42++);
      }
      function q() {
        At || (i2.prototype.constructor.call(this), this._$zo = new X());
      }
      function J() {
        At || (s.prototype.constructor.call(this), this.motions = new Array(), this._$o2 = null, this._$7r = J._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = false, this.loopFadeIn = true, this._$rr = -1, this._$eP = 0);
      }
      function Q(t3, i3) {
        return String.fromCharCode(t3.getUint8(i3));
      }
      function N() {
        this._$P = new Float32Array(100), this.size = 0;
      }
      function B() {
        this._$4P = null, this._$I0 = null, this._$RP = null;
      }
      function Z() {
        At || (I.prototype.constructor.call(this), this._$o = 0, this._$A = 0, this._$GS = null, this._$Eo = null);
      }
      function K(t3) {
        _t.prototype.constructor.call(this, t3), this._$8r = I._$ur, this._$Cr = null, this._$hr = null;
      }
      function tt() {
        At || (this.visible = true, this._$g0 = false, this._$NL = null, this._$3S = null, this._$aS = null, tt._$42++);
      }
      function it(t3) {
        this._$VS = null, this._$e0 = null, this._$e0 = t3;
      }
      function et(t3) {
        At || (this.id = t3);
      }
      function ot() {
        At || (this._$4S = null);
      }
      function nt(t3, i3) {
        this.canvas = t3, this.context = i3, this.viewport = new Array(0, 0, t3.width, t3.height), this._$6r = 1, this._$xP = 0, this._$3r = 1, this._$uP = 0, this._$Qo = -1, this.cacheImages = {};
      }
      function st() {
        At || (this._$TT = null, this._$LT = null, this._$FS = null, this._$wL = null);
      }
      function _t(t3) {
        At || (this._$e0 = null, this._$IP = null, this._$JS = false, this._$AT = true, this._$e0 = t3, this.totalScale = 1, this._$7s = 1, this.totalOpacity = 1);
      }
      function at() {
      }
      function ht() {
      }
      function lt(t3) {
        At || (this._$ib = t3);
      }
      function $t() {
        At || (W.prototype.constructor.call(this), this._$LP = -1, this._$d0 = 0, this._$Yo = 0, this._$JP = null, this._$5P = null, this._$BP = null, this._$Eo = null, this._$Qi = null, this._$6s = $t._$ms, this.culling = true, this.gl_cacheImage = null, this.instanceNo = $t._$42++);
      }
      function ut(t3) {
        Mt.prototype.constructor.call(this, t3), this._$8r = W._$ur, this._$Cr = null, this._$hr = null;
      }
      function pt() {
        At || (this.x = null, this.y = null);
      }
      function ft(t3) {
        At || (i2.prototype.constructor.call(this), this.drawParamWebGL = new mt(t3), this.drawParamWebGL.setGL(at.getGL(t3)));
      }
      function ct() {
        At || (this.motions = null, this._$eb = false, this.motions = new Array());
      }
      function dt() {
        this._$w0 = null, this._$AT = true, this._$9L = false, this._$z2 = -1, this._$bs = -1, this._$Do = -1, this._$sr = null, this._$sr = dt._$Gs++;
      }
      function gt() {
        this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1);
      }
      function yt(t3) {
        At || et.prototype.constructor.call(this, t3);
      }
      function mt(t3) {
        At || (E.prototype.constructor.call(this), this.textures = new Array(), this.transform = null, this.gl = null, this.glno = t3, this.firstDraw = true, this.anisotropyExt = null, this.maxAnisotropy = 0, this._$As = 32, this._$Gr = false, this._$NT = null, this._$vS = null, this._$no = null, this.vertShader = null, this.fragShader = null, this.vertShaderOff = null, this.fragShaderOff = null);
      }
      function Tt(t3, i3, e3) {
        return i3 == null && (i3 = t3.createBuffer()), t3.bindBuffer(t3.ARRAY_BUFFER, i3), t3.bufferData(t3.ARRAY_BUFFER, e3, t3.DYNAMIC_DRAW), i3;
      }
      function Pt(t3, i3, e3) {
        return i3 == null && (i3 = t3.createBuffer()), t3.bindBuffer(t3.ELEMENT_ARRAY_BUFFER, i3), t3.bufferData(t3.ELEMENT_ARRAY_BUFFER, e3, t3.DYNAMIC_DRAW), i3;
      }
      function St(t3) {
        At || (this._$P = new Int8Array(8), this._$R0 = new DataView(this._$P.buffer), this._$3i = new Int8Array(1e3), this._$hL = 0, this._$v0 = 0, this._$S2 = 0, this._$Ko = new Array(), this._$T = t3, this._$F = 0);
      }
      function Lt() {
      }
      function Mt(t3) {
        At || (this._$e0 = null, this._$IP = null, this._$Us = null, this._$7s = null, this._$IS = [false], this._$VS = null, this._$AT = true, this.baseOpacity = 1, this.clipBufPre_clipContext = null, this._$e0 = t3);
      }
      function Et() {
      }
      var At = true;
      i2._$0s = 1, i2._$4s = 2, i2._$42 = 0, i2._$62 = function(t3, e3) {
        try {
          if (e3 instanceof ArrayBuffer && (e3 = new DataView(e3)), !(e3 instanceof DataView))
            throw new lt("_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");
          var r2;
          var o2 = new St(e3);
          var n2 = o2._$ST();
          var s2 = o2._$ST();
          var a2 = o2._$ST();
          if (n2 != 109 || s2 != 111 || a2 != 99)
            throw new lt("_$gi _$C _$li , _$Q0 _$P0.");
          if (r2 = o2._$ST(), o2._$gr(r2), r2 > G._$T7) {
            t3._$NP |= i2._$4s;
            throw new lt("_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : " + G._$T7 + " < _$f0 : " + r2 + " )@_$SS#loadModel()\n");
          }
          var h2 = o2._$nP();
          if (r2 >= G._$s7) {
            var l2 = o2._$9T();
            var $2 = o2._$9T();
            if (l2 != -30584 || $2 != -30584)
              throw t3._$NP |= i2._$0s, new lt("_$gi _$C _$li , _$0 _$6 _$Ui.");
          }
          t3._$KS(h2);
          var u2 = t3.getModelContext();
          u2.setDrawParam(t3.getDrawParam()), u2.init();
        } catch (t4) {
          _._$Rb(t4);
        }
      }, i2.prototype._$KS = function(t3) {
        this._$MT = t3;
      }, i2.prototype.getModelImpl = function() {
        return this._$MT == null && (this._$MT = new p(), this._$MT._$zP()), this._$MT;
      }, i2.prototype.getCanvasWidth = function() {
        return this._$MT == null ? 0 : this._$MT.getCanvasWidth();
      }, i2.prototype.getCanvasHeight = function() {
        return this._$MT == null ? 0 : this._$MT.getCanvasHeight();
      }, i2.prototype.getParamFloat = function(t3) {
        return typeof t3 !== "number" && (t3 = this._$5S.getParamIndex(u.getID(t3))), this._$5S.getParamFloat(t3);
      }, i2.prototype.setParamFloat = function(t3, i3, e3) {
        typeof t3 !== "number" && (t3 = this._$5S.getParamIndex(u.getID(t3))), arguments.length < 3 && (e3 = 1), this._$5S.setParamFloat(t3, this._$5S.getParamFloat(t3) * (1 - e3) + i3 * e3);
      }, i2.prototype.addToParamFloat = function(t3, i3, e3) {
        typeof t3 !== "number" && (t3 = this._$5S.getParamIndex(u.getID(t3))), arguments.length < 3 && (e3 = 1), this._$5S.setParamFloat(t3, this._$5S.getParamFloat(t3) + i3 * e3);
      }, i2.prototype.multParamFloat = function(t3, i3, e3) {
        typeof t3 !== "number" && (t3 = this._$5S.getParamIndex(u.getID(t3))), arguments.length < 3 && (e3 = 1), this._$5S.setParamFloat(t3, this._$5S.getParamFloat(t3) * (1 + (i3 - 1) * e3));
      }, i2.prototype.getParamIndex = function(t3) {
        return this._$5S.getParamIndex(u.getID(t3));
      }, i2.prototype.loadParam = function() {
        this._$5S.loadParam();
      }, i2.prototype.saveParam = function() {
        this._$5S.saveParam();
      }, i2.prototype.init = function() {
        this._$5S.init();
      }, i2.prototype.update = function() {
        this._$5S.update();
      }, i2.prototype._$Rs = function() {
        return _._$li("_$60 _$PT _$Rs()"), -1;
      }, i2.prototype._$Ds = function(t3) {
        _._$li("_$60 _$PT _$SS#_$Ds() \n");
      }, i2.prototype._$K2 = function() {
      }, i2.prototype.draw = function() {
      }, i2.prototype.getModelContext = function() {
        return this._$5S;
      }, i2.prototype._$s2 = function() {
        return this._$NP;
      }, i2.prototype._$P7 = function(t3, i3, e3, r2) {
        var o2 = -1;
        var n2 = 0;
        var s2 = this;
        if (e3 != 0)
          if (t3.length == 1) {
            var _2 = t3[0];
            var a2 = s2.getParamFloat(_2) != 0;
            var h2 = i3[0];
            var l2 = s2.getPartsOpacity(h2);
            var $2 = e3 / r2;
            a2 ? (l2 += $2) > 1 && (l2 = 1) : (l2 -= $2) < 0 && (l2 = 0), s2.setPartsOpacity(h2, l2);
          } else {
            for (var u2 = 0; u2 < t3.length; u2++) {
              var _2 = t3[u2];
              var p2 = s2.getParamFloat(_2) != 0;
              if (p2) {
                if (o2 >= 0)
                  break;
                o2 = u2;
                var h2 = i3[u2];
                n2 = s2.getPartsOpacity(h2), n2 += e3 / r2, n2 > 1 && (n2 = 1);
              }
            }
            o2 < 0 && (console.log("No _$wi _$q0/ _$U default[%s]", t3[0]), o2 = 0, n2 = 1, s2.loadParam(), s2.setParamFloat(t3[o2], n2), s2.saveParam());
            for (var u2 = 0; u2 < t3.length; u2++) {
              var h2 = i3[u2];
              if (o2 == u2)
                s2.setPartsOpacity(h2, n2);
              else {
                var f2;
                var c2 = s2.getPartsOpacity(h2);
                f2 = n2 < 0.5 ? -0.5 * n2 / 0.5 + 1 : 0.5 * (1 - n2) / 0.5;
                var d2 = (1 - f2) * (1 - n2);
                d2 > 0.15 && (f2 = 1 - 0.15 / (1 - n2)), c2 > f2 && (c2 = f2), s2.setPartsOpacity(h2, c2);
              }
            }
          }
        else
          for (var u2 = 0; u2 < t3.length; u2++) {
            var _2 = t3[u2];
            var h2 = i3[u2];
            var p2 = s2.getParamFloat(_2) != 0;
            s2.setPartsOpacity(h2, p2 ? 1 : 0);
          }
      }, i2.prototype.setPartsOpacity = function(t3, i3) {
        typeof t3 !== "number" && (t3 = this._$5S.getPartsDataIndex(l.getID(t3))), this._$5S.setPartsOpacity(t3, i3);
      }, i2.prototype.getPartsDataIndex = function(t3) {
        return t3 instanceof l || (t3 = l.getID(t3)), this._$5S.getPartsDataIndex(t3);
      }, i2.prototype.getPartsOpacity = function(t3) {
        return typeof t3 !== "number" && (t3 = this._$5S.getPartsDataIndex(l.getID(t3))), t3 < 0 ? 0 : this._$5S.getPartsOpacity(t3);
      }, i2.prototype.getDrawParam = function() {
      }, i2.prototype.getDrawDataIndex = function(t3) {
        return this._$5S.getDrawDataIndex(b.getID(t3));
      }, i2.prototype.getDrawData = function(t3) {
        return this._$5S.getDrawData(t3);
      }, i2.prototype.getTransformedPoints = function(t3) {
        var i3 = this._$5S._$C2(t3);
        return i3 instanceof ut ? i3.getTransformedPoints() : null;
      }, i2.prototype.getIndexArray = function(t3) {
        if (t3 < 0 || t3 >= this._$5S._$aS.length)
          return null;
        var i3 = this._$5S._$aS[t3];
        return i3 != null && i3.getType() == W._$wb && i3 instanceof $t ? i3.getIndexArray() : null;
      }, e2.CHANNEL_COUNT = 4, e2.RENDER_TEXTURE_USE_MIPMAP = false, e2.NOT_USED_FRAME = -100, e2.prototype._$L7 = function() {
        if (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null), this.tmpMatrix2 && (this.tmpMatrix2 = null), this.tmpMatrixForMask && (this.tmpMatrixForMask = null), this.tmpMatrixForDraw && (this.tmpMatrixForDraw = null), this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null), this.CHANNEL_COLORS) {
          for (var t3 = this.CHANNEL_COLORS.length - 1; t3 >= 0; --t3)
            this.CHANNEL_COLORS.splice(t3, 1);
          this.CHANNEL_COLORS = [];
        }
        this.releaseShader();
      }, e2.prototype.releaseShader = function() {
        for (var t3 = at.frameBuffers.length, i3 = 0; i3 < t3; i3++)
          this.gl.deleteFramebuffer(at.frameBuffers[i3].framebuffer);
        at.frameBuffers = [], at.glContext = [];
      }, e2.prototype.init = function(t3, i3, e3) {
        for (var o2 = 0; o2 < i3.length; o2++) {
          var n2 = i3[o2].getClipIDList();
          if (n2 != null) {
            var s2 = this.findSameClip(n2);
            s2 == null && (s2 = new r(this, t3, n2), this.clipContextList.push(s2));
            var _2 = i3[o2].getDrawDataID();
            var a2 = t3.getDrawDataIndex(_2);
            s2.addClippedDrawData(_2, a2);
            e3[o2].clipBufPre_clipContext = s2;
          }
        }
      }, e2.prototype.getMaskRenderTexture = function() {
        var t3 = null;
        return t3 = this.dp_webgl.createFramebuffer(), at.frameBuffers[this.dp_webgl.glno] = t3, this.dp_webgl.glno;
      }, e2.prototype.setupClip = function(t3, i3) {
        for (var e3 = 0, r2 = 0; r2 < this.clipContextList.length; r2++) {
          var o2 = this.clipContextList[r2];
          this.calcClippedDrawTotalBounds(t3, o2), o2.isUsing && e3++;
        }
        if (e3 > 0) {
          var n2 = i3.gl.getParameter(i3.gl.FRAMEBUFFER_BINDING);
          var s2 = new Array(4);
          s2[0] = 0, s2[1] = 0, s2[2] = i3.gl.canvas.width, s2[3] = i3.gl.canvas.height, i3.gl.viewport(0, 0, at.clippingMaskBufferSize, at.clippingMaskBufferSize), this.setupLayoutBounds(e3), i3.gl.bindFramebuffer(i3.gl.FRAMEBUFFER, at.frameBuffers[this.curFrameNo].framebuffer), i3.gl.clearColor(0, 0, 0, 0), i3.gl.clear(i3.gl.COLOR_BUFFER_BIT);
          for (var r2 = 0; r2 < this.clipContextList.length; r2++) {
            var o2 = this.clipContextList[r2];
            var _2 = o2.allClippedDrawRect;
            var a2 = (o2.layoutChannelNo, o2.layoutBounds);
            this.tmpBoundsOnModel._$jL(_2), this.tmpBoundsOnModel.expand(0.05 * _2.width, 0.05 * _2.height);
            var h2 = a2.width / this.tmpBoundsOnModel.width;
            var l2 = a2.height / this.tmpBoundsOnModel.height;
            this.tmpMatrix2.identity(), this.tmpMatrix2.translate(-1, -1, 0), this.tmpMatrix2.scale(2, 2, 1), this.tmpMatrix2.translate(a2.x, a2.y, 0), this.tmpMatrix2.scale(h2, l2, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m), this.tmpMatrix2.identity(), this.tmpMatrix2.translate(a2.x, a2.y, 0), this.tmpMatrix2.scale(h2, l2, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);
            for (var $2 = this.tmpMatrixForMask.getArray(), u2 = 0; u2 < 16; u2++)
              o2.matrixForMask[u2] = $2[u2];
            for (var p2 = this.tmpMatrixForDraw.getArray(), u2 = 0; u2 < 16; u2++)
              o2.matrixForDraw[u2] = p2[u2];
            for (var f2 = o2.clippingMaskDrawIndexList.length, c2 = 0; c2 < f2; c2++) {
              var d2 = o2.clippingMaskDrawIndexList[c2];
              var g2 = t3.getDrawData(d2);
              var y2 = t3._$C2(d2);
              i3.setClipBufPre_clipContextForMask(o2), g2.draw(i3, t3, y2);
            }
          }
          i3.gl.bindFramebuffer(i3.gl.FRAMEBUFFER, n2), i3.setClipBufPre_clipContextForMask(null), i3.gl.viewport(s2[0], s2[1], s2[2], s2[3]);
        }
      }, e2.prototype.getColorBuffer = function() {
        return this.colorBuffer;
      }, e2.prototype.findSameClip = function(t3) {
        for (var i3 = 0; i3 < this.clipContextList.length; i3++) {
          var e3 = this.clipContextList[i3];
          var r2 = e3.clipIDList.length;
          if (r2 == t3.length) {
            for (var o2 = 0, n2 = 0; n2 < r2; n2++)
              for (var s2 = e3.clipIDList[n2], _2 = 0; _2 < r2; _2++)
                if (t3[_2] == s2) {
                  o2++;
                  break;
                }
            if (o2 == r2)
              return e3;
          }
        }
        return null;
      }, e2.prototype.calcClippedDrawTotalBounds = function(t3, i3) {
        for (var e3 = t3._$Ri.getModelImpl().getCanvasWidth(), r2 = t3._$Ri.getModelImpl().getCanvasHeight(), o2 = e3 > r2 ? e3 : r2, n2 = o2, s2 = o2, _2 = 0, a2 = 0, h2 = i3.clippedDrawContextList.length, l2 = 0; l2 < h2; l2++) {
          var $2 = i3.clippedDrawContextList[l2];
          var u2 = $2.drawDataIndex;
          var p2 = t3._$C2(u2);
          if (p2._$yo()) {
            for (var f2 = p2.getTransformedPoints(), c2 = f2.length, d2 = [], g2 = [], y2 = 0, m2 = U._$i2; m2 < c2; m2 += U._$No)
              d2[y2] = f2[m2], g2[y2] = f2[m2 + 1], y2++;
            var T2 = Math.min.apply(null, d2);
            var P2 = Math.min.apply(null, g2);
            var S2 = Math.max.apply(null, d2);
            var v2 = Math.max.apply(null, g2);
            T2 < n2 && (n2 = T2), P2 < s2 && (s2 = P2), S2 > _2 && (_2 = S2), v2 > a2 && (a2 = v2);
          }
        }
        if (n2 == o2)
          i3.allClippedDrawRect.x = 0, i3.allClippedDrawRect.y = 0, i3.allClippedDrawRect.width = 0, i3.allClippedDrawRect.height = 0, i3.isUsing = false;
        else {
          var L2 = _2 - n2;
          var M2 = a2 - s2;
          i3.allClippedDrawRect.x = n2, i3.allClippedDrawRect.y = s2, i3.allClippedDrawRect.width = L2, i3.allClippedDrawRect.height = M2, i3.isUsing = true;
        }
      }, e2.prototype.setupLayoutBounds = function(t3) {
        var i3 = t3 / e2.CHANNEL_COUNT;
        var r2 = t3 % e2.CHANNEL_COUNT;
        i3 = ~~i3, r2 = ~~r2;
        for (var o2 = 0, n2 = 0; n2 < e2.CHANNEL_COUNT; n2++) {
          var s2 = i3 + (n2 < r2 ? 1 : 0);
          if (s2 == 0)
            ;
          else if (s2 == 1) {
            var a2 = this.clipContextList[o2++];
            a2.layoutChannelNo = n2, a2.layoutBounds.x = 0, a2.layoutBounds.y = 0, a2.layoutBounds.width = 1, a2.layoutBounds.height = 1;
          } else if (s2 == 2)
            for (var h2 = 0; h2 < s2; h2++) {
              var l2 = h2 % 2;
              var $2 = 0;
              l2 = ~~l2;
              var a2 = this.clipContextList[o2++];
              a2.layoutChannelNo = n2, a2.layoutBounds.x = 0.5 * l2, a2.layoutBounds.y = 0, a2.layoutBounds.width = 0.5, a2.layoutBounds.height = 1;
            }
          else if (s2 <= 4)
            for (var h2 = 0; h2 < s2; h2++) {
              var l2 = h2 % 2;
              var $2 = h2 / 2;
              l2 = ~~l2, $2 = ~~$2;
              var a2 = this.clipContextList[o2++];
              a2.layoutChannelNo = n2, a2.layoutBounds.x = 0.5 * l2, a2.layoutBounds.y = 0.5 * $2, a2.layoutBounds.width = 0.5, a2.layoutBounds.height = 0.5;
            }
          else if (s2 <= 9)
            for (var h2 = 0; h2 < s2; h2++) {
              var l2 = h2 % 3;
              var $2 = h2 / 3;
              l2 = ~~l2, $2 = ~~$2;
              var a2 = this.clipContextList[o2++];
              a2.layoutChannelNo = n2, a2.layoutBounds.x = l2 / 3, a2.layoutBounds.y = $2 / 3, a2.layoutBounds.width = 1 / 3, a2.layoutBounds.height = 1 / 3;
            }
          else
            _._$li("_$6 _$0P mask count : %d", s2);
        }
      }, r.prototype.addClippedDrawData = function(t3, i3) {
        var e3 = new o(t3, i3);
        this.clippedDrawContextList.push(e3);
      }, s._$JT = function(t3, i3, e3) {
        var r2 = t3 / i3;
        var o2 = e3 / i3;
        var n2 = o2;
        var s2 = 1 - (1 - o2) * (1 - o2);
        var _2 = 1 - (1 - n2) * (1 - n2);
        var a2 = 1 / 3 * (1 - o2) * s2 + (n2 * (2 / 3) + 1 / 3 * (1 - n2)) * (1 - s2);
        var h2 = (n2 + 2 / 3 * (1 - n2)) * _2 + (o2 * (1 / 3) + 2 / 3 * (1 - o2)) * (1 - _2);
        var l2 = 1 - 3 * h2 + 3 * a2 - 0;
        var $2 = 3 * h2 - 6 * a2 + 0;
        var u2 = 3 * a2 - 0;
        if (r2 <= 0)
          return 0;
        if (r2 >= 1)
          return 1;
        var p2 = r2;
        var f2 = p2 * p2;
        return l2 * (p2 * f2) + $2 * f2 + u2 * p2 + 0;
      }, s.prototype._$a0 = function() {
      }, s.prototype.setFadeIn = function(t3) {
        this._$dP = t3;
      }, s.prototype.setFadeOut = function(t3) {
        this._$eo = t3;
      }, s.prototype._$pT = function(t3) {
        this._$V0 = t3;
      }, s.prototype.getFadeOut = function() {
        return this._$eo;
      }, s.prototype._$4T = function() {
        return this._$eo;
      }, s.prototype._$mT = function() {
        return this._$V0;
      }, s.prototype.getDurationMSec = function() {
        return -1;
      }, s.prototype.getLoopDurationMSec = function() {
        return -1;
      }, s.prototype.updateParam = function(t3, i3) {
        if (i3._$AT && !i3._$9L) {
          var e3 = w.getUserTimeMSec();
          if (i3._$z2 < 0) {
            i3._$z2 = e3, i3._$bs = e3;
            var r2 = this.getDurationMSec();
            i3._$Do < 0 && (i3._$Do = r2 <= 0 ? -1 : i3._$z2 + r2);
          }
          var o2 = this._$V0;
          o2 = o2 * (this._$dP == 0 ? 1 : ht._$r2((e3 - i3._$bs) / this._$dP)) * (this._$eo == 0 || i3._$Do < 0 ? 1 : ht._$r2((i3._$Do - e3) / this._$eo)), o2 >= 0 && o2 <= 1 || console.log("### assert!! ### "), this.updateParamExe(t3, e3, o2, i3), i3._$Do > 0 && i3._$Do < e3 && (i3._$9L = true);
        }
      }, s.prototype.updateParamExe = function(t3, i3, e3, r2) {
      }, _._$8s = 0, _._$fT = new Object(), _.start = function(t3) {
        var i3 = _._$fT[t3];
        i3 == null && (i3 = new a(), i3._$r = t3, _._$fT[t3] = i3), i3._$0S = w.getSystemTimeMSec();
      }, _.dump = function(t3) {
        var i3 = _._$fT[t3];
        if (i3 != null) {
          var e3 = w.getSystemTimeMSec();
          var r2 = e3 - i3._$0S;
          return console.log(t3 + " : " + r2 + "ms"), r2;
        }
        return -1;
      }, _.end = function(t3) {
        var i3 = _._$fT[t3];
        if (i3 != null) {
          return w.getSystemTimeMSec() - i3._$0S;
        }
        return -1;
      }, _._$li = function(t3, i3) {
        console.log("_$li : " + t3 + "\n", i3);
      }, _._$Ji = function(t3, i3) {
        console.log(t3, i3);
      }, _._$dL = function(t3, i3) {
        console.log(t3, i3), console.log("\n");
      }, _._$KL = function(t3, i3) {
        for (var e3 = 0; e3 < i3; e3++)
          e3 % 16 == 0 && e3 > 0 ? console.log("\n") : e3 % 8 == 0 && e3 > 0 && console.log("  "), console.log("%02X ", 255 & t3[e3]);
        console.log("\n");
      }, _._$nr = function(t3, i3, e3) {
        console.log("%s\n", t3);
        for (var r2 = i3.length, o2 = 0; o2 < r2; ++o2)
          console.log("%5d", i3[o2]), console.log("%s\n", e3), console.log(",");
        console.log("\n");
      }, _._$Rb = function(t3) {
        console.log("dump exception : " + t3), console.log("stack :: " + t3.stack);
      }, h.prototype._$8P = function() {
        return 0.5 * (this.x + this.x + this.width);
      }, h.prototype._$6P = function() {
        return 0.5 * (this.y + this.y + this.height);
      }, h.prototype._$EL = function() {
        return this.x + this.width;
      }, h.prototype._$5T = function() {
        return this.y + this.height;
      }, h.prototype._$jL = function(t3, i3, e3, r2) {
        this.x = t3, this.y = i3, this.width = e3, this.height = r2;
      }, h.prototype._$jL = function(t3) {
        this.x = t3.x, this.y = t3.y, this.width = t3.width, this.height = t3.height;
      }, l.prototype = new et(), l._$tP = new Object(), l._$27 = function() {
        l._$tP.clear();
      }, l.getID = function(t3) {
        var i3 = l._$tP[t3];
        return i3 == null && (i3 = new l(t3), l._$tP[t3] = i3), i3;
      }, l.prototype._$3s = function() {
        return new l();
      }, u.prototype = new et(), u._$tP = new Object(), u._$27 = function() {
        u._$tP.clear();
      }, u.getID = function(t3) {
        var i3 = u._$tP[t3];
        return i3 == null && (i3 = new u(t3), u._$tP[t3] = i3), i3;
      }, u.prototype._$3s = function() {
        return new u();
      }, p._$42 = 0, p.prototype._$zP = function() {
        this._$vo == null && (this._$vo = new ot()), this._$F2 == null && (this._$F2 = new Array());
      }, p.prototype.getCanvasWidth = function() {
        return this._$ao;
      }, p.prototype.getCanvasHeight = function() {
        return this._$1S;
      }, p.prototype._$F0 = function(t3) {
        this._$vo = t3._$nP(), this._$F2 = t3._$nP(), this._$ao = t3._$6L(), this._$1S = t3._$6L();
      }, p.prototype._$6S = function(t3) {
        this._$F2.push(t3);
      }, p.prototype._$Xr = function() {
        return this._$F2;
      }, p.prototype._$E2 = function() {
        return this._$vo;
      }, f.prototype.setup = function(t3, i3, e3) {
        this._$ks = this._$Yb(), this.p2._$xT(), arguments.length == 3 && (this._$Fo = t3, this._$L2 = i3, this.p1._$p = e3, this.p2._$p = e3, this.p2.y = t3, this.setup());
      }, f.prototype.getPhysicsPoint1 = function() {
        return this.p1;
      }, f.prototype.getPhysicsPoint2 = function() {
        return this.p2;
      }, f.prototype._$qr = function() {
        return this._$Db;
      }, f.prototype._$pr = function(t3) {
        this._$Db = t3;
      }, f.prototype._$5r = function() {
        return this._$M2;
      }, f.prototype._$Cs = function() {
        return this._$9b;
      }, f.prototype._$Yb = function() {
        return -180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y)) / Math.PI;
      }, f.prototype.addSrcParam = function(t3, i3, e3, r2) {
        var o2 = new g(t3, i3, e3, r2);
        this._$lL.push(o2);
      }, f.prototype.addTargetParam = function(t3, i3, e3, r2) {
        var o2 = new T(t3, i3, e3, r2);
        this._$qP.push(o2);
      }, f.prototype.update = function(t3, i3) {
        if (this._$iP == 0)
          return this._$iP = this._$iT = i3, void (this._$Fo = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)));
        var e3 = (i3 - this._$iT) / 1e3;
        if (e3 != 0) {
          for (var r2 = this._$lL.length - 1; r2 >= 0; --r2) {
            this._$lL[r2]._$oP(t3, this);
          }
          this._$oo(t3, e3), this._$M2 = this._$Yb(), this._$9b = (this._$M2 - this._$ks) / e3, this._$ks = this._$M2;
        }
        for (var r2 = this._$qP.length - 1; r2 >= 0; --r2) {
          this._$qP[r2]._$YS(t3, this);
        }
        this._$iT = i3;
      }, f.prototype._$oo = function(t3, i3) {
        i3 < 0.033 && (i3 = 0.033);
        var e3 = 1 / i3;
        this.p1.vx = (this.p1.x - this.p1._$s0) * e3, this.p1.vy = (this.p1.y - this.p1._$70) * e3, this.p1.ax = (this.p1.vx - this.p1._$7L) * e3, this.p1.ay = (this.p1.vy - this.p1._$HL) * e3, this.p1.fx = this.p1.ax * this.p1._$p, this.p1.fy = this.p1.ay * this.p1._$p, this.p1._$xT();
        var r2;
        var o2;
        var n2 = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x);
        var s2 = Math.cos(n2);
        var _2 = Math.sin(n2);
        var a2 = 9.8 * this.p2._$p;
        var h2 = this._$Db * Lt._$bS;
        var l2 = a2 * Math.cos(n2 - h2);
        r2 = l2 * _2, o2 = l2 * s2;
        var $2 = -this.p1.fx * _2 * _2;
        var u2 = -this.p1.fy * _2 * s2;
        var p2 = -this.p2.vx * this._$L2;
        var f2 = -this.p2.vy * this._$L2;
        this.p2.fx = r2 + $2 + p2, this.p2.fy = o2 + u2 + f2, this.p2.ax = this.p2.fx / this.p2._$p, this.p2.ay = this.p2.fy / this.p2._$p, this.p2.vx += this.p2.ax * i3, this.p2.vy += this.p2.ay * i3, this.p2.x += this.p2.vx * i3, this.p2.y += this.p2.vy * i3;
        var c2 = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y));
        this.p2.x = this.p1.x + this._$Fo * (this.p2.x - this.p1.x) / c2, this.p2.y = this.p1.y + this._$Fo * (this.p2.y - this.p1.y) / c2, this.p2.vx = (this.p2.x - this.p2._$s0) * e3, this.p2.vy = (this.p2.y - this.p2._$70) * e3, this.p2._$xT();
      }, c.prototype._$xT = function() {
        this._$s0 = this.x, this._$70 = this.y, this._$7L = this.vx, this._$HL = this.vy;
      }, d.prototype._$oP = function(t3, i3) {
      }, g.prototype = new d(), g.prototype._$oP = function(t3, i3) {
        var e3 = this.scale * t3.getParamFloat(this._$wL);
        var r2 = i3.getPhysicsPoint1();
        switch (this._$tL) {
          default:
          case f.Src.SRC_TO_X:
            r2.x = r2.x + (e3 - r2.x) * this._$V0;
            break;
          case f.Src.SRC_TO_Y:
            r2.y = r2.y + (e3 - r2.y) * this._$V0;
            break;
          case f.Src.SRC_TO_G_ANGLE:
            var o2 = i3._$qr();
            o2 += (e3 - o2) * this._$V0, i3._$pr(o2);
        }
      }, y.prototype._$YS = function(t3, i3) {
      }, T.prototype = new y(), T.prototype._$YS = function(t3, i3) {
        switch (this._$YP) {
          default:
          case f.Target.TARGET_FROM_ANGLE:
            t3.setParamFloat(this._$wL, this.scale * i3._$5r(), this._$V0);
            break;
          case f.Target.TARGET_FROM_ANGLE_V:
            t3.setParamFloat(this._$wL, this.scale * i3._$Cs(), this._$V0);
        }
      }, f.Src = function() {
      }, f.Src.SRC_TO_X = "SRC_TO_X", f.Src.SRC_TO_Y = "SRC_TO_Y", f.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE", f.Target = function() {
      }, f.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE", f.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V", P.prototype.init = function(t3) {
        this._$fL = t3._$fL, this._$gL = t3._$gL, this._$B0 = t3._$B0, this._$z0 = t3._$z0, this._$qT = t3._$qT, this.reflectX = t3.reflectX, this.reflectY = t3.reflectY;
      }, P.prototype._$F0 = function(t3) {
        this._$fL = t3._$_T(), this._$gL = t3._$_T(), this._$B0 = t3._$_T(), this._$z0 = t3._$_T(), this._$qT = t3._$_T(), t3.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this.reflectX = t3._$po(), this.reflectY = t3._$po());
      }, P.prototype._$e = function() {
      };
      var It = function() {
      };
      It._$ni = function(t3, i3, e3, r2, o2, n2, s2, _2, a2) {
        var h2 = s2 * n2 - _2 * o2;
        if (h2 == 0)
          return null;
        var l2;
        var $2 = ((t3 - e3) * n2 - (i3 - r2) * o2) / h2;
        return l2 = o2 != 0 ? (t3 - e3 - $2 * s2) / o2 : (i3 - r2 - $2 * _2) / n2, isNaN(l2) && (l2 = (t3 - e3 - $2 * s2) / o2, isNaN(l2) && (l2 = (i3 - r2 - $2 * _2) / n2), isNaN(l2) && (console.log("a is NaN @UtVector#_$ni() "), console.log("v1x : " + o2), console.log("v1x != 0 ? " + (o2 != 0)))), a2 == null ? new Array(l2, $2) : (a2[0] = l2, a2[1] = $2, a2);
      }, S.prototype._$8P = function() {
        return this.x + 0.5 * this.width;
      }, S.prototype._$6P = function() {
        return this.y + 0.5 * this.height;
      }, S.prototype._$EL = function() {
        return this.x + this.width;
      }, S.prototype._$5T = function() {
        return this.y + this.height;
      }, S.prototype._$jL = function(t3, i3, e3, r2) {
        this.x = t3, this.y = i3, this.width = e3, this.height = r2;
      }, S.prototype._$jL = function(t3) {
        this.x = t3.x, this.y = t3.y, this.width = t3.width, this.height = t3.height;
      }, S.prototype.contains = function(t3, i3) {
        return this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height;
      }, S.prototype.expand = function(t3, i3) {
        this.x -= t3, this.y -= i3, this.width += 2 * t3, this.height += 2 * i3;
      }, v._$Z2 = function(t3, i3, e3, r2) {
        var o2 = i3._$Q2(t3, e3);
        var n2 = t3._$vs();
        var s2 = t3._$Tr();
        if (i3._$zr(n2, s2, o2), o2 <= 0)
          return r2[n2[0]];
        if (o2 == 1) {
          var _2 = r2[n2[0]];
          var a2 = r2[n2[1]];
          var h2 = s2[0];
          return _2 + (a2 - _2) * h2 | 0;
        }
        if (o2 == 2) {
          var _2 = r2[n2[0]];
          var a2 = r2[n2[1]];
          var l2 = r2[n2[2]];
          var $2 = r2[n2[3]];
          var h2 = s2[0];
          var u2 = s2[1];
          var p2 = _2 + (a2 - _2) * h2 | 0;
          var f2 = l2 + ($2 - l2) * h2 | 0;
          return p2 + (f2 - p2) * u2 | 0;
        }
        if (o2 == 3) {
          var c2 = r2[n2[0]];
          var d2 = r2[n2[1]];
          var g2 = r2[n2[2]];
          var y2 = r2[n2[3]];
          var m2 = r2[n2[4]];
          var T2 = r2[n2[5]];
          var P2 = r2[n2[6]];
          var S2 = r2[n2[7]];
          var h2 = s2[0];
          var u2 = s2[1];
          var v2 = s2[2];
          var _2 = c2 + (d2 - c2) * h2 | 0;
          var a2 = g2 + (y2 - g2) * h2 | 0;
          var l2 = m2 + (T2 - m2) * h2 | 0;
          var $2 = P2 + (S2 - P2) * h2 | 0;
          var p2 = _2 + (a2 - _2) * u2 | 0;
          var f2 = l2 + ($2 - l2) * u2 | 0;
          return p2 + (f2 - p2) * v2 | 0;
        }
        if (o2 == 4) {
          var L2 = r2[n2[0]];
          var M2 = r2[n2[1]];
          var E2 = r2[n2[2]];
          var A2 = r2[n2[3]];
          var I2 = r2[n2[4]];
          var w2 = r2[n2[5]];
          var x2 = r2[n2[6]];
          var O2 = r2[n2[7]];
          var D2 = r2[n2[8]];
          var R2 = r2[n2[9]];
          var b2 = r2[n2[10]];
          var F2 = r2[n2[11]];
          var C2 = r2[n2[12]];
          var N2 = r2[n2[13]];
          var B2 = r2[n2[14]];
          var U2 = r2[n2[15]];
          var h2 = s2[0];
          var u2 = s2[1];
          var v2 = s2[2];
          var G2 = s2[3];
          var c2 = L2 + (M2 - L2) * h2 | 0;
          var d2 = E2 + (A2 - E2) * h2 | 0;
          var g2 = I2 + (w2 - I2) * h2 | 0;
          var y2 = x2 + (O2 - x2) * h2 | 0;
          var m2 = D2 + (R2 - D2) * h2 | 0;
          var T2 = b2 + (F2 - b2) * h2 | 0;
          var P2 = C2 + (N2 - C2) * h2 | 0;
          var S2 = B2 + (U2 - B2) * h2 | 0;
          var _2 = c2 + (d2 - c2) * u2 | 0;
          var a2 = g2 + (y2 - g2) * u2 | 0;
          var l2 = m2 + (T2 - m2) * u2 | 0;
          var $2 = P2 + (S2 - P2) * u2 | 0;
          var p2 = _2 + (a2 - _2) * v2 | 0;
          var f2 = l2 + ($2 - l2) * v2 | 0;
          return p2 + (f2 - p2) * G2 | 0;
        }
        for (var Y2 = 1 << o2, k2 = new Float32Array(Y2), V = 0; V < Y2; V++) {
          for (var X2 = V, z2 = 1, H2 = 0; H2 < o2; H2++)
            z2 *= X2 % 2 == 0 ? 1 - s2[H2] : s2[H2], X2 /= 2;
          k2[V] = z2;
        }
        for (var W2 = new Float32Array(Y2), j2 = 0; j2 < Y2; j2++)
          W2[j2] = r2[n2[j2]];
        for (var q2 = 0, j2 = 0; j2 < Y2; j2++)
          q2 += k2[j2] * W2[j2];
        return q2 + 0.5 | 0;
      }, v._$br = function(t3, i3, e3, r2) {
        var o2 = i3._$Q2(t3, e3);
        var n2 = t3._$vs();
        var s2 = t3._$Tr();
        if (i3._$zr(n2, s2, o2), o2 <= 0)
          return r2[n2[0]];
        if (o2 == 1) {
          var _2 = r2[n2[0]];
          var a2 = r2[n2[1]];
          var h2 = s2[0];
          return _2 + (a2 - _2) * h2;
        }
        if (o2 == 2) {
          var _2 = r2[n2[0]];
          var a2 = r2[n2[1]];
          var l2 = r2[n2[2]];
          var $2 = r2[n2[3]];
          var h2 = s2[0];
          var u2 = s2[1];
          return (1 - u2) * (_2 + (a2 - _2) * h2) + u2 * (l2 + ($2 - l2) * h2);
        }
        if (o2 == 3) {
          var p2 = r2[n2[0]];
          var f2 = r2[n2[1]];
          var c2 = r2[n2[2]];
          var d2 = r2[n2[3]];
          var g2 = r2[n2[4]];
          var y2 = r2[n2[5]];
          var m2 = r2[n2[6]];
          var T2 = r2[n2[7]];
          var h2 = s2[0];
          var u2 = s2[1];
          var P2 = s2[2];
          return (1 - P2) * ((1 - u2) * (p2 + (f2 - p2) * h2) + u2 * (c2 + (d2 - c2) * h2)) + P2 * ((1 - u2) * (g2 + (y2 - g2) * h2) + u2 * (m2 + (T2 - m2) * h2));
        }
        if (o2 == 4) {
          var S2 = r2[n2[0]];
          var v2 = r2[n2[1]];
          var L2 = r2[n2[2]];
          var M2 = r2[n2[3]];
          var E2 = r2[n2[4]];
          var A2 = r2[n2[5]];
          var I2 = r2[n2[6]];
          var w2 = r2[n2[7]];
          var x2 = r2[n2[8]];
          var O2 = r2[n2[9]];
          var D2 = r2[n2[10]];
          var R2 = r2[n2[11]];
          var b2 = r2[n2[12]];
          var F2 = r2[n2[13]];
          var C2 = r2[n2[14]];
          var N2 = r2[n2[15]];
          var h2 = s2[0];
          var u2 = s2[1];
          var P2 = s2[2];
          var B2 = s2[3];
          return (1 - B2) * ((1 - P2) * ((1 - u2) * (S2 + (v2 - S2) * h2) + u2 * (L2 + (M2 - L2) * h2)) + P2 * ((1 - u2) * (E2 + (A2 - E2) * h2) + u2 * (I2 + (w2 - I2) * h2))) + B2 * ((1 - P2) * ((1 - u2) * (x2 + (O2 - x2) * h2) + u2 * (D2 + (R2 - D2) * h2)) + P2 * ((1 - u2) * (b2 + (F2 - b2) * h2) + u2 * (C2 + (N2 - C2) * h2)));
        }
        for (var U2 = 1 << o2, G2 = new Float32Array(U2), Y2 = 0; Y2 < U2; Y2++) {
          for (var k2 = Y2, V = 1, X2 = 0; X2 < o2; X2++)
            V *= k2 % 2 == 0 ? 1 - s2[X2] : s2[X2], k2 /= 2;
          G2[Y2] = V;
        }
        for (var z2 = new Float32Array(U2), H2 = 0; H2 < U2; H2++)
          z2[H2] = r2[n2[H2]];
        for (var W2 = 0, H2 = 0; H2 < U2; H2++)
          W2 += G2[H2] * z2[H2];
        return W2;
      }, v._$Vr = function(t3, i3, e3, r2, o2, n2, s2, _2) {
        var a2 = i3._$Q2(t3, e3);
        var h2 = t3._$vs();
        var l2 = t3._$Tr();
        i3._$zr(h2, l2, a2);
        var $2 = 2 * r2;
        var u2 = s2;
        if (a2 <= 0) {
          var p2 = h2[0];
          var f2 = o2[p2];
          if (_2 == 2 && s2 == 0)
            w._$jT(f2, 0, n2, 0, $2);
          else
            for (var c2 = 0; c2 < $2; )
              n2[u2] = f2[c2++], n2[u2 + 1] = f2[c2++], u2 += _2;
        } else if (a2 == 1)
          for (var f2 = o2[h2[0]], d2 = o2[h2[1]], g2 = l2[0], y2 = 1 - g2, c2 = 0; c2 < $2; )
            n2[u2] = f2[c2] * y2 + d2[c2] * g2, ++c2, n2[u2 + 1] = f2[c2] * y2 + d2[c2] * g2, ++c2, u2 += _2;
        else if (a2 == 2)
          for (var f2 = o2[h2[0]], d2 = o2[h2[1]], m2 = o2[h2[2]], T2 = o2[h2[3]], g2 = l2[0], P2 = l2[1], y2 = 1 - g2, S2 = 1 - P2, v2 = S2 * y2, L2 = S2 * g2, M2 = P2 * y2, E2 = P2 * g2, c2 = 0; c2 < $2; )
            n2[u2] = v2 * f2[c2] + L2 * d2[c2] + M2 * m2[c2] + E2 * T2[c2], ++c2, n2[u2 + 1] = v2 * f2[c2] + L2 * d2[c2] + M2 * m2[c2] + E2 * T2[c2], ++c2, u2 += _2;
        else if (a2 == 3)
          for (var A2 = o2[h2[0]], I2 = o2[h2[1]], x2 = o2[h2[2]], O2 = o2[h2[3]], D2 = o2[h2[4]], R2 = o2[h2[5]], b2 = o2[h2[6]], F2 = o2[h2[7]], g2 = l2[0], P2 = l2[1], C2 = l2[2], y2 = 1 - g2, S2 = 1 - P2, N2 = 1 - C2, B2 = N2 * S2 * y2, U2 = N2 * S2 * g2, G2 = N2 * P2 * y2, Y2 = N2 * P2 * g2, k2 = C2 * S2 * y2, V = C2 * S2 * g2, X2 = C2 * P2 * y2, z2 = C2 * P2 * g2, c2 = 0; c2 < $2; )
            n2[u2] = B2 * A2[c2] + U2 * I2[c2] + G2 * x2[c2] + Y2 * O2[c2] + k2 * D2[c2] + V * R2[c2] + X2 * b2[c2] + z2 * F2[c2], ++c2, n2[u2 + 1] = B2 * A2[c2] + U2 * I2[c2] + G2 * x2[c2] + Y2 * O2[c2] + k2 * D2[c2] + V * R2[c2] + X2 * b2[c2] + z2 * F2[c2], ++c2, u2 += _2;
        else if (a2 == 4)
          for (var H2 = o2[h2[0]], W2 = o2[h2[1]], j2 = o2[h2[2]], q2 = o2[h2[3]], J2 = o2[h2[4]], Q2 = o2[h2[5]], Z2 = o2[h2[6]], K2 = o2[h2[7]], tt2 = o2[h2[8]], it2 = o2[h2[9]], et2 = o2[h2[10]], rt = o2[h2[11]], ot2 = o2[h2[12]], nt2 = o2[h2[13]], st2 = o2[h2[14]], _t2 = o2[h2[15]], g2 = l2[0], P2 = l2[1], C2 = l2[2], at2 = l2[3], y2 = 1 - g2, S2 = 1 - P2, N2 = 1 - C2, ht2 = 1 - at2, lt2 = ht2 * N2 * S2 * y2, $t2 = ht2 * N2 * S2 * g2, ut2 = ht2 * N2 * P2 * y2, pt2 = ht2 * N2 * P2 * g2, ft2 = ht2 * C2 * S2 * y2, ct2 = ht2 * C2 * S2 * g2, dt2 = ht2 * C2 * P2 * y2, gt2 = ht2 * C2 * P2 * g2, yt2 = at2 * N2 * S2 * y2, mt2 = at2 * N2 * S2 * g2, Tt2 = at2 * N2 * P2 * y2, Pt2 = at2 * N2 * P2 * g2, St2 = at2 * C2 * S2 * y2, vt = at2 * C2 * S2 * g2, Lt2 = at2 * C2 * P2 * y2, Mt2 = at2 * C2 * P2 * g2, c2 = 0; c2 < $2; )
            n2[u2] = lt2 * H2[c2] + $t2 * W2[c2] + ut2 * j2[c2] + pt2 * q2[c2] + ft2 * J2[c2] + ct2 * Q2[c2] + dt2 * Z2[c2] + gt2 * K2[c2] + yt2 * tt2[c2] + mt2 * it2[c2] + Tt2 * et2[c2] + Pt2 * rt[c2] + St2 * ot2[c2] + vt * nt2[c2] + Lt2 * st2[c2] + Mt2 * _t2[c2], ++c2, n2[u2 + 1] = lt2 * H2[c2] + $t2 * W2[c2] + ut2 * j2[c2] + pt2 * q2[c2] + ft2 * J2[c2] + ct2 * Q2[c2] + dt2 * Z2[c2] + gt2 * K2[c2] + yt2 * tt2[c2] + mt2 * it2[c2] + Tt2 * et2[c2] + Pt2 * rt[c2] + St2 * ot2[c2] + vt * nt2[c2] + Lt2 * st2[c2] + Mt2 * _t2[c2], ++c2, u2 += _2;
        else {
          for (var Et2 = 1 << a2, At2 = new Float32Array(Et2), It2 = 0; It2 < Et2; It2++) {
            for (var wt = It2, xt2 = 1, Ot = 0; Ot < a2; Ot++)
              xt2 *= wt % 2 == 0 ? 1 - l2[Ot] : l2[Ot], wt /= 2;
            At2[It2] = xt2;
          }
          for (var Dt = new Float32Array(Et2), Rt = 0; Rt < Et2; Rt++)
            Dt[Rt] = o2[h2[Rt]];
          for (var c2 = 0; c2 < $2; ) {
            for (var bt = 0, Ft = 0, Ct = c2 + 1, Rt = 0; Rt < Et2; Rt++)
              bt += At2[Rt] * Dt[Rt][c2], Ft += At2[Rt] * Dt[Rt][Ct];
            c2 += 2, n2[u2] = bt, n2[u2 + 1] = Ft, u2 += _2;
          }
        }
      }, L.prototype._$HT = function(t3, i3) {
        this.x = t3, this.y = i3;
      }, L.prototype._$HT = function(t3) {
        this.x = t3.x, this.y = t3.y;
      }, M._$ur = -2, M._$ES = 500, M._$wb = 2, M._$8S = 3, M._$52 = M._$ES, M._$R2 = M._$ES, M._$or = function() {
        return M._$52;
      }, M._$Pr = function() {
        return M._$R2;
      }, M.prototype.convertClipIDForV2_11 = function(t3) {
        var i3 = [];
        return t3 == null ? null : t3.length == 0 ? null : /,/.test(t3) ? i3 = t3.id.split(",") : (i3.push(t3.id), i3);
      }, M.prototype._$F0 = function(t3) {
        this._$gP = t3._$nP(), this._$dr = t3._$nP(), this._$GS = t3._$nP(), this._$qb = t3._$6L(), this._$Lb = t3._$cS(), this._$mS = t3._$Tb(), t3.getFormatVersion() >= G._$T7 ? (this.clipID = t3._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = [], this._$MS(this._$Lb);
      }, M.prototype.getClipIDList = function() {
        return this.clipIDList;
      }, M.prototype.init = function(t3) {
      }, M.prototype._$Nr = function(t3, i3) {
        if (i3._$IS[0] = false, i3._$Us = v._$Z2(t3, this._$GS, i3._$IS, this._$Lb), at._$Zs)
          ;
        else if (i3._$IS[0])
          return;
        i3._$7s = v._$br(t3, this._$GS, i3._$IS, this._$mS);
      }, M.prototype._$2b = function(t3, i3) {
      }, M.prototype.getDrawDataID = function() {
        return this._$gP;
      }, M.prototype._$j2 = function(t3) {
        this._$gP = t3;
      }, M.prototype.getOpacity = function(t3, i3) {
        return i3._$7s;
      }, M.prototype._$zS = function(t3, i3) {
        return i3._$Us;
      }, M.prototype._$MS = function(t3) {
        for (var i3 = t3.length - 1; i3 >= 0; --i3) {
          var e3 = t3[i3];
          e3 < M._$52 ? M._$52 = e3 : e3 > M._$R2 && (M._$R2 = e3);
        }
      }, M.prototype.getTargetBaseDataID = function() {
        return this._$dr;
      }, M.prototype._$gs = function(t3) {
        this._$dr = t3;
      }, M.prototype._$32 = function() {
        return this._$dr != null && this._$dr != yt._$2o();
      }, M.prototype.preDraw = function(t3, i3, e3) {
      }, M.prototype.draw = function(t3, i3, e3) {
      }, M.prototype.getType = function() {
      }, M.prototype._$B2 = function(t3, i3, e3) {
      }, E._$ps = 32, E.CLIPPING_PROCESS_NONE = 0, E.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1, E.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2, E.CLIPPING_PROCESS_DRAW = 3, E.CLIPPING_PROCESS_CLEAR_ALPHA = 4, E.prototype.setChannelFlagAsColor = function(t3, i3) {
        this.CHANNEL_COLORS[t3] = i3;
      }, E.prototype.getChannelFlagAsColor = function(t3) {
        return this.CHANNEL_COLORS[t3];
      }, E.prototype._$ZT = function() {
      }, E.prototype._$Uo = function(t3, i3, e3, r2, o2, n2, s2) {
      }, E.prototype._$Rs = function() {
        return -1;
      }, E.prototype._$Ds = function(t3) {
      }, E.prototype.setBaseColor = function(t3, i3, e3, r2) {
        t3 < 0 ? t3 = 0 : t3 > 1 && (t3 = 1), i3 < 0 ? i3 = 0 : i3 > 1 && (i3 = 1), e3 < 0 ? e3 = 0 : e3 > 1 && (e3 = 1), r2 < 0 ? r2 = 0 : r2 > 1 && (r2 = 1), this._$lT = t3, this._$C0 = i3, this._$tT = e3, this._$WL = r2;
      }, E.prototype._$WP = function(t3) {
        this.culling = t3;
      }, E.prototype.setMatrix = function(t3) {
        for (var i3 = 0; i3 < 16; i3++)
          this.matrix4x4[i3] = t3[i3];
      }, E.prototype._$IT = function() {
        return this.matrix4x4;
      }, E.prototype.setPremultipliedAlpha = function(t3) {
        this.premultipliedAlpha = t3;
      }, E.prototype.isPremultipliedAlpha = function() {
        return this.premultipliedAlpha;
      }, E.prototype.setAnisotropy = function(t3) {
        this.anisotropy = t3;
      }, E.prototype.getAnisotropy = function() {
        return this.anisotropy;
      }, E.prototype.getClippingProcess = function() {
        return this.clippingProcess;
      }, E.prototype.setClippingProcess = function(t3) {
        this.clippingProcess = t3;
      }, E.prototype.setClipBufPre_clipContextForMask = function(t3) {
        this.clipBufPre_clipContextMask = t3;
      }, E.prototype.getClipBufPre_clipContextMask = function() {
        return this.clipBufPre_clipContextMask;
      }, E.prototype.setClipBufPre_clipContextForDraw = function(t3) {
        this.clipBufPre_clipContextDraw = t3;
      }, E.prototype.getClipBufPre_clipContextDraw = function() {
        return this.clipBufPre_clipContextDraw;
      }, I._$ur = -2, I._$c2 = 1, I._$_b = 2, I.prototype._$F0 = function(t3) {
        this._$kP = t3._$nP(), this._$dr = t3._$nP();
      }, I.prototype.readV2_opacity = function(t3) {
        t3.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._$mS = t3._$Tb());
      }, I.prototype.init = function(t3) {
      }, I.prototype._$Nr = function(t3, i3) {
      }, I.prototype.interpolateOpacity = function(t3, i3, e3, r2) {
        this._$mS == null ? e3.setInterpolatedOpacity(1) : e3.setInterpolatedOpacity(v._$br(t3, i3, r2, this._$mS));
      }, I.prototype._$2b = function(t3, i3) {
      }, I.prototype._$nb = function(t3, i3, e3, r2, o2, n2, s2) {
      }, I.prototype.getType = function() {
      }, I.prototype._$gs = function(t3) {
        this._$dr = t3;
      }, I.prototype._$a2 = function(t3) {
        this._$kP = t3;
      }, I.prototype.getTargetBaseDataID = function() {
        return this._$dr;
      }, I.prototype.getBaseDataID = function() {
        return this._$kP;
      }, I.prototype._$32 = function() {
        return this._$dr != null && this._$dr != yt._$2o();
      }, w._$W2 = 0, w._$CS = w._$W2, w._$Mo = function() {
        return true;
      }, w._$XP = function(t3) {
        try {
          for (var i3 = getTimeMSec(); getTimeMSec() - i3 < t3; )
            ;
        } catch (t4) {
          t4._$Rb();
        }
      }, w.getUserTimeMSec = function() {
        return w._$CS == w._$W2 ? w.getSystemTimeMSec() : w._$CS;
      }, w.setUserTimeMSec = function(t3) {
        w._$CS = t3;
      }, w.updateUserTimeMSec = function() {
        return w._$CS = w.getSystemTimeMSec();
      }, w.getTimeMSec = function() {
        return (/* @__PURE__ */ new Date()).getTime();
      }, w.getSystemTimeMSec = function() {
        return (/* @__PURE__ */ new Date()).getTime();
      }, w._$Q = function(t3) {
      }, w._$jT = function(t3, i3, e3, r2, o2) {
        for (var n2 = 0; n2 < o2; n2++)
          e3[r2 + n2] = t3[i3 + n2];
      }, x._$ds = -2, x.prototype._$F0 = function(t3) {
        this._$wL = t3._$nP(), this._$VP = t3._$6L(), this._$GP = t3._$nP();
      }, x.prototype.getParamIndex = function(t3) {
        return this._$2r != t3 && (this._$8o = x._$ds), this._$8o;
      }, x.prototype._$Pb = function(t3, i3) {
        this._$8o = t3, this._$2r = i3;
      }, x.prototype.getParamID = function() {
        return this._$wL;
      }, x.prototype._$yP = function(t3) {
        this._$wL = t3;
      }, x.prototype._$N2 = function() {
        return this._$VP;
      }, x.prototype._$d2 = function() {
        return this._$GP;
      }, x.prototype._$t2 = function(t3, i3) {
        this._$VP = t3, this._$GP = i3;
      }, x.prototype._$Lr = function() {
        return this._$O2;
      }, x.prototype._$wr = function(t3) {
        this._$O2 = t3;
      }, x.prototype._$SL = function() {
        return this._$ri;
      }, x.prototype._$AL = function(t3) {
        this._$ri = t3;
      }, O.startsWith = function(t3, i3, e3) {
        var r2 = i3 + e3.length;
        if (r2 >= t3.length)
          return false;
        for (var o2 = i3; o2 < r2; o2++)
          if (O.getChar(t3, o2) != e3.charAt(o2 - i3))
            return false;
        return true;
      }, O.getChar = function(t3, i3) {
        return String.fromCharCode(t3.getUint8(i3));
      }, O.createString = function(t3, i3, e3) {
        for (var r2 = new ArrayBuffer(2 * e3), o2 = new Uint16Array(r2), n2 = 0; n2 < e3; n2++)
          o2[n2] = t3.getUint8(i3 + n2);
        return String.fromCharCode.apply(null, o2);
      }, O._$LS = function(t3, i3, e3, r2) {
        t3 instanceof ArrayBuffer && (t3 = new DataView(t3));
        var o2 = e3;
        var n2 = false;
        var s2 = false;
        var _2 = 0;
        var a2 = O.getChar(t3, o2);
        a2 == "-" && (n2 = true, o2++);
        for (var h2 = false; o2 < i3; o2++) {
          switch (a2 = O.getChar(t3, o2)) {
            case "0":
              _2 *= 10;
              break;
            case "1":
              _2 = 10 * _2 + 1;
              break;
            case "2":
              _2 = 10 * _2 + 2;
              break;
            case "3":
              _2 = 10 * _2 + 3;
              break;
            case "4":
              _2 = 10 * _2 + 4;
              break;
            case "5":
              _2 = 10 * _2 + 5;
              break;
            case "6":
              _2 = 10 * _2 + 6;
              break;
            case "7":
              _2 = 10 * _2 + 7;
              break;
            case "8":
              _2 = 10 * _2 + 8;
              break;
            case "9":
              _2 = 10 * _2 + 9;
              break;
            case ".":
              s2 = true, o2++, h2 = true;
              break;
            default:
              h2 = true;
          }
          if (h2)
            break;
        }
        if (s2)
          for (var l2 = 0.1, $2 = false; o2 < i3; o2++) {
            switch (a2 = O.getChar(t3, o2)) {
              case "0":
                break;
              case "1":
                _2 += 1 * l2;
                break;
              case "2":
                _2 += 2 * l2;
                break;
              case "3":
                _2 += 3 * l2;
                break;
              case "4":
                _2 += 4 * l2;
                break;
              case "5":
                _2 += 5 * l2;
                break;
              case "6":
                _2 += 6 * l2;
                break;
              case "7":
                _2 += 7 * l2;
                break;
              case "8":
                _2 += 8 * l2;
                break;
              case "9":
                _2 += 9 * l2;
                break;
              default:
                $2 = true;
            }
            if (l2 *= 0.1, $2)
              break;
          }
        return n2 && (_2 = -_2), r2[0] = o2, _2;
      }, D.prototype._$zP = function() {
        this._$Ob = new Array();
      }, D.prototype._$F0 = function(t3) {
        this._$Ob = t3._$nP();
      }, D.prototype._$Ur = function(t3) {
        if (t3._$WS())
          return true;
        for (var i3 = t3._$v2(), e3 = this._$Ob.length - 1; e3 >= 0; --e3) {
          var r2 = this._$Ob[e3].getParamIndex(i3);
          if (r2 == x._$ds && (r2 = t3.getParamIndex(this._$Ob[e3].getParamID())), t3._$Xb(r2))
            return true;
        }
        return false;
      }, D.prototype._$Q2 = function(t3, i3) {
        for (var e3, r2, o2 = this._$Ob.length, n2 = t3._$v2(), s2 = 0, _2 = 0; _2 < o2; _2++) {
          var a2 = this._$Ob[_2];
          if (e3 = a2.getParamIndex(n2), e3 == x._$ds && (e3 = t3.getParamIndex(a2.getParamID()), a2._$Pb(e3, n2)), e3 < 0)
            throw new Exception("err 23242 : " + a2.getParamID());
          var h2 = e3 < 0 ? 0 : t3.getParamFloat(e3);
          r2 = a2._$N2();
          var l2;
          var $2;
          var u2 = a2._$d2();
          var p2 = -1;
          var f2 = 0;
          if (r2 < 1)
            ;
          else if (r2 == 1)
            l2 = u2[0], l2 - U._$J < h2 && h2 < l2 + U._$J ? (p2 = 0, f2 = 0) : (p2 = 0, i3[0] = true);
          else if (l2 = u2[0], h2 < l2 - U._$J)
            p2 = 0, i3[0] = true;
          else if (h2 < l2 + U._$J)
            p2 = 0;
          else {
            for (var c2 = false, d2 = 1; d2 < r2; ++d2) {
              if ($2 = u2[d2], h2 < $2 + U._$J) {
                $2 - U._$J < h2 ? p2 = d2 : (p2 = d2 - 1, f2 = (h2 - l2) / ($2 - l2), s2++), c2 = true;
                break;
              }
              l2 = $2;
            }
            c2 || (p2 = r2 - 1, f2 = 0, i3[0] = true);
          }
          a2._$wr(p2), a2._$AL(f2);
        }
        return s2;
      }, D.prototype._$zr = function(t3, i3, e3) {
        var r2 = 1 << e3;
        r2 + 1 > U._$Qb && console.log("err 23245\n");
        for (var o2 = this._$Ob.length, n2 = 1, s2 = 1, _2 = 0, a2 = 0; a2 < r2; ++a2)
          t3[a2] = 0;
        for (var h2 = 0; h2 < o2; ++h2) {
          var l2 = this._$Ob[h2];
          if (l2._$SL() == 0) {
            var $2 = l2._$Lr() * n2;
            if ($2 < 0 && at._$3T)
              throw new Exception("err 23246");
            for (var a2 = 0; a2 < r2; ++a2)
              t3[a2] += $2;
          } else {
            for (var $2 = n2 * l2._$Lr(), u2 = n2 * (l2._$Lr() + 1), a2 = 0; a2 < r2; ++a2)
              t3[a2] += (a2 / s2 | 0) % 2 == 0 ? $2 : u2;
            i3[_2++] = l2._$SL(), s2 *= 2;
          }
          n2 *= l2._$N2();
        }
        t3[r2] = 65535, i3[_2] = -1;
      }, D.prototype._$h2 = function(t3, i3, e3) {
        for (var r2 = new Float32Array(i3), o2 = 0; o2 < i3; ++o2)
          r2[o2] = e3[o2];
        var n2 = new x();
        n2._$yP(t3), n2._$t2(i3, r2), this._$Ob.push(n2);
      }, D.prototype._$J2 = function(t3) {
        for (var i3 = t3, e3 = this._$Ob.length, r2 = 0; r2 < e3; ++r2) {
          var o2 = this._$Ob[r2];
          var n2 = o2._$N2();
          var s2 = i3 % o2._$N2();
          var _2 = o2._$d2()[s2];
          console.log("%s[%d]=%7.2f / ", o2.getParamID(), s2, _2), i3 /= n2;
        }
        console.log("\n");
      }, D.prototype.getParamCount = function() {
        return this._$Ob.length;
      }, D.prototype._$zs = function() {
        return this._$Ob;
      }, R.prototype.identity = function() {
        for (var t3 = 0; t3 < 16; t3++)
          this.m[t3] = t3 % 5 == 0 ? 1 : 0;
      }, R.prototype.getArray = function() {
        return this.m;
      }, R.prototype.getCopyMatrix = function() {
        return new Float32Array(this.m);
      }, R.prototype.setMatrix = function(t3) {
        if (t3 != null && t3.length == 16)
          for (var i3 = 0; i3 < 16; i3++)
            this.m[i3] = t3[i3];
      }, R.prototype.mult = function(t3, i3, e3) {
        return i3 == null ? null : (this == i3 ? this.mult_safe(this.m, t3.m, i3.m, e3) : this.mult_fast(this.m, t3.m, i3.m, e3), i3);
      }, R.prototype.mult_safe = function(t3, i3, e3, r2) {
        if (t3 == e3) {
          var o2 = new Array(16);
          this.mult_fast(t3, i3, o2, r2);
          for (var n2 = 15; n2 >= 0; --n2)
            e3[n2] = o2[n2];
        } else
          this.mult_fast(t3, i3, e3, r2);
      }, R.prototype.mult_fast = function(t3, i3, e3, r2) {
        r2 ? (e3[0] = t3[0] * i3[0] + t3[4] * i3[1] + t3[8] * i3[2], e3[4] = t3[0] * i3[4] + t3[4] * i3[5] + t3[8] * i3[6], e3[8] = t3[0] * i3[8] + t3[4] * i3[9] + t3[8] * i3[10], e3[12] = t3[0] * i3[12] + t3[4] * i3[13] + t3[8] * i3[14] + t3[12], e3[1] = t3[1] * i3[0] + t3[5] * i3[1] + t3[9] * i3[2], e3[5] = t3[1] * i3[4] + t3[5] * i3[5] + t3[9] * i3[6], e3[9] = t3[1] * i3[8] + t3[5] * i3[9] + t3[9] * i3[10], e3[13] = t3[1] * i3[12] + t3[5] * i3[13] + t3[9] * i3[14] + t3[13], e3[2] = t3[2] * i3[0] + t3[6] * i3[1] + t3[10] * i3[2], e3[6] = t3[2] * i3[4] + t3[6] * i3[5] + t3[10] * i3[6], e3[10] = t3[2] * i3[8] + t3[6] * i3[9] + t3[10] * i3[10], e3[14] = t3[2] * i3[12] + t3[6] * i3[13] + t3[10] * i3[14] + t3[14], e3[3] = e3[7] = e3[11] = 0, e3[15] = 1) : (e3[0] = t3[0] * i3[0] + t3[4] * i3[1] + t3[8] * i3[2] + t3[12] * i3[3], e3[4] = t3[0] * i3[4] + t3[4] * i3[5] + t3[8] * i3[6] + t3[12] * i3[7], e3[8] = t3[0] * i3[8] + t3[4] * i3[9] + t3[8] * i3[10] + t3[12] * i3[11], e3[12] = t3[0] * i3[12] + t3[4] * i3[13] + t3[8] * i3[14] + t3[12] * i3[15], e3[1] = t3[1] * i3[0] + t3[5] * i3[1] + t3[9] * i3[2] + t3[13] * i3[3], e3[5] = t3[1] * i3[4] + t3[5] * i3[5] + t3[9] * i3[6] + t3[13] * i3[7], e3[9] = t3[1] * i3[8] + t3[5] * i3[9] + t3[9] * i3[10] + t3[13] * i3[11], e3[13] = t3[1] * i3[12] + t3[5] * i3[13] + t3[9] * i3[14] + t3[13] * i3[15], e3[2] = t3[2] * i3[0] + t3[6] * i3[1] + t3[10] * i3[2] + t3[14] * i3[3], e3[6] = t3[2] * i3[4] + t3[6] * i3[5] + t3[10] * i3[6] + t3[14] * i3[7], e3[10] = t3[2] * i3[8] + t3[6] * i3[9] + t3[10] * i3[10] + t3[14] * i3[11], e3[14] = t3[2] * i3[12] + t3[6] * i3[13] + t3[10] * i3[14] + t3[14] * i3[15], e3[3] = t3[3] * i3[0] + t3[7] * i3[1] + t3[11] * i3[2] + t3[15] * i3[3], e3[7] = t3[3] * i3[4] + t3[7] * i3[5] + t3[11] * i3[6] + t3[15] * i3[7], e3[11] = t3[3] * i3[8] + t3[7] * i3[9] + t3[11] * i3[10] + t3[15] * i3[11], e3[15] = t3[3] * i3[12] + t3[7] * i3[13] + t3[11] * i3[14] + t3[15] * i3[15]);
      }, R.prototype.translate = function(t3, i3, e3) {
        this.m[12] = this.m[0] * t3 + this.m[4] * i3 + this.m[8] * e3 + this.m[12], this.m[13] = this.m[1] * t3 + this.m[5] * i3 + this.m[9] * e3 + this.m[13], this.m[14] = this.m[2] * t3 + this.m[6] * i3 + this.m[10] * e3 + this.m[14], this.m[15] = this.m[3] * t3 + this.m[7] * i3 + this.m[11] * e3 + this.m[15];
      }, R.prototype.scale = function(t3, i3, e3) {
        this.m[0] *= t3, this.m[4] *= i3, this.m[8] *= e3, this.m[1] *= t3, this.m[5] *= i3, this.m[9] *= e3, this.m[2] *= t3, this.m[6] *= i3, this.m[10] *= e3, this.m[3] *= t3, this.m[7] *= i3, this.m[11] *= e3;
      }, R.prototype.rotateX = function(t3) {
        var i3 = Lt.fcos(t3);
        var e3 = Lt._$9(t3);
        var r2 = this.m[4];
        this.m[4] = r2 * i3 + this.m[8] * e3, this.m[8] = r2 * -e3 + this.m[8] * i3, r2 = this.m[5], this.m[5] = r2 * i3 + this.m[9] * e3, this.m[9] = r2 * -e3 + this.m[9] * i3, r2 = this.m[6], this.m[6] = r2 * i3 + this.m[10] * e3, this.m[10] = r2 * -e3 + this.m[10] * i3, r2 = this.m[7], this.m[7] = r2 * i3 + this.m[11] * e3, this.m[11] = r2 * -e3 + this.m[11] * i3;
      }, R.prototype.rotateY = function(t3) {
        var i3 = Lt.fcos(t3);
        var e3 = Lt._$9(t3);
        var r2 = this.m[0];
        this.m[0] = r2 * i3 + this.m[8] * -e3, this.m[8] = r2 * e3 + this.m[8] * i3, r2 = this.m[1], this.m[1] = r2 * i3 + this.m[9] * -e3, this.m[9] = r2 * e3 + this.m[9] * i3, r2 = m[2], this.m[2] = r2 * i3 + this.m[10] * -e3, this.m[10] = r2 * e3 + this.m[10] * i3, r2 = m[3], this.m[3] = r2 * i3 + this.m[11] * -e3, this.m[11] = r2 * e3 + this.m[11] * i3;
      }, R.prototype.rotateZ = function(t3) {
        var i3 = Lt.fcos(t3);
        var e3 = Lt._$9(t3);
        var r2 = this.m[0];
        this.m[0] = r2 * i3 + this.m[4] * e3, this.m[4] = r2 * -e3 + this.m[4] * i3, r2 = this.m[1], this.m[1] = r2 * i3 + this.m[5] * e3, this.m[5] = r2 * -e3 + this.m[5] * i3, r2 = this.m[2], this.m[2] = r2 * i3 + this.m[6] * e3, this.m[6] = r2 * -e3 + this.m[6] * i3, r2 = this.m[3], this.m[3] = r2 * i3 + this.m[7] * e3, this.m[7] = r2 * -e3 + this.m[7] * i3;
      }, b.prototype = new et(), b._$tP = new Object(), b._$27 = function() {
        b._$tP.clear();
      }, b.getID = function(t3) {
        var i3 = b._$tP[t3];
        return i3 == null && (i3 = new b(t3), b._$tP[t3] = i3), i3;
      }, b.prototype._$3s = function() {
        return new b();
      }, F._$kS = -1, F._$pS = 0, F._$hb = 1, F.STATE_IDENTITY = 0, F._$gb = 1, F._$fo = 2, F._$go = 4, F.prototype.transform = function(t3, i3, e3) {
        var r2;
        var o2;
        var n2;
        var s2;
        var _2;
        var a2;
        var h2 = 0;
        var l2 = 0;
        switch (this._$hi) {
          default:
            return;
          case F._$go | F._$fo | F._$gb:
            for (r2 = this._$7, o2 = this._$H, n2 = this._$k, s2 = this._$f, _2 = this._$g, a2 = this._$w; --e3 >= 0; ) {
              var $2 = t3[h2++];
              var u2 = t3[h2++];
              i3[l2++] = r2 * $2 + o2 * u2 + n2, i3[l2++] = s2 * $2 + _2 * u2 + a2;
            }
            return;
          case F._$go | F._$fo:
            for (r2 = this._$7, o2 = this._$H, s2 = this._$f, _2 = this._$g; --e3 >= 0; ) {
              var $2 = t3[h2++];
              var u2 = t3[h2++];
              i3[l2++] = r2 * $2 + o2 * u2, i3[l2++] = s2 * $2 + _2 * u2;
            }
            return;
          case F._$go | F._$gb:
            for (o2 = this._$H, n2 = this._$k, s2 = this._$f, a2 = this._$w; --e3 >= 0; ) {
              var $2 = t3[h2++];
              i3[l2++] = o2 * t3[h2++] + n2, i3[l2++] = s2 * $2 + a2;
            }
            return;
          case F._$go:
            for (o2 = this._$H, s2 = this._$f; --e3 >= 0; ) {
              var $2 = t3[h2++];
              i3[l2++] = o2 * t3[h2++], i3[l2++] = s2 * $2;
            }
            return;
          case F._$fo | F._$gb:
            for (r2 = this._$7, n2 = this._$k, _2 = this._$g, a2 = this._$w; --e3 >= 0; )
              i3[l2++] = r2 * t3[h2++] + n2, i3[l2++] = _2 * t3[h2++] + a2;
            return;
          case F._$fo:
            for (r2 = this._$7, _2 = this._$g; --e3 >= 0; )
              i3[l2++] = r2 * t3[h2++], i3[l2++] = _2 * t3[h2++];
            return;
          case F._$gb:
            for (n2 = this._$k, a2 = this._$w; --e3 >= 0; )
              i3[l2++] = t3[h2++] + n2, i3[l2++] = t3[h2++] + a2;
            return;
          case F.STATE_IDENTITY:
            return void (t3 == i3 && h2 == l2 || w._$jT(t3, h2, i3, l2, 2 * e3));
        }
      }, F.prototype.update = function() {
        this._$H == 0 && this._$f == 0 ? this._$7 == 1 && this._$g == 1 ? this._$k == 0 && this._$w == 0 ? (this._$hi = F.STATE_IDENTITY, this._$Z = F._$pS) : (this._$hi = F._$gb, this._$Z = F._$hb) : this._$k == 0 && this._$w == 0 ? (this._$hi = F._$fo, this._$Z = F._$kS) : (this._$hi = F._$fo | F._$gb, this._$Z = F._$kS) : this._$7 == 0 && this._$g == 0 ? this._$k == 0 && this._$w == 0 ? (this._$hi = F._$go, this._$Z = F._$kS) : (this._$hi = F._$go | F._$gb, this._$Z = F._$kS) : this._$k == 0 && this._$w == 0 ? (this._$hi = F._$go | F._$fo, this._$Z = F._$kS) : (this._$hi = F._$go | F._$fo | F._$gb, this._$Z = F._$kS);
      }, F.prototype._$RT = function(t3) {
        this._$IT(t3);
        var i3 = t3[0];
        var e3 = t3[2];
        var r2 = t3[1];
        var o2 = t3[3];
        var n2 = Math.sqrt(i3 * i3 + r2 * r2);
        var s2 = i3 * o2 - e3 * r2;
        n2 == 0 ? at._$so && console.log("affine._$RT() / rt==0") : (t3[0] = n2, t3[1] = s2 / n2, t3[2] = (r2 * o2 + i3 * e3) / s2, t3[3] = Math.atan2(r2, i3));
      }, F.prototype._$ho = function(t3, i3, e3, r2) {
        var o2 = new Float32Array(6);
        var n2 = new Float32Array(6);
        t3._$RT(o2), i3._$RT(n2);
        var s2 = new Float32Array(6);
        s2[0] = o2[0] + (n2[0] - o2[0]) * e3, s2[1] = o2[1] + (n2[1] - o2[1]) * e3, s2[2] = o2[2] + (n2[2] - o2[2]) * e3, s2[3] = o2[3] + (n2[3] - o2[3]) * e3, s2[4] = o2[4] + (n2[4] - o2[4]) * e3, s2[5] = o2[5] + (n2[5] - o2[5]) * e3, r2._$CT(s2);
      }, F.prototype._$CT = function(t3) {
        var i3 = Math.cos(t3[3]);
        var e3 = Math.sin(t3[3]);
        this._$7 = t3[0] * i3, this._$f = t3[0] * e3, this._$H = t3[1] * (t3[2] * i3 - e3), this._$g = t3[1] * (t3[2] * e3 + i3), this._$k = t3[4], this._$w = t3[5], this.update();
      }, F.prototype._$IT = function(t3) {
        t3[0] = this._$7, t3[1] = this._$f, t3[2] = this._$H, t3[3] = this._$g, t3[4] = this._$k, t3[5] = this._$w;
      }, C.prototype = new s(), C._$cs = "VISIBLE:", C._$ar = "LAYOUT:", C._$Co = 0, C._$D2 = [], C._$1T = 1, C.loadMotion = function(t3) {
        var i3 = new C();
        var e3 = [0];
        var r2 = t3.length;
        i3._$yT = 0;
        for (var o2 = 0; o2 < r2; ++o2) {
          var n2 = 255 & t3[o2];
          if (n2 != "\n" && n2 != "\r")
            if (n2 != "#")
              if (n2 != "$") {
                if (n2 >= "a" && n2 <= "z" || n2 >= "A" && n2 <= "Z" || n2 == "_") {
                  for (var s2 = o2, _2 = -1; o2 < r2 && ((n2 = 255 & t3[o2]) != "\r" && n2 != "\n"); ++o2)
                    if (n2 == "=") {
                      _2 = o2;
                      break;
                    }
                  if (_2 >= 0) {
                    var a2 = new B();
                    O.startsWith(t3, s2, C._$cs) ? (a2._$RP = B._$hs, a2._$4P = new String(t3, s2, _2 - s2)) : O.startsWith(t3, s2, C._$ar) ? (a2._$4P = new String(t3, s2 + 7, _2 - s2 - 7), O.startsWith(t3, s2 + 7, "ANCHOR_X") ? a2._$RP = B._$xs : O.startsWith(t3, s2 + 7, "ANCHOR_Y") ? a2._$RP = B._$us : O.startsWith(t3, s2 + 7, "SCALE_X") ? a2._$RP = B._$qs : O.startsWith(t3, s2 + 7, "SCALE_Y") ? a2._$RP = B._$Ys : O.startsWith(t3, s2 + 7, "X") ? a2._$RP = B._$ws : O.startsWith(t3, s2 + 7, "Y") && (a2._$RP = B._$Ns)) : (a2._$RP = B._$Fr, a2._$4P = new String(t3, s2, _2 - s2)), i3.motions.push(a2);
                    var h2 = 0;
                    for (C._$D2.clear(), o2 = _2 + 1; o2 < r2 && ((n2 = 255 & t3[o2]) != "\r" && n2 != "\n"); ++o2)
                      if (n2 != "," && n2 != " " && n2 != "	") {
                        O._$LS(t3, r2, o2, e3);
                      }
                    a2._$I0 = C._$D2._$BL(), h2 > i3._$yT && (i3._$yT = h2);
                  }
                }
              } else {
                for (var s2 = o2, _2 = -1; o2 < r2 && ((n2 = 255 & t3[o2]) != "\r" && n2 != "\n"); ++o2)
                  if (n2 == "=") {
                    _2 = o2;
                    break;
                  }
                if (_2 >= 0) {
                  for (_2 == s2 + 4 && t3[s2 + 1] == "f" && t3[s2 + 2] == "p" && t3[s2 + 3] == "s" && true, o2 = _2 + 1; o2 < r2 && ((n2 = 255 & t3[o2]) != "\r" && n2 != "\n"); ++o2)
                    if (n2 != "," && n2 != " " && n2 != "	") {
                      O._$LS(t3, r2, o2, e3);
                      o2 = e3[0];
                    }
                }
                for (; o2 < r2 && (t3[o2] != "\n" && t3[o2] != "\r"); ++o2)
                  ;
              }
            else
              for (; o2 < r2 && (t3[o2] != "\n" && t3[o2] != "\r"); ++o2)
                ;
        }
        return i3._$AS = 1e3 * i3._$yT / i3._$D0 | 0, i3;
      }, C.prototype.getDurationMSec = function() {
        return this._$AS;
      }, C.prototype.dump = function() {
        for (var t3 = 0; t3 < this.motions.length; t3++) {
          var i3 = this.motions[t3];
          console.log("_$wL[%s] [%d]. ", i3._$4P, i3._$I0.length);
          for (var e3 = 0; e3 < i3._$I0.length && e3 < 10; e3++)
            console.log("%5.2f ,", i3._$I0[e3]);
          console.log("\n");
        }
      }, C.prototype.updateParamExe = function(t3, i3, e3, r2) {
        for (var o2 = i3 - r2._$z2, n2 = o2 * this._$D0 / 1e3, s2 = 0 | n2, _2 = n2 - s2, a2 = 0; a2 < this.motions.length; a2++) {
          var h2 = this.motions[a2];
          var l2 = h2._$I0.length;
          var $2 = h2._$4P;
          if (h2._$RP == B._$hs) {
            var u2 = h2._$I0[s2 >= l2 ? l2 - 1 : s2];
            t3.setParamFloat($2, u2);
          } else if (B._$ws <= h2._$RP && h2._$RP <= B._$Ys)
            ;
          else {
            var p2 = t3.getParamFloat($2);
            var f2 = h2._$I0[s2 >= l2 ? l2 - 1 : s2];
            var c2 = h2._$I0[s2 + 1 >= l2 ? l2 - 1 : s2 + 1];
            var d2 = f2 + (c2 - f2) * _2;
            var g2 = p2 + (d2 - p2) * e3;
            t3.setParamFloat($2, g2);
          }
        }
        s2 >= this._$yT && (this._$E ? (r2._$z2 = i3, this.loopFadeIn && (r2._$bs = i3)) : r2._$9L = true);
      }, C.prototype._$r0 = function() {
        return this._$E;
      }, C.prototype._$aL = function(t3) {
        this._$E = t3;
      }, C.prototype.isLoopFadeIn = function() {
        return this.loopFadeIn;
      }, C.prototype.setLoopFadeIn = function(t3) {
        this.loopFadeIn = t3;
      }, N.prototype.clear = function() {
        this.size = 0;
      }, N.prototype.add = function(t3) {
        if (this._$P.length <= this.size) {
          var i3 = new Float32Array(2 * this.size);
          w._$jT(this._$P, 0, i3, 0, this.size), this._$P = i3;
        }
        this._$P[this.size++] = t3;
      }, N.prototype._$BL = function() {
        var t3 = new Float32Array(this.size);
        return w._$jT(this._$P, 0, t3, 0, this.size), t3;
      }, B._$Fr = 0, B._$hs = 1, B._$ws = 100, B._$Ns = 101, B._$xs = 102, B._$us = 103, B._$qs = 104, B._$Ys = 105, U._$Ms = 1, U._$Qs = 2, U._$i2 = 0, U._$No = 2, U._$do = U._$Ms, U._$Ls = true, U._$1r = 5, U._$Qb = 65, U._$J = 1e-4, U._$FT = 1e-3, U._$Ss = 3, G._$o7 = 6, G._$S7 = 7, G._$s7 = 8, G._$77 = 9, G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10, G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 = 11, G._$T7 = G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1, G._$Is = -2004318072, G._$h0 = 0, G._$4L = 23, G._$7P = 33, G._$uT = function(t3) {
        console.log("_$bo :: _$6 _$mo _$E0 : %d\n", t3);
      }, G._$9o = function(t3) {
        if (t3 < 40)
          return G._$uT(t3), null;
        if (t3 < 50)
          return G._$uT(t3), null;
        if (t3 < 60)
          return G._$uT(t3), null;
        if (t3 < 100)
          switch (t3) {
            case 65:
              return new Z();
            case 66:
              return new D();
            case 67:
              return new x();
            case 68:
              return new z();
            case 69:
              return new P();
            case 70:
              return new $t();
            default:
              return G._$uT(t3), null;
          }
        else if (t3 < 150)
          switch (t3) {
            case 131:
              return new st();
            case 133:
              return new tt();
            case 136:
              return new p();
            case 137:
              return new ot();
            case 142:
              return new j();
          }
        return G._$uT(t3), null;
      }, Y._$HP = 0, Y._$_0 = true;
      Y._$V2 = -1, Y._$W0 = -1, Y._$jr = false, Y._$ZS = true, Y._$tr = -1e6, Y._$lr = 1e6, Y._$is = 32, Y._$e = false, Y.prototype.getDrawDataIndex = function(t3) {
        for (var i3 = this._$aS.length - 1; i3 >= 0; --i3)
          if (this._$aS[i3] != null && this._$aS[i3].getDrawDataID() == t3)
            return i3;
        return -1;
      }, Y.prototype.getDrawData = function(t3) {
        if (t3 instanceof b) {
          if (this._$Bo == null) {
            this._$Bo = new Object();
            for (var i3 = this._$aS.length, e3 = 0; e3 < i3; e3++) {
              var r2 = this._$aS[e3];
              var o2 = r2.getDrawDataID();
              o2 != null && (this._$Bo[o2] = r2);
            }
          }
          return this._$Bo[id];
        }
        return t3 < this._$aS.length ? this._$aS[t3] : null;
      }, Y.prototype.release = function() {
        this._$3S.clear(), this._$aS.clear(), this._$F2.clear(), this._$Bo != null && this._$Bo.clear(), this._$db.clear(), this._$8b.clear(), this._$Hr.clear();
      }, Y.prototype.init = function() {
        this._$co++, this._$F2.length > 0 && this.release();
        for (var t3 = this._$Ri.getModelImpl(), i3 = t3._$Xr(), r2 = i3.length, o2 = new Array(), n2 = new Array(), s2 = 0; s2 < r2; ++s2) {
          var _2 = i3[s2];
          this._$F2.push(_2), this._$Hr.push(_2.init(this));
          for (var a2 = _2.getBaseData(), h2 = a2.length, l2 = 0; l2 < h2; ++l2)
            o2.push(a2[l2]);
          for (var l2 = 0; l2 < h2; ++l2) {
            var $2 = a2[l2].init(this);
            $2._$l2(s2), n2.push($2);
          }
          for (var u2 = _2.getDrawData(), p2 = u2.length, l2 = 0; l2 < p2; ++l2) {
            var f2 = u2[l2];
            var c2 = f2.init(this);
            c2._$IP = s2, this._$aS.push(f2), this._$8b.push(c2);
          }
        }
        for (var d2 = o2.length, g2 = yt._$2o(); ; ) {
          for (var y2 = false, s2 = 0; s2 < d2; ++s2) {
            var m2 = o2[s2];
            if (m2 != null) {
              var T2 = m2.getTargetBaseDataID();
              (T2 == null || T2 == g2 || this.getBaseDataIndex(T2) >= 0) && (this._$3S.push(m2), this._$db.push(n2[s2]), o2[s2] = null, y2 = true);
            }
          }
          if (!y2)
            break;
        }
        var P2 = t3._$E2();
        if (P2 != null) {
          var S2 = P2._$1s();
          if (S2 != null)
            for (var v2 = S2.length, s2 = 0; s2 < v2; ++s2) {
              var L2 = S2[s2];
              L2 != null && this._$02(L2.getParamID(), L2.getDefaultValue(), L2.getMinValue(), L2.getMaxValue());
            }
        }
        this.clipManager = new e2(this.dp_webgl), this.clipManager.init(this, this._$aS, this._$8b), this._$QT = true;
      }, Y.prototype.update = function() {
        Y._$e && _.start("_$zL");
        for (var t3 = this._$_2.length, i3 = 0; i3 < t3; i3++)
          this._$_2[i3] != this._$vr[i3] && (this._$Js[i3] = Y._$ZS, this._$vr[i3] = this._$_2[i3]);
        var e3 = this._$3S.length;
        var r2 = this._$aS.length;
        var o2 = W._$or();
        var n2 = W._$Pr();
        var s2 = n2 - o2 + 1;
        (this._$Ws == null || this._$Ws.length < s2) && (this._$Ws = new Int16Array(s2), this._$Vs = new Int16Array(s2));
        for (var i3 = 0; i3 < s2; i3++)
          this._$Ws[i3] = Y._$V2, this._$Vs[i3] = Y._$V2;
        (this._$Er == null || this._$Er.length < r2) && (this._$Er = new Int16Array(r2));
        for (var i3 = 0; i3 < r2; i3++)
          this._$Er[i3] = Y._$W0;
        Y._$e && _.dump("_$zL"), Y._$e && _.start("_$UL");
        for (var a2 = null, h2 = 0; h2 < e3; ++h2) {
          var l2 = this._$3S[h2];
          var $2 = this._$db[h2];
          try {
            l2._$Nr(this, $2), l2._$2b(this, $2);
          } catch (t4) {
            a2 == null && (a2 = t4);
          }
        }
        a2 != null && Y._$_0 && _._$Rb(a2), Y._$e && _.dump("_$UL"), Y._$e && _.start("_$DL");
        for (var u2 = null, p2 = 0; p2 < r2; ++p2) {
          var f2 = this._$aS[p2];
          var c2 = this._$8b[p2];
          try {
            if (f2._$Nr(this, c2), c2._$u2())
              continue;
            f2._$2b(this, c2);
            var d2;
            var g2 = Math.floor(f2._$zS(this, c2) - o2);
            try {
              d2 = this._$Vs[g2];
            } catch (t4) {
              console.log("_$li :: %s / %s 				@@_$fS\n", t4.toString(), f2.getDrawDataID().toString()), g2 = Math.floor(f2._$zS(this, c2) - o2);
              continue;
            }
            d2 == Y._$V2 ? this._$Ws[g2] = p2 : this._$Er[d2] = p2, this._$Vs[g2] = p2;
          } catch (t4) {
            u2 == null && (u2 = t4, at._$sT(at._$H7));
          }
        }
        u2 != null && Y._$_0 && _._$Rb(u2), Y._$e && _.dump("_$DL"), Y._$e && _.start("_$eL");
        for (var i3 = this._$Js.length - 1; i3 >= 0; i3--)
          this._$Js[i3] = Y._$jr;
        return this._$QT = false, Y._$e && _.dump("_$eL"), false;
      }, Y.prototype.preDraw = function(t3) {
        this.clipManager != null && (t3._$ZT(), this.clipManager.setupClip(this, t3));
      }, Y.prototype.draw = function(t3) {
        if (this._$Ws == null)
          return void _._$li("call _$Ri.update() before _$Ri.draw() ");
        var i3 = this._$Ws.length;
        t3._$ZT();
        for (var e3 = 0; e3 < i3; ++e3) {
          var r2 = this._$Ws[e3];
          if (r2 != Y._$V2)
            for (; ; ) {
              var o2 = this._$aS[r2];
              var n2 = this._$8b[r2];
              if (n2._$yo()) {
                var s2 = n2._$IP;
                var a2 = this._$Hr[s2];
                n2._$VS = a2.getPartsOpacity(), o2.draw(t3, this, n2);
              }
              var h2 = this._$Er[r2];
              if (h2 <= r2 || h2 == Y._$W0)
                break;
              r2 = h2;
            }
        }
      }, Y.prototype.getParamIndex = function(t3) {
        for (var i3 = this._$pb.length - 1; i3 >= 0; --i3)
          if (this._$pb[i3] == t3)
            return i3;
        return this._$02(t3, 0, Y._$tr, Y._$lr);
      }, Y.prototype._$BS = function(t3) {
        return this.getBaseDataIndex(t3);
      }, Y.prototype.getBaseDataIndex = function(t3) {
        for (var i3 = this._$3S.length - 1; i3 >= 0; --i3)
          if (this._$3S[i3] != null && this._$3S[i3].getBaseDataID() == t3)
            return i3;
        return -1;
      }, Y.prototype._$UT = function(t3, i3) {
        var e3 = new Float32Array(i3);
        return w._$jT(t3, 0, e3, 0, t3.length), e3;
      }, Y.prototype._$02 = function(t3, i3, e3, r2) {
        if (this._$qo >= this._$pb.length) {
          var o2 = this._$pb.length;
          var n2 = new Array(2 * o2);
          w._$jT(this._$pb, 0, n2, 0, o2), this._$pb = n2, this._$_2 = this._$UT(this._$_2, 2 * o2), this._$vr = this._$UT(this._$vr, 2 * o2), this._$Rr = this._$UT(this._$Rr, 2 * o2), this._$Or = this._$UT(this._$Or, 2 * o2);
          var s2 = new Array();
          w._$jT(this._$Js, 0, s2, 0, o2), this._$Js = s2;
        }
        return this._$pb[this._$qo] = t3, this._$_2[this._$qo] = i3, this._$vr[this._$qo] = i3, this._$Rr[this._$qo] = e3, this._$Or[this._$qo] = r2, this._$Js[this._$qo] = Y._$ZS, this._$qo++;
      }, Y.prototype._$Zo = function(t3, i3) {
        this._$3S[t3] = i3;
      }, Y.prototype.setParamFloat = function(t3, i3) {
        i3 < this._$Rr[t3] && (i3 = this._$Rr[t3]), i3 > this._$Or[t3] && (i3 = this._$Or[t3]), this._$_2[t3] = i3;
      }, Y.prototype.loadParam = function() {
        var t3 = this._$_2.length;
        t3 > this._$fs.length && (t3 = this._$fs.length), w._$jT(this._$fs, 0, this._$_2, 0, t3);
      }, Y.prototype.saveParam = function() {
        var t3 = this._$_2.length;
        t3 > this._$fs.length && (this._$fs = new Float32Array(t3)), w._$jT(this._$_2, 0, this._$fs, 0, t3);
      }, Y.prototype._$v2 = function() {
        return this._$co;
      }, Y.prototype._$WS = function() {
        return this._$QT;
      }, Y.prototype._$Xb = function(t3) {
        return this._$Js[t3] == Y._$ZS;
      }, Y.prototype._$vs = function() {
        return this._$Es;
      }, Y.prototype._$Tr = function() {
        return this._$ZP;
      }, Y.prototype.getBaseData = function(t3) {
        return this._$3S[t3];
      }, Y.prototype.getParamFloat = function(t3) {
        return this._$_2[t3];
      }, Y.prototype.getParamMax = function(t3) {
        return this._$Or[t3];
      }, Y.prototype.getParamMin = function(t3) {
        return this._$Rr[t3];
      }, Y.prototype.setPartsOpacity = function(t3, i3) {
        this._$Hr[t3].setPartsOpacity(i3);
      }, Y.prototype.getPartsOpacity = function(t3) {
        return this._$Hr[t3].getPartsOpacity();
      }, Y.prototype.getPartsDataIndex = function(t3) {
        for (var i3 = this._$F2.length - 1; i3 >= 0; --i3)
          if (this._$F2[i3] != null && this._$F2[i3]._$p2() == t3)
            return i3;
        return -1;
      }, Y.prototype._$q2 = function(t3) {
        return this._$db[t3];
      }, Y.prototype._$C2 = function(t3) {
        return this._$8b[t3];
      }, Y.prototype._$Bb = function(t3) {
        return this._$Hr[t3];
      }, Y.prototype._$5s = function(t3, i3) {
        for (var e3 = this._$Ws.length, r2 = t3, o2 = 0; o2 < e3; ++o2) {
          var n2 = this._$Ws[o2];
          if (n2 != Y._$V2)
            for (; ; ) {
              var s2 = this._$8b[n2];
              s2._$yo() && (s2._$GT()._$B2(this, s2, r2), r2 += i3);
              var _2 = this._$Er[n2];
              if (_2 <= n2 || _2 == Y._$W0)
                break;
              n2 = _2;
            }
        }
      }, Y.prototype.setDrawParam = function(t3) {
        this.dp_webgl = t3;
      }, Y.prototype.getDrawParam = function() {
        return this.dp_webgl;
      }, k._$0T = function(t3) {
        return k._$0T(new _$5(t3));
      }, k._$0T = function(t3) {
        if (!t3.exists())
          throw new _$ls(t3._$3b());
        for (var i3, e3 = t3.length(), r2 = new Int8Array(e3), o2 = new _$Xs(new _$kb(t3), 8192), n2 = 0; (i3 = o2.read(r2, n2, e3 - n2)) > 0; )
          n2 += i3;
        return r2;
      }, k._$C = function(t3) {
        var i3 = null;
        var e3 = null;
        try {
          i3 = t3 instanceof Array ? t3 : new _$Xs(t3, 8192), e3 = new _$js();
          for (var r2, o2 = new Int8Array(1e3); (r2 = i3.read(o2)) > 0; )
            e3.write(o2, 0, r2);
          return e3._$TS();
        } finally {
          t3 != null && t3.close(), e3 != null && (e3.flush(), e3.close());
        }
      };
      X.prototype = new E(), X._$As = 32, X._$Gr = false, X._$NT = null, X._$vS = null, X._$no = null, X._$9r = function(t3) {
        return new Float32Array(t3);
      }, X._$vb = function(t3) {
        return new Int16Array(t3);
      }, X._$cr = function(t3, i3) {
        return t3 == null || t3._$yL() < i3.length ? (t3 = X._$9r(2 * i3.length), t3.put(i3), t3._$oT(0)) : (t3.clear(), t3.put(i3), t3._$oT(0)), t3;
      }, X._$mb = function(t3, i3) {
        return t3 == null || t3._$yL() < i3.length ? (t3 = X._$vb(2 * i3.length), t3.put(i3), t3._$oT(0)) : (t3.clear(), t3.put(i3), t3._$oT(0)), t3;
      }, X._$Hs = function() {
        return X._$Gr;
      }, X._$as = function(t3) {
        X._$Gr = t3;
      }, X.prototype.setGL = function(t3) {
        this.gl = t3;
      }, X.prototype.setTransform = function(t3) {
        this.transform = t3;
      }, X.prototype._$ZT = function() {
      }, X.prototype._$Uo = function(t3, i3, e3, r2, o2, n2, s2, _2) {
        if (!(n2 < 0.01)) {
          var a2 = this._$U2[t3];
          var h2 = n2 > 0.9 ? at.EXPAND_W : 0;
          this.gl.drawElements(a2, e3, r2, o2, n2, h2, this.transform, _2);
        }
      }, X.prototype._$Rs = function() {
        throw new Error("_$Rs");
      }, X.prototype._$Ds = function(t3) {
        throw new Error("_$Ds");
      }, X.prototype._$K2 = function() {
        for (var t3 = 0; t3 < this._$sb.length; t3++) {
          this._$sb[t3] != 0 && (this.gl._$Sr(1, this._$sb, t3), this._$sb[t3] = 0);
        }
      }, X.prototype.setTexture = function(t3, i3) {
        this._$sb.length < t3 + 1 && this._$nS(t3), this._$sb[t3] = i3;
      }, X.prototype.setTexture = function(t3, i3) {
        this._$sb.length < t3 + 1 && this._$nS(t3), this._$U2[t3] = i3;
      }, X.prototype._$nS = function(t3) {
        var i3 = Math.max(2 * this._$sb.length, t3 + 1 + 10);
        var e3 = new Int32Array(i3);
        w._$jT(this._$sb, 0, e3, 0, this._$sb.length), this._$sb = e3;
        var r2 = new Array();
        w._$jT(this._$U2, 0, r2, 0, this._$U2.length), this._$U2 = r2;
      }, z.prototype = new I(), z._$Xo = new Float32Array(2), z._$io = new Float32Array(2), z._$0o = new Float32Array(2), z._$Lo = new Float32Array(2), z._$To = new Float32Array(2), z._$Po = new Float32Array(2), z._$gT = new Array(), z.prototype._$zP = function() {
        this._$GS = new D(), this._$GS._$zP(), this._$Y0 = new Array();
      }, z.prototype.getType = function() {
        return I._$c2;
      }, z.prototype._$F0 = function(t3) {
        I.prototype._$F0.call(this, t3), this._$GS = t3._$nP(), this._$Y0 = t3._$nP(), I.prototype.readV2_opacity.call(this, t3);
      }, z.prototype.init = function(t3) {
        var i3 = new H(this);
        return i3._$Yr = new P(), this._$32() && (i3._$Wr = new P()), i3;
      }, z.prototype._$Nr = function(t3, i3) {
        this != i3._$GT() && console.log("### assert!! ### ");
        var e3 = i3;
        if (this._$GS._$Ur(t3)) {
          var r2 = z._$gT;
          r2[0] = false;
          var o2 = this._$GS._$Q2(t3, r2);
          i3._$Ib(r2[0]), this.interpolateOpacity(t3, this._$GS, i3, r2);
          var n2 = t3._$vs();
          var s2 = t3._$Tr();
          if (this._$GS._$zr(n2, s2, o2), o2 <= 0) {
            var _2 = this._$Y0[n2[0]];
            e3._$Yr.init(_2);
          } else if (o2 == 1) {
            var _2 = this._$Y0[n2[0]];
            var a2 = this._$Y0[n2[1]];
            var h2 = s2[0];
            e3._$Yr._$fL = _2._$fL + (a2._$fL - _2._$fL) * h2, e3._$Yr._$gL = _2._$gL + (a2._$gL - _2._$gL) * h2, e3._$Yr._$B0 = _2._$B0 + (a2._$B0 - _2._$B0) * h2, e3._$Yr._$z0 = _2._$z0 + (a2._$z0 - _2._$z0) * h2, e3._$Yr._$qT = _2._$qT + (a2._$qT - _2._$qT) * h2;
          } else if (o2 == 2) {
            var _2 = this._$Y0[n2[0]];
            var a2 = this._$Y0[n2[1]];
            var l2 = this._$Y0[n2[2]];
            var $2 = this._$Y0[n2[3]];
            var h2 = s2[0];
            var u2 = s2[1];
            var p2 = _2._$fL + (a2._$fL - _2._$fL) * h2;
            var f2 = l2._$fL + ($2._$fL - l2._$fL) * h2;
            e3._$Yr._$fL = p2 + (f2 - p2) * u2, p2 = _2._$gL + (a2._$gL - _2._$gL) * h2, f2 = l2._$gL + ($2._$gL - l2._$gL) * h2, e3._$Yr._$gL = p2 + (f2 - p2) * u2, p2 = _2._$B0 + (a2._$B0 - _2._$B0) * h2, f2 = l2._$B0 + ($2._$B0 - l2._$B0) * h2, e3._$Yr._$B0 = p2 + (f2 - p2) * u2, p2 = _2._$z0 + (a2._$z0 - _2._$z0) * h2, f2 = l2._$z0 + ($2._$z0 - l2._$z0) * h2, e3._$Yr._$z0 = p2 + (f2 - p2) * u2, p2 = _2._$qT + (a2._$qT - _2._$qT) * h2, f2 = l2._$qT + ($2._$qT - l2._$qT) * h2, e3._$Yr._$qT = p2 + (f2 - p2) * u2;
          } else if (o2 == 3) {
            var c2 = this._$Y0[n2[0]];
            var d2 = this._$Y0[n2[1]];
            var g2 = this._$Y0[n2[2]];
            var y2 = this._$Y0[n2[3]];
            var m2 = this._$Y0[n2[4]];
            var T2 = this._$Y0[n2[5]];
            var P2 = this._$Y0[n2[6]];
            var S2 = this._$Y0[n2[7]];
            var h2 = s2[0];
            var u2 = s2[1];
            var v2 = s2[2];
            var p2 = c2._$fL + (d2._$fL - c2._$fL) * h2;
            var f2 = g2._$fL + (y2._$fL - g2._$fL) * h2;
            var L2 = m2._$fL + (T2._$fL - m2._$fL) * h2;
            var M2 = P2._$fL + (S2._$fL - P2._$fL) * h2;
            e3._$Yr._$fL = (1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2), p2 = c2._$gL + (d2._$gL - c2._$gL) * h2, f2 = g2._$gL + (y2._$gL - g2._$gL) * h2, L2 = m2._$gL + (T2._$gL - m2._$gL) * h2, M2 = P2._$gL + (S2._$gL - P2._$gL) * h2, e3._$Yr._$gL = (1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2), p2 = c2._$B0 + (d2._$B0 - c2._$B0) * h2, f2 = g2._$B0 + (y2._$B0 - g2._$B0) * h2, L2 = m2._$B0 + (T2._$B0 - m2._$B0) * h2, M2 = P2._$B0 + (S2._$B0 - P2._$B0) * h2, e3._$Yr._$B0 = (1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2), p2 = c2._$z0 + (d2._$z0 - c2._$z0) * h2, f2 = g2._$z0 + (y2._$z0 - g2._$z0) * h2, L2 = m2._$z0 + (T2._$z0 - m2._$z0) * h2, M2 = P2._$z0 + (S2._$z0 - P2._$z0) * h2, e3._$Yr._$z0 = (1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2), p2 = c2._$qT + (d2._$qT - c2._$qT) * h2, f2 = g2._$qT + (y2._$qT - g2._$qT) * h2, L2 = m2._$qT + (T2._$qT - m2._$qT) * h2, M2 = P2._$qT + (S2._$qT - P2._$qT) * h2, e3._$Yr._$qT = (1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2);
          } else if (o2 == 4) {
            var E2 = this._$Y0[n2[0]];
            var A2 = this._$Y0[n2[1]];
            var I2 = this._$Y0[n2[2]];
            var w2 = this._$Y0[n2[3]];
            var x2 = this._$Y0[n2[4]];
            var O2 = this._$Y0[n2[5]];
            var D2 = this._$Y0[n2[6]];
            var R2 = this._$Y0[n2[7]];
            var b2 = this._$Y0[n2[8]];
            var F2 = this._$Y0[n2[9]];
            var C2 = this._$Y0[n2[10]];
            var N2 = this._$Y0[n2[11]];
            var B2 = this._$Y0[n2[12]];
            var U2 = this._$Y0[n2[13]];
            var G2 = this._$Y0[n2[14]];
            var Y2 = this._$Y0[n2[15]];
            var h2 = s2[0];
            var u2 = s2[1];
            var v2 = s2[2];
            var k2 = s2[3];
            var p2 = E2._$fL + (A2._$fL - E2._$fL) * h2;
            var f2 = I2._$fL + (w2._$fL - I2._$fL) * h2;
            var L2 = x2._$fL + (O2._$fL - x2._$fL) * h2;
            var M2 = D2._$fL + (R2._$fL - D2._$fL) * h2;
            var V = b2._$fL + (F2._$fL - b2._$fL) * h2;
            var X2 = C2._$fL + (N2._$fL - C2._$fL) * h2;
            var H2 = B2._$fL + (U2._$fL - B2._$fL) * h2;
            var W2 = G2._$fL + (Y2._$fL - G2._$fL) * h2;
            e3._$Yr._$fL = (1 - k2) * ((1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2)) + k2 * ((1 - v2) * (V + (X2 - V) * u2) + v2 * (H2 + (W2 - H2) * u2)), p2 = E2._$gL + (A2._$gL - E2._$gL) * h2, f2 = I2._$gL + (w2._$gL - I2._$gL) * h2, L2 = x2._$gL + (O2._$gL - x2._$gL) * h2, M2 = D2._$gL + (R2._$gL - D2._$gL) * h2, V = b2._$gL + (F2._$gL - b2._$gL) * h2, X2 = C2._$gL + (N2._$gL - C2._$gL) * h2, H2 = B2._$gL + (U2._$gL - B2._$gL) * h2, W2 = G2._$gL + (Y2._$gL - G2._$gL) * h2, e3._$Yr._$gL = (1 - k2) * ((1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2)) + k2 * ((1 - v2) * (V + (X2 - V) * u2) + v2 * (H2 + (W2 - H2) * u2)), p2 = E2._$B0 + (A2._$B0 - E2._$B0) * h2, f2 = I2._$B0 + (w2._$B0 - I2._$B0) * h2, L2 = x2._$B0 + (O2._$B0 - x2._$B0) * h2, M2 = D2._$B0 + (R2._$B0 - D2._$B0) * h2, V = b2._$B0 + (F2._$B0 - b2._$B0) * h2, X2 = C2._$B0 + (N2._$B0 - C2._$B0) * h2, H2 = B2._$B0 + (U2._$B0 - B2._$B0) * h2, W2 = G2._$B0 + (Y2._$B0 - G2._$B0) * h2, e3._$Yr._$B0 = (1 - k2) * ((1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2)) + k2 * ((1 - v2) * (V + (X2 - V) * u2) + v2 * (H2 + (W2 - H2) * u2)), p2 = E2._$z0 + (A2._$z0 - E2._$z0) * h2, f2 = I2._$z0 + (w2._$z0 - I2._$z0) * h2, L2 = x2._$z0 + (O2._$z0 - x2._$z0) * h2, M2 = D2._$z0 + (R2._$z0 - D2._$z0) * h2, V = b2._$z0 + (F2._$z0 - b2._$z0) * h2, X2 = C2._$z0 + (N2._$z0 - C2._$z0) * h2, H2 = B2._$z0 + (U2._$z0 - B2._$z0) * h2, W2 = G2._$z0 + (Y2._$z0 - G2._$z0) * h2, e3._$Yr._$z0 = (1 - k2) * ((1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2)) + k2 * ((1 - v2) * (V + (X2 - V) * u2) + v2 * (H2 + (W2 - H2) * u2)), p2 = E2._$qT + (A2._$qT - E2._$qT) * h2, f2 = I2._$qT + (w2._$qT - I2._$qT) * h2, L2 = x2._$qT + (O2._$qT - x2._$qT) * h2, M2 = D2._$qT + (R2._$qT - D2._$qT) * h2, V = b2._$qT + (F2._$qT - b2._$qT) * h2, X2 = C2._$qT + (N2._$qT - C2._$qT) * h2, H2 = B2._$qT + (U2._$qT - B2._$qT) * h2, W2 = G2._$qT + (Y2._$qT - G2._$qT) * h2, e3._$Yr._$qT = (1 - k2) * ((1 - v2) * (p2 + (f2 - p2) * u2) + v2 * (L2 + (M2 - L2) * u2)) + k2 * ((1 - v2) * (V + (X2 - V) * u2) + v2 * (H2 + (W2 - H2) * u2));
          } else {
            for (var j2 = 0 | Math.pow(2, o2), q2 = new Float32Array(j2), J2 = 0; J2 < j2; J2++) {
              for (var Q2 = J2, Z2 = 1, K2 = 0; K2 < o2; K2++)
                Z2 *= Q2 % 2 == 0 ? 1 - s2[K2] : s2[K2], Q2 /= 2;
              q2[J2] = Z2;
            }
            for (var tt2 = new Array(), it2 = 0; it2 < j2; it2++)
              tt2[it2] = this._$Y0[n2[it2]];
            for (var et2 = 0, rt = 0, ot2 = 0, nt2 = 0, st2 = 0, it2 = 0; it2 < j2; it2++)
              et2 += q2[it2] * tt2[it2]._$fL, rt += q2[it2] * tt2[it2]._$gL, ot2 += q2[it2] * tt2[it2]._$B0, nt2 += q2[it2] * tt2[it2]._$z0, st2 += q2[it2] * tt2[it2]._$qT;
            e3._$Yr._$fL = et2, e3._$Yr._$gL = rt, e3._$Yr._$B0 = ot2, e3._$Yr._$z0 = nt2, e3._$Yr._$qT = st2;
          }
          var _2 = this._$Y0[n2[0]];
          e3._$Yr.reflectX = _2.reflectX, e3._$Yr.reflectY = _2.reflectY;
        }
      }, z.prototype._$2b = function(t3, i3) {
        this != i3._$GT() && console.log("### assert!! ### ");
        var e3 = i3;
        if (e3._$hS(true), this._$32()) {
          var r2 = this.getTargetBaseDataID();
          if (e3._$8r == I._$ur && (e3._$8r = t3.getBaseDataIndex(r2)), e3._$8r < 0)
            at._$so && _._$li("_$L _$0P _$G :: %s", r2), e3._$hS(false);
          else {
            var o2 = t3.getBaseData(e3._$8r);
            if (o2 != null) {
              var n2 = t3._$q2(e3._$8r);
              var s2 = z._$Xo;
              s2[0] = e3._$Yr._$fL, s2[1] = e3._$Yr._$gL;
              var a2 = z._$io;
              a2[0] = 0, a2[1] = -0.1;
              n2._$GT().getType() == I._$c2 ? a2[1] = -10 : a2[1] = -0.1;
              var h2 = z._$0o;
              this._$Jr(t3, o2, n2, s2, a2, h2);
              var l2 = Lt._$92(a2, h2);
              o2._$nb(t3, n2, s2, s2, 1, 0, 2), e3._$Wr._$fL = s2[0], e3._$Wr._$gL = s2[1], e3._$Wr._$B0 = e3._$Yr._$B0, e3._$Wr._$z0 = e3._$Yr._$z0, e3._$Wr._$qT = e3._$Yr._$qT - l2 * Lt._$NS;
              var $2 = n2.getTotalScale();
              e3.setTotalScale_notForClient($2 * e3._$Wr._$B0);
              var u2 = n2.getTotalOpacity();
              e3.setTotalOpacity(u2 * e3.getInterpolatedOpacity()), e3._$Wr.reflectX = e3._$Yr.reflectX, e3._$Wr.reflectY = e3._$Yr.reflectY, e3._$hS(n2._$yo());
            } else
              e3._$hS(false);
          }
        } else
          e3.setTotalScale_notForClient(e3._$Yr._$B0), e3.setTotalOpacity(e3.getInterpolatedOpacity());
      }, z.prototype._$nb = function(t3, i3, e3, r2, o2, n2, s2) {
        this != i3._$GT() && console.log("### assert!! ### ");
        for (var _2, a2, h2 = i3, l2 = h2._$Wr != null ? h2._$Wr : h2._$Yr, $2 = Math.sin(Lt._$bS * l2._$qT), u2 = Math.cos(Lt._$bS * l2._$qT), p2 = h2.getTotalScale(), f2 = l2.reflectX ? -1 : 1, c2 = l2.reflectY ? -1 : 1, d2 = u2 * p2 * f2, g2 = -$2 * p2 * c2, y2 = $2 * p2 * f2, m2 = u2 * p2 * c2, T2 = l2._$fL, P2 = l2._$gL, S2 = o2 * s2, v2 = n2; v2 < S2; v2 += s2)
          _2 = e3[v2], a2 = e3[v2 + 1], r2[v2] = d2 * _2 + g2 * a2 + T2, r2[v2 + 1] = y2 * _2 + m2 * a2 + P2;
      }, z.prototype._$Jr = function(t3, i3, e3, r2, o2, n2) {
        i3 != e3._$GT() && console.log("### assert!! ### ");
        var s2 = z._$Lo;
        z._$Lo[0] = r2[0], z._$Lo[1] = r2[1], i3._$nb(t3, e3, s2, s2, 1, 0, 2);
        for (var _2 = z._$To, a2 = z._$Po, h2 = 1, l2 = 0; l2 < 10; l2++) {
          if (a2[0] = r2[0] + h2 * o2[0], a2[1] = r2[1] + h2 * o2[1], i3._$nb(t3, e3, a2, _2, 1, 0, 2), _2[0] -= s2[0], _2[1] -= s2[1], _2[0] != 0 || _2[1] != 0)
            return n2[0] = _2[0], void (n2[1] = _2[1]);
          if (a2[0] = r2[0] - h2 * o2[0], a2[1] = r2[1] - h2 * o2[1], i3._$nb(t3, e3, a2, _2, 1, 0, 2), _2[0] -= s2[0], _2[1] -= s2[1], _2[0] != 0 || _2[1] != 0)
            return _2[0] = -_2[0], _2[0] = -_2[0], n2[0] = _2[0], void (n2[1] = _2[1]);
          h2 *= 0.1;
        }
        at._$so && console.log("_$L0 to transform _$SP\n");
      }, H.prototype = new _t(), W.prototype = new M(), W._$ur = -2, W._$ES = 500, W._$wb = 2, W._$8S = 3, W._$os = 4, W._$52 = W._$ES, W._$R2 = W._$ES, W._$Sb = function(t3) {
        for (var i3 = t3.length - 1; i3 >= 0; --i3) {
          var e3 = t3[i3];
          e3 < W._$52 ? W._$52 = e3 : e3 > W._$R2 && (W._$R2 = e3);
        }
      }, W._$or = function() {
        return W._$52;
      }, W._$Pr = function() {
        return W._$R2;
      }, W.prototype._$F0 = function(t3) {
        this._$gP = t3._$nP(), this._$dr = t3._$nP(), this._$GS = t3._$nP(), this._$qb = t3._$6L(), this._$Lb = t3._$cS(), this._$mS = t3._$Tb(), t3.getFormatVersion() >= G._$T7 ? (this.clipID = t3._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = null, W._$Sb(this._$Lb);
      }, W.prototype.getClipIDList = function() {
        return this.clipIDList;
      }, W.prototype._$Nr = function(t3, i3) {
        if (i3._$IS[0] = false, i3._$Us = v._$Z2(t3, this._$GS, i3._$IS, this._$Lb), at._$Zs)
          ;
        else if (i3._$IS[0])
          return;
        i3._$7s = v._$br(t3, this._$GS, i3._$IS, this._$mS);
      }, W.prototype._$2b = function(t3) {
      }, W.prototype.getDrawDataID = function() {
        return this._$gP;
      }, W.prototype._$j2 = function(t3) {
        this._$gP = t3;
      }, W.prototype.getOpacity = function(t3, i3) {
        return i3._$7s;
      }, W.prototype._$zS = function(t3, i3) {
        return i3._$Us;
      }, W.prototype.getTargetBaseDataID = function() {
        return this._$dr;
      }, W.prototype._$gs = function(t3) {
        this._$dr = t3;
      }, W.prototype._$32 = function() {
        return this._$dr != null && this._$dr != yt._$2o();
      }, W.prototype.getType = function() {
      }, j._$42 = 0, j.prototype._$1b = function() {
        return this._$3S;
      }, j.prototype.getDrawDataList = function() {
        return this._$aS;
      }, j.prototype._$F0 = function(t3) {
        this._$NL = t3._$nP(), this._$aS = t3._$nP(), this._$3S = t3._$nP();
      }, j.prototype._$kr = function(t3) {
        t3._$Zo(this._$3S), t3._$xo(this._$aS), this._$3S = null, this._$aS = null;
      }, q.prototype = new i2(), q.loadModel = function(t3) {
        var e3 = new q();
        return i2._$62(e3, t3), e3;
      }, q.loadModel = function(t3) {
        var e3 = new q();
        return i2._$62(e3, t3), e3;
      }, q._$to = function() {
        return new q();
      }, q._$er = function(t3) {
        var i3 = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
        if (i3.exists() == 0)
          throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + i3._$PL());
        for (var e3 = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], r2 = q.loadModel(i3._$3b()), o2 = 0; o2 < e3.length; o2++) {
          var n2 = new _$5(e3[o2]);
          if (n2.exists() == 0)
            throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + n2._$PL());
          r2.setTexture(o2, _$nL._$_o(t3, n2._$3b()));
        }
        return r2;
      }, q.prototype.setGL = function(t3) {
        this._$zo.setGL(t3);
      }, q.prototype.setTransform = function(t3) {
        this._$zo.setTransform(t3);
      }, q.prototype.draw = function() {
        this._$5S.draw(this._$zo);
      }, q.prototype._$K2 = function() {
        this._$zo._$K2();
      }, q.prototype.setTexture = function(t3, i3) {
        this._$zo == null && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t3, i3);
      }, q.prototype.setTexture = function(t3, i3) {
        this._$zo == null && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t3, i3);
      }, q.prototype._$Rs = function() {
        return this._$zo._$Rs();
      }, q.prototype._$Ds = function(t3) {
        this._$zo._$Ds(t3);
      }, q.prototype.getDrawParam = function() {
        return this._$zo;
      }, J.prototype = new s(), J._$cs = "VISIBLE:", J._$ar = "LAYOUT:", J.MTN_PREFIX_FADEIN = "FADEIN:", J.MTN_PREFIX_FADEOUT = "FADEOUT:", J._$Co = 0, J._$1T = 1, J.loadMotion = function(t3) {
        var i3 = k._$C(t3);
        return J.loadMotion(i3);
      }, J.loadMotion = function(t3) {
        t3 instanceof ArrayBuffer && (t3 = new DataView(t3));
        var i3 = new J();
        var e3 = [0];
        var r2 = t3.byteLength;
        i3._$yT = 0;
        for (var o2 = 0; o2 < r2; ++o2) {
          var n2 = Q(t3, o2);
          var s2 = n2.charCodeAt(0);
          if (n2 != "\n" && n2 != "\r")
            if (n2 != "#")
              if (n2 != "$") {
                if (s2 >= 97 && s2 <= 122 || s2 >= 65 && s2 <= 90 || n2 == "_") {
                  for (var _2 = o2, a2 = -1; o2 < r2 && ((n2 = Q(t3, o2)) != "\r" && n2 != "\n"); ++o2)
                    if (n2 == "=") {
                      a2 = o2;
                      break;
                    }
                  if (a2 >= 0) {
                    var h2 = new B();
                    O.startsWith(t3, _2, J._$cs) ? (h2._$RP = B._$hs, h2._$4P = O.createString(t3, _2, a2 - _2)) : O.startsWith(t3, _2, J._$ar) ? (h2._$4P = O.createString(t3, _2 + 7, a2 - _2 - 7), O.startsWith(t3, _2 + 7, "ANCHOR_X") ? h2._$RP = B._$xs : O.startsWith(t3, _2 + 7, "ANCHOR_Y") ? h2._$RP = B._$us : O.startsWith(t3, _2 + 7, "SCALE_X") ? h2._$RP = B._$qs : O.startsWith(t3, _2 + 7, "SCALE_Y") ? h2._$RP = B._$Ys : O.startsWith(t3, _2 + 7, "X") ? h2._$RP = B._$ws : O.startsWith(t3, _2 + 7, "Y") && (h2._$RP = B._$Ns)) : (h2._$RP = B._$Fr, h2._$4P = O.createString(t3, _2, a2 - _2)), i3.motions.push(h2);
                    var l2 = 0;
                    var $2 = [];
                    for (o2 = a2 + 1; o2 < r2 && ((n2 = Q(t3, o2)) != "\r" && n2 != "\n"); ++o2)
                      if (n2 != "," && n2 != " " && n2 != "	") {
                        O._$LS(t3, r2, o2, e3);
                      }
                    h2._$I0 = new Float32Array($2), l2 > i3._$yT && (i3._$yT = l2);
                  }
                }
              } else {
                for (var _2 = o2, a2 = -1; o2 < r2 && ((n2 = Q(t3, o2)) != "\r" && n2 != "\n"); ++o2)
                  if (n2 == "=") {
                    a2 = o2;
                    break;
                  }
                if (a2 >= 0) {
                  for (a2 == _2 + 4 && Q(t3, _2 + 1) == "f" && Q(t3, _2 + 2) == "p" && Q(t3, _2 + 3) == "s" && true, o2 = a2 + 1; o2 < r2 && ((n2 = Q(t3, o2)) != "\r" && n2 != "\n"); ++o2)
                    if (n2 != "," && n2 != " " && n2 != "	") {
                      O._$LS(t3, r2, o2, e3);
                      o2 = e3[0];
                    }
                }
                for (; o2 < r2 && (Q(t3, o2) != "\n" && Q(t3, o2) != "\r"); ++o2)
                  ;
              }
            else
              for (; o2 < r2 && (Q(t3, o2) != "\n" && Q(t3, o2) != "\r"); ++o2)
                ;
        }
        return i3._$rr = 1e3 * i3._$yT / i3._$D0 | 0, i3;
      }, J.prototype.getDurationMSec = function() {
        return this._$E ? -1 : this._$rr;
      }, J.prototype.getLoopDurationMSec = function() {
        return this._$rr;
      }, J.prototype.dump = function() {
        for (var t3 = 0; t3 < this.motions.length; t3++) {
          var i3 = this.motions[t3];
          console.log("_$wL[%s] [%d]. ", i3._$4P, i3._$I0.length);
          for (var e3 = 0; e3 < i3._$I0.length && e3 < 10; e3++)
            console.log("%5.2f ,", i3._$I0[e3]);
          console.log("\n");
        }
      }, J.prototype.updateParamExe = function(t3, i3, e3, r2) {
        for (var o2 = i3 - r2._$z2, n2 = o2 * this._$D0 / 1e3, s2 = 0 | n2, _2 = n2 - s2, a2 = 0; a2 < this.motions.length; a2++) {
          var h2 = this.motions[a2];
          var l2 = h2._$I0.length;
          var $2 = h2._$4P;
          if (h2._$RP == B._$hs) {
            var u2 = h2._$I0[s2 >= l2 ? l2 - 1 : s2];
            t3.setParamFloat($2, u2);
          } else if (B._$ws <= h2._$RP && h2._$RP <= B._$Ys)
            ;
          else {
            var p2;
            var f2 = t3.getParamIndex($2);
            var c2 = t3.getModelContext();
            var d2 = c2.getParamMax(f2);
            var g2 = c2.getParamMin(f2);
            var y2 = 0.4 * (d2 - g2);
            var m2 = c2.getParamFloat(f2);
            var T2 = h2._$I0[s2 >= l2 ? l2 - 1 : s2];
            var P2 = h2._$I0[s2 + 1 >= l2 ? l2 - 1 : s2 + 1];
            p2 = T2 < P2 && P2 - T2 > y2 || T2 > P2 && T2 - P2 > y2 ? T2 : T2 + (P2 - T2) * _2;
            var S2 = m2 + (p2 - m2) * e3;
            t3.setParamFloat($2, S2);
          }
        }
        s2 >= this._$yT && (this._$E ? (r2._$z2 = i3, this.loopFadeIn && (r2._$bs = i3)) : r2._$9L = true), this._$eP = e3;
      }, J.prototype._$r0 = function() {
        return this._$E;
      }, J.prototype._$aL = function(t3) {
        this._$E = t3;
      }, J.prototype._$S0 = function() {
        return this._$D0;
      }, J.prototype._$U0 = function(t3) {
        this._$D0 = t3;
      }, J.prototype.isLoopFadeIn = function() {
        return this.loopFadeIn;
      }, J.prototype.setLoopFadeIn = function(t3) {
        this.loopFadeIn = t3;
      }, N.prototype.clear = function() {
        this.size = 0;
      }, N.prototype.add = function(t3) {
        if (this._$P.length <= this.size) {
          var i3 = new Float32Array(2 * this.size);
          w._$jT(this._$P, 0, i3, 0, this.size), this._$P = i3;
        }
        this._$P[this.size++] = t3;
      }, N.prototype._$BL = function() {
        var t3 = new Float32Array(this.size);
        return w._$jT(this._$P, 0, t3, 0, this.size), t3;
      }, B._$Fr = 0, B._$hs = 1, B._$ws = 100, B._$Ns = 101, B._$xs = 102, B._$us = 103, B._$qs = 104, B._$Ys = 105, Z.prototype = new I(), Z._$gT = new Array(), Z.prototype._$zP = function() {
        this._$GS = new D(), this._$GS._$zP();
      }, Z.prototype._$F0 = function(t3) {
        I.prototype._$F0.call(this, t3), this._$A = t3._$6L(), this._$o = t3._$6L(), this._$GS = t3._$nP(), this._$Eo = t3._$nP(), I.prototype.readV2_opacity.call(this, t3);
      }, Z.prototype.init = function(t3) {
        var i3 = new K(this);
        var e3 = (this._$o + 1) * (this._$A + 1);
        return i3._$Cr != null && (i3._$Cr = null), i3._$Cr = new Float32Array(2 * e3), i3._$hr != null && (i3._$hr = null), this._$32() ? i3._$hr = new Float32Array(2 * e3) : i3._$hr = null, i3;
      }, Z.prototype._$Nr = function(t3, i3) {
        var e3 = i3;
        if (this._$GS._$Ur(t3)) {
          var r2 = this._$VT();
          var o2 = Z._$gT;
          o2[0] = false, v._$Vr(t3, this._$GS, o2, r2, this._$Eo, e3._$Cr, 0, 2), i3._$Ib(o2[0]), this.interpolateOpacity(t3, this._$GS, i3, o2);
        }
      }, Z.prototype._$2b = function(t3, i3) {
        var e3 = i3;
        if (e3._$hS(true), this._$32()) {
          var r2 = this.getTargetBaseDataID();
          if (e3._$8r == I._$ur && (e3._$8r = t3.getBaseDataIndex(r2)), e3._$8r < 0)
            at._$so && _._$li("_$L _$0P _$G :: %s", r2), e3._$hS(false);
          else {
            var o2 = t3.getBaseData(e3._$8r);
            var n2 = t3._$q2(e3._$8r);
            if (o2 != null && n2._$yo()) {
              var s2 = n2.getTotalScale();
              e3.setTotalScale_notForClient(s2);
              var a2 = n2.getTotalOpacity();
              e3.setTotalOpacity(a2 * e3.getInterpolatedOpacity()), o2._$nb(t3, n2, e3._$Cr, e3._$hr, this._$VT(), 0, 2), e3._$hS(true);
            } else
              e3._$hS(false);
          }
        } else
          e3.setTotalOpacity(e3.getInterpolatedOpacity());
      }, Z.prototype._$nb = function(t3, i3, e3, r2, o2, n2, s2) {
        var _2 = i3;
        var a2 = _2._$hr != null ? _2._$hr : _2._$Cr;
        Z.transformPoints_sdk2(e3, r2, o2, n2, s2, a2, this._$o, this._$A);
      }, Z.transformPoints_sdk2 = function(i3, e3, r2, o2, n2, s2, _2, a2) {
        for (var h2, l2, $2, u2 = r2 * n2, p2 = 0, f2 = 0, c2 = 0, d2 = 0, g2 = 0, y2 = 0, m2 = false, T2 = o2; T2 < u2; T2 += n2) {
          var P2, S2, v2, L2;
          if (v2 = i3[T2], L2 = i3[T2 + 1], P2 = v2 * _2, S2 = L2 * a2, P2 < 0 || S2 < 0 || _2 <= P2 || a2 <= S2) {
            var M2 = _2 + 1;
            if (!m2) {
              m2 = true, p2 = 0.25 * (s2[2 * (0 + 0 * M2)] + s2[2 * (_2 + 0 * M2)] + s2[2 * (0 + a2 * M2)] + s2[2 * (_2 + a2 * M2)]), f2 = 0.25 * (s2[2 * (0 + 0 * M2) + 1] + s2[2 * (_2 + 0 * M2) + 1] + s2[2 * (0 + a2 * M2) + 1] + s2[2 * (_2 + a2 * M2) + 1]);
              var E2 = s2[2 * (_2 + a2 * M2)] - s2[2 * (0 + 0 * M2)];
              var A2 = s2[2 * (_2 + a2 * M2) + 1] - s2[2 * (0 + 0 * M2) + 1];
              var I2 = s2[2 * (_2 + 0 * M2)] - s2[2 * (0 + a2 * M2)];
              var w2 = s2[2 * (_2 + 0 * M2) + 1] - s2[2 * (0 + a2 * M2) + 1];
              c2 = 0.5 * (E2 + I2), d2 = 0.5 * (A2 + w2), g2 = 0.5 * (E2 - I2), y2 = 0.5 * (A2 - w2), p2 -= 0.5 * (c2 + g2), f2 -= 0.5 * (d2 + y2);
            }
            if (v2 > -2 && v2 < 3 && L2 > -2 && L2 < 3)
              if (v2 <= 0)
                if (L2 <= 0) {
                  var x2 = s2[2 * (0 + 0 * M2)];
                  var O2 = s2[2 * (0 + 0 * M2) + 1];
                  var D2 = p2 - 2 * c2;
                  var R2 = f2 - 2 * d2;
                  var b2 = p2 - 2 * g2;
                  var F2 = f2 - 2 * y2;
                  var C2 = p2 - 2 * c2 - 2 * g2;
                  var N2 = f2 - 2 * d2 - 2 * y2;
                  var B2 = 0.5 * (v2 - -2);
                  var U2 = 0.5 * (L2 - -2);
                  B2 + U2 <= 1 ? (e3[T2] = C2 + (b2 - C2) * B2 + (D2 - C2) * U2, e3[T2 + 1] = N2 + (F2 - N2) * B2 + (R2 - N2) * U2) : (e3[T2] = x2 + (D2 - x2) * (1 - B2) + (b2 - x2) * (1 - U2), e3[T2 + 1] = O2 + (R2 - O2) * (1 - B2) + (F2 - O2) * (1 - U2));
                } else if (L2 >= 1) {
                  var b2 = s2[2 * (0 + a2 * M2)];
                  var F2 = s2[2 * (0 + a2 * M2) + 1];
                  var C2 = p2 - 2 * c2 + 1 * g2;
                  var N2 = f2 - 2 * d2 + 1 * y2;
                  var x2 = p2 + 3 * g2;
                  var O2 = f2 + 3 * y2;
                  var D2 = p2 - 2 * c2 + 3 * g2;
                  var R2 = f2 - 2 * d2 + 3 * y2;
                  var B2 = 0.5 * (v2 - -2);
                  var U2 = 0.5 * (L2 - 1);
                  B2 + U2 <= 1 ? (e3[T2] = C2 + (b2 - C2) * B2 + (D2 - C2) * U2, e3[T2 + 1] = N2 + (F2 - N2) * B2 + (R2 - N2) * U2) : (e3[T2] = x2 + (D2 - x2) * (1 - B2) + (b2 - x2) * (1 - U2), e3[T2 + 1] = O2 + (R2 - O2) * (1 - B2) + (F2 - O2) * (1 - U2));
                } else {
                  var G2 = 0 | S2;
                  G2 == a2 && (G2 = a2 - 1);
                  var B2 = 0.5 * (v2 - -2);
                  var U2 = S2 - G2;
                  var Y2 = G2 / a2;
                  var k2 = (G2 + 1) / a2;
                  var b2 = s2[2 * (0 + G2 * M2)];
                  var F2 = s2[2 * (0 + G2 * M2) + 1];
                  var x2 = s2[2 * (0 + (G2 + 1) * M2)];
                  var O2 = s2[2 * (0 + (G2 + 1) * M2) + 1];
                  var C2 = p2 - 2 * c2 + Y2 * g2;
                  var N2 = f2 - 2 * d2 + Y2 * y2;
                  var D2 = p2 - 2 * c2 + k2 * g2;
                  var R2 = f2 - 2 * d2 + k2 * y2;
                  B2 + U2 <= 1 ? (e3[T2] = C2 + (b2 - C2) * B2 + (D2 - C2) * U2, e3[T2 + 1] = N2 + (F2 - N2) * B2 + (R2 - N2) * U2) : (e3[T2] = x2 + (D2 - x2) * (1 - B2) + (b2 - x2) * (1 - U2), e3[T2 + 1] = O2 + (R2 - O2) * (1 - B2) + (F2 - O2) * (1 - U2));
                }
              else if (v2 >= 1)
                if (L2 <= 0) {
                  var D2 = s2[2 * (_2 + 0 * M2)];
                  var R2 = s2[2 * (_2 + 0 * M2) + 1];
                  var x2 = p2 + 3 * c2;
                  var O2 = f2 + 3 * d2;
                  var C2 = p2 + 1 * c2 - 2 * g2;
                  var N2 = f2 + 1 * d2 - 2 * y2;
                  var b2 = p2 + 3 * c2 - 2 * g2;
                  var F2 = f2 + 3 * d2 - 2 * y2;
                  var B2 = 0.5 * (v2 - 1);
                  var U2 = 0.5 * (L2 - -2);
                  B2 + U2 <= 1 ? (e3[T2] = C2 + (b2 - C2) * B2 + (D2 - C2) * U2, e3[T2 + 1] = N2 + (F2 - N2) * B2 + (R2 - N2) * U2) : (e3[T2] = x2 + (D2 - x2) * (1 - B2) + (b2 - x2) * (1 - U2), e3[T2 + 1] = O2 + (R2 - O2) * (1 - B2) + (F2 - O2) * (1 - U2));
                } else if (L2 >= 1) {
                  var C2 = s2[2 * (_2 + a2 * M2)];
                  var N2 = s2[2 * (_2 + a2 * M2) + 1];
                  var b2 = p2 + 3 * c2 + 1 * g2;
                  var F2 = f2 + 3 * d2 + 1 * y2;
                  var D2 = p2 + 1 * c2 + 3 * g2;
                  var R2 = f2 + 1 * d2 + 3 * y2;
                  var x2 = p2 + 3 * c2 + 3 * g2;
                  var O2 = f2 + 3 * d2 + 3 * y2;
                  var B2 = 0.5 * (v2 - 1);
                  var U2 = 0.5 * (L2 - 1);
                  B2 + U2 <= 1 ? (e3[T2] = C2 + (b2 - C2) * B2 + (D2 - C2) * U2, e3[T2 + 1] = N2 + (F2 - N2) * B2 + (R2 - N2) * U2) : (e3[T2] = x2 + (D2 - x2) * (1 - B2) + (b2 - x2) * (1 - U2), e3[T2 + 1] = O2 + (R2 - O2) * (1 - B2) + (F2 - O2) * (1 - U2));
                } else {
                  var G2 = 0 | S2;
                  G2 == a2 && (G2 = a2 - 1);
                  var B2 = 0.5 * (v2 - 1);
                  var U2 = S2 - G2;
                  var Y2 = G2 / a2;
                  var k2 = (G2 + 1) / a2;
                  var C2 = s2[2 * (_2 + G2 * M2)];
                  var N2 = s2[2 * (_2 + G2 * M2) + 1];
                  var D2 = s2[2 * (_2 + (G2 + 1) * M2)];
                  var R2 = s2[2 * (_2 + (G2 + 1) * M2) + 1];
                  var b2 = p2 + 3 * c2 + Y2 * g2;
                  var F2 = f2 + 3 * d2 + Y2 * y2;
                  var x2 = p2 + 3 * c2 + k2 * g2;
                  var O2 = f2 + 3 * d2 + k2 * y2;
                  B2 + U2 <= 1 ? (e3[T2] = C2 + (b2 - C2) * B2 + (D2 - C2) * U2, e3[T2 + 1] = N2 + (F2 - N2) * B2 + (R2 - N2) * U2) : (e3[T2] = x2 + (D2 - x2) * (1 - B2) + (b2 - x2) * (1 - U2), e3[T2 + 1] = O2 + (R2 - O2) * (1 - B2) + (F2 - O2) * (1 - U2));
                }
              else if (L2 <= 0) {
                var V = 0 | P2;
                V == _2 && (V = _2 - 1);
                var B2 = P2 - V;
                var U2 = 0.5 * (L2 - -2);
                var X2 = V / _2;
                var z2 = (V + 1) / _2;
                var D2 = s2[2 * (V + 0 * M2)];
                var R2 = s2[2 * (V + 0 * M2) + 1];
                var x2 = s2[2 * (V + 1 + 0 * M2)];
                var O2 = s2[2 * (V + 1 + 0 * M2) + 1];
                var C2 = p2 + X2 * c2 - 2 * g2;
                var N2 = f2 + X2 * d2 - 2 * y2;
                var b2 = p2 + z2 * c2 - 2 * g2;
                var F2 = f2 + z2 * d2 - 2 * y2;
                B2 + U2 <= 1 ? (e3[T2] = C2 + (b2 - C2) * B2 + (D2 - C2) * U2, e3[T2 + 1] = N2 + (F2 - N2) * B2 + (R2 - N2) * U2) : (e3[T2] = x2 + (D2 - x2) * (1 - B2) + (b2 - x2) * (1 - U2), e3[T2 + 1] = O2 + (R2 - O2) * (1 - B2) + (F2 - O2) * (1 - U2));
              } else if (L2 >= 1) {
                var V = 0 | P2;
                V == _2 && (V = _2 - 1);
                var B2 = P2 - V;
                var U2 = 0.5 * (L2 - 1);
                var X2 = V / _2;
                var z2 = (V + 1) / _2;
                var C2 = s2[2 * (V + a2 * M2)];
                var N2 = s2[2 * (V + a2 * M2) + 1];
                var b2 = s2[2 * (V + 1 + a2 * M2)];
                var F2 = s2[2 * (V + 1 + a2 * M2) + 1];
                var D2 = p2 + X2 * c2 + 3 * g2;
                var R2 = f2 + X2 * d2 + 3 * y2;
                var x2 = p2 + z2 * c2 + 3 * g2;
                var O2 = f2 + z2 * d2 + 3 * y2;
                B2 + U2 <= 1 ? (e3[T2] = C2 + (b2 - C2) * B2 + (D2 - C2) * U2, e3[T2 + 1] = N2 + (F2 - N2) * B2 + (R2 - N2) * U2) : (e3[T2] = x2 + (D2 - x2) * (1 - B2) + (b2 - x2) * (1 - U2), e3[T2 + 1] = O2 + (R2 - O2) * (1 - B2) + (F2 - O2) * (1 - U2));
              } else
                t2.err.printf("_$li calc : %.4f , %.4f					@@BDBoxGrid\n", v2, L2);
            else
              e3[T2] = p2 + v2 * c2 + L2 * g2, e3[T2 + 1] = f2 + v2 * d2 + L2 * y2;
          } else
            l2 = P2 - (0 | P2), $2 = S2 - (0 | S2), h2 = 2 * ((0 | P2) + (0 | S2) * (_2 + 1)), l2 + $2 < 1 ? (e3[T2] = s2[h2] * (1 - l2 - $2) + s2[h2 + 2] * l2 + s2[h2 + 2 * (_2 + 1)] * $2, e3[T2 + 1] = s2[h2 + 1] * (1 - l2 - $2) + s2[h2 + 3] * l2 + s2[h2 + 2 * (_2 + 1) + 1] * $2) : (e3[T2] = s2[h2 + 2 * (_2 + 1) + 2] * (l2 - 1 + $2) + s2[h2 + 2 * (_2 + 1)] * (1 - l2) + s2[h2 + 2] * (1 - $2), e3[T2 + 1] = s2[h2 + 2 * (_2 + 1) + 3] * (l2 - 1 + $2) + s2[h2 + 2 * (_2 + 1) + 1] * (1 - l2) + s2[h2 + 3] * (1 - $2));
        }
      }, Z.prototype.transformPoints_sdk1 = function(t3, i3, e3, r2, o2, n2, s2) {
        for (var _2, a2, h2, l2, $2, u2, p2, f2 = i3, c2 = this._$o, d2 = this._$A, g2 = o2 * s2, y2 = f2._$hr != null ? f2._$hr : f2._$Cr, m2 = n2; m2 < g2; m2 += s2)
          at._$ts ? (_2 = e3[m2], a2 = e3[m2 + 1], _2 < 0 ? _2 = 0 : _2 > 1 && (_2 = 1), a2 < 0 ? a2 = 0 : a2 > 1 && (a2 = 1), _2 *= c2, a2 *= d2, h2 = 0 | _2, l2 = 0 | a2, h2 > c2 - 1 && (h2 = c2 - 1), l2 > d2 - 1 && (l2 = d2 - 1), u2 = _2 - h2, p2 = a2 - l2, $2 = 2 * (h2 + l2 * (c2 + 1))) : (_2 = e3[m2] * c2, a2 = e3[m2 + 1] * d2, u2 = _2 - (0 | _2), p2 = a2 - (0 | a2), $2 = 2 * ((0 | _2) + (0 | a2) * (c2 + 1))), u2 + p2 < 1 ? (r2[m2] = y2[$2] * (1 - u2 - p2) + y2[$2 + 2] * u2 + y2[$2 + 2 * (c2 + 1)] * p2, r2[m2 + 1] = y2[$2 + 1] * (1 - u2 - p2) + y2[$2 + 3] * u2 + y2[$2 + 2 * (c2 + 1) + 1] * p2) : (r2[m2] = y2[$2 + 2 * (c2 + 1) + 2] * (u2 - 1 + p2) + y2[$2 + 2 * (c2 + 1)] * (1 - u2) + y2[$2 + 2] * (1 - p2), r2[m2 + 1] = y2[$2 + 2 * (c2 + 1) + 3] * (u2 - 1 + p2) + y2[$2 + 2 * (c2 + 1) + 1] * (1 - u2) + y2[$2 + 3] * (1 - p2));
      }, Z.prototype._$VT = function() {
        return (this._$o + 1) * (this._$A + 1);
      }, Z.prototype.getType = function() {
        return I._$_b;
      }, K.prototype = new _t(), tt._$42 = 0, tt.prototype._$zP = function() {
        this._$3S = new Array(), this._$aS = new Array();
      }, tt.prototype._$F0 = function(t3) {
        this._$g0 = t3._$8L(), this.visible = t3._$8L(), this._$NL = t3._$nP(), this._$3S = t3._$nP(), this._$aS = t3._$nP();
      }, tt.prototype.init = function(t3) {
        var i3 = new it(this);
        return i3.setPartsOpacity(this.isVisible() ? 1 : 0), i3;
      }, tt.prototype._$6o = function(t3) {
        if (this._$3S == null)
          throw new Error("_$3S _$6 _$Wo@_$6o");
        this._$3S.push(t3);
      }, tt.prototype._$3o = function(t3) {
        if (this._$aS == null)
          throw new Error("_$aS _$6 _$Wo@_$3o");
        this._$aS.push(t3);
      }, tt.prototype._$Zo = function(t3) {
        this._$3S = t3;
      }, tt.prototype._$xo = function(t3) {
        this._$aS = t3;
      }, tt.prototype.isVisible = function() {
        return this.visible;
      }, tt.prototype._$uL = function() {
        return this._$g0;
      }, tt.prototype._$KP = function(t3) {
        this.visible = t3;
      }, tt.prototype._$ET = function(t3) {
        this._$g0 = t3;
      }, tt.prototype.getBaseData = function() {
        return this._$3S;
      }, tt.prototype.getDrawData = function() {
        return this._$aS;
      }, tt.prototype._$p2 = function() {
        return this._$NL;
      }, tt.prototype._$ob = function(t3) {
        this._$NL = t3;
      }, tt.prototype.getPartsID = function() {
        return this._$NL;
      }, tt.prototype._$MP = function(t3) {
        this._$NL = t3;
      }, it.prototype = new $(), it.prototype.getPartsOpacity = function() {
        return this._$VS;
      }, it.prototype.setPartsOpacity = function(t3) {
        this._$VS = t3;
      }, et._$L7 = function() {
        u._$27(), yt._$27(), b._$27(), l._$27();
      }, et.prototype.toString = function() {
        return this.id;
      }, ot.prototype._$1s = function() {
        return this._$4S;
      }, ot.prototype._$zP = function() {
        this._$4S = new Array();
      }, ot.prototype._$F0 = function(t3) {
        this._$4S = t3._$nP();
      }, ot.prototype._$Ks = function(t3) {
        this._$4S.push(t3);
      }, nt.tr = new gt(), nt._$50 = new gt(), nt._$Ti = new Array(0, 0), nt._$Pi = new Array(0, 0), nt._$B = new Array(0, 0), nt.prototype._$lP = function(t3, i3, e3, r2) {
        this.viewport = new Array(t3, i3, e3, r2);
      }, nt.prototype._$bL = function() {
        this.context.save();
        var t3 = this.viewport;
        t3 != null && (this.context.beginPath(), this.context._$Li(t3[0], t3[1], t3[2], t3[3]), this.context.clip());
      }, nt.prototype._$ei = function() {
        this.context.restore();
      }, nt.prototype.drawElements = function(t3, i3, e3, r2, o2, n2, s2, a2) {
        try {
          o2 != this._$Qo && (this._$Qo = o2, this.context.globalAlpha = o2);
          for (var h2 = i3.length, l2 = t3.width, $2 = t3.height, u2 = this.context, p2 = this._$xP, f2 = this._$uP, c2 = this._$6r, d2 = this._$3r, g2 = nt.tr, y2 = nt._$Ti, m2 = nt._$Pi, T2 = nt._$B, P2 = 0; P2 < h2; P2 += 3) {
            u2.save();
            var S2 = i3[P2];
            var v2 = i3[P2 + 1];
            var L2 = i3[P2 + 2];
            var M2 = p2 + c2 * e3[2 * S2];
            var E2 = f2 + d2 * e3[2 * S2 + 1];
            var A2 = p2 + c2 * e3[2 * v2];
            var I2 = f2 + d2 * e3[2 * v2 + 1];
            var w2 = p2 + c2 * e3[2 * L2];
            var x2 = f2 + d2 * e3[2 * L2 + 1];
            s2 && (s2._$PS(M2, E2, T2), M2 = T2[0], E2 = T2[1], s2._$PS(A2, I2, T2), A2 = T2[0], I2 = T2[1], s2._$PS(w2, x2, T2), w2 = T2[0], x2 = T2[1]);
            var O2 = l2 * r2[2 * S2];
            var D2 = $2 - $2 * r2[2 * S2 + 1];
            var R2 = l2 * r2[2 * v2];
            var b2 = $2 - $2 * r2[2 * v2 + 1];
            var F2 = l2 * r2[2 * L2];
            var C2 = $2 - $2 * r2[2 * L2 + 1];
            var N2 = Math.atan2(b2 - D2, R2 - O2);
            var B2 = Math.atan2(I2 - E2, A2 - M2);
            var U2 = A2 - M2;
            var G2 = I2 - E2;
            var Y2 = Math.sqrt(U2 * U2 + G2 * G2);
            var k2 = R2 - O2;
            var V = b2 - D2;
            var X2 = Math.sqrt(k2 * k2 + V * V);
            var z2 = Y2 / X2;
            It._$ni(F2, C2, O2, D2, R2 - O2, b2 - D2, -(b2 - D2), R2 - O2, y2), It._$ni(w2, x2, M2, E2, A2 - M2, I2 - E2, -(I2 - E2), A2 - M2, m2);
            var H2 = (m2[0] - y2[0]) / y2[1];
            var W2 = Math.min(O2, R2, F2);
            var j2 = Math.max(O2, R2, F2);
            var q2 = Math.min(D2, b2, C2);
            var J2 = Math.max(D2, b2, C2);
            var Q2 = Math.floor(W2);
            var Z2 = Math.floor(q2);
            var K2 = Math.ceil(j2);
            var tt2 = Math.ceil(J2);
            g2.identity(), g2.translate(M2, E2), g2.rotate(B2), g2.scale(1, m2[1] / y2[1]), g2.shear(H2, 0), g2.scale(z2, z2), g2.rotate(-N2), g2.translate(-O2, -D2), g2.setContext(u2);
            if (n2 || (n2 = 1.2), at.IGNORE_EXPAND && (n2 = 0), at.USE_CACHED_POLYGON_IMAGE) {
              var it2 = a2._$e0;
              if (it2.gl_cacheImage = it2.gl_cacheImage || {}, !it2.gl_cacheImage[P2]) {
                var et2 = nt.createCanvas(K2 - Q2, tt2 - Z2);
                at.DEBUG_DATA.LDGL_CANVAS_MB = at.DEBUG_DATA.LDGL_CANVAS_MB || 0, at.DEBUG_DATA.LDGL_CANVAS_MB += (K2 - Q2) * (tt2 - Z2) * 4;
                var rt = et2.getContext("2d");
                rt.translate(-Q2, -Z2), nt.clip(rt, g2, n2, Y2, O2, D2, R2, b2, F2, C2, M2, E2, A2, I2, w2, x2), rt.drawImage(t3, 0, 0), it2.gl_cacheImage[P2] = { cacheCanvas: et2, cacheContext: rt };
              }
              u2.drawImage(it2.gl_cacheImage[P2].cacheCanvas, Q2, Z2);
            } else
              at.IGNORE_CLIP || nt.clip(u2, g2, n2, Y2, O2, D2, R2, b2, F2, C2, M2, E2, A2, I2, w2, x2), at.USE_ADJUST_TRANSLATION && (W2 = 0, j2 = l2, q2 = 0, J2 = $2), u2.drawImage(t3, W2, q2, j2 - W2, J2 - q2, W2, q2, j2 - W2, J2 - q2);
            u2.restore();
          }
        } catch (t4) {
          _._$Rb(t4);
        }
      }, nt.clip = function(t3, i3, e3, r2, o2, n2, s2, _2, a2, h2, l2, $2, u2, p2, f2, c2) {
        e3 > 0.02 ? nt.expandClip(t3, i3, e3, r2, l2, $2, u2, p2, f2, c2) : nt.clipWithTransform(t3, null, o2, n2, s2, _2, a2, h2);
      }, nt.expandClip = function(t3, i3, e3, r2, o2, n2, s2, _2, a2, h2) {
        var l2 = s2 - o2;
        var $2 = _2 - n2;
        var u2 = a2 - o2;
        var p2 = h2 - n2;
        var f2 = l2 * p2 - $2 * u2 > 0 ? e3 : -e3;
        var c2 = -$2;
        var d2 = l2;
        var g2 = a2 - s2;
        var y2 = h2 - _2;
        var m2 = -y2;
        var T2 = g2;
        var P2 = Math.sqrt(g2 * g2 + y2 * y2);
        var S2 = -p2;
        var v2 = u2;
        var L2 = Math.sqrt(u2 * u2 + p2 * p2);
        var M2 = o2 - f2 * c2 / r2;
        var E2 = n2 - f2 * d2 / r2;
        var A2 = s2 - f2 * c2 / r2;
        var I2 = _2 - f2 * d2 / r2;
        var w2 = s2 - f2 * m2 / P2;
        var x2 = _2 - f2 * T2 / P2;
        var O2 = a2 - f2 * m2 / P2;
        var D2 = h2 - f2 * T2 / P2;
        var R2 = o2 + f2 * S2 / L2;
        var b2 = n2 + f2 * v2 / L2;
        var F2 = a2 + f2 * S2 / L2;
        var C2 = h2 + f2 * v2 / L2;
        var N2 = nt._$50;
        return i3._$P2(N2) != null && (nt.clipWithTransform(t3, N2, M2, E2, A2, I2, w2, x2, O2, D2, F2, C2, R2, b2), true);
      }, nt.clipWithTransform = function(t3, i3, e3, r2, o2, n2, s2, a2) {
        if (arguments.length < 7)
          return void _._$li("err : @LDGL.clip()");
        if (!(arguments[1] instanceof gt))
          return void _._$li("err : a[0] is _$6 LDTransform @LDGL.clip()");
        var h2 = nt._$B;
        var l2 = i3;
        var $2 = arguments;
        if (t3.beginPath(), l2) {
          l2._$PS($2[2], $2[3], h2), t3.moveTo(h2[0], h2[1]);
          for (var u2 = 4; u2 < $2.length; u2 += 2)
            l2._$PS($2[u2], $2[u2 + 1], h2), t3.lineTo(h2[0], h2[1]);
        } else {
          t3.moveTo($2[2], $2[3]);
          for (var u2 = 4; u2 < $2.length; u2 += 2)
            t3.lineTo($2[u2], $2[u2 + 1]);
        }
        t3.clip();
      }, nt.createCanvas = function(t3, i3) {
        var e3 = document.createElement("canvas");
        return e3.setAttribute("width", t3), e3.setAttribute("height", i3), e3 || _._$li("err : " + e3), e3;
      }, nt.dumpValues = function() {
        for (var t3 = "", i3 = 0; i3 < arguments.length; i3++)
          t3 += "[" + i3 + "]= " + arguments[i3].toFixed(3) + " , ";
        console.log(t3);
      }, st.prototype._$F0 = function(t3) {
        this._$TT = t3._$_T(), this._$LT = t3._$_T(), this._$FS = t3._$_T(), this._$wL = t3._$nP();
      }, st.prototype.getMinValue = function() {
        return this._$TT;
      }, st.prototype.getMaxValue = function() {
        return this._$LT;
      }, st.prototype.getDefaultValue = function() {
        return this._$FS;
      }, st.prototype.getParamID = function() {
        return this._$wL;
      }, _t.prototype._$yo = function() {
        return this._$AT && !this._$JS;
      }, _t.prototype._$hS = function(t3) {
        this._$AT = t3;
      }, _t.prototype._$GT = function() {
        return this._$e0;
      }, _t.prototype._$l2 = function(t3) {
        this._$IP = t3;
      }, _t.prototype.getPartsIndex = function() {
        return this._$IP;
      }, _t.prototype._$x2 = function() {
        return this._$JS;
      }, _t.prototype._$Ib = function(t3) {
        this._$JS = t3;
      }, _t.prototype.getTotalScale = function() {
        return this.totalScale;
      }, _t.prototype.setTotalScale_notForClient = function(t3) {
        this.totalScale = t3;
      }, _t.prototype.getInterpolatedOpacity = function() {
        return this._$7s;
      }, _t.prototype.setInterpolatedOpacity = function(t3) {
        this._$7s = t3;
      }, _t.prototype.getTotalOpacity = function(t3) {
        return this.totalOpacity;
      }, _t.prototype.setTotalOpacity = function(t3) {
        this.totalOpacity = t3;
      }, at._$2s = "2.1.00_1", at._$Kr = 201001e3, at._$sP = true, at._$so = true, at._$cb = false, at._$3T = true, at._$Ts = true, at._$fb = true, at._$ts = true, at.L2D_DEFORMER_EXTEND = true, at._$Wb = false;
      at._$yr = false, at._$Zs = false, at.L2D_NO_ERROR = 0, at._$i7 = 1e3, at._$9s = 1001, at._$es = 1100, at._$r7 = 2e3, at._$07 = 2001, at._$b7 = 2002, at._$H7 = 4e3, at.L2D_COLOR_BLEND_MODE_MULT = 0, at.L2D_COLOR_BLEND_MODE_ADD = 1, at.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2, at._$6b = true, at._$cT = 0, at.clippingMaskBufferSize = 256, at.glContext = new Array(), at.frameBuffers = new Array(), at.fTexture = new Array(), at.IGNORE_CLIP = false, at.IGNORE_EXPAND = false, at.EXPAND_W = 2, at.USE_ADJUST_TRANSLATION = true, at.USE_CANVAS_TRANSFORM = true, at.USE_CACHED_POLYGON_IMAGE = false, at.DEBUG_DATA = {}, at.PROFILE_IOS_SPEED = { PROFILE_NAME: "iOS Speed", USE_ADJUST_TRANSLATION: true, USE_CACHED_POLYGON_IMAGE: true, EXPAND_W: 4 }, at.PROFILE_IOS_QUALITY = { PROFILE_NAME: "iOS HiQ", USE_ADJUST_TRANSLATION: true, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 }, at.PROFILE_IOS_DEFAULT = at.PROFILE_IOS_QUALITY, at.PROFILE_ANDROID = { PROFILE_NAME: "Android", USE_ADJUST_TRANSLATION: false, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 }, at.PROFILE_DESKTOP = { PROFILE_NAME: "Desktop", USE_ADJUST_TRANSLATION: false, USE_CACHED_POLYGON_IMAGE: false, EXPAND_W: 2 }, at.initProfile = function() {
        Et.isIOS() ? at.setupProfile(at.PROFILE_IOS_DEFAULT) : Et.isAndroid() ? at.setupProfile(at.PROFILE_ANDROID) : at.setupProfile(at.PROFILE_DESKTOP);
      }, at.setupProfile = function(t3, i3) {
        if (typeof t3 === "number")
          switch (t3) {
            case 9901:
              t3 = at.PROFILE_IOS_SPEED;
              break;
            case 9902:
              t3 = at.PROFILE_IOS_QUALITY;
              break;
            case 9903:
              t3 = at.PROFILE_IOS_DEFAULT;
              break;
            case 9904:
              t3 = at.PROFILE_ANDROID;
              break;
            case 9905:
              t3 = at.PROFILE_DESKTOP;
              break;
            default:
              alert("profile _$6 _$Ui : " + t3);
          }
        arguments.length < 2 && (i3 = true), i3 && console.log("profile : " + t3.PROFILE_NAME);
        for (var e3 in t3)
          at[e3] = t3[e3], i3 && console.log("  [" + e3 + "] = " + t3[e3]);
      }, at.init = function() {
        if (at._$6b) {
          console.log("Live2D %s", at._$2s), at._$6b = false;
          at.initProfile();
        }
      }, at.getVersionStr = function() {
        return at._$2s;
      }, at.getVersionNo = function() {
        return at._$Kr;
      }, at._$sT = function(t3) {
        at._$cT = t3;
      }, at.getError = function() {
        var t3 = at._$cT;
        return at._$cT = 0, t3;
      }, at.dispose = function() {
        at.glContext = [], at.frameBuffers = [], at.fTexture = [];
      }, at.setGL = function(t3, i3) {
        var e3 = i3 || 0;
        at.glContext[e3] = t3;
      }, at.getGL = function(t3) {
        return at.glContext[t3];
      }, at.setClippingMaskBufferSize = function(t3) {
        at.clippingMaskBufferSize = t3;
      }, at.getClippingMaskBufferSize = function() {
        return at.clippingMaskBufferSize;
      }, at.deleteBuffer = function(t3) {
        at.getGL(t3).deleteFramebuffer(at.frameBuffers[t3].framebuffer), delete at.frameBuffers[t3], delete at.glContext[t3];
      }, ht._$r2 = function(t3) {
        return t3 < 0 ? 0 : t3 > 1 ? 1 : 0.5 - 0.5 * Math.cos(t3 * Lt.PI_F);
      }, lt._$fr = -1, lt.prototype.toString = function() {
        return this._$ib;
      }, $t.prototype = new W(), $t._$42 = 0, $t._$Os = 30, $t._$ms = 0, $t._$ns = 1, $t._$_s = 2, $t._$gT = new Array(), $t.prototype._$_S = function(t3) {
        this._$LP = t3;
      }, $t.prototype.getTextureNo = function() {
        return this._$LP;
      }, $t.prototype._$ZL = function() {
        return this._$Qi;
      }, $t.prototype._$H2 = function() {
        return this._$JP;
      }, $t.prototype.getNumPoints = function() {
        return this._$d0;
      }, $t.prototype.getType = function() {
        return W._$wb;
      }, $t.prototype._$B2 = function(t3, i3, e3) {
        var r2 = i3;
        var o2 = r2._$hr != null ? r2._$hr : r2._$Cr;
        switch (U._$do) {
          default:
          case U._$Ms:
            throw new Error("_$L _$ro ");
          case U._$Qs:
            for (var n2 = this._$d0 - 1; n2 >= 0; --n2)
              o2[n2 * U._$No + 4] = e3;
        }
      }, $t.prototype._$zP = function() {
        this._$GS = new D(), this._$GS._$zP();
      }, $t.prototype._$F0 = function(t3) {
        W.prototype._$F0.call(this, t3), this._$LP = t3._$6L(), this._$d0 = t3._$6L(), this._$Yo = t3._$6L();
        var i3 = t3._$nP();
        this._$BP = new Int16Array(3 * this._$Yo);
        for (var e3 = 3 * this._$Yo - 1; e3 >= 0; --e3)
          this._$BP[e3] = i3[e3];
        if (this._$Eo = t3._$nP(), this._$Qi = t3._$nP(), t3.getFormatVersion() >= G._$s7) {
          if (this._$JP = t3._$6L(), this._$JP != 0) {
            if ((1 & this._$JP) != 0) {
              var r2 = t3._$6L();
              this._$5P == null && (this._$5P = new Object()), this._$5P._$Hb = parseInt(r2);
            }
            (this._$JP & $t._$Os) != 0 ? this._$6s = (this._$JP & $t._$Os) >> 1 : this._$6s = $t._$ms, (32 & this._$JP) != 0 && (this.culling = false);
          }
        } else
          this._$JP = 0;
      }, $t.prototype.init = function(t3) {
        var i3 = new ut(this);
        var e3 = this._$d0 * U._$No;
        var r2 = this._$32();
        switch (i3._$Cr != null && (i3._$Cr = null), i3._$Cr = new Float32Array(e3), i3._$hr != null && (i3._$hr = null), i3._$hr = r2 ? new Float32Array(e3) : null, U._$do) {
          default:
          case U._$Ms:
            if (U._$Ls)
              for (var o2 = this._$d0 - 1; o2 >= 0; --o2) {
                var n2 = o2 << 1;
                this._$Qi[n2 + 1] = 1 - this._$Qi[n2 + 1];
              }
            break;
          case U._$Qs:
            for (var o2 = this._$d0 - 1; o2 >= 0; --o2) {
              var n2 = o2 << 1;
              var s2 = o2 * U._$No;
              var _2 = this._$Qi[n2];
              var a2 = this._$Qi[n2 + 1];
              i3._$Cr[s2] = _2, i3._$Cr[s2 + 1] = a2, i3._$Cr[s2 + 4] = 0, r2 && (i3._$hr[s2] = _2, i3._$hr[s2 + 1] = a2, i3._$hr[s2 + 4] = 0);
            }
        }
        return i3;
      }, $t.prototype._$Nr = function(t3, i3) {
        var e3 = i3;
        if (this != e3._$GT() && console.log("### assert!! ### "), this._$GS._$Ur(t3) && (W.prototype._$Nr.call(this, t3, e3), !e3._$IS[0])) {
          var r2 = $t._$gT;
          r2[0] = false, v._$Vr(t3, this._$GS, r2, this._$d0, this._$Eo, e3._$Cr, U._$i2, U._$No);
        }
      }, $t.prototype._$2b = function(t3, i3) {
        try {
          this != i3._$GT() && console.log("### assert!! ### ");
          var e3 = false;
          i3._$IS[0] && (e3 = true);
          var r2 = i3;
          if (!e3 && (W.prototype._$2b.call(this, t3), this._$32())) {
            var o2 = this.getTargetBaseDataID();
            if (r2._$8r == W._$ur && (r2._$8r = t3.getBaseDataIndex(o2)), r2._$8r < 0)
              at._$so && _._$li("_$L _$0P _$G :: %s", o2);
            else {
              var n2 = t3.getBaseData(r2._$8r);
              var s2 = t3._$q2(r2._$8r);
              n2 == null || s2._$x2() ? r2._$AT = false : (n2._$nb(t3, s2, r2._$Cr, r2._$hr, this._$d0, U._$i2, U._$No), r2._$AT = true), r2.baseOpacity = s2.getTotalOpacity();
            }
          }
        } catch (t4) {
          throw t4;
        }
      }, $t.prototype.draw = function(t3, i3, e3) {
        if (this != e3._$GT() && console.log("### assert!! ### "), !e3._$IS[0]) {
          var r2 = e3;
          var o2 = this._$LP;
          o2 < 0 && (o2 = 1);
          var n2 = this.getOpacity(i3, r2) * e3._$VS * e3.baseOpacity;
          var s2 = r2._$hr != null ? r2._$hr : r2._$Cr;
          t3.setClipBufPre_clipContextForDraw(e3.clipBufPre_clipContext), t3._$WP(this.culling), t3._$Uo(o2, 3 * this._$Yo, this._$BP, s2, this._$Qi, n2, this._$6s, r2);
        }
      }, $t.prototype.dump = function() {
        console.log("  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \n", this._$LP, this._$d0, this._$Yo), console.log("  _$Oi _$di = { ");
        for (var t3 = 0; t3 < this._$BP.length; t3++)
          console.log("%5d ,", this._$BP[t3]);
        console.log("\n  _$5i _$30");
        for (var t3 = 0; t3 < this._$Eo.length; t3++) {
          console.log("\n    _$30[%d] = ", t3);
          for (var i3 = this._$Eo[t3], e3 = 0; e3 < i3.length; e3++)
            console.log("%6.2f, ", i3[e3]);
        }
        console.log("\n");
      }, $t.prototype._$72 = function(t3) {
        return this._$5P == null ? null : this._$5P[t3];
      }, $t.prototype.getIndexArray = function() {
        return this._$BP;
      }, ut.prototype = new Mt(), ut.prototype.getTransformedPoints = function() {
        return this._$hr != null ? this._$hr : this._$Cr;
      }, pt.prototype._$HT = function(t3) {
        this.x = t3.x, this.y = t3.y;
      }, pt.prototype._$HT = function(t3, i3) {
        this.x = t3, this.y = i3;
      }, ft.prototype = new i2(), ft.loadModel = function(t3) {
        var e3 = new ft();
        return i2._$62(e3, t3), e3;
      }, ft.loadModel = function(t3, e3) {
        var r2 = e3 || 0;
        var o2 = new ft(r2);
        return i2._$62(o2, t3), o2;
      }, ft._$to = function() {
        return new ft();
      }, ft._$er = function(t3) {
        var i3 = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
        if (i3.exists() == 0)
          throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + i3._$PL());
        for (var e3 = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], r2 = ft.loadModel(i3._$3b()), o2 = 0; o2 < e3.length; o2++) {
          var n2 = new _$5(e3[o2]);
          if (n2.exists() == 0)
            throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + n2._$PL());
          r2.setTexture(o2, _$nL._$_o(t3, n2._$3b()));
        }
        return r2;
      }, ft.prototype.setGL = function(t3) {
        at.setGL(t3);
      }, ft.prototype.setTransform = function(t3) {
        this.drawParamWebGL.setTransform(t3);
      }, ft.prototype.update = function() {
        this._$5S.update(), this._$5S.preDraw(this.drawParamWebGL);
      }, ft.prototype.draw = function() {
        this._$5S.draw(this.drawParamWebGL);
      }, ft.prototype._$K2 = function() {
        this.drawParamWebGL._$K2();
      }, ft.prototype.setTexture = function(t3, i3) {
        this.drawParamWebGL == null && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(t3, i3);
      }, ft.prototype.setTexture = function(t3, i3) {
        this.drawParamWebGL == null && _._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(t3, i3);
      }, ft.prototype._$Rs = function() {
        return this.drawParamWebGL._$Rs();
      }, ft.prototype._$Ds = function(t3) {
        this.drawParamWebGL._$Ds(t3);
      }, ft.prototype.getDrawParam = function() {
        return this.drawParamWebGL;
      }, ft.prototype.setMatrix = function(t3) {
        this.drawParamWebGL.setMatrix(t3);
      }, ft.prototype.setPremultipliedAlpha = function(t3) {
        this.drawParamWebGL.setPremultipliedAlpha(t3);
      }, ft.prototype.isPremultipliedAlpha = function() {
        return this.drawParamWebGL.isPremultipliedAlpha();
      }, ft.prototype.setAnisotropy = function(t3) {
        this.drawParamWebGL.setAnisotropy(t3);
      }, ft.prototype.getAnisotropy = function() {
        return this.drawParamWebGL.getAnisotropy();
      }, ct.prototype._$tb = function() {
        return this.motions;
      }, ct.prototype.startMotion = function(t3, i3) {
        for (var e3 = null, r2 = this.motions.length, o2 = 0; o2 < r2; ++o2)
          (e3 = this.motions[o2]) != null && (e3._$qS(e3._$w0.getFadeOut()), this._$eb && _._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n", r2, e3._$sr));
        if (t3 == null)
          return -1;
        e3 = new dt(), e3._$w0 = t3, this.motions.push(e3);
        var n2 = e3._$sr;
        return this._$eb && _._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n", r2, n2), n2;
      }, ct.prototype.updateParam = function(t3) {
        try {
          for (var i3 = false, e3 = 0; e3 < this.motions.length; e3++) {
            var r2 = this.motions[e3];
            if (r2 != null) {
              var o2 = r2._$w0;
              o2 != null ? (o2.updateParam(t3, r2), i3 = true, r2.isFinished() && (this._$eb && _._$Ji("MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n", this.motions.length - 1, r2._$sr), this.motions.splice(e3, 1), e3--)) : (this.motions = this.motions.splice(e3, 1), e3--);
            } else
              this.motions.splice(e3, 1), e3--;
          }
          return i3;
        } catch (t4) {
          return _._$li(t4), true;
        }
      }, ct.prototype.isFinished = function(t3) {
        if (arguments.length >= 1) {
          for (var i3 = 0; i3 < this.motions.length; i3++) {
            var e3 = this.motions[i3];
            if (e3 != null && (e3._$sr == t3 && !e3.isFinished()))
              return false;
          }
          return true;
        }
        for (var i3 = 0; i3 < this.motions.length; i3++) {
          var e3 = this.motions[i3];
          if (e3 != null) {
            if (e3._$w0 != null) {
              if (!e3.isFinished())
                return false;
            } else
              this.motions.splice(i3, 1), i3--;
          } else
            this.motions.splice(i3, 1), i3--;
        }
        return true;
      }, ct.prototype.stopAllMotions = function() {
        for (var t3 = 0; t3 < this.motions.length; t3++) {
          var i3 = this.motions[t3];
          if (i3 != null) {
            i3._$w0;
            this.motions.splice(t3, 1), t3--;
          } else
            this.motions.splice(t3, 1), t3--;
        }
      }, ct.prototype._$Zr = function(t3) {
        this._$eb = t3;
      }, ct.prototype._$e = function() {
        console.log("-- _$R --\n");
        for (var t3 = 0; t3 < this.motions.length; t3++) {
          var i3 = this.motions[t3];
          var e3 = i3._$w0;
          console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, e3.toString());
        }
      }, dt._$Gs = 0, dt.prototype.isFinished = function() {
        return this._$9L;
      }, dt.prototype._$qS = function(t3) {
        var i3 = w.getUserTimeMSec();
        var e3 = i3 + t3;
        (this._$Do < 0 || e3 < this._$Do) && (this._$Do = e3);
      }, dt.prototype._$Bs = function() {
        return this._$sr;
      }, gt.prototype.setContext = function(t3) {
        var i3 = this.m;
        t3.transform(i3[0], i3[1], i3[3], i3[4], i3[6], i3[7]);
      }, gt.prototype.toString = function() {
        for (var t3 = "LDTransform { ", i3 = 0; i3 < 9; i3++)
          t3 += this.m[i3].toFixed(2) + " ,";
        return t3 += " }";
      }, gt.prototype.identity = function() {
        var t3 = this.m;
        t3[0] = t3[4] = t3[8] = 1, t3[1] = t3[2] = t3[3] = t3[5] = t3[6] = t3[7] = 0;
      }, gt.prototype._$PS = function(t3, i3, e3) {
        e3 == null && (e3 = new Array(0, 0));
        var r2 = this.m;
        return e3[0] = r2[0] * t3 + r2[3] * i3 + r2[6], e3[1] = r2[1] * t3 + r2[4] * i3 + r2[7], e3;
      }, gt.prototype._$P2 = function(t3) {
        t3 || (t3 = new gt());
        var i3 = this.m;
        var e3 = i3[0];
        var r2 = i3[1];
        var o2 = i3[2];
        var n2 = i3[3];
        var s2 = i3[4];
        var _2 = i3[5];
        var a2 = i3[6];
        var h2 = i3[7];
        var l2 = i3[8];
        var $2 = e3 * s2 * l2 + r2 * _2 * a2 + o2 * n2 * h2 - e3 * _2 * h2 - o2 * s2 * a2 - r2 * n2 * l2;
        if ($2 == 0)
          return null;
        var u2 = 1 / $2;
        return t3.m[0] = u2 * (s2 * l2 - h2 * _2), t3.m[1] = u2 * (h2 * o2 - r2 * l2), t3.m[2] = u2 * (r2 * _2 - s2 * o2), t3.m[3] = u2 * (a2 * _2 - n2 * l2), t3.m[4] = u2 * (e3 * l2 - a2 * o2), t3.m[5] = u2 * (n2 * o2 - e3 * _2), t3.m[6] = u2 * (n2 * h2 - a2 * s2), t3.m[7] = u2 * (a2 * r2 - e3 * h2), t3.m[8] = u2 * (e3 * s2 - n2 * r2), t3;
      }, gt.prototype.transform = function(t3, i3, e3) {
        e3 == null && (e3 = new Array(0, 0));
        var r2 = this.m;
        return e3[0] = r2[0] * t3 + r2[3] * i3 + r2[6], e3[1] = r2[1] * t3 + r2[4] * i3 + r2[7], e3;
      }, gt.prototype.translate = function(t3, i3) {
        var e3 = this.m;
        e3[6] = e3[0] * t3 + e3[3] * i3 + e3[6], e3[7] = e3[1] * t3 + e3[4] * i3 + e3[7], e3[8] = e3[2] * t3 + e3[5] * i3 + e3[8];
      }, gt.prototype.scale = function(t3, i3) {
        var e3 = this.m;
        e3[0] *= t3, e3[1] *= t3, e3[2] *= t3, e3[3] *= i3, e3[4] *= i3, e3[5] *= i3;
      }, gt.prototype.shear = function(t3, i3) {
        var e3 = this.m;
        var r2 = e3[0] + e3[3] * i3;
        var o2 = e3[1] + e3[4] * i3;
        var n2 = e3[2] + e3[5] * i3;
        e3[3] = e3[0] * t3 + e3[3], e3[4] = e3[1] * t3 + e3[4], e3[5] = e3[2] * t3 + e3[5], e3[0] = r2, e3[1] = o2, e3[2] = n2;
      }, gt.prototype.rotate = function(t3) {
        var i3 = this.m;
        var e3 = Math.cos(t3);
        var r2 = Math.sin(t3);
        var o2 = i3[0] * e3 + i3[3] * r2;
        var n2 = i3[1] * e3 + i3[4] * r2;
        var s2 = i3[2] * e3 + i3[5] * r2;
        i3[3] = -i3[0] * r2 + i3[3] * e3, i3[4] = -i3[1] * r2 + i3[4] * e3, i3[5] = -i3[2] * r2 + i3[5] * e3, i3[0] = o2, i3[1] = n2, i3[2] = s2;
      }, gt.prototype.concatenate = function(t3) {
        var i3 = this.m;
        var e3 = t3.m;
        var r2 = i3[0] * e3[0] + i3[3] * e3[1] + i3[6] * e3[2];
        var o2 = i3[1] * e3[0] + i3[4] * e3[1] + i3[7] * e3[2];
        var n2 = i3[2] * e3[0] + i3[5] * e3[1] + i3[8] * e3[2];
        var s2 = i3[0] * e3[3] + i3[3] * e3[4] + i3[6] * e3[5];
        var _2 = i3[1] * e3[3] + i3[4] * e3[4] + i3[7] * e3[5];
        var a2 = i3[2] * e3[3] + i3[5] * e3[4] + i3[8] * e3[5];
        var h2 = i3[0] * e3[6] + i3[3] * e3[7] + i3[6] * e3[8];
        var l2 = i3[1] * e3[6] + i3[4] * e3[7] + i3[7] * e3[8];
        var $2 = i3[2] * e3[6] + i3[5] * e3[7] + i3[8] * e3[8];
        m[0] = r2, m[1] = o2, m[2] = n2, m[3] = s2, m[4] = _2, m[5] = a2, m[6] = h2, m[7] = l2, m[8] = $2;
      }, yt.prototype = new et(), yt._$eT = null, yt._$tP = new Object(), yt._$2o = function() {
        return yt._$eT == null && (yt._$eT = yt.getID("DST_BASE")), yt._$eT;
      }, yt._$27 = function() {
        yt._$tP.clear(), yt._$eT = null;
      }, yt.getID = function(t3) {
        var i3 = yt._$tP[t3];
        return i3 == null && (i3 = new yt(t3), yt._$tP[t3] = i3), i3;
      }, yt.prototype._$3s = function() {
        return new yt();
      }, mt.prototype = new E(), mt._$9r = function(t3) {
        return new Float32Array(t3);
      }, mt._$vb = function(t3) {
        return new Int16Array(t3);
      }, mt._$cr = function(t3, i3) {
        return t3 == null || t3._$yL() < i3.length ? (t3 = mt._$9r(2 * i3.length), t3.put(i3), t3._$oT(0)) : (t3.clear(), t3.put(i3), t3._$oT(0)), t3;
      }, mt._$mb = function(t3, i3) {
        return t3 == null || t3._$yL() < i3.length ? (t3 = mt._$vb(2 * i3.length), t3.put(i3), t3._$oT(0)) : (t3.clear(), t3.put(i3), t3._$oT(0)), t3;
      }, mt._$Hs = function() {
        return this._$Gr;
      }, mt._$as = function(t3) {
        this._$Gr = t3;
      }, mt.prototype.getGL = function() {
        return this.gl;
      }, mt.prototype.setGL = function(t3) {
        this.gl = t3;
      }, mt.prototype.setTransform = function(t3) {
        this.transform = t3;
      }, mt.prototype._$ZT = function() {
        var t3 = this.gl;
        this.firstDraw && (this.initShader(), this.firstDraw = false, this.anisotropyExt = t3.getExtension("EXT_texture_filter_anisotropic") || t3.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t3.getExtension("MOZ_EXT_texture_filter_anisotropic"), this.anisotropyExt && (this.maxAnisotropy = t3.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT))), t3.disable(t3.SCISSOR_TEST), t3.disable(t3.STENCIL_TEST), t3.disable(t3.DEPTH_TEST), t3.frontFace(t3.CW), t3.enable(t3.BLEND), t3.colorMask(1, 1, 1, 1), t3.bindBuffer(t3.ARRAY_BUFFER, null), t3.bindBuffer(t3.ELEMENT_ARRAY_BUFFER, null);
      }, mt.prototype._$Uo = function(t3, i3, e3, r2, o2, n2, s2, _2) {
        if (!(n2 < 0.01 && this.clipBufPre_clipContextMask == null)) {
          var a2 = (n2 > 0.9 && at.EXPAND_W, this.gl);
          if (this.gl == null)
            throw new Error("gl is null");
          var h2 = 1 * this._$C0 * n2;
          var l2 = 1 * this._$tT * n2;
          var $2 = 1 * this._$WL * n2;
          var u2 = this._$lT * n2;
          if (this.clipBufPre_clipContextMask != null) {
            a2.frontFace(a2.CCW), a2.useProgram(this.shaderProgram), this._$vS = Tt(a2, this._$vS, r2), this._$no = Pt(a2, this._$no, e3), a2.enableVertexAttribArray(this.a_position_Loc), a2.vertexAttribPointer(this.a_position_Loc, 2, a2.FLOAT, false, 0, 0), this._$NT = Tt(a2, this._$NT, o2), a2.activeTexture(a2.TEXTURE1), a2.bindTexture(a2.TEXTURE_2D, this.textures[t3]), a2.uniform1i(this.s_texture0_Loc, 1), a2.enableVertexAttribArray(this.a_texCoord_Loc), a2.vertexAttribPointer(this.a_texCoord_Loc, 2, a2.FLOAT, false, 0, 0), a2.uniformMatrix4fv(this.u_matrix_Loc, false, this.getClipBufPre_clipContextMask().matrixForMask);
            var p2 = this.getClipBufPre_clipContextMask().layoutChannelNo;
            var f2 = this.getChannelFlagAsColor(p2);
            a2.uniform4f(this.u_channelFlag, f2.r, f2.g, f2.b, f2.a);
            var c2 = this.getClipBufPre_clipContextMask().layoutBounds;
            a2.uniform4f(this.u_baseColor_Loc, 2 * c2.x - 1, 2 * c2.y - 1, 2 * c2._$EL() - 1, 2 * c2._$5T() - 1), a2.uniform1i(this.u_maskFlag_Loc, true);
          } else if (this.getClipBufPre_clipContextDraw() != null) {
            a2.useProgram(this.shaderProgramOff), this._$vS = Tt(a2, this._$vS, r2), this._$no = Pt(a2, this._$no, e3), a2.enableVertexAttribArray(this.a_position_Loc_Off), a2.vertexAttribPointer(this.a_position_Loc_Off, 2, a2.FLOAT, false, 0, 0), this._$NT = Tt(a2, this._$NT, o2), a2.activeTexture(a2.TEXTURE1), a2.bindTexture(a2.TEXTURE_2D, this.textures[t3]), a2.uniform1i(this.s_texture0_Loc_Off, 1), a2.enableVertexAttribArray(this.a_texCoord_Loc_Off), a2.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, a2.FLOAT, false, 0, 0), a2.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, false, this.getClipBufPre_clipContextDraw().matrixForDraw), a2.uniformMatrix4fv(this.u_matrix_Loc_Off, false, this.matrix4x4), a2.activeTexture(a2.TEXTURE2), a2.bindTexture(a2.TEXTURE_2D, at.fTexture[this.glno]), a2.uniform1i(this.s_texture1_Loc_Off, 2);
            var p2 = this.getClipBufPre_clipContextDraw().layoutChannelNo;
            var f2 = this.getChannelFlagAsColor(p2);
            a2.uniform4f(this.u_channelFlag_Loc_Off, f2.r, f2.g, f2.b, f2.a), a2.uniform4f(this.u_baseColor_Loc_Off, h2, l2, $2, u2);
          } else
            a2.useProgram(this.shaderProgram), this._$vS = Tt(a2, this._$vS, r2), this._$no = Pt(a2, this._$no, e3), a2.enableVertexAttribArray(this.a_position_Loc), a2.vertexAttribPointer(this.a_position_Loc, 2, a2.FLOAT, false, 0, 0), this._$NT = Tt(a2, this._$NT, o2), a2.activeTexture(a2.TEXTURE1), a2.bindTexture(a2.TEXTURE_2D, this.textures[t3]), a2.uniform1i(this.s_texture0_Loc, 1), a2.enableVertexAttribArray(this.a_texCoord_Loc), a2.vertexAttribPointer(this.a_texCoord_Loc, 2, a2.FLOAT, false, 0, 0), a2.uniformMatrix4fv(this.u_matrix_Loc, false, this.matrix4x4), a2.uniform4f(this.u_baseColor_Loc, h2, l2, $2, u2), a2.uniform1i(this.u_maskFlag_Loc, false);
          this.culling ? this.gl.enable(a2.CULL_FACE) : this.gl.disable(a2.CULL_FACE), this.gl.enable(a2.BLEND);
          var d2, g2, y2, m2;
          if (this.clipBufPre_clipContextMask != null)
            d2 = a2.ONE, g2 = a2.ONE_MINUS_SRC_ALPHA, y2 = a2.ONE, m2 = a2.ONE_MINUS_SRC_ALPHA;
          else
            switch (s2) {
              case $t._$ms:
                d2 = a2.ONE, g2 = a2.ONE_MINUS_SRC_ALPHA, y2 = a2.ONE, m2 = a2.ONE_MINUS_SRC_ALPHA;
                break;
              case $t._$ns:
                d2 = a2.ONE, g2 = a2.ONE, y2 = a2.ZERO, m2 = a2.ONE;
                break;
              case $t._$_s:
                d2 = a2.DST_COLOR, g2 = a2.ONE_MINUS_SRC_ALPHA, y2 = a2.ZERO, m2 = a2.ONE;
            }
          a2.blendEquationSeparate(a2.FUNC_ADD, a2.FUNC_ADD), a2.blendFuncSeparate(d2, g2, y2, m2), this.anisotropyExt && a2.texParameteri(a2.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
          var T2 = e3.length;
          a2.drawElements(a2.TRIANGLES, T2, a2.UNSIGNED_SHORT, 0), a2.bindTexture(a2.TEXTURE_2D, null);
        }
      }, mt.prototype._$Rs = function() {
        throw new Error("_$Rs");
      }, mt.prototype._$Ds = function(t3) {
        throw new Error("_$Ds");
      }, mt.prototype._$K2 = function() {
        for (var t3 = 0; t3 < this.textures.length; t3++) {
          this.textures[t3] != 0 && (this.gl._$K2(1, this.textures, t3), this.textures[t3] = null);
        }
      }, mt.prototype.setTexture = function(t3, i3) {
        this.textures[t3] = i3;
      }, mt.prototype.initShader = function() {
        var t3 = this.gl;
        this.loadShaders2(), this.a_position_Loc = t3.getAttribLocation(this.shaderProgram, "a_position"), this.a_texCoord_Loc = t3.getAttribLocation(this.shaderProgram, "a_texCoord"), this.u_matrix_Loc = t3.getUniformLocation(this.shaderProgram, "u_mvpMatrix"), this.s_texture0_Loc = t3.getUniformLocation(this.shaderProgram, "s_texture0"), this.u_channelFlag = t3.getUniformLocation(this.shaderProgram, "u_channelFlag"), this.u_baseColor_Loc = t3.getUniformLocation(this.shaderProgram, "u_baseColor"), this.u_maskFlag_Loc = t3.getUniformLocation(this.shaderProgram, "u_maskFlag"), this.a_position_Loc_Off = t3.getAttribLocation(this.shaderProgramOff, "a_position"), this.a_texCoord_Loc_Off = t3.getAttribLocation(this.shaderProgramOff, "a_texCoord"), this.u_matrix_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix"), this.u_clipMatrix_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix"), this.s_texture0_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "s_texture0"), this.s_texture1_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "s_texture1"), this.u_channelFlag_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "u_channelFlag"), this.u_baseColor_Loc_Off = t3.getUniformLocation(this.shaderProgramOff, "u_baseColor");
      }, mt.prototype.disposeShader = function() {
        var t3 = this.gl;
        this.shaderProgram && (t3.deleteProgram(this.shaderProgram), this.shaderProgram = null), this.shaderProgramOff && (t3.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = null);
      }, mt.prototype.compileShader = function(t3, i3) {
        var e3 = this.gl;
        var r2 = i3;
        var o2 = e3.createShader(t3);
        if (o2 == null)
          return _._$Ji("_$L0 to create shader"), null;
        if (e3.shaderSource(o2, r2), e3.compileShader(o2), !e3.getShaderParameter(o2, e3.COMPILE_STATUS)) {
          var n2 = e3.getShaderInfoLog(o2);
          return _._$Ji("_$L0 to compile shader : " + n2), e3.deleteShader(o2), null;
        }
        return o2;
      }, mt.prototype.loadShaders2 = function() {
        var t3 = this.gl;
        if (this.shaderProgram = t3.createProgram(), !this.shaderProgram)
          return false;
        if (this.shaderProgramOff = t3.createProgram(), !this.shaderProgramOff)
          return false;
        if (this.vertShader = this.compileShader(t3.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}"), !this.vertShader)
          return _._$Ji("Vertex shader compile _$li!"), false;
        if (this.vertShaderOff = this.compileShader(t3.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}"), !this.vertShaderOff)
          return _._$Ji("OffVertex shader compile _$li!"), false;
        if (this.fragShader = this.compileShader(t3.FRAGMENT_SHADER, "precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}"), !this.fragShader)
          return _._$Ji("Fragment shader compile _$li!"), false;
        if (this.fragShaderOff = this.compileShader(t3.FRAGMENT_SHADER, "precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}"), !this.fragShaderOff)
          return _._$Ji("OffFragment shader compile _$li!"), false;
        if (t3.attachShader(this.shaderProgram, this.vertShader), t3.attachShader(this.shaderProgram, this.fragShader), t3.attachShader(this.shaderProgramOff, this.vertShaderOff), t3.attachShader(this.shaderProgramOff, this.fragShaderOff), t3.linkProgram(this.shaderProgram), t3.linkProgram(this.shaderProgramOff), !t3.getProgramParameter(this.shaderProgram, t3.LINK_STATUS)) {
          var i3 = t3.getProgramInfoLog(this.shaderProgram);
          return _._$Ji("_$L0 to link program: " + i3), this.vertShader && (t3.deleteShader(this.vertShader), this.vertShader = 0), this.fragShader && (t3.deleteShader(this.fragShader), this.fragShader = 0), this.shaderProgram && (t3.deleteProgram(this.shaderProgram), this.shaderProgram = 0), this.vertShaderOff && (t3.deleteShader(this.vertShaderOff), this.vertShaderOff = 0), this.fragShaderOff && (t3.deleteShader(this.fragShaderOff), this.fragShaderOff = 0), this.shaderProgramOff && (t3.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = 0), false;
        }
        return true;
      }, mt.prototype.createFramebuffer = function() {
        var t3 = this.gl;
        var i3 = at.clippingMaskBufferSize;
        var e3 = t3.createFramebuffer();
        t3.bindFramebuffer(t3.FRAMEBUFFER, e3);
        var r2 = t3.createRenderbuffer();
        t3.bindRenderbuffer(t3.RENDERBUFFER, r2), t3.renderbufferStorage(t3.RENDERBUFFER, t3.RGBA4, i3, i3), t3.framebufferRenderbuffer(t3.FRAMEBUFFER, t3.COLOR_ATTACHMENT0, t3.RENDERBUFFER, r2);
        var o2 = t3.createTexture();
        return t3.bindTexture(t3.TEXTURE_2D, o2), t3.texImage2D(t3.TEXTURE_2D, 0, t3.RGBA, i3, i3, 0, t3.RGBA, t3.UNSIGNED_BYTE, null), t3.texParameteri(t3.TEXTURE_2D, t3.TEXTURE_MIN_FILTER, t3.LINEAR), t3.texParameteri(t3.TEXTURE_2D, t3.TEXTURE_MAG_FILTER, t3.LINEAR), t3.texParameteri(t3.TEXTURE_2D, t3.TEXTURE_WRAP_S, t3.CLAMP_TO_EDGE), t3.texParameteri(t3.TEXTURE_2D, t3.TEXTURE_WRAP_T, t3.CLAMP_TO_EDGE), t3.framebufferTexture2D(t3.FRAMEBUFFER, t3.COLOR_ATTACHMENT0, t3.TEXTURE_2D, o2, 0), t3.bindTexture(t3.TEXTURE_2D, null), t3.bindRenderbuffer(t3.RENDERBUFFER, null), t3.bindFramebuffer(t3.FRAMEBUFFER, null), at.fTexture[this.glno] = o2, { framebuffer: e3, renderbuffer: r2, texture: at.fTexture[this.glno] };
      }, St.prototype._$fP = function() {
        var t3;
        var i3;
        var e3;
        var r2 = this._$ST();
        if ((128 & r2) == 0)
          return 255 & r2;
        if ((128 & (t3 = this._$ST())) == 0)
          return (127 & r2) << 7 | 127 & t3;
        if ((128 & (i3 = this._$ST())) == 0)
          return (127 & r2) << 14 | (127 & t3) << 7 | 255 & i3;
        if ((128 & (e3 = this._$ST())) == 0)
          return (127 & r2) << 21 | (127 & t3) << 14 | (127 & i3) << 7 | 255 & e3;
        throw new lt("_$L _$0P  _");
      }, St.prototype.getFormatVersion = function() {
        return this._$S2;
      }, St.prototype._$gr = function(t3) {
        this._$S2 = t3;
      }, St.prototype._$3L = function() {
        return this._$fP();
      }, St.prototype._$mP = function() {
        return this._$zT(), this._$F += 8, this._$T.getFloat64(this._$F - 8);
      }, St.prototype._$_T = function() {
        return this._$zT(), this._$F += 4, this._$T.getFloat32(this._$F - 4);
      }, St.prototype._$6L = function() {
        return this._$zT(), this._$F += 4, this._$T.getInt32(this._$F - 4);
      }, St.prototype._$ST = function() {
        return this._$zT(), this._$T.getInt8(this._$F++);
      }, St.prototype._$9T = function() {
        return this._$zT(), this._$F += 2, this._$T.getInt16(this._$F - 2);
      }, St.prototype._$2T = function() {
        throw this._$zT(), this._$F += 8, new lt("_$L _$q read long");
      }, St.prototype._$po = function() {
        return this._$zT(), this._$T.getInt8(this._$F++) != 0;
      };
      var xt = true;
      St.prototype._$bT = function() {
        this._$zT();
        var t3 = this._$3L();
        var i3 = null;
        if (xt)
          try {
            var e3 = new ArrayBuffer(2 * t3);
            i3 = new Uint16Array(e3);
            for (var r2 = 0; r2 < t3; ++r2)
              i3[r2] = this._$T.getUint8(this._$F++);
            return String.fromCharCode.apply(null, i3);
          } catch (t4) {
            xt = false;
          }
        try {
          var o2 = new Array();
          if (i3 == null)
            for (var r2 = 0; r2 < t3; ++r2)
              o2[r2] = this._$T.getUint8(this._$F++);
          else
            for (var r2 = 0; r2 < t3; ++r2)
              o2[r2] = i3[r2];
          return String.fromCharCode.apply(null, o2);
        } catch (t4) {
          console.log("read utf8 / _$rT _$L0 !! : " + t4);
        }
      }, St.prototype._$cS = function() {
        this._$zT();
        for (var t3 = this._$3L(), i3 = new Int32Array(t3), e3 = 0; e3 < t3; e3++)
          i3[e3] = this._$T.getInt32(this._$F), this._$F += 4;
        return i3;
      }, St.prototype._$Tb = function() {
        this._$zT();
        for (var t3 = this._$3L(), i3 = new Float32Array(t3), e3 = 0; e3 < t3; e3++)
          i3[e3] = this._$T.getFloat32(this._$F), this._$F += 4;
        return i3;
      }, St.prototype._$5b = function() {
        this._$zT();
        for (var t3 = this._$3L(), i3 = new Float64Array(t3), e3 = 0; e3 < t3; e3++)
          i3[e3] = this._$T.getFloat64(this._$F), this._$F += 8;
        return i3;
      }, St.prototype._$nP = function() {
        return this._$Jb(-1);
      }, St.prototype._$Jb = function(t3) {
        if (this._$zT(), t3 < 0 && (t3 = this._$3L()), t3 == G._$7P) {
          var i3 = this._$6L();
          if (i3 >= 0 && i3 < this._$Ko.length)
            return this._$Ko[i3];
          throw new lt("_$sL _$4i @_$m0");
        }
        var e3 = this._$4b(t3);
        return this._$Ko.push(e3), e3;
      }, St.prototype._$4b = function(t3) {
        if (t3 == 0)
          return null;
        if (t3 == 50) {
          var i3 = this._$bT();
          var e3 = b.getID(i3);
          return e3;
        }
        if (t3 == 51) {
          var i3 = this._$bT();
          var e3 = yt.getID(i3);
          return e3;
        }
        if (t3 == 134) {
          var i3 = this._$bT();
          var e3 = l.getID(i3);
          return e3;
        }
        if (t3 == 60) {
          var i3 = this._$bT();
          var e3 = u.getID(i3);
          return e3;
        }
        if (t3 >= 48) {
          var r2 = G._$9o(t3);
          return r2 != null ? (r2._$F0(this), r2) : null;
        }
        switch (t3) {
          case 1:
            return this._$bT();
          case 10:
            return new n(this._$6L());
          case 11:
            return new S(this._$mP(), this._$mP(), this._$mP(), this._$mP());
          case 12:
            return new S(this._$_T(), this._$_T(), this._$_T(), this._$_T());
          case 13:
            return new L(this._$mP(), this._$mP());
          case 14:
            return new L(this._$_T(), this._$_T());
          case 15:
            for (var o2 = this._$3L(), e3 = new Array(o2), s2 = 0; s2 < o2; s2++)
              e3[s2] = this._$nP();
            return e3;
          case 17:
            var e3 = new F(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP());
            return e3;
          case 21:
            return new h(this._$6L(), this._$6L(), this._$6L(), this._$6L());
          case 22:
            return new pt(this._$6L(), this._$6L());
          case 23:
            throw new Error("_$L _$ro ");
          case 16:
          case 25:
            return this._$cS();
          case 26:
            return this._$5b();
          case 27:
            return this._$Tb();
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 18:
          case 19:
          case 20:
          case 24:
          case 28:
            throw new lt("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : " + t3);
          default:
            throw new lt("_$6 _$q : _$nP() NO _$i : " + t3);
        }
      }, St.prototype._$8L = function() {
        return this._$hL == 0 ? this._$v0 = this._$ST() : this._$hL == 8 && (this._$v0 = this._$ST(), this._$hL = 0), (this._$v0 >> 7 - this._$hL++ & 1) == 1;
      }, St.prototype._$zT = function() {
        this._$hL != 0 && (this._$hL = 0);
      }, Lt._$2S = Math.PI / 180, Lt._$bS = Math.PI / 180, Lt._$wS = 180 / Math.PI, Lt._$NS = 180 / Math.PI, Lt.PI_F = Math.PI, Lt._$kT = [0, 0.012368, 0.024734, 0.037097, 0.049454, 0.061803, 0.074143, 0.086471, 0.098786, 0.111087, 0.12337, 0.135634, 0.147877, 0.160098, 0.172295, 0.184465, 0.196606, 0.208718, 0.220798, 0.232844, 0.244854, 0.256827, 0.268761, 0.280654, 0.292503, 0.304308, 0.316066, 0.327776, 0.339436, 0.351044, 0.362598, 0.374097, 0.385538, 0.396921, 0.408243, 0.419502, 0.430697, 0.441826, 0.452888, 0.463881, 0.474802, 0.485651, 0.496425, 0.507124, 0.517745, 0.528287, 0.538748, 0.549126, 0.559421, 0.56963, 0.579752, 0.589785, 0.599728, 0.609579, 0.619337, 0.629, 0.638567, 0.648036, 0.657406, 0.666676, 0.675843, 0.684908, 0.693867, 0.70272, 0.711466, 0.720103, 0.72863, 0.737045, 0.745348, 0.753536, 0.76161, 0.769566, 0.777405, 0.785125, 0.792725, 0.800204, 0.807561, 0.814793, 0.821901, 0.828884, 0.835739, 0.842467, 0.849066, 0.855535, 0.861873, 0.868079, 0.874153, 0.880093, 0.885898, 0.891567, 0.897101, 0.902497, 0.907754, 0.912873, 0.917853, 0.922692, 0.92739, 0.931946, 0.936359, 0.940629, 0.944755, 0.948737, 0.952574, 0.956265, 0.959809, 0.963207, 0.966457, 0.96956, 0.972514, 0.97532, 0.977976, 0.980482, 0.982839, 0.985045, 0.987101, 0.989006, 0.990759, 0.992361, 0.993811, 0.995109, 0.996254, 0.997248, 0.998088, 0.998776, 0.999312, 0.999694, 0.999924, 1], Lt._$92 = function(t3, i3) {
        var e3 = Math.atan2(t3[1], t3[0]);
        var r2 = Math.atan2(i3[1], i3[0]);
        return Lt._$tS(e3, r2);
      }, Lt._$tS = function(t3, i3) {
        for (var e3 = t3 - i3; e3 < -Math.PI; )
          e3 += 2 * Math.PI;
        for (; e3 > Math.PI; )
          e3 -= 2 * Math.PI;
        return e3;
      }, Lt._$9 = function(t3) {
        return Math.sin(t3);
      }, Lt.fcos = function(t3) {
        return Math.cos(t3);
      }, Mt.prototype._$u2 = function() {
        return this._$IS[0];
      }, Mt.prototype._$yo = function() {
        return this._$AT && !this._$IS[0];
      }, Mt.prototype._$GT = function() {
        return this._$e0;
      }, Et._$W2 = 0, Et.SYSTEM_INFO = null, Et.USER_AGENT = navigator.userAgent, Et.isIPhone = function() {
        return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone;
      }, Et.isIOS = function() {
        return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone || Et.SYSTEM_INFO._isIPad;
      }, Et.isAndroid = function() {
        return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isAndroid;
      }, Et.getOSVersion = function() {
        return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO.version;
      }, Et.getOS = function() {
        return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone || Et.SYSTEM_INFO._isIPad ? "iOS" : Et.SYSTEM_INFO._isAndroid ? "Android" : "_$Q0 OS";
      }, Et.setup = function() {
        function t3(t4, i4) {
          for (var e4 = t4.substring(i4).split(/[ _,;\.]/), r3 = 0, o2 = 0; o2 <= 2 && !isNaN(e4[o2]); o2++) {
            var n2 = parseInt(e4[o2]);
            if (n2 < 0 || n2 > 999) {
              _._$li("err : " + n2 + " @UtHtml5.setup()"), r3 = 0;
              break;
            }
            r3 += n2 * Math.pow(1e3, 2 - o2);
          }
          return r3;
        }
        var i3;
        var e3 = Et.USER_AGENT;
        var r2 = Et.SYSTEM_INFO = { userAgent: e3 };
        if ((i3 = e3.indexOf("iPhone OS ")) >= 0)
          r2.os = "iPhone", r2._isIPhone = true, r2.version = t3(e3, i3 + "iPhone OS ".length);
        else if ((i3 = e3.indexOf("iPad")) >= 0) {
          if ((i3 = e3.indexOf("CPU OS")) < 0)
            return void _._$li(" err : " + e3 + " @UtHtml5.setup()");
          r2.os = "iPad", r2._isIPad = true, r2.version = t3(e3, i3 + "CPU OS ".length);
        } else
          (i3 = e3.indexOf("Android")) >= 0 ? (r2.os = "Android", r2._isAndroid = true, r2.version = t3(e3, i3 + "Android ".length)) : (r2.os = "-", r2.version = -1);
      }, window.UtSystem = w, window.UtDebug = _, window.LDTransform = gt, window.LDGL = nt, window.Live2D = at, window.Live2DModelWebGL = ft, window.Live2DModelJS = q, window.Live2DMotion = J, window.MotionQueueManager = ct, window.PhysicsHair = f, window.AMotion = s, window.PartsDataID = l, window.DrawDataID = b, window.BaseDataID = yt, window.ParamID = u, at.init();
      var At = false;
    }();
  }).call(i, e(7));
}, function(t, i) {
  t.exports = { import: function() {
    throw new Error("System.import cannot be used indirectly");
  } };
}, function(t, i, e) {
  function r(t2) {
    return t2 && t2.__esModule ? t2 : { default: t2 };
  }
  function o() {
    this.models = [], this.count = -1, this.reloadFlg = false, Live2D.init(), n.Live2DFramework.setPlatformManager(new _.default());
  }
  Object.defineProperty(i, "__esModule", { value: true }), i.default = o;
  var n = e(0);
  var s = e(9);
  var _ = r(s);
  var a = e(10);
  var h = r(a);
  var l = e(1);
  var $ = r(l);
  o.prototype.createModel = function() {
    var t2 = new h.default();
    return this.models.push(t2), t2;
  }, o.prototype.changeModel = function(t2, i2) {
    if (this.reloadFlg) {
      this.reloadFlg = false;
      this.releaseModel(0, t2), this.createModel(), this.models[0].load(t2, i2);
    }
  }, o.prototype.getModel = function(t2) {
    return t2 >= this.models.length ? null : this.models[t2];
  }, o.prototype.releaseModel = function(t2, i2) {
    this.models.length <= t2 || (this.models[t2].release(i2), delete this.models[t2], this.models.splice(t2, 1));
  }, o.prototype.numModels = function() {
    return this.models.length;
  }, o.prototype.setDrag = function(t2, i2) {
    for (var e2 = 0; e2 < this.models.length; e2++)
      this.models[e2].setDrag(t2, i2);
  }, o.prototype.maxScaleEvent = function() {
    $.default.DEBUG_LOG && console.log("Max scale event.");
    for (var t2 = 0; t2 < this.models.length; t2++)
      this.models[t2].startRandomMotion($.default.MOTION_GROUP_PINCH_IN, $.default.PRIORITY_NORMAL);
  }, o.prototype.minScaleEvent = function() {
    $.default.DEBUG_LOG && console.log("Min scale event.");
    for (var t2 = 0; t2 < this.models.length; t2++)
      this.models[t2].startRandomMotion($.default.MOTION_GROUP_PINCH_OUT, $.default.PRIORITY_NORMAL);
  }, o.prototype.tapEvent = function(t2, i2) {
    $.default.DEBUG_LOG && console.log("tapEvent view x:" + t2 + " y:" + i2);
    for (var e2 = 0; e2 < this.models.length; e2++)
      this.models[e2].hitTest($.default.HIT_AREA_HEAD, t2, i2) ? ($.default.DEBUG_LOG && console.log("Tap face."), this.models[e2].setRandomExpression()) : this.models[e2].hitTest($.default.HIT_AREA_BODY, t2, i2) ? ($.default.DEBUG_LOG && console.log("Tap body. models[" + e2 + "]"), this.models[e2].startRandomMotion($.default.MOTION_GROUP_TAP_BODY, $.default.PRIORITY_NORMAL)) : this.models[e2].hitTestCustom("head", t2, i2) ? ($.default.DEBUG_LOG && console.log("Tap face."), this.models[e2].startRandomMotion($.default.MOTION_GROUP_FLICK_HEAD, $.default.PRIORITY_NORMAL)) : this.models[e2].hitTestCustom("body", t2, i2) && ($.default.DEBUG_LOG && console.log("Tap body. models[" + e2 + "]"), this.models[e2].startRandomMotion($.default.MOTION_GROUP_TAP_BODY, $.default.PRIORITY_NORMAL));
    return true;
  };
}, function(t, i, e) {
  function r() {
  }
  Object.defineProperty(i, "__esModule", { value: true }), i.default = r;
  var o = e(2);
  r.prototype.loadBytes = function(t2, i2) {
    var e2 = new XMLHttpRequest();
    e2.open("GET", t2, true), e2.responseType = "arraybuffer", e2.onload = function() {
      switch (e2.status) {
        case 200:
          i2(e2.response);
          break;
        default:
          console.error("Failed to load (" + e2.status + ") : " + t2);
      }
    }, e2.send(null);
  }, r.prototype.loadString = function(t2) {
    this.loadBytes(t2, function(t3) {
      return t3;
    });
  }, r.prototype.loadLive2DModel = function(t2, i2) {
    var e2 = null;
    this.loadBytes(t2, function(t3) {
      e2 = Live2DModelWebGL.loadModel(t3), i2(e2);
    });
  }, r.prototype.loadTexture = function(t2, i2, e2, r2) {
    var n = new Image();
    n.crossOrigin = "Anonymous", n.src = e2;
    n.onload = function() {
      var e3 = (0, o.getContext)();
      var s = e3.createTexture();
      if (!s)
        return console.error("Failed to generate gl texture name."), -1;
      t2.isPremultipliedAlpha() == 0 && e3.pixelStorei(e3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), e3.pixelStorei(e3.UNPACK_FLIP_Y_WEBGL, 1), e3.activeTexture(e3.TEXTURE0), e3.bindTexture(e3.TEXTURE_2D, s), e3.texImage2D(e3.TEXTURE_2D, 0, e3.RGBA, e3.RGBA, e3.UNSIGNED_BYTE, n), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_MAG_FILTER, e3.LINEAR), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_MIN_FILTER, e3.LINEAR_MIPMAP_NEAREST), e3.generateMipmap(e3.TEXTURE_2D), t2.setTexture(i2, s), s = null, typeof r2 === "function" && r2();
    }, n.onerror = function() {
      console.error("Failed to load image : " + e2);
    };
  }, r.prototype.jsonParseFromBytes = function(t2) {
    var i2;
    var e2 = new Uint8Array(t2, 0, 3);
    return i2 = e2[0] == 239 && e2[1] == 187 && e2[2] == 191 ? String.fromCharCode.apply(null, new Uint8Array(t2, 3)) : String.fromCharCode.apply(null, new Uint8Array(t2)), JSON.parse(i2);
  }, r.prototype.log = function(t2) {
  };
}, function(t, i, e) {
  function r(t2) {
    return t2 && t2.__esModule ? t2 : { default: t2 };
  }
  function o() {
    n.L2DBaseModel.prototype.constructor.call(this), this.modelHomeDir = "", this.modelSetting = null, this.tmpMatrix = [];
  }
  Object.defineProperty(i, "__esModule", { value: true }), i.default = o;
  var n = e(0);
  var s = e(11);
  var _ = r(s);
  var a = e(1);
  var h = r(a);
  var l = e(3);
  var $ = r(l);
  o.prototype = new n.L2DBaseModel(), o.prototype.load = function(t2, i2, e2) {
    this.setUpdating(true), this.setInitialized(false), this.modelHomeDir = i2.substring(0, i2.lastIndexOf("/") + 1), this.modelSetting = new _.default();
    var r2 = this;
    this.modelSetting.loadModelSetting(i2, function() {
      var t3 = r2.modelHomeDir + r2.modelSetting.getModelFile();
      r2.loadModelData(t3, function(t4) {
        for (var i3 = 0; i3 < r2.modelSetting.getTextureNum(); i3++) {
          if (/^https?:\/\/|^\/\//i.test(r2.modelSetting.getTextureFile(i3)))
            var o2 = r2.modelSetting.getTextureFile(i3);
          else
            var o2 = r2.modelHomeDir + r2.modelSetting.getTextureFile(i3);
          r2.loadTexture(i3, o2, function() {
            if (r2.isTexLoaded) {
              if (r2.modelSetting.getExpressionNum() > 0) {
                r2.expressions = {};
                for (var t5 = 0; t5 < r2.modelSetting.getExpressionNum(); t5++) {
                  var i4 = r2.modelSetting.getExpressionName(t5);
                  var o3 = r2.modelHomeDir + r2.modelSetting.getExpressionFile(t5);
                  r2.loadExpression(i4, o3);
                }
              } else
                r2.expressionManager = null, r2.expressions = {};
              if (r2.eyeBlink, r2.modelSetting.getPhysicsFile() != null ? r2.loadPhysics(r2.modelHomeDir + r2.modelSetting.getPhysicsFile()) : r2.physics = null, r2.modelSetting.getPoseFile() != null ? r2.loadPose(r2.modelHomeDir + r2.modelSetting.getPoseFile(), function() {
                r2.pose.updateParam(r2.live2DModel);
              }) : r2.pose = null, r2.modelSetting.getLayout() != null) {
                var n2 = r2.modelSetting.getLayout();
                n2.width != null && r2.modelMatrix.setWidth(n2.width), n2.height != null && r2.modelMatrix.setHeight(n2.height), n2.x != null && r2.modelMatrix.setX(n2.x), n2.y != null && r2.modelMatrix.setY(n2.y), n2.center_x != null && r2.modelMatrix.centerX(n2.center_x), n2.center_y != null && r2.modelMatrix.centerY(n2.center_y), n2.top != null && r2.modelMatrix.top(n2.top), n2.bottom != null && r2.modelMatrix.bottom(n2.bottom), n2.left != null && r2.modelMatrix.left(n2.left), n2.right != null && r2.modelMatrix.right(n2.right);
              }
              if (r2.modelSetting.getHitAreasCustom() != null) {
                var s2 = r2.modelSetting.getHitAreasCustom();
                s2.head_x != null && (h.default.hit_areas_custom_head_x = s2.head_x), s2.head_y != null && (h.default.hit_areas_custom_head_y = s2.head_y), s2.body_x != null && (h.default.hit_areas_custom_body_x = s2.body_x), s2.body_y != null && (h.default.hit_areas_custom_body_y = s2.body_y);
              }
              for (var t5 = 0; t5 < r2.modelSetting.getInitParamNum(); t5++)
                r2.live2DModel.setParamFloat(r2.modelSetting.getInitParamID(t5), r2.modelSetting.getInitParamValue(t5));
              for (var t5 = 0; t5 < r2.modelSetting.getInitPartsVisibleNum(); t5++)
                r2.live2DModel.setPartsOpacity(r2.modelSetting.getInitPartsVisibleID(t5), r2.modelSetting.getInitPartsVisibleValue(t5));
              r2.live2DModel.saveParam(), r2.preloadMotionGroup(h.default.MOTION_GROUP_IDLE), r2.preloadMotionGroup(h.default.MOTION_GROUP_SLEEPY), r2.mainMotionManager.stopAllMotions(), r2.setUpdating(false), r2.setInitialized(true), typeof e2 === "function" && e2();
            }
          });
        }
      });
    });
  }, o.prototype.release = function(t2) {
    var i2 = n.Live2DFramework.getPlatformManager();
    t2.deleteTexture(i2.texture);
  }, o.prototype.preloadMotionGroup = function(t2) {
    for (var i2 = this, e2 = 0; e2 < this.modelSetting.getMotionNum(t2); e2++) {
      var r2 = this.modelSetting.getMotionFile(t2, e2);
      this.loadMotion(r2, this.modelHomeDir + r2, function(r3) {
        r3.setFadeIn(i2.modelSetting.getMotionFadeIn(t2, e2)), r3.setFadeOut(i2.modelSetting.getMotionFadeOut(t2, e2));
      });
    }
  }, o.prototype.update = function() {
    if (this.live2DModel == null)
      return void (h.default.DEBUG_LOG && console.error("Failed to update."));
    var t2 = UtSystem.getUserTimeMSec() - this.startTimeMSec;
    var i2 = t2 / 1e3;
    var e2 = 2 * i2 * Math.PI;
    if (this.mainMotionManager.isFinished()) {
      sessionStorage.getItem("Sleepy") === "1" ? this.startRandomMotion(h.default.MOTION_GROUP_SLEEPY, h.default.PRIORITY_SLEEPY) : this.startRandomMotion(h.default.MOTION_GROUP_IDLE, h.default.PRIORITY_IDLE);
    }
    this.live2DModel.loadParam(), this.mainMotionManager.updateParam(this.live2DModel) || this.eyeBlink != null && this.eyeBlink.updateParam(this.live2DModel), this.live2DModel.saveParam(), this.expressionManager == null || this.expressions == null || this.expressionManager.isFinished() || this.expressionManager.updateParam(this.live2DModel), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", 30 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", 30 * this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", 10 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", Number(15 * Math.sin(e2 / 6.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", Number(8 * Math.sin(e2 / 3.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", Number(10 * Math.sin(e2 / 5.5345)), 0.5), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", Number(4 * Math.sin(e2 / 15.5345)), 0.5), this.live2DModel.setParamFloat("PARAM_BREATH", Number(0.5 + 0.5 * Math.sin(e2 / 3.2345)), 1), this.physics != null && this.physics.updateParam(this.live2DModel), this.lipSync == null && this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue), this.pose != null && this.pose.updateParam(this.live2DModel), this.live2DModel.update();
  }, o.prototype.setRandomExpression = function() {
    var t2 = [];
    for (var i2 in this.expressions)
      t2.push(i2);
    var e2 = parseInt(Math.random() * t2.length);
    this.setExpression(t2[e2]);
  }, o.prototype.startRandomMotion = function(t2, i2) {
    var e2 = this.modelSetting.getMotionNum(t2);
    var r2 = parseInt(Math.random() * e2);
    this.startMotion(t2, r2, i2);
  }, o.prototype.startMotion = function(t2, i2, e2) {
    var r2 = this.modelSetting.getMotionFile(t2, i2);
    if (r2 == null || r2 == "")
      return void (h.default.DEBUG_LOG && console.error("Failed to motion."));
    if (e2 == h.default.PRIORITY_FORCE)
      this.mainMotionManager.setReservePriority(e2);
    else if (!this.mainMotionManager.reserveMotion(e2))
      return void (h.default.DEBUG_LOG && console.log("Motion is running."));
    var o2;
    var n2 = this;
    this.motions[t2] == null ? this.loadMotion(null, this.modelHomeDir + r2, function(r3) {
      o2 = r3, n2.setFadeInFadeOut(t2, i2, e2, o2);
    }) : (o2 = this.motions[t2], n2.setFadeInFadeOut(t2, i2, e2, o2));
  }, o.prototype.setFadeInFadeOut = function(t2, i2, e2, r2) {
    var o2 = this.modelSetting.getMotionFile(t2, i2);
    if (r2.setFadeIn(this.modelSetting.getMotionFadeIn(t2, i2)), r2.setFadeOut(this.modelSetting.getMotionFadeOut(t2, i2)), h.default.DEBUG_LOG && console.log("Start motion : " + o2), this.modelSetting.getMotionSound(t2, i2) == null)
      this.mainMotionManager.startMotionPrio(r2, e2);
    else {
      var n2 = this.modelSetting.getMotionSound(t2, i2);
      var s2 = document.createElement("audio");
      s2.src = this.modelHomeDir + n2, h.default.DEBUG_LOG && console.log("Start sound : " + n2), s2.play(), this.mainMotionManager.startMotionPrio(r2, e2);
    }
  }, o.prototype.setExpression = function(t2) {
    var i2 = this.expressions[t2];
    h.default.DEBUG_LOG && console.log("Expression : " + t2), this.expressionManager.startMotion(i2, false);
  }, o.prototype.draw = function(t2) {
    $.default.push(), $.default.multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = $.default.getMatrix(), this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), $.default.pop();
  }, o.prototype.hitTest = function(t2, i2, e2) {
    for (var r2 = this.modelSetting.getHitAreaNum(), o2 = 0; o2 < r2; o2++)
      if (t2 == this.modelSetting.getHitAreaName(o2)) {
        var n2 = this.modelSetting.getHitAreaID(o2);
        return this.hitTestSimple(n2, i2, e2);
      }
    return false;
  }, o.prototype.hitTestCustom = function(t2, i2, e2) {
    return t2 == "head" ? this.hitTestSimpleCustom(h.default.hit_areas_custom_head_x, h.default.hit_areas_custom_head_y, i2, e2) : t2 == "body" && this.hitTestSimpleCustom(h.default.hit_areas_custom_body_x, h.default.hit_areas_custom_body_y, i2, e2);
  };
}, function(t, i, e) {
  function r() {
    this.NAME = "name", this.ID = "id", this.MODEL = "model", this.TEXTURES = "textures", this.HIT_AREAS = "hit_areas", this.PHYSICS = "physics", this.POSE = "pose", this.EXPRESSIONS = "expressions", this.MOTION_GROUPS = "motions", this.SOUND = "sound", this.FADE_IN = "fade_in", this.FADE_OUT = "fade_out", this.LAYOUT = "layout", this.HIT_AREAS_CUSTOM = "hit_areas_custom", this.INIT_PARAM = "init_param", this.INIT_PARTS_VISIBLE = "init_parts_visible", this.VALUE = "val", this.FILE = "file", this.json = {};
  }
  Object.defineProperty(i, "__esModule", { value: true }), i.default = r;
  var o = e(0);
  r.prototype.loadModelSetting = function(t2, i2) {
    var e2 = this;
    o.Live2DFramework.getPlatformManager().loadBytes(t2, function(t3) {
      var r2 = String.fromCharCode.apply(null, new Uint8Array(t3));
      e2.json = JSON.parse(r2), i2();
    });
  }, r.prototype.getTextureFile = function(t2) {
    return this.json[this.TEXTURES] == null || this.json[this.TEXTURES][t2] == null ? null : this.json[this.TEXTURES][t2];
  }, r.prototype.getModelFile = function() {
    return this.json[this.MODEL];
  }, r.prototype.getTextureNum = function() {
    return this.json[this.TEXTURES] == null ? 0 : this.json[this.TEXTURES].length;
  }, r.prototype.getHitAreaNum = function() {
    return this.json[this.HIT_AREAS] == null ? 0 : this.json[this.HIT_AREAS].length;
  }, r.prototype.getHitAreaID = function(t2) {
    return this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][t2] == null ? null : this.json[this.HIT_AREAS][t2][this.ID];
  }, r.prototype.getHitAreaName = function(t2) {
    return this.json[this.HIT_AREAS] == null || this.json[this.HIT_AREAS][t2] == null ? null : this.json[this.HIT_AREAS][t2][this.NAME];
  }, r.prototype.getPhysicsFile = function() {
    return this.json[this.PHYSICS];
  }, r.prototype.getPoseFile = function() {
    return this.json[this.POSE];
  }, r.prototype.getExpressionNum = function() {
    return this.json[this.EXPRESSIONS] == null ? 0 : this.json[this.EXPRESSIONS].length;
  }, r.prototype.getExpressionFile = function(t2) {
    return this.json[this.EXPRESSIONS] == null ? null : this.json[this.EXPRESSIONS][t2][this.FILE];
  }, r.prototype.getExpressionName = function(t2) {
    return this.json[this.EXPRESSIONS] == null ? null : this.json[this.EXPRESSIONS][t2][this.NAME];
  }, r.prototype.getLayout = function() {
    return this.json[this.LAYOUT];
  }, r.prototype.getHitAreasCustom = function() {
    return this.json[this.HIT_AREAS_CUSTOM];
  }, r.prototype.getInitParamNum = function() {
    return this.json[this.INIT_PARAM] == null ? 0 : this.json[this.INIT_PARAM].length;
  }, r.prototype.getMotionNum = function(t2) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null ? 0 : this.json[this.MOTION_GROUPS][t2].length;
  }, r.prototype.getMotionFile = function(t2, i2) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null || this.json[this.MOTION_GROUPS][t2][i2] == null ? null : this.json[this.MOTION_GROUPS][t2][i2][this.FILE];
  }, r.prototype.getMotionSound = function(t2, i2) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null || this.json[this.MOTION_GROUPS][t2][i2] == null || this.json[this.MOTION_GROUPS][t2][i2][this.SOUND] == null ? null : this.json[this.MOTION_GROUPS][t2][i2][this.SOUND];
  }, r.prototype.getMotionFadeIn = function(t2, i2) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null || this.json[this.MOTION_GROUPS][t2][i2] == null || this.json[this.MOTION_GROUPS][t2][i2][this.FADE_IN] == null ? 1e3 : this.json[this.MOTION_GROUPS][t2][i2][this.FADE_IN];
  }, r.prototype.getMotionFadeOut = function(t2, i2) {
    return this.json[this.MOTION_GROUPS] == null || this.json[this.MOTION_GROUPS][t2] == null || this.json[this.MOTION_GROUPS][t2][i2] == null || this.json[this.MOTION_GROUPS][t2][i2][this.FADE_OUT] == null ? 1e3 : this.json[this.MOTION_GROUPS][t2][i2][this.FADE_OUT];
  }, r.prototype.getInitParamID = function(t2) {
    return this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][t2] == null ? null : this.json[this.INIT_PARAM][t2][this.ID];
  }, r.prototype.getInitParamValue = function(t2) {
    return this.json[this.INIT_PARAM] == null || this.json[this.INIT_PARAM][t2] == null ? NaN : this.json[this.INIT_PARAM][t2][this.VALUE];
  }, r.prototype.getInitPartsVisibleNum = function() {
    return this.json[this.INIT_PARTS_VISIBLE] == null ? 0 : this.json[this.INIT_PARTS_VISIBLE].length;
  }, r.prototype.getInitPartsVisibleID = function(t2) {
    return this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][t2] == null ? null : this.json[this.INIT_PARTS_VISIBLE][t2][this.ID];
  }, r.prototype.getInitPartsVisibleValue = function(t2) {
    return this.json[this.INIT_PARTS_VISIBLE] == null || this.json[this.INIT_PARTS_VISIBLE][t2] == null ? NaN : this.json[this.INIT_PARTS_VISIBLE][t2][this.VALUE];
  };
}]);
