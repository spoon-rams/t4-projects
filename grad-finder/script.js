!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i),
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 106));
})([
  function (e, t, n) {
    e.exports = (function e(t, n, r) {
      function i(s, a) {
        if (!n[s]) {
          if (!t[s]) {
            if (o) return o(s, !0);
            var c = new Error("Cannot find module '" + s + "'");
            throw ((c.code = "MODULE_NOT_FOUND"), c);
          }
          var l = (n[s] = { exports: {} });
          t[s][0].call(
            l.exports,
            function (e) {
              return i(t[s][1][e] || e);
            },
            l,
            l.exports,
            e,
            t,
            n,
            r,
          );
        }
        return n[s].exports;
      }
      for (var o = !1, s = 0; s < r.length; s++) i(r[s]);
      return i;
    })(
      {
        1: [
          function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })(),
              i = e("./util"),
              o = (function () {
                function e(t, n) {
                  var r = this;
                  !(function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.selector = t),
                    (this.elements = document.querySelectorAll(t)),
                    (this.options = n),
                    window.addEventListener("resize", function () {
                      r.run();
                    }),
                    this.run();
                }
                return (
                  r(e, [
                    {
                      key: "recalc",
                      value: function () {
                        (this.elements = document.querySelectorAll(this.selector)), this.run();
                      },
                    },
                    {
                      key: "makeGroups",
                      value: function (e) {
                        var t = [];
                        [].forEach.call(e, function (e) {
                          (e.style.height = "1px"), (e.style.overflow = "hidden");
                        });
                        var n = 0,
                          r = (0, i.getOffset)(e[0]).top;
                        return (
                          (t[0] = []),
                          [].forEach.call(e, function (e) {
                            (0, i.getOffset)(e).top !== r &&
                              ((r = (0, i.getOffset)(e).top), (t[(n += 1)] = [])),
                              t[n].push(e);
                          }),
                          [].forEach.call(e, function (e) {
                            (e.style.height = ""), (e.style.overflow = "");
                          }),
                          t
                        );
                      },
                    },
                    {
                      key: "autoHeight",
                      value: function (e) {
                        var t = e.map(function (e) {
                            var t = getComputedStyle(e);
                            return "border-box" === t.boxSizing
                              ? e.offsetHeight
                              : e.offsetHeight -
                                  parseFloat(t.paddingTop) -
                                  parseFloat(t.paddingBottom);
                          }),
                          n = Math.max.apply(
                            Math,
                            (function (e) {
                              if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n;
                              }
                              return Array.from(e);
                            })(t),
                          );
                        e.forEach(function (e) {
                          e.style.height = n + "px";
                        });
                      },
                    },
                    {
                      key: "run",
                      value: function () {
                        var e = this,
                          t = this.elements;
                        this.makeGroups(t).forEach(function (t) {
                          e.autoHeight(t);
                        });
                      },
                    },
                  ]),
                  e
                );
              })();
            (n.default = o), (t.exports = n.default);
          },
          { "./util": 2 },
        ],
        2: [
          function (e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }),
              (n.getOffset = function (e) {
                var t = e.getBoundingClientRect();
                return {
                  top:
                    t.top +
                    (window.pageYOffset ||
                      document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      0),
                  left:
                    t.left +
                    (window.pageXOffset ||
                      document.documentElement.scrollLeft ||
                      document.body.scrollLeft ||
                      0),
                };
              });
          },
          {},
        ],
      },
      {},
      [1],
    )(1);
  },
  function (e, t, n) {
    (function (t) {
      var n = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof t && t) ||
        Function("return this")();
    }).call(this, n(69));
  },
  function (e, t, n) {
    var r = n(1),
      i = n(52),
      o = n(6),
      s = n(37),
      a = n(57),
      c = n(77),
      l = i("wks"),
      u = r.Symbol,
      f = c ? u : (u && u.withoutSetter) || s;
    e.exports = function (e) {
      return o(l, e) || (a && o(u, e) ? (l[e] = u[e]) : (l[e] = f("Symbol." + e))), l[e];
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function (e, t, n) {
    /*!
     * Glide.js v3.6.0
     * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
     * Released under the MIT License.
     */
    e.exports = (function () {
      "use strict";
      function e(t) {
        return (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(t);
      }
      function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function r(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      }
      function i(e) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError("Derived constructors may only return object or undefined");
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e);
      }
      function a(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = i(e);
          if (t) {
            var o = i(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return s(this, n);
        };
      }
      function c(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e)); );
        return e;
      }
      function l() {
        return (l =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = c(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value;
                }
              }).apply(this, arguments);
      }
      var u = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perSwipe: "",
        touchRatio: 0.5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        waitForTransition: !0,
        throttle: 10,
        direction: "ltr",
        peek: 0,
        cloningRatio: 1,
        breakpoints: {},
        classes: {
          swipeable: "glide--swipeable",
          dragging: "glide--dragging",
          direction: { ltr: "glide--ltr", rtl: "glide--rtl" },
          type: { slider: "glide--slider", carousel: "glide--carousel" },
          slide: { clone: "glide__slide--clone", active: "glide__slide--active" },
          arrow: { disabled: "glide__arrow--disabled" },
          nav: { active: "glide__bullet--active" },
        },
      };
      function f(e) {
        console.error("[Glide warn]: ".concat(e));
      }
      function d(e) {
        return parseInt(e);
      }
      function p(e) {
        return "string" == typeof e;
      }
      function h(t) {
        var n = e(t);
        return "function" === n || ("object" === n && !!t);
      }
      function m(e) {
        return "function" == typeof e;
      }
      function g(e) {
        return void 0 === e;
      }
      function v(e) {
        return e.constructor === Array;
      }
      function y(e, t, n) {
        var r = {};
        for (var i in t) m(t[i]) ? (r[i] = t[i](e, r, n)) : f("Extension must be a function");
        for (var o in r) m(r[o].mount) && r[o].mount();
        return r;
      }
      function b(e, t, n) {
        Object.defineProperty(e, t, n);
      }
      function _(e, t) {
        var n = Object.assign({}, e, t);
        return (
          t.hasOwnProperty("classes") &&
            ((n.classes = Object.assign({}, e.classes, t.classes)),
            t.classes.hasOwnProperty("direction") &&
              (n.classes.direction = Object.assign({}, e.classes.direction, t.classes.direction)),
            t.classes.hasOwnProperty("type") &&
              (n.classes.type = Object.assign({}, e.classes.type, t.classes.type)),
            t.classes.hasOwnProperty("slide") &&
              (n.classes.slide = Object.assign({}, e.classes.slide, t.classes.slide)),
            t.classes.hasOwnProperty("arrow") &&
              (n.classes.arrow = Object.assign({}, e.classes.arrow, t.classes.arrow)),
            t.classes.hasOwnProperty("nav") &&
              (n.classes.nav = Object.assign({}, e.classes.nav, t.classes.nav))),
          t.hasOwnProperty("breakpoints") &&
            (n.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)),
          n
        );
      }
      var w = (function () {
          function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e), (this.events = n), (this.hop = n.hasOwnProperty);
          }
          return (
            r(e, [
              {
                key: "on",
                value: function (e, t) {
                  if (!v(e)) {
                    this.hop.call(this.events, e) || (this.events[e] = []);
                    var n = this.events[e].push(t) - 1;
                    return {
                      remove: function () {
                        delete this.events[e][n];
                      },
                    };
                  }
                  for (var r = 0; r < e.length; r++) this.on(e[r], t);
                },
              },
              {
                key: "emit",
                value: function (e, t) {
                  if (v(e)) for (var n = 0; n < e.length; n++) this.emit(e[n], t);
                  else
                    this.hop.call(this.events, e) &&
                      this.events[e].forEach(function (e) {
                        e(t || {});
                      });
                },
              },
            ]),
            e
          );
        })(),
        E = (function () {
          function e(n) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t(this, e),
              (this._c = {}),
              (this._t = []),
              (this._e = new w()),
              (this.disabled = !1),
              (this.selector = n),
              (this.settings = _(u, r)),
              (this.index = this.settings.startAt);
          }
          return (
            r(e, [
              {
                key: "mount",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return (
                    this._e.emit("mount.before"),
                    h(e)
                      ? (this._c = y(this, e, this._e))
                      : f("You need to provide a object on `mount()`"),
                    this._e.emit("mount.after"),
                    this
                  );
                },
              },
              {
                key: "mutate",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                  return (
                    v(e) ? (this._t = e) : f("You need to provide a array on `mutate()`"), this
                  );
                },
              },
              {
                key: "update",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return (
                    (this.settings = _(this.settings, e)),
                    e.hasOwnProperty("startAt") && (this.index = e.startAt),
                    this._e.emit("update"),
                    this
                  );
                },
              },
              {
                key: "go",
                value: function (e) {
                  return this._c.Run.make(e), this;
                },
              },
              {
                key: "move",
                value: function (e) {
                  return this._c.Transition.disable(), this._c.Move.make(e), this;
                },
              },
              {
                key: "destroy",
                value: function () {
                  return this._e.emit("destroy"), this;
                },
              },
              {
                key: "play",
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  return e && (this.settings.autoplay = e), this._e.emit("play"), this;
                },
              },
              {
                key: "pause",
                value: function () {
                  return this._e.emit("pause"), this;
                },
              },
              {
                key: "disable",
                value: function () {
                  return (this.disabled = !0), this;
                },
              },
              {
                key: "enable",
                value: function () {
                  return (this.disabled = !1), this;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return this._e.on(e, t), this;
                },
              },
              {
                key: "isType",
                value: function (e) {
                  return this.settings.type === e;
                },
              },
              {
                key: "settings",
                get: function () {
                  return this._o;
                },
                set: function (e) {
                  h(e) ? (this._o = e) : f("Options must be an `object` instance.");
                },
              },
              {
                key: "index",
                get: function () {
                  return this._i;
                },
                set: function (e) {
                  this._i = d(e);
                },
              },
              {
                key: "type",
                get: function () {
                  return this.settings.type;
                },
              },
              {
                key: "disabled",
                get: function () {
                  return this._d;
                },
                set: function (e) {
                  this._d = !!e;
                },
              },
            ]),
            e
          );
        })();
      function x() {
        return new Date().getTime();
      }
      function S(e, t, n) {
        var r,
          i,
          o,
          s,
          a = 0;
        n || (n = {});
        var c = function () {
            (a = !1 === n.leading ? 0 : x()), (r = null), (s = e.apply(i, o)), r || (i = o = null);
          },
          l = function () {
            var l = x();
            a || !1 !== n.leading || (a = l);
            var u = t - (l - a);
            return (
              (i = this),
              (o = arguments),
              u <= 0 || u > t
                ? (r && (clearTimeout(r), (r = null)),
                  (a = l),
                  (s = e.apply(i, o)),
                  r || (i = o = null))
                : r || !1 === n.trailing || (r = setTimeout(c, u)),
              s
            );
          };
        return (
          (l.cancel = function () {
            clearTimeout(r), (a = 0), (r = i = o = null);
          }),
          l
        );
      }
      var T = { ltr: ["marginLeft", "marginRight"], rtl: ["marginRight", "marginLeft"] };
      function L(e) {
        if (e && e.parentNode) {
          for (var t = e.parentNode.firstChild, n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        }
        return [];
      }
      function A(e) {
        return !!(e && e instanceof window.HTMLElement);
      }
      function C(e) {
        return Array.prototype.slice.call(e);
      }
      var k = (function () {
          function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e), (this.listeners = n);
          }
          return (
            r(e, [
              {
                key: "on",
                value: function (e, t, n) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                  p(e) && (e = [e]);
                  for (var i = 0; i < e.length; i++)
                    (this.listeners[e[i]] = n), t.addEventListener(e[i], this.listeners[e[i]], r);
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                  p(e) && (e = [e]);
                  for (var r = 0; r < e.length; r++)
                    t.removeEventListener(e[r], this.listeners[e[r]], n);
                },
              },
              {
                key: "destroy",
                value: function () {
                  delete this.listeners;
                },
              },
            ]),
            e
          );
        })(),
        D = ["ltr", "rtl"],
        O = { ">": "<", "<": ">", "=": "=" };
      function N(e, t) {
        return {
          modify: function (e) {
            return t.Direction.is("rtl") ? -e : e;
          },
        };
      }
      function I(e, t) {
        return {
          modify: function (e) {
            var n = Math.floor(e / t.Sizes.slideWidth);
            return e + t.Gaps.value * n;
          },
        };
      }
      function j(e, t) {
        return {
          modify: function (e) {
            return e + t.Clones.grow / 2;
          },
        };
      }
      function q(e, t) {
        return {
          modify: function (n) {
            if (e.settings.focusAt >= 0) {
              var r = t.Peek.value;
              return h(r) ? n - r.before : n - r;
            }
            return n;
          },
        };
      }
      function P(e, t) {
        return {
          modify: function (n) {
            var r = t.Gaps.value,
              i = t.Sizes.width,
              o = e.settings.focusAt,
              s = t.Sizes.slideWidth;
            return "center" === o ? n - (i / 2 - s / 2) : n - s * o - r * o;
          },
        };
      }
      var H = !1;
      try {
        var R = Object.defineProperty({}, "passive", {
          get: function () {
            H = !0;
          },
        });
        window.addEventListener("testPassive", null, R),
          window.removeEventListener("testPassive", null, R);
      } catch (e) {}
      var M = H,
        F = ["touchstart", "mousedown"],
        W = ["touchmove", "mousemove"],
        B = ["touchend", "touchcancel", "mouseup", "mouseleave"],
        z = ["mousedown", "mousemove", "mouseup", "mouseleave"],
        U = "".concat('[data-glide-el^="controls"]', ' [data-glide-dir*="<"]'),
        V = "".concat('[data-glide-el^="controls"]', ' [data-glide-dir*=">"]');
      function $(e) {
        return h(e)
          ? ((t = e),
            Object.keys(t)
              .sort()
              .reduce(function (e, n) {
                return (e[n] = t[n]), e[n], e;
              }, {}))
          : (f("Breakpoints option must be an object"), {});
        var t;
      }
      var Q = {
        Html: function (e, t, n) {
          var r = {
            mount: function () {
              (this.root = e.selector),
                (this.track = this.root.querySelector('[data-glide-el="track"]')),
                this.collectSlides();
            },
            collectSlides: function () {
              this.slides = C(this.wrapper.children).filter(function (t) {
                return !t.classList.contains(e.settings.classes.slide.clone);
              });
            },
          };
          return (
            b(r, "root", {
              get: function () {
                return r._r;
              },
              set: function (e) {
                p(e) && (e = document.querySelector(e)),
                  A(e) ? (r._r = e) : f("Root element must be a existing Html node");
              },
            }),
            b(r, "track", {
              get: function () {
                return r._t;
              },
              set: function (e) {
                A(e)
                  ? (r._t = e)
                  : f(
                      "Could not find track element. Please use ".concat(
                        '[data-glide-el="track"]',
                        " attribute.",
                      ),
                    );
              },
            }),
            b(r, "wrapper", {
              get: function () {
                return r.track.children[0];
              },
            }),
            n.on("update", function () {
              r.collectSlides();
            }),
            r
          );
        },
        Translate: function (e, t, n) {
          var r = {
            set: function (n) {
              var r = (function (e, t, n) {
                  var r = [I, j, q, P].concat(e._t, [N]);
                  return {
                    mutate: function (i) {
                      for (var o = 0; o < r.length; o++) {
                        var s = r[o];
                        m(s) && m(s().modify)
                          ? (i = s(e, t, n).modify(i))
                          : f(
                              "Transformer should be a function that returns an object with `modify()` method",
                            );
                      }
                      return i;
                    },
                  };
                })(e, t).mutate(n),
                i = "translate3d(".concat(-1 * r, "px, 0px, 0px)");
              (t.Html.wrapper.style.mozTransform = i),
                (t.Html.wrapper.style.webkitTransform = i),
                (t.Html.wrapper.style.transform = i);
            },
            remove: function () {
              t.Html.wrapper.style.transform = "";
            },
            getStartIndex: function () {
              var n = t.Sizes.length,
                r = e.index,
                i = e.settings.perView;
              return t.Run.isOffset(">") || t.Run.isOffset("|>") ? n + (r - i) : (r + i) % n;
            },
            getTravelDistance: function () {
              var n = t.Sizes.slideWidth * e.settings.perView;
              return t.Run.isOffset(">") || t.Run.isOffset("|>") ? -1 * n : n;
            },
          };
          return (
            n.on("move", function (i) {
              if (!e.isType("carousel") || !t.Run.isOffset()) return r.set(i.movement);
              t.Transition.after(function () {
                n.emit("translate.jump"), r.set(t.Sizes.slideWidth * e.index);
              });
              var o = t.Sizes.slideWidth * t.Translate.getStartIndex();
              return r.set(o - t.Translate.getTravelDistance());
            }),
            n.on("destroy", function () {
              r.remove();
            }),
            r
          );
        },
        Transition: function (e, t, n) {
          var r = !1,
            i = {
              compose: function (t) {
                var n = e.settings;
                return r
                  ? "".concat(t, " 0ms ").concat(n.animationTimingFunc)
                  : "".concat(t, " ").concat(this.duration, "ms ").concat(n.animationTimingFunc);
              },
              set: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                t.Html.wrapper.style.transition = this.compose(e);
              },
              remove: function () {
                t.Html.wrapper.style.transition = "";
              },
              after: function (e) {
                setTimeout(function () {
                  e();
                }, this.duration);
              },
              enable: function () {
                (r = !1), this.set();
              },
              disable: function () {
                (r = !0), this.set();
              },
            };
          return (
            b(i, "duration", {
              get: function () {
                var n = e.settings;
                return e.isType("slider") && t.Run.offset ? n.rewindDuration : n.animationDuration;
              },
            }),
            n.on("move", function () {
              i.set();
            }),
            n.on(["build.before", "resize", "translate.jump"], function () {
              i.disable();
            }),
            n.on("run", function () {
              i.enable();
            }),
            n.on("destroy", function () {
              i.remove();
            }),
            i
          );
        },
        Direction: function (e, t, n) {
          var r = {
            mount: function () {
              this.value = e.settings.direction;
            },
            resolve: function (e) {
              var t = e.slice(0, 1);
              return this.is("rtl") ? e.split(t).join(O[t]) : e;
            },
            is: function (e) {
              return this.value === e;
            },
            addClass: function () {
              t.Html.root.classList.add(e.settings.classes.direction[this.value]);
            },
            removeClass: function () {
              t.Html.root.classList.remove(e.settings.classes.direction[this.value]);
            },
          };
          return (
            b(r, "value", {
              get: function () {
                return r._v;
              },
              set: function (e) {
                D.indexOf(e) > -1 ? (r._v = e) : f("Direction value must be `ltr` or `rtl`");
              },
            }),
            n.on(["destroy", "update"], function () {
              r.removeClass();
            }),
            n.on("update", function () {
              r.mount();
            }),
            n.on(["build.before", "update"], function () {
              r.addClass();
            }),
            r
          );
        },
        Peek: function (e, t, n) {
          var r = {
            mount: function () {
              this.value = e.settings.peek;
            },
          };
          return (
            b(r, "value", {
              get: function () {
                return r._v;
              },
              set: function (e) {
                h(e) ? ((e.before = d(e.before)), (e.after = d(e.after))) : (e = d(e)), (r._v = e);
              },
            }),
            b(r, "reductor", {
              get: function () {
                var t = r.value,
                  n = e.settings.perView;
                return h(t) ? t.before / n + t.after / n : (2 * t) / n;
              },
            }),
            n.on(["resize", "update"], function () {
              r.mount();
            }),
            r
          );
        },
        Sizes: function (e, t, n) {
          var r = {
            setupSlides: function () {
              for (
                var e = "".concat(this.slideWidth, "px"), n = t.Html.slides, r = 0;
                r < n.length;
                r++
              )
                n[r].style.width = e;
            },
            setupWrapper: function () {
              t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
            },
            remove: function () {
              for (var e = t.Html.slides, n = 0; n < e.length; n++) e[n].style.width = "";
              t.Html.wrapper.style.width = "";
            },
          };
          return (
            b(r, "length", {
              get: function () {
                return t.Html.slides.length;
              },
            }),
            b(r, "width", {
              get: function () {
                return t.Html.track.offsetWidth;
              },
            }),
            b(r, "wrapperSize", {
              get: function () {
                return r.slideWidth * r.length + t.Gaps.grow + t.Clones.grow;
              },
            }),
            b(r, "slideWidth", {
              get: function () {
                return r.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor;
              },
            }),
            n.on(["build.before", "resize", "update"], function () {
              r.setupSlides(), r.setupWrapper();
            }),
            n.on("destroy", function () {
              r.remove();
            }),
            r
          );
        },
        Gaps: function (e, t, n) {
          var r = {
            apply: function (e) {
              for (var n = 0, r = e.length; n < r; n++) {
                var i = e[n].style,
                  o = t.Direction.value;
                (i[T[o][0]] = 0 !== n ? "".concat(this.value / 2, "px") : ""),
                  n !== e.length - 1
                    ? (i[T[o][1]] = "".concat(this.value / 2, "px"))
                    : (i[T[o][1]] = "");
              }
            },
            remove: function (e) {
              for (var t = 0, n = e.length; t < n; t++) {
                var r = e[t].style;
                (r.marginLeft = ""), (r.marginRight = "");
              }
            },
          };
          return (
            b(r, "value", {
              get: function () {
                return d(e.settings.gap);
              },
            }),
            b(r, "grow", {
              get: function () {
                return r.value * t.Sizes.length;
              },
            }),
            b(r, "reductor", {
              get: function () {
                var t = e.settings.perView;
                return (r.value * (t - 1)) / t;
              },
            }),
            n.on(
              ["build.after", "update"],
              S(function () {
                r.apply(t.Html.wrapper.children);
              }, 30),
            ),
            n.on("destroy", function () {
              r.remove(t.Html.wrapper.children);
            }),
            r
          );
        },
        Move: function (e, t, n) {
          var r = {
            mount: function () {
              this._o = 0;
            },
            make: function () {
              var e = this,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              (this.offset = r),
                n.emit("move", { movement: this.value }),
                t.Transition.after(function () {
                  n.emit("move.after", { movement: e.value });
                });
            },
          };
          return (
            b(r, "offset", {
              get: function () {
                return r._o;
              },
              set: function (e) {
                r._o = g(e) ? 0 : d(e);
              },
            }),
            b(r, "translate", {
              get: function () {
                return t.Sizes.slideWidth * e.index;
              },
            }),
            b(r, "value", {
              get: function () {
                var e = this.offset,
                  n = this.translate;
                return t.Direction.is("rtl") ? n + e : n - e;
              },
            }),
            n.on(["build.before", "run"], function () {
              r.make();
            }),
            r
          );
        },
        Clones: function (e, t, n) {
          var r = {
            mount: function () {
              (this.items = []), e.isType("carousel") && (this.items = this.collect());
            },
            collect: function () {
              var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = t.Html.slides,
                i = e.settings,
                o = i.perView,
                s = i.classes,
                a = i.cloningRatio;
              if (0 !== r.length)
                for (
                  var c = +!!e.settings.peek,
                    l = o + c + Math.round(o / 2),
                    u = r.slice(0, l).reverse(),
                    f = r.slice(-1 * l),
                    d = 0;
                  d < Math.max(a, Math.floor(o / r.length));
                  d++
                ) {
                  for (var p = 0; p < u.length; p++) {
                    var h = u[p].cloneNode(!0);
                    h.classList.add(s.slide.clone), n.push(h);
                  }
                  for (var m = 0; m < f.length; m++) {
                    var g = f[m].cloneNode(!0);
                    g.classList.add(s.slide.clone), n.unshift(g);
                  }
                }
              return n;
            },
            append: function () {
              for (
                var e = this.items,
                  n = t.Html,
                  r = n.wrapper,
                  i = n.slides,
                  o = Math.floor(e.length / 2),
                  s = e.slice(0, o).reverse(),
                  a = e.slice(-1 * o).reverse(),
                  c = "".concat(t.Sizes.slideWidth, "px"),
                  l = 0;
                l < a.length;
                l++
              )
                r.appendChild(a[l]);
              for (var u = 0; u < s.length; u++) r.insertBefore(s[u], i[0]);
              for (var f = 0; f < e.length; f++) e[f].style.width = c;
            },
            remove: function () {
              for (var e = this.items, n = 0; n < e.length; n++) t.Html.wrapper.removeChild(e[n]);
            },
          };
          return (
            b(r, "grow", {
              get: function () {
                return (t.Sizes.slideWidth + t.Gaps.value) * r.items.length;
              },
            }),
            n.on("update", function () {
              r.remove(), r.mount(), r.append();
            }),
            n.on("build.before", function () {
              e.isType("carousel") && r.append();
            }),
            n.on("destroy", function () {
              r.remove();
            }),
            r
          );
        },
        Resize: function (e, t, n) {
          var r = new k(),
            i = {
              mount: function () {
                this.bind();
              },
              bind: function () {
                r.on(
                  "resize",
                  window,
                  S(function () {
                    n.emit("resize");
                  }, e.settings.throttle),
                );
              },
              unbind: function () {
                r.off("resize", window);
              },
            };
          return (
            n.on("destroy", function () {
              i.unbind(), r.destroy();
            }),
            i
          );
        },
        Build: function (e, t, n) {
          var r = {
            mount: function () {
              n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after");
            },
            typeClass: function () {
              t.Html.root.classList.add(e.settings.classes.type[e.settings.type]);
            },
            activeClass: function () {
              var n = e.settings.classes,
                r = t.Html.slides[e.index];
              r &&
                (r.classList.add(n.slide.active),
                L(r).forEach(function (e) {
                  e.classList.remove(n.slide.active);
                }));
            },
            removeClasses: function () {
              var n = e.settings.classes,
                r = n.type,
                i = n.slide;
              t.Html.root.classList.remove(r[e.settings.type]),
                t.Html.slides.forEach(function (e) {
                  e.classList.remove(i.active);
                });
            },
          };
          return (
            n.on(["destroy", "update"], function () {
              r.removeClasses();
            }),
            n.on(["resize", "update"], function () {
              r.mount();
            }),
            n.on("move.after", function () {
              r.activeClass();
            }),
            r
          );
        },
        Run: function (e, t, n) {
          var r = {
            mount: function () {
              this._o = !1;
            },
            make: function (r) {
              var i = this;
              e.disabled ||
                (!e.settings.waitForTransition || e.disable(),
                (this.move = r),
                n.emit("run.before", this.move),
                this.calculate(),
                n.emit("run", this.move),
                t.Transition.after(function () {
                  i.isStart() && n.emit("run.start", i.move),
                    i.isEnd() && n.emit("run.end", i.move),
                    i.isOffset() && ((i._o = !1), n.emit("run.offset", i.move)),
                    n.emit("run.after", i.move),
                    e.enable();
                }));
            },
            calculate: function () {
              var t = this.move,
                n = this.length,
                i = t.steps,
                o = t.direction,
                s = 1;
              if ("=" === o)
                return e.settings.bound && d(i) > n ? void (e.index = n) : void (e.index = i);
              if (">" !== o || ">" !== i)
                if ("<" !== o || "<" !== i) {
                  if (
                    ("|" === o && (s = e.settings.perView || 1),
                    ">" === o || ("|" === o && ">" === i))
                  ) {
                    var a = (function (t) {
                      var n = e.index;
                      return e.isType("carousel") ? n + t : n + (t - (n % t));
                    })(s);
                    return (
                      a > n && (this._o = !0),
                      void (e.index = (function (t, n) {
                        var i = r.length;
                        return t <= i
                          ? t
                          : e.isType("carousel")
                          ? t - (i + 1)
                          : e.settings.rewind
                          ? r.isBound() && !r.isEnd()
                            ? i
                            : 0
                          : r.isBound()
                          ? i
                          : Math.floor(i / n) * n;
                      })(a, s))
                    );
                  }
                  if ("<" === o || ("|" === o && "<" === i)) {
                    var c = (function (t) {
                      var n = e.index;
                      return e.isType("carousel") ? n - t : (Math.ceil(n / t) - 1) * t;
                    })(s);
                    return (
                      c < 0 && (this._o = !0),
                      void (e.index = (function (t, n) {
                        var i = r.length;
                        return t >= 0
                          ? t
                          : e.isType("carousel")
                          ? t + (i + 1)
                          : e.settings.rewind
                          ? r.isBound() && r.isStart()
                            ? i
                            : Math.floor(i / n) * n
                          : 0;
                      })(c, s))
                    );
                  }
                  f("Invalid direction pattern [".concat(o).concat(i, "] has been used"));
                } else e.index = 0;
              else e.index = n;
            },
            isStart: function () {
              return e.index <= 0;
            },
            isEnd: function () {
              return e.index >= this.length;
            },
            isOffset: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
              return e
                ? !!this._o &&
                    ("|>" === e
                      ? "|" === this.move.direction && ">" === this.move.steps
                      : "|<" === e
                      ? "|" === this.move.direction && "<" === this.move.steps
                      : this.move.direction === e)
                : this._o;
            },
            isBound: function () {
              return e.isType("slider") && "center" !== e.settings.focusAt && e.settings.bound;
            },
          };
          return (
            b(r, "move", {
              get: function () {
                return this._m;
              },
              set: function (e) {
                var t = e.substr(1);
                this._m = { direction: e.substr(0, 1), steps: t ? (d(t) ? d(t) : t) : 0 };
              },
            }),
            b(r, "length", {
              get: function () {
                var n = e.settings,
                  r = t.Html.slides.length;
                return this.isBound() ? r - 1 - (d(n.perView) - 1) + d(n.focusAt) : r - 1;
              },
            }),
            b(r, "offset", {
              get: function () {
                return this._o;
              },
            }),
            r
          );
        },
        Swipe: function (e, t, n) {
          var r = new k(),
            i = 0,
            o = 0,
            s = 0,
            a = !1,
            c = !!M && { passive: !0 },
            l = {
              mount: function () {
                this.bindSwipeStart();
              },
              start: function (t) {
                if (!a && !e.disabled) {
                  this.disable();
                  var r = this.touches(t);
                  (i = null),
                    (o = d(r.pageX)),
                    (s = d(r.pageY)),
                    this.bindSwipeMove(),
                    this.bindSwipeEnd(),
                    n.emit("swipe.start");
                }
              },
              move: function (r) {
                if (!e.disabled) {
                  var a = e.settings,
                    c = a.touchAngle,
                    l = a.touchRatio,
                    u = a.classes,
                    f = this.touches(r),
                    p = d(f.pageX) - o,
                    h = d(f.pageY) - s,
                    m = Math.abs(p << 2),
                    g = Math.abs(h << 2),
                    v = Math.sqrt(m + g),
                    y = Math.sqrt(g);
                  if (!((180 * (i = Math.asin(y / v))) / Math.PI < c)) return !1;
                  r.stopPropagation(),
                    t.Move.make(p * parseFloat(l)),
                    t.Html.root.classList.add(u.dragging),
                    n.emit("swipe.move");
                }
              },
              end: function (r) {
                if (!e.disabled) {
                  var s = e.settings,
                    a = s.perSwipe,
                    c = s.touchAngle,
                    l = s.classes,
                    u = this.touches(r),
                    f = this.threshold(r),
                    d = u.pageX - o,
                    p = (180 * i) / Math.PI;
                  this.enable(),
                    d > f && p < c
                      ? t.Run.make(t.Direction.resolve("".concat(a, "<")))
                      : d < -f && p < c
                      ? t.Run.make(t.Direction.resolve("".concat(a, ">")))
                      : t.Move.make(),
                    t.Html.root.classList.remove(l.dragging),
                    this.unbindSwipeMove(),
                    this.unbindSwipeEnd(),
                    n.emit("swipe.end");
                }
              },
              bindSwipeStart: function () {
                var n = this,
                  i = e.settings,
                  o = i.swipeThreshold,
                  s = i.dragThreshold;
                o &&
                  r.on(
                    F[0],
                    t.Html.wrapper,
                    function (e) {
                      n.start(e);
                    },
                    c,
                  ),
                  s &&
                    r.on(
                      F[1],
                      t.Html.wrapper,
                      function (e) {
                        n.start(e);
                      },
                      c,
                    );
              },
              unbindSwipeStart: function () {
                r.off(F[0], t.Html.wrapper, c), r.off(F[1], t.Html.wrapper, c);
              },
              bindSwipeMove: function () {
                var n = this;
                r.on(
                  W,
                  t.Html.wrapper,
                  S(function (e) {
                    n.move(e);
                  }, e.settings.throttle),
                  c,
                );
              },
              unbindSwipeMove: function () {
                r.off(W, t.Html.wrapper, c);
              },
              bindSwipeEnd: function () {
                var e = this;
                r.on(B, t.Html.wrapper, function (t) {
                  e.end(t);
                });
              },
              unbindSwipeEnd: function () {
                r.off(B, t.Html.wrapper);
              },
              touches: function (e) {
                return z.indexOf(e.type) > -1 ? e : e.touches[0] || e.changedTouches[0];
              },
              threshold: function (t) {
                var n = e.settings;
                return z.indexOf(t.type) > -1 ? n.dragThreshold : n.swipeThreshold;
              },
              enable: function () {
                return (a = !1), t.Transition.enable(), this;
              },
              disable: function () {
                return (a = !0), t.Transition.disable(), this;
              },
            };
          return (
            n.on("build.after", function () {
              t.Html.root.classList.add(e.settings.classes.swipeable);
            }),
            n.on("destroy", function () {
              l.unbindSwipeStart(), l.unbindSwipeMove(), l.unbindSwipeEnd(), r.destroy();
            }),
            l
          );
        },
        Images: function (e, t, n) {
          var r = new k(),
            i = {
              mount: function () {
                this.bind();
              },
              bind: function () {
                r.on("dragstart", t.Html.wrapper, this.dragstart);
              },
              unbind: function () {
                r.off("dragstart", t.Html.wrapper);
              },
              dragstart: function (e) {
                e.preventDefault();
              },
            };
          return (
            n.on("destroy", function () {
              i.unbind(), r.destroy();
            }),
            i
          );
        },
        Anchors: function (e, t, n) {
          var r = new k(),
            i = !1,
            o = !1,
            s = {
              mount: function () {
                (this._a = t.Html.wrapper.querySelectorAll("a")), this.bind();
              },
              bind: function () {
                r.on("click", t.Html.wrapper, this.click);
              },
              unbind: function () {
                r.off("click", t.Html.wrapper);
              },
              click: function (e) {
                o && (e.stopPropagation(), e.preventDefault());
              },
              detach: function () {
                if (((o = !0), !i)) {
                  for (var e = 0; e < this.items.length; e++) this.items[e].draggable = !1;
                  i = !0;
                }
                return this;
              },
              attach: function () {
                if (((o = !1), i)) {
                  for (var e = 0; e < this.items.length; e++) this.items[e].draggable = !0;
                  i = !1;
                }
                return this;
              },
            };
          return (
            b(s, "items", {
              get: function () {
                return s._a;
              },
            }),
            n.on("swipe.move", function () {
              s.detach();
            }),
            n.on("swipe.end", function () {
              t.Transition.after(function () {
                s.attach();
              });
            }),
            n.on("destroy", function () {
              s.attach(), s.unbind(), r.destroy();
            }),
            s
          );
        },
        Controls: function (e, t, n) {
          var r = new k(),
            i = !!M && { passive: !0 },
            o = {
              mount: function () {
                (this._n = t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]')),
                  (this._c = t.Html.root.querySelectorAll('[data-glide-el^="controls"]')),
                  (this._arrowControls = {
                    previous: t.Html.root.querySelectorAll(U),
                    next: t.Html.root.querySelectorAll(V),
                  }),
                  this.addBindings();
              },
              setActive: function () {
                for (var e = 0; e < this._n.length; e++) this.addClass(this._n[e].children);
              },
              removeActive: function () {
                for (var e = 0; e < this._n.length; e++) this.removeClass(this._n[e].children);
              },
              addClass: function (t) {
                var n = e.settings,
                  r = t[e.index];
                r &&
                  r &&
                  (r.classList.add(n.classes.nav.active),
                  L(r).forEach(function (e) {
                    e.classList.remove(n.classes.nav.active);
                  }));
              },
              removeClass: function (t) {
                var n = t[e.index];
                n && n.classList.remove(e.settings.classes.nav.active);
              },
              setArrowState: function () {
                if (!e.settings.rewind) {
                  var n = o._arrowControls.next,
                    r = o._arrowControls.previous;
                  this.resetArrowState(n, r),
                    0 === e.index && this.disableArrow(r),
                    e.index === t.Run.length && this.disableArrow(n);
                }
              },
              resetArrowState: function () {
                for (var t = e.settings, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                  r[i] = arguments[i];
                r.forEach(function (e) {
                  C(e).forEach(function (e) {
                    e.classList.remove(t.classes.arrow.disabled);
                  });
                });
              },
              disableArrow: function () {
                for (var t = e.settings, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                  r[i] = arguments[i];
                r.forEach(function (e) {
                  C(e).forEach(function (e) {
                    e.classList.add(t.classes.arrow.disabled);
                  });
                });
              },
              addBindings: function () {
                for (var e = 0; e < this._c.length; e++) this.bind(this._c[e].children);
              },
              removeBindings: function () {
                for (var e = 0; e < this._c.length; e++) this.unbind(this._c[e].children);
              },
              bind: function (e) {
                for (var t = 0; t < e.length; t++)
                  r.on("click", e[t], this.click), r.on("touchstart", e[t], this.click, i);
              },
              unbind: function (e) {
                for (var t = 0; t < e.length; t++) r.off(["click", "touchstart"], e[t]);
              },
              click: function (e) {
                M || "touchstart" !== e.type || e.preventDefault();
                var n = e.currentTarget.getAttribute("data-glide-dir");
                t.Run.make(t.Direction.resolve(n));
              },
            };
          return (
            b(o, "items", {
              get: function () {
                return o._c;
              },
            }),
            n.on(["mount.after", "move.after"], function () {
              o.setActive();
            }),
            n.on(["mount.after", "run"], function () {
              o.setArrowState();
            }),
            n.on("destroy", function () {
              o.removeBindings(), o.removeActive(), r.destroy();
            }),
            o
          );
        },
        Keyboard: function (e, t, n) {
          var r = new k(),
            i = {
              mount: function () {
                e.settings.keyboard && this.bind();
              },
              bind: function () {
                r.on("keyup", document, this.press);
              },
              unbind: function () {
                r.off("keyup", document);
              },
              press: function (n) {
                var r = e.settings.perSwipe;
                "ArrowRight" === n.code && t.Run.make(t.Direction.resolve("".concat(r, ">"))),
                  "ArrowLeft" === n.code && t.Run.make(t.Direction.resolve("".concat(r, "<")));
              },
            };
          return (
            n.on(["destroy", "update"], function () {
              i.unbind();
            }),
            n.on("update", function () {
              i.mount();
            }),
            n.on("destroy", function () {
              r.destroy();
            }),
            i
          );
        },
        Autoplay: function (e, t, n) {
          var r = new k(),
            i = {
              mount: function () {
                this.enable(), this.start(), e.settings.hoverpause && this.bind();
              },
              enable: function () {
                this._e = !0;
              },
              disable: function () {
                this._e = !1;
              },
              start: function () {
                var r = this;
                this._e &&
                  (this.enable(),
                  e.settings.autoplay &&
                    g(this._i) &&
                    (this._i = setInterval(function () {
                      r.stop(), t.Run.make(">"), r.start(), n.emit("autoplay");
                    }, this.time)));
              },
              stop: function () {
                this._i = clearInterval(this._i);
              },
              bind: function () {
                var e = this;
                r.on("mouseover", t.Html.root, function () {
                  e._e && e.stop();
                }),
                  r.on("mouseout", t.Html.root, function () {
                    e._e && e.start();
                  });
              },
              unbind: function () {
                r.off(["mouseover", "mouseout"], t.Html.root);
              },
            };
          return (
            b(i, "time", {
              get: function () {
                var n = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
                return d(n || e.settings.autoplay);
              },
            }),
            n.on(["destroy", "update"], function () {
              i.unbind();
            }),
            n.on(["run.before", "swipe.start", "update"], function () {
              i.stop();
            }),
            n.on(["pause", "destroy"], function () {
              i.disable(), i.stop();
            }),
            n.on(["run.after", "swipe.end"], function () {
              i.start();
            }),
            n.on(["play"], function () {
              i.enable(), i.start();
            }),
            n.on("update", function () {
              i.mount();
            }),
            n.on("destroy", function () {
              r.destroy();
            }),
            i
          );
        },
        Breakpoints: function (e, t, n) {
          var r = new k(),
            i = e.settings,
            o = $(i.breakpoints),
            s = Object.assign({}, i),
            a = {
              match: function (e) {
                if (void 0 !== window.matchMedia)
                  for (var t in e)
                    if (
                      e.hasOwnProperty(t) &&
                      window.matchMedia("(max-width: ".concat(t, "px)")).matches
                    )
                      return e[t];
                return s;
              },
            };
          return (
            Object.assign(i, a.match(o)),
            r.on(
              "resize",
              window,
              S(function () {
                e.settings = _(i, a.match(o));
              }, e.settings.throttle),
            ),
            n.on("update", function () {
              (o = $(o)), (s = Object.assign({}, i));
            }),
            n.on("destroy", function () {
              r.off("resize", window);
            }),
            a
          );
        },
      };
      return (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && o(e, t);
        })(s, e);
        var n = a(s);
        function s() {
          return t(this, s), n.apply(this, arguments);
        }
        return (
          r(s, [
            {
              key: "mount",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return l(i(s.prototype), "mount", this).call(this, Object.assign({}, Q, e));
              },
            },
          ]),
          s
        );
      })(E);
    })();
  },
  function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t);
    };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(22).f,
      o = n(12),
      s = n(15),
      a = n(50),
      c = n(72),
      l = n(39);
    e.exports = function (e, t) {
      var n,
        u,
        f,
        d,
        p,
        h = e.target,
        m = e.global,
        g = e.stat;
      if ((n = m ? r : g ? r[h] || a(h, {}) : (r[h] || {}).prototype))
        for (u in t) {
          if (
            ((d = t[u]),
            (f = e.noTargetGet ? (p = i(n, u)) && p.value : n[u]),
            !l(m ? u : h + (g ? "." : "#") + u, e.forced) && void 0 !== f)
          ) {
            if (typeof d == typeof f) continue;
            c(d, f);
          }
          (e.sham || (f && f.sham)) && o(d, "sham", !0), s(n, u, d, e);
        }
    };
  },
  function (e, t, n) {
    var r = n(4);
    e.exports = function (e) {
      if (!r(e)) throw TypeError(String(e) + " is not an object");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(70),
      o = n(8),
      s = n(24),
      a = Object.defineProperty;
    t.f = r
      ? a
      : function (e, t, n) {
          if ((o(e), (t = s(t, !0)), o(n), i))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function (e, t, n) {
    var r = n(3);
    e.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(80),
      o = n(114),
      s = n(12);
    for (var a in i) {
      var c = r[a],
        l = c && c.prototype;
      if (l && l.forEach !== o)
        try {
          s(l, "forEach", o);
        } catch (e) {
          l.forEach = o;
        }
    }
  },
  function (e, t, n) {
    var r = n(10),
      i = n(9),
      o = n(23);
    e.exports = r
      ? function (e, t, n) {
          return i.f(e, t, o(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        };
  },
  function (e, t, n) {
    var r = n(27),
      i = Math.min;
    e.exports = function (e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1);
    };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(12),
      o = n(6),
      s = n(50),
      a = n(51),
      c = n(19),
      l = c.get,
      u = c.enforce,
      f = String(String).split("String");
    (e.exports = function (e, t, n, a) {
      var c = !!a && !!a.unsafe,
        l = !!a && !!a.enumerable,
        d = !!a && !!a.noTargetGet;
      "function" == typeof n &&
        ("string" != typeof t || o(n, "name") || i(n, "name", t),
        (u(n).source = f.join("string" == typeof t ? t : ""))),
        e !== r
          ? (c ? !d && e[t] && (l = !0) : delete e[t], l ? (e[t] = n) : i(e, t, n))
          : l
          ? (e[t] = n)
          : s(t, n);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && l(this).source) || a(this);
    });
  },
  function (e, t, n) {
    var r = n(18);
    e.exports = function (e) {
      return Object(r(e));
    };
  },
  function (e, t, n) {
    var r = n(48),
      i = n(18);
    e.exports = function (e) {
      return r(i(e));
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    };
  },
  function (e, t, n) {
    var r,
      i,
      o,
      s = n(107),
      a = n(1),
      c = n(4),
      l = n(12),
      u = n(6),
      f = n(36),
      d = n(26),
      p = a.WeakMap;
    if (s) {
      var h = new p(),
        m = h.get,
        g = h.has,
        v = h.set;
      (r = function (e, t) {
        return v.call(h, e, t), t;
      }),
        (i = function (e) {
          return m.call(h, e) || {};
        }),
        (o = function (e) {
          return g.call(h, e);
        });
    } else {
      var y = f("state");
      (d[y] = !0),
        (r = function (e, t) {
          return l(e, y, t), t;
        }),
        (i = function (e) {
          return u(e, y) ? e[y] : {};
        }),
        (o = function (e) {
          return u(e, y);
        });
    }
    e.exports = {
      set: r,
      get: i,
      has: o,
      enforce: function (e) {
        return o(e) ? i(e) : r(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!c(t) || (n = i(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    };
  },
  function (e, t, n) {
    var r = n(73),
      i = n(1),
      o = function (e) {
        return "function" == typeof e ? e : void 0;
      };
    e.exports = function (e, t) {
      return arguments.length < 2 ? o(r[e]) || o(i[e]) : (r[e] && r[e][t]) || (i[e] && i[e][t]);
    };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(3),
      o = n(6),
      s = Object.defineProperty,
      a = {},
      c = function (e) {
        throw e;
      };
    e.exports = function (e, t) {
      if (o(a, e)) return a[e];
      t || (t = {});
      var n = [][e],
        l = !!o(t, "ACCESSORS") && t.ACCESSORS,
        u = o(t, 0) ? t[0] : c,
        f = o(t, 1) ? t[1] : void 0;
      return (a[e] =
        !!n &&
        !i(function () {
          if (l && !r) return !0;
          var e = { length: -1 };
          l ? s(e, 1, { enumerable: !0, get: c }) : (e[1] = 1), n.call(e, u, f);
        }));
    };
  },
  function (e, t, n) {
    var r = n(10),
      i = n(47),
      o = n(23),
      s = n(17),
      a = n(24),
      c = n(6),
      l = n(70),
      u = Object.getOwnPropertyDescriptor;
    t.f = r
      ? u
      : function (e, t) {
          if (((e = s(e)), (t = a(t, !0)), l))
            try {
              return u(e, t);
            } catch (e) {}
          if (c(e, t)) return o(!i.f.call(e, t), e[t]);
        };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
    };
  },
  function (e, t, n) {
    var r = n(4);
    e.exports = function (e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e)))) return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e)))) return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (e, t) {
    e.exports = !1;
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (e, t, n) {
    var r = n(41);
    e.exports = function (e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  },
  function (e, t, n) {
    var r = n(61),
      i = n(15),
      o = n(116);
    r || i(Object.prototype, "toString", o, { unsafe: !0 });
  },
  function (e, t, n) {
    var r = n(9).f,
      i = n(6),
      o = n(2)("toStringTag");
    e.exports = function (e, t, n) {
      e && !i((e = n ? e : e.prototype), o) && r(e, o, { configurable: !0, value: t });
    };
  },
  function (e, t) {
    e.exports = {};
  },
  function (e, t, n) {
    var r = n(3),
      i = n(2),
      o = n(65),
      s = i("species");
    e.exports = function (e) {
      return (
        o >= 51 ||
        !r(function () {
          var t = [];
          return (
            ((t.constructor = {})[s] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    };
  },
  function (e, t, n) {
    var r,
      i = n(8),
      o = n(124),
      s = n(54),
      a = n(26),
      c = n(88),
      l = n(49),
      u = n(36),
      f = u("IE_PROTO"),
      d = function () {},
      p = function (e) {
        return "<script>" + e + "</script>";
      },
      h = function () {
        try {
          r = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        h = r
          ? (function (e) {
              e.write(p("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            })(r)
          : (((t = l("iframe")).style.display = "none"),
            c.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(p("document.F=Object")),
            e.close(),
            e.F);
        for (var n = s.length; n--; ) delete h.prototype[s[n]];
        return h();
      };
    (a[f] = !0),
      (e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((d.prototype = i(e)), (n = new d()), (d.prototype = null), (n[f] = e))
              : (n = h()),
            void 0 === t ? n : o(n, t)
          );
        });
  },
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";
      var o = [],
        s = n.document,
        a = Object.getPrototypeOf,
        c = o.slice,
        l = o.concat,
        u = o.push,
        f = o.indexOf,
        d = {},
        p = d.toString,
        h = d.hasOwnProperty,
        m = h.toString,
        g = m.call(Object),
        v = {},
        y = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        b = function (e) {
          return null != e && e === e.window;
        },
        _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          i,
          o = (n = n || s).createElement("script");
        if (((o.text = e), t))
          for (r in _) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function E(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? d[p.call(e)] || "object"
          : typeof e;
      }
      var x = function (e, t) {
          return new x.fn.init(e, t);
        },
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function T(e) {
        var t = !!e && "length" in e && e.length,
          n = E(e);
        return (
          !y(e) &&
          !b(e) &&
          ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (x.fn = x.prototype =
        {
          jquery: "3.4.1",
          constructor: x,
          length: 0,
          toArray: function () {
            return c.call(this);
          },
          get: function (e) {
            return null == e ? c.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return x.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              x.map(this, function (t, n) {
                return e.call(t, n, t);
              }),
            );
          },
          slice: function () {
            return this.pushStack(c.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: u,
          sort: o.sort,
          splice: o.splice,
        }),
        (x.extend = x.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              s = arguments[0] || {},
              a = 1,
              c = arguments.length,
              l = !1;
            for (
              "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || y(s) || (s = {}),
                a === c && ((s = this), a--);
              a < c;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      s !== r &&
                      (l && r && (x.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = s[t]),
                          (o = i && !Array.isArray(n) ? [] : i || x.isPlainObject(n) ? n : {}),
                          (i = !1),
                          (s[t] = x.extend(l, o, r)))
                        : void 0 !== r && (s[t] = r));
            return s;
          }),
        x.extend({
          expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== p.call(e)) &&
              (!(t = a(e)) ||
                ("function" == typeof (n = h.call(t, "constructor") && t.constructor) &&
                  m.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t) {
            w(e, { nonce: t && t.nonce });
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (T(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(S, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (T(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : f.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              s = [];
            if (T(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return l.apply([], s);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol && (x.fn[Symbol.iterator] = o[Symbol.iterator]),
        x.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          },
        );
      var L =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            c,
            l,
            u,
            f,
            d,
            p,
            h,
            m,
            g,
            v,
            y,
            b,
            _ = "sizzle" + 1 * new Date(),
            w = e.document,
            E = 0,
            x = 0,
            S = ce(),
            T = ce(),
            L = ce(),
            A = ce(),
            C = function (e, t) {
              return e === t && (f = !0), 0;
            },
            k = {}.hasOwnProperty,
            D = [],
            O = D.pop,
            N = D.push,
            I = D.push,
            j = D.slice,
            q = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
            },
            P =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M =
              "\\[" +
              H +
              "*(" +
              R +
              ")(?:" +
              H +
              "*([*^$|!~]?=)" +
              H +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              R +
              "))|)" +
              H +
              "*\\]",
            F =
              ":(" +
              R +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              M +
              ")*)|.*)\\)|)",
            W = new RegExp(H + "+", "g"),
            B = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            z = new RegExp("^" + H + "*," + H + "*"),
            U = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            V = new RegExp(H + "|>"),
            $ = new RegExp(F),
            Q = new RegExp("^" + R + "$"),
            K = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + M),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  H +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  H +
                  "*(?:([+-]|)" +
                  H +
                  "*(\\d+)|))" +
                  H +
                  "*\\)|)",
                "i",
              ),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  H +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  H +
                  "*((?:-\\d)?\\d*)" +
                  H +
                  "*\\)|)(?=[^-]|$)",
                "i",
              ),
            },
            Y = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            ne = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n
                ? t
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
                : "\\" + e;
            },
            oe = function () {
              d();
            },
            se = _e(
              function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
              },
              { dir: "parentNode", next: "legend" },
            );
          try {
            I.apply((D = j.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
          } catch (e) {
            I = {
              apply: D.length
                ? function (e, t) {
                    N.apply(e, j.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, r, i) {
            var o,
              a,
              l,
              u,
              f,
              h,
              v,
              y = t && t.ownerDocument,
              E = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== E && 9 !== E && 11 !== E)))
              return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), (t = t || p), m)) {
              if (11 !== E && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === E) {
                    if (!(l = t.getElementById(o))) return r;
                    if (l.id === o) return r.push(l), r;
                  } else if (y && (l = y.getElementById(o)) && b(t, l) && l.id === o)
                    return r.push(l), r;
                } else {
                  if (f[2]) return I.apply(r, t.getElementsByTagName(e)), r;
                  if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                    return I.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !A[e + " "] &&
                (!g || !g.test(e)) &&
                (1 !== E || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((v = e), (y = t), 1 === E && V.test(e))) {
                  for (
                    (u = t.getAttribute("id"))
                      ? (u = u.replace(re, ie))
                      : t.setAttribute("id", (u = _)),
                      a = (h = s(e)).length;
                    a--;

                  )
                    h[a] = "#" + u + " " + be(h[a]);
                  (v = h.join(",")), (y = (ee.test(e) && ve(t.parentNode)) || t);
                }
                try {
                  return I.apply(r, y.querySelectorAll(v)), r;
                } catch (t) {
                  A(e, !0);
                } finally {
                  u === _ && t.removeAttribute("id");
                }
              }
            }
            return c(e.replace(B, "$1"), t, r, i);
          }
          function ce() {
            var e = [];
            return function t(n, i) {
              return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            };
          }
          function le(e) {
            return (e[_] = !0), e;
          }
          function ue(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function me(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ge(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--; )
                    n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (o = ae.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !Y.test(t || (n && n.nodeName) || "HTML");
            }),
          (d = ae.setDocument =
            function (e) {
              var t,
                i,
                s = e ? e.ownerDocument || e : w;
              return s !== p && 9 === s.nodeType && s.documentElement
                ? ((h = (p = s).documentElement),
                  (m = !o(p)),
                  w !== p &&
                    (i = p.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", oe, !1)
                      : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                  })),
                  (n.getElementsByClassName = J.test(p.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (
                      (h.appendChild(e).id = _),
                      !p.getElementsByName || !p.getElementsByName(_).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && m)
                        return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (g = []),
                  (n.qsa = J.test(p.querySelectorAll)) &&
                    (ue(function (e) {
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        _ +
                        "'></a><select id='" +
                        _ +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          g.push("[*^$]=" + H + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          g.push("\\[" + H + "*(?:value|" + P + ")"),
                        e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="),
                        e.querySelectorAll(":checked").length || g.push(":checked"),
                        e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]");
                    }),
                    ue(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          g.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          g.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        g.push(",.*:");
                    })),
                  (n.matchesSelector = J.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector),
                  )) &&
                    ue(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", F);
                    }),
                  (g = g.length && new RegExp(g.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = J.test(h.compareDocumentPosition)),
                  (b =
                    t || J.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (C = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached && t.compareDocumentPosition(e) === r)
                            ? e === p || (e.ownerDocument === w && b(w, e))
                              ? -1
                              : t === p || (t.ownerDocument === w && b(w, t))
                              ? 1
                              : u
                              ? q(u, e) - q(u, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          s = [e],
                          a = [t];
                        if (!i || !o)
                          return e === p
                            ? -1
                            : t === p
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : u
                            ? q(u, e) - q(u, t)
                            : 0;
                        if (i === o) return de(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; s[r] === a[r]; ) r++;
                        return r ? de(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0;
                      }),
                  p)
                : p;
            }),
          (ae.matches = function (e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== p && d(e),
              n.matchesSelector && m && !A[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType))
                  return r;
              } catch (e) {
                A(t, !0);
              }
            return ae(t, p, null, [e]).length > 0;
          }),
          (ae.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && d(e), b(e, t);
          }),
          (ae.attr = function (e, t) {
            (e.ownerDocument || e) !== p && d(e);
            var i = r.attrHandle[t.toLowerCase()],
              o = i && k.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !m
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (ae.escape = function (e) {
            return (e + "").replace(re, ie);
          }),
          (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (((f = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(C), f)) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (u = null), e;
          }),
          (i = ae.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          ((r = ae.selectors =
            {
              cacheLength: 50,
              createPseudo: le,
              match: K,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ae.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return K.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          $.test(n) &&
                          (t = s(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = S[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                      S(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                            "",
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ae.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                            : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, c) {
                        var l,
                          u,
                          f,
                          d,
                          p,
                          h,
                          m = o !== s ? "nextSibling" : "previousSibling",
                          g = t.parentNode,
                          v = a && t.nodeName.toLowerCase(),
                          y = !c && !a,
                          b = !1;
                        if (g) {
                          if (o) {
                            for (; m; ) {
                              for (d = t; (d = d[m]); )
                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                  return !1;
                              h = m = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                            for (
                              b =
                                (p =
                                  (l =
                                    (u =
                                      (f = (d = g)[_] || (d[_] = {}))[d.uniqueID] ||
                                      (f[d.uniqueID] = {}))[e] || [])[0] === E && l[1]) && l[2],
                                d = p && g.childNodes[p];
                              (d = (++p && d && d[m]) || (b = p = 0) || h.pop());

                            )
                              if (1 === d.nodeType && ++b && d === t) {
                                u[e] = [E, p, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = p =
                                (l =
                                  (u =
                                    (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] ||
                                    (f[d.uniqueID] = {}))[e] || [])[0] === E && l[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (d = (++p && d && d[m]) || (b = p = 0) || h.pop()) &&
                              ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) ||
                                !++b ||
                                (y &&
                                  ((u =
                                    (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[
                                    e
                                  ] = [E, b]),
                                d !== t));

                            );
                          return (b -= i) === r || (b % r == 0 && b / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      ae.error("unsupported pseudo: " + e);
                  return i[_]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, o = i(e, t), s = o.length; s--; )
                              e[(r = q(e, o[s]))] = !(n[r] = o[s]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(B, "$1"));
                  return r[_]
                    ? le(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function (e, i, o) {
                        return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return ae(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    Q.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                          return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return G.test(e.nodeName);
                },
                input: function (e) {
                  return X.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                  );
                },
                first: ge(function () {
                  return [0];
                }),
                last: ge(function (e, t) {
                  return [t - 1];
                }),
                eq: ge(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ge(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ge(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ge(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: ge(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function _e(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              s = n && "parentNode" === o,
              a = x++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); ) if (1 === t.nodeType || s) return e(t, n, i);
                  return !1;
                }
              : function (t, n, c) {
                  var l,
                    u,
                    f,
                    d = [E, a];
                  if (c) {
                    for (; (t = t[r]); ) if ((1 === t.nodeType || s) && e(t, n, c)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((u = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((l = u[o]) && l[0] === E && l[1] === a) return (d[2] = l[2]);
                          if (((u[o] = d), (d[2] = e(t, n, c)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Ee(e, t, n, r, i) {
            for (var o, s = [], a = 0, c = e.length, l = null != t; a < c; a++)
              (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
            return s;
          }
          function xe(e, t, n, r, i, o) {
            return (
              r && !r[_] && (r = xe(r)),
              i && !i[_] && (i = xe(i, o)),
              le(function (o, s, a, c) {
                var l,
                  u,
                  f,
                  d = [],
                  p = [],
                  h = s.length,
                  m =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  g = !e || (!o && t) ? m : Ee(m, d, e, a, c),
                  v = n ? (i || (o ? e : h || r) ? [] : s) : g;
                if ((n && n(g, v, a, c), r))
                  for (l = Ee(v, p), r(l, [], a, c), u = l.length; u--; )
                    (f = l[u]) && (v[p[u]] = !(g[p[u]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], u = v.length; u--; ) (f = v[u]) && l.push((g[u] = f));
                      i(null, (v = []), l, c);
                    }
                    for (u = v.length; u--; )
                      (f = v[u]) && (l = i ? q(o, f) : d[u]) > -1 && (o[l] = !(s[l] = f));
                  }
                } else (v = Ee(v === s ? v.splice(h, v.length) : v)), i ? i(null, s, v, c) : I.apply(s, v);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[" "],
                c = s ? 1 : 0,
                u = _e(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0,
                ),
                f = _e(
                  function (e) {
                    return q(t, e) > -1;
                  },
                  a,
                  !0,
                ),
                d = [
                  function (e, n, r) {
                    var i = (!s && (r || n !== l)) || ((t = n).nodeType ? u(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              c < o;
              c++
            )
              if ((n = r.relative[e[c].type])) d = [_e(we(d), n)];
              else {
                if ((n = r.filter[e[c].type].apply(null, e[c].matches))[_]) {
                  for (i = ++c; i < o && !r.relative[e[i].type]; i++);
                  return xe(
                    c > 1 && we(d),
                    c > 1 &&
                      be(
                        e.slice(0, c - 1).concat({ value: " " === e[c - 2].type ? "*" : "" }),
                      ).replace(B, "$1"),
                    n,
                    c < i && Se(e.slice(c, i)),
                    i < o && Se((e = e.slice(i))),
                    i < o && be(e),
                  );
                }
                d.push(n);
              }
            return we(d);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (s = ae.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  s,
                  a,
                  c,
                  l,
                  u = T[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, c = [], l = r.preFilter; a; ) {
                  for (s in ((n && !(i = z.exec(a))) ||
                    (i && (a = a.slice(i[0].length) || a), c.push((o = []))),
                  (n = !1),
                  (i = U.exec(a)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(B, " ") }),
                    (a = a.slice(n.length))),
                  r.filter))
                    !(i = K[s].exec(a)) ||
                      (l[s] && !(i = l[s](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: s, matches: i }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? ae.error(e) : T(e, c).slice(0);
              }),
            (a = ae.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  a = L[e + " "];
                if (!a) {
                  for (t || (t = s(e)), n = t.length; n--; )
                    (a = Se(t[n]))[_] ? i.push(a) : o.push(a);
                  (a = L(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, s, a, c, u) {
                          var f,
                            h,
                            g,
                            v = 0,
                            y = "0",
                            b = o && [],
                            _ = [],
                            w = l,
                            x = o || (i && r.find.TAG("*", u)),
                            S = (E += null == w ? 1 : Math.random() || 0.1),
                            T = x.length;
                          for (u && (l = s === p || s || u); y !== T && null != (f = x[y]); y++) {
                            if (i && f) {
                              for (
                                h = 0, s || f.ownerDocument === p || (d(f), (a = !m));
                                (g = e[h++]);

                              )
                                if (g(f, s || p, a)) {
                                  c.push(f);
                                  break;
                                }
                              u && (E = S);
                            }
                            n && ((f = !g && f) && v--, o && b.push(f));
                          }
                          if (((v += y), n && y !== v)) {
                            for (h = 0; (g = t[h++]); ) g(b, _, s, a);
                            if (o) {
                              if (v > 0) for (; y--; ) b[y] || _[y] || (_[y] = O.call(c));
                              _ = Ee(_);
                            }
                            I.apply(c, _),
                              u && !o && _.length > 0 && v + t.length > 1 && ae.uniqueSort(c);
                          }
                          return u && ((E = S), (l = w)), b;
                        };
                      return n ? le(o) : o;
                    })(o, i),
                  )).selector = e;
                }
                return a;
              }),
            (c = ae.select =
              function (e, t, n, i) {
                var o,
                  c,
                  l,
                  u,
                  f,
                  d = "function" == typeof e && e,
                  p = !i && s((e = d.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    (c = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (l = c[0]).type &&
                    9 === t.nodeType &&
                    m &&
                    r.relative[c[1].type]
                  ) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                    d && (t = t.parentNode), (e = e.slice(c.shift().value.length));
                  }
                  for (
                    o = K.needsContext.test(e) ? 0 : c.length;
                    o-- && ((l = c[o]), !r.relative[(u = l.type)]);

                  )
                    if (
                      (f = r.find[u]) &&
                      (i = f(
                        l.matches[0].replace(te, ne),
                        (ee.test(c[0].type) && ve(t.parentNode)) || t,
                      ))
                    ) {
                      if ((c.splice(o, 1), !(e = i.length && be(c)))) return I.apply(n, i), n;
                      break;
                    }
                }
                return (d || a(e, p))(i, t, !m, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
              }),
            (n.sortStable = _.split("").sort(C).join("") === _),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ue(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ue(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
              }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(P, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            ae
          );
        })(n);
      (x.find = L),
        (x.expr = L.selectors),
        (x.expr[":"] = x.expr.pseudos),
        (x.uniqueSort = x.unique = L.uniqueSort),
        (x.text = L.getText),
        (x.isXMLDoc = L.isXML),
        (x.contains = L.contains),
        (x.escapeSelector = L.escape);
      var A = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && x(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        C = function (e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        k = x.expr.match.needsContext;
      function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function N(e, t, n) {
        return y(t)
          ? x.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? x.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? x.grep(e, function (e) {
              return f.call(t, e) > -1 !== n;
            })
          : x.filter(t, e, n);
      }
      (x.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? x.find.matchesSelector(r, e)
              ? [r]
              : []
            : x.find.matches(
                e,
                x.grep(t, function (e) {
                  return 1 === e.nodeType;
                }),
              )
        );
      }),
        x.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                x(e).filter(function () {
                  for (t = 0; t < r; t++) if (x.contains(i[t], this)) return !0;
                }),
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) x.find(e, i[t], n);
            return r > 1 ? x.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(N(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(N(this, e || [], !0));
          },
          is: function (e) {
            return !!N(this, "string" == typeof e && k.test(e) ? x(e) : e || [], !1).length;
          },
        });
      var I,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((x.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || I), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : j.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof x ? t[0] : t),
              x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)),
              O.test(r[1]) && x.isPlainObject(t))
            )
              for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (i = s.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : y(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(x)
          : x.makeArray(e, this);
      }).prototype = x.fn),
        (I = x(s));
      var q = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };
      function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      x.fn.extend({
        has: function (e) {
          var t = x(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            s = "string" != typeof e && x(e);
          if (!k.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? x.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? f.call(x(e), this[0])
              : f.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
      }),
        x.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return A(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return A(e, "parentNode", n);
            },
            next: function (e) {
              return H(e, "nextSibling");
            },
            prev: function (e) {
              return H(e, "previousSibling");
            },
            nextAll: function (e) {
              return A(e, "nextSibling");
            },
            prevAll: function (e) {
              return A(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return A(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return A(e, "previousSibling", n);
            },
            siblings: function (e) {
              return C((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return C(e.firstChild);
            },
            contents: function (e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (D(e, "template") && (e = e.content || e), x.merge([], e.childNodes));
            },
          },
          function (e, t) {
            x.fn[e] = function (n, r) {
              var i = x.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = x.filter(r, i)),
                this.length > 1 && (P[e] || x.uniqueSort(i), q.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          },
        );
      var R = /[^\x20\t\r\n\f]+/g;
      function M(e) {
        return e;
      }
      function F(e) {
        throw e;
      }
      function W(e, t, n, r) {
        var i;
        try {
          e && y((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && y((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (x.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  x.each(e.match(R) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : x.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          s = [],
          a = -1,
          c = function () {
            for (i = i || e.once, r = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          l = {
            add: function () {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    x.each(n, function (n, r) {
                      y(r)
                        ? (e.unique && l.has(r)) || o.push(r)
                        : r && r.length && "string" !== E(r) && t(r);
                    });
                  })(arguments),
                  n && !t && c()),
                this
              );
            },
            remove: function () {
              return (
                x.each(arguments, function (e, t) {
                  for (var n; (n = x.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? x.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = s = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || c()), this
              );
            },
            fire: function () {
              return l.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return l;
      }),
        x.extend({
          Deferred: function (e) {
            var t = [
                ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                [
                  "resolve",
                  "done",
                  x.Callbacks("once memory"),
                  x.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  x.Callbacks("once memory"),
                  x.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return x
                    .Deferred(function (n) {
                      x.each(t, function (t, r) {
                        var i = y(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && y(e.promise)
                            ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                            : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (e, r, i) {
                  var o = 0;
                  function s(e, t, r, i) {
                    return function () {
                      var a = this,
                        c = arguments,
                        l = function () {
                          var n, l;
                          if (!(e < o)) {
                            if ((n = r.apply(a, c)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (l = n && ("object" == typeof n || "function" == typeof n) && n.then),
                              y(l)
                                ? i
                                  ? l.call(n, s(o, t, M, i), s(o, t, F, i))
                                  : (o++,
                                    l.call(
                                      n,
                                      s(o, t, M, i),
                                      s(o, t, F, i),
                                      s(o, t, M, t.notifyWith),
                                    ))
                                : (r !== M && ((a = void 0), (c = [n])),
                                  (i || t.resolveWith)(a, c));
                          }
                        },
                        u = i
                          ? l
                          : function () {
                              try {
                                l();
                              } catch (n) {
                                x.Deferred.exceptionHook &&
                                  x.Deferred.exceptionHook(n, u.stackTrace),
                                  e + 1 >= o &&
                                    (r !== F && ((a = void 0), (c = [n])), t.rejectWith(a, c));
                              }
                            };
                      e
                        ? u()
                        : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return x
                    .Deferred(function (n) {
                      t[0][3].add(s(0, n, y(i) ? i : M, n.notifyWith)),
                        t[1][3].add(s(0, n, y(e) ? e : M)),
                        t[2][3].add(s(0, n, y(r) ? r : F));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? x.extend(e, i) : i;
                },
              },
              o = {};
            return (
              x.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (i[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        r = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock,
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = c.call(arguments),
              o = x.Deferred(),
              s = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? c.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              (W(e, o.done(s(n)).resolve, o.reject, !t),
              "pending" === o.state() || y(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) W(i[n], s(n), o.reject);
            return o.promise();
          },
        });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (x.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          B.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (x.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var z = x.Deferred();
      function U() {
        s.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), x.ready();
      }
      (x.fn.ready = function (e) {
        return (
          z.then(e).catch(function (e) {
            x.readyException(e);
          }),
          this
        );
      }),
        x.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --x.readyWait : x.isReady) ||
              ((x.isReady = !0), (!0 !== e && --x.readyWait > 0) || z.resolveWith(s, [x]));
          },
        }),
        (x.ready.then = z.then),
        "complete" === s.readyState || ("loading" !== s.readyState && !s.documentElement.doScroll)
          ? n.setTimeout(x.ready)
          : (s.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
      var V = function (e, t, n, r, i, o, s) {
          var a = 0,
            c = e.length,
            l = null == n;
          if ("object" === E(n)) for (a in ((i = !0), n)) V(e, t, a, n[a], !0, o, s);
          else if (
            void 0 !== r &&
            ((i = !0),
            y(r) || (s = !0),
            l &&
              (s
                ? (t.call(e, r), (t = null))
                : ((l = t),
                  (t = function (e, t, n) {
                    return l.call(x(e), n);
                  }))),
            t)
          )
            for (; a < c; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
          return i ? e : l ? t.call(e) : c ? t(e[0], n) : o;
        },
        $ = /^-ms-/,
        Q = /-([a-z])/g;
      function K(e, t) {
        return t.toUpperCase();
      }
      function Y(e) {
        return e.replace($, "ms-").replace(Q, K);
      }
      var X = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function G() {
        this.expando = x.expando + G.uid++;
      }
      (G.uid = 1),
        (G.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                X(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[Y(t)] = n;
            else for (r in t) i[Y(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(R) || [])
                  .length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || x.isEmptyObject(r)) &&
                (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t);
          },
        });
      var J = new G(),
        Z = new G(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      x.extend({
        hasData: function (e) {
          return Z.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function (e, t) {
          Z.remove(e, t);
        },
        _data: function (e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function (e, t) {
          J.remove(e, t);
        },
      }),
        x.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (this.length && ((i = Z.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (r = s[n].name).indexOf("data-") &&
                    ((r = Y(r.slice(5))), ne(o, r, i[r]));
                J.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function () {
                  Z.set(this, e);
                })
              : V(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                    this.each(function () {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0,
                );
          },
          removeData: function (e) {
            return this.each(function () {
              Z.remove(this, e);
            });
          },
        }),
        x.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = J.get(e, t)),
                n && (!r || Array.isArray(n) ? (r = J.access(e, t, x.makeArray(n))) : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = x._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    x.dequeue(e, t);
                  },
                  o,
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: x.Callbacks("once memory").add(function () {
                  J.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        x.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? x.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = x.queue(this, e, t);
                    x._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              x.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = x.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --r || i.resolveWith(o, [o]);
              };
            for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; )
              (n = J.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t);
          },
        });
      var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        se = s.documentElement,
        ae = function (e) {
          return x.contains(e.ownerDocument, e);
        },
        ce = { composed: !0 };
      se.getRootNode &&
        (ae = function (e) {
          return x.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument;
        });
      var le = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ae(e) && "none" === x.css(e, "display"))
          );
        },
        ue = function (e, t, n, r) {
          var i,
            o,
            s = {};
          for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = s[o];
          return i;
        };
      function fe(e, t, n, r) {
        var i,
          o,
          s = 20,
          a = r
            ? function () {
                return r.cur();
              }
            : function () {
                return x.css(e, t, "");
              },
          c = a(),
          l = (n && n[3]) || (x.cssNumber[t] ? "" : "px"),
          u = e.nodeType && (x.cssNumber[t] || ("px" !== l && +c)) && ie.exec(x.css(e, t));
        if (u && u[3] !== l) {
          for (c /= 2, l = l || u[3], u = +c || 1; s--; )
            x.style(e, t, u + l), (1 - o) * (1 - (o = a() / c || 0.5)) <= 0 && (s = 0), (u /= o);
          (u *= 2), x.style(e, t, u + l), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +c || 0),
            (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = u), (r.end = i))),
          i
        );
      }
      var de = {};
      function pe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = de[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = x.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (de[r] = i),
          i)
        );
      }
      function he(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = J.get(r, "display") || null), i[o] || (r.style.display = "")),
                "" === r.style.display && le(r) && (i[o] = pe(r)))
              : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      x.fn.extend({
        show: function () {
          return he(this, !0);
        },
        hide: function () {
          return he(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? x(this).show() : x(this).hide();
              });
        },
      });
      var me = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i,
        ye = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && D(e, t)) ? x.merge([e], n) : n
        );
      }
      function _e(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      (ye.optgroup = ye.option),
        (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td);
      var we,
        Ee,
        xe = /<|&#?\w+;/;
      function Se(e, t, n, r, i) {
        for (
          var o, s, a, c, l, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length;
          p < h;
          p++
        )
          if ((o = e[p]) || 0 === o)
            if ("object" === E(o)) x.merge(d, o.nodeType ? [o] : o);
            else if (xe.test(o)) {
              for (
                s = s || f.appendChild(t.createElement("div")),
                  a = (ge.exec(o) || ["", ""])[1].toLowerCase(),
                  c = ye[a] || ye._default,
                  s.innerHTML = c[1] + x.htmlPrefilter(o) + c[2],
                  u = c[0];
                u--;

              )
                s = s.lastChild;
              x.merge(d, s.childNodes), ((s = f.firstChild).textContent = "");
            } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; (o = d[p++]); )
          if (r && x.inArray(o, r) > -1) i && i.push(o);
          else if (((l = ae(o)), (s = be(f.appendChild(o), "script")), l && _e(s), n))
            for (u = 0; (o = s[u++]); ) ve.test(o.type || "") && n.push(o);
        return f;
      }
      (we = s.createDocumentFragment().appendChild(s.createElement("div"))),
        (Ee = s.createElement("input")).setAttribute("type", "radio"),
        Ee.setAttribute("checked", "checked"),
        Ee.setAttribute("name", "t"),
        we.appendChild(Ee),
        (v.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (we.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue);
      var Te = /^key/,
        Le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ae = /^([^.]*)(?:\.(.+)|)/;
      function Ce() {
        return !0;
      }
      function ke() {
        return !1;
      }
      function De(e, t) {
        return (
          (e ===
            (function () {
              try {
                return s.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Oe(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Oe(e, a, n, r, t[a], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = ke;
        else if (!i) return e;
        return (
          1 === o &&
            ((s = i),
            ((i = function (e) {
              return x().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = x.guid++))),
          e.each(function () {
            x.event.add(this, t, i, r, n);
          })
        );
      }
      function Ne(e, t, n) {
        n
          ? (J.set(e, t, !1),
            x.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length) (x.event.special[t] || {}).delegateType && e.stopPropagation();
                  else if (
                    ((o = c.call(arguments)),
                    J.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : (i = {}),
                    o !== i)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                } else
                  o.length &&
                    (J.set(this, t, {
                      value: x.event.trigger(x.extend(o[0], x.Event.prototype), o.slice(1), this),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(e, t) && x.event.add(e, t, Ce);
      }
      (x.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            s,
            a,
            c,
            l,
            u,
            f,
            d,
            p,
            h,
            m,
            g = J.get(e);
          if (g)
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && x.find.matchesSelector(se, i),
                n.guid || (n.guid = x.guid++),
                (c = g.events) || (c = g.events = {}),
                (s = g.handle) ||
                  (s = g.handle =
                    function (t) {
                      return void 0 !== x && x.event.triggered !== t.type
                        ? x.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                l = (t = (t || "").match(R) || [""]).length;
              l--;

            )
              (p = m = (a = Ae.exec(t[l]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                p &&
                  ((f = x.event.special[p] || {}),
                  (p = (i ? f.delegateType : f.bindType) || p),
                  (f = x.event.special[p] || {}),
                  (u = x.extend(
                    {
                      type: p,
                      origType: m,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && x.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o,
                  )),
                  (d = c[p]) ||
                    (((d = c[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                      (e.addEventListener && e.addEventListener(p, s))),
                  f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                  i ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (x.event.global[p] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            s,
            a,
            c,
            l,
            u,
            f,
            d,
            p,
            h,
            m,
            g = J.hasData(e) && J.get(e);
          if (g && (c = g.events)) {
            for (l = (t = (t || "").match(R) || [""]).length; l--; )
              if (
                ((p = m = (a = Ae.exec(t[l]) || [])[1]), (h = (a[2] || "").split(".").sort()), p)
              ) {
                for (
                  f = x.event.special[p] || {},
                    d = c[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    s = o = d.length;
                  o--;

                )
                  (u = d[o]),
                    (!i && m !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (r && r !== u.selector && ("**" !== r || !u.selector)) ||
                      (d.splice(o, 1),
                      u.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, u));
                s &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                    x.removeEvent(e, p, g.handle),
                  delete c[p]);
              } else for (p in c) x.event.remove(e, p + t[l], n, r, !0);
            x.isEmptyObject(c) && J.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = x.event.fix(e),
            c = new Array(arguments.length),
            l = (J.get(this, "events") || {})[a.type] || [],
            u = x.event.special[a.type] || {};
          for (c[0] = a, t = 1; t < arguments.length; t++) c[t] = arguments[t];
          if (((a.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, a))) {
            for (
              s = x.event.handlers.call(this, a, l), t = 0;
              (i = s[t++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(
                      i.elem,
                      c,
                    )) &&
                    !1 === (a.result = r) &&
                    (a.preventDefault(), a.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            s,
            a = [],
            c = t.delegateCount,
            l = e.target;
          if (c && l.nodeType && !("click" === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], s = {}, n = 0; n < c; n++)
                  void 0 === s[(i = (r = t[n]).selector + " ")] &&
                    (s[i] = r.needsContext
                      ? x(i, this).index(l) > -1
                      : x.find(i, this, null, [l]).length),
                    s[i] && o.push(r);
                o.length && a.push({ elem: l, handlers: o });
              }
          return (l = this), c < t.length && a.push({ elem: l, handlers: t.slice(c) }), a;
        },
        addProp: function (e, t) {
          Object.defineProperty(x.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: y(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[x.expando] ? e : new x.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return me.test(t.type) && t.click && D(t, "input") && Ne(t, "click", Ce), !1;
            },
            trigger: function (e) {
              var t = this || e;
              return me.test(t.type) && t.click && D(t, "input") && Ne(t, "click"), !0;
            },
            _default: function (e) {
              var t = e.target;
              return (
                (me.test(t.type) && t.click && D(t, "input") && J.get(t, "click")) || D(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (x.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (x.Event = function (e, t) {
          if (!(this instanceof x.Event)) return new x.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ce
                  : ke),
              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && x.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[x.expando] = !0);
        }),
        (x.Event.prototype = {
          constructor: x.Event,
          isDefaultPrevented: ke,
          isPropagationStopped: ke,
          isImmediatePropagationStopped: ke,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ce),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        x.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Te.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Le.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          x.event.addProp,
        ),
        x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          x.event.special[e] = {
            setup: function () {
              return Ne(this, e, De), !1;
            },
            trigger: function () {
              return Ne(this, e), !0;
            },
            delegateType: t,
          };
        }),
        x.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            x.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || x.contains(r, i))) ||
                    ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
                  n
                );
              },
            };
          },
        ),
        x.fn.extend({
          on: function (e, t, n, r) {
            return Oe(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Oe(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                x(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler,
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = ke),
              this.each(function () {
                x.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Ie =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        je = /<script|<style|<link/i,
        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function He(e, t) {
        return (
          (D(e, "table") &&
            D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            x(e).children("tbody")[0]) ||
          e
        );
      }
      function Re(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Me(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Fe(e, t) {
        var n, r, i, o, s, a, c, l;
        if (1 === t.nodeType) {
          if (J.hasData(e) && ((o = J.access(e)), (s = J.set(t, o)), (l = o.events)))
            for (i in (delete s.handle, (s.events = {}), l))
              for (n = 0, r = l[i].length; n < r; n++) x.event.add(t, i, l[i][n]);
          Z.hasData(e) && ((a = Z.access(e)), (c = x.extend({}, a)), Z.set(t, c));
        }
      }
      function We(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && me.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
      }
      function Be(e, t, n, r) {
        t = l.apply([], t);
        var i,
          o,
          s,
          a,
          c,
          u,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          m = y(h);
        if (m || (d > 1 && "string" == typeof h && !v.checkClone && qe.test(h)))
          return e.each(function (i) {
            var o = e.eq(i);
            m && (t[0] = h.call(this, i, o.html())), Be(o, t, n, r);
          });
        if (
          d &&
          ((o = (i = Se(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (a = (s = x.map(be(i, "script"), Re)).length; f < d; f++)
            (c = i),
              f !== p && ((c = x.clone(c, !0, !0)), a && x.merge(s, be(c, "script"))),
              n.call(e[f], c, f);
          if (a)
            for (u = s[s.length - 1].ownerDocument, x.map(s, Me), f = 0; f < a; f++)
              (c = s[f]),
                ve.test(c.type || "") &&
                  !J.access(c, "globalEval") &&
                  x.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? x._evalUrl &&
                      !c.noModule &&
                      x._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") })
                    : w(c.textContent.replace(Pe, ""), c, u));
        }
        return e;
      }
      function ze(e, t, n) {
        for (var r, i = t ? x.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || x.cleanData(be(r)),
            r.parentNode && (n && ae(r) && _e(be(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      x.extend({
        htmlPrefilter: function (e) {
          return e.replace(Ie, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            s,
            a = e.cloneNode(!0),
            c = ae(e);
          if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || x.isXMLDoc(e)))
            for (s = be(a), r = 0, i = (o = be(e)).length; r < i; r++) We(o[r], s[r]);
          if (t)
            if (n)
              for (o = o || be(e), s = s || be(a), r = 0, i = o.length; r < i; r++) Fe(o[r], s[r]);
            else Fe(e, a);
          return (s = be(a, "script")).length > 0 && _e(s, !c && be(e, "script")), a;
        },
        cleanData: function (e) {
          for (var t, n, r, i = x.event.special, o = 0; void 0 !== (n = e[o]); o++)
            if (X(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (r in t.events) i[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
                n[J.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        },
      }),
        x.fn.extend({
          detach: function (e) {
            return ze(this, e, !0);
          },
          remove: function (e) {
            return ze(this, e);
          },
          text: function (e) {
            return V(
              this,
              function (e) {
                return void 0 === e
                  ? x.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length,
            );
          },
          append: function () {
            return Be(this, arguments, function (e) {
              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                He(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Be(this, arguments, function (e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = He(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Be(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Be(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType && (x.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return x.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return V(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !je.test(e) &&
                  !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = x.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (x.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length,
            );
          },
          replaceWith: function () {
            var e = [];
            return Be(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e,
            );
          },
        }),
        x.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            x.fn[e] = function (e) {
              for (var n, r = [], i = x(e), o = i.length - 1, s = 0; s <= o; s++)
                (n = s === o ? this : this.clone(!0)), x(i[s])[t](n), u.apply(r, n.get());
              return this.pushStack(r);
            };
          },
        );
      var Ue = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        Ve = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        $e = new RegExp(oe.join("|"), "i");
      function Qe(e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.style;
        return (
          (n = n || Ve(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = x.style(e, t)),
            !v.pixelBoxStyles() &&
              Ue.test(s) &&
              $e.test(t) &&
              ((r = a.width),
              (i = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = r),
              (a.minWidth = i),
              (a.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function Ke(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (u) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              se.appendChild(l).appendChild(u);
            var e = n.getComputedStyle(u);
            (r = "1%" !== e.top),
              (c = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (a = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (o = 12 === t(u.offsetWidth / 3)),
              se.removeChild(l),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          a,
          c,
          l = s.createElement("div"),
          u = s.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === u.style.backgroundClip),
          x.extend(v, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), c;
            },
            scrollboxSize: function () {
              return e(), o;
            },
          }));
      })();
      var Ye = ["Webkit", "Moz", "ms"],
        Xe = s.createElement("div").style,
        Ge = {};
      function Je(e) {
        var t = x.cssProps[e] || Ge[e];
        return (
          t ||
          (e in Xe
            ? e
            : (Ge[e] =
                (function (e) {
                  for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                    if ((e = Ye[n] + t) in Xe) return e;
                })(e) || e))
        );
      }
      var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };
      function rt(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function it(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          c = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (c += x.css(e, n + oe[s], !0, i)),
            r
              ? ("content" === n && (c -= x.css(e, "padding" + oe[s], !0, i)),
                "margin" !== n && (c -= x.css(e, "border" + oe[s] + "Width", !0, i)))
              : ((c += x.css(e, "padding" + oe[s], !0, i)),
                "padding" !== n
                  ? (c += x.css(e, "border" + oe[s] + "Width", !0, i))
                  : (a += x.css(e, "border" + oe[s] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (c +=
              Math.max(
                0,
                Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - a - 0.5),
              ) || 0),
          c
        );
      }
      function ot(e, t, n) {
        var r = Ve(e),
          i = (!v.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, r),
          o = i,
          s = Qe(e, t, r),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ue.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!v.boxSizingReliable() && i) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === x.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === x.css(e, "boxSizing", !1, r)), (o = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
        );
      }
      function st(e, t, n, r, i) {
        return new st.prototype.init(e, t, n, r, i);
      }
      x.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Qe(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              s,
              a = Y(t),
              c = et.test(t),
              l = e.style;
            if ((c || (t = Je(a)), (s = x.cssHooks[t] || x.cssHooks[a]), void 0 === n))
              return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
            "string" === (o = typeof n) &&
              (i = ie.exec(n)) &&
              i[1] &&
              ((n = fe(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o || c || (n += (i && i[3]) || (x.cssNumber[a] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  (c ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            s,
            a = Y(t);
          return (
            et.test(t) || (t = Je(a)),
            (s = x.cssHooks[t] || x.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = Qe(e, t, r)),
            "normal" === i && t in nt && (i = nt[t]),
            "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
          );
        },
      }),
        x.each(["height", "width"], function (e, t) {
          x.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Ze.test(x.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ot(e, t, r)
                  : ue(e, tt, function () {
                      return ot(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = Ve(e),
                s = !v.scrollboxSize() && "absolute" === o.position,
                a = (s || r) && "border-box" === x.css(e, "boxSizing", !1, o),
                c = r ? it(e, t, r, a, o) : 0;
              return (
                a &&
                  s &&
                  (c -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      it(e, t, "border", !1, o) -
                      0.5,
                  )),
                c &&
                  (i = ie.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = x.css(e, t))),
                rt(0, n, c)
              );
            },
          };
        }),
        (x.cssHooks.marginLeft = Ke(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Qe(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  ue(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        x.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (x.cssHooks[e + t] = {
            expand: function (n) {
              for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (x.cssHooks[e + t].set = rt);
        }),
        x.fn.extend({
          css: function (e, t) {
            return V(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (r = Ve(e), i = t.length; s < i; s++) o[t[s]] = x.css(e, t[s], !1, r);
                  return o;
                }
                return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
              },
              e,
              t,
              arguments.length > 1,
            );
          },
        }),
        (x.Tween = st),
        (st.prototype = {
          constructor: st,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || x.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (x.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = st.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    x.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration,
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step && this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : st.propHooks._default.set(this),
              this
            );
          },
        }),
        (st.prototype.init.prototype = st.prototype),
        (st.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = x.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              x.fx.step[e.prop]
                ? x.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType || (!x.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : x.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (st.propHooks.scrollTop = st.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (x.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (x.fx = st.prototype.init),
        (x.fx.step = {});
      var at,
        ct,
        lt = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      function ft() {
        ct &&
          (!1 === s.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ft)
            : n.setTimeout(ft, x.fx.interval),
          x.fx.tick());
      }
      function dt() {
        return (
          n.setTimeout(function () {
            at = void 0;
          }),
          (at = Date.now())
        );
      }
      function pt(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function ht(e, t, n) {
        for (
          var r, i = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), o = 0, s = i.length;
          o < s;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function mt(e, t, n) {
        var r,
          i,
          o = 0,
          s = mt.prefilters.length,
          a = x.Deferred().always(function () {
            delete c.elem;
          }),
          c = function () {
            if (i) return !1;
            for (
              var t = at || dt(),
                n = Math.max(0, l.startTime + l.duration - t),
                r = 1 - (n / l.duration || 0),
                o = 0,
                s = l.tweens.length;
              o < s;
              o++
            )
              l.tweens[o].run(r);
            return (
              a.notifyWith(e, [l, r, n]),
              r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l]), !1)
            );
          },
          l = a.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: at || dt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
              return l.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? l.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) l.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
                  : a.rejectWith(e, [l, t]),
                this
              );
            },
          }),
          u = l.props;
        for (
          !(function (e, t) {
            var n, r, i, o, s;
            for (n in e)
              if (
                ((i = t[(r = Y(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (s = x.cssHooks[r]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(u, l.opts.specialEasing);
          o < s;
          o++
        )
          if ((r = mt.prefilters[o].call(l, e, u, l.opts)))
            return y(r.stop) && (x._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return (
          x.map(u, ht, l),
          y(l.opts.start) && l.opts.start.call(e, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          x.fx.timer(x.extend(c, { elem: e, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (x.Animation = x.extend(mt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return fe(n.elem, e, ie.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          y(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]), (mt.tweeners[n] = mt.tweeners[n] || []), mt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              c,
              l,
              u,
              f = "width" in t || "height" in t,
              d = this,
              p = {},
              h = e.style,
              m = e.nodeType && le(e),
              g = J.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (s = x._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              d.always(function () {
                d.always(function () {
                  s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), lt.test(i))) {
                if ((delete t[r], (o = o || "toggle" === i), i === (m ? "hide" : "show"))) {
                  if ("show" !== i || !g || void 0 === g[r]) continue;
                  m = !0;
                }
                p[r] = (g && g[r]) || x.style(e, r);
              }
            if ((c = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = g && g.display) && (l = J.get(e, "display")),
                "none" === (u = x.css(e, "display")) &&
                  (l
                    ? (u = l)
                    : (he([e], !0),
                      (l = e.style.display || l),
                      (u = x.css(e, "display")),
                      he([e]))),
                ("inline" === u || ("inline-block" === u && null != l)) &&
                  "none" === x.css(e, "float") &&
                  (c ||
                    (d.done(function () {
                      h.display = l;
                    }),
                    null == l && ((u = h.display), (l = "none" === u ? "" : u))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                d.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (c = !1),
              p))
                c ||
                  (g
                    ? "hidden" in g && (m = g.hidden)
                    : (g = J.access(e, "fxshow", { display: l })),
                  o && (g.hidden = !m),
                  m && he([e], !0),
                  d.done(function () {
                    for (r in (m || he([e]), J.remove(e, "fxshow"), p)) x.style(e, r, p[r]);
                  })),
                  (c = ht(m ? g[r] : 0, r, d)),
                  r in g || ((g[r] = c.start), m && ((c.end = c.start), (c.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
        },
      })),
        (x.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? x.extend({}, e)
              : {
                  complete: n || (!n && t) || (y(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !y(t) && t),
                };
          return (
            x.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in x.fx.speeds
                  ? (r.duration = x.fx.speeds[r.duration])
                  : (r.duration = x.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              y(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
            }),
            r
          );
        }),
        x.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = x.isEmptyObject(e),
              o = x.speed(t, n, r),
              s = function () {
                var t = mt(this, x.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0);
              };
            return (s.finish = s), i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = x.timers,
                  s = J.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && ut.test(i) && r(s[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || x.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = J.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = x.timers,
                  s = r ? r.length : 0;
                for (
                  n.finish = !0,
                    x.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        x.each(["toggle", "show", "hide"], function (e, t) {
          var n = x.fn[t];
          x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(pt(t, !0), e, r, i);
          };
        }),
        x.each(
          {
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            x.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          },
        ),
        (x.timers = []),
        (x.fx.tick = function () {
          var e,
            t = 0,
            n = x.timers;
          for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || x.fx.stop(), (at = void 0);
        }),
        (x.fx.timer = function (e) {
          x.timers.push(e), x.fx.start();
        }),
        (x.fx.interval = 13),
        (x.fx.start = function () {
          ct || ((ct = !0), ft());
        }),
        (x.fx.stop = function () {
          ct = null;
        }),
        (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (x.fn.delay = function (e, t) {
          return (
            (e = (x.fx && x.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = s.createElement("input"),
            t = s.createElement("select").appendChild(s.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = s.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var gt,
        vt = x.expr.attrHandle;
      x.fn.extend({
        attr: function (e, t) {
          return V(this, x.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            x.removeAttr(this, e);
          });
        },
      }),
        x.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? x.prop(e, t, n)
                : ((1 === o && x.isXMLDoc(e)) ||
                    (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? gt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void x.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = x.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && "radio" === t && D(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(R);
            if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (gt = {
          set: function (e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = vt[t] || x.find.attr;
          vt[t] = function (e, t, r) {
            var i,
              o,
              s = t.toLowerCase();
            return (
              r || ((o = vt[s]), (vt[s] = i), (i = null != n(e, t, r) ? s : null), (vt[s] = o)), i
            );
          };
        });
      var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
      function _t(e) {
        return (e.match(R) || []).join(" ");
      }
      function wt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function Et(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
      }
      x.fn.extend({
        prop: function (e, t) {
          return V(this, x.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[x.propFix[e] || e];
          });
        },
      }),
        x.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && x.isXMLDoc(e)) || ((t = x.propFix[t] || t), (i = x.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = x.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : yt.test(e.nodeName) || (bt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (x.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        x.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            x.propFix[this.toLowerCase()] = this;
          },
        ),
        x.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              c = 0;
            if (y(e))
              return this.each(function (t) {
                x(this).addClass(e.call(this, t, wt(this)));
              });
            if ((t = Et(e)).length)
              for (; (n = this[c++]); )
                if (((i = wt(n)), (r = 1 === n.nodeType && " " + _t(i) + " "))) {
                  for (s = 0; (o = t[s++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (a = _t(r)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              c = 0;
            if (y(e))
              return this.each(function (t) {
                x(this).removeClass(e.call(this, t, wt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Et(e)).length)
              for (; (n = this[c++]); )
                if (((i = wt(n)), (r = 1 === n.nodeType && " " + _t(i) + " "))) {
                  for (s = 0; (o = t[s++]); )
                    for (; r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                  i !== (a = _t(r)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : y(e)
              ? this.each(function (n) {
                  x(this).toggleClass(e.call(this, n, wt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, s;
                  if (r)
                    for (i = 0, o = x(this), s = Et(e); (t = s[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = wt(this)) && J.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e ? "" : J.get(this, "__className__") || "",
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + _t(wt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
          },
        });
      var xt = /\r/g;
      x.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = y(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, x(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = x.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(xt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        x.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = x.find.attr(e, "value");
                return null != t ? t : _t(x.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  c = s ? o + 1 : i.length;
                for (r = o < 0 ? c : s ? o : 0; r < c; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                  ) {
                    if (((t = x(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (var n, r, i = e.options, o = x.makeArray(t), s = i.length; s--; )
                  ((r = i[s]).selected = x.inArray(x.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        x.each(["radio", "checkbox"], function () {
          (x.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return (e.checked = x.inArray(x(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (x.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var St = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
          e.stopPropagation();
        };
      x.extend(x.event, {
        trigger: function (e, t, r, i) {
          var o,
            a,
            c,
            l,
            u,
            f,
            d,
            p,
            m = [r || s],
            g = h.call(e, "type") ? e.type : e,
            v = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = p = c = r = r || s),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !St.test(g + x.event.triggered) &&
              (g.indexOf(".") > -1 && ((v = g.split(".")), (g = v.shift()), v.sort()),
              (u = g.indexOf(":") < 0 && "on" + g),
              ((e = e[x.expando] ? e : new x.Event(g, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : x.makeArray(t, [e])),
              (d = x.event.special[g] || {}),
              i || !d.trigger || !1 !== d.trigger.apply(r, t)))
          ) {
            if (!i && !d.noBubble && !b(r)) {
              for (
                l = d.delegateType || g, St.test(l + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                m.push(a), (c = a);
              c === (r.ownerDocument || s) && m.push(c.defaultView || c.parentWindow || n);
            }
            for (o = 0; (a = m[o++]) && !e.isPropagationStopped(); )
              (p = a),
                (e.type = o > 1 ? l : d.bindType || g),
                (f = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && f.apply(a, t),
                (f = u && a[u]) &&
                  f.apply &&
                  X(a) &&
                  ((e.result = f.apply(a, t)), !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              i ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(m.pop(), t)) ||
                !X(r) ||
                (u &&
                  y(r[g]) &&
                  !b(r) &&
                  ((c = r[u]) && (r[u] = null),
                  (x.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, Tt),
                  r[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, Tt),
                  (x.event.triggered = void 0),
                  c && (r[u] = c))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
          x.event.trigger(r, null, t);
        },
      }),
        x.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              x.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              x.event.simulate(t, e.target, x.event.fix(e));
            };
            x.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this,
                  i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this,
                  i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
              },
            };
          });
      var Lt = n.location,
        At = Date.now(),
        Ct = /\?/;
      x.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) || x.error("Invalid XML: " + e), t
        );
      };
      var kt = /\[\]$/,
        Dt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
      function It(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          x.each(t, function (t, i) {
            n || kt.test(e)
              ? r(e, i)
              : It(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
          });
        else if (n || "object" !== E(t)) r(e, t);
        else for (i in t) It(e + "[" + i + "]", t[i], n, r);
      }
      (x.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = y(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
          x.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) It(n, e[n], t, i);
        return r.join("&");
      }),
        x.fn.extend({
          serialize: function () {
            return x.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = x.prop(this, "elements");
              return e ? x.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !x(this).is(":disabled") &&
                  Nt.test(this.nodeName) &&
                  !Ot.test(e) &&
                  (this.checked || !me.test(e))
                );
              })
              .map(function (e, t) {
                var n = x(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? x.map(n, function (e) {
                      return { name: t.name, value: e.replace(Dt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Dt, "\r\n") };
              })
              .get();
          },
        });
      var jt = /%20/g,
        qt = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        Ft = {},
        Wt = {},
        Bt = "*/".concat("*"),
        zt = s.createElement("a");
      function Ut(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(R) || [];
          if (y(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Vt(e, t, n, r) {
        var i = {},
          o = e === Wt;
        function s(a) {
          var c;
          return (
            (i[a] = !0),
            x.each(e[a] || [], function (e, a) {
              var l = a(t, n, r);
              return "string" != typeof l || o || i[l]
                ? o
                  ? !(c = l)
                  : void 0
                : (t.dataTypes.unshift(l), s(l), !1);
            }),
            c
          );
        }
        return s(t.dataTypes[0]) || (!i["*"] && s("*"));
      }
      function $t(e, t) {
        var n,
          r,
          i = x.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r), e;
      }
      (zt.href = Lt.href),
        x.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Lt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Bt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": x.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? $t($t(e, x.ajaxSettings), t) : $t(x.ajaxSettings, e);
          },
          ajaxPrefilter: Ut(Ft),
          ajaxTransport: Ut(Wt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              a,
              c,
              l,
              u,
              f,
              d,
              p,
              h = x.ajaxSetup({}, t),
              m = h.context || h,
              g = h.context && (m.nodeType || m.jquery) ? x(m) : x.event,
              v = x.Deferred(),
              y = x.Callbacks("once memory"),
              b = h.statusCode || {},
              _ = {},
              w = {},
              E = "canceled",
              S = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!a)
                      for (a = {}; (t = Ht.exec(o)); )
                        a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(
                          t[2],
                        );
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return u ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == u && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (_[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == u && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (u) S.always(e[S.status]);
                    else for (t in e) b[t] = [b[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || E;
                  return r && r.abort(t), T(0, t), this;
                },
              };
            if (
              (v.promise(S),
              (h.url = ((e || h.url || Lt.href) + "").replace(Mt, Lt.protocol + "//")),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""]),
              null == h.crossDomain)
            ) {
              l = s.createElement("a");
              try {
                (l.href = h.url),
                  (l.href = l.href),
                  (h.crossDomain = zt.protocol + "//" + zt.host != l.protocol + "//" + l.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = x.param(h.data, h.traditional)),
              Vt(Ft, h, t, S),
              u)
            )
              return S;
            for (d in ((f = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Rt.test(h.type)),
            (i = h.url.replace(qt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                (h.data = h.data.replace(jt, "+"))
              : ((p = h.url.slice(i.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((i += (Ct.test(i) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((i = i.replace(Pt, "$1")), (p = (Ct.test(i) ? "&" : "?") + "_=" + At++ + p)),
                (h.url = i + p)),
            h.ifModified &&
              (x.lastModified[i] && S.setRequestHeader("If-Modified-Since", x.lastModified[i]),
              x.etag[i] && S.setRequestHeader("If-None-Match", x.etag[i])),
            ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
              S.setRequestHeader("Content-Type", h.contentType),
            S.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                : h.accepts["*"],
            ),
            h.headers))
              S.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, S, h) || u)) return S.abort();
            if (
              ((E = "abort"),
              y.add(h.complete),
              S.done(h.success),
              S.fail(h.error),
              (r = Vt(Wt, h, t, S)))
            ) {
              if (((S.readyState = 1), f && g.trigger("ajaxSend", [S, h]), u)) return S;
              h.async &&
                h.timeout > 0 &&
                (c = n.setTimeout(function () {
                  S.abort("timeout");
                }, h.timeout));
              try {
                (u = !1), r.send(_, T);
              } catch (e) {
                if (u) throw e;
                T(-1, e);
              }
            } else T(-1, "No Transport");
            function T(e, t, s, a) {
              var l,
                d,
                p,
                _,
                w,
                E = t;
              u ||
                ((u = !0),
                c && n.clearTimeout(c),
                (r = void 0),
                (o = a || ""),
                (S.readyState = e > 0 ? 4 : 0),
                (l = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (_ = (function (e, t, n) {
                    for (var r, i, o, s, a = e.contents, c = e.dataTypes; "*" === c[0]; )
                      c.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in a)
                        if (a[i] && a[i].test(r)) {
                          c.unshift(i);
                          break;
                        }
                    if (c[0] in n) o = c[0];
                    else {
                      for (i in n) {
                        if (!c[0] || e.converters[i + " " + c[0]]) {
                          o = i;
                          break;
                        }
                        s || (s = i);
                      }
                      o = o || s;
                    }
                    if (o) return o !== c[0] && c.unshift(o), n[o];
                  })(h, S, s)),
                (_ = (function (e, t, n, r) {
                  var i,
                    o,
                    s,
                    a,
                    c,
                    l = {},
                    u = e.dataTypes.slice();
                  if (u[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                  for (o = u.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                      (c = o),
                      (o = u.shift()))
                    )
                      if ("*" === o) o = c;
                      else if ("*" !== c && c !== o) {
                        if (!(s = l[c + " " + o] || l["* " + o]))
                          for (i in l)
                            if (
                              (a = i.split(" "))[1] === o &&
                              (s = l[c + " " + a[0]] || l["* " + a[0]])
                            ) {
                              !0 === s ? (s = l[i]) : !0 !== l[i] && ((o = a[0]), u.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + c + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(h, _, S, l)),
                l
                  ? (h.ifModified &&
                      ((w = S.getResponseHeader("Last-Modified")) && (x.lastModified[i] = w),
                      (w = S.getResponseHeader("etag")) && (x.etag[i] = w)),
                    204 === e || "HEAD" === h.type
                      ? (E = "nocontent")
                      : 304 === e
                      ? (E = "notmodified")
                      : ((E = _.state), (d = _.data), (l = !(p = _.error))))
                  : ((p = E), (!e && E) || ((E = "error"), e < 0 && (e = 0))),
                (S.status = e),
                (S.statusText = (t || E) + ""),
                l ? v.resolveWith(m, [d, E, S]) : v.rejectWith(m, [S, E, p]),
                S.statusCode(b),
                (b = void 0),
                f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [S, h, l ? d : p]),
                y.fireWith(m, [S, E]),
                f &&
                  (g.trigger("ajaxComplete", [S, h]), --x.active || x.event.trigger("ajaxStop")));
            }
            return S;
          },
          getJSON: function (e, t, n) {
            return x.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return x.get(e, void 0, t, "script");
          },
        }),
        x.each(["get", "post"], function (e, t) {
          x[t] = function (e, n, r, i) {
            return (
              y(n) && ((i = i || r), (r = n), (n = void 0)),
              x.ajax(
                x.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  x.isPlainObject(e) && e,
                ),
              )
            );
          };
        }),
        (x._evalUrl = function (e, t) {
          return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              x.globalEval(e, t);
            },
          });
        }),
        x.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (y(e) && (e = e.call(this[0])),
                (t = x(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return y(e)
              ? this.each(function (t) {
                  x(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = x(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = y(e);
            return this.each(function (n) {
              x(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  x(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (x.expr.pseudos.hidden = function (e) {
          return !x.expr.pseudos.visible(e);
        }),
        (x.expr.pseudos.visible = function (e) {
          return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (x.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Qt = { 0: 200, 1223: 204 },
        Kt = x.ajaxSettings.xhr();
      (v.cors = !!Kt && "withCredentials" in Kt),
        (v.ajax = Kt = !!Kt),
        x.ajaxTransport(function (e) {
          var t, r;
          if (v.cors || (Kt && !e.crossDomain))
            return {
              send: function (i, o) {
                var s,
                  a = e.xhr();
                if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  a.setRequestHeader(s, i[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            Qt[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders(),
                          ));
                  };
                }),
                  (a.onload = t()),
                  (r = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = r)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        x.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        x.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return x.globalEval(e), e;
            },
          },
        }),
        x.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        x.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                (t = x("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                    }),
                  )),
                  s.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Yt,
        Xt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
      x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Xt.pop() || x.expando + "_" + At++;
          return (this[e] = !0), e;
        },
      }),
        x.ajaxPrefilter("json jsonp", function (e, t, r) {
          var i,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (Gt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                  Gt.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Gt, "$1" + i))
                : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return s || x.error(i + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                s = arguments;
              }),
              r.always(function () {
                void 0 === o ? x(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(i)),
                  s && y(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Yt = s.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Yt.childNodes.length)),
        (x.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t = s.implementation.createHTMLDocument("")).createElement(
                      "base",
                    )).href = s.location.href),
                    t.head.appendChild(r))
                  : (t = s)),
              (o = !n && []),
              (i = O.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Se([e], t, o)), o && o.length && x(o).remove(), x.merge([], i.childNodes)));
          var r, i, o;
        }),
        (x.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((r = _t(e.slice(a))), (e = e.slice(0, a))),
            y(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
            s.length > 0 &&
              x
                .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments), s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    },
                ),
            this
          );
        }),
        x.each(
          ["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
          function (e, t) {
            x.fn[t] = function (e) {
              return this.on(t, e);
            };
          },
        ),
        (x.expr.pseudos.animated = function (e) {
          return x.grep(x.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (x.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              c,
              l = x.css(e, "position"),
              u = x(e),
              f = {};
            "static" === l && (e.style.position = "relative"),
              (a = u.offset()),
              (o = x.css(e, "top")),
              (c = x.css(e, "left")),
              ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1
                ? ((s = (r = u.position()).top), (i = r.left))
                : ((s = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
              y(t) && (t = t.call(e, n, x.extend({}, a))),
              null != t.top && (f.top = t.top - a.top + s),
              null != t.left && (f.left = t.left - a.left + i),
              "using" in t ? t.using.call(e, f) : u.css(f);
          },
        }),
        x.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    x.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === x.css(r, "position")) t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === x.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = x(e).offset()).top += x.css(e, "borderTopWidth", !0)),
                  (i.left += x.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - x.css(r, "marginTop", !0),
                left: t.left - i.left - x.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && "static" === x.css(e, "position"); )
                e = e.offsetParent;
              return e || se;
            });
          },
        }),
        x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
          var n = "pageYOffset" === t;
          x.fn[e] = function (r) {
            return V(
              this,
              function (e, r, i) {
                var o;
                if ((b(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i))
                  return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
              },
              e,
              r,
              arguments.length,
            );
          };
        }),
        x.each(["top", "left"], function (e, t) {
          x.cssHooks[t] = Ke(v.pixelPosition, function (e, n) {
            if (n) return (n = Qe(e, t)), Ue.test(n) ? x(e).position()[t] + "px" : n;
          });
        }),
        x.each({ Height: "height", Width: "width" }, function (e, t) {
          x.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
            x.fn[r] = function (i, o) {
              var s = arguments.length && (n || "boolean" != typeof i),
                a = n || (!0 === i || !0 === o ? "margin" : "border");
              return V(
                this,
                function (t, n, i) {
                  var o;
                  return b(t)
                    ? 0 === r.indexOf("outer")
                      ? t["inner" + e]
                      : t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        o["scroll" + e],
                        t.body["offset" + e],
                        o["offset" + e],
                        o["client" + e],
                      ))
                    : void 0 === i
                    ? x.css(t, n, a)
                    : x.style(t, n, i, a);
                },
                t,
                s ? i : void 0,
                s,
              );
            };
          });
        }),
        x.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " ",
          ),
          function (e, t) {
            x.fn[t] = function (e, n) {
              return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
          },
        ),
        x.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        x.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
          },
        }),
        (x.proxy = function (e, t) {
          var n, r, i;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (r = c.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, r.concat(c.call(arguments)));
              }).guid = e.guid =
                e.guid || x.guid++),
              i
            );
        }),
        (x.holdReady = function (e) {
          e ? x.readyWait++ : x.ready(!0);
        }),
        (x.isArray = Array.isArray),
        (x.parseJSON = JSON.parse),
        (x.nodeName = D),
        (x.isFunction = y),
        (x.isWindow = b),
        (x.camelCase = Y),
        (x.type = E),
        (x.now = Date.now),
        (x.isNumeric = function (e) {
          var t = x.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        void 0 ===
          (r = function () {
            return x;
          }.apply(t, [])) || (e.exports = r);
      var Jt = n.jQuery,
        Zt = n.$;
      return (
        (x.noConflict = function (e) {
          return n.$ === x && (n.$ = Zt), e && n.jQuery === x && (n.jQuery = Jt), x;
        }),
        i || (n.jQuery = n.$ = x),
        x
      );
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(40);
    r({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
  },
  function (e, t, n) {
    var r = n(52),
      i = n(37),
      o = r("keys");
    e.exports = function (e) {
      return o[e] || (o[e] = i(e));
    };
  },
  function (e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function (e) {
      return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36);
    };
  },
  function (e, t, n) {
    var r = n(74),
      i = n(54).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (e) {
        return r(e, i);
      };
  },
  function (e, t, n) {
    var r = n(3),
      i = /#|\.prototype\./,
      o = function (e, t) {
        var n = a[s(e)];
        return n == l || (n != c && ("function" == typeof t ? r(t) : !!t));
      },
      s = (o.normalize = function (e) {
        return String(e).replace(i, ".").toLowerCase();
      }),
      a = (o.data = {}),
      c = (o.NATIVE = "N"),
      l = (o.POLYFILL = "P");
    e.exports = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      i,
      o = n(109),
      s = n(110),
      a = RegExp.prototype.exec,
      c = String.prototype.replace,
      l = a,
      u =
        ((r = /a/),
        (i = /b*/g),
        a.call(r, "a"),
        a.call(i, "a"),
        0 !== r.lastIndex || 0 !== i.lastIndex),
      f = s.UNSUPPORTED_Y || s.BROKEN_CARET,
      d = void 0 !== /()??/.exec("")[1];
    (u || d || f) &&
      (l = function (e) {
        var t,
          n,
          r,
          i,
          s = this,
          l = f && s.sticky,
          p = o.call(s),
          h = s.source,
          m = 0,
          g = e;
        return (
          l &&
            (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"),
            (g = String(e).slice(s.lastIndex)),
            s.lastIndex > 0 &&
              (!s.multiline || (s.multiline && "\n" !== e[s.lastIndex - 1])) &&
              ((h = "(?: " + h + ")"), (g = " " + g), m++),
            (n = new RegExp("^(?:" + h + ")", p))),
          d && (n = new RegExp("^" + h + "$(?!\\s)", p)),
          u && (t = s.lastIndex),
          (r = a.call(l ? n : s, g)),
          l
            ? r
              ? ((r.input = r.input.slice(m)),
                (r[0] = r[0].slice(m)),
                (r.index = s.lastIndex),
                (s.lastIndex += r[0].length))
              : (s.lastIndex = 0)
            : u && r && (s.lastIndex = s.global ? r.index + r[0].length : t),
          d &&
            r &&
            r.length > 1 &&
            c.call(r[0], n, function () {
              for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      }),
      (e.exports = l);
  },
  function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(28),
      i = n(48),
      o = n(16),
      s = n(13),
      a = n(60),
      c = [].push,
      l = function (e) {
        var t = 1 == e,
          n = 2 == e,
          l = 3 == e,
          u = 4 == e,
          f = 6 == e,
          d = 5 == e || f;
        return function (p, h, m, g) {
          for (
            var v,
              y,
              b = o(p),
              _ = i(b),
              w = r(h, m, 3),
              E = s(_.length),
              x = 0,
              S = g || a,
              T = t ? S(p, E) : n ? S(p, 0) : void 0;
            E > x;
            x++
          )
            if ((d || x in _) && ((y = w((v = _[x]), x, b)), e))
              if (t) T[x] = y;
              else if (y)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return x;
                  case 2:
                    c.call(T, v);
                }
              else if (u) return !1;
          return f ? -1 : l || u ? u : T;
        };
      };
    e.exports = {
      forEach: l(0),
      map: l(1),
      filter: l(2),
      some: l(3),
      every: l(4),
      find: l(5),
      findIndex: l(6),
    };
  },
  function (e, t, n) {
    var r = n(14);
    e.exports =
      Array.isArray ||
      function (e) {
        return "Array" == r(e);
      };
  },
  function (e, t, n) {
    "use strict";
    var r,
      i,
      o,
      s,
      a = n(7),
      c = n(25),
      l = n(1),
      u = n(20),
      f = n(117),
      d = n(15),
      p = n(82),
      h = n(30),
      m = n(83),
      g = n(4),
      v = n(41),
      y = n(62),
      b = n(14),
      _ = n(51),
      w = n(63),
      E = n(64),
      x = n(78),
      S = n(87).set,
      T = n(118),
      L = n(119),
      A = n(120),
      C = n(91),
      k = n(121),
      D = n(19),
      O = n(39),
      N = n(2),
      I = n(65),
      j = N("species"),
      q = "Promise",
      P = D.get,
      H = D.set,
      R = D.getterFor(q),
      M = f,
      F = l.TypeError,
      W = l.document,
      B = l.process,
      z = u("fetch"),
      U = C.f,
      V = U,
      $ = "process" == b(B),
      Q = !!(W && W.createEvent && l.dispatchEvent),
      K = O(q, function () {
        if (!(_(M) !== String(M))) {
          if (66 === I) return !0;
          if (!$ && "function" != typeof PromiseRejectionEvent) return !0;
        }
        if (c && !M.prototype.finally) return !0;
        if (I >= 51 && /native code/.test(M)) return !1;
        var e = M.resolve(1),
          t = function (e) {
            e(
              function () {},
              function () {},
            );
          };
        return ((e.constructor = {})[j] = t), !(e.then(function () {}) instanceof t);
      }),
      Y =
        K ||
        !E(function (e) {
          M.all(e).catch(function () {});
        }),
      X = function (e) {
        var t;
        return !(!g(e) || "function" != typeof (t = e.then)) && t;
      },
      G = function (e, t, n) {
        if (!t.notified) {
          t.notified = !0;
          var r = t.reactions;
          T(function () {
            for (var i = t.value, o = 1 == t.state, s = 0; r.length > s; ) {
              var a,
                c,
                l,
                u = r[s++],
                f = o ? u.ok : u.fail,
                d = u.resolve,
                p = u.reject,
                h = u.domain;
              try {
                f
                  ? (o || (2 === t.rejection && te(e, t), (t.rejection = 1)),
                    !0 === f ? (a = i) : (h && h.enter(), (a = f(i)), h && (h.exit(), (l = !0))),
                    a === u.promise
                      ? p(F("Promise-chain cycle"))
                      : (c = X(a))
                      ? c.call(a, d, p)
                      : d(a))
                  : p(i);
              } catch (e) {
                h && !l && h.exit(), p(e);
              }
            }
            (t.reactions = []), (t.notified = !1), n && !t.rejection && Z(e, t);
          });
        }
      },
      J = function (e, t, n) {
        var r, i;
        Q
          ? (((r = W.createEvent("Event")).promise = t),
            (r.reason = n),
            r.initEvent(e, !1, !0),
            l.dispatchEvent(r))
          : (r = { promise: t, reason: n }),
          (i = l["on" + e])
            ? i(r)
            : "unhandledrejection" === e && A("Unhandled promise rejection", n);
      },
      Z = function (e, t) {
        S.call(l, function () {
          var n,
            r = t.value;
          if (
            ee(t) &&
            ((n = k(function () {
              $ ? B.emit("unhandledRejection", r, e) : J("unhandledrejection", e, r);
            })),
            (t.rejection = $ || ee(t) ? 2 : 1),
            n.error)
          )
            throw n.value;
        });
      },
      ee = function (e) {
        return 1 !== e.rejection && !e.parent;
      },
      te = function (e, t) {
        S.call(l, function () {
          $ ? B.emit("rejectionHandled", e) : J("rejectionhandled", e, t.value);
        });
      },
      ne = function (e, t, n, r) {
        return function (i) {
          e(t, n, i, r);
        };
      },
      re = function (e, t, n, r) {
        t.done || ((t.done = !0), r && (t = r), (t.value = n), (t.state = 2), G(e, t, !0));
      },
      ie = function (e, t, n, r) {
        if (!t.done) {
          (t.done = !0), r && (t = r);
          try {
            if (e === n) throw F("Promise can't be resolved itself");
            var i = X(n);
            i
              ? T(function () {
                  var r = { done: !1 };
                  try {
                    i.call(n, ne(ie, e, r, t), ne(re, e, r, t));
                  } catch (n) {
                    re(e, r, n, t);
                  }
                })
              : ((t.value = n), (t.state = 1), G(e, t, !1));
          } catch (n) {
            re(e, { done: !1 }, n, t);
          }
        }
      };
    K &&
      ((M = function (e) {
        y(this, M, q), v(e), r.call(this);
        var t = P(this);
        try {
          e(ne(ie, this, t), ne(re, this, t));
        } catch (e) {
          re(this, t, e);
        }
      }),
      ((r = function (e) {
        H(this, {
          type: q,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        });
      }).prototype = p(M.prototype, {
        then: function (e, t) {
          var n = R(this),
            r = U(x(this, M));
          return (
            (r.ok = "function" != typeof e || e),
            (r.fail = "function" == typeof t && t),
            (r.domain = $ ? B.domain : void 0),
            (n.parent = !0),
            n.reactions.push(r),
            0 != n.state && G(this, n, !1),
            r.promise
          );
        },
        catch: function (e) {
          return this.then(void 0, e);
        },
      })),
      (i = function () {
        var e = new r(),
          t = P(e);
        (this.promise = e), (this.resolve = ne(ie, e, t)), (this.reject = ne(re, e, t));
      }),
      (C.f = U =
        function (e) {
          return e === M || e === o ? new i(e) : V(e);
        }),
      c ||
        "function" != typeof f ||
        ((s = f.prototype.then),
        d(
          f.prototype,
          "then",
          function (e, t) {
            var n = this;
            return new M(function (e, t) {
              s.call(n, e, t);
            }).then(e, t);
          },
          { unsafe: !0 },
        ),
        "function" == typeof z &&
          a(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function (e) {
                return L(M, z.apply(l, arguments));
              },
            },
          ))),
      a({ global: !0, wrap: !0, forced: K }, { Promise: M }),
      h(M, q, !1, !0),
      m(q),
      (o = u(q)),
      a(
        { target: q, stat: !0, forced: K },
        {
          reject: function (e) {
            var t = U(this);
            return t.reject.call(void 0, e), t.promise;
          },
        },
      ),
      a(
        { target: q, stat: !0, forced: c || K },
        {
          resolve: function (e) {
            return L(c && this === o ? M : this, e);
          },
        },
      ),
      a(
        { target: q, stat: !0, forced: Y },
        {
          all: function (e) {
            var t = this,
              n = U(t),
              r = n.resolve,
              i = n.reject,
              o = k(function () {
                var n = v(t.resolve),
                  o = [],
                  s = 0,
                  a = 1;
                w(e, function (e) {
                  var c = s++,
                    l = !1;
                  o.push(void 0),
                    a++,
                    n.call(t, e).then(function (e) {
                      l || ((l = !0), (o[c] = e), --a || r(o));
                    }, i);
                }),
                  --a || r(o);
              });
            return o.error && i(o.value), n.promise;
          },
          race: function (e) {
            var t = this,
              n = U(t),
              r = n.reject,
              i = k(function () {
                var i = v(t.resolve);
                w(e, function (e) {
                  i.call(t, e).then(n.resolve, r);
                });
              });
            return i.error && r(i.value), n.promise;
          },
        },
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(3),
      o = n(43),
      s = n(4),
      a = n(16),
      c = n(13),
      l = n(46),
      u = n(60),
      f = n(32),
      d = n(2),
      p = n(65),
      h = d("isConcatSpreadable"),
      m =
        p >= 51 ||
        !i(function () {
          var e = [];
          return (e[h] = !1), e.concat()[0] !== e;
        }),
      g = f("concat"),
      v = function (e) {
        if (!s(e)) return !1;
        var t = e[h];
        return void 0 !== t ? !!t : o(e);
      };
    r(
      { target: "Array", proto: !0, forced: !m || !g },
      {
        concat: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s = a(this),
            f = u(s, 0),
            d = 0;
          for (t = -1, r = arguments.length; t < r; t++)
            if (((o = -1 === t ? s : arguments[t]), v(o))) {
              if (d + (i = c(o.length)) > 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              for (n = 0; n < i; n++, d++) n in o && l(f, d, o[n]);
            } else {
              if (d >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
              l(f, d++, o);
            }
          return (f.length = d), f;
        },
      },
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(24),
      i = n(9),
      o = n(23);
    e.exports = function (e, t, n) {
      var s = r(t);
      s in e ? i.f(e, s, o(0, n)) : (e[s] = n);
    };
  },
  function (e, t, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({ 1: 2 }, 1);
    t.f = o
      ? function (e) {
          var t = i(this, e);
          return !!t && t.enumerable;
        }
      : r;
  },
  function (e, t, n) {
    var r = n(3),
      i = n(14),
      o = "".split;
    e.exports = r(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == i(e) ? o.call(e, "") : Object(e);
        }
      : Object;
  },
  function (e, t, n) {
    var r = n(1),
      i = n(4),
      o = r.document,
      s = i(o) && i(o.createElement);
    e.exports = function (e) {
      return s ? o.createElement(e) : {};
    };
  },
  function (e, t, n) {
    var r = n(1),
      i = n(12);
    e.exports = function (e, t) {
      try {
        i(r, e, t);
      } catch (n) {
        r[e] = t;
      }
      return t;
    };
  },
  function (e, t, n) {
    var r = n(71),
      i = Function.toString;
    "function" != typeof r.inspectSource &&
      (r.inspectSource = function (e) {
        return i.call(e);
      }),
      (e.exports = r.inspectSource);
  },
  function (e, t, n) {
    var r = n(25),
      i = n(71);
    (e.exports = function (e, t) {
      return i[e] || (i[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.6.4",
      mode: r ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (e, t, n) {
    var r = n(27),
      i = Math.max,
      o = Math.min;
    e.exports = function (e, t) {
      var n = r(e);
      return n < 0 ? i(n + t, 0) : o(n, t);
    };
  },
  function (e, t) {
    e.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (e, t, n) {
    "use strict";
    n(35);
    var r = n(15),
      i = n(3),
      o = n(2),
      s = n(40),
      a = n(12),
      c = o("species"),
      l = !i(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      u = "$0" === "a".replace(/./, "$0"),
      f = o("replace"),
      d = !!/./[f] && "" === /./[f]("a", "$0"),
      p = !i(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      });
    e.exports = function (e, t, n, f) {
      var h = o(e),
        m = !i(function () {
          var t = {};
          return (
            (t[h] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        g =
          m &&
          !i(function () {
            var t = !1,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[c] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[h] = /./[h])),
              (n.exec = function () {
                return (t = !0), null;
              }),
              n[h](""),
              !t
            );
          });
      if (!m || !g || ("replace" === e && (!l || !u || d)) || ("split" === e && !p)) {
        var v = /./[h],
          y = n(
            h,
            ""[e],
            function (e, t, n, r, i) {
              return t.exec === s
                ? m && !i
                  ? { done: !0, value: v.call(t, n, r) }
                  : { done: !0, value: e.call(n, t, r) }
                : { done: !1 };
            },
            { REPLACE_KEEPS_$0: u, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d },
          ),
          b = y[0],
          _ = y[1];
        r(String.prototype, e, b),
          r(
            RegExp.prototype,
            h,
            2 == t
              ? function (e, t) {
                  return _.call(e, this, t);
                }
              : function (e) {
                  return _.call(e, this);
                },
          );
      }
      f && a(RegExp.prototype[h], "sham", !0);
    };
  },
  function (e, t, n) {
    var r = n(3);
    e.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function () {
        return !String(Symbol());
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(79).charAt;
    e.exports = function (e, t, n) {
      return t + (n ? r(e, t).length : 1);
    };
  },
  function (e, t, n) {
    var r = n(14),
      i = n(40);
    e.exports = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var o = n.call(e, t);
        if ("object" != typeof o)
          throw TypeError("RegExp exec method returned something other than an Object or null");
        return o;
      }
      if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
      return i.call(e, t);
    };
  },
  function (e, t, n) {
    var r = n(4),
      i = n(43),
      o = n(2)("species");
    e.exports = function (e, t) {
      var n;
      return (
        i(e) &&
          ("function" != typeof (n = e.constructor) || (n !== Array && !i(n.prototype))
            ? r(n) && null === (n = n[o]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    };
  },
  function (e, t, n) {
    var r = {};
    (r[n(2)("toStringTag")] = "z"), (e.exports = "[object z]" === String(r));
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    };
  },
  function (e, t, n) {
    var r = n(8),
      i = n(84),
      o = n(13),
      s = n(28),
      a = n(85),
      c = n(86),
      l = function (e, t) {
        (this.stopped = e), (this.result = t);
      };
    (e.exports = function (e, t, n, u, f) {
      var d,
        p,
        h,
        m,
        g,
        v,
        y,
        b = s(t, n, u ? 2 : 1);
      if (f) d = e;
      else {
        if ("function" != typeof (p = a(e))) throw TypeError("Target is not iterable");
        if (i(p)) {
          for (h = 0, m = o(e.length); m > h; h++)
            if ((g = u ? b(r((y = e[h]))[0], y[1]) : b(e[h])) && g instanceof l) return g;
          return new l(!1);
        }
        d = p.call(e);
      }
      for (v = d.next; !(y = v.call(d)).done; )
        if ("object" == typeof (g = c(d, b, y.value, u)) && g && g instanceof l) return g;
      return new l(!1);
    }).stop = function (e) {
      return new l(!0, e);
    };
  },
  function (e, t, n) {
    var r = n(2)("iterator"),
      i = !1;
    try {
      var o = 0,
        s = {
          next: function () {
            return { done: !!o++ };
          },
          return: function () {
            i = !0;
          },
        };
      (s[r] = function () {
        return this;
      }),
        Array.from(s, function () {
          throw 2;
        });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !i) return !1;
      var n = !1;
      try {
        var o = {};
        (o[r] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(o);
      } catch (e) {}
      return n;
    };
  },
  function (e, t, n) {
    var r,
      i,
      o = n(1),
      s = n(90),
      a = o.process,
      c = a && a.versions,
      l = c && c.v8;
    l
      ? (i = (r = l.split("."))[0] + r[1])
      : s &&
        (!(r = s.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = s.match(/Chrome\/(\d+)/)) &&
        (i = r[1]),
      (e.exports = i && +i);
  },
  function (e, t, n) {
    "use strict";
    var r = n(17),
      i = n(94),
      o = n(31),
      s = n(19),
      a = n(68),
      c = s.set,
      l = s.getterFor("Array Iterator");
    (e.exports = a(
      Array,
      "Array",
      function (e, t) {
        c(this, { type: "Array Iterator", target: r(e), index: 0, kind: t });
      },
      function () {
        var e = l(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 };
      },
      "values",
    )),
      (o.Arguments = o.Array),
      i("keys"),
      i("values"),
      i("entries");
  },
  function (e, t, n) {
    var r = n(74),
      i = n(54);
    e.exports =
      Object.keys ||
      function (e) {
        return r(e, i);
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(125),
      o = n(96),
      s = n(97),
      a = n(30),
      c = n(12),
      l = n(15),
      u = n(2),
      f = n(25),
      d = n(31),
      p = n(95),
      h = p.IteratorPrototype,
      m = p.BUGGY_SAFARI_ITERATORS,
      g = u("iterator"),
      v = function () {
        return this;
      };
    e.exports = function (e, t, n, u, p, y, b) {
      i(n, t, u);
      var _,
        w,
        E,
        x = function (e) {
          if (e === p && C) return C;
          if (!m && e in L) return L[e];
          switch (e) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        S = t + " Iterator",
        T = !1,
        L = e.prototype,
        A = L[g] || L["@@iterator"] || (p && L[p]),
        C = (!m && A) || x(p),
        k = ("Array" == t && L.entries) || A;
      if (
        (k &&
          ((_ = o(k.call(new e()))),
          h !== Object.prototype &&
            _.next &&
            (f || o(_) === h || (s ? s(_, h) : "function" != typeof _[g] && c(_, g, v)),
            a(_, S, !0, !0),
            f && (d[S] = v))),
        "values" == p &&
          A &&
          "values" !== A.name &&
          ((T = !0),
          (C = function () {
            return A.call(this);
          })),
        (f && !b) || L[g] === C || c(L, g, C),
        (d[t] = C),
        p)
      )
        if (((w = { values: x("values"), keys: y ? C : x("keys"), entries: x("entries") }), b))
          for (E in w) (!m && !T && E in L) || l(L, E, w[E]);
        else r({ target: t, proto: !0, forced: m || T }, w);
      return w;
    };
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    var r = n(10),
      i = n(3),
      o = n(49);
    e.exports =
      !r &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (e, t, n) {
    var r = n(1),
      i = n(50),
      o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    e.exports = o;
  },
  function (e, t, n) {
    var r = n(6),
      i = n(108),
      o = n(22),
      s = n(9);
    e.exports = function (e, t) {
      for (var n = i(t), a = s.f, c = o.f, l = 0; l < n.length; l++) {
        var u = n[l];
        r(e, u) || a(e, u, c(t, u));
      }
    };
  },
  function (e, t, n) {
    var r = n(1);
    e.exports = r;
  },
  function (e, t, n) {
    var r = n(6),
      i = n(17),
      o = n(75).indexOf,
      s = n(26);
    e.exports = function (e, t) {
      var n,
        a = i(e),
        c = 0,
        l = [];
      for (n in a) !r(s, n) && r(a, n) && l.push(n);
      for (; t.length > c; ) r(a, (n = t[c++])) && (~o(l, n) || l.push(n));
      return l;
    };
  },
  function (e, t, n) {
    var r = n(17),
      i = n(13),
      o = n(53),
      s = function (e) {
        return function (t, n, s) {
          var a,
            c = r(t),
            l = i(c.length),
            u = o(s, l);
          if (e && n != n) {
            for (; l > u; ) if ((a = c[u++]) != a) return !0;
          } else for (; l > u; u++) if ((e || u in c) && c[u] === n) return e || u || 0;
          return !e && -1;
        };
      };
    e.exports = { includes: s(!0), indexOf: s(!1) };
  },
  function (e, t, n) {
    "use strict";
    var r = n(56),
      i = n(111),
      o = n(8),
      s = n(18),
      a = n(78),
      c = n(58),
      l = n(13),
      u = n(59),
      f = n(40),
      d = n(3),
      p = [].push,
      h = Math.min,
      m = !d(function () {
        return !RegExp(4294967295, "y");
      });
    r(
      "split",
      2,
      function (e, t, n) {
        var r;
        return (
          (r =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
              ? function (e, n) {
                  var r = String(s(this)),
                    o = void 0 === n ? 4294967295 : n >>> 0;
                  if (0 === o) return [];
                  if (void 0 === e) return [r];
                  if (!i(e)) return t.call(r, e, o);
                  for (
                    var a,
                      c,
                      l,
                      u = [],
                      d =
                        (e.ignoreCase ? "i" : "") +
                        (e.multiline ? "m" : "") +
                        (e.unicode ? "u" : "") +
                        (e.sticky ? "y" : ""),
                      h = 0,
                      m = new RegExp(e.source, d + "g");
                    (a = f.call(m, r)) &&
                    !(
                      (c = m.lastIndex) > h &&
                      (u.push(r.slice(h, a.index)),
                      a.length > 1 && a.index < r.length && p.apply(u, a.slice(1)),
                      (l = a[0].length),
                      (h = c),
                      u.length >= o)
                    );

                  )
                    m.lastIndex === a.index && m.lastIndex++;
                  return (
                    h === r.length ? (!l && m.test("")) || u.push("") : u.push(r.slice(h)),
                    u.length > o ? u.slice(0, o) : u
                  );
                }
              : "0".split(void 0, 0).length
              ? function (e, n) {
                  return void 0 === e && 0 === n ? [] : t.call(this, e, n);
                }
              : t),
          [
            function (t, n) {
              var i = s(this),
                o = null == t ? void 0 : t[e];
              return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n);
            },
            function (e, i) {
              var s = n(r, e, this, i, r !== t);
              if (s.done) return s.value;
              var f = o(e),
                d = String(this),
                p = a(f, RegExp),
                g = f.unicode,
                v =
                  (f.ignoreCase ? "i" : "") +
                  (f.multiline ? "m" : "") +
                  (f.unicode ? "u" : "") +
                  (m ? "y" : "g"),
                y = new p(m ? f : "^(?:" + f.source + ")", v),
                b = void 0 === i ? 4294967295 : i >>> 0;
              if (0 === b) return [];
              if (0 === d.length) return null === u(y, d) ? [d] : [];
              for (var _ = 0, w = 0, E = []; w < d.length; ) {
                y.lastIndex = m ? w : 0;
                var x,
                  S = u(y, m ? d : d.slice(w));
                if (null === S || (x = h(l(y.lastIndex + (m ? 0 : w)), d.length)) === _)
                  w = c(d, w, g);
                else {
                  if ((E.push(d.slice(_, w)), E.length === b)) return E;
                  for (var T = 1; T <= S.length - 1; T++)
                    if ((E.push(S[T]), E.length === b)) return E;
                  w = _ = x;
                }
              }
              return E.push(d.slice(_)), E;
            },
          ]
        );
      },
      !m,
    );
  },
  function (e, t, n) {
    var r = n(57);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (e, t, n) {
    var r = n(8),
      i = n(41),
      o = n(2)("species");
    e.exports = function (e, t) {
      var n,
        s = r(e).constructor;
      return void 0 === s || null == (n = r(s)[o]) ? t : i(n);
    };
  },
  function (e, t, n) {
    var r = n(27),
      i = n(18),
      o = function (e) {
        return function (t, n) {
          var o,
            s,
            a = String(i(t)),
            c = r(n),
            l = a.length;
          return c < 0 || c >= l
            ? e
              ? ""
              : void 0
            : (o = a.charCodeAt(c)) < 55296 ||
              o > 56319 ||
              c + 1 === l ||
              (s = a.charCodeAt(c + 1)) < 56320 ||
              s > 57343
            ? e
              ? a.charAt(c)
              : o
            : e
            ? a.slice(c, c + 2)
            : s - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    e.exports = { codeAt: o(!1), charAt: o(!0) };
  },
  function (e, t) {
    e.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (e, t, n) {
    var r = n(61),
      i = n(14),
      o = n(2)("toStringTag"),
      s =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })(),
        );
    e.exports = r
      ? i
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), o))
            ? n
            : s
            ? i(t)
            : "Object" == (r = i(t)) && "function" == typeof t.callee
            ? "Arguments"
            : r;
        };
  },
  function (e, t, n) {
    var r = n(15);
    e.exports = function (e, t, n) {
      for (var i in t) r(e, i, t[i], n);
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(20),
      i = n(9),
      o = n(2),
      s = n(10),
      a = o("species");
    e.exports = function (e) {
      var t = r(e),
        n = i.f;
      s &&
        t &&
        !t[a] &&
        n(t, a, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (e, t, n) {
    var r = n(2),
      i = n(31),
      o = r("iterator"),
      s = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (i.Array === e || s[o] === e);
    };
  },
  function (e, t, n) {
    var r = n(81),
      i = n(31),
      o = n(2)("iterator");
    e.exports = function (e) {
      if (null != e) return e[o] || e["@@iterator"] || i[r(e)];
    };
  },
  function (e, t, n) {
    var r = n(8);
    e.exports = function (e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var o = e.return;
        throw (void 0 !== o && r(o.call(e)), t);
      }
    };
  },
  function (e, t, n) {
    var r,
      i,
      o,
      s = n(1),
      a = n(3),
      c = n(14),
      l = n(28),
      u = n(88),
      f = n(49),
      d = n(89),
      p = s.location,
      h = s.setImmediate,
      m = s.clearImmediate,
      g = s.process,
      v = s.MessageChannel,
      y = s.Dispatch,
      b = 0,
      _ = {},
      w = function (e) {
        if (_.hasOwnProperty(e)) {
          var t = _[e];
          delete _[e], t();
        }
      },
      E = function (e) {
        return function () {
          w(e);
        };
      },
      x = function (e) {
        w(e.data);
      },
      S = function (e) {
        s.postMessage(e + "", p.protocol + "//" + p.host);
      };
    (h && m) ||
      ((h = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (_[++b] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t);
          }),
          r(b),
          b
        );
      }),
      (m = function (e) {
        delete _[e];
      }),
      "process" == c(g)
        ? (r = function (e) {
            g.nextTick(E(e));
          })
        : y && y.now
        ? (r = function (e) {
            y.now(E(e));
          })
        : v && !d
        ? ((o = (i = new v()).port2), (i.port1.onmessage = x), (r = l(o.postMessage, o, 1)))
        : !s.addEventListener || "function" != typeof postMessage || s.importScripts || a(S)
        ? (r =
            "onreadystatechange" in f("script")
              ? function (e) {
                  u.appendChild(f("script")).onreadystatechange = function () {
                    u.removeChild(this), w(e);
                  };
                }
              : function (e) {
                  setTimeout(E(e), 0);
                })
        : ((r = S), s.addEventListener("message", x, !1))),
      (e.exports = { set: h, clear: m });
  },
  function (e, t, n) {
    var r = n(20);
    e.exports = r("document", "documentElement");
  },
  function (e, t, n) {
    var r = n(90);
    e.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
  },
  function (e, t, n) {
    var r = n(20);
    e.exports = r("navigator", "userAgent") || "";
  },
  function (e, t, n) {
    "use strict";
    var r = n(41),
      i = function (e) {
        var t, n;
        (this.promise = new e(function (e, r) {
          if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
          (t = e), (n = r);
        })),
          (this.resolve = r(t)),
          (this.reject = r(n));
      };
    e.exports.f = function (e) {
      return new i(e);
    };
  },
  function (e, t, n) {
    var r = n(73),
      i = n(6),
      o = n(93),
      s = n(9).f;
    e.exports = function (e) {
      var t = r.Symbol || (r.Symbol = {});
      i(t, e) || s(t, e, { value: o.f(e) });
    };
  },
  function (e, t, n) {
    var r = n(2);
    t.f = r;
  },
  function (e, t, n) {
    var r = n(2),
      i = n(33),
      o = n(9),
      s = r("unscopables"),
      a = Array.prototype;
    null == a[s] && o.f(a, s, { configurable: !0, value: i(null) }),
      (e.exports = function (e) {
        a[s][e] = !0;
      });
  },
  function (e, t, n) {
    "use strict";
    var r,
      i,
      o,
      s = n(96),
      a = n(12),
      c = n(6),
      l = n(2),
      u = n(25),
      f = l("iterator"),
      d = !1;
    [].keys &&
      ("next" in (o = [].keys()) ? (i = s(s(o))) !== Object.prototype && (r = i) : (d = !0)),
      null == r && (r = {}),
      u ||
        c(r, f) ||
        a(r, f, function () {
          return this;
        }),
      (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: d });
  },
  function (e, t, n) {
    var r = n(6),
      i = n(16),
      o = n(36),
      s = n(126),
      a = o("IE_PROTO"),
      c = Object.prototype;
    e.exports = s
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = i(e)),
            r(e, a)
              ? e[a]
              : "function" == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? c
              : null
          );
        };
  },
  function (e, t, n) {
    var r = n(8),
      i = n(127);
    e.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, o) {
              return r(n), i(o), t ? e.call(n, o) : (n.__proto__ = o), n;
            };
          })()
        : void 0);
  },
  function (e, t, n) {
    "use strict";
    var r = n(79).charAt,
      i = n(19),
      o = n(68),
      s = i.set,
      a = i.getterFor("String Iterator");
    o(
      String,
      "String",
      function (e) {
        s(this, { type: "String Iterator", string: String(e), index: 0 });
      },
      function () {
        var e,
          t = a(this),
          n = t.string,
          i = t.index;
        return i >= n.length
          ? { value: void 0, done: !0 }
          : ((e = r(n, i)), (t.index += e.length), { value: e, done: !1 });
      },
    );
  },
  function (e, t, n) {
    var r = n(1),
      i = n(80),
      o = n(66),
      s = n(12),
      a = n(2),
      c = a("iterator"),
      l = a("toStringTag"),
      u = o.values;
    for (var f in i) {
      var d = r[f],
        p = d && d.prototype;
      if (p) {
        if (p[c] !== u)
          try {
            s(p, c, u);
          } catch (e) {
            p[c] = u;
          }
        if ((p[l] || s(p, l, f), i[f]))
          for (var h in o)
            if (p[h] !== o[h])
              try {
                s(p, h, o[h]);
              } catch (e) {
                p[h] = o[h];
              }
      }
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(53),
      o = n(27),
      s = n(13),
      a = n(16),
      c = n(60),
      l = n(46),
      u = n(32),
      f = n(21),
      d = u("splice"),
      p = f("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      h = Math.max,
      m = Math.min;
    r(
      { target: "Array", proto: !0, forced: !d || !p },
      {
        splice: function (e, t) {
          var n,
            r,
            u,
            f,
            d,
            p,
            g = a(this),
            v = s(g.length),
            y = i(e, v),
            b = arguments.length;
          if (
            (0 === b
              ? (n = r = 0)
              : 1 === b
              ? ((n = 0), (r = v - y))
              : ((n = b - 2), (r = m(h(o(t), 0), v - y))),
            v + n - r > 9007199254740991)
          )
            throw TypeError("Maximum allowed length exceeded");
          for (u = c(g, r), f = 0; f < r; f++) (d = y + f) in g && l(u, f, g[d]);
          if (((u.length = r), n < r)) {
            for (f = y; f < v - r; f++) (p = f + n), (d = f + r) in g ? (g[p] = g[d]) : delete g[p];
            for (f = v; f > v - r + n; f--) delete g[f - 1];
          } else if (n > r)
            for (f = v - r; f > y; f--)
              (p = f + n - 1), (d = f + r - 1) in g ? (g[p] = g[d]) : delete g[p];
          for (f = 0; f < n; f++) g[f + y] = arguments[f + 2];
          return (g.length = v - r + n), u;
        },
      },
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(75).includes,
      o = n(94);
    r(
      { target: "Array", proto: !0, forced: !n(21)("indexOf", { ACCESSORS: !0, 1: 0 }) },
      {
        includes: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    ),
      o("includes");
  },
  function (e, t, n) {
    var r = n(26),
      i = n(4),
      o = n(6),
      s = n(9).f,
      a = n(37),
      c = n(135),
      l = a("meta"),
      u = 0,
      f =
        Object.isExtensible ||
        function () {
          return !0;
        },
      d = function (e) {
        s(e, l, { value: { objectID: "O" + ++u, weakData: {} } });
      },
      p = (e.exports = {
        REQUIRED: !1,
        fastKey: function (e, t) {
          if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!o(e, l)) {
            if (!f(e)) return "F";
            if (!t) return "E";
            d(e);
          }
          return e[l].objectID;
        },
        getWeakData: function (e, t) {
          if (!o(e, l)) {
            if (!f(e)) return !0;
            if (!t) return !1;
            d(e);
          }
          return e[l].weakData;
        },
        onFreeze: function (e) {
          return c && p.REQUIRED && f(e) && !o(e, l) && d(e), e;
        },
      });
    r[l] = !0;
  },
  function (e, t, n) {
    var r = n(4),
      i = n(97);
    e.exports = function (e, t, n) {
      var o, s;
      return (
        i &&
          "function" == typeof (o = t.constructor) &&
          o !== n &&
          r((s = o.prototype)) &&
          s !== n.prototype &&
          i(e, s),
        e
      );
    };
  },
  function (e, t, n) {
    var r, i;
    (i = this),
      void 0 ===
        (r = function () {
          return (i.svg4everybody = (function () {
            /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
            function e(e, t, n) {
              if (n) {
                var r = document.createDocumentFragment(),
                  i = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
                i && t.setAttribute("viewBox", i);
                for (var o = n.cloneNode(!0); o.childNodes.length; ) r.appendChild(o.firstChild);
                e.appendChild(r);
              }
            }
            function t(t) {
              (t.onreadystatechange = function () {
                if (4 === t.readyState) {
                  var n = t._cachedDocument;
                  n ||
                    (((n = t._cachedDocument =
                      document.implementation.createHTMLDocument("")).body.innerHTML =
                      t.responseText),
                    (t._cachedTarget = {})),
                    t._embeds.splice(0).map(function (r) {
                      var i = t._cachedTarget[r.id];
                      i || (i = t._cachedTarget[r.id] = n.getElementById(r.id)),
                        e(r.parent, r.svg, i);
                    });
                }
              }),
                t.onreadystatechange();
            }
            function n(e) {
              for (var t = e; "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode); );
              return t;
            }
            return function (r) {
              var i,
                o = Object(r),
                s = window.top !== window.self;
              i =
                "polyfill" in o
                  ? o.polyfill
                  : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) ||
                    (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 ||
                    (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 ||
                    (/\bEdge\/.(\d+)\b/.test(navigator.userAgent) && s);
              var a = {},
                c = window.requestAnimationFrame || setTimeout,
                l = document.getElementsByTagName("use"),
                u = 0;
              i &&
                (function r() {
                  for (var s = 0; s < l.length; ) {
                    var f = l[s],
                      d = f.parentNode,
                      p = n(d),
                      h = f.getAttribute("xlink:href") || f.getAttribute("href");
                    if ((!h && o.attributeName && (h = f.getAttribute(o.attributeName)), p && h)) {
                      if (i)
                        if (!o.validate || o.validate(h, p, f)) {
                          d.removeChild(f);
                          var m = h.split("#"),
                            g = m.shift(),
                            v = m.join("#");
                          if (g.length) {
                            var y = a[g];
                            y ||
                              ((y = a[g] = new XMLHttpRequest()).open("GET", g),
                              y.send(),
                              (y._embeds = [])),
                              y._embeds.push({ parent: d, svg: p, id: v }),
                              t(y);
                          } else e(d, p, document.getElementById(v));
                        } else ++s, ++u;
                    } else ++s;
                  }
                  (!l.length || l.length - u > 0) && c(r, 67);
                })();
            };
          })());
        }.apply(t, [])) || (e.exports = r);
  },
  function (e, t, n) {
    "use strict";
    /*! npm.im/object-fit-images 3.2.4 */ var r = "bfred-it:object-fit-images",
      i = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
      o = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image(),
      s = "object-fit" in o.style,
      a = "object-position" in o.style,
      c = "background-size" in o.style,
      l = "string" == typeof o.currentSrc,
      u = o.getAttribute,
      f = o.setAttribute,
      d = !1;
    function p(e, t, n) {
      var r =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
        (t || 1) +
        "' height='" +
        (n || 0) +
        "'%3E%3C/svg%3E";
      u.call(e, "src") !== r && f.call(e, "src", r);
    }
    function h(e, t) {
      e.naturalWidth ? t(e) : setTimeout(h, 100, e, t);
    }
    function m(e) {
      var t = (function (e) {
          for (var t, n = getComputedStyle(e).fontFamily, r = {}; null !== (t = i.exec(n)); )
            r[t[1]] = t[2];
          return r;
        })(e),
        n = e[r];
      if (((t["object-fit"] = t["object-fit"] || "fill"), !n.img)) {
        if ("fill" === t["object-fit"]) return;
        if (!n.skipTest && s && !t["object-position"]) return;
      }
      if (!n.img) {
        (n.img = new Image(e.width, e.height)),
          (n.img.srcset = u.call(e, "data-ofi-srcset") || e.srcset),
          (n.img.src = u.call(e, "data-ofi-src") || e.src),
          f.call(e, "data-ofi-src", e.src),
          e.srcset && f.call(e, "data-ofi-srcset", e.srcset),
          p(e, e.naturalWidth || e.width, e.naturalHeight || e.height),
          e.srcset && (e.srcset = "");
        try {
          !(function (e) {
            var t = {
              get: function (t) {
                return e[r].img[t || "src"];
              },
              set: function (t, n) {
                return (e[r].img[n || "src"] = t), f.call(e, "data-ofi-" + n, t), m(e), t;
              },
            };
            Object.defineProperty(e, "src", t),
              Object.defineProperty(e, "currentSrc", {
                get: function () {
                  return t.get("currentSrc");
                },
              }),
              Object.defineProperty(e, "srcset", {
                get: function () {
                  return t.get("srcset");
                },
                set: function (e) {
                  return t.set(e, "srcset");
                },
              });
          })(e);
        } catch (e) {
          window.console && console.warn("https://bit.ly/ofi-old-browser");
        }
      }
      !(function (e) {
        if (e.srcset && !l && window.picturefill) {
          var t = window.picturefill._;
          (e[t.ns] && e[t.ns].evaled) || t.fillImg(e, { reselect: !0 }),
            e[t.ns].curSrc || ((e[t.ns].supported = !1), t.fillImg(e, { reselect: !0 })),
            (e.currentSrc = e[t.ns].curSrc || e.src);
        }
      })(n.img),
        (e.style.backgroundImage =
          'url("' + (n.img.currentSrc || n.img.src).replace(/"/g, '\\"') + '")'),
        (e.style.backgroundPosition = t["object-position"] || "center"),
        (e.style.backgroundRepeat = "no-repeat"),
        (e.style.backgroundOrigin = "content-box"),
        /scale-down/.test(t["object-fit"])
          ? h(n.img, function () {
              n.img.naturalWidth > e.width || n.img.naturalHeight > e.height
                ? (e.style.backgroundSize = "contain")
                : (e.style.backgroundSize = "auto");
            })
          : (e.style.backgroundSize = t["object-fit"]
              .replace("none", "auto")
              .replace("fill", "100% 100%")),
        h(n.img, function (t) {
          p(e, t.naturalWidth, t.naturalHeight);
        });
    }
    function g(e, t) {
      var n = !d && !e;
      if (((t = t || {}), (e = e || "img"), (a && !t.skipTest) || !c)) return !1;
      "img" === e
        ? (e = document.getElementsByTagName("img"))
        : "string" == typeof e
        ? (e = document.querySelectorAll(e))
        : "length" in e || (e = [e]);
      for (var i = 0; i < e.length; i++) (e[i][r] = e[i][r] || { skipTest: t.skipTest }), m(e[i]);
      n &&
        (document.body.addEventListener(
          "load",
          function (e) {
            "IMG" === e.target.tagName && g(e.target, { skipTest: t.skipTest });
          },
          !0,
        ),
        (d = !0),
        (e = "img")),
        t.watchMQ && window.addEventListener("resize", g.bind(null, e, { skipTest: t.skipTest }));
    }
    (g.supportsObjectFit = s),
      (g.supportsObjectPosition = a),
      (function () {
        function e(e, t) {
          return e[r] && e[r].img && ("src" === t || "srcset" === t) ? e[r].img : e;
        }
        a ||
          ((HTMLImageElement.prototype.getAttribute = function (t) {
            return u.call(e(this, t), t);
          }),
          (HTMLImageElement.prototype.setAttribute = function (t, n) {
            return f.call(e(this, t), t, String(n));
          }));
      })(),
      (e.exports = g);
  },
  function (e, t, n) {
    e.exports = n(148);
  },
  function (e, t, n) {
    var r = n(1),
      i = n(51),
      o = r.WeakMap;
    e.exports = "function" == typeof o && /native code/.test(i(o));
  },
  function (e, t, n) {
    var r = n(20),
      i = n(38),
      o = n(55),
      s = n(8);
    e.exports =
      r("Reflect", "ownKeys") ||
      function (e) {
        var t = i.f(s(e)),
          n = o.f;
        return n ? t.concat(n(e)) : t;
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(8);
    e.exports = function () {
      var e = r(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    function i(e, t) {
      return RegExp(e, t);
    }
    (t.UNSUPPORTED_Y = r(function () {
      var e = i("a", "y");
      return (e.lastIndex = 2), null != e.exec("abcd");
    })),
      (t.BROKEN_CARET = r(function () {
        var e = i("^r", "gy");
        return (e.lastIndex = 2), null != e.exec("str");
      }));
  },
  function (e, t, n) {
    var r = n(4),
      i = n(14),
      o = n(2)("match");
    e.exports = function (e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
    };
  },
  function (e, t, n) {
    /*!
     * Bootstrap v4.4.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    !(function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function c(e) {
        var n = this,
          r = !1;
        return (
          t(this).one(l.TRANSITION_END, function () {
            r = !0;
          }),
          setTimeout(function () {
            r || l.triggerTransitionEnd(n);
          }, e),
          this
        );
      }
      (t = t && t.hasOwnProperty("default") ? t.default : t),
        (n = n && n.hasOwnProperty("default") ? n.default : n);
      var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
          do {
            e += ~~(1e6 * Math.random());
          } while (document.getElementById(e));
          return e;
        },
        getSelectorFromElement: function (e) {
          var t = e.getAttribute("data-target");
          if (!t || "#" === t) {
            var n = e.getAttribute("href");
            t = n && "#" !== n ? n.trim() : "";
          }
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (e) {
          if (!e) return 0;
          var n = t(e).css("transition-duration"),
            r = t(e).css("transition-delay"),
            i = parseFloat(n),
            o = parseFloat(r);
          return i || o
            ? ((n = n.split(",")[0]), (r = r.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(r)))
            : 0;
        },
        reflow: function (e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd: function (e) {
          t(e).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
          return Boolean("transitionend");
        },
        isElement: function (e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig: function (e, t, n) {
          for (var r in n)
            if (Object.prototype.hasOwnProperty.call(n, r)) {
              var i = n[r],
                o = t[r],
                s =
                  o && l.isElement(o)
                    ? "element"
                    : ((a = o),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(i).test(s))
                throw new Error(
                  e.toUpperCase() +
                    ': Option "' +
                    r +
                    '" provided type "' +
                    s +
                    '" but expected type "' +
                    i +
                    '".',
                );
            }
          var a;
        },
        findShadowRoot: function (e) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null;
        },
        jQueryDetection: function () {
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
            );
          var e = t.fn.jquery.split(" ")[0].split(".");
          if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4)
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
            );
        },
      };
      l.jQueryDetection(),
        (t.fn.emulateTransitionEnd = c),
        (t.event.special[l.TRANSITION_END] = {
          bindType: "transitionend",
          delegateType: "transitionend",
          handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
          },
        });
      var u = t.fn.alert,
        f = {
          CLOSE: "close.bs.alert",
          CLOSED: "closed.bs.alert",
          CLICK_DATA_API: "click.bs.alert.data-api",
        },
        d = "alert",
        p = "fade",
        h = "show",
        m = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.close = function (e) {
              var t = this._element;
              e && (t = this._getRootElement(e)),
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.alert"), (this._element = null);
            }),
            (n._getRootElement = function (e) {
              var n = l.getSelectorFromElement(e),
                r = !1;
              return n && (r = document.querySelector(n)), r || (r = t(e).closest("." + d)[0]), r;
            }),
            (n._triggerCloseEvent = function (e) {
              var n = t.Event(f.CLOSE);
              return t(e).trigger(n), n;
            }),
            (n._removeElement = function (e) {
              var n = this;
              if ((t(e).removeClass(h), t(e).hasClass(p))) {
                var r = l.getTransitionDurationFromElement(e);
                t(e)
                  .one(l.TRANSITION_END, function (t) {
                    return n._destroyElement(e, t);
                  })
                  .emulateTransitionEnd(r);
              } else this._destroyElement(e);
            }),
            (n._destroyElement = function (e) {
              t(e).detach().trigger(f.CLOSED).remove();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this),
                  i = r.data("bs.alert");
                i || ((i = new e(this)), r.data("bs.alert", i)), "close" === n && i[n](this);
              });
            }),
            (e._handleDismiss = function (e) {
              return function (t) {
                t && t.preventDefault(), e.close(this);
              };
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
            ]),
            e
          );
        })();
      t(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m())),
        (t.fn.alert = m._jQueryInterface),
        (t.fn.alert.Constructor = m),
        (t.fn.alert.noConflict = function () {
          return (t.fn.alert = u), m._jQueryInterface;
        });
      var g = t.fn.button,
        v = "active",
        y = "btn",
        b = "focus",
        _ = '[data-toggle^="button"]',
        w = '[data-toggle="buttons"]',
        E = '[data-toggle="button"]',
        x = '[data-toggle="buttons"] .btn',
        S = 'input:not([type="hidden"])',
        T = ".active",
        L = ".btn",
        A = {
          CLICK_DATA_API: "click.bs.button.data-api",
          FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api",
          LOAD_DATA_API: "load.bs.button.data-api",
        },
        C = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.toggle = function () {
              var e = !0,
                n = !0,
                r = t(this._element).closest(w)[0];
              if (r) {
                var i = this._element.querySelector(S);
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && this._element.classList.contains(v)) e = !1;
                    else {
                      var o = r.querySelector(T);
                      o && t(o).removeClass(v);
                    }
                  else
                    "checkbox" === i.type
                      ? "LABEL" === this._element.tagName &&
                        i.checked === this._element.classList.contains(v) &&
                        (e = !1)
                      : (e = !1);
                  e && ((i.checked = !this._element.classList.contains(v)), t(i).trigger("change")),
                    i.focus(),
                    (n = !1);
                }
              }
              this._element.hasAttribute("disabled") ||
                this._element.classList.contains("disabled") ||
                (n &&
                  this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)),
                e && t(this._element).toggleClass(v));
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.button"), (this._element = null);
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this).data("bs.button");
                r || ((r = new e(this)), t(this).data("bs.button", r)), "toggle" === n && r[n]();
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
            ]),
            e
          );
        })();
      t(document)
        .on(A.CLICK_DATA_API, _, function (e) {
          var n = e.target;
          if (
            (t(n).hasClass(y) || (n = t(n).closest(L)[0]),
            !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
          )
            e.preventDefault();
          else {
            var r = n.querySelector(S);
            if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled")))
              return void e.preventDefault();
            C._jQueryInterface.call(t(n), "toggle");
          }
        })
        .on(A.FOCUS_BLUR_DATA_API, _, function (e) {
          var n = t(e.target).closest(L)[0];
          t(n).toggleClass(b, /^focus(in)?$/.test(e.type));
        }),
        t(window).on(A.LOAD_DATA_API, function () {
          for (
            var e = [].slice.call(document.querySelectorAll(x)), t = 0, n = e.length;
            t < n;
            t++
          ) {
            var r = e[t],
              i = r.querySelector(S);
            i.checked || i.hasAttribute("checked") ? r.classList.add(v) : r.classList.remove(v);
          }
          for (
            var o = 0, s = (e = [].slice.call(document.querySelectorAll(E))).length;
            o < s;
            o++
          ) {
            var a = e[o];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(v) : a.classList.remove(v);
          }
        }),
        (t.fn.button = C._jQueryInterface),
        (t.fn.button.Constructor = C),
        (t.fn.button.noConflict = function () {
          return (t.fn.button = g), C._jQueryInterface;
        });
      var k = "carousel",
        D = ".bs.carousel",
        O = t.fn[k],
        N = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        I = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean",
        },
        j = "next",
        q = "prev",
        P = "left",
        H = "right",
        R = {
          SLIDE: "slide.bs.carousel",
          SLID: "slid.bs.carousel",
          KEYDOWN: "keydown.bs.carousel",
          MOUSEENTER: "mouseenter.bs.carousel",
          MOUSELEAVE: "mouseleave.bs.carousel",
          TOUCHSTART: "touchstart.bs.carousel",
          TOUCHMOVE: "touchmove.bs.carousel",
          TOUCHEND: "touchend.bs.carousel",
          POINTERDOWN: "pointerdown.bs.carousel",
          POINTERUP: "pointerup.bs.carousel",
          DRAG_START: "dragstart.bs.carousel",
          LOAD_DATA_API: "load.bs.carousel.data-api",
          CLICK_DATA_API: "click.bs.carousel.data-api",
        },
        M = "carousel",
        F = "active",
        W = "slide",
        B = "carousel-item-right",
        z = "carousel-item-left",
        U = "carousel-item-next",
        V = "carousel-item-prev",
        $ = "pointer-event",
        Q = ".active",
        K = ".active.carousel-item",
        Y = ".carousel-item",
        X = ".carousel-item img",
        G = ".carousel-item-next, .carousel-item-prev",
        J = ".carousel-indicators",
        Z = "[data-slide], [data-slide-to]",
        ee = '[data-ride="carousel"]',
        te = { TOUCH: "touch", PEN: "pen" },
        ne = (function () {
          function e(e, t) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this.touchStartX = 0),
              (this.touchDeltaX = 0),
              (this._config = this._getConfig(t)),
              (this._element = e),
              (this._indicatorsElement = this._element.querySelector(J)),
              (this._touchSupported =
                "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
              (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
              this._addEventListeners();
          }
          var n = e.prototype;
          return (
            (n.next = function () {
              this._isSliding || this._slide(j);
            }),
            (n.nextWhenVisible = function () {
              !document.hidden &&
                t(this._element).is(":visible") &&
                "hidden" !== t(this._element).css("visibility") &&
                this.next();
            }),
            (n.prev = function () {
              this._isSliding || this._slide(q);
            }),
            (n.pause = function (e) {
              e || (this._isPaused = !0),
                this._element.querySelector(G) &&
                  (l.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (n.cycle = function (e) {
              e || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
                    this._config.interval,
                  ));
            }),
            (n.to = function (e) {
              var n = this;
              this._activeElement = this._element.querySelector(K);
              var r = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                  t(this._element).one(R.SLID, function () {
                    return n.to(e);
                  });
                else {
                  if (r === e) return this.pause(), void this.cycle();
                  var i = e > r ? j : q;
                  this._slide(i, this._items[e]);
                }
            }),
            (n.dispose = function () {
              t(this._element).off(D),
                t.removeData(this._element, "bs.carousel"),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (n._getConfig = function (e) {
              return (e = a({}, N, {}, e)), l.typeCheckConfig(k, e, I), e;
            }),
            (n._handleSwipe = function () {
              var e = Math.abs(this.touchDeltaX);
              if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                (this.touchDeltaX = 0), t > 0 && this.prev(), t < 0 && this.next();
              }
            }),
            (n._addEventListeners = function () {
              var e = this;
              this._config.keyboard &&
                t(this._element).on(R.KEYDOWN, function (t) {
                  return e._keydown(t);
                }),
                "hover" === this._config.pause &&
                  t(this._element)
                    .on(R.MOUSEENTER, function (t) {
                      return e.pause(t);
                    })
                    .on(R.MOUSELEAVE, function (t) {
                      return e.cycle(t);
                    }),
                this._config.touch && this._addTouchEventListeners();
            }),
            (n._addTouchEventListeners = function () {
              var e = this;
              if (this._touchSupported) {
                var n = function (t) {
                    e._pointerEvent && te[t.originalEvent.pointerType.toUpperCase()]
                      ? (e.touchStartX = t.originalEvent.clientX)
                      : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                  },
                  r = function (t) {
                    e._pointerEvent &&
                      te[t.originalEvent.pointerType.toUpperCase()] &&
                      (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                      e._handleSwipe(),
                      "hover" === e._config.pause &&
                        (e.pause(),
                        e.touchTimeout && clearTimeout(e.touchTimeout),
                        (e.touchTimeout = setTimeout(function (t) {
                          return e.cycle(t);
                        }, 500 + e._config.interval)));
                  };
                t(this._element.querySelectorAll(X)).on(R.DRAG_START, function (e) {
                  return e.preventDefault();
                }),
                  this._pointerEvent
                    ? (t(this._element).on(R.POINTERDOWN, function (e) {
                        return n(e);
                      }),
                      t(this._element).on(R.POINTERUP, function (e) {
                        return r(e);
                      }),
                      this._element.classList.add($))
                    : (t(this._element).on(R.TOUCHSTART, function (e) {
                        return n(e);
                      }),
                      t(this._element).on(R.TOUCHMOVE, function (t) {
                        return (function (t) {
                          t.originalEvent.touches && t.originalEvent.touches.length > 1
                            ? (e.touchDeltaX = 0)
                            : (e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX);
                        })(t);
                      }),
                      t(this._element).on(R.TOUCHEND, function (e) {
                        return r(e);
                      }));
              }
            }),
            (n._keydown = function (e) {
              if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                  case 37:
                    e.preventDefault(), this.prev();
                    break;
                  case 39:
                    e.preventDefault(), this.next();
                }
            }),
            (n._getItemIndex = function (e) {
              return (
                (this._items =
                  e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(Y)) : []),
                this._items.indexOf(e)
              );
            }),
            (n._getItemByDirection = function (e, t) {
              var n = e === j,
                r = e === q,
                i = this._getItemIndex(t),
                o = this._items.length - 1;
              if (((r && 0 === i) || (n && i === o)) && !this._config.wrap) return t;
              var s = (i + (e === q ? -1 : 1)) % this._items.length;
              return -1 === s ? this._items[this._items.length - 1] : this._items[s];
            }),
            (n._triggerSlideEvent = function (e, n) {
              var r = this._getItemIndex(e),
                i = this._getItemIndex(this._element.querySelector(K)),
                o = t.Event(R.SLIDE, { relatedTarget: e, direction: n, from: i, to: r });
              return t(this._element).trigger(o), o;
            }),
            (n._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                var n = [].slice.call(this._indicatorsElement.querySelectorAll(Q));
                t(n).removeClass(F);
                var r = this._indicatorsElement.children[this._getItemIndex(e)];
                r && t(r).addClass(F);
              }
            }),
            (n._slide = function (e, n) {
              var r,
                i,
                o,
                s = this,
                a = this._element.querySelector(K),
                c = this._getItemIndex(a),
                u = n || (a && this._getItemByDirection(e, a)),
                f = this._getItemIndex(u),
                d = Boolean(this._interval);
              if (
                (e === j ? ((r = z), (i = U), (o = P)) : ((r = B), (i = V), (o = H)),
                u && t(u).hasClass(F))
              )
                this._isSliding = !1;
              else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
                (this._isSliding = !0), d && this.pause(), this._setActiveIndicatorElement(u);
                var p = t.Event(R.SLID, { relatedTarget: u, direction: o, from: c, to: f });
                if (t(this._element).hasClass(W)) {
                  t(u).addClass(i), l.reflow(u), t(a).addClass(r), t(u).addClass(r);
                  var h = parseInt(u.getAttribute("data-interval"), 10);
                  h
                    ? ((this._config.defaultInterval =
                        this._config.defaultInterval || this._config.interval),
                      (this._config.interval = h))
                    : (this._config.interval =
                        this._config.defaultInterval || this._config.interval);
                  var m = l.getTransitionDurationFromElement(a);
                  t(a)
                    .one(l.TRANSITION_END, function () {
                      t(u)
                        .removeClass(r + " " + i)
                        .addClass(F),
                        t(a).removeClass(F + " " + i + " " + r),
                        (s._isSliding = !1),
                        setTimeout(function () {
                          return t(s._element).trigger(p);
                        }, 0);
                    })
                    .emulateTransitionEnd(m);
                } else
                  t(a).removeClass(F),
                    t(u).addClass(F),
                    (this._isSliding = !1),
                    t(this._element).trigger(p);
                d && this.cycle();
              }
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this).data("bs.carousel"),
                  i = a({}, N, {}, t(this).data());
                "object" == typeof n && (i = a({}, i, {}, n));
                var o = "string" == typeof n ? n : i.slide;
                if (
                  (r || ((r = new e(this, i)), t(this).data("bs.carousel", r)),
                  "number" == typeof n)
                )
                  r.to(n);
                else if ("string" == typeof o) {
                  if (void 0 === r[o]) throw new TypeError('No method named "' + o + '"');
                  r[o]();
                } else i.interval && i.ride && (r.pause(), r.cycle());
              });
            }),
            (e._dataApiClickHandler = function (n) {
              var r = l.getSelectorFromElement(this);
              if (r) {
                var i = t(r)[0];
                if (i && t(i).hasClass(M)) {
                  var o = a({}, t(i).data(), {}, t(this).data()),
                    s = this.getAttribute("data-slide-to");
                  s && (o.interval = !1),
                    e._jQueryInterface.call(t(i), o),
                    s && t(i).data("bs.carousel").to(s),
                    n.preventDefault();
                }
              }
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return N;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(R.CLICK_DATA_API, Z, ne._dataApiClickHandler),
        t(window).on(R.LOAD_DATA_API, function () {
          for (
            var e = [].slice.call(document.querySelectorAll(ee)), n = 0, r = e.length;
            n < r;
            n++
          ) {
            var i = t(e[n]);
            ne._jQueryInterface.call(i, i.data());
          }
        }),
        (t.fn[k] = ne._jQueryInterface),
        (t.fn[k].Constructor = ne),
        (t.fn[k].noConflict = function () {
          return (t.fn[k] = O), ne._jQueryInterface;
        });
      var re = "collapse",
        ie = t.fn[re],
        oe = { toggle: !0, parent: "" },
        se = { toggle: "boolean", parent: "(string|element)" },
        ae = {
          SHOW: "show.bs.collapse",
          SHOWN: "shown.bs.collapse",
          HIDE: "hide.bs.collapse",
          HIDDEN: "hidden.bs.collapse",
          CLICK_DATA_API: "click.bs.collapse.data-api",
        },
        ce = "show",
        le = "collapse",
        ue = "collapsing",
        fe = "collapsed",
        de = "width",
        pe = "height",
        he = ".show, .collapsing",
        me = '[data-toggle="collapse"]',
        ge = (function () {
          function e(e, t) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(t)),
              (this._triggerArray = [].slice.call(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    e.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    e.id +
                    '"]',
                ),
              ));
            for (
              var n = [].slice.call(document.querySelectorAll(me)), r = 0, i = n.length;
              r < i;
              r++
            ) {
              var o = n[r],
                s = l.getSelectorFromElement(o),
                a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
                  return t === e;
                });
              null !== s && a.length > 0 && ((this._selector = s), this._triggerArray.push(o));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(this._element, this._triggerArray),
              this._config.toggle && this.toggle();
          }
          var n = e.prototype;
          return (
            (n.toggle = function () {
              t(this._element).hasClass(ce) ? this.hide() : this.show();
            }),
            (n.show = function () {
              var n,
                r,
                i = this;
              if (
                !(
                  this._isTransitioning ||
                  t(this._element).hasClass(ce) ||
                  (this._parent &&
                    0 ===
                      (n = [].slice.call(this._parent.querySelectorAll(he)).filter(function (e) {
                        return "string" == typeof i._config.parent
                          ? e.getAttribute("data-parent") === i._config.parent
                          : e.classList.contains(le);
                      })).length &&
                    (n = null),
                  n && (r = t(n).not(this._selector).data("bs.collapse")) && r._isTransitioning)
                )
              ) {
                var o = t.Event(ae.SHOW);
                if ((t(this._element).trigger(o), !o.isDefaultPrevented())) {
                  n &&
                    (e._jQueryInterface.call(t(n).not(this._selector), "hide"),
                    r || t(n).data("bs.collapse", null));
                  var s = this._getDimension();
                  t(this._element).removeClass(le).addClass(ue),
                    (this._element.style[s] = 0),
                    this._triggerArray.length &&
                      t(this._triggerArray).removeClass(fe).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                  var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                    c = l.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(l.TRANSITION_END, function () {
                      t(i._element).removeClass(ue).addClass(le).addClass(ce),
                        (i._element.style[s] = ""),
                        i.setTransitioning(!1),
                        t(i._element).trigger(ae.SHOWN);
                    })
                    .emulateTransitionEnd(c),
                    (this._element.style[s] = this._element[a] + "px");
                }
              }
            }),
            (n.hide = function () {
              var e = this;
              if (!this._isTransitioning && t(this._element).hasClass(ce)) {
                var n = t.Event(ae.HIDE);
                if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                  var r = this._getDimension();
                  (this._element.style[r] = this._element.getBoundingClientRect()[r] + "px"),
                    l.reflow(this._element),
                    t(this._element).addClass(ue).removeClass(le).removeClass(ce);
                  var i = this._triggerArray.length;
                  if (i > 0)
                    for (var o = 0; o < i; o++) {
                      var s = this._triggerArray[o],
                        a = l.getSelectorFromElement(s);
                      null !== a &&
                        (t([].slice.call(document.querySelectorAll(a))).hasClass(ce) ||
                          t(s).addClass(fe).attr("aria-expanded", !1));
                    }
                  this.setTransitioning(!0), (this._element.style[r] = "");
                  var c = l.getTransitionDurationFromElement(this._element);
                  t(this._element)
                    .one(l.TRANSITION_END, function () {
                      e.setTransitioning(!1),
                        t(e._element).removeClass(ue).addClass(le).trigger(ae.HIDDEN);
                    })
                    .emulateTransitionEnd(c);
                }
              }
            }),
            (n.setTransitioning = function (e) {
              this._isTransitioning = e;
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.collapse"),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (n._getConfig = function (e) {
              return (
                ((e = a({}, oe, {}, e)).toggle = Boolean(e.toggle)), l.typeCheckConfig(re, e, se), e
              );
            }),
            (n._getDimension = function () {
              return t(this._element).hasClass(de) ? de : pe;
            }),
            (n._getParent = function () {
              var n,
                r = this;
              l.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  void 0 !== this._config.parent.jquery && (n = this._config.parent[0]))
                : (n = document.querySelector(this._config.parent));
              var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                o = [].slice.call(n.querySelectorAll(i));
              return (
                t(o).each(function (t, n) {
                  r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n]);
                }),
                n
              );
            }),
            (n._addAriaAndCollapsedClass = function (e, n) {
              var r = t(e).hasClass(ce);
              n.length && t(n).toggleClass(fe, !r).attr("aria-expanded", r);
            }),
            (e._getTargetFromElement = function (e) {
              var t = l.getSelectorFromElement(e);
              return t ? document.querySelector(t) : null;
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this),
                  i = r.data("bs.collapse"),
                  o = a({}, oe, {}, r.data(), {}, "object" == typeof n && n ? n : {});
                if (
                  (!i && o.toggle && /show|hide/.test(n) && (o.toggle = !1),
                  i || ((i = new e(this, o)), r.data("bs.collapse", i)),
                  "string" == typeof n)
                ) {
                  if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return oe;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(ae.CLICK_DATA_API, me, function (e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
          r = l.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(r));
        t(i).each(function () {
          var e = t(this),
            r = e.data("bs.collapse") ? "toggle" : n.data();
          ge._jQueryInterface.call(e, r);
        });
      }),
        (t.fn[re] = ge._jQueryInterface),
        (t.fn[re].Constructor = ge),
        (t.fn[re].noConflict = function () {
          return (t.fn[re] = ie), ge._jQueryInterface;
        });
      var ve = "dropdown",
        ye = t.fn[ve],
        be = new RegExp("38|40|27"),
        _e = {
          HIDE: "hide.bs.dropdown",
          HIDDEN: "hidden.bs.dropdown",
          SHOW: "show.bs.dropdown",
          SHOWN: "shown.bs.dropdown",
          CLICK: "click.bs.dropdown",
          CLICK_DATA_API: "click.bs.dropdown.data-api",
          KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
          KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
        },
        we = "disabled",
        Ee = "show",
        xe = "dropup",
        Se = "dropright",
        Te = "dropleft",
        Le = "dropdown-menu-right",
        Ae = "position-static",
        Ce = '[data-toggle="dropdown"]',
        ke = ".dropdown form",
        De = ".dropdown-menu",
        Oe = ".navbar-nav",
        Ne = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Ie = "top-start",
        je = "top-end",
        qe = "bottom-start",
        Pe = "bottom-end",
        He = "right-start",
        Re = "left-start",
        Me = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null,
        },
        Fe = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string",
          popperConfig: "(null|object)",
        },
        We = (function () {
          function e(e, t) {
            (this._element = e),
              (this._popper = null),
              (this._config = this._getConfig(t)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var r = e.prototype;
          return (
            (r.toggle = function () {
              if (!this._element.disabled && !t(this._element).hasClass(we)) {
                var n = t(this._menu).hasClass(Ee);
                e._clearMenus(), n || this.show(!0);
              }
            }),
            (r.show = function (r) {
              if (
                (void 0 === r && (r = !1),
                !(
                  this._element.disabled ||
                  t(this._element).hasClass(we) ||
                  t(this._menu).hasClass(Ee)
                ))
              ) {
                var i = { relatedTarget: this._element },
                  o = t.Event(_e.SHOW, i),
                  s = e._getParentFromElement(this._element);
                if ((t(s).trigger(o), !o.isDefaultPrevented())) {
                  if (!this._inNavbar && r) {
                    if (void 0 === n)
                      throw new TypeError(
                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)",
                      );
                    var a = this._element;
                    "parent" === this._config.reference
                      ? (a = s)
                      : l.isElement(this._config.reference) &&
                        ((a = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (a = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary && t(s).addClass(Ae),
                      (this._popper = new n(a, this._menu, this._getPopperConfig()));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === t(s).closest(Oe).length &&
                    t(document.body).children().on("mouseover", null, t.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    t(this._menu).toggleClass(Ee),
                    t(s).toggleClass(Ee).trigger(t.Event(_e.SHOWN, i));
                }
              }
            }),
            (r.hide = function () {
              if (
                !this._element.disabled &&
                !t(this._element).hasClass(we) &&
                t(this._menu).hasClass(Ee)
              ) {
                var n = { relatedTarget: this._element },
                  r = t.Event(_e.HIDE, n),
                  i = e._getParentFromElement(this._element);
                t(i).trigger(r),
                  r.isDefaultPrevented() ||
                    (this._popper && this._popper.destroy(),
                    t(this._menu).toggleClass(Ee),
                    t(i).toggleClass(Ee).trigger(t.Event(_e.HIDDEN, n)));
              }
            }),
            (r.dispose = function () {
              t.removeData(this._element, "bs.dropdown"),
                t(this._element).off(".bs.dropdown"),
                (this._element = null),
                (this._menu = null),
                null !== this._popper && (this._popper.destroy(), (this._popper = null));
            }),
            (r.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (r._addEventListeners = function () {
              var e = this;
              t(this._element).on(_e.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle();
              });
            }),
            (r._getConfig = function (e) {
              return (
                (e = a({}, this.constructor.Default, {}, t(this._element).data(), {}, e)),
                l.typeCheckConfig(ve, e, this.constructor.DefaultType),
                e
              );
            }),
            (r._getMenuElement = function () {
              if (!this._menu) {
                var t = e._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(De));
              }
              return this._menu;
            }),
            (r._getPlacement = function () {
              var e = t(this._element.parentNode),
                n = qe;
              return (
                e.hasClass(xe)
                  ? ((n = Ie), t(this._menu).hasClass(Le) && (n = je))
                  : e.hasClass(Se)
                  ? (n = He)
                  : e.hasClass(Te)
                  ? (n = Re)
                  : t(this._menu).hasClass(Le) && (n = Pe),
                n
              );
            }),
            (r._detectNavbar = function () {
              return t(this._element).closest(".navbar").length > 0;
            }),
            (r._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this._config.offset
                  ? (t.fn = function (t) {
                      return (
                        (t.offsets = a(
                          {},
                          t.offsets,
                          {},
                          e._config.offset(t.offsets, e._element) || {},
                        )),
                        t
                      );
                    })
                  : (t.offset = this._config.offset),
                t
              );
            }),
            (r._getPopperConfig = function () {
              var e = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: this._getOffset(),
                  flip: { enabled: this._config.flip },
                  preventOverflow: { boundariesElement: this._config.boundary },
                },
              };
              return (
                "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }),
                a({}, e, {}, this._config.popperConfig)
              );
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this).data("bs.dropdown");
                if (
                  (r ||
                    ((r = new e(this, "object" == typeof n ? n : null)),
                    t(this).data("bs.dropdown", r)),
                  "string" == typeof n)
                ) {
                  if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            (e._clearMenus = function (n) {
              if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
                for (
                  var r = [].slice.call(document.querySelectorAll(Ce)), i = 0, o = r.length;
                  i < o;
                  i++
                ) {
                  var s = e._getParentFromElement(r[i]),
                    a = t(r[i]).data("bs.dropdown"),
                    c = { relatedTarget: r[i] };
                  if ((n && "click" === n.type && (c.clickEvent = n), a)) {
                    var l = a._menu;
                    if (
                      t(s).hasClass(Ee) &&
                      !(
                        n &&
                        (("click" === n.type && /input|textarea/i.test(n.target.tagName)) ||
                          ("keyup" === n.type && 9 === n.which)) &&
                        t.contains(s, n.target)
                      )
                    ) {
                      var u = t.Event(_e.HIDE, c);
                      t(s).trigger(u),
                        u.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            t(document.body).children().off("mouseover", null, t.noop),
                          r[i].setAttribute("aria-expanded", "false"),
                          a._popper && a._popper.destroy(),
                          t(l).removeClass(Ee),
                          t(s).removeClass(Ee).trigger(t.Event(_e.HIDDEN, c)));
                    }
                  }
                }
            }),
            (e._getParentFromElement = function (e) {
              var t,
                n = l.getSelectorFromElement(e);
              return n && (t = document.querySelector(n)), t || e.parentNode;
            }),
            (e._dataApiKeydownHandler = function (n) {
              if (
                (/input|textarea/i.test(n.target.tagName)
                  ? !(
                      32 === n.which ||
                      (27 !== n.which &&
                        ((40 !== n.which && 38 !== n.which) || t(n.target).closest(De).length))
                    )
                  : be.test(n.which)) &&
                (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(we))
              ) {
                var r = e._getParentFromElement(this),
                  i = t(r).hasClass(Ee);
                if (i || 27 !== n.which)
                  if (i && (!i || (27 !== n.which && 32 !== n.which))) {
                    var o = [].slice.call(r.querySelectorAll(Ne)).filter(function (e) {
                      return t(e).is(":visible");
                    });
                    if (0 !== o.length) {
                      var s = o.indexOf(n.target);
                      38 === n.which && s > 0 && s--,
                        40 === n.which && s < o.length - 1 && s++,
                        s < 0 && (s = 0),
                        o[s].focus();
                    }
                  } else {
                    if (27 === n.which) {
                      var a = r.querySelector(Ce);
                      t(a).trigger("focus");
                    }
                    t(this).trigger("click");
                  }
              }
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return Me;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return Fe;
                },
              },
            ]),
            e
          );
        })();
      t(document)
        .on(_e.KEYDOWN_DATA_API, Ce, We._dataApiKeydownHandler)
        .on(_e.KEYDOWN_DATA_API, De, We._dataApiKeydownHandler)
        .on(_e.CLICK_DATA_API + " " + _e.KEYUP_DATA_API, We._clearMenus)
        .on(_e.CLICK_DATA_API, Ce, function (e) {
          e.preventDefault(), e.stopPropagation(), We._jQueryInterface.call(t(this), "toggle");
        })
        .on(_e.CLICK_DATA_API, ke, function (e) {
          e.stopPropagation();
        }),
        (t.fn[ve] = We._jQueryInterface),
        (t.fn[ve].Constructor = We),
        (t.fn[ve].noConflict = function () {
          return (t.fn[ve] = ye), We._jQueryInterface;
        });
      var Be = t.fn.modal,
        ze = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Ue = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        Ve = {
          HIDE: "hide.bs.modal",
          HIDE_PREVENTED: "hidePrevented.bs.modal",
          HIDDEN: "hidden.bs.modal",
          SHOW: "show.bs.modal",
          SHOWN: "shown.bs.modal",
          FOCUSIN: "focusin.bs.modal",
          RESIZE: "resize.bs.modal",
          CLICK_DISMISS: "click.dismiss.bs.modal",
          KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
          MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
          MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
          CLICK_DATA_API: "click.bs.modal.data-api",
        },
        $e = "modal-dialog-scrollable",
        Qe = "modal-scrollbar-measure",
        Ke = "modal-backdrop",
        Ye = "modal-open",
        Xe = "fade",
        Ge = "show",
        Je = "modal-static",
        Ze = ".modal-dialog",
        et = ".modal-body",
        tt = '[data-toggle="modal"]',
        nt = '[data-dismiss="modal"]',
        rt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        it = ".sticky-top",
        ot = (function () {
          function e(e, t) {
            (this._config = this._getConfig(t)),
              (this._element = e),
              (this._dialog = e.querySelector(Ze)),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._isTransitioning = !1),
              (this._scrollbarWidth = 0);
          }
          var n = e.prototype;
          return (
            (n.toggle = function (e) {
              return this._isShown ? this.hide() : this.show(e);
            }),
            (n.show = function (e) {
              var n = this;
              if (!this._isShown && !this._isTransitioning) {
                t(this._element).hasClass(Xe) && (this._isTransitioning = !0);
                var r = t.Event(Ve.SHOW, { relatedTarget: e });
                t(this._element).trigger(r),
                  this._isShown ||
                    r.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(Ve.CLICK_DISMISS, nt, function (e) {
                      return n.hide(e);
                    }),
                    t(this._dialog).on(Ve.MOUSEDOWN_DISMISS, function () {
                      t(n._element).one(Ve.MOUSEUP_DISMISS, function (e) {
                        t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(e);
                    }));
              }
            }),
            (n.hide = function (e) {
              var n = this;
              if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
                var r = t.Event(Ve.HIDE);
                if ((t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented())) {
                  this._isShown = !1;
                  var i = t(this._element).hasClass(Xe);
                  if (
                    (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(document).off(Ve.FOCUSIN),
                    t(this._element).removeClass(Ge),
                    t(this._element).off(Ve.CLICK_DISMISS),
                    t(this._dialog).off(Ve.MOUSEDOWN_DISMISS),
                    i)
                  ) {
                    var o = l.getTransitionDurationFromElement(this._element);
                    t(this._element)
                      .one(l.TRANSITION_END, function (e) {
                        return n._hideModal(e);
                      })
                      .emulateTransitionEnd(o);
                  } else this._hideModal();
                }
              }
            }),
            (n.dispose = function () {
              [window, this._element, this._dialog].forEach(function (e) {
                return t(e).off(".bs.modal");
              }),
                t(document).off(Ve.FOCUSIN),
                t.removeData(this._element, "bs.modal"),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._isTransitioning = null),
                (this._scrollbarWidth = null);
            }),
            (n.handleUpdate = function () {
              this._adjustDialog();
            }),
            (n._getConfig = function (e) {
              return (e = a({}, ze, {}, e)), l.typeCheckConfig("modal", e, Ue), e;
            }),
            (n._triggerBackdropTransition = function () {
              var e = this;
              if ("static" === this._config.backdrop) {
                var n = t.Event(Ve.HIDE_PREVENTED);
                if ((t(this._element).trigger(n), n.defaultPrevented)) return;
                this._element.classList.add(Je);
                var r = l.getTransitionDurationFromElement(this._element);
                t(this._element)
                  .one(l.TRANSITION_END, function () {
                    e._element.classList.remove(Je);
                  })
                  .emulateTransitionEnd(r),
                  this._element.focus();
              } else this.hide();
            }),
            (n._showElement = function (e) {
              var n = this,
                r = t(this._element).hasClass(Xe),
                i = this._dialog ? this._dialog.querySelector(et) : null;
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                t(this._dialog).hasClass($e) && i
                  ? (i.scrollTop = 0)
                  : (this._element.scrollTop = 0),
                r && l.reflow(this._element),
                t(this._element).addClass(Ge),
                this._config.focus && this._enforceFocus();
              var o = t.Event(Ve.SHOWN, { relatedTarget: e }),
                s = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    t(n._element).trigger(o);
                };
              if (r) {
                var a = l.getTransitionDurationFromElement(this._dialog);
                t(this._dialog).one(l.TRANSITION_END, s).emulateTransitionEnd(a);
              } else s();
            }),
            (n._enforceFocus = function () {
              var e = this;
              t(document)
                .off(Ve.FOCUSIN)
                .on(Ve.FOCUSIN, function (n) {
                  document !== n.target &&
                    e._element !== n.target &&
                    0 === t(e._element).has(n.target).length &&
                    e._element.focus();
                });
            }),
            (n._setEscapeEvent = function () {
              var e = this;
              this._isShown && this._config.keyboard
                ? t(this._element).on(Ve.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && e._triggerBackdropTransition();
                  })
                : this._isShown || t(this._element).off(Ve.KEYDOWN_DISMISS);
            }),
            (n._setResizeEvent = function () {
              var e = this;
              this._isShown
                ? t(window).on(Ve.RESIZE, function (t) {
                    return e.handleUpdate(t);
                  })
                : t(window).off(Ve.RESIZE);
            }),
            (n._hideModal = function () {
              var e = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  t(document.body).removeClass(Ye),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(Ve.HIDDEN);
                });
            }),
            (n._removeBackdrop = function () {
              this._backdrop && (t(this._backdrop).remove(), (this._backdrop = null));
            }),
            (n._showBackdrop = function (e) {
              var n = this,
                r = t(this._element).hasClass(Xe) ? Xe : "";
              if (this._isShown && this._config.backdrop) {
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = Ke),
                  r && this._backdrop.classList.add(r),
                  t(this._backdrop).appendTo(document.body),
                  t(this._element).on(Ve.CLICK_DISMISS, function (e) {
                    n._ignoreBackdropClick
                      ? (n._ignoreBackdropClick = !1)
                      : e.target === e.currentTarget && n._triggerBackdropTransition();
                  }),
                  r && l.reflow(this._backdrop),
                  t(this._backdrop).addClass(Ge),
                  !e)
                )
                  return;
                if (!r) return void e();
                var i = l.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(i);
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(Ge);
                var o = function () {
                  n._removeBackdrop(), e && e();
                };
                if (t(this._element).hasClass(Xe)) {
                  var s = l.getTransitionDurationFromElement(this._backdrop);
                  t(this._backdrop).one(l.TRANSITION_END, o).emulateTransitionEnd(s);
                } else o();
              } else e && e();
            }),
            (n._adjustDialog = function () {
              var e = this._element.scrollHeight > document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                e &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !e &&
                  (this._element.style.paddingRight = this._scrollbarWidth + "px");
            }),
            (n._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
            }),
            (n._checkScrollbar = function () {
              var e = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (n._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                var n = [].slice.call(document.querySelectorAll(rt)),
                  r = [].slice.call(document.querySelectorAll(it));
                t(n).each(function (n, r) {
                  var i = r.style.paddingRight,
                    o = t(r).css("padding-right");
                  t(r)
                    .data("padding-right", i)
                    .css("padding-right", parseFloat(o) + e._scrollbarWidth + "px");
                }),
                  t(r).each(function (n, r) {
                    var i = r.style.marginRight,
                      o = t(r).css("margin-right");
                    t(r)
                      .data("margin-right", i)
                      .css("margin-right", parseFloat(o) - e._scrollbarWidth + "px");
                  });
                var i = document.body.style.paddingRight,
                  o = t(document.body).css("padding-right");
                t(document.body)
                  .data("padding-right", i)
                  .css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
              }
              t(document.body).addClass(Ye);
            }),
            (n._resetScrollbar = function () {
              var e = [].slice.call(document.querySelectorAll(rt));
              t(e).each(function (e, n) {
                var r = t(n).data("padding-right");
                t(n).removeData("padding-right"), (n.style.paddingRight = r || "");
              });
              var n = [].slice.call(document.querySelectorAll("" + it));
              t(n).each(function (e, n) {
                var r = t(n).data("margin-right");
                void 0 !== r && t(n).css("margin-right", r).removeData("margin-right");
              });
              var r = t(document.body).data("padding-right");
              t(document.body).removeData("padding-right"),
                (document.body.style.paddingRight = r || "");
            }),
            (n._getScrollbarWidth = function () {
              var e = document.createElement("div");
              (e.className = Qe), document.body.appendChild(e);
              var t = e.getBoundingClientRect().width - e.clientWidth;
              return document.body.removeChild(e), t;
            }),
            (e._jQueryInterface = function (n, r) {
              return this.each(function () {
                var i = t(this).data("bs.modal"),
                  o = a({}, ze, {}, t(this).data(), {}, "object" == typeof n && n ? n : {});
                if (
                  (i || ((i = new e(this, o)), t(this).data("bs.modal", i)), "string" == typeof n)
                ) {
                  if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                  i[n](r);
                } else o.show && i.show(r);
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return ze;
                },
              },
            ]),
            e
          );
        })();
      t(document).on(Ve.CLICK_DATA_API, tt, function (e) {
        var n,
          r = this,
          i = l.getSelectorFromElement(this);
        i && (n = document.querySelector(i));
        var o = t(n).data("bs.modal") ? "toggle" : a({}, t(n).data(), {}, t(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
        var s = t(n).one(Ve.SHOW, function (e) {
          e.isDefaultPrevented() ||
            s.one(Ve.HIDDEN, function () {
              t(r).is(":visible") && r.focus();
            });
        });
        ot._jQueryInterface.call(t(n), o, this);
      }),
        (t.fn.modal = ot._jQueryInterface),
        (t.fn.modal.Constructor = ot),
        (t.fn.modal.noConflict = function () {
          return (t.fn.modal = Be), ot._jQueryInterface;
        });
      var st = [
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ],
        at = {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        ct = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        lt =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
      function ut(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (
          var r = new window.DOMParser().parseFromString(e, "text/html"),
            i = Object.keys(t),
            o = [].slice.call(r.body.querySelectorAll("*")),
            s = function (e, n) {
              var r = o[e],
                s = r.nodeName.toLowerCase();
              if (-1 === i.indexOf(r.nodeName.toLowerCase()))
                return r.parentNode.removeChild(r), "continue";
              var a = [].slice.call(r.attributes),
                c = [].concat(t["*"] || [], t[s] || []);
              a.forEach(function (e) {
                (function (e, t) {
                  var n = e.nodeName.toLowerCase();
                  if (-1 !== t.indexOf(n))
                    return (
                      -1 === st.indexOf(n) ||
                      Boolean(e.nodeValue.match(ct) || e.nodeValue.match(lt))
                    );
                  for (
                    var r = t.filter(function (e) {
                        return e instanceof RegExp;
                      }),
                      i = 0,
                      o = r.length;
                    i < o;
                    i++
                  )
                    if (n.match(r[i])) return !0;
                  return !1;
                })(e, c) || r.removeAttribute(e.nodeName);
              });
            },
            a = 0,
            c = o.length;
          a < c;
          a++
        )
          s(a);
        return r.body.innerHTML;
      }
      var ft = "tooltip",
        dt = t.fn.tooltip,
        pt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        ht = ["sanitize", "whiteList", "sanitizeFn"],
        mt = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          whiteList: "object",
          popperConfig: "(null|object)",
        },
        gt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        vt = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
          sanitize: !0,
          sanitizeFn: null,
          whiteList: at,
          popperConfig: null,
        },
        yt = "show",
        bt = "out",
        _t = {
          HIDE: "hide.bs.tooltip",
          HIDDEN: "hidden.bs.tooltip",
          SHOW: "show.bs.tooltip",
          SHOWN: "shown.bs.tooltip",
          INSERTED: "inserted.bs.tooltip",
          CLICK: "click.bs.tooltip",
          FOCUSIN: "focusin.bs.tooltip",
          FOCUSOUT: "focusout.bs.tooltip",
          MOUSEENTER: "mouseenter.bs.tooltip",
          MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        wt = "fade",
        Et = "show",
        xt = ".tooltip-inner",
        St = ".arrow",
        Tt = "hover",
        Lt = "focus",
        At = "click",
        Ct = "manual",
        kt = (function () {
          function e(e, t) {
            if (void 0 === n)
              throw new TypeError(
                "Bootstrap's tooltips require Popper.js (https://popper.js.org/)",
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = e),
              (this.config = this._getConfig(t)),
              (this.tip = null),
              this._setListeners();
          }
          var r = e.prototype;
          return (
            (r.enable = function () {
              this._isEnabled = !0;
            }),
            (r.disable = function () {
              this._isEnabled = !1;
            }),
            (r.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (r.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var n = this.constructor.DATA_KEY,
                    r = t(e.currentTarget).data(n);
                  r ||
                    ((r = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                    t(e.currentTarget).data(n, r)),
                    (r._activeTrigger.click = !r._activeTrigger.click),
                    r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r);
                } else {
                  if (t(this.getTipElement()).hasClass(Et)) return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (r.dispose = function () {
              clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                this.tip && t(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (r.show = function () {
              var e = this;
              if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var r = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(r);
                var i = l.findShadowRoot(this.element),
                  o = t.contains(
                    null !== i ? i : this.element.ownerDocument.documentElement,
                    this.element,
                  );
                if (r.isDefaultPrevented() || !o) return;
                var s = this.getTipElement(),
                  a = l.getUID(this.constructor.NAME);
                s.setAttribute("id", a),
                  this.element.setAttribute("aria-describedby", a),
                  this.setContent(),
                  this.config.animation && t(s).addClass(wt);
                var c =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, s, this.element)
                      : this.config.placement,
                  u = this._getAttachment(c);
                this.addAttachmentClass(u);
                var f = this._getContainer();
                t(s).data(this.constructor.DATA_KEY, this),
                  t.contains(this.element.ownerDocument.documentElement, this.tip) ||
                    t(s).appendTo(f),
                  t(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new n(this.element, s, this._getPopperConfig(u))),
                  t(s).addClass(Et),
                  "ontouchstart" in document.documentElement &&
                    t(document.body).children().on("mouseover", null, t.noop);
                var d = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    n === bt && e._leave(null, e);
                };
                if (t(this.tip).hasClass(wt)) {
                  var p = l.getTransitionDurationFromElement(this.tip);
                  t(this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(p);
                } else d();
              }
            }),
            (r.hide = function (e) {
              var n = this,
                r = this.getTipElement(),
                i = t.Event(this.constructor.Event.HIDE),
                o = function () {
                  n._hoverState !== yt && r.parentNode && r.parentNode.removeChild(r),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e();
                };
              if ((t(this.element).trigger(i), !i.isDefaultPrevented())) {
                if (
                  (t(r).removeClass(Et),
                  "ontouchstart" in document.documentElement &&
                    t(document.body).children().off("mouseover", null, t.noop),
                  (this._activeTrigger[At] = !1),
                  (this._activeTrigger[Lt] = !1),
                  (this._activeTrigger[Tt] = !1),
                  t(this.tip).hasClass(wt))
                ) {
                  var s = l.getTransitionDurationFromElement(r);
                  t(r).one(l.TRANSITION_END, o).emulateTransitionEnd(s);
                } else o();
                this._hoverState = "";
              }
            }),
            (r.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (r.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (r.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e);
            }),
            (r.getTipElement = function () {
              return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
            }),
            (r.setContent = function () {
              var e = this.getTipElement();
              this.setElementContent(t(e.querySelectorAll(xt)), this.getTitle()),
                t(e).removeClass(wt + " " + Et);
            }),
            (r.setElementContent = function (e, n) {
              "object" != typeof n || (!n.nodeType && !n.jquery)
                ? this.config.html
                  ? (this.config.sanitize &&
                      (n = ut(n, this.config.whiteList, this.config.sanitizeFn)),
                    e.html(n))
                  : e.text(n)
                : this.config.html
                ? t(n).parent().is(e) || e.empty().append(n)
                : e.text(t(n).text());
            }),
            (r.getTitle = function () {
              var e = this.element.getAttribute("data-original-title");
              return (
                e ||
                  (e =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                e
              );
            }),
            (r._getPopperConfig = function (e) {
              var t = this;
              return a(
                {},
                {
                  placement: e,
                  modifiers: {
                    offset: this._getOffset(),
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: St },
                    preventOverflow: { boundariesElement: this.config.boundary },
                  },
                  onCreate: function (e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function (e) {
                    return t._handlePopperPlacementChange(e);
                  },
                },
                {},
                this.config.popperConfig,
              );
            }),
            (r._getOffset = function () {
              var e = this,
                t = {};
              return (
                "function" == typeof this.config.offset
                  ? (t.fn = function (t) {
                      return (
                        (t.offsets = a(
                          {},
                          t.offsets,
                          {},
                          e.config.offset(t.offsets, e.element) || {},
                        )),
                        t
                      );
                    })
                  : (t.offset = this.config.offset),
                t
              );
            }),
            (r._getContainer = function () {
              return !1 === this.config.container
                ? document.body
                : l.isElement(this.config.container)
                ? t(this.config.container)
                : t(document).find(this.config.container);
            }),
            (r._getAttachment = function (e) {
              return gt[e.toUpperCase()];
            }),
            (r._setListeners = function () {
              var e = this;
              this.config.trigger.split(" ").forEach(function (n) {
                if ("click" === n)
                  t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                    return e.toggle(t);
                  });
                else if (n !== Ct) {
                  var r = n === Tt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                    i = n === Tt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                  t(e.element)
                    .on(r, e.config.selector, function (t) {
                      return e._enter(t);
                    })
                    .on(i, e.config.selector, function (t) {
                      return e._leave(t);
                    });
                }
              }),
                (this._hideModalHandler = function () {
                  e.element && e.hide();
                }),
                t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                this.config.selector
                  ? (this.config = a({}, this.config, { trigger: "manual", selector: "" }))
                  : this._fixTitle();
            }),
            (r._fixTitle = function () {
              var e = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== e) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || "",
                ),
                this.element.setAttribute("title", ""));
            }),
            (r._enter = function (e, n) {
              var r = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(r)) ||
                ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                t(e.currentTarget).data(r, n)),
                e && (n._activeTrigger["focusin" === e.type ? Lt : Tt] = !0),
                t(n.getTipElement()).hasClass(Et) || n._hoverState === yt
                  ? (n._hoverState = yt)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = yt),
                    n.config.delay && n.config.delay.show
                      ? (n._timeout = setTimeout(function () {
                          n._hoverState === yt && n.show();
                        }, n.config.delay.show))
                      : n.show());
            }),
            (r._leave = function (e, n) {
              var r = this.constructor.DATA_KEY;
              (n = n || t(e.currentTarget).data(r)) ||
                ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())),
                t(e.currentTarget).data(r, n)),
                e && (n._activeTrigger["focusout" === e.type ? Lt : Tt] = !1),
                n._isWithActiveTrigger() ||
                  (clearTimeout(n._timeout),
                  (n._hoverState = bt),
                  n.config.delay && n.config.delay.hide
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === bt && n.hide();
                      }, n.config.delay.hide))
                    : n.hide());
            }),
            (r._isWithActiveTrigger = function () {
              for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
              return !1;
            }),
            (r._getConfig = function (e) {
              var n = t(this.element).data();
              return (
                Object.keys(n).forEach(function (e) {
                  -1 !== ht.indexOf(e) && delete n[e];
                }),
                "number" ==
                  typeof (e = a(
                    {},
                    this.constructor.Default,
                    {},
                    n,
                    {},
                    "object" == typeof e && e ? e : {},
                  )).delay && (e.delay = { show: e.delay, hide: e.delay }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content && (e.content = e.content.toString()),
                l.typeCheckConfig(ft, e, this.constructor.DefaultType),
                e.sanitize && (e.template = ut(e.template, e.whiteList, e.sanitizeFn)),
                e
              );
            }),
            (r._getDelegateConfig = function () {
              var e = {};
              if (this.config)
                for (var t in this.config)
                  this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
              return e;
            }),
            (r._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(pt);
              null !== n && n.length && e.removeClass(n.join(""));
            }),
            (r._handlePopperPlacementChange = function (e) {
              var t = e.instance;
              (this.tip = t.popper),
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(e.placement));
            }),
            (r._fixTransition = function () {
              var e = this.getTipElement(),
                n = this.config.animation;
              null === e.getAttribute("x-placement") &&
                (t(e).removeClass(wt),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this).data("bs.tooltip"),
                  i = "object" == typeof n && n;
                if (
                  (r || !/dispose|hide/.test(n)) &&
                  (r || ((r = new e(this, i)), t(this).data("bs.tooltip", r)), "string" == typeof n)
                ) {
                  if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return vt;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return ft;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.tooltip";
                },
              },
              {
                key: "Event",
                get: function () {
                  return _t;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return ".bs.tooltip";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return mt;
                },
              },
            ]),
            e
          );
        })();
      (t.fn.tooltip = kt._jQueryInterface),
        (t.fn.tooltip.Constructor = kt),
        (t.fn.tooltip.noConflict = function () {
          return (t.fn.tooltip = dt), kt._jQueryInterface;
        });
      var Dt = "popover",
        Ot = t.fn.popover,
        Nt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        It = a({}, kt.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        jt = a({}, kt.DefaultType, { content: "(string|element|function)" }),
        qt = "fade",
        Pt = "show",
        Ht = ".popover-header",
        Rt = ".popover-body",
        Mt = {
          HIDE: "hide.bs.popover",
          HIDDEN: "hidden.bs.popover",
          SHOW: "show.bs.popover",
          SHOWN: "shown.bs.popover",
          INSERTED: "inserted.bs.popover",
          CLICK: "click.bs.popover",
          FOCUSIN: "focusin.bs.popover",
          FOCUSOUT: "focusout.bs.popover",
          MOUSEENTER: "mouseenter.bs.popover",
          MOUSELEAVE: "mouseleave.bs.popover",
        },
        Ft = (function (e) {
          var n, r;
          function o() {
            return e.apply(this, arguments) || this;
          }
          (r = e),
            ((n = o).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (n.__proto__ = r);
          var s = o.prototype;
          return (
            (s.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (s.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-popover-" + e);
            }),
            (s.getTipElement = function () {
              return (this.tip = this.tip || t(this.config.template)[0]), this.tip;
            }),
            (s.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(Ht), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(Rt), n),
                e.removeClass(qt + " " + Pt);
            }),
            (s._getContent = function () {
              return this.element.getAttribute("data-content") || this.config.content;
            }),
            (s._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                n = e.attr("class").match(Nt);
              null !== n && n.length > 0 && e.removeClass(n.join(""));
            }),
            (o._jQueryInterface = function (e) {
              return this.each(function () {
                var n = t(this).data("bs.popover"),
                  r = "object" == typeof e ? e : null;
                if (
                  (n || !/dispose|hide/.test(e)) &&
                  (n || ((n = new o(this, r)), t(this).data("bs.popover", n)), "string" == typeof e)
                ) {
                  if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                  n[e]();
                }
              });
            }),
            i(o, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return It;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return Dt;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.popover";
                },
              },
              {
                key: "Event",
                get: function () {
                  return Mt;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return ".bs.popover";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return jt;
                },
              },
            ]),
            o
          );
        })(kt);
      (t.fn.popover = Ft._jQueryInterface),
        (t.fn.popover.Constructor = Ft),
        (t.fn.popover.noConflict = function () {
          return (t.fn.popover = Ot), Ft._jQueryInterface;
        });
      var Wt = "scrollspy",
        Bt = t.fn[Wt],
        zt = { offset: 10, method: "auto", target: "" },
        Ut = { offset: "number", method: "string", target: "(string|element)" },
        Vt = {
          ACTIVATE: "activate.bs.scrollspy",
          SCROLL: "scroll.bs.scrollspy",
          LOAD_DATA_API: "load.bs.scrollspy.data-api",
        },
        $t = "dropdown-item",
        Qt = "active",
        Kt = '[data-spy="scroll"]',
        Yt = ".nav, .list-group",
        Xt = ".nav-link",
        Gt = ".nav-item",
        Jt = ".list-group-item",
        Zt = ".dropdown",
        en = ".dropdown-item",
        tn = ".dropdown-toggle",
        nn = "offset",
        rn = "position",
        on = (function () {
          function e(e, n) {
            var r = this;
            (this._element = e),
              (this._scrollElement = "BODY" === e.tagName ? window : e),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " " +
                Xt +
                "," +
                this._config.target +
                " " +
                Jt +
                "," +
                this._config.target +
                " " +
                en),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              t(this._scrollElement).on(Vt.SCROLL, function (e) {
                return r._process(e);
              }),
              this.refresh(),
              this._process();
          }
          var n = e.prototype;
          return (
            (n.refresh = function () {
              var e = this,
                n = this._scrollElement === this._scrollElement.window ? nn : rn,
                r = "auto" === this._config.method ? n : this._config.method,
                i = r === rn ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                [].slice
                  .call(document.querySelectorAll(this._selector))
                  .map(function (e) {
                    var n,
                      o = l.getSelectorFromElement(e);
                    if ((o && (n = document.querySelector(o)), n)) {
                      var s = n.getBoundingClientRect();
                      if (s.width || s.height) return [t(n)[r]().top + i, o];
                    }
                    return null;
                  })
                  .filter(function (e) {
                    return e;
                  })
                  .sort(function (e, t) {
                    return e[0] - t[0];
                  })
                  .forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                  });
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.scrollspy"),
                t(this._scrollElement).off(".bs.scrollspy"),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (n._getConfig = function (e) {
              if (
                "string" != typeof (e = a({}, zt, {}, "object" == typeof e && e ? e : {})).target
              ) {
                var n = t(e.target).attr("id");
                n || ((n = l.getUID(Wt)), t(e.target).attr("id", n)), (e.target = "#" + n);
              }
              return l.typeCheckConfig(Wt, e, Ut), e;
            }),
            (n._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (n._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
              );
            }),
            (n._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (n._process = function () {
              var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
              if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                var r = this._targets[this._targets.length - 1];
                this._activeTarget !== r && this._activate(r);
              } else {
                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0)
                  return (this._activeTarget = null), void this._clear();
                for (var i = this._offsets.length; i--; )
                  this._activeTarget !== this._targets[i] &&
                    e >= this._offsets[i] &&
                    (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) &&
                    this._activate(this._targets[i]);
              }
            }),
            (n._activate = function (e) {
              (this._activeTarget = e), this._clear();
              var n = this._selector.split(",").map(function (t) {
                  return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                }),
                r = t([].slice.call(document.querySelectorAll(n.join(","))));
              r.hasClass($t)
                ? (r.closest(Zt).find(tn).addClass(Qt), r.addClass(Qt))
                : (r.addClass(Qt),
                  r
                    .parents(Yt)
                    .prev(Xt + ", " + Jt)
                    .addClass(Qt),
                  r.parents(Yt).prev(Gt).children(Xt).addClass(Qt)),
                t(this._scrollElement).trigger(Vt.ACTIVATE, { relatedTarget: e });
            }),
            (n._clear = function () {
              [].slice
                .call(document.querySelectorAll(this._selector))
                .filter(function (e) {
                  return e.classList.contains(Qt);
                })
                .forEach(function (e) {
                  return e.classList.remove(Qt);
                });
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this).data("bs.scrollspy");
                if (
                  (r ||
                    ((r = new e(this, "object" == typeof n && n)), t(this).data("bs.scrollspy", r)),
                  "string" == typeof n)
                ) {
                  if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return zt;
                },
              },
            ]),
            e
          );
        })();
      t(window).on(Vt.LOAD_DATA_API, function () {
        for (var e = [].slice.call(document.querySelectorAll(Kt)), n = e.length; n--; ) {
          var r = t(e[n]);
          on._jQueryInterface.call(r, r.data());
        }
      }),
        (t.fn[Wt] = on._jQueryInterface),
        (t.fn[Wt].Constructor = on),
        (t.fn[Wt].noConflict = function () {
          return (t.fn[Wt] = Bt), on._jQueryInterface;
        });
      var sn = t.fn.tab,
        an = {
          HIDE: "hide.bs.tab",
          HIDDEN: "hidden.bs.tab",
          SHOW: "show.bs.tab",
          SHOWN: "shown.bs.tab",
          CLICK_DATA_API: "click.bs.tab.data-api",
        },
        cn = "dropdown-menu",
        ln = "active",
        un = "disabled",
        fn = "fade",
        dn = "show",
        pn = ".dropdown",
        hn = ".nav, .list-group",
        mn = ".active",
        gn = "> li > .active",
        vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        yn = ".dropdown-toggle",
        bn = "> .dropdown-menu .active",
        _n = (function () {
          function e(e) {
            this._element = e;
          }
          var n = e.prototype;
          return (
            (n.show = function () {
              var e = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    t(this._element).hasClass(ln)) ||
                  t(this._element).hasClass(un)
                )
              ) {
                var n,
                  r,
                  i = t(this._element).closest(hn)[0],
                  o = l.getSelectorFromElement(this._element);
                if (i) {
                  var s = "UL" === i.nodeName || "OL" === i.nodeName ? gn : mn;
                  r = (r = t.makeArray(t(i).find(s)))[r.length - 1];
                }
                var a = t.Event(an.HIDE, { relatedTarget: this._element }),
                  c = t.Event(an.SHOW, { relatedTarget: r });
                if (
                  (r && t(r).trigger(a),
                  t(this._element).trigger(c),
                  !c.isDefaultPrevented() && !a.isDefaultPrevented())
                ) {
                  o && (n = document.querySelector(o)), this._activate(this._element, i);
                  var u = function () {
                    var n = t.Event(an.HIDDEN, { relatedTarget: e._element }),
                      i = t.Event(an.SHOWN, { relatedTarget: r });
                    t(r).trigger(n), t(e._element).trigger(i);
                  };
                  n ? this._activate(n, n.parentNode, u) : u();
                }
              }
            }),
            (n.dispose = function () {
              t.removeData(this._element, "bs.tab"), (this._element = null);
            }),
            (n._activate = function (e, n, r) {
              var i = this,
                o = (
                  !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                    ? t(n).children(mn)
                    : t(n).find(gn)
                )[0],
                s = r && o && t(o).hasClass(fn),
                a = function () {
                  return i._transitionComplete(e, o, r);
                };
              if (o && s) {
                var c = l.getTransitionDurationFromElement(o);
                t(o).removeClass(dn).one(l.TRANSITION_END, a).emulateTransitionEnd(c);
              } else a();
            }),
            (n._transitionComplete = function (e, n, r) {
              if (n) {
                t(n).removeClass(ln);
                var i = t(n.parentNode).find(bn)[0];
                i && t(i).removeClass(ln),
                  "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
              }
              if (
                (t(e).addClass(ln),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                l.reflow(e),
                e.classList.contains(fn) && e.classList.add(dn),
                e.parentNode && t(e.parentNode).hasClass(cn))
              ) {
                var o = t(e).closest(pn)[0];
                if (o) {
                  var s = [].slice.call(o.querySelectorAll(yn));
                  t(s).addClass(ln);
                }
                e.setAttribute("aria-expanded", !0);
              }
              r && r();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this),
                  i = r.data("bs.tab");
                if ((i || ((i = new e(this)), r.data("bs.tab", i)), "string" == typeof n)) {
                  if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
            ]),
            e
          );
        })();
      t(document).on(an.CLICK_DATA_API, vn, function (e) {
        e.preventDefault(), _n._jQueryInterface.call(t(this), "show");
      }),
        (t.fn.tab = _n._jQueryInterface),
        (t.fn.tab.Constructor = _n),
        (t.fn.tab.noConflict = function () {
          return (t.fn.tab = sn), _n._jQueryInterface;
        });
      var wn = t.fn.toast,
        En = {
          CLICK_DISMISS: "click.dismiss.bs.toast",
          HIDE: "hide.bs.toast",
          HIDDEN: "hidden.bs.toast",
          SHOW: "show.bs.toast",
          SHOWN: "shown.bs.toast",
        },
        xn = "fade",
        Sn = "hide",
        Tn = "show",
        Ln = "showing",
        An = { animation: "boolean", autohide: "boolean", delay: "number" },
        Cn = { animation: !0, autohide: !0, delay: 500 },
        kn = '[data-dismiss="toast"]',
        Dn = (function () {
          function e(e, t) {
            (this._element = e),
              (this._config = this._getConfig(t)),
              (this._timeout = null),
              this._setListeners();
          }
          var n = e.prototype;
          return (
            (n.show = function () {
              var e = this,
                n = t.Event(En.SHOW);
              if ((t(this._element).trigger(n), !n.isDefaultPrevented())) {
                this._config.animation && this._element.classList.add(xn);
                var r = function () {
                  e._element.classList.remove(Ln),
                    e._element.classList.add(Tn),
                    t(e._element).trigger(En.SHOWN),
                    e._config.autohide &&
                      (e._timeout = setTimeout(function () {
                        e.hide();
                      }, e._config.delay));
                };
                if (
                  (this._element.classList.remove(Sn),
                  l.reflow(this._element),
                  this._element.classList.add(Ln),
                  this._config.animation)
                ) {
                  var i = l.getTransitionDurationFromElement(this._element);
                  t(this._element).one(l.TRANSITION_END, r).emulateTransitionEnd(i);
                } else r();
              }
            }),
            (n.hide = function () {
              if (this._element.classList.contains(Tn)) {
                var e = t.Event(En.HIDE);
                t(this._element).trigger(e), e.isDefaultPrevented() || this._close();
              }
            }),
            (n.dispose = function () {
              clearTimeout(this._timeout),
                (this._timeout = null),
                this._element.classList.contains(Tn) && this._element.classList.remove(Tn),
                t(this._element).off(En.CLICK_DISMISS),
                t.removeData(this._element, "bs.toast"),
                (this._element = null),
                (this._config = null);
            }),
            (n._getConfig = function (e) {
              return (
                (e = a(
                  {},
                  Cn,
                  {},
                  t(this._element).data(),
                  {},
                  "object" == typeof e && e ? e : {},
                )),
                l.typeCheckConfig("toast", e, this.constructor.DefaultType),
                e
              );
            }),
            (n._setListeners = function () {
              var e = this;
              t(this._element).on(En.CLICK_DISMISS, kn, function () {
                return e.hide();
              });
            }),
            (n._close = function () {
              var e = this,
                n = function () {
                  e._element.classList.add(Sn), t(e._element).trigger(En.HIDDEN);
                };
              if ((this._element.classList.remove(Tn), this._config.animation)) {
                var r = l.getTransitionDurationFromElement(this._element);
                t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(r);
              } else n();
            }),
            (e._jQueryInterface = function (n) {
              return this.each(function () {
                var r = t(this),
                  i = r.data("bs.toast");
                if (
                  (i || ((i = new e(this, "object" == typeof n && n)), r.data("bs.toast", i)),
                  "string" == typeof n)
                ) {
                  if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                  i[n](this);
                }
              });
            }),
            i(e, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return An;
                },
              },
              {
                key: "Default",
                get: function () {
                  return Cn;
                },
              },
            ]),
            e
          );
        })();
      (t.fn.toast = Dn._jQueryInterface),
        (t.fn.toast.Constructor = Dn),
        (t.fn.toast.noConflict = function () {
          return (t.fn.toast = wn), Dn._jQueryInterface;
        }),
        (e.Alert = m),
        (e.Button = C),
        (e.Carousel = ne),
        (e.Collapse = ge),
        (e.Dropdown = We),
        (e.Modal = ot),
        (e.Popover = Ft),
        (e.Scrollspy = on),
        (e.Tab = _n),
        (e.Toast = Dn),
        (e.Tooltip = kt),
        (e.Util = l),
        Object.defineProperty(e, "__esModule", { value: !0 });
    })(t, n(34), n(113));
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        /**!
         * @fileOverview Kickass library to create and place poppers near their reference elements.
         * @version 1.16.1
         * @license
         * Copyright (c) 2016 Federico Zivolo and contributors
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE.
         */
        var n =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            "undefined" != typeof navigator,
          r = (function () {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
              if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          })();
        var i =
          n && window.Promise
            ? function (e) {
                var t = !1;
                return function () {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function () {
                      (t = !1), e();
                    }));
                };
              }
            : function (e) {
                var t = !1;
                return function () {
                  t ||
                    ((t = !0),
                    setTimeout(function () {
                      (t = !1), e();
                    }, r));
                };
              };
        function o(e) {
          return e && "[object Function]" === {}.toString.call(e);
        }
        function s(e, t) {
          if (1 !== e.nodeType) return [];
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function a(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function c(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = s(e),
            n = t.overflow,
            r = t.overflowX,
            i = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(a(e));
        }
        function l(e) {
          return e && e.referenceNode ? e.referenceNode : e;
        }
        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
          f = n && /MSIE 10/.test(navigator.userAgent);
        function d(e) {
          return 11 === e ? u : 10 === e ? f : u || f;
        }
        function p(e) {
          if (!e) return document.documentElement;
          for (
            var t = d(10) ? document.body : null, n = e.offsetParent || null;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var r = n && n.nodeName;
          return r && "BODY" !== r && "HTML" !== r
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position")
              ? p(n)
              : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function h(e) {
          return null !== e.parentNode ? h(e.parentNode) : e;
        }
        function m(e, t) {
          if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
          var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            i = n ? t : e,
            o = document.createRange();
          o.setStart(r, 0), o.setEnd(i, 0);
          var s,
            a,
            c = o.commonAncestorContainer;
          if ((e !== c && t !== c) || r.contains(i))
            return "BODY" === (a = (s = c).nodeName) ||
              ("HTML" !== a && p(s.firstElementChild) !== s)
              ? p(c)
              : c;
          var l = h(e);
          return l.host ? m(l.host, t) : m(e, h(t).host);
        }
        function g(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            r = e.nodeName;
          if ("BODY" === r || "HTML" === r) {
            var i = e.ownerDocument.documentElement,
              o = e.ownerDocument.scrollingElement || i;
            return o[n];
          }
          return e[n];
        }
        function v(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = g(t, "top"),
            i = g(t, "left"),
            o = n ? -1 : 1;
          return (e.top += r * o), (e.bottom += r * o), (e.left += i * o), (e.right += i * o), e;
        }
        function y(e, t) {
          var n = "x" === t ? "Left" : "Top",
            r = "Left" === n ? "Right" : "Bottom";
          return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"]);
        }
        function b(e, t, n, r) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            d(10)
              ? parseInt(n["offset" + e]) +
                  parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) +
                  parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")])
              : 0,
          );
        }
        function _(e) {
          var t = e.body,
            n = e.documentElement,
            r = d(10) && getComputedStyle(n);
          return { height: b("Height", t, n, r), width: b("Width", t, n, r) };
        }
        var w = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          },
          E = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          x = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          },
          S =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            };
        function T(e) {
          return S({}, e, { right: e.left + e.width, bottom: e.top + e.height });
        }
        function L(e) {
          var t = {};
          try {
            if (d(10)) {
              t = e.getBoundingClientRect();
              var n = g(e, "top"),
                r = g(e, "left");
              (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          var i = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
            o = "HTML" === e.nodeName ? _(e.ownerDocument) : {},
            a = o.width || e.clientWidth || i.width,
            c = o.height || e.clientHeight || i.height,
            l = e.offsetWidth - a,
            u = e.offsetHeight - c;
          if (l || u) {
            var f = s(e);
            (l -= y(f, "x")), (u -= y(f, "y")), (i.width -= l), (i.height -= u);
          }
          return T(i);
        }
        function A(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = d(10),
            i = "HTML" === t.nodeName,
            o = L(e),
            a = L(t),
            l = c(e),
            u = s(t),
            f = parseFloat(u.borderTopWidth),
            p = parseFloat(u.borderLeftWidth);
          n && i && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
          var h = T({
            top: o.top - a.top - f,
            left: o.left - a.left - p,
            width: o.width,
            height: o.height,
          });
          if (((h.marginTop = 0), (h.marginLeft = 0), !r && i)) {
            var m = parseFloat(u.marginTop),
              g = parseFloat(u.marginLeft);
            (h.top -= f - m),
              (h.bottom -= f - m),
              (h.left -= p - g),
              (h.right -= p - g),
              (h.marginTop = m),
              (h.marginLeft = g);
          }
          return (r && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (h = v(h, t)), h;
        }
        function C(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            r = A(e, n),
            i = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : g(n),
            a = t ? 0 : g(n, "left"),
            c = {
              top: s - r.top + r.marginTop,
              left: a - r.left + r.marginLeft,
              width: i,
              height: o,
            };
          return T(c);
        }
        function k(e) {
          var t = e.nodeName;
          if ("BODY" === t || "HTML" === t) return !1;
          if ("fixed" === s(e, "position")) return !0;
          var n = a(e);
          return !!n && k(n);
        }
        function D(e) {
          if (!e || !e.parentElement || d()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === s(t, "transform"); ) t = t.parentElement;
          return t || document.documentElement;
        }
        function O(e, t, n, r) {
          var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            s = i ? D(e) : m(e, l(t));
          if ("viewport" === r) o = C(s, i);
          else {
            var u = void 0;
            "scrollParent" === r
              ? "BODY" === (u = c(a(t))).nodeName && (u = e.ownerDocument.documentElement)
              : (u = "window" === r ? e.ownerDocument.documentElement : r);
            var f = A(u, s, i);
            if ("HTML" !== u.nodeName || k(s)) o = f;
            else {
              var d = _(e.ownerDocument),
                p = d.height,
                h = d.width;
              (o.top += f.top - f.marginTop),
                (o.bottom = p + f.top),
                (o.left += f.left - f.marginLeft),
                (o.right = h + f.left);
            }
          }
          var g = "number" == typeof (n = n || 0);
          return (
            (o.left += g ? n : n.left || 0),
            (o.top += g ? n : n.top || 0),
            (o.right -= g ? n : n.right || 0),
            (o.bottom -= g ? n : n.bottom || 0),
            o
          );
        }
        function N(e) {
          return e.width * e.height;
        }
        function I(e, t, n, r, i) {
          var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var s = O(n, r, o, i),
            a = {
              top: { width: s.width, height: t.top - s.top },
              right: { width: s.right - t.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - t.bottom },
              left: { width: t.left - s.left, height: s.height },
            },
            c = Object.keys(a)
              .map(function (e) {
                return S({ key: e }, a[e], { area: N(a[e]) });
              })
              .sort(function (e, t) {
                return t.area - e.area;
              }),
            l = c.filter(function (e) {
              var t = e.width,
                r = e.height;
              return t >= n.clientWidth && r >= n.clientHeight;
            }),
            u = l.length > 0 ? l[0].key : c[0].key,
            f = e.split("-")[1];
          return u + (f ? "-" + f : "");
        }
        function j(e, t, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = r ? D(t) : m(t, l(n));
          return A(n, i, r);
        }
        function q(e) {
          var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return { width: e.offsetWidth + r, height: e.offsetHeight + n };
        }
        function P(e) {
          var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
          return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
          });
        }
        function H(e, t, n) {
          n = n.split("-")[0];
          var r = q(e),
            i = { width: r.width, height: r.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            c = o ? "height" : "width",
            l = o ? "width" : "height";
          return (i[s] = t[s] + t[c] / 2 - r[c] / 2), (i[a] = n === a ? t[a] - r[l] : t[P(a)]), i;
        }
        function R(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function M(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                  0,
                  (function (e, t, n) {
                    if (Array.prototype.findIndex)
                      return e.findIndex(function (e) {
                        return e[t] === n;
                      });
                    var r = R(e, function (e) {
                      return e[t] === n;
                    });
                    return e.indexOf(r);
                  })(e, "name", n),
                )
            ).forEach(function (e) {
              e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
              var n = e.function || e.fn;
              e.enabled &&
                o(n) &&
                ((t.offsets.popper = T(t.offsets.popper)),
                (t.offsets.reference = T(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function F() {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (e.offsets.reference = j(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed,
            )),
              (e.placement = I(
                this.options.placement,
                e.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding,
              )),
              (e.originalPlacement = e.placement),
              (e.positionFixed = this.options.positionFixed),
              (e.offsets.popper = H(this.popper, e.offsets.reference, e.placement)),
              (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
              (e = M(this.modifiers, e)),
              this.state.isCreated
                ? this.options.onUpdate(e)
                : ((this.state.isCreated = !0), this.options.onCreate(e));
          }
        }
        function W(e, t) {
          return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function B(e) {
          for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              r = 0;
            r < t.length;
            r++
          ) {
            var i = t[r],
              o = i ? "" + i + n : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function z() {
          return (
            (this.state.isDestroyed = !0),
            W(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[B("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function U(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function V(e, t, n, r) {
          (n.updateBound = r), U(e).addEventListener("resize", n.updateBound, { passive: !0 });
          var i = c(e);
          return (
            (function e(t, n, r, i) {
              var o = "BODY" === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, r, { passive: !0 }),
                o || e(c(s.parentNode), n, r, i),
                i.push(s);
            })(i, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = i),
            (n.eventsEnabled = !0),
            n
          );
        }
        function $() {
          this.state.eventsEnabled ||
            (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate));
        }
        function Q() {
          var e, t;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
              ((e = this.reference),
              (t = this.state),
              U(e).removeEventListener("resize", t.updateBound),
              t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
              }),
              (t.updateBound = null),
              (t.scrollParents = []),
              (t.scrollElement = null),
              (t.eventsEnabled = !1),
              t)));
        }
        function K(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function Y(e, t) {
          Object.keys(t).forEach(function (n) {
            var r = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
              K(t[n]) &&
              (r = "px"),
              (e.style[n] = t[n] + r);
          });
        }
        var X = n && /Firefox/i.test(navigator.userAgent);
        function G(e, t, n) {
          var r = R(e, function (e) {
              return e.name === t;
            }),
            i =
              !!r &&
              e.some(function (e) {
                return e.name === n && e.enabled && e.order < r.order;
              });
          if (!i) {
            var o = "`" + t + "`",
              s = "`" + n + "`";
            console.warn(
              s +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!",
            );
          }
          return i;
        }
        var J = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          Z = J.slice(3);
        function ee(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Z.indexOf(e),
            r = Z.slice(n + 1).concat(Z.slice(0, n));
          return t ? r.reverse() : r;
        }
        var te = "flip",
          ne = "clockwise",
          re = "counterclockwise";
        function ie(e, t, n, r) {
          var i = [0, 0],
            o = -1 !== ["right", "left"].indexOf(r),
            s = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
            }),
            a = s.indexOf(
              R(s, function (e) {
                return -1 !== e.search(/,|\s/);
              }),
            );
          s[a] &&
            -1 === s[a].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead.",
            );
          var c = /\s*,\s*|\s+/,
            l =
              -1 !== a
                ? [
                    s.slice(0, a).concat([s[a].split(c)[0]]),
                    [s[a].split(c)[1]].concat(s.slice(a + 1)),
                  ]
                : [s];
          return (
            (l = l.map(function (e, r) {
              var i = (1 === r ? !o : o) ? "height" : "width",
                s = !1;
              return e
                .reduce(function (e, t) {
                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                    ? ((e[e.length - 1] = t), (s = !0), e)
                    : s
                    ? ((e[e.length - 1] += t), (s = !1), e)
                    : e.concat(t);
                }, [])
                .map(function (e) {
                  return (function (e, t, n, r) {
                    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      o = +i[1],
                      s = i[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                      var a = void 0;
                      switch (s) {
                        case "%p":
                          a = n;
                          break;
                        case "%":
                        case "%r":
                        default:
                          a = r;
                      }
                      return (T(a)[t] / 100) * o;
                    }
                    if ("vh" === s || "vw" === s) {
                      return (
                        (("vh" === s
                          ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0,
                            )) /
                          100) *
                        o
                      );
                    }
                    return o;
                  })(e, i, t, n);
                });
            })).forEach(function (e, t) {
              e.forEach(function (n, r) {
                K(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1));
              });
            }),
            i
          );
        }
        var oe = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function (e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    r = t.split("-")[1];
                  if (r) {
                    var i = e.offsets,
                      o = i.reference,
                      s = i.popper,
                      a = -1 !== ["bottom", "top"].indexOf(n),
                      c = a ? "left" : "top",
                      l = a ? "width" : "height",
                      u = { start: x({}, c, o[c]), end: x({}, c, o[c] + o[l] - s[l]) };
                    e.offsets.popper = S({}, s, u[r]);
                  }
                  return e;
                },
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.offset,
                    r = e.placement,
                    i = e.offsets,
                    o = i.popper,
                    s = i.reference,
                    a = r.split("-")[0],
                    c = void 0;
                  return (
                    (c = K(+n) ? [+n, 0] : ie(n, o, s, a)),
                    "left" === a
                      ? ((o.top += c[0]), (o.left -= c[1]))
                      : "right" === a
                      ? ((o.top += c[0]), (o.left += c[1]))
                      : "top" === a
                      ? ((o.left += c[0]), (o.top -= c[1]))
                      : "bottom" === a && ((o.left += c[0]), (o.top += c[1])),
                    (e.popper = o),
                    e
                  );
                },
                offset: 0,
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.boundariesElement || p(e.instance.popper);
                  e.instance.reference === n && (n = p(n));
                  var r = B("transform"),
                    i = e.instance.popper.style,
                    o = i.top,
                    s = i.left,
                    a = i[r];
                  (i.top = ""), (i.left = ""), (i[r] = "");
                  var c = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                  (i.top = o), (i.left = s), (i[r] = a), (t.boundaries = c);
                  var l = t.priority,
                    u = e.offsets.popper,
                    f = {
                      primary: function (e) {
                        var n = u[e];
                        return (
                          u[e] < c[e] && !t.escapeWithReference && (n = Math.max(u[e], c[e])),
                          x({}, e, n)
                        );
                      },
                      secondary: function (e) {
                        var n = "right" === e ? "left" : "top",
                          r = u[n];
                        return (
                          u[e] > c[e] &&
                            !t.escapeWithReference &&
                            (r = Math.min(u[n], c[e] - ("right" === e ? u.width : u.height))),
                          x({}, n, r)
                        );
                      },
                    };
                  return (
                    l.forEach(function (e) {
                      var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                      u = S({}, u, f[t](e));
                    }),
                    (e.offsets.popper = u),
                    e
                  );
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent",
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (e) {
                  var t = e.offsets,
                    n = t.popper,
                    r = t.reference,
                    i = e.placement.split("-")[0],
                    o = Math.floor,
                    s = -1 !== ["top", "bottom"].indexOf(i),
                    a = s ? "right" : "bottom",
                    c = s ? "left" : "top",
                    l = s ? "width" : "height";
                  return (
                    n[a] < o(r[c]) && (e.offsets.popper[c] = o(r[c]) - n[l]),
                    n[c] > o(r[a]) && (e.offsets.popper[c] = o(r[a])),
                    e
                  );
                },
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function (e, t) {
                  var n;
                  if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
                  var r = t.element;
                  if ("string" == typeof r) {
                    if (!(r = e.instance.popper.querySelector(r))) return e;
                  } else if (!e.instance.popper.contains(r))
                    return (
                      console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                      e
                    );
                  var i = e.placement.split("-")[0],
                    o = e.offsets,
                    a = o.popper,
                    c = o.reference,
                    l = -1 !== ["left", "right"].indexOf(i),
                    u = l ? "height" : "width",
                    f = l ? "Top" : "Left",
                    d = f.toLowerCase(),
                    p = l ? "left" : "top",
                    h = l ? "bottom" : "right",
                    m = q(r)[u];
                  c[h] - m < a[d] && (e.offsets.popper[d] -= a[d] - (c[h] - m)),
                    c[d] + m > a[h] && (e.offsets.popper[d] += c[d] + m - a[h]),
                    (e.offsets.popper = T(e.offsets.popper));
                  var g = c[d] + c[u] / 2 - m / 2,
                    v = s(e.instance.popper),
                    y = parseFloat(v["margin" + f]),
                    b = parseFloat(v["border" + f + "Width"]),
                    _ = g - e.offsets.popper[d] - y - b;
                  return (
                    (_ = Math.max(Math.min(a[u] - m, _), 0)),
                    (e.arrowElement = r),
                    (e.offsets.arrow = (x((n = {}), d, Math.round(_)), x(n, p, ""), n)),
                    e
                  );
                },
                element: "[x-arrow]",
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function (e, t) {
                  if (W(e.instance.modifiers, "inner")) return e;
                  if (e.flipped && e.placement === e.originalPlacement) return e;
                  var n = O(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      t.boundariesElement,
                      e.positionFixed,
                    ),
                    r = e.placement.split("-")[0],
                    i = P(r),
                    o = e.placement.split("-")[1] || "",
                    s = [];
                  switch (t.behavior) {
                    case te:
                      s = [r, i];
                      break;
                    case ne:
                      s = ee(r);
                      break;
                    case re:
                      s = ee(r, !0);
                      break;
                    default:
                      s = t.behavior;
                  }
                  return (
                    s.forEach(function (a, c) {
                      if (r !== a || s.length === c + 1) return e;
                      (r = e.placement.split("-")[0]), (i = P(r));
                      var l = e.offsets.popper,
                        u = e.offsets.reference,
                        f = Math.floor,
                        d =
                          ("left" === r && f(l.right) > f(u.left)) ||
                          ("right" === r && f(l.left) < f(u.right)) ||
                          ("top" === r && f(l.bottom) > f(u.top)) ||
                          ("bottom" === r && f(l.top) < f(u.bottom)),
                        p = f(l.left) < f(n.left),
                        h = f(l.right) > f(n.right),
                        m = f(l.top) < f(n.top),
                        g = f(l.bottom) > f(n.bottom),
                        v =
                          ("left" === r && p) ||
                          ("right" === r && h) ||
                          ("top" === r && m) ||
                          ("bottom" === r && g),
                        y = -1 !== ["top", "bottom"].indexOf(r),
                        b =
                          !!t.flipVariations &&
                          ((y && "start" === o && p) ||
                            (y && "end" === o && h) ||
                            (!y && "start" === o && m) ||
                            (!y && "end" === o && g)),
                        _ =
                          !!t.flipVariationsByContent &&
                          ((y && "start" === o && h) ||
                            (y && "end" === o && p) ||
                            (!y && "start" === o && g) ||
                            (!y && "end" === o && m)),
                        w = b || _;
                      (d || v || w) &&
                        ((e.flipped = !0),
                        (d || v) && (r = s[c + 1]),
                        w &&
                          (o = (function (e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e;
                          })(o)),
                        (e.placement = r + (o ? "-" + o : "")),
                        (e.offsets.popper = S(
                          {},
                          e.offsets.popper,
                          H(e.instance.popper, e.offsets.reference, e.placement),
                        )),
                        (e = M(e.instance.modifiers, e, "flip")));
                    }),
                    e
                  );
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1,
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function (e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    r = e.offsets,
                    i = r.popper,
                    o = r.reference,
                    s = -1 !== ["left", "right"].indexOf(n),
                    a = -1 === ["top", "left"].indexOf(n);
                  return (
                    (i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0)),
                    (e.placement = P(t)),
                    (e.offsets.popper = T(i)),
                    e
                  );
                },
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function (e) {
                  if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
                  var t = e.offsets.reference,
                    n = R(e.instance.modifiers, function (e) {
                      return "preventOverflow" === e.name;
                    }).boundaries;
                  if (
                    t.bottom < n.top ||
                    t.left > n.right ||
                    t.top > n.bottom ||
                    t.right < n.left
                  ) {
                    if (!0 === e.hide) return e;
                    (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                  } else {
                    if (!1 === e.hide) return e;
                    (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                  }
                  return e;
                },
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.x,
                    r = t.y,
                    i = e.offsets.popper,
                    o = R(e.instance.modifiers, function (e) {
                      return "applyStyle" === e.name;
                    }).gpuAcceleration;
                  void 0 !== o &&
                    console.warn(
                      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!",
                    );
                  var s = void 0 !== o ? o : t.gpuAcceleration,
                    a = p(e.instance.popper),
                    c = L(a),
                    l = { position: i.position },
                    u = (function (e, t) {
                      var n = e.offsets,
                        r = n.popper,
                        i = n.reference,
                        o = Math.round,
                        s = Math.floor,
                        a = function (e) {
                          return e;
                        },
                        c = o(i.width),
                        l = o(r.width),
                        u = -1 !== ["left", "right"].indexOf(e.placement),
                        f = -1 !== e.placement.indexOf("-"),
                        d = t ? (u || f || c % 2 == l % 2 ? o : s) : a,
                        p = t ? o : a;
                      return {
                        left: d(c % 2 == 1 && l % 2 == 1 && !f && t ? r.left - 1 : r.left),
                        top: p(r.top),
                        bottom: p(r.bottom),
                        right: d(r.right),
                      };
                    })(e, window.devicePixelRatio < 2 || !X),
                    f = "bottom" === n ? "top" : "bottom",
                    d = "right" === r ? "left" : "right",
                    h = B("transform"),
                    m = void 0,
                    g = void 0;
                  if (
                    ((g =
                      "bottom" === f
                        ? "HTML" === a.nodeName
                          ? -a.clientHeight + u.bottom
                          : -c.height + u.bottom
                        : u.top),
                    (m =
                      "right" === d
                        ? "HTML" === a.nodeName
                          ? -a.clientWidth + u.right
                          : -c.width + u.right
                        : u.left),
                    s && h)
                  )
                    (l[h] = "translate3d(" + m + "px, " + g + "px, 0)"),
                      (l[f] = 0),
                      (l[d] = 0),
                      (l.willChange = "transform");
                  else {
                    var v = "bottom" === f ? -1 : 1,
                      y = "right" === d ? -1 : 1;
                    (l[f] = g * v), (l[d] = m * y), (l.willChange = f + ", " + d);
                  }
                  var b = { "x-placement": e.placement };
                  return (
                    (e.attributes = S({}, b, e.attributes)),
                    (e.styles = S({}, l, e.styles)),
                    (e.arrowStyles = S({}, e.offsets.arrow, e.arrowStyles)),
                    e
                  );
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right",
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (e) {
                  var t, n;
                  return (
                    Y(e.instance.popper, e.styles),
                    (t = e.instance.popper),
                    (n = e.attributes),
                    Object.keys(n).forEach(function (e) {
                      !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                    }),
                    e.arrowElement &&
                      Object.keys(e.arrowStyles).length &&
                      Y(e.arrowElement, e.arrowStyles),
                    e
                  );
                },
                onLoad: function (e, t, n, r, i) {
                  var o = j(i, t, e, n.positionFixed),
                    s = I(
                      n.placement,
                      o,
                      t,
                      e,
                      n.modifiers.flip.boundariesElement,
                      n.modifiers.flip.padding,
                    );
                  return (
                    t.setAttribute("x-placement", s),
                    Y(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                    n
                  );
                },
                gpuAcceleration: void 0,
              },
            },
          },
          se = (function () {
            function e(t, n) {
              var r = this,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              w(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(r.update);
                }),
                (this.update = i(this.update.bind(this))),
                (this.options = S({}, e.Defaults, s)),
                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(S({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
                  r.options.modifiers[t] = S(
                    {},
                    e.Defaults.modifiers[t] || {},
                    s.modifiers ? s.modifiers[t] : {},
                  );
                }),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (e) {
                    return S({ name: e }, r.options.modifiers[e]);
                  })
                  .sort(function (e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function (e) {
                  e.enabled &&
                    o(e.onLoad) &&
                    e.onLoad(r.reference, r.popper, r.options, e, r.state);
                }),
                this.update();
              var a = this.options.eventsEnabled;
              a && this.enableEventListeners(), (this.state.eventsEnabled = a);
            }
            return (
              E(e, [
                {
                  key: "update",
                  value: function () {
                    return F.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return z.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return $.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return Q.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (se.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
          (se.placements = J),
          (se.Defaults = oe),
          (t.default = se);
      }.call(this, n(69));
  },
  function (e, t, n) {
    "use strict";
    var r = n(42).forEach,
      i = n(115),
      o = n(21),
      s = i("forEach"),
      a = o("forEach");
    e.exports =
      s && a
        ? [].forEach
        : function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1,
          );
        })
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(61),
      i = n(81);
    e.exports = r
      ? {}.toString
      : function () {
          return "[object " + i(this) + "]";
        };
  },
  function (e, t, n) {
    var r = n(1);
    e.exports = r.Promise;
  },
  function (e, t, n) {
    var r,
      i,
      o,
      s,
      a,
      c,
      l,
      u,
      f = n(1),
      d = n(22).f,
      p = n(14),
      h = n(87).set,
      m = n(89),
      g = f.MutationObserver || f.WebKitMutationObserver,
      v = f.process,
      y = f.Promise,
      b = "process" == p(v),
      _ = d(f, "queueMicrotask"),
      w = _ && _.value;
    w ||
      ((r = function () {
        var e, t;
        for (b && (e = v.domain) && e.exit(); i; ) {
          (t = i.fn), (i = i.next);
          try {
            t();
          } catch (e) {
            throw (i ? s() : (o = void 0), e);
          }
        }
        (o = void 0), e && e.enter();
      }),
      b
        ? (s = function () {
            v.nextTick(r);
          })
        : g && !m
        ? ((a = !0),
          (c = document.createTextNode("")),
          new g(r).observe(c, { characterData: !0 }),
          (s = function () {
            c.data = a = !a;
          }))
        : y && y.resolve
        ? ((l = y.resolve(void 0)),
          (u = l.then),
          (s = function () {
            u.call(l, r);
          }))
        : (s = function () {
            h.call(f, r);
          })),
      (e.exports =
        w ||
        function (e) {
          var t = { fn: e, next: void 0 };
          o && (o.next = t), i || ((i = t), s()), (o = t);
        });
  },
  function (e, t, n) {
    var r = n(8),
      i = n(4),
      o = n(91);
    e.exports = function (e, t) {
      if ((r(e), i(t) && t.constructor === e)) return t;
      var n = o.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function (e, t, n) {
    var r = n(1);
    e.exports = function (e, t) {
      var n = r.console;
      n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
    };
  },
  function (e, t) {
    e.exports = function (e) {
      try {
        return { error: !1, value: e() };
      } catch (e) {
        return { error: !0, value: e };
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(56),
      i = n(8),
      o = n(13),
      s = n(18),
      a = n(58),
      c = n(59);
    r("match", 1, function (e, t, n) {
      return [
        function (t) {
          var n = s(this),
            r = null == t ? void 0 : t[e];
          return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
        },
        function (e) {
          var r = n(t, e, this);
          if (r.done) return r.value;
          var s = i(e),
            l = String(this);
          if (!s.global) return c(s, l);
          var u = s.unicode;
          s.lastIndex = 0;
          for (var f, d = [], p = 0; null !== (f = c(s, l)); ) {
            var h = String(f[0]);
            (d[p] = h), "" === h && (s.lastIndex = a(l, o(s.lastIndex), u)), p++;
          }
          return 0 === p ? null : d;
        },
      ];
    });
  },
  function (e, t, n) {
    n(92)("iterator");
  },
  function (e, t, n) {
    var r = n(10),
      i = n(9),
      o = n(8),
      s = n(67);
    e.exports = r
      ? Object.defineProperties
      : function (e, t) {
          o(e);
          for (var n, r = s(t), a = r.length, c = 0; a > c; ) i.f(e, (n = r[c++]), t[n]);
          return e;
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(95).IteratorPrototype,
      i = n(33),
      o = n(23),
      s = n(30),
      a = n(31),
      c = function () {
        return this;
      };
    e.exports = function (e, t, n) {
      var l = t + " Iterator";
      return (e.prototype = i(r, { next: o(1, n) })), s(e, l, !1, !0), (a[l] = c), e;
    };
  },
  function (e, t, n) {
    var r = n(3);
    e.exports = !r(function () {
      function e() {}
      return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
    });
  },
  function (e, t, n) {
    var r = n(4);
    e.exports = function (e) {
      if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(1),
      o = n(20),
      s = n(25),
      a = n(10),
      c = n(57),
      l = n(77),
      u = n(3),
      f = n(6),
      d = n(43),
      p = n(4),
      h = n(8),
      m = n(16),
      g = n(17),
      v = n(24),
      y = n(23),
      b = n(33),
      _ = n(67),
      w = n(38),
      E = n(129),
      x = n(55),
      S = n(22),
      T = n(9),
      L = n(47),
      A = n(12),
      C = n(15),
      k = n(52),
      D = n(36),
      O = n(26),
      N = n(37),
      I = n(2),
      j = n(93),
      q = n(92),
      P = n(30),
      H = n(19),
      R = n(42).forEach,
      M = D("hidden"),
      F = I("toPrimitive"),
      W = H.set,
      B = H.getterFor("Symbol"),
      z = Object.prototype,
      U = i.Symbol,
      V = o("JSON", "stringify"),
      $ = S.f,
      Q = T.f,
      K = E.f,
      Y = L.f,
      X = k("symbols"),
      G = k("op-symbols"),
      J = k("string-to-symbol-registry"),
      Z = k("symbol-to-string-registry"),
      ee = k("wks"),
      te = i.QObject,
      ne = !te || !te.prototype || !te.prototype.findChild,
      re =
        a &&
        u(function () {
          return (
            7 !=
            b(
              Q({}, "a", {
                get: function () {
                  return Q(this, "a", { value: 7 }).a;
                },
              }),
            ).a
          );
        })
          ? function (e, t, n) {
              var r = $(z, t);
              r && delete z[t], Q(e, t, n), r && e !== z && Q(z, t, r);
            }
          : Q,
      ie = function (e, t) {
        var n = (X[e] = b(U.prototype));
        return W(n, { type: "Symbol", tag: e, description: t }), a || (n.description = t), n;
      },
      oe = l
        ? function (e) {
            return "symbol" == typeof e;
          }
        : function (e) {
            return Object(e) instanceof U;
          },
      se = function (e, t, n) {
        e === z && se(G, t, n), h(e);
        var r = v(t, !0);
        return (
          h(n),
          f(X, r)
            ? (n.enumerable
                ? (f(e, M) && e[M][r] && (e[M][r] = !1), (n = b(n, { enumerable: y(0, !1) })))
                : (f(e, M) || Q(e, M, y(1, {})), (e[M][r] = !0)),
              re(e, r, n))
            : Q(e, r, n)
        );
      },
      ae = function (e, t) {
        h(e);
        var n = g(t),
          r = _(n).concat(fe(n));
        return (
          R(r, function (t) {
            (a && !ce.call(n, t)) || se(e, t, n[t]);
          }),
          e
        );
      },
      ce = function (e) {
        var t = v(e, !0),
          n = Y.call(this, t);
        return (
          !(this === z && f(X, t) && !f(G, t)) &&
          (!(n || !f(this, t) || !f(X, t) || (f(this, M) && this[M][t])) || n)
        );
      },
      le = function (e, t) {
        var n = g(e),
          r = v(t, !0);
        if (n !== z || !f(X, r) || f(G, r)) {
          var i = $(n, r);
          return !i || !f(X, r) || (f(n, M) && n[M][r]) || (i.enumerable = !0), i;
        }
      },
      ue = function (e) {
        var t = K(g(e)),
          n = [];
        return (
          R(t, function (e) {
            f(X, e) || f(O, e) || n.push(e);
          }),
          n
        );
      },
      fe = function (e) {
        var t = e === z,
          n = K(t ? G : g(e)),
          r = [];
        return (
          R(n, function (e) {
            !f(X, e) || (t && !f(z, e)) || r.push(X[e]);
          }),
          r
        );
      };
    (c ||
      (C(
        (U = function () {
          if (this instanceof U) throw TypeError("Symbol is not a constructor");
          var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = N(e),
            n = function (e) {
              this === z && n.call(G, e),
                f(this, M) && f(this[M], t) && (this[M][t] = !1),
                re(this, t, y(1, e));
            };
          return a && ne && re(z, t, { configurable: !0, set: n }), ie(t, e);
        }).prototype,
        "toString",
        function () {
          return B(this).tag;
        },
      ),
      C(U, "withoutSetter", function (e) {
        return ie(N(e), e);
      }),
      (L.f = ce),
      (T.f = se),
      (S.f = le),
      (w.f = E.f = ue),
      (x.f = fe),
      (j.f = function (e) {
        return ie(I(e), e);
      }),
      a &&
        (Q(U.prototype, "description", {
          configurable: !0,
          get: function () {
            return B(this).description;
          },
        }),
        s || C(z, "propertyIsEnumerable", ce, { unsafe: !0 }))),
    r({ global: !0, wrap: !0, forced: !c, sham: !c }, { Symbol: U }),
    R(_(ee), function (e) {
      q(e);
    }),
    r(
      { target: "Symbol", stat: !0, forced: !c },
      {
        for: function (e) {
          var t = String(e);
          if (f(J, t)) return J[t];
          var n = U(t);
          return (J[t] = n), (Z[n] = t), n;
        },
        keyFor: function (e) {
          if (!oe(e)) throw TypeError(e + " is not a symbol");
          if (f(Z, e)) return Z[e];
        },
        useSetter: function () {
          ne = !0;
        },
        useSimple: function () {
          ne = !1;
        },
      },
    ),
    r(
      { target: "Object", stat: !0, forced: !c, sham: !a },
      {
        create: function (e, t) {
          return void 0 === t ? b(e) : ae(b(e), t);
        },
        defineProperty: se,
        defineProperties: ae,
        getOwnPropertyDescriptor: le,
      },
    ),
    r(
      { target: "Object", stat: !0, forced: !c },
      { getOwnPropertyNames: ue, getOwnPropertySymbols: fe },
    ),
    r(
      {
        target: "Object",
        stat: !0,
        forced: u(function () {
          x.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (e) {
          return x.f(m(e));
        },
      },
    ),
    V) &&
      r(
        {
          target: "JSON",
          stat: !0,
          forced:
            !c ||
            u(function () {
              var e = U();
              return "[null]" != V([e]) || "{}" != V({ a: e }) || "{}" != V(Object(e));
            }),
        },
        {
          stringify: function (e, t, n) {
            for (var r, i = [e], o = 1; arguments.length > o; ) i.push(arguments[o++]);
            if (((r = t), (p(t) || void 0 !== e) && !oe(e)))
              return (
                d(t) ||
                  (t = function (e, t) {
                    if (("function" == typeof r && (t = r.call(this, e, t)), !oe(t))) return t;
                  }),
                (i[1] = t),
                V.apply(null, i)
              );
          },
        },
      );
    U.prototype[F] || A(U.prototype, F, U.prototype.valueOf), P(U, "Symbol"), (O[M] = !0);
  },
  function (e, t, n) {
    var r = n(17),
      i = n(38).f,
      o = {}.toString,
      s =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    e.exports.f = function (e) {
      return s && "[object Window]" == o.call(e)
        ? (function (e) {
            try {
              return i(e);
            } catch (e) {
              return s.slice();
            }
          })(e)
        : i(r(e));
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(10),
      o = n(1),
      s = n(6),
      a = n(4),
      c = n(9).f,
      l = n(72),
      u = o.Symbol;
    if (
      i &&
      "function" == typeof u &&
      (!("description" in u.prototype) || void 0 !== u().description)
    ) {
      var f = {},
        d = function () {
          var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
            t = this instanceof d ? new u(e) : void 0 === e ? u() : u(e);
          return "" === e && (f[t] = !0), t;
        };
      l(d, u);
      var p = (d.prototype = u.prototype);
      p.constructor = d;
      var h = p.toString,
        m = "Symbol(test)" == String(u("test")),
        g = /^Symbol\((.*)\)[^)]+$/;
      c(p, "description", {
        configurable: !0,
        get: function () {
          var e = a(this) ? this.valueOf() : this,
            t = h.call(e);
          if (s(f, e)) return "";
          var n = m ? t.slice(7, -1) : t.replace(g, "$1");
          return "" === n ? void 0 : n;
        },
      }),
        r({ global: !0, forced: !0 }, { Symbol: d });
    }
  },
  function (e, t, n) {
    var r = n(7),
      i = n(132);
    r(
      {
        target: "Array",
        stat: !0,
        forced: !n(64)(function (e) {
          Array.from(e);
        }),
      },
      { from: i },
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(28),
      i = n(16),
      o = n(86),
      s = n(84),
      a = n(13),
      c = n(46),
      l = n(85);
    e.exports = function (e) {
      var t,
        n,
        u,
        f,
        d,
        p,
        h = i(e),
        m = "function" == typeof this ? this : Array,
        g = arguments.length,
        v = g > 1 ? arguments[1] : void 0,
        y = void 0 !== v,
        b = l(h),
        _ = 0;
      if ((y && (v = r(v, g > 2 ? arguments[2] : void 0, 2)), null == b || (m == Array && s(b))))
        for (n = new m((t = a(h.length))); t > _; _++) (p = y ? v(h[_], _) : h[_]), c(n, _, p);
      else
        for (d = (f = b.call(h)).next, n = new m(); !(u = d.call(f)).done; _++)
          (p = y ? o(f, v, [u.value, _], !0) : u.value), c(n, _, p);
      return (n.length = _), n;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(134),
      i = n(136);
    e.exports = r(
      "Map",
      function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      i,
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(1),
      o = n(39),
      s = n(15),
      a = n(102),
      c = n(63),
      l = n(62),
      u = n(4),
      f = n(3),
      d = n(64),
      p = n(30),
      h = n(103);
    e.exports = function (e, t, n) {
      var m = -1 !== e.indexOf("Map"),
        g = -1 !== e.indexOf("Weak"),
        v = m ? "set" : "add",
        y = i[e],
        b = y && y.prototype,
        _ = y,
        w = {},
        E = function (e) {
          var t = b[e];
          s(
            b,
            e,
            "add" == e
              ? function (e) {
                  return t.call(this, 0 === e ? 0 : e), this;
                }
              : "delete" == e
              ? function (e) {
                  return !(g && !u(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : "get" == e
              ? function (e) {
                  return g && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                }
              : "has" == e
              ? function (e) {
                  return !(g && !u(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : function (e, n) {
                  return t.call(this, 0 === e ? 0 : e, n), this;
                },
          );
        };
      if (
        o(
          e,
          "function" != typeof y ||
            !(
              g ||
              (b.forEach &&
                !f(function () {
                  new y().entries().next();
                }))
            ),
        )
      )
        (_ = n.getConstructor(t, e, m, v)), (a.REQUIRED = !0);
      else if (o(e, !0)) {
        var x = new _(),
          S = x[v](g ? {} : -0, 1) != x,
          T = f(function () {
            x.has(1);
          }),
          L = d(function (e) {
            new y(e);
          }),
          A =
            !g &&
            f(function () {
              for (var e = new y(), t = 5; t--; ) e[v](t, t);
              return !e.has(-0);
            });
        L ||
          (((_ = t(function (t, n) {
            l(t, _, e);
            var r = h(new y(), t, _);
            return null != n && c(n, r[v], r, m), r;
          })).prototype = b),
          (b.constructor = _)),
          (T || A) && (E("delete"), E("has"), m && E("get")),
          (A || S) && E(v),
          g && b.clear && delete b.clear;
      }
      return (
        (w[e] = _), r({ global: !0, forced: _ != y }, w), p(_, e), g || n.setStrong(_, e, m), _
      );
    };
  },
  function (e, t, n) {
    var r = n(3);
    e.exports = !r(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(9).f,
      i = n(33),
      o = n(82),
      s = n(28),
      a = n(62),
      c = n(63),
      l = n(68),
      u = n(83),
      f = n(10),
      d = n(102).fastKey,
      p = n(19),
      h = p.set,
      m = p.getterFor;
    e.exports = {
      getConstructor: function (e, t, n, l) {
        var u = e(function (e, r) {
            a(e, u, t),
              h(e, { type: t, index: i(null), first: void 0, last: void 0, size: 0 }),
              f || (e.size = 0),
              null != r && c(r, e[l], e, n);
          }),
          p = m(t),
          g = function (e, t, n) {
            var r,
              i,
              o = p(e),
              s = v(e, t);
            return (
              s
                ? (s.value = n)
                : ((o.last = s =
                    {
                      index: (i = d(t, !0)),
                      key: t,
                      value: n,
                      previous: (r = o.last),
                      next: void 0,
                      removed: !1,
                    }),
                  o.first || (o.first = s),
                  r && (r.next = s),
                  f ? o.size++ : e.size++,
                  "F" !== i && (o.index[i] = s)),
              e
            );
          },
          v = function (e, t) {
            var n,
              r = p(e),
              i = d(t);
            if ("F" !== i) return r.index[i];
            for (n = r.first; n; n = n.next) if (n.key == t) return n;
          };
        return (
          o(u.prototype, {
            clear: function () {
              for (var e = p(this), t = e.index, n = e.first; n; )
                (n.removed = !0),
                  n.previous && (n.previous = n.previous.next = void 0),
                  delete t[n.index],
                  (n = n.next);
              (e.first = e.last = void 0), f ? (e.size = 0) : (this.size = 0);
            },
            delete: function (e) {
              var t = p(this),
                n = v(this, e);
              if (n) {
                var r = n.next,
                  i = n.previous;
                delete t.index[n.index],
                  (n.removed = !0),
                  i && (i.next = r),
                  r && (r.previous = i),
                  t.first == n && (t.first = r),
                  t.last == n && (t.last = i),
                  f ? t.size-- : this.size--;
              }
              return !!n;
            },
            forEach: function (e) {
              for (
                var t, n = p(this), r = s(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (t = t ? t.next : n.first);

              )
                for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
            },
            has: function (e) {
              return !!v(this, e);
            },
          }),
          o(
            u.prototype,
            n
              ? {
                  get: function (e) {
                    var t = v(this, e);
                    return t && t.value;
                  },
                  set: function (e, t) {
                    return g(this, 0 === e ? 0 : e, t);
                  },
                }
              : {
                  add: function (e) {
                    return g(this, (e = 0 === e ? 0 : e), e);
                  },
                },
          ),
          f &&
            r(u.prototype, "size", {
              get: function () {
                return p(this).size;
              },
            }),
          u
        );
      },
      setStrong: function (e, t, n) {
        var r = t + " Iterator",
          i = m(t),
          o = m(r);
        l(
          e,
          t,
          function (e, t) {
            h(this, { type: r, target: e, state: i(e), kind: t, last: void 0 });
          },
          function () {
            for (var e = o(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous;
            return e.target && (e.last = n = n ? n.next : e.state.first)
              ? "keys" == t
                ? { value: n.key, done: !1 }
                : "values" == t
                ? { value: n.value, done: !1 }
                : { value: [n.key, n.value], done: !1 }
              : ((e.target = void 0), { value: void 0, done: !0 });
          },
          n ? "entries" : "values",
          !n,
          !0,
        ),
          u(t);
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(42).filter,
      o = n(32),
      s = n(21),
      a = o("filter"),
      c = s("filter");
    r(
      { target: "Array", proto: !0, forced: !a || !c },
      {
        filter: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (e, t, n) {
    /*!
     * Bootstrap collapse.js v4.4.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e, t) {
      "use strict";
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      (e = e && e.hasOwnProperty("default") ? e.default : e),
        (t = t && t.hasOwnProperty("default") ? t.default : t);
      var s = "collapse",
        a = "bs.collapse",
        c = e.fn[s],
        l = { toggle: !0, parent: "" },
        u = { toggle: "boolean", parent: "(string|element)" },
        f = {
          SHOW: "show.bs.collapse",
          SHOWN: "shown.bs.collapse",
          HIDE: "hide.bs.collapse",
          HIDDEN: "hidden.bs.collapse",
          CLICK_DATA_API: "click.bs.collapse.data-api",
        },
        d = "show",
        p = "collapse",
        h = "collapsing",
        m = "collapsed",
        g = "width",
        v = "height",
        y = ".show, .collapsing",
        b = '[data-toggle="collapse"]',
        _ = (function () {
          function r(e, n) {
            (this._isTransitioning = !1),
              (this._element = e),
              (this._config = this._getConfig(n)),
              (this._triggerArray = [].slice.call(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    e.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    e.id +
                    '"]',
                ),
              ));
            for (
              var r = [].slice.call(document.querySelectorAll(b)), i = 0, o = r.length;
              i < o;
              i++
            ) {
              var s = r[i],
                a = t.getSelectorFromElement(s),
                c = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                  return t === e;
                });
              null !== a && c.length > 0 && ((this._selector = a), this._triggerArray.push(s));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(this._element, this._triggerArray),
              this._config.toggle && this.toggle();
          }
          var i,
            c,
            _,
            w = r.prototype;
          return (
            (w.toggle = function () {
              e(this._element).hasClass(d) ? this.hide() : this.show();
            }),
            (w.show = function () {
              var n,
                i,
                o = this;
              if (
                !(
                  this._isTransitioning ||
                  e(this._element).hasClass(d) ||
                  (this._parent &&
                    0 ===
                      (n = [].slice.call(this._parent.querySelectorAll(y)).filter(function (e) {
                        return "string" == typeof o._config.parent
                          ? e.getAttribute("data-parent") === o._config.parent
                          : e.classList.contains(p);
                      })).length &&
                    (n = null),
                  n && (i = e(n).not(this._selector).data(a)) && i._isTransitioning)
                )
              ) {
                var s = e.Event(f.SHOW);
                if ((e(this._element).trigger(s), !s.isDefaultPrevented())) {
                  n &&
                    (r._jQueryInterface.call(e(n).not(this._selector), "hide"),
                    i || e(n).data(a, null));
                  var c = this._getDimension();
                  e(this._element).removeClass(p).addClass(h),
                    (this._element.style[c] = 0),
                    this._triggerArray.length &&
                      e(this._triggerArray).removeClass(m).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                  var l = "scroll" + (c[0].toUpperCase() + c.slice(1)),
                    u = t.getTransitionDurationFromElement(this._element);
                  e(this._element)
                    .one(t.TRANSITION_END, function () {
                      e(o._element).removeClass(h).addClass(p).addClass(d),
                        (o._element.style[c] = ""),
                        o.setTransitioning(!1),
                        e(o._element).trigger(f.SHOWN);
                    })
                    .emulateTransitionEnd(u),
                    (this._element.style[c] = this._element[l] + "px");
                }
              }
            }),
            (w.hide = function () {
              var n = this;
              if (!this._isTransitioning && e(this._element).hasClass(d)) {
                var r = e.Event(f.HIDE);
                if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
                  var i = this._getDimension();
                  (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px"),
                    t.reflow(this._element),
                    e(this._element).addClass(h).removeClass(p).removeClass(d);
                  var o = this._triggerArray.length;
                  if (o > 0)
                    for (var s = 0; s < o; s++) {
                      var a = this._triggerArray[s],
                        c = t.getSelectorFromElement(a);
                      null !== c &&
                        (e([].slice.call(document.querySelectorAll(c))).hasClass(d) ||
                          e(a).addClass(m).attr("aria-expanded", !1));
                    }
                  this.setTransitioning(!0), (this._element.style[i] = "");
                  var l = t.getTransitionDurationFromElement(this._element);
                  e(this._element)
                    .one(t.TRANSITION_END, function () {
                      n.setTransitioning(!1),
                        e(n._element).removeClass(h).addClass(p).trigger(f.HIDDEN);
                    })
                    .emulateTransitionEnd(l);
                }
              }
            }),
            (w.setTransitioning = function (e) {
              this._isTransitioning = e;
            }),
            (w.dispose = function () {
              e.removeData(this._element, a),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (w._getConfig = function (e) {
              return (
                ((e = o({}, l, {}, e)).toggle = Boolean(e.toggle)), t.typeCheckConfig(s, e, u), e
              );
            }),
            (w._getDimension = function () {
              return e(this._element).hasClass(g) ? g : v;
            }),
            (w._getParent = function () {
              var n,
                i = this;
              t.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  void 0 !== this._config.parent.jquery && (n = this._config.parent[0]))
                : (n = document.querySelector(this._config.parent));
              var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                s = [].slice.call(n.querySelectorAll(o));
              return (
                e(s).each(function (e, t) {
                  i._addAriaAndCollapsedClass(r._getTargetFromElement(t), [t]);
                }),
                n
              );
            }),
            (w._addAriaAndCollapsedClass = function (t, n) {
              var r = e(t).hasClass(d);
              n.length && e(n).toggleClass(m, !r).attr("aria-expanded", r);
            }),
            (r._getTargetFromElement = function (e) {
              var n = t.getSelectorFromElement(e);
              return n ? document.querySelector(n) : null;
            }),
            (r._jQueryInterface = function (t) {
              return this.each(function () {
                var n = e(this),
                  i = n.data(a),
                  s = o({}, l, {}, n.data(), {}, "object" == typeof t && t ? t : {});
                if (
                  (!i && s.toggle && /show|hide/.test(t) && (s.toggle = !1),
                  i || ((i = new r(this, s)), n.data(a, i)),
                  "string" == typeof t)
                ) {
                  if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                  i[t]();
                }
              });
            }),
            (i = r),
            (_ = [
              {
                key: "VERSION",
                get: function () {
                  return "4.4.1";
                },
              },
              {
                key: "Default",
                get: function () {
                  return l;
                },
              },
            ]),
            (c = null) && n(i.prototype, c),
            _ && n(i, _),
            r
          );
        })();
      return (
        e(document).on(f.CLICK_DATA_API, b, function (n) {
          "A" === n.currentTarget.tagName && n.preventDefault();
          var r = e(this),
            i = t.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
          e(o).each(function () {
            var t = e(this),
              n = t.data(a) ? "toggle" : r.data();
            _._jQueryInterface.call(t, n);
          });
        }),
        (e.fn[s] = _._jQueryInterface),
        (e.fn[s].Constructor = _),
        (e.fn[s].noConflict = function () {
          return (e.fn[s] = c), _._jQueryInterface;
        }),
        _
      );
    })(n(34), n(139));
  },
  function (e, t, n) {
    /*!
     * Bootstrap util.js v4.4.1 (https://getbootstrap.com/)
     * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    e.exports = (function (e) {
      "use strict";
      function t(t) {
        var r = this,
          i = !1;
        return (
          e(this).one(n.TRANSITION_END, function () {
            i = !0;
          }),
          setTimeout(function () {
            i || n.triggerTransitionEnd(r);
          }, t),
          this
        );
      }
      e = e && e.hasOwnProperty("default") ? e.default : e;
      var n = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (e) {
          do {
            e += ~~(1e6 * Math.random());
          } while (document.getElementById(e));
          return e;
        },
        getSelectorFromElement: function (e) {
          var t = e.getAttribute("data-target");
          if (!t || "#" === t) {
            var n = e.getAttribute("href");
            t = n && "#" !== n ? n.trim() : "";
          }
          try {
            return document.querySelector(t) ? t : null;
          } catch (e) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var n = e(t).css("transition-duration"),
            r = e(t).css("transition-delay"),
            i = parseFloat(n),
            o = parseFloat(r);
          return i || o
            ? ((n = n.split(",")[0]), (r = r.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(r)))
            : 0;
        },
        reflow: function (e) {
          return e.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
          e(t).trigger("transitionend");
        },
        supportsTransitionEnd: function () {
          return Boolean("transitionend");
        },
        isElement: function (e) {
          return (e[0] || e).nodeType;
        },
        typeCheckConfig: function (e, t, r) {
          for (var i in r)
            if (Object.prototype.hasOwnProperty.call(r, i)) {
              var o = r[i],
                s = t[i],
                a =
                  s && n.isElement(s)
                    ? "element"
                    : ((c = s),
                      {}.toString
                        .call(c)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(o).test(a))
                throw new Error(
                  e.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    a +
                    '" but expected type "' +
                    o +
                    '".',
                );
            }
          var c;
        },
        findShadowRoot: function (e) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof e.getRootNode) {
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot ? e : e.parentNode ? n.findShadowRoot(e.parentNode) : null;
        },
        jQueryDetection: function () {
          if (void 0 === e)
            throw new TypeError(
              "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
            );
          var t = e.fn.jquery.split(" ")[0].split(".");
          if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || t[0] >= 4)
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
            );
        },
      };
      return (
        n.jQueryDetection(),
        (e.fn.emulateTransitionEnd = t),
        (e.event.special[n.TRANSITION_END] = {
          bindType: "transitionend",
          delegateType: "transitionend",
          handle: function (t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
          },
        }),
        n
      );
    })(n(34));
  },
  function (e, t, n) {
    "use strict";
    var r = n(56),
      i = n(8),
      o = n(16),
      s = n(13),
      a = n(27),
      c = n(18),
      l = n(58),
      u = n(59),
      f = Math.max,
      d = Math.min,
      p = Math.floor,
      h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      m = /\$([$&'`]|\d\d?)/g;
    r("replace", 2, function (e, t, n, r) {
      var g = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        v = r.REPLACE_KEEPS_$0,
        y = g ? "$" : "$0";
      return [
        function (n, r) {
          var i = c(this),
            o = null == n ? void 0 : n[e];
          return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r);
        },
        function (e, r) {
          if ((!g && v) || ("string" == typeof r && -1 === r.indexOf(y))) {
            var o = n(t, e, this, r);
            if (o.done) return o.value;
          }
          var c = i(e),
            p = String(this),
            h = "function" == typeof r;
          h || (r = String(r));
          var m = c.global;
          if (m) {
            var _ = c.unicode;
            c.lastIndex = 0;
          }
          for (var w = []; ; ) {
            var E = u(c, p);
            if (null === E) break;
            if ((w.push(E), !m)) break;
            "" === String(E[0]) && (c.lastIndex = l(p, s(c.lastIndex), _));
          }
          for (var x, S = "", T = 0, L = 0; L < w.length; L++) {
            E = w[L];
            for (
              var A = String(E[0]), C = f(d(a(E.index), p.length), 0), k = [], D = 1;
              D < E.length;
              D++
            )
              k.push(void 0 === (x = E[D]) ? x : String(x));
            var O = E.groups;
            if (h) {
              var N = [A].concat(k, C, p);
              void 0 !== O && N.push(O);
              var I = String(r.apply(void 0, N));
            } else I = b(A, p, C, k, O, r);
            C >= T && ((S += p.slice(T, C) + I), (T = C + A.length));
          }
          return S + p.slice(T);
        },
      ];
      function b(e, n, r, i, s, a) {
        var c = r + e.length,
          l = i.length,
          u = m;
        return (
          void 0 !== s && ((s = o(s)), (u = h)),
          t.call(a, u, function (t, o) {
            var a;
            switch (o.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return n.slice(0, r);
              case "'":
                return n.slice(c);
              case "<":
                a = s[o.slice(1, -1)];
                break;
              default:
                var u = +o;
                if (0 === u) return t;
                if (u > l) {
                  var f = p(u / 10);
                  return 0 === f
                    ? t
                    : f <= l
                    ? void 0 === i[f - 1]
                      ? o.charAt(1)
                      : i[f - 1] + o.charAt(1)
                    : t;
                }
                a = i[u - 1];
            }
            return void 0 === a ? "" : a;
          })
        );
      }
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(42).map,
      o = n(32),
      s = n(21),
      a = o("map"),
      c = s("map");
    r(
      { target: "Array", proto: !0, forced: !a || !c },
      {
        map: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (e, t, n) {
    var r = n(7),
      i = n(143);
    r({ target: "Object", stat: !0, forced: Object.assign !== i }, { assign: i });
  },
  function (e, t, n) {
    "use strict";
    var r = n(10),
      i = n(3),
      o = n(67),
      s = n(55),
      a = n(47),
      c = n(16),
      l = n(48),
      u = Object.assign,
      f = Object.defineProperty;
    e.exports =
      !u ||
      i(function () {
        if (
          r &&
          1 !==
            u(
              { b: 1 },
              u(
                f({}, "a", {
                  enumerable: !0,
                  get: function () {
                    f(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 },
              ),
            ).b
        )
          return !0;
        var e = {},
          t = {},
          n = Symbol();
        return (
          (e[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != u({}, e)[n] || "abcdefghijklmnopqrst" != o(u({}, t)).join("")
        );
      })
        ? function (e, t) {
            for (var n = c(e), i = arguments.length, u = 1, f = s.f, d = a.f; i > u; )
              for (
                var p, h = l(arguments[u++]), m = f ? o(h).concat(f(h)) : o(h), g = m.length, v = 0;
                g > v;

              )
                (p = m[v++]), (r && !d.call(h, p)) || (n[p] = h[p]);
            return n;
          }
        : u;
  },
  function (e, t, n) {
    "use strict";
    var r = n(10),
      i = n(1),
      o = n(39),
      s = n(15),
      a = n(6),
      c = n(14),
      l = n(103),
      u = n(24),
      f = n(3),
      d = n(33),
      p = n(38).f,
      h = n(22).f,
      m = n(9).f,
      g = n(145).trim,
      v = i.Number,
      y = v.prototype,
      b = "Number" == c(d(y)),
      _ = function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          c,
          l = u(e, !1);
        if ("string" == typeof l && l.length > 2)
          if (43 === (t = (l = g(l)).charCodeAt(0)) || 45 === t) {
            if (88 === (n = l.charCodeAt(2)) || 120 === n) return NaN;
          } else if (48 === t) {
            switch (l.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (i = 49);
                break;
              case 79:
              case 111:
                (r = 8), (i = 55);
                break;
              default:
                return +l;
            }
            for (s = (o = l.slice(2)).length, a = 0; a < s; a++)
              if ((c = o.charCodeAt(a)) < 48 || c > i) return NaN;
            return parseInt(o, r);
          }
        return +l;
      };
    if (o("Number", !v(" 0o1") || !v("0b1") || v("+0x1"))) {
      for (
        var w,
          E = function (e) {
            var t = arguments.length < 1 ? 0 : e,
              n = this;
            return n instanceof E &&
              (b
                ? f(function () {
                    y.valueOf.call(n);
                  })
                : "Number" != c(n))
              ? l(new v(_(t)), n, E)
              : _(t);
          },
          x = r
            ? p(v)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ",",
              ),
          S = 0;
        x.length > S;
        S++
      )
        a(v, (w = x[S])) && !a(E, w) && m(E, w, h(v, w));
      (E.prototype = y), (y.constructor = E), s(i, "Number", E);
    }
  },
  function (e, t, n) {
    var r = n(18),
      i = "[" + n(146) + "]",
      o = RegExp("^" + i + i + "*"),
      s = RegExp(i + i + "*$"),
      a = function (e) {
        return function (t) {
          var n = String(r(t));
          return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(s, "")), n;
        };
      };
    e.exports = { start: a(1), end: a(2), trim: a(3) };
  },
  function (e, t) {
    e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
  },
  function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(4),
      o = n(43),
      s = n(53),
      a = n(13),
      c = n(17),
      l = n(46),
      u = n(2),
      f = n(32),
      d = n(21),
      p = f("slice"),
      h = d("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      m = u("species"),
      g = [].slice,
      v = Math.max;
    r(
      { target: "Array", proto: !0, forced: !p || !h },
      {
        slice: function (e, t) {
          var n,
            r,
            u,
            f = c(this),
            d = a(f.length),
            p = s(e, d),
            h = s(void 0 === t ? d : t, d);
          if (
            o(f) &&
            ("function" != typeof (n = f.constructor) || (n !== Array && !o(n.prototype))
              ? i(n) && null === (n = n[m]) && (n = void 0)
              : (n = void 0),
            n === Array || void 0 === n)
          )
            return g.call(f, p, h);
          for (r = new (void 0 === n ? Array : n)(v(h - p, 0)), u = 0; p < h; p++, u++)
            p in f && l(r, u, f[p]);
          return (r.length = u), r;
        },
      },
    );
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(35), n(76);
    var r = n(34),
      i = n.n(r),
      o = (n(112), n(104)),
      s = n.n(o),
      a = n(105),
      c = n.n(a);
    n(11);
    n(29), n(44), n(122);
    var l = function (e, t, n) {
        var r = document.querySelectorAll(e + " > li"),
          i = document.querySelectorAll(e + " > li > a");
        r.forEach(function (e) {
          e.classList.add(t);
        }),
          i.forEach(function (e) {
            e.classList.add(n);
          });
      },
      u = function (e, t) {
        (e.style.opacity = 0),
          (e.style.display = t),
          (function t() {
            var n = parseFloat(e.style.opacity);
            (n += 0.05) > 1 || ((e.style.opacity = n), requestAnimationFrame(t));
          })();
      },
      f = function (e) {
        (e.style.opacity = 1),
          (function t() {
            (e.style.opacity -= 0.05) < 0 ? (e.style.display = "none") : requestAnimationFrame(t);
          })();
      },
      d = function e(t, n) {
        for (var r = t.childNodes, i = [], o = 0; o < r.length; o++)
          1 === r[o].nodeType && i.push(r[o]);
        for (var s = 0; s < i.length; s++)
          if (i[s].className && i[s].classList.contains(n)) return i;
        for (var a = 0; a < i.length; a++) {
          var c = e(i[a], n);
          if (null !== c) return c;
        }
        return null;
      },
      p = function () {
        var e = document.querySelectorAll(".popup-trigger"),
          t = document.querySelector(".body-blackout"),
          n = document.getElementsByClassName("popup-modal");
        e.forEach(function (e) {
          e.addEventListener("click", function (n) {
            var r = e.dataset.popupTrigger,
              i = document.querySelector('[data-popup-modal="'.concat(r, '"]'));
            n.preventDefault(),
              u(i, "block"),
              t.classList.add("is-blacked-out"),
              i.querySelector(".popup-modal__close").addEventListener("click", function () {
                f(i), t.classList.remove("is-blacked-out");
              }),
              t.addEventListener("click", function () {
                f(i), t.classList.remove("is-blacked-out");
              });
          });
        });
        var r = document.getElementById("modal");
        document.addEventListener("keydown", function (e) {
          27 === e.keyCode &&
            r.classList.contains("is-blacked-out") &&
            (r.classList.remove("is-blacked-out"),
            n.forEach(function (e) {
              f(e);
            }));
        });
      };
    n(45), n(123), n(66), n(98), n(99), n(128), n(130), n(131);
    function h(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
          }
        })(e) ||
        (function (e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        })()
      );
    }
    function m(e, t, n, r, i, o) {
      var s = document.querySelectorAll(e),
        a = o;
      document.querySelector(".header-nav__mobile");
      ("" !== o && null !== o) || (a = !1);
      var c = function () {
          document.addEventListener("click", function (e) {
            e.target.classList.contains(t) ||
              s.forEach(function (e) {
                e.classList.remove(t);
                for (var i = 0; i < e.parentElement.children.length; i++)
                  e.parentElement.children[i].classList.contains(n) &&
                    e.parentElement.children[i].classList.remove(r);
              });
          });
        },
        l = [
          function (e) {
            (function (e) {
              return new Promise(function (i, o) {
                e.currentTarget.classList.contains(t) ||
                  s.forEach(function (e) {
                    e.classList.remove(t);
                    for (var i = 0; i < e.parentElement.children.length; i++)
                      e.parentElement.children[i].classList.contains(n) &&
                        e.parentElement.children[i].classList.remove(r);
                  }),
                  e.currentTarget.classList.add(t),
                  i("Successfully injected --active class"),
                  o("Error injecting --active class");
              });
            })(e).then(function (i, o) {
              if (!i) throw o;
              for (var s = 0; s < e.currentTarget.parentElement.children.length; s++)
                e.currentTarget.parentElement.children[s].classList.contains(n) &&
                  e.currentTarget.classList.contains(t) &&
                  e.currentTarget.parentElement.children[s].classList.add(r);
            });
          },
          !0,
        ],
        u = ["click"].concat([
          function (e) {
            (function (e) {
              return new Promise(function (i, o) {
                e.currentTarget.classList.contains(t) ||
                  s.forEach(function (e) {
                    e.classList.remove(t);
                    for (var i = 0; i < e.parentElement.children.length; i++)
                      e.parentElement.children[i].classList.contains(n) &&
                        e.parentElement.children[i].classList.remove(r);
                  }),
                  e.currentTarget.classList.toggle(t),
                  i("Successfully injected --active class"),
                  o("Error injecting --active class");
              });
            })(e).then(function (i, o) {
              if (!i) throw o;
              for (var s = 0; s < e.currentTarget.parentElement.children.length; s++)
                e.currentTarget.parentElement.children[s].classList.contains(n) &&
                  e.currentTarget.classList.contains(t) &&
                  e.currentTarget.parentElement.children[s].classList.add(r);
            }),
              e.currentTarget.classList.contains(t) &&
                "#" !== e.currentTarget.href &&
                e.preventDefault();
          },
          !0,
        ]),
        f = ["mouseenter"].concat(l),
        d = ["focus"].concat(l),
        p = [
          "mouseleave",
          function (e) {
            e.currentTarget.firstElementChild.classList.remove(t),
              e.currentTarget.lastElementChild.classList.remove(r);
          },
          !1,
        ],
        m = [
          "keydown",
          function (e) {
            if (e.shiftKey && 9 === e.keyCode) {
              e.currentTarget.classList.remove(t);
              for (var i = 0; i < e.currentTarget.parentElement.children.length; i++)
                e.currentTarget.parentElement.children[i].classList.contains(n) &&
                  e.currentTarget.parentElement.children[i].classList.remove(r);
            }
          },
          !0,
        ];
      window.innerWidth > i
        ? s.forEach(function (e) {
            var t;
            e.addEventListener.apply(e, h(f)),
              (t = e.parentElement).addEventListener.apply(t, p),
              e.addEventListener.apply(e, h(d)),
              e.addEventListener.apply(e, m),
              e.removeEventListener.apply(e, h(u));
          })
        : (!0 === a &&
            (s.forEach(function (e) {
              var t;
              e.removeEventListener.apply(e, h(f)),
                (t = e.parentElement).removeEventListener.apply(t, p),
                e.removeEventListener.apply(e, h(d));
            }),
            c()),
          s.forEach(function (e) {
            var t;
            e.removeEventListener.apply(e, h(f)),
              (t = e.parentElement).removeEventListener.apply(t, p),
              e.removeEventListener.apply(e, h(d)),
              e.removeEventListener.apply(e, m),
              e.addEventListener.apply(e, h(u));
          })),
        window.addEventListener("resize", function () {
          window.innerWidth > i
            ? s.forEach(function (e) {
                var t;
                e.addEventListener.apply(e, h(f)),
                  (t = e.parentElement).addEventListener.apply(t, p),
                  e.addEventListener.apply(e, h(d)),
                  e.addEventListener.apply(e, m),
                  e.removeEventListener.apply(e, h(u));
              })
            : (!0 === a &&
                (s.forEach(function (e) {
                  var t;
                  e.removeEventListener.apply(e, h(f)),
                    (t = e.parentElement).removeEventListener.apply(t, p),
                    e.removeEventListener.apply(e, h(d));
                }),
                c()),
              s.forEach(function (e) {
                var t;
                e.removeEventListener.apply(e, h(f)),
                  (t = e.parentElement).removeEventListener.apply(t, p),
                  e.removeEventListener.apply(e, h(d)),
                  e.removeEventListener.apply(e, m),
                  e.addEventListener.apply(e, h(u));
              }));
        });
    }
    var g = function (e, t, n) {
        var r = document.querySelectorAll(e + " > li"),
          i = document.querySelectorAll(e + " > li > a"),
          o = document.querySelectorAll(e + " > li > ul");
        return new Promise(function (e, s) {
          r.forEach(function (e) {
            e.classList.add(t);
            for (var n = 0; n < e.children.length; n++)
              e.children[n].classList.contains("section-nav__dropdown-menu") &&
                e.classList.add("section-nav__dropdown");
          }),
            i.forEach(function (e) {
              e.classList.add(n);
            }),
            o.forEach(function (e) {
              e.classList.add("section-nav__dropdown-menu");
            }),
            e("Successfully injected section navigation classes"),
            s(new Error("Error injecting section navigation classes"));
        });
      },
      v = function (e, t, n) {
        var r = document.querySelectorAll(e + " > li"),
          i = document.querySelectorAll(e + " > li > a");
        return new Promise(function (e, o) {
          r.forEach(function (e) {
            e.classList.add(t);
            for (var n = 0; n < e.children.length; n++)
              e.children[n].classList.contains("header-nav__dropdown-menu") &&
                e.classList.add("header-nav__dropdown");
          }),
            i.forEach(function (e) {
              e.classList.add(n);
            }),
            e("Successfully injected header navigation classes"),
            o(new Error("Error injecting header navigation classes"));
        });
      };
    var y = function () {
        var e = document.querySelectorAll(".header-nav__dropdown-menu li"),
          t = document.querySelectorAll(".header-nav__dropdown-menu li a");
        e.forEach(function (e) {
          e.classList.add("header-nav__dropdown-menu__item");
        }),
          t.forEach(function (e) {
            e.classList.add("header-nav__dropdown-menu__link");
          });
      },
      b = function () {
        document.querySelectorAll(".header-nav__dropdown > a").forEach(function (e) {
          window.innerWidth <= 1279
            ? e.insertAdjacentHTML(
                "beforeend",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
              )
            : e.firstElementChild && e.removeChild(e.firstElementChild),
            window.addEventListener("resize", function () {
              if (window.innerWidth <= 1279) {
                if (!(e.children.length < 1)) return !1;
                e.insertAdjacentHTML(
                  "beforeend",
                  '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
                );
              } else e.firstElementChild && e.removeChild(e.firstElementChild);
            });
        });
      },
      _ = function () {
        var e = document.querySelector(".header-sticky"),
          t = document.querySelector(".header-placeholder"),
          n = e.getBoundingClientRect().height,
          r = 0,
          i = document.querySelector(".notification-popup"),
          o = document.querySelector("html");
        (t.style.height = n + "px"),
          window.addEventListener("scroll", function () {
            var t = window.pageYOffset;
            0 === t || t < 0
              ? e.classList.remove("scroll-down")
              : (t > e.getBoundingClientRect().height &&
                t > r &&
                !e.classList.contains("scroll-down")
                  ? (e.classList.remove("scroll-up"),
                    e.classList.add("scroll-down"),
                    i && i.classList.add("notification-popup--up"),
                    o.classList.contains("no-scroll") && e.classList.remove("scroll-down"))
                  : t < r &&
                    e.classList.contains("scroll-down") &&
                    (e.classList.remove("scroll-down"),
                    e.classList.add("scroll-up"),
                    i && i.classList.remove("notification-popup--up")),
                (r = t));
          });
      },
      w = function () {
        var e = document.querySelector("#btn-hide-top-nav"),
          t = document.querySelector("#btn-show-top-nav"),
          n = document.querySelector(".header-nav__top"),
          r = document.querySelector(".header-nav__bottom__list"),
          i = document.querySelector(".header-nav__bottom__search-toggler");
        e &&
          t &&
          (window.innerWidth > 1279 &&
            (n.classList.add("header-nav__top--collapse"),
            (t.parentElement.style.display = "block"),
            (e.parentElement.style.display = "none"),
            (r.style.display = "none"),
            (i.style.display = "none")),
          window.addEventListener("resize", function () {
            window.innerWidth > 1279
              ? "block" === e.parentElement.style.display
                ? ((r.style.display = "inline-flex"), (r.style.opacity = "1"))
                : (n.classList.add("header-nav__top--collapse"),
                  (t.parentElement.style.display = "block"),
                  (t.parentElement.style.opacity = "1"),
                  (e.parentElement.style.display = "none"),
                  (r.style.display = "none"),
                  (i.style.display = "none"))
              : ((t.parentElement.style.display = "none"),
                (i.style.display = "flex"),
                (r.style.display = "block"));
          }),
          e.addEventListener("click", function (o) {
            window.innerWidth > 1279 &&
              (n.classList.add("header-nav__top--collapse"),
              f(r),
              f(i),
              f(e.parentElement),
              u(t.parentElement, "block"));
          }),
          t.addEventListener("click", function (o) {
            window.innerWidth > 1279 &&
              (n.classList.remove("header-nav__top--collapse"),
              u(r, "flex"),
              u(i, "flex"),
              u(e.parentElement, "block"),
              f(t.parentElement)),
              window.addEventListener("resize", function () {
                window.innerWidth < 1279
                  ? (n.classList.remove("header-nav__top--collapse"),
                    (i.style.display = "flex"),
                    u(r, "block"),
                    (t.parentElement.style.display = "none"),
                    (e.parentElement.style.display = "none"))
                  : "block" === e.parentElement.style.display &&
                    ((r.style.display = "inline-flex"), (r.style.opacity = "1"));
              });
          }));
      },
      E = function () {
        var e = document.querySelector(".header-nav__top__direct-edit .t4Edit-page");
        if (e) {
          for (var t = 0; t < e.childNodes.length; t++)
            3 === e.childNodes[t].nodeType && (e.childNodes[t].nodeValue = "");
          e.insertAdjacentHTML(
            "afterbegin",
            '<svg class="svg-md-18px" focusable="false" aria-hidden="true"><title>Direct edit</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_mode_edit_18px"></use></svg>',
          );
        }
      },
      x = function () {
        0 === document.querySelectorAll("h1").length &&
          document
            .querySelector(".header-nav__logo > a > img")
            .insertAdjacentHTML("afterend", '<h1 class="sr-only">Your t4 tag title</h1>');
      },
      S = function () {
        var e = document.querySelector("#site-search"),
          t = document.querySelector("#section-search"),
          n = document.querySelector("#site-search-input"),
          r = document.querySelectorAll(".btn-open-search"),
          i = document.querySelectorAll(".btn-close-search");
        r.forEach(function (r) {
          r.addEventListener("click", function () {
            e.classList.add("site-search--open"),
              n.focus(),
              e &&
                t &&
                t.classList.contains("section-search--open") &&
                t.classList.remove("section-search--open");
          });
        }),
          i.forEach(function (t) {
            t.addEventListener("click", function () {
              e.classList.remove("site-search--open"),
                r.forEach(function (e) {
                  e.focus();
                });
            });
          }),
          e.addEventListener("keydown", function (t) {
            27 === t.keyCode &&
              (e.classList.remove("site-search--open"),
              r.forEach(function (e) {
                e.focus();
              }));
          });
      },
      T = function () {
        var e = document.querySelector("#site-search"),
          t = document.querySelector("#section-search"),
          n = document.querySelector("#section-search-input"),
          r = document.querySelectorAll(".btn-open-section-search"),
          i = document.querySelectorAll(".btn-close-section-search");
        t &&
          (window.innerWidth < 1200 && t.classList.remove("section-search--open"),
          window.addEventListener("resize", function () {
            window.innerWidth < 1200 && t.classList.remove("section-search--open");
          }),
          r.forEach(function (r) {
            r.addEventListener("click", function () {
              t.classList.add("section-search--open"),
                n.focus(),
                e &&
                  t &&
                  e.classList.contains("site-search--open") &&
                  e.classList.remove("site-search--open");
            });
          }),
          i.forEach(function (e) {
            e.addEventListener("click", function () {
              t.classList.remove("section-search--open"),
                r.forEach(function (e) {
                  e.focus();
                });
            });
          }),
          t.addEventListener("keydown", function (e) {
            27 === e.keyCode &&
              (t.classList.remove("section-search--open"),
              r.forEach(function (e) {
                e.focus();
              }));
          }));
      };
    n(100), n(101);
    var L = function () {
      var e,
        t,
        n,
        r = document.querySelectorAll(".notification-trigger"),
        i = document.querySelector(".body-blackout"),
        o = document.querySelector(".notification-popup"),
        s = document.querySelector(".notification-popup__close");
      if (o) {
        var a = o.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
          c = a[0],
          l = a[a.length - 1];
        r.forEach(function (e) {
          e.addEventListener("click", function (e) {
            if (
              (i.classList.toggle("is-blacked-out--notification"),
              e.currentTarget.classList.toggle("notification-trigger--open"),
              i.classList.contains("is-blacked-out--notification"))
            ) {
              o.classList.add("notification-popup--open"),
                o.classList.add("fade-in"),
                o.classList.contains("fade-in") && o.classList.remove("fade-out"),
                c.focus();
              var t = [];
              o.addEventListener("keyup", function (e) {
                var n = e.keyCode,
                  r = t.indexOf(n);
                r > -1 && t.splice(r, 1);
              }),
                o.addEventListener("keydown", function (e) {
                  var n = e.keyCode;
                  if (
                    (t.push(n),
                    27 === n &&
                      (e.preventDefault(),
                      o.classList.add("fade-out"),
                      o.classList.contains("fade-out") && o.classList.remove("fade-in"),
                      setTimeout(function () {
                        o.classList.remove("notification-popup--open"),
                          i.classList.remove("is-blacked-out--notification");
                      }, 200),
                      e.currentTarget.focus()),
                    t.includes(9) && t.includes(16))
                  ) {
                    if (document.activeElement === c) return e.preventDefault(), l.focus(), !0;
                    if (document.activeElement === l)
                      return e.preventDefault(), a[a.length - 2].focus(), !0;
                  }
                  if (9 === n && document.activeElement === l)
                    return e.preventDefault(), c.focus(), !0;
                });
            } else
              o.classList.add("fade-out"),
                o.classList.contains("fade-out") && o.classList.remove("fade-in"),
                setTimeout(function () {
                  o.classList.remove("notification-popup--open");
                }, 200);
          });
        }),
          s.addEventListener("click", function () {
            o.classList.add("fade-out"),
              o.classList.contains("fade-out") && o.classList.remove("fade-in"),
              setTimeout(function () {
                o.classList.remove("notification-popup--open"),
                  i.classList.remove("is-blacked-out--notification");
              }, 200),
              r.forEach(function (e) {
                e.focus();
              });
          }),
          i.addEventListener("click", function () {
            o.classList.add("fade-out"),
              o.classList.contains("fade-out") && o.classList.remove("fade-in"),
              setTimeout(function () {
                o.classList.remove("notification-popup--open"),
                  i.classList.remove("is-blacked-out--notification");
              }, 200);
          }),
          (e = document.querySelectorAll(".box-img-text-card-type__card__button")),
          (t = document.querySelectorAll(".box-img-text-card-type__card").length),
          (n = document.querySelectorAll(".notification-count")).forEach(function (e) {
            e.innerHTML = "(".concat(t, ")");
          }),
          e.forEach(function (e) {
            e.addEventListener("click", function (e) {
              e.currentTarget.parentElement.remove(),
                (t = document.querySelectorAll(".box-img-text-card-type__card").length),
                (o = document.querySelector(".notification-popup")),
                (a = o.querySelectorAll(
                  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
                )),
                (c = a[0]).focus(),
                n.forEach(function (e) {
                  (e.innerHTML = "(".concat(t, ")")), 0 == t && s.click();
                });
            });
          });
      }
    };
    n(133), n(137);
    n(138), n(140), n(141);
    var A = n(5),
      C = n.n(A),
      k = n(0),
      D = n.n(k);
    n(142), n(144), n(147);
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var N,
      I,
      j,
      q,
      P,
      H,
      R,
      M,
      F,
      W,
      B,
      z,
      U,
      V,
      Q,
      K,
      Y,
      X,
      G,
      J,
      Z,
      ee,
      te,
      ne,
      re,
      ie,
      oe,
      se,
      ae,
      ce,
      le,
      ue,
      fe,
      de,
      pe,
      he,
      me,
      ge,
      ve,
      ye,
      be = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, e);
          (this.options = Object.assign(
            { selector: ".tabs", type: "horizontal", responsiveBreak: 992, activeIndex: 0 },
            t,
          )),
            (this.elems = document.querySelectorAll(this.options.selector)),
            (this.skipIfInitialized = function (e) {
              e.classList.contains("tabs__initialized");
            }),
            this.buildUI(),
            this.handleNavigation(),
            this.handleResponsive();
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "buildUI",
              value: function () {
                var e = this;
                this.elems.forEach(function (t, n) {
                  var r = t,
                    i = r.childNodes,
                    o = [],
                    s = e.options.type;
                  e.skipIfInitialized(r),
                    r.classList.add("style__" + e.options.type),
                    r.classList.add("tabs__initialized");
                  for (var a = 0; a < i.length; a++) {
                    var c = i[a];
                    if (c.nodeType != Node.TEXT_NODE) {
                      c.classList.add("tabs__content");
                      var l = c.dataset.title ? c.dataset.title : "";
                      o.push(l);
                      var u = c.dataset.titleColor ? c.dataset.titleColor : "",
                        f = c.dataset.bgColor ? c.dataset.bgColor : "",
                        d = c.innerHTML;
                      (c.innerHTML = '<div class="tabs__content-wrapper">' + d + "</div>"),
                        c.insertAdjacentHTML(
                          "afterbegin",
                          '<button class="tabs__nav-link '
                            .concat(u, " ")
                            .concat(f, '" type="button"><span>')
                            .concat(
                              l,
                              '</span><svg class="tabs__icon tabs__icon--add svg-md-24px" focusable="false" aria-hidden="true"><title>Expand icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_add_24px"></use></svg><svg class="tabs__icon tabs__icon--remove svg-md-24px" focusable="false" aria-hidden="true"><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_remove_24px"></use></svg></button>',
                            ),
                        );
                    }
                  }
                  var p = "";
                  o.forEach(function (e) {
                    p += '<button class="tabs__nav-link" type="button"><span>'.concat(
                      e,
                      "</span></button>",
                    );
                  }),
                    r.insertAdjacentHTML("afterbegin", '<li class="tabs__nav">'.concat(p, "</li>"));
                  var h = Number(e.options.activeIndex);
                  "accordion" != s &&
                    -1 != h &&
                    (h > o.length - 1 &&
                      (console.warn(
                        "TABS ACCORDION: Active tab number from settings is bigger than tabs count. Please remember, that index starts from Zero! To avoid crashes, activeIndex option was reverted to 0.",
                      ),
                      (h = 0)),
                    r
                      .querySelectorAll(".tabs__nav > .tabs__nav-link")
                      [h].classList.add("is__active"),
                    r.querySelectorAll(".tabs__content")[h].classList.add("is__active"),
                    r
                      .querySelectorAll(".tabs__content > .tabs__nav-link")
                      [h].classList.add("is__active"));
                });
              },
            },
            {
              key: "handleNavigation",
              value: function () {
                var e = this,
                  t = this.elems,
                  n = this.options.type;
                t.forEach(function (t, r) {
                  var i = t;
                  e.skipIfInitialized(i),
                    i.addEventListener("click", function (e) {
                      if (e.target && e.target.classList.contains("tabs__nav-link")) {
                        var t;
                        e.preventDefault(),
                          (t =
                            "tabs__nav" == e.target.parentElement.classList
                              ? Array.prototype.slice
                                  .call(e.target.parentElement.children)
                                  .indexOf(e.target)
                              : Array.prototype.slice
                                  .call(e.target.parentElement.parentElement.children)
                                  .indexOf(e.target.parentElement) - 1);
                        var r = i.getElementsByClassName("tabs__content"),
                          o = i.querySelectorAll(".tabs__nav > .tabs__nav-link"),
                          s = i.querySelectorAll(".tabs__content > .tabs__nav-link");
                        if (
                          ("accordion" == n || i.classList.contains("is__responsive")) &&
                          e.target.classList.contains("is__active")
                        )
                          return (
                            r[t].classList.remove("is__active"),
                            o[t].classList.remove("is__active"),
                            s[t].classList.remove("is__active"),
                            (s[t].getElementsByTagName("svg")[0].style.display = "block"),
                            void (s[t].getElementsByTagName("svg")[1].style.display = "none")
                          );
                        for (var a = 0; a < r.length; a++) r[a].classList.remove("is__active");
                        r[t].classList.add("is__active"),
                          o.forEach(function (e) {
                            e.classList.remove("is__active");
                          }),
                          o[t].classList.add("is__active"),
                          s.forEach(function (e) {
                            e.classList.remove("is__active"),
                              e.classList.contains("is__active") ||
                                ((e.getElementsByTagName("svg")[0].style.display = "block"),
                                (e.getElementsByTagName("svg")[1].style.display = "none"));
                          }),
                          s[t].classList.add("is__active"),
                          (s[t].getElementsByTagName("svg")[0].style.display = "none"),
                          (s[t].getElementsByTagName("svg")[1].style.display = "block");
                      }
                    });
                });
              },
            },
            {
              key: "handleResponsive",
              value: function () {
                var e = this,
                  t = this.elems,
                  n = this.options.type;
                if (
                  (window.addEventListener("resize", function () {
                    t.forEach(function (t, r) {
                      var i = t,
                        o = i.getElementsByClassName("tabs__content"),
                        s = i.querySelectorAll(".tabs__nav > .tabs__nav-link"),
                        a = i.querySelectorAll(".tabs__content > .tabs__nav-link");
                      e.skipIfInitialized(i),
                        window.innerWidth > Number(e.options.responsiveBreak)
                          ? (i.classList.remove("is__responsive"),
                            "accordion" != n &&
                              0 == i.querySelectorAll(".tabs__nav-link.is__active").length &&
                              (o[0].classList.add("is__active"),
                              s[0].classList.add("is__active"),
                              a[0].classList.add("is__active")))
                          : i.classList.add("is__responsive");
                    });
                  }),
                  -1 !== navigator.userAgent.indexOf("MSIE") ||
                    navigator.appVersion.indexOf("Trident/") > 0)
                ) {
                  var r = document.createEvent("UIEvents");
                  r.initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(r);
                } else window.dispatchEvent(new Event("resize"));
              },
            },
          ]) && O(t.prototype, n),
          r && O(t, r),
          e
        );
      })(),
      _e = function () {
        if (document.querySelector(".program-search")) {
          p(),
            document
              .querySelectorAll(".program-search__results__item__title")
              .forEach(function (e, t, n) {
                t % 2 != 0
                  ? e.classList.add("bg-secondary-grey-10")
                  : e.classList.add("bg-primary");
              });
        }
      },
      we = function () {
        if (document.querySelector(".program-search")) {
          var e = document.getElementById("area-study-button"),
            t = document.getElementById("degree-button"),
            n = document.getElementById("college-school-button"),
            r = document.getElementById("campus-button"),
            u = document.getElementById("modality-button"),
            i = document.getElementById("area-study-filter"),
            o = document.getElementById("degree-filter"),
            s = document.getElementById("college-school-filter"),
            a = document.getElementById("campus-filter"),
            q = document.getElementById("modality-filter");
          e.addEventListener("click", function () {
            i.classList.contains("active")
              ? i.classList.remove("active")
              : i.classList.add("active"),
              o.classList.contains("active") && o.classList.remove("active"),
              s.classList.contains("active") && s.classList.remove("active"),
              a.classList.contains("active") && a.classList.remove("active"),
              q.classList.contains("active") && q.classList.remove("active");
          }),
            t.addEventListener("click", function () {
              o.classList.contains("active")
                ? o.classList.remove("active")
                : o.classList.add("active"),
                i.classList.contains("active") && i.classList.remove("active"),
                s.classList.contains("active") && s.classList.remove("active"),
                a.classList.contains("active") && a.classList.remove("active"),
                q.classList.contains("active") && q.classList.remove("active");
            }),
            n.addEventListener("click", function () {
              s.classList.contains("active")
                ? s.classList.remove("active")
                : s.classList.add("active"),
                i.classList.contains("active") && i.classList.remove("active"),
                o.classList.contains("active") && o.classList.remove("active"),
                a.classList.contains("active") && a.classList.remove("active"),
                q.classList.contains("active") && q.classList.remove("active");
            }),
            r.addEventListener("click", function () {
              a.classList.contains("active")
                ? a.classList.remove("active")
                : a.classList.add("active"),
                i.classList.contains("active") && i.classList.remove("active"),
                o.classList.contains("active") && o.classList.remove("active"),
                s.classList.contains("active") && s.classList.remove("active"),
                q.classList.contains("active") && q.classList.remove("active");
            });
          u.addEventListener("click", () => {
            q.classList.contains("active")
              ? q.classList.remove("active")
              : q.classList.add("active"),
              i.classList.contains("active") && i.classList.remove("active"),
              o.classList.contains("active") && o.classList.remove("active"),
              s.classList.contains("active") && s.classList.remove("active"),
              a.classList.contains("active") && a.classList.remove("acvite");
          });
        }
      };
    document.querySelector(".js").classList.add("js-ready"),
      (window.jQuery = window.$ = i.a),
      s()({ polyfill: !0 }),
      c()(),
      "classList" in SVGElement.prototype ||
        Object.defineProperty(SVGElement.prototype, "classList", {
          get: function () {
            var e = this;
            return {
              contains: function (t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t);
              },
            };
          },
        }),
      (HTMLElement.prototype.appendFirst = function (e) {
        this.firstChild ? this.insertBefore(e, this.firstChild) : this.appendChild(e);
      }),
      document.addEventListener("formLoaded", function () {
        document.querySelector(".js-t4form-container") &&
          setTimeout(function () {
            var e = document.querySelectorAll(
                "input[type=text]:not(.date-picker), input[type=email], input[type=password], textarea, select",
              ),
              t = document.querySelectorAll("select"),
              n = document.querySelectorAll("label.control-label"),
              r = document.querySelectorAll(".checkbox > label"),
              i = document.querySelectorAll(".radio > label"),
              o = document.querySelectorAll(".date-picker"),
              s = document.querySelectorAll("input[type=file]"),
              a = document.querySelectorAll(".mce-tinymce"),
              c = function (e) {
                e.currentTarget.classList.contains("radio--active") ||
                  i.forEach(function (e) {
                    e.parentElement.classList.remove("radio--active");
                    for (var t = 0; t < e.children.length; t++)
                      "form-field-radio-32538" === e.children[t].getAttribute("name") &&
                        e.children[t].removeAttribute("checked");
                  });
                for (var t = 0; t < e.currentTarget.children.length; t++)
                  "form-field-radio-32538" === e.currentTarget.children[t].getAttribute("name") &&
                    (e.currentTarget.parentElement.classList.add("radio--active"),
                    e.currentTarget.children[t].setAttribute("checked", "true"));
              };
            n.forEach(function (e) {
              e.addEventListener("click", function (e) {
                e.currentTarget.nextElementSibling.focus();
                for (var t = 0; t < e.currentTarget.parentElement.children.length; t++)
                  e.currentTarget.parentElement.children[t].classList.contains("input-group") &&
                    e.currentTarget.parentElement.children[t].firstElementChild.focus();
              });
            }),
              e.forEach(function (e) {
                e.addEventListener("focus", function (e) {
                  for (var t = 0; t < e.currentTarget.parentElement.children.length; t++)
                    e.currentTarget.parentElement.children[t].classList.contains("control-label") &&
                      e.currentTarget.parentElement.children[t].classList.add(
                        "control-label--active",
                      );
                }),
                  e.addEventListener("blur", function (e) {
                    for (var t = 0; t < e.currentTarget.parentElement.children.length; t++)
                      e.currentTarget.parentElement.children[t].classList.contains(
                        "control-label",
                      ) &&
                        e.currentTarget.parentElement.children[t].classList.remove(
                          "control-label--active",
                        ),
                        e.currentTarget.value &&
                          e.currentTarget.parentElement.children[t].classList.add(
                            "control-label--active",
                          );
                  });
              }),
              o.forEach(function (e) {
                e.addEventListener("focus", function (e) {
                  for (var t = 0; t < e.currentTarget.parentElement.children.length; t++)
                    e.currentTarget.parentElement.children[t].classList.contains("control-label") &&
                      e.currentTarget.parentElement.children[t].classList.add(
                        "control-label--active",
                      );
                  for (
                    var n = 0;
                    n < e.currentTarget.parentElement.parentElement.children.length;
                    n++
                  )
                    e.currentTarget.parentElement.parentElement.children[n].classList.contains(
                      "control-label",
                    ) &&
                      (e.currentTarget.parentElement.parentElement.children[n].classList.add(
                        "control-label--active",
                      ),
                      e.currentTarget.classList.add("date-picker--change"),
                      e.currentTarget.parentElement.classList.add("input-group--change"));
                });
              }),
              t.forEach(function (e) {
                e.addEventListener("change", function (e) {
                  for (var t = 0; t < e.currentTarget.parentElement.children.length; t++)
                    e.currentTarget.parentElement.children[t].classList.contains("control-label") &&
                      e.currentTarget.parentElement.children[t].classList.add(
                        "control-label--change",
                      );
                });
              }),
              r.forEach(function (e) {
                e.setAttribute("tabindex", 0),
                  e.addEventListener("change", function (e) {
                    for (var t = 0; t < e.currentTarget.children.length; t++)
                      "form-field-checkbox" === e.currentTarget.children[t].getAttribute("name") &&
                        (e.currentTarget.parentElement.classList.toggle("checkbox--active"),
                        e.currentTarget.children[t].setAttribute("checked", "true"),
                        e.currentTarget.parentElement.classList.contains("checkbox--active") ||
                          e.currentTarget.children[t].removeAttribute("checked"));
                  }),
                  e.addEventListener("keydown", function (e) {
                    if (13 === e.keyCode)
                      for (var t = 0; t < e.currentTarget.children.length; t++)
                        "form-field-checkbox" ===
                          e.currentTarget.children[t].getAttribute("name") &&
                          (e.currentTarget.parentElement.classList.toggle("checkbox--active"),
                          e.currentTarget.children[t].setAttribute("checked", "true"),
                          e.currentTarget.parentElement.classList.contains("checkbox--active") ||
                            e.currentTarget.children[t].removeAttribute("checked"));
                  });
              }),
              i.forEach(function (e) {
                e.setAttribute("tabindex", 0),
                  e.addEventListener("click", function (e) {
                    c(e);
                  }),
                  e.addEventListener("keydown", function (e) {
                    13 === e.keyCode && c(e);
                  });
              }),
              s.forEach(function (e) {
                for (var t = 0; t < e.parentElement.children.length; t++)
                  e.parentElement.children[t].classList.contains("control-label") &&
                    (e.parentElement.children[t].classList.remove("control-label"),
                    e.parentElement.children[t].classList.add("preview-span"));
              }),
              a.forEach(function (e) {
                for (var t = 0; t < e.parentElement.children.length; t++)
                  e.parentElement.children[t].classList.contains("control-label") &&
                    (e.parentElement.children[t].classList.remove("control-label"),
                    e.parentElement.children[t].classList.add("preview-span"));
              });
          }, 500);
      }),
      setTimeout(function () {
        _();
      }, 1e3),
      w(),
      window.addEventListener("resize", function () {
        _();
      }),
      (N = document.body),
      (I = function () {
        _();
      }),
      (q = N.clientHeight),
      (function e() {
        (j = N.clientHeight),
          q !== j && (I(j), (q = j)),
          N.onElementHeightChangeTimer && clearTimeout(N.onElementHeightChangeTimer),
          (N.onElementHeightChangeTimer = setTimeout(e, 200));
      })(),
      x(),
      S(),
      T(),
      (function () {
        var e = document.querySelector("#my-pages"),
          t = document.querySelector("#information-for"),
          n = document.querySelector(".header-nav__top__list__my-pages__dropdown"),
          r = document.querySelector(".information-for__dropdown");
        e &&
          (e.addEventListener("mouseover", function (e) {
            n.classList.add("dropdown--open");
          }),
          e.addEventListener("mouseleave", function (e) {
            n.classList.remove("dropdown--open");
          })),
          t &&
            (t.addEventListener("mouseover", function (e) {
              r.classList.add("dropdown--open");
            }),
            t.addEventListener("mouseleave", function (e) {
              r.classList.remove("dropdown--open");
            }));
        var i = window.navigator.userAgent,
          o = document.querySelector(".header-nav__mobile");
        (i.match(/iPad/i) || i.match(/iPhone/i)) &&
          ((o.style.overflowY = "scroll"), o.classList.add("safari-iphone"));
      })(),
      v("ul.header-nav__top__list--primary", "header-nav__top__item", "header-nav__top__link"),
      v("ul.header-nav__top__list--secondary", "header-nav__top__item", "header-nav__top__link"),
      v("ul.header-nav__top__list--tertiary", "header-nav__top__item", "header-nav__top__link"),
      v("ul.header-nav__top__list--auth-user", "header-nav__top__item", "header-nav__top__link"),
      v("ul.header-nav__bottom__list", "header-nav__bottom__item", "header-nav__bottom__link").then(
        function (e, t) {
          if (!e) throw t;
          m(
            ".header-nav__bottom__link",
            "header-nav__bottom__link--active",
            "header-nav__dropdown-menu",
            "header-nav__dropdown-menu--active",
            1279,
          ),
            b(),
            E();
        },
      ),
      v(
        "ul.header-nav__bottom__outer-quick-list--primary",
        "header-nav__bottom__item",
        "header-nav__bottom__link",
      ),
      v(
        "ul.header-nav__bottom__outer-quick-list--secondary",
        "header-nav__bottom__item",
        "header-nav__bottom__link",
      ),
      y(),
      g("ul.section-nav__lists", "section-nav__item", "section-nav__link").then(function (e, t) {
        if (!e) throw t;
        m(
          ".section-nav__link",
          "section-nav__link--active",
          "section-nav__dropdown-menu",
          "section-nav__dropdown-menu--active",
          1200,
          !0,
        );
      }),
      (P = document.querySelector(".btn-open-nav")),
      (H = document.querySelector(".header-nav__mobile")),
      (R = document.querySelector(".btn-close-nav")),
      (M = document.querySelectorAll(".btn-back-nav")),
      (F = document.querySelector(".header-nav")),
      (W = document.createElement("div")),
      (B = document.querySelectorAll(".header-nav__bottom__list .header-nav__bottom__link")),
      (z = document.querySelectorAll(".header-nav__dropdown-menu__back-toggler")),
      (U = H.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )),
      (V = U[0]),
      (Q = U[U.length - 1]),
      (K = document.querySelector("html")),
      (Y = function () {
        B.forEach(function (e) {
          e.classList.remove("header-nav__bottom__link--active");
          for (var t = 0; t < e.parentElement.children.length; t++)
            e.parentElement.children[t].classList.remove("header-nav__dropdown-menu--active");
        });
      }),
      (X = function () {
        F.removeChild(W),
          H.classList.remove("slide-in-right"),
          W.classList.remove("header-overlay"),
          Y(),
          H.classList.add("slide-out-right"),
          setTimeout(function () {
            H.classList.remove("header-nav__mobile--open");
          }, 450),
          K.classList.remove("no-scroll");
      }),
      (G = function () {
        B.forEach(function (e) {
          e.addEventListener("click", function (e) {
            H.classList.add("slide-overlay");
            for (var t = 0; t < e.currentTarget.parentElement.children.length; t++)
              e.currentTarget.parentElement.children[t].classList.contains(
                "header-nav__dropdown-menu",
              ) &&
                (e.currentTarget.parentElement.children[t].classList.add("slide-in-right"),
                e.currentTarget.parentElement.children[t].classList.contains("slide-out-right") &&
                  e.currentTarget.parentElement.children[t].classList.remove("slide-out-right"));
          });
        }),
          z.forEach(function (e) {
            if (e.nextElementSibling.classList.contains("header-nav__dropdown-menu__sibling-link"))
              return !1;
            e.insertAdjacentHTML(
              "afterend",
              '<div class="header-nav__dropdown-menu__sibling-link"><a href="'
                .concat(e.parentElement.previousElementSibling.getAttribute("href"), '">')
                .concat(e.parentElement.previousElementSibling.textContent, "</a></div>"),
            );
          }),
          M.forEach(function (e) {
            e.addEventListener("click", function (e) {
              H.classList.remove("slide-overlay"),
                e.currentTarget.parentElement.parentElement.classList.remove("slide-in-right"),
                e.currentTarget.parentElement.parentElement.classList.add("slide-out-right"),
                setTimeout(function () {
                  Y();
                }, 450);
            });
          });
      }),
      (J = function () {
        var e = [];
        H.addEventListener("keyup", function (t) {
          var n = t.keyCode,
            r = e.indexOf(n);
          r > -1 && e.splice(r, 1);
        }),
          H.addEventListener("keydown", function (t) {
            var n = t.keyCode;
            if ((e.push(n), e.includes(9) && e.includes(16) && t.shiftKey)) {
              if (document.activeElement === V) return t.preventDefault(), Q.focus(), !0;
              if (document.activeElement === Q)
                return t.preventDefault(), U[U.length - 2].focus(), !0;
            }
            switch (n) {
              case 27:
                X();
                break;
              case 9:
                if (document.activeElement === Q) return t.preventDefault(), V.focus(), !0;
            }
          });
      }),
      P.addEventListener("click", function () {
        F.appendFirst(W),
          H.classList.add("header-nav__mobile--open"),
          H.classList.add("slide-in-right"),
          W.classList.add("header-overlay"),
          H.classList.contains("slide-out-right") && H.classList.remove("slide-out-right"),
          K.classList.add("no-scroll");
      }),
      R.addEventListener("click", function () {
        X();
      }),
      W.addEventListener("click", function () {
        H.classList.contains("slide-overlay") && H.classList.remove("slide-overlay"), X();
      }),
      P.addEventListener("keydown", function (e) {
        V.focus(), 27 === e.keyCode && X();
      }),
      window.innerWidth <= 1279 && (G(), J()),
      window.addEventListener("resize", function () {
        window.innerWidth > 1279 ? F.firstElementChild === W && X() : (G(), J());
      }),
      (function () {
        var e = document.querySelector(".btn-toggle-section-nav"),
          t = document.querySelector(".section-nav__lists");
        e &&
          (window.innerWidth < 1200 && t.classList.add("section-nav__lists--collapse"),
          window.addEventListener("resize", function () {
            window.innerWidth < 1200
              ? t.classList.add("section-nav__lists--collapse")
              : t.classList.remove("section-nav__lists--collapse");
          }),
          e.addEventListener("click", function () {
            t.classList.toggle("section-nav__lists--collapse");
          }));
      })(),
      (function () {
        l(
          ".inner__sidebar__dropdown-menu ul",
          "inner__sidebar__dropdown-menu__item",
          "inner__sidebar__dropdown-menu__link",
        ),
          l("ul.breadcrumb", "breadcrumb__item", "breadcrumb__link");
        var e = document.querySelector(".inner__sidebar");
        if (
          (document.querySelectorAll(".off-screen a").forEach(function (e) {
            e.addEventListener("click", function (t) {
              t.preventDefault();
              var n = e.getAttribute("href").substr(1);
              (window.location.hash = n), document.getElementById(n).focus();
            });
          }),
          e)
        ) {
          !(function () {
            var e = document.querySelector(".btn-toggle-sidebar"),
              t = document.querySelector(".inner__sidebar__lists");
            e &&
              (window.innerWidth < 992 && t.classList.add("inner__sidebar__lists--collapse"),
              e.addEventListener("click", function () {
                t.classList.toggle("inner__sidebar__lists--collapse");
              }));
          })();
        }
      })(),
      (function () {
        var e, t;
        document
          .querySelector(".footer__col--primary .footer__social")
          .classList.add("footer__social--desktop"),
          l(".footer__link-widget__col", "footer__link-widget__item", "footer__link-widget__link"),
          ((e = ".footer__col--tertiary"),
          (t = ".footer__social"),
          new Promise(function (n, r) {
            var i = document.querySelector(e),
              o = document.querySelector(t);
            if (i) {
              var s = o.cloneNode(!0);
              i.appendChild(s);
            }
            n("Successfully clone element"), r(new Error("Error cloning element"));
          })).then(function (e, t) {
            if (!e) throw t;
            var n = document.querySelector(".footer__col--tertiary .footer__social"),
              r = document.querySelector(
                ".footer__col--tertiary .footer__social__item--show-more > a",
              );
            n.classList.remove("footer__social--desktop"),
              n.classList.add("footer__social--mobile"),
              r.removeChild(r.childNodes[3]) &&
                r.insertAdjacentHTML(
                  "afterend",
                  '<svg class="svg-md-24px" focusable="false" aria-hidden="true" style="fill: #fff"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
                );
          });
      })(),
      (Z = document.querySelectorAll(".js-tab")) &&
        Z.forEach(function (e) {
          e.addEventListener("click", function () {
            e.classList.toggle("is__active");
          });
        }),
      (function () {
        var e = document.querySelectorAll(".js-favourite"),
          t = document.querySelector(".js-favorite-row"),
          n = [],
          r = "",
          i = new Map(),
          o = new Map();

        function s(e) {
          t && t.querySelector(".my-apps__body").removeChild(e);
        }

        e &&
          e.forEach(function (e) {
            e.addEventListener("click", function () {
              e.classList.toggle("active"), (r = e.classList), n.push(r);
              var a,
                c = n.filter(function (e) {
                  return e.contains("active");
                }).length;
              if (e.classList.contains("active")) {
                var l = e.parentElement.parentElement.parentElement;
                if (l) {
                  var u = l.cloneNode(!0),
                    f = u.querySelector(".js-favourite");
                  f &&
                    f.addEventListener("click", function () {
                      if ((f.classList.remove("active"), !f.classList.contains("active"))) {
                        s(u);
                        var e = o.get(u);
                        e &&
                          (e.classList.remove("active"),
                          (n = n.filter(function (t) {
                            return t !== e.classList;
                          })));
                      }
                    }),
                    i.set(e, u),
                    o.set(u, e),
                    (a = u),
                    t && t.querySelector(".my-apps__body").appendChild(a);
                }
              } else {
                var d = i.get(e);
                d && (s(d), i.delete(e), o.delete(d));
              }
              c > 0 && t && t.classList.remove("d-none");
            });
          });
      })(),
      (function () {
        if (!document.querySelector(".hero-banner")) return !1;
        document.querySelectorAll(".hero-banner__img > img").forEach(function (e) {
          var t = JSON.parse(e.dataset.srcList.replace(/'/g, '"')),
            n = JSON.parse(e.dataset.altList.replace(/'/g, '"')),
            r = Math.floor(Math.random() * t.length),
            i = d(e.parentElement.parentElement, "hero-banner__block__button-link");
          new Promise(function (i, o) {
            var s = t[r].split(",")[0];
            e.setAttribute("alt", n[r]),
              e.setAttribute("src", s),
              e.setAttribute("srcset", t[r]),
              i("Successfully load randomised image"),
              o("Error loading randomised image");
          }).then(function (t, n) {
            if (!t) throw n;
            var r, o, s;
            (r = e.src),
              (o = function (e) {
                if (!0 === e)
                  for (var t = 0; t < i.length; t++)
                    i[t].classList.contains("hero-banner__block__button-link") &&
                      (i[t].classList.add("btn-white"), u(i[t], "inline-block"));
                else
                  for (var n = 0; n < i.length; n++)
                    i[n].classList.contains("hero-banner__block__button-link") &&
                      (i[n].classList.add("btn-primary"), u(i[n], "inline-block"));
              }),
              ((s = document.createElement("img")).src = r),
              s.addEventListener("load", function (e) {
                var t = document.createElement("canvas");
                (t.width = e.target.width), (t.height = e.target.height);
                var n = t.getContext("2d");
                n.drawImage(e.target, 0, 0);
                for (
                  var r,
                    i,
                    s,
                    a = n.getImageData(0, 0, t.width, t.height).data,
                    c = 0,
                    l = 0,
                    u = 0;
                  u < a.length;
                  u += 4
                )
                  (r = a[u]),
                    (i = a[u + 1]),
                    (s = a[u + 2]),
                    Math.max(Math.max(r, i), s) < 128 ? l++ : c++;
                var f = (c - l) / (e.target.width * e.target.height);
                o(f + 0.1 < 0);
              });
          });
        });
      })(),
      (function () {
        if (!document.querySelector(".featured-item-banner")) return !1;
        document.querySelectorAll(".featured-item-banner__img > img").forEach(function (e) {
          var t = d(e.parentElement.parentElement, "featured-item-banner__caption"),
            n = JSON.parse(e.dataset.srcList.replace(/'/g, '"')),
            r = JSON.parse(e.dataset.altList.replace(/'/g, '"')),
            i = Math.floor(Math.random() * n.length),
            o = n[i].split(",")[0];
          e.setAttribute("alt", r[i]),
            e.setAttribute("src", o),
            e.setAttribute("srcset", n[i]),
            t.forEach(function (e) {
              if (e.classList.contains("featured-item-banner__caption")) {
                var t = JSON.parse(e.dataset.captionList.replace(/'/g, '"'));
                e.textContent = t[i];
              }
            });
        });
      })(),
      (ee = document.querySelector(".inner")),
      (te = document.querySelector(".box-img-text")),
      (ne = document.querySelector(".box-img-text-type-1")),
      (re = document.querySelector(".box-img-text-type-2")),
      (ie = function () {
        var e = document.querySelectorAll(".box-img-text-type-1__glide"),
          t = {
            type: "slider",
            startAt: 0,
            perView: 4,
            bound: !0,
            gap: 30,
            keyboard: !0,
            animationDuration: 1e3,
            animationTimingFunc: "ease-in-out",
            peek: { before: -10, after: 100 },
            breakpoints: { 1200: { perView: 3 }, 1024: { perView: 2 }, 768: { perView: 1 } },
          };
        e.forEach(function (e, n, r) {
          var i = new C.a(e, t);
          d(e, "box-img-text-type-1__slide"),
            new Promise(function (e, t) {
              i.mount(), e("Successfully load slider"), t(new Error("Error loading slider"));
            }).then(function (e, t) {
              if (!e) throw t;
              document.querySelectorAll(".box-img-text img").forEach(function (e) {
                e.addEventListener("load", function (e) {
                  new D.a(".box-img-text-type-1__slide");
                });
              }),
                setTimeout(function () {
                  new D.a(".box-img-text-type-1__slide");
                }, 50),
                window.addEventListener("resize", function () {
                  new D.a(".box-img-text-type-1__slide");
                });
            });
        }),
          ee &&
            ((t = {
              type: "slider",
              startAt: 0,
              perView: 2,
              bound: !0,
              gap: 30,
              keyboard: !0,
              animationDuration: 1e3,
              animationTimingFunc: "ease-in-out",
              peek: { before: -10, after: 150 },
              breakpoints: { 768: { perView: 1 } },
            }),
            e.forEach(function (e, n, r) {
              var i = new C.a(e, t);
              d(e, "box-img-text-type-1__slide"),
                new Promise(function (e, t) {
                  i.mount(), e("Successfully load slider"), t(new Error("Error loading slider"));
                }).then(function (e, t) {
                  if (!e) throw t;
                  document.querySelectorAll(".box-img-text img").forEach(function (e) {
                    e.addEventListener("load", function (e) {
                      new D.a(".box-img-text-type-1__slide");
                    });
                  }),
                    setTimeout(function () {
                      new D.a(".box-img-text-type-1__slide");
                    }, 50),
                    window.addEventListener("resize", function () {
                      new D.a(".box-img-text-type-1__slide");
                    });
                });
            }));
      }),
      (oe = function () {
        var e = document.querySelectorAll(".box-img-text-type-2__glide"),
          t = {
            type: "slider",
            startAt: 0,
            perView: 4,
            bound: !0,
            gap: 30,
            keyboard: !0,
            animationDuration: 1e3,
            animationTimingFunc: "ease-in-out",
            peek: { before: -10, after: 150 },
            breakpoints: { 1200: { perView: 3 }, 1024: { perView: 2 }, 768: { perView: 1 } },
          };
        e.forEach(function (e) {
          var n = new C.a(e, t);
          new Promise(function (e, t) {
            n.mount(), e("Successfully load slider"), t(new Error("Error loading slider"));
          }).then(function (e, t) {
            if (!e) throw t;
            document.querySelectorAll(".box-img-text img").forEach(function (e) {
              e.addEventListener("load", function (e) {
                new D.a(".box-img-text-type-1__slide");
              });
            }),
              setTimeout(function () {
                new D.a(".box-img-text-type-2__slide");
              }, 50),
              window.addEventListener("resize", function () {
                new D.a(".box-img-text-type-2__slide");
              });
          });
        }),
          ee &&
            ((t = {
              type: "slider",
              startAt: 0,
              perView: 2,
              bound: !0,
              gap: 30,
              keyboard: !0,
              animationDuration: 1e3,
              animationTimingFunc: "ease-in-out",
              peek: { before: -10, after: 150 },
              breakpoints: { 768: { perView: 1 } },
            }),
            e.forEach(function (e, n, r) {
              var i = new C.a(e, t);
              d(e, "box-img-text-type-1__slide"),
                new Promise(function (e, t) {
                  i.mount(), e("Successfully load slider"), t(new Error("Error loading slider"));
                }).then(function (e, t) {
                  if (!e) throw t;
                  document.querySelectorAll(".box-img-text img").forEach(function (e) {
                    e.addEventListener("load", function (e) {
                      new D.a(".box-img-text-type-1__slide");
                    });
                  }),
                    setTimeout(function () {
                      new D.a(".box-img-text-type-1__slide");
                    }, 50),
                    window.addEventListener("resize", function () {
                      new D.a(".box-img-text-type-1__slide");
                    });
                });
            }));
      }),
      te && (ne && re ? (ie(), oe()) : ne ? ie() : re && oe()),
      (function () {
        var e = document.querySelector(".inner"),
          t = document.querySelector(".events"),
          n = document.querySelector(".events-card-type"),
          r = document.querySelector(".events-slider-type-1"),
          i = document.querySelector(".events-slider-type-2"),
          o = {
            type: "slider",
            startAt: 0,
            perView: 5,
            bound: !0,
            gap: 30,
            keyboard: !0,
            animationDuration: 1e3,
            animationTimingFunc: "ease-in-out",
            peek: { before: -10, after: 100 },
            breakpoints: {
              1600: { perView: 4 },
              1300: { perView: 3 },
              1e3: { perView: 2 },
              700: { perView: 1 },
            },
          },
          s = function () {
            var t = document.querySelectorAll(".events-slider-type-1__glide");
            t.forEach(function (e) {
              var t = new C.a(e, o);
              new Promise(function (e, n) {
                t.mount(), e("Successfully load slider"), n(new Error("Error loading slider"));
              }).then(function (e, t) {
                if (!e) throw t;
                setTimeout(function () {
                  new D.a(".events-slider-type-1 .event__card");
                }, 50),
                  window.addEventListener("resize", function () {
                    new D.a(".events-slider-type-1 .event__card");
                  });
              });
            }),
              e &&
                ((o = {
                  type: "slider",
                  startAt: 0,
                  perView: 2,
                  bound: !0,
                  gap: 30,
                  keyboard: !0,
                  animationDuration: 1e3,
                  animationTimingFunc: "ease-in-out",
                  peek: { before: -10, after: 100 },
                  breakpoints: { 700: { perView: 1 } },
                }),
                t.forEach(function (e) {
                  var t = new C.a(e, o);
                  new Promise(function (e, n) {
                    t.mount(), e("Successfully load slider"), n(new Error("Error loading slider"));
                  }).then(function (e, t) {
                    if (!e) throw t;
                    setTimeout(function () {
                      new D.a(".events-slider-type-1 .event__card");
                    }, 50),
                      window.addEventListener("resize", function () {
                        new D.a(".events-slider-type-1 .event__card");
                      });
                  });
                }));
          },
          a = function () {
            var t = document.querySelectorAll(".events-slider-type-2__glide");
            t.forEach(function (e) {
              var t = new C.a(e, o);
              new Promise(function (e, n) {
                t.mount(), e("Successfully load slider"), n(new Error("Error loading slider"));
              }).then(function (e, t) {
                if (!e) throw t;
                setTimeout(function () {
                  new D.a(".events-slider-type-2 .event__card");
                }, 50),
                  window.addEventListener("resize", function () {
                    new D.a(".events-slider-type-2 .event__card");
                  });
              });
            }),
              e &&
                ((o = {
                  type: "slider",
                  startAt: 0,
                  perView: 2,
                  bound: !0,
                  gap: 30,
                  keyboard: !0,
                  animationDuration: 1e3,
                  animationTimingFunc: "ease-in-out",
                  peek: { before: -10, after: 100 },
                  breakpoints: { 700: { perView: 1 } },
                }),
                t.forEach(function (e) {
                  var t = new C.a(e, o);
                  new Promise(function (e, n) {
                    t.mount(), e("Successfully load slider"), n(new Error("Error loading slider"));
                  }).then(function (e, t) {
                    if (!e) throw t;
                    setTimeout(function () {
                      new D.a(".events-slider-type-2 .event__card");
                    }, 50),
                      window.addEventListener("resize", function () {
                        new D.a(".events-slider-type-2 .event__card");
                      });
                  });
                }));
          };
        t &&
          (n &&
            setTimeout(function () {
              new D.a(".events-card-type .event__card");
            }, 50),
          r && i ? (s(), a()) : r ? s() : i && a());
      })(),
      document.querySelector(".carousel") &&
        ((se = document.querySelectorAll(".carousel__glide")),
        (ae = function (e) {
          return {
            type: "slider",
            startAt: 0,
            perView: 1,
            bound: !0,
            gap: 30,
            touchRatio: e,
            keyboard: !0,
            animationDuration: 1e3,
            animationTimingFunc: "ease-in-out",
          };
        }),
        se.forEach(function (e) {
          var t = e.querySelectorAll(".carousel__slide"),
            n = e.querySelector(".carousel__arrows");
          new Promise(function (r, i) {
            t.length > 1 ? new C.a(e, ae(0.5)).mount() : (new C.a(e, ae(0)).mount(), n.remove()),
              r("Successfully load slider"),
              i(new Error("Error loading slider"));
          }).then(function (e, t) {
            if (!e) throw t;
            setTimeout(function () {
              new D.a(".carousel__slide__block");
            }, 50),
              window.addEventListener("resize", function () {
                new D.a(".carousel__slide__block");
              });
          });
        })),
      (ce = document.querySelector(".inner")),
      new be(
        ce
          ? {
              selector: ".tabs-ct .tabs",
              type: "horizontal",
              responsiveBreak: 1200,
              activeIndex: -1,
            }
          : {
              selector: ".tabs-ct .tabs",
              type: "horizontal",
              responsiveBreak: 992,
              activeIndex: -1,
            },
      ),
      new be({ selector: ".accordion-ct .tabs", type: "accordion", activeIndex: -1 }),
      document.querySelector(".cta-box") &&
        (window.innerWidth >= 992 && new D.a(".cta-box__block"),
        window.addEventListener("resize", function () {
          window.innerWidth >= 992 && new D.a(".cta-box__block");
        }),
        document.querySelectorAll(".cta-box__heading > a").forEach(function (e) {
          var t = e.closest(".cta-box__container").querySelector(".cta-box__mobile"),
            n = e.cloneNode(!0);
          t && t.appendChild(n);
        })),
      (le = function (e, t, n) {
        var r = new Date();
        r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
        var i = "expires=" + r.toUTCString();
        document.cookie = e + "=" + t + "; " + i + ";path=/";
      }),
      (ue = function (e) {
        for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
          for (var i = n[r]; " " == i.charAt(0); ) i = i.substring(1);
          if (-1 != i.indexOf(t)) return i.substring(t.length, i.length);
        }
        return "";
      }),
      (function e() {
        var t = ue("emergency").split(","),
          n = document.querySelector(".header-sticky").getAttribute("data-notice-url");
        $.getJSON(n, function (e) {
          if (e.notices.length > 1) {
            for (
              var n = $(".notice[data-id]")
                  .map(function () {
                    return $.map($(this).data(), function (e) {
                      return e;
                    });
                  })
                  .get(),
                r = 0;
              r < e.notices.length - 1;
              r++
            ) {
              var i = !($.inArray(e.notices[r].id, t) < 0),
                o = !($.inArray(e.notices[r].id, n) < 0),
                s = "emergency" == e.notices[r].noticetype;
              ((!i && !o) || (i && !o && s)) &&
                ($(".site-wide-notice").append(
                  '<div class="site-wide-notice__wrapper notice warning" data-id="'
                    .concat(
                      e.notices[r].id,
                      '">\n                  <span class="site-wide-notice__date">',
                    )
                    .concat(
                      e.notices[r].date,
                      '</span>\n                  <span class="site-wide-notice__message">',
                    )
                    .concat(e.notices[r].message, '</span>\n                  <a href="')
                    .concat(e.notices[r].url, '" class="site-wide-notice__link">')
                    .concat(e.notices[r].linktext, "</a>\n                </div>"),
                ),
                s && $('.close-icon[data-id="' + e.notices[r].id + '"]').remove());
            }
            $(".notice .close-icon").on("click", function () {
              var e = $(this).attr("data-id");
              if (!$(this).parents(".notice").addClass("closed").hasClass("emergency")) {
                var t = ue("emergency");
                if ("" == t) le("emergency", e, 1);
                else {
                  var n = t.split(",");
                  $.inArray(e, n) < 0 && le("emergency", t + "," + e, 1);
                }
              }
            });
          }
        }).fail(function () {
          console.log("Failed to get emergency notice JSON File");
        }),
          setTimeout(function () {
            e();
          }, 1e4);
      })(),
      (function () {
        var e = document.querySelectorAll(".link-icon"),
          t = document.querySelectorAll(".btn-left-add-icon"),
          n = document.querySelectorAll(".btn-right-arrow-icon"),
          r = document.querySelectorAll(".btn-directional-left"),
          i = document.querySelectorAll(".btn-directional-right");
        e.forEach(function (e) {
          e &&
            e.insertAdjacentHTML(
              "beforeend",
              '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
            );
        }),
          t.forEach(function (e) {
            e &&
              e.insertAdjacentHTML(
                "afterbegin",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Add icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_add_24px"></use></svg>',
              );
          }),
          n.forEach(function (e) {
            e &&
              e.insertAdjacentHTML(
                "beforeend",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
              );
          }),
          r.forEach(function (e) {
            e &&
              (e.firstElementChild && e.firstElementChild.remove(),
              e.insertAdjacentHTML(
                "beforeend",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow left icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_left_24px"></use></svg>',
              ));
          }),
          i.forEach(function (e) {
            e &&
              (e.firstElementChild && e.firstElementChild.remove(),
              e.insertAdjacentHTML(
                "beforeend",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
              ));
          }),
          document.querySelectorAll(".general-content table").forEach(function (e) {
            var t = document.createElement("div");
            t.classList.add("table-responsive"), e.parentNode.insertBefore(t, e), t.appendChild(e);
          });
        var o = document.querySelectorAll(".link-icon > a"),
          s = document.querySelectorAll(".btn-left-add-icon-primary > a"),
          a = document.querySelectorAll(".btn-left-add-icon-secondary > a"),
          c = document.querySelectorAll(".btn-right-arrow-icon-secondary > a"),
          l = document.querySelectorAll(".btn-right-arrow-icon-primary > a");
        o.forEach(function (e) {
          e &&
            (e.insertAdjacentHTML(
              "beforeend",
              '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
            ),
            e.nextElementSibling && e.nextElementSibling.remove());
        }),
          s.forEach(function (e) {
            e &&
              e.insertAdjacentHTML(
                "afterbegin",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Add icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_add_24px"></use></svg>',
              );
          }),
          a.forEach(function (e) {
            e &&
              e.insertAdjacentHTML(
                "afterbegin",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Add icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_add_24px"></use></svg>',
              );
          }),
          c.forEach(function (e) {
            e &&
              e.insertAdjacentHTML(
                "beforeend",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
              );
          }),
          l.forEach(function (e) {
            e &&
              e.insertAdjacentHTML(
                "beforeend",
                '<svg class="svg-md-24px" focusable="false" aria-hidden="true"><title>Arrow right icon</title><use xlink:href="<t4 type="media" id="10757" formatter="path/*" />#ic_keyboard_arrow_right_24px"></use></svg>',
              );
          });
        var u = document.querySelectorAll(".float_left"),
          f = document.querySelectorAll(".float_right");
        new Promise(function (e, t) {
          u.forEach(function (e) {
            var t = e.parentNode,
              n = document.createElement("div");
            n.setAttribute(
              "class",
              "general-content__img-left-auto-mg general-content__img-block general-content__img-block--left",
            ),
              t.replaceChild(n, e),
              n.appendChild(e),
              e.removeAttribute("class");
            var r = n.nextElementSibling,
              i = n.parentElement;
            r &&
              "P" === r.tagName &&
              r.getBoundingClientRect().height < 250 &&
              (r.style.minHeight = "250px"),
              i &&
                "DIV" === i.tagName &&
                "P" === i.nextElementSibling.tagName &&
                i.nextElementSibling.getBoundingClientRect().height < 250 &&
                (i.nextElementSibling.style.minHeight = "250px");
          }),
            e("Successfully added parent node"),
            t(new Error("Error adding parent node"));
        }).then(function (e, t) {
          if (!e) throw t;
          document.querySelectorAll(".general-content__img-left-auto-mg").forEach(function (e) {
            e.parentElement.classList.add("general-content__img-auto");
            var t = document.querySelector("img");
            t.nextElementSibling &&
              t.nextElementSibling.classList.add("general-content__img-block-caption");
          });
        }),
          new Promise(function (e, t) {
            f.forEach(function (e) {
              var t = e.parentNode,
                n = document.createElement("div");
              n.setAttribute(
                "class",
                "general-content__img-right-auto-mg general-content__img-block general-content__img-block--right",
              ),
                t.replaceChild(n, e),
                n.appendChild(e),
                e.removeAttribute("class");
              var r = n.nextElementSibling,
                i = n.parentElement;
              r &&
                "P" === r.tagName &&
                r.getBoundingClientRect().height < 250 &&
                (r.style.minHeight = "250px"),
                i &&
                  "DIV" === i.tagName &&
                  "P" === i.nextElementSibling.tagName &&
                  i.nextElementSibling.getBoundingClientRect().height < 250 &&
                  (i.nextElementSibling.style.minHeight = "250px");
            }),
              e("Successfully added parent node"),
              t(new Error("Error adding parent node"));
          }).then(function (e, t) {
            if (!e) throw t;
            document.querySelectorAll(".general-content__img-right-auto-mg").forEach(function (e) {
              var t = document.querySelector("img");
              t.nextElementSibling &&
                t.nextElementSibling.classList.add("general-content__img-block-caption");
            });
          });
      })(),
      (fe = document.querySelector(".infographic")),
      (de = document.querySelectorAll(".infographic__slides")),
      (pe = document.querySelector(".infographic-3-tiles")),
      (he = document.querySelector(".infographic-6-tiles")),
      (me = document.querySelector(".infographic-9-tiles")),
      (ge = function () {
        var e = document.querySelectorAll(".infographic-3-tiles .infographic__glide"),
          t = {
            type: "slider",
            startAt: 0,
            perView: 3,
            bound: !0,
            gap: 0,
            keyboard: !0,
            animationDuration: 1e3,
            animationTimingFunc: "ease-in-out",
            touchRatio: 0,
            swipeThreshold: 10,
            dragThreshold: 10,
            breakpoints: { 992: { perView: 3 }, 768: { perView: 1, touchRatio: 1 } },
          };
        e.forEach(function (e) {
          var n = new C.a(e, t);
          new Promise(function (e, t) {
            n.mount(), e("Successfully load slider"), t(new Error("Error loading slider"));
          }).then(function (e, t) {
            if (!e) throw t;
            setTimeout(function () {
              new D.a(".infographic__slide");
            }, 50),
              window.addEventListener("resize", function () {
                new D.a(".infographic__slide"),
                  window.innerWidth > 991 &&
                    de.forEach(function (e) {
                      e.style.transform = "translateY(0)";
                    });
              });
          });
        });
      }),
      (ve = function () {
        var e = document.querySelectorAll(".infographic-6-tiles .infographic__glide"),
          t = {
            type: "slider",
            startAt: 0,
            perView: 6,
            bound: !0,
            gap: 0,
            keyboard: !0,
            animationDuration: 1e3,
            animationTimingFunc: "ease-in-out",
            touchRatio: 0,
            swipeThreshold: 10,
            dragThreshold: 10,
            breakpoints: { 992: { perView: 3, touchRatio: 1 }, 768: { perView: 1, touchRatio: 1 } },
          };
        e.forEach(function (e) {
          var n = new C.a(e, t);
          new Promise(function (e, t) {
            n.mount(), e("Successfully load slider"), t(new Error("Error loading slider"));
          }).then(function (e, t) {
            if (!e) throw t;
            setTimeout(function () {
              new D.a(".infographic__slide");
            }, 50),
              window.addEventListener("resize", function () {
                new D.a(".infographic__slide"),
                  window.innerWidth > 991 &&
                    de.forEach(function (e) {
                      e.style.transform = "translateY(0)";
                    });
              });
          });
        });
      }),
      (ye = function () {
        var e = document.querySelectorAll(".infographic-9-tiles .infographic__glide"),
          t = {
            type: "slider",
            startAt: 0,
            perView: 9,
            bound: !0,
            gap: 0,
            keyboard: !0,
            animationDuration: 1e3,
            animationTimingFunc: "ease-in-out",
            touchRatio: 0,
            swipeThreshold: 10,
            dragThreshold: 10,
            breakpoints: { 992: { perView: 3, touchRatio: 1 }, 768: { perView: 1, touchRatio: 1 } },
          };
        e.forEach(function (e) {
          var n = new C.a(e, t);
          new Promise(function (e, t) {
            n.mount(), e("Successfully load slider"), t(new Error("Error loading slider"));
          }).then(function (e, t) {
            if (!e) throw t;
            setTimeout(function () {
              new D.a(".infographic__slide");
            }, 50),
              window.addEventListener("resize", function () {
                new D.a(".infographic__slide"),
                  window.innerWidth > 991 &&
                    de.forEach(function (e) {
                      e.style.transform = "translateY(0)";
                    });
              });
          });
        });
      }),
      fe &&
        (pe && he && me
          ? (ge(), ve(), ye())
          : pe && he
          ? (ge(), ve())
          : pe && me
          ? (ge(), ye())
          : he && me
          ? (ve(), ye())
          : pe
          ? ge()
          : he
          ? ve()
          : me && ye()),
      (function () {
        var e,
          t,
          n = document.querySelector(".inner");
        document.querySelector(".gallery") &&
          ((e = document.querySelectorAll(".gallery__glide")),
          (t = function (e, t) {
            var r = {
              type: "slider",
              startAt: e,
              focusAt: "center",
              perView: 1,
              bound: !0,
              gap: 0,
              keyboard: !0,
              animationDuration: 1e3,
              animationTimingFunc: "ease-in-out",
              touchRatio: t,
              peek: { before: 500, after: 500 },
              breakpoints: {
                1700: { peek: { before: 400, after: 400 } },
                1500: { peek: { before: 300, after: 300 } },
                1200: { peek: { before: 200, after: 200 } },
                991: { peek: { before: 100, after: 100 } },
                768: { peek: { before: 50, after: 50 } },
              },
            };
            return n
              ? (r = {
                  type: "slider",
                  startAt: e,
                  focusAt: "center",
                  perView: 1,
                  bound: !0,
                  gap: 0,
                  keyboard: !0,
                  animationDuration: 1e3,
                  animationTimingFunc: "ease-in-out",
                  touchRatio: t,
                  peek: { before: 200, after: 200 },
                  breakpoints: {
                    991: { peek: { before: 100, after: 100 } },
                    768: { peek: { before: 50, after: 50 } },
                  },
                })
              : r;
          }),
          e.forEach(function (e) {
            var n = e.querySelectorAll(".gallery__slide"),
              r = e.querySelector(".gallery__arrows");
            n.length > 2
              ? new C.a(e, t(1, 0.5)).mount()
              : (new C.a(e, t(0, 0)).mount(), r.remove());
          }));
      })(),
      _e(),
      we(),
      (function () {
        var e, t;
        if (document.querySelector(".my-apps")) {
          (e = document.querySelectorAll(".popup-info-trigger")),
            (t = document.getElementsByClassName("my-apps__info-popup")),
            e.forEach(function (e) {
              e.addEventListener("click", function () {
                var t = e.dataset.infoPopupTrigger,
                  n = document.querySelector('[data-info-popup="'.concat(t, '"]'));
                u(n, "block"),
                  window.innerWidth > 576
                    ? n.getBoundingClientRect().right >=
                      (window.innerWidth || document.documentElement.clientWidth)
                      ? n.classList.add("right-position")
                      : n.getBoundingClientRect().bottom >=
                        (window.innerHeight || document.documentElement.clientHeight)
                      ? n.classList.add("bottom-position")
                      : n.getBoundingClientRect().right >=
                          (window.innerWidth || document.documentElement.clientWidth) &&
                        n.getBoundingClientRect().bottom >=
                          (window.innerHeight || document.documentElement.clientHeight) &&
                        (n.classList.add("right-position"), n.classList.add("bottom-position"))
                    : (n.classList.contains("right-position") &&
                        n.classList.remove("right-position"),
                      n.classList.contains("bottom-position") &&
                        n.classList.remove("bottom-position"),
                      n.classList.contains("right-position") &&
                        n.classList.contains("bottom-position") &&
                        (n.classList.remove("right-position"),
                        n.classList.remove("bottom-position"))),
                  window.addEventListener("resize", function () {
                    window.innerWidth > 576
                      ? n.getBoundingClientRect().right >=
                        (window.innerWidth || document.documentElement.clientWidth)
                        ? n.classList.add("right-position")
                        : n.getBoundingClientRect().bottom >=
                          (window.innerHeight || document.documentElement.clientHeight)
                        ? n.classList.add("bottom-position")
                        : n.getBoundingClientRect().right >=
                            (window.innerWidth || document.documentElement.clientWidth) &&
                          n.getBoundingClientRect().bottom >=
                            (window.innerHeight || document.documentElement.clientHeight) &&
                          (n.classList.add("right-position"), n.classList.add("bottom-position"))
                      : (n.classList.contains("right-position") &&
                          n.classList.remove("right-position"),
                        n.classList.contains("bottom-position") &&
                          n.classList.remove("bottom-position"),
                        n.classList.contains("right-position") &&
                          n.classList.contains("bottom-position") &&
                          (n.classList.remove("right-position"),
                          n.classList.remove("bottom-position")));
                  });
              });
            }),
            document.addEventListener("click", function (e) {
              t.forEach(function (e) {
                f(e);
              });
            }),
            document.addEventListener("keydown", function (e) {
              27 === e.keyCode &&
                t.forEach(function (e) {
                  f(e);
                });
            }),
            p();
        }
      })(),
      (function () {
        if (document.querySelector(".header-bullet-list"))
          for (
            var e = document.querySelector(".header-bullet-list__content"), t = 0;
            t < e.children.length;
            t++
          )
            1 === e.children.length &&
              (e.children[t].classList.remove("col-md-6"),
              e.children[t].classList.add("col-md-12"));
      })(),
      document.querySelector(".video-panel") &&
        document.querySelectorAll(".video-panel__block__content").forEach(function (e) {
          e.lastElementChild &&
            !e.lastElementChild.classList.contains("video-panel__block__link") &&
            (e.parentElement.setAttribute("tabindex", "-1"),
            (e.parentElement.style.pointerEvents = "none"));
        }),
      document.querySelector(".header-nav__top__auth-user") &&
        (document
          .querySelector(".header-nav__top__auth-user > a")
          .addEventListener("click", function (e) {
            e.preventDefault();
          }),
        L()),
      document.addEventListener("t4-after-ajax", function (e) {
        _e();
      }),
      document.addEventListener("t4-refresh-filters", function (e) {
        we();
      });
  },
]);
