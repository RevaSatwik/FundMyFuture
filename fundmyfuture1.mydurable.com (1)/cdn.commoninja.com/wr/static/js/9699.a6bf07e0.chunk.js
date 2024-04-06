"use strict";
(self.webpackChunk_commonninja_widget_renderer = self.webpackChunk_commonninja_widget_renderer || []).push([
    [9699, 6016], {
        48075: (t, e, n) => {
            n.r(e), n.d(e, {
                SSRWrapper: () => It,
                appConfig: () => Et,
                appMeta: () => Tt,
                defaultData: () => jt
            });
            var o = n(35139),
                a = n(55923),
                i = n(71792),
                r = n(59046),
                s = n(56926),
                l = n(96315),
                c = n(38242),
                d = n(67484),
                u = n(84114),
                p = n(77647),
                g = n(80732),
                h = n(1130),
                m = n(4591),
                x = n(66952),
                A = n(74092),
                b = n(72758),
                f = n(63177),
                v = n(97682),
                C = n(94436),
                y = n(56699),
                w = n(46418),
                j = n(34798),
                E = n(93343),
                T = n(97772),
                I = n(99730),
                S = n(25885),
                P = n(25278),
                N = n(12084),
                k = n(7055),
                B = n(48921),
                R = n(23027),
                z = n(30381),
                D = n(74691),
                L = n(29989),
                _ = n(67779),
                M = n(7307),
                H = n(38803),
                O = n(42705),
                J = n(48730),
                Y = n.n(J),
                U = n(53617),
                V = n(78028);
            const G = n.p + "static/media/telegram_background.4d7abe95f4ecc26deccf.png",
                Q = n.p + "static/media/whatsapp_background.bded4f44087fb4e89252.png",
                W = ["whatsapp-button", "telegram-button", "messenger-button"];

            function K(t) {
                const e = {
                    fontId: "default",
                    layoutId: "default",
                    customCSS: "",
                    showCloseButton: !0,
                    button: {
                        fontSize: 16
                    },
                    buttonIcon: {
                        fontSize: 30,
                        color: "#fff"
                    },
                    messageContact: {
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#999"
                    },
                    messageTimestamp: {
                        fontSize: 12
                    },
                    message: {
                        fontSize: 14,
                        fontWeight: 400,
                        color: "#555"
                    },
                    headerAvatar: {
                        width: 56
                    },
                    footerButton: {
                        fontSize: 14
                    },
                    suggestion: {
                        borderWidth: 0,
                        borderColor: "#C7C7C7"
                    }
                };
                return "whatsapp-button" === t ? { ...e,
                    button: { ...e.button,
                        backgroundColor: "#4fc65a",
                        color: "#fff"
                    },
                    header: {
                        backgroundColor: "#095e54"
                    },
                    headerContact: {
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 700
                    },
                    headerStatus: {
                        color: "#fff",
                        fontSize: 12
                    },
                    closeButton: {
                        color: "#fff"
                    },
                    footer: {
                        backgroundColor: "#fff"
                    },
                    footerButton: { ...e.footerButton,
                        backgroundColor: "#4fc65a",
                        color: "#fff"
                    }
                } : "telegram-button" === t ? { ...e,
                    button: { ...e.button,
                        backgroundColor: "#0088cc",
                        color: "#fff"
                    },
                    header: {
                        backgroundColor: "#08c"
                    },
                    headerContact: {
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 700
                    },
                    headerStatus: {
                        color: "#fff",
                        fontSize: 12
                    },
                    closeButton: {
                        color: "#fff"
                    },
                    footer: {
                        backgroundColor: "#fff"
                    },
                    footerButton: { ...e.footerButton,
                        backgroundColor: "#0088cc",
                        color: "#fff"
                    }
                } : "messenger-button" === t ? { ...e,
                    body: {
                        backgroundColor: "#fff"
                    },
                    button: { ...e.button,
                        backgroundColor: "#0088cc",
                        color: "#fff"
                    },
                    header: {
                        backgroundColor: "#FAFAFA"
                    },
                    headerContact: {
                        color: "#3C4047",
                        fontSize: 16,
                        fontWeight: 700
                    },
                    headerStatus: {
                        color: "#3C4047",
                        fontSize: 12
                    },
                    closeButton: {
                        color: "#3C4047"
                    },
                    footer: {
                        backgroundColor: "#fff"
                    },
                    footerButton: { ...e.footerButton,
                        backgroundColor: "#0088cc",
                        color: "#fff"
                    }
                } : e
            }
            const Z = t => {
                    return [{
                        value: t.split("-")[0],
                        label: (e = t.split("-")[0], e[0].toUpperCase() + e.slice(1))
                    }, {
                        label: "Bell",
                        value: "notificationsactive"
                    }, {
                        label: "Help",
                        value: "helpoutline"
                    }, {
                        label: "Face",
                        value: "face"
                    }, {
                        label: "Email",
                        value: "email"
                    }, {
                        label: "Person",
                        value: "personpin"
                    }];
                    var e
                },
                F = t => (t.split("-") || []).map((t => t[0].toUpperCase() + t.slice(1))).join(" "),
                X = "data:image/png;base64,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";
            var q = n(19039),
                $ = n(5030);
            let tt = function(t) {
                return t.CHAT_OPEN = "chat-open", t.CHAT_CLOSE = "chat-close", t.CHAT_BUTTON_CLICK = "button-click", t.SUGGESTION_CLICK = "suggestion-click", t
            }({});
            const et = () => {
                const t = [{
                    group: "analytics",
                    props: {
                        fields: [{
                            name: tt.CHAT_OPEN,
                            label: "Chat Open"
                        }, {
                            name: tt.CHAT_CLOSE,
                            label: "Chat Close"
                        }, {
                            name: tt.CHAT_BUTTON_CLICK,
                            label: "Chat Button Click"
                        }, {
                            name: tt.SUGGESTION_CLICK,
                            label: "Chat Suggestion Click"
                        }]
                    }
                }];
                return (0, $.jsx)(q.B, {
                    integrations: t
                })
            };

            function nt(t, e) {
                var n, o, a, i, r, s, l, c, d;
                const u = { ...t
                };
                return t.mainButtonBackgroundColor && "undefined" === typeof(null === (n = u.button) || void 0 === n ? void 0 : n.backgroundColor) && (u.button = { ...u.button,
                    backgroundColor: t.mainButtonBackgroundColor
                }), t.mainButtonColor && "undefined" === typeof(null === (o = u.button) || void 0 === o ? void 0 : o.color) && (u.button = { ...u.button,
                    color: t.mainButtonColor
                }), t.bodyBackground && (u.body = { ...u.body,
                    ...t.bodyBackground
                }), t.bodyBackgroundColor && "undefined" === typeof(null === (a = u.body) || void 0 === a ? void 0 : a.backgroundColor) && (u.body = { ...u.body,
                    backgroundColor: t.bodyBackgroundColor
                }), t.headerBackgroundColor && "undefined" === typeof(null === (i = u.header) || void 0 === i ? void 0 : i.backgroundColor) && (u.header = { ...u.header,
                    backgroundColor: t.headerBackgroundColor
                }), t.headerTextColor && "undefined" === typeof(null === (r = u.header) || void 0 === r ? void 0 : r.color) && (u.header = { ...u.header,
                    color: t.headerTextColor
                }), t.headerTextColor && "undefined" === typeof(null === (s = u.closeButton) || void 0 === s ? void 0 : s.color) && (u.closeButton = { ...u.closeButton,
                    color: t.headerTextColor
                }), t.footerBackgroundColor && "undefined" === typeof(null === (l = u.footer) || void 0 === l ? void 0 : l.backgroundColor) && (u.footer = { ...u.footer,
                    backgroundColor: t.footerBackgroundColor
                }), t.footerButtonColor && "undefined" === typeof(null === (c = u.footerButton) || void 0 === c ? void 0 : c.color) && (u.footerButton = { ...u.footerButton,
                    color: t.footerButtonColor
                }), t.footerTextColor && "undefined" === typeof(null === (d = u.footer) || void 0 === d ? void 0 : d.color) && (u.footer = { ...u.footer,
                    color: t.footerTextColor
                }), u
            }
            var ot, at = n(13736);
            const it = n(18744).default.div(ot || (ot = (0, at.Z)(["\n\tposition: relative;\n\tdisplay: block;\n\tmax-width: 100%;\n\twidth: 370px;\n\theight: auto;\n\tpadding-bottom: 95px;\n\n\t&.rtl {\n\t\tdirection: rtl;\n\t\ttext-align: right;\n\n\t\t.chat-icon {\n\t\t\t.chat-icon-text {\n\t\t\t\tpadding-right: 0;\n\t\t\t\tpadding-left: 7px;\n\t\t\t}\n\t\t}\n\n\t\t.header-container {\n\t\t\t.close-icon {\n\t\t\t\tright: auto;\n\t\t\t\tleft: 15px;\n\t\t\t}\n\t\t}\n\n\t\t.body-container {\n\t\t\t.inner-chat-container {\n\t\t\t\tpadding-right: 10px;\n\t\t\t}\n\n\t\t\t.inner-chat-message {\n\t\t\t\trotate: 130deg;\n\t\t\t\ttranslate: -14px -2px;\n\t\t\t}\n\t\t}\n\n\t\t.suggestions {\n\t\t\tpadding: 0 35px 20px 50px;\n\t\t}\n\t}\n\n\t&.left-pos {\n\t\t.chat-icon {\n\t\t\tright: auto;\n\t\t\tleft: 20px;\n\n\t\t\t.commonninja-ribbon {\n\t\t\t\tright: auto;\n\t\t\t\tleft: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.component-container {\n\t\t\tmargin-right: 0;\n\t\t\tmargin-left: 20px;\n\t\t}\n\t}\n\n\t&.opened {\n\t\t&.revealed {\n\t\t\t.component-container {\n\t\t\t\topacity: 1;\n\t\t\t\tpointer-events: all;\n\t\t\t}\n\t\t}\n\t}\n\n\t.component-container {\n\t\twidth: 350px;\n\t\tmax-width: 100%;\n\t\theight: fit-content;\n\t\tz-index: 1;\n\t\tbox-shadow: -1px 4px 11px -4px rgba(0, 0, 0, 0.25);\n\t\tborder-radius: 15px;\n\t\topacity: 0;\n\t\tmargin-right: 20px;\n\t\ttransition: opacity 0.2s;\n\t\tposition: relative;\n\t\tpointer-events: none;\n\t\ttext-align: left;\n\t\tposition: absolute;\n\t\tbottom: var(--size);\n\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t}\n\t}\n\n\t.header-container {\n\t\twidth: 100%;\n\t\theight: 80px;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tpadding: 0 20px;\n\t\tgap: 15px;\n\t\tborder-top-left-radius: 15px;\n\t\tborder-top-right-radius: 15px;\n\n\t\t.header-text {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: flex-start;\n\t\t\tline-height: 1.5;\n\t\t}\n\n\t\t.close-icon {\n\t\t\tposition: absolute;\n\t\t\ttop: 15px;\n\t\t\tright: 15px;\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n\n\t.body-container {\n\t\twidth: 100%;\n\t\theight: fit-content;\n\t\tbackground-size: cover;\n\t\tmin-height: 160px;\n\t\tmax-height: 40vh;\n\t\toverflow: hidden;\n\n\t\t&:hover {\n\t\t\toverflow: auto;\n\t\t}\n\n\t\t.inner-chat-container {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tpadding: 20px;\n\t\t\ttransition: all 0.2s ease;\n\t\t\topacity: 0;\n\t\t\ttransform: translateY(10px);\n\n\t\t\t&.reveal {\n\t\t\t\topacity: 1;\n\t\t\t\ttransform: translateY(0);\n\t\t\t}\n\t\t}\n\n\t\t.inner-chat-message {\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\tborder-left: 12px solid transparent;\n\t\t\tborder-right: 13px solid transparent;\n\t\t\tborder-top: 14px solid var(--border-color, #fff);\n\t\t\tborder-radius: 5px;\n\t\t}\n\n\t\t.typing-container .inner-chat-message-text {\n\t\t\twidth: auto;\n\t\t}\n\n\t\t.inner-chat-message-text {\n\t\t\tmargin-bottom: 30px;\n\t\t\tmargin-left: -15px;\n\t\t\tpadding: 10px;\n\t\t\twidth: 250px;\n\t\t\theight: fit-content;\n\t\t\tbackground-color: white;\n\t\t\tborder-radius: 10px;\n\t\t\toverflow: hidden;\n\t\t\tline-height: 1.5;\n\n\t\t\t.time-text {\n\t\t\t\tfloat: right;\n\t\t\t\tcolor: gray;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\n\t\t\tp {\n\t\t\t\tmargin: 0;\n\t\t\t\tcolor: inherit;\n\t\t\t\tfont-size: inherit;\n\t\t\t}\n\n\t\t\ta {\n\t\t\t\tcolor: inherit;\n\t\t\t\tfont-size: inherit;\n\t\t\t}\n\t\t}\n\t}\n\n\t.typing {\n\t\t.typing-dot {\n\t\t\tfloat: left;\n\t\t\twidth: 8px;\n\t\t\theight: 8px;\n\t\t\tmargin: 0 4px;\n\t\t\tbackground: #8d8c91;\n\t\t\tborder-radius: 50%;\n\t\t\topacity: 0;\n\t\t\tanimation: loadingFade 1s infinite;\n\t\t}\n\n\t\t.typing-dot:nth-child(1) {\n\t\t\tanimation-delay: 0s;\n\t\t}\n\n\t\t.typing-dot:nth-child(2) {\n\t\t\tanimation-delay: 0.2s;\n\t\t}\n\n\t\t.typing-dot:nth-child(3) {\n\t\t\tanimation-delay: 0.4s;\n\t\t}\n\n\t\t@keyframes loadingFade {\n\t\t\t0% {\n\t\t\t\topacity: 0.3;\n\t\t\t}\n\t\t\t50% {\n\t\t\t\topacity: 0.8;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 0.3;\n\t\t\t}\n\t\t}\n\t}\n\n\t.suggestions {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tgap: 8px;\n\t\talign-items: center;\n\t\tjustify-content: flex-start;\n\t\tflex-wrap: wrap;\n\t\tpadding: 0 50px 20px 30px;\n\t\tmargin-top: -40px;\n\t\ttransition: all 0.2s ease;\n\t\ttransition-delay: 0.4s;\n\t\topacity: 0;\n\t\ttransform: translateY(10px);\n\n\t\t&.reveal {\n\t\t\topacity: 1;\n\t\t\ttransform: translateY(0);\n\t\t}\n\n\t\t.suggestion {\n\t\t\tdisplay: inline-flex;\n\t\t\tgap: 7px;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-start;\n\t\t\tfont-size: 12px;\n\t\t\tborder: 0px solid transparent;\n\t\t\tborder-radius: 50em;\n\t\t\tpadding: 5px 12px;\n\t\t\tbackground-color: #fff;\n\t\t\tcursor: pointer;\n\n\t\t\t.suggestion-media {\n\t\t\t\tmargin-left: -3px;\n\t\t\t}\n\n\t\t\timg {\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tobject-fit: cover;\n\t\t\t}\n\t\t}\n\t}\n\n\t.footer-container {\n\t\twidth: 100%;\n\t\theight: 70px;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tborder-bottom-left-radius: 15px;\n\t\tborder-bottom-right-radius: 15px;\n\n\t\t.start-chat-button {\n\t\t\tcursor: pointer;\n\t\t\twidth: 300px;\n\t\t\tborder-radius: 20px;\n\t\t\tborder: 0px solid;\n\t\t\tpadding: 10px;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tgap: 7px;\n\t\t\ttransition: all 0.2s ease;\n\t\t\tfont-size: 14px;\n\n\t\t\t&:hover {\n\t\t\t\tfilter: brightness(1.1);\n\t\t\t}\n\n\t\t\t&:active {\n\t\t\t\tfilter: brightness(0.9);\n\t\t\t}\n\t\t}\n\t}\n\n\t&.messenger-button {\n\t\t.component-container {\n\t\t\t.body-container {\n\t\t\t\t.inner-chat-container {\n\t\t\t\t\tpadding: 0;\n\n\t\t\t\t\t&.typing-container {\n\t\t\t\t\t\tpadding: 0 30px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.suggestions {\n\t\t\t\tmargin-top: -10px;\n\t\t\t\tpadding-left: 65px;\n\t\t\t\tpadding-right: 50px;\n\t\t\t}\n\n\t\t\t.inner-chat-message {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.inner-chat-message-text {\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t\twidth: 100%;\n\t\t\t\tbackground-color: transparent;\n\t\t\t}\n\n\t\t\t.typing-container {\n\t\t\t\t.inner-chat-message-text {\n\t\t\t\t\tmargin-top: 20px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.time-container {\n\t\t\t\twidth: 100%;\n\n\t\t\t\t.time-text {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\tfont-size: 10px;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tcolor: gray;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\talign-content: center;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.chat-avatar {\n\t\t\t\tmargin-top: 3px;\n\t\t\t}\n\n\t\t\t.chat-container {\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 0 20px;\n\t\t\t\tgap: 15px;\n\n\t\t\t\t.chat-message {\n\t\t\t\t\tcolor: gray;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\twidth: 230px;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: #f1f0f0;\n\t\t\t\t\tborder-radius: 15px;\n\t\t\t\t\tpadding: 10px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.footer-container {\n\t\t\t.start-chat-button {\n\t\t\t\tborder-radius: 10px;\n\t\t\t\tpadding: 8px 30px;\n\t\t\t}\n\t\t}\n\t}\n\n\t.chat-avatar {\n\t\tborder-radius: 50em;\n\t\tposition: relative;\n\n\t\t&:after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tbottom: 2px;\n\t\t\tright: 2px;\n\t\t\twidth: 10px;\n\t\t\theight: 10px;\n\t\t\tborder-radius: 50em;\n\t\t\tbackground-color: #4fc65a;\n\t\t\tborder: 1px solid var(--background-color, #fff);\n\t\t}\n\n\t\timg {\n\t\t\tborder-radius: inherit;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t}\n\t}\n\n\t.chat-icon {\n\t\tmargin: 0;\n\t\tpadding: 10px;\n\t\tborder-radius: 50em;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tgap: 8px;\n\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\n\t\tcursor: pointer;\n\t\tz-index: 3;\n\t\ttransition: filter 0.2s ease;\n\t\tposition: absolute;\n\t\tright: 20px;\n\t\tbottom: 20px;\n\t\tpointer-events: all;\n\n\t\t.chat-icon-text {\n\t\t\tpadding-right: 7px;\n\t\t}\n\n\t\t.chat-icon-media {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t\tmax-height: 100%;\n\t\t}\n\n\t\t.commonninja-ribbon {\n\t\t\tposition: absolute !important;\n\t\t\ttransform: translateY(-50%);\n\t\t\tmax-width: 240px !important;\n\t\t\twidth: 240px;\n\t\t\ttop: 50%;\n\t\t\tmargin-top: 0 !important;\n\t\t\tright: 100%;\n\t\t}\n\n\t\t&:hover {\n\t\t\tfilter: brightness(1.1);\n\t\t}\n\n\t\t&:focus,\n\t\t&:active {\n\t\t\tfilter: brightness(0.9);\n\t\t}\n\t}\n"]))),
                rt = t => ({
                    whatsapp: (0, $.jsx)(O.x, {
                        size: t || 30
                    }),
                    messenger: (0, $.jsx)(D.s, {
                        size: t || 24
                    }),
                    telegram: (0, $.jsx)(_.W, {
                        size: t || 28
                    }),
                    notificationsactive: (0, $.jsx)(R.Z, {
                        size: 24
                    }),
                    helpoutline: (0, $.jsx)(L.M, {
                        size: 24
                    }),
                    face: (0, $.jsx)(B.d, {
                        size: 30
                    }),
                    email: (0, $.jsx)(z.S, {
                        size: 30
                    }),
                    personpin: (0, $.jsx)(H.q, {
                        size: 24
                    })
                }),
                st = () => {
                    var t, e, n, o;
                    const {
                        reportEvent: a
                    } = (0, E.Y)(), {
                        getLocaleValue: i
                    } = (0, T.x)(), r = (0, I.k)(), {
                        mode: s
                    } = (0, S.b)(), {
                        meta: d
                    } = (0, l.M)(), {
                        slug: u
                    } = d, [p] = (0, c.O)(), {
                        settings: {
                            phoneNumber: g,
                            messengerUser: h,
                            telegramAccount: m,
                            mainIcon: x,
                            mainIconPosition: A,
                            initialMessage: b,
                            animationDelayInMs: f = 1e3,
                            mainIconText: v
                        },
                        content: {
                            contactName: C,
                            contactStatus: y,
                            showProfilePicture: w,
                            message: j,
                            showCurrentTime: B,
                            showOpenByDefault: R,
                            buttonClickText: z,
                            showChat: L = !0,
                            profilePicture: H,
                            suggestions: J = []
                        },
                        styles: V
                    } = p, [W, K] = (0, U.useState)(!0), [Z, F] = (0, U.useState)(R || "editor" === s || "gallery" === s), [q, et] = (0, U.useState)(R || "editor" === s || "gallery" === s), [ot, at] = (0, U.useState)(!1), st = (0, U.useRef)(null), {
                        getDeviceStyles: lt
                    } = (0, P.o)(V), ct = nt(lt(!0)), dt = () => {
                        L ? F(!Z) : window.open(pt(), "_blank")
                    }, ut = t => {
                        switch (a(tt.SUGGESTION_CLICK, !0), t.type) {
                            case "email":
                                window.open("mailto:".concat(t.value));
                                break;
                            case "phone":
                                window.open("tel:".concat(t.value));
                                break;
                            case "link":
                                window.open(t.value)
                        }
                    };

                    function pt() {
                        if ("whatsapp-button" === u) {
                            let t = String(g).replace(/ /g, "").replace(/\-/g, "").trim();
                            return t.startsWith("+") && (t = t.slice(1)), "https://api.whatsapp.com/send?phone=".concat(null === g || void 0 === g ? void 0 : g.replace("+", ""), "&text=").concat(encodeURIComponent(i("initialMessage", b) || ""))
                        }
                        if ("messenger-button" === u) {
                            const t = (null === h || void 0 === h ? void 0 : h.replace("https://www.m.me/", "")) || "";
                            return "https://www.m.me/".concat(t)
                        } {
                            const t = (null === m || void 0 === m ? void 0 : m.replace("https://t.me/", "")) || "";
                            return "https://t.me/".concat(t)
                        }
                    }

                    function gt() {
                        var t, e;
                        return (0, $.jsxs)($.Fragment, {
                            children: [W && (0, $.jsxs)("div", {
                                className: Y()("inner-chat-container", "typing-container", {
                                    reveal: W
                                }),
                                children: [(0, $.jsx)("div", {
                                    className: "inner-chat-message"
                                }), (0, $.jsx)("div", {
                                    className: "inner-chat-message-text",
                                    children: (0, $.jsxs)("div", {
                                        className: "typing",
                                        children: [(0, $.jsx)("div", {
                                            className: "typing-dot"
                                        }), (0, $.jsx)("div", {
                                            className: "typing-dot"
                                        }), (0, $.jsx)("div", {
                                            className: "typing-dot"
                                        })]
                                    })
                                })]
                            }), !W && (0, $.jsxs)("div", {
                                className: Y()("inner-chat-container", {
                                    reveal: ot
                                }),
                                children: [(0, $.jsx)("div", {
                                    className: "inner-chat-message",
                                    style: {
                                        "--border-color": (null === (t = ct.messageWrapper) || void 0 === t ? void 0 : t.backgroundColor) || "#fff"
                                    }
                                }), (0, $.jsx)("div", {
                                    className: "inner-chat-message-text",
                                    style: "messenger-button" !== u ? ct.messageWrapper : {},
                                    children: "messenger-button" === u ? (0, $.jsxs)($.Fragment, {
                                        children: [B && (0, $.jsx)("div", {
                                            className: "time-container",
                                            children: (0, $.jsx)("div", {
                                                className: "time-text",
                                                style: ct.messageTimestamp,
                                                children: (new Date).getHours() + ":" + String((new Date).getMinutes()).padStart(2, "0")
                                            })
                                        }), (0, $.jsxs)("div", {
                                            className: "chat-container",
                                            children: [(0, $.jsx)("div", {
                                                className: "chat-avatar",
                                                title: "Help",
                                                style: {
                                                    width: "24px",
                                                    height: "24px"
                                                },
                                                children: (0, $.jsx)("img", {
                                                    src: ("undefined" !== typeof H ? H : null === (e = V.background) || void 0 === e ? void 0 : e.backgroundImage) || X,
                                                    alt: "Help"
                                                })
                                            }), (0, $.jsx)("div", {
                                                className: "chat-message",
                                                dangerouslySetInnerHTML: {
                                                    __html: i("message", j)
                                                },
                                                style: { ...ct.messageWrapper,
                                                    ...ct.message
                                                }
                                            })]
                                        })]
                                    }) : (0, $.jsxs)($.Fragment, {
                                        children: [(0, $.jsx)("div", {
                                            style: ct.messageContact,
                                            children: i("contactName", C)
                                        }), (0, $.jsx)("div", {
                                            style: ct.message,
                                            dangerouslySetInnerHTML: {
                                                __html: i("message", j)
                                            }
                                        }), B && (0, $.jsx)("div", {
                                            className: "time-text",
                                            style: ct.messageTimestamp,
                                            children: (new Date).getHours() + ":" + String((new Date).getMinutes()).padStart(2, "0")
                                        })]
                                    })
                                })]
                            })]
                        })
                    }(0, U.useEffect)((() => {
                        W && !ot || !W && ot || window.setTimeout((() => {
                            at(!ot)
                        }), 100)
                    }), [W]), (0, U.useEffect)((() => {
                        Z ? window.setTimeout((() => {
                            et(Z), window.setTimeout((() => {
                                K(!1)
                            }), f)
                        }), 200) : (et(Z), window.setTimeout((() => {
                            K(!0)
                        }), 200)), a(Z ? tt.CHAT_OPEN : tt.CHAT_CLOSE, !0)
                    }), [Z]);
                    const ht = rt(null === (t = ct.buttonIcon) || void 0 === t ? void 0 : t.fontSize)[x.value];
                    return (0, $.jsxs)(it, {
                        className: Y()("chat-button-container", u, "right" === A.value ? "right-pos" : "left-pos", {
                            opened: L && Z,
                            revealed: q,
                            rtl: "rtl" === ct.direction
                        }),
                        ref: st,
                        style: {
                            "--size": "".concat((null === (e = ct.button) || void 0 === e ? void 0 : e.width) || 40, "px")
                        },
                        children: [function() {
                            var t, e, n, o, r, s, l, c, d, p;
                            const g = Number((null === (t = ct.buttonIcon) || void 0 === t ? void 0 : t.fontSize) || 40);
                            return (0, $.jsxs)("div", {
                                className: "component-container",
                                style: {
                                    bottom: g + 60
                                },
                                children: [(0, $.jsxs)("div", {
                                    className: "header-container",
                                    style: { ...ct.header,
                                        "--background-color": (null === (e = ct.header) || void 0 === e ? void 0 : e.backgroundColor) || "#fff"
                                    },
                                    children: [w && (0, $.jsx)("div", {
                                        className: "chat-avatar",
                                        title: "Help",
                                        style: { ...ct.headerAvatar,
                                            width: (null === (n = ct.headerAvatar) || void 0 === n ? void 0 : n.width) || 56,
                                            height: (null === (o = ct.headerAvatar) || void 0 === o ? void 0 : o.width) || 56
                                        },
                                        children: (0, $.jsx)("img", {
                                            src: ("undefined" !== typeof H ? H : null === (r = V.background) || void 0 === r ? void 0 : r.backgroundImage) || X,
                                            alt: "Help"
                                        })
                                    }), (0, $.jsxs)("div", {
                                        className: "header-text",
                                        children: [(0, $.jsx)("div", {
                                            style: ct.headerContact,
                                            children: i("contactName", C)
                                        }), (0, $.jsx)("div", {
                                            style: ct.headerStatus,
                                            children: i("contactStatus", y)
                                        })]
                                    }), ct.showCloseButton && (0, $.jsx)(M.a, {
                                        className: "close-icon",
                                        size: (null === (s = ct.closeButton) || void 0 === s ? void 0 : s.fontSize) || 18,
                                        style: ct.closeButton,
                                        onClick: () => dt()
                                    })]
                                }), (0, $.jsxs)("div", {
                                    className: "body-container background-image",
                                    style: { ...ct.body,
                                        backgroundImage: (null === (l = ct.body) || void 0 === l ? void 0 : l.backgroundImage) || (null !== (c = ct.body) && void 0 !== c && c.backgroundColor ? void 0 : 'url("'.concat((m = u, "whatsapp-button" === m ? Q : "telegram-button" === m ? G : "messenger-button" === m ? "" : Q), '")'))
                                    },
                                    children: [gt(), null !== J && void 0 !== J && J.length ? (0, $.jsx)("div", {
                                        className: Y()("suggestions", {
                                            reveal: ot && !W
                                        }),
                                        style: ct.suggestionWrapper,
                                        children: J.map((t => (0, $.jsxs)("span", {
                                            className: "suggestion",
                                            onClick: () => {
                                                ut(t)
                                            },
                                            style: ct.suggestion,
                                            children: [t.media && (0, $.jsx)(N.s, {
                                                className: "suggestion-media",
                                                mediaUrl: t.media,
                                                style: ct.suggestionMedia
                                            }), (0, $.jsx)("span", {
                                                className: "suggested-label",
                                                children: t.label
                                            })]
                                        }, "sug-".concat(t.id))))
                                    }) : (0, $.jsx)($.Fragment, {})]
                                }), (0, $.jsx)("div", {
                                    className: "footer-container",
                                    style: ct.footer,
                                    children: (0, $.jsxs)("a", {
                                        className: "start-chat-button",
                                        style: ct.footerButton,
                                        href: pt(),
                                        target: "_blank",
                                        rel: "noreferrer noopener",
                                        onClick: () => a(tt.CHAT_BUTTON_CLICK, !0),
                                        children: [(h = {
                                            style: ct.footerButtonIcon,
                                            size: null !== (d = ct.footerButton) && void 0 !== d && d.fontSize ? 1.2 * Number(null === (p = ct.footerButton) || void 0 === p ? void 0 : p.fontSize) : "20px"
                                        }, "whatsapp-button" === u ? (0, $.jsx)(O.x, { ...h
                                        }) : "telegram-button" === u ? (0, $.jsx)(_.W, { ...h
                                        }) : (0, $.jsx)(D.s, { ...h
                                        })), i("buttonClickText", z)]
                                    })
                                })]
                            });
                            var h, m
                        }(), (0, $.jsxs)("div", {
                            className: "chat-icon",
                            style: ct.button,
                            "aria-label": "edit",
                            onClick: () => dt(),
                            children: [(0, $.jsx)("span", {
                                className: "chat-icon-media",
                                style: { ...ct.buttonIcon,
                                    height: (null === (n = ct.buttonIcon) || void 0 === n ? void 0 : n.fontSize) || 30,
                                    width: null === (o = ct.buttonIcon) || void 0 === o ? void 0 : o.fontSize
                                },
                                children: ht || (0, $.jsx)(N.s, {
                                    mediaUrl: x.value,
                                    alt: "Open Chat",
                                    style: {
                                        fontSize: "inherit"
                                    }
                                })
                            }), v && (0, $.jsx)("span", {
                                className: "chat-icon-text",
                                children: i("mainIconText", v)
                            }), "viewer" === s && !r.getFeatureValue("adsRemoval") && (0, $.jsx)(k.CNWatermark, {
                                meta: d
                            })]
                        })]
                    })
                },
                lt = () => {
                    const {
                        meta: {
                            slug: t
                        }
                    } = (0, l.M)(), [e, n] = (0, c.O)(), {
                        content: o,
                        styles: a,
                        settings: i
                    } = e, r = Z(t);

                    function s(t, e) {
                        n({
                            content: { ...o,
                                [t]: e
                            }
                        })
                    }

                    function E(t, e) {
                        n({
                            settings: { ...i,
                                [t]: e
                            }
                        })
                    }

                    function T(t, e) {
                        var n;
                        s("suggestions", null === (n = o.suggestions) || void 0 === n ? void 0 : n.map((n => n.id === t ? { ...n,
                            ...e
                        } : n)))
                    }

                    function I(t) {
                        let e = "Phone Number";
                        return "link" === t.type ? e = "Link" : "email" === t.type && (e = "Email"), (0, $.jsxs)($.Fragment, {
                            children: [(0, u.J)({
                                label: "Type",
                                inputElm: (0, $.jsx)(w.P, {
                                    value: t.type,
                                    options: [{
                                        label: "Link",
                                        value: "link"
                                    }, {
                                        label: "Phone",
                                        value: "phone"
                                    }, {
                                        label: "Email",
                                        value: "email"
                                    }],
                                    onChange: e => T(t.id, {
                                        type: e,
                                        value: ""
                                    })
                                })
                            }), (0, u.J)({
                                label: "Media",
                                inputElm: (0, $.jsx)(p.D, {
                                    mediaManagerProps: {
                                        uploadIsAvailable: !0,
                                        submitCallback: e => {
                                            T(t.id, {
                                                media: e[0] || ""
                                            })
                                        },
                                        assetType: "image",
                                        enableIconTab: !0,
                                        defaultTab: "icon"
                                    },
                                    children: (0, $.jsx)(g.R, {
                                        mediaUrl: t.media,
                                        size: {
                                            width: 50,
                                            height: 50
                                        },
                                        onRemove: () => {
                                            T(t.id, {
                                                media: ""
                                            })
                                        }
                                    })
                                })
                            }), (0, u.J)({
                                label: "Label",
                                flow: "column",
                                inputElm: (0, $.jsx)(d.hJ, {
                                    localeKey: "suggestion-".concat(t.id, "-label"),
                                    type: "text",
                                    value: t.label,
                                    placeholder: "Enter text...",
                                    onChange: e => T(t.id, {
                                        label: e.target.value
                                    })
                                })
                            }), (0, u.J)({
                                label: e,
                                flow: "column",
                                inputElm: (0, $.jsx)(d.hJ, {
                                    localeKey: "suggestion-".concat(t.id, "-value"),
                                    type: "text",
                                    value: t.value,
                                    placeholder: "Enter text...",
                                    onChange: e => T(t.id, {
                                        value: e.target.value
                                    })
                                })
                            })]
                        })
                    }
                    return (0, $.jsxs)($.Fragment, {
                        children: [(0, $.jsxs)(m.s, {
                            children: [(0, $.jsx)(x.S, {
                                children: "Contact Info"
                            }), (0, $.jsxs)(A.p, {
                                flow: "row",
                                children: [(0, $.jsxs)(b.l, {
                                    children: [" ", {
                                        "whatsapp-button": {
                                            user: "Phone number",
                                            userPlaceholder: "Enter phone number...",
                                            userSettingName: "phoneNumber"
                                        },
                                        "telegram-button": {
                                            user: "Telegram account",
                                            userPlaceholder: "Enter Telegram account",
                                            userSettingName: "telegramAccount"
                                        },
                                        "messenger-button": {
                                            user: "Messenger user",
                                            userPlaceholder: "Enter Messenger user...",
                                            userSettingName: "messengerUser"
                                        }
                                    }[t].user, " "]
                                }), (0, $.jsx)(f.y, {
                                    children: (0, $.jsx)(v.I, {
                                        type: "text",
                                        value: i[{
                                            "whatsapp-button": {
                                                user: "Phone number",
                                                userPlaceholder: "Enter phone number...",
                                                userSettingName: "phoneNumber"
                                            },
                                            "telegram-button": {
                                                user: "Telegram account",
                                                userPlaceholder: "Enter Telegram account",
                                                userSettingName: "telegramAccount"
                                            },
                                            "messenger-button": {
                                                user: "Messenger user",
                                                userPlaceholder: "Enter Messenger user...",
                                                userSettingName: "messengerUser"
                                            }
                                        }[t].userSettingName],
                                        placeholder: {
                                            "whatsapp-button": {
                                                user: "Phone number",
                                                userPlaceholder: "Enter phone number...",
                                                userSettingName: "phoneNumber"
                                            },
                                            "telegram-button": {
                                                user: "Telegram account",
                                                userPlaceholder: "Enter Telegram account",
                                                userSettingName: "telegramAccount"
                                            },
                                            "messenger-button": {
                                                user: "Messenger user",
                                                userPlaceholder: "Enter Messenger user...",
                                                userSettingName: "messengerUser"
                                            }
                                        }[t].userPlaceholder,
                                        onChange: e => {
                                            n({
                                                settings: { ...i,
                                                    [{
                                                        "whatsapp-button": {
                                                            user: "Phone number",
                                                            userPlaceholder: "Enter phone number...",
                                                            userSettingName: "phoneNumber"
                                                        },
                                                        "telegram-button": {
                                                            user: "Telegram account",
                                                            userPlaceholder: "Enter Telegram account",
                                                            userSettingName: "telegramAccount"
                                                        },
                                                        "messenger-button": {
                                                            user: "Messenger user",
                                                            userPlaceholder: "Enter Messenger user...",
                                                            userSettingName: "messengerUser"
                                                        }
                                                    }[t].userSettingName]: e.target.value
                                                }
                                            })
                                        }
                                    })
                                })]
                            }), "whatsapp-button" === t && (0, $.jsxs)(A.p, {
                                flow: "row",
                                children: [(0, $.jsxs)(b.l, {
                                    children: ["Initial Message", (0, $.jsx)(C.u, {
                                        content: "When the chat opens, this message will appear as default for the user to start the chat."
                                    })]
                                }), (0, $.jsx)(f.y, {
                                    children: (0, $.jsx)(d.hJ, {
                                        localeKey: "initialMessage",
                                        type: "text",
                                        value: i.initialMessage || "",
                                        placeholder: "Enter message...",
                                        onChange: t => n({
                                            settings: { ...i,
                                                initialMessage: t.target.value
                                            }
                                        })
                                    })
                                })]
                            })]
                        }), (0, $.jsxs)(m.s, {
                            children: [(0, $.jsx)(x.S, {
                                children: "Button"
                            }), (0, u.J)({
                                label: "Icon",
                                inputElm: (0, $.jsx)(p.D, {
                                    mediaManagerProps: {
                                        enableIconTab: !0,
                                        uploadIsAvailable: !0,
                                        submitCallback: t => {
                                            const e = t[0] || "";
                                            E("mainIcon", e ? {
                                                value: e,
                                                label: "custom"
                                            } : r[0])
                                        },
                                        assetType: "image",
                                        defaultTab: "icon"
                                    },
                                    children: (0, $.jsx)(g.R, {
                                        mediaUrl: rt()[i.mainIcon.value] ? void 0 : i.mainIcon.value,
                                        size: {
                                            width: 50,
                                            height: 50
                                        },
                                        onRemove: () => {
                                            E("mainIcon", r[0])
                                        }
                                    })
                                })
                            }), (0, u.J)({
                                label: "Text",
                                inputElm: (0, $.jsx)(d.hJ, {
                                    localeKey: "mainIconText",
                                    type: "text",
                                    value: i.mainIconText,
                                    placeholder: "Enter text...",
                                    onChange: t => {
                                        E("mainIconText", t.target.value)
                                    }
                                })
                            })]
                        }), function() {
                            var t;
                            return (0, $.jsxs)(m.s, {
                                children: [(0, $.jsx)(x.S, {
                                    children: "Chat Header"
                                }), (0, $.jsxs)(A.p, {
                                    flow: "row",
                                    children: [(0, $.jsx)(b.l, {
                                        children: "Contact Name "
                                    }), (0, $.jsx)(f.y, {
                                        children: (0, $.jsx)(d.hJ, {
                                            localeKey: "contactName",
                                            type: "text",
                                            value: o.contactName,
                                            placeholder: "Enter text...",
                                            onChange: t => s("contactName", t.target.value)
                                        })
                                    })]
                                }), (0, $.jsxs)(A.p, {
                                    flow: "row",
                                    children: [(0, $.jsx)(b.l, {
                                        children: "Contact Status"
                                    }), (0, $.jsx)(f.y, {
                                        children: (0, $.jsx)(d.hJ, {
                                            localeKey: "contactStatus",
                                            type: "text",
                                            value: o.contactStatus,
                                            placeholder: "Enter text...",
                                            onChange: t => s("contactStatus", t.target.value)
                                        })
                                    })]
                                }), (0, $.jsxs)(A.p, {
                                    flow: "row",
                                    children: [(0, $.jsx)(b.l, {
                                        children: "Contact Image"
                                    }), (0, $.jsx)(f.y, {
                                        children: (0, $.jsx)(p.D, {
                                            mediaManagerProps: {
                                                uploadIsAvailable: !0,
                                                submitCallback: t => {
                                                    s("profilePicture", t[0] || "")
                                                },
                                                assetType: "image"
                                            },
                                            children: (0, $.jsx)(y.U, {
                                                size: {
                                                    width: 100,
                                                    height: 100
                                                },
                                                imageUrl: "undefined" !== typeof o.profilePicture ? o.profilePicture : null === (t = a.background) || void 0 === t ? void 0 : t.backgroundImage,
                                                onRemove: () => {
                                                    s("profilePicture", "")
                                                }
                                            })
                                        })
                                    })]
                                })]
                            })
                        }(), (0, $.jsxs)(m.s, {
                            children: [(0, $.jsx)(x.S, {
                                children: "Chat Body"
                            }), (0, $.jsxs)(A.p, {
                                flow: "column",
                                children: [(0, $.jsx)(b.l, {
                                    children: "Automatic First Message"
                                }), (0, $.jsx)(f.y, {
                                    children: (0, $.jsx)(d.UL, {
                                        localeKey: "message",
                                        html: o.message,
                                        onChange: t => s("message", t)
                                    })
                                })]
                            })]
                        }), (0, $.jsxs)(m.s, {
                            children: [(0, $.jsx)(x.S, {
                                children: "Chat Footer"
                            }), (0, $.jsxs)(A.p, {
                                flow: "row",
                                children: [(0, $.jsx)(b.l, {
                                    children: "Button Text "
                                }), (0, $.jsx)(f.y, {
                                    children: (0, $.jsx)(d.hJ, {
                                        localeKey: "buttonClickText",
                                        type: "text",
                                        value: o.buttonClickText,
                                        placeholder: "Enter text...",
                                        onChange: t => s("buttonClickText", t.target.value)
                                    })
                                })]
                            })]
                        }), (0, $.jsxs)(m.s, {
                            children: [(0, $.jsx)(x.S, {
                                children: "Suggestions"
                            }), (0, $.jsx)(h.u, {
                                items: o.suggestions || [],
                                itemRenderer: I,
                                titleRenderer: t => t.label,
                                addItemText: "Add a Suggestion",
                                itemsText: "suggestions",
                                newItemGenerator: () => ({
                                    id: (0, j.Z)(),
                                    type: "link",
                                    label: "Suggestion",
                                    value: "",
                                    media: ""
                                }),
                                onUpdate: t => s("suggestions", t),
                                minItems: 0,
                                maxItems: 5,
                                searchable: !1,
                                duplicatable: !1
                            })]
                        })]
                    })
                };
            var ct = n(2502);
            const dt = () => {
                const [t, e] = (0, c.O)(), {
                    content: n,
                    styles: o,
                    settings: a
                } = t;

                function i(t, o) {
                    e({
                        content: { ...n,
                            [t]: o
                        }
                    })
                }
                return (0, $.jsxs)($.Fragment, {
                    children: [(0, $.jsxs)(m.s, {
                        children: [(0, $.jsx)(x.S, {
                            children: "Functionality"
                        }), (0, u.J)({
                            label: "Enable Chat",
                            inputElm: (0, $.jsx)(ct.r, {
                                isChecked: !1 !== n.showChat,
                                onChange: () => i("showChat", !n.showChat)
                            })
                        }), !1 !== n.showChat && (0, u.J)({
                            label: "Open Chat by Default",
                            inputElm: (0, $.jsx)(ct.r, {
                                isChecked: n.showOpenByDefault,
                                onChange: () => i("showOpenByDefault", !n.showOpenByDefault)
                            })
                        }), (0, u.J)({
                            label: "Show Message After",
                            inputElm: (0, $.jsxs)($.Fragment, {
                                children: [(0, $.jsx)(v.I, {
                                    type: "number",
                                    className: "small",
                                    min: 0,
                                    placeholder: "Auto",
                                    value: "number" === typeof a.animationDelayInMs ? a.animationDelayInMs / 1e3 : void 0,
                                    onChange: t => {
                                        e({
                                            settings: { ...a,
                                                animationDelayInMs: isNaN(t.target.valueAsNumber) ? void 0 : 1e3 * t.target.valueAsNumber
                                            }
                                        })
                                    }
                                }), "Seconds"]
                            })
                        })]
                    }), (0, $.jsxs)(m.s, {
                        children: [(0, $.jsx)(x.S, {
                            children: "Visibility"
                        }), (0, u.J)({
                            label: "Close Button",
                            inputElm: (0, $.jsx)(ct.r, {
                                isChecked: !!o.showCloseButton,
                                onChange: () => e({
                                    styles: { ...o,
                                        showCloseButton: !o.showCloseButton
                                    }
                                })
                            })
                        }), (0, u.J)({
                            label: "Profile Picture",
                            inputElm: (0, $.jsx)(ct.r, {
                                isChecked: n.showProfilePicture,
                                onChange: () => i("showProfilePicture", !n.showProfilePicture)
                            })
                        }), (0, u.J)({
                            label: "Current Time",
                            inputElm: (0, $.jsx)(ct.r, {
                                isChecked: n.showCurrentTime,
                                onChange: () => i("showCurrentTime", !n.showCurrentTime)
                            })
                        })]
                    })]
                })
            };
            var ut = n(82005),
                pt = n(647),
                gt = n(74774),
                ht = n(28793),
                mt = n(64669),
                xt = n(6246);
            const At = () => {
                const [t, e] = (0, c.O)(), n = (0, pt.j)(), {
                    styles: o,
                    settings: a
                } = t, i = (0, I.k)(), r = (0, gt.J)(), {
                    meta: {
                        slug: s
                    }
                } = (0, l.M)(), {
                    setDeviceStyle: d,
                    getDeviceStyles: p
                } = (0, P.o)(o), g = nt(p(!0));

                function h(t, n) {
                    d(t, n, (() => {
                        e({
                            styles: { ...o,
                                [t]: n
                            }
                        })
                    }))
                }

                function A(t, e) {
                    const n = { ...o[t],
                        ...e
                    };
                    Object.keys(n).forEach((t => {
                        const e = n[t];
                        void 0 !== typeof e && null !== e && "" !== e || delete n[t]
                    })), h(t, n)
                }

                function b(t) {
                    h("fontId", t)
                }

                function f(t) {
                    var e;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fontSize";
                    return (0, $.jsx)(v.I, {
                        type: "number",
                        className: "small",
                        min: 0,
                        placeholder: "Auto",
                        value: null === (e = g[t]) || void 0 === e ? void 0 : e[n],
                        onChange: e => {
                            A(t, { ...g[t],
                                [n]: isNaN(e.target.valueAsNumber) ? void 0 : e.target.valueAsNumber
                            })
                        }
                    })
                }

                function C() {
                    var t;
                    return (0, $.jsxs)(m.s, {
                        children: [(0, $.jsx)(x.S, {
                            children: "Button"
                        }), (0, u.J)({
                            label: "Position",
                            inputElm: (0, $.jsx)(w.P, {
                                onChange: t => function(t, o) {
                                    "undefined" === typeof n.planFeatures[t] || i.getFeatureValue(t) ? e({
                                        settings: { ...a,
                                            [t]: o
                                        }
                                    }) : r("Your current plan doesn't support this feature.")
                                }("mainIconPosition", "left" === t ? {
                                    label: "Left",
                                    value: "left"
                                } : {
                                    label: "Right",
                                    value: "right"
                                }),
                                options: [{
                                    label: "Right",
                                    value: "right"
                                }, {
                                    label: "Left",
                                    value: "left"
                                }],
                                value: a.mainIconPosition.value
                            })
                        }), (0, u.J)({
                            label: "Button Color",
                            inputElm: (0, $.jsx)(mt.J, {
                                cssProps: g.button,
                                onChange: t => A("button", t)
                            })
                        }), (0, u.J)({
                            label: "Icon Color",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("buttonIcon", {
                                    color: t
                                }),
                                selectedColor: null === (t = g.buttonIcon) || void 0 === t ? void 0 : t.color
                            })
                        }), (0, u.J)({
                            label: "Icon Size",
                            inputElm: f("buttonIcon")
                        })]
                    })
                }

                function y() {
                    var t, e, n;
                    return (0, $.jsxs)(m.s, {
                        children: [(0, $.jsx)(x.S, {
                            children: "Chat Header"
                        }), (0, u.J)({
                            label: "Background",
                            inputElm: (0, $.jsx)(mt.J, {
                                cssProps: g.header,
                                onChange: t => A("header", t)
                            })
                        }), (0, u.J)({
                            label: "Contact",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("headerContact", {
                                    color: t
                                }),
                                selectedColor: null === (t = g.headerContact) || void 0 === t ? void 0 : t.color
                            })
                        }), (0, u.J)({
                            label: "Contact Size",
                            inputElm: f("headerContact")
                        }), (0, u.J)({
                            label: "Status",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("headerStatus", {
                                    color: t
                                }),
                                selectedColor: null === (e = g.headerStatus) || void 0 === e ? void 0 : e.color
                            })
                        }), (0, u.J)({
                            label: "Status Size",
                            inputElm: f("headerStatus")
                        }), (0, u.J)({
                            label: "Close Button",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("closeButton", {
                                    color: t
                                }),
                                selectedColor: null === (n = g.closeButton) || void 0 === n ? void 0 : n.color
                            })
                        }), (0, u.J)({
                            label: "Close Button Size",
                            inputElm: f("closeButton")
                        }), (0, u.J)({
                            label: "Profile Picture Size",
                            inputElm: f("headerAvatar", "width")
                        })]
                    })
                }

                function j() {
                    var t, e, n;
                    return (0, $.jsxs)(m.s, {
                        children: [(0, $.jsx)(x.S, {
                            children: "Chat Body"
                        }), (0, u.J)({
                            label: "Background",
                            inputElm: (0, $.jsx)(mt.J, {
                                cssProps: g.body,
                                onChange: t => A("body", t)
                            })
                        }), (0, u.J)({
                            label: "Message",
                            inputElm: (0, $.jsx)(mt.J, {
                                cssProps: g.messageWrapper,
                                onChange: t => A("messageWrapper", t)
                            })
                        }), (0, u.J)({
                            label: "Message Title",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("messageContact", {
                                    color: t
                                }),
                                selectedColor: null === (t = g.messageContact) || void 0 === t ? void 0 : t.color
                            })
                        }), (0, u.J)({
                            label: "Message Title Size",
                            inputElm: f("messageContact")
                        }), (0, u.J)({
                            label: "Message Text",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("message", {
                                    color: t
                                }),
                                selectedColor: null === (e = g.message) || void 0 === e ? void 0 : e.color
                            })
                        }), (0, u.J)({
                            label: "Message Text Size",
                            inputElm: f("message")
                        }), (0, u.J)({
                            label: "Timestamp Text",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("messageTimestamp", {
                                    color: t
                                }),
                                selectedColor: null === (n = g.messageTimestamp) || void 0 === n ? void 0 : n.color
                            })
                        }), (0, u.J)({
                            label: "Timestamp Text Size",
                            inputElm: f("messageTimestamp")
                        })]
                    })
                }

                function E() {
                    var t;
                    return (0, $.jsxs)(m.s, {
                        children: [(0, $.jsx)(x.S, {
                            children: "Chat Footer"
                        }), (0, u.J)({
                            label: "Background",
                            inputElm: (0, $.jsx)(mt.J, {
                                cssProps: g.footer,
                                onChange: t => A("footer", t)
                            })
                        }), (0, u.J)({
                            label: "Button",
                            inputElm: (0, $.jsx)(mt.J, {
                                cssProps: g.footerButton,
                                onChange: t => A("footerButton", t)
                            })
                        }), (0, u.J)({
                            label: "Button Text",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("footerButton", {
                                    color: t
                                }),
                                selectedColor: null === (t = g.footerButton) || void 0 === t ? void 0 : t.color
                            })
                        }), (0, u.J)({
                            label: "Button Text Size",
                            inputElm: f("footerButton")
                        })]
                    })
                }

                function T() {
                    var t, e, n;
                    return (0, $.jsxs)(m.s, {
                        children: [(0, $.jsx)(x.S, {
                            children: "Suggestions"
                        }), (0, u.J)({
                            label: "Background",
                            inputElm: (0, $.jsx)(mt.J, {
                                cssProps: g.suggestion,
                                onChange: t => A("suggestion", t)
                            })
                        }), (0, u.J)({
                            label: "Border",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("suggestion", {
                                    borderColor: t
                                }),
                                selectedColor: null === (t = g.suggestion) || void 0 === t ? void 0 : t.borderColor
                            })
                        }), (0, u.J)({
                            label: "Border Size",
                            inputElm: f("suggestion", "borderWidth")
                        }), (0, u.J)({
                            label: "Border Radius",
                            inputElm: f("suggestion", "borderRadius")
                        }), (0, u.J)({
                            label: "Media",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("suggestionMedia", {
                                    color: t
                                }),
                                selectedColor: null === (e = g.suggestionMedia) || void 0 === e ? void 0 : e.color
                            })
                        }), (0, u.J)({
                            label: "Media Size",
                            inputElm: f("suggestionMedia", "fontSize")
                        }), (0, u.J)({
                            label: "Text",
                            inputElm: (0, $.jsx)(xt.z, {
                                showUndo: !0,
                                onChange: t => A("suggestion", {
                                    color: t
                                }),
                                selectedColor: null === (n = g.suggestion) || void 0 === n ? void 0 : n.color
                            })
                        }), (0, u.J)({
                            label: "Text Size",
                            inputElm: f("suggestion")
                        })]
                    })
                }
                return (0, $.jsxs)($.Fragment, {
                    children: [(0, $.jsxs)(m.s, {
                        children: [(0, $.jsx)(x.S, {
                            children: "General"
                        }), (0, $.jsx)(ht._, {
                            selectedFontId: t.styles.fontId || "font_open_sans",
                            updateFont: b
                        }), (0, u.J)({
                            label: "RTL",
                            inputElm: (0, $.jsx)(ct.r, {
                                isChecked: "rtl" === o.direction,
                                onChange: (t, e) => h("direction", e ? "rtl" : "ltr")
                            })
                        })]
                    }), C(), y(), j(), E(), T()]
                })
            };
            var bt = n(72823),
                ft = n(73360);

            function vt(t) {
                switch (t) {
                    case "whatsapp-button":
                    case "telegram-button":
                    case "messenger-button":
                        return [...[{
                            followText: "Container",
                            selector: ".chat-button-container"
                        }, {
                            followText: "",
                            selector: ".chat-icon"
                        }, {
                            followText: "Icon",
                            selector: ".chat-icon svg"
                        }, {
                            followText: "Chat Container",
                            selector: ".component-container"
                        }, {
                            followText: "Chat Header Container",
                            selector: ".component-container .header-container"
                        }, {
                            followText: "Chat Header Text",
                            selector: ".component-container .header-container .header-text div"
                        }, {
                            followText: "Chat Avatar Image",
                            selector: ".chat-avatar"
                        }, {
                            followText: "Chat Description Container",
                            selector: ".component-container .background-image"
                        }, {
                            followText: "Chat Inner Chat Message",
                            selector: ".background-image .inner-chat-message-text"
                        }, {
                            followText: "Chat Inner Chat Message Text",
                            selector: ".background-image .inner-chat-message-text div"
                        }, {
                            followText: "Start Chat Button",
                            selector: ".start-chat-button"
                        }].map((e => {
                            return {
                                name: (n = "".concat(t, " ").concat(e.followText), n.split("-").map((t => t.charAt(0).toUpperCase() + t.slice(1))).join(" ")),
                                code: e.selector
                            };
                            var n
                        }))];
                    default:
                        return []
                }
            }
            const Ct = () => {
                    const [t, e] = (0, c.O)(), {
                        styles: n
                    } = t, o = (0, I.k)(), {
                        meta: {
                            slug: a
                        }
                    } = (0, l.M)(), {
                        setDeviceStyle: i,
                        getDeviceStyle: r
                    } = (0, P.o)(n);

                    function s(t, o) {
                        i(t, o, (() => {
                            e({
                                styles: { ...n,
                                    [t]: o
                                }
                            })
                        }))
                    }
                    return (0, $.jsxs)($.Fragment, {
                        children: [(0, $.jsx)(bt.v8, {
                            items: [{
                                label: "Button",
                                value: r("button") || {},
                                propName: "button"
                            }, {
                                label: "Button Icon",
                                value: r("buttonIcon") || {},
                                propName: "buttonIcon",
                                elmType: "icon"
                            }, {
                                label: "Chat Container",
                                value: r("bodyBackground") || {},
                                propName: "bodyBackground",
                                elmType: "container"
                            }, {
                                label: "Chat Header",
                                value: r("header") || {},
                                propName: "header",
                                elmType: "container"
                            }, {
                                label: "Chat Body",
                                value: r("body") || {},
                                propName: "body",
                                elmType: "container"
                            }, {
                                label: "Chat Footer",
                                value: r("footer") || {},
                                propName: "footer",
                                elmType: "container"
                            }, {
                                label: "Contact",
                                value: r("headerContact") || {},
                                propName: "headerContact",
                                elmType: "text"
                            }, {
                                label: "Status",
                                value: r("headerStatus") || {},
                                propName: "headerStatus",
                                elmType: "text"
                            }, {
                                label: "Profile Image",
                                value: r("headerAvatar") || {},
                                propName: "headerAvatar",
                                elmType: "image"
                            }, {
                                label: "Message Container",
                                value: r("messageWrapper") || {},
                                propName: "messageWrapper",
                                elmType: "container"
                            }, {
                                label: "Message Title",
                                value: r("messageContact") || {},
                                propName: "messageContact",
                                elmType: "text"
                            }, {
                                label: "Message Text",
                                value: r("message") || {},
                                propName: "message",
                                elmType: "text"
                            }, {
                                label: "Message Timestamp",
                                value: r("messageTimestamp") || {},
                                propName: "messageTimestamp",
                                elmType: "text"
                            }, {
                                label: "Suggestions Container",
                                value: r("suggestionWrapper") || {},
                                propName: "suggestionWrapper",
                                elmType: "container"
                            }, {
                                label: "Suggestion",
                                value: r("suggestion") || {},
                                propName: "suggestion"
                            }, {
                                label: "Suggestion Media",
                                value: r("suggestionMedia") || {},
                                propName: "suggestionMedia",
                                elmType: "image"
                            }, {
                                label: "Footer Button",
                                value: r("footerButton") || {},
                                propName: "footerButton",
                                elmType: "text"
                            }],
                            onChange: (t, e) => {
                                s(t, e)
                            }
                        }), (0, $.jsx)(ft.k, {
                            onUpdate: t => {
                                s("customCSS", t)
                            },
                            customCSS: n.customCSS,
                            defaultStyles: "",
                            enabled: o.getFeatureValue("customCSS"),
                            snippets: vt(a)
                        })]
                    })
                },
                yt = () => (0, $.jsx)(ut.m, {
                    items: [{
                        id: "advanced",
                        name: "Advanced",
                        component: (0, $.jsx)(At, {})
                    }, {
                        id: "custom",
                        name: "Custom",
                        component: (0, $.jsx)(Ct, {})
                    }]
                });
            const wt = t => ({
                    settings: {
                        phoneNumber: "",
                        mainIcon: { ...Z(t)[0]
                        },
                        mainIconPosition: {
                            label: "Right",
                            value: "right"
                        }
                    },
                    styles: K(t),
                    content: {
                        contactName: "Your Contact Name",
                        contactStatus: "Typically replies instantly",
                        showProfilePicture: !0,
                        showChat: !0,
                        message: "Hey there! \ud83d\ude00 How can I help you?",
                        showCurrentTime: !0,
                        showOpenByDefault: !1,
                        buttonClickText: "Click to Start Chat"
                    }
                }),
                jt = t => (0, o.a)(wt(t), F(t), "published"),
                Et = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    const e = Tt(t);
                    return {
                        meta: e,
                        editor: {
                            config: {
                                sections: [{
                                    id: "content",
                                    component: (0, $.jsx)(lt, {}),
                                    name: "Content",
                                    icon: s.x.content
                                }, {
                                    id: "styles",
                                    component: (0, $.jsx)(yt, {}),
                                    name: "Look & Feel",
                                    icon: s.x.styles
                                }, {
                                    id: "settings",
                                    component: (0, $.jsx)(dt, {}),
                                    name: "Settings",
                                    icon: s.x.settings
                                }, {
                                    id: "integrations",
                                    component: (0, $.jsx)(et, {}),
                                    name: "Integrations",
                                    icon: s.x.integrations
                                }],
                                customStyles: "\n\t\t\t.plugin-wrapper {\n\t\t\t\t&.tablet, &.mobile {\n\t\t\t\t\t.chat-button-container {\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tright: 0;\n\n\t\t\t\t\t\t.component-container {\n\t\t\t\t\t\t\tmax-width: 90%;\n\t\t\t\t\t\t\tright: -10px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t&.left-pos {\n\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\tright: auto;\n\n\t\t\t\t\t\t\t.component-container {\n\t\t\t\t\t\t\t\tleft: -10px;\n\t\t\t\t\t\t\t\tright: auto;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\t\n\t\t\t\t}\n\n\t\t\t\t.chat-button-container {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tright: 20px;\n\t\t\t\t\tbottom: 0;\n\t\t\t\n\t\t\t\t\t&.left-pos {\n\t\t\t\t\t\tleft: 20px;\n\t\t\t\t\t\tright: auto;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t",
                                deviceRewrites: !0,
                                loadTemplates: !0
                            }
                        },
                        plugin: {
                            defaultData: (0, o.a)(wt(t), F(t), "published"),
                            pluginComponent: (0, $.jsx)(st, {}),
                            customStyles: "\n\t\t\t\tposition: static;\n\n\t\t\t\t&.preview, &.viewer, &.gallery {\n\t\t\t\t\t.chat-button-container {\n\t\t\t\t\t\tposition: fixed;\n\t\t\t\t\t\tz-index: 9999;\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\tpointer-events: none;\n\t\t\t\t\n\t\t\t\t\t\t&.right-pos {\n\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\tleft: auto;\n\t\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t\t.background-image {\n\t\t\t\t\t\t\t// max-height: calc(100vh - 270px); // Calculating header and footer height\n\t\t\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"
                        },
                        viewer: {
                            props: {
                                viewerSettings: {
                                    minHeight: 0,
                                    minWidth: 0,
                                    inlineElm: !0
                                },
                                onLoad: t => {
                                    if ((0, a.z)(t.guid)) {
                                        new i.z(e, t.guid || "", !0).installWidgetGloballyFromIframe()
                                    }
                                }
                            }
                        },
                        app: {
                            defaultRoutePath: "/editor/templates"
                        }
                    }
                },
                Tt = t => function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "whatsapp-button";
                    const {
                        finalType: e,
                        meta: n
                    } = (0, V.p)(t, W);
                    return { ...n,
                        icon: (o = e, "whatsapp-button" === o ? "https://website-assets.commoninja.com/distribution/1664692535139_whatsapp-icon.png" : "telegram-button" === o ? "https://website-assets.commoninja.com/distribution/1664692555317_telegram-icon.png" : "messenger-button" === o ? "https://website-assets.commoninja.com/distribution/1664692573347_messenger-icon.png" : "https://website-assets.commoninja.com/general/default-icon.png")
                    };
                    var o
                }(t),
                It = t => {
                    var e;
                    const n = Et(null === (e = t.ssrMeta) || void 0 === e ? void 0 : e.slug);
                    return (0, r.s)({ ...t,
                        appConfig: n
                    })
                }
        },
        1130: (t, e, n) => {
            n.d(e, {
                u: () => r
            });
            var o = n(70130),
                a = n(74774),
                i = n(5030);
            const r = t => {
                const e = (0, a.J)();
                return (0, i.jsx)(o.O, {
                    onError: (t, n) => "max" === t && (e(n), !0),
                    ...t
                })
            }
        },
        62258: (t, e, n) => {
            n.d(e, {
                M: () => r
            });
            var o = n(18571),
                a = n(77647),
                i = n(5030);
            const r = t => {
                let {
                    imageUploadEnabled: e,
                    ...n
                } = t;
                return (0, i.jsx)(o.E, { ...n,
                    onChange: t => {
                        "" !== t && "<br>" !== t && "<br/>" !== t && "<br />" !== t && "<p></p>" !== t && "<p><br></p>" !== t && "<p><br/></p>" !== t && "<p><br /></p>" !== t || (t = ""), n.onChange(t)
                    },
                    imageUploadTrigger: (t, n) => (0, i.jsx)(a.D, {
                        mediaManagerProps: {
                            submitCallback: t => {
                                n(t[0] || "")
                            },
                            uploadIsAvailable: e,
                            assetType: "image"
                        },
                        style: {
                            display: "none"
                        },
                        className: t
                    })
                })
            }
        },
        7055: (t, e, n) => {
            n.r(e), n.d(e, {
                CNWatermark: () => s
            });
            var o, a = n(13736);
            const i = n(18744).default.div(o || (o = (0, a.Z)(["\n\tz-index: 1 !important;\n\n\t&::before,\n\t&::after {\n\t\tcontent: unset !important;\n\t}\n"])));
            var r = n(5030);
            const s = t => {
                let {
                    meta: e,
                    className: n = ""
                } = t;
                const o = null !== e && void 0 !== e && e.slug ? "https://www.commoninja.com/widgets/".concat(e.slug) : "https://www.commoninja.com",
                    a = null !== e && void 0 !== e && e.name ? "Free ".concat(e.name, " Widget") : "Powered by Common Ninja";
                return (0, r.jsx)(i, {
                    className: "commonninja-ribbon ".concat(n),
                    style: {
                        whiteSpace: "nowrap",
                        fontFamily: '"Poppins",sans-serif',
                        margin: "10px auto 0",
                        fontSize: "12px",
                        lineHeight: "1.3",
                        fontWeight: "500",
                        textAlign: "center",
                        maxWidth: "100%",
                        transition: "background 0.2s ease",
                        display: "block",
                        opacity: "1",
                        visibility: "visible",
                        position: "relative"
                    },
                    ref: t => {
                        null === t || void 0 === t || t.style.setProperty("display", "block", "important"), null === t || void 0 === t || t.style.setProperty("opacity", "1", "important"), null === t || void 0 === t || t.style.setProperty("visibility", "visible", "important"), null === t || void 0 === t || t.style.setProperty("zIndex", "1", "important")
                    },
                    children: (0, r.jsxs)("a", {
                        style: {
                            color: "#16171B",
                            direction: "ltr",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            background: "#fefefe",
                            borderRadius: "50em",
                            boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                            padding: "5px 10px"
                        },
                        className: "commonninja-ribbon-link",
                        href: "".concat(o, "?utm_medium=Embed"),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        ref: t => {
                            null === t || void 0 === t || t.style.setProperty("display", "inline-flex", "important"), null === t || void 0 === t || t.style.setProperty("opacity", "1", "important"), null === t || void 0 === t || t.style.setProperty("visibility", "visible", "important"), null === t || void 0 === t || t.style.setProperty("direction", "ltr", "important"), null === t || void 0 === t || t.style.setProperty("color", "#16171B", "important")
                        },
                        children: [(0, r.jsx)("img", {
                            style: {
                                height: "17px",
                                width: "17px",
                                maxHeight: "17px",
                                maxWidth: "17px",
                                borderRadius: "50em",
                                margin: "0px",
                                marginRight: "5px"
                            },
                            src: "https://website-assets.commoninja.com/distribution/1677684284220_icon.png",
                            alt: "Common Ninja"
                        }), (0, r.jsx)("span", {
                            style: {
                                lineHeight: "1.4em",
                                paddingTop: "2px",
                                color: "#16171B",
                                fontSize: "inherit"
                            },
                            children: a
                        })]
                    })
                })
            }
        },
        73360: (t, e, n) => {
            n.d(e, {
                e: () => R,
                k: () => z
            });
            var o, a, i = n(51889),
                r = n(4591),
                s = n(66952),
                l = n(27579),
                c = n(50208),
                d = n(13736),
                u = n(18744);
            const p = u.default.div(o || (o = (0, d.Z)(["\n\t", "\n"])), (() => (0, u.css)(a || (a = (0, d.Z)(["\n\t\tposition: relative;\n\n\t\ttextarea {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tmax-height: 100%;\n\t\t}\n\t"])))));
            var g = n(5030);
            const h = t => {
                let {
                    language: e,
                    ...n
                } = t;
                return (0, g.jsx)(p, {
                    className: (0, l.N9)("code-editor"),
                    children: (0, g.jsx)(c.g, { ...n,
                        value: n.value
                    })
                })
            };
            var m, x, A = n(74092),
                b = n(63177),
                f = n(93075),
                v = n(51912),
                C = n(1081),
                y = n(40843),
                w = n(47203),
                j = n(22128),
                E = n(53617),
                T = n(84114),
                I = n(41276),
                S = n(50016),
                P = n(74774),
                N = n(36466);
            const k = u.default.div(m || (m = (0, d.Z)(["\n\tposition: relative;\n\n\t.nindo-code-editor {\n\t\tflex: 1;\n\t\theight: 50vh;\n\t}\n"]))),
                B = u.default.div(x || (x = (0, d.Z)(["\n\t.snippets-list {\n\t\tbackground: var(", ");\n\t\tborder-radius: 5px;\n\t\tmax-height: 300px;\n\t\toverflow: auto;\n\t\tgap: 0;\n\n\t\t.nindo-list-item {\n\t\t\tcolor: var(", ");\n\t\t\tfont-size: 14px;\n\t\t\tpadding: 10px 15px;\n\t\t\tmargin: 0;\n\n\t\t\t&:first-child {\n\t\t\t\tborder-radius: 5px 5px 0 0;\n\t\t\t}\n\n\t\t\t&:last-child {\n\t\t\t\tborder-radius: 0 0 5px 5px;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tcolor: var(", ");\n\t\t\t\tbackground: var(", ");\n\t\t\t}\n\t\t}\n\t}\n"])), N.Dm.background700, N.Dm.text300, N.Dm.text100, N.Dm.background600),
                R = t => {
                    const {
                        customCSS: e,
                        onUpdate: n,
                        snippets: o = []
                    } = t;

                    function a(t) {
                        n(t)
                    }
                    return (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsxs)(i.z, {
                            variant: "transparent",
                            className: "close-css-props-editor",
                            onClick: () => {
                                var e;
                                return null === (e = t.onClose) || void 0 === e ? void 0 : e.call(t)
                            },
                            style: {
                                marginTop: 10
                            },
                            children: [(0, g.jsx)(w.b, {}), (0, g.jsx)("span", {
                                children: "Back"
                            })]
                        }), (0, g.jsxs)(r.s, {
                            children: [(0, g.jsxs)(s.S, {
                                children: ["Custom CSS", o.length > 0 && (0, g.jsx)(D, {
                                    snippets: o,
                                    onSelect: t => {
                                        a(e ? "".concat(e, "\n\n").concat(t) : t)
                                    }
                                })]
                            }), (0, g.jsx)(k, {
                                className: "code-editor-wrapper",
                                children: (0, T.J)({
                                    label: "",
                                    flow: "column",
                                    inputElm: (0, g.jsx)(h, {
                                        value: e || "",
                                        onChange: t => a(t.target.value),
                                        onKeyDown: t => {
                                            if ("Tab" === t.key) {
                                                t.preventDefault();
                                                const e = t.target.selectionStart,
                                                    n = t.target.selectionEnd,
                                                    o = t.target,
                                                    i = o.value;
                                                o.value = i.substring(0, e) + "\t" + i.substring(n), o.selectionStart = o.selectionEnd = e + 1, a(o.value)
                                            }
                                        }
                                    })
                                })
                            })]
                        })]
                    })
                },
                z = t => {
                    let {
                        enabled: e,
                        ...n
                    } = t;
                    const {
                        disableCustomCSS: o
                    } = (0, I.$)(), [a, l] = (0, E.useState)(!1), c = (0, P.J)(), {
                        editor: {
                            sidebarSize: d,
                            drawerSize: u
                        }
                    } = (0, S.j)();
                    return o ? (0, g.jsx)(g.Fragment, {}) : (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsxs)(r.s, {
                            children: [(0, g.jsx)(s.S, {
                                description: "Add custom CSS code to change the styling of any HTML element in the widget.",
                                children: "Custom CSS"
                            }), (0, g.jsx)(A.p, {
                                children: (0, g.jsx)(b.y, {
                                    style: {
                                        justifyContent: "center"
                                    },
                                    children: (0, g.jsxs)(i.z, {
                                        variant: "secondary",
                                        onClick: function() {
                                            e ? l(!0) : c("Your current plan doesn't support custom CSS.")
                                        },
                                        children: [(0, g.jsx)(j.C, {}), "Edit CSS"]
                                    })
                                })
                            })]
                        }), (0, g.jsx)(f.d, {
                            show: a,
                            closeCallback: () => l(!1),
                            size: u,
                            distance: u < 401 ? 0 : d,
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
                            children: (0, g.jsx)(R, { ...n,
                                onClose: () => l(!1),
                                onUpdate: t => {
                                    n.onUpdate(t)
                                }
                            })
                        })]
                    })
                },
                D = t => {
                    let {
                        snippets: e,
                        onSelect: n
                    } = t;
                    const [o, a] = (0, E.useState)(!1);
                    return (0, g.jsx)(v.J, {
                        open: o,
                        onOpenChange: t => a(t),
                        align: "end",
                        className: "snippets-popover",
                        contentElm: (0, g.jsx)(B, {
                            children: (0, g.jsx)(C.a, {
                                className: "snippets-list",
                                items: e.map((t => ({
                                    title: t.name,
                                    key: t.name
                                }))),
                                onButtonClick: (t, o) => {
                                    const i = e.find((t => t.name === o.title));
                                    let r = (null === i || void 0 === i ? void 0 : i.code) || "";
                                    r && (r.startsWith(".plugin-wrapper") || (r = ".plugin-wrapper ".concat(r)), r.endsWith("}") || (r = "".concat(r, " {}"))), n(r), a(!1)
                                }
                            })
                        }),
                        children: (0, g.jsxs)(i.z, {
                            variant: "secondary",
                            children: [(0, g.jsx)(y.w, {}), " Snippets"]
                        })
                    })
                }
        },
        28793: (t, e, n) => {
            n.d(e, {
                _: () => c
            });
            var o = n(74092),
                a = n(72758),
                i = n(63177),
                r = n(46418),
                s = n(10510),
                l = n(5030);
            const c = t => {
                let {
                    selectedFontId: e,
                    updateFont: n
                } = t;
                return (0, l.jsxs)(o.p, {
                    flow: "row",
                    children: [(0, l.jsx)(a.l, {
                        children: "Font Type"
                    }), (0, l.jsx)(i.y, {
                        children: (0, l.jsx)(r.P, {
                            value: e || "font_open_sans",
                            onChange: t => n(t),
                            options: s.FP.map((t => ({
                                value: t.id,
                                label: (0, l.jsx)("div", {
                                    style: {
                                        height: 18
                                    },
                                    children: t.fontSvg ? (0, l.jsx)("img", {
                                        height: 12,
                                        src: t.fontSvg
                                    }) : t.name
                                })
                            })))
                        })
                    })]
                })
            }
        },
        12084: (t, e, n) => {
            n.d(e, {
                s: () => c
            });
            var o = n(48730),
                a = n.n(o),
                i = n(53617),
                r = n(95707),
                s = n(64921),
                l = n(5030);
            const c = t => {
                let {
                    mediaUrl: e,
                    style: n,
                    alt: o,
                    className: c,
                    imageDraggable: d
                } = t;
                const [u, p] = (0, i.useState)(g());

                function g() {
                    return (null === e || void 0 === e ? void 0 : e.endsWith(".svg")) || void 0 !== [...r.J.entries()].find((t => t[0] === e))
                }
                return (0, i.useEffect)((() => {
                    g() ? p(!0) : p(!1)
                }), [e]), (0, l.jsx)(l.Fragment, {
                    children: u ? (0, l.jsx)(s.y, {
                        className: a()("svg", c),
                        color: null === n || void 0 === n ? void 0 : n.color,
                        fontSize: (null === n || void 0 === n ? void 0 : n.fontSize) || "inherit",
                        svg: e,
                        title: void 0 === o ? "media" : o,
                        style: n
                    }) : e ? (0, l.jsx)("img", {
                        draggable: d,
                        className: a()("media-image image", c),
                        style: n,
                        src: e,
                        alt: o || "media"
                    }) : (0, l.jsx)(l.Fragment, {})
                })
            }
        },
        80732: (t, e, n) => {
            n.d(e, {
                R: () => l
            });
            var o = n(56699),
                a = n(53617),
                i = n(95707),
                r = n(64921),
                s = n(5030);
            const l = t => {
                var e, n;
                let {
                    mediaUrl: l,
                    ...c
                } = t;
                const [d, u] = (0, a.useState)(!1);
                return (0, a.useEffect)((() => {
                    null !== l && void 0 !== l && l.endsWith(".svg") || void 0 !== [...i.J.entries()].find((t => t[0] === l)) ? u(!0) : u(!1)
                }), [l]), (0, s.jsx)(o.U, { ...c,
                    style: {
                        marginLeft: "auto",
                        ...c.style
                    },
                    imageUrl: l,
                    children: d && (0, s.jsx)(r.y, {
                        fontSize: Number(null === (e = "".concat(null === (n = c.style) || void 0 === n ? void 0 : n.fontSize)) || void 0 === e ? void 0 : e.replace("px", "")) || 30,
                        svg: l || ""
                    })
                })
            }
        },
        67484: (t, e, n) => {
            n.d(e, {
                hJ: () => V,
                yV: () => J,
                UL: () => Y,
                R5: () => U
            });
            var o, a, i, r = n(46175),
                s = n(50208),
                l = n(97682),
                c = n(77104),
                d = n(72789),
                u = n(66952),
                p = n(4591),
                g = n(51912),
                h = n(36466),
                m = n(51889),
                x = n(95440),
                A = n(21983),
                b = n(49790),
                f = n(71243),
                v = n(931),
                C = n(48730),
                y = n.n(C),
                w = n(53617),
                j = n(84114),
                E = n(97772),
                T = n(99730),
                I = n(74774),
                S = n(1130),
                P = n(62258),
                N = n(56926),
                k = n(54992),
                B = n(61658),
                R = n(13736),
                z = n(18744);
            const D = z.default.div(o || (o = (0, R.Z)(["\n\tmin-width: 100%;\n\tposition: relative;\n\n\t.ql-editor {\n\t\tpadding-right: 25px;\n\t}\n\n\tinput,\n\ttextarea {\n\t\twidth: 100%;\n\t\tpadding-right: 30px;\n\t}\n"]))),
                L = z.default.span(a || (a = (0, R.Z)(["\n\tcolor: var(", ");\n\ttransition: 0.2s;\n\tcursor: pointer;\n\tpointer-events: auto;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 50%;\n\ttransform: translateY(-50%) scale(1.2);\n\tline-height: 1;\n\n\t&.disabled {\n\t\topacity: 0.5;\n\t\tpointer-events: none;\n\t}\n\n\tsvg {\n\t\tfill: currentColor;\n\t}\n\n\t&.rich-editor-type {\n\t\tright: 10px;\n\t\ttransform: translateY(0) scale(1.2);\n\t\ttop: 77px;\n\t}\n\n\t&.textarea-type {\n\t\ttransform: translateY(0) scale(1.2);\n\t\tright: 10px;\n\t\ttop: 10px;\n\t}\n\n\t&:hover {\n\t\tcolor: var(", ");\n\t}\n"])), h.Dm.text500, h.Dm.white),
                _ = z.default.div(i || (i = (0, R.Z)(["\n\t.nindo-popup-title {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: flex-start;\n\t\tgap: 7px;\n\t}\n\n\t.nindo-popup-content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 20px;\n\t}\n\n\t.nindo-items-manager-item {\n\t\tbackground-color: transparent;\n\n\t\t> header {\n\t\t\tbackground-color: transparent;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-right: 0;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: transparent;\n\t\t\t}\n\t\t}\n\t}\n\n\t.nindo-context-section-title {\n\t\tmargin-bottom: 10px;\n\n\t\t.nindo-select {\n\t\t\twidth: 200px;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: flex-end;\n\n\t\t\t.nindo-select__control {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t}\n\t}\n\n\t.nindo-context-section {\n\t\tpadding: 0;\n\t}\n\n\t.nindo-items-manager-item-title {\n\t\t.nindo-form-label {\n\t\t\twidth: 40px;\n\t\t\tmin-width: 40px;\n\t\t\tflex-basis: 40px;\n\t\t}\n\n\t\t.nindo-form-row {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\n\t.rtl {\n\t\tinput[type='text'],\n\t\ttextarea {\n\t\t\tdirection: rtl;\n\t\t\tpadding-right: 30px;\n\t\t}\n\t}\n"])));
            var M = n(5030);
            const H = "".concat({
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://www.commoninja.com/wr",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_BRACKTES_API_URL: "https://www.commoninja.com",
                    REACT_APP_VERCEL_URL: "widget-renderer-4zejud3t3-common-ninja.vercel.app",
                    REACT_APP_VERCEL_GIT_COMMIT_SHA: "d9b5ffd48bb0a30f71771639caa952cb73383c7e",
                    REACT_APP_VERCEL_ENV: "production",
                    REACT_APP_VERCEL_GIT_PREVIOUS_SHA: "",
                    REACT_APP_PLUGIN_API_URL: "https://www.commoninja.com",
                    REACT_APP_VERCEL_GIT_PROVIDER: "github",
                    REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "dsternlicht",
                    REACT_APP_GOOGLE_API_KEY: "AIzaSyBz3uTNPC_eaU1qzsw3aI-y122qEa-wBoQ",
                    REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Daniel Sternlicht",
                    REACT_APP_VERCEL_GIT_REPO_SLUG: "apps",
                    REACT_APP_VERCEL_GIT_REPO_OWNER: "CommonNinja",
                    REACT_APP_VERCEL_GIT_PULL_REQUEST_ID: "",
                    REACT_APP_VERCEL_BRANCH_URL: "widget-renderer-git-main-common-ninja.vercel.app",
                    REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "Merge pull request #1013 from CommonNinja/dev\n\nType fixes",
                    REACT_APP_CAPTCHA_SITE_KEY: "6LcoBP0kAAAAAAA7iNP7tX_hL-aosBh2QrZ1Vv2Z",
                    REACT_APP_VERCEL_GIT_REPO_ID: "544524421",
                    REACT_APP_VERCEL_GIT_COMMIT_REF: "main"
                }.REACT_APP_APPS_API_URL || {
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://www.commoninja.com/wr",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_BRACKTES_API_URL: "https://www.commoninja.com",
                    REACT_APP_VERCEL_URL: "widget-renderer-4zejud3t3-common-ninja.vercel.app",
                    REACT_APP_VERCEL_GIT_COMMIT_SHA: "d9b5ffd48bb0a30f71771639caa952cb73383c7e",
                    REACT_APP_VERCEL_ENV: "production",
                    REACT_APP_VERCEL_GIT_PREVIOUS_SHA: "",
                    REACT_APP_PLUGIN_API_URL: "https://www.commoninja.com",
                    REACT_APP_VERCEL_GIT_PROVIDER: "github",
                    REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "dsternlicht",
                    REACT_APP_GOOGLE_API_KEY: "AIzaSyBz3uTNPC_eaU1qzsw3aI-y122qEa-wBoQ",
                    REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Daniel Sternlicht",
                    REACT_APP_VERCEL_GIT_REPO_SLUG: "apps",
                    REACT_APP_VERCEL_GIT_REPO_OWNER: "CommonNinja",
                    REACT_APP_VERCEL_GIT_PULL_REQUEST_ID: "",
                    REACT_APP_VERCEL_BRANCH_URL: "widget-renderer-git-main-common-ninja.vercel.app",
                    REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "Merge pull request #1013 from CommonNinja/dev\n\nType fixes",
                    REACT_APP_CAPTCHA_SITE_KEY: "6LcoBP0kAAAAAAA7iNP7tX_hL-aosBh2QrZ1Vv2Z",
                    REACT_APP_VERCEL_GIT_REPO_ID: "544524421",
                    REACT_APP_VERCEL_GIT_COMMIT_REF: "main"
                }.NEXT_PUBLIC_APPS_API_URL || "https://www.commoninja.com", "/api/apps/translate"),
                O = t => {
                    let {
                        children: e,
                        ...n
                    } = t;
                    return (0, M.jsxs)(D, {
                        children: [e, (0, M.jsx)(J, { ...n
                        })]
                    })
                },
                J = t => {
                    var e, n;
                    let {
                        value: o,
                        localeKey: a,
                        inputType: i = "input",
                        triggerStyle: C
                    } = t;
                    const R = (0, I.J)(),
                        z = (0, T.k)(),
                        [D, O] = (0, w.useState)(!1),
                        [J, Y] = (0, w.useState)(!1),
                        [U, V] = (0, w.useState)(""),
                        [G, Q] = (0, w.useState)(""),
                        {
                            getLocales: W,
                            setLocaleValue: K,
                            removeLocale: Z,
                            localization: {
                                languages: F
                            }
                        } = (0, E.x)(),
                        X = v.Z.create({
                            baseURL: H
                        }),
                        q = W().filter((t => "undefined" !== typeof(null === F || void 0 === F ? void 0 : F[t])));
                    if ("rich-editor" === i) {
                        const t = document.createElement("div");
                        t.innerHTML = o, o = t.textContent || t.innerText || o || ""
                    }

                    function $(t) {
                        var e;
                        let n = "Enter translation...";
                        var o, r;
                        return t.id.startsWith("he") ? n = "\u05d4\u05d6\u05df \u05ea\u05e8\u05d2\u05d5\u05dd..." : t.id.startsWith("ar-") && (n = "\u0623\u062f\u062e\u0644 \u0627\u0644\u062a\u0631\u062c\u0645\u0629..."), "textarea" === i ? (0, M.jsx)(s.g, {
                            placeholder: n,
                            value: (null === F || void 0 === F || null === (o = F[t.id]) || void 0 === o ? void 0 : o[a]) || "",
                            onChange: e => {
                                K(t.id, a, e.target.value)
                            }
                        }) : "rich-editor" === i ? (0, M.jsx)(P.M, {
                            html: (null === F || void 0 === F || null === (r = F[t.id]) || void 0 === r ? void 0 : r[a]) || "",
                            onChange: e => {
                                K(t.id, a, e)
                            }
                        }) : (0, M.jsx)(l.I, {
                            type: "text",
                            placeholder: n,
                            value: (null === F || void 0 === F || null === (e = F[t.id]) || void 0 === e ? void 0 : e[a]) || "",
                            onChange: e => {
                                K(t.id, a, e.target.value)
                            }
                        })
                    }
                    return (0, M.jsxs)(M.Fragment, {
                        children: [(0, M.jsx)(L, {
                            className: "locale-icon ".concat(i, "-type"),
                            onClick: () => {
                                z.getFeatureValue("localization") ? O(!0) : R("Your current plan doesn't support multi-language widgets.")
                            },
                            title: "Translations",
                            style: C,
                            children: N.x.localization
                        }), D && (0, M.jsx)(c.GI, {
                            show: D,
                            closeCallback: () => O(!1),
                            width: "580px",
                            style: {
                                minHeight: "500px"
                            },
                            children: (0, M.jsxs)(_, {
                                children: [(0, M.jsxs)(c.jo, {
                                    children: [N.x.localization, "Localization"]
                                }), (0, M.jsxs)(c.pP, {
                                    children: [(0, M.jsxs)(d.X, {
                                        children: [(0, M.jsx)(u.S, {
                                            children: "Original Text"
                                        }), (0, M.jsx)(p.s, {
                                            children: o || "(empty)"
                                        })]
                                    }), (0, M.jsxs)(d.X, {
                                        children: [(0, M.jsxs)(u.S, {
                                            children: ["Translations", (0, M.jsx)(g.J, {
                                                open: J,
                                                onOpenChange: t => Y(t),
                                                align: "end",
                                                contentElm: (0, M.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "5px",
                                                        flexDirection: "column",
                                                        padding: "10px 0",
                                                        width: "250px",
                                                        borderRadius: 5,
                                                        height: 200,
                                                        overflow: "auto",
                                                        color: "var(".concat(h.Dm.text700, ")"),
                                                        backgroundColor: "var(".concat(h.Dm.background800, ")")
                                                    },
                                                    children: B.Hj.map((t => {
                                                        var e, n;
                                                        return (0, M.jsxs)(m.z, {
                                                            variant: "transparent",
                                                            style: {
                                                                width: "100%",
                                                                padding: "7px 15px",
                                                                justifyContent: "flex-start",
                                                                gap: 15
                                                            },
                                                            onClick: () => {
                                                                K(t.code, a, ""), Y(!1)
                                                            },
                                                            children: [(0, M.jsx)(k.W, {
                                                                country: null === (e = t.code) || void 0 === e || null === (n = e.split("-")) || void 0 === n ? void 0 : n[1]
                                                            }), t.name]
                                                        })
                                                    }))
                                                }),
                                                children: (0, M.jsx)(m.z, {
                                                    variant: "transparent",
                                                    children: "+ Add Language"
                                                })
                                            })]
                                        }), (0, M.jsx)(p.s, {
                                            style: {
                                                minHeight: 230,
                                                marginBottom: 20
                                            },
                                            children: (0, M.jsx)(S.u, {
                                                titleRenderer: t => {
                                                    var e, n, i;
                                                    return (0, j.J)({
                                                        label: (0, M.jsx)(k.W, {
                                                            country: null === (e = t.id) || void 0 === e || null === (n = e.split("-")) || void 0 === n || null === (i = n[1]) || void 0 === i ? void 0 : i.toUpperCase()
                                                        }),
                                                        inputElm: (0, M.jsxs)(M.Fragment, {
                                                            children: [$(t), G === t.id ? (0, M.jsx)(x.a, {
                                                                size: 24,
                                                                style: {
                                                                    position: "absolute",
                                                                    right: "10px",
                                                                    top: "50%",
                                                                    transform: "translateY(-50%) scale(1.2)"
                                                                }
                                                            }) : (0, M.jsx)(L, {
                                                                onClick: () => {
                                                                    !async function(t, e, n) {
                                                                        Q(e);
                                                                        try {
                                                                            const {
                                                                                data: {
                                                                                    success: o,
                                                                                    message: a,
                                                                                    data: i
                                                                                }
                                                                            } = await X.post("", {
                                                                                text: t,
                                                                                locale: e
                                                                            }, {
                                                                                headers: {
                                                                                    "Content-Type": "application/json"
                                                                                },
                                                                                withCredentials: !1
                                                                            });
                                                                            if (!o) throw new Error(a);
                                                                            n(i)
                                                                        } catch (o) {
                                                                            r.j.error({
                                                                                title: "Cannot complete translation",
                                                                                message: o.message,
                                                                                autoDismiss: 3
                                                                            })
                                                                        }
                                                                        Q("")
                                                                    }(o, t.id, (async e => {
                                                                        K(t.id, a, e)
                                                                    }))
                                                                },
                                                                title: "Translate with Google Translate",
                                                                className: y()({
                                                                    disabled: !!G
                                                                }),
                                                                children: (0, M.jsx)(f.a, {})
                                                            })]
                                                        }),
                                                        className: t.id.startsWith("he") || t.id.startsWith("ar-") ? "rtl" : ""
                                                    })
                                                },
                                                items: q.map((t => ({
                                                    id: t
                                                }))),
                                                onUpdate: t => {
                                                    if (t.length < q.length) {
                                                        const e = q.find((e => !t.map((t => t.id)).includes(e)));
                                                        e && V(e)
                                                    }
                                                },
                                                addable: !1,
                                                addItemText: "Add Translation",
                                                itemsText: "translation",
                                                minItems: 0,
                                                maxItems: B.Hj.length,
                                                duplicatable: !1,
                                                searchable: !1,
                                                sortable: !1
                                            })
                                        }), (0, M.jsx)(A.A, {
                                            iconStyle: {
                                                fontSize: 16
                                            },
                                            articles: [{
                                                text: "Click for more information about how to use the loclization feature.",
                                                link: "https://help.commoninja.com/hc/en-us/articles/14830459396381"
                                            }]
                                        })]
                                    })]
                                })]
                            })
                        }), (0, M.jsx)(b.l, {
                            show: !!U,
                            title: "Remove ".concat((null === (e = B.Hj.find((t => t.code === U))) || void 0 === e ? void 0 : e.name) || "Locale"),
                            message: (0, M.jsxs)(M.Fragment, {
                                children: ["Are you sure you want to remove the translation for", " ", (null === (n = B.Hj.find((t => t.code === U))) || void 0 === n ? void 0 : n.name) || "this locale", "?", (0, M.jsx)("br", {}), (0, M.jsx)("br", {}), "This action cannot be undone."]
                            }),
                            approveButtonText: "Remove",
                            cancelButtonText: "Cancel",
                            closeCallback: () => V(""),
                            approveCallback: () => {
                                Z(U), V("")
                            }
                        })]
                    })
                },
                Y = t => {
                    let {
                        localeKey: e,
                        triggerStyle: n,
                        ...o
                    } = t;
                    return (0, M.jsx)(O, {
                        localeKey: e,
                        value: o.html,
                        inputType: "rich-editor",
                        triggerStyle: n,
                        children: (0, M.jsx)(P.M, { ...o
                        })
                    })
                },
                U = t => {
                    let {
                        localeKey: e,
                        ...n
                    } = t;
                    return (0, M.jsx)(O, {
                        localeKey: e,
                        value: String(n.value),
                        inputType: "textarea",
                        triggerStyle: n.triggerStyle,
                        children: (0, M.jsx)(s.g, { ...n
                        })
                    })
                },
                V = t => {
                    let {
                        localeKey: e,
                        ...n
                    } = t;
                    return (0, M.jsx)(O, {
                        localeKey: e,
                        value: String(n.value),
                        triggerStyle: n.triggerStyle,
                        children: (0, M.jsx)(l.I, { ...n
                        })
                    })
                }
        },
        78028: (t, e, n) => {
            function o(t) {
                var e, n;
                return "undefined" !== typeof window && (null === (e = window.location.pathname.split("/")[1]) || void 0 === e || null === (n = e.split("/")) || void 0 === n ? void 0 : n[0]) || t[0]
            }

            function a(t, e) {
                if (t || "undefined" === typeof window || (t = o(e)), !e.includes(t) && !e.includes("".concat(t, "s"))) throw new Error("Invalid plugin type: ".concat(t));
                const n = String(t);
                return {
                    finalType: t,
                    meta: {
                        name: ((null === n || void 0 === n ? void 0 : n.split("-")) || []).map((t => t[0].toUpperCase() + t.slice(1))).join(" "),
                        icon: "https://website-assets.commoninja.com/general/default-icon.png",
                        type: n.replaceAll("-", "_"),
                        slug: n,
                        serviceName: "".concat(n.replaceAll("-", ""), "ninja")
                    }
                }
            }
            n.d(e, {
                R: () => o,
                p: () => a
            })
        },
        647: (t, e, n) => {
            n.d(e, {
                j: () => i
            });
            var o = n(53617),
                a = n(17228);

            function i() {
                const {
                    plugin: t
                } = (0, o.useContext)(a.I);
                return t
            }
        },
        41276: (t, e, n) => {
            n.d(e, {
                $: () => a
            });
            var o = n(25885);

            function a() {
                const {
                    whiteLabelMode: t,
                    whiteLabelPlatform: e = ""
                } = (0, o.b)();
                return t ? e.includes("kajabi") ? {
                    disableWidgetNameEditor: !0,
                    disableCustomCSS: !0,
                    disableAnalytics: !0,
                    disableIntegrations: ["analytics", "google-drive", "monday"]
                } : {
                    disableAnalytics: !0,
                    disableIntegrations: ["commonninja-form"]
                } : {}
            }
        },
        44252: (t, e, n) => {
            n.d(e, {
                K: () => b
            });
            n(53617);
            var o, a, i, r, s = n(7675),
                l = n(48730),
                c = n.n(l),
                d = n(13736),
                u = n(18744),
                p = n(63418),
                g = n.n(p);
            const h = u.default.span(o || (o = (0, d.Z)(["\n  ", "\n"])), (() => (0, u.css)(a || (a = (0, d.Z)(["\n    position: relative;\n    width: 1px;\n    height: 1px;\n    flex: none;\n    flex-basis: 1px;\n    opacity: 0;\n  "]))))),
                m = u.default.div(i || (i = (0, d.Z)(["\n  ", "\n"])), (t => {
                    let {
                        size: e = 12,
                        color: n = ""
                    } = t;
                    const o = [g()(.75, n || "#000"), g()(.92, n || "#000"), g()(1, n || "#000")];
                    return (0, u.css)(r || (r = (0, d.Z)(["\n      position: sticky;\n      z-index: 10;\n      opacity: 1;\n      transition: 0.1s;\n\n      &.in-view {\n        opacity: 0;\n      }\n\n      &.bottom,\n      &.top {\n        width: 100%;\n        height: ", "px;\n        flex: none;\n      }\n\n      &.bottom {\n        bottom: 0;\n        background: linear-gradient(\n          0deg,\n          ", ",\n          ", " 52.5%,\n          ", "\n        );\n      }\n\n      &.top {\n        top: 0;\n        background: linear-gradient(\n          180deg,\n          ", ",\n          ", " 52.5%,\n          ", "\n        );\n\n        &.in-view {\n          height: 0px;\n        }\n      }\n\n      &.right,\n      &.left {\n        width: ", "px;\n        height: 100%;\n        flex: none;\n\n        &.in-view {\n          width: 0px;\n        }\n      }\n\n      &.right {\n        right: 0;\n        background: linear-gradient(\n          270deg,\n          ", ",\n          ", " 52.5%,\n          ", "\n        );\n      }\n\n      &.left {\n        left: 0;\n        background: linear-gradient(\n          90deg,\n          ", ",\n          ", " 52.5%,\n          ", "\n        );\n      }\n    "])), e, o[0], o[1], o[2], o[0], o[1], o[2], e, o[0], o[1], o[2], o[0], o[1], o[2])
                }));
            var x = n(27579),
                A = n(5030);
            const b = t => {
                const {
                    position: e,
                    shadowStyle: n
                } = t, [o, a] = (0, s.YD)({
                    threshold: 1,
                    rootMargin: "".concat(t.size || 12, "px")
                });
                return (0, A.jsxs)(A.Fragment, {
                    children: [(0, A.jsx)(h, { ...t,
                        className: c()((0, x.N9)("shadow-hint-ref"), e, {
                            active: !a
                        }),
                        ref: o
                    }), (0, A.jsx)(m, { ...t,
                        className: c()((0, x.N9)("shadow-hint"), e, {
                            "in-view": a
                        }),
                        style: n
                    })]
                })
            }
        },
        2502: (t, e, n) => {
            n.d(e, {
                r: () => h
            });
            var o, a, i = n(48730),
                r = n.n(i),
                s = (n(53617), n(34798)),
                l = n(27579),
                c = n(13736),
                d = n(18744),
                u = n(36466);
            const p = d.default.div(o || (o = (0, c.Z)(["\n\t", "\n"])), (t => {
                let {
                    height: e = 25,
                    width: n
                } = t;
                return (0, d.css)(a || (a = (0, c.Z)(["\n\t\t&.toggle {\n\t\t\tinput[type='checkbox'] {\n\t\t\t\tdisplay: none;\n\n\t\t\t\t&:checked {\n\t\t\t\t\t+ label {\n\t\t\t\t\t\tbackground: var(", ");\n\n\t\t\t\t\t\t&::after {\n\t\t\t\t\t\t\tleft: 50%;\n\t\t\t\t\t\t\tmargin-left: -1px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t&:disabled {\n\t\t\t\t\t+ label {\n\t\t\t\t\t\topacity: 0.4;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tlabel {\n\t\t\t\toutline: 0;\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: ", "px;\n\t\t\t\theight: ", "px;\n\t\t\t\tposition: relative;\n\t\t\t\tcursor: pointer;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\tuser-select: none;\n\t\t\t\tbackground: var(", ");\n\t\t\t\tborder-radius: 50em;\n\t\t\t\ttransition: 0.2s;\n\n\t\t\t\t/* &:hover {\n        background: rgba(255, 255, 255, 0.15);\n      } */\n\n\t\t\t\t&::after {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tcontent: '';\n\t\t\t\t\twidth: ", "px;\n\t\t\t\t\theight: ", "px;\n\t\t\t\t\tleft: 3px;\n\t\t\t\t\ttop: 2px;\n\t\t\t\t\tborder-radius: 50em;\n\t\t\t\t\ttransition: 0.2s;\n\t\t\t\t\tbackground: var(", ");\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&.true-false {\n\t\t\tinput[type='checkbox'] {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.", " {\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tposition: relative;\n\t\t\t\tcursor: pointer;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\tuser-select: none;\n\t\t\t\tbackground: var(", ");\n\t\t\t\tborder-radius: 50em;\n\t\t\t\ttransition: 0.2s;\n\t\t\t\tfont-size: 0.9rem;\n\t\t\t}\n\n\t\t\tlabel {\n\t\t\t\tcolor: var(", ");\n\t\t\t\tborder-radius: 50em;\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttransition: 0.2s;\n\n\t\t\t\t&.active {\n\t\t\t\t\tbackground: var(", ");\n\t\t\t\t\tcolor: var(", ");\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"])), u.Dm.primary500, n || 1.8 * e, e, u.Dm.text700, e - 4, e - 4, u.Dm.white, (0, l.N9)("switch-wrapper"), u.Dm.text700, u.Dm.text300, u.Dm.primary500, u.Dm.white)
            }));
            var g = n(5030);
            const h = t => {
                let {
                    isChecked: e,
                    name: n,
                    disabled: o,
                    width: a,
                    height: i,
                    onChange: c,
                    variant: d = "toggle",
                    checkedLabel: u = "True",
                    uncheckedLabel: h = "False"
                } = t;
                const m = n || "toggle_".concat((0, s.Z)());

                function x(t) {
                    const e = t.target;
                    c(t, e.checked)
                }
                return (0, g.jsx)(p, {
                    height: i,
                    width: a,
                    className: d,
                    children: "true-false" === d ? (0, g.jsxs)("div", {
                        className: (0, l.N9)("switch-wrapper"),
                        children: [(0, g.jsx)("label", {
                            htmlFor: m,
                            className: r()({
                                active: !e
                            }),
                            children: h
                        }), (0, g.jsx)("input", {
                            type: "checkbox",
                            id: m,
                            onChange: x,
                            checked: e,
                            disabled: !!o
                        }), (0, g.jsx)("label", {
                            htmlFor: m,
                            className: r()({
                                active: e
                            }),
                            children: u
                        })]
                    }) : (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)("input", {
                            type: "checkbox",
                            id: m,
                            onChange: x,
                            checked: e,
                            disabled: !!o
                        }), (0, g.jsx)("label", {
                            htmlFor: m,
                            title: e ? "Disable" : "Enable"
                        })]
                    })
                })
            }
        },
        94436: (t, e, n) => {
            n.d(e, {
                u: () => x
            });
            var o, a, i, r = n(53617),
                s = n(98851),
                l = n(13736),
                c = n(18744),
                d = n(36466);
            const u = r.lazy((() => Promise.all([n.e(2066), n.e(3645)]).then(n.bind(n, 83645)))),
                p = (0, c.default)(u)(o || (o = (0, l.Z)(["\n\tbackground-color: var(", ");\n\tcolor: var(", ");\n\tpadding: 10px;\n\tborder-radius: 10px;\n\tfont-size: 0.9rem;\n\tline-height: 1.3;\n\n\t.tippy-arrow {\n\t\tcolor: var(", ");\n\t\twidth: 16px;\n\t\theight: 7px;\n\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tborder-color: transparent;\n\t\t\tborder-style: solid;\n\t\t\tleft: 0;\n\t\t\ttransform-origin: center top;\n\t\t}\n\t}\n\n\t&[data-placement^='top'] > .tippy-arrow {\n\t\ttop: 100%;\n\n\t\t&:before {\n\t\t\tborder-top-color: initial;\n\t\t\tborder-width: 7px 7px 0;\n\t\t}\n\t}\n\n\t&[data-placement^='bottom'] > .tippy-arrow {\n\t\tbottom: 100%;\n\n\t\t&:before {\n\t\t\tborder-bottom-color: initial;\n\t\t\tborder-width: 0 7px 7px;\n\t\t}\n\t}\n\n\tp {\n\t\tmargin: 0 0 10px;\n\n\t\t&:last-child {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t}\n"])), d.Dm.background600, d.Dm.text100, d.Dm.background600),
                g = c.default.span(a || (a = (0, l.Z)(["\n\t", "\n"])), (() => (0, c.css)(i || (i = (0, l.Z)(["\n\t\tbackground: var(", ");\n\t\tcolor: var(", ");\n\t\tborder-radius: 50em;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tmin-width: 20px;\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tfont-size: 0.8rem;\n\t\tfont-weight: 700;\n\t"])), d.Dm.primary500, d.Dm.white)));
            var h = n(27579),
                m = n(5030);
            const x = t => {
                const {
                    content: e,
                    pointer: n,
                    direction: o = "top",
                    width: a = 350,
                    delay: i = 0
                } = t;
                return (0, m.jsx)(p, {
                    className: (0, h.N9)("tooltip"),
                    children: (0, m.jsx)(r.Suspense, {
                        fallback: (0, m.jsx)(m.Fragment, {}),
                        children: (0, m.jsx)(p, {
                            content: e,
                            className: (0, h.N9)("tooltip-content"),
                            allowHTML: !0,
                            maxWidth: a,
                            placement: o,
                            arrow: !0,
                            interactiveBorder: 10,
                            delay: i,
                            animation: i > 0,
                            children: (0, m.jsx)(g, {
                                className: (0, h.N9)("tooltip-pointer"),
                                children: n || (0, m.jsx)(s.L, {})
                            })
                        })
                    })
                })
            }
        }
    }
]);