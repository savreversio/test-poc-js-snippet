function Vt(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var Mr = { exports: {} }, Ge = {}, Wr = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function Ut() {
  if (ft)
    return g;
  ft = 1;
  var j = Symbol.for("react.element"), v = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), ne = Symbol.for("react.provider"), ae = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), U = Symbol.iterator;
  function ee(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, Ie = {};
  function oe(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || K;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, oe.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = oe.prototype;
  function F(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || K;
  }
  var he = F.prototype = new ue();
  he.constructor = F, fe(he, oe.prototype), he.isPureReactComponent = !0;
  var ie = Array.isArray, M = Object.prototype.hasOwnProperty, H = { current: null }, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, s, h) {
    var C, _ = {}, k = null, P = null;
    if (s != null)
      for (C in s.ref !== void 0 && (P = s.ref), s.key !== void 0 && (k = "" + s.key), s)
        M.call(s, C) && !le.hasOwnProperty(C) && (_[C] = s[C]);
    var T = arguments.length - 2;
    if (T === 1)
      _.children = h;
    else if (1 < T) {
      for (var w = Array(T), V = 0; V < T; V++)
        w[V] = arguments[V + 2];
      _.children = w;
    }
    if (n && n.defaultProps)
      for (C in T = n.defaultProps, T)
        _[C] === void 0 && (_[C] = T[C]);
    return { $$typeof: j, type: n, key: k, ref: P, props: _, _owner: H.current };
  }
  function Re(n, s) {
    return { $$typeof: j, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Ce(n) {
    return typeof n == "object" && n !== null && n.$$typeof === j;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var we = /\/+/g;
  function G(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function J(n, s, h, C, _) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var P = !1;
    if (n === null)
      P = !0;
    else
      switch (k) {
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case j:
            case v:
              P = !0;
          }
      }
    if (P)
      return P = n, _ = _(P), n = C === "" ? "." + G(P, 0) : C, ie(_) ? (h = "", n != null && (h = n.replace(we, "$&/") + "/"), J(_, s, h, "", function(V) {
        return V;
      })) : _ != null && (Ce(_) && (_ = Re(_, h + (!_.key || P && P.key === _.key ? "" : ("" + _.key).replace(we, "$&/") + "/") + n)), s.push(_)), 1;
    if (P = 0, C = C === "" ? "." : C + ":", ie(n))
      for (var T = 0; T < n.length; T++) {
        k = n[T];
        var w = C + G(k, T);
        P += J(k, s, h, w, _);
      }
    else if (w = ee(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(k = n.next()).done; )
        k = k.value, w = C + G(k, T++), P += J(k, s, h, w, _);
    else if (k === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function Y(n, s, h) {
    if (n == null)
      return n;
    var C = [], _ = 0;
    return J(n, C, "", "", function(k) {
      return s.call(h, k, _++);
    }), C;
  }
  function se(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var d = { current: null }, de = { transition: null }, Se = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: de, ReactCurrentOwner: H };
  return g.Children = { map: Y, forEach: function(n, s, h) {
    Y(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return Y(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return Y(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!Ce(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = oe, g.Fragment = re, g.Profiler = te, g.PureComponent = F, g.StrictMode = q, g.Suspense = L, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var C = fe({}, n.props), _ = n.key, k = n.ref, P = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (k = s.ref, P = H.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (w in s)
        M.call(s, w) && !le.hasOwnProperty(w) && (C[w] = s[w] === void 0 && T !== void 0 ? T[w] : s[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      C.children = h;
    else if (1 < w) {
      T = Array(w);
      for (var V = 0; V < w; V++)
        T[V] = arguments[V + 2];
      C.children = T;
    }
    return { $$typeof: j, type: n.type, key: _, ref: k, props: C, _owner: P };
  }, g.createContext = function(n) {
    return n = { $$typeof: ae, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: ne, _context: n }, n.Consumer = n;
  }, g.createElement = ve, g.createFactory = function(n) {
    var s = ve.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: Q, render: n };
  }, g.isValidElement = Ce, g.lazy = function(n) {
    return { $$typeof: N, _payload: { _status: -1, _result: n }, _init: se };
  }, g.memo = function(n, s) {
    return { $$typeof: Z, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = de.transition;
    de.transition = {};
    try {
      n();
    } finally {
      de.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return d.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return d.current.useEffect(n, s);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return d.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return d.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return d.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return d.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return d.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return d.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.2.0", g;
}
var Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var lt;
function Yt() {
  return lt || (lt = 1, function(j, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var re = "18.2.0", q = Symbol.for("react.element"), te = Symbol.for("react.portal"), ne = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), Z = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), oe = Symbol.iterator, ue = "@@iterator";
      function F(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = oe && e[oe] || e[ue];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, M = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {}, ve = null;
      function Re(e) {
        ve = e;
      }
      le.setExtraStackFrame = function(e) {
        ve = e;
      }, le.getCurrentStack = null, le.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = le.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Ce = !1, Ye = !1, we = !1, G = !1, J = !1, Y = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: H
      };
      Y.ReactDebugCurrentFrame = le, Y.ReactCurrentActQueue = M;
      function se(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          de("error", e, a);
        }
      }
      function de(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var p = a.map(function(l) {
            return String(l);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Se = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Se[i])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Se[i] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, C = {};
      Object.freeze(C);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var k = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, P = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              se("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in k)
          k.hasOwnProperty(T) && P(T, k[T]);
      }
      function w() {
      }
      w.prototype = _.prototype;
      function V(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var me = V.prototype = new w();
      me.constructor = V, h(me, _.prototype), me.isPureReactComponent = !0;
      function mr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Qe = Array.isArray;
      function Fe(e) {
        return Qe(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function $e(e) {
        try {
          return Te(e), !1;
        } catch {
          return !0;
        }
      }
      function Te(e) {
        return "" + e;
      }
      function Oe(e) {
        if ($e(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Te(e);
      }
      function Ze(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function ke(e) {
        return e.displayName || "Context";
      }
      function pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case ne:
            return "Fragment";
          case te:
            return "Portal";
          case Q:
            return "Profiler";
          case ae:
            return "StrictMode";
          case U:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Z:
              var r = e;
              return ke(r) + ".Consumer";
            case L:
              var a = e;
              return ke(a._context) + ".Provider";
            case N:
              return Ze(e, e.render, "ForwardRef");
            case K:
              var o = e.displayName || null;
              return o !== null ? o : pe(e.type) || "Memo";
            case fe: {
              var i = e, p = i._payload, l = i._init;
              try {
                return pe(l(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Pe = Object.prototype.hasOwnProperty, Le = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, er, rr, Ne;
      Ne = {};
      function Be(e) {
        if (Pe.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function ge(e) {
        if (Pe.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function _r(e, r) {
        var a = function() {
          er || (er = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function tr(e, r) {
        var a = function() {
          rr || (rr = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function nr(e) {
        if (typeof e.ref == "string" && H.current && e.__self && H.current.stateNode !== e.__self) {
          var r = pe(H.current.type);
          Ne[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var je = function(e, r, a, o, i, p, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: q,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function br(e, r, a) {
        var o, i = {}, p = null, l = null, y = null, E = null;
        if (r != null) {
          Be(r) && (l = r.ref, nr(r)), ge(r) && (Oe(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Pe.call(r, o) && !Le.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var O = arguments.length - 2;
        if (O === 1)
          i.children = a;
        else if (O > 1) {
          for (var A = Array(O), x = 0; x < O; x++)
            A[x] = arguments[x + 2];
          Object.freeze && Object.freeze(A), i.children = A;
        }
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (o in I)
            i[o] === void 0 && (i[o] = I[o]);
        }
        if (p || l) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && _r(i, W), l && tr(i, W);
        }
        return je(e, p, l, y, E, H.current, i);
      }
      function Er(e, r) {
        var a = je(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), p = e.key, l = e.ref, y = e._self, E = e._source, O = e._owner;
        if (r != null) {
          Be(r) && (l = r.ref, O = H.current), ge(r) && (Oe(r.key), p = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            Pe.call(r, o) && !Le.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? i[o] = A[o] : i[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          i.children = a;
        else if (x > 1) {
          for (var I = Array(x), W = 0; W < x; W++)
            I[W] = arguments[W + 2];
          i.children = I;
        }
        return je(e.type, p, l, y, E, O, i);
      }
      function _e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === q;
      }
      var ar = ".", Cr = ":";
      function wr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var Me = !1, or = /\/+/g;
      function ye(e) {
        return e.replace(or, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Oe(e.key), wr("" + e.key)) : r.toString(36);
      }
      function be(e, r, a, o, i) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (p) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case q:
                case te:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = i(y), O = o === "" ? ar + Ae(y, 0) : o;
          if (Fe(E)) {
            var A = "";
            O != null && (A = ye(O) + "/"), be(E, r, A, "", function(Wt) {
              return Wt;
            });
          } else
            E != null && (_e(E) && (E.key && (!y || y.key !== E.key) && Oe(E.key), E = Er(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + E.key) + "/"
              ) : "") + O
            )), r.push(E));
          return 1;
        }
        var x, I, W = 0, z = o === "" ? ar : o + Cr;
        if (Fe(e))
          for (var hr = 0; hr < e.length; hr++)
            x = e[hr], I = z + Ae(x, hr), W += be(x, r, a, I, i);
        else {
          var Nr = F(e);
          if (typeof Nr == "function") {
            var it = e;
            Nr === it.entries && (Me || se("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Nt = Nr.call(it), st, Mt = 0; !(st = Nt.next()).done; )
              x = st.value, I = z + Ae(x, Mt++), W += be(x, r, a, I, i);
          } else if (p === "object") {
            var ct = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ct === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ct) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return W;
      }
      function xe(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return be(e, o, "", "", function(p) {
          return r.call(a, p, i++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return xe(e, function() {
          r++;
        }), r;
      }
      function ur(e, r, a) {
        xe(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return xe(e, function(r) {
          return r;
        }) || [];
      }
      function ir(e) {
        if (!_e(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function sr(e) {
        var r = {
          $$typeof: Z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: L,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var p = {
            $$typeof: Z,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                i || (se("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var De = -1, ze = 0, qe = 1, Or = 2;
      function kr(e) {
        if (e._status === De) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === ze || e._status === De) {
              var l = e;
              l._status = qe, l._result = p;
            }
          }, function(p) {
            if (e._status === ze || e._status === De) {
              var l = e;
              l._status = Or, l._result = p;
            }
          }), e._status === De) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var i = e._result;
          return i === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function Pr(e) {
        var r = {
          // We use these fields to store the result.
          _status: De,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: kr
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === K ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === ne || e === Q || J || e === ae || e === U || e === ee || G || e === Ie || Ce || Ye || we || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === K || e.$$typeof === L || e.$$typeof === Z || e.$$typeof === N || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: K,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function f() {
        var e = he.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function R(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function B(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function D(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function $(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function X(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function cr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function ce(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function yt() {
        var e = f();
        return e.useTransition();
      }
      function ht(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function mt() {
        var e = f();
        return e.useId();
      }
      function gt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Vr, Ur, Yr, Br, zr, qr, Hr;
      function Gr() {
      }
      Gr.__reactDisabledLog = !0;
      function _t() {
        {
          if (He === 0) {
            Vr = console.log, Ur = console.info, Yr = console.warn, Br = console.error, zr = console.group, qr = console.groupCollapsed, Hr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Gr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function bt() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Vr
              }),
              info: h({}, e, {
                value: Ur
              }),
              warn: h({}, e, {
                value: Yr
              }),
              error: h({}, e, {
                value: Br
              }),
              group: h({}, e, {
                value: zr
              }),
              groupCollapsed: h({}, e, {
                value: qr
              }),
              groupEnd: h({}, e, {
                value: Hr
              })
            });
          }
          He < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ar = Y.ReactCurrentDispatcher, xr;
      function fr(e, r, a) {
        {
          if (xr === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              xr = o && o[1] || "";
            }
          return `
` + xr + e;
        }
      }
      var Dr = !1, lr;
      {
        var Et = typeof WeakMap == "function" ? WeakMap : Map;
        lr = new Et();
      }
      function Kr(e, r) {
        if (!e || Dr)
          return "";
        {
          var a = lr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Dr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = Ar.current, Ar.current = null, _t();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (z) {
                o = z;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), O = y.length - 1, A = E.length - 1; O >= 1 && A >= 0 && y[O] !== E[A]; )
              A--;
            for (; O >= 1 && A >= 0; O--, A--)
              if (y[O] !== E[A]) {
                if (O !== 1 || A !== 1)
                  do
                    if (O--, A--, A < 0 || y[O] !== E[A]) {
                      var x = `
` + y[O].replace(" at new ", " at ");
                      return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && lr.set(e, x), x;
                    }
                  while (O >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, Ar.current = p, bt(), Error.prepareStackTrace = i;
        }
        var I = e ? e.displayName || e.name : "", W = I ? fr(I) : "";
        return typeof e == "function" && lr.set(e, W), W;
      }
      function Rt(e, r, a) {
        return Kr(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function dr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Kr(e, Ct(e));
        if (typeof e == "string")
          return fr(e);
        switch (e) {
          case U:
            return fr("Suspense");
          case ee:
            return fr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return Rt(e.render);
            case K:
              return dr(e.type, r, a);
            case fe: {
              var o = e, i = o._payload, p = o._init;
              try {
                return dr(p(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Jr = {}, Xr = Y.ReactDebugCurrentFrame;
      function pr(e) {
        if (e) {
          var r = e._owner, a = dr(e.type, e._source, r ? r.type : null);
          Xr.setExtraStackFrame(a);
        } else
          Xr.setExtraStackFrame(null);
      }
      function wt(e, r, a, o, i) {
        {
          var p = Function.call.bind(Pe);
          for (var l in e)
            if (p(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                y = O;
              }
              y && !(y instanceof Error) && (pr(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), pr(null)), y instanceof Error && !(y.message in Jr) && (Jr[y.message] = !0, pr(i), d("Failed %s type: %s", a, y.message), pr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = dr(e.type, e._source, r ? r.type : null);
          Re(a);
        } else
          Re(null);
      }
      var Ir;
      Ir = !1;
      function Qr() {
        if (H.current) {
          var e = pe(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Tt(e) {
        return e != null ? St(e.__source) : "";
      }
      var Zr = {};
      function Ot(e) {
        var r = Qr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function et(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Ot(r);
          if (!Zr[a]) {
            Zr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), We(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function rt(e, r) {
        if (typeof e == "object") {
          if (Fe(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              _e(o) && et(o, r);
            }
          else if (_e(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = F(e);
            if (typeof i == "function" && i !== e.entries)
              for (var p = i.call(e), l; !(l = p.next()).done; )
                _e(l.value) && et(l.value, r);
          }
        }
      }
      function tt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === K))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = pe(r);
            wt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Ir) {
            Ir = !0;
            var i = pe(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function kt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function nt(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Tt(r);
          p ? i += p : i += Qr();
          var l;
          e === null ? l = "null" : Fe(e) ? l = "array" : e !== void 0 && e.$$typeof === q ? (l = "<" + (pe(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var y = br.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            rt(arguments[E], e);
        return e === ne ? kt(y) : tt(y), y;
      }
      var at = !1;
      function Pt(e) {
        var r = nt.bind(null, e);
        return r.type = e, at || (at = !0, se("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return se("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function jt(e, r, a) {
        for (var o = Rr.apply(this, arguments), i = 2; i < arguments.length; i++)
          rt(arguments[i], o.type);
        return tt(o), o;
      }
      function At(e, r) {
        var a = ie.transition;
        ie.transition = {};
        var o = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ie.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && se("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ot = !1, vr = null;
      function xt(e) {
        if (vr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = j && j[r];
            vr = a.call(j, "timers").setImmediate;
          } catch {
            vr = function(i) {
              ot === !1 && (ot = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = i, p.port2.postMessage(void 0);
            };
          }
        return vr(e);
      }
      var Ve = 0, ut = !1;
      function Dt(e) {
        {
          var r = Ve;
          Ve++, M.current === null && (M.current = []);
          var a = M.isBatchingLegacy, o;
          try {
            if (M.isBatchingLegacy = !0, o = e(), !a && M.didScheduleLegacyUpdate) {
              var i = M.current;
              i !== null && (M.didScheduleLegacyUpdate = !1, Lr(i));
            }
          } catch (I) {
            throw yr(r), I;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, l = !1, y = {
              then: function(I, W) {
                l = !0, p.then(function(z) {
                  yr(r), Ve === 0 ? Fr(z, I, W) : I(z);
                }, function(z) {
                  yr(r), W(z);
                });
              }
            };
            return !ut && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ut = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (yr(r), Ve === 0) {
              var O = M.current;
              O !== null && (Lr(O), M.current = null);
              var A = {
                then: function(I, W) {
                  M.current === null ? (M.current = [], Fr(E, I, W)) : I(E);
                }
              };
              return A;
            } else {
              var x = {
                then: function(I, W) {
                  I(E);
                }
              };
              return x;
            }
          }
        }
      }
      function yr(e) {
        e !== Ve - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Fr(e, r, a) {
        {
          var o = M.current;
          if (o !== null)
            try {
              Lr(o), xt(function() {
                o.length === 0 ? (M.current = null, r(e)) : Fr(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var $r = !1;
      function Lr(e) {
        if (!$r) {
          $r = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            $r = !1;
          }
        }
      }
      var It = nt, Ft = jt, $t = Pt, Lt = {
        map: xe,
        forEach: ur,
        count: Sr,
        toArray: Tr,
        only: ir
      };
      v.Children = Lt, v.Component = _, v.Fragment = ne, v.Profiler = Q, v.PureComponent = V, v.StrictMode = ae, v.Suspense = U, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, v.cloneElement = Ft, v.createContext = sr, v.createElement = It, v.createFactory = $t, v.createRef = mr, v.forwardRef = jr, v.isValidElement = _e, v.lazy = Pr, v.memo = c, v.startTransition = At, v.unstable_act = Dt, v.useCallback = X, v.useContext = R, v.useDebugValue = ce, v.useDeferredValue = ht, v.useEffect = B, v.useId = mt, v.useImperativeHandle = cr, v.useInsertionEffect = D, v.useLayoutEffect = $, v.useMemo = Ee, v.useReducer = b, v.useRef = m, v.useState = S, v.useSyncExternalStore = gt, v.useTransition = yt, v.version = re, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
process.env.NODE_ENV === "production" ? Wr.exports = Ut() : Wr.exports = Yt();
var Ue = Wr.exports;
const Bt = /* @__PURE__ */ Vt(Ue);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function zt() {
  if (dt)
    return Ge;
  dt = 1;
  var j = Ue, v = Symbol.for("react.element"), re = Symbol.for("react.fragment"), q = Object.prototype.hasOwnProperty, te = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(Q, L, Z) {
    var N, U = {}, ee = null, K = null;
    Z !== void 0 && (ee = "" + Z), L.key !== void 0 && (ee = "" + L.key), L.ref !== void 0 && (K = L.ref);
    for (N in L)
      q.call(L, N) && !ne.hasOwnProperty(N) && (U[N] = L[N]);
    if (Q && Q.defaultProps)
      for (N in L = Q.defaultProps, L)
        U[N] === void 0 && (U[N] = L[N]);
    return { $$typeof: v, type: Q, key: ee, ref: K, props: U, _owner: te.current };
  }
  return Ge.Fragment = re, Ge.jsx = ae, Ge.jsxs = ae, Ge;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function qt() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var j = Ue, v = Symbol.for("react.element"), re = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), Q = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), fe = Symbol.iterator, Ie = "@@iterator";
    function oe(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = fe && t[fe] || t[Ie];
      return typeof u == "function" ? u : null;
    }
    var ue = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        he("error", t, c);
      }
    }
    function he(t, u, c) {
      {
        var f = ue.ReactDebugCurrentFrame, R = f.getStackAddendum();
        R !== "" && (u += "%s", c = c.concat([R]));
        var S = c.map(function(b) {
          return String(b);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var ie = !1, M = !1, H = !1, le = !1, ve = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Ce(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === q || t === ne || ve || t === te || t === Z || t === N || le || t === K || ie || M || H || typeof t == "object" && t !== null && (t.$$typeof === ee || t.$$typeof === U || t.$$typeof === ae || t.$$typeof === Q || t.$$typeof === L || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Re || t.getModuleId !== void 0));
    }
    function Ye(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var R = u.displayName || u.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
    }
    function we(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case q:
          return "Fragment";
        case re:
          return "Portal";
        case ne:
          return "Profiler";
        case te:
          return "StrictMode";
        case Z:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Q:
            var u = t;
            return we(u) + ".Consumer";
          case ae:
            var c = t;
            return we(c._context) + ".Provider";
          case L:
            return Ye(t, t.render, "ForwardRef");
          case U:
            var f = t.displayName || null;
            return f !== null ? f : G(t.type) || "Memo";
          case ee: {
            var R = t, S = R._payload, b = R._init;
            try {
              return G(b(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, Y = 0, se, d, de, Se, n, s, h;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function _() {
      {
        if (Y === 0) {
          se = console.log, d = console.info, de = console.warn, Se = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function k() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: se
            }),
            info: J({}, t, {
              value: d
            }),
            warn: J({}, t, {
              value: de
            }),
            error: J({}, t, {
              value: Se
            }),
            group: J({}, t, {
              value: n
            }),
            groupCollapsed: J({}, t, {
              value: s
            }),
            groupEnd: J({}, t, {
              value: h
            })
          });
        }
        Y < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var P = ue.ReactCurrentDispatcher, T;
    function w(t, u, c) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (R) {
            var f = R.stack.trim().match(/\n( *(at )?)/);
            T = f && f[1] || "";
          }
        return `
` + T + t;
      }
    }
    var V = !1, me;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new mr();
    }
    function Qe(t, u) {
      if (!t || V)
        return "";
      {
        var c = me.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      V = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = P.current, P.current = null, _();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (ce) {
              f = ce;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (ce) {
              f = ce;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            f = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && f && typeof ce.stack == "string") {
          for (var m = ce.stack.split(`
`), B = f.stack.split(`
`), D = m.length - 1, $ = B.length - 1; D >= 1 && $ >= 0 && m[D] !== B[$]; )
            $--;
          for (; D >= 1 && $ >= 0; D--, $--)
            if (m[D] !== B[$]) {
              if (D !== 1 || $ !== 1)
                do
                  if (D--, $--, $ < 0 || m[D] !== B[$]) {
                    var X = `
` + m[D].replace(" at new ", " at ");
                    return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)), typeof t == "function" && me.set(t, X), X;
                  }
                while (D >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        V = !1, P.current = S, k(), Error.prepareStackTrace = R;
      }
      var Ee = t ? t.displayName || t.name : "", cr = Ee ? w(Ee) : "";
      return typeof t == "function" && me.set(t, cr), cr;
    }
    function Fe(t, u, c) {
      return Qe(t, !1);
    }
    function gr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function $e(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Qe(t, gr(t));
      if (typeof t == "string")
        return w(t);
      switch (t) {
        case Z:
          return w("Suspense");
        case N:
          return w("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            return Fe(t.render);
          case U:
            return $e(t.type, u, c);
          case ee: {
            var f = t, R = f._payload, S = f._init;
            try {
              return $e(S(R), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, Oe = {}, Ze = ue.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        Ze.setExtraStackFrame(c);
      } else
        Ze.setExtraStackFrame(null);
    }
    function pe(t, u, c, f, R) {
      {
        var S = Function.call.bind(Te);
        for (var b in t)
          if (S(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var B = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              m = D;
            }
            m && !(m instanceof Error) && (ke(R), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), ke(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, ke(R), F("Failed %s type: %s", c, m.message), ke(null));
          }
      }
    }
    var Pe = Array.isArray;
    function Le(t) {
      return Pe(t);
    }
    function er(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function rr(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function Be(t) {
      if (rr(t))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(t)), Ne(t);
    }
    var ge = ue.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, nr, je;
    je = {};
    function br(t) {
      if (Te.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (Te.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, u) {
      if (typeof t.ref == "string" && ge.current && u && ge.current.stateNode !== u) {
        var c = G(ge.current.type);
        je[c] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ge.current.type), t.ref), je[c] = !0);
      }
    }
    function _e(t, u) {
      {
        var c = function() {
          tr || (tr = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function ar(t, u) {
      {
        var c = function() {
          nr || (nr = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Cr = function(t, u, c, f, R, S, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function wr(t, u, c, f, R) {
      {
        var S, b = {}, m = null, B = null;
        c !== void 0 && (Be(c), m = "" + c), Er(u) && (Be(u.key), m = "" + u.key), br(u) && (B = u.ref, Rr(u, R));
        for (S in u)
          Te.call(u, S) && !_r.hasOwnProperty(S) && (b[S] = u[S]);
        if (t && t.defaultProps) {
          var D = t.defaultProps;
          for (S in D)
            b[S] === void 0 && (b[S] = D[S]);
        }
        if (m || B) {
          var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && _e(b, $), B && ar(b, $);
        }
        return Cr(t, m, B, R, f, ge.current, b);
      }
    }
    var Me = ue.ReactCurrentOwner, or = ue.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        or.setExtraStackFrame(c);
      } else
        or.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function xe() {
      {
        if (Me.current) {
          var t = G(Me.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var ur = {};
    function Tr(t) {
      {
        var u = xe();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function ir(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(u);
        if (ur[c])
          return;
        ur[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Me.current && (f = " It was passed a child from " + G(t._owner.type) + "."), ye(t), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ye(null);
      }
    }
    function sr(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Le(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            be(f) && ir(f, u);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = oe(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), b; !(b = S.next()).done; )
              be(b.value) && ir(b.value, u);
        }
      }
    }
    function De(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === L || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === U))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = G(u);
          pe(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var R = G(u);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            ye(t), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), F("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function qe(t, u, c, f, R, S) {
      {
        var b = Ce(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Sr(R);
          B ? m += B : m += xe();
          var D;
          t === null ? D = "null" : Le(t) ? D = "array" : t !== void 0 && t.$$typeof === v ? (D = "<" + (G(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, m);
        }
        var $ = wr(t, u, c, R, S);
        if ($ == null)
          return $;
        if (b) {
          var X = u.children;
          if (X !== void 0)
            if (f)
              if (Le(X)) {
                for (var Ee = 0; Ee < X.length; Ee++)
                  sr(X[Ee], t);
                Object.freeze && Object.freeze(X);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sr(X, t);
        }
        return t === q ? ze($) : De($), $;
      }
    }
    function Or(t, u, c) {
      return qe(t, u, c, !0);
    }
    function kr(t, u, c) {
      return qe(t, u, c, !1);
    }
    var Pr = kr, jr = Or;
    Ke.Fragment = q, Ke.jsx = Pr, Ke.jsxs = jr;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Mr.exports = zt() : Mr.exports = qt();
var Xe = Mr.exports;
const vt = ({
  onClick: j = () => null,
  children: v
}) => /* @__PURE__ */ Xe.jsx(
  "button",
  {
    className: "shareByLinkButton",
    type: "button",
    onClick: (re) => {
      j && j(re);
    },
    children: v
  }
);
vt.displayName = "Button";
const Ht = () => {
  const [j, v] = Ue.useState(0), [re, q] = Ue.useState(!1), te = Ue.useCallback(
    () => {
      q(!0), v(Math.random() * 100);
    },
    []
  );
  return window.React = Bt, /* @__PURE__ */ Xe.jsxs(Xe.Fragment, { children: [
    /* @__PURE__ */ Xe.jsx(vt, { onClick: te, children: "Share by link" }),
    re ? /* @__PURE__ */ Xe.jsxs("div", { children: [
      "Value : ",
      j
    ] }) : null
  ] });
};
Ht.displayName = "ShareByLink";
export {
  Ht as ShareByLink
};
