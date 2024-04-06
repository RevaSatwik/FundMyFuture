"use strict";
(self.webpackChunk_commonninja_widget_renderer = self.webpackChunk_commonninja_widget_renderer || []).push([
    [3622], {
        9385: (t, n, e) => {
            e.d(n, {
                U: () => x
            });
            var a, o = e(36780),
                i = e(48730),
                r = e.n(i),
                l = e(53617),
                s = e(27579),
                c = e(13736),
                d = e(18744),
                m = e(36466);
            const u = d.default.div(a || (a = (0, c.Z)(["\n\tbackground: var(", ");\n\tcolor: var(", ");\n\tfont-size: 1rem;\n\tborder-radius: 5px;\n\tmargin-bottom: 15px;\n\n\t&:last-of-type {\n\t\tmargin-bottom: 0;\n\t}\n\n\t> header {\n\t\tpadding: 10px;\n\t\tfont-size: 1.03rem;\n\t\tfont-weight: 500;\n\t\tcolor: var(", ");\n\t\tbackground: var(", ");\n\t\tposition: relative;\n\t\ttransition: 0.2s;\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tborder-radius: 5px;\n\t\tgap: 5px;\n\n\t\t&.no-content {\n\t\t\tcursor: default;\n\t\t}\n\n\t\t&:hover {\n\t\t\tbackground-color: var(", ");\n\n\t\t\t.", " {\n\t\t\t\tcolor: var(", ");\n\t\t\t}\n\t\t}\n\n\t\t.", " {\n\t\t\ttransition: 0.2s;\n\t\t\tcolor: var(", ");\n\t\t}\n\t}\n\n\t> section {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tmax-height: 0;\n\t\ttransition: max-height 0.1s linear;\n\t\toverflow: hidden;\n\t}\n\n\t.", " {\n\t\tflex: 1;\n\t\tdisplay: flex;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t\tgap: 30px;\n\n\t\timg {\n\t\t\theight: 20px;\n\t\t\twidth: 20px;\n\t\t\tobject-fit: cover;\n\t\t}\n\n\t\t.", " {\n\t\t\timg {\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\n\t\tspan:not(.", ") {\n\t\t\tmax-width: 240px;\n\t\t\toverflow: hidden;\n\t\t\twhite-space: nowrap;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\t}\n\n\t.", " {\n\t\t/* border-top: 1px solid var(", "); */\n\t\tpadding: 10px;\n\t\tposition: relative;\n\t}\n\n\t&.active {\n\t\t> header {\n\t\t\tborder-radius: 5px 5px 0 0;\n\n\t\t\t.", " {\n\t\t\t\ttransform: rotate(180deg);\n\t\t\t}\n\t\t}\n\t}\n\n\t&.visible {\n\t\tsection {\n\t\t\toverflow: visible;\n\t\t}\n\t}\n\n\t&.secondary {\n\t\tbackground: var(", ");\n\t\tmargin-bottom: 10px;\n\n\t\t&:last-of-type {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n\t\t> header {\n\t\t\tbackground: var(", ");\n\t\t\tpadding: 7px 10px;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: var(", ");\n\t\t\t}\n\t\t}\n\t}\n"])), m.Dm.background800, m.Dm.text300, m.Dm.text300, m.Dm.background700, m.Dm.background600, (0, s.N9)("accordion-toggler"), m.Dm.text100, (0, s.N9)("accordion-toggler"), m.Dm.text500, (0, s.N9)("accordion-title"), (0, s.N9)("nindo-image-upload-image"), (0, s.N9)("items-manager-drag-handler"), (0, s.N9)("accordion-content"), m.Dm.background900, (0, s.N9)("accordion-toggler"), m.Dm.background700, m.Dm.background600, m.Dm.background500);
            var p = e(5030);
            const x = t => {
                var n;
                const e = (0, l.useRef)(null),
                    {
                        titleComponent: a,
                        openedByDefault: i,
                        onToggle: c,
                        children: d,
                        secondary: m,
                        collapsedGroups: x,
                        collapsable: g = !0
                    } = t,
                    [v, f] = (0, l.useState)(!g || i || !1),
                    [h, b] = (0, l.useState)(v ? null === e || void 0 === e || null === (n = e.current) || void 0 === n ? void 0 : n.scrollHeight : 0),
                    [N, y] = (0, l.useState)(!g || i || !1),
                    j = (0, l.useRef)(),
                    w = {
                        maxHeight: "".concat(h, "px")
                    },
                    D = (0, l.useRef)();
                return (0, l.useEffect)((() => {
                    if (g)
                        if (null === c || void 0 === c || c(v), v) {
                            if (g) {
                                j.current.parentElement.querySelectorAll(".active.visible").forEach((t => {
                                    var n;
                                    t !== j.current && (null === (n = t.querySelector("header")) || void 0 === n || n.click())
                                }))
                            }
                            "undefined" !== typeof window && window.setTimeout((() => y(!0)), 200)
                        } else y(!1)
                }), [v]), (0, l.useEffect)((() => (function t(n) {
                    N && v ? (D.current && clearTimeout(D.current), D.current = setTimeout((() => {
                        d && null !== e && void 0 !== e && e.current && v && N ? (b(e.current.scrollHeight), t()) : b(0)
                    }), n ? 10 : 500)) : b(0)
                }(!0), () => {
                    D.current && clearTimeout(D.current)
                })), [N, v, d, e]), (0, p.jsxs)(u, { ...t,
                    className: r()(t.className || "", {
                        visible: N,
                        active: v,
                        secondary: m
                    }),
                    ref: j,
                    children: [(0, p.jsxs)("header", {
                        className: r()({
                            "no-content": !d && !t.onClick
                        }),
                        onClick: () => {
                            g && f(!v)
                        },
                        children: [(0, p.jsx)("div", {
                            className: (0, s.N9)("accordion-title"),
                            children: a
                        }), g && d && (0, p.jsx)(o.R, {
                            className: (0, s.N9)("accordion-toggler"),
                            size: 14
                        })]
                    }), (g || !g && i) && d && (0, p.jsx)("section", {
                        ref: e,
                        style: w,
                        children: (0, p.jsx)("div", {
                            className: (0, s.N9)("accordion-content"),
                            children: v && d
                        })
                    })]
                })
            }
        },
        72789: (t, n, e) => {
            e.d(n, {
                X: () => u
            });
            var a, o, i = e(48730),
                r = e.n(i),
                l = e(27579),
                s = e(13736),
                c = e(18744);
            const d = c.default.div(a || (a = (0, s.Z)(["\n\t", "\n"])), (() => (0, c.css)(o || (o = (0, s.Z)(["\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tmin-height: 100%;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t"])))));
            var m = e(5030);
            const u = t => (0, m.jsx)(d, { ...t,
                className: r()((0, l.N9)("context-wrapper"), t.className),
                children: t.children
            })
        },
        70130: (t, n, e) => {
            e.d(n, {
                O: () => E
            });
            var a, o, i, r = e(33859),
                l = e(15422),
                s = e(12218),
                c = e(47943),
                d = e(48730),
                m = e.n(d),
                u = e(53617),
                p = e(34798),
                x = e(59929),
                g = e(9385),
                v = e(51889),
                f = e(74092),
                h = e(27579),
                b = e(97682),
                N = e(95440),
                y = e(46175),
                j = e(36466),
                w = e(13736),
                D = e(18744);
            const k = D.default.div(a || (a = (0, w.Z)(["\n\t", "\n"])), (() => (0, D.css)(o || (o = (0, w.Z)(["\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tgap: 20px;\n\n\t\t.", " {\n\t\t\tjustify-content: space-between;\n\t\t}\n\n\t\t.", " {\n\t\t\tflex: 1;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-start;\n\t\t\tgap: 10px;\n\n\t\t\tspan:not(.", ") {\n\t\t\t\tmax-width: 218px !important;\n\t\t\t}\n\t\t}\n\n\t\t.", " {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\t\t\tgap: 5px;\n\n\t\t\t> * {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\n\t\t\t.", " {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tline-height: 1;\n\n\t\t\t\tsvg {\n\t\t\t\t\ttransition: 0.2s;\n\t\t\t\t\tcolor: var(", ");\n\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\tcolor: var(", ");\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t* > {\n\t\t\t\ttransition: 0.2s;\n\t\t\t\tcolor: var(", ");\n\n\t\t\t\t&:hover {\n\t\t\t\t\tcolor: var(", ");\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.", " {\n\t\t\tcursor: move;\n\t\t\topacity: 0.3;\n\t\t\tfont-size: 1rem;\n\t\t\tline-height: 1;\n\t\t\ttransition: 0.2s;\n\n\t\t\t&.disabled {\n\t\t\t\topacity: 0.1;\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\t\t}\n\n\t\t&.header-mode {\n\t\t\t> section > .", " {\n\t\t\t\tbackground: none;\n\t\t\t\tmargin-bottom: 0;\n\t\t\t\tborder-bottom: 1px solid var(", ");\n\t\t\t\tpadding: 10px 0;\n\n\t\t\t\t&:last-child {\n\t\t\t\t\tborder-bottom: none;\n\t\t\t\t}\n\n\t\t\t\t> header {\n\t\t\t\t\tborder-radius: 0;\n\t\t\t\t\tbackground-color: transparent;\n\t\t\t\t\tpadding: 0 20px;\n\n\t\t\t\t\thgroup {\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tcolor: var(", ");\n\t\t\t\t\t\ttransition: 0.2s;\n\t\t\t\t\t}\n\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\thgroup {\n\t\t\t\t\t\t\tcolor: var(", ");\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t> section > .", " {\n\t\t\t\t\tpadding: 20px 20px 10px;\n\t\t\t\t}\n\n\t\t\t\t.", ".transparent {\n\t\t\t\t\tpadding: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"])), (0, h.N9)("accordion-title"), (0, h.N9)("items-manager-item-title"), (0, h.N9)("items-manager-drag-handler"), (0, h.N9)("items-manager-item-actions"), (0, h.N9)("items-manager-item-action"), j.Dm.text500, j.Dm.text100, j.Dm.text500, j.Dm.text100, (0, h.N9)("items-manager-drag-handler"), (0, h.N9)("items-manager-item"), j.Dm.text900, j.Dm.text500, j.Dm.text300, (0, h.N9)("accordion-content"), (0, h.N9)("button")))),
                I = (0, D.createGlobalStyle)(i || (i = (0, w.Z)(["\n  .", " {\n\t\tz-index: 50;\n\t\topacity: 0.5;\n\t\tcolor: var(", ");\n\n\t\t.", " {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t.", " {\n\t\t\tflex: 1;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-start;\n\t\t\tgap: 5px;\n\t\t}\n\n\t\t.", " {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\t\t\tgap: 5px;\n\n\t\t\t> * {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t}\n"])), (0, h.N9)("floating-item"), j.Dm.text100, (0, h.N9)("accordion-title"), (0, h.N9)("items-manager-item-title"), (0, h.N9)("items-manager-item-actions"));
            var C = e(5030);
            const S = u.lazy((() => Promise.resolve().then(e.bind(e, 59929)).then((t => ({
                    default: t.SortableContainer((t => {
                        let {
                            items: n,
                            renderItem: e
                        } = t;
                        return (0, C.jsx)("section", {
                            children: null === n || void 0 === n ? void 0 : n.map(((t, n) => (0, C.jsx)(u.Suspense, {
                                fallback: (0, C.jsx)(N.a, {
                                    size: 14
                                }),
                                children: (0, C.jsx)(T, {
                                    index: n,
                                    sortIndex: n,
                                    data: t,
                                    renderItem: e
                                })
                            }, "item-".concat(t.id))))
                        })
                    }))
                }))))),
                z = u.lazy((() => Promise.resolve().then(e.bind(e, 59929)).then((t => ({
                    default: t.SortableHandle((() => (0, C.jsx)("span", {
                        className: (0, h.N9)("items-manager-drag-handler"),
                        title: "Move",
                        children: (0, C.jsx)(l.w, {
                            size: 14
                        })
                    })))
                }))))),
                E = t => {
                    let {
                        items: n,
                        newItemGenerator: e,
                        itemRenderer: a,
                        titleRenderer: o,
                        searchFilter: i,
                        onUpdate: d,
                        onItemToggle: x,
                        onItemMouseEnter: w,
                        onItemMouseLeave: D,
                        onItemClick: E,
                        maxItems: T = 1,
                        minItems: Z = 1,
                        extraActionsComp: _,
                        extraActionsRenderer: R,
                        collapsable: A = !0,
                        searchable: F = !0,
                        sortable: M = !0,
                        addable: H = !0,
                        removable: P = !0,
                        duplicatable: U = !1,
                        addItemText: Y = "Add Item",
                        itemsText: q = "items",
                        newItemPlacement: B = "last",
                        onError: G,
                        headerMode: L = !1,
                        secondary: O = !1,
                        openedByDefault: X = !1,
                        style: J,
                        itemClassName: K,
                        itemStyle: Q
                    } = t;
                    const [V, W] = (0, u.useState)(""), $ = V.toLowerCase().trim(), tt = null === n || void 0 === n ? void 0 : n.filter((function(t) {
                        if (!F || !i) return !0;
                        if (!$) return !0;
                        if (i(t, $)) return !0;
                        return !1
                    })), nt = (0, u.useRef)(null);

                    function et(t, n, e) {
                        y.j.removeAll(), (null === G || void 0 === G ? void 0 : G(t, n)) || y.j.warning({
                            title: n,
                            message: e,
                            autoDismiss: 4
                        })
                    }
                    return (0, C.jsxs)(k, {
                        className: m()((0, h.N9)("items-manager"), {
                            "header-mode": L
                        }),
                        ref: nt,
                        style: J,
                        children: [(0, C.jsx)(I, {}), F && (0, C.jsx)(f.p, {
                            className: (0, h.N9)("context-nav"),
                            children: (0, C.jsx)(b.I, {
                                type: "text",
                                placeholder: "Search...",
                                value: V,
                                onChange: t => W(t.target.value || "")
                            })
                        }), 0 === (null === tt || void 0 === tt ? void 0 : tt.length) ? (0, C.jsxs)("p", {
                            className: (0, h.N9)("items-manager-message"),
                            children: ["No ", q, " found."]
                        }) : (0, C.jsx)(u.Suspense, {
                            fallback: (0, C.jsx)(N.a, {}),
                            children: (0, C.jsx)(S, {
                                items: tt,
                                renderItem: function(t, e) {
                                    return (0, C.jsx)(g.U, {
                                        onMouseEnter: () => {
                                            null === w || void 0 === w || w(t, e)
                                        },
                                        onMouseLeave: () => {
                                            null === D || void 0 === D || D(t, e)
                                        },
                                        className: m()((0, h.N9)("items-manager-item"), null === K || void 0 === K ? void 0 : K(t)),
                                        openedByDefault: X,
                                        collapsable: A,
                                        style: null === Q || void 0 === Q ? void 0 : Q(t),
                                        secondary: O,
                                        titleComponent: (0, C.jsxs)(C.Fragment, {
                                            children: [(0, C.jsxs)("div", {
                                                className: (0, h.N9)("items-manager-item-title"),
                                                children: [M ? $ ? (0, C.jsx)("span", {
                                                    className: "".concat((0, h.N9)("items-manager-drag-handler"), " disabled"),
                                                    title: "Not available in search mode",
                                                    children: (0, C.jsx)(l.w, {
                                                        size: 14
                                                    })
                                                }) : (0, C.jsx)(z, {}) : (0, C.jsx)(C.Fragment, {}), o(t, e)]
                                            }), (0, C.jsxs)("div", {
                                                className: (0, h.N9)("items-manager-item-actions"),
                                                children: [_ && _, null === R || void 0 === R ? void 0 : R(t, e), U && (0, C.jsx)("span", {
                                                    className: m()((0, h.N9)("items-manager-item-action"), "delete"),
                                                    onClick: e => function(t, e) {
                                                        t.preventDefault(), t.stopPropagation();
                                                        const a = n.findIndex((t => t.id === e)),
                                                            o = [...n, { ...n[a],
                                                                id: (0, p.Z)()
                                                            }];
                                                        T && o.length > T ? et("max", "You reached the maximum", "Your current premium plan doesn't allow you to add more than ".concat(T, " ").concat(q, ". Upgrade your account now!")) : (W(""), null === d || void 0 === d || d(o))
                                                    }(e, t.id),
                                                    title: "Duplicate",
                                                    children: (0, C.jsx)(r.Y, {
                                                        color: j.Dm.text300,
                                                        size: 18
                                                    })
                                                }), P && (0, C.jsx)("span", {
                                                    className: m()((0, h.N9)("items-manager-item-action"), "delete"),
                                                    title: "Delete",
                                                    onClick: e => function(t, e) {
                                                        t.preventDefault(), t.stopPropagation();
                                                        const a = null === n || void 0 === n ? void 0 : n.filter((t => t.id !== e));
                                                        "undefined" !== typeof Z && (null === a || void 0 === a ? void 0 : a.length) < Z ? et("min", "Sorry, but the minimum number of ".concat(q, " is ").concat(Z, ".")) : (W(""), null === d || void 0 === d || d(a))
                                                    }(e, t.id),
                                                    children: (0, C.jsx)(c.X, {
                                                        size: 15,
                                                        title: "Delete"
                                                    })
                                                })]
                                            })]
                                        }),
                                        onToggle: n => {
                                            null === x || void 0 === x || x(t, n, e)
                                        },
                                        onClick: E ? () => E(t) : void 0,
                                        children: a && a(t, e)
                                    }, "item_setting_".concat(t.id))
                                },
                                onSortEnd: function(t) {
                                    let {
                                        oldIndex: e,
                                        newIndex: a
                                    } = t;
                                    const o = function(t, n, e) {
                                        const a = [...t];
                                        return function(t, n, e) {
                                            const a = n < 0 ? t.length + n : n;
                                            if (a >= 0 && a < t.length) {
                                                const a = e < 0 ? t.length + e : e,
                                                    [o] = t.splice(n, 1);
                                                t.splice(a, 0, o)
                                            }
                                        }(a, n, e), a
                                    }(n, e, a);
                                    null === d || void 0 === d || d(o)
                                },
                                axis: "y",
                                lockAxis: "y",
                                helperClass: (0, h.N9)("floating-item"),
                                useDragHandle: !0
                            })
                        }), H && (0, C.jsxs)(v.z, {
                            variant: "add",
                            onClick: () => function() {
                                if (T && (null === n || void 0 === n ? void 0 : n.length) + 1 > T) return void et("max", "You reached the maximum", "Your current premium plan doesn't allow you to add more than ".concat(T, " ").concat(q, ". Upgrade your account now!"));
                                W("");
                                const t = {
                                        id: (0, p.Z)(),
                                        ...(null === e || void 0 === e ? void 0 : e()) || {}
                                    },
                                    a = "last" === B ? [...n, t] : [t, ...n];
                                null === d || void 0 === d || d(a), window.setTimeout((() => {
                                    var t, n, e, o, i;
                                    const r = "first" === B ? 0 : a.length - 1;
                                    let l = null;
                                    null === (t = nt.current) || void 0 === t || null === (n = t.childNodes) || void 0 === n || n.forEach((t => {
                                        "SECTION" === t.nodeName && (l = t)
                                    }));
                                    const s = null === (e = l) || void 0 === e || null === (o = e.childNodes) || void 0 === o || null === (i = o[r]) || void 0 === i ? void 0 : i.querySelector("header");
                                    null === s || void 0 === s || s.click()
                                }), 50)
                            }(),
                            title: Y,
                            children: [(0, C.jsx)(s.w, {}), Y]
                        })]
                    })
                },
                T = (0, x.SortableElement)((t => {
                    let {
                        data: n,
                        renderItem: e,
                        sortIndex: a,
                        index: o
                    } = t;
                    return e(n, a || o)
                }))
        },
        82005: (t, n, e) => {
            e.d(n, {
                m: () => x
            });
            var a, o, i = e(48730),
                r = e.n(i),
                l = e(53617),
                s = e(27579),
                c = e(13736),
                d = e(18744),
                m = e(36466);
            const u = d.default.div(a || (a = (0, c.Z)(["\n  ", "\n"])), (() => (0, d.css)(o || (o = (0, c.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    &.classic {\n\n    .", " {\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-end;\n      gap: 10px;\n      border-bottom: 1px solid var(", ");\n      margin: 10px 10px 0;\n    }\n\n    .", " {\n      cursor: pointer;\n      background: none;\n      border: none;\n      font-family: var(", ");\n      color: var(", ");\n      font-weight: 700;\n      font-size: 1rem;\n      transition: 0.2s;\n      padding: 7px 15px;\n      position: relative;\n\n      &::after {\n        content: '';\n        position: absolute;\n        bottom: -2px;\n        left: 0;\n        width: 100%;\n        height: 3px;\n        background: var(", ");\n        z-index: 1;\n        opacity: 0;\n        transition: inherit;\n        border-radius: 3px;\n      }\n\n      &:hover {\n        color: var(", ");\n      }\n\n      &.active {\n        color: var(", ");\n\n        &::after {\n          opacity: 1;\n        }\n      }\n    }}\n\n    &.capsule {\n      background-color: var(", ");\n      border-radius: 50em;\n      max-width: fit-content;\n\n    .", " {\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-end;\n      gap: 0;\n      padding: 3px;\n    }\n\n    .", " {\n      cursor: pointer;\n      background: none;\n      border: none;\n      font-family: var(", ");\n      color: var(", ");\n      font-weight: 500;\n      font-size: 1rem;\n      transition: 0.2s;\n      padding: 7px 15px;\n      position: relative;\n      border-radius: 50em;\n\n      &:hover {\n        color: var(", ");\n      }\n\n      &.active {\n        color: var(", ");\n        background-color: var(", ");\n\n        &::after {\n          opacity: 1;\n        }\n      }\n    }}\n  "])), (0, s.N9)("tabs"), m.Dm.text500, (0, s.N9)("tab-trigger"), m.Dm.primaryFont, m.Dm.text500, m.Dm.primary500, m.Dm.text100, m.Dm.primary500, m.Dm.background700, (0, s.N9)("tabs"), (0, s.N9)("tab-trigger"), m.Dm.primaryFont, m.Dm.text500, m.Dm.text100, m.Dm.white, m.Dm.primary500)));
            var p = e(5030);
            const x = t => {
                var n;
                let {
                    items: e,
                    onChange: a,
                    activeTabId: o,
                    variant: i = "classic",
                    watchActiveTabId: c = !1,
                    ...d
                } = t;
                const [m, x] = (0, l.useState)(o || e[0].id);
                return (0, l.useEffect)((() => {
                    m && (null === a || void 0 === a || a(m))
                }), [m]), (0, l.useEffect)((() => {
                    o && c && x(o)
                }), [o]), (0, p.jsxs)(u, { ...d,
                    className: r()(i),
                    children: [(0, p.jsx)("header", {
                        className: (0, s.N9)("tabs"),
                        children: e.map(((t, n) => (0, p.jsx)("button", {
                            title: t.name,
                            className: r()((0, s.N9)("tab-trigger"), {
                                active: m === t.id
                            }),
                            onClick: () => x(t.id),
                            children: t.name || t.id
                        }, "tab_".concat(n))))
                    }), (0, p.jsx)("div", {
                        className: (0, s.N9)("active-tab"),
                        children: (null === (n = e.find((t => t.id === m))) || void 0 === n ? void 0 : n.component) || (0, p.jsx)(p.Fragment, {})
                    })]
                })
            }
        }
    }
]);