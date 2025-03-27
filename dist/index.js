import * as c from "react";
import ae, { forwardRef as Ro, createElement as Ue, useState as fd, useLayoutEffect as pd, useEffect as md } from "react";
import * as kt from "react-dom";
import hd from "react-dom";
function N(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    n && (typeof n == "string" ? n.includes(" ") ? n.trim().split(/\s+/).forEach((o) => t.add(o)) : t.add(n) : typeof n == "object" && Object.entries(n).forEach(([o, r]) => {
      r && t.add(o);
    }));
  return Array.from(t).join(" ");
}
const T = "design-";
var zt = { exports: {} }, Tt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function vd() {
  if (kr) return Tt;
  kr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, r, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), r.key !== void 0 && (a = "" + r.key), "key" in r) {
      s = {};
      for (var i in r)
        i !== "key" && (s[i] = r[i]);
    } else s = r;
    return r = s.ref, {
      $$typeof: e,
      type: o,
      key: a,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return Tt.Fragment = t, Tt.jsx = n, Tt.jsxs = n, Tt;
}
var Nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function gd() {
  return Lr || (Lr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === L ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case A:
          return "Fragment";
        case E:
          return "Portal";
        case D:
          return "Profiler";
        case R:
          return "StrictMode";
        case W:
          return "Suspense";
        case U:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case O:
            return (b.displayName || "Context") + ".Provider";
          case I:
            return (b._context.displayName || "Context") + ".Consumer";
          case k:
            var F = b.render;
            return b = b.displayName, b || (b = F.displayName || F.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case M:
            return F = b.displayName || null, F !== null ? F : e(b.type) || "Memo";
          case K:
            F = b._payload, b = b._init;
            try {
              return e(b(F));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function n(b) {
      try {
        t(b);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var V = F.error, Q = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return V.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Q
        ), t(b);
      }
    }
    function o() {
    }
    function r() {
      if (re === 0) {
        be = console.log, fe = console.info, B = console.warn, Z = console.error, te = console.group, X = console.groupCollapsed, J = console.groupEnd;
        var b = {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        };
        Object.defineProperties(console, {
          info: b,
          log: b,
          warn: b,
          error: b,
          group: b,
          groupCollapsed: b,
          groupEnd: b
        });
      }
      re++;
    }
    function s() {
      if (re--, re === 0) {
        var b = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ee({}, b, { value: be }),
          info: ee({}, b, { value: fe }),
          warn: ee({}, b, { value: B }),
          error: ee({}, b, { value: Z }),
          group: ee({}, b, { value: te }),
          groupCollapsed: ee({}, b, { value: X }),
          groupEnd: ee({}, b, { value: J })
        });
      }
      0 > re && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function a(b) {
      if (q === void 0)
        try {
          throw Error();
        } catch (V) {
          var F = V.stack.trim().match(/\n( *(at )?)/);
          q = F && F[1] || "", pe = -1 < V.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < V.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + q + b + pe;
    }
    function i(b, F) {
      if (!b || xe) return "";
      var V = Ie.get(b);
      if (V !== void 0) return V;
      xe = !0, V = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var Q = null;
      Q = _.H, _.H = null, r();
      try {
        var me = {
          DetermineComponentFrameRoot: function() {
            try {
              if (F) {
                var Be = function() {
                  throw Error();
                };
                if (Object.defineProperty(Be.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Be, []);
                  } catch (Oe) {
                    var Yt = Oe;
                  }
                  Reflect.construct(b, [], Be);
                } else {
                  try {
                    Be.call();
                  } catch (Oe) {
                    Yt = Oe;
                  }
                  b.call(Be.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Oe) {
                  Yt = Oe;
                }
                (Be = b()) && typeof Be.catch == "function" && Be.catch(function() {
                });
              }
            } catch (Oe) {
              if (Oe && Yt && typeof Oe.stack == "string")
                return [Oe.stack, Yt.stack];
            }
            return [null, null];
          }
        };
        me.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var oe = Object.getOwnPropertyDescriptor(
          me.DetermineComponentFrameRoot,
          "name"
        );
        oe && oe.configurable && Object.defineProperty(
          me.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var Y = me.DetermineComponentFrameRoot(), je = Y[0], it = Y[1];
        if (je && it) {
          var ve = je.split(`
`), tt = it.split(`
`);
          for (Y = oe = 0; oe < ve.length && !ve[oe].includes(
            "DetermineComponentFrameRoot"
          ); )
            oe++;
          for (; Y < tt.length && !tt[Y].includes(
            "DetermineComponentFrameRoot"
          ); )
            Y++;
          if (oe === ve.length || Y === tt.length)
            for (oe = ve.length - 1, Y = tt.length - 1; 1 <= oe && 0 <= Y && ve[oe] !== tt[Y]; )
              Y--;
          for (; 1 <= oe && 0 <= Y; oe--, Y--)
            if (ve[oe] !== tt[Y]) {
              if (oe !== 1 || Y !== 1)
                do
                  if (oe--, Y--, 0 > Y || ve[oe] !== tt[Y]) {
                    var Pt = `
` + ve[oe].replace(
                      " at new ",
                      " at "
                    );
                    return b.displayName && Pt.includes("<anonymous>") && (Pt = Pt.replace("<anonymous>", b.displayName)), typeof b == "function" && Ie.set(b, Pt), Pt;
                  }
                while (1 <= oe && 0 <= Y);
              break;
            }
        }
      } finally {
        xe = !1, _.H = Q, s(), Error.prepareStackTrace = V;
      }
      return ve = (ve = b ? b.displayName || b.name : "") ? a(ve) : "", typeof b == "function" && Ie.set(b, ve), ve;
    }
    function u(b) {
      if (b == null) return "";
      if (typeof b == "function") {
        var F = b.prototype;
        return i(
          b,
          !(!F || !F.isReactComponent)
        );
      }
      if (typeof b == "string") return a(b);
      switch (b) {
        case W:
          return a("Suspense");
        case U:
          return a("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case k:
            return b = i(b.render, !1), b;
          case M:
            return u(b.type);
          case K:
            F = b._payload, b = b._init;
            try {
              return u(b(F));
            } catch {
            }
        }
      return "";
    }
    function d() {
      var b = _.A;
      return b === null ? null : b.getOwner();
    }
    function p(b) {
      if (z.call(b, "key")) {
        var F = Object.getOwnPropertyDescriptor(b, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function f(b, F) {
      function V() {
        Ve || (Ve = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: V,
        configurable: !0
      });
    }
    function m() {
      var b = e(this.type);
      return Gt[b] || (Gt[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function v(b, F, V, Q, me, oe) {
      return V = oe.ref, b = {
        $$typeof: S,
        type: b,
        key: F,
        props: oe,
        _owner: me
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function x(b, F, V, Q, me, oe) {
      if (typeof b == "string" || typeof b == "function" || b === A || b === D || b === R || b === W || b === U || b === $ || typeof b == "object" && b !== null && (b.$$typeof === K || b.$$typeof === M || b.$$typeof === O || b.$$typeof === I || b.$$typeof === k || b.$$typeof === se || b.getModuleId !== void 0)) {
        var Y = F.children;
        if (Y !== void 0)
          if (Q)
            if (le(Y)) {
              for (Q = 0; Q < Y.length; Q++)
                h(Y[Q], b);
              Object.freeze && Object.freeze(Y);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else h(Y, b);
      } else
        Y = "", (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), b === null ? Q = "null" : le(b) ? Q = "array" : b !== void 0 && b.$$typeof === S ? (Q = "<" + (e(b.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof b, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          Q,
          Y
        );
      if (z.call(F, "key")) {
        Y = e(b);
        var je = Object.keys(F).filter(function(ve) {
          return ve !== "key";
        });
        Q = 0 < je.length ? "{key: someKey, " + je.join(": ..., ") + ": ...}" : "{key: someKey}", et[Y + Q] || (je = 0 < je.length ? "{" + je.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Q,
          Y,
          je,
          Y
        ), et[Y + Q] = !0);
      }
      if (Y = null, V !== void 0 && (n(V), Y = "" + V), p(F) && (n(F.key), Y = "" + F.key), "key" in F) {
        V = {};
        for (var it in F)
          it !== "key" && (V[it] = F[it]);
      } else V = F;
      return Y && f(
        V,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), v(b, Y, oe, me, d(), V);
    }
    function h(b, F) {
      if (typeof b == "object" && b && b.$$typeof !== Qe) {
        if (le(b))
          for (var V = 0; V < b.length; V++) {
            var Q = b[V];
            g(Q) && w(Q, F);
          }
        else if (g(b))
          b._store && (b._store.validated = 1);
        else if (b === null || typeof b != "object" ? V = null : (V = G && b[G] || b["@@iterator"], V = typeof V == "function" ? V : null), typeof V == "function" && V !== b.entries && (V = V.call(b), V !== b))
          for (; !(b = V.next()).done; )
            g(b.value) && w(b.value, F);
      }
    }
    function g(b) {
      return typeof b == "object" && b !== null && b.$$typeof === S;
    }
    function w(b, F) {
      if (b._store && !b._store.validated && b.key == null && (b._store.validated = 1, F = y(F), !Or[F])) {
        Or[F] = !0;
        var V = "";
        b && b._owner != null && b._owner !== d() && (V = null, typeof b._owner.tag == "number" ? V = e(b._owner.type) : typeof b._owner.name == "string" && (V = b._owner.name), V = " It was passed a child from " + V + ".");
        var Q = _.getCurrentStack;
        _.getCurrentStack = function() {
          var me = u(b.type);
          return Q && (me += Q() || ""), me;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          F,
          V
        ), _.getCurrentStack = Q;
      }
    }
    function y(b) {
      var F = "", V = d();
      return V && (V = e(V.type)) && (F = `

Check the render method of \`` + V + "`."), F || (b = e(b)) && (F = `

Check the top-level render call using <` + b + ">."), F;
    }
    var C = ae, S = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), O = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), G = Symbol.iterator, L = Symbol.for("react.client.reference"), _ = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, ee = Object.assign, se = Symbol.for("react.client.reference"), le = Array.isArray, re = 0, be, fe, B, Z, te, X, J;
    o.__reactDisabledLog = !0;
    var q, pe, xe = !1, Ie = new (typeof WeakMap == "function" ? WeakMap : Map)(), Qe = Symbol.for("react.client.reference"), Ve, Gt = {}, et = {}, Or = {};
    Nt.Fragment = A, Nt.jsx = function(b, F, V, Q, me) {
      return x(b, F, V, !1, Q, me);
    }, Nt.jsxs = function(b, F, V, Q, me) {
      return x(b, F, V, !0, Q, me);
    };
  }()), Nt;
}
var $r;
function xd() {
  return $r || ($r = 1, process.env.NODE_ENV === "production" ? zt.exports = vd() : zt.exports = gd()), zt.exports;
}
var l = xd();
function wd(e, t) {
  const n = c.createContext(t), o = (s) => {
    const { children: a, ...i } = s, u = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ l.jsx(n.Provider, { value: u, children: a });
  };
  o.displayName = e + "Provider";
  function r(s) {
    const a = c.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [o, r];
}
function ie(e, t = []) {
  let n = [];
  function o(s, a) {
    const i = c.createContext(a), u = n.length;
    n = [...n, a];
    const d = (f) => {
      var w;
      const { scope: m, children: v, ...x } = f, h = ((w = m == null ? void 0 : m[e]) == null ? void 0 : w[u]) || i, g = c.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ l.jsx(h.Provider, { value: g, children: v });
    };
    d.displayName = s + "Provider";
    function p(f, m) {
      var h;
      const v = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[u]) || i, x = c.useContext(v);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [d, p];
  }
  const r = () => {
    const s = n.map((a) => c.createContext(a));
    return function(i) {
      const u = (i == null ? void 0 : i[e]) || s;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: u } }),
        [i, u]
      );
    };
  };
  return r.scopeName = e, [o, yd(r, ...t)];
}
function yd(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const a = o.reduce((i, { useScope: u, scopeName: d }) => {
        const f = u(s)[`__scope${d}`];
        return { ...i, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Fr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function wn(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = Fr(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : Fr(e[r], null);
        }
      };
  };
}
function H(...e) {
  return c.useCallback(wn(...e), e);
}
var nt = c.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = c.Children.toArray(n), s = r.find(bd);
  if (s) {
    const a = s.props.children, i = r.map((u) => u === s ? c.Children.count(a) > 1 ? c.Children.only(null) : c.isValidElement(a) ? a.props.children : null : u);
    return /* @__PURE__ */ l.jsx(eo, { ...o, ref: t, children: c.isValidElement(a) ? c.cloneElement(a, void 0, i) : null });
  }
  return /* @__PURE__ */ l.jsx(eo, { ...o, ref: t, children: n });
});
nt.displayName = "Slot";
var eo = c.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (c.isValidElement(n)) {
    const r = Sd(n), s = Cd(o, n.props);
    return n.type !== c.Fragment && (s.ref = t ? wn(t, r) : r), c.cloneElement(n, s);
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
eo.displayName = "SlotClone";
var Po = ({ children: e }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: e });
function bd(e) {
  return c.isValidElement(e) && e.type === Po;
}
function Cd(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...i) => {
      s(...i), r(...i);
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Sd(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function gt(e) {
  const t = e + "CollectionProvider", [n, o] = ie(t), [r, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (v) => {
    const { scope: x, children: h } = v, g = ae.useRef(null), w = ae.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(r, { scope: x, itemMap: w, collectionRef: g, children: h });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", u = ae.forwardRef(
    (v, x) => {
      const { scope: h, children: g } = v, w = s(i, h), y = H(x, w.collectionRef);
      return /* @__PURE__ */ l.jsx(nt, { ref: y, children: g });
    }
  );
  u.displayName = i;
  const d = e + "CollectionItemSlot", p = "data-radix-collection-item", f = ae.forwardRef(
    (v, x) => {
      const { scope: h, children: g, ...w } = v, y = ae.useRef(null), C = H(x, y), S = s(d, h);
      return ae.useEffect(() => (S.itemMap.set(y, { ref: y, ...w }), () => void S.itemMap.delete(y))), /* @__PURE__ */ l.jsx(nt, { [p]: "", ref: C, children: g });
    }
  );
  f.displayName = d;
  function m(v) {
    const x = s(e + "CollectionConsumer", v);
    return ae.useCallback(() => {
      const g = x.collectionRef.current;
      if (!g) return [];
      const w = Array.from(g.querySelectorAll(`[${p}]`));
      return Array.from(x.itemMap.values()).sort(
        (S, E) => w.indexOf(S.ref.current) - w.indexOf(E.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [
    { Provider: a, Slot: u, ItemSlot: f },
    m,
    o
  ];
}
function P(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function ne(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var o;
    return (o = t.current) == null ? void 0 : o.call(t, ...n);
  }, []);
}
function de({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [o, r] = Ed({ defaultProp: t, onChange: n }), s = e !== void 0, a = s ? e : o, i = ne(n), u = c.useCallback(
    (d) => {
      if (s) {
        const f = typeof d == "function" ? d(e) : d;
        f !== e && i(f);
      } else
        r(d);
    },
    [s, e, r, i]
  );
  return [a, u];
}
function Ed({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e), [o] = n, r = c.useRef(o), s = ne(t);
  return c.useEffect(() => {
    r.current !== o && (s(o), r.current = o);
  }, [o, r, s]), n;
}
var Rd = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], j = Rd.reduce((e, t) => {
  const n = c.forwardRef((o, r) => {
    const { asChild: s, ...a } = o, i = s ? nt : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(i, { ...a, ref: r });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function To(e, t) {
  e && kt.flushSync(() => e.dispatchEvent(t));
}
var ue = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
};
function Pd(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var ce = (e) => {
  const { present: t, children: n } = e, o = Td(t), r = typeof n == "function" ? n({ present: o.isPresent }) : c.Children.only(n), s = H(o.ref, Nd(r));
  return typeof n == "function" || o.isPresent ? c.cloneElement(r, { ref: s }) : null;
};
ce.displayName = "Presence";
function Td(e) {
  const [t, n] = c.useState(), o = c.useRef({}), r = c.useRef(e), s = c.useRef("none"), a = e ? "mounted" : "unmounted", [i, u] = Pd(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const d = Xt(o.current);
    s.current = i === "mounted" ? d : "none";
  }, [i]), ue(() => {
    const d = o.current, p = r.current;
    if (p !== e) {
      const m = s.current, v = Xt(d);
      e ? u("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? u("UNMOUNT") : u(p && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, u]), ue(() => {
    if (t) {
      let d;
      const p = t.ownerDocument.defaultView ?? window, f = (v) => {
        const h = Xt(o.current).includes(v.animationName);
        if (v.target === t && h && (u("ANIMATION_END"), !r.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (v) => {
        v.target === t && (s.current = Xt(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        p.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((d) => {
      d && (o.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function Xt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Nd(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ad = c.useId || (() => {
}), _d = 0;
function ge(e) {
  const [t, n] = c.useState(Ad());
  return ue(() => {
    n((o) => o ?? String(_d++));
  }, [e]), t ? `radix-${t}` : "";
}
var No = "Collapsible", [Md, ps] = ie(No), [Dd, Ao] = Md(No), ms = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: o,
      defaultOpen: r,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [u = !1, d] = de({
      prop: o,
      defaultProp: r,
      onChange: a
    });
    return /* @__PURE__ */ l.jsx(
      Dd,
      {
        scope: n,
        disabled: s,
        contentId: ge(),
        open: u,
        onOpenToggle: c.useCallback(() => d((p) => !p), [d]),
        children: /* @__PURE__ */ l.jsx(
          j.div,
          {
            "data-state": Mo(u),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
ms.displayName = No;
var hs = "CollapsibleTrigger", vs = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...o } = e, r = Ao(hs, n);
    return /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        "aria-controls": r.contentId,
        "aria-expanded": r.open || !1,
        "data-state": Mo(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        disabled: r.disabled,
        ...o,
        ref: t,
        onClick: P(e.onClick, r.onOpenToggle)
      }
    );
  }
);
vs.displayName = hs;
var _o = "CollapsibleContent", gs = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Ao(_o, e.__scopeCollapsible);
    return /* @__PURE__ */ l.jsx(ce, { present: n || r.open, children: ({ present: s }) => /* @__PURE__ */ l.jsx(Id, { ...o, ref: t, present: s }) });
  }
);
gs.displayName = _o;
var Id = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...s } = e, a = Ao(_o, n), [i, u] = c.useState(o), d = c.useRef(null), p = H(t, d), f = c.useRef(0), m = f.current, v = c.useRef(0), x = v.current, h = a.open || i, g = c.useRef(h), w = c.useRef(void 0);
  return c.useEffect(() => {
    const y = requestAnimationFrame(() => g.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), ue(() => {
    const y = d.current;
    if (y) {
      w.current = w.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const C = y.getBoundingClientRect();
      f.current = C.height, v.current = C.width, g.current || (y.style.transitionDuration = w.current.transitionDuration, y.style.animationName = w.current.animationName), u(o);
    }
  }, [a.open, o]), /* @__PURE__ */ l.jsx(
    j.div,
    {
      "data-state": Mo(a.open),
      "data-disabled": a.disabled ? "" : void 0,
      id: a.contentId,
      hidden: !h,
      ...s,
      ref: p,
      style: {
        "--radix-collapsible-content-height": m ? `${m}px` : void 0,
        "--radix-collapsible-content-width": x ? `${x}px` : void 0,
        ...e.style
      },
      children: h && r
    }
  );
});
function Mo(e) {
  return e ? "open" : "closed";
}
var jd = ms, Od = vs, kd = gs, Ld = c.createContext(void 0);
function ze(e) {
  const t = c.useContext(Ld);
  return e || t || "ltr";
}
var $e = "Accordion", $d = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Do, Fd, Vd] = gt($e), [yn, Rw] = ie($e, [
  Vd,
  ps
]), Io = ps(), xs = ae.forwardRef(
  (e, t) => {
    const { type: n, ...o } = e, r = o, s = o;
    return /* @__PURE__ */ l.jsx(Do.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ l.jsx(Ud, { ...s, ref: t }) : /* @__PURE__ */ l.jsx(Hd, { ...r, ref: t }) });
  }
);
xs.displayName = $e;
var [ws, Bd] = yn($e), [ys, Wd] = yn(
  $e,
  { collapsible: !1 }
), Hd = ae.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: o,
      onValueChange: r = () => {
      },
      collapsible: s = !1,
      ...a
    } = e, [i, u] = de({
      prop: n,
      defaultProp: o,
      onChange: r
    });
    return /* @__PURE__ */ l.jsx(
      ws,
      {
        scope: e.__scopeAccordion,
        value: i ? [i] : [],
        onItemOpen: u,
        onItemClose: ae.useCallback(() => s && u(""), [s, u]),
        children: /* @__PURE__ */ l.jsx(ys, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ l.jsx(bs, { ...a, ref: t }) })
      }
    );
  }
), Ud = ae.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: o,
    onValueChange: r = () => {
    },
    ...s
  } = e, [a = [], i] = de({
    prop: n,
    defaultProp: o,
    onChange: r
  }), u = ae.useCallback(
    (p) => i((f = []) => [...f, p]),
    [i]
  ), d = ae.useCallback(
    (p) => i((f = []) => f.filter((m) => m !== p)),
    [i]
  );
  return /* @__PURE__ */ l.jsx(
    ws,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: u,
      onItemClose: d,
      children: /* @__PURE__ */ l.jsx(ys, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ l.jsx(bs, { ...s, ref: t }) })
    }
  );
}), [Kd, bn] = yn($e), bs = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: o, dir: r, orientation: s = "vertical", ...a } = e, i = ae.useRef(null), u = H(i, t), d = Fd(n), f = ze(r) === "ltr", m = P(e.onKeyDown, (v) => {
      var D;
      if (!$d.includes(v.key)) return;
      const x = v.target, h = d().filter((I) => {
        var O;
        return !((O = I.ref.current) != null && O.disabled);
      }), g = h.findIndex((I) => I.ref.current === x), w = h.length;
      if (g === -1) return;
      v.preventDefault();
      let y = g;
      const C = 0, S = w - 1, E = () => {
        y = g + 1, y > S && (y = C);
      }, A = () => {
        y = g - 1, y < C && (y = S);
      };
      switch (v.key) {
        case "Home":
          y = C;
          break;
        case "End":
          y = S;
          break;
        case "ArrowRight":
          s === "horizontal" && (f ? E() : A());
          break;
        case "ArrowDown":
          s === "vertical" && E();
          break;
        case "ArrowLeft":
          s === "horizontal" && (f ? A() : E());
          break;
        case "ArrowUp":
          s === "vertical" && A();
          break;
      }
      const R = y % w;
      (D = h[R].ref.current) == null || D.focus();
    });
    return /* @__PURE__ */ l.jsx(
      Kd,
      {
        scope: n,
        disabled: o,
        direction: r,
        orientation: s,
        children: /* @__PURE__ */ l.jsx(Do.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
          j.div,
          {
            ...a,
            "data-orientation": s,
            ref: u,
            onKeyDown: o ? void 0 : m
          }
        ) })
      }
    );
  }
), sn = "AccordionItem", [Gd, jo] = yn(sn), Cs = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: o, ...r } = e, s = bn(sn, n), a = Bd(sn, n), i = Io(n), u = ge(), d = o && a.value.includes(o) || !1, p = s.disabled || e.disabled;
    return /* @__PURE__ */ l.jsx(
      Gd,
      {
        scope: n,
        open: d,
        disabled: p,
        triggerId: u,
        children: /* @__PURE__ */ l.jsx(
          jd,
          {
            "data-orientation": s.orientation,
            "data-state": Ns(d),
            ...i,
            ...r,
            ref: t,
            disabled: p,
            open: d,
            onOpenChange: (f) => {
              f ? a.onItemOpen(o) : a.onItemClose(o);
            }
          }
        )
      }
    );
  }
);
Cs.displayName = sn;
var Ss = "AccordionHeader", Es = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...o } = e, r = bn($e, n), s = jo(Ss, n);
    return /* @__PURE__ */ l.jsx(
      j.h3,
      {
        "data-orientation": r.orientation,
        "data-state": Ns(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
Es.displayName = Ss;
var to = "AccordionTrigger", Rs = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...o } = e, r = bn($e, n), s = jo(to, n), a = Wd(to, n), i = Io(n);
    return /* @__PURE__ */ l.jsx(Do.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
      Od,
      {
        "aria-disabled": s.open && !a.collapsible || void 0,
        "data-orientation": r.orientation,
        id: s.triggerId,
        ...i,
        ...o,
        ref: t
      }
    ) });
  }
);
Rs.displayName = to;
var Ps = "AccordionContent", Ts = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...o } = e, r = bn($e, n), s = jo(Ps, n), a = Io(n);
    return /* @__PURE__ */ l.jsx(
      kd,
      {
        role: "region",
        "aria-labelledby": s.triggerId,
        "data-orientation": r.orientation,
        ...a,
        ...o,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
Ts.displayName = Ps;
function Ns(e) {
  return e ? "open" : "closed";
}
var As = xs, Yd = Cs, zd = Es, _s = Rs, Ms = Ts;
function Xd(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), r, s;
  for (s = 0; s < o.length; s++)
    r = o[s], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var qd = ["color"], Zd = /* @__PURE__ */ Ro(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Xd(e, qd);
  return Ue("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), Ue("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
const Pw = As, Ds = ({
  className: e,
  ref: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Yd,
  {
    ref: t,
    className: N(T + "accordion-item", e),
    ...n
  }
);
Ds.displayName = "AccordionItem";
const Is = ({
  children: e,
  className: t,
  ref: n,
  ...o
}) => /* @__PURE__ */ l.jsx(zd, { className: T + "accordion-primitive-header", children: /* @__PURE__ */ l.jsxs(
  _s,
  {
    ref: n,
    className: N(T + "accordion-primitive-trigger", t),
    ...o,
    children: [
      /* @__PURE__ */ l.jsx("div", { className: N(T + "accordion-trigger-title", t), children: e }),
      /* @__PURE__ */ l.jsx(
        Zd,
        {
          className: N(T + "chevron-down-icon", t)
        }
      )
    ]
  }
) });
Is.displayName = _s.displayName;
const js = ({
  children: e,
  className: t,
  ref: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  Ms,
  {
    ref: n,
    className: N(T + "accordion-primitive-content", t),
    ...o,
    children: /* @__PURE__ */ l.jsx("div", { className: N(T + "accordion-content-div", t), children: e })
  }
);
js.displayName = Ms.displayName;
const Jd = ({
  className: e,
  items: t,
  ref: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  As,
  {
    ref: n,
    className: N(T + "accordion", e, o.orientation),
    ...o,
    children: t.map(({ trigger: r, content: s, ...a }, i) => /* @__PURE__ */ l.jsxs(Ds, { ...a, className: o.orientation, children: [
      /* @__PURE__ */ l.jsx(Is, { children: r }),
      /* @__PURE__ */ l.jsx(js, { children: s })
    ] }, i))
  }
);
Jd.displayName = "Accordion";
function Qd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ne(e);
  c.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var ef = "DismissableLayer", no = "dismissableLayer.update", tf = "dismissableLayer.pointerDownOutside", nf = "dismissableLayer.focusOutside", Vr, Os = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...u
    } = e, d = c.useContext(Os), [p, f] = c.useState(null), m = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = c.useState({}), x = H(t, (R) => f(R)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(g), y = p ? h.indexOf(p) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= w, E = rf((R) => {
      const D = R.target, I = [...d.branches].some((O) => O.contains(D));
      !S || I || (r == null || r(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, m), A = sf((R) => {
      const D = R.target;
      [...d.branches].some((O) => O.contains(D)) || (s == null || s(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, m);
    return Qd((R) => {
      y === d.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && i && (R.preventDefault(), i()));
    }, m), c.useEffect(() => {
      if (p)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Vr = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Br(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Vr);
        };
    }, [p, m, n, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Br());
    }, [p, d]), c.useEffect(() => {
      const R = () => v({});
      return document.addEventListener(no, R), () => document.removeEventListener(no, R);
    }, []), /* @__PURE__ */ l.jsx(
      j.div,
      {
        ...u,
        ref: x,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: P(e.onFocusCapture, A.onFocusCapture),
        onBlurCapture: P(e.onBlurCapture, A.onBlurCapture),
        onPointerDownCapture: P(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
xt.displayName = ef;
var of = "DismissableLayerBranch", ks = c.forwardRef((e, t) => {
  const n = c.useContext(Os), o = c.useRef(null), r = H(t, o);
  return c.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ l.jsx(j.div, { ...e, ref: r });
});
ks.displayName = of;
function rf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ne(e), o = c.useRef(!1), r = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (i) => {
      if (i.target && !o.current) {
        let u = function() {
          Ls(
            tf,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = u, t.addEventListener("click", r.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function sf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ne(e), o = c.useRef(!1);
  return c.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && Ls(nf, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Br() {
  const e = new CustomEvent(no);
  document.dispatchEvent(e);
}
function Ls(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? To(r, s) : r.dispatchEvent(s);
}
var af = xt, cf = ks, Hn = "focusScope.autoFocusOnMount", Un = "focusScope.autoFocusOnUnmount", Wr = { bubbles: !1, cancelable: !0 }, lf = "FocusScope", Cn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: o = !1,
    onMountAutoFocus: r,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, u] = c.useState(null), d = ne(r), p = ne(s), f = c.useRef(null), m = H(t, (h) => u(h)), v = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (o) {
      let h = function(C) {
        if (v.paused || !i) return;
        const S = C.target;
        i.contains(S) ? f.current = S : We(f.current, { select: !0 });
      }, g = function(C) {
        if (v.paused || !i) return;
        const S = C.relatedTarget;
        S !== null && (i.contains(S) || We(f.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const E of C)
            E.removedNodes.length > 0 && We(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const y = new MutationObserver(w);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [o, i, v.paused]), c.useEffect(() => {
    if (i) {
      Ur.add(v);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const w = new CustomEvent(Hn, Wr);
        i.addEventListener(Hn, d), i.dispatchEvent(w), w.defaultPrevented || (uf(hf($s(i)), { select: !0 }), document.activeElement === h && We(i));
      }
      return () => {
        i.removeEventListener(Hn, d), setTimeout(() => {
          const w = new CustomEvent(Un, Wr);
          i.addEventListener(Un, p), i.dispatchEvent(w), w.defaultPrevented || We(h ?? document.body, { select: !0 }), i.removeEventListener(Un, p), Ur.remove(v);
        }, 0);
      };
    }
  }, [i, d, p, v]);
  const x = c.useCallback(
    (h) => {
      if (!n && !o || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (g && w) {
        const y = h.currentTarget, [C, S] = df(y);
        C && S ? !h.shiftKey && w === S ? (h.preventDefault(), n && We(C, { select: !0 })) : h.shiftKey && w === C && (h.preventDefault(), n && We(S, { select: !0 })) : w === y && h.preventDefault();
      }
    },
    [n, o, v.paused]
  );
  return /* @__PURE__ */ l.jsx(j.div, { tabIndex: -1, ...a, ref: m, onKeyDown: x });
});
Cn.displayName = lf;
function uf(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (We(o, { select: t }), document.activeElement !== n) return;
}
function df(e) {
  const t = $s(e), n = Hr(t, e), o = Hr(t.reverse(), e);
  return [n, o];
}
function $s(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Hr(e, t) {
  for (const n of e)
    if (!ff(n, { upTo: t })) return n;
}
function ff(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function We(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && pf(e) && t && e.select();
  }
}
var Ur = mf();
function mf() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Kr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Kr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Kr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function hf(e) {
  return e.filter((t) => t.tagName !== "A");
}
var vf = "Portal", wt = c.forwardRef((e, t) => {
  var i;
  const { container: n, ...o } = e, [r, s] = c.useState(!1);
  ue(() => s(!0), []);
  const a = n || r && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? hd.createPortal(/* @__PURE__ */ l.jsx(j.div, { ...o, ref: t }), a) : null;
});
wt.displayName = vf;
var Kn = 0;
function Oo() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Gr()), document.body.insertAdjacentElement("beforeend", e[1] ?? Gr()), Kn++, () => {
      Kn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Kn--;
    };
  }, []);
}
function Gr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ne = function() {
  return Ne = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Ne.apply(this, arguments);
};
function Fs(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function gf(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var nn = "right-scroll-bar-position", on = "width-before-scroll-bar", xf = "with-scroll-bars-hidden", wf = "--removed-body-scroll-bar-size";
function Gn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function yf(e, t) {
  var n = fd(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var bf = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Yr = /* @__PURE__ */ new WeakMap();
function Cf(e, t) {
  var n = yf(null, function(o) {
    return e.forEach(function(r) {
      return Gn(r, o);
    });
  });
  return bf(function() {
    var o = Yr.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), a = n.current;
      r.forEach(function(i) {
        s.has(i) || Gn(i, null);
      }), s.forEach(function(i) {
        r.has(i) || Gn(i, a);
      });
    }
    Yr.set(n, e);
  }, [e]), n;
}
function Sf(e) {
  return e;
}
function Ef(e, t) {
  t === void 0 && (t = Sf);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, o);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      o = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var u = function() {
        var p = a;
        a = [], p.forEach(s);
      }, d = function() {
        return Promise.resolve().then(u);
      };
      d(), n = {
        push: function(p) {
          a.push(p), d();
        },
        filter: function(p) {
          return a = a.filter(p), n;
        }
      };
    }
  };
  return r;
}
function Rf(e) {
  e === void 0 && (e = {});
  var t = Ef(null);
  return t.options = Ne({ async: !0, ssr: !1 }, e), t;
}
var Vs = function(e) {
  var t = e.sideCar, n = Fs(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return c.createElement(o, Ne({}, n));
};
Vs.isSideCarExport = !0;
function Pf(e, t) {
  return e.useMedium(t), Vs;
}
var Bs = Rf(), Yn = function() {
}, Sn = c.forwardRef(function(e, t) {
  var n = c.useRef(null), o = c.useState({
    onScrollCapture: Yn,
    onWheelCapture: Yn,
    onTouchMoveCapture: Yn
  }), r = o[0], s = o[1], a = e.forwardProps, i = e.children, u = e.className, d = e.removeScrollBar, p = e.enabled, f = e.shards, m = e.sideCar, v = e.noIsolation, x = e.inert, h = e.allowPinchZoom, g = e.as, w = g === void 0 ? "div" : g, y = e.gapMode, C = Fs(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = m, E = Cf([n, t]), A = Ne(Ne({}, C), r);
  return c.createElement(
    c.Fragment,
    null,
    p && c.createElement(S, { sideCar: Bs, removeScrollBar: d, shards: f, noIsolation: v, inert: x, setCallbacks: s, allowPinchZoom: !!h, lockRef: n, gapMode: y }),
    a ? c.cloneElement(c.Children.only(i), Ne(Ne({}, A), { ref: E })) : c.createElement(w, Ne({}, A, { className: u, ref: E }), i)
  );
});
Sn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Sn.classNames = {
  fullWidth: on,
  zeroRight: nn
};
var Tf = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Nf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Tf();
  return t && e.setAttribute("nonce", t), e;
}
function Af(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function _f(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Mf = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Nf()) && (Af(t, n), _f(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Df = function() {
  var e = Mf();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ws = function() {
  var e = Df(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, If = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zn = function(e) {
  return parseInt(e || "", 10) || 0;
}, jf = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [zn(n), zn(o), zn(r)];
}, Of = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return If;
  var t = jf(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, kf = Ws(), dt = "data-scroll-locked", Lf = function(e, t, n, o) {
  var r = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(xf, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(i, "px ").concat(o, `;
  }
  body[`).concat(dt, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(nn, ` {
    right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(on, ` {
    margin-right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(nn, " .").concat(nn, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(on, " .").concat(on, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(dt, `] {
    `).concat(wf, ": ").concat(i, `px;
  }
`);
}, zr = function() {
  var e = parseInt(document.body.getAttribute(dt) || "0", 10);
  return isFinite(e) ? e : 0;
}, $f = function() {
  c.useEffect(function() {
    return document.body.setAttribute(dt, (zr() + 1).toString()), function() {
      var e = zr() - 1;
      e <= 0 ? document.body.removeAttribute(dt) : document.body.setAttribute(dt, e.toString());
    };
  }, []);
}, Ff = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  $f();
  var s = c.useMemo(function() {
    return Of(r);
  }, [r]);
  return c.createElement(kf, { styles: Lf(s, !t, r, n ? "" : "!important") });
}, oo = !1;
if (typeof window < "u")
  try {
    var qt = Object.defineProperty({}, "passive", {
      get: function() {
        return oo = !0, !0;
      }
    });
    window.addEventListener("test", qt, qt), window.removeEventListener("test", qt, qt);
  } catch {
    oo = !1;
  }
var ct = oo ? { passive: !1 } : !1, Vf = function(e) {
  return e.tagName === "TEXTAREA";
}, Hs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Vf(e) && n[t] === "visible")
  );
}, Bf = function(e) {
  return Hs(e, "overflowY");
}, Wf = function(e) {
  return Hs(e, "overflowX");
}, Xr = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = Us(e, o);
    if (r) {
      var s = Ks(e, o), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, Hf = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Uf = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Us = function(e, t) {
  return e === "v" ? Bf(t) : Wf(t);
}, Ks = function(e, t) {
  return e === "v" ? Hf(t) : Uf(t);
}, Kf = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Gf = function(e, t, n, o, r) {
  var s = Kf(e, window.getComputedStyle(t).direction), a = s * o, i = n.target, u = t.contains(i), d = !1, p = a > 0, f = 0, m = 0;
  do {
    var v = Ks(e, i), x = v[0], h = v[1], g = v[2], w = h - g - s * x;
    (x || w) && Us(e, i) && (f += w, m += x), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !u && i !== document.body || // self content
    u && (t.contains(i) || t === i)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(m) < 1) && (d = !0), d;
}, Zt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, qr = function(e) {
  return [e.deltaX, e.deltaY];
}, Zr = function(e) {
  return e && "current" in e ? e.current : e;
}, Yf = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, zf = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Xf = 0, lt = [];
function qf(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), o = c.useRef(), r = c.useState(Xf++)[0], s = c.useState(Ws)[0], a = c.useRef(e);
  c.useEffect(function() {
    a.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var h = gf([e.lockRef.current], (e.shards || []).map(Zr), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = c.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var w = Zt(h), y = n.current, C = "deltaX" in h ? h.deltaX : y[0] - w[0], S = "deltaY" in h ? h.deltaY : y[1] - w[1], E, A = h.target, R = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && R === "h" && A.type === "range")
      return !1;
    var D = Xr(R, A);
    if (!D)
      return !0;
    if (D ? E = R : (E = R === "v" ? "h" : "v", D = Xr(R, A)), !D)
      return !1;
    if (!o.current && "changedTouches" in h && (C || S) && (o.current = E), !E)
      return !0;
    var I = o.current || E;
    return Gf(I, g, h, I === "h" ? C : S);
  }, []), u = c.useCallback(function(h) {
    var g = h;
    if (!(!lt.length || lt[lt.length - 1] !== s)) {
      var w = "deltaY" in g ? qr(g) : Zt(g), y = t.current.filter(function(E) {
        return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && Yf(E.delta, w);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var C = (a.current.shards || []).map(Zr).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), S = C.length > 0 ? i(g, C[0]) : !a.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = c.useCallback(function(h, g, w, y) {
    var C = { name: h, delta: g, target: w, should: y, shadowParent: Zf(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), p = c.useCallback(function(h) {
    n.current = Zt(h), o.current = void 0;
  }, []), f = c.useCallback(function(h) {
    d(h.type, qr(h), h.target, i(h, e.lockRef.current));
  }, []), m = c.useCallback(function(h) {
    d(h.type, Zt(h), h.target, i(h, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return lt.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", u, ct), document.addEventListener("touchmove", u, ct), document.addEventListener("touchstart", p, ct), function() {
      lt = lt.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", u, ct), document.removeEventListener("touchmove", u, ct), document.removeEventListener("touchstart", p, ct);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    x ? c.createElement(s, { styles: zf(r) }) : null,
    v ? c.createElement(Ff, { gapMode: e.gapMode }) : null
  );
}
function Zf(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Jf = Pf(Bs, qf);
var En = c.forwardRef(function(e, t) {
  return c.createElement(Sn, Ne({}, e, { ref: t, sideCar: Jf }));
});
En.classNames = Sn.classNames;
var Qf = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ut = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Qt = {}, Xn = 0, Gs = function(e) {
  return e && (e.host || Gs(e.parentNode));
}, ep = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Gs(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, tp = function(e, t, n, o) {
  var r = ep(t, Array.isArray(e) ? e : [e]);
  Qt[n] || (Qt[n] = /* @__PURE__ */ new WeakMap());
  var s = Qt[n], a = [], i = /* @__PURE__ */ new Set(), u = new Set(r), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  r.forEach(d);
  var p = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (i.has(m))
        p(m);
      else
        try {
          var v = m.getAttribute(o), x = v !== null && v !== "false", h = (ut.get(m) || 0) + 1, g = (s.get(m) || 0) + 1;
          ut.set(m, h), s.set(m, g), a.push(m), h === 1 && x && Jt.set(m, !0), g === 1 && m.setAttribute(n, "true"), x || m.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return p(t), i.clear(), Xn++, function() {
    a.forEach(function(f) {
      var m = ut.get(f) - 1, v = s.get(f) - 1;
      ut.set(f, m), s.set(f, v), m || (Jt.has(f) || f.removeAttribute(o), Jt.delete(f)), v || f.removeAttribute(n);
    }), Xn--, Xn || (ut = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Qt = {});
  };
}, ko = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Qf(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), tp(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, Lo = "Dialog", [Ys, zs] = ie(Lo), [np, Te] = Ys(Lo), Xs = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: a = !0
  } = e, i = c.useRef(null), u = c.useRef(null), [d = !1, p] = de({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ l.jsx(
    np,
    {
      scope: t,
      triggerRef: i,
      contentRef: u,
      contentId: ge(),
      titleId: ge(),
      descriptionId: ge(),
      open: d,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p((f) => !f), [p]),
      modal: a,
      children: n
    }
  );
};
Xs.displayName = Lo;
var qs = "DialogTrigger", Zs = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Te(qs, n), s = H(t, r.triggerRef);
    return /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": Vo(r.open),
        ...o,
        ref: s,
        onClick: P(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Zs.displayName = qs;
var $o = "DialogPortal", [op, Js] = Ys($o, {
  forceMount: void 0
}), Qs = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = Te($o, t);
  return /* @__PURE__ */ l.jsx(op, { scope: t, forceMount: n, children: c.Children.map(o, (a) => /* @__PURE__ */ l.jsx(ce, { present: n || s.open, children: /* @__PURE__ */ l.jsx(wt, { asChild: !0, container: r, children: a }) })) });
};
Qs.displayName = $o;
var an = "DialogOverlay", ea = c.forwardRef(
  (e, t) => {
    const n = Js(an, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = Te(an, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ l.jsx(ce, { present: o || s.open, children: /* @__PURE__ */ l.jsx(rp, { ...r, ref: t }) }) : null;
  }
);
ea.displayName = an;
var rp = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Te(an, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(En, { as: nt, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ l.jsx(
        j.div,
        {
          "data-state": Vo(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), ot = "DialogContent", ta = c.forwardRef(
  (e, t) => {
    const n = Js(ot, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = Te(ot, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(ce, { present: o || s.open, children: s.modal ? /* @__PURE__ */ l.jsx(sp, { ...r, ref: t }) : /* @__PURE__ */ l.jsx(ap, { ...r, ref: t }) });
  }
);
ta.displayName = ot;
var sp = c.forwardRef(
  (e, t) => {
    const n = Te(ot, e.__scopeDialog), o = c.useRef(null), r = H(t, n.contentRef, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return ko(s);
    }, []), /* @__PURE__ */ l.jsx(
      na,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: P(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: P(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: P(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), ap = c.forwardRef(
  (e, t) => {
    const n = Te(ot, e.__scopeDialog), o = c.useRef(!1), r = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      na,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (o.current || (i = n.triggerRef.current) == null || i.focus(), s.preventDefault()), o.current = !1, r.current = !1;
        },
        onInteractOutside: (s) => {
          var u, d;
          (u = e.onInteractOutside) == null || u.call(e, s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const a = s.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault();
        }
      }
    );
  }
), na = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...a } = e, i = Te(ot, n), u = c.useRef(null), d = H(t, u);
    return Oo(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        Cn,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ l.jsx(
            xt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Vo(i.open),
              ...a,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(cp, { titleId: i.titleId }),
        /* @__PURE__ */ l.jsx(up, { contentRef: u, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Fo = "DialogTitle", oa = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Te(Fo, n);
    return /* @__PURE__ */ l.jsx(j.h2, { id: r.titleId, ...o, ref: t });
  }
);
oa.displayName = Fo;
var ra = "DialogDescription", sa = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Te(ra, n);
    return /* @__PURE__ */ l.jsx(j.p, { id: r.descriptionId, ...o, ref: t });
  }
);
sa.displayName = ra;
var aa = "DialogClose", ia = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Te(aa, n);
    return /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: P(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
ia.displayName = aa;
function Vo(e) {
  return e ? "open" : "closed";
}
var ca = "DialogTitleWarning", [ip, la] = wd(ca, {
  contentName: ot,
  titleName: Fo,
  docsSlug: "dialog"
}), cp = ({ titleId: e }) => {
  const t = la(ca), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, lp = "DialogDescriptionWarning", up = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${la(lp).contentName}}.`;
  return c.useEffect(() => {
    var s;
    const r = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, ua = Xs, da = Zs, fa = Qs, Rn = ea, Bo = ta, Wo = oa, Ho = sa, Uo = ia, pa = "AlertDialog", [dp, Tw] = ie(pa, [
  zs
]), Fe = zs(), ma = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = Fe(t);
  return /* @__PURE__ */ l.jsx(ua, { ...o, ...n, modal: !0 });
};
ma.displayName = pa;
var fp = "AlertDialogTrigger", ha = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Fe(n);
    return /* @__PURE__ */ l.jsx(da, { ...r, ...o, ref: t });
  }
);
ha.displayName = fp;
var pp = "AlertDialogPortal", va = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = Fe(t);
  return /* @__PURE__ */ l.jsx(fa, { ...o, ...n });
};
va.displayName = pp;
var mp = "AlertDialogOverlay", ga = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Fe(n);
    return /* @__PURE__ */ l.jsx(Rn, { ...r, ...o, ref: t });
  }
);
ga.displayName = mp;
var ft = "AlertDialogContent", [hp, vp] = dp(ft), xa = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: o, ...r } = e, s = Fe(n), a = c.useRef(null), i = H(t, a), u = c.useRef(null);
    return /* @__PURE__ */ l.jsx(
      ip,
      {
        contentName: ft,
        titleName: wa,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ l.jsx(hp, { scope: n, cancelRef: u, children: /* @__PURE__ */ l.jsxs(
          Bo,
          {
            role: "alertdialog",
            ...s,
            ...r,
            ref: i,
            onOpenAutoFocus: P(r.onOpenAutoFocus, (d) => {
              var p;
              d.preventDefault(), (p = u.current) == null || p.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ l.jsx(Po, { children: o }),
              /* @__PURE__ */ l.jsx(xp, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
xa.displayName = ft;
var wa = "AlertDialogTitle", ya = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Fe(n);
    return /* @__PURE__ */ l.jsx(Wo, { ...r, ...o, ref: t });
  }
);
ya.displayName = wa;
var ba = "AlertDialogDescription", Ca = c.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = Fe(n);
  return /* @__PURE__ */ l.jsx(Ho, { ...r, ...o, ref: t });
});
Ca.displayName = ba;
var gp = "AlertDialogAction", Sa = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Fe(n);
    return /* @__PURE__ */ l.jsx(Uo, { ...r, ...o, ref: t });
  }
);
Sa.displayName = gp;
var Ea = "AlertDialogCancel", Ra = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, { cancelRef: r } = vp(Ea, n), s = Fe(n), a = H(t, r);
    return /* @__PURE__ */ l.jsx(Uo, { ...s, ...o, ref: a });
  }
);
Ra.displayName = Ea;
var xp = ({ contentRef: e }) => {
  const t = `\`${ft}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${ft}\` by passing a \`${ba}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${ft}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return c.useEffect(() => {
    var o;
    document.getElementById(
      (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, wp = ma, yp = ha, bp = va, Pa = ga, Ta = xa, Na = Sa, Aa = Ra, _a = ya, Ma = Ca;
const Cp = wp, Sp = yp, Ep = bp, Da = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Pa,
  {
    className: N(T + "alert-dialog-overlay", e),
    ...t
  }
);
Da.displayName = Pa.displayName;
const Ia = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Ta,
  {
    className: N(T + "alert-dialog-content", e),
    ...t
  }
);
Ia.displayName = Ta.displayName;
const ja = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  _a,
  {
    className: N(T + "alert-dialog-title", e),
    ...t
  }
);
ja.displayName = _a.displayName;
const Oa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Ma,
  {
    className: N(T + "alert-dialog-description", e),
    ...t
  }
);
Oa.displayName = Ma.displayName;
const ka = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Na,
  {
    className: N(T + "alert-dialog-action", e),
    ...t
  }
);
ka.displayName = Na.displayName;
const La = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Aa,
  {
    className: N(T + "alert-dialog-cancel", e),
    "data-variant": "outline",
    ...t
  }
);
La.displayName = Aa.displayName;
const Nw = ({ children: e, ...t }) => /* @__PURE__ */ l.jsx("div", { className: "design-alert-dialog-footer", ...t, children: e }), Aw = ({
  trigger: e,
  description: t,
  actionLabel: n = "Action",
  title: o,
  cancelLabel: r,
  onClickAction: s,
  onClickCancel: a,
  ...i
}) => {
  const u = async () => {
    typeof s == "function" && await s();
  }, d = async () => {
    typeof a == "function" && await a();
  };
  return /* @__PURE__ */ l.jsxs(Cp, { ...i, children: [
    /* @__PURE__ */ l.jsx(Sp, { asChild: !0, children: e }),
    /* @__PURE__ */ l.jsxs(Ep, { children: [
      /* @__PURE__ */ l.jsx(Da, {}),
      /* @__PURE__ */ l.jsxs(Ia, { ...i, children: [
        o && /* @__PURE__ */ l.jsx(ja, { children: o }),
        /* @__PURE__ */ l.jsx(Oa, { children: t }),
        /* @__PURE__ */ l.jsxs("div", { className: "design-alert-dialog-footer", children: [
          r && /* @__PURE__ */ l.jsx(La, { onClick: d, children: r }),
          /* @__PURE__ */ l.jsx(ka, { onClick: u, children: n })
        ] })
      ] })
    ] })
  ] });
};
function Lt(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function $t(e) {
  const [t, n] = c.useState(void 0);
  return ue(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const u = s.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          a = d.inlineSize, i = d.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Ko = "Checkbox", [Rp, _w] = ie(Ko), [Pp, Tp] = Rp(Ko), $a = c.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: u = "on",
      onCheckedChange: d,
      form: p,
      ...f
    } = e, [m, v] = c.useState(null), x = H(t, (S) => v(S)), h = c.useRef(!1), g = m ? p || !!m.closest("form") : !0, [w = !1, y] = de({
      prop: r,
      defaultProp: s,
      onChange: d
    }), C = c.useRef(w);
    return c.useEffect(() => {
      const S = m == null ? void 0 : m.form;
      if (S) {
        const E = () => y(C.current);
        return S.addEventListener("reset", E), () => S.removeEventListener("reset", E);
      }
    }, [m, y]), /* @__PURE__ */ l.jsxs(Pp, { scope: n, state: w, disabled: i, children: [
      /* @__PURE__ */ l.jsx(
        j.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": He(w) ? "mixed" : w,
          "aria-required": a,
          "data-state": Ba(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: u,
          ...f,
          ref: x,
          onKeyDown: P(e.onKeyDown, (S) => {
            S.key === "Enter" && S.preventDefault();
          }),
          onClick: P(e.onClick, (S) => {
            y((E) => He(E) ? !0 : !E), g && (h.current = S.isPropagationStopped(), h.current || S.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ l.jsx(
        Np,
        {
          control: m,
          bubbles: !h.current,
          name: o,
          value: u,
          checked: w,
          required: a,
          disabled: i,
          form: p,
          style: { transform: "translateX(-100%)" },
          defaultChecked: He(s) ? !1 : s
        }
      )
    ] });
  }
);
$a.displayName = Ko;
var Fa = "CheckboxIndicator", Va = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e, s = Tp(Fa, n);
    return /* @__PURE__ */ l.jsx(ce, { present: o || He(s.state) || s.state === !0, children: /* @__PURE__ */ l.jsx(
      j.span,
      {
        "data-state": Ba(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
Va.displayName = Fa;
var Np = (e) => {
  const { control: t, checked: n, bubbles: o = !0, defaultChecked: r, ...s } = e, a = c.useRef(null), i = Lt(n), u = $t(t);
  c.useEffect(() => {
    const p = a.current, f = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(f, "checked").set;
    if (i !== n && v) {
      const x = new Event("click", { bubbles: o });
      p.indeterminate = He(n), v.call(p, He(n) ? !1 : n), p.dispatchEvent(x);
    }
  }, [i, n, o]);
  const d = c.useRef(He(n) ? !1 : n);
  return /* @__PURE__ */ l.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: r ?? d.current,
      ...s,
      tabIndex: -1,
      ref: a,
      style: {
        ...e.style,
        ...u,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function He(e) {
  return e === "indeterminate";
}
function Ba(e) {
  return He(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var Wa = $a, Ap = Va;
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mp = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), Jr = (e) => {
  const t = Mp(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ha = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dp = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = Ro(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: a,
    ...i
  }, u) => Ue(
    "svg",
    {
      ref: u,
      ...Dp,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Ha("lucide", r),
      ...i
    },
    [
      ...a.map(([d, p]) => Ue(d, p)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = (e, t) => {
  const n = Ro(
    ({ className: o, ...r }, s) => Ue(Ip, {
      ref: s,
      iconNode: t,
      className: Ha(
        `lucide-${_p(Jr(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = Jr(e), n;
};
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Go = Xe("check", jp);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ua = Xe("chevron-down", Op);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Lp = Xe("chevron-left", kp);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ka = Xe("chevron-right", $p);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Vp = Xe("chevron-up", Fp);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ga = Xe("circle", Bp);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Hp = Xe("ellipsis", Wp);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ya = Xe("x", Up), Kp = ({
  className: e,
  ref: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Wa,
  {
    ref: t,
    className: N(T + "checkbox", e),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      Ap,
      {
        className: N(T + "checkbox-indicator", e),
        children: /* @__PURE__ */ l.jsx(Go, { className: N(T + "checkbox-check", e) })
      }
    )
  }
);
Kp.displayName = Wa.displayName;
const Gp = ua, Yp = da, zp = fa, cn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Uo,
  {
    className: N(T + "dialog-close", e),
    ...t
  }
);
cn.displayName = Rn.displayName;
const za = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Rn,
  {
    className: N(T + "dialog-overlay", e),
    ...t
  }
);
za.displayName = Rn.displayName;
const Xa = ({
  children: e,
  className: t,
  closeButton: n = !1,
  ...o
}) => /* @__PURE__ */ l.jsxs(
  Bo,
  {
    className: N(T + "dialog-content", t),
    ...o,
    children: [
      e,
      n && /* @__PURE__ */ l.jsxs(cn, { children: [
        /* @__PURE__ */ l.jsx(
          Ya,
          {
            style: {
              height: "26px",
              width: "26px"
            }
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
);
Xa.displayName = Bo.displayName;
const qa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx("div", { className: N(T + "dialog-header", e), ...t });
qa.displayName = "DialogHeader";
const Za = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx("div", { className: N(T + "dialog-footer", e), ...t });
Za.displayName = "DialogFooter";
const Ja = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Wo,
  {
    className: N(T + "dialog-title", e),
    ...t
  }
);
Ja.displayName = Wo.displayName;
const Qa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Ho,
  {
    className: N(T + "dialog-description", e),
    ...t
  }
);
Qa.displayName = Ho.displayName;
const Mw = ({
  // Custom Props
  trigger: e,
  closeButton: t = !1,
  overlay: n = !0,
  title: o,
  description: r,
  cancelLabel: s,
  onCancel: a,
  actionLabel: i,
  onAction: u,
  children: d,
  ...p
}) => {
  const f = async () => {
    typeof a == "function" && await a();
  }, m = async () => {
    typeof u == "function" && await u();
  };
  return /* @__PURE__ */ l.jsxs(Gp, { ...p, children: [
    /* @__PURE__ */ l.jsx(Yp, { asChild: !0, children: e }),
    /* @__PURE__ */ l.jsxs(zp, { children: [
      n && /* @__PURE__ */ l.jsx(za, {}),
      /* @__PURE__ */ l.jsx(Xa, { ...p, closeButton: t, children: /* @__PURE__ */ l.jsxs("div", { className: N(T + "dialog-content-wrapper"), children: [
        (o || r) && /* @__PURE__ */ l.jsxs(qa, { children: [
          o && /* @__PURE__ */ l.jsx(Ja, { children: o }),
          r && /* @__PURE__ */ l.jsx(Qa, { children: r })
        ] }),
        d,
        (s || i) && /* @__PURE__ */ l.jsxs(Za, { children: [
          s && /* @__PURE__ */ l.jsx(cn, { asChild: !0, children: /* @__PURE__ */ l.jsx(
            "button",
            {
              className: N(T + "dialog-close-cancel"),
              onClick: f,
              children: s
            }
          ) }),
          i && /* @__PURE__ */ l.jsx(cn, { asChild: !0, children: /* @__PURE__ */ l.jsx(
            "button",
            {
              className: N(T + "dialog-close-action"),
              onClick: m,
              children: i
            }
          ) })
        ] })
      ] }) })
    ] })
  ] });
}, Xp = ["top", "right", "bottom", "left"], Ke = Math.min, we = Math.max, ln = Math.round, en = Math.floor, Ae = (e) => ({
  x: e,
  y: e
}), qp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zp = {
  start: "end",
  end: "start"
};
function ro(e, t, n) {
  return we(e, Ke(t, n));
}
function ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Le(e) {
  return e.split("-")[0];
}
function yt(e) {
  return e.split("-")[1];
}
function Yo(e) {
  return e === "x" ? "y" : "x";
}
function zo(e) {
  return e === "y" ? "height" : "width";
}
function Ge(e) {
  return ["top", "bottom"].includes(Le(e)) ? "y" : "x";
}
function Xo(e) {
  return Yo(Ge(e));
}
function Jp(e, t, n) {
  n === void 0 && (n = !1);
  const o = yt(e), r = Xo(e), s = zo(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = un(a)), [a, un(a)];
}
function Qp(e) {
  const t = un(e);
  return [so(e), t, so(t)];
}
function so(e) {
  return e.replace(/start|end/g, (t) => Zp[t]);
}
function em(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], s = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? s : a;
    default:
      return [];
  }
}
function tm(e, t, n, o) {
  const r = yt(e);
  let s = em(Le(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(so)))), s;
}
function un(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qp[t]);
}
function nm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ei(e) {
  return typeof e != "number" ? nm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function dn(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Qr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = Ge(t), a = Xo(t), i = zo(a), u = Le(t), d = s === "y", p = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, m = o[i] / 2 - r[i] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: p,
        y: o.y - r.height
      };
      break;
    case "bottom":
      v = {
        x: p,
        y: o.y + o.height
      };
      break;
    case "right":
      v = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: o.x - r.width,
        y: f
      };
      break;
    default:
      v = {
        x: o.x,
        y: o.y
      };
  }
  switch (yt(t)) {
    case "start":
      v[a] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[a] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const om = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = s.filter(Boolean), u = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: p,
    y: f
  } = Qr(d, o, u), m = o, v = {}, x = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: w
    } = i[h], {
      x: y,
      y: C,
      data: S,
      reset: E
    } = await w({
      x: p,
      y: f,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: v,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = y ?? p, f = C ?? f, v = {
      ...v,
      [g]: {
        ...v[g],
        ...S
      }
    }, E && x <= 50 && (x++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (d = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: p,
      y: f
    } = Qr(d, m, u)), h = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: r,
    middlewareData: v
  };
};
async function Mt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: a,
    elements: i,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: v = 0
  } = ke(t, e), x = ei(v), g = i[m ? f === "floating" ? "reference" : "floating" : f], w = dn(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: u
  })), y = f === "floating" ? {
    x: o,
    y: r,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = dn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: C,
    strategy: u
  }) : y);
  return {
    top: (w.top - E.top + x.top) / S.y,
    bottom: (E.bottom - w.bottom + x.bottom) / S.y,
    left: (w.left - E.left + x.left) / S.x,
    right: (E.right - w.right + x.right) / S.x
  };
}
const rm = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: u
    } = t, {
      element: d,
      padding: p = 0
    } = ke(e, t) || {};
    if (d == null)
      return {};
    const f = ei(p), m = {
      x: n,
      y: o
    }, v = Xo(r), x = zo(v), h = await a.getDimensions(d), g = v === "y", w = g ? "top" : "left", y = g ? "bottom" : "right", C = g ? "clientHeight" : "clientWidth", S = s.reference[x] + s.reference[v] - m[v] - s.floating[x], E = m[v] - s.reference[v], A = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let R = A ? A[C] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(A))) && (R = i.floating[C] || s.floating[x]);
    const D = S / 2 - E / 2, I = R / 2 - h[x] / 2 - 1, O = Ke(f[w], I), k = Ke(f[y], I), W = O, U = R - h[x] - k, M = R / 2 - h[x] / 2 + D, K = ro(W, M, U), $ = !u.arrow && yt(r) != null && M !== K && s.reference[x] / 2 - (M < W ? O : k) - h[x] / 2 < 0, G = $ ? M < W ? M - W : M - U : 0;
    return {
      [v]: m[v] + G,
      data: {
        [v]: K,
        centerOffset: M - K - G,
        ...$ && {
          alignmentOffset: G
        }
      },
      reset: $
    };
  }
}), sm = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: u,
        elements: d
      } = t, {
        mainAxis: p = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: h = !0,
        ...g
      } = ke(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = Le(r), y = Ge(i), C = Le(i) === i, S = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), E = m || (C || !h ? [un(i)] : Qp(i)), A = x !== "none";
      !m && A && E.push(...tm(i, h, x, S));
      const R = [i, ...E], D = await Mt(t, g), I = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (p && I.push(D[w]), f) {
        const M = Jp(r, a, S);
        I.push(D[M[0]], D[M[1]]);
      }
      if (O = [...O, {
        placement: r,
        overflows: I
      }], !I.every((M) => M <= 0)) {
        var k, W;
        const M = (((k = s.flip) == null ? void 0 : k.index) || 0) + 1, K = R[M];
        if (K)
          return {
            data: {
              index: M,
              overflows: O
            },
            reset: {
              placement: K
            }
          };
        let $ = (W = O.filter((G) => G.overflows[0] <= 0).sort((G, L) => G.overflows[1] - L.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!$)
          switch (v) {
            case "bestFit": {
              var U;
              const G = (U = O.filter((L) => {
                if (A) {
                  const _ = Ge(L.placement);
                  return _ === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  _ === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((_) => _ > 0).reduce((_, z) => _ + z, 0)]).sort((L, _) => L[1] - _[1])[0]) == null ? void 0 : U[0];
              G && ($ = G);
              break;
            }
            case "initialPlacement":
              $ = i;
              break;
          }
        if (r !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function es(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ts(e) {
  return Xp.some((t) => e[t] >= 0);
}
const am = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = ke(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await Mt(t, {
            ...r,
            elementContext: "reference"
          }), a = es(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ts(a)
            }
          };
        }
        case "escaped": {
          const s = await Mt(t, {
            ...r,
            altBoundary: !0
          }), a = es(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ts(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function im(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = Le(n), i = yt(n), u = Ge(n) === "y", d = ["left", "top"].includes(a) ? -1 : 1, p = s && u ? -1 : 1, f = ke(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: x
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof x == "number" && (v = i === "end" ? x * -1 : x), u ? {
    x: v * p,
    y: m * d
  } : {
    x: m * d,
    y: v * p
  };
}
const cm = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: a,
        middlewareData: i
      } = t, u = await im(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (o = i.arrow) != null && o.alignmentOffset ? {} : {
        x: r + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: a
        }
      };
    }
  };
}, lm = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (g) => {
            let {
              x: w,
              y
            } = g;
            return {
              x: w,
              y
            };
          }
        },
        ...u
      } = ke(e, t), d = {
        x: n,
        y: o
      }, p = await Mt(t, u), f = Ge(Le(r)), m = Yo(f);
      let v = d[m], x = d[f];
      if (s) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", y = v + p[g], C = v - p[w];
        v = ro(y, v, C);
      }
      if (a) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", y = x + p[g], C = x - p[w];
        x = ro(y, x, C);
      }
      const h = i.fn({
        ...t,
        [m]: v,
        [f]: x
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - o,
          enabled: {
            [m]: s,
            [f]: a
          }
        }
      };
    }
  };
}, um = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = ke(e, t), p = {
        x: n,
        y: o
      }, f = Ge(r), m = Yo(f);
      let v = p[m], x = p[f];
      const h = ke(i, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (u) {
        const C = m === "y" ? "height" : "width", S = s.reference[m] - s.floating[C] + g.mainAxis, E = s.reference[m] + s.reference[C] - g.mainAxis;
        v < S ? v = S : v > E && (v = E);
      }
      if (d) {
        var w, y;
        const C = m === "y" ? "width" : "height", S = ["top", "left"].includes(Le(r)), E = s.reference[f] - s.floating[C] + (S && ((w = a.offset) == null ? void 0 : w[f]) || 0) + (S ? 0 : g.crossAxis), A = s.reference[f] + s.reference[C] + (S ? 0 : ((y = a.offset) == null ? void 0 : y[f]) || 0) - (S ? g.crossAxis : 0);
        x < E ? x = E : x > A && (x = A);
      }
      return {
        [m]: v,
        [f]: x
      };
    }
  };
}, dm = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...d
      } = ke(e, t), p = await Mt(t, d), f = Le(r), m = yt(r), v = Ge(r) === "y", {
        width: x,
        height: h
      } = s.floating;
      let g, w;
      f === "top" || f === "bottom" ? (g = f, w = m === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, g = m === "end" ? "top" : "bottom");
      const y = h - p.top - p.bottom, C = x - p.left - p.right, S = Ke(h - p[g], y), E = Ke(x - p[w], C), A = !t.middlewareData.shift;
      let R = S, D = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (D = C), (o = t.middlewareData.shift) != null && o.enabled.y && (R = y), A && !m) {
        const O = we(p.left, 0), k = we(p.right, 0), W = we(p.top, 0), U = we(p.bottom, 0);
        v ? D = x - 2 * (O !== 0 || k !== 0 ? O + k : we(p.left, p.right)) : R = h - 2 * (W !== 0 || U !== 0 ? W + U : we(p.top, p.bottom));
      }
      await u({
        ...t,
        availableWidth: D,
        availableHeight: R
      });
      const I = await a.getDimensions(i.floating);
      return x !== I.width || h !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pn() {
  return typeof window < "u";
}
function bt(e) {
  return ti(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ye(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Me(e) {
  var t;
  return (t = (ti(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ti(e) {
  return Pn() ? e instanceof Node || e instanceof ye(e).Node : !1;
}
function Re(e) {
  return Pn() ? e instanceof Element || e instanceof ye(e).Element : !1;
}
function _e(e) {
  return Pn() ? e instanceof HTMLElement || e instanceof ye(e).HTMLElement : !1;
}
function ns(e) {
  return !Pn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ye(e).ShadowRoot;
}
function Ft(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = Pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function fm(e) {
  return ["table", "td", "th"].includes(bt(e));
}
function Tn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function qo(e) {
  const t = Zo(), n = Re(e) ? Pe(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function pm(e) {
  let t = Ye(e);
  for (; _e(t) && !mt(t); ) {
    if (qo(t))
      return t;
    if (Tn(t))
      return null;
    t = Ye(t);
  }
  return null;
}
function Zo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function mt(e) {
  return ["html", "body", "#document"].includes(bt(e));
}
function Pe(e) {
  return ye(e).getComputedStyle(e);
}
function Nn(e) {
  return Re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Ye(e) {
  if (bt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ns(e) && e.host || // Fallback.
    Me(e)
  );
  return ns(t) ? t.host : t;
}
function ni(e) {
  const t = Ye(e);
  return mt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _e(t) && Ft(t) ? t : ni(t);
}
function Dt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ni(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = ye(r);
  if (s) {
    const i = ao(a);
    return t.concat(a, a.visualViewport || [], Ft(r) ? r : [], i && n ? Dt(i) : []);
  }
  return t.concat(r, Dt(r, [], n));
}
function ao(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function oi(e) {
  const t = Pe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = _e(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, i = ln(n) !== s || ln(o) !== a;
  return i && (n = s, o = a), {
    width: n,
    height: o,
    $: i
  };
}
function Jo(e) {
  return Re(e) ? e : e.contextElement;
}
function pt(e) {
  const t = Jo(e);
  if (!_e(t))
    return Ae(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = oi(t);
  let a = (s ? ln(n.width) : n.width) / o, i = (s ? ln(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const mm = /* @__PURE__ */ Ae(0);
function ri(e) {
  const t = ye(e);
  return !Zo() || !t.visualViewport ? mm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function hm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ye(e) ? !1 : t;
}
function rt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Jo(e);
  let a = Ae(1);
  t && (o ? Re(o) && (a = pt(o)) : a = pt(e));
  const i = hm(s, n, o) ? ri(s) : Ae(0);
  let u = (r.left + i.x) / a.x, d = (r.top + i.y) / a.y, p = r.width / a.x, f = r.height / a.y;
  if (s) {
    const m = ye(s), v = o && Re(o) ? ye(o) : o;
    let x = m, h = ao(x);
    for (; h && o && v !== x; ) {
      const g = pt(h), w = h.getBoundingClientRect(), y = Pe(h), C = w.left + (h.clientLeft + parseFloat(y.paddingLeft)) * g.x, S = w.top + (h.clientTop + parseFloat(y.paddingTop)) * g.y;
      u *= g.x, d *= g.y, p *= g.x, f *= g.y, u += C, d += S, x = ye(h), h = ao(x);
    }
  }
  return dn({
    width: p,
    height: f,
    x: u,
    y: d
  });
}
function Qo(e, t) {
  const n = Nn(e).scrollLeft;
  return t ? t.left + n : rt(Me(e)).left + n;
}
function si(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Qo(e, o)
  )), s = o.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function vm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = Me(o), i = t ? Tn(t.floating) : !1;
  if (o === a || i && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ae(1);
  const p = Ae(0), f = _e(o);
  if ((f || !f && !s) && ((bt(o) !== "body" || Ft(a)) && (u = Nn(o)), _e(o))) {
    const v = rt(o);
    d = pt(o), p.x = v.x + o.clientLeft, p.y = v.y + o.clientTop;
  }
  const m = a && !f && !s ? si(a, u, !0) : Ae(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + p.x + m.x,
    y: n.y * d.y - u.scrollTop * d.y + p.y + m.y
  };
}
function gm(e) {
  return Array.from(e.getClientRects());
}
function xm(e) {
  const t = Me(e), n = Nn(e), o = e.ownerDocument.body, r = we(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = we(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + Qo(e);
  const i = -n.scrollTop;
  return Pe(o).direction === "rtl" && (a += we(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: i
  };
}
function wm(e, t) {
  const n = ye(e), o = Me(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, i = 0, u = 0;
  if (r) {
    s = r.width, a = r.height;
    const d = Zo();
    (!d || d && t === "fixed") && (i = r.offsetLeft, u = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: u
  };
}
function ym(e, t) {
  const n = rt(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = _e(e) ? pt(e) : Ae(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, u = r * s.x, d = o * s.y;
  return {
    width: a,
    height: i,
    x: u,
    y: d
  };
}
function os(e, t, n) {
  let o;
  if (t === "viewport")
    o = wm(e, n);
  else if (t === "document")
    o = xm(Me(e));
  else if (Re(t))
    o = ym(t, n);
  else {
    const r = ri(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return dn(o);
}
function ai(e, t) {
  const n = Ye(e);
  return n === t || !Re(n) || mt(n) ? !1 : Pe(n).position === "fixed" || ai(n, t);
}
function bm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Dt(e, [], !1).filter((i) => Re(i) && bt(i) !== "body"), r = null;
  const s = Pe(e).position === "fixed";
  let a = s ? Ye(e) : e;
  for (; Re(a) && !mt(a); ) {
    const i = Pe(a), u = qo(a);
    !u && i.position === "fixed" && (r = null), (s ? !u && !r : !u && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Ft(a) && !u && ai(e, a)) ? o = o.filter((p) => p !== a) : r = i, a = Ye(a);
  }
  return t.set(e, o), o;
}
function Cm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? Tn(t) ? [] : bm(t, this._c) : [].concat(n), o], i = a[0], u = a.reduce((d, p) => {
    const f = os(t, p, r);
    return d.top = we(f.top, d.top), d.right = Ke(f.right, d.right), d.bottom = Ke(f.bottom, d.bottom), d.left = we(f.left, d.left), d;
  }, os(t, i, r));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Sm(e) {
  const {
    width: t,
    height: n
  } = oi(e);
  return {
    width: t,
    height: n
  };
}
function Em(e, t, n) {
  const o = _e(t), r = Me(t), s = n === "fixed", a = rt(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ae(0);
  if (o || !o && !s)
    if ((bt(t) !== "body" || Ft(r)) && (i = Nn(t)), o) {
      const m = rt(t, !0, s, t);
      u.x = m.x + t.clientLeft, u.y = m.y + t.clientTop;
    } else r && (u.x = Qo(r));
  const d = r && !o && !s ? si(r, i) : Ae(0), p = a.left + i.scrollLeft - u.x - d.x, f = a.top + i.scrollTop - u.y - d.y;
  return {
    x: p,
    y: f,
    width: a.width,
    height: a.height
  };
}
function qn(e) {
  return Pe(e).position === "static";
}
function rs(e, t) {
  if (!_e(e) || Pe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Me(e) === n && (n = n.ownerDocument.body), n;
}
function ii(e, t) {
  const n = ye(e);
  if (Tn(e))
    return n;
  if (!_e(e)) {
    let r = Ye(e);
    for (; r && !mt(r); ) {
      if (Re(r) && !qn(r))
        return r;
      r = Ye(r);
    }
    return n;
  }
  let o = rs(e, t);
  for (; o && fm(o) && qn(o); )
    o = rs(o, t);
  return o && mt(o) && qn(o) && !qo(o) ? n : o || pm(e) || n;
}
const Rm = async function(e) {
  const t = this.getOffsetParent || ii, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Em(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Pm(e) {
  return Pe(e).direction === "rtl";
}
const Tm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vm,
  getDocumentElement: Me,
  getClippingRect: Cm,
  getOffsetParent: ii,
  getElementRects: Rm,
  getClientRects: gm,
  getDimensions: Sm,
  getScale: pt,
  isElement: Re,
  isRTL: Pm
};
function ci(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Nm(e, t) {
  let n = null, o;
  const r = Me(e);
  function s() {
    var i;
    clearTimeout(o), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), s();
    const d = e.getBoundingClientRect(), {
      left: p,
      top: f,
      width: m,
      height: v
    } = d;
    if (i || t(), !m || !v)
      return;
    const x = en(f), h = en(r.clientWidth - (p + m)), g = en(r.clientHeight - (f + v)), w = en(p), C = {
      rootMargin: -x + "px " + -h + "px " + -g + "px " + -w + "px",
      threshold: we(0, Ke(1, u)) || 1
    };
    let S = !0;
    function E(A) {
      const R = A[0].intersectionRatio;
      if (R !== u) {
        if (!S)
          return a();
        R ? a(!1, R) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !ci(d, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...C,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, C);
    }
    n.observe(e);
  }
  return a(!0), s;
}
function Am(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = Jo(e), p = r || s ? [...d ? Dt(d) : [], ...Dt(t)] : [];
  p.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const f = d && i ? Nm(d, n) : null;
  let m = -1, v = null;
  a && (v = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var C;
      (C = v) == null || C.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let x, h = u ? rt(e) : null;
  u && g();
  function g() {
    const w = rt(e);
    h && !ci(h, w) && n(), h = w, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    p.forEach((y) => {
      r && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), f == null || f(), (w = v) == null || w.disconnect(), v = null, u && cancelAnimationFrame(x);
  };
}
const _m = cm, Mm = lm, Dm = sm, Im = dm, jm = am, ss = rm, Om = um, km = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: Tm,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return om(e, t, {
    ...r,
    platform: s
  });
};
var rn = typeof document < "u" ? pd : md;
function fn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!fn(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !fn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function li(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function as(e, t) {
  const n = li(e);
  return Math.round(t * n) / n;
}
function Zn(e) {
  const t = c.useRef(e);
  return rn(() => {
    t.current = e;
  }), t;
}
function Lm(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: u,
    open: d
  } = e, [p, f] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = c.useState(o);
  fn(m, o) || v(o);
  const [x, h] = c.useState(null), [g, w] = c.useState(null), y = c.useCallback((L) => {
    L !== A.current && (A.current = L, h(L));
  }, []), C = c.useCallback((L) => {
    L !== R.current && (R.current = L, w(L));
  }, []), S = s || x, E = a || g, A = c.useRef(null), R = c.useRef(null), D = c.useRef(p), I = u != null, O = Zn(u), k = Zn(r), W = Zn(d), U = c.useCallback(() => {
    if (!A.current || !R.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: m
    };
    k.current && (L.platform = k.current), km(A.current, R.current, L).then((_) => {
      const z = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      M.current && !fn(D.current, z) && (D.current = z, kt.flushSync(() => {
        f(z);
      }));
    });
  }, [m, t, n, k, W]);
  rn(() => {
    d === !1 && D.current.isPositioned && (D.current.isPositioned = !1, f((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [d]);
  const M = c.useRef(!1);
  rn(() => (M.current = !0, () => {
    M.current = !1;
  }), []), rn(() => {
    if (S && (A.current = S), E && (R.current = E), S && E) {
      if (O.current)
        return O.current(S, E, U);
      U();
    }
  }, [S, E, U, O, I]);
  const K = c.useMemo(() => ({
    reference: A,
    floating: R,
    setReference: y,
    setFloating: C
  }), [y, C]), $ = c.useMemo(() => ({
    reference: S,
    floating: E
  }), [S, E]), G = c.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return L;
    const _ = as($.floating, p.x), z = as($.floating, p.y);
    return i ? {
      ...L,
      transform: "translate(" + _ + "px, " + z + "px)",
      ...li($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _,
      top: z
    };
  }, [n, i, $.floating, p.x, p.y]);
  return c.useMemo(() => ({
    ...p,
    update: U,
    refs: K,
    elements: $,
    floatingStyles: G
  }), [p, U, K, $, G]);
}
const $m = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? ss({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? ss({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Fm = (e, t) => ({
  ..._m(e),
  options: [e, t]
}), Vm = (e, t) => ({
  ...Mm(e),
  options: [e, t]
}), Bm = (e, t) => ({
  ...Om(e),
  options: [e, t]
}), Wm = (e, t) => ({
  ...Dm(e),
  options: [e, t]
}), Hm = (e, t) => ({
  ...Im(e),
  options: [e, t]
}), Um = (e, t) => ({
  ...jm(e),
  options: [e, t]
}), Km = (e, t) => ({
  ...$m(e),
  options: [e, t]
});
var Gm = "Arrow", ui = c.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ l.jsx(
    j.svg,
    {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ l.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ui.displayName = Gm;
var Ym = ui, er = "Popper", [di, Ct] = ie(er), [zm, fi] = di(er), pi = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = c.useState(null);
  return /* @__PURE__ */ l.jsx(zm, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
pi.displayName = er;
var mi = "PopperAnchor", hi = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = fi(mi, n), a = c.useRef(null), i = H(t, a);
    return c.useEffect(() => {
      s.onAnchorChange((o == null ? void 0 : o.current) || a.current);
    }), o ? null : /* @__PURE__ */ l.jsx(j.div, { ...r, ref: i });
  }
);
hi.displayName = mi;
var tr = "PopperContent", [Xm, qm] = di(tr), vi = c.forwardRef(
  (e, t) => {
    var B, Z, te, X, J, q;
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: u = !0,
      collisionBoundary: d = [],
      collisionPadding: p = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: x,
      ...h
    } = e, g = fi(tr, n), [w, y] = c.useState(null), C = H(t, (pe) => y(pe)), [S, E] = c.useState(null), A = $t(S), R = (A == null ? void 0 : A.width) ?? 0, D = (A == null ? void 0 : A.height) ?? 0, I = o + (s !== "center" ? "-" + s : ""), O = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, k = Array.isArray(d) ? d : [d], W = k.length > 0, U = {
      padding: O,
      boundary: k.filter(Jm),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: M, floatingStyles: K, placement: $, isPositioned: G, middlewareData: L } = Lm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...pe) => Am(...pe, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        Fm({ mainAxis: r + D, alignmentAxis: a }),
        u && Vm({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Bm() : void 0,
          ...U
        }),
        u && Wm({ ...U }),
        Hm({
          ...U,
          apply: ({ elements: pe, rects: xe, availableWidth: Ie, availableHeight: Qe }) => {
            const { width: Ve, height: Gt } = xe.reference, et = pe.floating.style;
            et.setProperty("--radix-popper-available-width", `${Ie}px`), et.setProperty("--radix-popper-available-height", `${Qe}px`), et.setProperty("--radix-popper-anchor-width", `${Ve}px`), et.setProperty("--radix-popper-anchor-height", `${Gt}px`);
          }
        }),
        S && Km({ element: S, padding: i }),
        Qm({ arrowWidth: R, arrowHeight: D }),
        m && Um({ strategy: "referenceHidden", ...U })
      ]
    }), [_, z] = wi($), ee = ne(x);
    ue(() => {
      G && (ee == null || ee());
    }, [G, ee]);
    const se = (B = L.arrow) == null ? void 0 : B.x, le = (Z = L.arrow) == null ? void 0 : Z.y, re = ((te = L.arrow) == null ? void 0 : te.centerOffset) !== 0, [be, fe] = c.useState();
    return ue(() => {
      w && fe(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: G ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: be,
          "--radix-popper-transform-origin": [
            (X = L.transformOrigin) == null ? void 0 : X.x,
            (J = L.transformOrigin) == null ? void 0 : J.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((q = L.hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l.jsx(
          Xm,
          {
            scope: n,
            placedSide: _,
            onArrowChange: E,
            arrowX: se,
            arrowY: le,
            shouldHideArrow: re,
            children: /* @__PURE__ */ l.jsx(
              j.div,
              {
                "data-side": _,
                "data-align": z,
                ...h,
                ref: C,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
vi.displayName = tr;
var gi = "PopperArrow", Zm = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, xi = c.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = qm(gi, o), a = Zm[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ l.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ l.jsx(
          Ym,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
xi.displayName = gi;
function Jm(e) {
  return e !== null;
}
var Qm = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, y;
    const { placement: n, rects: o, middlewareData: r } = t, a = ((g = r.arrow) == null ? void 0 : g.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, u = a ? 0 : e.arrowHeight, [d, p] = wi(n), f = { start: "0%", center: "50%", end: "100%" }[p], m = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, v = (((y = r.arrow) == null ? void 0 : y.y) ?? 0) + u / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = a ? f : `${m}px`, h = `${-u}px`) : d === "top" ? (x = a ? f : `${m}px`, h = `${o.floating.height + u}px`) : d === "right" ? (x = `${-u}px`, h = a ? f : `${v}px`) : d === "left" && (x = `${o.floating.width + u}px`, h = a ? f : `${v}px`), { data: { x, y: h } };
  }
});
function wi(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var An = pi, nr = hi, or = vi, rr = xi, Jn = "rovingFocusGroup.onEntryFocus", eh = { bubbles: !1, cancelable: !0 }, _n = "RovingFocusGroup", [io, yi, th] = gt(_n), [nh, St] = ie(
  _n,
  [th]
), [oh, rh] = nh(_n), bi = c.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(io.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(io.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(sh, { ...e, ref: t }) }) })
);
bi.displayName = _n;
var sh = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: o,
    loop: r = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: u,
    onEntryFocus: d,
    preventScrollOnEntryFocus: p = !1,
    ...f
  } = e, m = c.useRef(null), v = H(t, m), x = ze(s), [h = null, g] = de({
    prop: a,
    defaultProp: i,
    onChange: u
  }), [w, y] = c.useState(!1), C = ne(d), S = yi(n), E = c.useRef(!1), [A, R] = c.useState(0);
  return c.useEffect(() => {
    const D = m.current;
    if (D)
      return D.addEventListener(Jn, C), () => D.removeEventListener(Jn, C);
  }, [C]), /* @__PURE__ */ l.jsx(
    oh,
    {
      scope: n,
      orientation: o,
      dir: x,
      loop: r,
      currentTabStopId: h,
      onItemFocus: c.useCallback(
        (D) => g(D),
        [g]
      ),
      onItemShiftTab: c.useCallback(() => y(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => R((D) => D + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => R((D) => D - 1),
        []
      ),
      children: /* @__PURE__ */ l.jsx(
        j.div,
        {
          tabIndex: w || A === 0 ? -1 : 0,
          "data-orientation": o,
          ...f,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: P(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: P(e.onFocus, (D) => {
            const I = !E.current;
            if (D.target === D.currentTarget && I && !w) {
              const O = new CustomEvent(Jn, eh);
              if (D.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const k = S().filter(($) => $.focusable), W = k.find(($) => $.active), U = k.find(($) => $.id === h), K = [W, U, ...k].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Ei(K, p);
              }
            }
            E.current = !1;
          }),
          onBlur: P(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Ci = "RovingFocusGroupItem", Si = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: s,
      ...a
    } = e, i = ge(), u = s || i, d = rh(Ci, n), p = d.currentTabStopId === u, f = yi(n), { onFocusableItemAdd: m, onFocusableItemRemove: v } = d;
    return c.useEffect(() => {
      if (o)
        return m(), () => v();
    }, [o, m, v]), /* @__PURE__ */ l.jsx(
      io.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: o,
        active: r,
        children: /* @__PURE__ */ l.jsx(
          j.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: P(e.onMouseDown, (x) => {
              o ? d.onItemFocus(u) : x.preventDefault();
            }),
            onFocus: P(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: P(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const h = ch(x, d.orientation, d.dir);
              if (h !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let w = f().filter((y) => y.focusable).map((y) => y.ref.current);
                if (h === "last") w.reverse();
                else if (h === "prev" || h === "next") {
                  h === "prev" && w.reverse();
                  const y = w.indexOf(x.currentTarget);
                  w = d.loop ? lh(w, y + 1) : w.slice(y + 1);
                }
                setTimeout(() => Ei(w));
              }
            })
          }
        )
      }
    );
  }
);
Si.displayName = Ci;
var ah = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ih(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ch(e, t, n) {
  const o = ih(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return ah[o];
}
function Ei(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function lh(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var sr = bi, ar = Si, co = ["Enter", " "], uh = ["ArrowDown", "PageUp", "Home"], Ri = ["ArrowUp", "PageDown", "End"], dh = [...uh, ...Ri], fh = {
  ltr: [...co, "ArrowRight"],
  rtl: [...co, "ArrowLeft"]
}, ph = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Vt = "Menu", [It, mh, hh] = gt(Vt), [at, Pi] = ie(Vt, [
  hh,
  Ct,
  St
]), Bt = Ct(), Ti = St(), [Ni, qe] = at(Vt), [vh, Wt] = at(Vt), Ai = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: a = !0 } = e, i = Bt(t), [u, d] = c.useState(null), p = c.useRef(!1), f = ne(s), m = ze(r);
  return c.useEffect(() => {
    const v = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(An, { ...i, children: /* @__PURE__ */ l.jsx(
    Ni,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ l.jsx(
        vh,
        {
          scope: t,
          onClose: c.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: p,
          dir: m,
          modal: a,
          children: o
        }
      )
    }
  ) });
};
Ai.displayName = Vt;
var gh = "MenuAnchor", ir = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Bt(n);
    return /* @__PURE__ */ l.jsx(nr, { ...r, ...o, ref: t });
  }
);
ir.displayName = gh;
var cr = "MenuPortal", [xh, _i] = at(cr, {
  forceMount: void 0
}), Mi = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = qe(cr, t);
  return /* @__PURE__ */ l.jsx(xh, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ce, { present: n || s.open, children: /* @__PURE__ */ l.jsx(wt, { asChild: !0, container: r, children: o }) }) });
};
Mi.displayName = cr;
var Ce = "MenuContent", [wh, lr] = at(Ce), Di = c.forwardRef(
  (e, t) => {
    const n = _i(Ce, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = qe(Ce, e.__scopeMenu), a = Wt(Ce, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(It.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ce, { present: o || s.open, children: /* @__PURE__ */ l.jsx(It.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ l.jsx(yh, { ...r, ref: t }) : /* @__PURE__ */ l.jsx(bh, { ...r, ref: t }) }) }) });
  }
), yh = c.forwardRef(
  (e, t) => {
    const n = qe(Ce, e.__scopeMenu), o = c.useRef(null), r = H(t, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return ko(s);
    }, []), /* @__PURE__ */ l.jsx(
      ur,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: P(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), bh = c.forwardRef((e, t) => {
  const n = qe(Ce, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    ur,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), ur = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: o = !1,
      trapFocus: r,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: i,
      onEntryFocus: u,
      onEscapeKeyDown: d,
      onPointerDownOutside: p,
      onFocusOutside: f,
      onInteractOutside: m,
      onDismiss: v,
      disableOutsideScroll: x,
      ...h
    } = e, g = qe(Ce, n), w = Wt(Ce, n), y = Bt(n), C = Ti(n), S = mh(n), [E, A] = c.useState(null), R = c.useRef(null), D = H(t, R, g.onContentChange), I = c.useRef(0), O = c.useRef(""), k = c.useRef(0), W = c.useRef(null), U = c.useRef("right"), M = c.useRef(0), K = x ? En : c.Fragment, $ = x ? { as: nt, allowPinchZoom: !0 } : void 0, G = (_) => {
      var B, Z;
      const z = O.current + _, ee = S().filter((te) => !te.disabled), se = document.activeElement, le = (B = ee.find((te) => te.ref.current === se)) == null ? void 0 : B.textValue, re = ee.map((te) => te.textValue), be = Ih(re, z, le), fe = (Z = ee.find((te) => te.textValue === be)) == null ? void 0 : Z.ref.current;
      (function te(X) {
        O.current = X, window.clearTimeout(I.current), X !== "" && (I.current = window.setTimeout(() => te(""), 1e3));
      })(z), fe && setTimeout(() => fe.focus());
    };
    c.useEffect(() => () => window.clearTimeout(I.current), []), Oo();
    const L = c.useCallback((_) => {
      var ee, se;
      return U.current === ((ee = W.current) == null ? void 0 : ee.side) && Oh(_, (se = W.current) == null ? void 0 : se.area);
    }, []);
    return /* @__PURE__ */ l.jsx(
      wh,
      {
        scope: n,
        searchRef: O,
        onItemEnter: c.useCallback(
          (_) => {
            L(_) && _.preventDefault();
          },
          [L]
        ),
        onItemLeave: c.useCallback(
          (_) => {
            var z;
            L(_) || ((z = R.current) == null || z.focus(), A(null));
          },
          [L]
        ),
        onTriggerLeave: c.useCallback(
          (_) => {
            L(_) && _.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: k,
        onPointerGraceIntentChange: c.useCallback((_) => {
          W.current = _;
        }, []),
        children: /* @__PURE__ */ l.jsx(K, { ...$, children: /* @__PURE__ */ l.jsx(
          Cn,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: P(s, (_) => {
              var z;
              _.preventDefault(), (z = R.current) == null || z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ l.jsx(
              xt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: v,
                children: /* @__PURE__ */ l.jsx(
                  sr,
                  {
                    asChild: !0,
                    ...C,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: P(u, (_) => {
                      w.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      or,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Xi(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...y,
                        ...h,
                        ref: D,
                        style: { outline: "none", ...h.style },
                        onKeyDown: P(h.onKeyDown, (_) => {
                          const ee = _.target.closest("[data-radix-menu-content]") === _.currentTarget, se = _.ctrlKey || _.altKey || _.metaKey, le = _.key.length === 1;
                          ee && (_.key === "Tab" && _.preventDefault(), !se && le && G(_.key));
                          const re = R.current;
                          if (_.target !== re || !dh.includes(_.key)) return;
                          _.preventDefault();
                          const fe = S().filter((B) => !B.disabled).map((B) => B.ref.current);
                          Ri.includes(_.key) && fe.reverse(), Mh(fe);
                        }),
                        onBlur: P(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(I.current), O.current = "");
                        }),
                        onPointerMove: P(
                          e.onPointerMove,
                          jt((_) => {
                            const z = _.target, ee = M.current !== _.clientX;
                            if (_.currentTarget.contains(z) && ee) {
                              const se = _.clientX > M.current ? "right" : "left";
                              U.current = se, M.current = _.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Di.displayName = Ce;
var Ch = "MenuGroup", dr = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { role: "group", ...o, ref: t });
  }
);
dr.displayName = Ch;
var Sh = "MenuLabel", Ii = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { ...o, ref: t });
  }
);
Ii.displayName = Sh;
var pn = "MenuItem", is = "menu.itemSelect", Mn = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, s = c.useRef(null), a = Wt(pn, e.__scopeMenu), i = lr(pn, e.__scopeMenu), u = H(t, s), d = c.useRef(!1), p = () => {
      const f = s.current;
      if (!n && f) {
        const m = new CustomEvent(is, { bubbles: !0, cancelable: !0 });
        f.addEventListener(is, (v) => o == null ? void 0 : o(v), { once: !0 }), To(f, m), m.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      ji,
      {
        ...r,
        ref: u,
        disabled: n,
        onClick: P(e.onClick, p),
        onPointerDown: (f) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, f), d.current = !0;
        },
        onPointerUp: P(e.onPointerUp, (f) => {
          var m;
          d.current || (m = f.currentTarget) == null || m.click();
        }),
        onKeyDown: P(e.onKeyDown, (f) => {
          const m = i.searchRef.current !== "";
          n || m && f.key === " " || co.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Mn.displayName = pn;
var ji = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e, a = lr(pn, n), i = Ti(n), u = c.useRef(null), d = H(t, u), [p, f] = c.useState(!1), [m, v] = c.useState("");
    return c.useEffect(() => {
      const x = u.current;
      x && v((x.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ l.jsx(
      It.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? m,
        children: /* @__PURE__ */ l.jsx(ar, { asChild: !0, ...i, focusable: !o, children: /* @__PURE__ */ l.jsx(
          j.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: P(
              e.onPointerMove,
              jt((x) => {
                o ? a.onItemLeave(x) : (a.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: P(
              e.onPointerLeave,
              jt((x) => a.onItemLeave(x))
            ),
            onFocus: P(e.onFocus, () => f(!0)),
            onBlur: P(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Eh = "MenuCheckboxItem", Oi = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ l.jsx(Vi, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l.jsx(
      Mn,
      {
        role: "menuitemcheckbox",
        "aria-checked": mn(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": mr(n),
        onSelect: P(
          r.onSelect,
          () => o == null ? void 0 : o(mn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Oi.displayName = Eh;
var ki = "MenuRadioGroup", [Rh, Ph] = at(
  ki,
  { value: void 0, onValueChange: () => {
  } }
), Li = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, s = ne(o);
    return /* @__PURE__ */ l.jsx(Rh, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ l.jsx(dr, { ...r, ref: t }) });
  }
);
Li.displayName = ki;
var $i = "MenuRadioItem", Fi = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = Ph($i, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ l.jsx(Vi, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ l.jsx(
      Mn,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": mr(s),
        onSelect: P(
          o.onSelect,
          () => {
            var a;
            return (a = r.onValueChange) == null ? void 0 : a.call(r, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Fi.displayName = $i;
var fr = "MenuItemIndicator", [Vi, Th] = at(
  fr,
  { checked: !1 }
), Bi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, s = Th(fr, n);
    return /* @__PURE__ */ l.jsx(
      ce,
      {
        present: o || mn(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          j.span,
          {
            ...r,
            ref: t,
            "data-state": mr(s.checked)
          }
        )
      }
    );
  }
);
Bi.displayName = fr;
var Nh = "MenuSeparator", Wi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(
      j.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...o,
        ref: t
      }
    );
  }
);
Wi.displayName = Nh;
var Ah = "MenuArrow", Hi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Bt(n);
    return /* @__PURE__ */ l.jsx(rr, { ...r, ...o, ref: t });
  }
);
Hi.displayName = Ah;
var pr = "MenuSub", [_h, Ui] = at(pr), Ki = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, s = qe(pr, t), a = Bt(t), [i, u] = c.useState(null), [d, p] = c.useState(null), f = ne(r);
  return c.useEffect(() => (s.open === !1 && f(!1), () => f(!1)), [s.open, f]), /* @__PURE__ */ l.jsx(An, { ...a, children: /* @__PURE__ */ l.jsx(
    Ni,
    {
      scope: t,
      open: o,
      onOpenChange: f,
      content: d,
      onContentChange: p,
      children: /* @__PURE__ */ l.jsx(
        _h,
        {
          scope: t,
          contentId: ge(),
          triggerId: ge(),
          trigger: i,
          onTriggerChange: u,
          children: n
        }
      )
    }
  ) });
};
Ki.displayName = pr;
var At = "MenuSubTrigger", Gi = c.forwardRef(
  (e, t) => {
    const n = qe(At, e.__scopeMenu), o = Wt(At, e.__scopeMenu), r = Ui(At, e.__scopeMenu), s = lr(At, e.__scopeMenu), a = c.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: u } = s, d = { __scopeMenu: e.__scopeMenu }, p = c.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return c.useEffect(() => p, [p]), c.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), u(null);
      };
    }, [i, u]), /* @__PURE__ */ l.jsx(ir, { asChild: !0, ...d, children: /* @__PURE__ */ l.jsx(
      ji,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": Xi(n.open),
        ...e,
        ref: wn(t, r.onTriggerChange),
        onClick: (f) => {
          var m;
          (m = e.onClick) == null || m.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: P(
          e.onPointerMove,
          jt((f) => {
            s.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: P(
          e.onPointerLeave,
          jt((f) => {
            var v, x;
            p();
            const m = (v = n.content) == null ? void 0 : v.getBoundingClientRect();
            if (m) {
              const h = (x = n.content) == null ? void 0 : x.dataset.side, g = h === "right", w = g ? -5 : 5, y = m[g ? "left" : "right"], C = m[g ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + w, y: f.clientY },
                  { x: y, y: m.top },
                  { x: C, y: m.top },
                  { x: C, y: m.bottom },
                  { x: y, y: m.bottom }
                ],
                side: h
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(f), f.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: P(e.onKeyDown, (f) => {
          var v;
          const m = s.searchRef.current !== "";
          e.disabled || m && f.key === " " || fh[o.dir].includes(f.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Gi.displayName = At;
var Yi = "MenuSubContent", zi = c.forwardRef(
  (e, t) => {
    const n = _i(Ce, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = qe(Ce, e.__scopeMenu), a = Wt(Ce, e.__scopeMenu), i = Ui(Yi, e.__scopeMenu), u = c.useRef(null), d = H(t, u);
    return /* @__PURE__ */ l.jsx(It.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ce, { present: o || s.open, children: /* @__PURE__ */ l.jsx(It.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      ur,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...r,
        ref: d,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          var f;
          a.isUsingKeyboardRef.current && ((f = u.current) == null || f.focus()), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: P(e.onFocusOutside, (p) => {
          p.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: P(e.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: P(e.onKeyDown, (p) => {
          var v;
          const f = p.currentTarget.contains(p.target), m = ph[a.dir].includes(p.key);
          f && m && (s.onOpenChange(!1), (v = i.trigger) == null || v.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
zi.displayName = Yi;
function Xi(e) {
  return e ? "open" : "closed";
}
function mn(e) {
  return e === "indeterminate";
}
function mr(e) {
  return mn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Mh(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Dh(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function Ih(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Dh(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((d) => d !== n));
  const u = a.find(
    (d) => d.toLowerCase().startsWith(r.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function jh(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, u = t[s].y, d = t[a].x, p = t[a].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (r = !r);
  }
  return r;
}
function Oh(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return jh(n, t);
}
function jt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var kh = Ai, Lh = ir, $h = Mi, Fh = Di, Vh = dr, Bh = Ii, Wh = Mn, Hh = Oi, Uh = Li, Kh = Fi, Gh = Bi, Yh = Wi, zh = Hi, Xh = Ki, qh = Gi, Zh = zi, hr = "DropdownMenu", [Jh, Dw] = ie(
  hr,
  [Pi]
), he = Pi(), [Qh, qi] = Jh(hr), Zi = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, u = he(t), d = c.useRef(null), [p = !1, f] = de({
    prop: r,
    defaultProp: s,
    onChange: a
  });
  return /* @__PURE__ */ l.jsx(
    Qh,
    {
      scope: t,
      triggerId: ge(),
      triggerRef: d,
      contentId: ge(),
      open: p,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((m) => !m), [f]),
      modal: i,
      children: /* @__PURE__ */ l.jsx(kh, { ...u, open: p, onOpenChange: f, dir: o, modal: i, children: n })
    }
  );
};
Zi.displayName = hr;
var Ji = "DropdownMenuTrigger", Qi = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, s = qi(Ji, n), a = he(n);
    return /* @__PURE__ */ l.jsx(Lh, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": o ? "" : void 0,
        disabled: o,
        ...r,
        ref: wn(t, s.triggerRef),
        onPointerDown: P(e.onPointerDown, (i) => {
          !o && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: P(e.onKeyDown, (i) => {
          o || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Qi.displayName = Ji;
var ev = "DropdownMenuPortal", ec = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = he(t);
  return /* @__PURE__ */ l.jsx($h, { ...o, ...n });
};
ec.displayName = ev;
var tc = "DropdownMenuContent", nc = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = qi(tc, n), s = he(n), a = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Fh,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...o,
        ref: t,
        onCloseAutoFocus: P(e.onCloseAutoFocus, (i) => {
          var u;
          a.current || (u = r.triggerRef.current) == null || u.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: P(e.onInteractOutside, (i) => {
          const u = i.detail.originalEvent, d = u.button === 0 && u.ctrlKey === !0, p = u.button === 2 || d;
          (!r.modal || p) && (a.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
nc.displayName = tc;
var tv = "DropdownMenuGroup", oc = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
    return /* @__PURE__ */ l.jsx(Vh, { ...r, ...o, ref: t });
  }
);
oc.displayName = tv;
var nv = "DropdownMenuLabel", rc = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
    return /* @__PURE__ */ l.jsx(Bh, { ...r, ...o, ref: t });
  }
);
rc.displayName = nv;
var ov = "DropdownMenuItem", sc = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
    return /* @__PURE__ */ l.jsx(Wh, { ...r, ...o, ref: t });
  }
);
sc.displayName = ov;
var rv = "DropdownMenuCheckboxItem", ac = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
  return /* @__PURE__ */ l.jsx(Hh, { ...r, ...o, ref: t });
});
ac.displayName = rv;
var sv = "DropdownMenuRadioGroup", ic = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
  return /* @__PURE__ */ l.jsx(Uh, { ...r, ...o, ref: t });
});
ic.displayName = sv;
var av = "DropdownMenuRadioItem", cc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
  return /* @__PURE__ */ l.jsx(Kh, { ...r, ...o, ref: t });
});
cc.displayName = av;
var iv = "DropdownMenuItemIndicator", lc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
  return /* @__PURE__ */ l.jsx(Gh, { ...r, ...o, ref: t });
});
lc.displayName = iv;
var cv = "DropdownMenuSeparator", uc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
  return /* @__PURE__ */ l.jsx(Yh, { ...r, ...o, ref: t });
});
uc.displayName = cv;
var lv = "DropdownMenuArrow", uv = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
    return /* @__PURE__ */ l.jsx(zh, { ...r, ...o, ref: t });
  }
);
uv.displayName = lv;
var dv = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: s } = e, a = he(t), [i = !1, u] = de({
    prop: o,
    defaultProp: s,
    onChange: r
  });
  return /* @__PURE__ */ l.jsx(Xh, { ...a, open: i, onOpenChange: u, children: n });
}, fv = "DropdownMenuSubTrigger", dc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
  return /* @__PURE__ */ l.jsx(qh, { ...r, ...o, ref: t });
});
dc.displayName = fv;
var pv = "DropdownMenuSubContent", fc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = he(n);
  return /* @__PURE__ */ l.jsx(
    Zh,
    {
      ...r,
      ...o,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
fc.displayName = pv;
var mv = Zi, hv = Qi, pc = ec, mc = nc, vv = oc, hc = rc, vc = sc, gc = ac, gv = ic, xc = cc, wc = lc, yc = uc, xv = dv, bc = dc, Cc = fc;
const wv = mv, yv = hv, bv = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  vv,
  {
    className: N(T + "dropdown-menu-group", t),
    ...n,
    children: e
  }
), Cv = pc, Iw = xv, jw = gv, Sv = ({
  inset: e,
  children: t,
  className: n,
  ...o
}) => /* @__PURE__ */ l.jsxs(
  bc,
  {
    className: N(T + "dropdown-menu-sub-trigger", n),
    style: {
      paddingLeft: e ? "2rem" : "0.5rem"
    },
    ...o,
    children: [
      t,
      /* @__PURE__ */ l.jsx(Ka, { className: "chevron-right" })
    ]
  }
);
Sv.displayName = bc.displayName;
const Ev = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Cc,
  {
    className: N(T + "dropdown-menu-sub-content", e),
    ...t
  }
);
Ev.displayName = Cc.displayName;
const lo = ({
  sideOffset: e = 4,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(pc, { children: /* @__PURE__ */ l.jsx(
  mc,
  {
    sideOffset: e,
    className: N(T + "dropdown-menu-content", t),
    ...n
  }
) });
lo.displayName = mc.displayName;
const Sc = ({
  inset: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  vc,
  {
    className: N(T + "dropdown-menu-item", t),
    style: {
      paddingLeft: e ? "2rem" : "0.5rem"
    },
    ...n
  }
);
Sc.displayName = vc.displayName;
const Rv = ({
  children: e,
  checked: t,
  className: n,
  ...o
}) => /* @__PURE__ */ l.jsxs(
  gc,
  {
    className: N(T + "dropdown-menu-checkbox-item", n),
    checked: t,
    ...o,
    children: [
      /* @__PURE__ */ l.jsx(
        "span",
        {
          className: N(T + "dropdown-menu-checkbox-item-span", n),
          children: /* @__PURE__ */ l.jsx(wc, { children: /* @__PURE__ */ l.jsx(
            Go,
            {
              style: {
                height: "1rem",
                width: "1rem"
              }
            }
          ) })
        }
      ),
      e
    ]
  }
);
Rv.displayName = gc.displayName;
const Pv = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsxs(
  xc,
  {
    className: N(T + "dropdown-menu-radio-item", t),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: N(T + "dropdown-menu-radio-item-span", t), children: /* @__PURE__ */ l.jsx(wc, { children: /* @__PURE__ */ l.jsx(
        Ga,
        {
          color: "currentColor",
          style: {
            height: "0.5rem",
            width: "0.5rem"
          }
        }
      ) }) }),
      e
    ]
  }
);
Pv.displayName = xc.displayName;
const Ec = ({
  inset: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  hc,
  {
    className: N(T + "dropdown-menu-label", t),
    style: {
      paddingLeft: e ? "2rem" : "0.5rem"
    },
    ...n
  }
);
Ec.displayName = hc.displayName;
const Rc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  yc,
  {
    className: N(T + "dropdown-menu-separator", e),
    ...t
  }
);
Rc.displayName = yc.displayName;
const Tv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: N(T + "dropdown-menu-shortcut", e),
    ...t
  }
);
Tv.displayName = "DropdownMenuShortcut";
const Nv = ({
  trigger: e,
  isPortal: t = !0,
  children: n,
  ...o
}) => /* @__PURE__ */ l.jsxs(wv, { ...o, children: [
  /* @__PURE__ */ l.jsx(yv, { asChild: !0, children: e }),
  t ? /* @__PURE__ */ l.jsx(Cv, { children: /* @__PURE__ */ l.jsx(lo, { ...o, children: n }) }) : /* @__PURE__ */ l.jsx(lo, { ...o, children: n })
] }), Ow = ({ groups: e, ...t }) => /* @__PURE__ */ l.jsx(Nv, { ...t, children: e.map(({ items: n, label: o }, r) => /* @__PURE__ */ l.jsxs(c.Fragment, { children: [
  /* @__PURE__ */ l.jsxs(bv, { children: [
    o && /* @__PURE__ */ l.jsx(Ec, { children: o }),
    n.map((s, a) => /* @__PURE__ */ Ue(Sc, { ...s, key: `group-${r}-item-${a}` }, s.children))
  ] }),
  /* @__PURE__ */ l.jsx(Rc, {})
] }, `group-${r}`)) });
var Av = "Label", Pc = c.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  j.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var r;
      n.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Pc.displayName = Av;
var Tc = Pc;
const Nc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(Tc, { className: N(T + "label", e), ...t });
Nc.displayName = Tc.displayName;
const _v = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: N(T + "pagination", e),
    ...t
  }
);
_v.displayName = "Pagination";
const Mv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx("ul", { className: N(T + "pagination-content", e), ...t });
Mv.displayName = "PaginationContent";
const Dv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx("li", { className: e, ...t });
Dv.displayName = "PaginationItem";
const vr = ({
  isActive: e,
  size: t = "icon",
  className: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  "a",
  {
    "aria-current": e ? "page" : void 0,
    "data-variant": e ? "outline" : "ghost",
    "data-size": t,
    className: N(T + "pagination-link", n),
    ...o
  }
);
vr.displayName = "PaginationLink";
const Iv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  vr,
  {
    "aria-label": "Go to previous page",
    className: N(T + "pagination-previous", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(
        Lp,
        {
          style: {
            height: "1rem",
            width: "1rem"
          }
        }
      ),
      /* @__PURE__ */ l.jsx("span", { children: "Previous" })
    ]
  }
);
Iv.displayName = "PaginationPrevious";
const jv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  vr,
  {
    "aria-label": "Go to next page",
    className: N(T + "pagination-next", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx("span", { children: "Next" }),
      /* @__PURE__ */ l.jsx(
        Ka,
        {
          style: {
            height: "1rem",
            width: "1rem"
          }
        }
      )
    ]
  }
);
jv.displayName = "PaginationNext";
const Ov = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: N(T + "pagination-ellipsis", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(
        Hp,
        {
          style: {
            height: "1rem",
            width: "1rem"
          }
        }
      ),
      /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Ov.displayName = "PaginationEllipsis";
var gr = "Progress", xr = 100, [kv, kw] = ie(gr), [Lv, $v] = kv(gr), Ac = c.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: r,
      getValueLabel: s = Fv,
      ...a
    } = e;
    (r || r === 0) && !cs(r) && console.error(Vv(`${r}`, "Progress"));
    const i = cs(r) ? r : xr;
    o !== null && !ls(o, i) && console.error(Bv(`${o}`, "Progress"));
    const u = ls(o, i) ? o : null, d = hn(u) ? s(u, i) : void 0;
    return /* @__PURE__ */ l.jsx(Lv, { scope: n, value: u, max: i, children: /* @__PURE__ */ l.jsx(
      j.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": hn(u) ? u : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Dc(u, i),
        "data-value": u ?? void 0,
        "data-max": i,
        ...a,
        ref: t
      }
    ) });
  }
);
Ac.displayName = gr;
var _c = "ProgressIndicator", Mc = c.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, r = $v(_c, n);
    return /* @__PURE__ */ l.jsx(
      j.div,
      {
        "data-state": Dc(r.value, r.max),
        "data-value": r.value ?? void 0,
        "data-max": r.max,
        ...o,
        ref: t
      }
    );
  }
);
Mc.displayName = _c;
function Fv(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Dc(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function hn(e) {
  return typeof e == "number";
}
function cs(e) {
  return hn(e) && !isNaN(e) && e > 0;
}
function ls(e, t) {
  return hn(e) && !isNaN(e) && e <= t && e >= 0;
}
function Vv(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${xr}\`.`;
}
function Bv(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${xr} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Ic = Ac, Wv = Mc;
const Hv = ({
  value: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Ic,
  {
    className: N(T + "progress", t),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      Wv,
      {
        className: N(T + "progress-indicator"),
        style: { transform: `translateX(-${100 - (e ?? 0)}%)` }
      }
    )
  }
);
Hv.displayName = Ic.displayName;
var wr = "Radio", [Uv, jc] = ie(wr), [Kv, Gv] = Uv(wr), Oc = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: o,
      checked: r = !1,
      required: s,
      disabled: a,
      value: i = "on",
      onCheck: u,
      form: d,
      ...p
    } = e, [f, m] = c.useState(null), v = H(t, (g) => m(g)), x = c.useRef(!1), h = f ? d || !!f.closest("form") : !0;
    return /* @__PURE__ */ l.jsxs(Kv, { scope: n, checked: r, disabled: a, children: [
      /* @__PURE__ */ l.jsx(
        j.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": r,
          "data-state": $c(r),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...p,
          ref: v,
          onClick: P(e.onClick, (g) => {
            r || u == null || u(), h && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ l.jsx(
        Yv,
        {
          control: f,
          bubbles: !x.current,
          name: o,
          value: i,
          checked: r,
          required: s,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Oc.displayName = wr;
var kc = "RadioIndicator", Lc = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: o, ...r } = e, s = Gv(kc, n);
    return /* @__PURE__ */ l.jsx(ce, { present: o || s.checked, children: /* @__PURE__ */ l.jsx(
      j.span,
      {
        "data-state": $c(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    ) });
  }
);
Lc.displayName = kc;
var Yv = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), a = Lt(n), i = $t(t);
  return c.useEffect(() => {
    const u = s.current, d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (a !== n && f) {
      const m = new Event("click", { bubbles: o });
      f.call(u, n), u.dispatchEvent(m);
    }
  }, [a, n, o]), /* @__PURE__ */ l.jsx(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...r,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...i,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function $c(e) {
  return e ? "checked" : "unchecked";
}
var zv = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], yr = "RadioGroup", [Xv, Lw] = ie(yr, [
  St,
  jc
]), Fc = St(), Vc = jc(), [qv, Zv] = Xv(yr), Bc = c.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: o,
      defaultValue: r,
      value: s,
      required: a = !1,
      disabled: i = !1,
      orientation: u,
      dir: d,
      loop: p = !0,
      onValueChange: f,
      ...m
    } = e, v = Fc(n), x = ze(d), [h, g] = de({
      prop: s,
      defaultProp: r,
      onChange: f
    });
    return /* @__PURE__ */ l.jsx(
      qv,
      {
        scope: n,
        name: o,
        required: a,
        disabled: i,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ l.jsx(
          sr,
          {
            asChild: !0,
            ...v,
            orientation: u,
            dir: x,
            loop: p,
            children: /* @__PURE__ */ l.jsx(
              j.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": u,
                "data-disabled": i ? "" : void 0,
                dir: x,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Bc.displayName = yr;
var Wc = "RadioGroupItem", Hc = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: o, ...r } = e, s = Zv(Wc, n), a = s.disabled || o, i = Fc(n), u = Vc(n), d = c.useRef(null), p = H(t, d), f = s.value === r.value, m = c.useRef(!1);
    return c.useEffect(() => {
      const v = (h) => {
        zv.includes(h.key) && (m.current = !0);
      }, x = () => m.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ l.jsx(
      ar,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: f,
        children: /* @__PURE__ */ l.jsx(
          Oc,
          {
            disabled: a,
            required: s.required,
            checked: f,
            ...u,
            ...r,
            name: s.name,
            ref: p,
            onCheck: () => s.onValueChange(r.value),
            onKeyDown: P((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: P(r.onFocus, () => {
              var v;
              m.current && ((v = d.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
Hc.displayName = Wc;
var Jv = "RadioGroupIndicator", Uc = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...o } = e, r = Vc(n);
    return /* @__PURE__ */ l.jsx(Lc, { ...r, ...o, ref: t });
  }
);
Uc.displayName = Jv;
var Kc = Bc, Gc = Hc, Qv = Uc;
const eg = ({
  ...e
}) => /* @__PURE__ */ l.jsx(
  Kc,
  {
    orientation: e.orientation,
    className: N(T + "radio-group"),
    ...e
  }
), Yc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Gc,
  {
    className: N(T + "radio-group-item", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      Qv,
      {
        className: N(T + "radio-group-item-indicator"),
        children: /* @__PURE__ */ l.jsx(Ga, { className: N(T + "circle", e), stroke: "none" })
      }
    )
  }
);
Yc.displayName = Gc.displayName;
const tg = ({ className: e, items: t, ...n }) => /* @__PURE__ */ l.jsx(eg, { ...n, children: t.map(({ label: o, id: r, ...s }) => /* @__PURE__ */ l.jsxs("div", { className: T + "radio-with-label", children: [
  /* @__PURE__ */ l.jsx(Yc, { id: r, ...s, className: e }),
  /* @__PURE__ */ l.jsx(Nc, { htmlFor: r, children: o ?? s.value })
] }, s.value)) });
tg.displayName = Kc.displayName;
function Ot(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var ng = "VisuallyHidden", Ht = c.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(
    j.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Ht.displayName = ng;
var og = Ht, rg = [" ", "Enter", "ArrowUp", "ArrowDown"], sg = [" ", "Enter"], Ut = "Select", [Dn, In, ag] = gt(Ut), [Et, $w] = ie(Ut, [
  ag,
  Ct
]), jn = Ct(), [ig, Ze] = Et(Ut), [cg, lg] = Et(Ut), zc = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: u,
    dir: d,
    name: p,
    autoComplete: f,
    disabled: m,
    required: v,
    form: x
  } = e, h = jn(t), [g, w] = c.useState(null), [y, C] = c.useState(null), [S, E] = c.useState(!1), A = ze(d), [R = !1, D] = de({
    prop: o,
    defaultProp: r,
    onChange: s
  }), [I, O] = de({
    prop: a,
    defaultProp: i,
    onChange: u
  }), k = c.useRef(null), W = g ? x || !!g.closest("form") : !0, [U, M] = c.useState(/* @__PURE__ */ new Set()), K = Array.from(U).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ l.jsx(An, { ...h, children: /* @__PURE__ */ l.jsxs(
    ig,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: y,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: E,
      contentId: ge(),
      value: I,
      onValueChange: O,
      open: R,
      onOpenChange: D,
      dir: A,
      triggerPointerDownPosRef: k,
      disabled: m,
      children: [
        /* @__PURE__ */ l.jsx(Dn.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
          cg,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: c.useCallback(($) => {
              M((G) => new Set(G).add($));
            }, []),
            onNativeOptionRemove: c.useCallback(($) => {
              M((G) => {
                const L = new Set(G);
                return L.delete($), L;
              });
            }, []),
            children: n
          }
        ) }),
        W ? /* @__PURE__ */ l.jsxs(
          yl,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: p,
            autoComplete: f,
            value: I,
            onChange: ($) => O($.target.value),
            disabled: m,
            form: x,
            children: [
              I === void 0 ? /* @__PURE__ */ l.jsx("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
zc.displayName = Ut;
var Xc = "SelectTrigger", qc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = jn(n), a = Ze(Xc, n), i = a.disabled || o, u = H(t, a.onTriggerChange), d = In(n), p = c.useRef("touch"), [f, m, v] = bl((h) => {
      const g = d().filter((C) => !C.disabled), w = g.find((C) => C.value === a.value), y = Cl(g, h, w);
      y !== void 0 && a.onValueChange(y.value);
    }), x = (h) => {
      i || (a.onOpenChange(!0), v()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ l.jsx(nr, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": wl(a.value) ? "" : void 0,
        ...r,
        ref: u,
        onClick: P(r.onClick, (h) => {
          h.currentTarget.focus(), p.current !== "mouse" && x(h);
        }),
        onPointerDown: P(r.onPointerDown, (h) => {
          p.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: P(r.onKeyDown, (h) => {
          const g = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(g && h.key === " ") && rg.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
qc.displayName = Xc;
var Zc = "SelectValue", Jc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: s, placeholder: a = "", ...i } = e, u = Ze(Zc, n), { onValueNodeHasChildrenChange: d } = u, p = s !== void 0, f = H(t, u.onValueNodeChange);
    return ue(() => {
      d(p);
    }, [d, p]), /* @__PURE__ */ l.jsx(
      j.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: wl(u.value) ? /* @__PURE__ */ l.jsx(l.Fragment, { children: a }) : s
      }
    );
  }
);
Jc.displayName = Zc;
var ug = "SelectIcon", Qc = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ l.jsx(j.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
Qc.displayName = ug;
var dg = "SelectPortal", el = (e) => /* @__PURE__ */ l.jsx(wt, { asChild: !0, ...e });
el.displayName = dg;
var st = "SelectContent", tl = c.forwardRef(
  (e, t) => {
    const n = Ze(st, e.__scopeSelect), [o, r] = c.useState();
    if (ue(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const s = o;
      return s ? kt.createPortal(
        /* @__PURE__ */ l.jsx(nl, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx(Dn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ l.jsx(ol, { ...e, ref: t });
  }
);
tl.displayName = st;
var Ee = 10, [nl, Je] = Et(st), fg = "SelectContentImpl", ol = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: o = "item-aligned",
      onCloseAutoFocus: r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: u,
      align: d,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: g,
      //
      ...w
    } = e, y = Ze(st, n), [C, S] = c.useState(null), [E, A] = c.useState(null), R = H(t, (B) => S(B)), [D, I] = c.useState(null), [O, k] = c.useState(
      null
    ), W = In(n), [U, M] = c.useState(!1), K = c.useRef(!1);
    c.useEffect(() => {
      if (C) return ko(C);
    }, [C]), Oo();
    const $ = c.useCallback(
      (B) => {
        const [Z, ...te] = W().map((q) => q.ref.current), [X] = te.slice(-1), J = document.activeElement;
        for (const q of B)
          if (q === J || (q == null || q.scrollIntoView({ block: "nearest" }), q === Z && E && (E.scrollTop = 0), q === X && E && (E.scrollTop = E.scrollHeight), q == null || q.focus(), document.activeElement !== J)) return;
      },
      [W, E]
    ), G = c.useCallback(
      () => $([D, C]),
      [$, D, C]
    );
    c.useEffect(() => {
      U && G();
    }, [U, G]);
    const { onOpenChange: L, triggerPointerDownPosRef: _ } = y;
    c.useEffect(() => {
      if (C) {
        let B = { x: 0, y: 0 };
        const Z = (X) => {
          var J, q;
          B = {
            x: Math.abs(Math.round(X.pageX) - (((J = _.current) == null ? void 0 : J.x) ?? 0)),
            y: Math.abs(Math.round(X.pageY) - (((q = _.current) == null ? void 0 : q.y) ?? 0))
          };
        }, te = (X) => {
          B.x <= 10 && B.y <= 10 ? X.preventDefault() : C.contains(X.target) || L(!1), document.removeEventListener("pointermove", Z), _.current = null;
        };
        return _.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", te, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", te, { capture: !0 });
        };
      }
    }, [C, L, _]), c.useEffect(() => {
      const B = () => L(!1);
      return window.addEventListener("blur", B), window.addEventListener("resize", B), () => {
        window.removeEventListener("blur", B), window.removeEventListener("resize", B);
      };
    }, [L]);
    const [z, ee] = bl((B) => {
      const Z = W().filter((J) => !J.disabled), te = Z.find((J) => J.ref.current === document.activeElement), X = Cl(Z, B, te);
      X && setTimeout(() => X.ref.current.focus());
    }), se = c.useCallback(
      (B, Z, te) => {
        const X = !K.current && !te;
        (y.value !== void 0 && y.value === Z || X) && (I(B), X && (K.current = !0));
      },
      [y.value]
    ), le = c.useCallback(() => C == null ? void 0 : C.focus(), [C]), re = c.useCallback(
      (B, Z, te) => {
        const X = !K.current && !te;
        (y.value !== void 0 && y.value === Z || X) && k(B);
      },
      [y.value]
    ), be = o === "popper" ? uo : rl, fe = be === uo ? {
      side: i,
      sideOffset: u,
      align: d,
      alignOffset: p,
      arrowPadding: f,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: h,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ l.jsx(
      nl,
      {
        scope: n,
        content: C,
        viewport: E,
        onViewportChange: A,
        itemRefCallback: se,
        selectedItem: D,
        onItemLeave: le,
        itemTextRefCallback: re,
        focusSelectedItem: G,
        selectedItemText: O,
        position: o,
        isPositioned: U,
        searchRef: z,
        children: /* @__PURE__ */ l.jsx(En, { as: nt, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          Cn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (B) => {
              B.preventDefault();
            },
            onUnmountAutoFocus: P(r, (B) => {
              var Z;
              (Z = y.trigger) == null || Z.focus({ preventScroll: !0 }), B.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              xt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (B) => B.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
                  be,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (B) => B.preventDefault(),
                    ...w,
                    ...fe,
                    onPlaced: () => M(!0),
                    ref: R,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...w.style
                    },
                    onKeyDown: P(w.onKeyDown, (B) => {
                      const Z = B.ctrlKey || B.altKey || B.metaKey;
                      if (B.key === "Tab" && B.preventDefault(), !Z && B.key.length === 1 && ee(B.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(B.key)) {
                        let X = W().filter((J) => !J.disabled).map((J) => J.ref.current);
                        if (["ArrowUp", "End"].includes(B.key) && (X = X.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(B.key)) {
                          const J = B.target, q = X.indexOf(J);
                          X = X.slice(q + 1);
                        }
                        setTimeout(() => $(X)), B.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ol.displayName = fg;
var pg = "SelectItemAlignedPosition", rl = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = Ze(st, n), a = Je(st, n), [i, u] = c.useState(null), [d, p] = c.useState(null), f = H(t, (R) => p(R)), m = In(n), v = c.useRef(!1), x = c.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: w, focusSelectedItem: y } = a, C = c.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && h && g && w) {
      const R = s.trigger.getBoundingClientRect(), D = d.getBoundingClientRect(), I = s.valueNode.getBoundingClientRect(), O = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const J = O.left - D.left, q = I.left - J, pe = R.left - q, xe = R.width + pe, Ie = Math.max(xe, D.width), Qe = window.innerWidth - Ee, Ve = Ot(q, [
          Ee,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ee, Qe - Ie)
        ]);
        i.style.minWidth = xe + "px", i.style.left = Ve + "px";
      } else {
        const J = D.right - O.right, q = window.innerWidth - I.right - J, pe = window.innerWidth - R.right - q, xe = R.width + pe, Ie = Math.max(xe, D.width), Qe = window.innerWidth - Ee, Ve = Ot(q, [
          Ee,
          Math.max(Ee, Qe - Ie)
        ]);
        i.style.minWidth = xe + "px", i.style.right = Ve + "px";
      }
      const k = m(), W = window.innerHeight - Ee * 2, U = h.scrollHeight, M = window.getComputedStyle(d), K = parseInt(M.borderTopWidth, 10), $ = parseInt(M.paddingTop, 10), G = parseInt(M.borderBottomWidth, 10), L = parseInt(M.paddingBottom, 10), _ = K + $ + U + L + G, z = Math.min(g.offsetHeight * 5, _), ee = window.getComputedStyle(h), se = parseInt(ee.paddingTop, 10), le = parseInt(ee.paddingBottom, 10), re = R.top + R.height / 2 - Ee, be = W - re, fe = g.offsetHeight / 2, B = g.offsetTop + fe, Z = K + $ + B, te = _ - Z;
      if (Z <= re) {
        const J = k.length > 0 && g === k[k.length - 1].ref.current;
        i.style.bottom = "0px";
        const q = d.clientHeight - h.offsetTop - h.offsetHeight, pe = Math.max(
          be,
          fe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (J ? le : 0) + q + G
        ), xe = Z + pe;
        i.style.height = xe + "px";
      } else {
        const J = k.length > 0 && g === k[0].ref.current;
        i.style.top = "0px";
        const pe = Math.max(
          re,
          K + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (J ? se : 0) + fe
        ) + te;
        i.style.height = pe + "px", h.scrollTop = Z - re + h.offsetTop;
      }
      i.style.margin = `${Ee}px 0`, i.style.minHeight = z + "px", i.style.maxHeight = W + "px", o == null || o(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    m,
    s.trigger,
    s.valueNode,
    i,
    d,
    h,
    g,
    w,
    s.dir,
    o
  ]);
  ue(() => C(), [C]);
  const [S, E] = c.useState();
  ue(() => {
    d && E(window.getComputedStyle(d).zIndex);
  }, [d]);
  const A = c.useCallback(
    (R) => {
      R && x.current === !0 && (C(), y == null || y(), x.current = !1);
    },
    [C, y]
  );
  return /* @__PURE__ */ l.jsx(
    hg,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: u,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ l.jsx(
            j.div,
            {
              ...r,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...r.style
              }
            }
          )
        }
      )
    }
  );
});
rl.displayName = pg;
var mg = "SelectPopperPosition", uo = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = Ee,
    ...s
  } = e, a = jn(n);
  return /* @__PURE__ */ l.jsx(
    or,
    {
      ...a,
      ...s,
      ref: t,
      align: o,
      collisionPadding: r,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
uo.displayName = mg;
var [hg, br] = Et(st, {}), fo = "SelectViewport", sl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, s = Je(fo, n), a = br(fo, n), i = H(t, s.onViewportChange), u = c.useRef(0);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ l.jsx(Dn.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
        j.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...r,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...r.style
          },
          onScroll: P(r.onScroll, (d) => {
            const p = d.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: m } = a;
            if (m != null && m.current && f) {
              const v = Math.abs(u.current - p.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Ee * 2, h = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), w = Math.max(h, g);
                if (w < x) {
                  const y = w + v, C = Math.min(x, y), S = y - C;
                  f.style.height = C + "px", f.style.bottom === "0px" && (p.scrollTop = S > 0 ? S : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            u.current = p.scrollTop;
          })
        }
      ) })
    ] });
  }
);
sl.displayName = fo;
var al = "SelectGroup", [vg, gg] = Et(al), il = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = ge();
    return /* @__PURE__ */ l.jsx(vg, { scope: n, id: r, children: /* @__PURE__ */ l.jsx(j.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
il.displayName = al;
var cl = "SelectLabel", ll = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = gg(cl, n);
    return /* @__PURE__ */ l.jsx(j.div, { id: r.id, ...o, ref: t });
  }
);
ll.displayName = cl;
var vn = "SelectItem", [xg, ul] = Et(vn), dl = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: s,
      ...a
    } = e, i = Ze(vn, n), u = Je(vn, n), d = i.value === o, [p, f] = c.useState(s ?? ""), [m, v] = c.useState(!1), x = H(
      t,
      (y) => {
        var C;
        return (C = u.itemRefCallback) == null ? void 0 : C.call(u, y, o, r);
      }
    ), h = ge(), g = c.useRef("touch"), w = () => {
      r || (i.onValueChange(o), i.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l.jsx(
      xg,
      {
        scope: n,
        value: o,
        disabled: r,
        textId: h,
        isSelected: d,
        onItemTextChange: c.useCallback((y) => {
          f((C) => C || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ l.jsx(
          Dn.ItemSlot,
          {
            scope: n,
            value: o,
            disabled: r,
            textValue: p,
            children: /* @__PURE__ */ l.jsx(
              j.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": d && m,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                tabIndex: r ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: P(a.onFocus, () => v(!0)),
                onBlur: P(a.onBlur, () => v(!1)),
                onClick: P(a.onClick, () => {
                  g.current !== "mouse" && w();
                }),
                onPointerUp: P(a.onPointerUp, () => {
                  g.current === "mouse" && w();
                }),
                onPointerDown: P(a.onPointerDown, (y) => {
                  g.current = y.pointerType;
                }),
                onPointerMove: P(a.onPointerMove, (y) => {
                  var C;
                  g.current = y.pointerType, r ? (C = u.onItemLeave) == null || C.call(u) : g.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: P(a.onPointerLeave, (y) => {
                  var C;
                  y.currentTarget === document.activeElement && ((C = u.onItemLeave) == null || C.call(u));
                }),
                onKeyDown: P(a.onKeyDown, (y) => {
                  var S;
                  ((S = u.searchRef) == null ? void 0 : S.current) !== "" && y.key === " " || (sg.includes(y.key) && w(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
dl.displayName = vn;
var _t = "SelectItemText", fl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e, a = Ze(_t, n), i = Je(_t, n), u = ul(_t, n), d = lg(_t, n), [p, f] = c.useState(null), m = H(
      t,
      (w) => f(w),
      u.onItemTextChange,
      (w) => {
        var y;
        return (y = i.itemTextRefCallback) == null ? void 0 : y.call(i, w, u.value, u.disabled);
      }
    ), v = p == null ? void 0 : p.textContent, x = c.useMemo(
      () => /* @__PURE__ */ l.jsx("option", { value: u.value, disabled: u.disabled, children: v }, u.value),
      [u.disabled, u.value, v]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = d;
    return ue(() => (h(x), () => g(x)), [h, g, x]), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(j.span, { id: u.textId, ...s, ref: m }),
      u.isSelected && a.valueNode && !a.valueNodeHasChildren ? kt.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
fl.displayName = _t;
var pl = "SelectItemIndicator", ml = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return ul(pl, n).isSelected ? /* @__PURE__ */ l.jsx(j.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
ml.displayName = pl;
var po = "SelectScrollUpButton", hl = c.forwardRef((e, t) => {
  const n = Je(po, e.__scopeSelect), o = br(po, e.__scopeSelect), [r, s] = c.useState(!1), a = H(t, o.onScrollButtonChange);
  return ue(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = u.scrollTop > 0;
        s(d);
      };
      const u = n.viewport;
      return i(), u.addEventListener("scroll", i), () => u.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ l.jsx(
    gl,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: u } = n;
        i && u && (i.scrollTop = i.scrollTop - u.offsetHeight);
      }
    }
  ) : null;
});
hl.displayName = po;
var mo = "SelectScrollDownButton", vl = c.forwardRef((e, t) => {
  const n = Je(mo, e.__scopeSelect), o = br(mo, e.__scopeSelect), [r, s] = c.useState(!1), a = H(t, o.onScrollButtonChange);
  return ue(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const d = u.scrollHeight - u.clientHeight, p = Math.ceil(u.scrollTop) < d;
        s(p);
      };
      const u = n.viewport;
      return i(), u.addEventListener("scroll", i), () => u.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), r ? /* @__PURE__ */ l.jsx(
    gl,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: u } = n;
        i && u && (i.scrollTop = i.scrollTop + u.offsetHeight);
      }
    }
  ) : null;
});
vl.displayName = mo;
var gl = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, s = Je("SelectScrollButton", n), a = c.useRef(null), i = In(n), u = c.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return c.useEffect(() => () => u(), [u]), ue(() => {
    var p;
    const d = i().find((f) => f.ref.current === document.activeElement);
    (p = d == null ? void 0 : d.ref.current) == null || p.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ l.jsx(
    j.div,
    {
      "aria-hidden": !0,
      ...r,
      ref: t,
      style: { flexShrink: 0, ...r.style },
      onPointerDown: P(r.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerMove: P(r.onPointerMove, () => {
        var d;
        (d = s.onItemLeave) == null || d.call(s), a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerLeave: P(r.onPointerLeave, () => {
        u();
      })
    }
  );
}), wg = "SelectSeparator", xl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
xl.displayName = wg;
var ho = "SelectArrow", yg = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = jn(n), s = Ze(ho, n), a = Je(ho, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ l.jsx(rr, { ...r, ...o, ref: t }) : null;
  }
);
yg.displayName = ho;
function wl(e) {
  return e === "" || e === void 0;
}
var yl = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = c.useRef(null), s = H(t, r), a = Lt(n);
    return c.useEffect(() => {
      const i = r.current, u = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "value"
      ).set;
      if (a !== n && p) {
        const f = new Event("change", { bubbles: !0 });
        p.call(i, n), i.dispatchEvent(f);
      }
    }, [a, n]), /* @__PURE__ */ l.jsx(Ht, { asChild: !0, children: /* @__PURE__ */ l.jsx("select", { ...o, ref: s, defaultValue: n }) });
  }
);
yl.displayName = "BubbleSelect";
function bl(e) {
  const t = ne(e), n = c.useRef(""), o = c.useRef(0), r = c.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), function u(d) {
        n.current = d, window.clearTimeout(o.current), d !== "" && (o.current = window.setTimeout(() => u(""), 1e3));
      }(i);
    },
    [t]
  ), s = c.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return c.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, s];
}
function Cl(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = bg(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((d) => d !== n));
  const u = a.find(
    (d) => d.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function bg(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Cg = zc, Sl = qc, El = Jc, Sg = Qc, Eg = el, Rl = tl, Rg = sl, Pl = ll, Tl = dl, Nl = fl, Al = ml, Pg = hl, Tg = vl, _l = xl;
const Ng = Cg, Ag = Eg, _g = Pg, Mg = Tg, Ml = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Al,
  {
    className: N(T + "select-item-indicator", t),
    ...n,
    children: e
  }
);
Ml.displayName = Al.displayName;
const Dl = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsxs(
  Sl,
  {
    className: N(T + "select-trigger", t),
    ...n,
    children: [
      e,
      /* @__PURE__ */ l.jsx(Sg, { className: N(T + "select-icon"), children: /* @__PURE__ */ l.jsx(Ua, { style: { width: "16px", height: "16px" } }) })
    ]
  }
);
Dl.displayName = Sl.displayName;
const Il = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  El,
  {
    className: N(T + "select-value", e),
    ...t
  }
);
Il.displayName = El.displayName;
const vo = ({
  children: e,
  position: t = "popper",
  className: n,
  ...o
}) => /* @__PURE__ */ l.jsxs(
  Rl,
  {
    className: N(T + "select-content", n),
    position: t,
    sideOffset: 4,
    ...o,
    children: [
      /* @__PURE__ */ l.jsx(_g, { className: N(T + "select-scroll-up-button"), children: /* @__PURE__ */ l.jsx(Vp, {}) }),
      /* @__PURE__ */ l.jsx(
        Rg,
        {
          className: N(
            T + "select-primitive-viewport",
            t === "popper" ? T + "select-primitive-viewport-popper" : null,
            n
          ),
          children: e
        }
      ),
      /* @__PURE__ */ l.jsx(
        Mg,
        {
          className: N(T + "select-scroll-down-button"),
          children: /* @__PURE__ */ l.jsx(Ua, {})
        }
      )
    ]
  }
);
vo.displayName = Rl.displayName;
const jl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Pl,
  {
    className: N(T + "select-label", e),
    ...t
  }
);
jl.displayName = Pl.displayName;
const Ol = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsxs(
  Tl,
  {
    className: N(T + "select-item", t),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(Ml, { children: /* @__PURE__ */ l.jsx(Go, {}) }),
      e
    ]
  }
);
Ol.displayName = Tl.displayName;
const kl = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(Nl, { ...n, children: /* @__PURE__ */ l.jsx("div", { className: N(T + "select-item-text", t), children: e }) });
kl.displayName = Nl.displayName;
const Ll = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  _l,
  {
    className: N(T + "select-separator", e),
    ...t
  }
);
Ll.displayName = _l.displayName;
const Dg = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  il,
  {
    className: N(T + "select-group", e),
    ...n,
    children: t
  }
), Ig = ({
  // SelectProps
  value: e,
  defaultValue: t,
  onValueChange: n,
  open: o,
  defaultOpen: r,
  onOpenChange: s,
  dir: a,
  name: i,
  autoComplete: u,
  disabled: d,
  required: p,
  form: f,
  // CustomProps
  children: m,
  placeholder: v,
  width: x,
  isPortal: h = !0,
  // SelectContentProps
  ...g
}) => /* @__PURE__ */ l.jsxs(
  Ng,
  {
    value: e,
    defaultValue: t,
    onValueChange: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    dir: a,
    name: i,
    autoComplete: u,
    disabled: d,
    required: p,
    form: f,
    children: [
      /* @__PURE__ */ l.jsx(Dl, { style: { width: x }, children: /* @__PURE__ */ l.jsx(Il, { placeholder: v }) }),
      h ? /* @__PURE__ */ l.jsx(Ag, { children: /* @__PURE__ */ l.jsx(vo, { style: { width: x }, ...g, children: m }) }) : /* @__PURE__ */ l.jsx(vo, { style: { width: x }, ...g, children: m })
    ]
  }
), Fw = ({
  groups: e,
  ...t
}) => /* @__PURE__ */ l.jsx(Ig, { ...t, children: e.map(({ label: n, items: o }, r) => /* @__PURE__ */ l.jsxs(c.Fragment, { children: [
  /* @__PURE__ */ l.jsxs(Dg, { children: [
    n && /* @__PURE__ */ l.jsx(jl, { children: n }),
    o.map((s) => /* @__PURE__ */ Ue(Ol, { ...s, key: s.value }, /* @__PURE__ */ l.jsx(kl, { children: s.text })))
  ] }),
  /* @__PURE__ */ l.jsx(Ll, {})
] }, `group-${r}`)) });
function jg(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var Cr = "ScrollArea", [$l, Vw] = ie(Cr), [Og, Se] = $l(Cr), Fl = c.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: o = "hover",
      dir: r,
      scrollHideDelay: s = 600,
      ...a
    } = e, [i, u] = c.useState(null), [d, p] = c.useState(null), [f, m] = c.useState(null), [v, x] = c.useState(null), [h, g] = c.useState(null), [w, y] = c.useState(0), [C, S] = c.useState(0), [E, A] = c.useState(!1), [R, D] = c.useState(!1), I = H(t, (k) => u(k)), O = ze(r);
    return /* @__PURE__ */ l.jsx(
      Og,
      {
        scope: n,
        type: o,
        dir: O,
        scrollHideDelay: s,
        scrollArea: i,
        viewport: d,
        onViewportChange: p,
        content: f,
        onContentChange: m,
        scrollbarX: v,
        onScrollbarXChange: x,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: A,
        scrollbarY: h,
        onScrollbarYChange: g,
        scrollbarYEnabled: R,
        onScrollbarYEnabledChange: D,
        onCornerWidthChange: y,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ l.jsx(
          j.div,
          {
            dir: O,
            ...a,
            ref: I,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": w + "px",
              "--radix-scroll-area-corner-height": C + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Fl.displayName = Cr;
var Vl = "ScrollAreaViewport", Bl = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: r, ...s } = e, a = Se(Vl, n), i = c.useRef(null), u = H(t, i, a.onViewportChange);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ l.jsx(
        j.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: u,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ l.jsx("div", { ref: a.onContentChange, style: { minWidth: "100%", display: "table" }, children: o })
        }
      )
    ] });
  }
);
Bl.displayName = Vl;
var De = "ScrollAreaScrollbar", Sr = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Se(De, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = r, i = e.orientation === "horizontal";
    return c.useEffect(() => (i ? s(!0) : a(!0), () => {
      i ? s(!1) : a(!1);
    }), [i, s, a]), r.type === "hover" ? /* @__PURE__ */ l.jsx(kg, { ...o, ref: t, forceMount: n }) : r.type === "scroll" ? /* @__PURE__ */ l.jsx(Lg, { ...o, ref: t, forceMount: n }) : r.type === "auto" ? /* @__PURE__ */ l.jsx(Wl, { ...o, ref: t, forceMount: n }) : r.type === "always" ? /* @__PURE__ */ l.jsx(Er, { ...o, ref: t }) : null;
  }
);
Sr.displayName = De;
var kg = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = Se(De, e.__scopeScrollArea), [s, a] = c.useState(!1);
  return c.useEffect(() => {
    const i = r.scrollArea;
    let u = 0;
    if (i) {
      const d = () => {
        window.clearTimeout(u), a(!0);
      }, p = () => {
        u = window.setTimeout(() => a(!1), r.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", d), i.addEventListener("pointerleave", p), () => {
        window.clearTimeout(u), i.removeEventListener("pointerenter", d), i.removeEventListener("pointerleave", p);
      };
    }
  }, [r.scrollArea, r.scrollHideDelay]), /* @__PURE__ */ l.jsx(ce, { present: n || s, children: /* @__PURE__ */ l.jsx(
    Wl,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Lg = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = Se(De, e.__scopeScrollArea), s = e.orientation === "horizontal", a = kn(() => u("SCROLL_END"), 100), [i, u] = jg("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return c.useEffect(() => {
    if (i === "idle") {
      const d = window.setTimeout(() => u("HIDE"), r.scrollHideDelay);
      return () => window.clearTimeout(d);
    }
  }, [i, r.scrollHideDelay, u]), c.useEffect(() => {
    const d = r.viewport, p = s ? "scrollLeft" : "scrollTop";
    if (d) {
      let f = d[p];
      const m = () => {
        const v = d[p];
        f !== v && (u("SCROLL"), a()), f = v;
      };
      return d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m);
    }
  }, [r.viewport, s, u, a]), /* @__PURE__ */ l.jsx(ce, { present: n || i !== "hidden", children: /* @__PURE__ */ l.jsx(
    Er,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...o,
      ref: t,
      onPointerEnter: P(e.onPointerEnter, () => u("POINTER_ENTER")),
      onPointerLeave: P(e.onPointerLeave, () => u("POINTER_LEAVE"))
    }
  ) });
}), Wl = c.forwardRef((e, t) => {
  const n = Se(De, e.__scopeScrollArea), { forceMount: o, ...r } = e, [s, a] = c.useState(!1), i = e.orientation === "horizontal", u = kn(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, p = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(i ? d : p);
    }
  }, 10);
  return ht(n.viewport, u), ht(n.content, u), /* @__PURE__ */ l.jsx(ce, { present: o || s, children: /* @__PURE__ */ l.jsx(
    Er,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Er = c.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...o } = e, r = Se(De, e.__scopeScrollArea), s = c.useRef(null), a = c.useRef(0), [i, u] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = Yl(i.viewport, i.content), p = {
    ...o,
    sizes: i,
    onSizesChange: u,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (m) => s.current = m,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (m) => a.current = m
  };
  function f(m, v) {
    return Hg(m, a.current, i, v);
  }
  return n === "horizontal" ? /* @__PURE__ */ l.jsx(
    $g,
    {
      ...p,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && s.current) {
          const m = r.viewport.scrollLeft, v = us(m, i, r.dir);
          s.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        r.viewport && (r.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        r.viewport && (r.viewport.scrollLeft = f(m, r.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ l.jsx(
    Fg,
    {
      ...p,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && s.current) {
          const m = r.viewport.scrollTop, v = us(m, i);
          s.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        r.viewport && (r.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        r.viewport && (r.viewport.scrollTop = f(m));
      }
    }
  ) : null;
}), $g = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, s = Se(De, e.__scopeScrollArea), [a, i] = c.useState(), u = c.useRef(null), d = H(t, u, s.onScrollbarXChange);
  return c.useEffect(() => {
    u.current && i(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ l.jsx(
    Ul,
    {
      "data-orientation": "horizontal",
      ...r,
      ref: d,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": On(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (p) => e.onThumbPointerDown(p.x),
      onDragScroll: (p) => e.onDragScroll(p.x),
      onWheelScroll: (p, f) => {
        if (s.viewport) {
          const m = s.viewport.scrollLeft + p.deltaX;
          e.onWheelScroll(m), Xl(m, f) && p.preventDefault();
        }
      },
      onResize: () => {
        u.current && s.viewport && a && o({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: u.current.clientWidth,
            paddingStart: xn(a.paddingLeft),
            paddingEnd: xn(a.paddingRight)
          }
        });
      }
    }
  );
}), Fg = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, s = Se(De, e.__scopeScrollArea), [a, i] = c.useState(), u = c.useRef(null), d = H(t, u, s.onScrollbarYChange);
  return c.useEffect(() => {
    u.current && i(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ l.jsx(
    Ul,
    {
      "data-orientation": "vertical",
      ...r,
      ref: d,
      sizes: n,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": On(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (p) => e.onThumbPointerDown(p.y),
      onDragScroll: (p) => e.onDragScroll(p.y),
      onWheelScroll: (p, f) => {
        if (s.viewport) {
          const m = s.viewport.scrollTop + p.deltaY;
          e.onWheelScroll(m), Xl(m, f) && p.preventDefault();
        }
      },
      onResize: () => {
        u.current && s.viewport && a && o({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: u.current.clientHeight,
            paddingStart: xn(a.paddingTop),
            paddingEnd: xn(a.paddingBottom)
          }
        });
      }
    }
  );
}), [Vg, Hl] = $l(De), Ul = c.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: o,
    hasThumb: r,
    onThumbChange: s,
    onThumbPointerUp: a,
    onThumbPointerDown: i,
    onThumbPositionChange: u,
    onDragScroll: d,
    onWheelScroll: p,
    onResize: f,
    ...m
  } = e, v = Se(De, n), [x, h] = c.useState(null), g = H(t, (I) => h(I)), w = c.useRef(null), y = c.useRef(""), C = v.viewport, S = o.content - o.viewport, E = ne(p), A = ne(u), R = kn(f, 10);
  function D(I) {
    if (w.current) {
      const O = I.clientX - w.current.left, k = I.clientY - w.current.top;
      d({ x: O, y: k });
    }
  }
  return c.useEffect(() => {
    const I = (O) => {
      const k = O.target;
      (x == null ? void 0 : x.contains(k)) && E(O, S);
    };
    return document.addEventListener("wheel", I, { passive: !1 }), () => document.removeEventListener("wheel", I, { passive: !1 });
  }, [C, x, S, E]), c.useEffect(A, [o, A]), ht(x, R), ht(v.content, R), /* @__PURE__ */ l.jsx(
    Vg,
    {
      scope: n,
      scrollbar: x,
      hasThumb: r,
      onThumbChange: ne(s),
      onThumbPointerUp: ne(a),
      onThumbPositionChange: A,
      onThumbPointerDown: ne(i),
      children: /* @__PURE__ */ l.jsx(
        j.div,
        {
          ...m,
          ref: g,
          style: { position: "absolute", ...m.style },
          onPointerDown: P(e.onPointerDown, (I) => {
            I.button === 0 && (I.target.setPointerCapture(I.pointerId), w.current = x.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), D(I));
          }),
          onPointerMove: P(e.onPointerMove, D),
          onPointerUp: P(e.onPointerUp, (I) => {
            const O = I.target;
            O.hasPointerCapture(I.pointerId) && O.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = y.current, v.viewport && (v.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), gn = "ScrollAreaThumb", Kl = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Hl(gn, e.__scopeScrollArea);
    return /* @__PURE__ */ l.jsx(ce, { present: n || r.hasThumb, children: /* @__PURE__ */ l.jsx(Bg, { ref: t, ...o }) });
  }
), Bg = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: o, ...r } = e, s = Se(gn, n), a = Hl(gn, n), { onThumbPositionChange: i } = a, u = H(
      t,
      (f) => a.onThumbChange(f)
    ), d = c.useRef(void 0), p = kn(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return c.useEffect(() => {
      const f = s.viewport;
      if (f) {
        const m = () => {
          if (p(), !d.current) {
            const v = Ug(f, i);
            d.current = v, i();
          }
        };
        return i(), f.addEventListener("scroll", m), () => f.removeEventListener("scroll", m);
      }
    }, [s.viewport, p, i]), /* @__PURE__ */ l.jsx(
      j.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...r,
        ref: u,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...o
        },
        onPointerDownCapture: P(e.onPointerDownCapture, (f) => {
          const v = f.target.getBoundingClientRect(), x = f.clientX - v.left, h = f.clientY - v.top;
          a.onThumbPointerDown({ x, y: h });
        }),
        onPointerUp: P(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
Kl.displayName = gn;
var Rr = "ScrollAreaCorner", Gl = c.forwardRef(
  (e, t) => {
    const n = Se(Rr, e.__scopeScrollArea), o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? /* @__PURE__ */ l.jsx(Wg, { ...e, ref: t }) : null;
  }
);
Gl.displayName = Rr;
var Wg = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e, r = Se(Rr, n), [s, a] = c.useState(0), [i, u] = c.useState(0), d = !!(s && i);
  return ht(r.scrollbarX, () => {
    var f;
    const p = ((f = r.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    r.onCornerHeightChange(p), u(p);
  }), ht(r.scrollbarY, () => {
    var f;
    const p = ((f = r.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    r.onCornerWidthChange(p), a(p);
  }), d ? /* @__PURE__ */ l.jsx(
    j.div,
    {
      ...o,
      ref: t,
      style: {
        width: s,
        height: i,
        position: "absolute",
        right: r.dir === "ltr" ? 0 : void 0,
        left: r.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function xn(e) {
  return e ? parseInt(e, 10) : 0;
}
function Yl(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function On(e) {
  const t = Yl(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function Hg(e, t, n, o = "ltr") {
  const r = On(n), s = r / 2, a = t || s, i = r - a, u = n.scrollbar.paddingStart + a, d = n.scrollbar.size - n.scrollbar.paddingEnd - i, p = n.content - n.viewport, f = o === "ltr" ? [0, p] : [p * -1, 0];
  return zl([u, d], f)(e);
}
function us(e, t, n = "ltr") {
  const o = On(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - r, a = t.content - t.viewport, i = s - o, u = n === "ltr" ? [0, a] : [a * -1, 0], d = Ot(e, u);
  return zl([0, a], [0, i])(d);
}
function zl(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Xl(e, t) {
  return e > 0 && e < t;
}
var Ug = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return function r() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== s.left, i = n.top !== s.top;
    (a || i) && t(), n = s, o = window.requestAnimationFrame(r);
  }(), () => window.cancelAnimationFrame(o);
};
function kn(e, t) {
  const n = ne(e), o = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(o.current), []), c.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [n, t]);
}
function ht(e, t) {
  const n = ne(t);
  ue(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(n);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(o), r.unobserve(e);
      };
    }
  }, [e, n]);
}
var ql = Fl, Kg = Bl, Gg = Gl;
const Yg = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsxs(
  ql,
  {
    className: N(T + "scroll-area", t),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(
        Kg,
        {
          className: N(T + "scroll-area-viewport", t),
          children: e
        }
      ),
      /* @__PURE__ */ l.jsx(Zl, {}),
      /* @__PURE__ */ l.jsx(Gg, {})
    ]
  }
);
Yg.displayName = ql.displayName;
const Zl = ({
  orientation: e = "vertical",
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Sr,
  {
    orientation: e,
    className: N(
      T + "scroll-bar",
      e === "vertical" ? T + "scroll-bar-vertical" : T + "scroll-bar-horizontal",
      t
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      Kl,
      {
        className: T + "scroll-bar-thumb"
      }
    )
  }
);
Zl.displayName = Sr.displayName;
var zg = "Separator", ds = "horizontal", Xg = ["horizontal", "vertical"], Jl = c.forwardRef((e, t) => {
  const { decorative: n, orientation: o = ds, ...r } = e, s = qg(o) ? o : ds, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ l.jsx(
    j.div,
    {
      "data-orientation": s,
      ...i,
      ...r,
      ref: t
    }
  );
});
Jl.displayName = zg;
function qg(e) {
  return Xg.includes(e);
}
var Ql = Jl;
const Zg = ({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...o
}) => /* @__PURE__ */ l.jsx(
  Ql,
  {
    decorative: n,
    orientation: t,
    className: N(
      T + "separator",
      T + "separator-" + t,
      e
    ),
    ...o
  }
);
Zg.displayName = Ql.displayName;
var eu = ["PageUp", "PageDown"], tu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], nu = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Rt = "Slider", [go, Jg, Qg] = gt(Rt), [ou, Bw] = ie(Rt, [
  Qg
]), [ex, Ln] = ou(Rt), ru = c.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: o = 0,
      max: r = 100,
      step: s = 1,
      orientation: a = "horizontal",
      disabled: i = !1,
      minStepsBetweenThumbs: u = 0,
      defaultValue: d = [o],
      value: p,
      onValueChange: f = () => {
      },
      onValueCommit: m = () => {
      },
      inverted: v = !1,
      form: x,
      ...h
    } = e, g = c.useRef(/* @__PURE__ */ new Set()), w = c.useRef(0), C = a === "horizontal" ? tx : nx, [S = [], E] = de({
      prop: p,
      defaultProp: d,
      onChange: (k) => {
        var U;
        (U = [...g.current][w.current]) == null || U.focus(), f(k);
      }
    }), A = c.useRef(S);
    function R(k) {
      const W = ix(S, k);
      O(k, W);
    }
    function D(k) {
      O(k, w.current);
    }
    function I() {
      const k = A.current[w.current];
      S[w.current] !== k && m(S);
    }
    function O(k, W, { commit: U } = { commit: !1 }) {
      const M = dx(s), K = fx(Math.round((k - o) / s) * s + o, M), $ = Ot(K, [o, r]);
      E((G = []) => {
        const L = sx(G, $, W);
        if (ux(L, u * s)) {
          w.current = L.indexOf($);
          const _ = String(L) !== String(G);
          return _ && U && m(L), _ ? L : G;
        } else
          return G;
      });
    }
    return /* @__PURE__ */ l.jsx(
      ex,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: i,
        min: o,
        max: r,
        valueIndexToChangeRef: w,
        thumbs: g.current,
        values: S,
        orientation: a,
        form: x,
        children: /* @__PURE__ */ l.jsx(go.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ l.jsx(go.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ l.jsx(
          C,
          {
            "aria-disabled": i,
            "data-disabled": i ? "" : void 0,
            ...h,
            ref: t,
            onPointerDown: P(h.onPointerDown, () => {
              i || (A.current = S);
            }),
            min: o,
            max: r,
            inverted: v,
            onSlideStart: i ? void 0 : R,
            onSlideMove: i ? void 0 : D,
            onSlideEnd: i ? void 0 : I,
            onHomeKeyDown: () => !i && O(o, 0, { commit: !0 }),
            onEndKeyDown: () => !i && O(r, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: k, direction: W }) => {
              if (!i) {
                const K = eu.includes(k.key) || k.shiftKey && tu.includes(k.key) ? 10 : 1, $ = w.current, G = S[$], L = s * K * W;
                O(G + L, $, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
ru.displayName = Rt;
var [su, au] = ou(Rt, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), tx = c.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: o,
      dir: r,
      inverted: s,
      onSlideStart: a,
      onSlideMove: i,
      onSlideEnd: u,
      onStepKeyDown: d,
      ...p
    } = e, [f, m] = c.useState(null), v = H(t, (C) => m(C)), x = c.useRef(void 0), h = ze(r), g = h === "ltr", w = g && !s || !g && s;
    function y(C) {
      const S = x.current || f.getBoundingClientRect(), E = [0, S.width], R = Pr(E, w ? [n, o] : [o, n]);
      return x.current = S, R(C - S.left);
    }
    return /* @__PURE__ */ l.jsx(
      su,
      {
        scope: e.__scopeSlider,
        startEdge: w ? "left" : "right",
        endEdge: w ? "right" : "left",
        direction: w ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ l.jsx(
          iu,
          {
            dir: h,
            "data-orientation": "horizontal",
            ...p,
            ref: v,
            style: {
              ...p.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (C) => {
              const S = y(C.clientX);
              a == null || a(S);
            },
            onSlideMove: (C) => {
              const S = y(C.clientX);
              i == null || i(S);
            },
            onSlideEnd: () => {
              x.current = void 0, u == null || u();
            },
            onStepKeyDown: (C) => {
              const E = nu[w ? "from-left" : "from-right"].includes(C.key);
              d == null || d({ event: C, direction: E ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), nx = c.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: o,
      inverted: r,
      onSlideStart: s,
      onSlideMove: a,
      onSlideEnd: i,
      onStepKeyDown: u,
      ...d
    } = e, p = c.useRef(null), f = H(t, p), m = c.useRef(void 0), v = !r;
    function x(h) {
      const g = m.current || p.current.getBoundingClientRect(), w = [0, g.height], C = Pr(w, v ? [o, n] : [n, o]);
      return m.current = g, C(h - g.top);
    }
    return /* @__PURE__ */ l.jsx(
      su,
      {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ l.jsx(
          iu,
          {
            "data-orientation": "vertical",
            ...d,
            ref: f,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (h) => {
              const g = x(h.clientY);
              s == null || s(g);
            },
            onSlideMove: (h) => {
              const g = x(h.clientY);
              a == null || a(g);
            },
            onSlideEnd: () => {
              m.current = void 0, i == null || i();
            },
            onStepKeyDown: (h) => {
              const w = nu[v ? "from-bottom" : "from-top"].includes(h.key);
              u == null || u({ event: h, direction: w ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), iu = c.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: o,
      onSlideMove: r,
      onSlideEnd: s,
      onHomeKeyDown: a,
      onEndKeyDown: i,
      onStepKeyDown: u,
      ...d
    } = e, p = Ln(Rt, n);
    return /* @__PURE__ */ l.jsx(
      j.span,
      {
        ...d,
        ref: t,
        onKeyDown: P(e.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : eu.concat(tu).includes(f.key) && (u(f), f.preventDefault());
        }),
        onPointerDown: P(e.onPointerDown, (f) => {
          const m = f.target;
          m.setPointerCapture(f.pointerId), f.preventDefault(), p.thumbs.has(m) ? m.focus() : o(f);
        }),
        onPointerMove: P(e.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && r(f);
        }),
        onPointerUp: P(e.onPointerUp, (f) => {
          const m = f.target;
          m.hasPointerCapture(f.pointerId) && (m.releasePointerCapture(f.pointerId), s(f));
        })
      }
    );
  }
), cu = "SliderTrack", lu = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, r = Ln(cu, n);
    return /* @__PURE__ */ l.jsx(
      j.span,
      {
        "data-disabled": r.disabled ? "" : void 0,
        "data-orientation": r.orientation,
        ...o,
        ref: t
      }
    );
  }
);
lu.displayName = cu;
var xo = "SliderRange", uu = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, r = Ln(xo, n), s = au(xo, n), a = c.useRef(null), i = H(t, a), u = r.values.length, d = r.values.map(
      (m) => fu(m, r.min, r.max)
    ), p = u > 1 ? Math.min(...d) : 0, f = 100 - Math.max(...d);
    return /* @__PURE__ */ l.jsx(
      j.span,
      {
        "data-orientation": r.orientation,
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: i,
        style: {
          ...e.style,
          [s.startEdge]: p + "%",
          [s.endEdge]: f + "%"
        }
      }
    );
  }
);
uu.displayName = xo;
var wo = "SliderThumb", du = c.forwardRef(
  (e, t) => {
    const n = Jg(e.__scopeSlider), [o, r] = c.useState(null), s = H(t, (i) => r(i)), a = c.useMemo(
      () => o ? n().findIndex((i) => i.ref.current === o) : -1,
      [n, o]
    );
    return /* @__PURE__ */ l.jsx(ox, { ...e, ref: s, index: a });
  }
), ox = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: o, name: r, ...s } = e, a = Ln(wo, n), i = au(wo, n), [u, d] = c.useState(null), p = H(t, (y) => d(y)), f = u ? a.form || !!u.closest("form") : !0, m = $t(u), v = a.values[o], x = v === void 0 ? 0 : fu(v, a.min, a.max), h = ax(o, a.values.length), g = m == null ? void 0 : m[i.size], w = g ? cx(g, x, i.direction) : 0;
    return c.useEffect(() => {
      if (u)
        return a.thumbs.add(u), () => {
          a.thumbs.delete(u);
        };
    }, [u, a.thumbs]), /* @__PURE__ */ l.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [i.startEdge]: `calc(${x}% + ${w}px)`
        },
        children: [
          /* @__PURE__ */ l.jsx(go.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ l.jsx(
            j.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || h,
              "aria-valuemin": a.min,
              "aria-valuenow": v,
              "aria-valuemax": a.max,
              "aria-orientation": a.orientation,
              "data-orientation": a.orientation,
              "data-disabled": a.disabled ? "" : void 0,
              tabIndex: a.disabled ? void 0 : 0,
              ...s,
              ref: p,
              style: v === void 0 ? { display: "none" } : e.style,
              onFocus: P(e.onFocus, () => {
                a.valueIndexToChangeRef.current = o;
              })
            }
          ) }),
          f && /* @__PURE__ */ l.jsx(
            rx,
            {
              name: r ?? (a.name ? a.name + (a.values.length > 1 ? "[]" : "") : void 0),
              form: a.form,
              value: v
            },
            o
          )
        ]
      }
    );
  }
);
du.displayName = wo;
var rx = (e) => {
  const { value: t, ...n } = e, o = c.useRef(null), r = Lt(t);
  return c.useEffect(() => {
    const s = o.current, a = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(a, "value").set;
    if (r !== t && u) {
      const d = new Event("input", { bubbles: !0 });
      u.call(s, t), s.dispatchEvent(d);
    }
  }, [r, t]), /* @__PURE__ */ l.jsx("input", { style: { display: "none" }, ...n, ref: o, defaultValue: t });
};
function sx(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((r, s) => r - s);
}
function fu(e, t, n) {
  const s = 100 / (n - t) * (e - t);
  return Ot(s, [0, 100]);
}
function ax(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function ix(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((r) => Math.abs(r - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function cx(e, t, n) {
  const o = e / 2, s = Pr([0, 50], [0, o]);
  return (o - s(t) * n) * n;
}
function lx(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function ux(e, t) {
  if (t > 0) {
    const n = lx(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Pr(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function dx(e) {
  return (String(e).split(".")[1] || "").length;
}
function fx(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var pu = ru, px = lu, mx = uu, hx = du;
const vx = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  pu,
  {
    className: N(T + "slider", e),
    ...t,
    "data-disabled": t.disabled,
    children: [
      /* @__PURE__ */ l.jsx(
        px,
        {
          className: N(T + "slider-track"),
          "data-disabled": t.disabled,
          children: /* @__PURE__ */ l.jsx(mx, { className: N(T + "slider-range") })
        }
      ),
      /* @__PURE__ */ l.jsx(hx, { className: N(T + "slider-thumb") })
    ]
  }
);
vx.displayName = pu.displayName;
var Tr = "Switch", [gx, Ww] = ie(Tr), [xx, wx] = gx(Tr), mu = c.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: o,
      checked: r,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: u = "on",
      onCheckedChange: d,
      form: p,
      ...f
    } = e, [m, v] = c.useState(null), x = H(t, (C) => v(C)), h = c.useRef(!1), g = m ? p || !!m.closest("form") : !0, [w = !1, y] = de({
      prop: r,
      defaultProp: s,
      onChange: d
    });
    return /* @__PURE__ */ l.jsxs(xx, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ l.jsx(
        j.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": a,
          "data-state": gu(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: u,
          ...f,
          ref: x,
          onClick: P(e.onClick, (C) => {
            y((S) => !S), g && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ l.jsx(
        yx,
        {
          control: m,
          bubbles: !h.current,
          name: o,
          value: u,
          checked: w,
          required: a,
          disabled: i,
          form: p,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
mu.displayName = Tr;
var hu = "SwitchThumb", vu = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...o } = e, r = wx(hu, n);
    return /* @__PURE__ */ l.jsx(
      j.span,
      {
        "data-state": gu(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
vu.displayName = hu;
var yx = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), a = Lt(n), i = $t(t);
  return c.useEffect(() => {
    const u = s.current, d = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(d, "checked").set;
    if (a !== n && f) {
      const m = new Event("click", { bubbles: o });
      f.call(u, n), u.dispatchEvent(m);
    }
  }, [a, n, o]), /* @__PURE__ */ l.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: n,
      ...r,
      tabIndex: -1,
      ref: s,
      style: {
        ...e.style,
        ...i,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function gu(e) {
  return e ? "checked" : "unchecked";
}
var xu = mu, bx = vu;
const Cx = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  xu,
  {
    className: N(T + "switch", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(bx, { className: N(T + "switch-thumb") })
  }
);
Cx.displayName = xu.displayName;
var Nr = "Tabs", [Sx, Hw] = ie(Nr, [
  St
]), wu = St(), [Ex, Ar] = Sx(Nr), yu = c.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: o,
      onValueChange: r,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: i,
      activationMode: u = "automatic",
      ...d
    } = e, p = ze(i), [f, m] = de({
      prop: o,
      onChange: r,
      defaultProp: s
    });
    return /* @__PURE__ */ l.jsx(
      Ex,
      {
        scope: n,
        baseId: ge(),
        value: f,
        onValueChange: m,
        orientation: a,
        dir: p,
        activationMode: u,
        children: /* @__PURE__ */ l.jsx(
          j.div,
          {
            dir: p,
            "data-orientation": a,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
yu.displayName = Nr;
var bu = "TabsList", Cu = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...r } = e, s = Ar(bu, n), a = wu(n);
    return /* @__PURE__ */ l.jsx(
      sr,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: o,
        children: /* @__PURE__ */ l.jsx(
          j.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...r,
            ref: t
          }
        )
      }
    );
  }
);
Cu.displayName = bu;
var Su = "TabsTrigger", Eu = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, disabled: r = !1, ...s } = e, a = Ar(Su, n), i = wu(n), u = Tu(a.baseId, o), d = Nu(a.baseId, o), p = o === a.value;
    return /* @__PURE__ */ l.jsx(
      ar,
      {
        asChild: !0,
        ...i,
        focusable: !r,
        active: p,
        children: /* @__PURE__ */ l.jsx(
          j.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": p,
            "aria-controls": d,
            "data-state": p ? "active" : "inactive",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            id: u,
            ...s,
            ref: t,
            onMouseDown: P(e.onMouseDown, (f) => {
              !r && f.button === 0 && f.ctrlKey === !1 ? a.onValueChange(o) : f.preventDefault();
            }),
            onKeyDown: P(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && a.onValueChange(o);
            }),
            onFocus: P(e.onFocus, () => {
              const f = a.activationMode !== "manual";
              !p && !r && f && a.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
Eu.displayName = Su;
var Ru = "TabsContent", Pu = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, forceMount: r, children: s, ...a } = e, i = Ar(Ru, n), u = Tu(i.baseId, o), d = Nu(i.baseId, o), p = o === i.value, f = c.useRef(p);
    return c.useEffect(() => {
      const m = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ l.jsx(ce, { present: r || p, children: ({ present: m }) => /* @__PURE__ */ l.jsx(
      j.div,
      {
        "data-state": p ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": u,
        hidden: !m,
        id: d,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: m && s
      }
    ) });
  }
);
Pu.displayName = Ru;
function Tu(e, t) {
  return `${e}-trigger-${t}`;
}
function Nu(e, t) {
  return `${e}-content-${t}`;
}
var Rx = yu, Au = Cu, _u = Eu, Mu = Pu;
const Px = Rx, Du = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Au,
  {
    className: N(T + "tabs-list", e),
    ...t
  }
);
Du.displayName = Au.displayName;
const Iu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  _u,
  {
    className: N(T + "tabs-trigger", e),
    ...t
  }
);
Iu.displayName = _u.displayName;
const Tx = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Mu,
  {
    className: N(T + "tabs-content", e),
    ...t
  }
);
Tx.displayName = Mu.displayName;
const Uw = ({ triggers: e, children: t, ...n }) => /* @__PURE__ */ l.jsxs(Px, { ...n, children: [
  /* @__PURE__ */ l.jsx(Du, { children: e.map((o, r) => /* @__PURE__ */ Ue(Iu, { ...o, key: `trigger-${r}` })) }),
  t
] });
var Nx = "Toggle", ju = c.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: o = !1, onPressedChange: r, ...s } = e, [a = !1, i] = de({
    prop: n,
    onChange: r,
    defaultProp: o
  });
  return /* @__PURE__ */ l.jsx(
    j.button,
    {
      type: "button",
      "aria-pressed": a,
      "data-state": a ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...s,
      ref: t,
      onClick: P(e.onClick, () => {
        e.disabled || i(!a);
      })
    }
  );
});
ju.displayName = Nx;
var Ou = ju;
const Ax = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Ou,
  {
    className: N(T + "toggle", e),
    ...t
  }
);
Ax.displayName = Ou.displayName;
var [$n, Kw] = ie("Tooltip", [
  Ct
]), Fn = Ct(), ku = "TooltipProvider", _x = 700, yo = "tooltip.open", [Mx, _r] = $n(ku), Lu = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = _x,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, [a, i] = c.useState(!0), u = c.useRef(!1), d = c.useRef(0);
  return c.useEffect(() => {
    const p = d.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ l.jsx(
    Mx,
    {
      scope: t,
      isOpenDelayed: a,
      delayDuration: n,
      onOpen: c.useCallback(() => {
        window.clearTimeout(d.current), i(!1);
      }, []),
      onClose: c.useCallback(() => {
        window.clearTimeout(d.current), d.current = window.setTimeout(
          () => i(!0),
          o
        );
      }, [o]),
      isPointerInTransitRef: u,
      onPointerInTransitChange: c.useCallback((p) => {
        u.current = p;
      }, []),
      disableHoverableContent: r,
      children: s
    }
  );
};
Lu.displayName = ku;
var Vn = "Tooltip", [Dx, Kt] = $n(Vn), $u = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r = !1,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, u = _r(Vn, e.__scopeTooltip), d = Fn(t), [p, f] = c.useState(null), m = ge(), v = c.useRef(0), x = a ?? u.disableHoverableContent, h = i ?? u.delayDuration, g = c.useRef(!1), [w = !1, y] = de({
    prop: o,
    defaultProp: r,
    onChange: (R) => {
      R ? (u.onOpen(), document.dispatchEvent(new CustomEvent(yo))) : u.onClose(), s == null || s(R);
    }
  }), C = c.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), S = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, g.current = !1, y(!0);
  }, [y]), E = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, y(!1);
  }, [y]), A = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      g.current = !0, y(!0), v.current = 0;
    }, h);
  }, [h, y]);
  return c.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ l.jsx(An, { ...d, children: /* @__PURE__ */ l.jsx(
    Dx,
    {
      scope: t,
      contentId: m,
      open: w,
      stateAttribute: C,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: c.useCallback(() => {
        u.isOpenDelayed ? A() : S();
      }, [u.isOpenDelayed, A, S]),
      onTriggerLeave: c.useCallback(() => {
        x ? E() : (window.clearTimeout(v.current), v.current = 0);
      }, [E, x]),
      onOpen: S,
      onClose: E,
      disableHoverableContent: x,
      children: n
    }
  ) });
};
$u.displayName = Vn;
var bo = "TooltipTrigger", Fu = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Kt(bo, n), s = _r(bo, n), a = Fn(n), i = c.useRef(null), u = H(t, i, r.onTriggerChange), d = c.useRef(!1), p = c.useRef(!1), f = c.useCallback(() => d.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ l.jsx(nr, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      j.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: u,
        onPointerMove: P(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !p.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: P(e.onPointerLeave, () => {
          r.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: P(e.onPointerDown, () => {
          d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: P(e.onFocus, () => {
          d.current || r.onOpen();
        }),
        onBlur: P(e.onBlur, r.onClose),
        onClick: P(e.onClick, r.onClose)
      }
    ) });
  }
);
Fu.displayName = bo;
var Mr = "TooltipPortal", [Ix, jx] = $n(Mr, {
  forceMount: void 0
}), Vu = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = Kt(Mr, t);
  return /* @__PURE__ */ l.jsx(Ix, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ce, { present: n || s.open, children: /* @__PURE__ */ l.jsx(wt, { asChild: !0, container: r, children: o }) }) });
};
Vu.displayName = Mr;
var vt = "TooltipContent", Bu = c.forwardRef(
  (e, t) => {
    const n = jx(vt, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...s } = e, a = Kt(vt, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(ce, { present: o || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ l.jsx(Wu, { side: r, ...s, ref: t }) : /* @__PURE__ */ l.jsx(Ox, { side: r, ...s, ref: t }) });
  }
), Ox = c.forwardRef((e, t) => {
  const n = Kt(vt, e.__scopeTooltip), o = _r(vt, e.__scopeTooltip), r = c.useRef(null), s = H(t, r), [a, i] = c.useState(null), { trigger: u, onClose: d } = n, p = r.current, { onPointerInTransitChange: f } = o, m = c.useCallback(() => {
    i(null), f(!1);
  }, [f]), v = c.useCallback(
    (x, h) => {
      const g = x.currentTarget, w = { x: x.clientX, y: x.clientY }, y = $x(w, g.getBoundingClientRect()), C = Fx(w, y), S = Vx(h.getBoundingClientRect()), E = Wx([...C, ...S]);
      i(E), f(!0);
    },
    [f]
  );
  return c.useEffect(() => () => m(), [m]), c.useEffect(() => {
    if (u && p) {
      const x = (g) => v(g, p), h = (g) => v(g, u);
      return u.addEventListener("pointerleave", x), p.addEventListener("pointerleave", h), () => {
        u.removeEventListener("pointerleave", x), p.removeEventListener("pointerleave", h);
      };
    }
  }, [u, p, v, m]), c.useEffect(() => {
    if (a) {
      const x = (h) => {
        const g = h.target, w = { x: h.clientX, y: h.clientY }, y = (u == null ? void 0 : u.contains(g)) || (p == null ? void 0 : p.contains(g)), C = !Bx(w, a);
        y ? m() : C && (m(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [u, p, a, d, m]), /* @__PURE__ */ l.jsx(Wu, { ...e, ref: s });
}), [kx, Lx] = $n(Vn, { isInside: !1 }), Wu = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, u = Kt(vt, n), d = Fn(n), { onClose: p } = u;
    return c.useEffect(() => (document.addEventListener(yo, p), () => document.removeEventListener(yo, p)), [p]), c.useEffect(() => {
      if (u.trigger) {
        const f = (m) => {
          const v = m.target;
          v != null && v.contains(u.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [u.trigger, p]), /* @__PURE__ */ l.jsx(
      xt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ l.jsxs(
          or,
          {
            "data-state": u.stateAttribute,
            ...d,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ l.jsx(Po, { children: o }),
              /* @__PURE__ */ l.jsx(kx, { scope: n, isInside: !0, children: /* @__PURE__ */ l.jsx(og, { id: u.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
Bu.displayName = vt;
var Hu = "TooltipArrow", Uu = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Fn(n);
    return Lx(
      Hu,
      n
    ).isInside ? null : /* @__PURE__ */ l.jsx(rr, { ...r, ...o, ref: t });
  }
);
Uu.displayName = Hu;
function $x(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Fx(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function Vx(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
function Bx(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, u = t[s].y, d = t[a].x, p = t[a].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (r = !r);
  }
  return r;
}
function Wx(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Hx(t);
}
function Hx(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], a = n[n.length - 2];
      if ((s.x - a.x) * (r.y - a.y) >= (s.y - a.y) * (r.x - a.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Ux = Lu, Kx = $u, Gx = Fu, Yx = Vu, Ku = Bu, zx = Uu;
const Gw = Ux, Xx = Kx, qx = Gx, Zx = Yx, Jx = zx, Gu = ({
  sideOffset: e = 4,
  className: t,
  ref: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  Ku,
  {
    ref: n,
    sideOffset: e,
    className: N(T + "tooltip-content", t),
    ...o
  }
);
Gu.displayName = Ku.displayName;
const Yw = ({
  text: e,
  arrow: t = !0,
  children: n,
  defaultOpen: o,
  open: r,
  onOpenChange: s,
  delayDuration: a = 200,
  disableHoverableContent: i,
  className: u,
  ...d
}) => /* @__PURE__ */ l.jsxs(
  Xx,
  {
    defaultOpen: o,
    open: r,
    onOpenChange: s,
    delayDuration: a,
    disableHoverableContent: i,
    children: [
      /* @__PURE__ */ l.jsx(qx, { asChild: !0, children: n }),
      /* @__PURE__ */ l.jsx(Zx, { children: /* @__PURE__ */ l.jsxs(
        Gu,
        {
          ...d,
          className: N(T + "tooltip", u),
          children: [
            /* @__PURE__ */ l.jsx("p", { children: e }),
            t && /* @__PURE__ */ l.jsx(Jx, { className: T + "tooltip-arrow" })
          ]
        }
      ) })
    ]
  }
);
var Dr = "ToastProvider", [Ir, Qx, ew] = gt("Toast"), [Yu, zw] = ie("Toast", [ew]), [tw, Bn] = Yu(Dr), zu = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: o = 5e3,
    swipeDirection: r = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, u] = c.useState(null), [d, p] = c.useState(0), f = c.useRef(!1), m = c.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Dr}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ l.jsx(Ir.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
    tw,
    {
      scope: t,
      label: n,
      duration: o,
      swipeDirection: r,
      swipeThreshold: s,
      toastCount: d,
      viewport: i,
      onViewportChange: u,
      onToastAdd: c.useCallback(() => p((v) => v + 1), []),
      onToastRemove: c.useCallback(() => p((v) => v - 1), []),
      isFocusedToastEscapeKeyDownRef: f,
      isClosePausedRef: m,
      children: a
    }
  ) });
};
zu.displayName = Dr;
var Xu = "ToastViewport", nw = ["F8"], Co = "toast.viewportPause", So = "toast.viewportResume", qu = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: o = nw,
      label: r = "Notifications ({hotkey})",
      ...s
    } = e, a = Bn(Xu, n), i = Qx(n), u = c.useRef(null), d = c.useRef(null), p = c.useRef(null), f = c.useRef(null), m = H(t, f, a.onViewportChange), v = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = a.toastCount > 0;
    c.useEffect(() => {
      const g = (w) => {
        var C;
        o.length !== 0 && o.every((S) => w[S] || w.code === S) && ((C = f.current) == null || C.focus());
      };
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
    }, [o]), c.useEffect(() => {
      const g = u.current, w = f.current;
      if (x && g && w) {
        const y = () => {
          if (!a.isClosePausedRef.current) {
            const A = new CustomEvent(Co);
            w.dispatchEvent(A), a.isClosePausedRef.current = !0;
          }
        }, C = () => {
          if (a.isClosePausedRef.current) {
            const A = new CustomEvent(So);
            w.dispatchEvent(A), a.isClosePausedRef.current = !1;
          }
        }, S = (A) => {
          !g.contains(A.relatedTarget) && C();
        }, E = () => {
          g.contains(document.activeElement) || C();
        };
        return g.addEventListener("focusin", y), g.addEventListener("focusout", S), g.addEventListener("pointermove", y), g.addEventListener("pointerleave", E), window.addEventListener("blur", y), window.addEventListener("focus", C), () => {
          g.removeEventListener("focusin", y), g.removeEventListener("focusout", S), g.removeEventListener("pointermove", y), g.removeEventListener("pointerleave", E), window.removeEventListener("blur", y), window.removeEventListener("focus", C);
        };
      }
    }, [x, a.isClosePausedRef]);
    const h = c.useCallback(
      ({ tabbingDirection: g }) => {
        const y = i().map((C) => {
          const S = C.ref.current, E = [S, ...hw(S)];
          return g === "forwards" ? E : E.reverse();
        });
        return (g === "forwards" ? y.reverse() : y).flat();
      },
      [i]
    );
    return c.useEffect(() => {
      const g = f.current;
      if (g) {
        const w = (y) => {
          var E, A, R;
          const C = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !C) {
            const D = document.activeElement, I = y.shiftKey;
            if (y.target === g && I) {
              (E = d.current) == null || E.focus();
              return;
            }
            const W = h({ tabbingDirection: I ? "backwards" : "forwards" }), U = W.findIndex((M) => M === D);
            Qn(W.slice(U + 1)) ? y.preventDefault() : I ? (A = d.current) == null || A.focus() : (R = p.current) == null || R.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [i, h]), /* @__PURE__ */ l.jsxs(
      cf,
      {
        ref: u,
        role: "region",
        "aria-label": r.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ l.jsx(
            Eo,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                Qn(g);
              }
            }
          ),
          /* @__PURE__ */ l.jsx(Ir.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(j.ol, { tabIndex: -1, ...s, ref: m }) }),
          x && /* @__PURE__ */ l.jsx(
            Eo,
            {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                Qn(g);
              }
            }
          )
        ]
      }
    );
  }
);
qu.displayName = Xu;
var Zu = "ToastFocusProxy", Eo = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: o, ...r } = e, s = Bn(Zu, n);
    return /* @__PURE__ */ l.jsx(
      Ht,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...r,
        ref: t,
        style: { position: "fixed" },
        onFocus: (a) => {
          var d;
          const i = a.relatedTarget;
          !((d = s.viewport) != null && d.contains(i)) && o();
        }
      }
    );
  }
);
Eo.displayName = Zu;
var Wn = "Toast", ow = "toast.swipeStart", rw = "toast.swipeMove", sw = "toast.swipeCancel", aw = "toast.swipeEnd", Ju = c.forwardRef(
  (e, t) => {
    const { forceMount: n, open: o, defaultOpen: r, onOpenChange: s, ...a } = e, [i = !0, u] = de({
      prop: o,
      defaultProp: r,
      onChange: s
    });
    return /* @__PURE__ */ l.jsx(ce, { present: n || i, children: /* @__PURE__ */ l.jsx(
      lw,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => u(!1),
        onPause: ne(e.onPause),
        onResume: ne(e.onResume),
        onSwipeStart: P(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: P(e.onSwipeMove, (d) => {
          const { x: p, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${p}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: P(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: P(e.onSwipeEnd, (d) => {
          const { x: p, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${p}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), u(!1);
        })
      }
    ) });
  }
);
Ju.displayName = Wn;
var [iw, cw] = Yu(Wn, {
  onClose() {
  }
}), lw = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: o = "foreground",
      duration: r,
      open: s,
      onClose: a,
      onEscapeKeyDown: i,
      onPause: u,
      onResume: d,
      onSwipeStart: p,
      onSwipeMove: f,
      onSwipeCancel: m,
      onSwipeEnd: v,
      ...x
    } = e, h = Bn(Wn, n), [g, w] = c.useState(null), y = H(t, (M) => w(M)), C = c.useRef(null), S = c.useRef(null), E = r || h.duration, A = c.useRef(0), R = c.useRef(E), D = c.useRef(0), { onToastAdd: I, onToastRemove: O } = h, k = ne(() => {
      var K;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((K = h.viewport) == null || K.focus()), a();
    }), W = c.useCallback(
      (M) => {
        !M || M === 1 / 0 || (window.clearTimeout(D.current), A.current = (/* @__PURE__ */ new Date()).getTime(), D.current = window.setTimeout(k, M));
      },
      [k]
    );
    c.useEffect(() => {
      const M = h.viewport;
      if (M) {
        const K = () => {
          W(R.current), d == null || d();
        }, $ = () => {
          const G = (/* @__PURE__ */ new Date()).getTime() - A.current;
          R.current = R.current - G, window.clearTimeout(D.current), u == null || u();
        };
        return M.addEventListener(Co, $), M.addEventListener(So, K), () => {
          M.removeEventListener(Co, $), M.removeEventListener(So, K);
        };
      }
    }, [h.viewport, E, u, d, W]), c.useEffect(() => {
      s && !h.isClosePausedRef.current && W(E);
    }, [s, E, h.isClosePausedRef, W]), c.useEffect(() => (I(), () => O()), [I, O]);
    const U = c.useMemo(() => g ? sd(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      U && /* @__PURE__ */ l.jsx(
        uw,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": o === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: U
        }
      ),
      /* @__PURE__ */ l.jsx(iw, { scope: n, onClose: k, children: kt.createPortal(
        /* @__PURE__ */ l.jsx(Ir.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
          af,
          {
            asChild: !0,
            onEscapeKeyDown: P(i, () => {
              h.isFocusedToastEscapeKeyDownRef.current || k(), h.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ l.jsx(
              j.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": s ? "open" : "closed",
                "data-swipe-direction": h.swipeDirection,
                ...x,
                ref: y,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: P(e.onKeyDown, (M) => {
                  M.key === "Escape" && (i == null || i(M.nativeEvent), M.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, k()));
                }),
                onPointerDown: P(e.onPointerDown, (M) => {
                  M.button === 0 && (C.current = { x: M.clientX, y: M.clientY });
                }),
                onPointerMove: P(e.onPointerMove, (M) => {
                  if (!C.current) return;
                  const K = M.clientX - C.current.x, $ = M.clientY - C.current.y, G = !!S.current, L = ["left", "right"].includes(h.swipeDirection), _ = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, z = L ? _(0, K) : 0, ee = L ? 0 : _(0, $), se = M.pointerType === "touch" ? 10 : 2, le = { x: z, y: ee }, re = { originalEvent: M, delta: le };
                  G ? (S.current = le, tn(rw, f, re, {
                    discrete: !1
                  })) : fs(le, h.swipeDirection, se) ? (S.current = le, tn(ow, p, re, {
                    discrete: !1
                  }), M.target.setPointerCapture(M.pointerId)) : (Math.abs(K) > se || Math.abs($) > se) && (C.current = null);
                }),
                onPointerUp: P(e.onPointerUp, (M) => {
                  const K = S.current, $ = M.target;
                  if ($.hasPointerCapture(M.pointerId) && $.releasePointerCapture(M.pointerId), S.current = null, C.current = null, K) {
                    const G = M.currentTarget, L = { originalEvent: M, delta: K };
                    fs(K, h.swipeDirection, h.swipeThreshold) ? tn(aw, v, L, {
                      discrete: !0
                    }) : tn(
                      sw,
                      m,
                      L,
                      {
                        discrete: !0
                      }
                    ), G.addEventListener("click", (_) => _.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        h.viewport
      ) })
    ] }) : null;
  }
), uw = (e) => {
  const { __scopeToast: t, children: n, ...o } = e, r = Bn(Wn, t), [s, a] = c.useState(!1), [i, u] = c.useState(!1);
  return pw(() => a(!0)), c.useEffect(() => {
    const d = window.setTimeout(() => u(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ l.jsx(wt, { asChild: !0, children: /* @__PURE__ */ l.jsx(Ht, { ...o, children: s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    r.label,
    " ",
    n
  ] }) }) });
}, dw = "ToastTitle", Qu = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { ...o, ref: t });
  }
);
Qu.displayName = dw;
var fw = "ToastDescription", ed = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { ...o, ref: t });
  }
);
ed.displayName = fw;
var td = "ToastAction", nd = c.forwardRef(
  (e, t) => {
    const { altText: n, ...o } = e;
    return n.trim() ? /* @__PURE__ */ l.jsx(rd, { altText: n, asChild: !0, children: /* @__PURE__ */ l.jsx(jr, { ...o, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${td}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
nd.displayName = td;
var od = "ToastClose", jr = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...o } = e, r = cw(od, n);
    return /* @__PURE__ */ l.jsx(rd, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: P(e.onClick, r.onClose)
      }
    ) });
  }
);
jr.displayName = od;
var rd = c.forwardRef((e, t) => {
  const { __scopeToast: n, altText: o, ...r } = e;
  return /* @__PURE__ */ l.jsx(
    j.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": o || void 0,
      ...r,
      ref: t
    }
  );
});
function sd(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), mw(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", s = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (s) {
          const a = o.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...sd(o));
    }
  }), t;
}
function tn(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? To(r, s) : r.dispatchEvent(s);
}
var fs = (e, t, n = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), s = o > r;
  return t === "left" || t === "right" ? s && o > n : !s && r > n;
};
function pw(e = () => {
}) {
  const t = ne(e);
  ue(() => {
    let n = 0, o = 0;
    return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
    };
  }, [t]);
}
function mw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function hw(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qn(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var vw = zu, ad = qu, id = Ju, cd = Qu, ld = ed, ud = nd, dd = jr;
const Xw = vw, gw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  ad,
  {
    className: N(T + "toast-viewport", e),
    ...t
  }
);
gw.displayName = ad.displayName;
const xw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  id,
  {
    className: N(T + "toast-root", e),
    ...t
  }
);
xw.displayName = id.displayName;
const ww = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  ud,
  {
    className: N(T + "toast-action", e),
    ...t
  }
);
ww.displayName = ud.displayName;
const yw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  dd,
  {
    className: N(T + "toast-close", e),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ l.jsx(Ya, {})
  }
);
yw.displayName = dd.displayName;
const bw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  cd,
  {
    className: N(T + "toast-title", e),
    ...t
  }
);
bw.displayName = cd.displayName;
const Cw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  ld,
  {
    className: N(T + "toast-description", e),
    ...t
  }
);
Cw.displayName = ld.displayName;
export {
  Jd as Accordion,
  js as AccordionContent,
  Ds as AccordionItem,
  Pw as AccordionRoot,
  Is as AccordionTrigger,
  Aw as AlertDialog,
  ka as AlertDialogAction,
  La as AlertDialogCancel,
  Ia as AlertDialogContent,
  Oa as AlertDialogDescription,
  Nw as AlertDialogFooter,
  Da as AlertDialogOverlay,
  Ep as AlertDialogPortal,
  Cp as AlertDialogRoot,
  ja as AlertDialogTitle,
  Sp as AlertDialogTrigger,
  Kp as Checkbox,
  Mw as Dialog,
  cn as DialogClose,
  Xa as DialogContent,
  Qa as DialogDescription,
  Za as DialogFooter,
  qa as DialogHeader,
  za as DialogOverlay,
  zp as DialogPortal,
  Gp as DialogRoot,
  Ja as DialogTitle,
  Yp as DialogTrigger,
  Ow as DropdownMenu,
  Rv as DropdownMenuCheckboxItem,
  lo as DropdownMenuContent,
  bv as DropdownMenuGroup,
  Sc as DropdownMenuItem,
  Ec as DropdownMenuLabel,
  Cv as DropdownMenuPortal,
  jw as DropdownMenuRadioGroup,
  Pv as DropdownMenuRadioItem,
  wv as DropdownMenuRoot,
  Rc as DropdownMenuSeparator,
  Tv as DropdownMenuShortcut,
  Iw as DropdownMenuSub,
  Ev as DropdownMenuSubContent,
  Sv as DropdownMenuSubTrigger,
  yv as DropdownMenuTrigger,
  Nc as Label,
  _v as Pagination,
  Mv as PaginationContent,
  Ov as PaginationEllipsis,
  Dv as PaginationItem,
  vr as PaginationLink,
  jv as PaginationNext,
  Iv as PaginationPrevious,
  Hv as Progress,
  tg as RadioGroup,
  Yc as RadioGroupItem,
  Yg as ScrollArea,
  Zl as ScrollBar,
  Fw as Select,
  vo as SelectContent,
  Dg as SelectGroup,
  Ol as SelectItem,
  kl as SelectItemText,
  jl as SelectLabel,
  Ag as SelectPortal,
  Ng as SelectRoot,
  Mg as SelectScrollDownButton,
  _g as SelectScrollUpButton,
  Ll as SelectSeparator,
  Dl as SelectTrigger,
  Il as SelectValue,
  Zg as Separator,
  vx as Slider,
  Cx as Switch,
  Uw as Tabs,
  Tx as TabsContent,
  Du as TabsList,
  Px as TabsRoot,
  Iu as TabsTrigger,
  xw as Toast,
  ww as ToastAction,
  yw as ToastClose,
  Cw as ToastDescription,
  Xw as ToastProvider,
  bw as ToastTitle,
  gw as ToastViewport,
  Ax as Toggle,
  Yw as Tooltip,
  Jx as TooltipArrow,
  Gu as TooltipContent,
  Zx as TooltipPortal,
  Gw as TooltipProvider,
  Xx as TooltipRoot,
  qx as TooltipTrigger,
  N as cn,
  T as prefix
};
