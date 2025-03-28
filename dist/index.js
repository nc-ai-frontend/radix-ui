import * as c from "react";
import ae, { forwardRef as Mo, createElement as Ke, useState as Rd, useLayoutEffect as Td, useEffect as Pd } from "react";
import * as $t from "react-dom";
import Ad from "react-dom";
function A(...e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    n && (typeof n == "string" ? n.includes(" ") ? n.trim().split(/\s+/).forEach((o) => t.add(o)) : t.add(n) : typeof n == "object" && Object.entries(n).forEach(([o, r]) => {
      r && t.add(o);
    }));
  return Array.from(t).join(" ");
}
const P = "design-", de = [];
for (let e = 0; e < 256; ++e)
  de.push((e + 256).toString(16).slice(1));
function Nd(e, t = 0) {
  return (de[e[t + 0]] + de[e[t + 1]] + de[e[t + 2]] + de[e[t + 3]] + "-" + de[e[t + 4]] + de[e[t + 5]] + "-" + de[e[t + 6]] + de[e[t + 7]] + "-" + de[e[t + 8]] + de[e[t + 9]] + "-" + de[e[t + 10]] + de[e[t + 11]] + de[e[t + 12]] + de[e[t + 13]] + de[e[t + 14]] + de[e[t + 15]]).toLowerCase();
}
let Yn;
const _d = new Uint8Array(16);
function Md() {
  if (!Yn) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Yn = crypto.getRandomValues.bind(crypto);
  }
  return Yn(_d);
}
const Dd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Wr = { randomUUID: Dd };
function Id(e, t, n) {
  var r;
  if (Wr.randomUUID && !e)
    return Wr.randomUUID();
  e = e || {};
  const o = e.random ?? ((r = e.rng) == null ? void 0 : r.call(e)) ?? Md();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, Nd(o);
}
const jd = 10, Od = 1e6, zn = /* @__PURE__ */ new Map(), Hr = (e) => {
  if (zn.has(e))
    return;
  const t = setTimeout(() => {
    zn.delete(e), Dt({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, Od);
  zn.set(e, t);
}, kd = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, jd)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === t.toast.id ? { ...n, ...t.toast } : n
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? Hr(n) : e.toasts.forEach((o) => {
        Hr(o.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (o) => o.id === n || n === void 0 ? {
            ...o,
            open: !1
          } : o
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, rn = [];
let sn = { toasts: [] };
function Dt(e) {
  sn = kd(sn, e), rn.forEach((t) => {
    t(sn);
  });
}
function Ld({ ...e }) {
  const t = Id(), n = (r) => Dt({
    type: "UPDATE_TOAST",
    toast: { ...r, id: t }
  }), o = () => Dt({ type: "DISMISS_TOAST", toastId: t });
  return Dt({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (r) => {
        r || o();
      }
    }
  }), {
    id: t,
    dismiss: o,
    update: n
  };
}
function $d() {
  const [e, t] = c.useState(sn);
  return c.useEffect(() => (rn.push(t), () => {
    const n = rn.indexOf(t);
    n > -1 && rn.splice(n, 1);
  }), [e]), {
    ...e,
    toast: Ld,
    dismiss: (n) => Dt({ type: "DISMISS_TOAST", toastId: n })
  };
}
var qt = { exports: {} }, At = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ur;
function Fd() {
  if (Ur) return At;
  Ur = 1;
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
  return At.Fragment = t, At.jsx = n, At.jsxs = n, At;
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
var Kr;
function Vd() {
  return Kr || (Kr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === L ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case N:
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
        Ce = console.log, pe = console.info, B = console.warn, Z = console.error, te = console.group, X = console.groupCollapsed, J = console.groupEnd;
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
          log: ee({}, b, { value: Ce }),
          info: ee({}, b, { value: pe }),
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
          q = F && F[1] || "", me = -1 < V.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < V.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + q + b + me;
    }
    function i(b, F) {
      if (!b || we) return "";
      var V = je.get(b);
      if (V !== void 0) return V;
      we = !0, V = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var Q = null;
      Q = _.H, _.H = null, r();
      try {
        var he = {
          DetermineComponentFrameRoot: function() {
            try {
              if (F) {
                var We = function() {
                  throw Error();
                };
                if (Object.defineProperty(We.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(We, []);
                  } catch (ke) {
                    var Xt = ke;
                  }
                  Reflect.construct(b, [], We);
                } else {
                  try {
                    We.call();
                  } catch (ke) {
                    Xt = ke;
                  }
                  b.call(We.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ke) {
                  Xt = ke;
                }
                (We = b()) && typeof We.catch == "function" && We.catch(function() {
                });
              }
            } catch (ke) {
              if (ke && Xt && typeof ke.stack == "string")
                return [ke.stack, Xt.stack];
            }
            return [null, null];
          }
        };
        he.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var oe = Object.getOwnPropertyDescriptor(
          he.DetermineComponentFrameRoot,
          "name"
        );
        oe && oe.configurable && Object.defineProperty(
          he.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var Y = he.DetermineComponentFrameRoot(), Oe = Y[0], ct = Y[1];
        if (Oe && ct) {
          var ge = Oe.split(`
`), nt = ct.split(`
`);
          for (Y = oe = 0; oe < ge.length && !ge[oe].includes(
            "DetermineComponentFrameRoot"
          ); )
            oe++;
          for (; Y < nt.length && !nt[Y].includes(
            "DetermineComponentFrameRoot"
          ); )
            Y++;
          if (oe === ge.length || Y === nt.length)
            for (oe = ge.length - 1, Y = nt.length - 1; 1 <= oe && 0 <= Y && ge[oe] !== nt[Y]; )
              Y--;
          for (; 1 <= oe && 0 <= Y; oe--, Y--)
            if (ge[oe] !== nt[Y]) {
              if (oe !== 1 || Y !== 1)
                do
                  if (oe--, Y--, 0 > Y || ge[oe] !== nt[Y]) {
                    var Pt = `
` + ge[oe].replace(
                      " at new ",
                      " at "
                    );
                    return b.displayName && Pt.includes("<anonymous>") && (Pt = Pt.replace("<anonymous>", b.displayName)), typeof b == "function" && je.set(b, Pt), Pt;
                  }
                while (1 <= oe && 0 <= Y);
              break;
            }
        }
      } finally {
        we = !1, _.H = Q, s(), Error.prepareStackTrace = V;
      }
      return ge = (ge = b ? b.displayName || b.name : "") ? a(ge) : "", typeof b == "function" && je.set(b, ge), ge;
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
        Be || (Be = !0, console.error(
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
      return zt[b] || (zt[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function v(b, F, V, Q, he, oe) {
      return V = oe.ref, b = {
        $$typeof: S,
        type: b,
        key: F,
        props: oe,
        _owner: he
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
    function x(b, F, V, Q, he, oe) {
      if (typeof b == "string" || typeof b == "function" || b === N || b === D || b === R || b === W || b === U || b === $ || typeof b == "object" && b !== null && (b.$$typeof === K || b.$$typeof === M || b.$$typeof === O || b.$$typeof === I || b.$$typeof === k || b.$$typeof === se || b.getModuleId !== void 0)) {
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
        var Oe = Object.keys(F).filter(function(ge) {
          return ge !== "key";
        });
        Q = 0 < Oe.length ? "{key: someKey, " + Oe.join(": ..., ") + ": ...}" : "{key: someKey}", tt[Y + Q] || (Oe = 0 < Oe.length ? "{" + Oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Q,
          Y,
          Oe,
          Y
        ), tt[Y + Q] = !0);
      }
      if (Y = null, V !== void 0 && (n(V), Y = "" + V), p(F) && (n(F.key), Y = "" + F.key), "key" in F) {
        V = {};
        for (var ct in F)
          ct !== "key" && (V[ct] = F[ct]);
      } else V = F;
      return Y && f(
        V,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), v(b, Y, oe, he, d(), V);
    }
    function h(b, F) {
      if (typeof b == "object" && b && b.$$typeof !== et) {
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
      if (b._store && !b._store.validated && b.key == null && (b._store.validated = 1, F = y(F), !Br[F])) {
        Br[F] = !0;
        var V = "";
        b && b._owner != null && b._owner !== d() && (V = null, typeof b._owner.tag == "number" ? V = e(b._owner.type) : typeof b._owner.name == "string" && (V = b._owner.name), V = " It was passed a child from " + V + ".");
        var Q = _.getCurrentStack;
        _.getCurrentStack = function() {
          var he = u(b.type);
          return Q && (he += Q() || ""), he;
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
    var C = ae, S = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), O = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), G = Symbol.iterator, L = Symbol.for("react.client.reference"), _ = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, ee = Object.assign, se = Symbol.for("react.client.reference"), le = Array.isArray, re = 0, Ce, pe, B, Z, te, X, J;
    o.__reactDisabledLog = !0;
    var q, me, we = !1, je = new (typeof WeakMap == "function" ? WeakMap : Map)(), et = Symbol.for("react.client.reference"), Be, zt = {}, tt = {}, Br = {};
    Nt.Fragment = N, Nt.jsx = function(b, F, V, Q, he) {
      return x(b, F, V, !1, Q, he);
    }, Nt.jsxs = function(b, F, V, Q, he) {
      return x(b, F, V, !0, Q, he);
    };
  }()), Nt;
}
var Gr;
function Bd() {
  return Gr || (Gr = 1, process.env.NODE_ENV === "production" ? qt.exports = Fd() : qt.exports = Vd()), qt.exports;
}
var l = Bd();
function Wd(e, t) {
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
  return r.scopeName = e, [o, Hd(r, ...t)];
}
function Hd(...e) {
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
function Yr(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Sn(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = Yr(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : Yr(e[r], null);
        }
      };
  };
}
function H(...e) {
  return c.useCallback(Sn(...e), e);
}
var ot = c.forwardRef((e, t) => {
  const { children: n, ...o } = e, r = c.Children.toArray(n), s = r.find(Ud);
  if (s) {
    const a = s.props.children, i = r.map((u) => u === s ? c.Children.count(a) > 1 ? c.Children.only(null) : c.isValidElement(a) ? a.props.children : null : u);
    return /* @__PURE__ */ l.jsx(ao, { ...o, ref: t, children: c.isValidElement(a) ? c.cloneElement(a, void 0, i) : null });
  }
  return /* @__PURE__ */ l.jsx(ao, { ...o, ref: t, children: n });
});
ot.displayName = "Slot";
var ao = c.forwardRef((e, t) => {
  const { children: n, ...o } = e;
  if (c.isValidElement(n)) {
    const r = Gd(n), s = Kd(o, n.props);
    return n.type !== c.Fragment && (s.ref = t ? Sn(t, r) : r), c.cloneElement(n, s);
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
ao.displayName = "SlotClone";
var Do = ({ children: e }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: e });
function Ud(e) {
  return c.isValidElement(e) && e.type === Do;
}
function Kd(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...i) => {
      s(...i), r(...i);
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gd(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function xt(e) {
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
      return /* @__PURE__ */ l.jsx(ot, { ref: y, children: g });
    }
  );
  u.displayName = i;
  const d = e + "CollectionItemSlot", p = "data-radix-collection-item", f = ae.forwardRef(
    (v, x) => {
      const { scope: h, children: g, ...w } = v, y = ae.useRef(null), C = H(x, y), S = s(d, h);
      return ae.useEffect(() => (S.itemMap.set(y, { ref: y, ...w }), () => void S.itemMap.delete(y))), /* @__PURE__ */ l.jsx(ot, { [p]: "", ref: C, children: g });
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
function T(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
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
function fe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [o, r] = Yd({ defaultProp: t, onChange: n }), s = e !== void 0, a = s ? e : o, i = ne(n), u = c.useCallback(
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
function Yd({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e), [o] = n, r = c.useRef(o), s = ne(t);
  return c.useEffect(() => {
    r.current !== o && (s(o), r.current = o);
  }, [o, r, s]), n;
}
var zd = [
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
], j = zd.reduce((e, t) => {
  const n = c.forwardRef((o, r) => {
    const { asChild: s, ...a } = o, i = s ? ot : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(i, { ...a, ref: r });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Io(e, t) {
  e && $t.flushSync(() => e.dispatchEvent(t));
}
var ue = globalThis != null && globalThis.document ? c.useLayoutEffect : () => {
};
function Xd(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var ce = (e) => {
  const { present: t, children: n } = e, o = qd(t), r = typeof n == "function" ? n({ present: o.isPresent }) : c.Children.only(n), s = H(o.ref, Zd(r));
  return typeof n == "function" || o.isPresent ? c.cloneElement(r, { ref: s }) : null;
};
ce.displayName = "Presence";
function qd(e) {
  const [t, n] = c.useState(), o = c.useRef({}), r = c.useRef(e), s = c.useRef("none"), a = e ? "mounted" : "unmounted", [i, u] = Xd(a, {
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
    const d = Zt(o.current);
    s.current = i === "mounted" ? d : "none";
  }, [i]), ue(() => {
    const d = o.current, p = r.current;
    if (p !== e) {
      const m = s.current, v = Zt(d);
      e ? u("MOUNT") : v === "none" || (d == null ? void 0 : d.display) === "none" ? u("UNMOUNT") : u(p && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, u]), ue(() => {
    if (t) {
      let d;
      const p = t.ownerDocument.defaultView ?? window, f = (v) => {
        const h = Zt(o.current).includes(v.animationName);
        if (v.target === t && h && (u("ANIMATION_END"), !r.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, m = (v) => {
        v.target === t && (s.current = Zt(o.current));
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
function Zt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Zd(e) {
  var o, r;
  let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Jd = c.useId || (() => {
}), Qd = 0;
function xe(e) {
  const [t, n] = c.useState(Jd());
  return ue(() => {
    n((o) => o ?? String(Qd++));
  }, [e]), t ? `radix-${t}` : "";
}
var jo = "Collapsible", [ef, bs] = ie(jo), [tf, Oo] = ef(jo), Cs = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: o,
      defaultOpen: r,
      disabled: s,
      onOpenChange: a,
      ...i
    } = e, [u = !1, d] = fe({
      prop: o,
      defaultProp: r,
      onChange: a
    });
    return /* @__PURE__ */ l.jsx(
      tf,
      {
        scope: n,
        disabled: s,
        contentId: xe(),
        open: u,
        onOpenToggle: c.useCallback(() => d((p) => !p), [d]),
        children: /* @__PURE__ */ l.jsx(
          j.div,
          {
            "data-state": Lo(u),
            "data-disabled": s ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
Cs.displayName = jo;
var Ss = "CollapsibleTrigger", Es = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...o } = e, r = Oo(Ss, n);
    return /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        "aria-controls": r.contentId,
        "aria-expanded": r.open || !1,
        "data-state": Lo(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        disabled: r.disabled,
        ...o,
        ref: t,
        onClick: T(e.onClick, r.onOpenToggle)
      }
    );
  }
);
Es.displayName = Ss;
var ko = "CollapsibleContent", Rs = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Oo(ko, e.__scopeCollapsible);
    return /* @__PURE__ */ l.jsx(ce, { present: n || r.open, children: ({ present: s }) => /* @__PURE__ */ l.jsx(nf, { ...o, ref: t, present: s }) });
  }
);
Rs.displayName = ko;
var nf = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...s } = e, a = Oo(ko, n), [i, u] = c.useState(o), d = c.useRef(null), p = H(t, d), f = c.useRef(0), m = f.current, v = c.useRef(0), x = v.current, h = a.open || i, g = c.useRef(h), w = c.useRef(void 0);
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
      "data-state": Lo(a.open),
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
function Lo(e) {
  return e ? "open" : "closed";
}
var of = Cs, rf = Es, sf = Rs, af = c.createContext(void 0);
function Xe(e) {
  const t = c.useContext(af);
  return e || t || "ltr";
}
var Fe = "Accordion", cf = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [$o, lf, uf] = xt(Fe), [En, Uw] = ie(Fe, [
  uf,
  bs
]), Fo = bs(), Ts = ae.forwardRef(
  (e, t) => {
    const { type: n, ...o } = e, r = o, s = o;
    return /* @__PURE__ */ l.jsx($o.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ l.jsx(mf, { ...s, ref: t }) : /* @__PURE__ */ l.jsx(pf, { ...r, ref: t }) });
  }
);
Ts.displayName = Fe;
var [Ps, df] = En(Fe), [As, ff] = En(
  Fe,
  { collapsible: !1 }
), pf = ae.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: o,
      onValueChange: r = () => {
      },
      collapsible: s = !1,
      ...a
    } = e, [i, u] = fe({
      prop: n,
      defaultProp: o,
      onChange: r
    });
    return /* @__PURE__ */ l.jsx(
      Ps,
      {
        scope: e.__scopeAccordion,
        value: i ? [i] : [],
        onItemOpen: u,
        onItemClose: ae.useCallback(() => s && u(""), [s, u]),
        children: /* @__PURE__ */ l.jsx(As, { scope: e.__scopeAccordion, collapsible: s, children: /* @__PURE__ */ l.jsx(Ns, { ...a, ref: t }) })
      }
    );
  }
), mf = ae.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: o,
    onValueChange: r = () => {
    },
    ...s
  } = e, [a = [], i] = fe({
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
    Ps,
    {
      scope: e.__scopeAccordion,
      value: a,
      onItemOpen: u,
      onItemClose: d,
      children: /* @__PURE__ */ l.jsx(As, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ l.jsx(Ns, { ...s, ref: t }) })
    }
  );
}), [hf, Rn] = En(Fe), Ns = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: o, dir: r, orientation: s = "vertical", ...a } = e, i = ae.useRef(null), u = H(i, t), d = lf(n), f = Xe(r) === "ltr", m = T(e.onKeyDown, (v) => {
      var D;
      if (!cf.includes(v.key)) return;
      const x = v.target, h = d().filter((I) => {
        var O;
        return !((O = I.ref.current) != null && O.disabled);
      }), g = h.findIndex((I) => I.ref.current === x), w = h.length;
      if (g === -1) return;
      v.preventDefault();
      let y = g;
      const C = 0, S = w - 1, E = () => {
        y = g + 1, y > S && (y = C);
      }, N = () => {
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
          s === "horizontal" && (f ? E() : N());
          break;
        case "ArrowDown":
          s === "vertical" && E();
          break;
        case "ArrowLeft":
          s === "horizontal" && (f ? N() : E());
          break;
        case "ArrowUp":
          s === "vertical" && N();
          break;
      }
      const R = y % w;
      (D = h[R].ref.current) == null || D.focus();
    });
    return /* @__PURE__ */ l.jsx(
      hf,
      {
        scope: n,
        disabled: o,
        direction: r,
        orientation: s,
        children: /* @__PURE__ */ l.jsx($o.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
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
), un = "AccordionItem", [vf, Vo] = En(un), _s = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: o, ...r } = e, s = Rn(un, n), a = df(un, n), i = Fo(n), u = xe(), d = o && a.value.includes(o) || !1, p = s.disabled || e.disabled;
    return /* @__PURE__ */ l.jsx(
      vf,
      {
        scope: n,
        open: d,
        disabled: p,
        triggerId: u,
        children: /* @__PURE__ */ l.jsx(
          of,
          {
            "data-orientation": s.orientation,
            "data-state": ks(d),
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
_s.displayName = un;
var Ms = "AccordionHeader", Ds = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...o } = e, r = Rn(Fe, n), s = Vo(Ms, n);
    return /* @__PURE__ */ l.jsx(
      j.h3,
      {
        "data-orientation": r.orientation,
        "data-state": ks(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
Ds.displayName = Ms;
var io = "AccordionTrigger", Is = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...o } = e, r = Rn(Fe, n), s = Vo(io, n), a = ff(io, n), i = Fo(n);
    return /* @__PURE__ */ l.jsx($o.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
      rf,
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
Is.displayName = io;
var js = "AccordionContent", Os = ae.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...o } = e, r = Rn(Fe, n), s = Vo(js, n), a = Fo(n);
    return /* @__PURE__ */ l.jsx(
      sf,
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
Os.displayName = js;
function ks(e) {
  return e ? "open" : "closed";
}
var Ls = Ts, gf = _s, xf = Ds, $s = Is, Fs = Os;
function wf(e, t) {
  if (e == null) return {};
  var n = {}, o = Object.keys(e), r, s;
  for (s = 0; s < o.length; s++)
    r = o[s], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var yf = ["color"], bf = /* @__PURE__ */ Mo(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = wf(e, yf);
  return Ke("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), Ke("path", {
    d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
const Kw = Ls, Vs = ({
  className: e,
  ref: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  gf,
  {
    ref: t,
    className: A(P + "accordion-item", e),
    ...n
  }
);
Vs.displayName = "AccordionItem";
const Bs = ({
  children: e,
  className: t,
  ref: n,
  ...o
}) => /* @__PURE__ */ l.jsx(xf, { className: P + "accordion-primitive-header", children: /* @__PURE__ */ l.jsxs(
  $s,
  {
    ref: n,
    className: A(P + "accordion-primitive-trigger", t),
    ...o,
    children: [
      /* @__PURE__ */ l.jsx("div", { className: A(P + "accordion-trigger-title", t), children: e }),
      /* @__PURE__ */ l.jsx(
        bf,
        {
          className: A(P + "chevron-down-icon", t)
        }
      )
    ]
  }
) });
Bs.displayName = $s.displayName;
const Ws = ({
  children: e,
  className: t,
  ref: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  Fs,
  {
    ref: n,
    className: A(P + "accordion-primitive-content", t),
    ...o,
    children: /* @__PURE__ */ l.jsx("div", { className: A(P + "accordion-content-div", t), children: e })
  }
);
Ws.displayName = Fs.displayName;
const Cf = ({
  className: e,
  items: t,
  ref: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  Ls,
  {
    ref: n,
    className: A(P + "accordion", e, o.orientation),
    ...o,
    children: t.map(({ trigger: r, content: s, ...a }, i) => /* @__PURE__ */ l.jsxs(Vs, { ...a, className: o.orientation, children: [
      /* @__PURE__ */ l.jsx(Bs, { children: r }),
      /* @__PURE__ */ l.jsx(Ws, { children: s })
    ] }, i))
  }
);
Cf.displayName = "Accordion";
function Sf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ne(e);
  c.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var Ef = "DismissableLayer", co = "dismissableLayer.update", Rf = "dismissableLayer.pointerDownOutside", Tf = "dismissableLayer.focusOutside", zr, Hs = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), wt = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...u
    } = e, d = c.useContext(Hs), [p, f] = c.useState(null), m = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = c.useState({}), x = H(t, (R) => f(R)), h = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), w = h.indexOf(g), y = p ? h.indexOf(p) : -1, C = d.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= w, E = Af((R) => {
      const D = R.target, I = [...d.branches].some((O) => O.contains(D));
      !S || I || (r == null || r(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, m), N = Nf((R) => {
      const D = R.target;
      [...d.branches].some((O) => O.contains(D)) || (s == null || s(R), a == null || a(R), R.defaultPrevented || i == null || i());
    }, m);
    return Sf((R) => {
      y === d.layers.size - 1 && (o == null || o(R), !R.defaultPrevented && i && (R.preventDefault(), i()));
    }, m), c.useEffect(() => {
      if (p)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (zr = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(p)), d.layers.add(p), Xr(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = zr);
        };
    }, [p, m, n, d]), c.useEffect(() => () => {
      p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), Xr());
    }, [p, d]), c.useEffect(() => {
      const R = () => v({});
      return document.addEventListener(co, R), () => document.removeEventListener(co, R);
    }, []), /* @__PURE__ */ l.jsx(
      j.div,
      {
        ...u,
        ref: x,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: T(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: T(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: T(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
wt.displayName = Ef;
var Pf = "DismissableLayerBranch", Us = c.forwardRef((e, t) => {
  const n = c.useContext(Hs), o = c.useRef(null), r = H(t, o);
  return c.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ l.jsx(j.div, { ...e, ref: r });
});
Us.displayName = Pf;
function Af(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ne(e), o = c.useRef(!1), r = c.useRef(() => {
  });
  return c.useEffect(() => {
    const s = (i) => {
      if (i.target && !o.current) {
        let u = function() {
          Ks(
            Rf,
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
function Nf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ne(e), o = c.useRef(!1);
  return c.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && Ks(Tf, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Xr() {
  const e = new CustomEvent(co);
  document.dispatchEvent(e);
}
function Ks(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Io(r, s) : r.dispatchEvent(s);
}
var _f = wt, Mf = Us, Xn = "focusScope.autoFocusOnMount", qn = "focusScope.autoFocusOnUnmount", qr = { bubbles: !1, cancelable: !0 }, Df = "FocusScope", Tn = c.forwardRef((e, t) => {
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
        i.contains(S) ? f.current = S : He(f.current, { select: !0 });
      }, g = function(C) {
        if (v.paused || !i) return;
        const S = C.relatedTarget;
        S !== null && (i.contains(S) || He(f.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const E of C)
            E.removedNodes.length > 0 && He(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const y = new MutationObserver(w);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [o, i, v.paused]), c.useEffect(() => {
    if (i) {
      Jr.add(v);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const w = new CustomEvent(Xn, qr);
        i.addEventListener(Xn, d), i.dispatchEvent(w), w.defaultPrevented || (If($f(Gs(i)), { select: !0 }), document.activeElement === h && He(i));
      }
      return () => {
        i.removeEventListener(Xn, d), setTimeout(() => {
          const w = new CustomEvent(qn, qr);
          i.addEventListener(qn, p), i.dispatchEvent(w), w.defaultPrevented || He(h ?? document.body, { select: !0 }), i.removeEventListener(qn, p), Jr.remove(v);
        }, 0);
      };
    }
  }, [i, d, p, v]);
  const x = c.useCallback(
    (h) => {
      if (!n && !o || v.paused) return;
      const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, w = document.activeElement;
      if (g && w) {
        const y = h.currentTarget, [C, S] = jf(y);
        C && S ? !h.shiftKey && w === S ? (h.preventDefault(), n && He(C, { select: !0 })) : h.shiftKey && w === C && (h.preventDefault(), n && He(S, { select: !0 })) : w === y && h.preventDefault();
      }
    },
    [n, o, v.paused]
  );
  return /* @__PURE__ */ l.jsx(j.div, { tabIndex: -1, ...a, ref: m, onKeyDown: x });
});
Tn.displayName = Df;
function If(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (He(o, { select: t }), document.activeElement !== n) return;
}
function jf(e) {
  const t = Gs(e), n = Zr(t, e), o = Zr(t.reverse(), e);
  return [n, o];
}
function Gs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Zr(e, t) {
  for (const n of e)
    if (!Of(n, { upTo: t })) return n;
}
function Of(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function kf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && kf(e) && t && e.select();
  }
}
var Jr = Lf();
function Lf() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Qr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Qr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Qr(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function $f(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ff = "Portal", yt = c.forwardRef((e, t) => {
  var i;
  const { container: n, ...o } = e, [r, s] = c.useState(!1);
  ue(() => s(!0), []);
  const a = n || r && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? Ad.createPortal(/* @__PURE__ */ l.jsx(j.div, { ...o, ref: t }), a) : null;
});
yt.displayName = Ff;
var Zn = 0;
function Bo() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? es()), document.body.insertAdjacentElement("beforeend", e[1] ?? es()), Zn++, () => {
      Zn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Zn--;
    };
  }, []);
}
function es() {
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
function Ys(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Vf(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var an = "right-scroll-bar-position", cn = "width-before-scroll-bar", Bf = "with-scroll-bars-hidden", Wf = "--removed-body-scroll-bar-size";
function Jn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Hf(e, t) {
  var n = Rd(function() {
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
var Uf = typeof window < "u" ? c.useLayoutEffect : c.useEffect, ts = /* @__PURE__ */ new WeakMap();
function Kf(e, t) {
  var n = Hf(null, function(o) {
    return e.forEach(function(r) {
      return Jn(r, o);
    });
  });
  return Uf(function() {
    var o = ts.get(n);
    if (o) {
      var r = new Set(o), s = new Set(e), a = n.current;
      r.forEach(function(i) {
        s.has(i) || Jn(i, null);
      }), s.forEach(function(i) {
        r.has(i) || Jn(i, a);
      });
    }
    ts.set(n, e);
  }, [e]), n;
}
function Gf(e) {
  return e;
}
function Yf(e, t) {
  t === void 0 && (t = Gf);
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
function zf(e) {
  e === void 0 && (e = {});
  var t = Yf(null);
  return t.options = Ne({ async: !0, ssr: !1 }, e), t;
}
var zs = function(e) {
  var t = e.sideCar, n = Ys(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return c.createElement(o, Ne({}, n));
};
zs.isSideCarExport = !0;
function Xf(e, t) {
  return e.useMedium(t), zs;
}
var Xs = zf(), Qn = function() {
}, Pn = c.forwardRef(function(e, t) {
  var n = c.useRef(null), o = c.useState({
    onScrollCapture: Qn,
    onWheelCapture: Qn,
    onTouchMoveCapture: Qn
  }), r = o[0], s = o[1], a = e.forwardProps, i = e.children, u = e.className, d = e.removeScrollBar, p = e.enabled, f = e.shards, m = e.sideCar, v = e.noIsolation, x = e.inert, h = e.allowPinchZoom, g = e.as, w = g === void 0 ? "div" : g, y = e.gapMode, C = Ys(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = m, E = Kf([n, t]), N = Ne(Ne({}, C), r);
  return c.createElement(
    c.Fragment,
    null,
    p && c.createElement(S, { sideCar: Xs, removeScrollBar: d, shards: f, noIsolation: v, inert: x, setCallbacks: s, allowPinchZoom: !!h, lockRef: n, gapMode: y }),
    a ? c.cloneElement(c.Children.only(i), Ne(Ne({}, N), { ref: E })) : c.createElement(w, Ne({}, N, { className: u, ref: E }), i)
  );
});
Pn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Pn.classNames = {
  fullWidth: cn,
  zeroRight: an
};
var qf = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Zf() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = qf();
  return t && e.setAttribute("nonce", t), e;
}
function Jf(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Qf(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ep = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Zf()) && (Jf(t, n), Qf(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, tp = function() {
  var e = ep();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, qs = function() {
  var e = tp(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, np = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, eo = function(e) {
  return parseInt(e || "", 10) || 0;
}, op = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [eo(n), eo(o), eo(r)];
}, rp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return np;
  var t = op(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, sp = qs(), ft = "data-scroll-locked", ap = function(e, t, n, o) {
  var r = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Bf, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(i, "px ").concat(o, `;
  }
  body[`).concat(ft, `] {
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
  
  .`).concat(an, ` {
    right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(cn, ` {
    margin-right: `).concat(i, "px ").concat(o, `;
  }
  
  .`).concat(an, " .").concat(an, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(cn, " .").concat(cn, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ft, `] {
    `).concat(Wf, ": ").concat(i, `px;
  }
`);
}, ns = function() {
  var e = parseInt(document.body.getAttribute(ft) || "0", 10);
  return isFinite(e) ? e : 0;
}, ip = function() {
  c.useEffect(function() {
    return document.body.setAttribute(ft, (ns() + 1).toString()), function() {
      var e = ns() - 1;
      e <= 0 ? document.body.removeAttribute(ft) : document.body.setAttribute(ft, e.toString());
    };
  }, []);
}, cp = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  ip();
  var s = c.useMemo(function() {
    return rp(r);
  }, [r]);
  return c.createElement(sp, { styles: ap(s, !t, r, n ? "" : "!important") });
}, lo = !1;
if (typeof window < "u")
  try {
    var Jt = Object.defineProperty({}, "passive", {
      get: function() {
        return lo = !0, !0;
      }
    });
    window.addEventListener("test", Jt, Jt), window.removeEventListener("test", Jt, Jt);
  } catch {
    lo = !1;
  }
var lt = lo ? { passive: !1 } : !1, lp = function(e) {
  return e.tagName === "TEXTAREA";
}, Zs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !lp(e) && n[t] === "visible")
  );
}, up = function(e) {
  return Zs(e, "overflowY");
}, dp = function(e) {
  return Zs(e, "overflowX");
}, os = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = Js(e, o);
    if (r) {
      var s = Qs(e, o), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, fp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, pp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Js = function(e, t) {
  return e === "v" ? up(t) : dp(t);
}, Qs = function(e, t) {
  return e === "v" ? fp(t) : pp(t);
}, mp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, hp = function(e, t, n, o, r) {
  var s = mp(e, window.getComputedStyle(t).direction), a = s * o, i = n.target, u = t.contains(i), d = !1, p = a > 0, f = 0, m = 0;
  do {
    var v = Qs(e, i), x = v[0], h = v[1], g = v[2], w = h - g - s * x;
    (x || w) && Js(e, i) && (f += w, m += x), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !u && i !== document.body || // self content
    u && (t.contains(i) || t === i)
  );
  return (p && Math.abs(f) < 1 || !p && Math.abs(m) < 1) && (d = !0), d;
}, Qt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, rs = function(e) {
  return [e.deltaX, e.deltaY];
}, ss = function(e) {
  return e && "current" in e ? e.current : e;
}, vp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, gp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, xp = 0, ut = [];
function wp(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), o = c.useRef(), r = c.useState(xp++)[0], s = c.useState(qs)[0], a = c.useRef(e);
  c.useEffect(function() {
    a.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var h = Vf([e.lockRef.current], (e.shards || []).map(ss), !0).filter(Boolean);
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
    var w = Qt(h), y = n.current, C = "deltaX" in h ? h.deltaX : y[0] - w[0], S = "deltaY" in h ? h.deltaY : y[1] - w[1], E, N = h.target, R = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && R === "h" && N.type === "range")
      return !1;
    var D = os(R, N);
    if (!D)
      return !0;
    if (D ? E = R : (E = R === "v" ? "h" : "v", D = os(R, N)), !D)
      return !1;
    if (!o.current && "changedTouches" in h && (C || S) && (o.current = E), !E)
      return !0;
    var I = o.current || E;
    return hp(I, g, h, I === "h" ? C : S);
  }, []), u = c.useCallback(function(h) {
    var g = h;
    if (!(!ut.length || ut[ut.length - 1] !== s)) {
      var w = "deltaY" in g ? rs(g) : Qt(g), y = t.current.filter(function(E) {
        return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && vp(E.delta, w);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var C = (a.current.shards || []).map(ss).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), S = C.length > 0 ? i(g, C[0]) : !a.current.noIsolation;
        S && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = c.useCallback(function(h, g, w, y) {
    var C = { name: h, delta: g, target: w, should: y, shadowParent: yp(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), p = c.useCallback(function(h) {
    n.current = Qt(h), o.current = void 0;
  }, []), f = c.useCallback(function(h) {
    d(h.type, rs(h), h.target, i(h, e.lockRef.current));
  }, []), m = c.useCallback(function(h) {
    d(h.type, Qt(h), h.target, i(h, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return ut.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", u, lt), document.addEventListener("touchmove", u, lt), document.addEventListener("touchstart", p, lt), function() {
      ut = ut.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", u, lt), document.removeEventListener("touchmove", u, lt), document.removeEventListener("touchstart", p, lt);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    x ? c.createElement(s, { styles: gp(r) }) : null,
    v ? c.createElement(cp, { gapMode: e.gapMode }) : null
  );
}
function yp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const bp = Xf(Xs, wp);
var An = c.forwardRef(function(e, t) {
  return c.createElement(Pn, Ne({}, e, { ref: t, sideCar: bp }));
});
An.classNames = Pn.classNames;
var Cp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, dt = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), tn = {}, to = 0, ea = function(e) {
  return e && (e.host || ea(e.parentNode));
}, Sp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = ea(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ep = function(e, t, n, o) {
  var r = Sp(t, Array.isArray(e) ? e : [e]);
  tn[n] || (tn[n] = /* @__PURE__ */ new WeakMap());
  var s = tn[n], a = [], i = /* @__PURE__ */ new Set(), u = new Set(r), d = function(f) {
    !f || i.has(f) || (i.add(f), d(f.parentNode));
  };
  r.forEach(d);
  var p = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(m) {
      if (i.has(m))
        p(m);
      else
        try {
          var v = m.getAttribute(o), x = v !== null && v !== "false", h = (dt.get(m) || 0) + 1, g = (s.get(m) || 0) + 1;
          dt.set(m, h), s.set(m, g), a.push(m), h === 1 && x && en.set(m, !0), g === 1 && m.setAttribute(n, "true"), x || m.setAttribute(o, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", m, w);
        }
    });
  };
  return p(t), i.clear(), to++, function() {
    a.forEach(function(f) {
      var m = dt.get(f) - 1, v = s.get(f) - 1;
      dt.set(f, m), s.set(f, v), m || (en.has(f) || f.removeAttribute(o), en.delete(f)), v || f.removeAttribute(n);
    }), to--, to || (dt = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), tn = {});
  };
}, Wo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = Cp(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Ep(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, Ho = "Dialog", [ta, na] = ie(Ho), [Rp, Ae] = ta(Ho), oa = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    modal: a = !0
  } = e, i = c.useRef(null), u = c.useRef(null), [d = !1, p] = fe({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ l.jsx(
    Rp,
    {
      scope: t,
      triggerRef: i,
      contentRef: u,
      contentId: xe(),
      titleId: xe(),
      descriptionId: xe(),
      open: d,
      onOpenChange: p,
      onOpenToggle: c.useCallback(() => p((f) => !f), [p]),
      modal: a,
      children: n
    }
  );
};
oa.displayName = Ho;
var ra = "DialogTrigger", sa = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Ae(ra, n), s = H(t, r.triggerRef);
    return /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": Go(r.open),
        ...o,
        ref: s,
        onClick: T(e.onClick, r.onOpenToggle)
      }
    );
  }
);
sa.displayName = ra;
var Uo = "DialogPortal", [Tp, aa] = ta(Uo, {
  forceMount: void 0
}), ia = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, s = Ae(Uo, t);
  return /* @__PURE__ */ l.jsx(Tp, { scope: t, forceMount: n, children: c.Children.map(o, (a) => /* @__PURE__ */ l.jsx(ce, { present: n || s.open, children: /* @__PURE__ */ l.jsx(yt, { asChild: !0, container: r, children: a }) })) });
};
ia.displayName = Uo;
var dn = "DialogOverlay", ca = c.forwardRef(
  (e, t) => {
    const n = aa(dn, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = Ae(dn, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ l.jsx(ce, { present: o || s.open, children: /* @__PURE__ */ l.jsx(Pp, { ...r, ref: t }) }) : null;
  }
);
ca.displayName = dn;
var Pp = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Ae(dn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(An, { as: ot, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ l.jsx(
        j.div,
        {
          "data-state": Go(r.open),
          ...o,
          ref: t,
          style: { pointerEvents: "auto", ...o.style }
        }
      ) })
    );
  }
), rt = "DialogContent", la = c.forwardRef(
  (e, t) => {
    const n = aa(rt, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, s = Ae(rt, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(ce, { present: o || s.open, children: s.modal ? /* @__PURE__ */ l.jsx(Ap, { ...r, ref: t }) : /* @__PURE__ */ l.jsx(Np, { ...r, ref: t }) });
  }
);
la.displayName = rt;
var Ap = c.forwardRef(
  (e, t) => {
    const n = Ae(rt, e.__scopeDialog), o = c.useRef(null), r = H(t, n.contentRef, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return Wo(s);
    }, []), /* @__PURE__ */ l.jsx(
      ua,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: T(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: T(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: T(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Np = c.forwardRef(
  (e, t) => {
    const n = Ae(rt, e.__scopeDialog), o = c.useRef(!1), r = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      ua,
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
), ua = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: s, ...a } = e, i = Ae(rt, n), u = c.useRef(null), d = H(t, u);
    return Bo(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        Tn,
        {
          asChild: !0,
          loop: !0,
          trapped: o,
          onMountAutoFocus: r,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ l.jsx(
            wt,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Go(i.open),
              ...a,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Mp, { titleId: i.titleId }),
        /* @__PURE__ */ l.jsx(Ip, { contentRef: u, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ko = "DialogTitle", da = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Ae(Ko, n);
    return /* @__PURE__ */ l.jsx(j.h2, { id: r.titleId, ...o, ref: t });
  }
);
da.displayName = Ko;
var fa = "DialogDescription", pa = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Ae(fa, n);
    return /* @__PURE__ */ l.jsx(j.p, { id: r.descriptionId, ...o, ref: t });
  }
);
pa.displayName = fa;
var ma = "DialogClose", ha = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...o } = e, r = Ae(ma, n);
    return /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: T(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
ha.displayName = ma;
function Go(e) {
  return e ? "open" : "closed";
}
var va = "DialogTitleWarning", [_p, ga] = Wd(va, {
  contentName: rt,
  titleName: Ko,
  docsSlug: "dialog"
}), Mp = ({ titleId: e }) => {
  const t = ga(va), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Dp = "DialogDescriptionWarning", Ip = ({ contentRef: e, descriptionId: t }) => {
  const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ga(Dp).contentName}}.`;
  return c.useEffect(() => {
    var s;
    const r = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(o));
  }, [o, e, t]), null;
}, xa = oa, wa = sa, ya = ia, Nn = ca, Yo = la, zo = da, Xo = pa, qo = ha, ba = "AlertDialog", [jp, Gw] = ie(ba, [
  na
]), Ve = na(), Ca = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = Ve(t);
  return /* @__PURE__ */ l.jsx(xa, { ...o, ...n, modal: !0 });
};
Ca.displayName = ba;
var Op = "AlertDialogTrigger", Sa = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Ve(n);
    return /* @__PURE__ */ l.jsx(wa, { ...r, ...o, ref: t });
  }
);
Sa.displayName = Op;
var kp = "AlertDialogPortal", Ea = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = Ve(t);
  return /* @__PURE__ */ l.jsx(ya, { ...o, ...n });
};
Ea.displayName = kp;
var Lp = "AlertDialogOverlay", Ra = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Ve(n);
    return /* @__PURE__ */ l.jsx(Nn, { ...r, ...o, ref: t });
  }
);
Ra.displayName = Lp;
var pt = "AlertDialogContent", [$p, Fp] = jp(pt), Ta = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: o, ...r } = e, s = Ve(n), a = c.useRef(null), i = H(t, a), u = c.useRef(null);
    return /* @__PURE__ */ l.jsx(
      _p,
      {
        contentName: pt,
        titleName: Pa,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ l.jsx($p, { scope: n, cancelRef: u, children: /* @__PURE__ */ l.jsxs(
          Yo,
          {
            role: "alertdialog",
            ...s,
            ...r,
            ref: i,
            onOpenAutoFocus: T(r.onOpenAutoFocus, (d) => {
              var p;
              d.preventDefault(), (p = u.current) == null || p.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (d) => d.preventDefault(),
            onInteractOutside: (d) => d.preventDefault(),
            children: [
              /* @__PURE__ */ l.jsx(Do, { children: o }),
              /* @__PURE__ */ l.jsx(Bp, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Ta.displayName = pt;
var Pa = "AlertDialogTitle", Aa = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Ve(n);
    return /* @__PURE__ */ l.jsx(zo, { ...r, ...o, ref: t });
  }
);
Aa.displayName = Pa;
var Na = "AlertDialogDescription", _a = c.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = Ve(n);
  return /* @__PURE__ */ l.jsx(Xo, { ...r, ...o, ref: t });
});
_a.displayName = Na;
var Vp = "AlertDialogAction", Ma = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, r = Ve(n);
    return /* @__PURE__ */ l.jsx(qo, { ...r, ...o, ref: t });
  }
);
Ma.displayName = Vp;
var Da = "AlertDialogCancel", Ia = c.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...o } = e, { cancelRef: r } = Fp(Da, n), s = Ve(n), a = H(t, r);
    return /* @__PURE__ */ l.jsx(qo, { ...s, ...o, ref: a });
  }
);
Ia.displayName = Da;
var Bp = ({ contentRef: e }) => {
  const t = `\`${pt}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${pt}\` by passing a \`${Na}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${pt}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return c.useEffect(() => {
    var o;
    document.getElementById(
      (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, Wp = Ca, Hp = Sa, Up = Ea, ja = Ra, Oa = Ta, ka = Ma, La = Ia, $a = Aa, Fa = _a;
const Kp = Wp, Gp = Hp, Yp = Up, Va = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  ja,
  {
    className: A(P + "alert-dialog-overlay", e),
    ...t
  }
);
Va.displayName = ja.displayName;
const Ba = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Oa,
  {
    className: A(P + "alert-dialog-content", e),
    ...t
  }
);
Ba.displayName = Oa.displayName;
const Wa = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  $a,
  {
    className: A(P + "alert-dialog-title", e),
    ...t
  }
);
Wa.displayName = $a.displayName;
const Ha = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Fa,
  {
    className: A(P + "alert-dialog-description", e),
    ...t
  }
);
Ha.displayName = Fa.displayName;
const Ua = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  ka,
  {
    className: A(P + "alert-dialog-action", e),
    ...t
  }
);
Ua.displayName = ka.displayName;
const Ka = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  La,
  {
    className: A(P + "alert-dialog-cancel", e),
    "data-variant": "outline",
    ...t
  }
);
Ka.displayName = La.displayName;
const Yw = ({ children: e, ...t }) => /* @__PURE__ */ l.jsx("div", { className: "design-alert-dialog-footer", ...t, children: e }), zw = ({
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
  return /* @__PURE__ */ l.jsxs(Kp, { ...i, children: [
    /* @__PURE__ */ l.jsx(Gp, { asChild: !0, children: e }),
    /* @__PURE__ */ l.jsxs(Yp, { children: [
      /* @__PURE__ */ l.jsx(Va, {}),
      /* @__PURE__ */ l.jsxs(Ba, { ...i, children: [
        o && /* @__PURE__ */ l.jsx(Wa, { children: o }),
        /* @__PURE__ */ l.jsx(Ha, { children: t }),
        /* @__PURE__ */ l.jsxs("div", { className: "design-alert-dialog-footer", children: [
          r && /* @__PURE__ */ l.jsx(Ka, { onClick: d, children: r }),
          /* @__PURE__ */ l.jsx(Ua, { onClick: u, children: n })
        ] })
      ] })
    ] })
  ] });
};
function Ft(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function Vt(e) {
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
var Zo = "Checkbox", [zp, Xw] = ie(Zo), [Xp, qp] = zp(Zo), Ga = c.forwardRef(
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
    } = e, [m, v] = c.useState(null), x = H(t, (S) => v(S)), h = c.useRef(!1), g = m ? p || !!m.closest("form") : !0, [w = !1, y] = fe({
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
    }, [m, y]), /* @__PURE__ */ l.jsxs(Xp, { scope: n, state: w, disabled: i, children: [
      /* @__PURE__ */ l.jsx(
        j.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": Ue(w) ? "mixed" : w,
          "aria-required": a,
          "data-state": Xa(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: u,
          ...f,
          ref: x,
          onKeyDown: T(e.onKeyDown, (S) => {
            S.key === "Enter" && S.preventDefault();
          }),
          onClick: T(e.onClick, (S) => {
            y((E) => Ue(E) ? !0 : !E), g && (h.current = S.isPropagationStopped(), h.current || S.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ l.jsx(
        Zp,
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
          defaultChecked: Ue(s) ? !1 : s
        }
      )
    ] });
  }
);
Ga.displayName = Zo;
var Ya = "CheckboxIndicator", za = c.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: o, ...r } = e, s = qp(Ya, n);
    return /* @__PURE__ */ l.jsx(ce, { present: o || Ue(s.state) || s.state === !0, children: /* @__PURE__ */ l.jsx(
      j.span,
      {
        "data-state": Xa(s.state),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
za.displayName = Ya;
var Zp = (e) => {
  const { control: t, checked: n, bubbles: o = !0, defaultChecked: r, ...s } = e, a = c.useRef(null), i = Ft(n), u = Vt(t);
  c.useEffect(() => {
    const p = a.current, f = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(f, "checked").set;
    if (i !== n && v) {
      const x = new Event("click", { bubbles: o });
      p.indeterminate = Ue(n), v.call(p, Ue(n) ? !1 : n), p.dispatchEvent(x);
    }
  }, [i, n, o]);
  const d = c.useRef(Ue(n) ? !1 : n);
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
function Ue(e) {
  return e === "indeterminate";
}
function Xa(e) {
  return Ue(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var qa = Ga, Jp = za;
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), em = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), as = (e) => {
  const t = em(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Za = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var tm = {
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
const nm = Mo(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: a,
    ...i
  }, u) => Ke(
    "svg",
    {
      ref: u,
      ...tm,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Za("lucide", r),
      ...i
    },
    [
      ...a.map(([d, p]) => Ke(d, p)),
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
const qe = (e, t) => {
  const n = Mo(
    ({ className: o, ...r }, s) => Ke(nm, {
      ref: s,
      iconNode: t,
      className: Za(
        `lucide-${Qp(as(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = as(e), n;
};
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Jo = qe("check", om);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ja = qe("chevron-down", rm);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], am = qe("chevron-left", sm);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qa = qe("chevron-right", im);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], lm = qe("chevron-up", cm);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], ei = qe("circle", um);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dm = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], fm = qe("ellipsis", dm);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pm = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ti = qe("x", pm), mm = ({
  className: e,
  ref: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  qa,
  {
    ref: t,
    className: A(P + "checkbox", e),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      Jp,
      {
        className: A(P + "checkbox-indicator", e),
        children: /* @__PURE__ */ l.jsx(Jo, { className: A(P + "checkbox-check", e) })
      }
    )
  }
);
mm.displayName = qa.displayName;
const hm = xa, vm = wa, gm = ya, fn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  qo,
  {
    className: A(P + "dialog-close", e),
    ...t
  }
);
fn.displayName = Nn.displayName;
const ni = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Nn,
  {
    className: A(P + "dialog-overlay", e),
    ...t
  }
);
ni.displayName = Nn.displayName;
const oi = ({
  children: e,
  className: t,
  closeButton: n = !1,
  ...o
}) => /* @__PURE__ */ l.jsxs(
  Yo,
  {
    className: A(P + "dialog-content", t),
    ...o,
    children: [
      e,
      n && /* @__PURE__ */ l.jsxs(fn, { children: [
        /* @__PURE__ */ l.jsx(
          ti,
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
oi.displayName = Yo.displayName;
const ri = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx("div", { className: A(P + "dialog-header", e), ...t });
ri.displayName = "DialogHeader";
const si = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx("div", { className: A(P + "dialog-footer", e), ...t });
si.displayName = "DialogFooter";
const ai = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  zo,
  {
    className: A(P + "dialog-title", e),
    ...t
  }
);
ai.displayName = zo.displayName;
const ii = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Xo,
  {
    className: A(P + "dialog-description", e),
    ...t
  }
);
ii.displayName = Xo.displayName;
const qw = ({
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
  return /* @__PURE__ */ l.jsxs(hm, { ...p, children: [
    /* @__PURE__ */ l.jsx(vm, { asChild: !0, children: e }),
    /* @__PURE__ */ l.jsxs(gm, { children: [
      n && /* @__PURE__ */ l.jsx(ni, {}),
      /* @__PURE__ */ l.jsx(oi, { ...p, closeButton: t, children: /* @__PURE__ */ l.jsxs("div", { className: A(P + "dialog-content-wrapper"), children: [
        (o || r) && /* @__PURE__ */ l.jsxs(ri, { children: [
          o && /* @__PURE__ */ l.jsx(ai, { children: o }),
          r && /* @__PURE__ */ l.jsx(ii, { children: r })
        ] }),
        d,
        (s || i) && /* @__PURE__ */ l.jsxs(si, { children: [
          s && /* @__PURE__ */ l.jsx(fn, { asChild: !0, children: /* @__PURE__ */ l.jsx(
            "button",
            {
              className: A(P + "dialog-close-cancel"),
              onClick: f,
              children: s
            }
          ) }),
          i && /* @__PURE__ */ l.jsx(fn, { asChild: !0, children: /* @__PURE__ */ l.jsx(
            "button",
            {
              className: A(P + "dialog-close-action"),
              onClick: m,
              children: i
            }
          ) })
        ] })
      ] }) })
    ] })
  ] });
}, xm = ["top", "right", "bottom", "left"], Ge = Math.min, ye = Math.max, pn = Math.round, nn = Math.floor, _e = (e) => ({
  x: e,
  y: e
}), wm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ym = {
  start: "end",
  end: "start"
};
function uo(e, t, n) {
  return ye(e, Ge(t, n));
}
function Le(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $e(e) {
  return e.split("-")[0];
}
function bt(e) {
  return e.split("-")[1];
}
function Qo(e) {
  return e === "x" ? "y" : "x";
}
function er(e) {
  return e === "y" ? "height" : "width";
}
function Ye(e) {
  return ["top", "bottom"].includes($e(e)) ? "y" : "x";
}
function tr(e) {
  return Qo(Ye(e));
}
function bm(e, t, n) {
  n === void 0 && (n = !1);
  const o = bt(e), r = tr(e), s = er(r);
  let a = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = mn(a)), [a, mn(a)];
}
function Cm(e) {
  const t = mn(e);
  return [fo(e), t, fo(t)];
}
function fo(e) {
  return e.replace(/start|end/g, (t) => ym[t]);
}
function Sm(e, t, n) {
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
function Em(e, t, n, o) {
  const r = bt(e);
  let s = Sm($e(e), n === "start", o);
  return r && (s = s.map((a) => a + "-" + r), t && (s = s.concat(s.map(fo)))), s;
}
function mn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wm[t]);
}
function Rm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ci(e) {
  return typeof e != "number" ? Rm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function hn(e) {
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
function is(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = Ye(t), a = tr(t), i = er(a), u = $e(t), d = s === "y", p = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, m = o[i] / 2 - r[i] / 2;
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
  switch (bt(t)) {
    case "start":
      v[a] -= m * (n && d ? -1 : 1);
      break;
    case "end":
      v[a] += m * (n && d ? -1 : 1);
      break;
  }
  return v;
}
const Tm = async (e, t, n) => {
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
  } = is(d, o, u), m = o, v = {}, x = 0;
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
    } = is(d, m, u)), h = -1);
  }
  return {
    x: p,
    y: f,
    placement: m,
    strategy: r,
    middlewareData: v
  };
};
async function It(e, t) {
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
  } = Le(t, e), x = ci(v), g = i[m ? f === "floating" ? "reference" : "floating" : f], w = hn(await s.getClippingRect({
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
  }, E = hn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Pm = (e) => ({
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
    } = Le(e, t) || {};
    if (d == null)
      return {};
    const f = ci(p), m = {
      x: n,
      y: o
    }, v = tr(r), x = er(v), h = await a.getDimensions(d), g = v === "y", w = g ? "top" : "left", y = g ? "bottom" : "right", C = g ? "clientHeight" : "clientWidth", S = s.reference[x] + s.reference[v] - m[v] - s.floating[x], E = m[v] - s.reference[v], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let R = N ? N[C] : 0;
    (!R || !await (a.isElement == null ? void 0 : a.isElement(N))) && (R = i.floating[C] || s.floating[x]);
    const D = S / 2 - E / 2, I = R / 2 - h[x] / 2 - 1, O = Ge(f[w], I), k = Ge(f[y], I), W = O, U = R - h[x] - k, M = R / 2 - h[x] / 2 + D, K = uo(W, M, U), $ = !u.arrow && bt(r) != null && M !== K && s.reference[x] / 2 - (M < W ? O : k) - h[x] / 2 < 0, G = $ ? M < W ? M - W : M - U : 0;
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
}), Am = function(e) {
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
      } = Le(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = $e(r), y = Ye(i), C = $e(i) === i, S = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), E = m || (C || !h ? [mn(i)] : Cm(i)), N = x !== "none";
      !m && N && E.push(...Em(i, h, x, S));
      const R = [i, ...E], D = await It(t, g), I = [];
      let O = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (p && I.push(D[w]), f) {
        const M = bm(r, a, S);
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
                if (N) {
                  const _ = Ye(L.placement);
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
function cs(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ls(e) {
  return xm.some((t) => e[t] >= 0);
}
const Nm = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = Le(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await It(t, {
            ...r,
            elementContext: "reference"
          }), a = cs(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: ls(a)
            }
          };
        }
        case "escaped": {
          const s = await It(t, {
            ...r,
            altBoundary: !0
          }), a = cs(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: ls(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function _m(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), a = $e(n), i = bt(n), u = Ye(n) === "y", d = ["left", "top"].includes(a) ? -1 : 1, p = s && u ? -1 : 1, f = Le(t, e);
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
const Mm = function(e) {
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
      } = t, u = await _m(t, e);
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
}, Dm = function(e) {
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
      } = Le(e, t), d = {
        x: n,
        y: o
      }, p = await It(t, u), f = Ye($e(r)), m = Qo(f);
      let v = d[m], x = d[f];
      if (s) {
        const g = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", y = v + p[g], C = v - p[w];
        v = uo(y, v, C);
      }
      if (a) {
        const g = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", y = x + p[g], C = x - p[w];
        x = uo(y, x, C);
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
}, Im = function(e) {
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
      } = Le(e, t), p = {
        x: n,
        y: o
      }, f = Ye(r), m = Qo(f);
      let v = p[m], x = p[f];
      const h = Le(i, t), g = typeof h == "number" ? {
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
        const C = m === "y" ? "width" : "height", S = ["top", "left"].includes($e(r)), E = s.reference[f] - s.floating[C] + (S && ((w = a.offset) == null ? void 0 : w[f]) || 0) + (S ? 0 : g.crossAxis), N = s.reference[f] + s.reference[C] + (S ? 0 : ((y = a.offset) == null ? void 0 : y[f]) || 0) - (S ? g.crossAxis : 0);
        x < E ? x = E : x > N && (x = N);
      }
      return {
        [m]: v,
        [f]: x
      };
    }
  };
}, jm = function(e) {
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
      } = Le(e, t), p = await It(t, d), f = $e(r), m = bt(r), v = Ye(r) === "y", {
        width: x,
        height: h
      } = s.floating;
      let g, w;
      f === "top" || f === "bottom" ? (g = f, w = m === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, g = m === "end" ? "top" : "bottom");
      const y = h - p.top - p.bottom, C = x - p.left - p.right, S = Ge(h - p[g], y), E = Ge(x - p[w], C), N = !t.middlewareData.shift;
      let R = S, D = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (D = C), (o = t.middlewareData.shift) != null && o.enabled.y && (R = y), N && !m) {
        const O = ye(p.left, 0), k = ye(p.right, 0), W = ye(p.top, 0), U = ye(p.bottom, 0);
        v ? D = x - 2 * (O !== 0 || k !== 0 ? O + k : ye(p.left, p.right)) : R = h - 2 * (W !== 0 || U !== 0 ? W + U : ye(p.top, p.bottom));
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
function _n() {
  return typeof window < "u";
}
function Ct(e) {
  return li(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function De(e) {
  var t;
  return (t = (li(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function li(e) {
  return _n() ? e instanceof Node || e instanceof be(e).Node : !1;
}
function Te(e) {
  return _n() ? e instanceof Element || e instanceof be(e).Element : !1;
}
function Me(e) {
  return _n() ? e instanceof HTMLElement || e instanceof be(e).HTMLElement : !1;
}
function us(e) {
  return !_n() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof be(e).ShadowRoot;
}
function Bt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = Pe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Om(e) {
  return ["table", "td", "th"].includes(Ct(e));
}
function Mn(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function nr(e) {
  const t = or(), n = Te(e) ? Pe(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function km(e) {
  let t = ze(e);
  for (; Me(t) && !ht(t); ) {
    if (nr(t))
      return t;
    if (Mn(t))
      return null;
    t = ze(t);
  }
  return null;
}
function or() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ht(e) {
  return ["html", "body", "#document"].includes(Ct(e));
}
function Pe(e) {
  return be(e).getComputedStyle(e);
}
function Dn(e) {
  return Te(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ze(e) {
  if (Ct(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    us(e) && e.host || // Fallback.
    De(e)
  );
  return us(t) ? t.host : t;
}
function ui(e) {
  const t = ze(e);
  return ht(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Me(t) && Bt(t) ? t : ui(t);
}
function jt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ui(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), a = be(r);
  if (s) {
    const i = po(a);
    return t.concat(a, a.visualViewport || [], Bt(r) ? r : [], i && n ? jt(i) : []);
  }
  return t.concat(r, jt(r, [], n));
}
function po(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function di(e) {
  const t = Pe(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Me(e), s = r ? e.offsetWidth : n, a = r ? e.offsetHeight : o, i = pn(n) !== s || pn(o) !== a;
  return i && (n = s, o = a), {
    width: n,
    height: o,
    $: i
  };
}
function rr(e) {
  return Te(e) ? e : e.contextElement;
}
function mt(e) {
  const t = rr(e);
  if (!Me(t))
    return _e(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = di(t);
  let a = (s ? pn(n.width) : n.width) / o, i = (s ? pn(n.height) : n.height) / r;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const Lm = /* @__PURE__ */ _e(0);
function fi(e) {
  const t = be(e);
  return !or() || !t.visualViewport ? Lm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function $m(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== be(e) ? !1 : t;
}
function st(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = rr(e);
  let a = _e(1);
  t && (o ? Te(o) && (a = mt(o)) : a = mt(e));
  const i = $m(s, n, o) ? fi(s) : _e(0);
  let u = (r.left + i.x) / a.x, d = (r.top + i.y) / a.y, p = r.width / a.x, f = r.height / a.y;
  if (s) {
    const m = be(s), v = o && Te(o) ? be(o) : o;
    let x = m, h = po(x);
    for (; h && o && v !== x; ) {
      const g = mt(h), w = h.getBoundingClientRect(), y = Pe(h), C = w.left + (h.clientLeft + parseFloat(y.paddingLeft)) * g.x, S = w.top + (h.clientTop + parseFloat(y.paddingTop)) * g.y;
      u *= g.x, d *= g.y, p *= g.x, f *= g.y, u += C, d += S, x = be(h), h = po(x);
    }
  }
  return hn({
    width: p,
    height: f,
    x: u,
    y: d
  });
}
function sr(e, t) {
  const n = Dn(e).scrollLeft;
  return t ? t.left + n : st(De(e)).left + n;
}
function pi(e, t, n) {
  n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), r = o.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    sr(e, o)
  )), s = o.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function Fm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", a = De(o), i = t ? Mn(t.floating) : !1;
  if (o === a || i && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = _e(1);
  const p = _e(0), f = Me(o);
  if ((f || !f && !s) && ((Ct(o) !== "body" || Bt(a)) && (u = Dn(o)), Me(o))) {
    const v = st(o);
    d = mt(o), p.x = v.x + o.clientLeft, p.y = v.y + o.clientTop;
  }
  const m = a && !f && !s ? pi(a, u, !0) : _e(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - u.scrollLeft * d.x + p.x + m.x,
    y: n.y * d.y - u.scrollTop * d.y + p.y + m.y
  };
}
function Vm(e) {
  return Array.from(e.getClientRects());
}
function Bm(e) {
  const t = De(e), n = Dn(e), o = e.ownerDocument.body, r = ye(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = ye(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let a = -n.scrollLeft + sr(e);
  const i = -n.scrollTop;
  return Pe(o).direction === "rtl" && (a += ye(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: a,
    y: i
  };
}
function Wm(e, t) {
  const n = be(e), o = De(e), r = n.visualViewport;
  let s = o.clientWidth, a = o.clientHeight, i = 0, u = 0;
  if (r) {
    s = r.width, a = r.height;
    const d = or();
    (!d || d && t === "fixed") && (i = r.offsetLeft, u = r.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: i,
    y: u
  };
}
function Hm(e, t) {
  const n = st(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = Me(e) ? mt(e) : _e(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, u = r * s.x, d = o * s.y;
  return {
    width: a,
    height: i,
    x: u,
    y: d
  };
}
function ds(e, t, n) {
  let o;
  if (t === "viewport")
    o = Wm(e, n);
  else if (t === "document")
    o = Bm(De(e));
  else if (Te(t))
    o = Hm(t, n);
  else {
    const r = fi(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return hn(o);
}
function mi(e, t) {
  const n = ze(e);
  return n === t || !Te(n) || ht(n) ? !1 : Pe(n).position === "fixed" || mi(n, t);
}
function Um(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = jt(e, [], !1).filter((i) => Te(i) && Ct(i) !== "body"), r = null;
  const s = Pe(e).position === "fixed";
  let a = s ? ze(e) : e;
  for (; Te(a) && !ht(a); ) {
    const i = Pe(a), u = nr(a);
    !u && i.position === "fixed" && (r = null), (s ? !u && !r : !u && i.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Bt(a) && !u && mi(e, a)) ? o = o.filter((p) => p !== a) : r = i, a = ze(a);
  }
  return t.set(e, o), o;
}
function Km(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const a = [...n === "clippingAncestors" ? Mn(t) ? [] : Um(t, this._c) : [].concat(n), o], i = a[0], u = a.reduce((d, p) => {
    const f = ds(t, p, r);
    return d.top = ye(f.top, d.top), d.right = Ge(f.right, d.right), d.bottom = Ge(f.bottom, d.bottom), d.left = ye(f.left, d.left), d;
  }, ds(t, i, r));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Gm(e) {
  const {
    width: t,
    height: n
  } = di(e);
  return {
    width: t,
    height: n
  };
}
function Ym(e, t, n) {
  const o = Me(t), r = De(t), s = n === "fixed", a = st(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = _e(0);
  if (o || !o && !s)
    if ((Ct(t) !== "body" || Bt(r)) && (i = Dn(t)), o) {
      const m = st(t, !0, s, t);
      u.x = m.x + t.clientLeft, u.y = m.y + t.clientTop;
    } else r && (u.x = sr(r));
  const d = r && !o && !s ? pi(r, i) : _e(0), p = a.left + i.scrollLeft - u.x - d.x, f = a.top + i.scrollTop - u.y - d.y;
  return {
    x: p,
    y: f,
    width: a.width,
    height: a.height
  };
}
function no(e) {
  return Pe(e).position === "static";
}
function fs(e, t) {
  if (!Me(e) || Pe(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return De(e) === n && (n = n.ownerDocument.body), n;
}
function hi(e, t) {
  const n = be(e);
  if (Mn(e))
    return n;
  if (!Me(e)) {
    let r = ze(e);
    for (; r && !ht(r); ) {
      if (Te(r) && !no(r))
        return r;
      r = ze(r);
    }
    return n;
  }
  let o = fs(e, t);
  for (; o && Om(o) && no(o); )
    o = fs(o, t);
  return o && ht(o) && no(o) && !nr(o) ? n : o || km(e) || n;
}
const zm = async function(e) {
  const t = this.getOffsetParent || hi, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: Ym(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Xm(e) {
  return Pe(e).direction === "rtl";
}
const qm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Fm,
  getDocumentElement: De,
  getClippingRect: Km,
  getOffsetParent: hi,
  getElementRects: zm,
  getClientRects: Vm,
  getDimensions: Gm,
  getScale: mt,
  isElement: Te,
  isRTL: Xm
};
function vi(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Zm(e, t) {
  let n = null, o;
  const r = De(e);
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
    const x = nn(f), h = nn(r.clientWidth - (p + m)), g = nn(r.clientHeight - (f + v)), w = nn(p), C = {
      rootMargin: -x + "px " + -h + "px " + -g + "px " + -w + "px",
      threshold: ye(0, Ge(1, u)) || 1
    };
    let S = !0;
    function E(N) {
      const R = N[0].intersectionRatio;
      if (R !== u) {
        if (!S)
          return a();
        R ? a(!1, R) : o = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      R === 1 && !vi(d, e.getBoundingClientRect()) && a(), S = !1;
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
function Jm(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = o, d = rr(e), p = r || s ? [...d ? jt(d) : [], ...jt(t)] : [];
  p.forEach((w) => {
    r && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const f = d && i ? Zm(d, n) : null;
  let m = -1, v = null;
  a && (v = new ResizeObserver((w) => {
    let [y] = w;
    y && y.target === d && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var C;
      (C = v) == null || C.observe(t);
    })), n();
  }), d && !u && v.observe(d), v.observe(t));
  let x, h = u ? st(e) : null;
  u && g();
  function g() {
    const w = st(e);
    h && !vi(h, w) && n(), h = w, x = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    p.forEach((y) => {
      r && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), f == null || f(), (w = v) == null || w.disconnect(), v = null, u && cancelAnimationFrame(x);
  };
}
const Qm = Mm, eh = Dm, th = Am, nh = jm, oh = Nm, ps = Pm, rh = Im, sh = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: qm,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return Tm(e, t, {
    ...r,
    platform: s
  });
};
var ln = typeof document < "u" ? Td : Pd;
function vn(e, t) {
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
        if (!vn(e[o], t[o]))
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
      if (!(s === "_owner" && e.$$typeof) && !vn(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function gi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ms(e, t) {
  const n = gi(e);
  return Math.round(t * n) / n;
}
function oo(e) {
  const t = c.useRef(e);
  return ln(() => {
    t.current = e;
  }), t;
}
function ah(e) {
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
  vn(m, o) || v(o);
  const [x, h] = c.useState(null), [g, w] = c.useState(null), y = c.useCallback((L) => {
    L !== N.current && (N.current = L, h(L));
  }, []), C = c.useCallback((L) => {
    L !== R.current && (R.current = L, w(L));
  }, []), S = s || x, E = a || g, N = c.useRef(null), R = c.useRef(null), D = c.useRef(p), I = u != null, O = oo(u), k = oo(r), W = oo(d), U = c.useCallback(() => {
    if (!N.current || !R.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: m
    };
    k.current && (L.platform = k.current), sh(N.current, R.current, L).then((_) => {
      const z = {
        ..._,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: W.current !== !1
      };
      M.current && !vn(D.current, z) && (D.current = z, $t.flushSync(() => {
        f(z);
      }));
    });
  }, [m, t, n, k, W]);
  ln(() => {
    d === !1 && D.current.isPositioned && (D.current.isPositioned = !1, f((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [d]);
  const M = c.useRef(!1);
  ln(() => (M.current = !0, () => {
    M.current = !1;
  }), []), ln(() => {
    if (S && (N.current = S), E && (R.current = E), S && E) {
      if (O.current)
        return O.current(S, E, U);
      U();
    }
  }, [S, E, U, O, I]);
  const K = c.useMemo(() => ({
    reference: N,
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
    const _ = ms($.floating, p.x), z = ms($.floating, p.y);
    return i ? {
      ...L,
      transform: "translate(" + _ + "px, " + z + "px)",
      ...gi($.floating) >= 1.5 && {
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
const ih = (e) => {
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
      return o && t(o) ? o.current != null ? ps({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? ps({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, ch = (e, t) => ({
  ...Qm(e),
  options: [e, t]
}), lh = (e, t) => ({
  ...eh(e),
  options: [e, t]
}), uh = (e, t) => ({
  ...rh(e),
  options: [e, t]
}), dh = (e, t) => ({
  ...th(e),
  options: [e, t]
}), fh = (e, t) => ({
  ...nh(e),
  options: [e, t]
}), ph = (e, t) => ({
  ...oh(e),
  options: [e, t]
}), mh = (e, t) => ({
  ...ih(e),
  options: [e, t]
});
var hh = "Arrow", xi = c.forwardRef((e, t) => {
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
xi.displayName = hh;
var vh = xi, ar = "Popper", [wi, St] = ie(ar), [gh, yi] = wi(ar), bi = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = c.useState(null);
  return /* @__PURE__ */ l.jsx(gh, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
bi.displayName = ar;
var Ci = "PopperAnchor", Si = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = yi(Ci, n), a = c.useRef(null), i = H(t, a);
    return c.useEffect(() => {
      s.onAnchorChange((o == null ? void 0 : o.current) || a.current);
    }), o ? null : /* @__PURE__ */ l.jsx(j.div, { ...r, ref: i });
  }
);
Si.displayName = Ci;
var ir = "PopperContent", [xh, wh] = wi(ir), Ei = c.forwardRef(
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
    } = e, g = yi(ir, n), [w, y] = c.useState(null), C = H(t, (me) => y(me)), [S, E] = c.useState(null), N = Vt(S), R = (N == null ? void 0 : N.width) ?? 0, D = (N == null ? void 0 : N.height) ?? 0, I = o + (s !== "center" ? "-" + s : ""), O = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, k = Array.isArray(d) ? d : [d], W = k.length > 0, U = {
      padding: O,
      boundary: k.filter(bh),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: W
    }, { refs: M, floatingStyles: K, placement: $, isPositioned: G, middlewareData: L } = ah({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...me) => Jm(...me, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        ch({ mainAxis: r + D, alignmentAxis: a }),
        u && lh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? uh() : void 0,
          ...U
        }),
        u && dh({ ...U }),
        fh({
          ...U,
          apply: ({ elements: me, rects: we, availableWidth: je, availableHeight: et }) => {
            const { width: Be, height: zt } = we.reference, tt = me.floating.style;
            tt.setProperty("--radix-popper-available-width", `${je}px`), tt.setProperty("--radix-popper-available-height", `${et}px`), tt.setProperty("--radix-popper-anchor-width", `${Be}px`), tt.setProperty("--radix-popper-anchor-height", `${zt}px`);
          }
        }),
        S && mh({ element: S, padding: i }),
        Ch({ arrowWidth: R, arrowHeight: D }),
        m && ph({ strategy: "referenceHidden", ...U })
      ]
    }), [_, z] = Pi($), ee = ne(x);
    ue(() => {
      G && (ee == null || ee());
    }, [G, ee]);
    const se = (B = L.arrow) == null ? void 0 : B.x, le = (Z = L.arrow) == null ? void 0 : Z.y, re = ((te = L.arrow) == null ? void 0 : te.centerOffset) !== 0, [Ce, pe] = c.useState();
    return ue(() => {
      w && pe(window.getComputedStyle(w).zIndex);
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
          zIndex: Ce,
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
          xh,
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
Ei.displayName = ir;
var Ri = "PopperArrow", yh = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ti = c.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = wh(Ri, o), a = yh[s.placedSide];
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
          vh,
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
Ti.displayName = Ri;
function bh(e) {
  return e !== null;
}
var Ch = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, w, y;
    const { placement: n, rects: o, middlewareData: r } = t, a = ((g = r.arrow) == null ? void 0 : g.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, u = a ? 0 : e.arrowHeight, [d, p] = Pi(n), f = { start: "0%", center: "50%", end: "100%" }[p], m = (((w = r.arrow) == null ? void 0 : w.x) ?? 0) + i / 2, v = (((y = r.arrow) == null ? void 0 : y.y) ?? 0) + u / 2;
    let x = "", h = "";
    return d === "bottom" ? (x = a ? f : `${m}px`, h = `${-u}px`) : d === "top" ? (x = a ? f : `${m}px`, h = `${o.floating.height + u}px`) : d === "right" ? (x = `${-u}px`, h = a ? f : `${v}px`) : d === "left" && (x = `${o.floating.width + u}px`, h = a ? f : `${v}px`), { data: { x, y: h } };
  }
});
function Pi(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var In = bi, cr = Si, lr = Ei, ur = Ti, ro = "rovingFocusGroup.onEntryFocus", Sh = { bubbles: !1, cancelable: !0 }, jn = "RovingFocusGroup", [mo, Ai, Eh] = xt(jn), [Rh, Et] = ie(
  jn,
  [Eh]
), [Th, Ph] = Rh(jn), Ni = c.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(mo.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(mo.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(Ah, { ...e, ref: t }) }) })
);
Ni.displayName = jn;
var Ah = c.forwardRef((e, t) => {
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
  } = e, m = c.useRef(null), v = H(t, m), x = Xe(s), [h = null, g] = fe({
    prop: a,
    defaultProp: i,
    onChange: u
  }), [w, y] = c.useState(!1), C = ne(d), S = Ai(n), E = c.useRef(!1), [N, R] = c.useState(0);
  return c.useEffect(() => {
    const D = m.current;
    if (D)
      return D.addEventListener(ro, C), () => D.removeEventListener(ro, C);
  }, [C]), /* @__PURE__ */ l.jsx(
    Th,
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
          tabIndex: w || N === 0 ? -1 : 0,
          "data-orientation": o,
          ...f,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: T(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: T(e.onFocus, (D) => {
            const I = !E.current;
            if (D.target === D.currentTarget && I && !w) {
              const O = new CustomEvent(ro, Sh);
              if (D.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const k = S().filter(($) => $.focusable), W = k.find(($) => $.active), U = k.find(($) => $.id === h), K = [W, U, ...k].filter(
                  Boolean
                ).map(($) => $.ref.current);
                Di(K, p);
              }
            }
            E.current = !1;
          }),
          onBlur: T(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), _i = "RovingFocusGroupItem", Mi = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: o = !0,
      active: r = !1,
      tabStopId: s,
      ...a
    } = e, i = xe(), u = s || i, d = Ph(_i, n), p = d.currentTabStopId === u, f = Ai(n), { onFocusableItemAdd: m, onFocusableItemRemove: v } = d;
    return c.useEffect(() => {
      if (o)
        return m(), () => v();
    }, [o, m, v]), /* @__PURE__ */ l.jsx(
      mo.ItemSlot,
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
            onMouseDown: T(e.onMouseDown, (x) => {
              o ? d.onItemFocus(u) : x.preventDefault();
            }),
            onFocus: T(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: T(e.onKeyDown, (x) => {
              if (x.key === "Tab" && x.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (x.target !== x.currentTarget) return;
              const h = Mh(x, d.orientation, d.dir);
              if (h !== void 0) {
                if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                x.preventDefault();
                let w = f().filter((y) => y.focusable).map((y) => y.ref.current);
                if (h === "last") w.reverse();
                else if (h === "prev" || h === "next") {
                  h === "prev" && w.reverse();
                  const y = w.indexOf(x.currentTarget);
                  w = d.loop ? Dh(w, y + 1) : w.slice(y + 1);
                }
                setTimeout(() => Di(w));
              }
            })
          }
        )
      }
    );
  }
);
Mi.displayName = _i;
var Nh = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function _h(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Mh(e, t, n) {
  const o = _h(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Nh[o];
}
function Di(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Dh(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var dr = Ni, fr = Mi, ho = ["Enter", " "], Ih = ["ArrowDown", "PageUp", "Home"], Ii = ["ArrowUp", "PageDown", "End"], jh = [...Ih, ...Ii], Oh = {
  ltr: [...ho, "ArrowRight"],
  rtl: [...ho, "ArrowLeft"]
}, kh = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Wt = "Menu", [Ot, Lh, $h] = xt(Wt), [it, ji] = ie(Wt, [
  $h,
  St,
  Et
]), Ht = St(), Oi = Et(), [ki, Ze] = it(Wt), [Fh, Ut] = it(Wt), Li = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: s, modal: a = !0 } = e, i = Ht(t), [u, d] = c.useState(null), p = c.useRef(!1), f = ne(s), m = Xe(r);
  return c.useEffect(() => {
    const v = () => {
      p.current = !0, document.addEventListener("pointerdown", x, { capture: !0, once: !0 }), document.addEventListener("pointermove", x, { capture: !0, once: !0 });
    }, x = () => p.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", x, { capture: !0 }), document.removeEventListener("pointermove", x, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(In, { ...i, children: /* @__PURE__ */ l.jsx(
    ki,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ l.jsx(
        Fh,
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
Li.displayName = Wt;
var Vh = "MenuAnchor", pr = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Ht(n);
    return /* @__PURE__ */ l.jsx(cr, { ...r, ...o, ref: t });
  }
);
pr.displayName = Vh;
var mr = "MenuPortal", [Bh, $i] = it(mr, {
  forceMount: void 0
}), Fi = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, s = Ze(mr, t);
  return /* @__PURE__ */ l.jsx(Bh, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ce, { present: n || s.open, children: /* @__PURE__ */ l.jsx(yt, { asChild: !0, container: r, children: o }) }) });
};
Fi.displayName = mr;
var Se = "MenuContent", [Wh, hr] = it(Se), Vi = c.forwardRef(
  (e, t) => {
    const n = $i(Se, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Ze(Se, e.__scopeMenu), a = Ut(Se, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(Ot.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ce, { present: o || s.open, children: /* @__PURE__ */ l.jsx(Ot.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ l.jsx(Hh, { ...r, ref: t }) : /* @__PURE__ */ l.jsx(Uh, { ...r, ref: t }) }) }) });
  }
), Hh = c.forwardRef(
  (e, t) => {
    const n = Ze(Se, e.__scopeMenu), o = c.useRef(null), r = H(t, o);
    return c.useEffect(() => {
      const s = o.current;
      if (s) return Wo(s);
    }, []), /* @__PURE__ */ l.jsx(
      vr,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: T(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Uh = c.forwardRef((e, t) => {
  const n = Ze(Se, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    vr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), vr = c.forwardRef(
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
    } = e, g = Ze(Se, n), w = Ut(Se, n), y = Ht(n), C = Oi(n), S = Lh(n), [E, N] = c.useState(null), R = c.useRef(null), D = H(t, R, g.onContentChange), I = c.useRef(0), O = c.useRef(""), k = c.useRef(0), W = c.useRef(null), U = c.useRef("right"), M = c.useRef(0), K = x ? An : c.Fragment, $ = x ? { as: ot, allowPinchZoom: !0 } : void 0, G = (_) => {
      var B, Z;
      const z = O.current + _, ee = S().filter((te) => !te.disabled), se = document.activeElement, le = (B = ee.find((te) => te.ref.current === se)) == null ? void 0 : B.textValue, re = ee.map((te) => te.textValue), Ce = nv(re, z, le), pe = (Z = ee.find((te) => te.textValue === Ce)) == null ? void 0 : Z.ref.current;
      (function te(X) {
        O.current = X, window.clearTimeout(I.current), X !== "" && (I.current = window.setTimeout(() => te(""), 1e3));
      })(z), pe && setTimeout(() => pe.focus());
    };
    c.useEffect(() => () => window.clearTimeout(I.current), []), Bo();
    const L = c.useCallback((_) => {
      var ee, se;
      return U.current === ((ee = W.current) == null ? void 0 : ee.side) && rv(_, (se = W.current) == null ? void 0 : se.area);
    }, []);
    return /* @__PURE__ */ l.jsx(
      Wh,
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
            L(_) || ((z = R.current) == null || z.focus(), N(null));
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
          Tn,
          {
            asChild: !0,
            trapped: r,
            onMountAutoFocus: T(s, (_) => {
              var z;
              _.preventDefault(), (z = R.current) == null || z.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ l.jsx(
              wt,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: d,
                onPointerDownOutside: p,
                onFocusOutside: f,
                onInteractOutside: m,
                onDismiss: v,
                children: /* @__PURE__ */ l.jsx(
                  dr,
                  {
                    asChild: !0,
                    ...C,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: o,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: T(u, (_) => {
                      w.isUsingKeyboardRef.current || _.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      lr,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": oc(g.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...y,
                        ...h,
                        ref: D,
                        style: { outline: "none", ...h.style },
                        onKeyDown: T(h.onKeyDown, (_) => {
                          const ee = _.target.closest("[data-radix-menu-content]") === _.currentTarget, se = _.ctrlKey || _.altKey || _.metaKey, le = _.key.length === 1;
                          ee && (_.key === "Tab" && _.preventDefault(), !se && le && G(_.key));
                          const re = R.current;
                          if (_.target !== re || !jh.includes(_.key)) return;
                          _.preventDefault();
                          const pe = S().filter((B) => !B.disabled).map((B) => B.ref.current);
                          Ii.includes(_.key) && pe.reverse(), ev(pe);
                        }),
                        onBlur: T(e.onBlur, (_) => {
                          _.currentTarget.contains(_.target) || (window.clearTimeout(I.current), O.current = "");
                        }),
                        onPointerMove: T(
                          e.onPointerMove,
                          kt((_) => {
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
Vi.displayName = Se;
var Kh = "MenuGroup", gr = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { role: "group", ...o, ref: t });
  }
);
gr.displayName = Kh;
var Gh = "MenuLabel", Bi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { ...o, ref: t });
  }
);
Bi.displayName = Gh;
var gn = "MenuItem", hs = "menu.itemSelect", On = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: o, ...r } = e, s = c.useRef(null), a = Ut(gn, e.__scopeMenu), i = hr(gn, e.__scopeMenu), u = H(t, s), d = c.useRef(!1), p = () => {
      const f = s.current;
      if (!n && f) {
        const m = new CustomEvent(hs, { bubbles: !0, cancelable: !0 });
        f.addEventListener(hs, (v) => o == null ? void 0 : o(v), { once: !0 }), Io(f, m), m.defaultPrevented ? d.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      Wi,
      {
        ...r,
        ref: u,
        disabled: n,
        onClick: T(e.onClick, p),
        onPointerDown: (f) => {
          var m;
          (m = e.onPointerDown) == null || m.call(e, f), d.current = !0;
        },
        onPointerUp: T(e.onPointerUp, (f) => {
          var m;
          d.current || (m = f.currentTarget) == null || m.click();
        }),
        onKeyDown: T(e.onKeyDown, (f) => {
          const m = i.searchRef.current !== "";
          n || m && f.key === " " || ho.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
On.displayName = gn;
var Wi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: o = !1, textValue: r, ...s } = e, a = hr(gn, n), i = Oi(n), u = c.useRef(null), d = H(t, u), [p, f] = c.useState(!1), [m, v] = c.useState("");
    return c.useEffect(() => {
      const x = u.current;
      x && v((x.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ l.jsx(
      Ot.ItemSlot,
      {
        scope: n,
        disabled: o,
        textValue: r ?? m,
        children: /* @__PURE__ */ l.jsx(fr, { asChild: !0, ...i, focusable: !o, children: /* @__PURE__ */ l.jsx(
          j.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": o || void 0,
            "data-disabled": o ? "" : void 0,
            ...s,
            ref: d,
            onPointerMove: T(
              e.onPointerMove,
              kt((x) => {
                o ? a.onItemLeave(x) : (a.onItemEnter(x), x.defaultPrevented || x.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: T(
              e.onPointerLeave,
              kt((x) => a.onItemLeave(x))
            ),
            onFocus: T(e.onFocus, () => f(!0)),
            onBlur: T(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Yh = "MenuCheckboxItem", Hi = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: o, ...r } = e;
    return /* @__PURE__ */ l.jsx(zi, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l.jsx(
      On,
      {
        role: "menuitemcheckbox",
        "aria-checked": xn(n) ? "mixed" : n,
        ...r,
        ref: t,
        "data-state": yr(n),
        onSelect: T(
          r.onSelect,
          () => o == null ? void 0 : o(xn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Hi.displayName = Yh;
var Ui = "MenuRadioGroup", [zh, Xh] = it(
  Ui,
  { value: void 0, onValueChange: () => {
  } }
), Ki = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: o, ...r } = e, s = ne(o);
    return /* @__PURE__ */ l.jsx(zh, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ l.jsx(gr, { ...r, ref: t }) });
  }
);
Ki.displayName = Ui;
var Gi = "MenuRadioItem", Yi = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = Xh(Gi, e.__scopeMenu), s = n === r.value;
    return /* @__PURE__ */ l.jsx(zi, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ l.jsx(
      On,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...o,
        ref: t,
        "data-state": yr(s),
        onSelect: T(
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
Yi.displayName = Gi;
var xr = "MenuItemIndicator", [zi, qh] = it(
  xr,
  { checked: !1 }
), Xi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: o, ...r } = e, s = qh(xr, n);
    return /* @__PURE__ */ l.jsx(
      ce,
      {
        present: o || xn(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          j.span,
          {
            ...r,
            ref: t,
            "data-state": yr(s.checked)
          }
        )
      }
    );
  }
);
Xi.displayName = xr;
var Zh = "MenuSeparator", qi = c.forwardRef(
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
qi.displayName = Zh;
var Jh = "MenuArrow", Zi = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...o } = e, r = Ht(n);
    return /* @__PURE__ */ l.jsx(ur, { ...r, ...o, ref: t });
  }
);
Zi.displayName = Jh;
var wr = "MenuSub", [Qh, Ji] = it(wr), Qi = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, s = Ze(wr, t), a = Ht(t), [i, u] = c.useState(null), [d, p] = c.useState(null), f = ne(r);
  return c.useEffect(() => (s.open === !1 && f(!1), () => f(!1)), [s.open, f]), /* @__PURE__ */ l.jsx(In, { ...a, children: /* @__PURE__ */ l.jsx(
    ki,
    {
      scope: t,
      open: o,
      onOpenChange: f,
      content: d,
      onContentChange: p,
      children: /* @__PURE__ */ l.jsx(
        Qh,
        {
          scope: t,
          contentId: xe(),
          triggerId: xe(),
          trigger: i,
          onTriggerChange: u,
          children: n
        }
      )
    }
  ) });
};
Qi.displayName = wr;
var _t = "MenuSubTrigger", ec = c.forwardRef(
  (e, t) => {
    const n = Ze(_t, e.__scopeMenu), o = Ut(_t, e.__scopeMenu), r = Ji(_t, e.__scopeMenu), s = hr(_t, e.__scopeMenu), a = c.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: u } = s, d = { __scopeMenu: e.__scopeMenu }, p = c.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return c.useEffect(() => p, [p]), c.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), u(null);
      };
    }, [i, u]), /* @__PURE__ */ l.jsx(pr, { asChild: !0, ...d, children: /* @__PURE__ */ l.jsx(
      Wi,
      {
        id: r.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": r.contentId,
        "data-state": oc(n.open),
        ...e,
        ref: Sn(t, r.onTriggerChange),
        onClick: (f) => {
          var m;
          (m = e.onClick) == null || m.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: T(
          e.onPointerMove,
          kt((f) => {
            s.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: T(
          e.onPointerLeave,
          kt((f) => {
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
        onKeyDown: T(e.onKeyDown, (f) => {
          var v;
          const m = s.searchRef.current !== "";
          e.disabled || m && f.key === " " || Oh[o.dir].includes(f.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
ec.displayName = _t;
var tc = "MenuSubContent", nc = c.forwardRef(
  (e, t) => {
    const n = $i(Se, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, s = Ze(Se, e.__scopeMenu), a = Ut(Se, e.__scopeMenu), i = Ji(tc, e.__scopeMenu), u = c.useRef(null), d = H(t, u);
    return /* @__PURE__ */ l.jsx(Ot.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ce, { present: o || s.open, children: /* @__PURE__ */ l.jsx(Ot.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      vr,
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
        onFocusOutside: T(e.onFocusOutside, (p) => {
          p.target !== i.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: T(e.onEscapeKeyDown, (p) => {
          a.onClose(), p.preventDefault();
        }),
        onKeyDown: T(e.onKeyDown, (p) => {
          var v;
          const f = p.currentTarget.contains(p.target), m = kh[a.dir].includes(p.key);
          f && m && (s.onOpenChange(!1), (v = i.trigger) == null || v.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
nc.displayName = tc;
function oc(e) {
  return e ? "open" : "closed";
}
function xn(e) {
  return e === "indeterminate";
}
function yr(e) {
  return xn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ev(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function tv(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
function nv(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = tv(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((d) => d !== n));
  const u = a.find(
    (d) => d.toLowerCase().startsWith(r.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function ov(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, u = t[s].y, d = t[a].x, p = t[a].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (r = !r);
  }
  return r;
}
function rv(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return ov(n, t);
}
function kt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var sv = Li, av = pr, iv = Fi, cv = Vi, lv = gr, uv = Bi, dv = On, fv = Hi, pv = Ki, mv = Yi, hv = Xi, vv = qi, gv = Zi, xv = Qi, wv = ec, yv = nc, br = "DropdownMenu", [bv, Zw] = ie(
  br,
  [ji]
), ve = ji(), [Cv, rc] = bv(br), sc = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: s,
    onOpenChange: a,
    modal: i = !0
  } = e, u = ve(t), d = c.useRef(null), [p = !1, f] = fe({
    prop: r,
    defaultProp: s,
    onChange: a
  });
  return /* @__PURE__ */ l.jsx(
    Cv,
    {
      scope: t,
      triggerId: xe(),
      triggerRef: d,
      contentId: xe(),
      open: p,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((m) => !m), [f]),
      modal: i,
      children: /* @__PURE__ */ l.jsx(sv, { ...u, open: p, onOpenChange: f, dir: o, modal: i, children: n })
    }
  );
};
sc.displayName = br;
var ac = "DropdownMenuTrigger", ic = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, s = rc(ac, n), a = ve(n);
    return /* @__PURE__ */ l.jsx(av, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
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
        ref: Sn(t, s.triggerRef),
        onPointerDown: T(e.onPointerDown, (i) => {
          !o && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault());
        }),
        onKeyDown: T(e.onKeyDown, (i) => {
          o || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
ic.displayName = ac;
var Sv = "DropdownMenuPortal", cc = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = ve(t);
  return /* @__PURE__ */ l.jsx(iv, { ...o, ...n });
};
cc.displayName = Sv;
var lc = "DropdownMenuContent", uc = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = rc(lc, n), s = ve(n), a = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      cv,
      {
        id: r.contentId,
        "aria-labelledby": r.triggerId,
        ...s,
        ...o,
        ref: t,
        onCloseAutoFocus: T(e.onCloseAutoFocus, (i) => {
          var u;
          a.current || (u = r.triggerRef.current) == null || u.focus(), a.current = !1, i.preventDefault();
        }),
        onInteractOutside: T(e.onInteractOutside, (i) => {
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
uc.displayName = lc;
var Ev = "DropdownMenuGroup", dc = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
    return /* @__PURE__ */ l.jsx(lv, { ...r, ...o, ref: t });
  }
);
dc.displayName = Ev;
var Rv = "DropdownMenuLabel", fc = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
    return /* @__PURE__ */ l.jsx(uv, { ...r, ...o, ref: t });
  }
);
fc.displayName = Rv;
var Tv = "DropdownMenuItem", pc = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
    return /* @__PURE__ */ l.jsx(dv, { ...r, ...o, ref: t });
  }
);
pc.displayName = Tv;
var Pv = "DropdownMenuCheckboxItem", mc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
  return /* @__PURE__ */ l.jsx(fv, { ...r, ...o, ref: t });
});
mc.displayName = Pv;
var Av = "DropdownMenuRadioGroup", hc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
  return /* @__PURE__ */ l.jsx(pv, { ...r, ...o, ref: t });
});
hc.displayName = Av;
var Nv = "DropdownMenuRadioItem", vc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
  return /* @__PURE__ */ l.jsx(mv, { ...r, ...o, ref: t });
});
vc.displayName = Nv;
var _v = "DropdownMenuItemIndicator", gc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
  return /* @__PURE__ */ l.jsx(hv, { ...r, ...o, ref: t });
});
gc.displayName = _v;
var Mv = "DropdownMenuSeparator", xc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
  return /* @__PURE__ */ l.jsx(vv, { ...r, ...o, ref: t });
});
xc.displayName = Mv;
var Dv = "DropdownMenuArrow", Iv = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
    return /* @__PURE__ */ l.jsx(gv, { ...r, ...o, ref: t });
  }
);
Iv.displayName = Dv;
var jv = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: s } = e, a = ve(t), [i = !1, u] = fe({
    prop: o,
    defaultProp: s,
    onChange: r
  });
  return /* @__PURE__ */ l.jsx(xv, { ...a, open: i, onOpenChange: u, children: n });
}, Ov = "DropdownMenuSubTrigger", wc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
  return /* @__PURE__ */ l.jsx(wv, { ...r, ...o, ref: t });
});
wc.displayName = Ov;
var kv = "DropdownMenuSubContent", yc = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ve(n);
  return /* @__PURE__ */ l.jsx(
    yv,
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
yc.displayName = kv;
var Lv = sc, $v = ic, bc = cc, Cc = uc, Fv = dc, Sc = fc, Ec = pc, Rc = mc, Vv = hc, Tc = vc, Pc = gc, Ac = xc, Bv = jv, Nc = wc, _c = yc;
const Wv = Lv, Hv = $v, Uv = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Fv,
  {
    className: A(P + "dropdown-menu-group", t),
    ...n,
    children: e
  }
), Kv = bc, Jw = Bv, Qw = Vv, Gv = ({
  inset: e,
  children: t,
  className: n,
  ...o
}) => /* @__PURE__ */ l.jsxs(
  Nc,
  {
    className: A(P + "dropdown-menu-sub-trigger", n),
    style: {
      paddingLeft: e ? "2rem" : "0.5rem"
    },
    ...o,
    children: [
      t,
      /* @__PURE__ */ l.jsx(Qa, { className: "chevron-right" })
    ]
  }
);
Gv.displayName = Nc.displayName;
const Yv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  _c,
  {
    className: A(P + "dropdown-menu-sub-content", e),
    ...t
  }
);
Yv.displayName = _c.displayName;
const vo = ({
  sideOffset: e = 4,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(bc, { children: /* @__PURE__ */ l.jsx(
  Cc,
  {
    sideOffset: e,
    className: A(P + "dropdown-menu-content", t),
    ...n
  }
) });
vo.displayName = Cc.displayName;
const Mc = ({
  inset: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Ec,
  {
    className: A(P + "dropdown-menu-item", t),
    style: {
      paddingLeft: e ? "2rem" : "0.5rem"
    },
    ...n
  }
);
Mc.displayName = Ec.displayName;
const zv = ({
  children: e,
  checked: t,
  className: n,
  ...o
}) => /* @__PURE__ */ l.jsxs(
  Rc,
  {
    className: A(P + "dropdown-menu-checkbox-item", n),
    checked: t,
    ...o,
    children: [
      /* @__PURE__ */ l.jsx(
        "span",
        {
          className: A(P + "dropdown-menu-checkbox-item-span", n),
          children: /* @__PURE__ */ l.jsx(Pc, { children: /* @__PURE__ */ l.jsx(
            Jo,
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
zv.displayName = Rc.displayName;
const Xv = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsxs(
  Tc,
  {
    className: A(P + "dropdown-menu-radio-item", t),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx("span", { className: A(P + "dropdown-menu-radio-item-span", t), children: /* @__PURE__ */ l.jsx(Pc, { children: /* @__PURE__ */ l.jsx(
        ei,
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
Xv.displayName = Tc.displayName;
const Dc = ({
  inset: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Sc,
  {
    className: A(P + "dropdown-menu-label", t),
    style: {
      paddingLeft: e ? "2rem" : "0.5rem"
    },
    ...n
  }
);
Dc.displayName = Sc.displayName;
const Ic = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Ac,
  {
    className: A(P + "dropdown-menu-separator", e),
    ...t
  }
);
Ic.displayName = Ac.displayName;
const qv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "span",
  {
    className: A(P + "dropdown-menu-shortcut", e),
    ...t
  }
);
qv.displayName = "DropdownMenuShortcut";
const Zv = ({
  trigger: e,
  isPortal: t = !0,
  children: n,
  ...o
}) => /* @__PURE__ */ l.jsxs(Wv, { ...o, children: [
  /* @__PURE__ */ l.jsx(Hv, { asChild: !0, children: e }),
  t ? /* @__PURE__ */ l.jsx(Kv, { children: /* @__PURE__ */ l.jsx(vo, { ...o, children: n }) }) : /* @__PURE__ */ l.jsx(vo, { ...o, children: n })
] }), ey = ({ groups: e, ...t }) => /* @__PURE__ */ l.jsx(Zv, { ...t, children: e.map(({ items: n, label: o }, r) => /* @__PURE__ */ l.jsxs(c.Fragment, { children: [
  /* @__PURE__ */ l.jsxs(Uv, { children: [
    o && /* @__PURE__ */ l.jsx(Dc, { children: o }),
    n.map((s, a) => /* @__PURE__ */ Ke(Mc, { ...s, key: `group-${r}-item-${a}` }, s.children))
  ] }),
  /* @__PURE__ */ l.jsx(Ic, {})
] }, `group-${r}`)) });
var Jv = "Label", jc = c.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
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
jc.displayName = Jv;
var Oc = jc;
const kc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(Oc, { className: A(P + "label", e), ...t });
kc.displayName = Oc.displayName;
const Qv = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: A(P + "pagination", e),
    ...t
  }
);
Qv.displayName = "Pagination";
const eg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx("ul", { className: A(P + "pagination-content", e), ...t });
eg.displayName = "PaginationContent";
const tg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx("li", { className: e, ...t });
tg.displayName = "PaginationItem";
const Cr = ({
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
    className: A(P + "pagination-link", n),
    ...o
  }
);
Cr.displayName = "PaginationLink";
const ng = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  Cr,
  {
    "aria-label": "Go to previous page",
    className: A(P + "pagination-previous", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(
        am,
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
ng.displayName = "PaginationPrevious";
const og = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  Cr,
  {
    "aria-label": "Go to next page",
    className: A(P + "pagination-next", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx("span", { children: "Next" }),
      /* @__PURE__ */ l.jsx(
        Qa,
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
og.displayName = "PaginationNext";
const rg = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: A(P + "pagination-ellipsis", e),
    ...t,
    children: [
      /* @__PURE__ */ l.jsx(
        fm,
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
rg.displayName = "PaginationEllipsis";
var Sr = "Progress", Er = 100, [sg, ty] = ie(Sr), [ag, ig] = sg(Sr), Lc = c.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: o = null,
      max: r,
      getValueLabel: s = cg,
      ...a
    } = e;
    (r || r === 0) && !vs(r) && console.error(lg(`${r}`, "Progress"));
    const i = vs(r) ? r : Er;
    o !== null && !gs(o, i) && console.error(ug(`${o}`, "Progress"));
    const u = gs(o, i) ? o : null, d = wn(u) ? s(u, i) : void 0;
    return /* @__PURE__ */ l.jsx(ag, { scope: n, value: u, max: i, children: /* @__PURE__ */ l.jsx(
      j.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": wn(u) ? u : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Vc(u, i),
        "data-value": u ?? void 0,
        "data-max": i,
        ...a,
        ref: t
      }
    ) });
  }
);
Lc.displayName = Sr;
var $c = "ProgressIndicator", Fc = c.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...o } = e, r = ig($c, n);
    return /* @__PURE__ */ l.jsx(
      j.div,
      {
        "data-state": Vc(r.value, r.max),
        "data-value": r.value ?? void 0,
        "data-max": r.max,
        ...o,
        ref: t
      }
    );
  }
);
Fc.displayName = $c;
function cg(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Vc(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function wn(e) {
  return typeof e == "number";
}
function vs(e) {
  return wn(e) && !isNaN(e) && e > 0;
}
function gs(e, t) {
  return wn(e) && !isNaN(e) && e <= t && e >= 0;
}
function lg(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Er}\`.`;
}
function ug(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Er} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Bc = Lc, dg = Fc;
const fg = ({
  value: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Bc,
  {
    className: A(P + "progress", t),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      dg,
      {
        className: A(P + "progress-indicator"),
        style: { transform: `translateX(-${100 - (e ?? 0)}%)` }
      }
    )
  }
);
fg.displayName = Bc.displayName;
var Rr = "Radio", [pg, Wc] = ie(Rr), [mg, hg] = pg(Rr), Hc = c.forwardRef(
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
    return /* @__PURE__ */ l.jsxs(mg, { scope: n, checked: r, disabled: a, children: [
      /* @__PURE__ */ l.jsx(
        j.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": r,
          "data-state": Gc(r),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...p,
          ref: v,
          onClick: T(e.onClick, (g) => {
            r || u == null || u(), h && (x.current = g.isPropagationStopped(), x.current || g.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ l.jsx(
        vg,
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
Hc.displayName = Rr;
var Uc = "RadioIndicator", Kc = c.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: o, ...r } = e, s = hg(Uc, n);
    return /* @__PURE__ */ l.jsx(ce, { present: o || s.checked, children: /* @__PURE__ */ l.jsx(
      j.span,
      {
        "data-state": Gc(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    ) });
  }
);
Kc.displayName = Uc;
var vg = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), a = Ft(n), i = Vt(t);
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
function Gc(e) {
  return e ? "checked" : "unchecked";
}
var gg = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Tr = "RadioGroup", [xg, ny] = ie(Tr, [
  Et,
  Wc
]), Yc = Et(), zc = Wc(), [wg, yg] = xg(Tr), Xc = c.forwardRef(
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
    } = e, v = Yc(n), x = Xe(d), [h, g] = fe({
      prop: s,
      defaultProp: r,
      onChange: f
    });
    return /* @__PURE__ */ l.jsx(
      wg,
      {
        scope: n,
        name: o,
        required: a,
        disabled: i,
        value: h,
        onValueChange: g,
        children: /* @__PURE__ */ l.jsx(
          dr,
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
Xc.displayName = Tr;
var qc = "RadioGroupItem", Zc = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: o, ...r } = e, s = yg(qc, n), a = s.disabled || o, i = Yc(n), u = zc(n), d = c.useRef(null), p = H(t, d), f = s.value === r.value, m = c.useRef(!1);
    return c.useEffect(() => {
      const v = (h) => {
        gg.includes(h.key) && (m.current = !0);
      }, x = () => m.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ l.jsx(
      fr,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: f,
        children: /* @__PURE__ */ l.jsx(
          Hc,
          {
            disabled: a,
            required: s.required,
            checked: f,
            ...u,
            ...r,
            name: s.name,
            ref: p,
            onCheck: () => s.onValueChange(r.value),
            onKeyDown: T((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: T(r.onFocus, () => {
              var v;
              m.current && ((v = d.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
Zc.displayName = qc;
var bg = "RadioGroupIndicator", Jc = c.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...o } = e, r = zc(n);
    return /* @__PURE__ */ l.jsx(Kc, { ...r, ...o, ref: t });
  }
);
Jc.displayName = bg;
var Qc = Xc, el = Zc, Cg = Jc;
const Sg = ({
  ...e
}) => /* @__PURE__ */ l.jsx(
  Qc,
  {
    orientation: e.orientation,
    className: A(P + "radio-group"),
    ...e
  }
), tl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  el,
  {
    className: A(P + "radio-group-item", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(
      Cg,
      {
        className: A(P + "radio-group-item-indicator"),
        children: /* @__PURE__ */ l.jsx(ei, { className: A(P + "circle", e), stroke: "none" })
      }
    )
  }
);
tl.displayName = el.displayName;
const Eg = ({ className: e, items: t, ...n }) => /* @__PURE__ */ l.jsx(Sg, { ...n, children: t.map(({ label: o, id: r, ...s }) => /* @__PURE__ */ l.jsxs("div", { className: P + "radio-with-label", children: [
  /* @__PURE__ */ l.jsx(tl, { id: r, ...s, className: e }),
  /* @__PURE__ */ l.jsx(kc, { htmlFor: r, children: o ?? s.value })
] }, s.value)) });
Eg.displayName = Qc.displayName;
function Lt(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Rg = "VisuallyHidden", Kt = c.forwardRef(
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
Kt.displayName = Rg;
var Tg = Kt, Pg = [" ", "Enter", "ArrowUp", "ArrowDown"], Ag = [" ", "Enter"], Gt = "Select", [kn, Ln, Ng] = xt(Gt), [Rt, oy] = ie(Gt, [
  Ng,
  St
]), $n = St(), [_g, Je] = Rt(Gt), [Mg, Dg] = Rt(Gt), nl = (e) => {
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
  } = e, h = $n(t), [g, w] = c.useState(null), [y, C] = c.useState(null), [S, E] = c.useState(!1), N = Xe(d), [R = !1, D] = fe({
    prop: o,
    defaultProp: r,
    onChange: s
  }), [I, O] = fe({
    prop: a,
    defaultProp: i,
    onChange: u
  }), k = c.useRef(null), W = g ? x || !!g.closest("form") : !0, [U, M] = c.useState(/* @__PURE__ */ new Set()), K = Array.from(U).map(($) => $.props.value).join(";");
  return /* @__PURE__ */ l.jsx(In, { ...h, children: /* @__PURE__ */ l.jsxs(
    _g,
    {
      required: v,
      scope: t,
      trigger: g,
      onTriggerChange: w,
      valueNode: y,
      onValueNodeChange: C,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: E,
      contentId: xe(),
      value: I,
      onValueChange: O,
      open: R,
      onOpenChange: D,
      dir: N,
      triggerPointerDownPosRef: k,
      disabled: m,
      children: [
        /* @__PURE__ */ l.jsx(kn.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
          Mg,
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
          Al,
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
nl.displayName = Gt;
var ol = "SelectTrigger", rl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: o = !1, ...r } = e, s = $n(n), a = Je(ol, n), i = a.disabled || o, u = H(t, a.onTriggerChange), d = Ln(n), p = c.useRef("touch"), [f, m, v] = Nl((h) => {
      const g = d().filter((C) => !C.disabled), w = g.find((C) => C.value === a.value), y = _l(g, h, w);
      y !== void 0 && a.onValueChange(y.value);
    }), x = (h) => {
      i || (a.onOpenChange(!0), v()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ l.jsx(cr, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
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
        "data-placeholder": Pl(a.value) ? "" : void 0,
        ...r,
        ref: u,
        onClick: T(r.onClick, (h) => {
          h.currentTarget.focus(), p.current !== "mouse" && x(h);
        }),
        onPointerDown: T(r.onPointerDown, (h) => {
          p.current = h.pointerType;
          const g = h.target;
          g.hasPointerCapture(h.pointerId) && g.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (x(h), h.preventDefault());
        }),
        onKeyDown: T(r.onKeyDown, (h) => {
          const g = f.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(g && h.key === " ") && Pg.includes(h.key) && (x(), h.preventDefault());
        })
      }
    ) });
  }
);
rl.displayName = ol;
var sl = "SelectValue", al = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, children: s, placeholder: a = "", ...i } = e, u = Je(sl, n), { onValueNodeHasChildrenChange: d } = u, p = s !== void 0, f = H(t, u.onValueNodeChange);
    return ue(() => {
      d(p);
    }, [d, p]), /* @__PURE__ */ l.jsx(
      j.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: Pl(u.value) ? /* @__PURE__ */ l.jsx(l.Fragment, { children: a }) : s
      }
    );
  }
);
al.displayName = sl;
var Ig = "SelectIcon", il = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: o, ...r } = e;
    return /* @__PURE__ */ l.jsx(j.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
  }
);
il.displayName = Ig;
var jg = "SelectPortal", cl = (e) => /* @__PURE__ */ l.jsx(yt, { asChild: !0, ...e });
cl.displayName = jg;
var at = "SelectContent", ll = c.forwardRef(
  (e, t) => {
    const n = Je(at, e.__scopeSelect), [o, r] = c.useState();
    if (ue(() => {
      r(new DocumentFragment());
    }, []), !n.open) {
      const s = o;
      return s ? $t.createPortal(
        /* @__PURE__ */ l.jsx(ul, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx(kn.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ l.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ l.jsx(dl, { ...e, ref: t });
  }
);
ll.displayName = at;
var Re = 10, [ul, Qe] = Rt(at), Og = "SelectContentImpl", dl = c.forwardRef(
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
    } = e, y = Je(at, n), [C, S] = c.useState(null), [E, N] = c.useState(null), R = H(t, (B) => S(B)), [D, I] = c.useState(null), [O, k] = c.useState(
      null
    ), W = Ln(n), [U, M] = c.useState(!1), K = c.useRef(!1);
    c.useEffect(() => {
      if (C) return Wo(C);
    }, [C]), Bo();
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
    const [z, ee] = Nl((B) => {
      const Z = W().filter((J) => !J.disabled), te = Z.find((J) => J.ref.current === document.activeElement), X = _l(Z, B, te);
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
    ), Ce = o === "popper" ? go : fl, pe = Ce === go ? {
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
      ul,
      {
        scope: n,
        content: C,
        viewport: E,
        onViewportChange: N,
        itemRefCallback: se,
        selectedItem: D,
        onItemLeave: le,
        itemTextRefCallback: re,
        focusSelectedItem: G,
        selectedItemText: O,
        position: o,
        isPositioned: U,
        searchRef: z,
        children: /* @__PURE__ */ l.jsx(An, { as: ot, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
          Tn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (B) => {
              B.preventDefault();
            },
            onUnmountAutoFocus: T(r, (B) => {
              var Z;
              (Z = y.trigger) == null || Z.focus({ preventScroll: !0 }), B.preventDefault();
            }),
            children: /* @__PURE__ */ l.jsx(
              wt,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (B) => B.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ l.jsx(
                  Ce,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (B) => B.preventDefault(),
                    ...w,
                    ...pe,
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
                    onKeyDown: T(w.onKeyDown, (B) => {
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
dl.displayName = Og;
var kg = "SelectItemAlignedPosition", fl = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, s = Je(at, n), a = Qe(at, n), [i, u] = c.useState(null), [d, p] = c.useState(null), f = H(t, (R) => p(R)), m = Ln(n), v = c.useRef(!1), x = c.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: w, focusSelectedItem: y } = a, C = c.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && h && g && w) {
      const R = s.trigger.getBoundingClientRect(), D = d.getBoundingClientRect(), I = s.valueNode.getBoundingClientRect(), O = w.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const J = O.left - D.left, q = I.left - J, me = R.left - q, we = R.width + me, je = Math.max(we, D.width), et = window.innerWidth - Re, Be = Lt(q, [
          Re,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Re, et - je)
        ]);
        i.style.minWidth = we + "px", i.style.left = Be + "px";
      } else {
        const J = D.right - O.right, q = window.innerWidth - I.right - J, me = window.innerWidth - R.right - q, we = R.width + me, je = Math.max(we, D.width), et = window.innerWidth - Re, Be = Lt(q, [
          Re,
          Math.max(Re, et - je)
        ]);
        i.style.minWidth = we + "px", i.style.right = Be + "px";
      }
      const k = m(), W = window.innerHeight - Re * 2, U = h.scrollHeight, M = window.getComputedStyle(d), K = parseInt(M.borderTopWidth, 10), $ = parseInt(M.paddingTop, 10), G = parseInt(M.borderBottomWidth, 10), L = parseInt(M.paddingBottom, 10), _ = K + $ + U + L + G, z = Math.min(g.offsetHeight * 5, _), ee = window.getComputedStyle(h), se = parseInt(ee.paddingTop, 10), le = parseInt(ee.paddingBottom, 10), re = R.top + R.height / 2 - Re, Ce = W - re, pe = g.offsetHeight / 2, B = g.offsetTop + pe, Z = K + $ + B, te = _ - Z;
      if (Z <= re) {
        const J = k.length > 0 && g === k[k.length - 1].ref.current;
        i.style.bottom = "0px";
        const q = d.clientHeight - h.offsetTop - h.offsetHeight, me = Math.max(
          Ce,
          pe + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (J ? le : 0) + q + G
        ), we = Z + me;
        i.style.height = we + "px";
      } else {
        const J = k.length > 0 && g === k[0].ref.current;
        i.style.top = "0px";
        const me = Math.max(
          re,
          K + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (J ? se : 0) + pe
        ) + te;
        i.style.height = me + "px", h.scrollTop = Z - re + h.offsetTop;
      }
      i.style.margin = `${Re}px 0`, i.style.minHeight = z + "px", i.style.maxHeight = W + "px", o == null || o(), requestAnimationFrame(() => v.current = !0);
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
  const N = c.useCallback(
    (R) => {
      R && x.current === !0 && (C(), y == null || y(), x.current = !1);
    },
    [C, y]
  );
  return /* @__PURE__ */ l.jsx(
    $g,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: N,
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
fl.displayName = kg;
var Lg = "SelectPopperPosition", go = c.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: o = "start",
    collisionPadding: r = Re,
    ...s
  } = e, a = $n(n);
  return /* @__PURE__ */ l.jsx(
    lr,
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
go.displayName = Lg;
var [$g, Pr] = Rt(at, {}), xo = "SelectViewport", pl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: o, ...r } = e, s = Qe(xo, n), a = Pr(xo, n), i = H(t, s.onViewportChange), u = c.useRef(0);
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
      /* @__PURE__ */ l.jsx(kn.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
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
          onScroll: T(r.onScroll, (d) => {
            const p = d.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: m } = a;
            if (m != null && m.current && f) {
              const v = Math.abs(u.current - p.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Re * 2, h = parseFloat(f.style.minHeight), g = parseFloat(f.style.height), w = Math.max(h, g);
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
pl.displayName = xo;
var ml = "SelectGroup", [Fg, Vg] = Rt(ml), hl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = xe();
    return /* @__PURE__ */ l.jsx(Fg, { scope: n, id: r, children: /* @__PURE__ */ l.jsx(j.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
  }
);
hl.displayName = ml;
var vl = "SelectLabel", gl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = Vg(vl, n);
    return /* @__PURE__ */ l.jsx(j.div, { id: r.id, ...o, ref: t });
  }
);
gl.displayName = vl;
var yn = "SelectItem", [Bg, xl] = Rt(yn), wl = c.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: o,
      disabled: r = !1,
      textValue: s,
      ...a
    } = e, i = Je(yn, n), u = Qe(yn, n), d = i.value === o, [p, f] = c.useState(s ?? ""), [m, v] = c.useState(!1), x = H(
      t,
      (y) => {
        var C;
        return (C = u.itemRefCallback) == null ? void 0 : C.call(u, y, o, r);
      }
    ), h = xe(), g = c.useRef("touch"), w = () => {
      r || (i.onValueChange(o), i.onOpenChange(!1));
    };
    if (o === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ l.jsx(
      Bg,
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
          kn.ItemSlot,
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
                onFocus: T(a.onFocus, () => v(!0)),
                onBlur: T(a.onBlur, () => v(!1)),
                onClick: T(a.onClick, () => {
                  g.current !== "mouse" && w();
                }),
                onPointerUp: T(a.onPointerUp, () => {
                  g.current === "mouse" && w();
                }),
                onPointerDown: T(a.onPointerDown, (y) => {
                  g.current = y.pointerType;
                }),
                onPointerMove: T(a.onPointerMove, (y) => {
                  var C;
                  g.current = y.pointerType, r ? (C = u.onItemLeave) == null || C.call(u) : g.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: T(a.onPointerLeave, (y) => {
                  var C;
                  y.currentTarget === document.activeElement && ((C = u.onItemLeave) == null || C.call(u));
                }),
                onKeyDown: T(a.onKeyDown, (y) => {
                  var S;
                  ((S = u.searchRef) == null ? void 0 : S.current) !== "" && y.key === " " || (Ag.includes(y.key) && w(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
wl.displayName = yn;
var Mt = "SelectItemText", yl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: o, style: r, ...s } = e, a = Je(Mt, n), i = Qe(Mt, n), u = xl(Mt, n), d = Dg(Mt, n), [p, f] = c.useState(null), m = H(
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
      u.isSelected && a.valueNode && !a.valueNodeHasChildren ? $t.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
yl.displayName = Mt;
var bl = "SelectItemIndicator", Cl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return xl(bl, n).isSelected ? /* @__PURE__ */ l.jsx(j.span, { "aria-hidden": !0, ...o, ref: t }) : null;
  }
);
Cl.displayName = bl;
var wo = "SelectScrollUpButton", Sl = c.forwardRef((e, t) => {
  const n = Qe(wo, e.__scopeSelect), o = Pr(wo, e.__scopeSelect), [r, s] = c.useState(!1), a = H(t, o.onScrollButtonChange);
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
    Rl,
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
Sl.displayName = wo;
var yo = "SelectScrollDownButton", El = c.forwardRef((e, t) => {
  const n = Qe(yo, e.__scopeSelect), o = Pr(yo, e.__scopeSelect), [r, s] = c.useState(!1), a = H(t, o.onScrollButtonChange);
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
    Rl,
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
El.displayName = yo;
var Rl = c.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, s = Qe("SelectScrollButton", n), a = c.useRef(null), i = Ln(n), u = c.useCallback(() => {
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
      onPointerDown: T(r.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerMove: T(r.onPointerMove, () => {
        var d;
        (d = s.onItemLeave) == null || d.call(s), a.current === null && (a.current = window.setInterval(o, 50));
      }),
      onPointerLeave: T(r.onPointerLeave, () => {
        u();
      })
    }
  );
}), Wg = "SelectSeparator", Tl = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { "aria-hidden": !0, ...o, ref: t });
  }
);
Tl.displayName = Wg;
var bo = "SelectArrow", Hg = c.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...o } = e, r = $n(n), s = Je(bo, n), a = Qe(bo, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ l.jsx(ur, { ...r, ...o, ref: t }) : null;
  }
);
Hg.displayName = bo;
function Pl(e) {
  return e === "" || e === void 0;
}
var Al = c.forwardRef(
  (e, t) => {
    const { value: n, ...o } = e, r = c.useRef(null), s = H(t, r), a = Ft(n);
    return c.useEffect(() => {
      const i = r.current, u = window.HTMLSelectElement.prototype, p = Object.getOwnPropertyDescriptor(
        u,
        "value"
      ).set;
      if (a !== n && p) {
        const f = new Event("change", { bubbles: !0 });
        p.call(i, n), i.dispatchEvent(f);
      }
    }, [a, n]), /* @__PURE__ */ l.jsx(Kt, { asChild: !0, children: /* @__PURE__ */ l.jsx("select", { ...o, ref: s, defaultValue: n }) });
  }
);
Al.displayName = "BubbleSelect";
function Nl(e) {
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
function _l(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = Ug(e, Math.max(s, 0));
  r.length === 1 && (a = a.filter((d) => d !== n));
  const u = a.find(
    (d) => d.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function Ug(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
var Kg = nl, Ml = rl, Dl = al, Gg = il, Yg = cl, Il = ll, zg = pl, jl = gl, Ol = wl, kl = yl, Ll = Cl, Xg = Sl, qg = El, $l = Tl;
const Zg = Kg, Jg = Yg, Qg = Xg, ex = qg, Fl = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Ll,
  {
    className: A(P + "select-item-indicator", t),
    ...n,
    children: e
  }
);
Fl.displayName = Ll.displayName;
const Vl = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsxs(
  Ml,
  {
    className: A(P + "select-trigger", t),
    ...n,
    children: [
      e,
      /* @__PURE__ */ l.jsx(Gg, { className: A(P + "select-icon"), children: /* @__PURE__ */ l.jsx(Ja, { style: { width: "16px", height: "16px" } }) })
    ]
  }
);
Vl.displayName = Ml.displayName;
const Bl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Dl,
  {
    className: A(P + "select-value", e),
    ...t
  }
);
Bl.displayName = Dl.displayName;
const Co = ({
  children: e,
  position: t = "popper",
  className: n,
  ...o
}) => /* @__PURE__ */ l.jsxs(
  Il,
  {
    className: A(P + "select-content", n),
    position: t,
    sideOffset: 4,
    ...o,
    children: [
      /* @__PURE__ */ l.jsx(Qg, { className: A(P + "select-scroll-up-button"), children: /* @__PURE__ */ l.jsx(lm, {}) }),
      /* @__PURE__ */ l.jsx(
        zg,
        {
          className: A(
            P + "select-primitive-viewport",
            t === "popper" ? P + "select-primitive-viewport-popper" : null,
            n
          ),
          children: e
        }
      ),
      /* @__PURE__ */ l.jsx(
        ex,
        {
          className: A(P + "select-scroll-down-button"),
          children: /* @__PURE__ */ l.jsx(Ja, {})
        }
      )
    ]
  }
);
Co.displayName = Il.displayName;
const Wl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  jl,
  {
    className: A(P + "select-label", e),
    ...t
  }
);
Wl.displayName = jl.displayName;
const Hl = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsxs(
  Ol,
  {
    className: A(P + "select-item", t),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(Fl, { children: /* @__PURE__ */ l.jsx(Jo, {}) }),
      e
    ]
  }
);
Hl.displayName = Ol.displayName;
const Ul = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(kl, { ...n, children: /* @__PURE__ */ l.jsx("div", { className: A(P + "select-item-text", t), children: e }) });
Ul.displayName = kl.displayName;
const Kl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  $l,
  {
    className: A(P + "select-separator", e),
    ...t
  }
);
Kl.displayName = $l.displayName;
const tx = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  hl,
  {
    className: A(P + "select-group", e),
    ...n,
    children: t
  }
), nx = ({
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
  Zg,
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
      /* @__PURE__ */ l.jsx(Vl, { style: { width: x }, children: /* @__PURE__ */ l.jsx(Bl, { placeholder: v }) }),
      h ? /* @__PURE__ */ l.jsx(Jg, { children: /* @__PURE__ */ l.jsx(Co, { style: { width: x }, ...g, children: m }) }) : /* @__PURE__ */ l.jsx(Co, { style: { width: x }, ...g, children: m })
    ]
  }
), ry = ({
  groups: e,
  ...t
}) => /* @__PURE__ */ l.jsx(nx, { ...t, children: e.map(({ label: n, items: o }, r) => /* @__PURE__ */ l.jsxs(c.Fragment, { children: [
  /* @__PURE__ */ l.jsxs(tx, { children: [
    n && /* @__PURE__ */ l.jsx(Wl, { children: n }),
    o.map((s) => /* @__PURE__ */ Ke(Hl, { ...s, key: s.value }, /* @__PURE__ */ l.jsx(Ul, { children: s.text })))
  ] }),
  /* @__PURE__ */ l.jsx(Kl, {})
] }, `group-${r}`)) });
function ox(e, t) {
  return c.useReducer((n, o) => t[n][o] ?? n, e);
}
var Ar = "ScrollArea", [Gl, sy] = ie(Ar), [rx, Ee] = Gl(Ar), Yl = c.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: o = "hover",
      dir: r,
      scrollHideDelay: s = 600,
      ...a
    } = e, [i, u] = c.useState(null), [d, p] = c.useState(null), [f, m] = c.useState(null), [v, x] = c.useState(null), [h, g] = c.useState(null), [w, y] = c.useState(0), [C, S] = c.useState(0), [E, N] = c.useState(!1), [R, D] = c.useState(!1), I = H(t, (k) => u(k)), O = Xe(r);
    return /* @__PURE__ */ l.jsx(
      rx,
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
        onScrollbarXEnabledChange: N,
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
Yl.displayName = Ar;
var zl = "ScrollAreaViewport", Xl = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: o, nonce: r, ...s } = e, a = Ee(zl, n), i = c.useRef(null), u = H(t, i, a.onViewportChange);
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
Xl.displayName = zl;
var Ie = "ScrollAreaScrollbar", Nr = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Ee(Ie, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = r, i = e.orientation === "horizontal";
    return c.useEffect(() => (i ? s(!0) : a(!0), () => {
      i ? s(!1) : a(!1);
    }), [i, s, a]), r.type === "hover" ? /* @__PURE__ */ l.jsx(sx, { ...o, ref: t, forceMount: n }) : r.type === "scroll" ? /* @__PURE__ */ l.jsx(ax, { ...o, ref: t, forceMount: n }) : r.type === "auto" ? /* @__PURE__ */ l.jsx(ql, { ...o, ref: t, forceMount: n }) : r.type === "always" ? /* @__PURE__ */ l.jsx(_r, { ...o, ref: t }) : null;
  }
);
Nr.displayName = Ie;
var sx = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = Ee(Ie, e.__scopeScrollArea), [s, a] = c.useState(!1);
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
    ql,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), ax = c.forwardRef((e, t) => {
  const { forceMount: n, ...o } = e, r = Ee(Ie, e.__scopeScrollArea), s = e.orientation === "horizontal", a = Vn(() => u("SCROLL_END"), 100), [i, u] = ox("hidden", {
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
    _r,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...o,
      ref: t,
      onPointerEnter: T(e.onPointerEnter, () => u("POINTER_ENTER")),
      onPointerLeave: T(e.onPointerLeave, () => u("POINTER_LEAVE"))
    }
  ) });
}), ql = c.forwardRef((e, t) => {
  const n = Ee(Ie, e.__scopeScrollArea), { forceMount: o, ...r } = e, [s, a] = c.useState(!1), i = e.orientation === "horizontal", u = Vn(() => {
    if (n.viewport) {
      const d = n.viewport.offsetWidth < n.viewport.scrollWidth, p = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(i ? d : p);
    }
  }, 10);
  return vt(n.viewport, u), vt(n.content, u), /* @__PURE__ */ l.jsx(ce, { present: o || s, children: /* @__PURE__ */ l.jsx(
    _r,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), _r = c.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...o } = e, r = Ee(Ie, e.__scopeScrollArea), s = c.useRef(null), a = c.useRef(0), [i, u] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = tu(i.viewport, i.content), p = {
    ...o,
    sizes: i,
    onSizesChange: u,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (m) => s.current = m,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (m) => a.current = m
  };
  function f(m, v) {
    return fx(m, a.current, i, v);
  }
  return n === "horizontal" ? /* @__PURE__ */ l.jsx(
    ix,
    {
      ...p,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && s.current) {
          const m = r.viewport.scrollLeft, v = xs(m, i, r.dir);
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
    cx,
    {
      ...p,
      ref: t,
      onThumbPositionChange: () => {
        if (r.viewport && s.current) {
          const m = r.viewport.scrollTop, v = xs(m, i);
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
}), ix = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, s = Ee(Ie, e.__scopeScrollArea), [a, i] = c.useState(), u = c.useRef(null), d = H(t, u, s.onScrollbarXChange);
  return c.useEffect(() => {
    u.current && i(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ l.jsx(
    Jl,
    {
      "data-orientation": "horizontal",
      ...r,
      ref: d,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Fn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (p) => e.onThumbPointerDown(p.x),
      onDragScroll: (p) => e.onDragScroll(p.x),
      onWheelScroll: (p, f) => {
        if (s.viewport) {
          const m = s.viewport.scrollLeft + p.deltaX;
          e.onWheelScroll(m), ou(m, f) && p.preventDefault();
        }
      },
      onResize: () => {
        u.current && s.viewport && a && o({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: u.current.clientWidth,
            paddingStart: Cn(a.paddingLeft),
            paddingEnd: Cn(a.paddingRight)
          }
        });
      }
    }
  );
}), cx = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, s = Ee(Ie, e.__scopeScrollArea), [a, i] = c.useState(), u = c.useRef(null), d = H(t, u, s.onScrollbarYChange);
  return c.useEffect(() => {
    u.current && i(getComputedStyle(u.current));
  }, [u]), /* @__PURE__ */ l.jsx(
    Jl,
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
        "--radix-scroll-area-thumb-height": Fn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (p) => e.onThumbPointerDown(p.y),
      onDragScroll: (p) => e.onDragScroll(p.y),
      onWheelScroll: (p, f) => {
        if (s.viewport) {
          const m = s.viewport.scrollTop + p.deltaY;
          e.onWheelScroll(m), ou(m, f) && p.preventDefault();
        }
      },
      onResize: () => {
        u.current && s.viewport && a && o({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: u.current.clientHeight,
            paddingStart: Cn(a.paddingTop),
            paddingEnd: Cn(a.paddingBottom)
          }
        });
      }
    }
  );
}), [lx, Zl] = Gl(Ie), Jl = c.forwardRef((e, t) => {
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
  } = e, v = Ee(Ie, n), [x, h] = c.useState(null), g = H(t, (I) => h(I)), w = c.useRef(null), y = c.useRef(""), C = v.viewport, S = o.content - o.viewport, E = ne(p), N = ne(u), R = Vn(f, 10);
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
  }, [C, x, S, E]), c.useEffect(N, [o, N]), vt(x, R), vt(v.content, R), /* @__PURE__ */ l.jsx(
    lx,
    {
      scope: n,
      scrollbar: x,
      hasThumb: r,
      onThumbChange: ne(s),
      onThumbPointerUp: ne(a),
      onThumbPositionChange: N,
      onThumbPointerDown: ne(i),
      children: /* @__PURE__ */ l.jsx(
        j.div,
        {
          ...m,
          ref: g,
          style: { position: "absolute", ...m.style },
          onPointerDown: T(e.onPointerDown, (I) => {
            I.button === 0 && (I.target.setPointerCapture(I.pointerId), w.current = x.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), D(I));
          }),
          onPointerMove: T(e.onPointerMove, D),
          onPointerUp: T(e.onPointerUp, (I) => {
            const O = I.target;
            O.hasPointerCapture(I.pointerId) && O.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = y.current, v.viewport && (v.viewport.style.scrollBehavior = ""), w.current = null;
          })
        }
      )
    }
  );
}), bn = "ScrollAreaThumb", Ql = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...o } = e, r = Zl(bn, e.__scopeScrollArea);
    return /* @__PURE__ */ l.jsx(ce, { present: n || r.hasThumb, children: /* @__PURE__ */ l.jsx(ux, { ref: t, ...o }) });
  }
), ux = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: o, ...r } = e, s = Ee(bn, n), a = Zl(bn, n), { onThumbPositionChange: i } = a, u = H(
      t,
      (f) => a.onThumbChange(f)
    ), d = c.useRef(void 0), p = Vn(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return c.useEffect(() => {
      const f = s.viewport;
      if (f) {
        const m = () => {
          if (p(), !d.current) {
            const v = px(f, i);
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
        onPointerDownCapture: T(e.onPointerDownCapture, (f) => {
          const v = f.target.getBoundingClientRect(), x = f.clientX - v.left, h = f.clientY - v.top;
          a.onThumbPointerDown({ x, y: h });
        }),
        onPointerUp: T(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
Ql.displayName = bn;
var Mr = "ScrollAreaCorner", eu = c.forwardRef(
  (e, t) => {
    const n = Ee(Mr, e.__scopeScrollArea), o = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && o ? /* @__PURE__ */ l.jsx(dx, { ...e, ref: t }) : null;
  }
);
eu.displayName = Mr;
var dx = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...o } = e, r = Ee(Mr, n), [s, a] = c.useState(0), [i, u] = c.useState(0), d = !!(s && i);
  return vt(r.scrollbarX, () => {
    var f;
    const p = ((f = r.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    r.onCornerHeightChange(p), u(p);
  }), vt(r.scrollbarY, () => {
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
function Cn(e) {
  return e ? parseInt(e, 10) : 0;
}
function tu(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Fn(e) {
  const t = tu(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function fx(e, t, n, o = "ltr") {
  const r = Fn(n), s = r / 2, a = t || s, i = r - a, u = n.scrollbar.paddingStart + a, d = n.scrollbar.size - n.scrollbar.paddingEnd - i, p = n.content - n.viewport, f = o === "ltr" ? [0, p] : [p * -1, 0];
  return nu([u, d], f)(e);
}
function xs(e, t, n = "ltr") {
  const o = Fn(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - r, a = t.content - t.viewport, i = s - o, u = n === "ltr" ? [0, a] : [a * -1, 0], d = Lt(e, u);
  return nu([0, a], [0, i])(d);
}
function nu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function ou(e, t) {
  return e > 0 && e < t;
}
var px = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, o = 0;
  return function r() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== s.left, i = n.top !== s.top;
    (a || i) && t(), n = s, o = window.requestAnimationFrame(r);
  }(), () => window.cancelAnimationFrame(o);
};
function Vn(e, t) {
  const n = ne(e), o = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(o.current), []), c.useCallback(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [n, t]);
}
function vt(e, t) {
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
var ru = Yl, mx = Xl, hx = eu;
const vx = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsxs(
  ru,
  {
    className: A(P + "scroll-area", t),
    ...n,
    children: [
      /* @__PURE__ */ l.jsx(
        mx,
        {
          className: A(P + "scroll-area-viewport", t),
          children: e
        }
      ),
      /* @__PURE__ */ l.jsx(su, {}),
      /* @__PURE__ */ l.jsx(hx, {})
    ]
  }
);
vx.displayName = ru.displayName;
const su = ({
  orientation: e = "vertical",
  className: t,
  ...n
}) => /* @__PURE__ */ l.jsx(
  Nr,
  {
    orientation: e,
    className: A(
      P + "scroll-bar",
      e === "vertical" ? P + "scroll-bar-vertical" : P + "scroll-bar-horizontal",
      t
    ),
    ...n,
    children: /* @__PURE__ */ l.jsx(
      Ql,
      {
        className: P + "scroll-bar-thumb"
      }
    )
  }
);
su.displayName = Nr.displayName;
var gx = "Separator", ws = "horizontal", xx = ["horizontal", "vertical"], au = c.forwardRef((e, t) => {
  const { decorative: n, orientation: o = ws, ...r } = e, s = wx(o) ? o : ws, i = n ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
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
au.displayName = gx;
function wx(e) {
  return xx.includes(e);
}
var iu = au;
const cu = ({
  className: e,
  orientation: t = "horizontal",
  decorative: n = !0,
  ...o
}) => /* @__PURE__ */ l.jsx(
  iu,
  {
    decorative: n,
    orientation: t,
    className: A(
      P + "separator",
      P + "separator-" + t,
      e
    ),
    ...o
  }
);
cu.displayName = iu.displayName;
var lu = ["PageUp", "PageDown"], uu = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], du = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Tt = "Slider", [So, yx, bx] = xt(Tt), [fu, ay] = ie(Tt, [
  bx
]), [Cx, Bn] = fu(Tt), pu = c.forwardRef(
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
    } = e, g = c.useRef(/* @__PURE__ */ new Set()), w = c.useRef(0), C = a === "horizontal" ? Sx : Ex, [S = [], E] = fe({
      prop: p,
      defaultProp: d,
      onChange: (k) => {
        var U;
        (U = [...g.current][w.current]) == null || U.focus(), f(k);
      }
    }), N = c.useRef(S);
    function R(k) {
      const W = Nx(S, k);
      O(k, W);
    }
    function D(k) {
      O(k, w.current);
    }
    function I() {
      const k = N.current[w.current];
      S[w.current] !== k && m(S);
    }
    function O(k, W, { commit: U } = { commit: !1 }) {
      const M = Ix(s), K = jx(Math.round((k - o) / s) * s + o, M), $ = Lt(K, [o, r]);
      E((G = []) => {
        const L = Px(G, $, W);
        if (Dx(L, u * s)) {
          w.current = L.indexOf($);
          const _ = String(L) !== String(G);
          return _ && U && m(L), _ ? L : G;
        } else
          return G;
      });
    }
    return /* @__PURE__ */ l.jsx(
      Cx,
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
        children: /* @__PURE__ */ l.jsx(So.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ l.jsx(So.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ l.jsx(
          C,
          {
            "aria-disabled": i,
            "data-disabled": i ? "" : void 0,
            ...h,
            ref: t,
            onPointerDown: T(h.onPointerDown, () => {
              i || (N.current = S);
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
                const K = lu.includes(k.key) || k.shiftKey && uu.includes(k.key) ? 10 : 1, $ = w.current, G = S[$], L = s * K * W;
                O(G + L, $, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
pu.displayName = Tt;
var [mu, hu] = fu(Tt, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), Sx = c.forwardRef(
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
    } = e, [f, m] = c.useState(null), v = H(t, (C) => m(C)), x = c.useRef(void 0), h = Xe(r), g = h === "ltr", w = g && !s || !g && s;
    function y(C) {
      const S = x.current || f.getBoundingClientRect(), E = [0, S.width], R = Dr(E, w ? [n, o] : [o, n]);
      return x.current = S, R(C - S.left);
    }
    return /* @__PURE__ */ l.jsx(
      mu,
      {
        scope: e.__scopeSlider,
        startEdge: w ? "left" : "right",
        endEdge: w ? "right" : "left",
        direction: w ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ l.jsx(
          vu,
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
              const E = du[w ? "from-left" : "from-right"].includes(C.key);
              d == null || d({ event: C, direction: E ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Ex = c.forwardRef(
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
      const g = m.current || p.current.getBoundingClientRect(), w = [0, g.height], C = Dr(w, v ? [o, n] : [n, o]);
      return m.current = g, C(h - g.top);
    }
    return /* @__PURE__ */ l.jsx(
      mu,
      {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ l.jsx(
          vu,
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
              const w = du[v ? "from-bottom" : "from-top"].includes(h.key);
              u == null || u({ event: h, direction: w ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), vu = c.forwardRef(
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
    } = e, p = Bn(Tt, n);
    return /* @__PURE__ */ l.jsx(
      j.span,
      {
        ...d,
        ref: t,
        onKeyDown: T(e.onKeyDown, (f) => {
          f.key === "Home" ? (a(f), f.preventDefault()) : f.key === "End" ? (i(f), f.preventDefault()) : lu.concat(uu).includes(f.key) && (u(f), f.preventDefault());
        }),
        onPointerDown: T(e.onPointerDown, (f) => {
          const m = f.target;
          m.setPointerCapture(f.pointerId), f.preventDefault(), p.thumbs.has(m) ? m.focus() : o(f);
        }),
        onPointerMove: T(e.onPointerMove, (f) => {
          f.target.hasPointerCapture(f.pointerId) && r(f);
        }),
        onPointerUp: T(e.onPointerUp, (f) => {
          const m = f.target;
          m.hasPointerCapture(f.pointerId) && (m.releasePointerCapture(f.pointerId), s(f));
        })
      }
    );
  }
), gu = "SliderTrack", xu = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, r = Bn(gu, n);
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
xu.displayName = gu;
var Eo = "SliderRange", wu = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...o } = e, r = Bn(Eo, n), s = hu(Eo, n), a = c.useRef(null), i = H(t, a), u = r.values.length, d = r.values.map(
      (m) => bu(m, r.min, r.max)
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
wu.displayName = Eo;
var Ro = "SliderThumb", yu = c.forwardRef(
  (e, t) => {
    const n = yx(e.__scopeSlider), [o, r] = c.useState(null), s = H(t, (i) => r(i)), a = c.useMemo(
      () => o ? n().findIndex((i) => i.ref.current === o) : -1,
      [n, o]
    );
    return /* @__PURE__ */ l.jsx(Rx, { ...e, ref: s, index: a });
  }
), Rx = c.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: o, name: r, ...s } = e, a = Bn(Ro, n), i = hu(Ro, n), [u, d] = c.useState(null), p = H(t, (y) => d(y)), f = u ? a.form || !!u.closest("form") : !0, m = Vt(u), v = a.values[o], x = v === void 0 ? 0 : bu(v, a.min, a.max), h = Ax(o, a.values.length), g = m == null ? void 0 : m[i.size], w = g ? _x(g, x, i.direction) : 0;
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
          /* @__PURE__ */ l.jsx(So.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ l.jsx(
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
              onFocus: T(e.onFocus, () => {
                a.valueIndexToChangeRef.current = o;
              })
            }
          ) }),
          f && /* @__PURE__ */ l.jsx(
            Tx,
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
yu.displayName = Ro;
var Tx = (e) => {
  const { value: t, ...n } = e, o = c.useRef(null), r = Ft(t);
  return c.useEffect(() => {
    const s = o.current, a = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(a, "value").set;
    if (r !== t && u) {
      const d = new Event("input", { bubbles: !0 });
      u.call(s, t), s.dispatchEvent(d);
    }
  }, [r, t]), /* @__PURE__ */ l.jsx("input", { style: { display: "none" }, ...n, ref: o, defaultValue: t });
};
function Px(e = [], t, n) {
  const o = [...e];
  return o[n] = t, o.sort((r, s) => r - s);
}
function bu(e, t, n) {
  const s = 100 / (n - t) * (e - t);
  return Lt(s, [0, 100]);
}
function Ax(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function Nx(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((r) => Math.abs(r - t)), o = Math.min(...n);
  return n.indexOf(o);
}
function _x(e, t, n) {
  const o = e / 2, s = Dr([0, 50], [0, o]);
  return (o - s(t) * n) * n;
}
function Mx(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function Dx(e, t) {
  if (t > 0) {
    const n = Mx(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function Dr(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Ix(e) {
  return (String(e).split(".")[1] || "").length;
}
function jx(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Cu = pu, Ox = xu, kx = wu, Lx = yu;
const $x = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsxs(
  Cu,
  {
    className: A(P + "slider", e),
    ...t,
    "data-disabled": t.disabled,
    children: [
      /* @__PURE__ */ l.jsx(
        Ox,
        {
          className: A(P + "slider-track"),
          "data-disabled": t.disabled,
          children: /* @__PURE__ */ l.jsx(kx, { className: A(P + "slider-range") })
        }
      ),
      /* @__PURE__ */ l.jsx(Lx, { className: A(P + "slider-thumb") })
    ]
  }
);
$x.displayName = Cu.displayName;
var Ir = "Switch", [Fx, iy] = ie(Ir), [Vx, Bx] = Fx(Ir), Su = c.forwardRef(
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
    } = e, [m, v] = c.useState(null), x = H(t, (C) => v(C)), h = c.useRef(!1), g = m ? p || !!m.closest("form") : !0, [w = !1, y] = fe({
      prop: r,
      defaultProp: s,
      onChange: d
    });
    return /* @__PURE__ */ l.jsxs(Vx, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ l.jsx(
        j.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": a,
          "data-state": Tu(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: u,
          ...f,
          ref: x,
          onClick: T(e.onClick, (C) => {
            y((S) => !S), g && (h.current = C.isPropagationStopped(), h.current || C.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ l.jsx(
        Wx,
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
Su.displayName = Ir;
var Eu = "SwitchThumb", Ru = c.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...o } = e, r = Bx(Eu, n);
    return /* @__PURE__ */ l.jsx(
      j.span,
      {
        "data-state": Tu(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    );
  }
);
Ru.displayName = Eu;
var Wx = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, s = c.useRef(null), a = Ft(n), i = Vt(t);
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
function Tu(e) {
  return e ? "checked" : "unchecked";
}
var Pu = Su, Hx = Ru;
const Ux = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Pu,
  {
    className: A(P + "switch", e),
    ...t,
    children: /* @__PURE__ */ l.jsx(Hx, { className: A(P + "switch-thumb") })
  }
);
Ux.displayName = Pu.displayName;
var jr = "Tabs", [Kx, cy] = ie(jr, [
  Et
]), Au = Et(), [Gx, Or] = Kx(jr), Nu = c.forwardRef(
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
    } = e, p = Xe(i), [f, m] = fe({
      prop: o,
      onChange: r,
      defaultProp: s
    });
    return /* @__PURE__ */ l.jsx(
      Gx,
      {
        scope: n,
        baseId: xe(),
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
Nu.displayName = jr;
var _u = "TabsList", Mu = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: o = !0, ...r } = e, s = Or(_u, n), a = Au(n);
    return /* @__PURE__ */ l.jsx(
      dr,
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
Mu.displayName = _u;
var Du = "TabsTrigger", Iu = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, disabled: r = !1, ...s } = e, a = Or(Du, n), i = Au(n), u = ku(a.baseId, o), d = Lu(a.baseId, o), p = o === a.value;
    return /* @__PURE__ */ l.jsx(
      fr,
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
            onMouseDown: T(e.onMouseDown, (f) => {
              !r && f.button === 0 && f.ctrlKey === !1 ? a.onValueChange(o) : f.preventDefault();
            }),
            onKeyDown: T(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && a.onValueChange(o);
            }),
            onFocus: T(e.onFocus, () => {
              const f = a.activationMode !== "manual";
              !p && !r && f && a.onValueChange(o);
            })
          }
        )
      }
    );
  }
);
Iu.displayName = Du;
var ju = "TabsContent", Ou = c.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: o, forceMount: r, children: s, ...a } = e, i = Or(ju, n), u = ku(i.baseId, o), d = Lu(i.baseId, o), p = o === i.value, f = c.useRef(p);
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
Ou.displayName = ju;
function ku(e, t) {
  return `${e}-trigger-${t}`;
}
function Lu(e, t) {
  return `${e}-content-${t}`;
}
var Yx = Nu, $u = Mu, Fu = Iu, Vu = Ou;
const zx = Yx, Bu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  $u,
  {
    className: A(P + "tabs-list", e),
    ...t
  }
);
Bu.displayName = $u.displayName;
const Wu = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Fu,
  {
    className: A(P + "tabs-trigger", e),
    ...t
  }
);
Wu.displayName = Fu.displayName;
const Xx = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Vu,
  {
    className: A(P + "tabs-content", e),
    ...t
  }
);
Xx.displayName = Vu.displayName;
const ly = ({ triggers: e, children: t, ...n }) => /* @__PURE__ */ l.jsxs(zx, { ...n, children: [
  /* @__PURE__ */ l.jsx(Bu, { children: e.map((o, r) => /* @__PURE__ */ Ke(Wu, { ...o, key: `trigger-${r}` })) }),
  t
] });
var qx = "Toggle", Hu = c.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: o = !1, onPressedChange: r, ...s } = e, [a = !1, i] = fe({
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
      onClick: T(e.onClick, () => {
        e.disabled || i(!a);
      })
    }
  );
});
Hu.displayName = qx;
var Uu = Hu;
const Zx = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  Uu,
  {
    className: A(P + "toggle", e),
    ...t
  }
);
Zx.displayName = Uu.displayName;
var [Wn, uy] = ie("Tooltip", [
  St
]), Hn = St(), Ku = "TooltipProvider", Jx = 700, To = "tooltip.open", [Qx, kr] = Wn(Ku), Gu = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = Jx,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, [a, i] = c.useState(!0), u = c.useRef(!1), d = c.useRef(0);
  return c.useEffect(() => {
    const p = d.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ l.jsx(
    Qx,
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
Gu.displayName = Ku;
var Un = "Tooltip", [ew, Yt] = Wn(Un), Yu = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r = !1,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, u = kr(Un, e.__scopeTooltip), d = Hn(t), [p, f] = c.useState(null), m = xe(), v = c.useRef(0), x = a ?? u.disableHoverableContent, h = i ?? u.delayDuration, g = c.useRef(!1), [w = !1, y] = fe({
    prop: o,
    defaultProp: r,
    onChange: (R) => {
      R ? (u.onOpen(), document.dispatchEvent(new CustomEvent(To))) : u.onClose(), s == null || s(R);
    }
  }), C = c.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), S = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, g.current = !1, y(!0);
  }, [y]), E = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, y(!1);
  }, [y]), N = c.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      g.current = !0, y(!0), v.current = 0;
    }, h);
  }, [h, y]);
  return c.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ l.jsx(In, { ...d, children: /* @__PURE__ */ l.jsx(
    ew,
    {
      scope: t,
      contentId: m,
      open: w,
      stateAttribute: C,
      trigger: p,
      onTriggerChange: f,
      onTriggerEnter: c.useCallback(() => {
        u.isOpenDelayed ? N() : S();
      }, [u.isOpenDelayed, N, S]),
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
Yu.displayName = Un;
var Po = "TooltipTrigger", zu = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Yt(Po, n), s = kr(Po, n), a = Hn(n), i = c.useRef(null), u = H(t, i, r.onTriggerChange), d = c.useRef(!1), p = c.useRef(!1), f = c.useCallback(() => d.current = !1, []);
    return c.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ l.jsx(cr, { asChild: !0, ...a, children: /* @__PURE__ */ l.jsx(
      j.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: u,
        onPointerMove: T(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !p.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), p.current = !0);
        }),
        onPointerLeave: T(e.onPointerLeave, () => {
          r.onTriggerLeave(), p.current = !1;
        }),
        onPointerDown: T(e.onPointerDown, () => {
          d.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: T(e.onFocus, () => {
          d.current || r.onOpen();
        }),
        onBlur: T(e.onBlur, r.onClose),
        onClick: T(e.onClick, r.onClose)
      }
    ) });
  }
);
zu.displayName = Po;
var Lr = "TooltipPortal", [tw, nw] = Wn(Lr, {
  forceMount: void 0
}), Xu = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = Yt(Lr, t);
  return /* @__PURE__ */ l.jsx(tw, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ce, { present: n || s.open, children: /* @__PURE__ */ l.jsx(yt, { asChild: !0, container: r, children: o }) }) });
};
Xu.displayName = Lr;
var gt = "TooltipContent", qu = c.forwardRef(
  (e, t) => {
    const n = nw(gt, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...s } = e, a = Yt(gt, e.__scopeTooltip);
    return /* @__PURE__ */ l.jsx(ce, { present: o || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ l.jsx(Zu, { side: r, ...s, ref: t }) : /* @__PURE__ */ l.jsx(ow, { side: r, ...s, ref: t }) });
  }
), ow = c.forwardRef((e, t) => {
  const n = Yt(gt, e.__scopeTooltip), o = kr(gt, e.__scopeTooltip), r = c.useRef(null), s = H(t, r), [a, i] = c.useState(null), { trigger: u, onClose: d } = n, p = r.current, { onPointerInTransitChange: f } = o, m = c.useCallback(() => {
    i(null), f(!1);
  }, [f]), v = c.useCallback(
    (x, h) => {
      const g = x.currentTarget, w = { x: x.clientX, y: x.clientY }, y = aw(w, g.getBoundingClientRect()), C = iw(w, y), S = cw(h.getBoundingClientRect()), E = uw([...C, ...S]);
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
        const g = h.target, w = { x: h.clientX, y: h.clientY }, y = (u == null ? void 0 : u.contains(g)) || (p == null ? void 0 : p.contains(g)), C = !lw(w, a);
        y ? m() : C && (m(), d());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [u, p, a, d, m]), /* @__PURE__ */ l.jsx(Zu, { ...e, ref: s });
}), [rw, sw] = Wn(Un, { isInside: !1 }), Zu = c.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, u = Yt(gt, n), d = Hn(n), { onClose: p } = u;
    return c.useEffect(() => (document.addEventListener(To, p), () => document.removeEventListener(To, p)), [p]), c.useEffect(() => {
      if (u.trigger) {
        const f = (m) => {
          const v = m.target;
          v != null && v.contains(u.trigger) && p();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [u.trigger, p]), /* @__PURE__ */ l.jsx(
      wt,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: p,
        children: /* @__PURE__ */ l.jsxs(
          lr,
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
              /* @__PURE__ */ l.jsx(Do, { children: o }),
              /* @__PURE__ */ l.jsx(rw, { scope: n, isInside: !0, children: /* @__PURE__ */ l.jsx(Tg, { id: u.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
qu.displayName = gt;
var Ju = "TooltipArrow", Qu = c.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Hn(n);
    return sw(
      Ju,
      n
    ).isInside ? null : /* @__PURE__ */ l.jsx(ur, { ...r, ...o, ref: t });
  }
);
Qu.displayName = Ju;
function aw(e, t) {
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
function iw(e, t, n = 5) {
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
function cw(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
function lw(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s].x, u = t[s].y, d = t[a].x, p = t[a].y;
    u > o != p > o && n < (d - i) * (o - u) / (p - u) + i && (r = !r);
  }
  return r;
}
function uw(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), dw(t);
}
function dw(e) {
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
var fw = Gu, pw = Yu, mw = zu, hw = Xu, ed = qu, vw = Qu;
const dy = fw, gw = pw, xw = mw, ww = hw, yw = vw, td = ({
  sideOffset: e = 4,
  className: t,
  ref: n,
  ...o
}) => /* @__PURE__ */ l.jsx(
  ed,
  {
    ref: n,
    sideOffset: e,
    className: A(P + "tooltip-content", t),
    ...o
  }
);
td.displayName = ed.displayName;
const fy = ({
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
  gw,
  {
    defaultOpen: o,
    open: r,
    onOpenChange: s,
    delayDuration: a,
    disableHoverableContent: i,
    children: [
      /* @__PURE__ */ l.jsx(xw, { asChild: !0, children: n }),
      /* @__PURE__ */ l.jsx(ww, { children: /* @__PURE__ */ l.jsxs(
        td,
        {
          ...d,
          className: A(P + "tooltip", u),
          children: [
            /* @__PURE__ */ l.jsx("p", { children: e }),
            t && /* @__PURE__ */ l.jsx(yw, { className: P + "tooltip-arrow" })
          ]
        }
      ) })
    ]
  }
);
var $r = "ToastProvider", [Fr, bw, Cw] = xt("Toast"), [nd, py] = ie("Toast", [Cw]), [Sw, Kn] = nd($r), od = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: o = 5e3,
    swipeDirection: r = "right",
    swipeThreshold: s = 50,
    children: a
  } = e, [i, u] = c.useState(null), [d, p] = c.useState(0), f = c.useRef(!1), m = c.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${$r}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ l.jsx(Fr.Provider, { scope: t, children: /* @__PURE__ */ l.jsx(
    Sw,
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
od.displayName = $r;
var rd = "ToastViewport", Ew = ["F8"], Ao = "toast.viewportPause", No = "toast.viewportResume", sd = c.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: o = Ew,
      label: r = "Notifications ({hotkey})",
      ...s
    } = e, a = Kn(rd, n), i = bw(n), u = c.useRef(null), d = c.useRef(null), p = c.useRef(null), f = c.useRef(null), m = H(t, f, a.onViewportChange), v = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = a.toastCount > 0;
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
            const N = new CustomEvent(Ao);
            w.dispatchEvent(N), a.isClosePausedRef.current = !0;
          }
        }, C = () => {
          if (a.isClosePausedRef.current) {
            const N = new CustomEvent(No);
            w.dispatchEvent(N), a.isClosePausedRef.current = !1;
          }
        }, S = (N) => {
          !g.contains(N.relatedTarget) && C();
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
          const S = C.ref.current, E = [S, ...Lw(S)];
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
          var E, N, R;
          const C = y.altKey || y.ctrlKey || y.metaKey;
          if (y.key === "Tab" && !C) {
            const D = document.activeElement, I = y.shiftKey;
            if (y.target === g && I) {
              (E = d.current) == null || E.focus();
              return;
            }
            const W = h({ tabbingDirection: I ? "backwards" : "forwards" }), U = W.findIndex((M) => M === D);
            so(W.slice(U + 1)) ? y.preventDefault() : I ? (N = d.current) == null || N.focus() : (R = p.current) == null || R.focus();
          }
        };
        return g.addEventListener("keydown", w), () => g.removeEventListener("keydown", w);
      }
    }, [i, h]), /* @__PURE__ */ l.jsxs(
      Mf,
      {
        ref: u,
        role: "region",
        "aria-label": r.replace("{hotkey}", v),
        tabIndex: -1,
        style: { pointerEvents: x ? void 0 : "none" },
        children: [
          x && /* @__PURE__ */ l.jsx(
            _o,
            {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "forwards"
                });
                so(g);
              }
            }
          ),
          /* @__PURE__ */ l.jsx(Fr.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(j.ol, { tabIndex: -1, ...s, ref: m }) }),
          x && /* @__PURE__ */ l.jsx(
            _o,
            {
              ref: p,
              onFocusFromOutsideViewport: () => {
                const g = h({
                  tabbingDirection: "backwards"
                });
                so(g);
              }
            }
          )
        ]
      }
    );
  }
);
sd.displayName = rd;
var ad = "ToastFocusProxy", _o = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: o, ...r } = e, s = Kn(ad, n);
    return /* @__PURE__ */ l.jsx(
      Kt,
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
_o.displayName = ad;
var Gn = "Toast", Rw = "toast.swipeStart", Tw = "toast.swipeMove", Pw = "toast.swipeCancel", Aw = "toast.swipeEnd", id = c.forwardRef(
  (e, t) => {
    const { forceMount: n, open: o, defaultOpen: r, onOpenChange: s, ...a } = e, [i = !0, u] = fe({
      prop: o,
      defaultProp: r,
      onChange: s
    });
    return /* @__PURE__ */ l.jsx(ce, { present: n || i, children: /* @__PURE__ */ l.jsx(
      Mw,
      {
        open: i,
        ...a,
        ref: t,
        onClose: () => u(!1),
        onPause: ne(e.onPause),
        onResume: ne(e.onResume),
        onSwipeStart: T(e.onSwipeStart, (d) => {
          d.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: T(e.onSwipeMove, (d) => {
          const { x: p, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "move"), d.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${p}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
        }),
        onSwipeCancel: T(e.onSwipeCancel, (d) => {
          d.currentTarget.setAttribute("data-swipe", "cancel"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: T(e.onSwipeEnd, (d) => {
          const { x: p, y: f } = d.detail.delta;
          d.currentTarget.setAttribute("data-swipe", "end"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), d.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${p}px`), d.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`), u(!1);
        })
      }
    ) });
  }
);
id.displayName = Gn;
var [Nw, _w] = nd(Gn, {
  onClose() {
  }
}), Mw = c.forwardRef(
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
    } = e, h = Kn(Gn, n), [g, w] = c.useState(null), y = H(t, (M) => w(M)), C = c.useRef(null), S = c.useRef(null), E = r || h.duration, N = c.useRef(0), R = c.useRef(E), D = c.useRef(0), { onToastAdd: I, onToastRemove: O } = h, k = ne(() => {
      var K;
      (g == null ? void 0 : g.contains(document.activeElement)) && ((K = h.viewport) == null || K.focus()), a();
    }), W = c.useCallback(
      (M) => {
        !M || M === 1 / 0 || (window.clearTimeout(D.current), N.current = (/* @__PURE__ */ new Date()).getTime(), D.current = window.setTimeout(k, M));
      },
      [k]
    );
    c.useEffect(() => {
      const M = h.viewport;
      if (M) {
        const K = () => {
          W(R.current), d == null || d();
        }, $ = () => {
          const G = (/* @__PURE__ */ new Date()).getTime() - N.current;
          R.current = R.current - G, window.clearTimeout(D.current), u == null || u();
        };
        return M.addEventListener(Ao, $), M.addEventListener(No, K), () => {
          M.removeEventListener(Ao, $), M.removeEventListener(No, K);
        };
      }
    }, [h.viewport, E, u, d, W]), c.useEffect(() => {
      s && !h.isClosePausedRef.current && W(E);
    }, [s, E, h.isClosePausedRef, W]), c.useEffect(() => (I(), () => O()), [I, O]);
    const U = c.useMemo(() => g ? md(g) : null, [g]);
    return h.viewport ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      U && /* @__PURE__ */ l.jsx(
        Dw,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": o === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: U
        }
      ),
      /* @__PURE__ */ l.jsx(Nw, { scope: n, onClose: k, children: $t.createPortal(
        /* @__PURE__ */ l.jsx(Fr.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
          _f,
          {
            asChild: !0,
            onEscapeKeyDown: T(i, () => {
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
                onKeyDown: T(e.onKeyDown, (M) => {
                  M.key === "Escape" && (i == null || i(M.nativeEvent), M.nativeEvent.defaultPrevented || (h.isFocusedToastEscapeKeyDownRef.current = !0, k()));
                }),
                onPointerDown: T(e.onPointerDown, (M) => {
                  M.button === 0 && (C.current = { x: M.clientX, y: M.clientY });
                }),
                onPointerMove: T(e.onPointerMove, (M) => {
                  if (!C.current) return;
                  const K = M.clientX - C.current.x, $ = M.clientY - C.current.y, G = !!S.current, L = ["left", "right"].includes(h.swipeDirection), _ = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max, z = L ? _(0, K) : 0, ee = L ? 0 : _(0, $), se = M.pointerType === "touch" ? 10 : 2, le = { x: z, y: ee }, re = { originalEvent: M, delta: le };
                  G ? (S.current = le, on(Tw, f, re, {
                    discrete: !1
                  })) : ys(le, h.swipeDirection, se) ? (S.current = le, on(Rw, p, re, {
                    discrete: !1
                  }), M.target.setPointerCapture(M.pointerId)) : (Math.abs(K) > se || Math.abs($) > se) && (C.current = null);
                }),
                onPointerUp: T(e.onPointerUp, (M) => {
                  const K = S.current, $ = M.target;
                  if ($.hasPointerCapture(M.pointerId) && $.releasePointerCapture(M.pointerId), S.current = null, C.current = null, K) {
                    const G = M.currentTarget, L = { originalEvent: M, delta: K };
                    ys(K, h.swipeDirection, h.swipeThreshold) ? on(Aw, v, L, {
                      discrete: !0
                    }) : on(
                      Pw,
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
), Dw = (e) => {
  const { __scopeToast: t, children: n, ...o } = e, r = Kn(Gn, t), [s, a] = c.useState(!1), [i, u] = c.useState(!1);
  return Ow(() => a(!0)), c.useEffect(() => {
    const d = window.setTimeout(() => u(!0), 1e3);
    return () => window.clearTimeout(d);
  }, []), i ? null : /* @__PURE__ */ l.jsx(yt, { asChild: !0, children: /* @__PURE__ */ l.jsx(Kt, { ...o, children: s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    r.label,
    " ",
    n
  ] }) }) });
}, Iw = "ToastTitle", cd = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { ...o, ref: t });
  }
);
cd.displayName = Iw;
var jw = "ToastDescription", ld = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...o } = e;
    return /* @__PURE__ */ l.jsx(j.div, { ...o, ref: t });
  }
);
ld.displayName = jw;
var ud = "ToastAction", dd = c.forwardRef(
  (e, t) => {
    const { altText: n, ...o } = e;
    return n.trim() ? /* @__PURE__ */ l.jsx(pd, { altText: n, asChild: !0, children: /* @__PURE__ */ l.jsx(Vr, { ...o, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${ud}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
dd.displayName = ud;
var fd = "ToastClose", Vr = c.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...o } = e, r = _w(fd, n);
    return /* @__PURE__ */ l.jsx(pd, { asChild: !0, children: /* @__PURE__ */ l.jsx(
      j.button,
      {
        type: "button",
        ...o,
        ref: t,
        onClick: T(e.onClick, r.onClose)
      }
    ) });
  }
);
Vr.displayName = fd;
var pd = c.forwardRef((e, t) => {
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
function md(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((o) => {
    if (o.nodeType === o.TEXT_NODE && o.textContent && t.push(o.textContent), kw(o)) {
      const r = o.ariaHidden || o.hidden || o.style.display === "none", s = o.dataset.radixToastAnnounceExclude === "";
      if (!r)
        if (s) {
          const a = o.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...md(o));
    }
  }), t;
}
function on(e, t, n, { discrete: o }) {
  const r = n.originalEvent.currentTarget, s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Io(r, s) : r.dispatchEvent(s);
}
var ys = (e, t, n = 0) => {
  const o = Math.abs(e.x), r = Math.abs(e.y), s = o > r;
  return t === "left" || t === "right" ? s && o > n : !s && r > n;
};
function Ow(e = () => {
}) {
  const t = ne(e);
  ue(() => {
    let n = 0, o = 0;
    return n = window.requestAnimationFrame(() => o = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(o);
    };
  }, [t]);
}
function kw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Lw(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function so(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var $w = od, hd = sd, vd = id, gd = cd, xd = ld, wd = dd, yd = Vr;
const Fw = $w, bd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  hd,
  {
    className: A(P + "toast-viewport", e),
    ...t
  }
);
bd.displayName = hd.displayName;
const Cd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  vd,
  {
    className: A(P + "toast-root", e),
    ...t
  }
);
Cd.displayName = vd.displayName;
const Vw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  wd,
  {
    className: A(P + "toast-action", e),
    ...t
  }
);
Vw.displayName = wd.displayName;
const Sd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  yd,
  {
    className: A(P + "toast-close", e),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ l.jsx(ti, {})
  }
);
Sd.displayName = yd.displayName;
const Ed = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  gd,
  {
    className: A(P + "toast-title", e),
    ...t
  }
);
Ed.displayName = gd.displayName;
const Bw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  xd,
  {
    className: A(P + "toast-description", e),
    ...t
  }
);
Bw.displayName = xd.displayName;
function my() {
  const { toasts: e } = $d();
  return /* @__PURE__ */ l.jsxs(Fw, { children: [
    e.map(({ id: t, text: n, action: o, close: r, state: s, ...a }) => /* @__PURE__ */ l.jsxs(Cd, { "data-status": s, ...a, children: [
      /* @__PURE__ */ l.jsx("div", { children: n && /* @__PURE__ */ l.jsx(Ed, { children: n }) }),
      o && /* @__PURE__ */ l.jsxs("div", { className: "action-wrapper", children: [
        /* @__PURE__ */ l.jsx(cu, { orientation: "vertical" }),
        " ",
        o
      ] }),
      r && /* @__PURE__ */ l.jsx(Sd, {})
    ] }, t)),
    /* @__PURE__ */ l.jsx(bd, {})
  ] });
}
export {
  Cf as Accordion,
  Ws as AccordionContent,
  Vs as AccordionItem,
  Kw as AccordionRoot,
  Bs as AccordionTrigger,
  zw as AlertDialog,
  Ua as AlertDialogAction,
  Ka as AlertDialogCancel,
  Ba as AlertDialogContent,
  Ha as AlertDialogDescription,
  Yw as AlertDialogFooter,
  Va as AlertDialogOverlay,
  Yp as AlertDialogPortal,
  Kp as AlertDialogRoot,
  Wa as AlertDialogTitle,
  Gp as AlertDialogTrigger,
  mm as Checkbox,
  qw as Dialog,
  fn as DialogClose,
  oi as DialogContent,
  ii as DialogDescription,
  si as DialogFooter,
  ri as DialogHeader,
  ni as DialogOverlay,
  gm as DialogPortal,
  hm as DialogRoot,
  ai as DialogTitle,
  vm as DialogTrigger,
  ey as DropdownMenu,
  zv as DropdownMenuCheckboxItem,
  vo as DropdownMenuContent,
  Uv as DropdownMenuGroup,
  Mc as DropdownMenuItem,
  Dc as DropdownMenuLabel,
  Kv as DropdownMenuPortal,
  Qw as DropdownMenuRadioGroup,
  Xv as DropdownMenuRadioItem,
  Wv as DropdownMenuRoot,
  Ic as DropdownMenuSeparator,
  qv as DropdownMenuShortcut,
  Jw as DropdownMenuSub,
  Yv as DropdownMenuSubContent,
  Gv as DropdownMenuSubTrigger,
  Hv as DropdownMenuTrigger,
  kc as Label,
  Qv as Pagination,
  eg as PaginationContent,
  rg as PaginationEllipsis,
  tg as PaginationItem,
  Cr as PaginationLink,
  og as PaginationNext,
  ng as PaginationPrevious,
  fg as Progress,
  Eg as RadioGroup,
  tl as RadioGroupItem,
  vx as ScrollArea,
  su as ScrollBar,
  ry as Select,
  Co as SelectContent,
  tx as SelectGroup,
  Hl as SelectItem,
  Ul as SelectItemText,
  Wl as SelectLabel,
  Jg as SelectPortal,
  Zg as SelectRoot,
  ex as SelectScrollDownButton,
  Qg as SelectScrollUpButton,
  Kl as SelectSeparator,
  Vl as SelectTrigger,
  Bl as SelectValue,
  cu as Separator,
  $x as Slider,
  Ux as Switch,
  ly as Tabs,
  Xx as TabsContent,
  Bu as TabsList,
  zx as TabsRoot,
  Wu as TabsTrigger,
  Cd as Toast,
  Vw as ToastAction,
  Sd as ToastClose,
  Bw as ToastDescription,
  Fw as ToastProvider,
  Ed as ToastTitle,
  bd as ToastViewport,
  my as Toaster,
  Zx as Toggle,
  fy as Tooltip,
  yw as TooltipArrow,
  td as TooltipContent,
  ww as TooltipPortal,
  dy as TooltipProvider,
  gw as TooltipRoot,
  xw as TooltipTrigger,
  A as cn,
  P as prefix,
  $d as useToast
};
