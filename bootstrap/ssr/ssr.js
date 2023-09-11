import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import Io, { createContext, forwardRef, useCallback, createElement, useState, useMemo, useEffect, useContext } from "react";
import "lodash.isequal";
import { createServer } from "http";
import * as n$1 from "process";
var Mo = Object.create;
var yr = Object.defineProperty;
var Do = Object.getOwnPropertyDescriptor;
var Bo = Object.getOwnPropertyNames;
var Uo = Object.getPrototypeOf, _o = Object.prototype.hasOwnProperty;
var k$1 = (e2, t4) => () => (t4 || e2((t4 = { exports: {} }).exports, t4), t4.exports);
var Ho = (e2, t4, r2, n2) => {
  if (t4 && typeof t4 == "object" || typeof t4 == "function")
    for (let o2 of Bo(t4))
      !_o.call(e2, o2) && o2 !== r2 && yr(e2, o2, { get: () => t4[o2], enumerable: !(n2 = Do(t4, o2)) || n2.enumerable });
  return e2;
};
var At = (e2, t4, r2) => (r2 = e2 != null ? Mo(Uo(e2)) : {}, Ho(t4 || !e2 || !e2.__esModule ? yr(r2, "default", { value: e2, enumerable: true }) : r2, e2));
var Zr = k$1((af, Yr) => {
  var Hi = function(t4) {
    return ji(t4) && !Vi(t4);
  };
  function ji(e2) {
    return !!e2 && typeof e2 == "object";
  }
  function Vi(e2) {
    var t4 = Object.prototype.toString.call(e2);
    return t4 === "[object RegExp]" || t4 === "[object Date]" || Wi(e2);
  }
  var $i = typeof Symbol == "function" && Symbol.for, qi = $i ? Symbol.for("react.element") : 60103;
  function Wi(e2) {
    return e2.$$typeof === qi;
  }
  function zi(e2) {
    return Array.isArray(e2) ? [] : {};
  }
  function He(e2, t4) {
    return t4.clone !== false && t4.isMergeableObject(e2) ? Se(zi(e2), e2, t4) : e2;
  }
  function Ji(e2, t4, r2) {
    return e2.concat(t4).map(function(n2) {
      return He(n2, r2);
    });
  }
  function Gi(e2, t4) {
    if (!t4.customMerge)
      return Se;
    var r2 = t4.customMerge(e2);
    return typeof r2 == "function" ? r2 : Se;
  }
  function Ki(e2) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e2).filter(function(t4) {
      return Object.propertyIsEnumerable.call(e2, t4);
    }) : [];
  }
  function Qr(e2) {
    return Object.keys(e2).concat(Ki(e2));
  }
  function Xr(e2, t4) {
    try {
      return t4 in e2;
    } catch {
      return false;
    }
  }
  function Qi(e2, t4) {
    return Xr(e2, t4) && !(Object.hasOwnProperty.call(e2, t4) && Object.propertyIsEnumerable.call(e2, t4));
  }
  function Xi(e2, t4, r2) {
    var n2 = {};
    return r2.isMergeableObject(e2) && Qr(e2).forEach(function(o2) {
      n2[o2] = He(e2[o2], r2);
    }), Qr(t4).forEach(function(o2) {
      Qi(e2, o2) || (Xr(e2, o2) && r2.isMergeableObject(t4[o2]) ? n2[o2] = Gi(o2, r2)(e2[o2], t4[o2], r2) : n2[o2] = He(t4[o2], r2));
    }), n2;
  }
  function Se(e2, t4, r2) {
    r2 = r2 || {}, r2.arrayMerge = r2.arrayMerge || Ji, r2.isMergeableObject = r2.isMergeableObject || Hi, r2.cloneUnlessOtherwiseSpecified = He;
    var n2 = Array.isArray(t4), o2 = Array.isArray(e2), i2 = n2 === o2;
    return i2 ? n2 ? r2.arrayMerge(e2, t4, r2) : Xi(e2, t4, r2) : He(t4, r2);
  }
  Se.all = function(t4, r2) {
    if (!Array.isArray(t4))
      throw new Error("first argument should be an array");
    return t4.reduce(function(n2, o2) {
      return Se(n2, o2, r2);
    }, {});
  };
  var Yi = Se;
  Yr.exports = Yi;
});
var tn = k$1((sf, en) => {
  en.exports = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return false;
    if (typeof Symbol.iterator == "symbol")
      return true;
    var t4 = {}, r2 = Symbol("test"), n2 = Object(r2);
    if (typeof r2 == "string" || Object.prototype.toString.call(r2) !== "[object Symbol]" || Object.prototype.toString.call(n2) !== "[object Symbol]")
      return false;
    var o2 = 42;
    t4[r2] = o2;
    for (r2 in t4)
      return false;
    if (typeof Object.keys == "function" && Object.keys(t4).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t4).length !== 0)
      return false;
    var i2 = Object.getOwnPropertySymbols(t4);
    if (i2.length !== 1 || i2[0] !== r2 || !Object.prototype.propertyIsEnumerable.call(t4, r2))
      return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a2 = Object.getOwnPropertyDescriptor(t4, r2);
      if (a2.value !== o2 || a2.enumerable !== true)
        return false;
    }
    return true;
  };
});
var on = k$1((lf, nn) => {
  var rn = typeof Symbol < "u" && Symbol, Zi = tn();
  nn.exports = function() {
    return typeof rn != "function" || typeof Symbol != "function" || typeof rn("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : Zi();
  };
});
var ln = k$1((cf, sn) => {
  var an = { foo: {} }, ea = Object;
  sn.exports = function() {
    return { __proto__: an }.foo === an.foo && !({ __proto__: null } instanceof ea);
  };
});
var un = k$1((uf, cn) => {
  var ta = "Function.prototype.bind called on incompatible ", Vt = Array.prototype.slice, ra = Object.prototype.toString, na = "[object Function]";
  cn.exports = function(t4) {
    var r2 = this;
    if (typeof r2 != "function" || ra.call(r2) !== na)
      throw new TypeError(ta + r2);
    for (var n2 = Vt.call(arguments, 1), o2, i2 = function() {
      if (this instanceof o2) {
        var d2 = r2.apply(this, n2.concat(Vt.call(arguments)));
        return Object(d2) === d2 ? d2 : this;
      } else
        return r2.apply(t4, n2.concat(Vt.call(arguments)));
    }, a2 = Math.max(0, r2.length - n2.length), l2 = [], c2 = 0; c2 < a2; c2++)
      l2.push("$" + c2);
    if (o2 = Function("binder", "return function (" + l2.join(",") + "){ return binder.apply(this,arguments); }")(i2), r2.prototype) {
      var s2 = function() {
      };
      s2.prototype = r2.prototype, o2.prototype = new s2(), s2.prototype = null;
    }
    return o2;
  };
});
var ut = k$1((ff, fn) => {
  var oa = un();
  fn.exports = Function.prototype.bind || oa;
});
var dn = k$1((pf, pn) => {
  var ia = ut();
  pn.exports = ia.call(Function.call, Object.prototype.hasOwnProperty);
});
var dt = k$1((df, vn) => {
  var x2, Pe = SyntaxError, gn = Function, Ee = TypeError, $t = function(e2) {
    try {
      return gn('"use strict"; return (' + e2 + ").constructor;")();
    } catch {
    }
  }, ce = Object.getOwnPropertyDescriptor;
  if (ce)
    try {
      ce({}, "");
    } catch {
      ce = null;
    }
  var qt = function() {
    throw new Ee();
  }, aa = ce ? function() {
    try {
      return arguments.callee, qt;
    } catch {
      try {
        return ce(arguments, "callee").get;
      } catch {
        return qt;
      }
    }
  }() : qt, be = on()(), sa = ln()(), M = Object.getPrototypeOf || (sa ? function(e2) {
    return e2.__proto__;
  } : null), we = {}, la = typeof Uint8Array > "u" || !M ? x2 : M(Uint8Array), ue = { "%AggregateError%": typeof AggregateError > "u" ? x2 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? x2 : ArrayBuffer, "%ArrayIteratorPrototype%": be && M ? M([][Symbol.iterator]()) : x2, "%AsyncFromSyncIteratorPrototype%": x2, "%AsyncFunction%": we, "%AsyncGenerator%": we, "%AsyncGeneratorFunction%": we, "%AsyncIteratorPrototype%": we, "%Atomics%": typeof Atomics > "u" ? x2 : Atomics, "%BigInt%": typeof BigInt > "u" ? x2 : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? x2 : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? x2 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? x2 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? x2 : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? x2 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? x2 : FinalizationRegistry, "%Function%": gn, "%GeneratorFunction%": we, "%Int8Array%": typeof Int8Array > "u" ? x2 : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? x2 : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? x2 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": be && M ? M(M([][Symbol.iterator]())) : x2, "%JSON%": typeof JSON == "object" ? JSON : x2, "%Map%": typeof Map > "u" ? x2 : Map, "%MapIteratorPrototype%": typeof Map > "u" || !be || !M ? x2 : M((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? x2 : Promise, "%Proxy%": typeof Proxy > "u" ? x2 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? x2 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? x2 : Set, "%SetIteratorPrototype%": typeof Set > "u" || !be || !M ? x2 : M((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? x2 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": be && M ? M(""[Symbol.iterator]()) : x2, "%Symbol%": be ? Symbol : x2, "%SyntaxError%": Pe, "%ThrowTypeError%": aa, "%TypedArray%": la, "%TypeError%": Ee, "%Uint8Array%": typeof Uint8Array > "u" ? x2 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? x2 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? x2 : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? x2 : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? x2 : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? x2 : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? x2 : WeakSet };
  if (M)
    try {
      null.error;
    } catch (e2) {
      mn = M(M(e2)), ue["%Error.prototype%"] = mn;
    }
  var mn, ca = function e2(t4) {
    var r2;
    if (t4 === "%AsyncFunction%")
      r2 = $t("async function () {}");
    else if (t4 === "%GeneratorFunction%")
      r2 = $t("function* () {}");
    else if (t4 === "%AsyncGeneratorFunction%")
      r2 = $t("async function* () {}");
    else if (t4 === "%AsyncGenerator%") {
      var n2 = e2("%AsyncGeneratorFunction%");
      n2 && (r2 = n2.prototype);
    } else if (t4 === "%AsyncIteratorPrototype%") {
      var o2 = e2("%AsyncGenerator%");
      o2 && M && (r2 = M(o2.prototype));
    }
    return ue[t4] = r2, r2;
  }, hn = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, je = ut(), ft = dn(), ua = je.call(Function.call, Array.prototype.concat), fa = je.call(Function.apply, Array.prototype.splice), yn = je.call(Function.call, String.prototype.replace), pt = je.call(Function.call, String.prototype.slice), pa = je.call(Function.call, RegExp.prototype.exec), da = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ma = /\\(\\)?/g, ha = function(t4) {
    var r2 = pt(t4, 0, 1), n2 = pt(t4, -1);
    if (r2 === "%" && n2 !== "%")
      throw new Pe("invalid intrinsic syntax, expected closing `%`");
    if (n2 === "%" && r2 !== "%")
      throw new Pe("invalid intrinsic syntax, expected opening `%`");
    var o2 = [];
    return yn(t4, da, function(i2, a2, l2, c2) {
      o2[o2.length] = l2 ? yn(c2, ma, "$1") : a2 || i2;
    }), o2;
  }, ya = function(t4, r2) {
    var n2 = t4, o2;
    if (ft(hn, n2) && (o2 = hn[n2], n2 = "%" + o2[0] + "%"), ft(ue, n2)) {
      var i2 = ue[n2];
      if (i2 === we && (i2 = ca(n2)), typeof i2 > "u" && !r2)
        throw new Ee("intrinsic " + t4 + " exists, but is not available. Please file an issue!");
      return { alias: o2, name: n2, value: i2 };
    }
    throw new Pe("intrinsic " + t4 + " does not exist!");
  };
  vn.exports = function(t4, r2) {
    if (typeof t4 != "string" || t4.length === 0)
      throw new Ee("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r2 != "boolean")
      throw new Ee('"allowMissing" argument must be a boolean');
    if (pa(/^%?[^%]*%?$/, t4) === null)
      throw new Pe("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n2 = ha(t4), o2 = n2.length > 0 ? n2[0] : "", i2 = ya("%" + o2 + "%", r2), a2 = i2.name, l2 = i2.value, c2 = false, s2 = i2.alias;
    s2 && (o2 = s2[0], fa(n2, ua([0, 1], s2)));
    for (var d2 = 1, h2 = true; d2 < n2.length; d2 += 1) {
      var u2 = n2[d2], p2 = pt(u2, 0, 1), f2 = pt(u2, -1);
      if ((p2 === '"' || p2 === "'" || p2 === "`" || f2 === '"' || f2 === "'" || f2 === "`") && p2 !== f2)
        throw new Pe("property names with quotes must have matching quotes");
      if ((u2 === "constructor" || !h2) && (c2 = true), o2 += "." + u2, a2 = "%" + o2 + "%", ft(ue, a2))
        l2 = ue[a2];
      else if (l2 != null) {
        if (!(u2 in l2)) {
          if (!r2)
            throw new Ee("base intrinsic for " + t4 + " exists, but the property is not available.");
          return;
        }
        if (ce && d2 + 1 >= n2.length) {
          var y2 = ce(l2, u2);
          h2 = !!y2, h2 && "get" in y2 && !("originalValue" in y2.get) ? l2 = y2.get : l2 = l2[u2];
        } else
          h2 = ft(l2, u2), l2 = l2[u2];
        h2 && !c2 && (ue[a2] = l2);
      }
    }
    return l2;
  };
});
var An = k$1((mf, mt) => {
  var Wt = ut(), Ae = dt(), wn = Ae("%Function.prototype.apply%"), En = Ae("%Function.prototype.call%"), Pn = Ae("%Reflect.apply%", true) || Wt.call(En, wn), Sn = Ae("%Object.getOwnPropertyDescriptor%", true), fe = Ae("%Object.defineProperty%", true), ga = Ae("%Math.max%");
  if (fe)
    try {
      fe({}, "a", { value: 1 });
    } catch {
      fe = null;
    }
  mt.exports = function(t4) {
    var r2 = Pn(Wt, En, arguments);
    if (Sn && fe) {
      var n2 = Sn(r2, "length");
      n2.configurable && fe(r2, "length", { value: 1 + ga(0, t4.length - (arguments.length - 1)) });
    }
    return r2;
  };
  var bn = function() {
    return Pn(Wt, wn, arguments);
  };
  fe ? fe(mt.exports, "apply", { value: bn }) : mt.exports.apply = bn;
});
var Tn = k$1((hf, Rn) => {
  var On = dt(), xn = An(), va = xn(On("String.prototype.indexOf"));
  Rn.exports = function(t4, r2) {
    var n2 = On(t4, !!r2);
    return typeof n2 == "function" && va(t4, ".prototype.") > -1 ? xn(n2) : n2;
  };
});
var Cn = k$1(() => {
});
var Kn = k$1((vf, Gn) => {
  var tr = typeof Map == "function" && Map.prototype, zt = Object.getOwnPropertyDescriptor && tr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, yt = tr && zt && typeof zt.get == "function" ? zt.get : null, Fn = tr && Map.prototype.forEach, rr = typeof Set == "function" && Set.prototype, Jt = Object.getOwnPropertyDescriptor && rr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, gt = rr && Jt && typeof Jt.get == "function" ? Jt.get : null, In = rr && Set.prototype.forEach, Sa = typeof WeakMap == "function" && WeakMap.prototype, $e = Sa ? WeakMap.prototype.has : null, ba = typeof WeakSet == "function" && WeakSet.prototype, qe = ba ? WeakSet.prototype.has : null, wa = typeof WeakRef == "function" && WeakRef.prototype, Nn = wa ? WeakRef.prototype.deref : null, Ea = Boolean.prototype.valueOf, Pa = Object.prototype.toString, Aa = Function.prototype.toString, Oa = String.prototype.match, nr = String.prototype.slice, ie = String.prototype.replace, xa = String.prototype.toUpperCase, kn = String.prototype.toLowerCase, Vn = RegExp.prototype.test, Ln = Array.prototype.concat, z = Array.prototype.join, Ra = Array.prototype.slice, Mn = Math.floor, Qt = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Gt = Object.getOwnPropertySymbols, Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Oe = typeof Symbol == "function" && typeof Symbol.iterator == "object", U = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Oe || "symbol") ? Symbol.toStringTag : null, $n = Object.prototype.propertyIsEnumerable, Dn = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e2) {
    return e2.__proto__;
  } : null);
  function Bn(e2, t4) {
    if (e2 === 1 / 0 || e2 === -1 / 0 || e2 !== e2 || e2 && e2 > -1e3 && e2 < 1e3 || Vn.call(/e/, t4))
      return t4;
    var r2 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e2 == "number") {
      var n2 = e2 < 0 ? -Mn(-e2) : Mn(e2);
      if (n2 !== e2) {
        var o2 = String(n2), i2 = nr.call(t4, o2.length + 1);
        return ie.call(o2, r2, "$&_") + "." + ie.call(ie.call(i2, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return ie.call(t4, r2, "$&_");
  }
  var Yt = Cn(), Un = Yt.custom, _n = Wn(Un) ? Un : null;
  Gn.exports = function e2(t4, r2, n2, o2) {
    var i2 = r2 || {};
    if (oe(i2, "quoteStyle") && i2.quoteStyle !== "single" && i2.quoteStyle !== "double")
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (oe(i2, "maxStringLength") && (typeof i2.maxStringLength == "number" ? i2.maxStringLength < 0 && i2.maxStringLength !== 1 / 0 : i2.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var a2 = oe(i2, "customInspect") ? i2.customInspect : true;
    if (typeof a2 != "boolean" && a2 !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (oe(i2, "indent") && i2.indent !== null && i2.indent !== "	" && !(parseInt(i2.indent, 10) === i2.indent && i2.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (oe(i2, "numericSeparator") && typeof i2.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var l2 = i2.numericSeparator;
    if (typeof t4 > "u")
      return "undefined";
    if (t4 === null)
      return "null";
    if (typeof t4 == "boolean")
      return t4 ? "true" : "false";
    if (typeof t4 == "string")
      return Jn(t4, i2);
    if (typeof t4 == "number") {
      if (t4 === 0)
        return 1 / 0 / t4 > 0 ? "0" : "-0";
      var c2 = String(t4);
      return l2 ? Bn(t4, c2) : c2;
    }
    if (typeof t4 == "bigint") {
      var s2 = String(t4) + "n";
      return l2 ? Bn(t4, s2) : s2;
    }
    var d2 = typeof i2.depth > "u" ? 5 : i2.depth;
    if (typeof n2 > "u" && (n2 = 0), n2 >= d2 && d2 > 0 && typeof t4 == "object")
      return Zt(t4) ? "[Array]" : "[Object]";
    var h2 = Wa(i2, n2);
    if (typeof o2 > "u")
      o2 = [];
    else if (zn(o2, t4) >= 0)
      return "[Circular]";
    function u2(F2, q, G) {
      if (q && (o2 = Ra.call(o2), o2.push(q)), G) {
        var de = { depth: i2.depth };
        return oe(i2, "quoteStyle") && (de.quoteStyle = i2.quoteStyle), e2(F2, de, n2 + 1, o2);
      }
      return e2(F2, i2, n2 + 1, o2);
    }
    if (typeof t4 == "function" && !Hn(t4)) {
      var p2 = Da(t4), f2 = ht(t4, u2);
      return "[Function" + (p2 ? ": " + p2 : " (anonymous)") + "]" + (f2.length > 0 ? " { " + z.call(f2, ", ") + " }" : "");
    }
    if (Wn(t4)) {
      var y2 = Oe ? ie.call(String(t4), /^(Symbol\(.*\))_[^)]*$/, "$1") : Xt.call(t4);
      return typeof t4 == "object" && !Oe ? Ve(y2) : y2;
    }
    if (Va(t4)) {
      for (var P = "<" + kn.call(String(t4.nodeName)), g2 = t4.attributes || [], E2 = 0; E2 < g2.length; E2++)
        P += " " + g2[E2].name + "=" + qn(Ta(g2[E2].value), "double", i2);
      return P += ">", t4.childNodes && t4.childNodes.length && (P += "..."), P += "</" + kn.call(String(t4.nodeName)) + ">", P;
    }
    if (Zt(t4)) {
      if (t4.length === 0)
        return "[]";
      var R2 = ht(t4, u2);
      return h2 && !qa(R2) ? "[" + er(R2, h2) + "]" : "[ " + z.call(R2, ", ") + " ]";
    }
    if (Fa(t4)) {
      var C2 = ht(t4, u2);
      return !("cause" in Error.prototype) && "cause" in t4 && !$n.call(t4, "cause") ? "{ [" + String(t4) + "] " + z.call(Ln.call("[cause]: " + u2(t4.cause), C2), ", ") + " }" : C2.length === 0 ? "[" + String(t4) + "]" : "{ [" + String(t4) + "] " + z.call(C2, ", ") + " }";
    }
    if (typeof t4 == "object" && a2) {
      if (_n && typeof t4[_n] == "function" && Yt)
        return Yt(t4, { depth: d2 - n2 });
      if (a2 !== "symbol" && typeof t4.inspect == "function")
        return t4.inspect();
    }
    if (Ba(t4)) {
      var T2 = [];
      return Fn && Fn.call(t4, function(F2, q) {
        T2.push(u2(q, t4, true) + " => " + u2(F2, t4));
      }), jn("Map", yt.call(t4), T2, h2);
    }
    if (Ha(t4)) {
      var I2 = [];
      return In && In.call(t4, function(F2) {
        I2.push(u2(F2, t4));
      }), jn("Set", gt.call(t4), I2, h2);
    }
    if (Ua(t4))
      return Kt("WeakMap");
    if (ja(t4))
      return Kt("WeakSet");
    if (_a(t4))
      return Kt("WeakRef");
    if (Na(t4))
      return Ve(u2(Number(t4)));
    if (La(t4))
      return Ve(u2(Qt.call(t4)));
    if (ka(t4))
      return Ve(Ea.call(t4));
    if (Ia(t4))
      return Ve(u2(String(t4)));
    if (!Ca(t4) && !Hn(t4)) {
      var N2 = ht(t4, u2), v2 = Dn ? Dn(t4) === Object.prototype : t4 instanceof Object || t4.constructor === Object, A2 = t4 instanceof Object ? "" : "null prototype", S2 = !v2 && U && Object(t4) === t4 && U in t4 ? nr.call(ae(t4), 8, -1) : A2 ? "Object" : "", w2 = v2 || typeof t4.constructor != "function" ? "" : t4.constructor.name ? t4.constructor.name + " " : "", b2 = w2 + (S2 || A2 ? "[" + z.call(Ln.call([], S2 || [], A2 || []), ": ") + "] " : "");
      return N2.length === 0 ? b2 + "{}" : h2 ? b2 + "{" + er(N2, h2) + "}" : b2 + "{ " + z.call(N2, ", ") + " }";
    }
    return String(t4);
  };
  function qn(e2, t4, r2) {
    var n2 = (r2.quoteStyle || t4) === "double" ? '"' : "'";
    return n2 + e2 + n2;
  }
  function Ta(e2) {
    return ie.call(String(e2), /"/g, "&quot;");
  }
  function Zt(e2) {
    return ae(e2) === "[object Array]" && (!U || !(typeof e2 == "object" && U in e2));
  }
  function Ca(e2) {
    return ae(e2) === "[object Date]" && (!U || !(typeof e2 == "object" && U in e2));
  }
  function Hn(e2) {
    return ae(e2) === "[object RegExp]" && (!U || !(typeof e2 == "object" && U in e2));
  }
  function Fa(e2) {
    return ae(e2) === "[object Error]" && (!U || !(typeof e2 == "object" && U in e2));
  }
  function Ia(e2) {
    return ae(e2) === "[object String]" && (!U || !(typeof e2 == "object" && U in e2));
  }
  function Na(e2) {
    return ae(e2) === "[object Number]" && (!U || !(typeof e2 == "object" && U in e2));
  }
  function ka(e2) {
    return ae(e2) === "[object Boolean]" && (!U || !(typeof e2 == "object" && U in e2));
  }
  function Wn(e2) {
    if (Oe)
      return e2 && typeof e2 == "object" && e2 instanceof Symbol;
    if (typeof e2 == "symbol")
      return true;
    if (!e2 || typeof e2 != "object" || !Xt)
      return false;
    try {
      return Xt.call(e2), true;
    } catch {
    }
    return false;
  }
  function La(e2) {
    if (!e2 || typeof e2 != "object" || !Qt)
      return false;
    try {
      return Qt.call(e2), true;
    } catch {
    }
    return false;
  }
  var Ma = Object.prototype.hasOwnProperty || function(e2) {
    return e2 in this;
  };
  function oe(e2, t4) {
    return Ma.call(e2, t4);
  }
  function ae(e2) {
    return Pa.call(e2);
  }
  function Da(e2) {
    if (e2.name)
      return e2.name;
    var t4 = Oa.call(Aa.call(e2), /^function\s*([\w$]+)/);
    return t4 ? t4[1] : null;
  }
  function zn(e2, t4) {
    if (e2.indexOf)
      return e2.indexOf(t4);
    for (var r2 = 0, n2 = e2.length; r2 < n2; r2++)
      if (e2[r2] === t4)
        return r2;
    return -1;
  }
  function Ba(e2) {
    if (!yt || !e2 || typeof e2 != "object")
      return false;
    try {
      yt.call(e2);
      try {
        gt.call(e2);
      } catch {
        return true;
      }
      return e2 instanceof Map;
    } catch {
    }
    return false;
  }
  function Ua(e2) {
    if (!$e || !e2 || typeof e2 != "object")
      return false;
    try {
      $e.call(e2, $e);
      try {
        qe.call(e2, qe);
      } catch {
        return true;
      }
      return e2 instanceof WeakMap;
    } catch {
    }
    return false;
  }
  function _a(e2) {
    if (!Nn || !e2 || typeof e2 != "object")
      return false;
    try {
      return Nn.call(e2), true;
    } catch {
    }
    return false;
  }
  function Ha(e2) {
    if (!gt || !e2 || typeof e2 != "object")
      return false;
    try {
      gt.call(e2);
      try {
        yt.call(e2);
      } catch {
        return true;
      }
      return e2 instanceof Set;
    } catch {
    }
    return false;
  }
  function ja(e2) {
    if (!qe || !e2 || typeof e2 != "object")
      return false;
    try {
      qe.call(e2, qe);
      try {
        $e.call(e2, $e);
      } catch {
        return true;
      }
      return e2 instanceof WeakSet;
    } catch {
    }
    return false;
  }
  function Va(e2) {
    return !e2 || typeof e2 != "object" ? false : typeof HTMLElement < "u" && e2 instanceof HTMLElement ? true : typeof e2.nodeName == "string" && typeof e2.getAttribute == "function";
  }
  function Jn(e2, t4) {
    if (e2.length > t4.maxStringLength) {
      var r2 = e2.length - t4.maxStringLength, n2 = "... " + r2 + " more character" + (r2 > 1 ? "s" : "");
      return Jn(nr.call(e2, 0, t4.maxStringLength), t4) + n2;
    }
    var o2 = ie.call(ie.call(e2, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, $a);
    return qn(o2, "single", t4);
  }
  function $a(e2) {
    var t4 = e2.charCodeAt(0), r2 = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t4];
    return r2 ? "\\" + r2 : "\\x" + (t4 < 16 ? "0" : "") + xa.call(t4.toString(16));
  }
  function Ve(e2) {
    return "Object(" + e2 + ")";
  }
  function Kt(e2) {
    return e2 + " { ? }";
  }
  function jn(e2, t4, r2, n2) {
    var o2 = n2 ? er(r2, n2) : z.call(r2, ", ");
    return e2 + " (" + t4 + ") {" + o2 + "}";
  }
  function qa(e2) {
    for (var t4 = 0; t4 < e2.length; t4++)
      if (zn(e2[t4], `
`) >= 0)
        return false;
    return true;
  }
  function Wa(e2, t4) {
    var r2;
    if (e2.indent === "	")
      r2 = "	";
    else if (typeof e2.indent == "number" && e2.indent > 0)
      r2 = z.call(Array(e2.indent + 1), " ");
    else
      return null;
    return { base: r2, prev: z.call(Array(t4 + 1), r2) };
  }
  function er(e2, t4) {
    if (e2.length === 0)
      return "";
    var r2 = `
` + t4.prev + t4.base;
    return r2 + z.call(e2, "," + r2) + `
` + t4.prev;
  }
  function ht(e2, t4) {
    var r2 = Zt(e2), n2 = [];
    if (r2) {
      n2.length = e2.length;
      for (var o2 = 0; o2 < e2.length; o2++)
        n2[o2] = oe(e2, o2) ? t4(e2[o2], e2) : "";
    }
    var i2 = typeof Gt == "function" ? Gt(e2) : [], a2;
    if (Oe) {
      a2 = {};
      for (var l2 = 0; l2 < i2.length; l2++)
        a2["$" + i2[l2]] = i2[l2];
    }
    for (var c2 in e2)
      oe(e2, c2) && (r2 && String(Number(c2)) === c2 && c2 < e2.length || Oe && a2["$" + c2] instanceof Symbol || (Vn.call(/[^\w$]/, c2) ? n2.push(t4(c2, e2) + ": " + t4(e2[c2], e2)) : n2.push(c2 + ": " + t4(e2[c2], e2))));
    if (typeof Gt == "function")
      for (var s2 = 0; s2 < i2.length; s2++)
        $n.call(e2, i2[s2]) && n2.push("[" + t4(i2[s2]) + "]: " + t4(e2[i2[s2]], e2));
    return n2;
  }
});
var Xn = k$1((Sf, Qn) => {
  var or = dt(), xe = Tn(), za = Kn(), Ja = or("%TypeError%"), vt = or("%WeakMap%", true), St = or("%Map%", true), Ga = xe("WeakMap.prototype.get", true), Ka = xe("WeakMap.prototype.set", true), Qa = xe("WeakMap.prototype.has", true), Xa = xe("Map.prototype.get", true), Ya = xe("Map.prototype.set", true), Za = xe("Map.prototype.has", true), ir = function(e2, t4) {
    for (var r2 = e2, n2; (n2 = r2.next) !== null; r2 = n2)
      if (n2.key === t4)
        return r2.next = n2.next, n2.next = e2.next, e2.next = n2, n2;
  }, es = function(e2, t4) {
    var r2 = ir(e2, t4);
    return r2 && r2.value;
  }, ts = function(e2, t4, r2) {
    var n2 = ir(e2, t4);
    n2 ? n2.value = r2 : e2.next = { key: t4, next: e2.next, value: r2 };
  }, rs = function(e2, t4) {
    return !!ir(e2, t4);
  };
  Qn.exports = function() {
    var t4, r2, n2, o2 = { assert: function(i2) {
      if (!o2.has(i2))
        throw new Ja("Side channel does not contain " + za(i2));
    }, get: function(i2) {
      if (vt && i2 && (typeof i2 == "object" || typeof i2 == "function")) {
        if (t4)
          return Ga(t4, i2);
      } else if (St) {
        if (r2)
          return Xa(r2, i2);
      } else if (n2)
        return es(n2, i2);
    }, has: function(i2) {
      if (vt && i2 && (typeof i2 == "object" || typeof i2 == "function")) {
        if (t4)
          return Qa(t4, i2);
      } else if (St) {
        if (r2)
          return Za(r2, i2);
      } else if (n2)
        return rs(n2, i2);
      return false;
    }, set: function(i2, a2) {
      vt && i2 && (typeof i2 == "object" || typeof i2 == "function") ? (t4 || (t4 = new vt()), Ka(t4, i2, a2)) : St ? (r2 || (r2 = new St()), Ya(r2, i2, a2)) : (n2 || (n2 = { key: {}, next: null }), ts(n2, i2, a2));
    } };
    return o2;
  };
});
var bt = k$1((bf, Yn) => {
  var ns = String.prototype.replace, os = /%20/g, ar = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
  Yn.exports = { default: ar.RFC3986, formatters: { RFC1738: function(e2) {
    return ns.call(e2, os, "+");
  }, RFC3986: function(e2) {
    return String(e2);
  } }, RFC1738: ar.RFC1738, RFC3986: ar.RFC3986 };
});
var lr = k$1((wf, eo) => {
  var is = bt(), sr = Object.prototype.hasOwnProperty, pe = Array.isArray, J = function() {
    for (var e2 = [], t4 = 0; t4 < 256; ++t4)
      e2.push("%" + ((t4 < 16 ? "0" : "") + t4.toString(16)).toUpperCase());
    return e2;
  }(), as = function(t4) {
    for (; t4.length > 1; ) {
      var r2 = t4.pop(), n2 = r2.obj[r2.prop];
      if (pe(n2)) {
        for (var o2 = [], i2 = 0; i2 < n2.length; ++i2)
          typeof n2[i2] < "u" && o2.push(n2[i2]);
        r2.obj[r2.prop] = o2;
      }
    }
  }, Zn = function(t4, r2) {
    for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o2 = 0; o2 < t4.length; ++o2)
      typeof t4[o2] < "u" && (n2[o2] = t4[o2]);
    return n2;
  }, ss = function e2(t4, r2, n2) {
    if (!r2)
      return t4;
    if (typeof r2 != "object") {
      if (pe(t4))
        t4.push(r2);
      else if (t4 && typeof t4 == "object")
        (n2 && (n2.plainObjects || n2.allowPrototypes) || !sr.call(Object.prototype, r2)) && (t4[r2] = true);
      else
        return [t4, r2];
      return t4;
    }
    if (!t4 || typeof t4 != "object")
      return [t4].concat(r2);
    var o2 = t4;
    return pe(t4) && !pe(r2) && (o2 = Zn(t4, n2)), pe(t4) && pe(r2) ? (r2.forEach(function(i2, a2) {
      if (sr.call(t4, a2)) {
        var l2 = t4[a2];
        l2 && typeof l2 == "object" && i2 && typeof i2 == "object" ? t4[a2] = e2(l2, i2, n2) : t4.push(i2);
      } else
        t4[a2] = i2;
    }), t4) : Object.keys(r2).reduce(function(i2, a2) {
      var l2 = r2[a2];
      return sr.call(i2, a2) ? i2[a2] = e2(i2[a2], l2, n2) : i2[a2] = l2, i2;
    }, o2);
  }, ls = function(t4, r2) {
    return Object.keys(r2).reduce(function(n2, o2) {
      return n2[o2] = r2[o2], n2;
    }, t4);
  }, cs = function(e2, t4, r2) {
    var n2 = e2.replace(/\+/g, " ");
    if (r2 === "iso-8859-1")
      return n2.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n2);
    } catch {
      return n2;
    }
  }, us = function(t4, r2, n2, o2, i2) {
    if (t4.length === 0)
      return t4;
    var a2 = t4;
    if (typeof t4 == "symbol" ? a2 = Symbol.prototype.toString.call(t4) : typeof t4 != "string" && (a2 = String(t4)), n2 === "iso-8859-1")
      return escape(a2).replace(/%u[0-9a-f]{4}/gi, function(d2) {
        return "%26%23" + parseInt(d2.slice(2), 16) + "%3B";
      });
    for (var l2 = "", c2 = 0; c2 < a2.length; ++c2) {
      var s2 = a2.charCodeAt(c2);
      if (s2 === 45 || s2 === 46 || s2 === 95 || s2 === 126 || s2 >= 48 && s2 <= 57 || s2 >= 65 && s2 <= 90 || s2 >= 97 && s2 <= 122 || i2 === is.RFC1738 && (s2 === 40 || s2 === 41)) {
        l2 += a2.charAt(c2);
        continue;
      }
      if (s2 < 128) {
        l2 = l2 + J[s2];
        continue;
      }
      if (s2 < 2048) {
        l2 = l2 + (J[192 | s2 >> 6] + J[128 | s2 & 63]);
        continue;
      }
      if (s2 < 55296 || s2 >= 57344) {
        l2 = l2 + (J[224 | s2 >> 12] + J[128 | s2 >> 6 & 63] + J[128 | s2 & 63]);
        continue;
      }
      c2 += 1, s2 = 65536 + ((s2 & 1023) << 10 | a2.charCodeAt(c2) & 1023), l2 += J[240 | s2 >> 18] + J[128 | s2 >> 12 & 63] + J[128 | s2 >> 6 & 63] + J[128 | s2 & 63];
    }
    return l2;
  }, fs = function(t4) {
    for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], o2 = 0; o2 < r2.length; ++o2)
      for (var i2 = r2[o2], a2 = i2.obj[i2.prop], l2 = Object.keys(a2), c2 = 0; c2 < l2.length; ++c2) {
        var s2 = l2[c2], d2 = a2[s2];
        typeof d2 == "object" && d2 !== null && n2.indexOf(d2) === -1 && (r2.push({ obj: a2, prop: s2 }), n2.push(d2));
      }
    return as(r2), t4;
  }, ps = function(t4) {
    return Object.prototype.toString.call(t4) === "[object RegExp]";
  }, ds = function(t4) {
    return !t4 || typeof t4 != "object" ? false : !!(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4));
  }, ms = function(t4, r2) {
    return [].concat(t4, r2);
  }, hs = function(t4, r2) {
    if (pe(t4)) {
      for (var n2 = [], o2 = 0; o2 < t4.length; o2 += 1)
        n2.push(r2(t4[o2]));
      return n2;
    }
    return r2(t4);
  };
  eo.exports = { arrayToObject: Zn, assign: ls, combine: ms, compact: fs, decode: cs, encode: us, isBuffer: ds, isRegExp: ps, maybeMap: hs, merge: ss };
});
var ao = k$1((Ef, io) => {
  var no = Xn(), wt = lr(), We = bt(), ys = Object.prototype.hasOwnProperty, to = { brackets: function(t4) {
    return t4 + "[]";
  }, comma: "comma", indices: function(t4, r2) {
    return t4 + "[" + r2 + "]";
  }, repeat: function(t4) {
    return t4;
  } }, Q = Array.isArray, gs = Array.prototype.push, oo = function(e2, t4) {
    gs.apply(e2, Q(t4) ? t4 : [t4]);
  }, vs = Date.prototype.toISOString, ro = We.default, _ = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: wt.encode, encodeValuesOnly: false, format: ro, formatter: We.formatters[ro], indices: false, serializeDate: function(t4) {
    return vs.call(t4);
  }, skipNulls: false, strictNullHandling: false }, Ss = function(t4) {
    return typeof t4 == "string" || typeof t4 == "number" || typeof t4 == "boolean" || typeof t4 == "symbol" || typeof t4 == "bigint";
  }, cr = {}, bs = function e2(t4, r2, n2, o2, i2, a2, l2, c2, s2, d2, h2, u2, p2, f2, y2, P) {
    for (var g2 = t4, E2 = P, R2 = 0, C2 = false; (E2 = E2.get(cr)) !== void 0 && !C2; ) {
      var T2 = E2.get(t4);
      if (R2 += 1, typeof T2 < "u") {
        if (T2 === R2)
          throw new RangeError("Cyclic object value");
        C2 = true;
      }
      typeof E2.get(cr) > "u" && (R2 = 0);
    }
    if (typeof c2 == "function" ? g2 = c2(r2, g2) : g2 instanceof Date ? g2 = h2(g2) : n2 === "comma" && Q(g2) && (g2 = wt.maybeMap(g2, function(de) {
      return de instanceof Date ? h2(de) : de;
    })), g2 === null) {
      if (i2)
        return l2 && !f2 ? l2(r2, _.encoder, y2, "key", u2) : r2;
      g2 = "";
    }
    if (Ss(g2) || wt.isBuffer(g2)) {
      if (l2) {
        var I2 = f2 ? r2 : l2(r2, _.encoder, y2, "key", u2);
        return [p2(I2) + "=" + p2(l2(g2, _.encoder, y2, "value", u2))];
      }
      return [p2(r2) + "=" + p2(String(g2))];
    }
    var N2 = [];
    if (typeof g2 > "u")
      return N2;
    var v2;
    if (n2 === "comma" && Q(g2))
      f2 && l2 && (g2 = wt.maybeMap(g2, l2)), v2 = [{ value: g2.length > 0 ? g2.join(",") || null : void 0 }];
    else if (Q(c2))
      v2 = c2;
    else {
      var A2 = Object.keys(g2);
      v2 = s2 ? A2.sort(s2) : A2;
    }
    for (var S2 = o2 && Q(g2) && g2.length === 1 ? r2 + "[]" : r2, w2 = 0; w2 < v2.length; ++w2) {
      var b2 = v2[w2], F2 = typeof b2 == "object" && typeof b2.value < "u" ? b2.value : g2[b2];
      if (!(a2 && F2 === null)) {
        var q = Q(g2) ? typeof n2 == "function" ? n2(S2, b2) : S2 : S2 + (d2 ? "." + b2 : "[" + b2 + "]");
        P.set(t4, R2);
        var G = no();
        G.set(cr, P), oo(N2, e2(F2, q, n2, o2, i2, a2, n2 === "comma" && f2 && Q(g2) ? null : l2, c2, s2, d2, h2, u2, p2, f2, y2, G));
      }
    }
    return N2;
  }, ws = function(t4) {
    if (!t4)
      return _;
    if (t4.encoder !== null && typeof t4.encoder < "u" && typeof t4.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var r2 = t4.charset || _.charset;
    if (typeof t4.charset < "u" && t4.charset !== "utf-8" && t4.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n2 = We.default;
    if (typeof t4.format < "u") {
      if (!ys.call(We.formatters, t4.format))
        throw new TypeError("Unknown format option provided.");
      n2 = t4.format;
    }
    var o2 = We.formatters[n2], i2 = _.filter;
    return (typeof t4.filter == "function" || Q(t4.filter)) && (i2 = t4.filter), { addQueryPrefix: typeof t4.addQueryPrefix == "boolean" ? t4.addQueryPrefix : _.addQueryPrefix, allowDots: typeof t4.allowDots > "u" ? _.allowDots : !!t4.allowDots, charset: r2, charsetSentinel: typeof t4.charsetSentinel == "boolean" ? t4.charsetSentinel : _.charsetSentinel, delimiter: typeof t4.delimiter > "u" ? _.delimiter : t4.delimiter, encode: typeof t4.encode == "boolean" ? t4.encode : _.encode, encoder: typeof t4.encoder == "function" ? t4.encoder : _.encoder, encodeValuesOnly: typeof t4.encodeValuesOnly == "boolean" ? t4.encodeValuesOnly : _.encodeValuesOnly, filter: i2, format: n2, formatter: o2, serializeDate: typeof t4.serializeDate == "function" ? t4.serializeDate : _.serializeDate, skipNulls: typeof t4.skipNulls == "boolean" ? t4.skipNulls : _.skipNulls, sort: typeof t4.sort == "function" ? t4.sort : null, strictNullHandling: typeof t4.strictNullHandling == "boolean" ? t4.strictNullHandling : _.strictNullHandling };
  };
  io.exports = function(e2, t4) {
    var r2 = e2, n2 = ws(t4), o2, i2;
    typeof n2.filter == "function" ? (i2 = n2.filter, r2 = i2("", r2)) : Q(n2.filter) && (i2 = n2.filter, o2 = i2);
    var a2 = [];
    if (typeof r2 != "object" || r2 === null)
      return "";
    var l2;
    t4 && t4.arrayFormat in to ? l2 = t4.arrayFormat : t4 && "indices" in t4 ? l2 = t4.indices ? "indices" : "repeat" : l2 = "indices";
    var c2 = to[l2];
    if (t4 && "commaRoundTrip" in t4 && typeof t4.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var s2 = c2 === "comma" && t4 && t4.commaRoundTrip;
    o2 || (o2 = Object.keys(r2)), n2.sort && o2.sort(n2.sort);
    for (var d2 = no(), h2 = 0; h2 < o2.length; ++h2) {
      var u2 = o2[h2];
      n2.skipNulls && r2[u2] === null || oo(a2, bs(r2[u2], u2, c2, s2, n2.strictNullHandling, n2.skipNulls, n2.encode ? n2.encoder : null, n2.filter, n2.sort, n2.allowDots, n2.serializeDate, n2.format, n2.formatter, n2.encodeValuesOnly, n2.charset, d2));
    }
    var p2 = a2.join(n2.delimiter), f2 = n2.addQueryPrefix === true ? "?" : "";
    return n2.charsetSentinel && (n2.charset === "iso-8859-1" ? f2 += "utf8=%26%2310003%3B&" : f2 += "utf8=%E2%9C%93&"), p2.length > 0 ? f2 + p2 : "";
  };
});
var co = k$1((Pf, lo) => {
  var Re = lr(), ur = Object.prototype.hasOwnProperty, Es = Array.isArray, D2 = { allowDots: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: Re.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, Ps = function(e2) {
    return e2.replace(/&#(\d+);/g, function(t4, r2) {
      return String.fromCharCode(parseInt(r2, 10));
    });
  }, so = function(e2, t4) {
    return e2 && typeof e2 == "string" && t4.comma && e2.indexOf(",") > -1 ? e2.split(",") : e2;
  }, As = "utf8=%26%2310003%3B", Os = "utf8=%E2%9C%93", xs = function(t4, r2) {
    var n2 = { __proto__: null }, o2 = r2.ignoreQueryPrefix ? t4.replace(/^\?/, "") : t4, i2 = r2.parameterLimit === 1 / 0 ? void 0 : r2.parameterLimit, a2 = o2.split(r2.delimiter, i2), l2 = -1, c2, s2 = r2.charset;
    if (r2.charsetSentinel)
      for (c2 = 0; c2 < a2.length; ++c2)
        a2[c2].indexOf("utf8=") === 0 && (a2[c2] === Os ? s2 = "utf-8" : a2[c2] === As && (s2 = "iso-8859-1"), l2 = c2, c2 = a2.length);
    for (c2 = 0; c2 < a2.length; ++c2)
      if (c2 !== l2) {
        var d2 = a2[c2], h2 = d2.indexOf("]="), u2 = h2 === -1 ? d2.indexOf("=") : h2 + 1, p2, f2;
        u2 === -1 ? (p2 = r2.decoder(d2, D2.decoder, s2, "key"), f2 = r2.strictNullHandling ? null : "") : (p2 = r2.decoder(d2.slice(0, u2), D2.decoder, s2, "key"), f2 = Re.maybeMap(so(d2.slice(u2 + 1), r2), function(y2) {
          return r2.decoder(y2, D2.decoder, s2, "value");
        })), f2 && r2.interpretNumericEntities && s2 === "iso-8859-1" && (f2 = Ps(f2)), d2.indexOf("[]=") > -1 && (f2 = Es(f2) ? [f2] : f2), ur.call(n2, p2) ? n2[p2] = Re.combine(n2[p2], f2) : n2[p2] = f2;
      }
    return n2;
  }, Rs = function(e2, t4, r2, n2) {
    for (var o2 = n2 ? t4 : so(t4, r2), i2 = e2.length - 1; i2 >= 0; --i2) {
      var a2, l2 = e2[i2];
      if (l2 === "[]" && r2.parseArrays)
        a2 = [].concat(o2);
      else {
        a2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var c2 = l2.charAt(0) === "[" && l2.charAt(l2.length - 1) === "]" ? l2.slice(1, -1) : l2, s2 = parseInt(c2, 10);
        !r2.parseArrays && c2 === "" ? a2 = { 0: o2 } : !isNaN(s2) && l2 !== c2 && String(s2) === c2 && s2 >= 0 && r2.parseArrays && s2 <= r2.arrayLimit ? (a2 = [], a2[s2] = o2) : c2 !== "__proto__" && (a2[c2] = o2);
      }
      o2 = a2;
    }
    return o2;
  }, Ts = function(t4, r2, n2, o2) {
    if (t4) {
      var i2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, a2 = /(\[[^[\]]*])/, l2 = /(\[[^[\]]*])/g, c2 = n2.depth > 0 && a2.exec(i2), s2 = c2 ? i2.slice(0, c2.index) : i2, d2 = [];
      if (s2) {
        if (!n2.plainObjects && ur.call(Object.prototype, s2) && !n2.allowPrototypes)
          return;
        d2.push(s2);
      }
      for (var h2 = 0; n2.depth > 0 && (c2 = l2.exec(i2)) !== null && h2 < n2.depth; ) {
        if (h2 += 1, !n2.plainObjects && ur.call(Object.prototype, c2[1].slice(1, -1)) && !n2.allowPrototypes)
          return;
        d2.push(c2[1]);
      }
      return c2 && d2.push("[" + i2.slice(c2.index) + "]"), Rs(d2, r2, n2, o2);
    }
  }, Cs = function(t4) {
    if (!t4)
      return D2;
    if (t4.decoder !== null && t4.decoder !== void 0 && typeof t4.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof t4.charset < "u" && t4.charset !== "utf-8" && t4.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r2 = typeof t4.charset > "u" ? D2.charset : t4.charset;
    return { allowDots: typeof t4.allowDots > "u" ? D2.allowDots : !!t4.allowDots, allowPrototypes: typeof t4.allowPrototypes == "boolean" ? t4.allowPrototypes : D2.allowPrototypes, allowSparse: typeof t4.allowSparse == "boolean" ? t4.allowSparse : D2.allowSparse, arrayLimit: typeof t4.arrayLimit == "number" ? t4.arrayLimit : D2.arrayLimit, charset: r2, charsetSentinel: typeof t4.charsetSentinel == "boolean" ? t4.charsetSentinel : D2.charsetSentinel, comma: typeof t4.comma == "boolean" ? t4.comma : D2.comma, decoder: typeof t4.decoder == "function" ? t4.decoder : D2.decoder, delimiter: typeof t4.delimiter == "string" || Re.isRegExp(t4.delimiter) ? t4.delimiter : D2.delimiter, depth: typeof t4.depth == "number" || t4.depth === false ? +t4.depth : D2.depth, ignoreQueryPrefix: t4.ignoreQueryPrefix === true, interpretNumericEntities: typeof t4.interpretNumericEntities == "boolean" ? t4.interpretNumericEntities : D2.interpretNumericEntities, parameterLimit: typeof t4.parameterLimit == "number" ? t4.parameterLimit : D2.parameterLimit, parseArrays: t4.parseArrays !== false, plainObjects: typeof t4.plainObjects == "boolean" ? t4.plainObjects : D2.plainObjects, strictNullHandling: typeof t4.strictNullHandling == "boolean" ? t4.strictNullHandling : D2.strictNullHandling };
  };
  lo.exports = function(e2, t4) {
    var r2 = Cs(t4);
    if (e2 === "" || e2 === null || typeof e2 > "u")
      return r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var n2 = typeof e2 == "string" ? xs(e2, r2) : e2, o2 = r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), a2 = 0; a2 < i2.length; ++a2) {
      var l2 = i2[a2], c2 = Ts(l2, n2[l2], r2, typeof e2 == "string");
      o2 = Re.merge(o2, c2, r2);
    }
    return r2.allowSparse === true ? o2 : Re.compact(o2);
  };
});
var fo = k$1((Af, uo) => {
  var Fs = ao(), Is = co(), Ns = bt();
  uo.exports = { formats: Ns, parse: Is, stringify: Fs };
});
var mo = k$1((fr, po) => {
  (function(e2, t4) {
    typeof define == "function" && define.amd ? define(t4) : typeof fr == "object" ? po.exports = t4() : e2.NProgress = t4();
  })(fr, function() {
    var e2 = {};
    e2.version = "0.2.0";
    var t4 = e2.settings = { minimum: 0.08, easing: "ease", positionUsing: "", speed: 200, trickle: true, trickleRate: 0.02, trickleSpeed: 800, showSpinner: true, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' };
    e2.configure = function(u2) {
      var p2, f2;
      for (p2 in u2)
        f2 = u2[p2], f2 !== void 0 && u2.hasOwnProperty(p2) && (t4[p2] = f2);
      return this;
    }, e2.status = null, e2.set = function(u2) {
      var p2 = e2.isStarted();
      u2 = r2(u2, t4.minimum, 1), e2.status = u2 === 1 ? null : u2;
      var f2 = e2.render(!p2), y2 = f2.querySelector(t4.barSelector), P = t4.speed, g2 = t4.easing;
      return f2.offsetWidth, i2(function(E2) {
        t4.positionUsing === "" && (t4.positionUsing = e2.getPositioningCSS()), a2(y2, o2(u2, P, g2)), u2 === 1 ? (a2(f2, { transition: "none", opacity: 1 }), f2.offsetWidth, setTimeout(function() {
          a2(f2, { transition: "all " + P + "ms linear", opacity: 0 }), setTimeout(function() {
            e2.remove(), E2();
          }, P);
        }, P)) : setTimeout(E2, P);
      }), this;
    }, e2.isStarted = function() {
      return typeof e2.status == "number";
    }, e2.start = function() {
      e2.status || e2.set(0);
      var u2 = function() {
        setTimeout(function() {
          e2.status && (e2.trickle(), u2());
        }, t4.trickleSpeed);
      };
      return t4.trickle && u2(), this;
    }, e2.done = function(u2) {
      return !u2 && !e2.status ? this : e2.inc(0.3 + 0.5 * Math.random()).set(1);
    }, e2.inc = function(u2) {
      var p2 = e2.status;
      return p2 ? (typeof u2 != "number" && (u2 = (1 - p2) * r2(Math.random() * p2, 0.1, 0.95)), p2 = r2(p2 + u2, 0, 0.994), e2.set(p2)) : e2.start();
    }, e2.trickle = function() {
      return e2.inc(Math.random() * t4.trickleRate);
    }, function() {
      var u2 = 0, p2 = 0;
      e2.promise = function(f2) {
        return !f2 || f2.state() === "resolved" ? this : (p2 === 0 && e2.start(), u2++, p2++, f2.always(function() {
          p2--, p2 === 0 ? (u2 = 0, e2.done()) : e2.set((u2 - p2) / u2);
        }), this);
      };
    }(), e2.render = function(u2) {
      if (e2.isRendered())
        return document.getElementById("nprogress");
      c2(document.documentElement, "nprogress-busy");
      var p2 = document.createElement("div");
      p2.id = "nprogress", p2.innerHTML = t4.template;
      var f2 = p2.querySelector(t4.barSelector), y2 = u2 ? "-100" : n2(e2.status || 0), P = document.querySelector(t4.parent), g2;
      return a2(f2, { transition: "all 0 linear", transform: "translate3d(" + y2 + "%,0,0)" }), t4.showSpinner || (g2 = p2.querySelector(t4.spinnerSelector), g2 && h2(g2)), P != document.body && c2(P, "nprogress-custom-parent"), P.appendChild(p2), p2;
    }, e2.remove = function() {
      s2(document.documentElement, "nprogress-busy"), s2(document.querySelector(t4.parent), "nprogress-custom-parent");
      var u2 = document.getElementById("nprogress");
      u2 && h2(u2);
    }, e2.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, e2.getPositioningCSS = function() {
      var u2 = document.body.style, p2 = "WebkitTransform" in u2 ? "Webkit" : "MozTransform" in u2 ? "Moz" : "msTransform" in u2 ? "ms" : "OTransform" in u2 ? "O" : "";
      return p2 + "Perspective" in u2 ? "translate3d" : p2 + "Transform" in u2 ? "translate" : "margin";
    };
    function r2(u2, p2, f2) {
      return u2 < p2 ? p2 : u2 > f2 ? f2 : u2;
    }
    function n2(u2) {
      return (-1 + u2) * 100;
    }
    function o2(u2, p2, f2) {
      var y2;
      return t4.positionUsing === "translate3d" ? y2 = { transform: "translate3d(" + n2(u2) + "%,0,0)" } : t4.positionUsing === "translate" ? y2 = { transform: "translate(" + n2(u2) + "%,0)" } : y2 = { "margin-left": n2(u2) + "%" }, y2.transition = "all " + p2 + "ms " + f2, y2;
    }
    var i2 = function() {
      var u2 = [];
      function p2() {
        var f2 = u2.shift();
        f2 && f2(p2);
      }
      return function(f2) {
        u2.push(f2), u2.length == 1 && p2();
      };
    }(), a2 = function() {
      var u2 = ["Webkit", "O", "Moz", "ms"], p2 = {};
      function f2(E2) {
        return E2.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(R2, C2) {
          return C2.toUpperCase();
        });
      }
      function y2(E2) {
        var R2 = document.body.style;
        if (E2 in R2)
          return E2;
        for (var C2 = u2.length, T2 = E2.charAt(0).toUpperCase() + E2.slice(1), I2; C2--; )
          if (I2 = u2[C2] + T2, I2 in R2)
            return I2;
        return E2;
      }
      function P(E2) {
        return E2 = f2(E2), p2[E2] || (p2[E2] = y2(E2));
      }
      function g2(E2, R2, C2) {
        R2 = P(R2), E2.style[R2] = C2;
      }
      return function(E2, R2) {
        var C2 = arguments, T2, I2;
        if (C2.length == 2)
          for (T2 in R2)
            I2 = R2[T2], I2 !== void 0 && R2.hasOwnProperty(T2) && g2(E2, T2, I2);
        else
          g2(E2, C2[1], C2[2]);
      };
    }();
    function l2(u2, p2) {
      var f2 = typeof u2 == "string" ? u2 : d2(u2);
      return f2.indexOf(" " + p2 + " ") >= 0;
    }
    function c2(u2, p2) {
      var f2 = d2(u2), y2 = f2 + p2;
      l2(f2, p2) || (u2.className = y2.substring(1));
    }
    function s2(u2, p2) {
      var f2 = d2(u2), y2;
      l2(u2, p2) && (y2 = f2.replace(" " + p2 + " ", " "), u2.className = y2.substring(1, y2.length - 1));
    }
    function d2(u2) {
      return (" " + (u2.className || "") + " ").replace(/\s+/gi, " ");
    }
    function h2(u2) {
      u2 && u2.parentNode && u2.parentNode.removeChild(u2);
    }
    return e2;
  });
});
function Fe(e2, t4) {
  return function() {
    return e2.apply(t4, arguments);
  };
}
var { toString: jo } = Object.prototype, { getPrototypeOf: Rt } = Object, Xe = ((e2) => (t4) => {
  let r2 = jo.call(t4);
  return e2[r2] || (e2[r2] = r2.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), W = (e2) => (e2 = e2.toLowerCase(), (t4) => Xe(t4) === e2), Ye = (e2) => (t4) => typeof t4 === e2, { isArray: me } = Array, Ie = Ye("undefined");
function Vo(e2) {
  return e2 !== null && !Ie(e2) && e2.constructor !== null && !Ie(e2.constructor) && V(e2.constructor.isBuffer) && e2.constructor.isBuffer(e2);
}
var Sr = W("ArrayBuffer");
function $o(e2) {
  let t4;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t4 = ArrayBuffer.isView(e2) : t4 = e2 && e2.buffer && Sr(e2.buffer), t4;
}
var qo = Ye("string"), V = Ye("function"), br = Ye("number"), Ze = (e2) => e2 !== null && typeof e2 == "object", Wo = (e2) => e2 === true || e2 === false, Qe = (e2) => {
  if (Xe(e2) !== "object")
    return false;
  let t4 = Rt(e2);
  return (t4 === null || t4 === Object.prototype || Object.getPrototypeOf(t4) === null) && !(Symbol.toStringTag in e2) && !(Symbol.iterator in e2);
}, zo = W("Date"), Jo = W("File"), Go = W("Blob"), Ko = W("FileList"), Qo = (e2) => Ze(e2) && V(e2.pipe), Xo = (e2) => {
  let t4;
  return e2 && (typeof FormData == "function" && e2 instanceof FormData || V(e2.append) && ((t4 = Xe(e2)) === "formdata" || t4 === "object" && V(e2.toString) && e2.toString() === "[object FormData]"));
}, Yo = W("URLSearchParams"), Zo = (e2) => e2.trim ? e2.trim() : e2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ne(e2, t4, { allOwnKeys: r2 = false } = {}) {
  if (e2 === null || typeof e2 > "u")
    return;
  let n2, o2;
  if (typeof e2 != "object" && (e2 = [e2]), me(e2))
    for (n2 = 0, o2 = e2.length; n2 < o2; n2++)
      t4.call(null, e2[n2], n2, e2);
  else {
    let i2 = r2 ? Object.getOwnPropertyNames(e2) : Object.keys(e2), a2 = i2.length, l2;
    for (n2 = 0; n2 < a2; n2++)
      l2 = i2[n2], t4.call(null, e2[l2], l2, e2);
  }
}
function wr(e2, t4) {
  t4 = t4.toLowerCase();
  let r2 = Object.keys(e2), n2 = r2.length, o2;
  for (; n2-- > 0; )
    if (o2 = r2[n2], t4 === o2.toLowerCase())
      return o2;
  return null;
}
var Er = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Pr = (e2) => !Ie(e2) && e2 !== Er;
function xt() {
  let { caseless: e2 } = Pr(this) && this || {}, t4 = {}, r2 = (n2, o2) => {
    let i2 = e2 && wr(t4, o2) || o2;
    Qe(t4[i2]) && Qe(n2) ? t4[i2] = xt(t4[i2], n2) : Qe(n2) ? t4[i2] = xt({}, n2) : me(n2) ? t4[i2] = n2.slice() : t4[i2] = n2;
  };
  for (let n2 = 0, o2 = arguments.length; n2 < o2; n2++)
    arguments[n2] && Ne(arguments[n2], r2);
  return t4;
}
var ei = (e2, t4, r2, { allOwnKeys: n2 } = {}) => (Ne(t4, (o2, i2) => {
  r2 && V(o2) ? e2[i2] = Fe(o2, r2) : e2[i2] = o2;
}, { allOwnKeys: n2 }), e2), ti = (e2) => (e2.charCodeAt(0) === 65279 && (e2 = e2.slice(1)), e2), ri = (e2, t4, r2, n2) => {
  e2.prototype = Object.create(t4.prototype, n2), e2.prototype.constructor = e2, Object.defineProperty(e2, "super", { value: t4.prototype }), r2 && Object.assign(e2.prototype, r2);
}, ni = (e2, t4, r2, n2) => {
  let o2, i2, a2, l2 = {};
  if (t4 = t4 || {}, e2 == null)
    return t4;
  do {
    for (o2 = Object.getOwnPropertyNames(e2), i2 = o2.length; i2-- > 0; )
      a2 = o2[i2], (!n2 || n2(a2, e2, t4)) && !l2[a2] && (t4[a2] = e2[a2], l2[a2] = true);
    e2 = r2 !== false && Rt(e2);
  } while (e2 && (!r2 || r2(e2, t4)) && e2 !== Object.prototype);
  return t4;
}, oi = (e2, t4, r2) => {
  e2 = String(e2), (r2 === void 0 || r2 > e2.length) && (r2 = e2.length), r2 -= t4.length;
  let n2 = e2.indexOf(t4, r2);
  return n2 !== -1 && n2 === r2;
}, ii = (e2) => {
  if (!e2)
    return null;
  if (me(e2))
    return e2;
  let t4 = e2.length;
  if (!br(t4))
    return null;
  let r2 = new Array(t4);
  for (; t4-- > 0; )
    r2[t4] = e2[t4];
  return r2;
}, ai = ((e2) => (t4) => e2 && t4 instanceof e2)(typeof Uint8Array < "u" && Rt(Uint8Array)), si = (e2, t4) => {
  let n2 = (e2 && e2[Symbol.iterator]).call(e2), o2;
  for (; (o2 = n2.next()) && !o2.done; ) {
    let i2 = o2.value;
    t4.call(e2, i2[0], i2[1]);
  }
}, li = (e2, t4) => {
  let r2, n2 = [];
  for (; (r2 = e2.exec(t4)) !== null; )
    n2.push(r2);
  return n2;
}, ci = W("HTMLFormElement"), ui = (e2) => e2.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r2, n2, o2) {
  return n2.toUpperCase() + o2;
}), gr = (({ hasOwnProperty: e2 }) => (t4, r2) => e2.call(t4, r2))(Object.prototype), fi = W("RegExp"), Ar = (e2, t4) => {
  let r2 = Object.getOwnPropertyDescriptors(e2), n2 = {};
  Ne(r2, (o2, i2) => {
    t4(o2, i2, e2) !== false && (n2[i2] = o2);
  }), Object.defineProperties(e2, n2);
}, pi = (e2) => {
  Ar(e2, (t4, r2) => {
    if (V(e2) && ["arguments", "caller", "callee"].indexOf(r2) !== -1)
      return false;
    let n2 = e2[r2];
    if (V(n2)) {
      if (t4.enumerable = false, "writable" in t4) {
        t4.writable = false;
        return;
      }
      t4.set || (t4.set = () => {
        throw Error("Can not rewrite read-only method '" + r2 + "'");
      });
    }
  });
}, di = (e2, t4) => {
  let r2 = {}, n2 = (o2) => {
    o2.forEach((i2) => {
      r2[i2] = true;
    });
  };
  return me(e2) ? n2(e2) : n2(String(e2).split(t4)), r2;
}, mi = () => {
}, hi = (e2, t4) => (e2 = +e2, Number.isFinite(e2) ? e2 : t4), Ot = "abcdefghijklmnopqrstuvwxyz", vr = "0123456789", Or = { DIGIT: vr, ALPHA: Ot, ALPHA_DIGIT: Ot + Ot.toUpperCase() + vr }, yi = (e2 = 16, t4 = Or.ALPHA_DIGIT) => {
  let r2 = "", { length: n2 } = t4;
  for (; e2--; )
    r2 += t4[Math.random() * n2 | 0];
  return r2;
};
function gi(e2) {
  return !!(e2 && V(e2.append) && e2[Symbol.toStringTag] === "FormData" && e2[Symbol.iterator]);
}
var vi = (e2) => {
  let t4 = new Array(10), r2 = (n2, o2) => {
    if (Ze(n2)) {
      if (t4.indexOf(n2) >= 0)
        return;
      if (!("toJSON" in n2)) {
        t4[o2] = n2;
        let i2 = me(n2) ? [] : {};
        return Ne(n2, (a2, l2) => {
          let c2 = r2(a2, o2 + 1);
          !Ie(c2) && (i2[l2] = c2);
        }), t4[o2] = void 0, i2;
      }
    }
    return n2;
  };
  return r2(e2, 0);
}, Si = W("AsyncFunction"), bi = (e2) => e2 && (Ze(e2) || V(e2)) && V(e2.then) && V(e2.catch), m$1 = { isArray: me, isArrayBuffer: Sr, isBuffer: Vo, isFormData: Xo, isArrayBufferView: $o, isString: qo, isNumber: br, isBoolean: Wo, isObject: Ze, isPlainObject: Qe, isUndefined: Ie, isDate: zo, isFile: Jo, isBlob: Go, isRegExp: fi, isFunction: V, isStream: Qo, isURLSearchParams: Yo, isTypedArray: ai, isFileList: Ko, forEach: Ne, merge: xt, extend: ei, trim: Zo, stripBOM: ti, inherits: ri, toFlatObject: ni, kindOf: Xe, kindOfTest: W, endsWith: oi, toArray: ii, forEachEntry: si, matchAll: li, isHTMLForm: ci, hasOwnProperty: gr, hasOwnProp: gr, reduceDescriptors: Ar, freezeMethods: pi, toObjectSet: di, toCamelCase: ui, noop: mi, toFiniteNumber: hi, findKey: wr, global: Er, isContextDefined: Pr, ALPHABET: Or, generateString: yi, isSpecCompliantForm: gi, toJSONObject: vi, isAsyncFn: Si, isThenable: bi };
function he(e2, t4, r2, n2, o2) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e2, this.name = "AxiosError", t4 && (this.code = t4), r2 && (this.config = r2), n2 && (this.request = n2), o2 && (this.response = o2);
}
m$1.inherits(he, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: m$1.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
var xr = he.prototype, Rr = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e2) => {
  Rr[e2] = { value: e2 };
});
Object.defineProperties(he, Rr);
Object.defineProperty(xr, "isAxiosError", { value: true });
he.from = (e2, t4, r2, n2, o2, i2) => {
  let a2 = Object.create(xr);
  return m$1.toFlatObject(e2, a2, function(c2) {
    return c2 !== Error.prototype;
  }, (l2) => l2 !== "isAxiosError"), he.call(a2, e2.message, t4, r2, n2, o2), a2.cause = e2, a2.name = e2.name, i2 && Object.assign(a2, i2), a2;
};
var O$1 = he;
var et = null;
function Tt(e2) {
  return m$1.isPlainObject(e2) || m$1.isArray(e2);
}
function Cr(e2) {
  return m$1.endsWith(e2, "[]") ? e2.slice(0, -2) : e2;
}
function Tr(e2, t4, r2) {
  return e2 ? e2.concat(t4).map(function(o2, i2) {
    return o2 = Cr(o2), !r2 && i2 ? "[" + o2 + "]" : o2;
  }).join(r2 ? "." : "") : t4;
}
function wi(e2) {
  return m$1.isArray(e2) && !e2.some(Tt);
}
var Ei = m$1.toFlatObject(m$1, {}, null, function(t4) {
  return /^is[A-Z]/.test(t4);
});
function Pi(e2, t4, r2) {
  if (!m$1.isObject(e2))
    throw new TypeError("target must be an object");
  t4 = t4 || new FormData(), r2 = m$1.toFlatObject(r2, { metaTokens: true, dots: false, indexes: false }, false, function(y2, P) {
    return !m$1.isUndefined(P[y2]);
  });
  let n2 = r2.metaTokens, o2 = r2.visitor || d2, i2 = r2.dots, a2 = r2.indexes, c2 = (r2.Blob || typeof Blob < "u" && Blob) && m$1.isSpecCompliantForm(t4);
  if (!m$1.isFunction(o2))
    throw new TypeError("visitor must be a function");
  function s2(f2) {
    if (f2 === null)
      return "";
    if (m$1.isDate(f2))
      return f2.toISOString();
    if (!c2 && m$1.isBlob(f2))
      throw new O$1("Blob is not supported. Use a Buffer instead.");
    return m$1.isArrayBuffer(f2) || m$1.isTypedArray(f2) ? c2 && typeof Blob == "function" ? new Blob([f2]) : Buffer.from(f2) : f2;
  }
  function d2(f2, y2, P) {
    let g2 = f2;
    if (f2 && !P && typeof f2 == "object") {
      if (m$1.endsWith(y2, "{}"))
        y2 = n2 ? y2 : y2.slice(0, -2), f2 = JSON.stringify(f2);
      else if (m$1.isArray(f2) && wi(f2) || (m$1.isFileList(f2) || m$1.endsWith(y2, "[]")) && (g2 = m$1.toArray(f2)))
        return y2 = Cr(y2), g2.forEach(function(R2, C2) {
          !(m$1.isUndefined(R2) || R2 === null) && t4.append(a2 === true ? Tr([y2], C2, i2) : a2 === null ? y2 : y2 + "[]", s2(R2));
        }), false;
    }
    return Tt(f2) ? true : (t4.append(Tr(P, y2, i2), s2(f2)), false);
  }
  let h2 = [], u2 = Object.assign(Ei, { defaultVisitor: d2, convertValue: s2, isVisitable: Tt });
  function p2(f2, y2) {
    if (!m$1.isUndefined(f2)) {
      if (h2.indexOf(f2) !== -1)
        throw Error("Circular reference detected in " + y2.join("."));
      h2.push(f2), m$1.forEach(f2, function(g2, E2) {
        (!(m$1.isUndefined(g2) || g2 === null) && o2.call(t4, g2, m$1.isString(E2) ? E2.trim() : E2, y2, u2)) === true && p2(g2, y2 ? y2.concat(E2) : [E2]);
      }), h2.pop();
    }
  }
  if (!m$1.isObject(e2))
    throw new TypeError("data must be an object");
  return p2(e2), t4;
}
var te = Pi;
function Fr(e2) {
  let t4 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e2).replace(/[!'()~]|%20|%00/g, function(n2) {
    return t4[n2];
  });
}
function Ir(e2, t4) {
  this._pairs = [], e2 && te(e2, this, t4);
}
var Nr = Ir.prototype;
Nr.append = function(t4, r2) {
  this._pairs.push([t4, r2]);
};
Nr.toString = function(t4) {
  let r2 = t4 ? function(n2) {
    return t4.call(this, n2, Fr);
  } : Fr;
  return this._pairs.map(function(o2) {
    return r2(o2[0]) + "=" + r2(o2[1]);
  }, "").join("&");
};
var tt = Ir;
function Ai(e2) {
  return encodeURIComponent(e2).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ke(e2, t4, r2) {
  if (!t4)
    return e2;
  let n2 = r2 && r2.encode || Ai, o2 = r2 && r2.serialize, i2;
  if (o2 ? i2 = o2(t4, r2) : i2 = m$1.isURLSearchParams(t4) ? t4.toString() : new tt(t4, r2).toString(n2), i2) {
    let a2 = e2.indexOf("#");
    a2 !== -1 && (e2 = e2.slice(0, a2)), e2 += (e2.indexOf("?") === -1 ? "?" : "&") + i2;
  }
  return e2;
}
var Ct = class {
  constructor() {
    this.handlers = [];
  }
  use(t4, r2, n2) {
    return this.handlers.push({ fulfilled: t4, rejected: r2, synchronous: n2 ? n2.synchronous : false, runWhen: n2 ? n2.runWhen : null }), this.handlers.length - 1;
  }
  eject(t4) {
    this.handlers[t4] && (this.handlers[t4] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t4) {
    m$1.forEach(this.handlers, function(n2) {
      n2 !== null && t4(n2);
    });
  }
}, Ft = Ct;
var rt = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false };
var kr = typeof URLSearchParams < "u" ? URLSearchParams : tt;
var Lr = typeof FormData < "u" ? FormData : null;
var Mr = typeof Blob < "u" ? Blob : null;
var Oi = (() => {
  let e2;
  return typeof navigator < "u" && ((e2 = navigator.product) === "ReactNative" || e2 === "NativeScript" || e2 === "NS") ? false : typeof window < "u" && typeof document < "u";
})(), xi = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), B = { isBrowser: true, classes: { URLSearchParams: kr, FormData: Lr, Blob: Mr }, isStandardBrowserEnv: Oi, isStandardBrowserWebWorkerEnv: xi, protocols: ["http", "https", "file", "blob", "url", "data"] };
function It(e2, t4) {
  return te(e2, new B.classes.URLSearchParams(), Object.assign({ visitor: function(r2, n2, o2, i2) {
    return B.isNode && m$1.isBuffer(r2) ? (this.append(n2, r2.toString("base64")), false) : i2.defaultVisitor.apply(this, arguments);
  } }, t4));
}
function Ri(e2) {
  return m$1.matchAll(/\w+|\[(\w*)]/g, e2).map((t4) => t4[0] === "[]" ? "" : t4[1] || t4[0]);
}
function Ti(e2) {
  let t4 = {}, r2 = Object.keys(e2), n2, o2 = r2.length, i2;
  for (n2 = 0; n2 < o2; n2++)
    i2 = r2[n2], t4[i2] = e2[i2];
  return t4;
}
function Ci(e2) {
  function t4(r2, n2, o2, i2) {
    let a2 = r2[i2++], l2 = Number.isFinite(+a2), c2 = i2 >= r2.length;
    return a2 = !a2 && m$1.isArray(o2) ? o2.length : a2, c2 ? (m$1.hasOwnProp(o2, a2) ? o2[a2] = [o2[a2], n2] : o2[a2] = n2, !l2) : ((!o2[a2] || !m$1.isObject(o2[a2])) && (o2[a2] = []), t4(r2, n2, o2[a2], i2) && m$1.isArray(o2[a2]) && (o2[a2] = Ti(o2[a2])), !l2);
  }
  if (m$1.isFormData(e2) && m$1.isFunction(e2.entries)) {
    let r2 = {};
    return m$1.forEachEntry(e2, (n2, o2) => {
      t4(Ri(n2), o2, r2, 0);
    }), r2;
  }
  return null;
}
var nt = Ci;
var Fi = { "Content-Type": void 0 };
function Ii(e2, t4, r2) {
  if (m$1.isString(e2))
    try {
      return (t4 || JSON.parse)(e2), m$1.trim(e2);
    } catch (n2) {
      if (n2.name !== "SyntaxError")
        throw n2;
    }
  return (r2 || JSON.stringify)(e2);
}
var ot = { transitional: rt, adapter: ["xhr", "http"], transformRequest: [function(t4, r2) {
  let n2 = r2.getContentType() || "", o2 = n2.indexOf("application/json") > -1, i2 = m$1.isObject(t4);
  if (i2 && m$1.isHTMLForm(t4) && (t4 = new FormData(t4)), m$1.isFormData(t4))
    return o2 && o2 ? JSON.stringify(nt(t4)) : t4;
  if (m$1.isArrayBuffer(t4) || m$1.isBuffer(t4) || m$1.isStream(t4) || m$1.isFile(t4) || m$1.isBlob(t4))
    return t4;
  if (m$1.isArrayBufferView(t4))
    return t4.buffer;
  if (m$1.isURLSearchParams(t4))
    return r2.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), t4.toString();
  let l2;
  if (i2) {
    if (n2.indexOf("application/x-www-form-urlencoded") > -1)
      return It(t4, this.formSerializer).toString();
    if ((l2 = m$1.isFileList(t4)) || n2.indexOf("multipart/form-data") > -1) {
      let c2 = this.env && this.env.FormData;
      return te(l2 ? { "files[]": t4 } : t4, c2 && new c2(), this.formSerializer);
    }
  }
  return i2 || o2 ? (r2.setContentType("application/json", false), Ii(t4)) : t4;
}], transformResponse: [function(t4) {
  let r2 = this.transitional || ot.transitional, n2 = r2 && r2.forcedJSONParsing, o2 = this.responseType === "json";
  if (t4 && m$1.isString(t4) && (n2 && !this.responseType || o2)) {
    let a2 = !(r2 && r2.silentJSONParsing) && o2;
    try {
      return JSON.parse(t4);
    } catch (l2) {
      if (a2)
        throw l2.name === "SyntaxError" ? O$1.from(l2, O$1.ERR_BAD_RESPONSE, this, null, this.response) : l2;
    }
  }
  return t4;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: B.classes.FormData, Blob: B.classes.Blob }, validateStatus: function(t4) {
  return t4 >= 200 && t4 < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*" } } };
m$1.forEach(["delete", "get", "head"], function(t4) {
  ot.headers[t4] = {};
});
m$1.forEach(["post", "put", "patch"], function(t4) {
  ot.headers[t4] = m$1.merge(Fi);
});
var ye = ot;
var Ni = m$1.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), Dr = (e2) => {
  let t4 = {}, r2, n2, o2;
  return e2 && e2.split(`
`).forEach(function(a2) {
    o2 = a2.indexOf(":"), r2 = a2.substring(0, o2).trim().toLowerCase(), n2 = a2.substring(o2 + 1).trim(), !(!r2 || t4[r2] && Ni[r2]) && (r2 === "set-cookie" ? t4[r2] ? t4[r2].push(n2) : t4[r2] = [n2] : t4[r2] = t4[r2] ? t4[r2] + ", " + n2 : n2);
  }), t4;
};
var Br = Symbol("internals");
function Le(e2) {
  return e2 && String(e2).trim().toLowerCase();
}
function it(e2) {
  return e2 === false || e2 == null ? e2 : m$1.isArray(e2) ? e2.map(it) : String(e2);
}
function ki(e2) {
  let t4 = /* @__PURE__ */ Object.create(null), r2 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, n2;
  for (; n2 = r2.exec(e2); )
    t4[n2[1]] = n2[2];
  return t4;
}
var Li = (e2) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e2.trim());
function Nt(e2, t4, r2, n2, o2) {
  if (m$1.isFunction(n2))
    return n2.call(this, t4, r2);
  if (o2 && (t4 = r2), !!m$1.isString(t4)) {
    if (m$1.isString(n2))
      return t4.indexOf(n2) !== -1;
    if (m$1.isRegExp(n2))
      return n2.test(t4);
  }
}
function Mi(e2) {
  return e2.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t4, r2, n2) => r2.toUpperCase() + n2);
}
function Di(e2, t4) {
  let r2 = m$1.toCamelCase(" " + t4);
  ["get", "set", "has"].forEach((n2) => {
    Object.defineProperty(e2, n2 + r2, { value: function(o2, i2, a2) {
      return this[n2].call(this, t4, o2, i2, a2);
    }, configurable: true });
  });
}
var ge = class {
  constructor(t4) {
    t4 && this.set(t4);
  }
  set(t4, r2, n2) {
    let o2 = this;
    function i2(l2, c2, s2) {
      let d2 = Le(c2);
      if (!d2)
        throw new Error("header name must be a non-empty string");
      let h2 = m$1.findKey(o2, d2);
      (!h2 || o2[h2] === void 0 || s2 === true || s2 === void 0 && o2[h2] !== false) && (o2[h2 || c2] = it(l2));
    }
    let a2 = (l2, c2) => m$1.forEach(l2, (s2, d2) => i2(s2, d2, c2));
    return m$1.isPlainObject(t4) || t4 instanceof this.constructor ? a2(t4, r2) : m$1.isString(t4) && (t4 = t4.trim()) && !Li(t4) ? a2(Dr(t4), r2) : t4 != null && i2(r2, t4, n2), this;
  }
  get(t4, r2) {
    if (t4 = Le(t4), t4) {
      let n2 = m$1.findKey(this, t4);
      if (n2) {
        let o2 = this[n2];
        if (!r2)
          return o2;
        if (r2 === true)
          return ki(o2);
        if (m$1.isFunction(r2))
          return r2.call(this, o2, n2);
        if (m$1.isRegExp(r2))
          return r2.exec(o2);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t4, r2) {
    if (t4 = Le(t4), t4) {
      let n2 = m$1.findKey(this, t4);
      return !!(n2 && this[n2] !== void 0 && (!r2 || Nt(this, this[n2], n2, r2)));
    }
    return false;
  }
  delete(t4, r2) {
    let n2 = this, o2 = false;
    function i2(a2) {
      if (a2 = Le(a2), a2) {
        let l2 = m$1.findKey(n2, a2);
        l2 && (!r2 || Nt(n2, n2[l2], l2, r2)) && (delete n2[l2], o2 = true);
      }
    }
    return m$1.isArray(t4) ? t4.forEach(i2) : i2(t4), o2;
  }
  clear(t4) {
    let r2 = Object.keys(this), n2 = r2.length, o2 = false;
    for (; n2--; ) {
      let i2 = r2[n2];
      (!t4 || Nt(this, this[i2], i2, t4, true)) && (delete this[i2], o2 = true);
    }
    return o2;
  }
  normalize(t4) {
    let r2 = this, n2 = {};
    return m$1.forEach(this, (o2, i2) => {
      let a2 = m$1.findKey(n2, i2);
      if (a2) {
        r2[a2] = it(o2), delete r2[i2];
        return;
      }
      let l2 = t4 ? Mi(i2) : String(i2).trim();
      l2 !== i2 && delete r2[i2], r2[l2] = it(o2), n2[l2] = true;
    }), this;
  }
  concat(...t4) {
    return this.constructor.concat(this, ...t4);
  }
  toJSON(t4) {
    let r2 = /* @__PURE__ */ Object.create(null);
    return m$1.forEach(this, (n2, o2) => {
      n2 != null && n2 !== false && (r2[o2] = t4 && m$1.isArray(n2) ? n2.join(", ") : n2);
    }), r2;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t4, r2]) => t4 + ": " + r2).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t4) {
    return t4 instanceof this ? t4 : new this(t4);
  }
  static concat(t4, ...r2) {
    let n2 = new this(t4);
    return r2.forEach((o2) => n2.set(o2)), n2;
  }
  static accessor(t4) {
    let n2 = (this[Br] = this[Br] = { accessors: {} }).accessors, o2 = this.prototype;
    function i2(a2) {
      let l2 = Le(a2);
      n2[l2] || (Di(o2, a2), n2[l2] = true);
    }
    return m$1.isArray(t4) ? t4.forEach(i2) : i2(t4), this;
  }
};
ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m$1.freezeMethods(ge.prototype);
m$1.freezeMethods(ge);
var H = ge;
function Me(e2, t4) {
  let r2 = this || ye, n2 = t4 || r2, o2 = H.from(n2.headers), i2 = n2.data;
  return m$1.forEach(e2, function(l2) {
    i2 = l2.call(r2, i2, o2.normalize(), t4 ? t4.status : void 0);
  }), o2.normalize(), i2;
}
function De(e2) {
  return !!(e2 && e2.__CANCEL__);
}
function Ur(e2, t4, r2) {
  O$1.call(this, e2 ?? "canceled", O$1.ERR_CANCELED, t4, r2), this.name = "CanceledError";
}
m$1.inherits(Ur, O$1, { __CANCEL__: true });
var re = Ur;
function kt(e2, t4, r2) {
  let n2 = r2.config.validateStatus;
  !r2.status || !n2 || n2(r2.status) ? e2(r2) : t4(new O$1("Request failed with status code " + r2.status, [O$1.ERR_BAD_REQUEST, O$1.ERR_BAD_RESPONSE][Math.floor(r2.status / 100) - 4], r2.config, r2.request, r2));
}
var _r = B.isStandardBrowserEnv ? function() {
  return { write: function(r2, n2, o2, i2, a2, l2) {
    let c2 = [];
    c2.push(r2 + "=" + encodeURIComponent(n2)), m$1.isNumber(o2) && c2.push("expires=" + new Date(o2).toGMTString()), m$1.isString(i2) && c2.push("path=" + i2), m$1.isString(a2) && c2.push("domain=" + a2), l2 === true && c2.push("secure"), document.cookie = c2.join("; ");
  }, read: function(r2) {
    let n2 = document.cookie.match(new RegExp("(^|;\\s*)(" + r2 + ")=([^;]*)"));
    return n2 ? decodeURIComponent(n2[3]) : null;
  }, remove: function(r2) {
    this.write(r2, "", Date.now() - 864e5);
  } };
}() : function() {
  return { write: function() {
  }, read: function() {
    return null;
  }, remove: function() {
  } };
}();
function Lt(e2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e2);
}
function Mt(e2, t4) {
  return t4 ? e2.replace(/\/+$/, "") + "/" + t4.replace(/^\/+/, "") : e2;
}
function Be(e2, t4) {
  return e2 && !Lt(t4) ? Mt(e2, t4) : t4;
}
var Hr = B.isStandardBrowserEnv ? function() {
  let t4 = /(msie|trident)/i.test(navigator.userAgent), r2 = document.createElement("a"), n2;
  function o2(i2) {
    let a2 = i2;
    return t4 && (r2.setAttribute("href", a2), a2 = r2.href), r2.setAttribute("href", a2), { href: r2.href, protocol: r2.protocol ? r2.protocol.replace(/:$/, "") : "", host: r2.host, search: r2.search ? r2.search.replace(/^\?/, "") : "", hash: r2.hash ? r2.hash.replace(/^#/, "") : "", hostname: r2.hostname, port: r2.port, pathname: r2.pathname.charAt(0) === "/" ? r2.pathname : "/" + r2.pathname };
  }
  return n2 = o2(window.location.href), function(a2) {
    let l2 = m$1.isString(a2) ? o2(a2) : a2;
    return l2.protocol === n2.protocol && l2.host === n2.host;
  };
}() : function() {
  return function() {
    return true;
  };
}();
function Dt(e2) {
  let t4 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e2);
  return t4 && t4[1] || "";
}
function Bi(e2, t4) {
  e2 = e2 || 10;
  let r2 = new Array(e2), n2 = new Array(e2), o2 = 0, i2 = 0, a2;
  return t4 = t4 !== void 0 ? t4 : 1e3, function(c2) {
    let s2 = Date.now(), d2 = n2[i2];
    a2 || (a2 = s2), r2[o2] = c2, n2[o2] = s2;
    let h2 = i2, u2 = 0;
    for (; h2 !== o2; )
      u2 += r2[h2++], h2 = h2 % e2;
    if (o2 = (o2 + 1) % e2, o2 === i2 && (i2 = (i2 + 1) % e2), s2 - a2 < t4)
      return;
    let p2 = d2 && s2 - d2;
    return p2 ? Math.round(u2 * 1e3 / p2) : void 0;
  };
}
var jr = Bi;
function Vr(e2, t4) {
  let r2 = 0, n2 = jr(50, 250);
  return (o2) => {
    let i2 = o2.loaded, a2 = o2.lengthComputable ? o2.total : void 0, l2 = i2 - r2, c2 = n2(l2), s2 = i2 <= a2;
    r2 = i2;
    let d2 = { loaded: i2, total: a2, progress: a2 ? i2 / a2 : void 0, bytes: l2, rate: c2 || void 0, estimated: c2 && a2 && s2 ? (a2 - i2) / c2 : void 0, event: o2 };
    d2[t4 ? "download" : "upload"] = true, e2(d2);
  };
}
var Ui = typeof XMLHttpRequest < "u", $r = Ui && function(e2) {
  return new Promise(function(r2, n2) {
    let o2 = e2.data, i2 = H.from(e2.headers).normalize(), a2 = e2.responseType, l2;
    function c2() {
      e2.cancelToken && e2.cancelToken.unsubscribe(l2), e2.signal && e2.signal.removeEventListener("abort", l2);
    }
    m$1.isFormData(o2) && (B.isStandardBrowserEnv || B.isStandardBrowserWebWorkerEnv ? i2.setContentType(false) : i2.setContentType("multipart/form-data;", false));
    let s2 = new XMLHttpRequest();
    if (e2.auth) {
      let p2 = e2.auth.username || "", f2 = e2.auth.password ? unescape(encodeURIComponent(e2.auth.password)) : "";
      i2.set("Authorization", "Basic " + btoa(p2 + ":" + f2));
    }
    let d2 = Be(e2.baseURL, e2.url);
    s2.open(e2.method.toUpperCase(), ke(d2, e2.params, e2.paramsSerializer), true), s2.timeout = e2.timeout;
    function h2() {
      if (!s2)
        return;
      let p2 = H.from("getAllResponseHeaders" in s2 && s2.getAllResponseHeaders()), y2 = { data: !a2 || a2 === "text" || a2 === "json" ? s2.responseText : s2.response, status: s2.status, statusText: s2.statusText, headers: p2, config: e2, request: s2 };
      kt(function(g2) {
        r2(g2), c2();
      }, function(g2) {
        n2(g2), c2();
      }, y2), s2 = null;
    }
    if ("onloadend" in s2 ? s2.onloadend = h2 : s2.onreadystatechange = function() {
      !s2 || s2.readyState !== 4 || s2.status === 0 && !(s2.responseURL && s2.responseURL.indexOf("file:") === 0) || setTimeout(h2);
    }, s2.onabort = function() {
      s2 && (n2(new O$1("Request aborted", O$1.ECONNABORTED, e2, s2)), s2 = null);
    }, s2.onerror = function() {
      n2(new O$1("Network Error", O$1.ERR_NETWORK, e2, s2)), s2 = null;
    }, s2.ontimeout = function() {
      let f2 = e2.timeout ? "timeout of " + e2.timeout + "ms exceeded" : "timeout exceeded", y2 = e2.transitional || rt;
      e2.timeoutErrorMessage && (f2 = e2.timeoutErrorMessage), n2(new O$1(f2, y2.clarifyTimeoutError ? O$1.ETIMEDOUT : O$1.ECONNABORTED, e2, s2)), s2 = null;
    }, B.isStandardBrowserEnv) {
      let p2 = (e2.withCredentials || Hr(d2)) && e2.xsrfCookieName && _r.read(e2.xsrfCookieName);
      p2 && i2.set(e2.xsrfHeaderName, p2);
    }
    o2 === void 0 && i2.setContentType(null), "setRequestHeader" in s2 && m$1.forEach(i2.toJSON(), function(f2, y2) {
      s2.setRequestHeader(y2, f2);
    }), m$1.isUndefined(e2.withCredentials) || (s2.withCredentials = !!e2.withCredentials), a2 && a2 !== "json" && (s2.responseType = e2.responseType), typeof e2.onDownloadProgress == "function" && s2.addEventListener("progress", Vr(e2.onDownloadProgress, true)), typeof e2.onUploadProgress == "function" && s2.upload && s2.upload.addEventListener("progress", Vr(e2.onUploadProgress)), (e2.cancelToken || e2.signal) && (l2 = (p2) => {
      s2 && (n2(!p2 || p2.type ? new re(null, e2, s2) : p2), s2.abort(), s2 = null);
    }, e2.cancelToken && e2.cancelToken.subscribe(l2), e2.signal && (e2.signal.aborted ? l2() : e2.signal.addEventListener("abort", l2)));
    let u2 = Dt(d2);
    if (u2 && B.protocols.indexOf(u2) === -1) {
      n2(new O$1("Unsupported protocol " + u2 + ":", O$1.ERR_BAD_REQUEST, e2));
      return;
    }
    s2.send(o2 || null);
  });
};
var at = { http: et, xhr: $r };
m$1.forEach(at, (e2, t4) => {
  if (e2) {
    try {
      Object.defineProperty(e2, "name", { value: t4 });
    } catch {
    }
    Object.defineProperty(e2, "adapterName", { value: t4 });
  }
});
var qr = { getAdapter: (e2) => {
  e2 = m$1.isArray(e2) ? e2 : [e2];
  let { length: t4 } = e2, r2, n2;
  for (let o2 = 0; o2 < t4 && (r2 = e2[o2], !(n2 = m$1.isString(r2) ? at[r2.toLowerCase()] : r2)); o2++)
    ;
  if (!n2)
    throw n2 === false ? new O$1(`Adapter ${r2} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(m$1.hasOwnProp(at, r2) ? `Adapter '${r2}' is not available in the build` : `Unknown adapter '${r2}'`);
  if (!m$1.isFunction(n2))
    throw new TypeError("adapter is not a function");
  return n2;
}, adapters: at };
function Bt(e2) {
  if (e2.cancelToken && e2.cancelToken.throwIfRequested(), e2.signal && e2.signal.aborted)
    throw new re(null, e2);
}
function st(e2) {
  return Bt(e2), e2.headers = H.from(e2.headers), e2.data = Me.call(e2, e2.transformRequest), ["post", "put", "patch"].indexOf(e2.method) !== -1 && e2.headers.setContentType("application/x-www-form-urlencoded", false), qr.getAdapter(e2.adapter || ye.adapter)(e2).then(function(n2) {
    return Bt(e2), n2.data = Me.call(e2, e2.transformResponse, n2), n2.headers = H.from(n2.headers), n2;
  }, function(n2) {
    return De(n2) || (Bt(e2), n2 && n2.response && (n2.response.data = Me.call(e2, e2.transformResponse, n2.response), n2.response.headers = H.from(n2.response.headers))), Promise.reject(n2);
  });
}
var Wr = (e2) => e2 instanceof H ? e2.toJSON() : e2;
function K(e2, t4) {
  t4 = t4 || {};
  let r2 = {};
  function n2(s2, d2, h2) {
    return m$1.isPlainObject(s2) && m$1.isPlainObject(d2) ? m$1.merge.call({ caseless: h2 }, s2, d2) : m$1.isPlainObject(d2) ? m$1.merge({}, d2) : m$1.isArray(d2) ? d2.slice() : d2;
  }
  function o2(s2, d2, h2) {
    if (m$1.isUndefined(d2)) {
      if (!m$1.isUndefined(s2))
        return n2(void 0, s2, h2);
    } else
      return n2(s2, d2, h2);
  }
  function i2(s2, d2) {
    if (!m$1.isUndefined(d2))
      return n2(void 0, d2);
  }
  function a2(s2, d2) {
    if (m$1.isUndefined(d2)) {
      if (!m$1.isUndefined(s2))
        return n2(void 0, s2);
    } else
      return n2(void 0, d2);
  }
  function l2(s2, d2, h2) {
    if (h2 in t4)
      return n2(s2, d2);
    if (h2 in e2)
      return n2(void 0, s2);
  }
  let c2 = { url: i2, method: i2, data: i2, baseURL: a2, transformRequest: a2, transformResponse: a2, paramsSerializer: a2, timeout: a2, timeoutMessage: a2, withCredentials: a2, adapter: a2, responseType: a2, xsrfCookieName: a2, xsrfHeaderName: a2, onUploadProgress: a2, onDownloadProgress: a2, decompress: a2, maxContentLength: a2, maxBodyLength: a2, beforeRedirect: a2, transport: a2, httpAgent: a2, httpsAgent: a2, cancelToken: a2, socketPath: a2, responseEncoding: a2, validateStatus: l2, headers: (s2, d2) => o2(Wr(s2), Wr(d2), true) };
  return m$1.forEach(Object.keys(Object.assign({}, e2, t4)), function(d2) {
    let h2 = c2[d2] || o2, u2 = h2(e2[d2], t4[d2], d2);
    m$1.isUndefined(u2) && h2 !== l2 || (r2[d2] = u2);
  }), r2;
}
var lt = "1.4.0";
var Ut = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e2, t4) => {
  Ut[e2] = function(n2) {
    return typeof n2 === e2 || "a" + (t4 < 1 ? "n " : " ") + e2;
  };
});
var zr = {};
Ut.transitional = function(t4, r2, n2) {
  function o2(i2, a2) {
    return "[Axios v" + lt + "] Transitional option '" + i2 + "'" + a2 + (n2 ? ". " + n2 : "");
  }
  return (i2, a2, l2) => {
    if (t4 === false)
      throw new O$1(o2(a2, " has been removed" + (r2 ? " in " + r2 : "")), O$1.ERR_DEPRECATED);
    return r2 && !zr[a2] && (zr[a2] = true, console.warn(o2(a2, " has been deprecated since v" + r2 + " and will be removed in the near future"))), t4 ? t4(i2, a2, l2) : true;
  };
};
function _i(e2, t4, r2) {
  if (typeof e2 != "object")
    throw new O$1("options must be an object", O$1.ERR_BAD_OPTION_VALUE);
  let n2 = Object.keys(e2), o2 = n2.length;
  for (; o2-- > 0; ) {
    let i2 = n2[o2], a2 = t4[i2];
    if (a2) {
      let l2 = e2[i2], c2 = l2 === void 0 || a2(l2, i2, e2);
      if (c2 !== true)
        throw new O$1("option " + i2 + " must be " + c2, O$1.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r2 !== true)
      throw new O$1("Unknown option " + i2, O$1.ERR_BAD_OPTION);
  }
}
var ct = { assertOptions: _i, validators: Ut };
var ne = ct.validators, ve = class {
  constructor(t4) {
    this.defaults = t4, this.interceptors = { request: new Ft(), response: new Ft() };
  }
  request(t4, r2) {
    typeof t4 == "string" ? (r2 = r2 || {}, r2.url = t4) : r2 = t4 || {}, r2 = K(this.defaults, r2);
    let { transitional: n2, paramsSerializer: o2, headers: i2 } = r2;
    n2 !== void 0 && ct.assertOptions(n2, { silentJSONParsing: ne.transitional(ne.boolean), forcedJSONParsing: ne.transitional(ne.boolean), clarifyTimeoutError: ne.transitional(ne.boolean) }, false), o2 != null && (m$1.isFunction(o2) ? r2.paramsSerializer = { serialize: o2 } : ct.assertOptions(o2, { encode: ne.function, serialize: ne.function }, true)), r2.method = (r2.method || this.defaults.method || "get").toLowerCase();
    let a2;
    a2 = i2 && m$1.merge(i2.common, i2[r2.method]), a2 && m$1.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (f2) => {
      delete i2[f2];
    }), r2.headers = H.concat(a2, i2);
    let l2 = [], c2 = true;
    this.interceptors.request.forEach(function(y2) {
      typeof y2.runWhen == "function" && y2.runWhen(r2) === false || (c2 = c2 && y2.synchronous, l2.unshift(y2.fulfilled, y2.rejected));
    });
    let s2 = [];
    this.interceptors.response.forEach(function(y2) {
      s2.push(y2.fulfilled, y2.rejected);
    });
    let d2, h2 = 0, u2;
    if (!c2) {
      let f2 = [st.bind(this), void 0];
      for (f2.unshift.apply(f2, l2), f2.push.apply(f2, s2), u2 = f2.length, d2 = Promise.resolve(r2); h2 < u2; )
        d2 = d2.then(f2[h2++], f2[h2++]);
      return d2;
    }
    u2 = l2.length;
    let p2 = r2;
    for (h2 = 0; h2 < u2; ) {
      let f2 = l2[h2++], y2 = l2[h2++];
      try {
        p2 = f2(p2);
      } catch (P) {
        y2.call(this, P);
        break;
      }
    }
    try {
      d2 = st.call(this, p2);
    } catch (f2) {
      return Promise.reject(f2);
    }
    for (h2 = 0, u2 = s2.length; h2 < u2; )
      d2 = d2.then(s2[h2++], s2[h2++]);
    return d2;
  }
  getUri(t4) {
    t4 = K(this.defaults, t4);
    let r2 = Be(t4.baseURL, t4.url);
    return ke(r2, t4.params, t4.paramsSerializer);
  }
};
m$1.forEach(["delete", "get", "head", "options"], function(t4) {
  ve.prototype[t4] = function(r2, n2) {
    return this.request(K(n2 || {}, { method: t4, url: r2, data: (n2 || {}).data }));
  };
});
m$1.forEach(["post", "put", "patch"], function(t4) {
  function r2(n2) {
    return function(i2, a2, l2) {
      return this.request(K(l2 || {}, { method: t4, headers: n2 ? { "Content-Type": "multipart/form-data" } : {}, url: i2, data: a2 }));
    };
  }
  ve.prototype[t4] = r2(), ve.prototype[t4 + "Form"] = r2(true);
});
var Ue = ve;
var _e = class {
  constructor(t4) {
    if (typeof t4 != "function")
      throw new TypeError("executor must be a function.");
    let r2;
    this.promise = new Promise(function(i2) {
      r2 = i2;
    });
    let n2 = this;
    this.promise.then((o2) => {
      if (!n2._listeners)
        return;
      let i2 = n2._listeners.length;
      for (; i2-- > 0; )
        n2._listeners[i2](o2);
      n2._listeners = null;
    }), this.promise.then = (o2) => {
      let i2, a2 = new Promise((l2) => {
        n2.subscribe(l2), i2 = l2;
      }).then(o2);
      return a2.cancel = function() {
        n2.unsubscribe(i2);
      }, a2;
    }, t4(function(i2, a2, l2) {
      n2.reason || (n2.reason = new re(i2, a2, l2), r2(n2.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t4) {
    if (this.reason) {
      t4(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t4) : this._listeners = [t4];
  }
  unsubscribe(t4) {
    if (!this._listeners)
      return;
    let r2 = this._listeners.indexOf(t4);
    r2 !== -1 && this._listeners.splice(r2, 1);
  }
  static source() {
    let t4;
    return { token: new _e(function(o2) {
      t4 = o2;
    }), cancel: t4 };
  }
}, Jr = _e;
function _t(e2) {
  return function(r2) {
    return e2.apply(null, r2);
  };
}
function Ht(e2) {
  return m$1.isObject(e2) && e2.isAxiosError === true;
}
var jt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(jt).forEach(([e2, t4]) => {
  jt[t4] = e2;
});
var Gr = jt;
function Kr(e2) {
  let t4 = new Ue(e2), r2 = Fe(Ue.prototype.request, t4);
  return m$1.extend(r2, Ue.prototype, t4, { allOwnKeys: true }), m$1.extend(r2, t4, null, { allOwnKeys: true }), r2.create = function(o2) {
    return Kr(K(e2, o2));
  }, r2;
}
var L = Kr(ye);
L.Axios = Ue;
L.CanceledError = re;
L.CancelToken = Jr;
L.isCancel = De;
L.VERSION = lt;
L.toFormData = te;
L.AxiosError = O$1;
L.Cancel = L.CanceledError;
L.all = function(t4) {
  return Promise.all(t4);
};
L.spread = _t;
L.isAxiosError = Ht;
L.mergeConfig = K;
L.AxiosHeaders = H;
L.formToJSON = (e2) => nt(m$1.isHTMLForm(e2) ? new FormData(e2) : e2);
L.HttpStatusCode = Gr;
L.default = L;
var le = L;
var vo = At(Zr(), 1), Et = At(fo(), 1);
var $$1 = At(mo(), 1);
function X(e2) {
  return new URL(e2.toString(), window.location.toString());
}
function mr(e2, t4, r2, n2 = "brackets") {
  let o2 = /^https?:\/\//.test(t4.toString()), i2 = o2 || t4.toString().startsWith("/"), a2 = !i2 && !t4.toString().startsWith("#") && !t4.toString().startsWith("?"), l2 = t4.toString().includes("?") || e2 === "get" && Object.keys(r2).length, c2 = t4.toString().includes("#"), s2 = new URL(t4.toString(), "http://localhost");
  return e2 === "get" && Object.keys(r2).length && (s2.search = Et.stringify((0, vo.default)(Et.parse(s2.search, { ignoreQueryPrefix: true }), r2), { encodeValuesOnly: true, arrayFormat: n2 }), r2 = {}), [[o2 ? `${s2.protocol}//${s2.host}` : "", i2 ? s2.pathname : "", a2 ? s2.pathname.substring(1) : "", l2 ? s2.search : "", c2 ? s2.hash : ""].join(""), r2];
}
function Y(e2) {
  return e2 = new URL(e2.href), e2.hash = "", e2;
}
var pr = (e2) => document.dispatchEvent(new CustomEvent("cache:updated", { detail: { pages: e2 } })), Te = class {
  constructor() {
    this.on = true, this.version = null, this.pages = {}, this.sizeLimit = 30, this.ignoredUrl = [], this.prefetchRetries = 0, this.totalPrefetchRetries = 3;
  }
  static create() {
    return Te.instance || (Te.instance = new Te()), Te.instance;
  }
  isEmpty() {
    return Object.keys(this.pages).length === 0;
  }
  set(e2, t4) {
    if (this.shouldCache(e2)) {
      if (Object.keys(this.pages).length >= this.sizeLimit) {
        let r2 = Object.keys(this.pages).sort((n2, o2) => {
          var _a, _b;
          let i2 = ((_a = this.pages[n2].updatedAt) == null ? void 0 : _a.getTime()) || 0, a2 = ((_b = this.pages[o2].updatedAt) == null ? void 0 : _b.getTime()) || 0;
          return i2 - a2;
        })[0];
        delete this.pages[r2];
      }
      this.pages[e2] = t4, pr(this.pages);
    }
  }
  setWithExpiration(e2, t4) {
    this.set(e2, { ...t4, expiresAt: this.getTimestamp() });
  }
  all() {
    return this.pages;
  }
  get(e2) {
    if (!this.shouldCache(e2) || !this.has(e2))
      return;
    let t4 = /* @__PURE__ */ new Date();
    if (t4.getTime() > this.pages[e2].expiresAt.getTime() && !this.isPending(e2)) {
      delete this.pages[e2];
      return;
    }
    return this.pages[e2] = { ...this.pages[e2], updatedAt: t4 };
  }
  has(e2) {
    return this.pages[e2] !== void 0;
  }
  isPending(e2) {
    return this.has(e2) && this.pages[e2].pending;
  }
  remove(e2) {
    this.has(e2) && delete this.pages[e2], pr(this.pages);
  }
  removeAll() {
    this.pages = {}, pr(this.pages);
  }
  getTimestamp(e2 = 1) {
    let t4 = /* @__PURE__ */ new Date();
    return new Date(t4.getTime() + e2 * 6e4);
  }
  ignore(e2) {
    this.ignoredUrl.push(...e2);
  }
  accept(e2) {
    this.ignoredUrl = this.ignoredUrl.filter((t4) => e2.indexOf(t4) !== -1);
  }
  shouldCache(e2) {
    return this.on && this.ignoredUrl.indexOf(e2) === -1;
  }
  createPendingCachePage(e2) {
    this.set(e2, { pageResponse: { component: "", props: { loading: null, errors: {} }, url: "", version: null, scrollRegions: [], rememberedState: {} }, pending: true, expiresAt: this.getTimestamp() });
  }
  prefetch(e2, t4 = {}) {
    let { durationInMinutes: r2 = 1, isStatic: n2 = false } = t4, o2 = typeof e2 == "string" ? X(e2) : e2, i2 = o2.href.split(o2.host)[1], a2 = Y(o2).href;
    if (a2 = n2 ? `${a2}__static__` : a2, !this.get(i2)) {
      if (!this.version) {
        this.prefetchRetries <= this.totalPrefetchRetries && (this.prefetchRetries++, setTimeout(() => {
          this.prefetch(e2, t4);
        }, 100));
        return;
      }
      return this.createPendingCachePage(i2), le({ method: "get", url: a2, headers: { Accept: "text/html, application/xhtml+xml", "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", "X-Inertia": true, "X-Inertia-Version": this.version } }).then((l2) => {
        let c2 = l2.data.props.static;
        if (!(l2 == null ? void 0 : l2.headers["x-inertia"]) && !c2)
          return Promise.reject({ response: l2 });
        let s2 = l2.data, d2 = o2, h2 = c2 ? o2 : X(s2.url);
        return d2.hash && !h2.hash && Y(d2).href === h2.href && (h2.hash = d2.hash, s2.url = h2.href), c2 && (s2.url = o2.toString()), this.set(i2, { pageResponse: s2, expiresAt: this.getTimestamp(r2), pending: false }), Promise.resolve();
      }).catch(() => {
        console.log("Prefetch failed"), this.remove(i2);
      });
    }
  }
  prefetchAll(e2) {
    e2.forEach(({ href: t4, options: r2 }) => {
      this.prefetch(t4, r2);
    });
  }
};
function So(e2, t4) {
  let r2;
  return function(...n2) {
    clearTimeout(r2), r2 = setTimeout(() => e2.apply(this, n2), t4);
  };
}
function Z(e2, t4) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e2}`, t4));
}
var ks = (e2) => Z("before", { cancelable: true, detail: { visit: e2 } }), Ls = (e2) => Z("error", { detail: { errors: e2 } }), Ms = (e2) => Z("exception", { cancelable: true, detail: { exception: e2 } }), ho = (e2) => Z("finish", { detail: { visit: e2 } }), Ds = (e2) => Z("invalid", { cancelable: true, detail: { response: e2 } }), ze = (e2) => Z("navigate", { detail: { page: e2 } }), Bs = (e2) => Z("progress", { detail: { progress: e2 } }), Us = (e2) => Z("start", { detail: { visit: e2 } }), yo = (e2) => Z("success", { detail: { page: e2 } });
function dr(e2) {
  return e2 instanceof File || e2 instanceof Blob || e2 instanceof FileList && e2.length > 0 || e2 instanceof FormData && Array.from(e2.values()).some((t4) => dr(t4)) || typeof e2 == "object" && e2 !== null && Object.values(e2).some((t4) => dr(t4));
}
function bo(e2, t4 = new FormData(), r2 = null) {
  e2 = e2 || {};
  for (let n2 in e2)
    Object.prototype.hasOwnProperty.call(e2, n2) && Eo(t4, wo(r2, n2), e2[n2]);
  return t4;
}
function wo(e2, t4) {
  return e2 ? e2 + "[" + t4 + "]" : t4;
}
function Eo(e2, t4, r2) {
  if (Array.isArray(r2))
    return Array.from(r2.keys()).forEach((n2) => Eo(e2, wo(t4, n2.toString()), r2[n2]));
  if (r2 instanceof Date)
    return e2.append(t4, r2.toISOString());
  if (r2 instanceof File)
    return e2.append(t4, r2, r2.name);
  if (r2 instanceof Blob)
    return e2.append(t4, r2);
  if (typeof r2 == "boolean")
    return e2.append(t4, r2 ? "1" : "0");
  if (typeof r2 == "string")
    return e2.append(t4, r2);
  if (typeof r2 == "number")
    return e2.append(t4, `${r2}`);
  if (r2 == null)
    return e2.append(t4, "");
  bo(r2, e2, t4);
}
var _s = { modal: null, listener: null, show(e2) {
  typeof e2 == "object" && (e2 = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e2)}`);
  let t4 = document.createElement("html");
  t4.innerHTML = e2, t4.querySelectorAll("a").forEach((n2) => n2.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r2 = document.createElement("iframe");
  if (r2.style.backgroundColor = "white", r2.style.borderRadius = "5px", r2.style.width = "100%", r2.style.height = "100%", this.modal.appendChild(r2), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r2.contentWindow)
    throw new Error("iframe not yet ready.");
  r2.contentWindow.document.open(), r2.contentWindow.document.write(t4.outerHTML), r2.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e2) {
  e2.keyCode === 27 && this.hide();
} }, go = typeof window > "u", Hs = class {
  constructor() {
    this.visitId = null, this.Cache = Te.create(), this.pendingTimeout = null, this.activePrefetchId = "";
  }
  init({ initialPage: e2, resolveComponent: t4, swapComponent: r2 }) {
    this.Cache.version = e2.version, this.page = e2, this.resolveComponent = t4, this.swapComponent = r2, this.setNavigationType(), this.clearRememberedStateOnReload(), this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
  }
  setNavigationType() {
    this.navigationType = window.performance && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  clearRememberedStateOnReload() {
    var _a;
    this.navigationType === "reload" && ((_a = window.history.state) == null ? void 0 : _a.rememberedState) && delete window.history.state.rememberedState;
  }
  handleInitialPageVisit(e2) {
    this.page.url += window.location.hash, this.setPage(e2, { preserveState: true }).then(() => ze(e2));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", So(this.handleScrollEvent.bind(this), 100), true);
  }
  scrollRegions() {
    return document.querySelectorAll("[scroll-region]");
  }
  handleScrollEvent(e2) {
    typeof e2.target.hasAttribute == "function" && e2.target.hasAttribute("scroll-region") && this.saveScrollPositions();
  }
  saveScrollPositions() {
    this.replaceState({ ...this.page, scrollRegions: Array.from(this.scrollRegions()).map((e2) => ({ top: e2.scrollTop, left: e2.scrollLeft })) });
  }
  resetScrollPositions() {
    window.scrollTo(0, 0), this.scrollRegions().forEach((e2) => {
      typeof e2.scrollTo == "function" ? e2.scrollTo(0, 0) : (e2.scrollTop = 0, e2.scrollLeft = 0);
    }), this.saveScrollPositions(), window.location.hash && setTimeout(() => {
      var _a;
      return (_a = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : _a.scrollIntoView();
    });
  }
  restoreScrollPositions() {
    this.page.scrollRegions && this.scrollRegions().forEach((e2, t4) => {
      let r2 = this.page.scrollRegions[t4];
      if (r2)
        typeof e2.scrollTo == "function" ? e2.scrollTo(r2.left, r2.top) : (e2.scrollTop = r2.top, e2.scrollLeft = r2.left);
      else
        return;
    });
  }
  isBackForwardVisit() {
    return window.history.state && this.navigationType === "back_forward";
  }
  handleBackForwardVisit(e2) {
    window.history.state.version = e2.version, this.setPage(window.history.state, { preserveScroll: true, preserveState: true }).then(() => {
      this.restoreScrollPositions(), ze(e2);
    });
  }
  locationVisit(e2, t4) {
    try {
      let r2 = { preserveScroll: t4 };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r2)), window.location.href = e2.href, Y(window.location).href === Y(e2).href && window.location.reload();
    } catch {
      return false;
    }
  }
  isLocationVisit() {
    try {
      return window.sessionStorage.getItem("inertiaLocationVisit") !== null;
    } catch {
      return false;
    }
  }
  handleLocationVisit(e2) {
    var _a, _b;
    let t4 = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
    window.sessionStorage.removeItem("inertiaLocationVisit"), e2.url += window.location.hash, e2.rememberedState = ((_a = window.history.state) == null ? void 0 : _a.rememberedState) ?? {}, e2.scrollRegions = ((_b = window.history.state) == null ? void 0 : _b.scrollRegions) ?? [], this.setPage(e2, { preserveScroll: t4.preserveScroll, preserveState: true }).then(() => {
      t4.preserveScroll && this.restoreScrollPositions(), ze(e2);
    });
  }
  isLocationVisitResponse(e2) {
    return !!(e2 && e2.status === 409 && e2.headers["x-inertia-location"]);
  }
  isInertiaResponse(e2) {
    return !!(e2 == null ? void 0 : e2.headers["x-inertia"]);
  }
  createVisitId() {
    return this.visitId = {}, this.visitId;
  }
  cancelVisit(e2, { cancelled: t4 = false, interrupted: r2 = false }) {
    e2 && !e2.completed && !e2.cancelled && !e2.interrupted && (e2.cancelToken.abort(), e2.onCancel(), e2.completed = false, e2.cancelled = t4, e2.interrupted = r2, ho(e2), e2.onFinish(e2));
  }
  finishVisit(e2) {
    !e2.cancelled && !e2.interrupted && (e2.completed = true, e2.cancelled = false, e2.interrupted = false, ho(e2), e2.onFinish(e2));
  }
  resolvePreserveOption(e2, t4) {
    return typeof e2 == "function" ? e2(t4) : e2 === "errors" ? Object.keys(t4.props.errors || {}).length > 0 : e2;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: true });
  }
  cache() {
    return this.Cache;
  }
  visitCache(e2) {
    this.Cache.has(e2) ? this.visit(e2) : setTimeout(() => {
      this.visitCache(e2);
    }, 100);
  }
  visit(e2, { method: t4 = "get", data: r2 = {}, replace: n2 = false, preserveScroll: o2 = false, preserveState: i2 = false, only: a2 = [], headers: l2 = {}, errorBag: c2 = "", forceFormData: s2 = false, onCancelToken: d2 = () => {
  }, onBefore: h2 = () => {
  }, onStart: u2 = () => {
  }, onProgress: p2 = () => {
  }, onFinish: f2 = () => {
  }, onCancel: y2 = () => {
  }, onSuccess: P = () => {
  }, onError: g2 = () => {
  }, queryStringArrayFormat: E2 = "brackets", isStatic: R2 = false, inFlight: C2 = false } = {}) {
    var _a;
    let T2 = typeof e2 == "string" ? X(e2) : e2;
    if ((dr(r2) || s2) && !(r2 instanceof FormData) && (r2 = bo(r2)), !(r2 instanceof FormData)) {
      let [w2, b2] = mr(t4, T2, r2, E2);
      T2 = X(w2), r2 = b2;
    }
    let I2 = { url: T2, method: t4, data: r2, replace: n2, preserveScroll: o2, preserveState: i2, only: a2, headers: l2, errorBag: c2, forceFormData: s2, queryStringArrayFormat: E2, cancelled: false, completed: false, interrupted: false };
    if (h2(I2) === false || !ks(I2))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: true }), this.saveScrollPositions();
    let N2 = this.createVisitId();
    this.activeVisit = { ...I2, onCancelToken: d2, onBefore: h2, onStart: u2, onProgress: p2, onFinish: f2, onCancel: y2, onSuccess: P, onError: g2, queryStringArrayFormat: E2, cancelToken: new AbortController(), isStatic: R2, inFlight: C2 }, d2({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: true });
    } });
    let v2 = Y(T2).href, A2 = T2.href.split(T2.host)[1];
    if (this.Cache.isPending(A2) && !C2 && this.activePrefetchId === A2)
      return;
    !this.Cache.isPending(A2) && this.pendingTimeout && (clearTimeout(this.pendingTimeout), this.pendingTimeout = null, this.activePrefetchId = "");
    let S2 = this.Cache.get(A2);
    if (Us(I2), u2(I2), S2) {
      if (S2.pending) {
        this.activePrefetchId = A2, this.pendingTimeout = setTimeout(() => {
          this.visit(A2, { inFlight: true });
        }, 1e3);
        return;
      } else
        this.activePrefetchId = "";
      console.log("cache hit"), o2 = this.resolvePreserveOption(o2, S2.pageResponse), i2 = this.resolvePreserveOption(i2, S2.pageResponse), i2 && ((_a = window.history.state) == null ? void 0 : _a.rememberedState) && S2.pageResponse.component === this.page.component && (S2.pageResponse.rememberedState = window.history.state.rememberedState);
      let w2 = T2, b2 = X(S2.pageResponse.url);
      w2.hash && !b2.hash && Y(w2).href === b2.href && (b2.hash = w2.hash, S2.pageResponse.url = b2.href), this.Cache.set(A2, { pageResponse: S2.pageResponse, preserveScroll: o2, preserveState: i2, expiresAt: S2.expiresAt }), this.setPage(S2.pageResponse, { visitId: N2, replace: n2, preserveScroll: o2, preserveState: i2 }).then(() => {
        yo(this.page), P(this.page), this.activeVisit && this.finishVisit(this.activeVisit);
      });
    }
    S2 || (v2 = R2 ? `${Y(T2).href}__static__` : v2, console.log("cache missed: ", v2), le({ method: t4, url: v2, data: t4 === "get" ? {} : r2, params: t4 === "get" ? r2 : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...l2, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": true, ...a2.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": a2.join(",") } : {}, ...c2 && c2.length ? { "X-Inertia-Error-Bag": c2 } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (w2) => {
      r2 instanceof FormData && (w2.percentage = w2.progress ? Math.round(w2.progress * 100) : 0, Bs(w2), p2(w2));
    } }).then((w2) => {
      var _a2;
      let b2 = w2.data.props.static;
      if (!this.isInertiaResponse(w2) && !R2)
        return Promise.reject({ response: w2 });
      let F2 = w2.data;
      a2.length && F2.component === this.page.component && (F2.props = { ...this.page.props, ...F2.props }), o2 = this.resolvePreserveOption(o2, F2), i2 = this.resolvePreserveOption(i2, F2), i2 && ((_a2 = window.history.state) == null ? void 0 : _a2.rememberedState) && F2.component === this.page.component && (F2.rememberedState = window.history.state.rememberedState);
      let q = T2, G = b2 ? T2 : X(F2.url);
      return q.hash && !G.hash && Y(q).href === G.href && (G.hash = q.hash, F2.url = G.href), b2 && (console.log("url for static", T2.toString()), F2.url = T2.toString()), console.log("page response: ", F2.url), this.Cache.setWithExpiration(A2, { pageResponse: F2, preserveScroll: o2, preserveState: i2, expiresAt: /* @__PURE__ */ new Date() }), this.setPage(F2, { visitId: N2, replace: n2, preserveScroll: o2, preserveState: i2 });
    }).then(() => {
      let w2 = this.page.props.errors || {};
      if (Object.keys(w2).length > 0) {
        let b2 = c2 ? w2[c2] ? w2[c2] : {} : w2;
        return Ls(b2), g2(b2);
      }
      return yo(this.page), P(this.page);
    }).catch((w2) => {
      if (this.isInertiaResponse(w2.response))
        return this.setPage(w2.response.data, { visitId: N2 });
      if (this.isLocationVisitResponse(w2.response)) {
        let b2 = X(w2.response.headers["x-inertia-location"]), F2 = T2;
        F2.hash && !b2.hash && Y(F2).href === b2.href && (b2.hash = F2.hash), this.locationVisit(b2, o2 === true);
      } else if (w2.response)
        Ds(w2.response) && _s.show(w2.response.data);
      else
        return Promise.reject(w2);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((w2) => {
      if (!le.isCancel(w2)) {
        let b2 = Ms(w2);
        if (this.activeVisit && this.finishVisit(this.activeVisit), b2)
          return Promise.reject(w2);
      }
    }));
  }
  setPage(e2, { visitId: t4 = this.createVisitId(), replace: r2 = false, preserveScroll: n2 = false, preserveState: o2 = false } = {}) {
    return Promise.resolve(this.resolveComponent(e2.component)).then((i2) => {
      t4 === this.visitId && (e2.scrollRegions = e2.scrollRegions || [], e2.rememberedState = e2.rememberedState || {}, r2 = r2 || X(e2.url).href === window.location.href, r2 ? this.replaceState(e2) : this.pushState(e2), this.swapComponent({ component: i2, page: e2, preserveState: o2 }).then(() => {
        n2 || this.resetScrollPositions(), r2 || ze(e2);
      }));
    });
  }
  pushState(e2) {
    this.page = e2, window.history.pushState(e2, "", e2.url);
  }
  replaceState(e2) {
    this.page = e2, window.history.replaceState(e2, "", e2.url);
  }
  handlePopstateEvent(e2) {
    if (e2.state !== null) {
      let t4 = e2.state, r2 = this.createVisitId();
      Promise.resolve(this.resolveComponent(t4.component)).then((n2) => {
        r2 === this.visitId && (this.page = t4, this.swapComponent({ component: n2, page: t4, preserveState: false }).then(() => {
          this.restoreScrollPositions(), ze(t4);
        }));
      });
    } else {
      let t4 = X(this.page.url);
      t4.hash = window.location.hash, this.replaceState({ ...this.page, url: t4.href }), this.resetScrollPositions();
    }
  }
  get(e2, t4 = {}, r2 = {}) {
    return this.visit(e2, { ...r2, method: "get", data: t4 });
  }
  reload(e2 = {}) {
    return this.visit(window.location.href, { ...e2, preserveScroll: true, preserveState: true });
  }
  replace(e2, t4 = {}) {
    return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${t4.method ?? "get"}() instead.`), this.visit(e2, { preserveState: true, ...t4, replace: true });
  }
  post(e2, t4 = {}, r2 = {}) {
    return this.visit(e2, { preserveState: true, ...r2, method: "post", data: t4 });
  }
  put(e2, t4 = {}, r2 = {}) {
    return this.visit(e2, { preserveState: true, ...r2, method: "put", data: t4 });
  }
  patch(e2, t4 = {}, r2 = {}) {
    return this.visit(e2, { preserveState: true, ...r2, method: "patch", data: t4 });
  }
  delete(e2, t4 = {}) {
    return this.visit(e2, { preserveState: true, ...t4, method: "delete" });
  }
  remember(e2, t4 = "default") {
    var _a;
    go || this.replaceState({ ...this.page, rememberedState: { ...(_a = this.page) == null ? void 0 : _a.rememberedState, [t4]: e2 } });
  }
  restore(e2 = "default") {
    var _a, _b;
    if (!go)
      return (_b = (_a = window.history.state) == null ? void 0 : _a.rememberedState) == null ? void 0 : _b[e2];
  }
  on(e2, t4) {
    let r2 = (n2) => {
      let o2 = t4(n2);
      n2.cancelable && !n2.defaultPrevented && o2 === false && n2.preventDefault();
    };
    return document.addEventListener(`inertia:${e2}`, r2), () => document.removeEventListener(`inertia:${e2}`, r2);
  }
}, js = { buildDOMElement(e2) {
  let t4 = document.createElement("template");
  t4.innerHTML = e2;
  let r2 = t4.content.firstChild;
  if (!e2.startsWith("<script "))
    return r2;
  let n2 = document.createElement("script");
  return n2.innerHTML = r2.innerHTML, r2.getAttributeNames().forEach((o2) => {
    n2.setAttribute(o2, r2.getAttribute(o2) || "");
  }), n2;
}, isInertiaManagedElement(e2) {
  return e2.nodeType === Node.ELEMENT_NODE && e2.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e2, t4) {
  let r2 = e2.getAttribute("inertia");
  return r2 !== null ? t4.findIndex((n2) => n2.getAttribute("inertia") === r2) : -1;
}, update: So(function(e2) {
  let t4 = e2.map((r2) => this.buildDOMElement(r2));
  Array.from(document.head.childNodes).filter((r2) => this.isInertiaManagedElement(r2)).forEach((r2) => {
    var _a, _b;
    let n2 = this.findMatchingElementIndex(r2, t4);
    if (n2 === -1) {
      (_a = r2 == null ? void 0 : r2.parentNode) == null ? void 0 : _a.removeChild(r2);
      return;
    }
    let o2 = t4.splice(n2, 1)[0];
    o2 && !r2.isEqualNode(o2) && ((_b = r2 == null ? void 0 : r2.parentNode) == null ? void 0 : _b.replaceChild(o2, r2));
  }), t4.forEach((r2) => document.head.appendChild(r2));
}, 1) };
function Po(e2, t4, r2) {
  let n2 = {}, o2 = 0;
  function i2() {
    let d2 = o2 += 1;
    return n2[d2] = [], d2.toString();
  }
  function a2(d2) {
    d2 === null || Object.keys(n2).indexOf(d2) === -1 || (delete n2[d2], s2());
  }
  function l2(d2, h2 = []) {
    d2 !== null && Object.keys(n2).indexOf(d2) > -1 && (n2[d2] = h2), s2();
  }
  function c2() {
    let d2 = t4(""), h2 = { ...d2 ? { title: `<title inertia="">${d2}</title>` } : {} }, u2 = Object.values(n2).reduce((p2, f2) => p2.concat(f2), []).reduce((p2, f2) => {
      if (f2.indexOf("<") === -1)
        return p2;
      if (f2.indexOf("<title ") === 0) {
        let P = f2.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return p2.title = P ? `${P[1]}${t4(P[2])}${P[3]}` : f2, p2;
      }
      let y2 = f2.match(/ inertia="[^"]+"/);
      return y2 ? p2[y2[0]] = f2 : p2[Object.keys(p2).length] = f2, p2;
    }, h2);
    return Object.values(u2);
  }
  function s2() {
    e2 ? r2(c2()) : js.update(c2());
  }
  return s2(), { forceUpdate: s2, createProvider: function() {
    let d2 = i2();
    return { update: (h2) => l2(d2, h2), disconnect: () => a2(d2) };
  } };
}
var Ao = null;
function Vs(e2) {
  document.addEventListener("inertia:start", $s.bind(null, e2)), document.addEventListener("inertia:progress", qs), document.addEventListener("inertia:finish", Ws);
}
function $s(e2) {
  Ao = setTimeout(() => $$1.default.start(), e2);
}
function qs(e2) {
  var _a;
  $$1.default.isStarted() && ((_a = e2.detail.progress) == null ? void 0 : _a.percentage) && $$1.default.set(Math.max($$1.default.status, e2.detail.progress.percentage / 100 * 0.9));
}
function Ws(e2) {
  if (clearTimeout(Ao), $$1.default.isStarted())
    e2.detail.visit.completed ? $$1.default.done() : e2.detail.visit.interrupted ? $$1.default.set(0) : e2.detail.visit.cancelled && ($$1.default.done(), $$1.default.remove());
  else
    return;
}
function zs(e2) {
  let t4 = document.createElement("style");
  t4.type = "text/css", t4.textContent = `
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${e2};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e2}, 0 0 5px ${e2};
      opacity: 1.0;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e2};
      border-left-color: ${e2};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t4);
}
function Oo({ delay: e2 = 250, color: t4 = "#29d", includeCSS: r2 = true, showSpinner: n2 = false } = {}) {
  Vs(e2), $$1.default.configure({ showSpinner: n2 }), r2 && zs(t4);
}
function xo(e2) {
  let t4 = e2.currentTarget.tagName.toLowerCase() === "a";
  return !(e2.target && (e2 == null ? void 0 : e2.target).isContentEditable || e2.defaultPrevented || t4 && e2.which > 1 || t4 && e2.altKey || t4 && e2.ctrlKey || t4 && e2.metaKey || t4 && e2.shiftKey);
}
var j$1 = new Hs();
Te.create();
var To = createContext(void 0);
To.displayName = "InertiaHeadContext";
var Je = To;
var Co = createContext(void 0);
Co.displayName = "InertiaPageContext";
var Ge = Co;
function Pt({ children: e2, initialPage: t4, initialComponent: r2, resolveComponent: n2, titleCallback: o2, onHeadUpdate: i2 }) {
  let [a2, l2] = useState({ component: r2 || null, page: t4, key: null }), c2 = useMemo(() => Po(typeof window > "u", o2 || ((d2) => d2), i2 || (() => {
  })), []);
  if (useEffect(() => {
    j$1.init({ initialPage: t4, resolveComponent: n2, swapComponent: async ({ component: d2, page: h2, preserveState: u2 }) => {
      l2((p2) => ({ component: d2, page: h2, key: u2 ? p2.key : Date.now() }));
    } }), j$1.on("navigate", () => c2.forceUpdate());
  }, []), !a2.component)
    return createElement(Je.Provider, { value: c2 }, createElement(Ge.Provider, { value: a2.page }, null));
  let s2 = e2 || (({ Component: d2, props: h2, key: u2 }) => {
    let p2 = createElement(d2, { key: u2, ...h2 });
    return typeof d2.layout == "function" ? d2.layout(p2) : Array.isArray(d2.layout) ? d2.layout.concat(p2).reverse().reduce((f2, y2) => createElement(y2, { children: f2, ...h2 })) : p2;
  });
  return createElement(Je.Provider, { value: c2 }, createElement(Ge.Provider, { value: a2.page }, s2({ Component: a2.component, key: a2.key, props: a2.page.props })));
}
Pt.displayName = "Inertia";
async function Fo({ id: e2 = "app", resolve: t4, setup: r2, title: n2, progress: o2 = {}, page: i2, render: a2 }) {
  let l2 = typeof window > "u", c2 = l2 ? null : document.getElementById(e2), s2 = i2 || JSON.parse(c2.dataset.page), d2 = (p2) => Promise.resolve(t4(p2)).then((f2) => f2.default || f2), h2 = [], u2 = await d2(s2.component).then((p2) => r2({ el: c2, App: Pt, props: { initialPage: s2, initialComponent: p2, resolveComponent: d2, titleCallback: n2, onHeadUpdate: l2 ? (f2) => h2 = f2 : null } }));
  if (!l2 && o2 && Oo(o2), l2) {
    let p2 = await a2(createElement("div", { id: e2, "data-page": JSON.stringify(s2) }, u2));
    return { head: h2, body: p2 };
  }
}
var rl = function({ children: e2, title: t4 }) {
  let r2 = useContext(Je), n2 = useMemo(() => r2.createProvider(), [r2]);
  useEffect(() => () => {
    n2.disconnect();
  }, [n2]);
  function o2(h2) {
    return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(h2.type) > -1;
  }
  function i2(h2) {
    let u2 = Object.keys(h2.props).reduce((p2, f2) => {
      if (["head-key", "children", "dangerouslySetInnerHTML"].includes(f2))
        return p2;
      let y2 = h2.props[f2];
      return y2 === "" ? p2 + ` ${f2}` : p2 + ` ${f2}="${y2}"`;
    }, "");
    return `<${h2.type}${u2}>`;
  }
  function a2(h2) {
    return typeof h2.props.children == "string" ? h2.props.children : h2.props.children.reduce((u2, p2) => u2 + l2(p2), "");
  }
  function l2(h2) {
    let u2 = i2(h2);
    return h2.props.children && (u2 += a2(h2)), h2.props.dangerouslySetInnerHTML && (u2 += h2.props.dangerouslySetInnerHTML.__html), o2(h2) || (u2 += `</${h2.type}>`), u2;
  }
  function c2(h2) {
    return Io.cloneElement(h2, { inertia: h2.props["head-key"] !== void 0 ? h2.props["head-key"] : "" });
  }
  function s2(h2) {
    return l2(c2(h2));
  }
  function d2(h2) {
    let u2 = Io.Children.toArray(h2).filter((p2) => p2).map((p2) => s2(p2));
    return t4 && !u2.find((p2) => p2.startsWith("<title")) && u2.push(`<title inertia>${t4}</title>`), u2;
  }
  return n2.update(d2(e2)), null;
}, nl = rl;
var ee = () => {
}, No = forwardRef(({ children: e2, as: t4 = "a", data: r2 = {}, href: n2, method: o2 = "get", preserveScroll: i2 = false, preserveState: a2 = null, replace: l2 = false, only: c2 = [], headers: s2 = {}, queryStringArrayFormat: d2 = "brackets", onClick: h2 = ee, onCancelToken: u2 = ee, onBefore: p2 = ee, onStart: f2 = ee, onProgress: y2 = ee, onFinish: P = ee, onCancel: g2 = ee, onSuccess: E2 = ee, onError: R2 = ee, isStatic: C2 = false, ...T2 }, I2) => {
  let N2 = useCallback((S2) => {
    h2(S2), xo(S2) && (S2.preventDefault(), j$1.visit(n2, { data: r2, method: o2, preserveScroll: i2, preserveState: a2 ?? o2 !== "get", replace: l2, only: c2, headers: s2, onCancelToken: u2, onBefore: p2, onStart: f2, onProgress: y2, onFinish: P, onCancel: g2, onSuccess: E2, onError: R2, isStatic: C2 }));
  }, [r2, n2, o2, i2, a2, l2, c2, s2, h2, u2, p2, f2, y2, P, g2, E2, R2, C2]);
  t4 = t4.toLowerCase(), o2 = o2.toLowerCase();
  let [v2, A2] = mr(o2, n2 || "", r2, d2);
  return n2 = v2, r2 = A2, t4 === "a" && o2 !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${n2}" method="${o2}" as="button">...</Link>`), createElement(t4, { ...T2, ...t4 === "a" ? { href: n2 } : {}, ref: I2, onClick: N2 }, e2);
});
No.displayName = "InertiaLink";
var sl = No;
function Lo() {
  let e2 = useContext(Ge);
  if (!e2)
    throw new Error("usePage must be used within the Inertia component");
  return e2;
}
var Op = j$1;
/*! Bundled license information:

nprogress/nprogress.js:
  (* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
   * @license MIT *)
*/
var p$1 = (t4) => new Promise((o2, a2) => {
  let r2 = "";
  t4.on("data", (e2) => r2 += e2), t4.on("end", () => o2(r2)), t4.on("error", (e2) => a2(e2));
}), d$1 = (t4, o2) => {
  let a2 = o2 || 13714, r2 = { "/health": async () => ({ status: "OK", timestamp: Date.now() }), "/shutdown": () => n$1.exit(), "/render": async (e2) => t4(JSON.parse(await p$1(e2))), "/404": async () => ({ status: "NOT_FOUND", timestamp: Date.now() }) };
  createServer(async (e2, s2) => {
    let i2 = r2[e2.url] || r2["/404"];
    try {
      s2.writeHead(200, { "Content-Type": "application/json", Server: "Inertia.js SSR" }), s2.write(JSON.stringify(await i2(e2)));
    } catch (l2) {
      console.error(l2);
    }
    s2.end();
  }).listen(a2, () => console.log("Inertia SSR server started.")), console.log(`Starting SSR server on port ${a2}...`);
};
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, e2.key, e2);
  }
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, f(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, g = Array.isArray, m = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, g(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && g(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = m.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && g(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (g(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var T2 = k2[N2], F2 = "object" == typeof T2 && void 0 !== T2.value ? T2.value : h2[T2];
    if (!i2 || null !== F2) {
      var D2 = g(h2) ? "function" == typeof e2 ? e2(n2, T2) : n2 : n2 + (c2 ? "." + T2 : "[" + T2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, T = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : T(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? C.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : C.arrayLimit, charset: void 0 === t5.charset ? C.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : C.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : C.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : C.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : C.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : C.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : C.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(T(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, $ = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: D(i2) };
    }
    return false;
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && ".*" === r2.wheres[o2])
        return encodeURIComponent(null != (a2 = t5[o2]) ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test(null != (u2 = t5[o2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent(null != (f2 = t5[o2]) ? f2 : "");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), A = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new $(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || g(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : g(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new $(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new $(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.g(r2), this.m(t5, r2));
  }, f2.g = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.m = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f(String));
function I(t4, r2, n2, e2) {
  var o2 = new A(t4, r2, n2, e2);
  return t4 ? o2.toString() : o2;
}
const appName = "Curious Dev Lab";
d$1(
  (page) => Fo({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/Article.jsx": () => import("./assets/Article-39737a04.js"), "./Pages/Home.jsx": () => import("./assets/Home-82065641.js"), "./Pages/NotFound.jsx": () => import("./assets/NotFound-b495552a.js") })),
    setup: ({ App, props }) => {
      global.route = (name, params, absolute) => I(name, params, absolute, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
export {
  Lo as L,
  Op as O,
  nl as n,
  sl as s
};
