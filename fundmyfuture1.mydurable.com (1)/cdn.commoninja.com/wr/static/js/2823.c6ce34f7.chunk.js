"use strict";
(self.webpackChunk_commonninja_widget_renderer = self.webpackChunk_commonninja_widget_renderer || []).push([
    [2823], {
        72823: (t, e, n) => {
            n.d(e, {
                eQ: () => J,
                PO: () => q,
                v8: () => Y,
                Yz: () => X
            });
            var o, r, i = n(4591),
                s = n(66952),
                a = n(51889),
                l = n(72789),
                d = n(36780),
                c = n(28320),
                h = n(25966),
                x = n(53617),
                p = n(6246),
                g = n(63177),
                u = n(72758),
                m = n(74092),
                C = n(27579),
                v = n(97682),
                w = n(70130),
                j = n(46418),
                b = n(63302),
                f = n(64669),
                k = n(21871),
                y = n(13736),
                L = n(18744),
                M = n(36466);
            const D = L.default.div(o || (o = (0, y.Z)(["\n\t", "\n"])), (() => (0, L.css)(r || (r = (0, y.Z)(["\n\t\t.", " {\n\t\t\t&.active,\n\t\t\t&:hover {\n\t\t\t\t.", " {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.", " {\n\t\t\t.", " {\n\t\t\t\tcolor: var(", ");\n\t\t\t\ttransition: 0.2s;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\t.", " {\n\t\t\t\t\tcolor: var(", ");\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.", " {\n\t\t\tfont-size: 1.2rem;\n\t\t\tmargin-right: 5px;\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.with-unlink {\n\t\t\tmargin-bottom: 70px;\n\t\t}\n\n\t\t.", " {\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\ttop: 100%;\n\t\t\twidth: 100%;\n\t\t\tjustify-content: space-between;\n\t\t\tmargin-top: 15px;\n\n\t\t\t> div {\n\t\t\t\tdisplay: flex;\n\t\t\t\tgap: 5px;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\n\t\t\t.small {\n\t\t\t\tmax-width: 55px;\n\t\t\t\tpadding-right: 5px;\n\t\t\t}\n\t\t}\n\t"])), (0, C.N9)("items-manager-item"), (0, C.N9)("css-props-editor-restore-button"), (0, C.N9)("items-manager-item-title"), (0, C.N9)("context-section-title-elm"), M.Dm.text300, (0, C.N9)("context-section-title-elm"), M.Dm.text100, (0, C.N9)("css-props-editor-restore-button"), (0, C.N9)("css-props-editor-unlink-container"))));
            var W = n(76854),
                N = n(5030);
            const B = t => {
                    const {
                        value: e = {},
                        onChange: n,
                        availablePropertiesGroups: o,
                        fonts: r = [],
                        getFontDetails: i,
                        imageUploadElm: l
                    } = t, p = (0, k.uT)(o), [g, u] = (0, x.useState)(!1);

                    function m(t, o) {
                        o && Object.keys(t).forEach((n => {
                            void 0 !== t[n] && "" !== t[n] && null !== t[n] || (delete t[n], delete e[n])
                        })), n({ ...e,
                            ...t
                        })
                    }

                    function v(t, e) {
                        return "fontFamily" === t ? r : "fontWeight" === t ? e ? [{
                            label: "Default",
                            value: "900"
                        }, ...((null === i || void 0 === i || null === (n = i(e)) || void 0 === n ? void 0 : n.weights) || []).map((t => ({
                            label: "".concat(t),
                            value: "".concat(t)
                        })))] : [{
                            label: "Default",
                            value: "900"
                        }, {
                            value: "200",
                            label: "200"
                        }, {
                            value: "300",
                            label: "300"
                        }, {
                            value: "500",
                            label: "500"
                        }, {
                            value: "700",
                            label: "700"
                        }] : k.xy[t] || [];
                        var n
                    }

                    function j() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((t => S({
                            cssPropName: t,
                            currentValue: e[t],
                            value: e,
                            onChange: m,
                            customInput: "backgroundImage" === t ? l : void 0,
                            options: v(t, e.fontFamily || "")
                        })))
                    }
                    return (0, N.jsx)(D, {
                        className: (0, C.N9)("css-props-editor"),
                        children: (0, N.jsx)(w.O, {
                            items: p.map((t => ({ ...t,
                                id: t.id || t.name
                            }))),
                            titleRenderer: function(t) {
                                return (0, N.jsx)(s.S, {
                                    children: t.displayName
                                })
                            },
                            itemRenderer: function(t) {
                                const e = t.cssProperties || [];
                                if ("background" === t.name || "typography" === t.name || "size" === t.name) {
                                    const n = "typography" === t.name ? 4 : 2;
                                    if (e.length > n) {
                                        const t = e.slice(0, n),
                                            o = e.slice(n);
                                        return (0, N.jsxs)(N.Fragment, {
                                            children: [j(t), (0, N.jsxs)(a.z, {
                                                style: {
                                                    width: "100%",
                                                    marginTop: 20,
                                                    marginBottom: 20
                                                },
                                                variant: "expand",
                                                onClick: t => {
                                                    t.preventDefault(), u(!g)
                                                },
                                                children: [" ", g ? (0, N.jsx)(c.s, {}) : (0, N.jsx)(d.R, {}), g ? "Hide " : "Show ", " more options"]
                                            }), (0, N.jsx)("div", {
                                                style: {
                                                    display: g ? "block" : "none"
                                                },
                                                children: j(o)
                                            })]
                                        })
                                    }
                                }
                                return j(e)
                            },
                            extraActionsRenderer: function(t) {
                                return (0, N.jsx)(h.c, {
                                    title: "Restore to default",
                                    className: (0, C.N9)("css-props-editor-restore-button"),
                                    onClick: o => {
                                        o.stopPropagation();
                                        const r = { ...e
                                        };
                                        (t.cssProperties || []).forEach((t => {
                                            r[t] = void 0
                                        })), n(r)
                                    }
                                })
                            },
                            headerMode: !0,
                            addable: !1,
                            sortable: !1,
                            removable: !1,
                            searchable: !1,
                            duplicatable: !1
                        })
                    })
                },
                S = t => {
                    var e, n;
                    let {
                        cssPropName: o,
                        currentValue: r,
                        value: i,
                        customInput: s,
                        onChange: l,
                        options: d
                    } = t;
                    const c = k.xy[o] || [],
                        [h, w] = (0, x.useState)(c.some((t => !(null === i || void 0 === i || !i[null === t || void 0 === t ? void 0 : t.value])))),
                        y = o.replace(/([A-Z])/g, " $1"),
                        L = y.charAt(0).toUpperCase() + y.slice(1),
                        M = parseFloat(r);
                    return "boxShadow" === o ? function() {
                        const t = null === i || void 0 === i ? void 0 : i.boxShadow,
                            [e = "0px", n = "0px", o = "0px", r = "0px", s = ""] = (null === t || void 0 === t ? void 0 : t.split(" ")) || [];
                        return (0, N.jsxs)(N.Fragment, {
                            children: [(0, N.jsxs)(m.p, {
                                flow: "row",
                                children: [(0, N.jsx)(u.l, {
                                    children: "Color"
                                }), (0, N.jsx)(g.y, {
                                    children: (0, N.jsx)(p.z, {
                                        onChange: t => {
                                            l({
                                                boxShadow: "".concat(e, " ").concat(n, " ").concat(o, " ").concat(r, " ").concat(t)
                                            })
                                        },
                                        colorFormat: "rgb",
                                        enableTransparency: !0,
                                        selectedColor: s,
                                        position: "bottom",
                                        showUndo: !0,
                                        debounce: 0
                                    })
                                })]
                            }), (0, N.jsxs)(m.p, {
                                flow: "row",
                                children: [(0, N.jsx)(u.l, {
                                    children: "X Offset"
                                }), (0, N.jsx)(g.y, {
                                    children: (0, N.jsx)(v.I, {
                                        type: "number",
                                        value: parseFloat(e) || 0,
                                        onChange: t => l({
                                            boxShadow: "".concat(t.target.valueAsNumber || 0, "px ").concat(n, " ").concat(o, " ").concat(r, " ").concat(s)
                                        }),
                                        placeholder: "0",
                                        className: "small",
                                        step: 1
                                    })
                                })]
                            }), (0, N.jsxs)(m.p, {
                                flow: "row",
                                children: [(0, N.jsx)(u.l, {
                                    children: "Y Offset"
                                }), (0, N.jsx)(g.y, {
                                    children: (0, N.jsx)(v.I, {
                                        type: "number",
                                        value: parseFloat(n) || 0,
                                        onChange: t => l({
                                            boxShadow: "".concat(e, " ").concat(t.target.valueAsNumber || 0, "px ").concat(o, " ").concat(r, " ").concat(s)
                                        }),
                                        placeholder: "0",
                                        className: "small",
                                        step: 1
                                    })
                                })]
                            }), (0, N.jsxs)(m.p, {
                                flow: "row",
                                children: [(0, N.jsx)(u.l, {
                                    children: "Blur"
                                }), (0, N.jsx)(g.y, {
                                    children: (0, N.jsx)(v.I, {
                                        type: "number",
                                        value: parseFloat(o) || 0,
                                        onChange: t => l({
                                            boxShadow: "".concat(e, " ").concat(n, " ").concat(t.target.valueAsNumber || 0, "px ").concat(r, " ").concat(s)
                                        }),
                                        placeholder: "0",
                                        className: "small",
                                        step: 1
                                    })
                                })]
                            }), (0, N.jsxs)(m.p, {
                                flow: "row",
                                children: [(0, N.jsx)(u.l, {
                                    children: "Spread"
                                }), (0, N.jsx)(g.y, {
                                    children: (0, N.jsx)(v.I, {
                                        type: "number",
                                        value: parseFloat(r) || 0,
                                        onChange: t => l({
                                            boxShadow: "".concat(e, " ").concat(n, " ").concat(o, " ").concat(t.target.valueAsNumber, "px ").concat(s)
                                        }),
                                        placeholder: "0",
                                        className: "small",
                                        step: 1
                                    })
                                })]
                            })]
                        })
                    }() : (0, N.jsxs)(m.p, {
                        flow: "row",
                        className: h ? "with-unlink" : "",
                        children: [(0, N.jsxs)(u.l, {
                            children: [L, " ", null !== (e = k.Vl[o]) && void 0 !== e && e.unit ? "(".concat(null === (n = k.Vl[o]) || void 0 === n ? void 0 : n.unit, ")") : ""]
                        }), function() {
                            var t, e;
                            switch (o) {
                                case "backgroundColor":
                                    return (0, N.jsx)(g.y, {
                                        children: (0, N.jsx)(f.J, {
                                            cssProps: i,
                                            onChange: l
                                        })
                                    });
                                case "borderColor":
                                case "color":
                                case "textDecorationColor":
                                    return (0, N.jsx)(g.y, {
                                        children: (0, N.jsx)(p.z, {
                                            onChange: t => l({
                                                [o]: t
                                            }, !0),
                                            selectedColor: r,
                                            position: "bottom",
                                            showUndo: !0,
                                            debounce: 0
                                        })
                                    });
                                case "backgroundImage":
                                    let n = r || "";
                                    return null !== r && void 0 !== r && r.startsWith("linear-gradient") && (n = ""), (0, N.jsx)(g.y, {
                                        children: s || (0, N.jsx)(v.I, {
                                            type: "url",
                                            maxLength: 400,
                                            placeholder: "Enter image URL",
                                            value: n.replace("url(", "").replace(")", ""),
                                            onChange: t => l({
                                                [o]: "url(".concat(t.target.value, ")")
                                            })
                                        })
                                    });
                                case "backgroundPosition":
                                case "textAlign":
                                case "textTransform":
                                case "textDecorationLine":
                                    return (0, N.jsx)(g.y, {
                                        children: (0, N.jsx)(b.t, {
                                            style: {
                                                justifyContent: "flex-end"
                                            },
                                            options: d,
                                            onChange: t => {
                                                l({
                                                    [o]: String(t[0])
                                                }, !0)
                                            },
                                            allowMultiple: !1,
                                            value: r ? [r] : [],
                                            size: 30
                                        })
                                    });
                                case "backgroundRepeat":
                                case "backgroundSize":
                                case "borderStyle":
                                case "fontWeight":
                                case "fontStyle":
                                case "fontFamily":
                                case "textDecorationStyle":
                                    return (0, N.jsx)(g.y, {
                                        children: (0, N.jsx)(j.P, {
                                            isSearchable: "fontFamily" === o,
                                            value: d.filter((t => t.value === r))[0] || d[0],
                                            options: d,
                                            onChange: t => {
                                                l({
                                                    [o]: t
                                                }, !0)
                                            }
                                        })
                                    });
                                case "margin":
                                case "padding":
                                case "borderWidth":
                                case "borderRadius":
                                    return (0, N.jsxs)(N.Fragment, {
                                        children: [(0, N.jsxs)(g.y, {
                                            children: [(0, N.jsx)(v.I, {
                                                type: "number",
                                                value: M,
                                                onChange: t => {
                                                    var e;
                                                    return l({
                                                        [o]: isNaN(t.target.valueAsNumber) ? void 0 : "".concat(t.target.valueAsNumber).concat((null === (e = k.Vl[o]) || void 0 === e ? void 0 : e.unit) || "px")
                                                    }, !0)
                                                },
                                                placeholder: "0",
                                                className: "small",
                                                step: (null === (t = k.Vl[o]) || void 0 === t ? void 0 : t.step) || 1,
                                                disabled: h
                                            }), (0, N.jsx)(a.z, {
                                                variant: "transparent",
                                                onClick: () => {
                                                    w(!h);
                                                    const t = {
                                                        [o]: ""
                                                    };
                                                    c.forEach((e => {
                                                        t[e.value] = ""
                                                    })), l(t, !0)
                                                },
                                                children: h ? (0, N.jsx)(W.c.Unlink, {}) : (0, N.jsx)(W.c.Link, {})
                                            })]
                                        }), h && (0, N.jsx)(g.y, {
                                            className: (0, C.N9)("css-props-editor-unlink-container"),
                                            children: c.map((t => {
                                                var e;
                                                return (0, N.jsxs)("div", {
                                                    children: [t.label, (0, N.jsx)(v.I, {
                                                        type: "number",
                                                        value: parseFloat(i[t.value] || "0"),
                                                        onChange: e => {
                                                            var n;
                                                            return l({
                                                                [o]: void 0,
                                                                [t.value]: isNaN(e.target.valueAsNumber) ? void 0 : "".concat(e.target.value).concat((null === (n = k.Vl[o]) || void 0 === n ? void 0 : n.unit) || "px")
                                                            }, !0)
                                                        },
                                                        placeholder: "0",
                                                        className: "small",
                                                        step: (null === (e = k.Vl[o]) || void 0 === e ? void 0 : e.step) || 1
                                                    })]
                                                }, "".concat(o, "-").concat(t.value))
                                            }))
                                        })]
                                    });
                                case "letterSpacing":
                                case "lineHeight":
                                case "height":
                                case "width":
                                case "minHeight":
                                case "minWidth":
                                case "maxHeight":
                                case "maxWidth":
                                case "fontSize":
                                case "textDecorationThickness":
                                    return (0, N.jsxs)(g.y, {
                                        children: ["lineHeight" === o && (0, N.jsx)(W.c.LineHeight, {}), "letterSpacing" === o && (0, N.jsx)(W.c.LetterSpacing, {}), (0, N.jsx)(v.I, {
                                            type: "number",
                                            value: M,
                                            onChange: t => {
                                                var e;
                                                return l({
                                                    [o]: isNaN(t.target.valueAsNumber) ? void 0 : "".concat(t.target.valueAsNumber).concat((null === (e = k.Vl[o]) || void 0 === e ? void 0 : e.unit) || "px")
                                                }, !0)
                                            },
                                            placeholder: "0",
                                            className: "small",
                                            step: (null === (e = k.Vl[o]) || void 0 === e ? void 0 : e.step) || 1
                                        })]
                                    });
                                default:
                                    return (0, N.jsx)(g.y, {
                                        children: (0, N.jsx)(v.I, {
                                            type: "text",
                                            value: r || "",
                                            onChange: t => l({
                                                [o]: t.target.value
                                            }, !0),
                                            placeholder: "Enter text...",
                                            className: "small"
                                        })
                                    })
                            }
                        }()]
                    }, o)
                };
            var R, H, V = n(56699),
                T = n(44252),
                z = n(93075),
                A = n(47203),
                Z = n(45531),
                P = n(10510),
                E = n(99730),
                F = n(74774),
                I = n(17228),
                U = n(77647);
            const _ = L.default.div(R || (R = (0, y.Z)(["\n\tbutton {\n\t\tjustify-content: space-between;\n\t\tmargin: 20px 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\n\t\t&:first-of-type {\n\t\t\tmargin-top: 0;\n\t\t}\n\n\t\t&:last-of-type {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t}\n"]))),
                O = L.default.div(H || (H = (0, y.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 10px;\n\talign-items: center;\n\tmargin: 20px 0;\n\tposition: relative;\n\n\tbutton {\n\t\tposition: absolute;\n\t\tleft: 0;\n\t}\n\n\t.nindo-context-section-title {\n\t\tmargin: 0;\n\t\tmax-width: 50%;\n\t\twhite-space: nowrap;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t.css-props-editor-title {\n\t\tspan {\n\t\t\twidth: 100%;\n\t\t\twhite-space: nowrap;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t}\n\t}\n"]))),
                Y = t => (0, N.jsxs)(i.s, {
                    children: [(0, N.jsx)(s.S, {
                        children: t.title || "Custom Styles"
                    }), (0, N.jsx)(J, { ...t
                    })]
                }),
                J = t => {
                    let {
                        items: e,
                        onChange: n
                    } = t;
                    const o = (0, E.k)(),
                        r = (0, F.J)(),
                        [i, s] = (0, x.useState)(""),
                        l = e.find((t => t.propName === i));
                    return (0, N.jsxs)(_, {
                        children: [e.map((t => (0, N.jsxs)(a.z, {
                            variant: "transparent",
                            onClick: () => s(t.propName),
                            children: [t.label || t.propName, (0, N.jsx)(Z.D, {})]
                        }, "nocode-css-".concat(t.propName)))), (0, N.jsx)(q, {
                            show: !!i,
                            onClose: () => s(""),
                            title: (null === l || void 0 === l ? void 0 : l.label) || (null === l || void 0 === l ? void 0 : l.propName),
                            sections: (null === l || void 0 === l ? void 0 : l.sections) || [{
                                onChange: t => {
                                    o.getFeatureValue("customStyles") ? null === n || void 0 === n || n(i, t) : r("Your current plan doesn't support custom styles.")
                                },
                                allowedProps: null === l || void 0 === l ? void 0 : l.allowedProps,
                                value: null === l || void 0 === l ? void 0 : l.value,
                                elmType: null === l || void 0 === l ? void 0 : l.elmType
                            }]
                        })]
                    })
                },
                K = {
                    container: ["background", "spacing", "borders", "shadow", "size"],
                    image: ["background", "spacing", "borders", "shadow", "size"],
                    icon: [{
                        id: "typography",
                        name: "typography",
                        displayName: "Icon",
                        cssProperties: ["color", "fontSize"]
                    }, "background", "spacing", "borders", "shadow", "size"],
                    text: ["typography", "background", "spacing", "borders", "shadow", "size"]
                },
                X = t => {
                    let {
                        sections: e = [],
                        title: n,
                        onClose: o,
                        style: r
                    } = t;
                    return (0, N.jsxs)(l.X, {
                        style: r,
                        children: [(o || n) && (0, N.jsxs)(O, {
                            children: [o && (0, N.jsxs)(a.z, {
                                variant: "transparent",
                                className: "close-css-props-editor",
                                onClick: () => o(),
                                children: [(0, N.jsx)(A.b, {}), (0, N.jsx)("span", {
                                    children: "Back"
                                })]
                            }), n && (0, N.jsx)(s.S, {
                                className: "css-props-editor-title",
                                children: n
                            })]
                        }), e.map(((t, n) => {
                            var o, r;
                            let {
                                title: i,
                                value: a,
                                onChange: l,
                                allowedProps: d,
                                elmType: c
                            } = t;
                            return (0, N.jsxs)(N.Fragment, {
                                children: [i && e.length > 1 && (0, N.jsx)(s.S, {
                                    style: {
                                        margin: "10px 20px 10px",
                                        marginTop: n > 0 ? 20 : 10
                                    },
                                    children: i
                                }), (0, N.jsx)(B, {
                                    value: { ...a || {}
                                    },
                                    onChange: t => {
                                        l(t)
                                    },
                                    availablePropertiesGroups: d || (c ? K[c] : ["background", "typography", "spacing", "borders", "shadow", "size"]),
                                    fonts: P.FP.map((t => ({
                                        value: t.family || "",
                                        label: (0, N.jsx)("div", {
                                            style: {
                                                height: 18
                                            },
                                            children: t.fontSvg ? (0, N.jsx)("img", {
                                                height: 12,
                                                src: t.fontSvg
                                            }) : t.name
                                        })
                                    }))),
                                    getFontDetails: P.Lk,
                                    imageUploadElm: (0, N.jsx)(U.D, {
                                        mediaManagerProps: {
                                            submitCallback: t => {
                                                l({ ...a || {},
                                                    backgroundImage: "url(".concat(t[0] || "", ")")
                                                })
                                            },
                                            uploadIsAvailable: !0,
                                            assetType: "image"
                                        },
                                        style: {
                                            width: "100%"
                                        },
                                        children: (0, N.jsx)(V.U, {
                                            size: {
                                                width: "100%",
                                                height: 75
                                            },
                                            imageUrl: null !== a && void 0 !== a && null !== (o = a.backgroundImage) && void 0 !== o && o.startsWith("linear") ? "" : null === a || void 0 === a || null === (r = a.backgroundImage) || void 0 === r ? void 0 : r.replace(/url\(/g, "").replace(/\)/g, ""),
                                            onRemove: () => {
                                                l({ ...a || {},
                                                    backgroundImage: ""
                                                })
                                            }
                                        })
                                    })
                                })]
                            })
                        })), (0, N.jsx)(T.K, {
                            position: "bottom"
                        })]
                    })
                },
                q = t => {
                    let {
                        show: e,
                        onClose: n,
                        title: o = "Custom Styles",
                        sections: r = []
                    } = t;
                    const {
                        editor: {
                            sidebarSize: i,
                            drawerSize: s
                        }
                    } = (0, x.useContext)(I.I);
                    return (0, N.jsx)(z.d, {
                        show: e,
                        closeCallback: () => n(),
                        size: s,
                        distance: s < 401 ? 0 : i,
                        position: "left",
                        overlay: !1,
                        backgroundMode: !0,
                        showCloseButton: !1,
                        style: {
                            zIndex: 15,
                            height: "calc(100vh - ".concat(55, "px)"),
                            maxHeight: "-webkit-fill-available",
                            top: "".concat(55, "px")
                        },
                        children: e ? (0, N.jsx)(X, {
                            sections: r,
                            onClose: n,
                            title: o
                        }) : (0, N.jsx)(N.Fragment, {})
                    })
                }
        },
        46186: (t, e, n) => {
            n.d(e, {
                e: () => m
            });
            var o, r, i = n(46942),
                s = n(12218),
                a = n(53617),
                l = n(6246),
                d = n(27579),
                c = n(46175),
                h = n(13736),
                x = n(18744),
                p = n(36466);
            const g = x.default.div(o || (o = (0, h.Z)(["\n  ", "\n"])), (() => (0, x.css)(r || (r = (0, h.Z)(["\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    gap: 10px;\n\n    .", " {\n      position: relative;\n\n      .", " {\n        position: absolute;\n        right: -8px;\n        top: -7px;\n        z-index: 1;\n        padding: 0;\n        margin: 0;\n        border-radius: 50em;\n        width: 18px;\n        height: 18px;\n        font-size: 0.8rem;\n        border: none;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        opacity: 0;\n        transition: 0.2s;\n        cursor: pointer;\n        background: var(", ");\n\t\t\t\tcolor: var(", ");\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: var(", ");\n\t\t\t\t\tcolor: var(", ");\n\t\t\t\t}\n      }\n\n      &:hover {\n        .", " {\n          opacity: 1;\n        }\n      }\n    }\n\n    .", " {\n      border: 1px dashed var(", ");\n      background: none;\n      cursor: pointer;\n      border-radius: 5px;\n      color: var(", ");\n      font-size: 16px;\n      height: 37px;\n      width: 37px;\n      min-width: 37px;\n      transition: all 0.2s ease;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      &:hover {\n        border-color: var(", ");\n        color: var(", ");\n      }\n    }\n  "])), (0, d.N9)("color-scheme-color"), (0, d.N9)("color-scheme-remove-color"), p.Dm.background600, p.Dm.text300, p.Dm.background500, p.Dm.text100, (0, d.N9)("color-scheme-remove-color"), (0, d.N9)("color-scheme-action-button"), p.Dm.text700, p.Dm.text500, p.Dm.text100, p.Dm.text100)));
            var u = n(5030);
            const m = t => {
                let {
                    colors: e,
                    colorFormat: n,
                    onChange: o,
                    max: r = 5
                } = t;
                const [h, x] = (0, a.useState)([...e]);

                function p() {
                    let t = "";
                    for (let e = 0; e < 6; e++) t += "0123456789ABCDEF" [Math.floor(16 * Math.random())];
                    return "#".concat(t)
                }
                return (0, a.useEffect)((() => {
                    x(e)
                }), [e]), (0, u.jsxs)(g, {
                    children: [h.map(((t, e) => (0, u.jsxs)("div", {
                        className: (0, d.N9)("color-scheme-color"),
                        children: [(0, u.jsx)(l.z, {
                            selectedColor: t || "",
                            onChange: t => function(t, e) {
                                const n = [...h];
                                n[t] = e, null === o || void 0 === o || o(n)
                            }(e, t),
                            colorFormat: n || "hex",
                            debounce: 0,
                            enableTransparency: !0
                        }), (0, u.jsx)("button", {
                            className: (0, d.N9)("color-scheme-remove-color"),
                            onClick: () => function(t) {
                                const e = [...h];
                                e.splice(t, 1), null === o || void 0 === o || o(e)
                            }(e),
                            title: "Remove Color",
                            children: (0, u.jsx)(i.i, {
                                size: 10
                            })
                        })]
                    }, "color_scheme_".concat(e)))), h.length < r && (0, u.jsx)("button", {
                        onClick: function() {
                            if (h.length > r) return c.j.removeAll(), void c.j.error({
                                title: "Maximum number of colors is ".concat(r),
                                autoDismiss: 4.5
                            });
                            const t = [...h, p()];
                            null === o || void 0 === o || o(t)
                        },
                        className: (0, d.N9)("color-scheme-action-button"),
                        title: "Add Color",
                        children: (0, u.jsx)(s.w, {})
                    })]
                })
            }
        },
        64669: (t, e, n) => {
            n.d(e, {
                J: () => a
            });
            var o = n(46186),
                r = n(61817),
                i = n(21871),
                s = n(5030);
            const a = t => {
                let {
                    cssProps: e = {},
                    onChange: n,
                    degreeControl: a = !0
                } = t, l = [], d = 0;
                if (e.backgroundImage && e.backgroundImage.startsWith("linear-gradient")) {
                    const {
                        colors: t,
                        degree: n
                    } = (0, i.yK)(e.backgroundImage);
                    l = t, d = n
                } else e.backgroundColor && l.push(e.backgroundColor);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(o.e, {
                        colors: l,
                        onChange: t => {
                            var o;
                            const r = { ...e,
                                backgroundColor: t[0]
                            };
                            t.length > 1 ? r.backgroundImage = (0, i.An)(t, d) : null !== (o = e.backgroundImage) && void 0 !== o && o.startsWith("linear-gradient") && (r.backgroundImage = void 0), n(r, !0)
                        },
                        max: 3
                    }), a && l.length > 1 && (0, s.jsxs)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            gap: 10
                        },
                        children: ["Turn", (0, s.jsx)(r.i, {
                            value: d,
                            onChange: t => n({
                                backgroundImage: (0, i.An)(l, t)
                            }, !0),
                            step: 1,
                            min: 0,
                            max: 360
                        }), "degrees"]
                    })]
                })
            }
        },
        21871: (t, e, n) => {
            n.d(e, {
                An: () => d,
                Vl: () => s,
                uT: () => l,
                xy: () => a,
                yK: () => c
            });
            var o = n(76854),
                r = n(5030);
            const i = [{
                    id: "typography",
                    name: "typography",
                    displayName: "Typography",
                    cssProperties: ["fontFamily", "color", "fontSize", "textAlign", "fontWeight", "fontStyle", "lineHeight", "letterSpacing", "textDecorationLine", "textDecorationStyle", "textDecorationThickness", "textDecorationColor", "textTransform"]
                }, {
                    id: "background",
                    name: "background",
                    displayName: "Background",
                    cssProperties: ["backgroundColor", "backgroundImage", "backgroundSize", "backgroundRepeat", "backgroundPosition"]
                }, {
                    id: "borders",
                    name: "borders",
                    displayName: "Borders",
                    cssProperties: ["borderColor", "borderStyle", "borderWidth", "borderRadius"]
                }, {
                    id: "spacing",
                    name: "spacing",
                    displayName: "Spacing",
                    cssProperties: ["margin", "padding"]
                }, {
                    id: "shadow",
                    name: "shadow",
                    displayName: "Shadow",
                    cssProperties: ["boxShadow"]
                }, {
                    id: "size",
                    name: "size",
                    displayName: "Size",
                    cssProperties: ["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight"]
                }],
                s = {
                    height: {
                        min: 0,
                        max: 5e3,
                        unit: "px"
                    },
                    width: {
                        min: 0,
                        max: 5e3,
                        unit: "px"
                    },
                    minHeight: {
                        min: 0,
                        max: 5e3,
                        unit: "px"
                    },
                    minWidth: {
                        min: 0,
                        max: 5e3,
                        unit: "px"
                    },
                    maxHeight: {
                        min: 0,
                        max: 5e3,
                        unit: "px"
                    },
                    maxWidth: {
                        min: 0,
                        max: 5e3,
                        unit: "px"
                    },
                    letterSpacing: {
                        min: -10,
                        max: 10,
                        step: .01,
                        unit: "em"
                    },
                    lineHeight: {
                        min: -100,
                        max: 100,
                        step: .1,
                        unit: "em"
                    },
                    margin: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    marginBottom: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    marginLeft: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    marginRight: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    marginTop: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    padding: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    paddingBottom: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    paddingLeft: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    paddingRight: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    paddingTop: {
                        min: 0,
                        max: 1e3,
                        unit: "px"
                    },
                    borderWidth: {
                        min: 0,
                        max: 20,
                        unit: "px"
                    },
                    borderTopWidth: {
                        min: 0,
                        max: 20,
                        unit: "px"
                    },
                    borderRightWidth: {
                        min: 0,
                        max: 20,
                        unit: "px"
                    },
                    borderLeftWidth: {
                        min: 0,
                        max: 20,
                        unit: "px"
                    },
                    borderBottomWidth: {
                        min: 0,
                        max: 20,
                        unit: "px"
                    },
                    borderRadius: {
                        min: 0,
                        max: 5e3,
                        unit: "px"
                    },
                    fontSize: {
                        min: 0,
                        max: 200,
                        unit: "px"
                    },
                    textDecorationThickness: {
                        min: 0,
                        max: 10
                    }
                },
                a = {
                    backgroundRepeat: [{
                        value: "",
                        label: "Default"
                    }, {
                        value: "no-repeat",
                        label: "No Repeat"
                    }, {
                        value: "repeat",
                        label: "Repeat"
                    }, {
                        value: "repeat-x",
                        label: "Repeat X"
                    }, {
                        value: "repeat-y",
                        label: "Repeat Y"
                    }],
                    backgroundSize: [{
                        value: "",
                        label: "Default"
                    }, {
                        value: "auto",
                        label: "Auto"
                    }, {
                        value: "cover",
                        label: "Cover"
                    }, {
                        value: "contain",
                        label: "Contain"
                    }],
                    backgroundPosition: [{
                        value: "",
                        label: (0, r.jsx)(r.Fragment, {
                            children: "/"
                        })
                    }, {
                        value: "center left",
                        label: (0, r.jsx)(o.c.AlignLeft, {})
                    }, {
                        value: "center center",
                        label: (0, r.jsx)(o.c.AlignCenter, {})
                    }, {
                        value: "center right",
                        label: (0, r.jsx)(o.c.AlignRight, {})
                    }],
                    fontStyle: [{
                        value: "",
                        label: "Default"
                    }, {
                        value: "normal",
                        label: "Normal"
                    }, {
                        value: "italic",
                        label: "Italic"
                    }, {
                        value: "oblique",
                        label: "Oblique"
                    }],
                    borderStyle: [{
                        value: "",
                        label: "Default"
                    }, {
                        value: "none",
                        label: "None"
                    }, {
                        value: "solid",
                        label: "Solid"
                    }, {
                        value: "dashed",
                        label: "Dashed"
                    }, {
                        value: "dotted",
                        label: "Dotted"
                    }],
                    textTransform: [{
                        value: "none",
                        label: (0, r.jsx)(r.Fragment, {})
                    }, {
                        value: "uppercase",
                        label: (0, r.jsx)(o.c.Uppercase, {})
                    }, {
                        value: "lowercase",
                        label: (0, r.jsx)(o.c.Lowercase, {})
                    }, {
                        value: "capitalize",
                        label: (0, r.jsx)(o.c.Capitalize, {})
                    }],
                    textAlign: [{
                        value: "",
                        label: (0, r.jsx)(r.Fragment, {
                            children: "/"
                        })
                    }, {
                        value: "left",
                        label: (0, r.jsx)(o.c.TextAlignLeft, {})
                    }, {
                        value: "center",
                        label: (0, r.jsx)(o.c.TextAlignCenter, {})
                    }, {
                        value: "right",
                        label: (0, r.jsx)(o.c.TextAlignRight, {})
                    }],
                    textDecorationLine: [{
                        value: "none",
                        label: (0, r.jsx)(r.Fragment, {
                            children: "/"
                        })
                    }, {
                        value: "underline",
                        label: (0, r.jsx)(o.c.Underline, {})
                    }, {
                        value: "line-through",
                        label: (0, r.jsx)(o.c.LineAcross, {})
                    }],
                    textDecorationStyle: [{
                        value: "solid",
                        label: "Solid"
                    }, {
                        value: "double",
                        label: "Double"
                    }, {
                        value: "dotted",
                        label: "Dotted"
                    }, {
                        value: "dashed",
                        label: "Dashed"
                    }, {
                        value: "wavy",
                        label: "Wavy"
                    }],
                    padding: [{
                        value: "paddingTop",
                        label: (0, r.jsx)(o.c.PaddingTop, {})
                    }, {
                        value: "paddingRight",
                        label: (0, r.jsx)(o.c.PaddingRight, {})
                    }, {
                        value: "paddingBottom",
                        label: (0, r.jsx)(o.c.PaddingBottom, {})
                    }, {
                        value: "paddingLeft",
                        label: (0, r.jsx)(o.c.PaddingLeft, {})
                    }],
                    margin: [{
                        value: "marginTop",
                        label: (0, r.jsx)(o.c.MarginTop, {})
                    }, {
                        value: "marginRight",
                        label: (0, r.jsx)(o.c.MarginRight, {})
                    }, {
                        value: "marginBottom",
                        label: (0, r.jsx)(o.c.MarginBottom, {})
                    }, {
                        value: "marginLeft",
                        label: (0, r.jsx)(o.c.MarginLeft, {})
                    }],
                    borderWidth: [{
                        value: "borderTopWidth",
                        label: (0, r.jsx)(o.c.BorderTop, {})
                    }, {
                        value: "borderRightWidth",
                        label: (0, r.jsx)(o.c.BorderRight, {})
                    }, {
                        value: "borderBottomWidth",
                        label: (0, r.jsx)(o.c.BorderBottom, {})
                    }, {
                        value: "borderLeftWidth",
                        label: (0, r.jsx)(o.c.BorderLeft, {})
                    }],
                    borderRadius: [{
                        value: "borderTopLeftRadius",
                        label: (0, r.jsx)(o.c.CornerTopLeft, {})
                    }, {
                        value: "borderTopRightRadius",
                        label: (0, r.jsx)(o.c.CornerTopRight, {})
                    }, {
                        value: "borderBottomRightRadius",
                        label: (0, r.jsx)(o.c.CornerBottomRight, {})
                    }, {
                        value: "borderBottomLeftRadius",
                        label: (0, r.jsx)(o.c.CornerBottomLeft, {})
                    }]
                },
                l = t => {
                    const e = [];
                    return !t || "string" !== typeof t && 0 === t.length ? (i.forEach((t => {
                        e.push(t)
                    })), e) : "string" === typeof t ? (i.forEach((n => {
                        n.name === t && e.push(n)
                    })), e) : (t.forEach((t => {
                        i.forEach((n => {
                            "string" !== typeof t ? n.name === t.name && e.push({ ...n,
                                ...t
                            }) : n.name === t && e.push(n)
                        }))
                    })), e)
                };

            function d(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const n = 100 / (t.length - 1),
                    o = t.map(((t, e) => "".concat(t, " ").concat(e * n, "%")));
                return "linear-gradient(".concat(e, "deg, ").concat(o.join(", "), ")")
            }

            function c(t) {
                const e = t.match(/(\d+)deg/);
                return {
                    degree: e ? parseInt(e[1]) : 0,
                    colors: t.match(/(#(?:[0-9a-fA-F]{3}){1,2}|rgba?\((?:\d{1,3},\s?){2,3}(?:\d{1,3}(?:,\s?\d(?:\.\d+)?)?)?\))/g) || []
                }
            }
        },
        76854: (t, e, n) => {
            n.d(e, {
                c: () => r
            });
            var o = n(5030);
            const r = {
                AlignCenter: () => (0, o.jsxs)("svg", {
                    width: "14",
                    height: "20",
                    viewBox: "0 0 14 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "8",
                        width: "20",
                        height: "2",
                        rx: "1",
                        transform: "rotate(90 8 0)",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        x: "12",
                        y: "11",
                        width: "6",
                        height: "10",
                        rx: "1",
                        transform: "rotate(90 12 11)",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        x: "14",
                        y: "4",
                        width: "6",
                        height: "14",
                        rx: "1",
                        transform: "rotate(90 14 4)",
                        fill: "currentColor"
                    })]
                }),
                AlignLeft: () => (0, o.jsxs)("svg", {
                    width: "18",
                    height: "20",
                    viewBox: "0 0 18 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "14",
                        y: "11",
                        width: "6",
                        height: "10",
                        rx: "1",
                        transform: "rotate(90 14 11)",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        x: "18",
                        y: "4",
                        width: "6",
                        height: "14",
                        rx: "1",
                        transform: "rotate(90 18 4)",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        x: "2",
                        width: "20",
                        height: "2",
                        rx: "1",
                        transform: "rotate(90 2 0)",
                        fill: "currentColor"
                    })]
                }),
                AlignRight: () => (0, o.jsxs)("svg", {
                    width: "18",
                    height: "20",
                    viewBox: "0 0 18 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "18",
                        width: "20",
                        height: "2",
                        rx: "1",
                        transform: "rotate(90 18 0)",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        x: "14",
                        y: "11",
                        width: "6",
                        height: "10",
                        rx: "1",
                        transform: "rotate(90 14 11)",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        x: "14",
                        y: "4",
                        width: "6",
                        height: "14",
                        rx: "1",
                        transform: "rotate(90 14 4)",
                        fill: "currentColor"
                    })]
                }),
                BorderBottom: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        d: "M16 12L16 2C16 1.44772 15.5523 1 15 1L2 0.999999C1.44772 0.999999 1 1.44771 1 2L1 12",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M1 16L16 16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                BorderLeft: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        d: "M5 16L15 16C15.5523 16 16 15.5523 16 15L16 2C16 1.44771 15.5523 1 15 1L5 1",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M1 1L1 16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                BorderRight: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        d: "M12 1L2 1C1.44772 1 1 1.44771 1 2L0.999999 15C0.999999 15.5523 1.44771 16 2 16L12 16",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M16 16L16 1",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                BorderTop: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        d: "M1 5V15C1 15.5523 1.44772 16 2 16H15C15.5523 16 16 15.5523 16 15V5",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M16 1L1 1",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                CornerBottomLeft: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "1",
                        y: "16",
                        width: "15",
                        height: "15",
                        rx: "2.5",
                        transform: "rotate(-90 1 16)",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M1 8L1 13.5C1 14.8807 2.11929 16 3.5 16L9.5 16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                CornerBottomRight: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "16",
                        y: "16",
                        width: "15",
                        height: "15",
                        rx: "2.5",
                        transform: "rotate(-180 16 16)",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M8 16L13.5 16C14.8807 16 16 14.8807 16 13.5L16 7.5",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                CornerTopLeft: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "1",
                        y: "1",
                        width: "15",
                        height: "15",
                        rx: "2.5",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M9 1H3.5C2.11929 1 1 2.11929 1 3.5V9.5",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                CornerTopRight: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "16",
                        y: "1",
                        width: "15",
                        height: "15",
                        rx: "2.5",
                        transform: "rotate(90 16 1)",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M16 9L16 3.5C16 2.11929 14.8807 1 13.5 1L7.5 1",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                LetterSpacing: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        d: "M9.72117 9.55937L8.89688 7.09471C8.83582 6.93823 8.77069 6.75498 8.70149 6.54495C8.63229 6.33082 8.56309 6.10021 8.49389 5.85312C8.43284 6.10432 8.36771 6.33699 8.29851 6.55113C8.22931 6.76527 8.16418 6.95058 8.10312 7.10707L7.28494 9.55937H9.72117ZM13 13H11.4003C11.2212 13 11.0767 12.9588 10.9668 12.8765C10.8569 12.79 10.7734 12.6809 10.7164 12.5491L10.1913 10.9801H6.80868L6.28358 12.5491C6.23881 12.6644 6.15739 12.7694 6.03935 12.8641C5.92537 12.9547 5.7829 13 5.61194 13H4L7.44369 4H9.55631L13 13Z",
                        fill: "currentColor"
                    }), (0, o.jsx)("path", {
                        d: "M16 1V16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M1 1V16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                LineAcross: () => (0, o.jsxs)("svg", {
                    width: "14",
                    height: "16",
                    viewBox: "0 0 14 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M10.2021 3.81754C11.1969 3.81754 11.8187 3.03158 11.8187 2.18947C11.8187 0.449123 8.39896 0 7.09326 0C3.92228 0 1.12435 1.90877 1.12435 4.94035C1.12435 5.33163 1.17245 5.68317 1.2612 6H7.21765C5.95082 5.66166 4.97927 5.32892 4.97927 4.54737C4.97927 3.64912 5.91192 3.14386 6.96891 3.14386C7.7904 3.14386 8.38577 3.34803 8.92099 3.53157C9.358 3.68143 9.75491 3.81754 10.2021 3.81754ZM12.9148 10H8.53809C8.91713 10.2509 9.14508 10.5682 9.14508 11.0035C9.14508 12.0702 8.27461 12.8561 6.65803 12.8561C5.81714 12.8561 5.03084 12.6097 4.30897 12.3835C3.69645 12.1915 3.13031 12.014 2.61658 12.014C1.62176 12.014 1 12.7439 1 13.586C1 15.607 4.97927 16 6.84456 16C10.1399 16 13 14.0351 13 10.9474C13 10.6063 12.9704 10.2913 12.9148 10Z",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        y: "7",
                        width: "14",
                        height: "2",
                        rx: "1",
                        fill: "currentColor"
                    })]
                }),
                LineHeight: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        d: "M16 16L1 16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M16 1L1 0.999999",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M9.72117 9.55937L8.89688 7.09471C8.83582 6.93823 8.77069 6.75498 8.70149 6.54495C8.63229 6.33082 8.56309 6.10021 8.49389 5.85312C8.43284 6.10432 8.36771 6.33699 8.29851 6.55113C8.22931 6.76527 8.16418 6.95058 8.10312 7.10707L7.28494 9.55937H9.72117ZM13 13H11.4003C11.2212 13 11.0767 12.9588 10.9668 12.8765C10.8569 12.79 10.7734 12.6809 10.7164 12.5491L10.1913 10.9801H6.80868L6.28358 12.5491C6.23881 12.6644 6.15739 12.7694 6.03935 12.8641C5.92537 12.9547 5.7829 13 5.61194 13H4L7.44369 4H9.55631L13 13Z",
                        fill: "currentColor"
                    })]
                }),
                Link: () => (0, o.jsxs)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        d: "M10.7818 13.8168L7.7169 16.8824C7.7169 16.8824 7.7169 16.8824 7.71683 16.8824C7.71683 16.8824 7.71683 16.8825 7.71676 16.8825C6.44934 18.1502 4.38697 18.1503 3.11941 16.8825C2.50536 16.2683 2.16726 15.4518 2.16726 14.5833C2.16726 13.7149 2.50536 12.8985 3.1192 12.2843C3.11927 12.2843 3.11934 12.2842 3.11941 12.2841L6.18429 9.21858C6.60741 8.7953 6.60741 8.10902 6.18421 7.68581C5.76109 7.26261 5.07494 7.26261 4.65174 7.68581L1.58687 10.7513C1.58665 10.7516 1.58644 10.7519 1.58622 10.7521C0.563344 11.7755 0 13.1362 0 14.5833C0 16.0308 0.563561 17.3917 1.58694 18.4153C2.64327 19.4717 4.03068 20 5.41816 20C6.80564 20 8.19312 19.4717 9.2493 18.4153C9.24937 18.4153 9.24938 18.4151 9.24938 18.4151L12.3142 15.3496C12.7374 14.9264 12.7374 14.2401 12.3142 13.8168C11.8911 13.3936 11.205 13.3936 10.7818 13.8168Z"
                    }), (0, o.jsx)("path", {
                        d: "M20 5.41661C20 3.9691 19.4364 2.60823 18.413 1.58465C16.3005 -0.528254 12.8632 -0.528182 10.7508 1.58465C10.7507 1.5848 10.7506 1.58487 10.7505 1.58502L7.6858 4.65033C7.26261 5.07353 7.26261 5.75989 7.6858 6.1831C7.89746 6.39481 8.17472 6.50059 8.45205 6.50059C8.72931 6.50059 9.00672 6.39473 9.21824 6.1831L12.283 3.11778C12.283 3.11764 12.2832 3.11756 12.2833 3.11742C13.5507 1.84976 15.613 1.84969 16.8806 3.11742C17.4945 3.7316 17.8328 4.54816 17.8328 5.41661C17.8328 6.28498 17.4947 7.1014 16.8808 7.71557L16.8806 7.71579L13.8158 10.7813C13.3927 11.2045 13.3927 11.8908 13.8158 12.3141C14.0274 12.5257 14.3048 12.6316 14.582 12.6316C14.8594 12.6316 15.1367 12.5257 15.3483 12.3141L18.4131 9.24856C18.4133 9.24834 18.4135 9.24805 18.4137 9.24783C19.4366 8.2244 20 6.86375 20 5.41661Z"
                    }), (0, o.jsx)("path", {
                        d: "M6.11156 13.8884C6.32632 14.1032 6.6078 14.2106 6.88921 14.2106C7.17068 14.2106 7.45216 14.1032 7.66692 13.8884L13.8883 7.66699C14.3179 7.23755 14.3179 6.54115 13.8883 6.11163C13.4589 5.68219 12.7625 5.68219 12.333 6.11163L6.11156 12.333C5.68205 12.7626 5.68205 13.459 6.11156 13.8884Z"
                    })]
                }),
                MarginBottom: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "16",
                        y: "1",
                        width: "15",
                        height: "15",
                        rx: "1",
                        transform: "rotate(90 16 1)",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M12 12L5 12",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M12 5L5 5",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                MarginLeft: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "1",
                        y: "1",
                        width: "15",
                        height: "15",
                        rx: "1",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M12 5V12",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M5 5V12",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                MarginRight: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "1",
                        y: "1",
                        width: "15",
                        height: "15",
                        rx: "1",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M12 5V12",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M5 5V12",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                MarginTop: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "16",
                        y: "1",
                        width: "15",
                        height: "15",
                        rx: "1",
                        transform: "rotate(90 16 1)",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M12 12L5 12",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M12 5L5 5",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                PaddingBottom: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "5",
                        y: "12",
                        width: "7",
                        height: "7",
                        rx: "1",
                        transform: "rotate(-90 5 12)",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M1 1L16 0.999999",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M1 16L16 16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                PaddingLeft: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "5",
                        y: "5",
                        width: "7",
                        height: "7",
                        rx: "1",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M16 1V16",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M1 1V16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                PaddingRight: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "5",
                        y: "5",
                        width: "7",
                        height: "7",
                        rx: "1",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M16 1V16",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M1 1V16",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                PaddingTop: () => (0, o.jsxs)("svg", {
                    width: "17",
                    height: "17",
                    viewBox: "0 0 17 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "12",
                        y: "5",
                        width: "7",
                        height: "7",
                        rx: "1",
                        transform: "rotate(90 12 5)",
                        stroke: "#4D5265",
                        strokeWidth: "2"
                    }), (0, o.jsx)("path", {
                        d: "M16 16L1 16",
                        stroke: "#4D5265",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    }), (0, o.jsx)("path", {
                        d: "M16 1L1 0.999999",
                        stroke: "#6881E9",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                }),
                TextAlignCenter: () => (0, o.jsxs)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "2",
                        width: "10",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        y: "5.5",
                        width: "14",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        x: "4",
                        y: "11",
                        width: "6",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    })]
                }),
                TextAlignLeft: () => (0, o.jsxs)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        width: "10",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        y: "5.5",
                        width: "14",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        y: "11",
                        width: "6",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    })]
                }),
                TextAlignRight: () => (0, o.jsxs)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        x: "4",
                        width: "10",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        y: "5.5",
                        width: "14",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    }), (0, o.jsx)("rect", {
                        x: "8",
                        y: "11",
                        width: "6",
                        height: "3",
                        rx: "1.5",
                        fill: "currentColor"
                    })]
                }),
                Underline: () => (0, o.jsxs)("svg", {
                    width: "14",
                    height: "16",
                    viewBox: "0 0 14 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("rect", {
                        y: "14",
                        width: "14",
                        height: "2",
                        rx: "1",
                        fill: "currentColor"
                    }), (0, o.jsx)("path", {
                        d: "M2.68355 0V0.00108108C1.75659 0.00108108 1 0.668616 1 1.48648V6.70649V6.71114C1.00637 8.351 1.76604 9.75729 2.92612 10.6656C4.0811 11.5699 5.55622 11.9952 7.00862 12C8.46115 12.0047 9.94261 11.5878 11.0985 10.6798C12.2595 9.76774 13.0065 8.35078 13 6.70086V1.4861C13 0.668238 12.2434 0.000702703 11.3164 0.000702703C10.3894 0.000702703 9.63285 0.668238 9.63285 1.4861V6.70616C9.63284 6.70779 9.63284 6.70941 9.63285 6.71103C9.63653 7.62501 9.32503 8.09481 8.85926 8.46072C8.40471 8.8178 7.72492 9.0313 7.02122 9.02901C6.31777 9.02674 5.62626 8.80738 5.16101 8.44312C4.68505 8.07047 4.37083 7.59663 4.36717 6.70154V1.48583C4.36717 0.667968 3.61051 0.000432433 2.68355 0.000432433V0Z",
                        fill: "currentColor"
                    })]
                }),
                Unlink: () => (0, o.jsxs)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("path", {
                        d: "M10.7818 13.8168L7.7169 16.8824C7.7169 16.8824 7.7169 16.8824 7.71683 16.8824C7.71683 16.8824 7.71683 16.8825 7.71676 16.8825C6.44934 18.1502 4.38697 18.1503 3.11941 16.8825C2.50536 16.2683 2.16726 15.4518 2.16726 14.5833C2.16726 13.7149 2.50536 12.8985 3.1192 12.2843C3.11927 12.2843 3.11934 12.2842 3.11941 12.2841L6.18429 9.21858C6.60741 8.7953 6.60741 8.10902 6.18421 7.68581C5.76109 7.26261 5.07494 7.26261 4.65174 7.68581L1.58687 10.7513C1.58665 10.7516 1.58644 10.7519 1.58622 10.7521C0.563344 11.7755 0 13.1362 0 14.5833C0 16.0308 0.563561 17.3917 1.58694 18.4153C2.64327 19.4717 4.03068 20 5.41816 20C6.80564 20 8.19312 19.4717 9.2493 18.4153C9.24937 18.4153 9.24938 18.4151 9.24938 18.4151L12.3142 15.3496C12.7374 14.9264 12.7374 14.2401 12.3142 13.8168C11.8911 13.3936 11.205 13.3936 10.7818 13.8168Z"
                    }), (0, o.jsx)("path", {
                        d: "M20 5.41661C20 3.9691 19.4364 2.60823 18.413 1.58465C16.3005 -0.528254 12.8632 -0.528182 10.7508 1.58465C10.7507 1.5848 10.7506 1.58487 10.7505 1.58502L7.6858 4.65033C7.26261 5.07353 7.26261 5.75989 7.6858 6.1831C7.89746 6.39481 8.17472 6.50059 8.45205 6.50059C8.72931 6.50059 9.00672 6.39473 9.21824 6.1831L12.283 3.11778C12.283 3.11764 12.2832 3.11756 12.2833 3.11742C13.5507 1.84976 15.613 1.84969 16.8806 3.11742C17.4945 3.7316 17.8328 4.54816 17.8328 5.41661C17.8328 6.28498 17.4947 7.1014 16.8808 7.71557L16.8806 7.71579L13.8158 10.7813C13.3927 11.2045 13.3927 11.8908 13.8158 12.3141C14.0274 12.5257 14.3048 12.6316 14.582 12.6316C14.8594 12.6316 15.1367 12.5257 15.3483 12.3141L18.4131 9.24856C18.4133 9.24834 18.4135 9.24805 18.4137 9.24783C19.4366 8.2244 20 6.86375 20 5.41661Z"
                    }), (0, o.jsx)("path", {
                        d: "M13.8884 6.11163C14.3179 6.54115 14.3179 7.23755 13.8884 7.66699L12.3331 9.22235L10.7777 7.66697L12.3331 6.11163C12.7626 5.68219 13.459 5.68219 13.8884 6.11163Z"
                    }), (0, o.jsx)("path", {
                        d: "M6.88933 14.2106C6.60792 14.2106 6.32644 14.1032 6.11169 13.8884C5.68217 13.459 5.68217 12.7626 6.11169 12.333L8.44471 10L10.0001 11.5554L7.66704 13.8884C7.45229 14.1032 7.17081 14.2106 6.88933 14.2106Z"
                    }), (0, o.jsx)("path", {
                        d: "M3.11169 1.11169C2.89693 1.32644 2.78952 1.60792 2.78952 1.88933C2.78952 2.17081 2.89693 2.45228 3.11169 2.66704L17.3331 16.8885C17.7626 17.318 18.459 17.318 18.8885 16.8885C19.3179 16.459 19.3179 15.7626 18.8885 15.3331L4.66712 1.11169C4.23754 0.682172 3.54113 0.682172 3.11169 1.11169Z"
                    })]
                }),
                Uppercase: () => (0, o.jsx)("svg", {
                    width: "18",
                    height: "10",
                    viewBox: "0 0 18 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, o.jsx)("path", {
                        d: "M5.964 7.404H2.628L2.076 9H0.312L3.324 0.611999H5.28L8.292 9H6.516L5.964 7.404ZM5.508 6.06L4.296 2.556L3.084 6.06H5.508ZM15.2498 3.144C15.0578 2.792 14.7938 2.524 14.4578 2.34C14.1218 2.156 13.7298 2.064 13.2818 2.064C12.7858 2.064 12.3458 2.176 11.9618 2.4C11.5778 2.624 11.2778 2.944 11.0618 3.36C10.8458 3.776 10.7378 4.256 10.7378 4.8C10.7378 5.36 10.8458 5.848 11.0618 6.264C11.2858 6.68 11.5938 7 11.9858 7.224C12.3778 7.448 12.8338 7.56 13.3538 7.56C13.9938 7.56 14.5178 7.392 14.9258 7.056C15.3338 6.712 15.6018 6.236 15.7298 5.628H12.8498V4.344H17.3858V5.808C17.2738 6.392 17.0338 6.932 16.6658 7.428C16.2978 7.924 15.8218 8.324 15.2378 8.628C14.6618 8.924 14.0138 9.072 13.2938 9.072C12.4858 9.072 11.7538 8.892 11.0978 8.532C10.4498 8.164 9.93784 7.656 9.56184 7.008C9.19384 6.36 9.00984 5.624 9.00984 4.8C9.00984 3.976 9.19384 3.24 9.56184 2.592C9.93784 1.936 10.4498 1.428 11.0978 1.068C11.7538 0.7 12.4818 0.516 13.2818 0.516C14.2258 0.516 15.0458 0.748 15.7418 1.212C16.4378 1.668 16.9178 2.312 17.1818 3.144H15.2498Z",
                        fill: "currentColor"
                    })
                }),
                Lowercase: () => (0, o.jsx)("svg", {
                    width: "16",
                    height: "11",
                    viewBox: "0 0 16 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, o.jsx)("path", {
                        d: "M0.396 3.652C0.396 2.98 0.528 2.384 0.792 1.864C1.064 1.344 1.428 0.944 1.884 0.664C2.348 0.384 2.864 0.244 3.432 0.244C3.928 0.244 4.36 0.344 4.728 0.543999C5.104 0.744 5.404 0.996 5.628 1.3V0.352H7.32V7H5.628V6.028C5.412 6.34 5.112 6.6 4.728 6.808C4.352 7.008 3.916 7.108 3.42 7.108C2.86 7.108 2.348 6.964 1.884 6.676C1.428 6.388 1.064 5.984 0.792 5.464C0.528 4.936 0.396 4.332 0.396 3.652ZM5.628 3.676C5.628 3.268 5.548 2.92 5.388 2.632C5.228 2.336 5.012 2.112 4.74 1.96C4.468 1.8 4.176 1.72 3.864 1.72C3.552 1.72 3.264 1.796 3 1.948C2.736 2.1 2.52 2.324 2.352 2.62C2.192 2.908 2.112 3.252 2.112 3.652C2.112 4.052 2.192 4.404 2.352 4.708C2.52 5.004 2.736 5.232 3 5.392C3.272 5.552 3.56 5.632 3.864 5.632C4.176 5.632 4.468 5.556 4.74 5.404C5.012 5.244 5.228 5.02 5.388 4.732C5.548 4.436 5.628 4.084 5.628 3.676ZM11.5648 0.244C12.0608 0.244 12.4968 0.344 12.8728 0.543999C13.2488 0.736 13.5448 0.988 13.7608 1.3V0.352H15.4528V7.048C15.4528 7.664 15.3288 8.212 15.0808 8.692C14.8328 9.18 14.4608 9.564 13.9648 9.844C13.4688 10.132 12.8688 10.276 12.1648 10.276C11.2208 10.276 10.4448 10.056 9.83681 9.616C9.23681 9.176 8.89681 8.576 8.81681 7.816H10.4848C10.5728 8.12 10.7608 8.36 11.0488 8.536C11.3448 8.72 11.7008 8.812 12.1168 8.812C12.6048 8.812 13.0008 8.664 13.3048 8.368C13.6088 8.08 13.7608 7.64 13.7608 7.048V6.016C13.5448 6.328 13.2448 6.588 12.8608 6.796C12.4848 7.004 12.0528 7.108 11.5648 7.108C11.0048 7.108 10.4928 6.964 10.0288 6.676C9.56481 6.388 9.19681 5.984 8.92481 5.464C8.66081 4.936 8.52881 4.332 8.52881 3.652C8.52881 2.98 8.66081 2.384 8.92481 1.864C9.19681 1.344 9.56081 0.944 10.0168 0.664C10.4808 0.384 10.9968 0.244 11.5648 0.244ZM13.7608 3.676C13.7608 3.268 13.6808 2.92 13.5208 2.632C13.3608 2.336 13.1448 2.112 12.8728 1.96C12.6008 1.8 12.3088 1.72 11.9968 1.72C11.6848 1.72 11.3968 1.796 11.1328 1.948C10.8688 2.1 10.6528 2.324 10.4848 2.62C10.3248 2.908 10.2448 3.252 10.2448 3.652C10.2448 4.052 10.3248 4.404 10.4848 4.708C10.6528 5.004 10.8688 5.232 11.1328 5.392C11.4048 5.552 11.6928 5.632 11.9968 5.632C12.3088 5.632 12.6008 5.556 12.8728 5.404C13.1448 5.244 13.3608 5.02 13.5208 4.732C13.6808 4.436 13.7608 4.084 13.7608 3.676Z",
                        fill: "currentColor"
                    })
                }),
                Capitalize: () => (0, o.jsx)("svg", {
                    width: "16",
                    height: "13",
                    viewBox: "0 0 16 13",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, o.jsx)("path", {
                        d: "M5.964 7.404H2.628L2.076 9H0.312L3.324 0.611999H5.28L8.292 9H6.516L5.964 7.404ZM5.508 6.06L4.296 2.556L3.084 6.06H5.508ZM12.0218 2.244C12.5178 2.244 12.9538 2.344 13.3298 2.544C13.7058 2.736 14.0018 2.988 14.2178 3.3V2.352H15.9098V9.048C15.9098 9.664 15.7858 10.212 15.5378 10.692C15.2898 11.18 14.9178 11.564 14.4218 11.844C13.9258 12.132 13.3258 12.276 12.6218 12.276C11.6778 12.276 10.9018 12.056 10.2938 11.616C9.69384 11.176 9.35384 10.576 9.27384 9.816H10.9418C11.0298 10.12 11.2178 10.36 11.5058 10.536C11.8018 10.72 12.1578 10.812 12.5738 10.812C13.0618 10.812 13.4578 10.664 13.7618 10.368C14.0658 10.08 14.2178 9.64 14.2178 9.048V8.016C14.0018 8.328 13.7018 8.588 13.3178 8.796C12.9418 9.004 12.5098 9.108 12.0218 9.108C11.4618 9.108 10.9498 8.964 10.4858 8.676C10.0218 8.388 9.65384 7.984 9.38184 7.464C9.11784 6.936 8.98584 6.332 8.98584 5.652C8.98584 4.98 9.11784 4.384 9.38184 3.864C9.65384 3.344 10.0178 2.944 10.4738 2.664C10.9378 2.384 11.4538 2.244 12.0218 2.244ZM14.2178 5.676C14.2178 5.268 14.1378 4.92 13.9778 4.632C13.8178 4.336 13.6018 4.112 13.3298 3.96C13.0578 3.8 12.7658 3.72 12.4538 3.72C12.1418 3.72 11.8538 3.796 11.5898 3.948C11.3258 4.1 11.1098 4.324 10.9418 4.62C10.7818 4.908 10.7018 5.252 10.7018 5.652C10.7018 6.052 10.7818 6.404 10.9418 6.708C11.1098 7.004 11.3258 7.232 11.5898 7.392C11.8618 7.552 12.1498 7.632 12.4538 7.632C12.7658 7.632 13.0578 7.556 13.3298 7.404C13.6018 7.244 13.8178 7.02 13.9778 6.732C14.1378 6.436 14.2178 6.084 14.2178 5.676Z",
                        fill: "currentColor"
                    })
                })
            }
        },
        63302: (t, e, n) => {
            n.d(e, {
                t: () => x
            });
            var o, r, i = n(34798),
                s = n(27579),
                a = n(13736),
                l = n(18744),
                d = n(36466);
            const c = l.default.div(o || (o = (0, a.Z)(["\n  ", "\n"])), (() => (0, l.css)(r || (r = (0, a.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 5px;\n    flex-wrap: wrap;\n\t\tflex: 1;\n\n    input[type='checkbox'] {\n      display: none;\n\n      &:checked {\n        + label {\n          border-color: var(", ");\n      \t\tcolor: var(", ");\n        }\n      }\n\n      &:disabled {\n        + label {\n          color: var(", ");\n      \t\tborder-color: var(", ");\n        }\n      }\n    }\n\n    label {\n      outline: 0;\n      position: relative;\n      cursor: pointer;\n      user-select: none;\n      border-radius: 5px;\n      padding: 5px 10px;\n      line-height: 1;\n      font-size: 1rem;\n      transition: 0.2s;\n\t\t\tborder: 1px solid var(", ");\n      color: var(", ");\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      &:hover {\n        border-color: var(", ");\n      \tcolor: var(", ");\n      }\n    }\n  "])), d.Dm.primary500, d.Dm.primary500, d.Dm.text900, d.Dm.text900, d.Dm.text700, d.Dm.text500, d.Dm.text100, d.Dm.text100)));
            var h = n(5030);
            const x = t => {
                const {
                    value: e = [],
                    options: n = [],
                    onChange: o,
                    allowMultiple: r = !0,
                    size: a,
                    disabled: l = !1,
                    buttonStyle: d = {},
                    style: x = {}
                } = t;
                return a && (d.width = "".concat(a, "px"), d.height = "".concat(a, "px"), d.padding = "0px"), null !== n && void 0 !== n && n.length ? (0, h.jsx)(c, {
                    className: (0, s.N9)("toggle-group"),
                    style: x,
                    children: n.map((t => {
                        const n = "option_".concat((0, i.Z)()),
                            s = (e || []).includes(t.value);
                        return (0, h.jsxs)("span", {
                            children: [(0, h.jsx)("input", {
                                type: "checkbox",
                                id: n,
                                onChange: () => {
                                    ! function(t) {
                                        const n = e || [],
                                            i = n.indexOf(t);
                                        let s = [];
                                        if (i < 0) return s = r ? [...n, t] : [t], void o(s ? [...s] : []);
                                        s = [...e], s.splice(i, 1), o(s ? [...s] : [])
                                    }(t.value)
                                },
                                checked: s,
                                disabled: t.disabled || l
                            }), (0, h.jsx)("label", {
                                htmlFor: n,
                                title: t.tooltip || (s ? "Remove" : "Add"),
                                style: d,
                                children: t.label || t.value
                            })]
                        }, n)
                    }))
                }) : (0, h.jsx)(h.Fragment, {
                    children: "Missing options."
                })
            }
        }
    }
]);