"use strict";
(self.webpackChunk_commonninja_widget_renderer = self.webpackChunk_commonninja_widget_renderer || []).push([
    [9253], {
        85466: (e, t, n) => {
            function o(e) {
                var t, n, s = "";
                if ("string" == typeof e || "number" == typeof e) s += e;
                else if ("object" == typeof e)
                    if (Array.isArray(e))
                        for (t = 0; t < e.length; t++) e[t] && (n = o(e[t])) && (s && (s += " "), s += n);
                    else
                        for (t in e) e[t] && (s && (s += " "), s += t);
                return s
            }

            function s() {
                for (var e, t, n = 0, s = ""; n < arguments.length;)(e = arguments[n++]) && (t = o(e)) && (s && (s += " "), s += t);
                return s
            }
            n.r(t), n.d(t, {
                clsx: () => s,
                default: () => a
            });
            const a = s
        },
        79253: (e, t, n) => {
            n.r(t), n.d(t, {
                Bounce: () => I,
                Flip: () => N,
                Icons: () => g,
                Slide: () => L,
                ToastContainer: () => R,
                Zoom: () => O,
                collapseToast: () => u,
                cssTransition: () => d,
                toast: () => F,
                useToast: () => T,
                useToastContainer: () => h
            });
            var o = n(53617),
                s = n(85466);
            const a = e => "number" == typeof e && !isNaN(e),
                r = e => "string" == typeof e,
                i = e => "function" == typeof e,
                c = e => r(e) || i(e) ? e : null,
                l = e => (0, o.isValidElement)(e) || r(e) || i(e) || a(e);

            function u(e, t, n) {
                void 0 === n && (n = 300);
                const {
                    scrollHeight: o,
                    style: s
                } = e;
                requestAnimationFrame((() => {
                    s.minHeight = "initial", s.height = o + "px", s.transition = "all ".concat(n, "ms"), requestAnimationFrame((() => {
                        s.height = "0", s.padding = "0", s.margin = "0", setTimeout(t, n)
                    }))
                }))
            }

            function d(e) {
                let {
                    enter: t,
                    exit: n,
                    appendPosition: s = !1,
                    collapse: a = !0,
                    collapseDuration: r = 300
                } = e;
                return function(e) {
                    let {
                        children: i,
                        position: c,
                        preventExitTransition: l,
                        done: d,
                        nodeRef: f,
                        isIn: p
                    } = e;
                    const m = s ? "".concat(t, "--").concat(c) : t,
                        g = s ? "".concat(n, "--").concat(c) : n,
                        h = (0, o.useRef)(0);
                    return (0, o.useLayoutEffect)((() => {
                        const e = f.current,
                            t = m.split(" "),
                            n = o => {
                                o.target === f.current && (e.dispatchEvent(new Event("d")), e.removeEventListener("animationend", n), e.removeEventListener("animationcancel", n), 0 === h.current && "animationcancel" !== o.type && e.classList.remove(...t))
                            };
                        e.classList.add(...t), e.addEventListener("animationend", n), e.addEventListener("animationcancel", n)
                    }), []), (0, o.useEffect)((() => {
                        const e = f.current,
                            t = () => {
                                e.removeEventListener("animationend", t), a ? u(e, d, r) : d()
                            };
                        p || (l ? t() : (h.current = 1, e.className += " ".concat(g), e.addEventListener("animationend", t)))
                    }), [p]), o.createElement(o.Fragment, null, i)
                }
            }

            function f(e, t) {
                return null != e ? {
                    content: e.content,
                    containerId: e.props.containerId,
                    id: e.props.toastId,
                    theme: e.props.theme,
                    type: e.props.type,
                    data: e.props.data || {},
                    isLoading: e.props.isLoading,
                    icon: e.props.icon,
                    status: t
                } : {}
            }
            const p = {
                    list: new Map,
                    emitQueue: new Map,
                    on(e, t) {
                        return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
                    },
                    off(e, t) {
                        if (t) {
                            const n = this.list.get(e).filter((e => e !== t));
                            return this.list.set(e, n), this
                        }
                        return this.list.delete(e), this
                    },
                    cancelEmit(e) {
                        const t = this.emitQueue.get(e);
                        return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
                    },
                    emit(e) {
                        this.list.has(e) && this.list.get(e).forEach((t => {
                            const n = setTimeout((() => {
                                t(...[].slice.call(arguments, 1))
                            }), 0);
                            this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n)
                        }))
                    }
                },
                m = e => {
                    let {
                        theme: t,
                        type: n,
                        ...s
                    } = e;
                    return o.createElement("svg", {
                        viewBox: "0 0 24 24",
                        width: "100%",
                        height: "100%",
                        fill: "colored" === t ? "currentColor" : "var(--toastify-icon-color-".concat(n, ")"),
                        ...s
                    })
                },
                g = {
                    info: function(e) {
                        return o.createElement(m, { ...e
                        }, o.createElement("path", {
                            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
                        }))
                    },
                    warning: function(e) {
                        return o.createElement(m, { ...e
                        }, o.createElement("path", {
                            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
                        }))
                    },
                    success: function(e) {
                        return o.createElement(m, { ...e
                        }, o.createElement("path", {
                            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
                        }))
                    },
                    error: function(e) {
                        return o.createElement(m, { ...e
                        }, o.createElement("path", {
                            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
                        }))
                    },
                    spinner: function() {
                        return o.createElement("div", {
                            className: "Toastify__spinner"
                        })
                    }
                };

            function h(e) {
                const [, t] = (0, o.useReducer)((e => e + 1), 0), [n, s] = (0, o.useState)([]), u = (0, o.useRef)(null), d = (0, o.useRef)(new Map).current, m = e => -1 !== n.indexOf(e), h = (0, o.useRef)({
                    toastKey: 1,
                    displayedToast: 0,
                    count: 0,
                    queue: [],
                    props: e,
                    containerId: null,
                    isToastActive: m,
                    getToast: e => d.get(e)
                }).current;

                function y(e) {
                    let {
                        containerId: t
                    } = e;
                    const {
                        limit: n
                    } = h.props;
                    !n || t && h.containerId !== t || (h.count -= h.queue.length, h.queue = [])
                }

                function v(e) {
                    s((t => null == e ? [] : t.filter((t => t !== e))))
                }

                function T() {
                    const {
                        toastContent: e,
                        toastProps: t,
                        staleId: n
                    } = h.queue.shift();
                    C(e, t, n)
                }

                function E(e, n) {
                    let {
                        delay: s,
                        staleId: m,
                        ...y
                    } = n;
                    if (!l(e) || function(e) {
                            return !u.current || h.props.enableMultiContainer && e.containerId !== h.props.containerId || d.has(e.toastId) && null == e.updateId
                        }(y)) return;
                    const {
                        toastId: E,
                        updateId: b,
                        data: _
                    } = y, {
                        props: I
                    } = h, L = () => v(E), O = null == b;
                    O && h.count++;
                    const N = { ...I,
                        style: I.toastStyle,
                        key: h.toastKey++,
                        ...Object.fromEntries(Object.entries(y).filter((e => {
                            let [t, n] = e;
                            return null != n
                        }))),
                        toastId: E,
                        updateId: b,
                        data: _,
                        closeToast: L,
                        isIn: !1,
                        className: c(y.className || I.toastClassName),
                        bodyClassName: c(y.bodyClassName || I.bodyClassName),
                        progressClassName: c(y.progressClassName || I.progressClassName),
                        autoClose: !y.isLoading && (R = y.autoClose, w = I.autoClose, !1 === R || a(R) && R > 0 ? R : w),
                        deleteToast() {
                            const e = f(d.get(E), "removed");
                            d.delete(E), p.emit(4, e);
                            const n = h.queue.length;
                            if (h.count = null == E ? h.count - h.displayedToast : h.count - 1, h.count < 0 && (h.count = 0), n > 0) {
                                const e = null == E ? h.props.limit : 1;
                                if (1 === n || 1 === e) h.displayedToast++, T();
                                else {
                                    const t = e > n ? n : e;
                                    h.displayedToast = t;
                                    for (let e = 0; e < t; e++) T()
                                }
                            } else t()
                        }
                    };
                    var R, w;
                    N.iconOut = function(e) {
                        let {
                            theme: t,
                            type: n,
                            isLoading: s,
                            icon: c
                        } = e, l = null;
                        const u = {
                            theme: t,
                            type: n
                        };
                        return !1 === c || (i(c) ? l = c(u) : (0, o.isValidElement)(c) ? l = (0, o.cloneElement)(c, u) : r(c) || a(c) ? l = c : s ? l = g.spinner() : (e => e in g)(n) && (l = g[n](u))), l
                    }(N), i(y.onOpen) && (N.onOpen = y.onOpen), i(y.onClose) && (N.onClose = y.onClose), N.closeButton = I.closeButton, !1 === y.closeButton || l(y.closeButton) ? N.closeButton = y.closeButton : !0 === y.closeButton && (N.closeButton = !l(I.closeButton) || I.closeButton);
                    let k = e;
                    (0, o.isValidElement)(e) && !r(e.type) ? k = (0, o.cloneElement)(e, {
                        closeToast: L,
                        toastProps: N,
                        data: _
                    }) : i(e) && (k = e({
                        closeToast: L,
                        toastProps: N,
                        data: _
                    })), I.limit && I.limit > 0 && h.count > I.limit && O ? h.queue.push({
                        toastContent: k,
                        toastProps: N,
                        staleId: m
                    }) : a(s) ? setTimeout((() => {
                        C(k, N, m)
                    }), s) : C(k, N, m)
                }

                function C(e, t, n) {
                    const {
                        toastId: o
                    } = t;
                    n && d.delete(n);
                    const a = {
                        content: e,
                        props: t
                    };
                    d.set(o, a), s((e => [...e, o].filter((e => e !== n)))), p.emit(4, f(a, null == a.props.updateId ? "added" : "updated"))
                }
                return (0, o.useEffect)((() => (h.containerId = e.containerId, p.cancelEmit(3).on(0, E).on(1, (e => u.current && v(e))).on(5, y).emit(2, h), () => {
                    d.clear(), p.emit(3, h)
                })), []), (0, o.useEffect)((() => {
                    h.props = e, h.isToastActive = m, h.displayedToast = n.length
                })), {
                    getToastToRender: function(t) {
                        const n = new Map,
                            o = Array.from(d.values());
                        return e.newestOnTop && o.reverse(), o.forEach((e => {
                            const {
                                position: t
                            } = e.props;
                            n.has(t) || n.set(t, []), n.get(t).push(e)
                        })), Array.from(n, (e => t(e[0], e[1])))
                    },
                    containerRef: u,
                    isToastActive: m
                }
            }

            function y(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
            }

            function v(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
            }

            function T(e) {
                const [t, n] = (0, o.useState)(!1), [s, a] = (0, o.useState)(!1), r = (0, o.useRef)(null), c = (0, o.useRef)({
                    start: 0,
                    x: 0,
                    y: 0,
                    delta: 0,
                    removalDistance: 0,
                    canCloseOnClick: !0,
                    canDrag: !1,
                    boundingRect: null,
                    didMove: !1
                }).current, l = (0, o.useRef)(e), {
                    autoClose: u,
                    pauseOnHover: d,
                    closeToast: f,
                    onClick: p,
                    closeOnClick: m
                } = e;

                function g(t) {
                    if (e.draggable) {
                        "touchstart" === t.nativeEvent.type && t.nativeEvent.preventDefault(), c.didMove = !1, document.addEventListener("mousemove", C), document.addEventListener("mouseup", b), document.addEventListener("touchmove", C), document.addEventListener("touchend", b);
                        const n = r.current;
                        c.canCloseOnClick = !0, c.canDrag = !0, c.boundingRect = n.getBoundingClientRect(), n.style.transition = "", c.x = y(t.nativeEvent), c.y = v(t.nativeEvent), "x" === e.draggableDirection ? (c.start = c.x, c.removalDistance = n.offsetWidth * (e.draggablePercent / 100)) : (c.start = c.y, c.removalDistance = n.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent / 100))
                    }
                }

                function h(t) {
                    if (c.boundingRect) {
                        const {
                            top: n,
                            bottom: o,
                            left: s,
                            right: a
                        } = c.boundingRect;
                        "touchend" !== t.nativeEvent.type && e.pauseOnHover && c.x >= s && c.x <= a && c.y >= n && c.y <= o ? E() : T()
                    }
                }

                function T() {
                    n(!0)
                }

                function E() {
                    n(!1)
                }

                function C(n) {
                    const o = r.current;
                    c.canDrag && o && (c.didMove = !0, t && E(), c.x = y(n), c.y = v(n), c.delta = "x" === e.draggableDirection ? c.x - c.start : c.y - c.start, c.start !== c.x && (c.canCloseOnClick = !1), o.style.transform = "translate".concat(e.draggableDirection, "(").concat(c.delta, "px)"), o.style.opacity = "" + (1 - Math.abs(c.delta / c.removalDistance)))
                }

                function b() {
                    document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", b), document.removeEventListener("touchmove", C), document.removeEventListener("touchend", b);
                    const t = r.current;
                    if (c.canDrag && c.didMove && t) {
                        if (c.canDrag = !1, Math.abs(c.delta) > c.removalDistance) return a(!0), void e.closeToast();
                        t.style.transition = "transform 0.2s, opacity 0.2s", t.style.transform = "translate".concat(e.draggableDirection, "(0)"), t.style.opacity = "1"
                    }
                }(0, o.useEffect)((() => {
                    l.current = e
                })), (0, o.useEffect)((() => (r.current && r.current.addEventListener("d", T, {
                    once: !0
                }), i(e.onOpen) && e.onOpen((0, o.isValidElement)(e.children) && e.children.props), () => {
                    const e = l.current;
                    i(e.onClose) && e.onClose((0, o.isValidElement)(e.children) && e.children.props)
                })), []), (0, o.useEffect)((() => (e.pauseOnFocusLoss && (document.hasFocus() || E(), window.addEventListener("focus", T), window.addEventListener("blur", E)), () => {
                    e.pauseOnFocusLoss && (window.removeEventListener("focus", T), window.removeEventListener("blur", E))
                })), [e.pauseOnFocusLoss]);
                const _ = {
                    onMouseDown: g,
                    onTouchStart: g,
                    onMouseUp: h,
                    onTouchEnd: h
                };
                return u && d && (_.onMouseEnter = E, _.onMouseLeave = T), m && (_.onClick = e => {
                    p && p(e), c.canCloseOnClick && f()
                }), {
                    playToast: T,
                    pauseToast: E,
                    isRunning: t,
                    preventExitTransition: s,
                    toastRef: r,
                    eventHandlers: _
                }
            }

            function E(e) {
                let {
                    closeToast: t,
                    theme: n,
                    ariaLabel: s = "close"
                } = e;
                return o.createElement("button", {
                    className: "Toastify__close-button Toastify__close-button--".concat(n),
                    type: "button",
                    onClick: e => {
                        e.stopPropagation(), t(e)
                    },
                    "aria-label": s
                }, o.createElement("svg", {
                    "aria-hidden": "true",
                    viewBox: "0 0 14 16"
                }, o.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
                })))
            }

            function C(e) {
                let {
                    delay: t,
                    isRunning: n,
                    closeToast: a,
                    type: r = "default",
                    hide: c,
                    className: l,
                    style: u,
                    controlledProgress: d,
                    progress: f,
                    rtl: p,
                    isIn: m,
                    theme: g
                } = e;
                const h = c || d && 0 === f,
                    y = { ...u,
                        animationDuration: "".concat(t, "ms"),
                        animationPlayState: n ? "running" : "paused",
                        opacity: h ? 0 : 1
                    };
                d && (y.transform = "scaleX(".concat(f, ")"));
                const v = (0, s.default)("Toastify__progress-bar", d ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--".concat(g), "Toastify__progress-bar--".concat(r), {
                        "Toastify__progress-bar--rtl": p
                    }),
                    T = i(l) ? l({
                        rtl: p,
                        type: r,
                        defaultClassName: v
                    }) : (0, s.default)(v, l);
                return o.createElement("div", {
                    role: "progressbar",
                    "aria-hidden": h ? "true" : "false",
                    "aria-label": "notification timer",
                    className: T,
                    style: y,
                    [d && f >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: d && f < 1 ? null : () => {
                        m && a()
                    }
                })
            }
            const b = e => {
                    const {
                        isRunning: t,
                        preventExitTransition: n,
                        toastRef: a,
                        eventHandlers: r
                    } = T(e), {
                        closeButton: c,
                        children: l,
                        autoClose: u,
                        onClick: d,
                        type: f,
                        hideProgressBar: p,
                        closeToast: m,
                        transition: g,
                        position: h,
                        className: y,
                        style: v,
                        bodyClassName: b,
                        bodyStyle: _,
                        progressClassName: I,
                        progressStyle: L,
                        updateId: O,
                        role: N,
                        progress: R,
                        rtl: w,
                        toastId: k,
                        deleteToast: M,
                        isIn: x,
                        isLoading: B,
                        iconOut: P,
                        closeOnClick: A,
                        theme: D
                    } = e, z = (0, s.default)("Toastify__toast", "Toastify__toast-theme--".concat(D), "Toastify__toast--".concat(f), {
                        "Toastify__toast--rtl": w
                    }, {
                        "Toastify__toast--close-on-click": A
                    }), F = i(y) ? y({
                        rtl: w,
                        position: h,
                        type: f,
                        defaultClassName: z
                    }) : (0, s.default)(z, y), S = !!R || !u, H = {
                        closeToast: m,
                        type: f,
                        theme: D
                    };
                    let q = null;
                    return !1 === c || (q = i(c) ? c(H) : (0, o.isValidElement)(c) ? (0, o.cloneElement)(c, H) : E(H)), o.createElement(g, {
                        isIn: x,
                        done: M,
                        position: h,
                        preventExitTransition: n,
                        nodeRef: a
                    }, o.createElement("div", {
                        id: k,
                        onClick: d,
                        className: F,
                        ...r,
                        style: v,
                        ref: a
                    }, o.createElement("div", { ...x && {
                            role: N
                        },
                        className: i(b) ? b({
                            type: f
                        }) : (0, s.default)("Toastify__toast-body", b),
                        style: _
                    }, null != P && o.createElement("div", {
                        className: (0, s.default)("Toastify__toast-icon", {
                            "Toastify--animate-icon Toastify__zoom-enter": !B
                        })
                    }, P), o.createElement("div", null, l)), q, o.createElement(C, { ...O && !S ? {
                            key: "pb-".concat(O)
                        } : {},
                        rtl: w,
                        theme: D,
                        delay: u,
                        isRunning: t,
                        isIn: x,
                        closeToast: m,
                        hide: p,
                        type: f,
                        style: L,
                        className: I,
                        controlledProgress: S,
                        progress: R || 0
                    })))
                },
                _ = function(e, t) {
                    return void 0 === t && (t = !1), {
                        enter: "Toastify--animate Toastify__".concat(e, "-enter"),
                        exit: "Toastify--animate Toastify__".concat(e, "-exit"),
                        appendPosition: t
                    }
                },
                I = d(_("bounce", !0)),
                L = d(_("slide", !0)),
                O = d(_("zoom")),
                N = d(_("flip")),
                R = (0, o.forwardRef)(((e, t) => {
                    const {
                        getToastToRender: n,
                        containerRef: a,
                        isToastActive: r
                    } = h(e), {
                        className: l,
                        style: u,
                        rtl: d,
                        containerId: f
                    } = e;

                    function p(e) {
                        const t = (0, s.default)("Toastify__toast-container", "Toastify__toast-container--".concat(e), {
                            "Toastify__toast-container--rtl": d
                        });
                        return i(l) ? l({
                            position: e,
                            rtl: d,
                            defaultClassName: t
                        }) : (0, s.default)(t, c(l))
                    }
                    return (0, o.useEffect)((() => {
                        t && (t.current = a.current)
                    }), []), o.createElement("div", {
                        ref: a,
                        className: "Toastify",
                        id: f
                    }, n(((e, t) => {
                        const n = t.length ? { ...u
                        } : { ...u,
                            pointerEvents: "none"
                        };
                        return o.createElement("div", {
                            className: p(e),
                            style: n,
                            key: "container-".concat(e)
                        }, t.map(((e, n) => {
                            let {
                                content: s,
                                props: a
                            } = e;
                            return o.createElement(b, { ...a,
                                isIn: r(a.toastId),
                                style: { ...a.style,
                                    "--nth": n + 1,
                                    "--len": t.length
                                },
                                key: "toast-".concat(a.key)
                            }, s)
                        })))
                    })))
                }));
            R.displayName = "ToastContainer", R.defaultProps = {
                position: "top-right",
                transition: I,
                autoClose: 5e3,
                closeButton: E,
                pauseOnHover: !0,
                pauseOnFocusLoss: !0,
                closeOnClick: !0,
                draggable: !0,
                draggablePercent: 80,
                draggableDirection: "x",
                role: "alert",
                theme: "light"
            };
            let w, k = new Map,
                M = [],
                x = 1;

            function B() {
                return "" + x++
            }

            function P(e) {
                return e && (r(e.toastId) || a(e.toastId)) ? e.toastId : B()
            }

            function A(e, t) {
                return k.size > 0 ? p.emit(0, e, t) : M.push({
                    content: e,
                    options: t
                }), t.toastId
            }

            function D(e, t) {
                return { ...t,
                    type: t && t.type || e,
                    toastId: P(t)
                }
            }

            function z(e) {
                return (t, n) => A(t, D(e, n))
            }

            function F(e, t) {
                return A(e, D("default", t))
            }
            F.loading = (e, t) => A(e, D("default", {
                isLoading: !0,
                autoClose: !1,
                closeOnClick: !1,
                closeButton: !1,
                draggable: !1,
                ...t
            })), F.promise = function(e, t, n) {
                let o, {
                    pending: s,
                    error: a,
                    success: c
                } = t;
                s && (o = r(s) ? F.loading(s, n) : F.loading(s.render, { ...n,
                    ...s
                }));
                const l = {
                        isLoading: null,
                        autoClose: null,
                        closeOnClick: null,
                        closeButton: null,
                        draggable: null
                    },
                    u = (e, t, s) => {
                        if (null == t) return void F.dismiss(o);
                        const a = {
                                type: e,
                                ...l,
                                ...n,
                                data: s
                            },
                            i = r(t) ? {
                                render: t
                            } : t;
                        return o ? F.update(o, { ...a,
                            ...i
                        }) : F(i.render, { ...a,
                            ...i
                        }), s
                    },
                    d = i(e) ? e() : e;
                return d.then((e => u("success", c, e))).catch((e => u("error", a, e))), d
            }, F.success = z("success"), F.info = z("info"), F.error = z("error"), F.warning = z("warning"), F.warn = F.warning, F.dark = (e, t) => A(e, D("default", {
                theme: "dark",
                ...t
            })), F.dismiss = e => {
                k.size > 0 ? p.emit(1, e) : M = M.filter((t => null != e && t.options.toastId !== e))
            }, F.clearWaitingQueue = function(e) {
                return void 0 === e && (e = {}), p.emit(5, e)
            }, F.isActive = e => {
                let t = !1;
                return k.forEach((n => {
                    n.isToastActive && n.isToastActive(e) && (t = !0)
                })), t
            }, F.update = function(e, t) {
                void 0 === t && (t = {}), setTimeout((() => {
                    const n = function(e, t) {
                        let {
                            containerId: n
                        } = t;
                        const o = k.get(n || w);
                        return o && o.getToast(e)
                    }(e, t);
                    if (n) {
                        const {
                            props: o,
                            content: s
                        } = n, a = {
                            delay: 100,
                            ...o,
                            ...t,
                            toastId: t.toastId || e,
                            updateId: B()
                        };
                        a.toastId !== e && (a.staleId = e);
                        const r = a.render || s;
                        delete a.render, A(r, a)
                    }
                }), 0)
            }, F.done = e => {
                F.update(e, {
                    progress: 1
                })
            }, F.onChange = e => (p.on(4, e), () => {
                p.off(4, e)
            }), F.POSITION = {
                TOP_LEFT: "top-left",
                TOP_RIGHT: "top-right",
                TOP_CENTER: "top-center",
                BOTTOM_LEFT: "bottom-left",
                BOTTOM_RIGHT: "bottom-right",
                BOTTOM_CENTER: "bottom-center"
            }, F.TYPE = {
                INFO: "info",
                SUCCESS: "success",
                WARNING: "warning",
                ERROR: "error",
                DEFAULT: "default"
            }, p.on(2, (e => {
                w = e.containerId || e, k.set(w, e), M.forEach((e => {
                    p.emit(0, e.content, e.options)
                })), M = []
            })).on(3, (e => {
                k.delete(e.containerId || e), 0 === k.size && p.off(0).off(1).off(5)
            }))
        }
    }
]);