function Dh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o)
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
function jh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Or = {},
  Fh = {
    get exports() {
      return Or
    },
    set exports(e) {
      Or = e
    },
  },
  xi = {},
  x = {},
  Uh = {
    get exports() {
      return x
    },
    set exports(e) {
      x = e
    },
  },
  I = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zr = Symbol.for('react.element'),
  Bh = Symbol.for('react.portal'),
  Vh = Symbol.for('react.fragment'),
  Wh = Symbol.for('react.strict_mode'),
  Hh = Symbol.for('react.profiler'),
  Qh = Symbol.for('react.provider'),
  Kh = Symbol.for('react.context'),
  Jh = Symbol.for('react.forward_ref'),
  qh = Symbol.for('react.suspense'),
  Gh = Symbol.for('react.memo'),
  Xh = Symbol.for('react.lazy'),
  za = Symbol.iterator
function Yh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (za && e[za]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Rf = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Nf = Object.assign,
  Of = {}
function qn(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Of),
    (this.updater = n || Rf)
}
qn.prototype.isReactComponent = {}
qn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Tf() {}
Tf.prototype = qn.prototype
function ps(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Of),
    (this.updater = n || Rf)
}
var hs = (ps.prototype = new Tf())
hs.constructor = ps
Nf(hs, qn.prototype)
hs.isPureReactComponent = !0
var Ia = Array.isArray,
  Lf = Object.prototype.hasOwnProperty,
  ms = { current: null },
  $f = { key: !0, ref: !0, __self: !0, __source: !0 }
function Af(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Lf.call(t, r) && !$f.hasOwnProperty(r) && (o[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) o.children = n
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2]
    o.children = s
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r])
  return { $$typeof: Zr, type: e, key: i, ref: l, props: o, _owner: ms.current }
}
function Zh(e, t) {
  return {
    $$typeof: Zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function ys(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zr
}
function bh(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Ma = /\/+/g
function yl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? bh('' + e.key)
    : t.toString(36)
}
function _o(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var l = !1
  if (e === null) l = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Zr:
          case Bh:
            l = !0
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + yl(l, 0) : r),
      Ia(o)
        ? ((n = ''),
          e != null && (n = e.replace(Ma, '$&/') + '/'),
          _o(o, t, n, '', function (a) {
            return a
          }))
        : o != null &&
          (ys(o) &&
            (o = Zh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Ma, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    )
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Ia(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u]
      var s = r + yl(i, u)
      l += _o(i, t, n, s, o)
    }
  else if (((s = Yh(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + yl(i, u++)), (l += _o(i, t, n, s, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return l
}
function so(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    _o(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function em(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Ee = { current: null },
  Ro = { transition: null },
  tm = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: Ro,
    ReactCurrentOwner: ms,
  }
I.Children = {
  map: so,
  forEach: function (e, t, n) {
    so(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      so(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      so(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!ys(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
I.Component = qn
I.Fragment = Vh
I.Profiler = Hh
I.PureComponent = ps
I.StrictMode = Wh
I.Suspense = qh
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = Nf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = ms.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps
    for (s in t)
      Lf.call(t, s) &&
        !$f.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
  }
  var s = arguments.length - 2
  if (s === 1) r.children = n
  else if (1 < s) {
    u = Array(s)
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2]
    r.children = u
  }
  return { $$typeof: Zr, type: e.type, key: o, ref: i, props: r, _owner: l }
}
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qh, _context: e }),
    (e.Consumer = e)
  )
}
I.createElement = Af
I.createFactory = function (e) {
  var t = Af.bind(null, e)
  return (t.type = e), t
}
I.createRef = function () {
  return { current: null }
}
I.forwardRef = function (e) {
  return { $$typeof: Jh, render: e }
}
I.isValidElement = ys
I.lazy = function (e) {
  return { $$typeof: Xh, _payload: { _status: -1, _result: e }, _init: em }
}
I.memo = function (e, t) {
  return { $$typeof: Gh, type: e, compare: t === void 0 ? null : t }
}
I.startTransition = function (e) {
  var t = Ro.transition
  Ro.transition = {}
  try {
    e()
  } finally {
    Ro.transition = t
  }
}
I.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
I.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t)
}
I.useContext = function (e) {
  return Ee.current.useContext(e)
}
I.useDebugValue = function () {}
I.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e)
}
I.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t)
}
I.useId = function () {
  return Ee.current.useId()
}
I.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n)
}
I.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t)
}
I.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t)
}
I.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t)
}
I.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n)
}
I.useRef = function (e) {
  return Ee.current.useRef(e)
}
I.useState = function (e) {
  return Ee.current.useState(e)
}
I.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n)
}
I.useTransition = function () {
  return Ee.current.useTransition()
}
I.version = '18.2.0'
;(function (e) {
  e.exports = I
})(Uh)
const vs = jh(x),
  nu = Dh({ __proto__: null, default: vs }, [x])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm = x,
  rm = Symbol.for('react.element'),
  om = Symbol.for('react.fragment'),
  im = Object.prototype.hasOwnProperty,
  lm = nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  um = { key: !0, ref: !0, __self: !0, __source: !0 }
function zf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) im.call(t, r) && !um.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: rm, type: e, key: i, ref: l, props: o, _owner: lm.current }
}
xi.Fragment = om
xi.jsx = zf
xi.jsxs = zf
;(function (e) {
  e.exports = xi
})(Fh)
const fn = Or.Fragment,
  k = Or.jsx,
  $ = Or.jsxs
var ru = {},
  Vo = {},
  sm = {
    get exports() {
      return Vo
    },
    set exports(e) {
      Vo = e
    },
  },
  Ae = {},
  ou = {},
  am = {
    get exports() {
      return ou
    },
    set exports(e) {
      ou = e
    },
  },
  If = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(N, A) {
    var z = N.length
    N.push(A)
    e: for (; 0 < z; ) {
      var Y = (z - 1) >>> 1,
        oe = N[Y]
      if (0 < o(oe, A)) (N[Y] = A), (N[z] = oe), (z = Y)
      else break e
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var A = N[0],
      z = N.pop()
    if (z !== A) {
      N[0] = z
      e: for (var Y = 0, oe = N.length, lo = oe >>> 1; Y < lo; ) {
        var qt = 2 * (Y + 1) - 1,
          ml = N[qt],
          Gt = qt + 1,
          uo = N[Gt]
        if (0 > o(ml, z))
          Gt < oe && 0 > o(uo, ml)
            ? ((N[Y] = uo), (N[Gt] = z), (Y = Gt))
            : ((N[Y] = ml), (N[qt] = z), (Y = qt))
        else if (Gt < oe && 0 > o(uo, z)) (N[Y] = uo), (N[Gt] = z), (Y = Gt)
        else break e
      }
    }
    return A
  }
  function o(N, A) {
    var z = N.sortIndex - A.sortIndex
    return z !== 0 ? z : N.id - A.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var l = Date,
      u = l.now()
    e.unstable_now = function () {
      return l.now() - u
    }
  }
  var s = [],
    a = [],
    c = 1,
    p = null,
    d = 3,
    v = !1,
    g = !1,
    m = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function y(N) {
    for (var A = n(a); A !== null; ) {
      if (A.callback === null) r(a)
      else if (A.startTime <= N) r(a), (A.sortIndex = A.expirationTime), t(s, A)
      else break
      A = n(a)
    }
  }
  function w(N) {
    if (((m = !1), y(N), !g))
      if (n(s) !== null) (g = !0), pl(P)
      else {
        var A = n(a)
        A !== null && hl(w, A.startTime - N)
      }
  }
  function P(N, A) {
    ;(g = !1), m && ((m = !1), h(T), (T = -1)), (v = !0)
    var z = d
    try {
      for (
        y(A), p = n(s);
        p !== null && (!(p.expirationTime > A) || (N && !se()));

      ) {
        var Y = p.callback
        if (typeof Y == 'function') {
          ;(p.callback = null), (d = p.priorityLevel)
          var oe = Y(p.expirationTime <= A)
          ;(A = e.unstable_now()),
            typeof oe == 'function' ? (p.callback = oe) : p === n(s) && r(s),
            y(A)
        } else r(s)
        p = n(s)
      }
      if (p !== null) var lo = !0
      else {
        var qt = n(a)
        qt !== null && hl(w, qt.startTime - A), (lo = !1)
      }
      return lo
    } finally {
      ;(p = null), (d = z), (v = !1)
    }
  }
  var R = !1,
    O = null,
    T = -1,
    B = 5,
    L = -1
  function se() {
    return !(e.unstable_now() - L < B)
  }
  function rr() {
    if (O !== null) {
      var N = e.unstable_now()
      L = N
      var A = !0
      try {
        A = O(!0, N)
      } finally {
        A ? or() : ((R = !1), (O = null))
      }
    } else R = !1
  }
  var or
  if (typeof f == 'function')
    or = function () {
      f(rr)
    }
  else if (typeof MessageChannel < 'u') {
    var Aa = new MessageChannel(),
      Mh = Aa.port2
    ;(Aa.port1.onmessage = rr),
      (or = function () {
        Mh.postMessage(null)
      })
  } else
    or = function () {
      E(rr, 0)
    }
  function pl(N) {
    ;(O = N), R || ((R = !0), or())
  }
  function hl(N, A) {
    T = E(function () {
      N(e.unstable_now())
    }, A)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), pl(P))
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (B = 0 < N ? Math.floor(1e3 / N) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s)
    }),
    (e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3
          break
        default:
          A = d
      }
      var z = d
      d = A
      try {
        return N()
      } finally {
        d = z
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          N = 3
      }
      var z = d
      d = N
      try {
        return A()
      } finally {
        d = z
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, z) {
      var Y = e.unstable_now()
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? Y + z : Y))
          : (z = Y),
        N)
      ) {
        case 1:
          var oe = -1
          break
        case 2:
          oe = 250
          break
        case 5:
          oe = 1073741823
          break
        case 4:
          oe = 1e4
          break
        default:
          oe = 5e3
      }
      return (
        (oe = z + oe),
        (N = {
          id: c++,
          callback: A,
          priorityLevel: N,
          startTime: z,
          expirationTime: oe,
          sortIndex: -1,
        }),
        z > Y
          ? ((N.sortIndex = z),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (m ? (h(T), (T = -1)) : (m = !0), hl(w, z - Y)))
          : ((N.sortIndex = oe), t(s, N), g || v || ((g = !0), pl(P))),
        N
      )
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (N) {
      var A = d
      return function () {
        var z = d
        d = A
        try {
          return N.apply(this, arguments)
        } finally {
          d = z
        }
      }
    })
})(If)
;(function (e) {
  e.exports = If
})(am)
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf = x,
  Le = ou
function C(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Df = new Set(),
  Tr = {}
function dn(e, t) {
  jn(e, t), jn(e + 'Capture', t)
}
function jn(e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) Df.add(t[e])
}
var ct = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  iu = Object.prototype.hasOwnProperty,
  cm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Da = {},
  ja = {}
function fm(e) {
  return iu.call(ja, e)
    ? !0
    : iu.call(Da, e)
    ? !1
    : cm.test(e)
    ? (ja[e] = !0)
    : ((Da[e] = !0), !1)
}
function dm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function pm(e, t, n, r) {
  if (t === null || typeof t > 'u' || dm(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ke(e, t, n, r, o, i, l) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l)
}
var fe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new ke(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  fe[t] = new ke(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  fe[e] = new ke(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  fe[e] = new ke(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  fe[e] = new ke(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var gs = /[\-:]([a-z])/g
function ws(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(gs, ws)
    fe[t] = new ke(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(gs, ws)
    fe[t] = new ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(gs, ws)
  fe[t] = new ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
fe.xlinkHref = new ke(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Ss(e, t, n, r) {
  var o = fe.hasOwnProperty(t) ? fe[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (pm(t, n, o, r) && (n = null),
    r || o === null
      ? fm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var mt = Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ao = Symbol.for('react.element'),
  gn = Symbol.for('react.portal'),
  wn = Symbol.for('react.fragment'),
  Es = Symbol.for('react.strict_mode'),
  lu = Symbol.for('react.profiler'),
  jf = Symbol.for('react.provider'),
  Ff = Symbol.for('react.context'),
  ks = Symbol.for('react.forward_ref'),
  uu = Symbol.for('react.suspense'),
  su = Symbol.for('react.suspense_list'),
  xs = Symbol.for('react.memo'),
  St = Symbol.for('react.lazy'),
  Uf = Symbol.for('react.offscreen'),
  Fa = Symbol.iterator
function ir(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Fa && e[Fa]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var G = Object.assign,
  vl
function hr(e) {
  if (vl === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      vl = (t && t[1]) || ''
    }
  return (
    `
` +
    vl +
    e
  )
}
var gl = !1
function wl(e, t) {
  if (!e || gl) return ''
  gl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (a) {
          var r = a
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (a) {
          r = a
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (a) {
        r = a
      }
      e()
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var s =
                  `
` + o[l].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                )
              }
            while (1 <= l && 0 <= u)
          break
        }
    }
  } finally {
    ;(gl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? hr(e) : ''
}
function hm(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type)
    case 16:
      return hr('Lazy')
    case 13:
      return hr('Suspense')
    case 19:
      return hr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = wl(e.type, !1)), e
    case 11:
      return (e = wl(e.type.render, !1)), e
    case 1:
      return (e = wl(e.type, !0)), e
    default:
      return ''
  }
}
function au(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case wn:
      return 'Fragment'
    case gn:
      return 'Portal'
    case lu:
      return 'Profiler'
    case Es:
      return 'StrictMode'
    case uu:
      return 'Suspense'
    case su:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ff:
        return (e.displayName || 'Context') + '.Consumer'
      case jf:
        return (e._context.displayName || 'Context') + '.Provider'
      case ks:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case xs:
        return (
          (t = e.displayName || null), t !== null ? t : au(e.type) || 'Memo'
        )
      case St:
        ;(t = e._payload), (e = e._init)
        try {
          return au(e(t))
        } catch {}
    }
  return null
}
function mm(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return au(t)
    case 8:
      return t === Es ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Ut(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Bf(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function ym(e) {
  var t = Bf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (l) {
          ;(r = '' + l), i.call(this, l)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (l) {
          r = '' + l
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function co(e) {
  e._valueTracker || (e._valueTracker = ym(e))
}
function Vf(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Bf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Wo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function cu(e, t) {
  var n = t.checked
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function Ua(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Wf(e, t) {
  ;(t = t.checked), t != null && Ss(e, 'checked', t, !1)
}
function fu(e, t) {
  Wf(e, t)
  var n = Ut(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? du(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && du(e, t.type, Ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Ba(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function du(e, t, n) {
  ;(t !== 'number' || Wo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var mr = Array.isArray
function Tn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Ut(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function pu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91))
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Va(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92))
      if (mr(n)) {
        if (1 < n.length) throw Error(C(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Ut(n) }
}
function Hf(e, t) {
  var n = Ut(t.value),
    r = Ut(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Wa(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Qf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function hu(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Qf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var fo,
  Kf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        fo = fo || document.createElement('div'),
          fo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = fo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Lr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Sr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  vm = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Sr).forEach(function (e) {
  vm.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e])
  })
})
function Jf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
    ? ('' + t).trim()
    : t + 'px'
}
function qf(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Jf(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var gm = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function mu(e, t) {
  if (t) {
    if (gm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62))
  }
}
function yu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var vu = null
function Cs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var gu = null,
  Ln = null,
  $n = null
function Ha(e) {
  if ((e = to(e))) {
    if (typeof gu != 'function') throw Error(C(280))
    var t = e.stateNode
    t && ((t = Ni(t)), gu(e.stateNode, e.type, t))
  }
}
function Gf(e) {
  Ln ? ($n ? $n.push(e) : ($n = [e])) : (Ln = e)
}
function Xf() {
  if (Ln) {
    var e = Ln,
      t = $n
    if ((($n = Ln = null), Ha(e), t)) for (e = 0; e < t.length; e++) Ha(t[e])
  }
}
function Yf(e, t) {
  return e(t)
}
function Zf() {}
var Sl = !1
function bf(e, t, n) {
  if (Sl) return e(t, n)
  Sl = !0
  try {
    return Yf(e, t, n)
  } finally {
    ;(Sl = !1), (Ln !== null || $n !== null) && (Zf(), Xf())
  }
}
function $r(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Ni(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n))
  return n
}
var wu = !1
if (ct)
  try {
    var lr = {}
    Object.defineProperty(lr, 'passive', {
      get: function () {
        wu = !0
      },
    }),
      window.addEventListener('test', lr, lr),
      window.removeEventListener('test', lr, lr)
  } catch {
    wu = !1
  }
function wm(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, a)
  } catch (c) {
    this.onError(c)
  }
}
var Er = !1,
  Ho = null,
  Qo = !1,
  Su = null,
  Sm = {
    onError: function (e) {
      ;(Er = !0), (Ho = e)
    },
  }
function Em(e, t, n, r, o, i, l, u, s) {
  ;(Er = !1), (Ho = null), wm.apply(Sm, arguments)
}
function km(e, t, n, r, o, i, l, u, s) {
  if ((Em.apply(this, arguments), Er)) {
    if (Er) {
      var a = Ho
      ;(Er = !1), (Ho = null)
    } else throw Error(C(198))
    Qo || ((Qo = !0), (Su = a))
  }
}
function pn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function ed(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function Qa(e) {
  if (pn(e) !== e) throw Error(C(188))
}
function xm(e) {
  var t = e.alternate
  if (!t) {
    if (((t = pn(e)), t === null)) throw Error(C(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Qa(o), e
        if (i === r) return Qa(o), t
        i = i.sibling
      }
      throw Error(C(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          ;(l = !0), (n = o), (r = i)
          break
        }
        if (u === r) {
          ;(l = !0), (r = o), (n = i)
          break
        }
        u = u.sibling
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            ;(l = !0), (n = i), (r = o)
            break
          }
          if (u === r) {
            ;(l = !0), (r = i), (n = o)
            break
          }
          u = u.sibling
        }
        if (!l) throw Error(C(189))
      }
    }
    if (n.alternate !== r) throw Error(C(190))
  }
  if (n.tag !== 3) throw Error(C(188))
  return n.stateNode.current === n ? e : t
}
function td(e) {
  return (e = xm(e)), e !== null ? nd(e) : null
}
function nd(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = nd(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var rd = Le.unstable_scheduleCallback,
  Ka = Le.unstable_cancelCallback,
  Cm = Le.unstable_shouldYield,
  Pm = Le.unstable_requestPaint,
  Z = Le.unstable_now,
  _m = Le.unstable_getCurrentPriorityLevel,
  Ps = Le.unstable_ImmediatePriority,
  od = Le.unstable_UserBlockingPriority,
  Ko = Le.unstable_NormalPriority,
  Rm = Le.unstable_LowPriority,
  id = Le.unstable_IdlePriority,
  Ci = null,
  tt = null
function Nm(e) {
  if (tt && typeof tt.onCommitFiberRoot == 'function')
    try {
      tt.onCommitFiberRoot(Ci, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : Lm,
  Om = Math.log,
  Tm = Math.LN2
function Lm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Om(e) / Tm) | 0)) | 0
}
var po = 64,
  ho = 4194304
function yr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Jo(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455
  if (l !== 0) {
    var u = l & ~o
    u !== 0 ? (r = yr(u)) : ((i &= l), i !== 0 && (r = yr(i)))
  } else (l = n & ~o), l !== 0 ? (r = yr(l)) : i !== 0 && (r = yr(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function $m(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Am(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - qe(i),
      u = 1 << l,
      s = o[l]
    s === -1
      ? (!(u & n) || u & r) && (o[l] = $m(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u)
  }
}
function Eu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function ld() {
  var e = po
  return (po <<= 1), !(po & 4194240) && (po = 64), e
}
function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function br(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n)
}
function zm(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - qe(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function _s(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var j = 0
function ud(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var sd,
  Rs,
  ad,
  cd,
  fd,
  ku = !1,
  mo = [],
  Nt = null,
  Ot = null,
  Tt = null,
  Ar = new Map(),
  zr = new Map(),
  kt = [],
  Im =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Ja(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Nt = null
      break
    case 'dragenter':
    case 'dragleave':
      Ot = null
      break
    case 'mouseover':
    case 'mouseout':
      Tt = null
      break
    case 'pointerover':
    case 'pointerout':
      Ar.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      zr.delete(t.pointerId)
  }
}
function ur(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = to(t)), t !== null && Rs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function Mm(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Nt = ur(Nt, e, t, n, r, o)), !0
    case 'dragenter':
      return (Ot = ur(Ot, e, t, n, r, o)), !0
    case 'mouseover':
      return (Tt = ur(Tt, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return Ar.set(i, ur(Ar.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), zr.set(i, ur(zr.get(i) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function dd(e) {
  var t = bt(e.target)
  if (t !== null) {
    var n = pn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ed(n)), t !== null)) {
          ;(e.blockedOn = t),
            fd(e.priority, function () {
              ad(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function No(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(vu = r), n.target.dispatchEvent(r), (vu = null)
    } else return (t = to(n)), t !== null && Rs(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function qa(e, t, n) {
  No(e) && n.delete(t)
}
function Dm() {
  ;(ku = !1),
    Nt !== null && No(Nt) && (Nt = null),
    Ot !== null && No(Ot) && (Ot = null),
    Tt !== null && No(Tt) && (Tt = null),
    Ar.forEach(qa),
    zr.forEach(qa)
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ku ||
      ((ku = !0), Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Dm)))
}
function Ir(e) {
  function t(o) {
    return sr(o, e)
  }
  if (0 < mo.length) {
    sr(mo[0], e)
    for (var n = 1; n < mo.length; n++) {
      var r = mo[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Nt !== null && sr(Nt, e),
      Ot !== null && sr(Ot, e),
      Tt !== null && sr(Tt, e),
      Ar.forEach(t),
      zr.forEach(t),
      n = 0;
    n < kt.length;
    n++
  )
    (r = kt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); )
    dd(n), n.blockedOn === null && kt.shift()
}
var An = mt.ReactCurrentBatchConfig,
  qo = !0
function jm(e, t, n, r) {
  var o = j,
    i = An.transition
  An.transition = null
  try {
    ;(j = 1), Ns(e, t, n, r)
  } finally {
    ;(j = o), (An.transition = i)
  }
}
function Fm(e, t, n, r) {
  var o = j,
    i = An.transition
  An.transition = null
  try {
    ;(j = 4), Ns(e, t, n, r)
  } finally {
    ;(j = o), (An.transition = i)
  }
}
function Ns(e, t, n, r) {
  if (qo) {
    var o = xu(e, t, n, r)
    if (o === null) Ll(e, t, r, Go, n), Ja(e, r)
    else if (Mm(o, e, t, n, r)) r.stopPropagation()
    else if ((Ja(e, r), t & 4 && -1 < Im.indexOf(e))) {
      for (; o !== null; ) {
        var i = to(o)
        if (
          (i !== null && sd(i),
          (i = xu(e, t, n, r)),
          i === null && Ll(e, t, r, Go, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Ll(e, t, r, null, n)
  }
}
var Go = null
function xu(e, t, n, r) {
  if (((Go = null), (e = Cs(r)), (e = bt(e)), e !== null))
    if (((t = pn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = ed(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Go = e), null
}
function pd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (_m()) {
        case Ps:
          return 1
        case od:
          return 4
        case Ko:
        case Rm:
          return 16
        case id:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Pt = null,
  Os = null,
  Oo = null
function hd() {
  if (Oo) return Oo
  var e,
    t = Os,
    n = t.length,
    r,
    o = 'value' in Pt ? Pt.value : Pt.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Oo = o.slice(e, 1 < r ? 1 - r : void 0))
}
function To(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function yo() {
  return !0
}
function Ga() {
  return !1
}
function ze(e) {
  function t(n, r, o, i, l) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null)
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yo
        : Ga),
      (this.isPropagationStopped = Ga),
      this
    )
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = yo))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = yo))
      },
      persist: function () {},
      isPersistent: yo,
    }),
    t
  )
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ts = ze(Gn),
  eo = G({}, Gn, { view: 0, detail: 0 }),
  Um = ze(eo),
  kl,
  xl,
  ar,
  Pi = G({}, eo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ls,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ar &&
            (ar && e.type === 'mousemove'
              ? ((kl = e.screenX - ar.screenX), (xl = e.screenY - ar.screenY))
              : (xl = kl = 0),
            (ar = e)),
          kl)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : xl
    },
  }),
  Xa = ze(Pi),
  Bm = G({}, Pi, { dataTransfer: 0 }),
  Vm = ze(Bm),
  Wm = G({}, eo, { relatedTarget: 0 }),
  Cl = ze(Wm),
  Hm = G({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qm = ze(Hm),
  Km = G({}, Gn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Jm = ze(Km),
  qm = G({}, Gn, { data: 0 }),
  Ya = ze(qm),
  Gm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Xm = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Ym = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Zm(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Ym[e]) ? !!t[e] : !1
}
function Ls() {
  return Zm
}
var bm = G({}, eo, {
    key: function (e) {
      if (e.key) {
        var t = Gm[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = To(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Xm[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ls,
    charCode: function (e) {
      return e.type === 'keypress' ? To(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? To(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  ey = ze(bm),
  ty = G({}, Pi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Za = ze(ty),
  ny = G({}, eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ls,
  }),
  ry = ze(ny),
  oy = G({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iy = ze(oy),
  ly = G({}, Pi, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  uy = ze(ly),
  sy = [9, 13, 27, 32],
  $s = ct && 'CompositionEvent' in window,
  kr = null
ct && 'documentMode' in document && (kr = document.documentMode)
var ay = ct && 'TextEvent' in window && !kr,
  md = ct && (!$s || (kr && 8 < kr && 11 >= kr)),
  ba = String.fromCharCode(32),
  ec = !1
function yd(e, t) {
  switch (e) {
    case 'keyup':
      return sy.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function vd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Sn = !1
function cy(e, t) {
  switch (e) {
    case 'compositionend':
      return vd(t)
    case 'keypress':
      return t.which !== 32 ? null : ((ec = !0), ba)
    case 'textInput':
      return (e = t.data), e === ba && ec ? null : e
    default:
      return null
  }
}
function fy(e, t) {
  if (Sn)
    return e === 'compositionend' || (!$s && yd(e, t))
      ? ((e = hd()), (Oo = Os = Pt = null), (Sn = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return md && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var dy = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function tc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!dy[e.type] : t === 'textarea'
}
function gd(e, t, n, r) {
  Gf(r),
    (t = Xo(t, 'onChange')),
    0 < t.length &&
      ((n = new Ts('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var xr = null,
  Mr = null
function py(e) {
  Od(e, 0)
}
function _i(e) {
  var t = xn(e)
  if (Vf(t)) return e
}
function hy(e, t) {
  if (e === 'change') return t
}
var wd = !1
if (ct) {
  var Pl
  if (ct) {
    var _l = 'oninput' in document
    if (!_l) {
      var nc = document.createElement('div')
      nc.setAttribute('oninput', 'return;'),
        (_l = typeof nc.oninput == 'function')
    }
    Pl = _l
  } else Pl = !1
  wd = Pl && (!document.documentMode || 9 < document.documentMode)
}
function rc() {
  xr && (xr.detachEvent('onpropertychange', Sd), (Mr = xr = null))
}
function Sd(e) {
  if (e.propertyName === 'value' && _i(Mr)) {
    var t = []
    gd(t, Mr, e, Cs(e)), bf(py, t)
  }
}
function my(e, t, n) {
  e === 'focusin'
    ? (rc(), (xr = t), (Mr = n), xr.attachEvent('onpropertychange', Sd))
    : e === 'focusout' && rc()
}
function yy(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return _i(Mr)
}
function vy(e, t) {
  if (e === 'click') return _i(t)
}
function gy(e, t) {
  if (e === 'input' || e === 'change') return _i(t)
}
function wy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Xe = typeof Object.is == 'function' ? Object.is : wy
function Dr(e, t) {
  if (Xe(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!iu.call(t, o) || !Xe(e[o], t[o])) return !1
  }
  return !0
}
function oc(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function ic(e, t) {
  var n = oc(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = oc(n)
  }
}
function Ed(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ed(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function kd() {
  for (var e = window, t = Wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Wo(e.document)
  }
  return t
}
function As(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function Sy(e) {
  var t = kd(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ed(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && As(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = ic(n, i))
        var l = ic(n, r)
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Ey = ct && 'documentMode' in document && 11 >= document.documentMode,
  En = null,
  Cu = null,
  Cr = null,
  Pu = !1
function lc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Pu ||
    En == null ||
    En !== Wo(r) ||
    ((r = En),
    'selectionStart' in r && As(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && Dr(Cr, r)) ||
      ((Cr = r),
      (r = Xo(Cu, 'onSelect')),
      0 < r.length &&
        ((t = new Ts('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = En))))
}
function vo(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var kn = {
    animationend: vo('Animation', 'AnimationEnd'),
    animationiteration: vo('Animation', 'AnimationIteration'),
    animationstart: vo('Animation', 'AnimationStart'),
    transitionend: vo('Transition', 'TransitionEnd'),
  },
  Rl = {},
  xd = {}
ct &&
  ((xd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  'TransitionEvent' in window || delete kn.transitionend.transition)
function Ri(e) {
  if (Rl[e]) return Rl[e]
  if (!kn[e]) return e
  var t = kn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in xd) return (Rl[e] = t[n])
  return e
}
var Cd = Ri('animationend'),
  Pd = Ri('animationiteration'),
  _d = Ri('animationstart'),
  Rd = Ri('transitionend'),
  Nd = new Map(),
  uc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function Qt(e, t) {
  Nd.set(e, t), dn(t, [e])
}
for (var Nl = 0; Nl < uc.length; Nl++) {
  var Ol = uc[Nl],
    ky = Ol.toLowerCase(),
    xy = Ol[0].toUpperCase() + Ol.slice(1)
  Qt(ky, 'on' + xy)
}
Qt(Cd, 'onAnimationEnd')
Qt(Pd, 'onAnimationIteration')
Qt(_d, 'onAnimationStart')
Qt('dblclick', 'onDoubleClick')
Qt('focusin', 'onFocus')
Qt('focusout', 'onBlur')
Qt(Rd, 'onTransitionEnd')
jn('onMouseEnter', ['mouseout', 'mouseover'])
jn('onMouseLeave', ['mouseout', 'mouseover'])
jn('onPointerEnter', ['pointerout', 'pointerover'])
jn('onPointerLeave', ['pointerout', 'pointerover'])
dn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
dn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
dn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
dn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
dn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
dn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var vr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  Cy = new Set('cancel close invalid load scroll toggle'.split(' ').concat(vr))
function sc(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), km(r, t, void 0, e), (e.currentTarget = null)
}
function Od(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var u = r[l],
            s = u.instance,
            a = u.currentTarget
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e
          sc(o, u, a), (i = s)
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && o.isPropagationStopped())
          )
            break e
          sc(o, u, a), (i = s)
        }
    }
  }
  if (Qo) throw ((e = Su), (Qo = !1), (Su = null), e)
}
function W(e, t) {
  var n = t[Tu]
  n === void 0 && (n = t[Tu] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Td(t, e, 2, !1), n.add(r))
}
function Tl(e, t, n) {
  var r = 0
  t && (r |= 4), Td(n, e, r, t)
}
var go = '_reactListening' + Math.random().toString(36).slice(2)
function jr(e) {
  if (!e[go]) {
    ;(e[go] = !0),
      Df.forEach(function (n) {
        n !== 'selectionchange' && (Cy.has(n) || Tl(n, !1, e), Tl(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[go] || ((t[go] = !0), Tl('selectionchange', !1, t))
  }
}
function Td(e, t, n, r) {
  switch (pd(t)) {
    case 1:
      var o = jm
      break
    case 4:
      o = Fm
      break
    default:
      o = Ns
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !wu ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1)
}
function Ll(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var l = r.tag
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return
            l = l.return
          }
        for (; u !== null; ) {
          if (((l = bt(u)), l === null)) return
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  bf(function () {
    var a = i,
      c = Cs(n),
      p = []
    e: {
      var d = Nd.get(e)
      if (d !== void 0) {
        var v = Ts,
          g = e
        switch (e) {
          case 'keypress':
            if (To(n) === 0) break e
          case 'keydown':
          case 'keyup':
            v = ey
            break
          case 'focusin':
            ;(g = 'focus'), (v = Cl)
            break
          case 'focusout':
            ;(g = 'blur'), (v = Cl)
            break
          case 'beforeblur':
          case 'afterblur':
            v = Cl
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Xa
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Vm
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = ry
            break
          case Cd:
          case Pd:
          case _d:
            v = Qm
            break
          case Rd:
            v = iy
            break
          case 'scroll':
            v = Um
            break
          case 'wheel':
            v = uy
            break
          case 'copy':
          case 'cut':
          case 'paste':
            v = Jm
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = Za
        }
        var m = (t & 4) !== 0,
          E = !m && e === 'scroll',
          h = m ? (d !== null ? d + 'Capture' : null) : d
        m = []
        for (var f = a, y; f !== null; ) {
          y = f
          var w = y.stateNode
          if (
            (y.tag === 5 &&
              w !== null &&
              ((y = w),
              h !== null && ((w = $r(f, h)), w != null && m.push(Fr(f, w, y)))),
            E)
          )
            break
          f = f.return
        }
        0 < m.length &&
          ((d = new v(d, g, null, n, c)), p.push({ event: d, listeners: m }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== vu &&
            (g = n.relatedTarget || n.fromElement) &&
            (bt(g) || g[ft]))
        )
          break e
        if (
          (v || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = a),
              (g = g ? bt(g) : null),
              g !== null &&
                ((E = pn(g)), g !== E || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = a)),
          v !== g)
        ) {
          if (
            ((m = Xa),
            (w = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((m = Za),
              (w = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (f = 'pointer')),
            (E = v == null ? d : xn(v)),
            (y = g == null ? d : xn(g)),
            (d = new m(w, f + 'leave', v, n, c)),
            (d.target = E),
            (d.relatedTarget = y),
            (w = null),
            bt(c) === a &&
              ((m = new m(h, f + 'enter', g, n, c)),
              (m.target = y),
              (m.relatedTarget = E),
              (w = m)),
            (E = w),
            v && g)
          )
            t: {
              for (m = v, h = g, f = 0, y = m; y; y = vn(y)) f++
              for (y = 0, w = h; w; w = vn(w)) y++
              for (; 0 < f - y; ) (m = vn(m)), f--
              for (; 0 < y - f; ) (h = vn(h)), y--
              for (; f--; ) {
                if (m === h || (h !== null && m === h.alternate)) break t
                ;(m = vn(m)), (h = vn(h))
              }
              m = null
            }
          else m = null
          v !== null && ac(p, d, v, m, !1),
            g !== null && E !== null && ac(p, E, g, m, !0)
        }
      }
      e: {
        if (
          ((d = a ? xn(a) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var P = hy
        else if (tc(d))
          if (wd) P = gy
          else {
            P = yy
            var R = my
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (P = vy)
        if (P && (P = P(e, a))) {
          gd(p, P, n, c)
          break e
        }
        R && R(e, d, a),
          e === 'focusout' &&
            (R = d._wrapperState) &&
            R.controlled &&
            d.type === 'number' &&
            du(d, 'number', d.value)
      }
      switch (((R = a ? xn(a) : window), e)) {
        case 'focusin':
          ;(tc(R) || R.contentEditable === 'true') &&
            ((En = R), (Cu = a), (Cr = null))
          break
        case 'focusout':
          Cr = Cu = En = null
          break
        case 'mousedown':
          Pu = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Pu = !1), lc(p, n, c)
          break
        case 'selectionchange':
          if (Ey) break
        case 'keydown':
        case 'keyup':
          lc(p, n, c)
      }
      var O
      if ($s)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        Sn
          ? yd(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (md &&
          n.locale !== 'ko' &&
          (Sn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Sn && (O = hd())
            : ((Pt = c),
              (Os = 'value' in Pt ? Pt.value : Pt.textContent),
              (Sn = !0))),
        (R = Xo(a, T)),
        0 < R.length &&
          ((T = new Ya(T, e, null, n, c)),
          p.push({ event: T, listeners: R }),
          O ? (T.data = O) : ((O = vd(n)), O !== null && (T.data = O)))),
        (O = ay ? cy(e, n) : fy(e, n)) &&
          ((a = Xo(a, 'onBeforeInput')),
          0 < a.length &&
            ((c = new Ya('onBeforeInput', 'beforeinput', null, n, c)),
            p.push({ event: c, listeners: a }),
            (c.data = O)))
    }
    Od(p, t)
  })
}
function Fr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Xo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = $r(e, n)),
      i != null && r.unshift(Fr(e, i, o)),
      (i = $r(e, t)),
      i != null && r.push(Fr(e, i, o))),
      (e = e.return)
  }
  return r
}
function vn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function ac(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode
    if (s !== null && s === r) break
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = $r(n, i)), s != null && l.unshift(Fr(n, s, u)))
        : o || ((s = $r(n, i)), s != null && l.push(Fr(n, s, u)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
var Py = /\r\n?/g,
  _y = /\u0000|\uFFFD/g
function cc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Py,
      `
`,
    )
    .replace(_y, '')
}
function wo(e, t, n) {
  if (((t = cc(t)), cc(e) !== t && n)) throw Error(C(425))
}
function Yo() {}
var _u = null,
  Ru = null
function Nu(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ou = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ry = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  fc = typeof Promise == 'function' ? Promise : void 0,
  Ny =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof fc < 'u'
      ? function (e) {
          return fc.resolve(null).then(e).catch(Oy)
        }
      : Ou
function Oy(e) {
  setTimeout(function () {
    throw e
  })
}
function $l(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Ir(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  Ir(t)
}
function Lt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function dc(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Xn = Math.random().toString(36).slice(2),
  be = '__reactFiber$' + Xn,
  Ur = '__reactProps$' + Xn,
  ft = '__reactContainer$' + Xn,
  Tu = '__reactEvents$' + Xn,
  Ty = '__reactListeners$' + Xn,
  Ly = '__reactHandles$' + Xn
function bt(e) {
  var t = e[be]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = dc(e); e !== null; ) {
          if ((n = e[be])) return n
          e = dc(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function to(e) {
  return (
    (e = e[be] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(C(33))
}
function Ni(e) {
  return e[Ur] || null
}
var Lu = [],
  Cn = -1
function Kt(e) {
  return { current: e }
}
function H(e) {
  0 > Cn || ((e.current = Lu[Cn]), (Lu[Cn] = null), Cn--)
}
function V(e, t) {
  Cn++, (Lu[Cn] = e.current), (e.current = t)
}
var Bt = {},
  ve = Kt(Bt),
  Pe = Kt(!1),
  on = Bt
function Fn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Bt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function _e(e) {
  return (e = e.childContextTypes), e != null
}
function Zo() {
  H(Pe), H(ve)
}
function pc(e, t, n) {
  if (ve.current !== Bt) throw Error(C(168))
  V(ve, t), V(Pe, n)
}
function Ld(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(C(108, mm(e) || 'Unknown', o))
  return G({}, n, r)
}
function bo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (on = ve.current),
    V(ve, e),
    V(Pe, Pe.current),
    !0
  )
}
function hc(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(C(169))
  n
    ? ((e = Ld(e, t, on)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Pe),
      H(ve),
      V(ve, e))
    : H(Pe),
    V(Pe, n)
}
var it = null,
  Oi = !1,
  Al = !1
function $d(e) {
  it === null ? (it = [e]) : it.push(e)
}
function $y(e) {
  ;(Oi = !0), $d(e)
}
function Jt() {
  if (!Al && it !== null) {
    Al = !0
    var e = 0,
      t = j
    try {
      var n = it
      for (j = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(it = null), (Oi = !1)
    } catch (o) {
      throw (it !== null && (it = it.slice(e + 1)), rd(Ps, Jt), o)
    } finally {
      ;(j = t), (Al = !1)
    }
  }
  return null
}
var Pn = [],
  _n = 0,
  ei = null,
  ti = 0,
  Me = [],
  De = 0,
  ln = null,
  lt = 1,
  ut = ''
function Xt(e, t) {
  ;(Pn[_n++] = ti), (Pn[_n++] = ei), (ei = e), (ti = t)
}
function Ad(e, t, n) {
  ;(Me[De++] = lt), (Me[De++] = ut), (Me[De++] = ln), (ln = e)
  var r = lt
  e = ut
  var o = 32 - qe(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - qe(t) + o
  if (30 < i) {
    var l = o - (o % 5)
    ;(i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (lt = (1 << (32 - qe(t) + o)) | (n << o) | r),
      (ut = i + e)
  } else (lt = (1 << i) | (n << o) | r), (ut = e)
}
function zs(e) {
  e.return !== null && (Xt(e, 1), Ad(e, 1, 0))
}
function Is(e) {
  for (; e === ei; )
    (ei = Pn[--_n]), (Pn[_n] = null), (ti = Pn[--_n]), (Pn[_n] = null)
  for (; e === ln; )
    (ln = Me[--De]),
      (Me[De] = null),
      (ut = Me[--De]),
      (Me[De] = null),
      (lt = Me[--De]),
      (Me[De] = null)
}
var Te = null,
  Oe = null,
  K = !1,
  Ke = null
function zd(e, t) {
  var n = je(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function mc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (Oe = Lt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (Oe = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ln !== null ? { id: lt, overflow: ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Te = e),
            (Oe = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function $u(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Au(e) {
  if (K) {
    var t = Oe
    if (t) {
      var n = t
      if (!mc(e, t)) {
        if ($u(e)) throw Error(C(418))
        t = Lt(n.nextSibling)
        var r = Te
        t && mc(e, t)
          ? zd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Te = e))
      }
    } else {
      if ($u(e)) throw Error(C(418))
      ;(e.flags = (e.flags & -4097) | 2), (K = !1), (Te = e)
    }
  }
}
function yc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Te = e
}
function So(e) {
  if (e !== Te) return !1
  if (!K) return yc(e), (K = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Nu(e.type, e.memoizedProps))),
    t && (t = Oe))
  ) {
    if ($u(e)) throw (Id(), Error(C(418)))
    for (; t; ) zd(e, t), (t = Lt(t.nextSibling))
  }
  if ((yc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Oe = Lt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Oe = null
    }
  } else Oe = Te ? Lt(e.stateNode.nextSibling) : null
  return !0
}
function Id() {
  for (var e = Oe; e; ) e = Lt(e.nextSibling)
}
function Un() {
  ;(Oe = Te = null), (K = !1)
}
function Ms(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e)
}
var Ay = mt.ReactCurrentBatchConfig
function He(e, t) {
  if (e && e.defaultProps) {
    ;(t = G({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var ni = Kt(null),
  ri = null,
  Rn = null,
  Ds = null
function js() {
  Ds = Rn = ri = null
}
function Fs(e) {
  var t = ni.current
  H(ni), (e._currentValue = t)
}
function zu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function zn(e, t) {
  ;(ri = e),
    (Ds = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null))
}
function Ue(e) {
  var t = e._currentValue
  if (Ds !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (ri === null) throw Error(C(308))
      ;(Rn = e), (ri.dependencies = { lanes: 0, firstContext: e })
    } else Rn = Rn.next = e
  return t
}
var en = null
function Us(e) {
  en === null ? (en = [e]) : en.push(e)
}
function Md(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Us(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    dt(e, r)
  )
}
function dt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Et = !1
function Bs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Dd(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function st(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function $t(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), D & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      dt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Us(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    dt(e, n)
  )
}
function Lo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), _s(e, n)
  }
}
function vc(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function oi(e, t, n, r) {
  var o = e.updateQueue
  Et = !1
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending
  if (u !== null) {
    o.shared.pending = null
    var s = u,
      a = s.next
    ;(s.next = null), l === null ? (i = a) : (l.next = a), (l = s)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (u = c.lastBaseUpdate),
      u !== l &&
        (u === null ? (c.firstBaseUpdate = a) : (u.next = a),
        (c.lastBaseUpdate = s)))
  }
  if (i !== null) {
    var p = o.baseState
    ;(l = 0), (c = a = s = null), (u = i)
    do {
      var d = u.lane,
        v = u.eventTime
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            })
        e: {
          var g = e,
            m = u
          switch (((d = t), (v = n), m.tag)) {
            case 1:
              if (((g = m.payload), typeof g == 'function')) {
                p = g.call(v, p, d)
                break e
              }
              p = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (
                ((g = m.payload),
                (d = typeof g == 'function' ? g.call(v, p, d) : g),
                d == null)
              )
                break e
              p = G({}, p, d)
              break e
            case 2:
              Et = !0
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [u]) : d.push(u))
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          c === null ? ((a = c = v), (s = p)) : (c = c.next = v),
          (l |= d)
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break
        ;(d = u),
          (u = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (s = p),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (l |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(sn |= l), (e.lanes = l), (e.memoizedState = p)
  }
}
function gc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(C(191, o))
        o.call(r)
      }
    }
}
var jd = new Mf.Component().refs
function Iu(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ti = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = we(),
      o = zt(e),
      i = st(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, o)),
      t !== null && (Ge(t, e, o, r), Lo(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = we(),
      o = zt(e),
      i = st(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = $t(e, i, o)),
      t !== null && (Ge(t, e, o, r), Lo(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = we(),
      r = zt(e),
      o = st(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = $t(e, o, r)),
      t !== null && (Ge(t, e, r, n), Lo(t, e, r))
  },
}
function wc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Dr(n, r) || !Dr(o, i)
      : !0
  )
}
function Fd(e, t, n) {
  var r = !1,
    o = Bt,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = Ue(i))
      : ((o = _e(t) ? on : ve.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Fn(e, o) : Bt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ti),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function Sc(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ti.enqueueReplaceState(t, t.state, null)
}
function Mu(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = jd), Bs(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = Ue(i))
    : ((i = _e(t) ? on : ve.current), (o.context = Fn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Iu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ti.enqueueReplaceState(o, o.state, null),
      oi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309))
        var r = n.stateNode
      }
      if (!r) throw Error(C(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var u = o.refs
            u === jd && (u = o.refs = {}), l === null ? delete u[i] : (u[i] = l)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(C(284))
    if (!n._owner) throw Error(C(290, e))
  }
  return e
}
function Eo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function Ec(e) {
  var t = e._init
  return t(e._payload)
}
function Ud(e) {
  function t(h, f) {
    if (e) {
      var y = h.deletions
      y === null ? ((h.deletions = [f]), (h.flags |= 16)) : y.push(f)
    }
  }
  function n(h, f) {
    if (!e) return null
    for (; f !== null; ) t(h, f), (f = f.sibling)
    return null
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling)
    return h
  }
  function o(h, f) {
    return (h = It(h, f)), (h.index = 0), (h.sibling = null), h
  }
  function i(h, f, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < f ? ((h.flags |= 2), f) : y)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    )
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h
  }
  function u(h, f, y, w) {
    return f === null || f.tag !== 6
      ? ((f = Ul(y, h.mode, w)), (f.return = h), f)
      : ((f = o(f, y)), (f.return = h), f)
  }
  function s(h, f, y, w) {
    var P = y.type
    return P === wn
      ? c(h, f, y.props.children, w, y.key)
      : f !== null &&
        (f.elementType === P ||
          (typeof P == 'object' &&
            P !== null &&
            P.$$typeof === St &&
            Ec(P) === f.type))
      ? ((w = o(f, y.props)), (w.ref = cr(h, f, y)), (w.return = h), w)
      : ((w = Do(y.type, y.key, y.props, null, h.mode, w)),
        (w.ref = cr(h, f, y)),
        (w.return = h),
        w)
  }
  function a(h, f, y, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== y.containerInfo ||
      f.stateNode.implementation !== y.implementation
      ? ((f = Bl(y, h.mode, w)), (f.return = h), f)
      : ((f = o(f, y.children || [])), (f.return = h), f)
  }
  function c(h, f, y, w, P) {
    return f === null || f.tag !== 7
      ? ((f = rn(y, h.mode, w, P)), (f.return = h), f)
      : ((f = o(f, y)), (f.return = h), f)
  }
  function p(h, f, y) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Ul('' + f, h.mode, y)), (f.return = h), f
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case ao:
          return (
            (y = Do(f.type, f.key, f.props, null, h.mode, y)),
            (y.ref = cr(h, null, f)),
            (y.return = h),
            y
          )
        case gn:
          return (f = Bl(f, h.mode, y)), (f.return = h), f
        case St:
          var w = f._init
          return p(h, w(f._payload), y)
      }
      if (mr(f) || ir(f)) return (f = rn(f, h.mode, y, null)), (f.return = h), f
      Eo(h, f)
    }
    return null
  }
  function d(h, f, y, w) {
    var P = f !== null ? f.key : null
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return P !== null ? null : u(h, f, '' + y, w)
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case ao:
          return y.key === P ? s(h, f, y, w) : null
        case gn:
          return y.key === P ? a(h, f, y, w) : null
        case St:
          return (P = y._init), d(h, f, P(y._payload), w)
      }
      if (mr(y) || ir(y)) return P !== null ? null : c(h, f, y, w, null)
      Eo(h, y)
    }
    return null
  }
  function v(h, f, y, w, P) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (h = h.get(y) || null), u(f, h, '' + w, P)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case ao:
          return (h = h.get(w.key === null ? y : w.key) || null), s(f, h, w, P)
        case gn:
          return (h = h.get(w.key === null ? y : w.key) || null), a(f, h, w, P)
        case St:
          var R = w._init
          return v(h, f, y, R(w._payload), P)
      }
      if (mr(w) || ir(w)) return (h = h.get(y) || null), c(f, h, w, P, null)
      Eo(f, w)
    }
    return null
  }
  function g(h, f, y, w) {
    for (
      var P = null, R = null, O = f, T = (f = 0), B = null;
      O !== null && T < y.length;
      T++
    ) {
      O.index > T ? ((B = O), (O = null)) : (B = O.sibling)
      var L = d(h, O, y[T], w)
      if (L === null) {
        O === null && (O = B)
        break
      }
      e && O && L.alternate === null && t(h, O),
        (f = i(L, f, T)),
        R === null ? (P = L) : (R.sibling = L),
        (R = L),
        (O = B)
    }
    if (T === y.length) return n(h, O), K && Xt(h, T), P
    if (O === null) {
      for (; T < y.length; T++)
        (O = p(h, y[T], w)),
          O !== null &&
            ((f = i(O, f, T)), R === null ? (P = O) : (R.sibling = O), (R = O))
      return K && Xt(h, T), P
    }
    for (O = r(h, O); T < y.length; T++)
      (B = v(O, h, T, y[T], w)),
        B !== null &&
          (e && B.alternate !== null && O.delete(B.key === null ? T : B.key),
          (f = i(B, f, T)),
          R === null ? (P = B) : (R.sibling = B),
          (R = B))
    return (
      e &&
        O.forEach(function (se) {
          return t(h, se)
        }),
      K && Xt(h, T),
      P
    )
  }
  function m(h, f, y, w) {
    var P = ir(y)
    if (typeof P != 'function') throw Error(C(150))
    if (((y = P.call(y)), y == null)) throw Error(C(151))
    for (
      var R = (P = null), O = f, T = (f = 0), B = null, L = y.next();
      O !== null && !L.done;
      T++, L = y.next()
    ) {
      O.index > T ? ((B = O), (O = null)) : (B = O.sibling)
      var se = d(h, O, L.value, w)
      if (se === null) {
        O === null && (O = B)
        break
      }
      e && O && se.alternate === null && t(h, O),
        (f = i(se, f, T)),
        R === null ? (P = se) : (R.sibling = se),
        (R = se),
        (O = B)
    }
    if (L.done) return n(h, O), K && Xt(h, T), P
    if (O === null) {
      for (; !L.done; T++, L = y.next())
        (L = p(h, L.value, w)),
          L !== null &&
            ((f = i(L, f, T)), R === null ? (P = L) : (R.sibling = L), (R = L))
      return K && Xt(h, T), P
    }
    for (O = r(h, O); !L.done; T++, L = y.next())
      (L = v(O, h, T, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && O.delete(L.key === null ? T : L.key),
          (f = i(L, f, T)),
          R === null ? (P = L) : (R.sibling = L),
          (R = L))
    return (
      e &&
        O.forEach(function (rr) {
          return t(h, rr)
        }),
      K && Xt(h, T),
      P
    )
  }
  function E(h, f, y, w) {
    if (
      (typeof y == 'object' &&
        y !== null &&
        y.type === wn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == 'object' && y !== null)
    ) {
      switch (y.$$typeof) {
        case ao:
          e: {
            for (var P = y.key, R = f; R !== null; ) {
              if (R.key === P) {
                if (((P = y.type), P === wn)) {
                  if (R.tag === 7) {
                    n(h, R.sibling),
                      (f = o(R, y.props.children)),
                      (f.return = h),
                      (h = f)
                    break e
                  }
                } else if (
                  R.elementType === P ||
                  (typeof P == 'object' &&
                    P !== null &&
                    P.$$typeof === St &&
                    Ec(P) === R.type)
                ) {
                  n(h, R.sibling),
                    (f = o(R, y.props)),
                    (f.ref = cr(h, R, y)),
                    (f.return = h),
                    (h = f)
                  break e
                }
                n(h, R)
                break
              } else t(h, R)
              R = R.sibling
            }
            y.type === wn
              ? ((f = rn(y.props.children, h.mode, w, y.key)),
                (f.return = h),
                (h = f))
              : ((w = Do(y.type, y.key, y.props, null, h.mode, w)),
                (w.ref = cr(h, f, y)),
                (w.return = h),
                (h = w))
          }
          return l(h)
        case gn:
          e: {
            for (R = y.key; f !== null; ) {
              if (f.key === R)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === y.containerInfo &&
                  f.stateNode.implementation === y.implementation
                ) {
                  n(h, f.sibling),
                    (f = o(f, y.children || [])),
                    (f.return = h),
                    (h = f)
                  break e
                } else {
                  n(h, f)
                  break
                }
              else t(h, f)
              f = f.sibling
            }
            ;(f = Bl(y, h.mode, w)), (f.return = h), (h = f)
          }
          return l(h)
        case St:
          return (R = y._init), E(h, f, R(y._payload), w)
      }
      if (mr(y)) return g(h, f, y, w)
      if (ir(y)) return m(h, f, y, w)
      Eo(h, y)
    }
    return (typeof y == 'string' && y !== '') || typeof y == 'number'
      ? ((y = '' + y),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, y)), (f.return = h), (h = f))
          : (n(h, f), (f = Ul(y, h.mode, w)), (f.return = h), (h = f)),
        l(h))
      : n(h, f)
  }
  return E
}
var Bn = Ud(!0),
  Bd = Ud(!1),
  no = {},
  nt = Kt(no),
  Br = Kt(no),
  Vr = Kt(no)
function tn(e) {
  if (e === no) throw Error(C(174))
  return e
}
function Vs(e, t) {
  switch ((V(Vr, t), V(Br, e), V(nt, no), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hu(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hu(t, e))
  }
  H(nt), V(nt, t)
}
function Vn() {
  H(nt), H(Br), H(Vr)
}
function Vd(e) {
  tn(Vr.current)
  var t = tn(nt.current),
    n = hu(t, e.type)
  t !== n && (V(Br, e), V(nt, n))
}
function Ws(e) {
  Br.current === e && (H(nt), H(Br))
}
var J = Kt(0)
function ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var zl = []
function Hs() {
  for (var e = 0; e < zl.length; e++) zl[e]._workInProgressVersionPrimary = null
  zl.length = 0
}
var $o = mt.ReactCurrentDispatcher,
  Il = mt.ReactCurrentBatchConfig,
  un = 0,
  q = null,
  te = null,
  ie = null,
  li = !1,
  Pr = !1,
  Wr = 0,
  zy = 0
function de() {
  throw Error(C(321))
}
function Qs(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1
  return !0
}
function Ks(e, t, n, r, o, i) {
  if (
    ((un = i),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($o.current = e === null || e.memoizedState === null ? jy : Fy),
    (e = n(r, o)),
    Pr)
  ) {
    i = 0
    do {
      if (((Pr = !1), (Wr = 0), 25 <= i)) throw Error(C(301))
      ;(i += 1),
        (ie = te = null),
        (t.updateQueue = null),
        ($o.current = Uy),
        (e = n(r, o))
    } while (Pr)
  }
  if (
    (($o.current = ui),
    (t = te !== null && te.next !== null),
    (un = 0),
    (ie = te = q = null),
    (li = !1),
    t)
  )
    throw Error(C(300))
  return e
}
function Js() {
  var e = Wr !== 0
  return (Wr = 0), e
}
function Ze() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return ie === null ? (q.memoizedState = ie = e) : (ie = ie.next = e), ie
}
function Be() {
  if (te === null) {
    var e = q.alternate
    e = e !== null ? e.memoizedState : null
  } else e = te.next
  var t = ie === null ? q.memoizedState : ie.next
  if (t !== null) (ie = t), (te = e)
  else {
    if (e === null) throw Error(C(310))
    ;(te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      ie === null ? (q.memoizedState = ie = e) : (ie = ie.next = e)
  }
  return ie
}
function Hr(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Ml(e) {
  var t = Be(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = te,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var l = o.next
      ;(o.next = i.next), (i.next = l)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var u = (l = null),
      s = null,
      a = i
    do {
      var c = a.lane
      if ((un & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action))
      else {
        var p = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        }
        s === null ? ((u = s = p), (l = r)) : (s = s.next = p),
          (q.lanes |= c),
          (sn |= c)
      }
      a = a.next
    } while (a !== null && a !== i)
    s === null ? (l = r) : (s.next = u),
      Xe(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (q.lanes |= i), (sn |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Dl(e) {
  var t = Be(),
    n = t.queue
  if (n === null) throw Error(C(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var l = (o = o.next)
    do (i = e(i, l.action)), (l = l.next)
    while (l !== o)
    Xe(i, t.memoizedState) || (Ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function Wd() {}
function Hd(e, t) {
  var n = q,
    r = Be(),
    o = t(),
    i = !Xe(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (Ce = !0)),
    (r = r.queue),
    qs(Jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qr(9, Kd.bind(null, n, r, o, t), void 0, null),
      le === null)
    )
      throw Error(C(349))
    un & 30 || Qd(n, t, o)
  }
  return o
}
function Qd(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Kd(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), qd(t) && Gd(e)
}
function Jd(e, t, n) {
  return n(function () {
    qd(t) && Gd(e)
  })
}
function qd(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Xe(e, n)
  } catch {
    return !0
  }
}
function Gd(e) {
  var t = dt(e, 1)
  t !== null && Ge(t, e, 1, -1)
}
function kc(e) {
  var t = Ze()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Dy.bind(null, q, e)),
    [t.memoizedState, e]
  )
}
function Qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Xd() {
  return Be().memoizedState
}
function Ao(e, t, n, r) {
  var o = Ze()
  ;(q.flags |= e),
    (o.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r))
}
function Li(e, t, n, r) {
  var o = Be()
  r = r === void 0 ? null : r
  var i = void 0
  if (te !== null) {
    var l = te.memoizedState
    if (((i = l.destroy), r !== null && Qs(r, l.deps))) {
      o.memoizedState = Qr(t, n, i, r)
      return
    }
  }
  ;(q.flags |= e), (o.memoizedState = Qr(1 | t, n, i, r))
}
function xc(e, t) {
  return Ao(8390656, 8, e, t)
}
function qs(e, t) {
  return Li(2048, 8, e, t)
}
function Yd(e, t) {
  return Li(4, 2, e, t)
}
function Zd(e, t) {
  return Li(4, 4, e, t)
}
function bd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function ep(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Li(4, 4, bd.bind(null, t, e), n)
  )
}
function Gs() {}
function tp(e, t) {
  var n = Be()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Qs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function np(e, t) {
  var n = Be()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Qs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function rp(e, t, n) {
  return un & 21
    ? (Xe(n, t) || ((n = ld()), (q.lanes |= n), (sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n))
}
function Iy(e, t) {
  var n = j
  ;(j = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Il.transition
  Il.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(j = n), (Il.transition = r)
  }
}
function op() {
  return Be().memoizedState
}
function My(e, t, n) {
  var r = zt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ip(e))
  )
    lp(t, n)
  else if (((n = Md(e, t, n, r)), n !== null)) {
    var o = we()
    Ge(n, e, r, o), up(n, t, r)
  }
}
function Dy(e, t, n) {
  var r = zt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (ip(e)) lp(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, n)
        if (((o.hasEagerState = !0), (o.eagerState = u), Xe(u, l))) {
          var s = t.interleaved
          s === null
            ? ((o.next = o), Us(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Md(e, t, o, r)),
      n !== null && ((o = we()), Ge(n, e, r, o), up(n, t, r))
  }
}
function ip(e) {
  var t = e.alternate
  return e === q || (t !== null && t === q)
}
function lp(e, t) {
  Pr = li = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function up(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), _s(e, n)
  }
}
var ui = {
    readContext: Ue,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  jy = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (Ze().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: Ue,
    useEffect: xc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ao(4194308, 4, bd.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Ao(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ao(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Ze()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Ze()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = My.bind(null, q, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Ze()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: kc,
    useDebugValue: Gs,
    useDeferredValue: function (e) {
      return (Ze().memoizedState = e)
    },
    useTransition: function () {
      var e = kc(!1),
        t = e[0]
      return (e = Iy.bind(null, e[1])), (Ze().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        o = Ze()
      if (K) {
        if (n === void 0) throw Error(C(407))
        n = n()
      } else {
        if (((n = t()), le === null)) throw Error(C(349))
        un & 30 || Qd(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        xc(Jd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qr(9, Kd.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Ze(),
        t = le.identifierPrefix
      if (K) {
        var n = ut,
          r = lt
        ;(n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Wr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = zy++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Fy = {
    readContext: Ue,
    useCallback: tp,
    useContext: Ue,
    useEffect: qs,
    useImperativeHandle: ep,
    useInsertionEffect: Yd,
    useLayoutEffect: Zd,
    useMemo: np,
    useReducer: Ml,
    useRef: Xd,
    useState: function () {
      return Ml(Hr)
    },
    useDebugValue: Gs,
    useDeferredValue: function (e) {
      var t = Be()
      return rp(t, te.memoizedState, e)
    },
    useTransition: function () {
      var e = Ml(Hr)[0],
        t = Be().memoizedState
      return [e, t]
    },
    useMutableSource: Wd,
    useSyncExternalStore: Hd,
    useId: op,
    unstable_isNewReconciler: !1,
  },
  Uy = {
    readContext: Ue,
    useCallback: tp,
    useContext: Ue,
    useEffect: qs,
    useImperativeHandle: ep,
    useInsertionEffect: Yd,
    useLayoutEffect: Zd,
    useMemo: np,
    useReducer: Dl,
    useRef: Xd,
    useState: function () {
      return Dl(Hr)
    },
    useDebugValue: Gs,
    useDeferredValue: function (e) {
      var t = Be()
      return te === null ? (t.memoizedState = e) : rp(t, te.memoizedState, e)
    },
    useTransition: function () {
      var e = Dl(Hr)[0],
        t = Be().memoizedState
      return [e, t]
    },
    useMutableSource: Wd,
    useSyncExternalStore: Hd,
    useId: op,
    unstable_isNewReconciler: !1,
  }
function Wn(e, t) {
  try {
    var n = '',
      r = t
    do (n += hm(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function jl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Du(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var By = typeof WeakMap == 'function' ? WeakMap : Map
function sp(e, t, n) {
  ;(n = st(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      ai || ((ai = !0), (Ju = r)), Du(e, t)
    }),
    n
  )
}
function ap(e, t, n) {
  ;(n = st(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Du(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Du(e, t),
          typeof r != 'function' &&
            (At === null ? (At = new Set([this])) : At.add(this))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
function Cc(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new By()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = tv.bind(null, e, t, n)), t.then(e, e))
}
function Pc(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function _c(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = st(-1, 1)), (t.tag = 2), $t(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var Vy = mt.ReactCurrentOwner,
  Ce = !1
function ge(e, t, n, r) {
  t.child = e === null ? Bd(t, null, n, r) : Bn(t, e.child, n, r)
}
function Rc(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    zn(t, o),
    (r = Ks(e, t, n, r, i, o)),
    (n = Js()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (K && n && zs(t), (t.flags |= 1), ge(e, t, r, o), t.child)
  )
}
function Nc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !ra(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), cp(e, t, i, r, o))
      : ((e = Do(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(l, r) && e.ref === t.ref)
    )
      return pt(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = It(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function cp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (Dr(i, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ce = !0)
      else return (t.lanes = e.lanes), pt(e, t, o)
  }
  return ju(e, t, n, r, o)
}
function fp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(On, Ne),
        (Ne |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(On, Ne),
          (Ne |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        V(On, Ne),
        (Ne |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(On, Ne),
      (Ne |= r)
  return ge(e, t, o, n), t.child
}
function dp(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function ju(e, t, n, r, o) {
  var i = _e(n) ? on : ve.current
  return (
    (i = Fn(t, i)),
    zn(t, o),
    (n = Ks(e, t, n, r, i, o)),
    (r = Js()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pt(e, t, o))
      : (K && r && zs(t), (t.flags |= 1), ge(e, t, n, o), t.child)
  )
}
function Oc(e, t, n, r, o) {
  if (_e(n)) {
    var i = !0
    bo(t)
  } else i = !1
  if ((zn(t, o), t.stateNode === null))
    zo(e, t), Fd(t, n, r), Mu(t, n, r, o), (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps
    l.props = u
    var s = l.context,
      a = n.contextType
    typeof a == 'object' && a !== null
      ? (a = Ue(a))
      : ((a = _e(n) ? on : ve.current), (a = Fn(t, a)))
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && Sc(t, l, r, a)),
      (Et = !1)
    var d = t.memoizedState
    ;(l.state = d),
      oi(t, r, l, o),
      (s = t.memoizedState),
      u !== r || d !== s || Pe.current || Et
        ? (typeof c == 'function' && (Iu(t, n, c, r), (s = t.memoizedState)),
          (u = Et || wc(t, n, u, r, d, s, a))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(l = t.stateNode),
      Dd(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : He(t.type, u)),
      (l.props = a),
      (p = t.pendingProps),
      (d = l.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Ue(s))
        : ((s = _e(n) ? on : ve.current), (s = Fn(t, s)))
    var v = n.getDerivedStateFromProps
    ;(c =
      typeof v == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((u !== p || d !== s) && Sc(t, l, r, s)),
      (Et = !1),
      (d = t.memoizedState),
      (l.state = d),
      oi(t, r, l, o)
    var g = t.memoizedState
    u !== p || d !== g || Pe.current || Et
      ? (typeof v == 'function' && (Iu(t, n, v, r), (g = t.memoizedState)),
        (a = Et || wc(t, n, a, r, d, g, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, g, s),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, g, s)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Fu(e, t, n, r, i, o)
}
function Fu(e, t, n, r, o, i) {
  dp(e, t)
  var l = (t.flags & 128) !== 0
  if (!r && !l) return o && hc(t, n, !1), pt(e, t, i)
  ;(r = t.stateNode), (Vy.current = t)
  var u =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Bn(t, e.child, null, i)), (t.child = Bn(t, null, u, i)))
      : ge(e, t, u, i),
    (t.memoizedState = r.state),
    o && hc(t, n, !0),
    t.child
  )
}
function pp(e) {
  var t = e.stateNode
  t.pendingContext
    ? pc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && pc(e, t.context, !1),
    Vs(e, t.containerInfo)
}
function Tc(e, t, n, r, o) {
  return Un(), Ms(o), (t.flags |= 256), ge(e, t, n, r), t.child
}
var Uu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Bu(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function hp(e, t, n) {
  var r = t.pendingProps,
    o = J.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    V(J, o & 1),
    e === null)
  )
    return (
      Au(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = zi(l, r, 0, null)),
              (e = rn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Bu(n)),
              (t.memoizedState = Uu),
              e)
            : Xs(t, l))
    )
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Wy(e, t, l, r, u, o, n)
  if (i) {
    ;(i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling)
    var s = { mode: 'hidden', children: r.children }
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = It(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = It(u, i)) : ((i = rn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Bu(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Uu),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = It(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Xs(e, t) {
  return (
    (t = zi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function ko(e, t, n, r) {
  return (
    r !== null && Ms(r),
    Bn(t, e.child, null, n),
    (e = Xs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Wy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = jl(Error(C(422)))), ko(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = zi({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = rn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Bn(t, e.child, null, l),
        (t.child.memoizedState = Bu(l)),
        (t.memoizedState = Uu),
        i)
  if (!(t.mode & 1)) return ko(e, t, l, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (i = Error(C(419))), (r = jl(i, r, void 0)), ko(e, t, l, r)
  }
  if (((u = (l & e.childLanes) !== 0), Ce || u)) {
    if (((r = le), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), dt(e, o), Ge(r, e, o, -1))
    }
    return na(), (r = jl(Error(C(421)))), ko(e, t, l, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Oe = Lt(o.nextSibling)),
      (Te = t),
      (K = !0),
      (Ke = null),
      e !== null &&
        ((Me[De++] = lt),
        (Me[De++] = ut),
        (Me[De++] = ln),
        (lt = e.id),
        (ut = e.overflow),
        (ln = t)),
      (t = Xs(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Lc(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), zu(e.return, t, n)
}
function Fl(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function mp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((ge(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lc(e, n, t)
        else if (e.tag === 19) Lc(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((V(J, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ii(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Fl(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ii(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        Fl(t, !0, n, null, i)
        break
      case 'together':
        Fl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function zo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(C(153))
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Hy(e, t, n) {
  switch (t.tag) {
    case 3:
      pp(t), Un()
      break
    case 5:
      Vd(t)
      break
    case 1:
      _e(t.type) && bo(t)
      break
    case 4:
      Vs(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      V(ni, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? hp(e, t, n)
          : (V(J, J.current & 1),
            (e = pt(e, t, n)),
            e !== null ? e.sibling : null)
      V(J, J.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return mp(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(J, J.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), fp(e, t, n)
  }
  return pt(e, t, n)
}
var yp, Vu, vp, gp
yp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Vu = function () {}
vp = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), tn(nt.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = cu(e, o)), (r = cu(e, r)), (i = [])
        break
      case 'select':
        ;(o = G({}, o, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = pu(e, o)), (r = pu(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Yo)
    }
    mu(n, r)
    var l
    n = null
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var u = o[a]
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Tr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null))
    for (a in r) {
      var s = r[a]
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''))
            for (l in s)
              s.hasOwnProperty(l) &&
                u[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]))
          } else n || (i || (i = []), i.push(a, n)), (n = s)
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (i = i || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Tr.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && W('scroll', e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s))
    }
    n && (i = i || []).push('style', n)
    var a = i
    ;(t.updateQueue = a) && (t.flags |= 4)
  }
}
gp = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function fr(e, t) {
  if (!K)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Qy(e, t, n) {
  var r = t.pendingProps
  switch ((Is(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null
    case 1:
      return _e(t.type) && Zo(), pe(t), null
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        H(Pe),
        H(ve),
        Hs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (So(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (Xu(Ke), (Ke = null)))),
        Vu(e, t),
        pe(t),
        null
      )
    case 5:
      Ws(t)
      var o = tn(Vr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        vp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166))
          return pe(t), null
        }
        if (((e = tn(nt.current)), So(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[be] = t), (r[Ur] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              W('cancel', r), W('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              W('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < vr.length; o++) W(vr[o], r)
              break
            case 'source':
              W('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              W('error', r), W('load', r)
              break
            case 'details':
              W('toggle', r)
              break
            case 'input':
              Ua(r, i), W('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                W('invalid', r)
              break
            case 'textarea':
              Va(r, i), W('invalid', r)
          }
          mu(n, i), (o = null)
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l]
              l === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      wo(r.textContent, u, e),
                    (o = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      wo(r.textContent, u, e),
                    (o = ['children', '' + u]))
                : Tr.hasOwnProperty(l) &&
                  u != null &&
                  l === 'onScroll' &&
                  W('scroll', r)
            }
          switch (n) {
            case 'input':
              co(r), Ba(r, i, !0)
              break
            case 'textarea':
              co(r), Wa(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Yo)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Qf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[be] = t),
            (e[Ur] = r),
            yp(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((l = yu(n, r)), n)) {
              case 'dialog':
                W('cancel', e), W('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                W('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < vr.length; o++) W(vr[o], e)
                o = r
                break
              case 'source':
                W('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                W('error', e), W('load', e), (o = r)
                break
              case 'details':
                W('toggle', e), (o = r)
                break
              case 'input':
                Ua(e, r), (o = cu(e, r)), W('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = G({}, r, { value: void 0 })),
                  W('invalid', e)
                break
              case 'textarea':
                Va(e, r), (o = pu(e, r)), W('invalid', e)
                break
              default:
                o = r
            }
            mu(n, o), (u = o)
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i]
                i === 'style'
                  ? qf(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Kf(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Lr(e, s)
                    : typeof s == 'number' && Lr(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Tr.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && W('scroll', e)
                      : s != null && Ss(e, i, s, l))
              }
            switch (n) {
              case 'input':
                co(e), Ba(e, r, !1)
                break
              case 'textarea':
                co(e), Wa(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Ut(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Tn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Tn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Yo)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return pe(t), null
    case 6:
      if (e && t.stateNode != null) gp(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166))
        if (((n = tn(Vr.current)), tn(nt.current), So(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[be] = t),
            (i = r.nodeValue !== n) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                wo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[be] = t),
            (t.stateNode = r)
      }
      return pe(t), null
    case 13:
      if (
        (H(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Oe !== null && t.mode & 1 && !(t.flags & 128))
          Id(), Un(), (t.flags |= 98560), (i = !1)
        else if (((i = So(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317))
            i[be] = t
          } else
            Un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          pe(t), (i = !1)
        } else Ke !== null && (Xu(Ke), (Ke = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? ne === 0 && (ne = 3) : na())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null)
    case 4:
      return (
        Vn(), Vu(e, t), e === null && jr(t.stateNode.containerInfo), pe(t), null
      )
    case 10:
      return Fs(t.type._context), pe(t), null
    case 17:
      return _e(t.type) && Zo(), pe(t), null
    case 19:
      if ((H(J), (i = t.memoizedState), i === null)) return pe(t), null
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) fr(i, !1)
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ii(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    fr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return V(J, (J.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            Z() > Hn &&
            ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = ii(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !K)
            )
              return pe(t), null
          } else
            2 * Z() - i.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Z()),
          (t.sibling = null),
          (n = J.current),
          V(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null)
    case 22:
    case 23:
      return (
        ta(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(C(156, t.tag))
}
function Ky(e, t) {
  switch ((Is(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && Zo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Vn(),
        H(Pe),
        H(ve),
        Hs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Ws(t), null
    case 13:
      if ((H(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340))
        Un()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return H(J), null
    case 4:
      return Vn(), null
    case 10:
      return Fs(t.type._context), null
    case 22:
    case 23:
      return ta(), null
    case 24:
      return null
    default:
      return null
  }
}
var xo = !1,
  me = !1,
  Jy = typeof WeakSet == 'function' ? WeakSet : Set,
  _ = null
function Nn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        X(e, t, r)
      }
    else n.current = null
}
function Wu(e, t, n) {
  try {
    n()
  } catch (r) {
    X(e, t, r)
  }
}
var $c = !1
function qy(e, t) {
  if (((_u = qo), (e = kd()), As(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var l = 0,
            u = -1,
            s = -1,
            a = 0,
            c = 0,
            p = e,
            d = null
          t: for (;;) {
            for (
              var v;
              p !== n || (o !== 0 && p.nodeType !== 3) || (u = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (d = p), (p = v)
            for (;;) {
              if (p === e) break t
              if (
                (d === n && ++a === o && (u = l),
                d === i && ++c === r && (s = l),
                (v = p.nextSibling) !== null)
              )
                break
              ;(p = d), (d = p.parentNode)
            }
            p = v
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Ru = { focusedElem: e, selectionRange: n }, qo = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e)
    else
      for (; _ !== null; ) {
        t = _
        try {
          var g = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (g !== null) {
                  var m = g.memoizedProps,
                    E = g.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : He(t.type, m),
                      E,
                    )
                  h.__reactInternalSnapshotBeforeUpdate = f
                }
                break
              case 3:
                var y = t.stateNode.containerInfo
                y.nodeType === 1
                  ? (y.textContent = '')
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(C(163))
            }
        } catch (w) {
          X(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (_ = e)
          break
        }
        _ = t.return
      }
  return (g = $c), ($c = !1), g
}
function _r(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && Wu(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function $i(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Hu(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function wp(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), wp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[be], delete t[Ur], delete t[Tu], delete t[Ty], delete t[Ly])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Sp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sp(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Qu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Yo))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qu(e, t, n), e = e.sibling; e !== null; ) Qu(e, t, n), (e = e.sibling)
}
function Ku(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ku(e, t, n), e = e.sibling; e !== null; ) Ku(e, t, n), (e = e.sibling)
}
var ae = null,
  Qe = !1
function gt(e, t, n) {
  for (n = n.child; n !== null; ) Ep(e, t, n), (n = n.sibling)
}
function Ep(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == 'function')
    try {
      tt.onCommitFiberUnmount(Ci, n)
    } catch {}
  switch (n.tag) {
    case 5:
      me || Nn(n, t)
    case 6:
      var r = ae,
        o = Qe
      ;(ae = null),
        gt(e, t, n),
        (ae = r),
        (Qe = o),
        ae !== null &&
          (Qe
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode))
      break
    case 18:
      ae !== null &&
        (Qe
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? $l(e.parentNode, n)
              : e.nodeType === 1 && $l(e, n),
            Ir(e))
          : $l(ae, n.stateNode))
      break
    case 4:
      ;(r = ae),
        (o = Qe),
        (ae = n.stateNode.containerInfo),
        (Qe = !0),
        gt(e, t, n),
        (ae = r),
        (Qe = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            l = i.destroy
          ;(i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Wu(n, t, l),
            (o = o.next)
        } while (o !== r)
      }
      gt(e, t, n)
      break
    case 1:
      if (
        !me &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (u) {
          X(n, t, u)
        }
      gt(e, t, n)
      break
    case 21:
      gt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), gt(e, t, n), (me = r))
        : gt(e, t, n)
      break
    default:
      gt(e, t, n)
  }
}
function zc(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Jy()),
      t.forEach(function (r) {
        var o = rv.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function We(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          l = t,
          u = l
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ;(ae = u.stateNode), (Qe = !1)
              break e
            case 3:
              ;(ae = u.stateNode.containerInfo), (Qe = !0)
              break e
            case 4:
              ;(ae = u.stateNode.containerInfo), (Qe = !0)
              break e
          }
          u = u.return
        }
        if (ae === null) throw Error(C(160))
        Ep(i, l, o), (ae = null), (Qe = !1)
        var s = o.alternate
        s !== null && (s.return = null), (o.return = null)
      } catch (a) {
        X(o, t, a)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) kp(t, e), (t = t.sibling)
}
function kp(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), Ye(e), r & 4)) {
        try {
          _r(3, e, e.return), $i(3, e)
        } catch (m) {
          X(e, e.return, m)
        }
        try {
          _r(5, e, e.return)
        } catch (m) {
          X(e, e.return, m)
        }
      }
      break
    case 1:
      We(t, e), Ye(e), r & 512 && n !== null && Nn(n, n.return)
      break
    case 5:
      if (
        (We(t, e),
        Ye(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          Lr(o, '')
        } catch (m) {
          X(e, e.return, m)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && i.type === 'radio' && i.name != null && Wf(o, i),
              yu(u, l)
            var a = yu(u, i)
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                p = s[l + 1]
              c === 'style'
                ? qf(o, p)
                : c === 'dangerouslySetInnerHTML'
                ? Kf(o, p)
                : c === 'children'
                ? Lr(o, p)
                : Ss(o, c, p, a)
            }
            switch (u) {
              case 'input':
                fu(o, i)
                break
              case 'textarea':
                Hf(o, i)
                break
              case 'select':
                var d = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var v = i.value
                v != null
                  ? Tn(o, !!i.multiple, v, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Tn(o, !!i.multiple, i.defaultValue, !0)
                      : Tn(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[Ur] = i
          } catch (m) {
            X(e, e.return, m)
          }
      }
      break
    case 6:
      if ((We(t, e), Ye(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (m) {
          X(e, e.return, m)
        }
      }
      break
    case 3:
      if (
        (We(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ir(t.containerInfo)
        } catch (m) {
          X(e, e.return, m)
        }
      break
    case 4:
      We(t, e), Ye(e)
      break
    case 13:
      We(t, e),
        Ye(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (bs = Z())),
        r & 4 && zc(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (a = me) || c), We(t, e), (me = a)) : We(t, e),
        Ye(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (_ = e, c = e.child; c !== null; ) {
            for (p = _ = c; _ !== null; ) {
              switch (((d = _), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _r(4, d, d.return)
                  break
                case 1:
                  Nn(d, d.return)
                  var g = d.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount()
                    } catch (m) {
                      X(r, n, m)
                    }
                  }
                  break
                case 5:
                  Nn(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    Mc(p)
                    continue
                  }
              }
              v !== null ? ((v.return = d), (_ = v)) : Mc(p)
            }
            c = c.sibling
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p
              try {
                ;(o = p.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Jf('display', l)))
              } catch (m) {
                X(e, e.return, m)
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps
              } catch (m) {
                X(e, e.return, m)
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ;(p.child.return = p), (p = p.child)
            continue
          }
          if (p === e) break e
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e
            c === p && (c = null), (p = p.return)
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling)
        }
      }
      break
    case 19:
      We(t, e), Ye(e), r & 4 && zc(e)
      break
    case 21:
      break
    default:
      We(t, e), Ye(e)
  }
}
function Ye(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sp(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(C(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (Lr(o, ''), (r.flags &= -33))
          var i = Ac(e)
          Ku(e, i, o)
          break
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = Ac(e)
          Qu(e, u, l)
          break
        default:
          throw Error(C(161))
      }
    } catch (s) {
      X(e, e.return, s)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Gy(e, t, n) {
  ;(_ = e), xp(e)
}
function xp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var o = _,
      i = o.child
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || xo
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || me
        u = xo
        var a = me
        if (((xo = l), (me = s) && !a))
          for (_ = o; _ !== null; )
            (l = _),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Dc(o)
                : s !== null
                ? ((s.return = l), (_ = s))
                : Dc(o)
        for (; i !== null; ) (_ = i), xp(i), (i = i.sibling)
        ;(_ = o), (xo = u), (me = a)
      }
      Ic(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (_ = i)) : Ic(e)
  }
}
function Ic(e) {
  for (; _ !== null; ) {
    var t = _
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || $i(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var i = t.updateQueue
              i !== null && gc(t, i, r)
              break
            case 3:
              var l = t.updateQueue
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                gc(t, l, n)
              }
              break
            case 5:
              var u = t.stateNode
              if (n === null && t.flags & 4) {
                n = u
                var s = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus()
                    break
                  case 'img':
                    s.src && (n.src = s.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate
                if (a !== null) {
                  var c = a.memoizedState
                  if (c !== null) {
                    var p = c.dehydrated
                    p !== null && Ir(p)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(C(163))
          }
        me || (t.flags & 512 && Hu(t))
      } catch (d) {
        X(t, t.return, d)
      }
    }
    if (t === e) {
      _ = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (_ = n)
      break
    }
    _ = t.return
  }
}
function Mc(e) {
  for (; _ !== null; ) {
    var t = _
    if (t === e) {
      _ = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (_ = n)
      break
    }
    _ = t.return
  }
}
function Dc(e) {
  for (; _ !== null; ) {
    var t = _
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            $i(4, t)
          } catch (s) {
            X(t, n, s)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (s) {
              X(t, o, s)
            }
          }
          var i = t.return
          try {
            Hu(t)
          } catch (s) {
            X(t, i, s)
          }
          break
        case 5:
          var l = t.return
          try {
            Hu(t)
          } catch (s) {
            X(t, l, s)
          }
      }
    } catch (s) {
      X(t, t.return, s)
    }
    if (t === e) {
      _ = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (_ = u)
      break
    }
    _ = t.return
  }
}
var Xy = Math.ceil,
  si = mt.ReactCurrentDispatcher,
  Ys = mt.ReactCurrentOwner,
  Fe = mt.ReactCurrentBatchConfig,
  D = 0,
  le = null,
  b = null,
  ce = 0,
  Ne = 0,
  On = Kt(0),
  ne = 0,
  Kr = null,
  sn = 0,
  Ai = 0,
  Zs = 0,
  Rr = null,
  xe = null,
  bs = 0,
  Hn = 1 / 0,
  ot = null,
  ai = !1,
  Ju = null,
  At = null,
  Co = !1,
  _t = null,
  ci = 0,
  Nr = 0,
  qu = null,
  Io = -1,
  Mo = 0
function we() {
  return D & 6 ? Z() : Io !== -1 ? Io : (Io = Z())
}
function zt(e) {
  return e.mode & 1
    ? D & 2 && ce !== 0
      ? ce & -ce
      : Ay.transition !== null
      ? (Mo === 0 && (Mo = ld()), Mo)
      : ((e = j),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pd(e.type))),
        e)
    : 1
}
function Ge(e, t, n, r) {
  if (50 < Nr) throw ((Nr = 0), (qu = null), Error(C(185)))
  br(e, n, r),
    (!(D & 2) || e !== le) &&
      (e === le && (!(D & 2) && (Ai |= n), ne === 4 && xt(e, ce)),
      Re(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((Hn = Z() + 500), Oi && Jt()))
}
function Re(e, t) {
  var n = e.callbackNode
  Am(e, t)
  var r = Jo(e, e === le ? ce : 0)
  if (r === 0)
    n !== null && Ka(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ka(n), t === 1))
      e.tag === 0 ? $y(jc.bind(null, e)) : $d(jc.bind(null, e)),
        Ny(function () {
          !(D & 6) && Jt()
        }),
        (n = null)
    else {
      switch (ud(r)) {
        case 1:
          n = Ps
          break
        case 4:
          n = od
          break
        case 16:
          n = Ko
          break
        case 536870912:
          n = id
          break
        default:
          n = Ko
      }
      n = Lp(n, Cp.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Cp(e, t) {
  if (((Io = -1), (Mo = 0), D & 6)) throw Error(C(327))
  var n = e.callbackNode
  if (In() && e.callbackNode !== n) return null
  var r = Jo(e, e === le ? ce : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = fi(e, r)
  else {
    t = r
    var o = D
    D |= 2
    var i = _p()
    ;(le !== e || ce !== t) && ((ot = null), (Hn = Z() + 500), nn(e, t))
    do
      try {
        by()
        break
      } catch (u) {
        Pp(e, u)
      }
    while (1)
    js(),
      (si.current = i),
      (D = o),
      b !== null ? (t = 0) : ((le = null), (ce = 0), (t = ne))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Eu(e)), o !== 0 && ((r = o), (t = Gu(e, o)))), t === 1)
    )
      throw ((n = Kr), nn(e, 0), xt(e, r), Re(e, Z()), n)
    if (t === 6) xt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Yy(o) &&
          ((t = fi(e, r)),
          t === 2 && ((i = Eu(e)), i !== 0 && ((r = i), (t = Gu(e, i)))),
          t === 1))
      )
        throw ((n = Kr), nn(e, 0), xt(e, r), Re(e, Z()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345))
        case 2:
          Yt(e, xe, ot)
          break
        case 3:
          if (
            (xt(e, r), (r & 130023424) === r && ((t = bs + 500 - Z()), 10 < t))
          ) {
            if (Jo(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Ou(Yt.bind(null, e, xe, ot), t)
            break
          }
          Yt(e, xe, ot)
          break
        case 4:
          if ((xt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - qe(r)
            ;(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i)
          }
          if (
            ((r = o),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Xy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ou(Yt.bind(null, e, xe, ot), r)
            break
          }
          Yt(e, xe, ot)
          break
        case 5:
          Yt(e, xe, ot)
          break
        default:
          throw Error(C(329))
      }
    }
  }
  return Re(e, Z()), e.callbackNode === n ? Cp.bind(null, e) : null
}
function Gu(e, t) {
  var n = Rr
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = fi(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && Xu(t)),
    e
  )
}
function Xu(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e)
}
function Yy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!Xe(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function xt(e, t) {
  for (
    t &= ~Zs,
      t &= ~Ai,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function jc(e) {
  if (D & 6) throw Error(C(327))
  In()
  var t = Jo(e, 0)
  if (!(t & 1)) return Re(e, Z()), null
  var n = fi(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Eu(e)
    r !== 0 && ((t = r), (n = Gu(e, r)))
  }
  if (n === 1) throw ((n = Kr), nn(e, 0), xt(e, t), Re(e, Z()), n)
  if (n === 6) throw Error(C(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yt(e, xe, ot),
    Re(e, Z()),
    null
  )
}
function ea(e, t) {
  var n = D
  D |= 1
  try {
    return e(t)
  } finally {
    ;(D = n), D === 0 && ((Hn = Z() + 500), Oi && Jt())
  }
}
function an(e) {
  _t !== null && _t.tag === 0 && !(D & 6) && In()
  var t = D
  D |= 1
  var n = Fe.transition,
    r = j
  try {
    if (((Fe.transition = null), (j = 1), e)) return e()
  } finally {
    ;(j = r), (Fe.transition = n), (D = t), !(D & 6) && Jt()
  }
}
function ta() {
  ;(Ne = On.current), H(On)
}
function nn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), Ry(n)), b !== null))
    for (n = b.return; n !== null; ) {
      var r = n
      switch ((Is(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Zo()
          break
        case 3:
          Vn(), H(Pe), H(ve), Hs()
          break
        case 5:
          Ws(r)
          break
        case 4:
          Vn()
          break
        case 13:
          H(J)
          break
        case 19:
          H(J)
          break
        case 10:
          Fs(r.type._context)
          break
        case 22:
        case 23:
          ta()
      }
      n = n.return
    }
  if (
    ((le = e),
    (b = e = It(e.current, null)),
    (ce = Ne = t),
    (ne = 0),
    (Kr = null),
    (Zs = Ai = sn = 0),
    (xe = Rr = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var l = i.next
          ;(i.next = o), (r.next = l)
        }
        n.pending = r
      }
    en = null
  }
  return e
}
function Pp(e, t) {
  do {
    var n = b
    try {
      if ((js(), ($o.current = ui), li)) {
        for (var r = q.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        li = !1
      }
      if (
        ((un = 0),
        (ie = te = q = null),
        (Pr = !1),
        (Wr = 0),
        (Ys.current = null),
        n === null || n.return === null)
      ) {
        ;(ne = 1), (Kr = t), (b = null)
        break
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t
        if (
          ((t = ce),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            c = u,
            p = c.tag
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = c.alternate
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var v = Pc(l)
          if (v !== null) {
            ;(v.flags &= -257),
              _c(v, l, u, i, t),
              v.mode & 1 && Cc(i, a, t),
              (t = v),
              (s = a)
            var g = t.updateQueue
            if (g === null) {
              var m = new Set()
              m.add(s), (t.updateQueue = m)
            } else g.add(s)
            break e
          } else {
            if (!(t & 1)) {
              Cc(i, a, t), na()
              break e
            }
            s = Error(C(426))
          }
        } else if (K && u.mode & 1) {
          var E = Pc(l)
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              _c(E, l, u, i, t),
              Ms(Wn(s, u))
            break e
          }
        }
        ;(i = s = Wn(s, u)),
          ne !== 4 && (ne = 2),
          Rr === null ? (Rr = [i]) : Rr.push(i),
          (i = l)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var h = sp(i, s, t)
              vc(i, h)
              break e
            case 1:
              u = s
              var f = i.type,
                y = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (y !== null &&
                    typeof y.componentDidCatch == 'function' &&
                    (At === null || !At.has(y))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var w = ap(i, u, t)
                vc(i, w)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Np(n)
    } catch (P) {
      ;(t = P), b === n && n !== null && (b = n = n.return)
      continue
    }
    break
  } while (1)
}
function _p() {
  var e = si.current
  return (si.current = ui), e === null ? ui : e
}
function na() {
  ;(ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    le === null || (!(sn & 268435455) && !(Ai & 268435455)) || xt(le, ce)
}
function fi(e, t) {
  var n = D
  D |= 2
  var r = _p()
  ;(le !== e || ce !== t) && ((ot = null), nn(e, t))
  do
    try {
      Zy()
      break
    } catch (o) {
      Pp(e, o)
    }
  while (1)
  if ((js(), (D = n), (si.current = r), b !== null)) throw Error(C(261))
  return (le = null), (ce = 0), ne
}
function Zy() {
  for (; b !== null; ) Rp(b)
}
function by() {
  for (; b !== null && !Cm(); ) Rp(b)
}
function Rp(e) {
  var t = Tp(e.alternate, e, Ne)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Np(e) : (b = t),
    (Ys.current = null)
}
function Np(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ky(n, t)), n !== null)) {
        ;(n.flags &= 32767), (b = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ne = 6), (b = null)
        return
      }
    } else if (((n = Qy(n, t, Ne)), n !== null)) {
      b = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      b = t
      return
    }
    b = t = e
  } while (t !== null)
  ne === 0 && (ne = 5)
}
function Yt(e, t, n) {
  var r = j,
    o = Fe.transition
  try {
    ;(Fe.transition = null), (j = 1), ev(e, t, n, r)
  } finally {
    ;(Fe.transition = o), (j = r)
  }
  return null
}
function ev(e, t, n, r) {
  do In()
  while (_t !== null)
  if (D & 6) throw Error(C(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (zm(e, i),
    e === le && ((b = le = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Co ||
      ((Co = !0),
      Lp(Ko, function () {
        return In(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Fe.transition), (Fe.transition = null)
    var l = j
    j = 1
    var u = D
    ;(D |= 4),
      (Ys.current = null),
      qy(e, n),
      kp(n, e),
      Sy(Ru),
      (qo = !!_u),
      (Ru = _u = null),
      (e.current = n),
      Gy(n),
      Pm(),
      (D = u),
      (j = l),
      (Fe.transition = i)
  } else e.current = n
  if (
    (Co && ((Co = !1), (_t = e), (ci = o)),
    (i = e.pendingLanes),
    i === 0 && (At = null),
    Nm(n.stateNode),
    Re(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if (ai) throw ((ai = !1), (e = Ju), (Ju = null), e)
  return (
    ci & 1 && e.tag !== 0 && In(),
    (i = e.pendingLanes),
    i & 1 ? (e === qu ? Nr++ : ((Nr = 0), (qu = e))) : (Nr = 0),
    Jt(),
    null
  )
}
function In() {
  if (_t !== null) {
    var e = ud(ci),
      t = Fe.transition,
      n = j
    try {
      if (((Fe.transition = null), (j = 16 > e ? 16 : e), _t === null))
        var r = !1
      else {
        if (((e = _t), (_t = null), (ci = 0), D & 6)) throw Error(C(331))
        var o = D
        for (D |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            l = i.child
          if (_.flags & 16) {
            var u = i.deletions
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s]
                for (_ = a; _ !== null; ) {
                  var c = _
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(8, c, i)
                  }
                  var p = c.child
                  if (p !== null) (p.return = c), (_ = p)
                  else
                    for (; _ !== null; ) {
                      c = _
                      var d = c.sibling,
                        v = c.return
                      if ((wp(c), c === a)) {
                        _ = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = v), (_ = d)
                        break
                      }
                      _ = v
                    }
                }
              }
              var g = i.alternate
              if (g !== null) {
                var m = g.child
                if (m !== null) {
                  g.child = null
                  do {
                    var E = m.sibling
                    ;(m.sibling = null), (m = E)
                  } while (m !== null)
                }
              }
              _ = i
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (_ = l)
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _r(9, i, i.return)
                }
              var h = i.sibling
              if (h !== null) {
                ;(h.return = i.return), (_ = h)
                break e
              }
              _ = i.return
            }
        }
        var f = e.current
        for (_ = f; _ !== null; ) {
          l = _
          var y = l.child
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), (_ = y)
          else
            e: for (l = f; _ !== null; ) {
              if (((u = _), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $i(9, u)
                  }
                } catch (P) {
                  X(u, u.return, P)
                }
              if (u === l) {
                _ = null
                break e
              }
              var w = u.sibling
              if (w !== null) {
                ;(w.return = u.return), (_ = w)
                break e
              }
              _ = u.return
            }
        }
        if (
          ((D = o), Jt(), tt && typeof tt.onPostCommitFiberRoot == 'function')
        )
          try {
            tt.onPostCommitFiberRoot(Ci, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(j = n), (Fe.transition = t)
    }
  }
  return !1
}
function Fc(e, t, n) {
  ;(t = Wn(n, t)),
    (t = sp(e, t, 1)),
    (e = $t(e, t, 1)),
    (t = we()),
    e !== null && (br(e, 1, t), Re(e, t))
}
function X(e, t, n) {
  if (e.tag === 3) Fc(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fc(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (At === null || !At.has(r)))
        ) {
          ;(e = Wn(n, e)),
            (e = ap(t, e, 1)),
            (t = $t(t, e, 1)),
            (e = we()),
            t !== null && (br(t, 1, e), Re(t, e))
          break
        }
      }
      t = t.return
    }
}
function tv(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ce & n) === n &&
      (ne === 4 || (ne === 3 && (ce & 130023424) === ce && 500 > Z() - bs)
        ? nn(e, 0)
        : (Zs |= n)),
    Re(e, t)
}
function Op(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ho), (ho <<= 1), !(ho & 130023424) && (ho = 4194304))
      : (t = 1))
  var n = we()
  ;(e = dt(e, t)), e !== null && (br(e, t, n), Re(e, n))
}
function nv(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Op(e, n)
}
function rv(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(C(314))
  }
  r !== null && r.delete(t), Op(e, n)
}
var Tp
Tp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ce = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), Hy(e, t, n)
      Ce = !!(e.flags & 131072)
    }
  else (Ce = !1), K && t.flags & 1048576 && Ad(t, ti, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      zo(e, t), (e = t.pendingProps)
      var o = Fn(t, ve.current)
      zn(t, n), (o = Ks(null, t, r, e, o, n))
      var i = Js()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((i = !0), bo(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Bs(t),
            (o.updater = Ti),
            (t.stateNode = o),
            (o._reactInternals = t),
            Mu(t, r, e, n),
            (t = Fu(null, t, r, !0, i, n)))
          : ((t.tag = 0), K && i && zs(t), ge(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (zo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = iv(r)),
          (e = He(r, e)),
          o)
        ) {
          case 0:
            t = ju(null, t, r, e, n)
            break e
          case 1:
            t = Oc(null, t, r, e, n)
            break e
          case 11:
            t = Rc(null, t, r, e, n)
            break e
          case 14:
            t = Nc(null, t, r, He(r.type, e), n)
            break e
        }
        throw Error(C(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        ju(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Oc(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((pp(t), e === null)) throw Error(C(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Dd(e, t),
          oi(t, r, null, n)
        var l = t.memoizedState
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = Wn(Error(C(423)), t)), (t = Tc(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = Wn(Error(C(424)), t)), (t = Tc(e, t, r, n, o))
            break e
          } else
            for (
              Oe = Lt(t.stateNode.containerInfo.firstChild),
                Te = t,
                K = !0,
                Ke = null,
                n = Bd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Un(), r === o)) {
            t = pt(e, t, n)
            break e
          }
          ge(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Vd(t),
        e === null && Au(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Nu(r, o) ? (l = null) : i !== null && Nu(r, i) && (t.flags |= 32),
        dp(e, t),
        ge(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && Au(t), null
    case 13:
      return hp(e, t, n)
    case 4:
      return (
        Vs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        Rc(e, t, r, o, n)
      )
    case 7:
      return ge(e, t, t.pendingProps, n), t.child
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          V(ni, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Xe(i.value, l)) {
            if (i.children === o.children && !Pe.current) {
              t = pt(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies
              if (u !== null) {
                l = i.child
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      ;(s = st(-1, n & -n)), (s.tag = 2)
                      var a = i.updateQueue
                      if (a !== null) {
                        a = a.shared
                        var c = a.pending
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (a.pending = s)
                      }
                    }
                    ;(i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      zu(i.return, n, t),
                      (u.lanes |= n)
                    break
                  }
                  s = s.next
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(C(341))
                ;(l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  zu(l, n, t),
                  (l = i.sibling)
              } else l = i.child
              if (l !== null) l.return = i
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null
                    break
                  }
                  if (((i = l.sibling), i !== null)) {
                    ;(i.return = l.return), (l = i)
                    break
                  }
                  l = l.return
                }
              i = l
            }
        ge(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (o = Ue(o)),
        (r = r(o)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = He(r, t.pendingProps)),
        (o = He(r.type, o)),
        Nc(e, t, r, o, n)
      )
    case 15:
      return cp(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : He(r, o)),
        zo(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), bo(t)) : (e = !1),
        zn(t, n),
        Fd(t, r, o),
        Mu(t, r, o, n),
        Fu(null, t, r, !0, e, n)
      )
    case 19:
      return mp(e, t, n)
    case 22:
      return fp(e, t, n)
  }
  throw Error(C(156, t.tag))
}
function Lp(e, t) {
  return rd(e, t)
}
function ov(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function je(e, t, n, r) {
  return new ov(e, t, n, r)
}
function ra(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function iv(e) {
  if (typeof e == 'function') return ra(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === ks)) return 11
    if (e === xs) return 14
  }
  return 2
}
function It(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Do(e, t, n, r, o, i) {
  var l = 2
  if (((r = e), typeof e == 'function')) ra(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case wn:
        return rn(n.children, o, i, t)
      case Es:
        ;(l = 8), (o |= 8)
        break
      case lu:
        return (e = je(12, n, t, o | 2)), (e.elementType = lu), (e.lanes = i), e
      case uu:
        return (e = je(13, n, t, o)), (e.elementType = uu), (e.lanes = i), e
      case su:
        return (e = je(19, n, t, o)), (e.elementType = su), (e.lanes = i), e
      case Uf:
        return zi(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case jf:
              l = 10
              break e
            case Ff:
              l = 9
              break e
            case ks:
              l = 11
              break e
            case xs:
              l = 14
              break e
            case St:
              ;(l = 16), (r = null)
              break e
          }
        throw Error(C(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = je(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function rn(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e
}
function zi(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Uf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function Ul(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e
}
function Bl(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function lv(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function oa(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new lv(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bs(i),
    e
  )
}
function uv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: gn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function $p(e) {
  if (!e) return Bt
  e = e._reactInternals
  e: {
    if (pn(e) !== e || e.tag !== 1) throw Error(C(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(C(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (_e(n)) return Ld(e, n, t)
  }
  return t
}
function Ap(e, t, n, r, o, i, l, u, s) {
  return (
    (e = oa(n, r, !0, e, o, i, l, u, s)),
    (e.context = $p(null)),
    (n = e.current),
    (r = we()),
    (o = zt(n)),
    (i = st(r, o)),
    (i.callback = t ?? null),
    $t(n, i, o),
    (e.current.lanes = o),
    br(e, o, r),
    Re(e, r),
    e
  )
}
function Ii(e, t, n, r) {
  var o = t.current,
    i = we(),
    l = zt(o)
  return (
    (n = $p(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = st(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = $t(o, t, l)),
    e !== null && (Ge(e, o, l, i), Lo(e, o, l)),
    l
  )
}
function di(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Uc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function ia(e, t) {
  Uc(e, t), (e = e.alternate) && Uc(e, t)
}
function sv() {
  return null
}
var zp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function la(e) {
  this._internalRoot = e
}
Mi.prototype.render = la.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(C(409))
  Ii(e, t, null, null)
}
Mi.prototype.unmount = la.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    an(function () {
      Ii(null, e, null, null)
    }),
      (t[ft] = null)
  }
}
function Mi(e) {
  this._internalRoot = e
}
Mi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cd()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
    kt.splice(n, 0, e), n === 0 && dd(e)
  }
}
function ua(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Di(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Bc() {}
function av(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var a = di(l)
        i.call(a)
      }
    }
    var l = Ap(t, r, e, 0, null, !1, !1, '', Bc)
    return (
      (e._reactRootContainer = l),
      (e[ft] = l.current),
      jr(e.nodeType === 8 ? e.parentNode : e),
      an(),
      l
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var u = r
    r = function () {
      var a = di(s)
      u.call(a)
    }
  }
  var s = oa(e, 0, !1, null, null, !1, !1, '', Bc)
  return (
    (e._reactRootContainer = s),
    (e[ft] = s.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    an(function () {
      Ii(t, s, n, r)
    }),
    s
  )
}
function ji(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var l = i
    if (typeof o == 'function') {
      var u = o
      o = function () {
        var s = di(l)
        u.call(s)
      }
    }
    Ii(t, l, e, o)
  } else l = av(n, t, e, o, r)
  return di(l)
}
sd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes)
        n !== 0 &&
          (_s(t, n | 1), Re(t, Z()), !(D & 6) && ((Hn = Z() + 500), Jt()))
      }
      break
    case 13:
      an(function () {
        var r = dt(e, 1)
        if (r !== null) {
          var o = we()
          Ge(r, e, 1, o)
        }
      }),
        ia(e, 1)
  }
}
Rs = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728)
    if (t !== null) {
      var n = we()
      Ge(t, e, 134217728, n)
    }
    ia(e, 134217728)
  }
}
ad = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = dt(e, t)
    if (n !== null) {
      var r = we()
      Ge(n, e, t, r)
    }
    ia(e, t)
  }
}
cd = function () {
  return j
}
fd = function (e, t) {
  var n = j
  try {
    return (j = e), t()
  } finally {
    j = n
  }
}
gu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((fu(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = Ni(r)
            if (!o) throw Error(C(90))
            Vf(r), fu(r, o)
          }
        }
      }
      break
    case 'textarea':
      Hf(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Tn(e, !!n.multiple, t, !1)
  }
}
Yf = ea
Zf = an
var cv = { usingClientEntryPoint: !1, Events: [to, xn, Ni, Gf, Xf, ea] },
  dr = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  fv = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = td(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || sv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Po.isDisabled && Po.supportsFiber)
    try {
      ;(Ci = Po.inject(fv)), (tt = Po)
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cv
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!ua(t)) throw Error(C(200))
  return uv(e, t, null, n)
}
Ae.createRoot = function (e, t) {
  if (!ua(e)) throw Error(C(299))
  var n = !1,
    r = '',
    o = zp
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = oa(e, 1, !1, null, null, n, !1, r, o)),
    (e[ft] = t.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    new la(t)
  )
}
Ae.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(C(188))
      : ((e = Object.keys(e).join(',')), Error(C(268, e)))
  return (e = td(t)), (e = e === null ? null : e.stateNode), e
}
Ae.flushSync = function (e) {
  return an(e)
}
Ae.hydrate = function (e, t, n) {
  if (!Di(t)) throw Error(C(200))
  return ji(null, e, t, !0, n)
}
Ae.hydrateRoot = function (e, t, n) {
  if (!ua(e)) throw Error(C(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = zp
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Ap(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[ft] = t.current),
    jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new Mi(t)
}
Ae.render = function (e, t, n) {
  if (!Di(t)) throw Error(C(200))
  return ji(null, e, t, !1, n)
}
Ae.unmountComponentAtNode = function (e) {
  if (!Di(e)) throw Error(C(40))
  return e._reactRootContainer
    ? (an(function () {
        ji(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[ft] = null)
        })
      }),
      !0)
    : !1
}
Ae.unstable_batchedUpdates = ea
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Di(n)) throw Error(C(200))
  if (e == null || e._reactInternals === void 0) throw Error(C(38))
  return ji(e, t, n, !1, r)
}
Ae.version = '18.2.0-next-9e3b772b8-20220608'
;(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
      } catch (n) {
        console.error(n)
      }
  }
  t(), (e.exports = Ae)
})(sm)
var Vc = Vo
;(ru.createRoot = Vc.createRoot), (ru.hydrateRoot = Vc.hydrateRoot)
const Fi = x.forwardRef((e, t) => {
  const [n, r] = x.useState(!1),
    o = () => {
      r(!n)
    }
  return (
    x.useImperativeHandle(t, () => ({ toggleVisibility: o })),
    $(fn, {
      children: [
        k('button', {
          onClick: o,
          style: n ? { display: 'none' } : { display: 'inline-block' },
          children: e.text,
        }),
        $('div', {
          className: `accordion-inner ${e.className}`,
          style: n ? { display: 'block' } : { display: 'none' },
          children: [
            e.children,
            k('button', { onClick: o, children: 'close' }),
          ],
        }),
      ],
    })
  )
})
var Yu = {},
  dv = {
    get exports() {
      return Yu
    },
    set exports(e) {
      Yu = e
    },
  },
  Ip = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qn = x
function pv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var hv = typeof Object.is == 'function' ? Object.is : pv,
  mv = Qn.useState,
  yv = Qn.useEffect,
  vv = Qn.useLayoutEffect,
  gv = Qn.useDebugValue
function wv(e, t) {
  var n = t(),
    r = mv({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1]
  return (
    vv(
      function () {
        ;(o.value = n), (o.getSnapshot = t), Vl(o) && i({ inst: o })
      },
      [e, n, t],
    ),
    yv(
      function () {
        return (
          Vl(o) && i({ inst: o }),
          e(function () {
            Vl(o) && i({ inst: o })
          })
        )
      },
      [e],
    ),
    gv(n),
    n
  )
}
function Vl(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !hv(e, n)
  } catch {
    return !0
  }
}
function Sv(e, t) {
  return t()
}
var Ev =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? Sv
    : wv
Ip.useSyncExternalStore =
  Qn.useSyncExternalStore !== void 0 ? Qn.useSyncExternalStore : Ev
;(function (e) {
  e.exports = Ip
})(dv)
var Zu = {},
  kv = {
    get exports() {
      return Zu
    },
    set exports(e) {
      Zu = e
    },
  },
  Mp = {}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ui = x,
  xv = Yu
function Cv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Pv = typeof Object.is == 'function' ? Object.is : Cv,
  _v = xv.useSyncExternalStore,
  Rv = Ui.useRef,
  Nv = Ui.useEffect,
  Ov = Ui.useMemo,
  Tv = Ui.useDebugValue
Mp.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = Rv(null)
  if (i.current === null) {
    var l = { hasValue: !1, value: null }
    i.current = l
  } else l = i.current
  i = Ov(
    function () {
      function s(v) {
        if (!a) {
          if (((a = !0), (c = v), (v = r(v)), o !== void 0 && l.hasValue)) {
            var g = l.value
            if (o(g, v)) return (p = g)
          }
          return (p = v)
        }
        if (((g = p), Pv(c, v))) return g
        var m = r(v)
        return o !== void 0 && o(g, m) ? g : ((c = v), (p = m))
      }
      var a = !1,
        c,
        p,
        d = n === void 0 ? null : n
      return [
        function () {
          return s(t())
        },
        d === null
          ? void 0
          : function () {
              return s(d())
            },
      ]
    },
    [t, n, r, o],
  )
  var u = _v(e, i[0], i[1])
  return (
    Nv(
      function () {
        ;(l.hasValue = !0), (l.value = u)
      },
      [u],
    ),
    Tv(u),
    u
  )
}
;(function (e) {
  e.exports = Mp
})(kv)
function Lv(e) {
  e()
}
let Dp = Lv
const $v = (e) => (Dp = e),
  Av = () => Dp,
  Vt = x.createContext(null)
function jp() {
  return x.useContext(Vt)
}
const zv = () => {
  throw new Error('uSES not initialized!')
}
let Fp = zv
const Iv = (e) => {
    Fp = e
  },
  Mv = (e, t) => e === t
function Dv(e = Vt) {
  const t = e === Vt ? jp : () => x.useContext(e)
  return function (r, o = Mv) {
    const { store: i, subscription: l, getServerState: u } = t(),
      s = Fp(l.addNestedSub, i.getState, u || i.getState, r, o)
    return x.useDebugValue(s), s
  }
}
const Se = Dv()
var bu = {},
  jv = {
    get exports() {
      return bu
    },
    set exports(e) {
      bu = e
    },
  },
  F = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ue = typeof Symbol == 'function' && Symbol.for,
  sa = ue ? Symbol.for('react.element') : 60103,
  aa = ue ? Symbol.for('react.portal') : 60106,
  Bi = ue ? Symbol.for('react.fragment') : 60107,
  Vi = ue ? Symbol.for('react.strict_mode') : 60108,
  Wi = ue ? Symbol.for('react.profiler') : 60114,
  Hi = ue ? Symbol.for('react.provider') : 60109,
  Qi = ue ? Symbol.for('react.context') : 60110,
  ca = ue ? Symbol.for('react.async_mode') : 60111,
  Ki = ue ? Symbol.for('react.concurrent_mode') : 60111,
  Ji = ue ? Symbol.for('react.forward_ref') : 60112,
  qi = ue ? Symbol.for('react.suspense') : 60113,
  Fv = ue ? Symbol.for('react.suspense_list') : 60120,
  Gi = ue ? Symbol.for('react.memo') : 60115,
  Xi = ue ? Symbol.for('react.lazy') : 60116,
  Uv = ue ? Symbol.for('react.block') : 60121,
  Bv = ue ? Symbol.for('react.fundamental') : 60117,
  Vv = ue ? Symbol.for('react.responder') : 60118,
  Wv = ue ? Symbol.for('react.scope') : 60119
function Ie(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case sa:
        switch (((e = e.type), e)) {
          case ca:
          case Ki:
          case Bi:
          case Wi:
          case Vi:
          case qi:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Qi:
              case Ji:
              case Xi:
              case Gi:
              case Hi:
                return e
              default:
                return t
            }
        }
      case aa:
        return t
    }
  }
}
function Up(e) {
  return Ie(e) === Ki
}
F.AsyncMode = ca
F.ConcurrentMode = Ki
F.ContextConsumer = Qi
F.ContextProvider = Hi
F.Element = sa
F.ForwardRef = Ji
F.Fragment = Bi
F.Lazy = Xi
F.Memo = Gi
F.Portal = aa
F.Profiler = Wi
F.StrictMode = Vi
F.Suspense = qi
F.isAsyncMode = function (e) {
  return Up(e) || Ie(e) === ca
}
F.isConcurrentMode = Up
F.isContextConsumer = function (e) {
  return Ie(e) === Qi
}
F.isContextProvider = function (e) {
  return Ie(e) === Hi
}
F.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === sa
}
F.isForwardRef = function (e) {
  return Ie(e) === Ji
}
F.isFragment = function (e) {
  return Ie(e) === Bi
}
F.isLazy = function (e) {
  return Ie(e) === Xi
}
F.isMemo = function (e) {
  return Ie(e) === Gi
}
F.isPortal = function (e) {
  return Ie(e) === aa
}
F.isProfiler = function (e) {
  return Ie(e) === Wi
}
F.isStrictMode = function (e) {
  return Ie(e) === Vi
}
F.isSuspense = function (e) {
  return Ie(e) === qi
}
F.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Bi ||
    e === Ki ||
    e === Wi ||
    e === Vi ||
    e === qi ||
    e === Fv ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Xi ||
        e.$$typeof === Gi ||
        e.$$typeof === Hi ||
        e.$$typeof === Qi ||
        e.$$typeof === Ji ||
        e.$$typeof === Bv ||
        e.$$typeof === Vv ||
        e.$$typeof === Wv ||
        e.$$typeof === Uv))
  )
}
F.typeOf = Ie
;(function (e) {
  e.exports = F
})(jv)
var Bp = bu,
  Hv = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Qv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Vp = {}
Vp[Bp.ForwardRef] = Hv
Vp[Bp.Memo] = Qv
var Wc = {},
  Kv = {
    get exports() {
      return Wc
    },
    set exports(e) {
      Wc = e
    },
  },
  U = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fa = Symbol.for('react.element'),
  da = Symbol.for('react.portal'),
  Yi = Symbol.for('react.fragment'),
  Zi = Symbol.for('react.strict_mode'),
  bi = Symbol.for('react.profiler'),
  el = Symbol.for('react.provider'),
  tl = Symbol.for('react.context'),
  Jv = Symbol.for('react.server_context'),
  nl = Symbol.for('react.forward_ref'),
  rl = Symbol.for('react.suspense'),
  ol = Symbol.for('react.suspense_list'),
  il = Symbol.for('react.memo'),
  ll = Symbol.for('react.lazy'),
  qv = Symbol.for('react.offscreen'),
  Wp
Wp = Symbol.for('react.module.reference')
function Ve(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case fa:
        switch (((e = e.type), e)) {
          case Yi:
          case bi:
          case Zi:
          case rl:
          case ol:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Jv:
              case tl:
              case nl:
              case ll:
              case il:
              case el:
                return e
              default:
                return t
            }
        }
      case da:
        return t
    }
  }
}
U.ContextConsumer = tl
U.ContextProvider = el
U.Element = fa
U.ForwardRef = nl
U.Fragment = Yi
U.Lazy = ll
U.Memo = il
U.Portal = da
U.Profiler = bi
U.StrictMode = Zi
U.Suspense = rl
U.SuspenseList = ol
U.isAsyncMode = function () {
  return !1
}
U.isConcurrentMode = function () {
  return !1
}
U.isContextConsumer = function (e) {
  return Ve(e) === tl
}
U.isContextProvider = function (e) {
  return Ve(e) === el
}
U.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === fa
}
U.isForwardRef = function (e) {
  return Ve(e) === nl
}
U.isFragment = function (e) {
  return Ve(e) === Yi
}
U.isLazy = function (e) {
  return Ve(e) === ll
}
U.isMemo = function (e) {
  return Ve(e) === il
}
U.isPortal = function (e) {
  return Ve(e) === da
}
U.isProfiler = function (e) {
  return Ve(e) === bi
}
U.isStrictMode = function (e) {
  return Ve(e) === Zi
}
U.isSuspense = function (e) {
  return Ve(e) === rl
}
U.isSuspenseList = function (e) {
  return Ve(e) === ol
}
U.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Yi ||
    e === bi ||
    e === Zi ||
    e === rl ||
    e === ol ||
    e === qv ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ll ||
        e.$$typeof === il ||
        e.$$typeof === el ||
        e.$$typeof === tl ||
        e.$$typeof === nl ||
        e.$$typeof === Wp ||
        e.getModuleId !== void 0))
  )
}
U.typeOf = Ve
;(function (e) {
  e.exports = U
})(Kv)
function Gv() {
  const e = Av()
  let t = null,
    n = null
  return {
    clear() {
      ;(t = null), (n = null)
    },
    notify() {
      e(() => {
        let r = t
        for (; r; ) r.callback(), (r = r.next)
      })
    },
    get() {
      let r = [],
        o = t
      for (; o; ) r.push(o), (o = o.next)
      return r
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n })
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next))
        }
      )
    },
  }
}
const Hc = { notify() {}, get: () => [] }
function Xv(e, t) {
  let n,
    r = Hc
  function o(p) {
    return s(), r.subscribe(p)
  }
  function i() {
    r.notify()
  }
  function l() {
    c.onStateChange && c.onStateChange()
  }
  function u() {
    return !!n
  }
  function s() {
    n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = Gv()))
  }
  function a() {
    n && (n(), (n = void 0), r.clear(), (r = Hc))
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: s,
    tryUnsubscribe: a,
    getListeners: () => r,
  }
  return c
}
const Yv =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Zv = Yv ? x.useLayoutEffect : x.useEffect
function bv({ store: e, context: t, children: n, serverState: r }) {
  const o = x.useMemo(() => {
      const u = Xv(e)
      return { store: e, subscription: u, getServerState: r ? () => r : void 0 }
    }, [e, r]),
    i = x.useMemo(() => e.getState(), [e])
  Zv(() => {
    const { subscription: u } = o
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      i !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0)
      }
    )
  }, [o, i])
  const l = t || Vt
  return vs.createElement(l.Provider, { value: o }, n)
}
function Hp(e = Vt) {
  const t = e === Vt ? jp : () => x.useContext(e)
  return function () {
    const { store: r } = t()
    return r
  }
}
const e0 = Hp()
function t0(e = Vt) {
  const t = e === Vt ? e0 : Hp(e)
  return function () {
    return t().dispatch
  }
}
const n0 = t0()
Iv(Zu.useSyncExternalStoreWithSelector)
$v(Vo.unstable_batchedUpdates)
const hn = n0
function Je(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (o) {
              return "'" + o + "'"
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf',
  )
}
function Wt(e) {
  return !!e && !!e[Q]
}
function ht(e) {
  var t
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != 'object') return !1
      var r = Object.getPrototypeOf(n)
      if (r === null) return !0
      var o = Object.hasOwnProperty.call(r, 'constructor') && r.constructor
      return (
        o === Object ||
        (typeof o == 'function' && Function.toString.call(o) === f0)
      )
    })(e) ||
      Array.isArray(e) ||
      !!e[Yc] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Yc]) ||
      pa(e) ||
      ha(e))
  )
}
function cn(e, t, n) {
  n === void 0 && (n = !1),
    Yn(e) === 0
      ? (n ? Object.keys : Dn)(e).forEach(function (r) {
          ;(n && typeof r == 'symbol') || t(r, e[r], e)
        })
      : e.forEach(function (r, o) {
          return t(o, r, e)
        })
}
function Yn(e) {
  var t = e[Q]
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : pa(e)
    ? 2
    : ha(e)
    ? 3
    : 0
}
function Mn(e, t) {
  return Yn(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function r0(e, t) {
  return Yn(e) === 2 ? e.get(t) : e[t]
}
function Qp(e, t, n) {
  var r = Yn(e)
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function Kp(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function pa(e) {
  return a0 && e instanceof Map
}
function ha(e) {
  return c0 && e instanceof Set
}
function Zt(e) {
  return e.o || e.t
}
function ma(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  var t = qp(e)
  delete t[Q]
  for (var n = Dn(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o]
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}
function ya(e, t) {
  return (
    t === void 0 && (t = !1),
    va(e) ||
      Wt(e) ||
      !ht(e) ||
      (Yn(e) > 1 && (e.set = e.add = e.clear = e.delete = o0),
      Object.freeze(e),
      t &&
        cn(
          e,
          function (n, r) {
            return ya(r, !0)
          },
          !0,
        )),
    e
  )
}
function o0() {
  Je(2)
}
function va(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e)
}
function rt(e) {
  var t = rs[e]
  return t || Je(18, e), t
}
function i0(e, t) {
  rs[e] || (rs[e] = t)
}
function es() {
  return Jr
}
function Wl(e, t) {
  t && (rt('Patches'), (e.u = []), (e.s = []), (e.v = t))
}
function pi(e) {
  ts(e), e.p.forEach(l0), (e.p = null)
}
function ts(e) {
  e === Jr && (Jr = e.l)
}
function Qc(e) {
  return (Jr = { p: [], l: Jr, h: e, m: !0, _: 0 })
}
function l0(e) {
  var t = e[Q]
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0)
}
function Hl(e, t) {
  t._ = t.p.length
  var n = t.p[0],
    r = e !== void 0 && e !== n
  return (
    t.h.O || rt('ES5').S(t, e, r),
    r
      ? (n[Q].P && (pi(t), Je(4)),
        ht(e) && ((e = hi(t, e)), t.l || mi(t, e)),
        t.u && rt('Patches').M(n[Q].t, e, t.u, t.s))
      : (e = hi(t, n, [])),
    pi(t),
    t.u && t.v(t.u, t.s),
    e !== Jp ? e : void 0
  )
}
function hi(e, t, n) {
  if (va(t)) return t
  var r = t[Q]
  if (!r)
    return (
      cn(
        t,
        function (u, s) {
          return Kc(e, r, t, u, s, n)
        },
        !0,
      ),
      t
    )
  if (r.A !== e) return t
  if (!r.P) return mi(e, r.t, !0), r.t
  if (!r.I) {
    ;(r.I = !0), r.A._--
    var o = r.i === 4 || r.i === 5 ? (r.o = ma(r.k)) : r.o,
      i = o,
      l = !1
    r.i === 3 && ((i = new Set(o)), o.clear(), (l = !0)),
      cn(i, function (u, s) {
        return Kc(e, r, o, u, s, n, l)
      }),
      mi(e, o, !1),
      n && e.u && rt('Patches').N(r, n, e.u, e.s)
  }
  return r.o
}
function Kc(e, t, n, r, o, i, l) {
  if (Wt(o)) {
    var u = hi(e, o, i && t && t.i !== 3 && !Mn(t.R, r) ? i.concat(r) : void 0)
    if ((Qp(n, r, u), !Wt(u))) return
    e.m = !1
  } else l && n.add(o)
  if (ht(o) && !va(o)) {
    if (!e.h.D && e._ < 1) return
    hi(e, o), (t && t.A.l) || mi(e, o)
  }
}
function mi(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && ya(t, n)
}
function Ql(e, t) {
  var n = e[Q]
  return (n ? Zt(n) : e)[t]
}
function Jc(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t)
      if (r) return r
      n = Object.getPrototypeOf(n)
    }
}
function Ct(e) {
  e.P || ((e.P = !0), e.l && Ct(e.l))
}
function Kl(e) {
  e.o || (e.o = ma(e.t))
}
function ns(e, t, n) {
  var r = pa(t)
    ? rt('MapSet').F(t, n)
    : ha(t)
    ? rt('MapSet').T(t, n)
    : e.O
    ? (function (o, i) {
        var l = Array.isArray(o),
          u = {
            i: l ? 1 : 0,
            A: i ? i.A : es(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          s = u,
          a = qr
        l && ((s = [u]), (a = gr))
        var c = Proxy.revocable(s, a),
          p = c.revoke,
          d = c.proxy
        return (u.k = d), (u.j = p), d
      })(t, n)
    : rt('ES5').J(t, n)
  return (n ? n.A : es()).p.push(r), r
}
function u0(e) {
  return (
    Wt(e) || Je(22, e),
    (function t(n) {
      if (!ht(n)) return n
      var r,
        o = n[Q],
        i = Yn(n)
      if (o) {
        if (!o.P && (o.i < 4 || !rt('ES5').K(o))) return o.t
        ;(o.I = !0), (r = qc(n, i)), (o.I = !1)
      } else r = qc(n, i)
      return (
        cn(r, function (l, u) {
          ;(o && r0(o.t, l) === u) || Qp(r, l, t(u))
        }),
        i === 3 ? new Set(r) : r
      )
    })(e)
  )
}
function qc(e, t) {
  switch (t) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return ma(e)
}
function s0() {
  function e(i, l) {
    var u = o[i]
    return (
      u
        ? (u.enumerable = l)
        : (o[i] = u =
            {
              configurable: !0,
              enumerable: l,
              get: function () {
                var s = this[Q]
                return qr.get(s, i)
              },
              set: function (s) {
                var a = this[Q]
                qr.set(a, i, s)
              },
            }),
      u
    )
  }
  function t(i) {
    for (var l = i.length - 1; l >= 0; l--) {
      var u = i[l][Q]
      if (!u.P)
        switch (u.i) {
          case 5:
            r(u) && Ct(u)
            break
          case 4:
            n(u) && Ct(u)
        }
    }
  }
  function n(i) {
    for (var l = i.t, u = i.k, s = Dn(u), a = s.length - 1; a >= 0; a--) {
      var c = s[a]
      if (c !== Q) {
        var p = l[c]
        if (p === void 0 && !Mn(l, c)) return !0
        var d = u[c],
          v = d && d[Q]
        if (v ? v.t !== p : !Kp(d, p)) return !0
      }
    }
    var g = !!l[Q]
    return s.length !== Dn(l).length + (g ? 0 : 1)
  }
  function r(i) {
    var l = i.k
    if (l.length !== i.t.length) return !0
    var u = Object.getOwnPropertyDescriptor(l, l.length - 1)
    if (u && !u.get) return !0
    for (var s = 0; s < l.length; s++) if (!l.hasOwnProperty(s)) return !0
    return !1
  }
  var o = {}
  i0('ES5', {
    J: function (i, l) {
      var u = Array.isArray(i),
        s = (function (c, p) {
          if (c) {
            for (var d = Array(p.length), v = 0; v < p.length; v++)
              Object.defineProperty(d, '' + v, e(v, !0))
            return d
          }
          var g = qp(p)
          delete g[Q]
          for (var m = Dn(g), E = 0; E < m.length; E++) {
            var h = m[E]
            g[h] = e(h, c || !!g[h].enumerable)
          }
          return Object.create(Object.getPrototypeOf(p), g)
        })(u, i),
        a = {
          i: u ? 5 : 4,
          A: l ? l.A : es(),
          P: !1,
          I: !1,
          R: {},
          l,
          t: i,
          k: s,
          o: null,
          g: !1,
          C: !1,
        }
      return Object.defineProperty(s, Q, { value: a, writable: !0 }), s
    },
    S: function (i, l, u) {
      u
        ? Wt(l) && l[Q].A === i && t(i.p)
        : (i.u &&
            (function s(a) {
              if (a && typeof a == 'object') {
                var c = a[Q]
                if (c) {
                  var p = c.t,
                    d = c.k,
                    v = c.R,
                    g = c.i
                  if (g === 4)
                    cn(d, function (y) {
                      y !== Q &&
                        (p[y] !== void 0 || Mn(p, y)
                          ? v[y] || s(d[y])
                          : ((v[y] = !0), Ct(c)))
                    }),
                      cn(p, function (y) {
                        d[y] !== void 0 || Mn(d, y) || ((v[y] = !1), Ct(c))
                      })
                  else if (g === 5) {
                    if ((r(c) && (Ct(c), (v.length = !0)), d.length < p.length))
                      for (var m = d.length; m < p.length; m++) v[m] = !1
                    else for (var E = p.length; E < d.length; E++) v[E] = !0
                    for (
                      var h = Math.min(d.length, p.length), f = 0;
                      f < h;
                      f++
                    )
                      d.hasOwnProperty(f) || (v[f] = !0),
                        v[f] === void 0 && s(d[f])
                  }
                }
              }
            })(i.p[0]),
          t(i.p))
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i)
    },
  })
}
var Gc,
  Jr,
  ga = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  a0 = typeof Map < 'u',
  c0 = typeof Set < 'u',
  Xc = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  Jp = ga
    ? Symbol.for('immer-nothing')
    : (((Gc = {})['immer-nothing'] = !0), Gc),
  Yc = ga ? Symbol.for('immer-draftable') : '__$immer_draftable',
  Q = ga ? Symbol.for('immer-state') : '__$immer_state',
  f0 = '' + Object.prototype.constructor,
  Dn =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e),
          )
        }
      : Object.getOwnPropertyNames,
  qp =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {}
      return (
        Dn(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n)
        }),
        t
      )
    },
  rs = {},
  qr = {
    get: function (e, t) {
      if (t === Q) return e
      var n = Zt(e)
      if (!Mn(n, t))
        return (function (o, i, l) {
          var u,
            s = Jc(i, l)
          return s
            ? 'value' in s
              ? s.value
              : (u = s.get) === null || u === void 0
              ? void 0
              : u.call(o.k)
            : void 0
        })(e, n, t)
      var r = n[t]
      return e.I || !ht(r)
        ? r
        : r === Ql(e.t, t)
        ? (Kl(e), (e.o[t] = ns(e.A.h, r, e)))
        : r
    },
    has: function (e, t) {
      return t in Zt(e)
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Zt(e))
    },
    set: function (e, t, n) {
      var r = Jc(Zt(e), t)
      if (r != null && r.set) return r.set.call(e.k, n), !0
      if (!e.P) {
        var o = Ql(Zt(e), t),
          i = o == null ? void 0 : o[Q]
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0
        if (Kp(n, o) && (n !== void 0 || Mn(e.t, t))) return !0
        Kl(e), Ct(e)
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      )
    },
    deleteProperty: function (e, t) {
      return (
        Ql(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), Kl(e), Ct(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      )
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Zt(e),
        r = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: r.enumerable,
          value: n[t],
        }
      )
    },
    defineProperty: function () {
      Je(11)
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function () {
      Je(12)
    },
  },
  gr = {}
cn(qr, function (e, t) {
  gr[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
}),
  (gr.deleteProperty = function (e, t) {
    return gr.set.call(this, e, t, void 0)
  }),
  (gr.set = function (e, t, n) {
    return qr.set.call(this, e[0], t, n, e[0])
  })
var d0 = (function () {
    function e(n) {
      var r = this
      ;(this.O = Xc),
        (this.D = !0),
        (this.produce = function (o, i, l) {
          if (typeof o == 'function' && typeof i != 'function') {
            var u = i
            i = o
            var s = r
            return function (m) {
              var E = this
              m === void 0 && (m = u)
              for (
                var h = arguments.length, f = Array(h > 1 ? h - 1 : 0), y = 1;
                y < h;
                y++
              )
                f[y - 1] = arguments[y]
              return s.produce(m, function (w) {
                var P
                return (P = i).call.apply(P, [E, w].concat(f))
              })
            }
          }
          var a
          if (
            (typeof i != 'function' && Je(6),
            l !== void 0 && typeof l != 'function' && Je(7),
            ht(o))
          ) {
            var c = Qc(r),
              p = ns(r, o, void 0),
              d = !0
            try {
              ;(a = i(p)), (d = !1)
            } finally {
              d ? pi(c) : ts(c)
            }
            return typeof Promise < 'u' && a instanceof Promise
              ? a.then(
                  function (m) {
                    return Wl(c, l), Hl(m, c)
                  },
                  function (m) {
                    throw (pi(c), m)
                  },
                )
              : (Wl(c, l), Hl(a, c))
          }
          if (!o || typeof o != 'object') {
            if (
              ((a = i(o)) === void 0 && (a = o),
              a === Jp && (a = void 0),
              r.D && ya(a, !0),
              l)
            ) {
              var v = [],
                g = []
              rt('Patches').M(o, a, v, g), l(v, g)
            }
            return a
          }
          Je(21, o)
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == 'function')
            return function (a) {
              for (
                var c = arguments.length, p = Array(c > 1 ? c - 1 : 0), d = 1;
                d < c;
                d++
              )
                p[d - 1] = arguments[d]
              return r.produceWithPatches(a, function (v) {
                return o.apply(void 0, [v].concat(p))
              })
            }
          var l,
            u,
            s = r.produce(o, i, function (a, c) {
              ;(l = a), (u = c)
            })
          return typeof Promise < 'u' && s instanceof Promise
            ? s.then(function (a) {
                return [a, l, u]
              })
            : [s, l, u]
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype
    return (
      (t.createDraft = function (n) {
        ht(n) || Je(8), Wt(n) && (n = u0(n))
        var r = Qc(this),
          o = ns(this, n, void 0)
        return (o[Q].C = !0), ts(r), o
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[Q],
          i = o.A
        return Wl(i, r), Hl(void 0, i)
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n
      }),
      (t.setUseProxies = function (n) {
        n && !Xc && Je(20), (this.O = n)
      }),
      (t.applyPatches = function (n, r) {
        var o
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o]
          if (i.path.length === 0 && i.op === 'replace') {
            n = i.value
            break
          }
        }
        o > -1 && (r = r.slice(o + 1))
        var l = rt('Patches').$
        return Wt(n)
          ? l(n, r)
          : this.produce(n, function (u) {
              return l(u, r)
            })
      }),
      e
    )
  })(),
  $e = new d0(),
  Gp = $e.produce
$e.produceWithPatches.bind($e)
$e.setAutoFreeze.bind($e)
$e.setUseProxies.bind($e)
$e.applyPatches.bind($e)
$e.createDraft.bind($e)
$e.finishDraft.bind($e)
function Gr(e) {
  return (
    (Gr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    Gr(e)
  )
}
function p0(e, t) {
  if (Gr(e) !== 'object' || e === null) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (Gr(r) !== 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function h0(e) {
  var t = p0(e, 'string')
  return Gr(t) === 'symbol' ? t : String(t)
}
function m0(e, t, n) {
  return (
    (t = h0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Zc(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function bc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Zc(Object(n), !0).forEach(function (r) {
          m0(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Zc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
  }
  return e
}
function he(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  )
}
var ef = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
  })(),
  Jl = function () {
    return Math.random().toString(36).substring(7).split('').join('.')
  },
  yi = {
    INIT: '@@redux/INIT' + Jl(),
    REPLACE: '@@redux/REPLACE' + Jl(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Jl()
    },
  }
function y0(e) {
  if (typeof e != 'object' || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function Xp(e, t, n) {
  var r
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(he(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(he(1))
    return n(Xp)(e, t)
  }
  if (typeof e != 'function') throw new Error(he(2))
  var o = e,
    i = t,
    l = [],
    u = l,
    s = !1
  function a() {
    u === l && (u = l.slice())
  }
  function c() {
    if (s) throw new Error(he(3))
    return i
  }
  function p(m) {
    if (typeof m != 'function') throw new Error(he(4))
    if (s) throw new Error(he(5))
    var E = !0
    return (
      a(),
      u.push(m),
      function () {
        if (E) {
          if (s) throw new Error(he(6))
          ;(E = !1), a()
          var f = u.indexOf(m)
          u.splice(f, 1), (l = null)
        }
      }
    )
  }
  function d(m) {
    if (!y0(m)) throw new Error(he(7))
    if (typeof m.type > 'u') throw new Error(he(8))
    if (s) throw new Error(he(9))
    try {
      ;(s = !0), (i = o(i, m))
    } finally {
      s = !1
    }
    for (var E = (l = u), h = 0; h < E.length; h++) {
      var f = E[h]
      f()
    }
    return m
  }
  function v(m) {
    if (typeof m != 'function') throw new Error(he(10))
    ;(o = m), d({ type: yi.REPLACE })
  }
  function g() {
    var m,
      E = p
    return (
      (m = {
        subscribe: function (f) {
          if (typeof f != 'object' || f === null) throw new Error(he(11))
          function y() {
            f.next && f.next(c())
          }
          y()
          var w = E(y)
          return { unsubscribe: w }
        },
      }),
      (m[ef] = function () {
        return this
      }),
      m
    )
  }
  return (
    d({ type: yi.INIT }),
    (r = { dispatch: d, subscribe: p, getState: c, replaceReducer: v }),
    (r[ef] = g),
    r
  )
}
function v0(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: yi.INIT })
    if (typeof r > 'u') throw new Error(he(12))
    if (typeof n(void 0, { type: yi.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(he(13))
  })
}
function g0(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r]
    typeof e[o] == 'function' && (n[o] = e[o])
  }
  var i = Object.keys(n),
    l
  try {
    v0(n)
  } catch (u) {
    l = u
  }
  return function (s, a) {
    if ((s === void 0 && (s = {}), l)) throw l
    for (var c = !1, p = {}, d = 0; d < i.length; d++) {
      var v = i[d],
        g = n[v],
        m = s[v],
        E = g(m, a)
      if (typeof E > 'u') throw (a && a.type, new Error(he(14)))
      ;(p[v] = E), (c = c || E !== m)
    }
    return (c = c || i.length !== Object.keys(s).length), c ? p : s
  }
}
function vi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return t.length === 0
    ? function (r) {
        return r
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments))
        }
      })
}
function w0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(he(15))
        },
        l = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments)
          },
        },
        u = t.map(function (s) {
          return s(l)
        })
      return (
        (i = vi.apply(void 0, u)(o.dispatch)),
        bc(bc({}, o), {}, { dispatch: i })
      )
    }
  }
}
function Yp(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState
    return function (l) {
      return function (u) {
        return typeof u == 'function' ? u(o, i, e) : l(u)
      }
    }
  }
  return t
}
var Zp = Yp()
Zp.withExtraArgument = Yp
const tf = Zp
var bp =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError(
            'Class extends value ' +
              String(n) +
              ' is not a constructor or null',
          )
        e(t, n)
        function r() {
          this.constructor = t
        }
        t.prototype =
          n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
      }
    })(),
  S0 =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1]
            return i[1]
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        l
      return (
        (l = { next: u(0), throw: u(1), return: u(2) }),
        typeof Symbol == 'function' &&
          (l[Symbol.iterator] = function () {
            return this
          }),
        l
      )
      function u(a) {
        return function (c) {
          return s([a, c])
        }
      }
      function s(a) {
        if (r) throw new TypeError('Generator is already executing.')
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  a[0] & 2
                    ? o.return
                    : a[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, a[1])).done)
            )
              return i
            switch (((o = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
              case 0:
              case 1:
                i = a
                break
              case 4:
                return n.label++, { value: a[1], done: !1 }
              case 5:
                n.label++, (o = a[1]), (a = [0])
                continue
              case 7:
                ;(a = n.ops.pop()), n.trys.pop()
                continue
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (a[0] === 6 || a[0] === 2))
                ) {
                  n = 0
                  continue
                }
                if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                  n.label = a[1]
                  break
                }
                if (a[0] === 6 && n.label < i[1]) {
                  ;(n.label = i[1]), (i = a)
                  break
                }
                if (i && n.label < i[2]) {
                  ;(n.label = i[2]), n.ops.push(a)
                  break
                }
                i[2] && n.ops.pop(), n.trys.pop()
                continue
            }
            a = t.call(e, n)
          } catch (c) {
            ;(a = [6, c]), (o = 0)
          } finally {
            r = i = 0
          }
        if (a[0] & 5) throw a[1]
        return { value: a[0] ? a[1] : void 0, done: !0 }
      }
    },
  Kn =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n]
      return e
    },
  E0 = Object.defineProperty,
  k0 = Object.defineProperties,
  x0 = Object.getOwnPropertyDescriptors,
  nf = Object.getOwnPropertySymbols,
  C0 = Object.prototype.hasOwnProperty,
  P0 = Object.prototype.propertyIsEnumerable,
  rf = function (e, t, n) {
    return t in e
      ? E0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n)
  },
  Mt = function (e, t) {
    for (var n in t || (t = {})) C0.call(t, n) && rf(e, n, t[n])
    if (nf)
      for (var r = 0, o = nf(t); r < o.length; r++) {
        var n = o[r]
        P0.call(t, n) && rf(e, n, t[n])
      }
    return e
  },
  ql = function (e, t) {
    return k0(e, x0(t))
  },
  _0 = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (s) {
          try {
            u(n.next(s))
          } catch (a) {
            o(a)
          }
        },
        l = function (s) {
          try {
            u(n.throw(s))
          } catch (a) {
            o(a)
          }
        },
        u = function (s) {
          return s.done ? r(s.value) : Promise.resolve(s.value).then(i, l)
        }
      u((n = n.apply(e, t)).next())
    })
  },
  R0 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? vi
              : vi.apply(null, arguments)
        }
function N0(e) {
  if (typeof e != 'object' || e === null) return !1
  var t = Object.getPrototypeOf(e)
  if (t === null) return !0
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n)
  return t === n
}
var O0 = (function (e) {
    bp(t, e)
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
      var o = e.apply(this, n) || this
      return Object.setPrototypeOf(o, t.prototype), o
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
        return e.prototype.concat.apply(this, n)
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Kn([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Kn([void 0], n.concat(this))))()
      }),
      t
    )
  })(Array),
  T0 = (function (e) {
    bp(t, e)
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
      var o = e.apply(this, n) || this
      return Object.setPrototypeOf(o, t.prototype), o
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
        return e.prototype.concat.apply(this, n)
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, Kn([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, Kn([void 0], n.concat(this))))()
      }),
      t
    )
  })(Array)
function os(e) {
  return ht(e) ? Gp(e, function () {}) : e
}
function L0(e) {
  return typeof e == 'boolean'
}
function $0() {
  return function (t) {
    return A0(t)
  }
}
function A0(e) {
  e === void 0 && (e = {})
  var t = e.thunk,
    n = t === void 0 ? !0 : t
  e.immutableCheck, e.serializableCheck
  var r = new O0()
  return (
    n && (L0(n) ? r.push(tf) : r.push(tf.withExtraArgument(n.extraArgument))), r
  )
}
var z0 = !0
function I0(e) {
  var t = $0(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    l = i === void 0 ? t() : i,
    u = n.devTools,
    s = u === void 0 ? !0 : u,
    a = n.preloadedState,
    c = a === void 0 ? void 0 : a,
    p = n.enhancers,
    d = p === void 0 ? void 0 : p,
    v
  if (typeof o == 'function') v = o
  else if (N0(o)) v = g0(o)
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers',
    )
  var g = l
  typeof g == 'function' && (g = g(t))
  var m = w0.apply(void 0, g),
    E = vi
  s && (E = R0(Mt({ trace: !z0 }, typeof s == 'object' && s)))
  var h = new T0(m),
    f = h
  Array.isArray(d) ? (f = Kn([m], d)) : typeof d == 'function' && (f = d(h))
  var y = E.apply(void 0, f)
  return Xp(v, c, y)
}
function Dt(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o]
    if (t) {
      var i = t.apply(void 0, r)
      if (!i) throw new Error('prepareAction did not return an object')
      return Mt(
        Mt({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error },
      )
    }
    return { type: e, payload: r[0] }
  }
  return (
    (n.toString = function () {
      return '' + e
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e
    }),
    n
  )
}
function eh(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, l) {
        var u = typeof i == 'string' ? i : i.type
        if (u in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type',
          )
        return (t[u] = l), o
      },
      addMatcher: function (i, l) {
        return n.push({ matcher: i, reducer: l }), o
      },
      addDefaultCase: function (i) {
        return (r = i), o
      },
    }
  return e(o), [t, n, r]
}
function M0(e) {
  return typeof e == 'function'
}
function D0(e, t, n, r) {
  n === void 0 && (n = [])
  var o = typeof t == 'function' ? eh(t) : [t, n, r],
    i = o[0],
    l = o[1],
    u = o[2],
    s
  if (M0(e))
    s = function () {
      return os(e())
    }
  else {
    var a = os(e)
    s = function () {
      return a
    }
  }
  function c(p, d) {
    p === void 0 && (p = s())
    var v = Kn(
      [i[d.type]],
      l
        .filter(function (g) {
          var m = g.matcher
          return m(d)
        })
        .map(function (g) {
          var m = g.reducer
          return m
        }),
    )
    return (
      v.filter(function (g) {
        return !!g
      }).length === 0 && (v = [u]),
      v.reduce(function (g, m) {
        if (m)
          if (Wt(g)) {
            var E = g,
              h = m(E, d)
            return h === void 0 ? g : h
          } else {
            if (ht(g))
              return Gp(g, function (f) {
                return m(f, d)
              })
            var h = m(g, d)
            if (h === void 0) {
              if (g === null) return g
              throw Error(
                'A case reducer on a non-draftable value must not return undefined',
              )
            }
            return h
          }
        return g
      }, p)
    )
  }
  return (c.getInitialState = s), c
}
function j0(e, t) {
  return e + '/' + t
}
function ul(e) {
  var t = e.name
  if (!t) throw new Error('`name` is a required option for createSlice')
  typeof process < 'u'
  var n =
      typeof e.initialState == 'function' ? e.initialState : os(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    l = {},
    u = {}
  o.forEach(function (c) {
    var p = r[c],
      d = j0(t, c),
      v,
      g
    'reducer' in p ? ((v = p.reducer), (g = p.prepare)) : (v = p),
      (i[c] = v),
      (l[d] = v),
      (u[c] = g ? Dt(d, g) : Dt(d))
  })
  function s() {
    var c =
        typeof e.extraReducers == 'function'
          ? eh(e.extraReducers)
          : [e.extraReducers],
      p = c[0],
      d = p === void 0 ? {} : p,
      v = c[1],
      g = v === void 0 ? [] : v,
      m = c[2],
      E = m === void 0 ? void 0 : m,
      h = Mt(Mt({}, d), l)
    return D0(n, function (f) {
      for (var y in h) f.addCase(y, h[y])
      for (var w = 0, P = g; w < P.length; w++) {
        var R = P[w]
        f.addMatcher(R.matcher, R.reducer)
      }
      E && f.addDefaultCase(E)
    })
  }
  var a
  return {
    name: t,
    reducer: function (c, p) {
      return a || (a = s()), a(c, p)
    },
    actions: u,
    caseReducers: i,
    getInitialState: function () {
      return a || (a = s()), a.getInitialState()
    },
  }
}
var F0 = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW',
  U0 = function (e) {
    e === void 0 && (e = 21)
    for (var t = '', n = e; n--; ) t += F0[(Math.random() * 64) | 0]
    return t
  },
  B0 = ['name', 'message', 'stack', 'code'],
  Gl = (function () {
    function e(t, n) {
      ;(this.payload = t), (this.meta = n)
    }
    return e
  })(),
  of = (function () {
    function e(t, n) {
      ;(this.payload = t), (this.meta = n)
    }
    return e
  })(),
  V0 = function (e) {
    if (typeof e == 'object' && e !== null) {
      for (var t = {}, n = 0, r = B0; n < r.length; n++) {
        var o = r[n]
        typeof e[o] == 'string' && (t[o] = e[o])
      }
      return t
    }
    return { message: String(e) }
  }
;(function () {
  function e(t, n, r) {
    var o = Dt(t + '/fulfilled', function (a, c, p, d) {
        return {
          payload: a,
          meta: ql(Mt({}, d || {}), {
            arg: p,
            requestId: c,
            requestStatus: 'fulfilled',
          }),
        }
      }),
      i = Dt(t + '/pending', function (a, c, p) {
        return {
          payload: void 0,
          meta: ql(Mt({}, p || {}), {
            arg: c,
            requestId: a,
            requestStatus: 'pending',
          }),
        }
      }),
      l = Dt(t + '/rejected', function (a, c, p, d, v) {
        return {
          payload: d,
          error: ((r && r.serializeError) || V0)(a || 'Rejected'),
          meta: ql(Mt({}, v || {}), {
            arg: p,
            requestId: c,
            rejectedWithValue: !!d,
            requestStatus: 'rejected',
            aborted: (a == null ? void 0 : a.name) === 'AbortError',
            condition: (a == null ? void 0 : a.name) === 'ConditionError',
          }),
        }
      }),
      u =
        typeof AbortController < 'u'
          ? AbortController
          : (function () {
              function a() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                }
              }
              return (a.prototype.abort = function () {}), a
            })()
    function s(a) {
      return function (c, p, d) {
        var v = r != null && r.idGenerator ? r.idGenerator(a) : U0(),
          g = new u(),
          m
        function E(f) {
          ;(m = f), g.abort()
        }
        var h = (function () {
          return _0(this, null, function () {
            var f, y, w, P, R, O, T
            return S0(this, function (B) {
              switch (B.label) {
                case 0:
                  return (
                    B.trys.push([0, 4, , 5]),
                    (P =
                      (f = r == null ? void 0 : r.condition) == null
                        ? void 0
                        : f.call(r, a, { getState: p, extra: d })),
                    H0(P) ? [4, P] : [3, 2]
                  )
                case 1:
                  ;(P = B.sent()), (B.label = 2)
                case 2:
                  if (P === !1 || g.signal.aborted)
                    throw {
                      name: 'ConditionError',
                      message:
                        'Aborted due to condition callback returning false.',
                    }
                  return (
                    (R = new Promise(function (L, se) {
                      return g.signal.addEventListener('abort', function () {
                        return se({
                          name: 'AbortError',
                          message: m || 'Aborted',
                        })
                      })
                    })),
                    c(
                      i(
                        v,
                        a,
                        (y = r == null ? void 0 : r.getPendingMeta) == null
                          ? void 0
                          : y.call(
                              r,
                              { requestId: v, arg: a },
                              { getState: p, extra: d },
                            ),
                      ),
                    ),
                    [
                      4,
                      Promise.race([
                        R,
                        Promise.resolve(
                          n(a, {
                            dispatch: c,
                            getState: p,
                            extra: d,
                            requestId: v,
                            signal: g.signal,
                            abort: E,
                            rejectWithValue: function (L, se) {
                              return new Gl(L, se)
                            },
                            fulfillWithValue: function (L, se) {
                              return new of(L, se)
                            },
                          }),
                        ).then(function (L) {
                          if (L instanceof Gl) throw L
                          return L instanceof of
                            ? o(L.payload, v, a, L.meta)
                            : o(L, v, a)
                        }),
                      ]),
                    ]
                  )
                case 3:
                  return (w = B.sent()), [3, 5]
                case 4:
                  return (
                    (O = B.sent()),
                    (w =
                      O instanceof Gl
                        ? l(null, v, a, O.payload, O.meta)
                        : l(O, v, a)),
                    [3, 5]
                  )
                case 5:
                  return (
                    (T =
                      r &&
                      !r.dispatchConditionRejection &&
                      l.match(w) &&
                      w.meta.condition),
                    T || c(w),
                    [2, w]
                  )
              }
            })
          })
        })()
        return Object.assign(h, {
          abort: E,
          requestId: v,
          arg: a,
          unwrap: function () {
            return h.then(W0)
          },
        })
      }
    }
    return Object.assign(s, {
      pending: i,
      rejected: l,
      fulfilled: o,
      typePrefix: t,
    })
  }
  return (
    (e.withTypes = function () {
      return e
    }),
    e
  )
})()
function W0(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload
  if (e.error) throw e.error
  return e.payload
}
function H0(e) {
  return e !== null && typeof e == 'object' && typeof e.then == 'function'
}
var wa = 'listenerMiddleware'
Dt(wa + '/add')
Dt(wa + '/removeAll')
Dt(wa + '/remove')
var lf
typeof queueMicrotask == 'function' &&
  queueMicrotask.bind(
    typeof window < 'u' ? window : typeof global < 'u' ? global : globalThis,
  )
s0()
const th = ul({
    name: 'notification',
    initialState: null,
    reducers: {
      newNotification(e, t) {
        return t.payload
      },
    },
  }),
  ye = (e, t, n) => async (r) => {
    r(uf({ message: e, isError: t })), setTimeout(() => r(uf(null)), n * 1e3)
  },
  { newNotification: uf } = th.actions,
  Q0 = th.reducer
function nh(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: rh } = Object.prototype,
  { getPrototypeOf: Sa } = Object,
  Ea = ((e) => (t) => {
    const n = rh.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  yt = (e) => ((e = e.toLowerCase()), (t) => Ea(t) === e),
  sl = (e) => (t) => typeof t === e,
  { isArray: Zn } = Array,
  Xr = sl('undefined')
function K0(e) {
  return (
    e !== null &&
    !Xr(e) &&
    e.constructor !== null &&
    !Xr(e.constructor) &&
    Ht(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const oh = yt('ArrayBuffer')
function J0(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && oh(e.buffer)),
    t
  )
}
const q0 = sl('string'),
  Ht = sl('function'),
  ih = sl('number'),
  ka = (e) => e !== null && typeof e == 'object',
  G0 = (e) => e === !0 || e === !1,
  jo = (e) => {
    if (Ea(e) !== 'object') return !1
    const t = Sa(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  X0 = yt('Date'),
  Y0 = yt('File'),
  Z0 = yt('Blob'),
  b0 = yt('FileList'),
  eg = (e) => ka(e) && Ht(e.pipe),
  tg = (e) => {
    const t = '[object FormData]'
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        rh.call(e) === t ||
        (Ht(e.toString) && e.toString() === t))
    )
  },
  ng = yt('URLSearchParams'),
  rg = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function ro(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, o
  if ((typeof e != 'object' && (e = [e]), Zn(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e)
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length
    let u
    for (r = 0; r < l; r++) (u = i[r]), t.call(null, e[u], u, e)
  }
}
function lh(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    o
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o
  return null
}
const uh = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  sh = (e) => !Xr(e) && e !== uh
function is() {
  const { caseless: e } = (sh(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && lh(t, o)) || o
      jo(t[i]) && jo(r)
        ? (t[i] = is(t[i], r))
        : jo(r)
        ? (t[i] = is({}, r))
        : Zn(r)
        ? (t[i] = r.slice())
        : (t[i] = r)
    }
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && ro(arguments[r], n)
  return t
}
const og = (e, t, n, { allOwnKeys: r } = {}) => (
    ro(
      t,
      (o, i) => {
        n && Ht(o) ? (e[i] = nh(o, n)) : (e[i] = o)
      },
      { allOwnKeys: r },
    ),
    e
  ),
  ig = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  lg = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  ug = (e, t, n, r) => {
    let o, i, l
    const u = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !u[l] && ((t[l] = e[l]), (u[l] = !0))
      e = n !== !1 && Sa(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  sg = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  ag = (e) => {
    if (!e) return null
    if (Zn(e)) return e
    let t = e.length
    if (!ih(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  cg = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Sa(Uint8Array)),
  fg = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let o
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value
      t.call(e, i[0], i[1])
    }
  },
  dg = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  pg = yt('HTMLFormElement'),
  hg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o
    }),
  sf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  mg = yt('RegExp'),
  ah = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    ro(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o)
    }),
      Object.defineProperties(e, r)
  },
  yg = (e) => {
    ah(e, (t, n) => {
      if (Ht(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1
      const r = e[n]
      if (Ht(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  vg = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0
        })
      }
    return Zn(e) ? r(e) : r(String(e).split(t)), n
  },
  gg = () => {},
  wg = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Xl = 'abcdefghijklmnopqrstuvwxyz',
  af = '0123456789',
  ch = { DIGIT: af, ALPHA: Xl, ALPHA_DIGIT: Xl + Xl.toUpperCase() + af },
  Sg = (e = 16, t = ch.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function Eg(e) {
  return !!(
    e &&
    Ht(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const kg = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ka(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[o] = r
            const i = Zn(r) ? [] : {}
            return (
              ro(r, (l, u) => {
                const s = n(l, o + 1)
                !Xr(s) && (i[u] = s)
              }),
              (t[o] = void 0),
              i
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  S = {
    isArray: Zn,
    isArrayBuffer: oh,
    isBuffer: K0,
    isFormData: tg,
    isArrayBufferView: J0,
    isString: q0,
    isNumber: ih,
    isBoolean: G0,
    isObject: ka,
    isPlainObject: jo,
    isUndefined: Xr,
    isDate: X0,
    isFile: Y0,
    isBlob: Z0,
    isRegExp: mg,
    isFunction: Ht,
    isStream: eg,
    isURLSearchParams: ng,
    isTypedArray: cg,
    isFileList: b0,
    forEach: ro,
    merge: is,
    extend: og,
    trim: rg,
    stripBOM: ig,
    inherits: lg,
    toFlatObject: ug,
    kindOf: Ea,
    kindOfTest: yt,
    endsWith: sg,
    toArray: ag,
    forEachEntry: fg,
    matchAll: dg,
    isHTMLForm: pg,
    hasOwnProperty: sf,
    hasOwnProp: sf,
    reduceDescriptors: ah,
    freezeMethods: yg,
    toObjectSet: vg,
    toCamelCase: hg,
    noop: gg,
    toFiniteNumber: wg,
    findKey: lh,
    global: uh,
    isContextDefined: sh,
    ALPHABET: ch,
    generateString: Sg,
    isSpecCompliantForm: Eg,
    toJSONObject: kg,
  }
function M(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o)
}
S.inherits(M, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const fh = M.prototype,
  dh = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  dh[e] = { value: e }
})
Object.defineProperties(M, dh)
Object.defineProperty(fh, 'isAxiosError', { value: !0 })
M.from = (e, t, n, r, o, i) => {
  const l = Object.create(fh)
  return (
    S.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype
      },
      (u) => u !== 'isAxiosError',
    ),
    M.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  )
}
const xg = null
function ls(e) {
  return S.isPlainObject(e) || S.isArray(e)
}
function ph(e) {
  return S.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function cf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = ph(o)), !n && i ? '[' + o + ']' : o
        })
        .join(n ? '.' : '')
    : t
}
function Cg(e) {
  return S.isArray(e) && !e.some(ls)
}
const Pg = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function al(e, t, n) {
  if (!S.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, E) {
        return !S.isUndefined(E[m])
      },
    ))
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < 'u' && Blob)) && S.isSpecCompliantForm(t)
  if (!S.isFunction(o)) throw new TypeError('visitor must be a function')
  function a(g) {
    if (g === null) return ''
    if (S.isDate(g)) return g.toISOString()
    if (!s && S.isBlob(g))
      throw new M('Blob is not supported. Use a Buffer instead.')
    return S.isArrayBuffer(g) || S.isTypedArray(g)
      ? s && typeof Blob == 'function'
        ? new Blob([g])
        : Buffer.from(g)
      : g
  }
  function c(g, m, E) {
    let h = g
    if (g && !E && typeof g == 'object') {
      if (S.endsWith(m, '{}'))
        (m = r ? m : m.slice(0, -2)), (g = JSON.stringify(g))
      else if (
        (S.isArray(g) && Cg(g)) ||
        ((S.isFileList(g) || S.endsWith(m, '[]')) && (h = S.toArray(g)))
      )
        return (
          (m = ph(m)),
          h.forEach(function (y, w) {
            !(S.isUndefined(y) || y === null) &&
              t.append(
                l === !0 ? cf([m], w, i) : l === null ? m : m + '[]',
                a(y),
              )
          }),
          !1
        )
    }
    return ls(g) ? !0 : (t.append(cf(E, m, i), a(g)), !1)
  }
  const p = [],
    d = Object.assign(Pg, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: ls,
    })
  function v(g, m) {
    if (!S.isUndefined(g)) {
      if (p.indexOf(g) !== -1)
        throw Error('Circular reference detected in ' + m.join('.'))
      p.push(g),
        S.forEach(g, function (h, f) {
          ;(!(S.isUndefined(h) || h === null) &&
            o.call(t, h, S.isString(f) ? f.trim() : f, m, d)) === !0 &&
            v(h, m ? m.concat(f) : [f])
        }),
        p.pop()
    }
  }
  if (!S.isObject(e)) throw new TypeError('data must be an object')
  return v(e), t
}
function ff(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function xa(e, t) {
  ;(this._pairs = []), e && al(e, this, t)
}
const hh = xa.prototype
hh.append = function (t, n) {
  this._pairs.push([t, n])
}
hh.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ff)
      }
    : ff
  return this._pairs
    .map(function (o) {
      return n(o[0]) + '=' + n(o[1])
    }, '')
    .join('&')
}
function _g(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function mh(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || _g,
    o = n && n.serialize
  let i
  if (
    (o
      ? (i = o(t, n))
      : (i = S.isURLSearchParams(t) ? t.toString() : new xa(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf('#')
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + i)
  }
  return e
}
class Rg {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const df = Rg,
  yh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ng = typeof URLSearchParams < 'u' ? URLSearchParams : xa,
  Og = typeof FormData < 'u' ? FormData : null,
  Tg = typeof Blob < 'u' ? Blob : null,
  Lg = (() => {
    let e
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u'
  })(),
  $g = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  et = {
    isBrowser: !0,
    classes: { URLSearchParams: Ng, FormData: Og, Blob: Tg },
    isStandardBrowserEnv: Lg,
    isStandardBrowserWebWorkerEnv: $g,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  }
function Ag(e, t) {
  return al(
    e,
    new et.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return et.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : i.defaultVisitor.apply(this, arguments)
        },
      },
      t,
    ),
  )
}
function zg(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0],
  )
}
function Ig(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const o = n.length
  let i
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i])
  return t
}
function vh(e) {
  function t(n, r, o, i) {
    let l = n[i++]
    const u = Number.isFinite(+l),
      s = i >= n.length
    return (
      (l = !l && S.isArray(o) ? o.length : l),
      s
        ? (S.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !u)
        : ((!o[l] || !S.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && S.isArray(o[l]) && (o[l] = Ig(o[l])),
          !u)
    )
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {}
    return (
      S.forEachEntry(e, (r, o) => {
        t(zg(r), o, n, 0)
      }),
      n
    )
  }
  return null
}
const Mg = { 'Content-Type': void 0 }
function Dg(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const cl = {
  transitional: yh,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        o = r.indexOf('application/json') > -1,
        i = S.isObject(t)
      if ((i && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return o && o ? JSON.stringify(vh(t)) : t
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t)
      )
        return t
      if (S.isArrayBufferView(t)) return t.buffer
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1,
          ),
          t.toString()
        )
      let u
      if (i) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Ag(t, this.formSerializer).toString()
        if ((u = S.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const s = this.env && this.env.FormData
          return al(u ? { 'files[]': t } : t, s && new s(), this.formSerializer)
        }
      }
      return i || o ? (n.setContentType('application/json', !1), Dg(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || cl.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === 'json'
      if (t && S.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o
        try {
          return JSON.parse(t)
        } catch (u) {
          if (l)
            throw u.name === 'SyntaxError'
              ? M.from(u, M.ERR_BAD_RESPONSE, this, null, this.response)
              : u
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: et.classes.FormData, Blob: et.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } },
}
S.forEach(['delete', 'get', 'head'], function (t) {
  cl.headers[t] = {}
})
S.forEach(['post', 'put', 'patch'], function (t) {
  cl.headers[t] = S.merge(Mg)
})
const Ca = cl,
  jg = S.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  Fg = (e) => {
    const t = {}
    let n, r, o
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (l) {
            ;(o = l.indexOf(':')),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && jg[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  pf = Symbol('internals')
function pr(e) {
  return e && String(e).trim().toLowerCase()
}
function Fo(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Fo) : String(e)
}
function Ug(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const Bg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Yl(e, t, n, r, o) {
  if (S.isFunction(r)) return r.call(this, t, n)
  if ((o && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1
    if (S.isRegExp(r)) return r.test(t)
  }
}
function Vg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function Wg(e, t) {
  const n = S.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l)
      },
      configurable: !0,
    })
  })
}
class fl {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const o = this
    function i(u, s, a) {
      const c = pr(s)
      if (!c) throw new Error('header name must be a non-empty string')
      const p = S.findKey(o, c)
      ;(!p || o[p] === void 0 || a === !0 || (a === void 0 && o[p] !== !1)) &&
        (o[p || s] = Fo(u))
    }
    const l = (u, s) => S.forEach(u, (a, c) => i(a, c, s))
    return (
      S.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : S.isString(t) && (t = t.trim()) && !Bg(t)
        ? l(Fg(t), n)
        : t != null && i(n, t, r),
      this
    )
  }
  get(t, n) {
    if (((t = pr(t)), t)) {
      const r = S.findKey(this, t)
      if (r) {
        const o = this[r]
        if (!n) return o
        if (n === !0) return Ug(o)
        if (S.isFunction(n)) return n.call(this, o, r)
        if (S.isRegExp(n)) return n.exec(o)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = pr(t)), t)) {
      const r = S.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Yl(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let o = !1
    function i(l) {
      if (((l = pr(l)), l)) {
        const u = S.findKey(r, l)
        u && (!n || Yl(r, r[u], u, n)) && (delete r[u], (o = !0))
      }
    }
    return S.isArray(t) ? t.forEach(i) : i(t), o
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      o = !1
    for (; r--; ) {
      const i = n[r]
      ;(!t || Yl(this, this[i], i, t, !0)) && (delete this[i], (o = !0))
    }
    return o
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      S.forEach(this, (o, i) => {
        const l = S.findKey(r, i)
        if (l) {
          ;(n[l] = Fo(o)), delete n[i]
          return
        }
        const u = t ? Vg(i) : String(i).trim()
        u !== i && delete n[i], (n[u] = Fo(o)), (r[u] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      S.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && S.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((o) => r.set(o)), r
  }
  static accessor(t) {
    const r = (this[pf] = this[pf] = { accessors: {} }).accessors,
      o = this.prototype
    function i(l) {
      const u = pr(l)
      r[u] || (Wg(o, l), (r[u] = !0))
    }
    return S.isArray(t) ? t.forEach(i) : i(t), this
  }
}
fl.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
S.freezeMethods(fl.prototype)
S.freezeMethods(fl)
const at = fl
function Zl(e, t) {
  const n = this || Ca,
    r = t || n,
    o = at.from(r.headers)
  let i = r.data
  return (
    S.forEach(e, function (u) {
      i = u.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
  )
}
function gh(e) {
  return !!(e && e.__CANCEL__)
}
function oo(e, t, n) {
  M.call(this, e ?? 'canceled', M.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
S.inherits(oo, M, { __CANCEL__: !0 })
function Hg(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new M(
          'Request failed with status code ' + n.status,
          [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      )
}
const Qg = et.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, l, u) {
          const s = []
          s.push(n + '=' + encodeURIComponent(r)),
            S.isNumber(o) && s.push('expires=' + new Date(o).toGMTString()),
            S.isString(i) && s.push('path=' + i),
            S.isString(l) && s.push('domain=' + l),
            u === !0 && s.push('secure'),
            (document.cookie = s.join('; '))
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)'),
          )
          return r ? decodeURIComponent(r[3]) : null
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5)
        },
      }
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      }
    })()
function Kg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Jg(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function wh(e, t) {
  return e && !Kg(t) ? Jg(e, t) : t
}
const qg = et.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let r
      function o(i) {
        let l = i
        return (
          t && (n.setAttribute('href', l), (l = n.href)),
          n.setAttribute('href', l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        )
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const u = S.isString(l) ? o(l) : l
          return u.protocol === r.protocol && u.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function Gg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function Xg(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let o = 0,
    i = 0,
    l
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const a = Date.now(),
        c = r[i]
      l || (l = a), (n[o] = s), (r[o] = a)
      let p = i,
        d = 0
      for (; p !== o; ) (d += n[p++]), (p = p % e)
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), a - l < t)) return
      const v = c && a - c
      return v ? Math.round((d * 1e3) / v) : void 0
    }
  )
}
function hf(e, t) {
  let n = 0
  const r = Xg(50, 250)
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      u = i - n,
      s = r(u),
      a = i <= l
    n = i
    const c = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: u,
      rate: s || void 0,
      estimated: s && l && a ? (l - i) / s : void 0,
      event: o,
    }
    ;(c[t ? 'download' : 'upload'] = !0), e(c)
  }
}
const Yg = typeof XMLHttpRequest < 'u',
  Zg =
    Yg &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data
        const i = at.from(e.headers).normalize(),
          l = e.responseType
        let u
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener('abort', u)
        }
        S.isFormData(o) &&
          (et.isStandardBrowserEnv || et.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1)
        let a = new XMLHttpRequest()
        if (e.auth) {
          const v = e.auth.username || '',
            g = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          i.set('Authorization', 'Basic ' + btoa(v + ':' + g))
        }
        const c = wh(e.baseURL, e.url)
        a.open(e.method.toUpperCase(), mh(c, e.params, e.paramsSerializer), !0),
          (a.timeout = e.timeout)
        function p() {
          if (!a) return
          const v = at.from(
              'getAllResponseHeaders' in a && a.getAllResponseHeaders(),
            ),
            m = {
              data:
                !l || l === 'text' || l === 'json'
                  ? a.responseText
                  : a.response,
              status: a.status,
              statusText: a.statusText,
              headers: v,
              config: e,
              request: a,
            }
          Hg(
            function (h) {
              n(h), s()
            },
            function (h) {
              r(h), s()
            },
            m,
          ),
            (a = null)
        }
        if (
          ('onloadend' in a
            ? (a.onloadend = p)
            : (a.onreadystatechange = function () {
                !a ||
                  a.readyState !== 4 ||
                  (a.status === 0 &&
                    !(a.responseURL && a.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(p)
              }),
          (a.onabort = function () {
            a && (r(new M('Request aborted', M.ECONNABORTED, e, a)), (a = null))
          }),
          (a.onerror = function () {
            r(new M('Network Error', M.ERR_NETWORK, e, a)), (a = null)
          }),
          (a.ontimeout = function () {
            let g = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const m = e.transitional || yh
            e.timeoutErrorMessage && (g = e.timeoutErrorMessage),
              r(
                new M(
                  g,
                  m.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED,
                  e,
                  a,
                ),
              ),
              (a = null)
          }),
          et.isStandardBrowserEnv)
        ) {
          const v =
            (e.withCredentials || qg(c)) &&
            e.xsrfCookieName &&
            Qg.read(e.xsrfCookieName)
          v && i.set(e.xsrfHeaderName, v)
        }
        o === void 0 && i.setContentType(null),
          'setRequestHeader' in a &&
            S.forEach(i.toJSON(), function (g, m) {
              a.setRequestHeader(m, g)
            }),
          S.isUndefined(e.withCredentials) ||
            (a.withCredentials = !!e.withCredentials),
          l && l !== 'json' && (a.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            a.addEventListener('progress', hf(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            a.upload &&
            a.upload.addEventListener('progress', hf(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (v) => {
              a &&
                (r(!v || v.type ? new oo(null, e, a) : v),
                a.abort(),
                (a = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener('abort', u)))
        const d = Gg(c)
        if (d && et.protocols.indexOf(d) === -1) {
          r(new M('Unsupported protocol ' + d + ':', M.ERR_BAD_REQUEST, e))
          return
        }
        a.send(o || null)
      })
    },
  Uo = { http: xg, xhr: Zg }
S.forEach(Uo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const bg = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e]
    const { length: t } = e
    let n, r
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = S.isString(n) ? Uo[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new M(
            `Adapter ${n} is not supported by the environment`,
            'ERR_NOT_SUPPORT',
          )
        : new Error(
            S.hasOwnProp(Uo, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`,
          )
    if (!S.isFunction(r)) throw new TypeError('adapter is not a function')
    return r
  },
  adapters: Uo,
}
function bl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new oo(null, e)
}
function mf(e) {
  return (
    bl(e),
    (e.headers = at.from(e.headers)),
    (e.data = Zl.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    bg
      .getAdapter(e.adapter || Ca.adapter)(e)
      .then(
        function (r) {
          return (
            bl(e),
            (r.data = Zl.call(e, e.transformResponse, r)),
            (r.headers = at.from(r.headers)),
            r
          )
        },
        function (r) {
          return (
            gh(r) ||
              (bl(e),
              r &&
                r.response &&
                ((r.response.data = Zl.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = at.from(r.response.headers)))),
            Promise.reject(r)
          )
        },
      )
  )
}
const yf = (e) => (e instanceof at ? e.toJSON() : e)
function Jn(e, t) {
  t = t || {}
  const n = {}
  function r(a, c, p) {
    return S.isPlainObject(a) && S.isPlainObject(c)
      ? S.merge.call({ caseless: p }, a, c)
      : S.isPlainObject(c)
      ? S.merge({}, c)
      : S.isArray(c)
      ? c.slice()
      : c
  }
  function o(a, c, p) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a, p)
    } else return r(a, c, p)
  }
  function i(a, c) {
    if (!S.isUndefined(c)) return r(void 0, c)
  }
  function l(a, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a)
    } else return r(void 0, c)
  }
  function u(a, c, p) {
    if (p in t) return r(a, c)
    if (p in e) return r(void 0, a)
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: u,
    headers: (a, c) => o(yf(a), yf(c), !0),
  }
  return (
    S.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const p = s[c] || o,
        d = p(e[c], t[c], c)
      ;(S.isUndefined(d) && p !== u) || (n[c] = d)
    }),
    n
  )
}
const Sh = '1.3.5',
  Pa = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Pa[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  },
)
const vf = {}
Pa.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      '[Axios v' +
      Sh +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? '. ' + r : '')
    )
  }
  return (i, l, u) => {
    if (t === !1)
      throw new M(
        o(l, ' has been removed' + (n ? ' in ' + n : '')),
        M.ERR_DEPRECATED,
      )
    return (
      n &&
        !vf[l] &&
        ((vf[l] = !0),
        console.warn(
          o(
            l,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future',
          ),
        )),
      t ? t(i, l, u) : !0
    )
  }
}
function e1(e, t, n) {
  if (typeof e != 'object')
    throw new M('options must be an object', M.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let o = r.length
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i]
    if (l) {
      const u = e[i],
        s = u === void 0 || l(u, i, e)
      if (s !== !0)
        throw new M('option ' + i + ' must be ' + s, M.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new M('Unknown option ' + i, M.ERR_BAD_OPTION)
  }
}
const us = { assertOptions: e1, validators: Pa },
  wt = us.validators
class gi {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new df(), response: new df() })
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Jn(this.defaults, n))
    const { transitional: r, paramsSerializer: o, headers: i } = n
    r !== void 0 &&
      us.assertOptions(
        r,
        {
          silentJSONParsing: wt.transitional(wt.boolean),
          forcedJSONParsing: wt.transitional(wt.boolean),
          clarifyTimeoutError: wt.transitional(wt.boolean),
        },
        !1,
      ),
      o != null &&
        (S.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : us.assertOptions(
              o,
              { encode: wt.function, serialize: wt.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let l
    ;(l = i && S.merge(i.common, i[n.method])),
      l &&
        S.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          (g) => {
            delete i[g]
          },
        ),
      (n.headers = at.concat(l, i))
    const u = []
    let s = !0
    this.interceptors.request.forEach(function (m) {
      ;(typeof m.runWhen == 'function' && m.runWhen(n) === !1) ||
        ((s = s && m.synchronous), u.unshift(m.fulfilled, m.rejected))
    })
    const a = []
    this.interceptors.response.forEach(function (m) {
      a.push(m.fulfilled, m.rejected)
    })
    let c,
      p = 0,
      d
    if (!s) {
      const g = [mf.bind(this), void 0]
      for (
        g.unshift.apply(g, u),
          g.push.apply(g, a),
          d = g.length,
          c = Promise.resolve(n);
        p < d;

      )
        c = c.then(g[p++], g[p++])
      return c
    }
    d = u.length
    let v = n
    for (p = 0; p < d; ) {
      const g = u[p++],
        m = u[p++]
      try {
        v = g(v)
      } catch (E) {
        m.call(this, E)
        break
      }
    }
    try {
      c = mf.call(this, v)
    } catch (g) {
      return Promise.reject(g)
    }
    for (p = 0, d = a.length; p < d; ) c = c.then(a[p++], a[p++])
    return c
  }
  getUri(t) {
    t = Jn(this.defaults, t)
    const n = wh(t.baseURL, t.url)
    return mh(n, t.params, t.paramsSerializer)
  }
}
S.forEach(['delete', 'get', 'head', 'options'], function (t) {
  gi.prototype[t] = function (n, r) {
    return this.request(
      Jn(r || {}, { method: t, url: n, data: (r || {}).data }),
    )
  }
})
S.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (i, l, u) {
      return this.request(
        Jn(u || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: i,
          data: l,
        }),
      )
    }
  }
  ;(gi.prototype[t] = n()), (gi.prototype[t + 'Form'] = n(!0))
})
const Bo = gi
class _a {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (i) {
      n = i
    })
    const r = this
    this.promise.then((o) => {
      if (!r._listeners) return
      let i = r._listeners.length
      for (; i-- > 0; ) r._listeners[i](o)
      r._listeners = null
    }),
      (this.promise.then = (o) => {
        let i
        const l = new Promise((u) => {
          r.subscribe(u), (i = u)
        }).then(o)
        return (
          (l.cancel = function () {
            r.unsubscribe(i)
          }),
          l
        )
      }),
      t(function (i, l, u) {
        r.reason || ((r.reason = new oo(i, l, u)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new _a(function (o) {
        t = o
      }),
      cancel: t,
    }
  }
}
const t1 = _a
function n1(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function r1(e) {
  return S.isObject(e) && e.isAxiosError === !0
}
const ss = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(ss).forEach(([e, t]) => {
  ss[t] = e
})
const o1 = ss
function Eh(e) {
  const t = new Bo(e),
    n = nh(Bo.prototype.request, t)
  return (
    S.extend(n, Bo.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Eh(Jn(e, o))
    }),
    n
  )
}
const re = Eh(Ca)
re.Axios = Bo
re.CanceledError = oo
re.CancelToken = t1
re.isCancel = gh
re.VERSION = Sh
re.toFormData = al
re.AxiosError = M
re.Cancel = re.CanceledError
re.all = function (t) {
  return Promise.all(t)
}
re.spread = n1
re.isAxiosError = r1
re.mergeConfig = Jn
re.AxiosHeaders = at
re.formToJSON = (e) => vh(S.isHTMLForm(e) ? new FormData(e) : e)
re.HttpStatusCode = o1
re.default = re
const mn = re,
  io = 'http://localhost:3003/api/blogs'
let as = null,
  kh
const i1 = (e) => {
    ;(as = `Bearer ${e}`), (kh = { headers: { Authorization: as } })
  },
  l1 = () => mn.get(io).then((t) => t.data),
  u1 = async (e) => {
    const t = { headers: { Authorization: as } }
    return (await mn.post(io, e, t)).data
  },
  s1 = async (e, t) =>
    (await mn.post(`${io}/${String(e == null ? void 0 : e.id)}/comments`, t))
      .data,
  a1 = (e) => mn.put(`${io}/${e.id}`, e).then((n) => n.data),
  c1 = async (e) => (await mn.delete(`${io}/${e}`, kh)).data,
  vt = {
    getAll: l1,
    create: u1,
    update: a1,
    setToken: i1,
    remove: c1,
    commentBlog: s1,
  },
  f1 = 'http://localhost:3003/api/login',
  d1 = async (e) => (await mn.post(f1, e)).data,
  p1 = { login: d1 },
  xh = ul({
    name: 'auth',
    initialState: null,
    reducers: {
      setUser(e, t) {
        return t.payload
      },
      loginUser(e, t) {
        return t.payload
      },
      logoutUser(e, t) {
        return t.payload
      },
    },
  }),
  h1 = () => async (e) => {
    const t = window.localStorage.getItem('loggedBlogAppUser')
    if (t) {
      const n = JSON.parse(t)
      vt.setToken(n.token), e(v1(n))
    }
  },
  m1 = (e, t) => async (n) => {
    const r = await p1.login({ username: e, password: t })
    window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(r)),
      vt.setToken(r.token),
      n(g1(r))
  },
  y1 = () => async (e) => {
    window.localStorage.removeItem('loggedBlogAppUser'), e(w1(null))
  },
  { setUser: v1, loginUser: g1, logoutUser: w1 } = xh.actions,
  S1 = xh.reducer,
  E1 = () => {
    const e = hn(),
      [t, n] = x.useState(''),
      [r, o] = x.useState(''),
      i = x.useRef(null),
      l = Se((a) => a.auth)
    x.useEffect(() => {
      e(h1())
    }, [])
    const u = () => {
      e(y1())
    }
    return k('div', {
      children: l
        ? $('p', {
            children: [
              l == null ? void 0 : l.name,
              ' is logged in',
              ' ',
              k('button', {
                onClick: u,
                children: k('small', { children: 'Logout' }),
              }),
            ],
          })
        : k(fn, {
            children: $(Fi, {
              className: '',
              text: 'login',
              ref: i,
              children: [
                k('h2', { children: 'Login' }),
                $('form', {
                  onSubmit: async (a) => {
                    a.preventDefault(),
                      await e(m1(t, r))
                        .then(() => {
                          n(''), o('')
                        })
                        .catch((c) => {
                          var p
                          return e(
                            ye(
                              `Error: ${
                                (p = c.response) == null ? void 0 : p.data.error
                              }; ${c.message}`,
                              !0,
                              8,
                            ),
                          )
                        })
                  },
                  children: [
                    $('label', {
                      children: [
                        k('span', { children: 'username: ' }),
                        k('input', {
                          name: 'username',
                          value: t,
                          placeholder: 'username',
                          onChange: ({ target: a }) => n(a.value),
                        }),
                      ],
                    }),
                    $('label', {
                      children: [
                        k('span', { children: 'password: ' }),
                        k('input', {
                          name: 'password',
                          type: 'password',
                          placeholder: 'password',
                          value: r,
                          onChange: ({ target: a }) => o(a.value),
                        }),
                      ],
                    }),
                    k('button', { type: 'submit', children: 'login' }),
                  ],
                }),
              ],
            }),
          }),
    })
  },
  k1 = () => {
    const e = Se((t) => t.notification)
    return e === null
      ? null
      : k('div', {
          className: `message ${e.isError ? 'error' : ''}`,
          children: e.message,
        })
  },
  Ch = ul({
    name: 'blog',
    initialState: [],
    reducers: {
      create(e, t) {
        e.push(t.payload)
      },
      like(e, t) {
        const n = t.payload.id,
          r = t.payload
        return e.map((o) => ((o == null ? void 0 : o.id) !== n ? o : r))
      },
      setBlogs(e, t) {
        return t.payload
      },
      appendBlog(e, t) {
        e.push(t.payload)
      },
      remove(e, t) {
        const n = t.payload
        return e.filter((r) => (r == null ? void 0 : r.id) !== n)
      },
      createComment(e, t) {
        return [...e.filter((r) => r.id !== t.payload.id), t.payload]
      },
    },
  }),
  jt = () => async (e) => {
    const t = await vt.getAll()
    e(R1(t))
  },
  x1 = (e) => async (t) => {
    const n = await vt.create(e)
    t(_1(n))
  },
  C1 = (e, t, n) => async (r) => {
    await vt.commentBlog(e, { comment: t, username: n }), r(O1(String(e)))
  },
  Ph = (e) => async (t) => {
    const n = await vt.update(e)
    t(P1(n.id))
  },
  _h = (e) => async (t) => {
    const n = await vt.remove(e)
    t(N1(n))
  },
  {
    create: qw,
    like: P1,
    appendBlog: _1,
    setBlogs: R1,
    remove: N1,
    createComment: O1,
  } = Ch.actions,
  T1 = Ch.reducer,
  L1 = 'http://localhost:3003/api/users',
  $1 = async () => (await mn.get(L1)).data,
  A1 = { getAll: $1 },
  Rh = ul({
    name: 'users',
    initialState: [],
    reducers: {
      create(e, t) {
        e.push(t.payload)
      },
      setUsers(e, t) {
        return t.payload
      },
    },
  }),
  Ra = () => async (e) => {
    const t = await A1.getAll()
    e(z1(t))
  },
  { create: Gw, setUsers: z1 } = Rh.actions,
  I1 = Rh.reducer
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yr() {
  return (
    (Yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Yr.apply(this, arguments)
  )
}
var Rt
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Rt || (Rt = {}))
const gf = 'popstate'
function M1(e) {
  e === void 0 && (e = {})
  function t(r, o) {
    let { pathname: i, search: l, hash: u } = r.location
    return cs(
      '',
      { pathname: i, search: l, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    )
  }
  function n(r, o) {
    return typeof o == 'string' ? o : wi(o)
  }
  return j1(t, n, null, e)
}
function ee(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Na(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function D1() {
  return Math.random().toString(36).substr(2, 8)
}
function wf(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function cs(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Yr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? bn(t) : t,
      { state: n, key: (t && t.key) || r || D1() },
    )
  )
}
function wi(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function bn(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function j1(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    u = Rt.Pop,
    s = null,
    a = c()
  a == null && ((a = 0), l.replaceState(Yr({}, l.state, { idx: a }), ''))
  function c() {
    return (l.state || { idx: null }).idx
  }
  function p() {
    u = Rt.Pop
    let E = c(),
      h = E == null ? null : E - a
    ;(a = E), s && s({ action: u, location: m.location, delta: h })
  }
  function d(E, h) {
    u = Rt.Push
    let f = cs(m.location, E, h)
    n && n(f, E), (a = c() + 1)
    let y = wf(f, a),
      w = m.createHref(f)
    try {
      l.pushState(y, '', w)
    } catch {
      o.location.assign(w)
    }
    i && s && s({ action: u, location: m.location, delta: 1 })
  }
  function v(E, h) {
    u = Rt.Replace
    let f = cs(m.location, E, h)
    n && n(f, E), (a = c())
    let y = wf(f, a),
      w = m.createHref(f)
    l.replaceState(y, '', w),
      i && s && s({ action: u, location: m.location, delta: 0 })
  }
  function g(E) {
    let h = o.location.origin !== 'null' ? o.location.origin : o.location.href,
      f = typeof E == 'string' ? E : wi(E)
    return (
      ee(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          f,
      ),
      new URL(f, h)
    )
  }
  let m = {
    get action() {
      return u
    },
    get location() {
      return e(o, l)
    },
    listen(E) {
      if (s) throw new Error('A history only accepts one active listener')
      return (
        o.addEventListener(gf, p),
        (s = E),
        () => {
          o.removeEventListener(gf, p), (s = null)
        }
      )
    },
    createHref(E) {
      return t(o, E)
    },
    createURL: g,
    encodeLocation(E) {
      let h = g(E)
      return { pathname: h.pathname, search: h.search, hash: h.hash }
    },
    push: d,
    replace: v,
    go(E) {
      return l.go(E)
    },
  }
  return m
}
var Sf
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(Sf || (Sf = {}))
function F1(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? bn(t) : t,
    o = Oa(r.pathname || '/', n)
  if (o == null) return null
  let i = Nh(e)
  U1(i)
  let l = null
  for (let u = 0; l == null && u < i.length; ++u) l = G1(i[u], Y1(o))
  return l
}
function Nh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let o = (i, l, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || '' : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    }
    s.relativePath.startsWith('/') &&
      (ee(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (s.relativePath = s.relativePath.slice(r.length)))
    let a = Ft([r, s.relativePath]),
      c = n.concat(s)
    i.children &&
      i.children.length > 0 &&
      (ee(
        i.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".'),
      ),
      Nh(i.children, t, c, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: J1(a, i.index), routesMeta: c })
  }
  return (
    e.forEach((i, l) => {
      var u
      if (i.path === '' || !((u = i.path) != null && u.includes('?'))) o(i, l)
      else for (let s of Oh(i.path)) o(i, l, s)
    }),
    t
  )
}
function Oh(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    o = n.endsWith('?'),
    i = n.replace(/\?$/, '')
  if (r.length === 0) return o ? [i, ''] : [i]
  let l = Oh(r.join('/')),
    u = []
  return (
    u.push(...l.map((s) => (s === '' ? i : [i, s].join('/')))),
    o && u.push(...l),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  )
}
function U1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : q1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  )
}
const B1 = /^:\w+$/,
  V1 = 3,
  W1 = 2,
  H1 = 1,
  Q1 = 10,
  K1 = -2,
  Ef = (e) => e === '*'
function J1(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(Ef) && (r += K1),
    t && (r += W1),
    n
      .filter((o) => !Ef(o))
      .reduce((o, i) => o + (B1.test(i) ? V1 : i === '' ? H1 : Q1), r)
  )
}
function q1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function G1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = '/',
    i = []
  for (let l = 0; l < n.length; ++l) {
    let u = n[l],
      s = l === n.length - 1,
      a = o === '/' ? t : t.slice(o.length) || '/',
      c = Th(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a,
      )
    if (!c) return null
    Object.assign(r, c.params)
    let p = u.route
    i.push({
      params: r,
      pathname: Ft([o, c.pathname]),
      pathnameBase: tw(Ft([o, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== '/' && (o = Ft([o, c.pathnameBase]))
  }
  return i
}
function Th(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = X1(e.path, e.caseSensitive, e.end),
    o = t.match(n)
  if (!o) return null
  let i = o[0],
    l = i.replace(/(.)\/+$/, '$1'),
    u = o.slice(1)
  return {
    params: r.reduce((a, c, p) => {
      if (c === '*') {
        let d = u[p] || ''
        l = i.slice(0, i.length - d.length).replace(/(.)\/+$/, '$1')
      }
      return (a[c] = Z1(u[p] || '', c)), a
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  }
}
function X1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Na(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    )
  let r = [],
    o =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (l, u) => (r.push(u), '/([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (o += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (o += '\\/*$')
      : e !== '' && e !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, t ? void 0 : 'i'), r]
  )
}
function Y1(e) {
  try {
    return decodeURI(e)
  } catch (t) {
    return (
      Na(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    )
  }
}
function Z1(e, t) {
  try {
    return decodeURIComponent(e)
  } catch (n) {
    return (
      Na(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    )
  }
}
function Oa(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function b1(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: o = '',
  } = typeof e == 'string' ? bn(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : ew(n, t)) : t,
    search: nw(r),
    hash: rw(o),
  }
}
function ew(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((o) => {
      o === '..' ? n.length > 1 && n.pop() : o !== '.' && n.push(o)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function eu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function Lh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  )
}
function $h(e, t, n, r) {
  r === void 0 && (r = !1)
  let o
  typeof e == 'string'
    ? (o = bn(e))
    : ((o = Yr({}, e)),
      ee(
        !o.pathname || !o.pathname.includes('?'),
        eu('?', 'pathname', 'search', o),
      ),
      ee(
        !o.pathname || !o.pathname.includes('#'),
        eu('#', 'pathname', 'hash', o),
      ),
      ee(!o.search || !o.search.includes('#'), eu('#', 'search', 'hash', o)))
  let i = e === '' || o.pathname === '',
    l = i ? '/' : o.pathname,
    u
  if (r || l == null) u = n
  else {
    let p = t.length - 1
    if (l.startsWith('..')) {
      let d = l.split('/')
      for (; d[0] === '..'; ) d.shift(), (p -= 1)
      o.pathname = d.join('/')
    }
    u = p >= 0 ? t[p] : '/'
  }
  let s = b1(o, u),
    a = l && l !== '/' && l.endsWith('/'),
    c = (i || l === '.') && n.endsWith('/')
  return !s.pathname.endsWith('/') && (a || c) && (s.pathname += '/'), s
}
const Ft = (e) => e.join('/').replace(/\/\/+/g, '/'),
  tw = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  nw = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  rw = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function ow(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function iw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
const lw = typeof Object.is == 'function' ? Object.is : iw,
  { useState: uw, useEffect: sw, useLayoutEffect: aw, useDebugValue: cw } = nu
function fw(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = uw({ inst: { value: r, getSnapshot: t } })
  return (
    aw(() => {
      ;(o.value = r), (o.getSnapshot = t), tu(o) && i({ inst: o })
    }, [e, r, t]),
    sw(
      () => (
        tu(o) && i({ inst: o }),
        e(() => {
          tu(o) && i({ inst: o })
        })
      ),
      [e],
    ),
    cw(r),
    r
  )
}
function tu(e) {
  const t = e.getSnapshot,
    n = e.value
  try {
    const r = t()
    return !lw(n, r)
  } catch {
    return !0
  }
}
function dw(e, t, n) {
  return t()
}
const pw =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  hw = !pw,
  mw = hw ? dw : fw
'useSyncExternalStore' in nu && ((e) => e.useSyncExternalStore)(nu)
const Ah = x.createContext(null),
  Ta = x.createContext(null),
  er = x.createContext(null),
  dl = x.createContext(null),
  tr = x.createContext({ outlet: null, matches: [] }),
  zh = x.createContext(null)
function fs() {
  return (
    (fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    fs.apply(this, arguments)
  )
}
function yw(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  nr() || ee(!1)
  let { basename: r, navigator: o } = x.useContext(er),
    { hash: i, pathname: l, search: u } = $a(e, { relative: n }),
    s = l
  return (
    r !== '/' && (s = l === '/' ? r : Ft([r, l])),
    o.createHref({ pathname: s, search: u, hash: i })
  )
}
function nr() {
  return x.useContext(dl) != null
}
function yn() {
  return nr() || ee(!1), x.useContext(dl).location
}
function vw(e) {
  nr() || ee(!1)
  let { pathname: t } = yn()
  return x.useMemo(() => Th(e, t), [t, e])
}
function La() {
  nr() || ee(!1)
  let { basename: e, navigator: t } = x.useContext(er),
    { matches: n } = x.useContext(tr),
    { pathname: r } = yn(),
    o = JSON.stringify(Lh(n).map((u) => u.pathnameBase)),
    i = x.useRef(!1)
  return (
    x.useEffect(() => {
      i.current = !0
    }),
    x.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !i.current)) return
        if (typeof u == 'number') {
          t.go(u)
          return
        }
        let a = $h(u, JSON.parse(o), r, s.relative === 'path')
        e !== '/' &&
          (a.pathname = a.pathname === '/' ? e : Ft([e, a.pathname])),
          (s.replace ? t.replace : t.push)(a, s.state, s)
      },
      [e, t, o, r],
    )
  )
}
function $a(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(tr),
    { pathname: o } = yn(),
    i = JSON.stringify(Lh(r).map((l) => l.pathnameBase))
  return x.useMemo(() => $h(e, JSON.parse(i), o, n === 'path'), [e, i, o, n])
}
function gw(e, t) {
  nr() || ee(!1)
  let { navigator: n } = x.useContext(er),
    r = x.useContext(Ta),
    { matches: o } = x.useContext(tr),
    i = o[o.length - 1],
    l = i ? i.params : {}
  i && i.pathname
  let u = i ? i.pathnameBase : '/'
  i && i.route
  let s = yn(),
    a
  if (t) {
    var c
    let m = typeof t == 'string' ? bn(t) : t
    u === '/' || ((c = m.pathname) != null && c.startsWith(u)) || ee(!1),
      (a = m)
  } else a = s
  let p = a.pathname || '/',
    d = u === '/' ? p : p.slice(u.length) || '/',
    v = F1(e, { pathname: d }),
    g = kw(
      v &&
        v.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, l, m.params),
            pathname: Ft([
              u,
              n.encodeLocation
                ? n.encodeLocation(m.pathname).pathname
                : m.pathname,
            ]),
            pathnameBase:
              m.pathnameBase === '/'
                ? u
                : Ft([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(m.pathnameBase).pathname
                      : m.pathnameBase,
                  ]),
          }),
        ),
      o,
      r || void 0,
    )
  return t && g
    ? x.createElement(
        dl.Provider,
        {
          value: {
            location: fs(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              a,
            ),
            navigationType: Rt.Pop,
          },
        },
        g,
      )
    : g
}
function ww() {
  let e = _w(),
    t = ow(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    i = null
  return x.createElement(
    x.Fragment,
    null,
    x.createElement('h2', null, 'Unexpected Application Error!'),
    x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? x.createElement('pre', { style: o }, n) : null,
    i,
  )
}
class Sw extends x.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error
      ? x.createElement(
          tr.Provider,
          { value: this.props.routeContext },
          x.createElement(zh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children
  }
}
function Ew(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(Ah)
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(tr.Provider, { value: t }, r)
  )
}
function kw(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches
    else return null
  let r = e,
    o = n == null ? void 0 : n.errors
  if (o != null) {
    let i = r.findIndex(
      (l) => l.route.id && (o == null ? void 0 : o[l.route.id]),
    )
    i >= 0 || ee(!1), (r = r.slice(0, Math.min(r.length, i + 1)))
  }
  return r.reduceRight((i, l, u) => {
    let s = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
      a = null
    n &&
      (l.route.ErrorBoundary
        ? (a = x.createElement(l.route.ErrorBoundary, null))
        : l.route.errorElement
        ? (a = l.route.errorElement)
        : (a = x.createElement(ww, null)))
    let c = t.concat(r.slice(0, u + 1)),
      p = () => {
        let d = i
        return (
          s
            ? (d = a)
            : l.route.Component
            ? (d = x.createElement(l.route.Component, null))
            : l.route.element && (d = l.route.element),
          x.createElement(Ew, {
            match: l,
            routeContext: { outlet: i, matches: c },
            children: d,
          })
        )
      }
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? x.createElement(Sw, {
          location: n.location,
          component: a,
          error: s,
          children: p(),
          routeContext: { outlet: null, matches: c },
        })
      : p()
  }, null)
}
var kf
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator')
})(kf || (kf = {}))
var Si
;(function (e) {
  ;(e.UseBlocker = 'useBlocker'),
    (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator')
})(Si || (Si = {}))
function xw(e) {
  let t = x.useContext(Ta)
  return t || ee(!1), t
}
function Cw(e) {
  let t = x.useContext(tr)
  return t || ee(!1), t
}
function Pw(e) {
  let t = Cw(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || ee(!1), n.route.id
}
function _w() {
  var e
  let t = x.useContext(zh),
    n = xw(Si.UseRouteError),
    r = Pw(Si.UseRouteError)
  return t || ((e = n.errors) == null ? void 0 : e[r])
}
function wr(e) {
  ee(!1)
}
function Rw(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: o = Rt.Pop,
    navigator: i,
    static: l = !1,
  } = e
  nr() && ee(!1)
  let u = t.replace(/^\/*/, '/'),
    s = x.useMemo(() => ({ basename: u, navigator: i, static: l }), [u, i, l])
  typeof r == 'string' && (r = bn(r))
  let {
      pathname: a = '/',
      search: c = '',
      hash: p = '',
      state: d = null,
      key: v = 'default',
    } = r,
    g = x.useMemo(() => {
      let m = Oa(a, u)
      return m == null
        ? null
        : {
            location: { pathname: m, search: c, hash: p, state: d, key: v },
            navigationType: o,
          }
    }, [u, a, c, p, d, v, o])
  return g == null
    ? null
    : x.createElement(
        er.Provider,
        { value: s },
        x.createElement(dl.Provider, { children: n, value: g }),
      )
}
function Nw(e) {
  let { children: t, location: n } = e,
    r = x.useContext(Ah),
    o = r && !t ? r.router.routes : ds(t)
  return gw(o, n)
}
var xf
;(function (e) {
  ;(e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error')
})(xf || (xf = {}))
new Promise(() => {})
function ds(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return
      let i = [...t, o]
      if (r.type === x.Fragment) {
        n.push.apply(n, ds(r.props.children, i))
        return
      }
      r.type !== wr && ee(!1), !r.props.index || !r.props.children || ee(!1)
      let l = {
        id: r.props.id || i.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (l.children = ds(r.props.children, i)), n.push(l)
    }),
    n
  )
}
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ei() {
  return (
    (Ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ei.apply(this, arguments)
  )
}
function Ih(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    o,
    i
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o])
  return n
}
function Ow(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Tw(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Ow(e)
}
const Lw = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  $w = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ]
function Aw(e) {
  let { basename: t, children: n, window: r } = e,
    o = x.useRef()
  o.current == null && (o.current = M1({ window: r, v5Compat: !0 }))
  let i = o.current,
    [l, u] = x.useState({ action: i.action, location: i.location })
  return (
    x.useLayoutEffect(() => i.listen(u), [i]),
    x.createElement(Rw, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
    })
  )
}
const zw =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Iw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ki = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: u,
        target: s,
        to: a,
        preventScrollReset: c,
      } = t,
      p = Ih(t, Lw),
      { basename: d } = x.useContext(er),
      v,
      g = !1
    if (typeof a == 'string' && Iw.test(a) && ((v = a), zw)) {
      let f = new URL(window.location.href),
        y = a.startsWith('//') ? new URL(f.protocol + a) : new URL(a),
        w = Oa(y.pathname, d)
      y.origin === f.origin && w != null
        ? (a = w + y.search + y.hash)
        : (g = !0)
    }
    let m = yw(a, { relative: o }),
      E = Mw(a, {
        replace: l,
        state: u,
        target: s,
        preventScrollReset: c,
        relative: o,
      })
    function h(f) {
      r && r(f), f.defaultPrevented || E(f)
    }
    return x.createElement(
      'a',
      Ei({}, p, { href: v || m, onClick: g || i ? r : h, ref: n, target: s }),
    )
  }),
  Cf = x.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: o = !1,
        className: i = '',
        end: l = !1,
        style: u,
        to: s,
        children: a,
      } = t,
      c = Ih(t, $w),
      p = $a(s, { relative: c.relative }),
      d = yn(),
      v = x.useContext(Ta),
      { navigator: g } = x.useContext(er),
      m = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname,
      E = d.pathname,
      h =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null
    o ||
      ((E = E.toLowerCase()),
      (h = h ? h.toLowerCase() : null),
      (m = m.toLowerCase()))
    let f = E === m || (!l && E.startsWith(m) && E.charAt(m.length) === '/'),
      y =
        h != null &&
        (h === m || (!l && h.startsWith(m) && h.charAt(m.length) === '/')),
      w = f ? r : void 0,
      P
    typeof i == 'function'
      ? (P = i({ isActive: f, isPending: y }))
      : (P = [i, f ? 'active' : null, y ? 'pending' : null]
          .filter(Boolean)
          .join(' '))
    let R = typeof u == 'function' ? u({ isActive: f, isPending: y }) : u
    return x.createElement(
      ki,
      Ei({}, c, { 'aria-current': w, className: P, ref: n, style: R, to: s }),
      typeof a == 'function' ? a({ isActive: f, isPending: y }) : a,
    )
  })
var Pf
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher')
})(Pf || (Pf = {}))
var _f
;(function (e) {
  ;(e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(_f || (_f = {}))
function Mw(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
    } = t === void 0 ? {} : t,
    u = La(),
    s = yn(),
    a = $a(e, { relative: l })
  return x.useCallback(
    (c) => {
      if (Tw(c, n)) {
        c.preventDefault()
        let p = r !== void 0 ? r : wi(s) === wi(a)
        u(e, { replace: p, state: o, preventScrollReset: i, relative: l })
      }
    },
    [s, u, a, r, o, n, e, i, l],
  )
}
const Dw = () => {
    const e = hn(),
      t = La(),
      n = Se((v) => v.auth),
      r = x.useRef(null)
    x.useEffect(() => {
      e(Ra())
    }, [])
    const i = Se((v) => v.users).find(
        (v) => v.username === (n == null ? void 0 : n.username),
      ),
      [l, u] = x.useState(''),
      [s, a] = x.useState(''),
      [c, p] = x.useState('')
    return k('div', {
      className: 'accordion-wrapper',
      children: $(Fi, {
        className: 'right',
        text: 'Add a blog',
        ref: r,
        children: [
          k('h2', { children: 'Add a new Blog' }),
          $('form', {
            onSubmit: async (v) => {
              v.preventDefault(),
                await e(
                  x1({
                    title: l,
                    author: s,
                    url: c,
                    likes: 0,
                    user: i == null ? void 0 : i.id,
                  }),
                )
                  .then(() => {
                    var g
                    e(ye(`You added a new blog: ${l}`, !1, 6)),
                      e(jt()),
                      (g = r.current) == null || g.toggleVisibility()
                  })
                  .then(() => {
                    t('/')
                  })
                  .catch((g) => e(ye(`${g.message}`, !0, 10))),
                u(''),
                a(''),
                p('')
            },
            children: [
              $('label', {
                children: [
                  k('span', { children: 'Title: ' }),
                  k('input', {
                    className: 'input-title',
                    value: l,
                    name: 'title',
                    onChange: (v) => u(v.target.value),
                    placeholder: 'Title',
                  }),
                ],
              }),
              $('label', {
                children: [
                  k('span', { children: 'Author: ' }),
                  k('input', {
                    value: s,
                    name: 'author',
                    onChange: (v) => a(v.target.value),
                    placeholder: 'Author',
                  }),
                ],
              }),
              $('label', {
                children: [
                  k('span', { children: 'Web address: ' }),
                  k('input', {
                    value: c,
                    name: 'url',
                    onChange: (v) => p(v.target.value),
                    placeholder: 'https://jenniina.fi',
                  }),
                ],
              }),
              k('input', {
                name: 'user',
                type: 'hidden',
                defaultValue: i == null ? void 0 : i.id,
              }),
              k('button', { type: 'submit', children: 'save' }),
            ],
          }),
        ],
      }),
    })
  },
  jw = (e) => {
    var i, l, u, s, a, c, p, d, v, g
    const t = hn(),
      n = x.useRef(),
      r = async (m) => {
        var h, f
        const E = {
          ...m,
          user: (h = m == null ? void 0 : m.user) == null ? void 0 : h.id,
          comments:
            (f = m == null ? void 0 : m.comments) == null
              ? void 0
              : f.map((y) => (y == null ? void 0 : y.id)),
        }
        E.likes ? (E.likes += 1) : (E.likes = 1),
          await vt
            .update(E)
            .then(() => t(Ph(E)))
            .then(() => {
              t(ye(`Liked ${m == null ? void 0 : m.title}`, !1, 5)), t(jt())
            })
            .catch((y) => {
              t(
                ye(
                  `Error liking "${m == null ? void 0 : m.title}": ${
                    y.message
                  }`,
                  !0,
                  10,
                ),
              )
            })
      },
      o = async (m) => {
        window.confirm(`Delete ${m == null ? void 0 : m.title} ?`) &&
          t(_h(m == null ? void 0 : m.id))
            .then(() => {
              t(ye('The blog was deleted', !1, 5)), t(jt())
            })
            .catch((E) => t(ye(`Error: ${E.message}`, !0, 10)))
      }
    return $('li', {
      className: 'blog-wrap',
      children: [
        k('span', {
          children: $('strong', {
            children: [
              k(ki, {
                to: `blogs/${(i = e.blog) == null ? void 0 : i.id}`,
                children: (l = e.blog) == null ? void 0 : l.title,
              }),
              ',',
              ' ',
            ],
          }),
        }),
        k('span', {
          children: $('em', {
            children: [(u = e.blog) == null ? void 0 : u.author, ' '],
          }),
        }),
        $(Fi, {
          className: '',
          text: 'view',
          ref: n,
          children: [
            k('p', {
              children: k('a', {
                href: (s = e.blog) == null ? void 0 : s.url,
                children: $('small', {
                  children: [(a = e.blog) == null ? void 0 : a.url, ' '],
                }),
              }),
            }),
            $('p', {
              children: [
                'Likes: ',
                $('strong', {
                  children: [(c = e.blog) == null ? void 0 : c.likes, ' '],
                }),
                k('button', {
                  className: 'like',
                  onClick: () => r(e.blog),
                  children: k('small', { children: 'like' }),
                }),
              ],
            }),
            $('div', {
              style: { display: 'flex', gap: 10, alignItems: 'center' },
              children: [
                ((p = e.user) == null ? void 0 : p.username) ===
                ((v = (d = e.blog) == null ? void 0 : d.user) == null
                  ? void 0
                  : v.username)
                  ? k('button', {
                      onClick: () => o(e.blog),
                      children: 'Delete',
                    })
                  : '',
                k(ki, {
                  to: `blogs/${(g = e.blog) == null ? void 0 : g.id}`,
                  children: 'See more...',
                }),
              ],
            }),
          ],
        }),
      ],
    })
  },
  Fw = () => {
    const e = hn(),
      t = Se((l) => l.auth),
      n = Se((l) => l.blogs),
      o = Se((l) => l.users).find(
        (l) => l.username === (t == null ? void 0 : t.username),
      ),
      i = n
        .map((l) => (l == null ? void 0 : l.likes))
        .reduce((l, u) => Number(l) + Number(u), 0)
    return (
      x.useEffect(() => {
        e(jt()).catch((l) => {
          var u
          e(
            ye(
              `Error: ${(u = l.response) == null ? void 0 : u.data.error}`,
              !0,
              10,
            ),
          )
        })
      }, [i]),
      $(fn, {
        children: [
          k('h2', { children: 'Blogs' }),
          k('ul', {
            className: 'blog-list',
            children: [...n]
              .sort((l, u) => u.likes - l.likes)
              .map((l) =>
                k(jw, { blog: l, user: o }, l == null ? void 0 : l.id),
              ),
          }),
        ],
      })
    )
  },
  Uw = () => {
    const e = hn()
    x.useEffect(() => {
      e(Ra()).catch((r) => {
        var o
        e(
          ye(
            `Error: ${(o = r.response) == null ? void 0 : o.data.error} - ${
              r.message
            }`,
            !0,
            10,
          ),
        )
      })
    }, [])
    const t = Se((r) => r.users)
    return Se((r) => r.auth)
      ? $(fn, {
          children: [
            k('h2', { children: 'Users' }),
            k('table', {
              className: 'users-list',
              children: $('tbody', {
                children: [
                  $('tr', {
                    children: [
                      k('th', { children: 'User' }),
                      k('th', { children: 'Blogs' }),
                    ],
                  }),
                  [...t]
                    .sort((r, o) => o.blogs.length - r.blogs.length)
                    .map((r) =>
                      $(
                        'tr',
                        {
                          children: [
                            k('td', {
                              children: k(ki, {
                                to: `/users/${r.id}`,
                                children: r.name,
                              }),
                            }),
                            k('td', { children: r.blogs.length }),
                          ],
                        },
                        r.id,
                      ),
                    ),
                ],
              }),
            }),
          ],
        })
      : k('div', { children: 'Please log in' })
  },
  Bw = ({ user: e }) => {
    const t = Se((l) => l.auth),
      r = Se((l) => l.users).find(
        (l) => l.username === (e == null ? void 0 : e.username),
      ),
      o = r == null ? void 0 : r.blogs,
      i = o == null ? void 0 : o.length
    return e
      ? t
        ? $('div', {
            className: 'user-wrap',
            children: [
              k('h2', { children: r == null ? void 0 : r.name }),
              k('h3', { children: 'Blogs' }),
              k('ul', {
                children:
                  i === 0
                    ? k('li', { children: 'No blogs yet!' })
                    : o == null
                    ? void 0
                    : o.map((l) =>
                        $(
                          'li',
                          {
                            children: [
                              k('a', {
                                href: `/blogs/${l.id}`,
                                children: l.title,
                              }),
                              ' ',
                              $('em', { children: ['by ', l.author, ' '] }),
                            ],
                          },
                          l.id,
                        ),
                      ),
              }),
            ],
          })
        : k('div', { children: 'Please log in' })
      : k('div', { children: 'Please log in' })
  },
  Vw = () =>
    Se((t) => t.auth)
      ? k(fn, {
          children: $('ul', {
            className: 'main-navigation',
            children: [
              k('li', { children: k(Cf, { to: '/', children: ' Blogs' }) }),
              k('li', { children: k(Cf, { to: 'users', children: ' Users' }) }),
            ],
          }),
        })
      : k('div', { style: { display: 'none' } }),
  Ww = ({ id: e }) => {
    const t = hn(),
      n = x.useRef(null)
    x.useEffect(() => {
      t(Ra())
    }, [])
    const [r, o] = x.useState(''),
      [i, l] = x.useState('')
    return k('div', {
      className: 'accordion-wrapper',
      children: $(Fi, {
        className: 'right',
        text: 'Add a comment',
        ref: n,
        children: [
          k('h4', { children: 'Add a new comment' }),
          $('form', {
            onSubmit: async (s) => {
              s.preventDefault(),
                await t(C1({ id: e }, r, i))
                  .then(() => {
                    var a
                    t(ye(`You added a new comment: ${r}`, !1, 6)),
                      t(jt()),
                      (a = n.current) == null || a.toggleVisibility()
                  })
                  .then(() => {
                    o(''), l('')
                  })
                  .catch((a) => {
                    var c
                    return t(
                      ye(
                        `Error: ${
                          (c = a.response) == null ? void 0 : c.data.error
                        }`,
                        !0,
                        10,
                      ),
                    )
                  })
            },
            className: 'comment',
            children: [
              $('label', {
                children: [
                  k('span', { children: 'Comment: ' }),
                  k('textarea', {
                    className: 'input-comment',
                    value: r,
                    name: 'comment',
                    onChange: (s) => o(s.target.value),
                    placeholder: 'Comment here',
                  }),
                ],
              }),
              $('label', {
                children: [
                  k('span', { children: 'Username: ' }),
                  k('input', {
                    value: i,
                    name: 'username',
                    onChange: (s) => l(s.target.value),
                    placeholder: 'Please give a username',
                  }),
                ],
              }),
              k('button', { type: 'submit', children: 'save' }),
            ],
          }),
        ],
      }),
    })
  },
  Hw = ({ blog: e }) => {
    var n, r
    const t = (n = e == null ? void 0 : e.comments) == null ? void 0 : n.length
    return $('div', {
      className: 'comments',
      children: [
        k('h3', { children: 'Comments' }),
        k(Ww, { id: e == null ? void 0 : e.id }),
        t === 0
          ? k('div', {})
          : k(fn, {
              children: k('ul', {
                children:
                  (r = e.comments) == null
                    ? void 0
                    : r.map((o) =>
                        $(
                          'li',
                          {
                            children: [
                              k('span', { children: o.comment }),
                              ' |',
                              ' ',
                              k('em', {
                                children: k('small', { children: o.username }),
                              }),
                            ],
                          },
                          o.id,
                        ),
                      ),
              }),
            }),
      ],
    })
  },
  Qw = () => {
    var a, c, p
    const e = La(),
      t = yn(),
      n = t.pathname.substring(t.pathname.lastIndexOf('/') + 1),
      r = Se((d) => d.blogs),
      o = Se((d) => d.auth),
      i = r.find((d) => (d == null ? void 0 : d.id) === n),
      l = hn(),
      u = async (d) => {
        var g, m
        const v = {
          ...d,
          user: (g = d == null ? void 0 : d.user) == null ? void 0 : g.id,
          comments:
            (m = d == null ? void 0 : d.comments) == null
              ? void 0
              : m.map((E) => (E == null ? void 0 : E.id)),
        }
        v.likes ? (v.likes += 1) : (v.likes = 1),
          await vt
            .update(v)
            .then(() => l(Ph(v)))
            .then(() => {
              l(ye(`Liked ${d == null ? void 0 : d.title}`, !1, 5)), l(jt())
            })
            .catch((E) => {
              l(
                ye(
                  `Error liking "${d == null ? void 0 : d.title}": ${
                    E.message
                  }`,
                  !0,
                  10,
                ),
              )
            })
      },
      s = async (d) => {
        window.confirm(`Delete ${d == null ? void 0 : d.title} ?`) &&
          l(_h(d == null ? void 0 : d.id))
            .then(() => {
              l(ye('The blog was deleted', !1, 5)), l(jt())
            })
            .then(() => {
              e('/')
            })
            .catch((v) => l(ye(`Error: ${v.message}`, !0, 10)))
      }
    return (
      x.useEffect(() => {
        l(jt()).catch((d) => {
          var v
          l(
            ye(
              `Error: ${(v = d.response) == null ? void 0 : v.data.error}`,
              !0,
              10,
            ),
          )
        })
      }, [t]),
      $(fn, {
        children: [
          $('div', {
            className: 'blog-wrap',
            children: [
              k('h2', { children: i == null ? void 0 : i.title }),
              k('p', {
                children: k('big', {
                  children: $('em', {
                    children: ['by ', i == null ? void 0 : i.author, ' '],
                  }),
                }),
              }),
              k('p', {
                children: k('a', {
                  href: i == null ? void 0 : i.url,
                  children: 'More information ',
                }),
              }),
              $('p', {
                children: [
                  'Likes: ',
                  i == null ? void 0 : i.likes,
                  k('button', {
                    className: 'like',
                    onClick: () => u(i),
                    children: k('small', { children: 'like' }),
                  }),
                ],
              }),
              (a = i == null ? void 0 : i.user) != null && a.name
                ? k('p', {
                    children: $('small', {
                      children: [
                        'Added by ',
                        k('em', {
                          children:
                            (c = i == null ? void 0 : i.user) == null
                              ? void 0
                              : c.name,
                        }),
                        ' ',
                      ],
                    }),
                  })
                : '',
              (o == null ? void 0 : o.username) ===
              ((p = i == null ? void 0 : i.user) == null ? void 0 : p.username)
                ? k('button', { onClick: () => s(i), children: 'Delete' })
                : '',
            ],
          }),
          i ? k(Hw, { blog: i }) : '',
        ],
      })
    )
  },
  Kw = () => {
    const e = Se((r) => r.users),
      t = vw('users/:id'),
      n = t ? e.find((r) => r.id === t.params.id) : null
    return $('div', {
      children: [
        k('h1', { children: 'Blogs' }),
        k(k1, {}),
        k(Vw, {}),
        k(E1, {}),
        k(Dw, {}),
        $(Nw, {
          children: [
            k(wr, { path: '/', element: k(Fw, {}) }),
            k(wr, { path: '/users', element: k(Uw, {}) }),
            k(wr, { path: '/users/:id', element: k(Bw, { user: n }) }),
            k(wr, { path: '/blogs/:id', element: k(Qw, {}) }),
          ],
        }),
      ],
    })
  }
const Jw = I0({ reducer: { notification: Q0, blogs: T1, users: I1, auth: S1 } })
ru.createRoot(document.getElementById('root')).render(
  k(vs.StrictMode, {
    children: k(Aw, { children: k(bv, { store: Jw, children: k(Kw, {}) }) }),
  }),
)
