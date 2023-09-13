import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout } from "./Layout-9c72d309.js";
import { createContext, forwardRef, useCallback, createElement } from "react";
import "lodash.isequal";
import "@inertiajs/react";
var Mo = Object.create;
var yr = Object.defineProperty;
var Do = Object.getOwnPropertyDescriptor;
var Bo = Object.getOwnPropertyNames;
var Uo = Object.getPrototypeOf, _o = Object.prototype.hasOwnProperty;
var k = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Ho = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let o of Bo(t))
      !_o.call(e, o) && o !== r && yr(e, o, { get: () => t[o], enumerable: !(n = Do(t, o)) || n.enumerable });
  return e;
};
var At = (e, t, r) => (r = e != null ? Mo(Uo(e)) : {}, Ho(t || !e || !e.__esModule ? yr(r, "default", { value: e, enumerable: true }) : r, e));
var Zr = k((af, Yr) => {
  var Hi = function(t) {
    return ji(t) && !Vi(t);
  };
  function ji(e) {
    return !!e && typeof e == "object";
  }
  function Vi(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || Wi(e);
  }
  var $i = typeof Symbol == "function" && Symbol.for, qi = $i ? Symbol.for("react.element") : 60103;
  function Wi(e) {
    return e.$$typeof === qi;
  }
  function zi(e) {
    return Array.isArray(e) ? [] : {};
  }
  function He(e, t) {
    return t.clone !== false && t.isMergeableObject(e) ? Se(zi(e), e, t) : e;
  }
  function Ji(e, t, r) {
    return e.concat(t).map(function(n) {
      return He(n, r);
    });
  }
  function Gi(e, t) {
    if (!t.customMerge)
      return Se;
    var r = t.customMerge(e);
    return typeof r == "function" ? r : Se;
  }
  function Ki(e) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.propertyIsEnumerable.call(e, t);
    }) : [];
  }
  function Qr(e) {
    return Object.keys(e).concat(Ki(e));
  }
  function Xr(e, t) {
    try {
      return t in e;
    } catch {
      return false;
    }
  }
  function Qi(e, t) {
    return Xr(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
  }
  function Xi(e, t, r) {
    var n = {};
    return r.isMergeableObject(e) && Qr(e).forEach(function(o) {
      n[o] = He(e[o], r);
    }), Qr(t).forEach(function(o) {
      Qi(e, o) || (Xr(e, o) && r.isMergeableObject(t[o]) ? n[o] = Gi(o, r)(e[o], t[o], r) : n[o] = He(t[o], r));
    }), n;
  }
  function Se(e, t, r) {
    r = r || {}, r.arrayMerge = r.arrayMerge || Ji, r.isMergeableObject = r.isMergeableObject || Hi, r.cloneUnlessOtherwiseSpecified = He;
    var n = Array.isArray(t), o = Array.isArray(e), i = n === o;
    return i ? n ? r.arrayMerge(e, t, r) : Xi(e, t, r) : He(t, r);
  }
  Se.all = function(t, r) {
    if (!Array.isArray(t))
      throw new Error("first argument should be an array");
    return t.reduce(function(n, o) {
      return Se(n, o, r);
    }, {});
  };
  var Yi = Se;
  Yr.exports = Yi;
});
var tn = k((sf, en) => {
  en.exports = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return false;
    if (typeof Symbol.iterator == "symbol")
      return true;
    var t = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return false;
    var o = 42;
    t[r] = o;
    for (r in t)
      return false;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return false;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(t, r);
      if (a.value !== o || a.enumerable !== true)
        return false;
    }
    return true;
  };
});
var on = k((lf, nn) => {
  var rn = typeof Symbol < "u" && Symbol, Zi = tn();
  nn.exports = function() {
    return typeof rn != "function" || typeof Symbol != "function" || typeof rn("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : Zi();
  };
});
var ln = k((cf, sn) => {
  var an = { foo: {} }, ea = Object;
  sn.exports = function() {
    return { __proto__: an }.foo === an.foo && !({ __proto__: null } instanceof ea);
  };
});
var un = k((uf, cn) => {
  var ta = "Function.prototype.bind called on incompatible ", Vt = Array.prototype.slice, ra = Object.prototype.toString, na = "[object Function]";
  cn.exports = function(t) {
    var r = this;
    if (typeof r != "function" || ra.call(r) !== na)
      throw new TypeError(ta + r);
    for (var n = Vt.call(arguments, 1), o, i = function() {
      if (this instanceof o) {
        var d = r.apply(this, n.concat(Vt.call(arguments)));
        return Object(d) === d ? d : this;
      } else
        return r.apply(t, n.concat(Vt.call(arguments)));
    }, a = Math.max(0, r.length - n.length), l = [], c = 0; c < a; c++)
      l.push("$" + c);
    if (o = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
      var s = function() {
      };
      s.prototype = r.prototype, o.prototype = new s(), s.prototype = null;
    }
    return o;
  };
});
var ut = k((ff, fn) => {
  var oa = un();
  fn.exports = Function.prototype.bind || oa;
});
var dn = k((pf, pn) => {
  var ia = ut();
  pn.exports = ia.call(Function.call, Object.prototype.hasOwnProperty);
});
var dt = k((df, vn) => {
  var x, Pe = SyntaxError, gn = Function, Ee = TypeError, $t = function(e) {
    try {
      return gn('"use strict"; return (' + e + ").constructor;")();
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
  }() : qt, be = on()(), sa = ln()(), M = Object.getPrototypeOf || (sa ? function(e) {
    return e.__proto__;
  } : null), we = {}, la = typeof Uint8Array > "u" || !M ? x : M(Uint8Array), ue = { "%AggregateError%": typeof AggregateError > "u" ? x : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? x : ArrayBuffer, "%ArrayIteratorPrototype%": be && M ? M([][Symbol.iterator]()) : x, "%AsyncFromSyncIteratorPrototype%": x, "%AsyncFunction%": we, "%AsyncGenerator%": we, "%AsyncGeneratorFunction%": we, "%AsyncIteratorPrototype%": we, "%Atomics%": typeof Atomics > "u" ? x : Atomics, "%BigInt%": typeof BigInt > "u" ? x : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? x : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? x : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? x : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? x : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? x : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? x : FinalizationRegistry, "%Function%": gn, "%GeneratorFunction%": we, "%Int8Array%": typeof Int8Array > "u" ? x : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? x : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? x : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": be && M ? M(M([][Symbol.iterator]())) : x, "%JSON%": typeof JSON == "object" ? JSON : x, "%Map%": typeof Map > "u" ? x : Map, "%MapIteratorPrototype%": typeof Map > "u" || !be || !M ? x : M((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? x : Promise, "%Proxy%": typeof Proxy > "u" ? x : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? x : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? x : Set, "%SetIteratorPrototype%": typeof Set > "u" || !be || !M ? x : M((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? x : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": be && M ? M(""[Symbol.iterator]()) : x, "%Symbol%": be ? Symbol : x, "%SyntaxError%": Pe, "%ThrowTypeError%": aa, "%TypedArray%": la, "%TypeError%": Ee, "%Uint8Array%": typeof Uint8Array > "u" ? x : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? x : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? x : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? x : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? x : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? x : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? x : WeakSet };
  if (M)
    try {
      null.error;
    } catch (e) {
      mn = M(M(e)), ue["%Error.prototype%"] = mn;
    }
  var mn, ca = function e(t) {
    var r;
    if (t === "%AsyncFunction%")
      r = $t("async function () {}");
    else if (t === "%GeneratorFunction%")
      r = $t("function* () {}");
    else if (t === "%AsyncGeneratorFunction%")
      r = $t("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var n = e("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var o = e("%AsyncGenerator%");
      o && M && (r = M(o.prototype));
    }
    return ue[t] = r, r;
  }, hn = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, je = ut(), ft = dn(), ua = je.call(Function.call, Array.prototype.concat), fa = je.call(Function.apply, Array.prototype.splice), yn = je.call(Function.call, String.prototype.replace), pt = je.call(Function.call, String.prototype.slice), pa = je.call(Function.call, RegExp.prototype.exec), da = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ma = /\\(\\)?/g, ha = function(t) {
    var r = pt(t, 0, 1), n = pt(t, -1);
    if (r === "%" && n !== "%")
      throw new Pe("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%")
      throw new Pe("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return yn(t, da, function(i, a, l, c) {
      o[o.length] = l ? yn(c, ma, "$1") : a || i;
    }), o;
  }, ya = function(t, r) {
    var n = t, o;
    if (ft(hn, n) && (o = hn[n], n = "%" + o[0] + "%"), ft(ue, n)) {
      var i = ue[n];
      if (i === we && (i = ca(n)), typeof i > "u" && !r)
        throw new Ee("intrinsic " + t + " exists, but is not available. Please file an issue!");
      return { alias: o, name: n, value: i };
    }
    throw new Pe("intrinsic " + t + " does not exist!");
  };
  vn.exports = function(t, r) {
    if (typeof t != "string" || t.length === 0)
      throw new Ee("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
      throw new Ee('"allowMissing" argument must be a boolean');
    if (pa(/^%?[^%]*%?$/, t) === null)
      throw new Pe("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var n = ha(t), o = n.length > 0 ? n[0] : "", i = ya("%" + o + "%", r), a = i.name, l = i.value, c = false, s = i.alias;
    s && (o = s[0], fa(n, ua([0, 1], s)));
    for (var d = 1, h = true; d < n.length; d += 1) {
      var u = n[d], p = pt(u, 0, 1), f = pt(u, -1);
      if ((p === '"' || p === "'" || p === "`" || f === '"' || f === "'" || f === "`") && p !== f)
        throw new Pe("property names with quotes must have matching quotes");
      if ((u === "constructor" || !h) && (c = true), o += "." + u, a = "%" + o + "%", ft(ue, a))
        l = ue[a];
      else if (l != null) {
        if (!(u in l)) {
          if (!r)
            throw new Ee("base intrinsic for " + t + " exists, but the property is not available.");
          return;
        }
        if (ce && d + 1 >= n.length) {
          var y = ce(l, u);
          h = !!y, h && "get" in y && !("originalValue" in y.get) ? l = y.get : l = l[u];
        } else
          h = ft(l, u), l = l[u];
        h && !c && (ue[a] = l);
      }
    }
    return l;
  };
});
var An = k((mf, mt) => {
  var Wt = ut(), Ae = dt(), wn = Ae("%Function.prototype.apply%"), En = Ae("%Function.prototype.call%"), Pn = Ae("%Reflect.apply%", true) || Wt.call(En, wn), Sn = Ae("%Object.getOwnPropertyDescriptor%", true), fe = Ae("%Object.defineProperty%", true), ga = Ae("%Math.max%");
  if (fe)
    try {
      fe({}, "a", { value: 1 });
    } catch {
      fe = null;
    }
  mt.exports = function(t) {
    var r = Pn(Wt, En, arguments);
    if (Sn && fe) {
      var n = Sn(r, "length");
      n.configurable && fe(r, "length", { value: 1 + ga(0, t.length - (arguments.length - 1)) });
    }
    return r;
  };
  var bn = function() {
    return Pn(Wt, wn, arguments);
  };
  fe ? fe(mt.exports, "apply", { value: bn }) : mt.exports.apply = bn;
});
var Tn = k((hf, Rn) => {
  var On = dt(), xn = An(), va = xn(On("String.prototype.indexOf"));
  Rn.exports = function(t, r) {
    var n = On(t, !!r);
    return typeof n == "function" && va(t, ".prototype.") > -1 ? xn(n) : n;
  };
});
var Cn = k(() => {
});
var Kn = k((vf, Gn) => {
  var tr = typeof Map == "function" && Map.prototype, zt = Object.getOwnPropertyDescriptor && tr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, yt = tr && zt && typeof zt.get == "function" ? zt.get : null, Fn = tr && Map.prototype.forEach, rr = typeof Set == "function" && Set.prototype, Jt = Object.getOwnPropertyDescriptor && rr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, gt = rr && Jt && typeof Jt.get == "function" ? Jt.get : null, In = rr && Set.prototype.forEach, Sa = typeof WeakMap == "function" && WeakMap.prototype, $e = Sa ? WeakMap.prototype.has : null, ba = typeof WeakSet == "function" && WeakSet.prototype, qe = ba ? WeakSet.prototype.has : null, wa = typeof WeakRef == "function" && WeakRef.prototype, Nn = wa ? WeakRef.prototype.deref : null, Ea = Boolean.prototype.valueOf, Pa = Object.prototype.toString, Aa = Function.prototype.toString, Oa = String.prototype.match, nr = String.prototype.slice, ie = String.prototype.replace, xa = String.prototype.toUpperCase, kn = String.prototype.toLowerCase, Vn = RegExp.prototype.test, Ln = Array.prototype.concat, z = Array.prototype.join, Ra = Array.prototype.slice, Mn = Math.floor, Qt = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Gt = Object.getOwnPropertySymbols, Xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Oe = typeof Symbol == "function" && typeof Symbol.iterator == "object", U = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Oe || "symbol") ? Symbol.toStringTag : null, $n = Object.prototype.propertyIsEnumerable, Dn = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
    return e.__proto__;
  } : null);
  function Bn(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Vn.call(/e/, t))
      return t;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e == "number") {
      var n = e < 0 ? -Mn(-e) : Mn(e);
      if (n !== e) {
        var o = String(n), i = nr.call(t, o.length + 1);
        return ie.call(o, r, "$&_") + "." + ie.call(ie.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return ie.call(t, r, "$&_");
  }
  var Yt = Cn(), Un = Yt.custom, _n = Wn(Un) ? Un : null;
  Gn.exports = function e(t, r, n, o) {
    var i = r || {};
    if (oe(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (oe(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var a = oe(i, "customInspect") ? i.customInspect : true;
    if (typeof a != "boolean" && a !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (oe(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (oe(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var l = i.numericSeparator;
    if (typeof t > "u")
      return "undefined";
    if (t === null)
      return "null";
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "string")
      return Jn(t, i);
    if (typeof t == "number") {
      if (t === 0)
        return 1 / 0 / t > 0 ? "0" : "-0";
      var c = String(t);
      return l ? Bn(t, c) : c;
    }
    if (typeof t == "bigint") {
      var s = String(t) + "n";
      return l ? Bn(t, s) : s;
    }
    var d = typeof i.depth > "u" ? 5 : i.depth;
    if (typeof n > "u" && (n = 0), n >= d && d > 0 && typeof t == "object")
      return Zt(t) ? "[Array]" : "[Object]";
    var h = Wa(i, n);
    if (typeof o > "u")
      o = [];
    else if (zn(o, t) >= 0)
      return "[Circular]";
    function u(F, q, G) {
      if (q && (o = Ra.call(o), o.push(q)), G) {
        var de = { depth: i.depth };
        return oe(i, "quoteStyle") && (de.quoteStyle = i.quoteStyle), e(F, de, n + 1, o);
      }
      return e(F, i, n + 1, o);
    }
    if (typeof t == "function" && !Hn(t)) {
      var p = Da(t), f = ht(t, u);
      return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (f.length > 0 ? " { " + z.call(f, ", ") + " }" : "");
    }
    if (Wn(t)) {
      var y = Oe ? ie.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Xt.call(t);
      return typeof t == "object" && !Oe ? Ve(y) : y;
    }
    if (Va(t)) {
      for (var P = "<" + kn.call(String(t.nodeName)), g = t.attributes || [], E = 0; E < g.length; E++)
        P += " " + g[E].name + "=" + qn(Ta(g[E].value), "double", i);
      return P += ">", t.childNodes && t.childNodes.length && (P += "..."), P += "</" + kn.call(String(t.nodeName)) + ">", P;
    }
    if (Zt(t)) {
      if (t.length === 0)
        return "[]";
      var R = ht(t, u);
      return h && !qa(R) ? "[" + er(R, h) + "]" : "[ " + z.call(R, ", ") + " ]";
    }
    if (Fa(t)) {
      var C = ht(t, u);
      return !("cause" in Error.prototype) && "cause" in t && !$n.call(t, "cause") ? "{ [" + String(t) + "] " + z.call(Ln.call("[cause]: " + u(t.cause), C), ", ") + " }" : C.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + z.call(C, ", ") + " }";
    }
    if (typeof t == "object" && a) {
      if (_n && typeof t[_n] == "function" && Yt)
        return Yt(t, { depth: d - n });
      if (a !== "symbol" && typeof t.inspect == "function")
        return t.inspect();
    }
    if (Ba(t)) {
      var T = [];
      return Fn && Fn.call(t, function(F, q) {
        T.push(u(q, t, true) + " => " + u(F, t));
      }), jn("Map", yt.call(t), T, h);
    }
    if (Ha(t)) {
      var I = [];
      return In && In.call(t, function(F) {
        I.push(u(F, t));
      }), jn("Set", gt.call(t), I, h);
    }
    if (Ua(t))
      return Kt("WeakMap");
    if (ja(t))
      return Kt("WeakSet");
    if (_a(t))
      return Kt("WeakRef");
    if (Na(t))
      return Ve(u(Number(t)));
    if (La(t))
      return Ve(u(Qt.call(t)));
    if (ka(t))
      return Ve(Ea.call(t));
    if (Ia(t))
      return Ve(u(String(t)));
    if (!Ca(t) && !Hn(t)) {
      var N = ht(t, u), v = Dn ? Dn(t) === Object.prototype : t instanceof Object || t.constructor === Object, A = t instanceof Object ? "" : "null prototype", S = !v && U && Object(t) === t && U in t ? nr.call(ae(t), 8, -1) : A ? "Object" : "", w = v || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", b = w + (S || A ? "[" + z.call(Ln.call([], S || [], A || []), ": ") + "] " : "");
      return N.length === 0 ? b + "{}" : h ? b + "{" + er(N, h) + "}" : b + "{ " + z.call(N, ", ") + " }";
    }
    return String(t);
  };
  function qn(e, t, r) {
    var n = (r.quoteStyle || t) === "double" ? '"' : "'";
    return n + e + n;
  }
  function Ta(e) {
    return ie.call(String(e), /"/g, "&quot;");
  }
  function Zt(e) {
    return ae(e) === "[object Array]" && (!U || !(typeof e == "object" && U in e));
  }
  function Ca(e) {
    return ae(e) === "[object Date]" && (!U || !(typeof e == "object" && U in e));
  }
  function Hn(e) {
    return ae(e) === "[object RegExp]" && (!U || !(typeof e == "object" && U in e));
  }
  function Fa(e) {
    return ae(e) === "[object Error]" && (!U || !(typeof e == "object" && U in e));
  }
  function Ia(e) {
    return ae(e) === "[object String]" && (!U || !(typeof e == "object" && U in e));
  }
  function Na(e) {
    return ae(e) === "[object Number]" && (!U || !(typeof e == "object" && U in e));
  }
  function ka(e) {
    return ae(e) === "[object Boolean]" && (!U || !(typeof e == "object" && U in e));
  }
  function Wn(e) {
    if (Oe)
      return e && typeof e == "object" && e instanceof Symbol;
    if (typeof e == "symbol")
      return true;
    if (!e || typeof e != "object" || !Xt)
      return false;
    try {
      return Xt.call(e), true;
    } catch {
    }
    return false;
  }
  function La(e) {
    if (!e || typeof e != "object" || !Qt)
      return false;
    try {
      return Qt.call(e), true;
    } catch {
    }
    return false;
  }
  var Ma = Object.prototype.hasOwnProperty || function(e) {
    return e in this;
  };
  function oe(e, t) {
    return Ma.call(e, t);
  }
  function ae(e) {
    return Pa.call(e);
  }
  function Da(e) {
    if (e.name)
      return e.name;
    var t = Oa.call(Aa.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null;
  }
  function zn(e, t) {
    if (e.indexOf)
      return e.indexOf(t);
    for (var r = 0, n = e.length; r < n; r++)
      if (e[r] === t)
        return r;
    return -1;
  }
  function Ba(e) {
    if (!yt || !e || typeof e != "object")
      return false;
    try {
      yt.call(e);
      try {
        gt.call(e);
      } catch {
        return true;
      }
      return e instanceof Map;
    } catch {
    }
    return false;
  }
  function Ua(e) {
    if (!$e || !e || typeof e != "object")
      return false;
    try {
      $e.call(e, $e);
      try {
        qe.call(e, qe);
      } catch {
        return true;
      }
      return e instanceof WeakMap;
    } catch {
    }
    return false;
  }
  function _a(e) {
    if (!Nn || !e || typeof e != "object")
      return false;
    try {
      return Nn.call(e), true;
    } catch {
    }
    return false;
  }
  function Ha(e) {
    if (!gt || !e || typeof e != "object")
      return false;
    try {
      gt.call(e);
      try {
        yt.call(e);
      } catch {
        return true;
      }
      return e instanceof Set;
    } catch {
    }
    return false;
  }
  function ja(e) {
    if (!qe || !e || typeof e != "object")
      return false;
    try {
      qe.call(e, qe);
      try {
        $e.call(e, $e);
      } catch {
        return true;
      }
      return e instanceof WeakSet;
    } catch {
    }
    return false;
  }
  function Va(e) {
    return !e || typeof e != "object" ? false : typeof HTMLElement < "u" && e instanceof HTMLElement ? true : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
  }
  function Jn(e, t) {
    if (e.length > t.maxStringLength) {
      var r = e.length - t.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
      return Jn(nr.call(e, 0, t.maxStringLength), t) + n;
    }
    var o = ie.call(ie.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, $a);
    return qn(o, "single", t);
  }
  function $a(e) {
    var t = e.charCodeAt(0), r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
    return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + xa.call(t.toString(16));
  }
  function Ve(e) {
    return "Object(" + e + ")";
  }
  function Kt(e) {
    return e + " { ? }";
  }
  function jn(e, t, r, n) {
    var o = n ? er(r, n) : z.call(r, ", ");
    return e + " (" + t + ") {" + o + "}";
  }
  function qa(e) {
    for (var t = 0; t < e.length; t++)
      if (zn(e[t], `
`) >= 0)
        return false;
    return true;
  }
  function Wa(e, t) {
    var r;
    if (e.indent === "	")
      r = "	";
    else if (typeof e.indent == "number" && e.indent > 0)
      r = z.call(Array(e.indent + 1), " ");
    else
      return null;
    return { base: r, prev: z.call(Array(t + 1), r) };
  }
  function er(e, t) {
    if (e.length === 0)
      return "";
    var r = `
` + t.prev + t.base;
    return r + z.call(e, "," + r) + `
` + t.prev;
  }
  function ht(e, t) {
    var r = Zt(e), n = [];
    if (r) {
      n.length = e.length;
      for (var o = 0; o < e.length; o++)
        n[o] = oe(e, o) ? t(e[o], e) : "";
    }
    var i = typeof Gt == "function" ? Gt(e) : [], a;
    if (Oe) {
      a = {};
      for (var l = 0; l < i.length; l++)
        a["$" + i[l]] = i[l];
    }
    for (var c in e)
      oe(e, c) && (r && String(Number(c)) === c && c < e.length || Oe && a["$" + c] instanceof Symbol || (Vn.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
    if (typeof Gt == "function")
      for (var s = 0; s < i.length; s++)
        $n.call(e, i[s]) && n.push("[" + t(i[s]) + "]: " + t(e[i[s]], e));
    return n;
  }
});
var Xn = k((Sf, Qn) => {
  var or = dt(), xe = Tn(), za = Kn(), Ja = or("%TypeError%"), vt = or("%WeakMap%", true), St = or("%Map%", true), Ga = xe("WeakMap.prototype.get", true), Ka = xe("WeakMap.prototype.set", true), Qa = xe("WeakMap.prototype.has", true), Xa = xe("Map.prototype.get", true), Ya = xe("Map.prototype.set", true), Za = xe("Map.prototype.has", true), ir = function(e, t) {
    for (var r = e, n; (n = r.next) !== null; r = n)
      if (n.key === t)
        return r.next = n.next, n.next = e.next, e.next = n, n;
  }, es = function(e, t) {
    var r = ir(e, t);
    return r && r.value;
  }, ts = function(e, t, r) {
    var n = ir(e, t);
    n ? n.value = r : e.next = { key: t, next: e.next, value: r };
  }, rs = function(e, t) {
    return !!ir(e, t);
  };
  Qn.exports = function() {
    var t, r, n, o = { assert: function(i) {
      if (!o.has(i))
        throw new Ja("Side channel does not contain " + za(i));
    }, get: function(i) {
      if (vt && i && (typeof i == "object" || typeof i == "function")) {
        if (t)
          return Ga(t, i);
      } else if (St) {
        if (r)
          return Xa(r, i);
      } else if (n)
        return es(n, i);
    }, has: function(i) {
      if (vt && i && (typeof i == "object" || typeof i == "function")) {
        if (t)
          return Qa(t, i);
      } else if (St) {
        if (r)
          return Za(r, i);
      } else if (n)
        return rs(n, i);
      return false;
    }, set: function(i, a) {
      vt && i && (typeof i == "object" || typeof i == "function") ? (t || (t = new vt()), Ka(t, i, a)) : St ? (r || (r = new St()), Ya(r, i, a)) : (n || (n = { key: {}, next: null }), ts(n, i, a));
    } };
    return o;
  };
});
var bt = k((bf, Yn) => {
  var ns = String.prototype.replace, os = /%20/g, ar = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
  Yn.exports = { default: ar.RFC3986, formatters: { RFC1738: function(e) {
    return ns.call(e, os, "+");
  }, RFC3986: function(e) {
    return String(e);
  } }, RFC1738: ar.RFC1738, RFC3986: ar.RFC3986 };
});
var lr = k((wf, eo) => {
  var is = bt(), sr = Object.prototype.hasOwnProperty, pe = Array.isArray, J = function() {
    for (var e = [], t = 0; t < 256; ++t)
      e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e;
  }(), as = function(t) {
    for (; t.length > 1; ) {
      var r = t.pop(), n = r.obj[r.prop];
      if (pe(n)) {
        for (var o = [], i = 0; i < n.length; ++i)
          typeof n[i] < "u" && o.push(n[i]);
        r.obj[r.prop] = o;
      }
    }
  }, Zn = function(t, r) {
    for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = 0; o < t.length; ++o)
      typeof t[o] < "u" && (n[o] = t[o]);
    return n;
  }, ss = function e(t, r, n) {
    if (!r)
      return t;
    if (typeof r != "object") {
      if (pe(t))
        t.push(r);
      else if (t && typeof t == "object")
        (n && (n.plainObjects || n.allowPrototypes) || !sr.call(Object.prototype, r)) && (t[r] = true);
      else
        return [t, r];
      return t;
    }
    if (!t || typeof t != "object")
      return [t].concat(r);
    var o = t;
    return pe(t) && !pe(r) && (o = Zn(t, n)), pe(t) && pe(r) ? (r.forEach(function(i, a) {
      if (sr.call(t, a)) {
        var l = t[a];
        l && typeof l == "object" && i && typeof i == "object" ? t[a] = e(l, i, n) : t.push(i);
      } else
        t[a] = i;
    }), t) : Object.keys(r).reduce(function(i, a) {
      var l = r[a];
      return sr.call(i, a) ? i[a] = e(i[a], l, n) : i[a] = l, i;
    }, o);
  }, ls = function(t, r) {
    return Object.keys(r).reduce(function(n, o) {
      return n[o] = r[o], n;
    }, t);
  }, cs = function(e, t, r) {
    var n = e.replace(/\+/g, " ");
    if (r === "iso-8859-1")
      return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch {
      return n;
    }
  }, us = function(t, r, n, o, i) {
    if (t.length === 0)
      return t;
    var a = t;
    if (typeof t == "symbol" ? a = Symbol.prototype.toString.call(t) : typeof t != "string" && (a = String(t)), n === "iso-8859-1")
      return escape(a).replace(/%u[0-9a-f]{4}/gi, function(d) {
        return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
      });
    for (var l = "", c = 0; c < a.length; ++c) {
      var s = a.charCodeAt(c);
      if (s === 45 || s === 46 || s === 95 || s === 126 || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 || i === is.RFC1738 && (s === 40 || s === 41)) {
        l += a.charAt(c);
        continue;
      }
      if (s < 128) {
        l = l + J[s];
        continue;
      }
      if (s < 2048) {
        l = l + (J[192 | s >> 6] + J[128 | s & 63]);
        continue;
      }
      if (s < 55296 || s >= 57344) {
        l = l + (J[224 | s >> 12] + J[128 | s >> 6 & 63] + J[128 | s & 63]);
        continue;
      }
      c += 1, s = 65536 + ((s & 1023) << 10 | a.charCodeAt(c) & 1023), l += J[240 | s >> 18] + J[128 | s >> 12 & 63] + J[128 | s >> 6 & 63] + J[128 | s & 63];
    }
    return l;
  }, fs = function(t) {
    for (var r = [{ obj: { o: t }, prop: "o" }], n = [], o = 0; o < r.length; ++o)
      for (var i = r[o], a = i.obj[i.prop], l = Object.keys(a), c = 0; c < l.length; ++c) {
        var s = l[c], d = a[s];
        typeof d == "object" && d !== null && n.indexOf(d) === -1 && (r.push({ obj: a, prop: s }), n.push(d));
      }
    return as(r), t;
  }, ps = function(t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  }, ds = function(t) {
    return !t || typeof t != "object" ? false : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
  }, ms = function(t, r) {
    return [].concat(t, r);
  }, hs = function(t, r) {
    if (pe(t)) {
      for (var n = [], o = 0; o < t.length; o += 1)
        n.push(r(t[o]));
      return n;
    }
    return r(t);
  };
  eo.exports = { arrayToObject: Zn, assign: ls, combine: ms, compact: fs, decode: cs, encode: us, isBuffer: ds, isRegExp: ps, maybeMap: hs, merge: ss };
});
var ao = k((Ef, io) => {
  var no = Xn(), wt = lr(), We = bt(), ys = Object.prototype.hasOwnProperty, to = { brackets: function(t) {
    return t + "[]";
  }, comma: "comma", indices: function(t, r) {
    return t + "[" + r + "]";
  }, repeat: function(t) {
    return t;
  } }, Q = Array.isArray, gs = Array.prototype.push, oo = function(e, t) {
    gs.apply(e, Q(t) ? t : [t]);
  }, vs = Date.prototype.toISOString, ro = We.default, _ = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: wt.encode, encodeValuesOnly: false, format: ro, formatter: We.formatters[ro], indices: false, serializeDate: function(t) {
    return vs.call(t);
  }, skipNulls: false, strictNullHandling: false }, Ss = function(t) {
    return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint";
  }, cr = {}, bs = function e(t, r, n, o, i, a, l, c, s, d, h, u, p, f, y, P) {
    for (var g = t, E = P, R = 0, C = false; (E = E.get(cr)) !== void 0 && !C; ) {
      var T = E.get(t);
      if (R += 1, typeof T < "u") {
        if (T === R)
          throw new RangeError("Cyclic object value");
        C = true;
      }
      typeof E.get(cr) > "u" && (R = 0);
    }
    if (typeof c == "function" ? g = c(r, g) : g instanceof Date ? g = h(g) : n === "comma" && Q(g) && (g = wt.maybeMap(g, function(de) {
      return de instanceof Date ? h(de) : de;
    })), g === null) {
      if (i)
        return l && !f ? l(r, _.encoder, y, "key", u) : r;
      g = "";
    }
    if (Ss(g) || wt.isBuffer(g)) {
      if (l) {
        var I = f ? r : l(r, _.encoder, y, "key", u);
        return [p(I) + "=" + p(l(g, _.encoder, y, "value", u))];
      }
      return [p(r) + "=" + p(String(g))];
    }
    var N = [];
    if (typeof g > "u")
      return N;
    var v;
    if (n === "comma" && Q(g))
      f && l && (g = wt.maybeMap(g, l)), v = [{ value: g.length > 0 ? g.join(",") || null : void 0 }];
    else if (Q(c))
      v = c;
    else {
      var A = Object.keys(g);
      v = s ? A.sort(s) : A;
    }
    for (var S = o && Q(g) && g.length === 1 ? r + "[]" : r, w = 0; w < v.length; ++w) {
      var b = v[w], F = typeof b == "object" && typeof b.value < "u" ? b.value : g[b];
      if (!(a && F === null)) {
        var q = Q(g) ? typeof n == "function" ? n(S, b) : S : S + (d ? "." + b : "[" + b + "]");
        P.set(t, R);
        var G = no();
        G.set(cr, P), oo(N, e(F, q, n, o, i, a, n === "comma" && f && Q(g) ? null : l, c, s, d, h, u, p, f, y, G));
      }
    }
    return N;
  }, ws = function(t) {
    if (!t)
      return _;
    if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var r = t.charset || _.charset;
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = We.default;
    if (typeof t.format < "u") {
      if (!ys.call(We.formatters, t.format))
        throw new TypeError("Unknown format option provided.");
      n = t.format;
    }
    var o = We.formatters[n], i = _.filter;
    return (typeof t.filter == "function" || Q(t.filter)) && (i = t.filter), { addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : _.addQueryPrefix, allowDots: typeof t.allowDots > "u" ? _.allowDots : !!t.allowDots, charset: r, charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : _.charsetSentinel, delimiter: typeof t.delimiter > "u" ? _.delimiter : t.delimiter, encode: typeof t.encode == "boolean" ? t.encode : _.encode, encoder: typeof t.encoder == "function" ? t.encoder : _.encoder, encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : _.encodeValuesOnly, filter: i, format: n, formatter: o, serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : _.serializeDate, skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : _.skipNulls, sort: typeof t.sort == "function" ? t.sort : null, strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : _.strictNullHandling };
  };
  io.exports = function(e, t) {
    var r = e, n = ws(t), o, i;
    typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : Q(n.filter) && (i = n.filter, o = i);
    var a = [];
    if (typeof r != "object" || r === null)
      return "";
    var l;
    t && t.arrayFormat in to ? l = t.arrayFormat : t && "indices" in t ? l = t.indices ? "indices" : "repeat" : l = "indices";
    var c = to[l];
    if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var s = c === "comma" && t && t.commaRoundTrip;
    o || (o = Object.keys(r)), n.sort && o.sort(n.sort);
    for (var d = no(), h = 0; h < o.length; ++h) {
      var u = o[h];
      n.skipNulls && r[u] === null || oo(a, bs(r[u], u, c, s, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, d));
    }
    var p = a.join(n.delimiter), f = n.addQueryPrefix === true ? "?" : "";
    return n.charsetSentinel && (n.charset === "iso-8859-1" ? f += "utf8=%26%2310003%3B&" : f += "utf8=%E2%9C%93&"), p.length > 0 ? f + p : "";
  };
});
var co = k((Pf, lo) => {
  var Re = lr(), ur = Object.prototype.hasOwnProperty, Es = Array.isArray, D = { allowDots: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: Re.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, Ps = function(e) {
    return e.replace(/&#(\d+);/g, function(t, r) {
      return String.fromCharCode(parseInt(r, 10));
    });
  }, so = function(e, t) {
    return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
  }, As = "utf8=%26%2310003%3B", Os = "utf8=%E2%9C%93", xs = function(t, r) {
    var n = { __proto__: null }, o = r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, a = o.split(r.delimiter, i), l = -1, c, s = r.charset;
    if (r.charsetSentinel)
      for (c = 0; c < a.length; ++c)
        a[c].indexOf("utf8=") === 0 && (a[c] === Os ? s = "utf-8" : a[c] === As && (s = "iso-8859-1"), l = c, c = a.length);
    for (c = 0; c < a.length; ++c)
      if (c !== l) {
        var d = a[c], h = d.indexOf("]="), u = h === -1 ? d.indexOf("=") : h + 1, p, f;
        u === -1 ? (p = r.decoder(d, D.decoder, s, "key"), f = r.strictNullHandling ? null : "") : (p = r.decoder(d.slice(0, u), D.decoder, s, "key"), f = Re.maybeMap(so(d.slice(u + 1), r), function(y) {
          return r.decoder(y, D.decoder, s, "value");
        })), f && r.interpretNumericEntities && s === "iso-8859-1" && (f = Ps(f)), d.indexOf("[]=") > -1 && (f = Es(f) ? [f] : f), ur.call(n, p) ? n[p] = Re.combine(n[p], f) : n[p] = f;
      }
    return n;
  }, Rs = function(e, t, r, n) {
    for (var o = n ? t : so(t, r), i = e.length - 1; i >= 0; --i) {
      var a, l = e[i];
      if (l === "[]" && r.parseArrays)
        a = [].concat(o);
      else {
        a = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var c = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, s = parseInt(c, 10);
        !r.parseArrays && c === "" ? a = { 0: o } : !isNaN(s) && l !== c && String(s) === c && s >= 0 && r.parseArrays && s <= r.arrayLimit ? (a = [], a[s] = o) : c !== "__proto__" && (a[c] = o);
      }
      o = a;
    }
    return o;
  }, Ts = function(t, r, n, o) {
    if (t) {
      var i = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t, a = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, c = n.depth > 0 && a.exec(i), s = c ? i.slice(0, c.index) : i, d = [];
      if (s) {
        if (!n.plainObjects && ur.call(Object.prototype, s) && !n.allowPrototypes)
          return;
        d.push(s);
      }
      for (var h = 0; n.depth > 0 && (c = l.exec(i)) !== null && h < n.depth; ) {
        if (h += 1, !n.plainObjects && ur.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
          return;
        d.push(c[1]);
      }
      return c && d.push("[" + i.slice(c.index) + "]"), Rs(d, r, n, o);
    }
  }, Cs = function(t) {
    if (!t)
      return D;
    if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = typeof t.charset > "u" ? D.charset : t.charset;
    return { allowDots: typeof t.allowDots > "u" ? D.allowDots : !!t.allowDots, allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : D.allowPrototypes, allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : D.allowSparse, arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : D.arrayLimit, charset: r, charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : D.charsetSentinel, comma: typeof t.comma == "boolean" ? t.comma : D.comma, decoder: typeof t.decoder == "function" ? t.decoder : D.decoder, delimiter: typeof t.delimiter == "string" || Re.isRegExp(t.delimiter) ? t.delimiter : D.delimiter, depth: typeof t.depth == "number" || t.depth === false ? +t.depth : D.depth, ignoreQueryPrefix: t.ignoreQueryPrefix === true, interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : D.interpretNumericEntities, parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : D.parameterLimit, parseArrays: t.parseArrays !== false, plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : D.plainObjects, strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : D.strictNullHandling };
  };
  lo.exports = function(e, t) {
    var r = Cs(t);
    if (e === "" || e === null || typeof e > "u")
      return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var n = typeof e == "string" ? xs(e, r) : e, o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), a = 0; a < i.length; ++a) {
      var l = i[a], c = Ts(l, n[l], r, typeof e == "string");
      o = Re.merge(o, c, r);
    }
    return r.allowSparse === true ? o : Re.compact(o);
  };
});
var fo = k((Af, uo) => {
  var Fs = ao(), Is = co(), Ns = bt();
  uo.exports = { formats: Ns, parse: Is, stringify: Fs };
});
var mo = k((fr, po) => {
  (function(e, t) {
    typeof define == "function" && define.amd ? define(t) : typeof fr == "object" ? po.exports = t() : e.NProgress = t();
  })(fr, function() {
    var e = {};
    e.version = "0.2.0";
    var t = e.settings = { minimum: 0.08, easing: "ease", positionUsing: "", speed: 200, trickle: true, trickleRate: 0.02, trickleSpeed: 800, showSpinner: true, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' };
    e.configure = function(u) {
      var p, f;
      for (p in u)
        f = u[p], f !== void 0 && u.hasOwnProperty(p) && (t[p] = f);
      return this;
    }, e.status = null, e.set = function(u) {
      var p = e.isStarted();
      u = r(u, t.minimum, 1), e.status = u === 1 ? null : u;
      var f = e.render(!p), y = f.querySelector(t.barSelector), P = t.speed, g = t.easing;
      return f.offsetWidth, i(function(E) {
        t.positionUsing === "" && (t.positionUsing = e.getPositioningCSS()), a(y, o(u, P, g)), u === 1 ? (a(f, { transition: "none", opacity: 1 }), f.offsetWidth, setTimeout(function() {
          a(f, { transition: "all " + P + "ms linear", opacity: 0 }), setTimeout(function() {
            e.remove(), E();
          }, P);
        }, P)) : setTimeout(E, P);
      }), this;
    }, e.isStarted = function() {
      return typeof e.status == "number";
    }, e.start = function() {
      e.status || e.set(0);
      var u = function() {
        setTimeout(function() {
          e.status && (e.trickle(), u());
        }, t.trickleSpeed);
      };
      return t.trickle && u(), this;
    }, e.done = function(u) {
      return !u && !e.status ? this : e.inc(0.3 + 0.5 * Math.random()).set(1);
    }, e.inc = function(u) {
      var p = e.status;
      return p ? (typeof u != "number" && (u = (1 - p) * r(Math.random() * p, 0.1, 0.95)), p = r(p + u, 0, 0.994), e.set(p)) : e.start();
    }, e.trickle = function() {
      return e.inc(Math.random() * t.trickleRate);
    }, function() {
      var u = 0, p = 0;
      e.promise = function(f) {
        return !f || f.state() === "resolved" ? this : (p === 0 && e.start(), u++, p++, f.always(function() {
          p--, p === 0 ? (u = 0, e.done()) : e.set((u - p) / u);
        }), this);
      };
    }(), e.render = function(u) {
      if (e.isRendered())
        return document.getElementById("nprogress");
      c(document.documentElement, "nprogress-busy");
      var p = document.createElement("div");
      p.id = "nprogress", p.innerHTML = t.template;
      var f = p.querySelector(t.barSelector), y = u ? "-100" : n(e.status || 0), P = document.querySelector(t.parent), g;
      return a(f, { transition: "all 0 linear", transform: "translate3d(" + y + "%,0,0)" }), t.showSpinner || (g = p.querySelector(t.spinnerSelector), g && h(g)), P != document.body && c(P, "nprogress-custom-parent"), P.appendChild(p), p;
    }, e.remove = function() {
      s(document.documentElement, "nprogress-busy"), s(document.querySelector(t.parent), "nprogress-custom-parent");
      var u = document.getElementById("nprogress");
      u && h(u);
    }, e.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, e.getPositioningCSS = function() {
      var u = document.body.style, p = "WebkitTransform" in u ? "Webkit" : "MozTransform" in u ? "Moz" : "msTransform" in u ? "ms" : "OTransform" in u ? "O" : "";
      return p + "Perspective" in u ? "translate3d" : p + "Transform" in u ? "translate" : "margin";
    };
    function r(u, p, f) {
      return u < p ? p : u > f ? f : u;
    }
    function n(u) {
      return (-1 + u) * 100;
    }
    function o(u, p, f) {
      var y;
      return t.positionUsing === "translate3d" ? y = { transform: "translate3d(" + n(u) + "%,0,0)" } : t.positionUsing === "translate" ? y = { transform: "translate(" + n(u) + "%,0)" } : y = { "margin-left": n(u) + "%" }, y.transition = "all " + p + "ms " + f, y;
    }
    var i = function() {
      var u = [];
      function p() {
        var f = u.shift();
        f && f(p);
      }
      return function(f) {
        u.push(f), u.length == 1 && p();
      };
    }(), a = function() {
      var u = ["Webkit", "O", "Moz", "ms"], p = {};
      function f(E) {
        return E.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(R, C) {
          return C.toUpperCase();
        });
      }
      function y(E) {
        var R = document.body.style;
        if (E in R)
          return E;
        for (var C = u.length, T = E.charAt(0).toUpperCase() + E.slice(1), I; C--; )
          if (I = u[C] + T, I in R)
            return I;
        return E;
      }
      function P(E) {
        return E = f(E), p[E] || (p[E] = y(E));
      }
      function g(E, R, C) {
        R = P(R), E.style[R] = C;
      }
      return function(E, R) {
        var C = arguments, T, I;
        if (C.length == 2)
          for (T in R)
            I = R[T], I !== void 0 && R.hasOwnProperty(T) && g(E, T, I);
        else
          g(E, C[1], C[2]);
      };
    }();
    function l(u, p) {
      var f = typeof u == "string" ? u : d(u);
      return f.indexOf(" " + p + " ") >= 0;
    }
    function c(u, p) {
      var f = d(u), y = f + p;
      l(f, p) || (u.className = y.substring(1));
    }
    function s(u, p) {
      var f = d(u), y;
      l(u, p) && (y = f.replace(" " + p + " ", " "), u.className = y.substring(1, y.length - 1));
    }
    function d(u) {
      return (" " + (u.className || "") + " ").replace(/\s+/gi, " ");
    }
    function h(u) {
      u && u.parentNode && u.parentNode.removeChild(u);
    }
    return e;
  });
});
function Fe(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
var { toString: jo } = Object.prototype, { getPrototypeOf: Rt } = Object, Xe = ((e) => (t) => {
  let r = jo.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), W = (e) => (e = e.toLowerCase(), (t) => Xe(t) === e), Ye = (e) => (t) => typeof t === e, { isArray: me } = Array, Ie = Ye("undefined");
function Vo(e) {
  return e !== null && !Ie(e) && e.constructor !== null && !Ie(e.constructor) && V(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Sr = W("ArrayBuffer");
function $o(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Sr(e.buffer), t;
}
var qo = Ye("string"), V = Ye("function"), br = Ye("number"), Ze = (e) => e !== null && typeof e == "object", Wo = (e) => e === true || e === false, Qe = (e) => {
  if (Xe(e) !== "object")
    return false;
  let t = Rt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, zo = W("Date"), Jo = W("File"), Go = W("Blob"), Ko = W("FileList"), Qo = (e) => Ze(e) && V(e.pipe), Xo = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || V(e.append) && ((t = Xe(e)) === "formdata" || t === "object" && V(e.toString) && e.toString() === "[object FormData]"));
}, Yo = W("URLSearchParams"), Zo = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ne(e, t, { allOwnKeys: r = false } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), me(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    let i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, l;
    for (n = 0; n < a; n++)
      l = i[n], t.call(null, e[l], l, e);
  }
}
function wr(e, t) {
  t = t.toLowerCase();
  let r = Object.keys(e), n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
var Er = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Pr = (e) => !Ie(e) && e !== Er;
function xt() {
  let { caseless: e } = Pr(this) && this || {}, t = {}, r = (n, o) => {
    let i = e && wr(t, o) || o;
    Qe(t[i]) && Qe(n) ? t[i] = xt(t[i], n) : Qe(n) ? t[i] = xt({}, n) : me(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Ne(arguments[n], r);
  return t;
}
var ei = (e, t, r, { allOwnKeys: n } = {}) => (Ne(t, (o, i) => {
  r && V(o) ? e[i] = Fe(o, r) : e[i] = o;
}, { allOwnKeys: n }), e), ti = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ri = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: t.prototype }), r && Object.assign(e.prototype, r);
}, ni = (e, t, r, n) => {
  let o, i, a, l = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, t)) && !l[a] && (t[a] = e[a], l[a] = true);
    e = r !== false && Rt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, oi = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  let n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, ii = (e) => {
  if (!e)
    return null;
  if (me(e))
    return e;
  let t = e.length;
  if (!br(t))
    return null;
  let r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, ai = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Rt(Uint8Array)), si = (e, t) => {
  let n = (e && e[Symbol.iterator]).call(e), o;
  for (; (o = n.next()) && !o.done; ) {
    let i = o.value;
    t.call(e, i[0], i[1]);
  }
}, li = (e, t) => {
  let r, n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, ci = W("HTMLFormElement"), ui = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, o) {
  return n.toUpperCase() + o;
}), gr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), fi = W("RegExp"), Ar = (e, t) => {
  let r = Object.getOwnPropertyDescriptors(e), n = {};
  Ne(r, (o, i) => {
    t(o, i, e) !== false && (n[i] = o);
  }), Object.defineProperties(e, n);
}, pi = (e) => {
  Ar(e, (t, r) => {
    if (V(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return false;
    let n = e[r];
    if (V(n)) {
      if (t.enumerable = false, "writable" in t) {
        t.writable = false;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, di = (e, t) => {
  let r = {}, n = (o) => {
    o.forEach((i) => {
      r[i] = true;
    });
  };
  return me(e) ? n(e) : n(String(e).split(t)), r;
}, mi = () => {
}, hi = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Ot = "abcdefghijklmnopqrstuvwxyz", vr = "0123456789", Or = { DIGIT: vr, ALPHA: Ot, ALPHA_DIGIT: Ot + Ot.toUpperCase() + vr }, yi = (e = 16, t = Or.ALPHA_DIGIT) => {
  let r = "", { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function gi(e) {
  return !!(e && V(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
var vi = (e) => {
  let t = new Array(10), r = (n, o) => {
    if (Ze(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        let i = me(n) ? [] : {};
        return Ne(n, (a, l) => {
          let c = r(a, o + 1);
          !Ie(c) && (i[l] = c);
        }), t[o] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Si = W("AsyncFunction"), bi = (e) => e && (Ze(e) || V(e)) && V(e.then) && V(e.catch), m = { isArray: me, isArrayBuffer: Sr, isBuffer: Vo, isFormData: Xo, isArrayBufferView: $o, isString: qo, isNumber: br, isBoolean: Wo, isObject: Ze, isPlainObject: Qe, isUndefined: Ie, isDate: zo, isFile: Jo, isBlob: Go, isRegExp: fi, isFunction: V, isStream: Qo, isURLSearchParams: Yo, isTypedArray: ai, isFileList: Ko, forEach: Ne, merge: xt, extend: ei, trim: Zo, stripBOM: ti, inherits: ri, toFlatObject: ni, kindOf: Xe, kindOfTest: W, endsWith: oi, toArray: ii, forEachEntry: si, matchAll: li, isHTMLForm: ci, hasOwnProperty: gr, hasOwnProp: gr, reduceDescriptors: Ar, freezeMethods: pi, toObjectSet: di, toCamelCase: ui, noop: mi, toFiniteNumber: hi, findKey: wr, global: Er, isContextDefined: Pr, ALPHABET: Or, generateString: yi, isSpecCompliantForm: gi, toJSONObject: vi, isAsyncFn: Si, isThenable: bi };
function he(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
m.inherits(he, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: m.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
} });
var xr = he.prototype, Rr = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e) => {
  Rr[e] = { value: e };
});
Object.defineProperties(he, Rr);
Object.defineProperty(xr, "isAxiosError", { value: true });
he.from = (e, t, r, n, o, i) => {
  let a = Object.create(xr);
  return m.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (l) => l !== "isAxiosError"), he.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
var O = he;
var et = null;
function Tt(e) {
  return m.isPlainObject(e) || m.isArray(e);
}
function Cr(e) {
  return m.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tr(e, t, r) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Cr(o), !r && i ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function wi(e) {
  return m.isArray(e) && !e.some(Tt);
}
var Ei = m.toFlatObject(m, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Pi(e, t, r) {
  if (!m.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = m.toFlatObject(r, { metaTokens: true, dots: false, indexes: false }, false, function(y, P) {
    return !m.isUndefined(P[y]);
  });
  let n = r.metaTokens, o = r.visitor || d, i = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && m.isSpecCompliantForm(t);
  if (!m.isFunction(o))
    throw new TypeError("visitor must be a function");
  function s(f) {
    if (f === null)
      return "";
    if (m.isDate(f))
      return f.toISOString();
    if (!c && m.isBlob(f))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return m.isArrayBuffer(f) || m.isTypedArray(f) ? c && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function d(f, y, P) {
    let g = f;
    if (f && !P && typeof f == "object") {
      if (m.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), f = JSON.stringify(f);
      else if (m.isArray(f) && wi(f) || (m.isFileList(f) || m.endsWith(y, "[]")) && (g = m.toArray(f)))
        return y = Cr(y), g.forEach(function(R, C) {
          !(m.isUndefined(R) || R === null) && t.append(a === true ? Tr([y], C, i) : a === null ? y : y + "[]", s(R));
        }), false;
    }
    return Tt(f) ? true : (t.append(Tr(P, y, i), s(f)), false);
  }
  let h = [], u = Object.assign(Ei, { defaultVisitor: d, convertValue: s, isVisitable: Tt });
  function p(f, y) {
    if (!m.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      h.push(f), m.forEach(f, function(g, E) {
        (!(m.isUndefined(g) || g === null) && o.call(t, g, m.isString(E) ? E.trim() : E, y, u)) === true && p(g, y ? y.concat(E) : [E]);
      }), h.pop();
    }
  }
  if (!m.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
var te = Pi;
function Fr(e) {
  let t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ir(e, t) {
  this._pairs = [], e && te(e, this, t);
}
var Nr = Ir.prototype;
Nr.append = function(t, r) {
  this._pairs.push([t, r]);
};
Nr.toString = function(t) {
  let r = t ? function(n) {
    return t.call(this, n, Fr);
  } : Fr;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
var tt = Ir;
function Ai(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ke(e, t, r) {
  if (!t)
    return e;
  let n = r && r.encode || Ai, o = r && r.serialize, i;
  if (o ? i = o(t, r) : i = m.isURLSearchParams(t) ? t.toString() : new tt(t, r).toString(n), i) {
    let a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
var Ct = class {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return this.handlers.push({ fulfilled: t, rejected: r, synchronous: n ? n.synchronous : false, runWhen: n ? n.runWhen : null }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    m.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}, Ft = Ct;
var rt = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false };
var kr = typeof URLSearchParams < "u" ? URLSearchParams : tt;
var Lr = typeof FormData < "u" ? FormData : null;
var Mr = typeof Blob < "u" ? Blob : null;
var Oi = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? false : typeof window < "u" && typeof document < "u";
})(), xi = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), B = { isBrowser: true, classes: { URLSearchParams: kr, FormData: Lr, Blob: Mr }, isStandardBrowserEnv: Oi, isStandardBrowserWebWorkerEnv: xi, protocols: ["http", "https", "file", "blob", "url", "data"] };
function It(e, t) {
  return te(e, new B.classes.URLSearchParams(), Object.assign({ visitor: function(r, n, o, i) {
    return B.isNode && m.isBuffer(r) ? (this.append(n, r.toString("base64")), false) : i.defaultVisitor.apply(this, arguments);
  } }, t));
}
function Ri(e) {
  return m.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ti(e) {
  let t = {}, r = Object.keys(e), n, o = r.length, i;
  for (n = 0; n < o; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function Ci(e) {
  function t(r, n, o, i) {
    let a = r[i++], l = Number.isFinite(+a), c = i >= r.length;
    return a = !a && m.isArray(o) ? o.length : a, c ? (m.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !l) : ((!o[a] || !m.isObject(o[a])) && (o[a] = []), t(r, n, o[a], i) && m.isArray(o[a]) && (o[a] = Ti(o[a])), !l);
  }
  if (m.isFormData(e) && m.isFunction(e.entries)) {
    let r = {};
    return m.forEachEntry(e, (n, o) => {
      t(Ri(n), o, r, 0);
    }), r;
  }
  return null;
}
var nt = Ci;
var Fi = { "Content-Type": void 0 };
function Ii(e, t, r) {
  if (m.isString(e))
    try {
      return (t || JSON.parse)(e), m.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
var ot = { transitional: rt, adapter: ["xhr", "http"], transformRequest: [function(t, r) {
  let n = r.getContentType() || "", o = n.indexOf("application/json") > -1, i = m.isObject(t);
  if (i && m.isHTMLForm(t) && (t = new FormData(t)), m.isFormData(t))
    return o && o ? JSON.stringify(nt(t)) : t;
  if (m.isArrayBuffer(t) || m.isBuffer(t) || m.isStream(t) || m.isFile(t) || m.isBlob(t))
    return t;
  if (m.isArrayBufferView(t))
    return t.buffer;
  if (m.isURLSearchParams(t))
    return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), t.toString();
  let l;
  if (i) {
    if (n.indexOf("application/x-www-form-urlencoded") > -1)
      return It(t, this.formSerializer).toString();
    if ((l = m.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
      let c = this.env && this.env.FormData;
      return te(l ? { "files[]": t } : t, c && new c(), this.formSerializer);
    }
  }
  return i || o ? (r.setContentType("application/json", false), Ii(t)) : t;
}], transformResponse: [function(t) {
  let r = this.transitional || ot.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
  if (t && m.isString(t) && (n && !this.responseType || o)) {
    let a = !(r && r.silentJSONParsing) && o;
    try {
      return JSON.parse(t);
    } catch (l) {
      if (a)
        throw l.name === "SyntaxError" ? O.from(l, O.ERR_BAD_RESPONSE, this, null, this.response) : l;
    }
  }
  return t;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: B.classes.FormData, Blob: B.classes.Blob }, validateStatus: function(t) {
  return t >= 200 && t < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*" } } };
m.forEach(["delete", "get", "head"], function(t) {
  ot.headers[t] = {};
});
m.forEach(["post", "put", "patch"], function(t) {
  ot.headers[t] = m.merge(Fi);
});
var ye = ot;
var Ni = m.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), Dr = (e) => {
  let t = {}, r, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), r = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!r || t[r] && Ni[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
};
var Br = Symbol("internals");
function Le(e) {
  return e && String(e).trim().toLowerCase();
}
function it(e) {
  return e === false || e == null ? e : m.isArray(e) ? e.map(it) : String(e);
}
function ki(e) {
  let t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
var Li = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Nt(e, t, r, n, o) {
  if (m.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!m.isString(t)) {
    if (m.isString(n))
      return t.indexOf(n) !== -1;
    if (m.isRegExp(n))
      return n.test(t);
  }
}
function Mi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Di(e, t) {
  let r = m.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, { value: function(o, i, a) {
      return this[n].call(this, t, o, i, a);
    }, configurable: true });
  });
}
var ge = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    let o = this;
    function i(l, c, s) {
      let d = Le(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      let h = m.findKey(o, d);
      (!h || o[h] === void 0 || s === true || s === void 0 && o[h] !== false) && (o[h || c] = it(l));
    }
    let a = (l, c) => m.forEach(l, (s, d) => i(s, d, c));
    return m.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : m.isString(t) && (t = t.trim()) && !Li(t) ? a(Dr(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Le(t), t) {
      let n = m.findKey(this, t);
      if (n) {
        let o = this[n];
        if (!r)
          return o;
        if (r === true)
          return ki(o);
        if (m.isFunction(r))
          return r.call(this, o, n);
        if (m.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Le(t), t) {
      let n = m.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Nt(this, this[n], n, r)));
    }
    return false;
  }
  delete(t, r) {
    let n = this, o = false;
    function i(a) {
      if (a = Le(a), a) {
        let l = m.findKey(n, a);
        l && (!r || Nt(n, n[l], l, r)) && (delete n[l], o = true);
      }
    }
    return m.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    let r = Object.keys(this), n = r.length, o = false;
    for (; n--; ) {
      let i = r[n];
      (!t || Nt(this, this[i], i, t, true)) && (delete this[i], o = true);
    }
    return o;
  }
  normalize(t) {
    let r = this, n = {};
    return m.forEach(this, (o, i) => {
      let a = m.findKey(n, i);
      if (a) {
        r[a] = it(o), delete r[i];
        return;
      }
      let l = t ? Mi(i) : String(i).trim();
      l !== i && delete r[i], r[l] = it(o), n[l] = true;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    let r = /* @__PURE__ */ Object.create(null);
    return m.forEach(this, (n, o) => {
      n != null && n !== false && (r[o] = t && m.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    let n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    let n = (this[Br] = this[Br] = { accessors: {} }).accessors, o = this.prototype;
    function i(a) {
      let l = Le(a);
      n[l] || (Di(o, a), n[l] = true);
    }
    return m.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
ge.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
m.freezeMethods(ge.prototype);
m.freezeMethods(ge);
var H = ge;
function Me(e, t) {
  let r = this || ye, n = t || r, o = H.from(n.headers), i = n.data;
  return m.forEach(e, function(l) {
    i = l.call(r, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function De(e) {
  return !!(e && e.__CANCEL__);
}
function Ur(e, t, r) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
m.inherits(Ur, O, { __CANCEL__: true });
var re = Ur;
function kt(e, t, r) {
  let n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new O("Request failed with status code " + r.status, [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
}
var _r = B.isStandardBrowserEnv ? function() {
  return { write: function(r, n, o, i, a, l) {
    let c = [];
    c.push(r + "=" + encodeURIComponent(n)), m.isNumber(o) && c.push("expires=" + new Date(o).toGMTString()), m.isString(i) && c.push("path=" + i), m.isString(a) && c.push("domain=" + a), l === true && c.push("secure"), document.cookie = c.join("; ");
  }, read: function(r) {
    let n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
    return n ? decodeURIComponent(n[3]) : null;
  }, remove: function(r) {
    this.write(r, "", Date.now() - 864e5);
  } };
}() : function() {
  return { write: function() {
  }, read: function() {
    return null;
  }, remove: function() {
  } };
}();
function Lt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Mt(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Be(e, t) {
  return e && !Lt(t) ? Mt(e, t) : t;
}
var Hr = B.isStandardBrowserEnv ? function() {
  let t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), n;
  function o(i) {
    let a = i;
    return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), { href: r.href, protocol: r.protocol ? r.protocol.replace(/:$/, "") : "", host: r.host, search: r.search ? r.search.replace(/^\?/, "") : "", hash: r.hash ? r.hash.replace(/^#/, "") : "", hostname: r.hostname, port: r.port, pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname };
  }
  return n = o(window.location.href), function(a) {
    let l = m.isString(a) ? o(a) : a;
    return l.protocol === n.protocol && l.host === n.host;
  };
}() : function() {
  return function() {
    return true;
  };
}();
function Dt(e) {
  let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Bi(e, t) {
  e = e || 10;
  let r = new Array(e), n = new Array(e), o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    let s = Date.now(), d = n[i];
    a || (a = s), r[o] = c, n[o] = s;
    let h = i, u = 0;
    for (; h !== o; )
      u += r[h++], h = h % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), s - a < t)
      return;
    let p = d && s - d;
    return p ? Math.round(u * 1e3 / p) : void 0;
  };
}
var jr = Bi;
function Vr(e, t) {
  let r = 0, n = jr(50, 250);
  return (o) => {
    let i = o.loaded, a = o.lengthComputable ? o.total : void 0, l = i - r, c = n(l), s = i <= a;
    r = i;
    let d = { loaded: i, total: a, progress: a ? i / a : void 0, bytes: l, rate: c || void 0, estimated: c && a && s ? (a - i) / c : void 0, event: o };
    d[t ? "download" : "upload"] = true, e(d);
  };
}
var Ui = typeof XMLHttpRequest < "u", $r = Ui && function(e) {
  return new Promise(function(r, n) {
    let o = e.data, i = H.from(e.headers).normalize(), a = e.responseType, l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    m.isFormData(o) && (B.isStandardBrowserEnv || B.isStandardBrowserWebWorkerEnv ? i.setContentType(false) : i.setContentType("multipart/form-data;", false));
    let s = new XMLHttpRequest();
    if (e.auth) {
      let p = e.auth.username || "", f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(p + ":" + f));
    }
    let d = Be(e.baseURL, e.url);
    s.open(e.method.toUpperCase(), ke(d, e.params, e.paramsSerializer), true), s.timeout = e.timeout;
    function h() {
      if (!s)
        return;
      let p = H.from("getAllResponseHeaders" in s && s.getAllResponseHeaders()), y = { data: !a || a === "text" || a === "json" ? s.responseText : s.response, status: s.status, statusText: s.statusText, headers: p, config: e, request: s };
      kt(function(g) {
        r(g), c();
      }, function(g) {
        n(g), c();
      }, y), s = null;
    }
    if ("onloadend" in s ? s.onloadend = h : s.onreadystatechange = function() {
      !s || s.readyState !== 4 || s.status === 0 && !(s.responseURL && s.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, s.onabort = function() {
      s && (n(new O("Request aborted", O.ECONNABORTED, e, s)), s = null);
    }, s.onerror = function() {
      n(new O("Network Error", O.ERR_NETWORK, e, s)), s = null;
    }, s.ontimeout = function() {
      let f = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded", y = e.transitional || rt;
      e.timeoutErrorMessage && (f = e.timeoutErrorMessage), n(new O(f, y.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED, e, s)), s = null;
    }, B.isStandardBrowserEnv) {
      let p = (e.withCredentials || Hr(d)) && e.xsrfCookieName && _r.read(e.xsrfCookieName);
      p && i.set(e.xsrfHeaderName, p);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in s && m.forEach(i.toJSON(), function(f, y) {
      s.setRequestHeader(y, f);
    }), m.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials), a && a !== "json" && (s.responseType = e.responseType), typeof e.onDownloadProgress == "function" && s.addEventListener("progress", Vr(e.onDownloadProgress, true)), typeof e.onUploadProgress == "function" && s.upload && s.upload.addEventListener("progress", Vr(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (p) => {
      s && (n(!p || p.type ? new re(null, e, s) : p), s.abort(), s = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    let u = Dt(d);
    if (u && B.protocols.indexOf(u) === -1) {
      n(new O("Unsupported protocol " + u + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    s.send(o || null);
  });
};
var at = { http: et, xhr: $r };
m.forEach(at, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
var qr = { getAdapter: (e) => {
  e = m.isArray(e) ? e : [e];
  let { length: t } = e, r, n;
  for (let o = 0; o < t && (r = e[o], !(n = m.isString(r) ? at[r.toLowerCase()] : r)); o++)
    ;
  if (!n)
    throw n === false ? new O(`Adapter ${r} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(m.hasOwnProp(at, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`);
  if (!m.isFunction(n))
    throw new TypeError("adapter is not a function");
  return n;
}, adapters: at };
function Bt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new re(null, e);
}
function st(e) {
  return Bt(e), e.headers = H.from(e.headers), e.data = Me.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", false), qr.getAdapter(e.adapter || ye.adapter)(e).then(function(n) {
    return Bt(e), n.data = Me.call(e, e.transformResponse, n), n.headers = H.from(n.headers), n;
  }, function(n) {
    return De(n) || (Bt(e), n && n.response && (n.response.data = Me.call(e, e.transformResponse, n.response), n.response.headers = H.from(n.response.headers))), Promise.reject(n);
  });
}
var Wr = (e) => e instanceof H ? e.toJSON() : e;
function K(e, t) {
  t = t || {};
  let r = {};
  function n(s, d, h) {
    return m.isPlainObject(s) && m.isPlainObject(d) ? m.merge.call({ caseless: h }, s, d) : m.isPlainObject(d) ? m.merge({}, d) : m.isArray(d) ? d.slice() : d;
  }
  function o(s, d, h) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(s))
        return n(void 0, s, h);
    } else
      return n(s, d, h);
  }
  function i(s, d) {
    if (!m.isUndefined(d))
      return n(void 0, d);
  }
  function a(s, d) {
    if (m.isUndefined(d)) {
      if (!m.isUndefined(s))
        return n(void 0, s);
    } else
      return n(void 0, d);
  }
  function l(s, d, h) {
    if (h in t)
      return n(s, d);
    if (h in e)
      return n(void 0, s);
  }
  let c = { url: i, method: i, data: i, baseURL: a, transformRequest: a, transformResponse: a, paramsSerializer: a, timeout: a, timeoutMessage: a, withCredentials: a, adapter: a, responseType: a, xsrfCookieName: a, xsrfHeaderName: a, onUploadProgress: a, onDownloadProgress: a, decompress: a, maxContentLength: a, maxBodyLength: a, beforeRedirect: a, transport: a, httpAgent: a, httpsAgent: a, cancelToken: a, socketPath: a, responseEncoding: a, validateStatus: l, headers: (s, d) => o(Wr(s), Wr(d), true) };
  return m.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    let h = c[d] || o, u = h(e[d], t[d], d);
    m.isUndefined(u) && h !== l || (r[d] = u);
  }), r;
}
var lt = "1.4.0";
var Ut = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ut[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var zr = {};
Ut.transitional = function(t, r, n) {
  function o(i, a) {
    return "[Axios v" + lt + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, l) => {
    if (t === false)
      throw new O(o(a, " has been removed" + (r ? " in " + r : "")), O.ERR_DEPRECATED);
    return r && !zr[a] && (zr[a] = true, console.warn(o(a, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(i, a, l) : true;
  };
};
function _i(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  let n = Object.keys(e), o = n.length;
  for (; o-- > 0; ) {
    let i = n[o], a = t[i];
    if (a) {
      let l = e[i], c = l === void 0 || a(l, i, e);
      if (c !== true)
        throw new O("option " + i + " must be " + c, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== true)
      throw new O("Unknown option " + i, O.ERR_BAD_OPTION);
  }
}
var ct = { assertOptions: _i, validators: Ut };
var ne = ct.validators, ve = class {
  constructor(t) {
    this.defaults = t, this.interceptors = { request: new Ft(), response: new Ft() };
  }
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = K(this.defaults, r);
    let { transitional: n, paramsSerializer: o, headers: i } = r;
    n !== void 0 && ct.assertOptions(n, { silentJSONParsing: ne.transitional(ne.boolean), forcedJSONParsing: ne.transitional(ne.boolean), clarifyTimeoutError: ne.transitional(ne.boolean) }, false), o != null && (m.isFunction(o) ? r.paramsSerializer = { serialize: o } : ct.assertOptions(o, { encode: ne.function, serialize: ne.function }, true)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a;
    a = i && m.merge(i.common, i[r.method]), a && m.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (f) => {
      delete i[f];
    }), r.headers = H.concat(a, i);
    let l = [], c = true;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === false || (c = c && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    let s = [];
    this.interceptors.response.forEach(function(y) {
      s.push(y.fulfilled, y.rejected);
    });
    let d, h = 0, u;
    if (!c) {
      let f = [st.bind(this), void 0];
      for (f.unshift.apply(f, l), f.push.apply(f, s), u = f.length, d = Promise.resolve(r); h < u; )
        d = d.then(f[h++], f[h++]);
      return d;
    }
    u = l.length;
    let p = r;
    for (h = 0; h < u; ) {
      let f = l[h++], y = l[h++];
      try {
        p = f(p);
      } catch (P) {
        y.call(this, P);
        break;
      }
    }
    try {
      d = st.call(this, p);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, u = s.length; h < u; )
      d = d.then(s[h++], s[h++]);
    return d;
  }
  getUri(t) {
    t = K(this.defaults, t);
    let r = Be(t.baseURL, t.url);
    return ke(r, t.params, t.paramsSerializer);
  }
};
m.forEach(["delete", "get", "head", "options"], function(t) {
  ve.prototype[t] = function(r, n) {
    return this.request(K(n || {}, { method: t, url: r, data: (n || {}).data }));
  };
});
m.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, a, l) {
      return this.request(K(l || {}, { method: t, headers: n ? { "Content-Type": "multipart/form-data" } : {}, url: i, data: a }));
    };
  }
  ve.prototype[t] = r(), ve.prototype[t + "Form"] = r(true);
});
var Ue = ve;
var _e = class {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    let n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i, a = new Promise((l) => {
        n.subscribe(l), i = l;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, t(function(i, a, l) {
      n.reason || (n.reason = new re(i, a, l), r(n.reason));
    });
  }
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners)
      return;
    let r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  static source() {
    let t;
    return { token: new _e(function(o) {
      t = o;
    }), cancel: t };
  }
}, Jr = _e;
function _t(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Ht(e) {
  return m.isObject(e) && e.isAxiosError === true;
}
var jt = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(jt).forEach(([e, t]) => {
  jt[t] = e;
});
var Gr = jt;
function Kr(e) {
  let t = new Ue(e), r = Fe(Ue.prototype.request, t);
  return m.extend(r, Ue.prototype, t, { allOwnKeys: true }), m.extend(r, t, null, { allOwnKeys: true }), r.create = function(o) {
    return Kr(K(e, o));
  }, r;
}
var L = Kr(ye);
L.Axios = Ue;
L.CanceledError = re;
L.CancelToken = Jr;
L.isCancel = De;
L.VERSION = lt;
L.toFormData = te;
L.AxiosError = O;
L.Cancel = L.CanceledError;
L.all = function(t) {
  return Promise.all(t);
};
L.spread = _t;
L.isAxiosError = Ht;
L.mergeConfig = K;
L.AxiosHeaders = H;
L.formToJSON = (e) => nt(m.isHTMLForm(e) ? new FormData(e) : e);
L.HttpStatusCode = Gr;
L.default = L;
var le = L;
var vo = At(Zr(), 1), Et = At(fo(), 1);
At(mo(), 1);
function X(e) {
  return new URL(e.toString(), window.location.toString());
}
function mr(e, t, r, n = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), i = o || t.toString().startsWith("/"), a = !i && !t.toString().startsWith("#") && !t.toString().startsWith("?"), l = t.toString().includes("?") || e === "get" && Object.keys(r).length, c = t.toString().includes("#"), s = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (s.search = Et.stringify((0, vo.default)(Et.parse(s.search, { ignoreQueryPrefix: true }), r), { encodeValuesOnly: true, arrayFormat: n }), r = {}), [[o ? `${s.protocol}//${s.host}` : "", i ? s.pathname : "", a ? s.pathname.substring(1) : "", l ? s.search : "", c ? s.hash : ""].join(""), r];
}
function Y(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var pr = (e) => document.dispatchEvent(new CustomEvent("cache:updated", { detail: { pages: e } })), Te = class {
  constructor() {
    this.on = true, this.version = null, this.pages = {}, this.sizeLimit = 30, this.ignoredUrl = [], this.prefetchRetries = 0, this.totalPrefetchRetries = 3;
  }
  static create() {
    return Te.instance || (Te.instance = new Te()), Te.instance;
  }
  isEmpty() {
    return Object.keys(this.pages).length === 0;
  }
  set(e, t) {
    if (this.shouldCache(e)) {
      if (Object.keys(this.pages).length >= this.sizeLimit) {
        let r = Object.keys(this.pages).sort((n, o) => {
          var _a, _b;
          let i = ((_a = this.pages[n].updatedAt) == null ? void 0 : _a.getTime()) || 0, a = ((_b = this.pages[o].updatedAt) == null ? void 0 : _b.getTime()) || 0;
          return i - a;
        })[0];
        delete this.pages[r];
      }
      this.pages[e] = t, pr(this.pages);
    }
  }
  setWithExpiration(e, t) {
    this.set(e, { ...t, expiresAt: this.getTimestamp() });
  }
  all() {
    return this.pages;
  }
  get(e) {
    if (!this.shouldCache(e) || !this.has(e))
      return;
    let t = /* @__PURE__ */ new Date();
    if (t.getTime() > this.pages[e].expiresAt.getTime() && !this.isPending(e)) {
      delete this.pages[e];
      return;
    }
    return this.pages[e] = { ...this.pages[e], updatedAt: t };
  }
  has(e) {
    return this.pages[e] !== void 0;
  }
  isPending(e) {
    return this.has(e) && this.pages[e].pending;
  }
  remove(e) {
    this.has(e) && delete this.pages[e], pr(this.pages);
  }
  removeAll() {
    this.pages = {}, pr(this.pages);
  }
  getTimestamp(e = 1) {
    let t = /* @__PURE__ */ new Date();
    return new Date(t.getTime() + e * 6e4);
  }
  ignore(e) {
    this.ignoredUrl.push(...e);
  }
  accept(e) {
    this.ignoredUrl = this.ignoredUrl.filter((t) => e.indexOf(t) !== -1);
  }
  shouldCache(e) {
    return this.on && this.ignoredUrl.indexOf(e) === -1;
  }
  createPendingCachePage(e) {
    this.set(e, { pageResponse: { component: "", props: { loading: null, errors: {} }, url: "", version: null, scrollRegions: [], rememberedState: {} }, pending: true, expiresAt: this.getTimestamp() });
  }
  prefetch(e, t = {}) {
    let { durationInMinutes: r = 1, isStatic: n = false } = t, o = typeof e == "string" ? X(e) : e, i = o.href.split(o.host)[1], a = Y(o).href;
    if (a = n ? `${a}__static__` : a, !this.get(i)) {
      if (!this.version) {
        this.prefetchRetries <= this.totalPrefetchRetries && (this.prefetchRetries++, setTimeout(() => {
          this.prefetch(e, t);
        }, 100));
        return;
      }
      return this.createPendingCachePage(i), le({ method: "get", url: a, headers: { Accept: "text/html, application/xhtml+xml", "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest", "X-Inertia": true, "X-Inertia-Version": this.version } }).then((l) => {
        let c = l.data.props.static;
        if (!(l == null ? void 0 : l.headers["x-inertia"]) && !c)
          return Promise.reject({ response: l });
        let s = l.data, d = o, h = c ? o : X(s.url);
        return d.hash && !h.hash && Y(d).href === h.href && (h.hash = d.hash, s.url = h.href), c && (s.url = o.toString()), this.set(i, { pageResponse: s, expiresAt: this.getTimestamp(r), pending: false }), Promise.resolve();
      }).catch(() => {
        console.log("Prefetch failed"), this.remove(i);
      });
    }
  }
  prefetchAll(e) {
    e.forEach(({ href: t, options: r }) => {
      this.prefetch(t, r);
    });
  }
};
function So(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function Z(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var ks = (e) => Z("before", { cancelable: true, detail: { visit: e } }), Ls = (e) => Z("error", { detail: { errors: e } }), Ms = (e) => Z("exception", { cancelable: true, detail: { exception: e } }), ho = (e) => Z("finish", { detail: { visit: e } }), Ds = (e) => Z("invalid", { cancelable: true, detail: { response: e } }), ze = (e) => Z("navigate", { detail: { page: e } }), Bs = (e) => Z("progress", { detail: { progress: e } }), Us = (e) => Z("start", { detail: { visit: e } }), yo = (e) => Z("success", { detail: { page: e } });
function dr(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => dr(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => dr(t));
}
function bo(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e)
    Object.prototype.hasOwnProperty.call(e, n) && Eo(t, wo(r, n), e[n]);
  return t;
}
function wo(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Eo(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Eo(e, wo(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  bo(r, e, t);
}
var _s = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow)
    throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(t.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} }, go = typeof window > "u", Hs = class {
  constructor() {
    this.visitId = null, this.Cache = Te.create(), this.pendingTimeout = null, this.activePrefetchId = "";
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: r }) {
    this.Cache.version = e.version, this.page = e, this.resolveComponent = t, this.swapComponent = r, this.setNavigationType(), this.clearRememberedStateOnReload(), this.isBackForwardVisit() ? this.handleBackForwardVisit(this.page) : this.isLocationVisit() ? this.handleLocationVisit(this.page) : this.handleInitialPageVisit(this.page), this.setupEventListeners();
  }
  setNavigationType() {
    this.navigationType = window.performance && window.performance.getEntriesByType("navigation").length > 0 ? window.performance.getEntriesByType("navigation")[0].type : "navigate";
  }
  clearRememberedStateOnReload() {
    var _a;
    this.navigationType === "reload" && ((_a = window.history.state) == null ? void 0 : _a.rememberedState) && delete window.history.state.rememberedState;
  }
  handleInitialPageVisit(e) {
    this.page.url += window.location.hash, this.setPage(e, { preserveState: true }).then(() => ze(e));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", So(this.handleScrollEvent.bind(this), 100), true);
  }
  scrollRegions() {
    return document.querySelectorAll("[scroll-region]");
  }
  handleScrollEvent(e) {
    typeof e.target.hasAttribute == "function" && e.target.hasAttribute("scroll-region") && this.saveScrollPositions();
  }
  saveScrollPositions() {
    this.replaceState({ ...this.page, scrollRegions: Array.from(this.scrollRegions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })) });
  }
  resetScrollPositions() {
    window.scrollTo(0, 0), this.scrollRegions().forEach((e) => {
      typeof e.scrollTo == "function" ? e.scrollTo(0, 0) : (e.scrollTop = 0, e.scrollLeft = 0);
    }), this.saveScrollPositions(), window.location.hash && setTimeout(() => {
      var _a;
      return (_a = document.getElementById(window.location.hash.slice(1))) == null ? void 0 : _a.scrollIntoView();
    });
  }
  restoreScrollPositions() {
    this.page.scrollRegions && this.scrollRegions().forEach((e, t) => {
      let r = this.page.scrollRegions[t];
      if (r)
        typeof e.scrollTo == "function" ? e.scrollTo(r.left, r.top) : (e.scrollTop = r.top, e.scrollLeft = r.left);
      else
        return;
    });
  }
  isBackForwardVisit() {
    return window.history.state && this.navigationType === "back_forward";
  }
  handleBackForwardVisit(e) {
    window.history.state.version = e.version, this.setPage(window.history.state, { preserveScroll: true, preserveState: true }).then(() => {
      this.restoreScrollPositions(), ze(e);
    });
  }
  locationVisit(e, t) {
    try {
      let r = { preserveScroll: t };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = e.href, Y(window.location).href === Y(e).href && window.location.reload();
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
  handleLocationVisit(e) {
    var _a, _b;
    let t = JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit") || "");
    window.sessionStorage.removeItem("inertiaLocationVisit"), e.url += window.location.hash, e.rememberedState = ((_a = window.history.state) == null ? void 0 : _a.rememberedState) ?? {}, e.scrollRegions = ((_b = window.history.state) == null ? void 0 : _b.scrollRegions) ?? [], this.setPage(e, { preserveScroll: t.preserveScroll, preserveState: true }).then(() => {
      t.preserveScroll && this.restoreScrollPositions(), ze(e);
    });
  }
  isLocationVisitResponse(e) {
    return !!(e && e.status === 409 && e.headers["x-inertia-location"]);
  }
  isInertiaResponse(e) {
    return !!(e == null ? void 0 : e.headers["x-inertia"]);
  }
  createVisitId() {
    return this.visitId = {}, this.visitId;
  }
  cancelVisit(e, { cancelled: t = false, interrupted: r = false }) {
    e && !e.completed && !e.cancelled && !e.interrupted && (e.cancelToken.abort(), e.onCancel(), e.completed = false, e.cancelled = t, e.interrupted = r, ho(e), e.onFinish(e));
  }
  finishVisit(e) {
    !e.cancelled && !e.interrupted && (e.completed = true, e.cancelled = false, e.interrupted = false, ho(e), e.onFinish(e));
  }
  resolvePreserveOption(e, t) {
    return typeof e == "function" ? e(t) : e === "errors" ? Object.keys(t.props.errors || {}).length > 0 : e;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: true });
  }
  cache() {
    return this.Cache;
  }
  visitCache(e) {
    this.Cache.has(e) ? this.visit(e) : setTimeout(() => {
      this.visitCache(e);
    }, 100);
  }
  visit(e, { method: t = "get", data: r = {}, replace: n = false, preserveScroll: o = false, preserveState: i = false, only: a = [], headers: l = {}, errorBag: c = "", forceFormData: s = false, onCancelToken: d = () => {
  }, onBefore: h = () => {
  }, onStart: u = () => {
  }, onProgress: p = () => {
  }, onFinish: f = () => {
  }, onCancel: y = () => {
  }, onSuccess: P = () => {
  }, onError: g = () => {
  }, queryStringArrayFormat: E = "brackets", isStatic: R = false, inFlight: C = false } = {}) {
    var _a;
    let T = typeof e == "string" ? X(e) : e;
    if ((dr(r) || s) && !(r instanceof FormData) && (r = bo(r)), !(r instanceof FormData)) {
      let [w, b] = mr(t, T, r, E);
      T = X(w), r = b;
    }
    let I = { url: T, method: t, data: r, replace: n, preserveScroll: o, preserveState: i, only: a, headers: l, errorBag: c, forceFormData: s, queryStringArrayFormat: E, cancelled: false, completed: false, interrupted: false };
    if (h(I) === false || !ks(I))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: true }), this.saveScrollPositions();
    let N = this.createVisitId();
    this.activeVisit = { ...I, onCancelToken: d, onBefore: h, onStart: u, onProgress: p, onFinish: f, onCancel: y, onSuccess: P, onError: g, queryStringArrayFormat: E, cancelToken: new AbortController(), isStatic: R, inFlight: C }, d({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: true });
    } });
    let v = Y(T).href, A = T.href.split(T.host)[1];
    if (this.Cache.isPending(A) && !C && this.activePrefetchId === A)
      return;
    !this.Cache.isPending(A) && this.pendingTimeout && (clearTimeout(this.pendingTimeout), this.pendingTimeout = null, this.activePrefetchId = "");
    let S = this.Cache.get(A);
    if (Us(I), u(I), S) {
      if (S.pending) {
        this.activePrefetchId = A, this.pendingTimeout = setTimeout(() => {
          this.visit(A, { inFlight: true });
        }, 1e3);
        return;
      } else
        this.activePrefetchId = "";
      console.log("cache hit"), o = this.resolvePreserveOption(o, S.pageResponse), i = this.resolvePreserveOption(i, S.pageResponse), i && ((_a = window.history.state) == null ? void 0 : _a.rememberedState) && S.pageResponse.component === this.page.component && (S.pageResponse.rememberedState = window.history.state.rememberedState);
      let w = T, b = X(S.pageResponse.url);
      w.hash && !b.hash && Y(w).href === b.href && (b.hash = w.hash, S.pageResponse.url = b.href), this.Cache.set(A, { pageResponse: S.pageResponse, preserveScroll: o, preserveState: i, expiresAt: S.expiresAt }), this.setPage(S.pageResponse, { visitId: N, replace: n, preserveScroll: o, preserveState: i }).then(() => {
        yo(this.page), P(this.page), this.activeVisit && this.finishVisit(this.activeVisit);
      });
    }
    S || (v = R ? `${Y(T).href}__static__` : v, console.log("cache missed: ", v), le({ method: t, url: v, data: t === "get" ? {} : r, params: t === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...l, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": true, ...a.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": a.join(",") } : {}, ...c && c.length ? { "X-Inertia-Error-Bag": c } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (w) => {
      r instanceof FormData && (w.percentage = w.progress ? Math.round(w.progress * 100) : 0, Bs(w), p(w));
    } }).then((w) => {
      var _a2;
      let b = w.data.props.static;
      if (!this.isInertiaResponse(w) && !R)
        return Promise.reject({ response: w });
      let F = w.data;
      a.length && F.component === this.page.component && (F.props = { ...this.page.props, ...F.props }), o = this.resolvePreserveOption(o, F), i = this.resolvePreserveOption(i, F), i && ((_a2 = window.history.state) == null ? void 0 : _a2.rememberedState) && F.component === this.page.component && (F.rememberedState = window.history.state.rememberedState);
      let q = T, G = b ? T : X(F.url);
      return q.hash && !G.hash && Y(q).href === G.href && (G.hash = q.hash, F.url = G.href), b && (console.log("url for static", T.toString()), F.url = T.toString()), console.log("page response: ", F.url), this.Cache.setWithExpiration(A, { pageResponse: F, preserveScroll: o, preserveState: i, expiresAt: /* @__PURE__ */ new Date() }), this.setPage(F, { visitId: N, replace: n, preserveScroll: o, preserveState: i });
    }).then(() => {
      let w = this.page.props.errors || {};
      if (Object.keys(w).length > 0) {
        let b = c ? w[c] ? w[c] : {} : w;
        return Ls(b), g(b);
      }
      return yo(this.page), P(this.page);
    }).catch((w) => {
      if (this.isInertiaResponse(w.response))
        return this.setPage(w.response.data, { visitId: N });
      if (this.isLocationVisitResponse(w.response)) {
        let b = X(w.response.headers["x-inertia-location"]), F = T;
        F.hash && !b.hash && Y(F).href === b.href && (b.hash = F.hash), this.locationVisit(b, o === true);
      } else if (w.response)
        Ds(w.response) && _s.show(w.response.data);
      else
        return Promise.reject(w);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((w) => {
      if (!le.isCancel(w)) {
        let b = Ms(w);
        if (this.activeVisit && this.finishVisit(this.activeVisit), b)
          return Promise.reject(w);
      }
    }));
  }
  setPage(e, { visitId: t = this.createVisitId(), replace: r = false, preserveScroll: n = false, preserveState: o = false } = {}) {
    return Promise.resolve(this.resolveComponent(e.component)).then((i) => {
      t === this.visitId && (e.scrollRegions = e.scrollRegions || [], e.rememberedState = e.rememberedState || {}, r = r || X(e.url).href === window.location.href, r ? this.replaceState(e) : this.pushState(e), this.swapComponent({ component: i, page: e, preserveState: o }).then(() => {
        n || this.resetScrollPositions(), r || ze(e);
      }));
    });
  }
  pushState(e) {
    this.page = e, window.history.pushState(e, "", e.url);
  }
  replaceState(e) {
    this.page = e, window.history.replaceState(e, "", e.url);
  }
  handlePopstateEvent(e) {
    if (e.state !== null) {
      let t = e.state, r = this.createVisitId();
      Promise.resolve(this.resolveComponent(t.component)).then((n) => {
        r === this.visitId && (this.page = t, this.swapComponent({ component: n, page: t, preserveState: false }).then(() => {
          this.restoreScrollPositions(), ze(t);
        }));
      });
    } else {
      let t = X(this.page.url);
      t.hash = window.location.hash, this.replaceState({ ...this.page, url: t.href }), this.resetScrollPositions();
    }
  }
  get(e, t = {}, r = {}) {
    return this.visit(e, { ...r, method: "get", data: t });
  }
  reload(e = {}) {
    return this.visit(window.location.href, { ...e, preserveScroll: true, preserveState: true });
  }
  replace(e, t = {}) {
    return console.warn(`Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia.${t.method ?? "get"}() instead.`), this.visit(e, { preserveState: true, ...t, replace: true });
  }
  post(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: true, ...r, method: "post", data: t });
  }
  put(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: true, ...r, method: "put", data: t });
  }
  patch(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: true, ...r, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: true, ...t, method: "delete" });
  }
  remember(e, t = "default") {
    var _a;
    go || this.replaceState({ ...this.page, rememberedState: { ...(_a = this.page) == null ? void 0 : _a.rememberedState, [t]: e } });
  }
  restore(e = "default") {
    var _a, _b;
    if (!go)
      return (_b = (_a = window.history.state) == null ? void 0 : _a.rememberedState) == null ? void 0 : _b[e];
  }
  on(e, t) {
    let r = (n) => {
      let o = t(n);
      n.cancelable && !n.defaultPrevented && o === false && n.preventDefault();
    };
    return document.addEventListener(`inertia:${e}`, r), () => document.removeEventListener(`inertia:${e}`, r);
  }
};
function xo(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.which > 1 || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey);
}
var j = new Hs();
Te.create();
var To = createContext(void 0);
To.displayName = "InertiaHeadContext";
var Co = createContext(void 0);
Co.displayName = "InertiaPageContext";
var ee = () => {
}, No = forwardRef(({ children: e, as: t = "a", data: r = {}, href: n, method: o = "get", preserveScroll: i = false, preserveState: a = null, replace: l = false, only: c = [], headers: s = {}, queryStringArrayFormat: d = "brackets", onClick: h = ee, onCancelToken: u = ee, onBefore: p = ee, onStart: f = ee, onProgress: y = ee, onFinish: P = ee, onCancel: g = ee, onSuccess: E = ee, onError: R = ee, isStatic: C = false, ...T }, I) => {
  let N = useCallback((S) => {
    h(S), xo(S) && (S.preventDefault(), j.visit(n, { data: r, method: o, preserveScroll: i, preserveState: a ?? o !== "get", replace: l, only: c, headers: s, onCancelToken: u, onBefore: p, onStart: f, onProgress: y, onFinish: P, onCancel: g, onSuccess: E, onError: R, isStatic: C }));
  }, [r, n, o, i, a, l, c, s, h, u, p, f, y, P, g, E, R, C]);
  t = t.toLowerCase(), o = o.toLowerCase();
  let [v, A] = mr(o, n || "", r, d);
  return n = v, r = A, t === "a" && o !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${n}" method="${o}" as="button">...</Link>`), createElement(t, { ...T, ...t === "a" ? { href: n } : {}, ref: I, onClick: N }, e);
});
No.displayName = "InertiaLink";
var sl = No;
/*! Bundled license information:

nprogress/nprogress.js:
  (* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
   * @license MIT *)
*/
const NotFound = () => {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center justify-center min-h-[calc(100vh-150px)] py-10 px-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-8xl font-black mb-2", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "text-5xl mb-8", children: "Page Not Found" }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-gray-500 text-xl leading-loose font-semibold", children: [
      "The page you are looking for was not found. ",
      /* @__PURE__ */ jsx("br", {}),
      " Maybe your URL got messed up?"
    ] }),
    /* @__PURE__ */ jsx(sl, { href: "/", className: "text-white mt-10 text-lg hover:underline font-semibold border px-4 py-2 rounded-md", children: "Go back home" })
  ] });
};
NotFound.layout = (page) => /* @__PURE__ */ jsx(Layout, { children: page, hideFooter: true });
export {
  NotFound as default
};