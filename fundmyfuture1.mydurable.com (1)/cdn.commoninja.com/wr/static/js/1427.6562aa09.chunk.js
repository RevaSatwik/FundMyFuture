"use strict";
(self.webpackChunk_commonninja_widget_renderer = self.webpackChunk_commonninja_widget_renderer || []).push([
    [1427], {
        16211: (t, n, e) => {
            e.d(n, {
                $1: () => h,
                q7: () => j,
                Xl: () => b
            });
            var o, s, a = e(36466),
                i = e(51912),
                l = e(48730),
                r = e.n(l),
                c = e(53617),
                m = e(13736),
                p = e(18744);
            const d = p.default.div(o || (o = (0, m.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 7px;\n\tborder-radius: 5px;\n\tfont-size: 1.2rem;\n\tcolor: var(", ");\n\tborder: 1px solid var(", ");\n\tcursor: pointer;\n\ttransition: 0.2s;\n\tmin-width: 33px;\n\tmin-height: 33px;\n\n\t&:hover {\n\t\tborder-color: var(", ");\n\t}\n"])), a.Dm.text500, a.Dm.text700, a.Dm.primary500),
                g = p.default.div(s || (s = (0, m.Z)(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tbackground-color: var(", ");\n\tcolor: var(", ");\n\tpadding: 10px;\n\tgap: 10px;\n\tborder-radius: 10px;\n\tmargin-top: 10px;\n\twidth: 220px;\n\tfont-size: 1.2rem;\n\n\tspan {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tcursor: pointer;\n\t\tcolor: inherit;\n\t\ttransition: 0.2s;\n\n\t\t&:hover {\n\t\t\tcolor: var(", ");\n\t\t}\n\n\t\t&.selected {\n\t\t\tcolor: var(", ");\n\t\t}\n\t}\n"])), a.Dm.background800, a.Dm.text500, a.Dm.text100, a.Dm.primary500);
            var u = e(95707),
                x = e(5030);
            const h = t => {
                    let {
                        icons: n,
                        onChange: e,
                        value: o
                    } = t;
                    const [s, l] = (0, c.useState)(!1), m = n || u.J, p = m.get(o);
                    return (0, x.jsx)(i.J, {
                        open: s,
                        contentElm: (0, x.jsxs)(g, {
                            className: "cn-icon-picker-wrapper",
                            children: [(0, x.jsx)("span", {
                                title: "None",
                                onClick: () => {
                                    e(""), l(!1)
                                },
                                className: r()({
                                    selected: !o
                                }),
                                style: {
                                    border: "1px solid var(".concat(a.Dm.text500, ")"),
                                    borderRadius: 3,
                                    textAlign: "center"
                                }
                            }), Array.from(m).map((t => {
                                const [n, s] = t;
                                return (0, x.jsx)("span", {
                                    title: s.alt || "Icon",
                                    onClick: () => {
                                        e(n), l(!1)
                                    },
                                    className: r()({
                                        selected: n === o
                                    }),
                                    children: s.component
                                }, "icon-".concat(n))
                            }))]
                        }),
                        side: "bottom",
                        align: "end",
                        onOpenChange: t => l(t),
                        children: (0, x.jsx)(d, {
                            className: "cn-icon-picker",
                            onClick: () => l(!0),
                            children: (null === p || void 0 === p ? void 0 : p.component) || (0, x.jsx)(x.Fragment, {})
                        })
                    })
                },
                j = t => {
                    const n = u.J.get(t);
                    return null !== n && void 0 !== n && n.component ? n.component : (0, x.jsx)(x.Fragment, {})
                };

            function b(t) {
                var n;
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                return c.cloneElement((null === (n = u.J.get(t)) || void 0 === n ? void 0 : n.component) || (0, x.jsx)(x.Fragment, {}), {
                    style: e,
                    className: o,
                    title: s
                })
            }
        },
        95707: (t, n, e) => {
            e.d(n, {
                J: () => An
            });
            var o = e(74778),
                s = e(27409),
                a = e(80162),
                i = e(46608),
                l = e(54240),
                r = e(84635),
                c = e(91855),
                m = e(47278),
                p = e(12134),
                d = e(20107),
                g = e(82804),
                u = e(29743),
                x = e(2309),
                h = e(27378),
                j = e(89219),
                b = e(39346),
                v = e(98129),
                f = e(77945),
                w = e(41421),
                F = e(60971),
                k = e(80844),
                y = e(33933),
                C = e(23027),
                _ = e(69865),
                S = e(93662),
                D = e(53902),
                M = e(22643),
                B = e(81893),
                P = e(61508),
                N = e(78452),
                z = e(71388),
                I = e(66872),
                A = e(71776),
                T = e(89849),
                U = e(53154),
                L = e(33939),
                R = e(82962),
                E = e(66371),
                G = e(21883),
                Z = e(66642),
                H = e(77907),
                O = e(24588),
                q = e(36989),
                W = e(60389),
                J = e(22128),
                Q = e(23142),
                V = e(41796),
                Y = e(88594),
                K = e(4636),
                X = e(61245),
                $ = e(13223),
                tt = e(38854),
                nt = e(61746),
                et = e(4879),
                ot = e(38885),
                st = e(87811),
                at = e(70715),
                it = e(35567),
                lt = e(87740),
                rt = e(3210),
                ct = e(68123),
                mt = e(98851),
                pt = e(76678),
                dt = e(23594),
                gt = e(23502),
                ut = e(44927),
                xt = e(54587),
                ht = e(33975),
                jt = e(34820),
                bt = e(67655),
                vt = e(80662),
                ft = e(43394),
                wt = e(3433),
                Ft = e(68240),
                kt = e(53433),
                yt = e(39097),
                Ct = e(35822),
                _t = e(12218),
                St = e(35426),
                Dt = e(29989),
                Mt = e(77164),
                Bt = e(45340),
                Pt = e(43366),
                Nt = e(38222),
                zt = e(34397),
                It = e(54018),
                At = e(74453),
                Tt = e(94999),
                Ut = e(14970),
                Lt = e(37979),
                Rt = e(3017),
                Et = e(62224),
                Gt = e(50976),
                Zt = e(189),
                Ht = e(94424),
                Ot = e(78974),
                qt = e(55081),
                Wt = e(42477),
                Jt = e(77725),
                Qt = e(46036),
                Vt = e(11484),
                Yt = e(48428),
                Kt = e(36220),
                Xt = e(41852),
                $t = e(63136),
                tn = e(66023),
                nn = e(52849),
                en = e(51465),
                on = e(6469),
                sn = e(83799),
                an = e(61977),
                ln = e(28737),
                rn = e(79855),
                cn = e(89360),
                mn = e(90539),
                pn = e(81888),
                dn = e(7045),
                gn = e(86700),
                un = e(55443),
                xn = e(86108),
                hn = e(1459),
                jn = e(31823),
                bn = e(21672),
                vn = e(61862),
                fn = e(63401),
                wn = e(46359),
                Fn = e(41427),
                kn = e(31569),
                yn = e(17392),
                Cn = e(58721),
                _n = e(8018),
                Sn = e(10771),
                Dn = e(19274),
                Mn = e(54499),
                Bn = e(398),
                Pn = e(3222),
                Nn = e(9257),
                zn = e(47791),
                In = e(5030);
            const An = new Map([
                ["IoMdCheckmarkCircle", {
                    component: (0, In.jsx)(jn.M, {}),
                    alt: "Check"
                }],
                ["IoMdInformationCircle", {
                    component: (0, In.jsx)(fn.Z, {}),
                    alt: "Information"
                }],
                ["IoMdCloseCircle", {
                    component: (0, In.jsx)(bn.m, {}),
                    alt: "Close"
                }],
                ["BiDollar", {
                    component: (0, In.jsx)(g.p, {}),
                    alt: "Dollar"
                }],
                ["AiFillLike", {
                    component: (0, In.jsx)(i.L, {}),
                    alt: "Like"
                }],
                ["AiFillDislike", {
                    component: (0, In.jsx)(s.O, {}),
                    alt: "Dislike"
                }],
                ["FaPalette", {
                    component: (0, In.jsx)(vt.S, {}),
                    alt: "Paint"
                }],
                ["FaUser", {
                    component: (0, In.jsx)(Wt.X, {}),
                    alt: "Bars"
                }],
                ["FaWheelchair", {
                    component: (0, In.jsx)(Jt.h, {}),
                    alt: "Handicap Accessible"
                }],
                ["FaWifi", {
                    component: (0, In.jsx)(Qt._, {}),
                    alt: "WIFI"
                }],
                ["BiBuildings", {
                    component: (0, In.jsx)(c.o, {}),
                    alt: "Building"
                }],
                ["BiTimeFive", {
                    component: (0, In.jsx)(x.s, {}),
                    alt: "Time"
                }],
                ["MdLocationOn", {
                    component: (0, In.jsx)(Sn.$, {}),
                    alt: "Location"
                }],
                ["BiCalendarAlt", {
                    component: (0, In.jsx)(m.V, {}),
                    alt: "Date"
                }],
                ["website", {
                    component: (0, In.jsx)(r.H, {}),
                    alt: "Website"
                }],
                ["email", {
                    component: (0, In.jsx)(Kt.I, {}),
                    alt: "Mail"
                }],
                ["github", {
                    component: (0, In.jsx)(st.h, {}),
                    alt: "Github"
                }],
                ["twitter", {
                    component: (0, In.jsx)(Ot.f, {}),
                    alt: "Twitter"
                }],
                ["facebook", {
                    component: (0, In.jsx)(K.A, {}),
                    alt: "Facebook"
                }],
                ["linkedin", {
                    component: (0, In.jsx)(gt.l, {}),
                    alt: "Linkedin"
                }],
                ["FaAngleRight", {
                    component: (0, In.jsx)(f.H, {}),
                    alt: "Angle Right"
                }],
                ["FaAward", {
                    component: (0, In.jsx)(w.M, {}),
                    alt: "Award"
                }],
                ["FaBasketballBall", {
                    component: (0, In.jsx)(k.Q, {}),
                    alt: "Basketball"
                }],
                ["FaBaby", {
                    component: (0, In.jsx)(F.x, {}),
                    alt: "Baby"
                }],
                ["FaBeer", {
                    component: (0, In.jsx)(y.A, {}),
                    alt: "Beer Glass"
                }],
                ["FaBell", {
                    component: (0, In.jsx)(C.Z, {}),
                    alt: "Bell"
                }],
                ["FaBirthdayCake", {
                    component: (0, In.jsx)(S.R, {}),
                    alt: "Birthday Cake"
                }],
                ["FaBiking", {
                    component: (0, In.jsx)(_.w, {}),
                    alt: "Biking"
                }],
                ["FaBoxOpen", {
                    component: (0, In.jsx)(B.A, {}),
                    alt: "Box Open"
                }],
                ["FaBriefcaseMedical", {
                    component: (0, In.jsx)(P.T, {}),
                    alt: "Briefcase Medical"
                }],
                ["FaBookmark", {
                    component: (0, In.jsx)(M.V, {}),
                    alt: "Bookmark"
                }],
                ["FaBook", {
                    component: (0, In.jsx)(D.M, {}),
                    alt: "Book"
                }],
                ["FaBullhorn", {
                    component: (0, In.jsx)(N.k, {}),
                    alt: "Bullhorn"
                }],
                ["FaCarAlt", {
                    component: (0, In.jsx)(I.O, {}),
                    alt: "Vehicle"
                }],
                ["FaCamera", {
                    component: (0, In.jsx)(z.D, {}),
                    alt: "Camera"
                }],
                ["FaCat", {
                    component: (0, In.jsx)(U.v, {}),
                    alt: "Cat"
                }],
                ["FaChartLine", {
                    component: (0, In.jsx)(L.O, {}),
                    alt: "Chart Line"
                }],
                ["FaChild", {
                    component: (0, In.jsx)(E.O, {}),
                    alt: "Child"
                }],
                ["FaCoffee", {
                    component: (0, In.jsx)(H.E, {}),
                    alt: "Coffee"
                }],
                ["FaComments", {
                    component: (0, In.jsx)(q.O, {}),
                    alt: "Comments"
                }],
                ["FaCrown", {
                    component: (0, In.jsx)(J.C, {}),
                    alt: "Crown"
                }],
                ["FaDog", {
                    component: (0, In.jsx)(Q.Z, {}),
                    alt: "Dog"
                }],
                ["FaFemale", {
                    component: (0, In.jsx)(X.C, {}),
                    alt: "Female"
                }],
                ["FaFutbol", {
                    component: (0, In.jsx)(tt.Q, {}),
                    alt: "Football"
                }],
                ["FaGamepad", {
                    component: (0, In.jsx)(nt.i, {}),
                    alt: "Gamepad"
                }],
                ["FaGem", {
                    component: (0, In.jsx)(et.s, {}),
                    alt: "Gem"
                }],
                ["FaGift", {
                    component: (0, In.jsx)(ot.R, {}),
                    alt: "Gift"
                }],
                ["FaGlobe", {
                    component: (0, In.jsx)(it.s, {}),
                    alt: "Globe"
                }],
                ["FaGuitar", {
                    component: (0, In.jsx)(lt.J, {}),
                    alt: "Guitar"
                }],
                ["FaHeart", {
                    component: (0, In.jsx)(rt.$, {}),
                    alt: "Heart"
                }],
                ["FaHome", {
                    component: (0, In.jsx)(ct.x, {}),
                    alt: "Home"
                }],
                ["FaInfo", {
                    component: (0, In.jsx)(mt.L, {}),
                    alt: "Info"
                }],
                ["FaLightbulb", {
                    component: (0, In.jsx)(dt.i, {}),
                    alt: "Lightbulb"
                }],
                ["FaMale", {
                    component: (0, In.jsx)(xt._, {}),
                    alt: "Male"
                }],
                ["FaMoneyBillWave", {
                    component: (0, In.jsx)(jt.l, {}),
                    alt: "Money Bill"
                }],
                ["FaMusic", {
                    component: (0, In.jsx)(bt.H, {}),
                    alt: "Music"
                }],
                ["FaPizzaSlice", {
                    component: (0, In.jsx)(yt.E, {}),
                    alt: "Pizza Slice"
                }],
                ["FaPlane", {
                    component: (0, In.jsx)(Ct.N, {}),
                    alt: "Plane"
                }],
                ["FaQuestionCircle", {
                    component: (0, In.jsx)(Dt.M, {}),
                    alt: "Question Circle"
                }],
                ["FiSlash", {
                    component: (0, In.jsx)($t.B, {}),
                    alt: "Slash Circle"
                }],
                ["FaQuoteLeft", {
                    component: (0, In.jsx)(Mt.f, {}),
                    alt: "Quote Left"
                }],
                ["FaRibbon", {
                    component: (0, In.jsx)(Pt.K, {}),
                    alt: "Ribbon"
                }],
                ["FaRocket", {
                    component: (0, In.jsx)(Nt.e, {}),
                    alt: "Rocket"
                }],
                ["FaShieldAlt", {
                    component: (0, In.jsx)(zt.b, {}),
                    alt: "Shield"
                }],
                ["FaSun", {
                    component: (0, In.jsx)(Et.M, {}),
                    alt: "Sun"
                }],
                ["FaThumbsUp", {
                    component: (0, In.jsx)(Gt.s, {}),
                    alt: "Thumbs Up"
                }],
                ["FaTools", {
                    component: (0, In.jsx)(Zt.C, {}),
                    alt: "Tools"
                }],
                ["FaTrophy", {
                    component: (0, In.jsx)(Ht.y, {}),
                    alt: "Trophy"
                }],
                ["FaUmbrellaBeach", {
                    component: (0, In.jsx)(qt.j, {}),
                    alt: "Umbrella Beach"
                }],
                ["FaCocktail", {
                    component: (0, In.jsx)(Z.e, {}),
                    alt: "Cocktail"
                }],
                ["AiOutlineFire", {
                    component: (0, In.jsx)(l.Z, {}),
                    alt: "Hot (Fire)"
                }],
                ["HiCreditCard", {
                    component: (0, In.jsx)(cn.M, {}),
                    alt: "CreditCard"
                }],
                ["HiOutlineCreditCard", {
                    component: (0, In.jsx)(mn.s, {}),
                    alt: "Outline Credit Card"
                }],
                ["FaShoppingCart", {
                    component: (0, In.jsx)(At.F, {}),
                    alt: "Shopping Cart"
                }],
                ["FaCartArrowDown", {
                    component: (0, In.jsx)(A.g, {}),
                    alt: "Cart Arrow Down"
                }],
                ["FaCartPlus", {
                    component: (0, In.jsx)(T.r, {}),
                    alt: "Cart Plus"
                }],
                ["BsFillBagFill", {
                    component: (0, In.jsx)(j.S, {}),
                    alt: "Fill Bag Fill"
                }],
                ["BsBag", {
                    component: (0, In.jsx)(h.a, {}),
                    alt: "Bag"
                }],
                ["FaMoneyBill", {
                    component: (0, In.jsx)(ht.G, {}),
                    alt: "Money Bill"
                }],
                ["FaPaypal", {
                    component: (0, In.jsx)(Ft.k, {}),
                    alt: "Paypal"
                }],
                ["FaStripe", {
                    component: (0, In.jsx)(Lt.g, {}),
                    alt: "Stripe"
                }],
                ["SiVisa", {
                    component: (0, In.jsx)(zn.v, {}),
                    alt: "Visa"
                }],
                ["RiMastercardFill", {
                    component: (0, In.jsx)(Mn.j, {}),
                    alt: "Mastercard Fill"
                }],
                ["SiAmericanexpress", {
                    component: (0, In.jsx)(Bn.f, {}),
                    alt: "Americanexpress"
                }],
                ["SiDiscover", {
                    component: (0, In.jsx)(Pn.V, {}),
                    alt: "Discover"
                }],
                ["FaDollarSign", {
                    component: (0, In.jsx)(V.R, {}),
                    alt: "Dollar Sign"
                }],
                ["FaEuroSign", {
                    component: (0, In.jsx)(Y.J, {}),
                    alt: "EuroSign"
                }],
                ["FaCookieBite", {
                    component: (0, In.jsx)(W.Y, {}),
                    alt: "Cookie"
                }],
                ["ImPhone", {
                    component: (0, In.jsx)(hn.M, {}),
                    alt: "Cookie"
                }],
                ["IoPawOutline", {
                    component: (0, In.jsx)(wt.I, {}),
                    alt: "Pet Friendly"
                }],
                ["TbBuildingFactory2", {
                    component: (0, In.jsx)(nn.A, {}),
                    alt: "BuildingFactory"
                }],
                ["TbBuildingBank", {
                    component: (0, In.jsx)(Bt.v, {}),
                    alt: "BuildingBank"
                }],
                ["phone", {
                    component: (0, In.jsx)(dn.J, {}),
                    alt: "Phone"
                }],
                ["FaCheck", {
                    component: (0, In.jsx)(R.l, {}),
                    alt: "Check"
                }],
                ["FaCircle", {
                    component: (0, In.jsx)(G.g, {}),
                    alt: "Circle"
                }],
                ["FaGlassCheers", {
                    component: (0, In.jsx)(at.d, {}),
                    alt: "Glass Cheers"
                }],
                ["FaMagic", {
                    component: (0, In.jsx)(ut.h, {}),
                    alt: "Magic"
                }],
                ["FaPlus", {
                    component: (0, In.jsx)(_t.w, {}),
                    alt: "Plus"
                }],
                ["FaQuestion", {
                    component: (0, In.jsx)(St.g, {}),
                    alt: "Question"
                }],
                ["FaShoppingBag", {
                    component: (0, In.jsx)(It.X, {}),
                    alt: "Shopping Bag"
                }],
                ["FaSquare", {
                    component: (0, In.jsx)(Tt.u, {}),
                    alt: "Square"
                }],
                ["FaSuitcaseRolling", {
                    component: (0, In.jsx)(Rt.Z, {}),
                    alt: "Suitcase Rolling"
                }],
                ["CgGlassAlt", {
                    component: (0, In.jsx)(v.n, {}),
                    alt: "Glass"
                }],
                ["HiQuestionMarkCircle", {
                    component: (0, In.jsx)(gn.V, {}),
                    alt: "Question Mark Circle"
                }],
                ["IoFishOutline", {
                    component: (0, In.jsx)(wn.F, {}),
                    alt: "Fish"
                }],
                ["IoPawOutline", {
                    component: (0, In.jsx)(yn.O, {}),
                    alt: "Paw"
                }],
                ["IoWineOutline", {
                    component: (0, In.jsx)(Cn.r, {}),
                    alt: "Wine"
                }],
                ["FaFish", {
                    component: (0, In.jsx)($.O, {}),
                    alt: "Fish"
                }],
                ["FaLeaf", {
                    component: (0, In.jsx)(pt.S, {}),
                    alt: "Leaf"
                }],
                ["FaParking", {
                    component: (0, In.jsx)(ft.m, {}),
                    alt: "Parking"
                }],
                ["FaPepperHot", {
                    component: (0, In.jsx)(kt.X, {}),
                    alt: "Hot Pepper"
                }],
                ["FaWineGlassAlt", {
                    component: (0, In.jsx)(Vt.h, {}),
                    alt: "Wine Glass"
                }],
                ["GiCow", {
                    component: (0, In.jsx)(tn.L, {}),
                    alt: "Cow"
                }],
                ["GiMilkCarton", {
                    component: (0, In.jsx)(en.u, {}),
                    alt: "Milk Carton"
                }],
                ["IoMdDownload", {
                    component: (0, In.jsx)(vn.C, {}),
                    alt: "Download"
                }],
                ["MdEmail", {
                    component: (0, In.jsx)(_n.i, {}),
                    alt: "Email"
                }],
                ["FaYoutube", {
                    component: (0, In.jsx)(Yt.V, {}),
                    alt: "Youtube"
                }],
                ["GrInstagram", {
                    component: (0, In.jsx)(an.Z, {}),
                    alt: "Instagram"
                }],
                ["SiTiktok", {
                    component: (0, In.jsx)(Nn.n, {}),
                    alt: "Tiktok"
                }],
                ["BiCopyright", {
                    component: (0, In.jsx)(d.Y, {}),
                    alt: "Copy Right"
                }],
                ["AiFillCar", {
                    component: (0, In.jsx)(o.q, {}),
                    alt: "Car"
                }],
                ["AiFillHome", {
                    component: (0, In.jsx)(a.V, {}),
                    alt: "Home"
                }],
                ["BiCommentError", {
                    component: (0, In.jsx)(p.G, {}),
                    alt: "Comment Error"
                }],
                ["BiHelpCircle", {
                    component: (0, In.jsx)(u.C, {}),
                    alt: "Help Circle"
                }],
                ["BsFillChatDotsFill", {
                    component: (0, In.jsx)(b.i, {}),
                    alt: "Chat Dots"
                }],
                ["FaCog", {
                    component: (0, In.jsx)(O.p, {}),
                    alt: "Cog"
                }],
                ["GiPodium", {
                    component: (0, In.jsx)(on.e, {}),
                    alt: "Podium"
                }],
                ["GiPodiumWinner", {
                    component: (0, In.jsx)(sn.i, {}),
                    alt: "Podium Winner"
                }],
                ["HiCloudDownload", {
                    component: (0, In.jsx)(ln.E, {}),
                    alt: "Cloud Download"
                }],
                ["HiCloudUpload", {
                    component: (0, In.jsx)(rn.T, {}),
                    alt: "Cloud Upload"
                }],
                ["HiOutlineInformationCircle", {
                    component: (0, In.jsx)(pn.i, {}),
                    alt: "Information Circle"
                }],
                ["ImCart", {
                    component: (0, In.jsx)(un.u, {}),
                    alt: "Cart"
                }],
                ["ImHeart", {
                    component: (0, In.jsx)(xn.p, {}),
                    alt: "Heart"
                }],
                ["FiRadio", {
                    component: (0, In.jsx)(Xt.r, {}),
                    alt: "Radio"
                }],
                ["IoGlobeSharp", {
                    component: (0, In.jsx)(Fn.d, {}),
                    alt: "Globe Sharp"
                }],
                ["IoNewspaperSharp", {
                    component: (0, In.jsx)(kn.W, {}),
                    alt: "Newspaper Sharp"
                }],
                ["MdRadio", {
                    component: (0, In.jsx)(Dn.B, {}),
                    alt: "Radio"
                }],
                ["TbLeaf", {
                    component: (0, In.jsx)(pt.S, {}),
                    alt: "Leaf"
                }],
                ["TbPepper", {
                    component: (0, In.jsx)(kt.X, {}),
                    alt: "Pepper"
                }],
                ["TbMeat", {
                    component: (0, In.jsx)(tn.L, {}),
                    alt: "Meat"
                }],
                ["TbMilk", {
                    component: (0, In.jsx)(en.u, {}),
                    alt: "Milk Carton"
                }],
                ["FaStar", {
                    component: (0, In.jsx)(Ut.Q, {}),
                    alt: "Star"
                }]
            ])
        },
        13018: (t, n, e) => {
            e.d(n, {
                b: () => st
            });
            var o, s = e(60719),
                a = e(1081),
                i = e(51889),
                l = e(53617),
                r = e(13736),
                c = e(18744),
                m = e(36466);
            const p = c.default.div(o || (o = (0, r.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: stretch;\n\n  .nindo-sidebar {\n    height: 100%;\n    border-left: 1px solid var(", ");\n    border-right: 1px solid var(", ");\n  }\n\n  .nindo-list {\n    font-size: 1rem;\n    gap: 20px;\n  }\n\n  > main {\n    flex: 1;\n    background-color: var(", ");\n    color: var(", ");\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    .media-manager-content {\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      overflow: auto;\n    }\n\n    > footer {\n      position: sticky;\n      bottom: 0;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: var(", ");\n      padding: 20px 20px 10px;\n      gap: 20px;\n    }\n  }\n"])), m.Dm.background900, m.Dm.background900, m.Dm.background900, m.Dm.text500, m.Dm.background900);
            var d, g = e(34798),
                u = e(96315),
                x = e(25885),
                h = e(67916),
                j = e(95707),
                b = e(46175),
                v = e(95440),
                f = e(97682),
                w = e(506),
                F = e(59025),
                k = e(74774),
                y = e(74930);
            const C = c.default.header(d || (d = (0, r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 20px;\n  background-color: var(", ");\n  padding: 15px 20px;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n\n  .actions {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n\n    svg {\n      font-size: 1.2rem;\n    }\n  }\n\n  .search {\n    position: relative;\n\n    .nindo-input {\n      padding-left: 30px;\n\n      &:disabled + svg {\n        opacity: 0.3;\n      }\n    }\n\n    svg {\n      font-size: 1.2rem;\n      position: absolute;\n      left: 8px;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  }\n"])), m.Dm.background700);
            var _ = e(5030);
            const S = t => {
                let {
                    onChange: n,
                    showActions: e,
                    showSearch: o,
                    fileUploadProps: s = {}
                } = t;
                const [a, r] = (0, l.useState)(""), c = (0, k.J)();
                return (0, _.jsxs)(C, {
                    className: "media-manager-toolbar",
                    children: [(0, _.jsx)("div", {
                        className: "actions",
                        children: e && (0, _.jsx)(y.B, {
                            successCallback: () => null === n || void 0 === n ? void 0 : n("", !0),
                            acceptType: null === s || void 0 === s ? void 0 : s.acceptType,
                            disabled: "undefined" === typeof(null === s || void 0 === s ? void 0 : s.disabled) || (null === s || void 0 === s ? void 0 : s.disabled),
                            disabledCallback: (null === s || void 0 === s ? void 0 : s.disabledCallback) || (() => {
                                c("Your current premium plan doesn't support media uploads.")
                            }),
                            sizeLimitInMB: (null === s || void 0 === s ? void 0 : s.sizeLimitInMB) || 5,
                            allowMultiple: !0,
                            maxUploads: 5,
                            ...s,
                            children: (0, _.jsxs)(i.z, {
                                variant: "secondary",
                                children: [(0, _.jsx)(F.l, {}), "Upload File"]
                            })
                        })
                    }), (0, _.jsxs)("div", {
                        className: "search",
                        children: [(0, _.jsx)(f.I, {
                            disabled: !o,
                            value: a,
                            onChange: t => r(t.target.value),
                            placeholder: "Enter text...",
                            onKeyDown: t => {
                                13 !== t.keyCode && "Enter" !== t.key || null === n || void 0 === n || n(a)
                            }
                        }), (0, _.jsx)(w.G, {})]
                    })]
                })
            };
            var D;
            const M = c.default.div(D || (D = (0, r.Z)(["\n  .media-manager-content-items {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    gap: 20px;\n    padding: 20px;\n    height: fit-content;\n  }\n"])));
            var B, P, N = e(51912),
                z = e(49790),
                I = e(93046),
                A = e(57519),
                T = e(61550),
                U = e(66274),
                L = e(19941),
                R = e(94290),
                E = e(21152),
                G = e(78582),
                Z = e(42572),
                H = e(48730),
                O = e.n(H),
                q = e(64921);
            const W = c.default.div(B || (B = (0, r.Z)(["\n  width: 100px;\n  border-radius: 5px;\n  background-color: var(", ");\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: 0.2s;\n  position: relative;\n\n  &.selected {\n    box-shadow: 0 0 0 2px var(", ");\n  }\n\n  &:hover {\n    figcaption {\n      color: var(", ");\n    }\n\n    .nindo-popover-trigger {\n      opacity: 1;\n    }\n\n    img {\n      opacity: 0.5;\n    }\n  }\n\n  .figure-media {\n    width: 100%;\n    height: 100px;\n    background-color: var(", ");\n    color: var(", ");\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px 5px 0 0;\n    overflow: hidden;\n\n    svg {\n      font-size: 2rem;\n    }\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: 0.2s;\n  }\n\n  figcaption {\n    padding: 8px 5px;\n    width: 100%;\n    color: var(", ");\n    transition: 0.2s;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: inherit;\n    height: 30px;\n\n    input {\n      width: 100%;\n      padding: 1px 5px;\n      font-size: 0.85rem;\n      border-radius: 2px;\n    }\n  }\n\n  .nindo-popover-trigger {\n    position: absolute;\n    right: 3px;\n    top: 0;\n    font-size: 24px;\n    color: var(", ");\n    transition: 0.2s;\n    cursor: pointer;\n    opacity: 0;\n\n    &:hover {\n      color: var(", ");\n    }\n  }\n"])), m.Dm.background700, m.Dm.primary500, m.Dm.text100, m.Dm.background500, m.Dm.text300, m.Dm.text500, m.Dm.primary500, m.Dm.primary300),
                J = c.default.div(P || (P = (0, r.Z)(["\n  background-color: var(", ");\n  color: var(", ");\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n  padding: 7px 0;\n  width: 160px;\n  border-radius: 10px;\n  box-shadow: 0 1px 10px rgba(255, 255, 255, 0.05);\n  font-size: 0.9rem;\n\n  button {\n    color: var(", ");\n    padding: 5px 15px;\n    text-decoration: none;\n    position: relative;\n    font-size: inherit;\n    transition: 0.2s;\n    width: 100%;\n    justify-content: flex-start;\n    border-radius: 0;\n    gap: 10px;\n\n    &.delete {\n      color: var(", ");\n\n      svg {\n        font-size: 1.15rem;\n        margin-top: -2.5px;\n      }\n\n      &:hover {\n        color: var(", ");\n      }\n    }\n\n    svg {\n      font-size: 1.05rem;\n    }\n\n    &:hover {\n      background-color: rgba(255, 255, 255, 0.075);\n      color: var(", ");\n    }\n  }\n"])), m.Dm.background700, m.Dm.text500, m.Dm.text100, m.Dm.error, m.Dm.error, m.Dm.text000),
                Q = t => {
                    let {
                        item: n,
                        onClick: e,
                        selected: o,
                        showActions: s
                    } = t;
                    const a = (0, u.M)(),
                        {
                            platform: r
                        } = (0, x.b)(),
                        [c, m] = (0, l.useState)(!1),
                        [p, d] = (0, l.useState)(!1),
                        [g, j] = (0, l.useState)(!1),
                        [w, F] = (0, l.useState)(n.name || ""),
                        k = (0, l.useRef)(null),
                        y = new h.d(a.meta, r);

                    function C() {
                        w !== n.name && y.update(n.guid, w), j(!1)
                    }
                    return (0, l.useEffect)((() => {
                        g && setTimeout((() => {
                            var t;
                            k.current && (null === (t = k.current.querySelector("input")) || void 0 === t || t.focus())
                        }), 50)
                    }), [g]), (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsxs)(W, {
                            onClick: () => e(n),
                            className: O()({
                                selected: o
                            }),
                            title: n.name || "Untitled",
                            children: [(0, _.jsx)("div", {
                                className: "figure-media",
                                children: function() {
                                    if (n.loading) return (0, _.jsx)(v.a, {});
                                    switch (n.assetType) {
                                        case "image":
                                            return n.url ? (0, _.jsx)("img", {
                                                src: n.thumbnail || n.url,
                                                alt: n.name
                                            }) : (0, _.jsx)(L.s, {});
                                        case "svg":
                                            return n.url ? (0, _.jsx)(q.y, {
                                                fontSize: 45,
                                                svg: n.url
                                            }) : (0, _.jsx)(L.s, {});
                                        case "pdf":
                                            return (0, _.jsx)(R.y, {});
                                        case "video":
                                            return (0, _.jsx)(E.L, {});
                                        case "csv":
                                            return (0, _.jsx)(U.l, {});
                                        case "audio":
                                            return (0, _.jsx)(T.C, {});
                                        default:
                                            return (0, _.jsx)(A.p, {})
                                    }
                                }()
                            }), (0, _.jsx)("figcaption", {
                                ref: k,
                                children: !g || n.loading ? w || "Untitled" : (0, _.jsx)(f.I, {
                                    value: w,
                                    onChange: t => F(t.target.value),
                                    onSubmit: C,
                                    onKeyDown: t => {
                                        13 !== t.keyCode && "Enter" !== t.key || C()
                                    },
                                    onBlur: C
                                })
                            }), s && !n.loading && (0, _.jsx)(N.J, {
                                open: c,
                                onOpenChange: t => m(t),
                                align: "end",
                                contentElm: (0, _.jsxs)(J, {
                                    children: [(0, _.jsxs)(i.z, {
                                        variant: "transparent",
                                        onClick: function(t) {
                                            t.stopPropagation(), m(!1), j(!g)
                                        },
                                        children: [(0, _.jsx)(G.L, {}), "Rename"]
                                    }), (0, _.jsxs)(i.z, {
                                        variant: "transparent",
                                        className: "delete",
                                        onClick: t => {
                                            t.stopPropagation(), m(!1), d(!0)
                                        },
                                        children: [(0, _.jsx)(Z.Z, {}), "Delete"]
                                    })]
                                }),
                                children: (0, _.jsx)(I.e, {})
                            })]
                        }, "media-".concat(n.guid || Date.now())), (0, _.jsx)(z.l, {
                            show: p,
                            approveCallback: async function(t) {
                                t.stopPropagation(), e(void 0), d(!1);
                                try {
                                    await y.delete(n.guid || "");
                                    const t = document.querySelector("#media-manager-filer-reload");
                                    t && t.click()
                                } catch (t) {
                                    b.j.error({
                                        title: "Could not delete media.",
                                        message: t.message,
                                        autoDismiss: 3
                                    })
                                }
                            },
                            closeCallback: () => d(!1),
                            message: (0, _.jsxs)(_.Fragment, {
                                children: [(0, _.jsx)("p", {
                                    style: {
                                        marginBottom: "20px"
                                    },
                                    children: "Are you sure you want to delete the following media?"
                                }), (0, _.jsx)("p", {
                                    children: (0, _.jsx)("strong", {
                                        children: n.name
                                    })
                                })]
                            }),
                            title: "Delete Asset"
                        })]
                    })
                },
                V = t => {
                    let {
                        onSelect: n,
                        selectedAssets: e = [],
                        toolbarProps: o,
                        getFilesPromise: s,
                        showActions: a,
                        allowMultiple: r = !1
                    } = t;
                    const [c, m] = (0, l.useState)(e), [p, d] = (0, l.useState)(""), [g, u] = (0, l.useState)(!1), [x, h] = (0, l.useState)([]), [j, f] = (0, l.useState)({
                        page: 1,
                        limit: 25,
                        done: !1
                    });
                    async function w() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (!g) {
                            t && h([]), u(!0);
                            try {
                                var n;
                                const e = t ? 1 : j.page,
                                    o = await s(p, e, j.limit);
                                if (!o.success) throw new Error(o.message);
                                if (null === (n = o.data) || void 0 === n || !n.length) return f({ ...j,
                                    done: !0
                                }), void u(!1);
                                f({ ...j,
                                    page: e + 1,
                                    done: o.data.length < j.limit
                                }), h(t ? [...o.data] : [...x, ...o.data])
                            } catch (e) {}
                            u(!1)
                        }
                    }

                    function F(t) {
                        const n = [...c];
                        if (r) {
                            if (null !== t && void 0 !== t && t.guid) {
                                const e = n.findIndex((n => n.guid === t.guid || !n.guid && n.url === t.url));
                                e > -1 ? n.splice(e, 1) : n.push(t)
                            }
                        } else null !== t && void 0 !== t && t.guid ? n[0] = t : n.pop();
                        m(n)
                    }

                    function k() {
                        w(!0)
                    }
                    return (0, l.useEffect)((() => {
                        n(c)
                    }), [c]), (0, l.useEffect)((() => {
                        k()
                    }), [p]), (0, l.useEffect)((() => {
                        w()
                    }), []), (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(S, { ...o,
                            fileUploadProps: { ...o.fileUploadProps,
                                uploadStartCallback: t => {
                                    h([...t.map((t => {
                                        var n;
                                        return {
                                            guid: "temp-".concat(t.name),
                                            loading: !0,
                                            url: "",
                                            assetType: (null === (n = o.fileUploadProps) || void 0 === n ? void 0 : n.acceptType) || "image",
                                            name: t.name
                                        }
                                    })), ...x])
                                },
                                successCallback: (t, n, e) => {
                                    h((o => [...o.map((o => (o.guid === "temp-".concat(e.name) && (o = { ...o,
                                        ...n,
                                        url: t,
                                        thumbnail: t,
                                        loading: !1
                                    }), o)))]))
                                },
                                errorCallback: (t, n) => {
                                    h([...x.filter((t => t.guid !== "temp-".concat(n.name)))]), b.j.removeAll(), b.j.error({
                                        title: t,
                                        autoDismiss: 4.5
                                    })
                                }
                            },
                            onChange: function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                d(t), n && t === p && k()
                            }
                        }), (0, _.jsxs)("div", {
                            className: "media-manager-content",
                            children: [(0, _.jsxs)(M, {
                                children: [x.length > 0 && (0, _.jsx)("div", {
                                    className: "media-manager-content-items",
                                    children: x.map(((t, n) => (0, _.jsx)(Q, {
                                        onClick: F,
                                        selected: c.some((n => n.guid === t.guid || !n.guid && n.url === t.url)),
                                        item: t,
                                        showActions: a
                                    }, "media-".concat(t.guid, "-").concat(n))))
                                }), 0 === x.length && !g && (0, _.jsx)("p", {
                                    style: {
                                        padding: "40px 20px"
                                    },
                                    children: "Could not find any media files."
                                }), g && (0, _.jsx)(v.a, {
                                    style: {
                                        margin: "10px auto 0",
                                        display: "block"
                                    }
                                }), !g && !j.done && x.length > 0 && (0, _.jsx)(i.z, {
                                    style: {
                                        margin: "0 auto 20px"
                                    },
                                    variant: "secondary",
                                    onClick: () => w(),
                                    children: "Load More"
                                })]
                            }), (0, _.jsx)("div", {
                                id: "media-manager-filer-reload",
                                style: {
                                    display: "none"
                                },
                                onClick: k
                            })]
                        })]
                    })
                },
                Y = new Map([
                    ["https://website-assets.commoninja.com/distribution/1699431660007_anchor.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Anchor"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431675607_band-aid.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Band Aid"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431702844_battery.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Battery"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431711813_bicycle.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Bicycle"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431719177_book.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Book"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431726305_briefcase.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Briefcase"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431733112_bus.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Bus"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431741319_calendar.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Calendar"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431750174_camera.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Camera"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431755586_car.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Car"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435350806_chat.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Chat"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435364147_check.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Check"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435375399_checkmark.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Checkmark"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435391576_clipboard.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Clipboard"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435396707_clock.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Clock"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435401695_clouds.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Clouds"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435421928_coffee_cup.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Coffee Cup"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435426759_compass.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Compass"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435432170_controller.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Controller"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699435437071_credit_card.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Credit Card"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442112214_delete.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Delete"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442128089_diamond.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Diamond"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442195426_dislike.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Dislike"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442211165_dollar.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Dollar"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442222199_euro.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Euro"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442233407_exclamation_mark.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Exclamation Mark"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442246062_eye.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Eye"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442258397_file.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "File"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442270712_film_reel.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Film Reel"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442284461_fire.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Fire"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431853087_flag.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Flag"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431878307_flower.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Flower"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431907383_folder.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Folder"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431923377_food.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Food"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431941727_gift.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Gift"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431960572_globe.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Globe"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431979563_hammer.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Hammer"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431996711_heart.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Heart"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699432014904_home.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Home"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699432035269_id_card.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Id Card"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442306316_information.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Information"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442318085_key.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Key"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442330214_lightbulb.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Lightbulb"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442340996_lightning.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Lightning"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442353223_like.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Like"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442365246_link.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Link"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442376767_location.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Location"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699442386502_lock.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Lock"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699438351319_magic_wand.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Magic Wand"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430625551_mail.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Mail"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430637763_mailbox.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Mailbox"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430657963_map.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Map"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430647401_medal.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Medal"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430759734_medical_cross.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Medical Cross"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430772001_megaphone.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Megaphone"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430781188_microphone.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Microphone"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430791152_microscope.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Microscope"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430801733_moeny.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Moeny"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430809907_moon.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Moon"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430828343_mountains.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Mountains"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430840103_music_note.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Music Note"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430850340_newspaper.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Newspaper"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430861983_no_entry.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "No Entry"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430872304_paint_brush.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Paint Brush"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430883140_palette.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Palette"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430894407_pen.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Pen"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430906069_pencil.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Pencil"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430921857_people.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "People"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430930708_person.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Person"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699430939835_phone.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Phone"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431050165_plane.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Plane"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431065936_plant.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Plant"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431079330_plug.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Plug"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431093645_pound.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Pound"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431263826_puzzle.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Puzzle"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431307095_question_mark.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Question Mark"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431318380_rain.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Rain"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431331737_recycle.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Recycle"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431344953_ribbon.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Ribbon"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431358816_rocket.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Rocket"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431370955_ruler.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Ruler"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431385953_scissors.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Scissors"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431409843_search.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Search"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431420312_settings.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Settings"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431430437_shield.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Shield"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431441171_ship.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Ship"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431453219_shopping_cart.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Shopping Cart"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431466538_snowflake.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Snowflake"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431481594_speaker.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Speaker"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431493629_star_of_life.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Star Of Life"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431507996_star.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Star"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431522992_stars.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Stars"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431534414_stopwatch.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Stopwatch"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431549782_sun.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Sun"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431561305_target.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Target"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431573948_tools.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Tools"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431584515_train.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Train"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431600035_trash_bin.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Trash Bin"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431622539_tree.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Tree"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431699421_trophy.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Trophy"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431710732_umbrella.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Umbrella"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431740494_unlock.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Unlock"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431752473_video_camera.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Video Camera"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431763953_wallet.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Wallet"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431778298_warning.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Warning"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431788760_wifi_signal.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Wifi Signal"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431799881_wrench.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Wrench"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431812825_yen.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Yen"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431822996_zoom_in.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Zoom In"
                    }],
                    ["https://website-assets.commoninja.com/distribution/1699431834663_zoom_out.svg", {
                        component: (0, _.jsx)(_.Fragment, {}),
                        alt: "Zoom Out"
                    }]
                ]),
                K = t => {
                    let {
                        onSelect: n,
                        selectedAssets: e = [],
                        allowMultiple: o = !1
                    } = t;
                    const s = (0, u.M)(),
                        {
                            platform: a,
                            projectId: i
                        } = (0, x.b)();
                    new h.d(s.meta, a);
                    return (0, _.jsx)(V, {
                        allowMultiple: o,
                        onSelect: n,
                        selectedAssets: e,
                        toolbarProps: {
                            onChange: () => {
                                const t = document.querySelector("#media-manager-filer-reload");
                                t && t.click()
                            },
                            showSearch: !0
                        },
                        getFilesPromise: async function(t) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
                            return {
                                success: !0,
                                message: "",
                                data: [...Y.entries(), ...j.J.entries()].filter((n => {
                                    let [e, o] = n;
                                    return o.alt.toLowerCase().includes((null === t || void 0 === t ? void 0 : t.toLowerCase()) || "")
                                })).slice((n - 1) * e, e * n).map((t => {
                                    var n;
                                    const e = t[0],
                                        o = (null === (n = t[1]) || void 0 === n ? void 0 : n.alt) || "";
                                    return {
                                        guid: (0, g.Z)(),
                                        assetType: "svg",
                                        name: o,
                                        url: e,
                                        userId: "",
                                        serviceName: "",
                                        thumbnail: e
                                    }
                                }))
                            }
                        }
                    })
                };
            var X;
            const $ = c.default.div(X || (X = (0, r.Z)(["\n  align-self: center;\n  padding: 50px;\n  min-width: 550px;\n  max-width: 100%;\n  background-color: var(", ");\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  border-radius: 5px;\n\n  h3 {\n    font-size: 1.2rem;\n    color: var(", ");\n  }\n"])), m.Dm.background700, m.Dm.text000),
                tt = t => {
                    let {
                        onSelect: n
                    } = t;
                    const [e, o] = (0, l.useState)("");
                    return (0, l.useEffect)((() => {
                        n([{
                            url: e
                        }])
                    }), [e]), (0, _.jsxs)(_.Fragment, {
                        children: [(0, _.jsx)(S, {}), (0, _.jsx)("div", {
                            className: "media-manager-content",
                            children: (0, _.jsxs)($, {
                                children: [(0, _.jsx)("h3", {
                                    children: "Paste the URL of the media you want to use"
                                }), (0, _.jsx)(f.I, {
                                    value: e,
                                    onChange: t => o(t.target.value),
                                    placeholder: "Paste URL here..."
                                })]
                            })
                        })]
                    })
                },
                nt = t => {
                    let {
                        onSelect: n,
                        selectedAssets: e = [],
                        uploadIsAvailable: o,
                        uploadDisabledCallback: s,
                        assetType: a,
                        fileSizeLimitInMB: i,
                        allowMultiple: l = !1
                    } = t;
                    const r = (0, u.M)(),
                        {
                            platform: c,
                            projectId: m
                        } = (0, x.b)(),
                        p = new h.d(r.meta, c);
                    return (0, _.jsx)(V, {
                        onSelect: n,
                        selectedAssets: e,
                        showActions: !0,
                        allowMultiple: l,
                        toolbarProps: {
                            onChange: () => {
                                const t = document.querySelector("#media-manager-filer-reload");
                                t && t.click()
                            },
                            showSearch: !0,
                            showActions: !0,
                            fileUploadProps: {
                                disabled: !o,
                                sizeLimitInMB: i,
                                acceptType: a,
                                disabledCallback: s
                            }
                        },
                        getFilesPromise: async (t, n, e) => {
                            var o;
                            const s = await p.get({
                                q: t,
                                page: n,
                                limit: e,
                                assetType: "",
                                projectId: m
                            });
                            return s.data = ((null === (o = s.data) || void 0 === o ? void 0 : o.docs) || []).map((t => ({
                                guid: t.guid,
                                assetType: "image",
                                name: t.name,
                                url: t.url,
                                downloadUrl: t.downloadUrl,
                                userId: "",
                                serviceName: "",
                                thumbnail: t.url,
                                author: t.author
                            }))), s
                        }
                    })
                };
            var et = e(96151);
            const ot = t => {
                    let {
                        onSelect: n,
                        allowMultiple: e = !1
                    } = t;
                    const o = (0, u.M)(),
                        s = new h.d(o.meta),
                        a = new et.o(o.meta);
                    return (0, _.jsx)(V, {
                        onSelect: function(t) {
                            t.forEach((t => {
                                null !== t && void 0 !== t && t.downloadUrl && a.downloadImage(t.downloadUrl)
                            })), n(t)
                        },
                        allowMultiple: e,
                        toolbarProps: {
                            onChange: () => {
                                const t = document.querySelector("#media-manager-filer-reload");
                                t && t.click()
                            },
                            showSearch: !0
                        },
                        getFilesPromise: async (t, n, e) => {
                            var o;
                            const a = await s.getUnsplash(t, n, e);
                            return a.data = ((null === (o = a.data) || void 0 === o ? void 0 : o.docs) || []).map((t => ({
                                guid: t.guid,
                                assetType: "image",
                                name: t.description || t.name,
                                url: t.url,
                                downloadUrl: t.downloadUrl,
                                userId: "",
                                serviceName: "",
                                thumbnail: t.thumbnail || t.url,
                                author: t.author
                            }))), a
                        }
                    })
                },
                st = t => {
                    let {
                        submitCallback: n,
                        cancelCallback: e,
                        assetType: o = "image",
                        fileSizeLimitInMB: r = 5,
                        uploadIsAvailable: c = !1,
                        uploadDisabledCallback: m,
                        allowMultiple: d,
                        style: g,
                        selectedAssets: u = [],
                        enableIconTab: x,
                        defaultTab: h = "uploads",
                        availableTabs: j
                    } = t;
                    const [b, v] = (0, l.useState)(h), [f, w] = (0, l.useState)(u);
                    let F = j || [{
                        title: "My files",
                        key: "uploads"
                    }, {
                        title: "Add from URL",
                        key: "link"
                    }, {
                        title: "Unsplash",
                        key: "unsplash"
                    }];
                    return x && F.splice(2, 0, {
                        title: "Icons",
                        key: "icon"
                    }), (0, _.jsxs)(p, {
                        style: g,
                        children: [(0, _.jsx)(s.YE, {
                            width: 190,
                            children: (0, _.jsx)(s.Ex, {
                                children: (0, _.jsx)(a.a, {
                                    align: "flex-start",
                                    style: {
                                        padding: "20px"
                                    },
                                    activeKey: b,
                                    onButtonClick: (t, n) => {
                                        v(n.key)
                                    },
                                    items: F
                                })
                            })
                        }), (0, _.jsxs)("main", {
                            children: [function() {
                                switch (b) {
                                    case "uploads":
                                        return (0, _.jsx)(nt, {
                                            onSelect: w,
                                            selectedAssets: f,
                                            assetType: o,
                                            fileSizeLimitInMB: r,
                                            uploadIsAvailable: c,
                                            uploadDisabledCallback: m,
                                            allowMultiple: d
                                        });
                                    case "link":
                                        return (0, _.jsx)(tt, {
                                            onSelect: w
                                        });
                                    case "unsplash":
                                        return (0, _.jsx)(ot, {
                                            onSelect: w,
                                            allowMultiple: d
                                        });
                                    case "icon":
                                        return (0, _.jsx)(K, {
                                            selectedAssets: f,
                                            onSelect: w,
                                            allowMultiple: d
                                        })
                                }
                            }(), (0, _.jsxs)("footer", {
                                children: [e && (0, _.jsx)(i.z, {
                                    variant: "transparent",
                                    onClick: () => {
                                        e()
                                    },
                                    children: "Close"
                                }), (0, _.jsx)(i.z, {
                                    disabled: !f.length,
                                    onClick: () => {
                                        n(f.map((t => {
                                            let {
                                                url: n
                                            } = t;
                                            return n
                                        })))
                                    },
                                    children: "Use Media"
                                })]
                            })]
                        })]
                    })
                }
        },
        77647: (t, n, e) => {
            e.d(n, {
                D: () => m
            });
            var o = e(77104),
                s = e(19601),
                a = e(53617),
                i = e(99730),
                l = e(74774),
                r = e(13018),
                c = e(5030);
            const m = t => {
                var n;
                let {
                    children: e,
                    style: m = {},
                    className: p = "",
                    mediaManagerProps: d
                } = t;
                const g = (0, l.J)(),
                    u = (0, i.k)(),
                    [x, h] = (0, a.useState)(!1);
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)("span", {
                        onClick: t => {
                            t.stopPropagation(), h(!0)
                        },
                        style: m,
                        className: p,
                        children: e || (0, c.jsx)(s.k, {
                            style: {
                                cursor: "pointer"
                            }
                        })
                    }), (0, c.jsx)(o.GI, {
                        show: x,
                        closeCallback: () => h(!1),
                        closeButton: !1,
                        width: "1400px",
                        style: {
                            minHeight: "95vh"
                        },
                        children: (0, c.jsx)(r.b, { ...d,
                            uploadIsAvailable: null !== (n = d.uploadIsAvailable) && void 0 !== n ? n : u.getFeatureValue("imageUploads"),
                            uploadDisabledCallback: d.uploadDisabledCallback || (() => {
                                g("Your current plan doesn't support image uploads.")
                            }),
                            submitCallback: function(t) {
                                h(!1), d.submitCallback(t)
                            },
                            cancelCallback: () => h(!1),
                            style: {
                                position: "absolute",
                                left: 0,
                                top: 0
                            }
                        })
                    })]
                })
            }
        },
        64921: (t, n, e) => {
            e.d(n, {
                y: () => d,
                D: () => p
            });
            var o, s = e(48730),
                a = e.n(s),
                i = e(40922),
                l = e(16211),
                r = e(13736);
            const c = e(18744).default.span(o || (o = (0, r.Z)(["\n\tfont-size: var(--svg-size, 1em);\n\tcolor: var(--svg-fill);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tspan {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tline-height: 0;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\n\t[stroke-linecap='round'] path {\n\t\tfill: none;\n\t}\n\t[fill='none'] {\n\t\tfill: none;\n\t}\n\n\tsvg {\n\t\twidth: var(--svg-size, 1em);\n\t\theight: var(--svg-size, 1em);\n\t\tfill: var(--svg-fill);\n\t\tstroke: var(--svg-stroke);\n\n\t\t* {\n\t\t\tstroke: var(--svg-stroke);\n\t\t\tfill: var(--svg-fill);\n\t\t}\n\n\t\tcircle,\n\t\t[stroke-linecap='round'],\n\t\tpolyline {\n\t\t\tfill: none;\n\t\t}\n\t}\n"])));
            var m = e(5030);
            const p = t => !!t.includes(".svg") || !(!t || t.includes(".")),
                d = t => {
                    let {
                        svg: n,
                        color: e = "currentColor",
                        fontSize: o = 14,
                        loaderComp: s,
                        style: r,
                        className: p,
                        ...d
                    } = t;
                    return (0, m.jsx)(c, { ...d,
                        className: a()("svg-element", p),
                        style: {
                            "--svg-size": o ? "number" === typeof o ? o + "px" : o : "",
                            "--svg-fill": e,
                            "--svg-stroke": e,
                            ...r
                        },
                        children: n.endsWith(".svg") ? (0, m.jsx)(i.Q, {
                            wrapper: "span",
                            src: n
                        }) : (0, l.q7)(n)
                    })
                }
        },
        67916: (t, n, e) => {
            e.d(n, {
                d: () => s
            });
            var o = e(95900);
            class s extends o.O {
                constructor(t, n) {
                    super(t), this.baseApiUrl = "/api/v1", this.platform = void 0, this.platform = n
                }
                getUrlExtension() {
                    return this.platform ? "/" + this.platform : ""
                }
                async getUnsplash() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20;
                    return await this.makeRequest("".concat(this.baseApiUrl, "/asset/unsplash?pluginType=").concat(this.getPluginType(), "&serviceName=").concat(this.getServiceName(), "&q=").concat(t || "computer", "&limit=").concat(e, "&page=").concat(n, "&").concat(this.queryParams))
                }
                async get(t) {
                    let {
                        q: n = "",
                        page: e = 1,
                        limit: o = 12,
                        assetType: s = "",
                        projectId: a = ""
                    } = t;
                    return await this.makeRequest("".concat(this.baseApiUrl).concat(this.getUrlExtension(), "/asset?pluginType=").concat(this.getPluginType(), "&serviceName=").concat(this.getServiceName(), "&q=").concat(n, "&assetType=").concat(s, "&limit=").concat(o, "&page=").concat(e, "&").concat(this.queryParams).concat(this.queryParams.includes("projectId") ? "" : "&projectId=" + a))
                }
                async update(t, n) {
                    return await this.makeRequest("".concat(this.baseApiUrl).concat(this.getUrlExtension(), "/asset/").concat(t, "?pluginType=").concat(this.getPluginType(), "&").concat(this.queryParams), {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: n
                        })
                    })
                }
                async delete(t) {
                    return await this.makeRequest("".concat(this.baseApiUrl).concat(this.getUrlExtension(), "/asset/").concat(t, "?pluginType=").concat(this.getPluginType(), "&").concat(this.queryParams), {
                        method: "delete"
                    })
                }
            }
        },
        96151: (t, n, e) => {
            e.d(n, {
                o: () => a
            });
            var o = e(95900),
                s = e(67916);
            class a extends o.O {
                async downloadImage(t) {
                    const n = new s.d(this.meta),
                        e = "".concat(n.baseApiUrl, "/asset/unsplash/download?").concat(n.queryParams);
                    return await this.makeRequest(e, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            downloadLocation: t
                        })
                    })
                }
            }
        },
        6246: (t, n, e) => {
            e.d(n, {
                z: () => h
            });
            var o, s, a, i = e(58549),
                l = e(53617),
                r = e(51912),
                c = e(13736),
                m = e(18744),
                p = e(36466);
            const d = m.default.div(o || (o = (0, c.Z)(["\n\t", "\n"])), (() => (0, m.css)(s || (s = (0, c.Z)(["\n\t\tposition: relative;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 10px;\n\n\t\t.selected-color {\n\t\t\twidth: var(--size);\n\t\t\theight: var(--size);\n\t\t\tposition: relative;\n\t\t\tborder-radius: 3px;\n\t\t\tcursor: pointer;\n\t\t\tborder: 1px solid var(", ");\n\t\t\toverflow: hidden;\n\n\t\t\t&.none {\n\t\t\t\t&::before {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 50%;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tbackground: var(", ");\n\t\t\t\t\twidth: 1px;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttransform: rotate(45deg) scale(1.3);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&::after {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tborder-radius: 3px;\n\t\t\t\tleft: 0;\n\t\t\t\ttop: 0;\n\t\t\t\tbackground: linear-gradient(\n\t\t\t\t\t45deg,\n\t\t\t\t\trgba(255, 255, 255, 0.1) 0%,\n\t\t\t\t\trgba(255, 255, 255, 0.15) 30%,\n\t\t\t\t\trgba(255, 255, 255, 0) 100%\n\t\t\t\t);\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: 0.2s;\n\t\t\t}\n\n\t\t\t&:hover::after {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\n\t\t.undo {\n\t\t\tcursor: pointer;\n\t\t\ttransition: 0.2s;\n\t\t\tfont-size: 1.4rem;\n\t\t\tcolor: var(", ");\n\n\t\t\t&:hover {\n\t\t\t\tcolor: var(", ");\n\t\t\t}\n\t\t}\n\t"])), p.Dm.text700, p.Dm.text700, p.Dm.text700, p.Dm.text500))),
                g = m.default.div(a || (a = (0, c.Z)(["\n\t.sketch-picker {\n\t\tbackground: var(", ") !important;\n\n\t\tinput {\n\t\t\tborder: 1px solid var(", ") !important;\n\t\t\tbox-shadow: none !important;\n\t\t\tbackground-color: transparent;\n\t\t\tcolor: var(", ");\n\t\t\toutline: none;\n\t\t\tpadding: 6px 10px;\n\t\t\tfont-family: var(", ");\n\t\t\ttransition: 0.2s;\n\t\t\tborder-radius: 5px;\n\t\t\tline-height: 1;\n\t\t\tflex: 1;\n\n\t\t\t&:focus {\n\t\t\t\tcolor: var(", ");\n\t\t\t\tborder-color: var(", ");\n\t\t\t}\n\n\t\t\t::placeholder {\n\t\t\t\tcolor: var(", ");\n\t\t\t}\n\t\t}\n\n\t\tlabel {\n\t\t\tcolor: var(", ") !important;\n\t\t}\n\n\t\t.flexbox-fix:last-child {\n\t\t\tborder-top-color: var(", ") !important;\n\t\t}\n\t}\n"])), p.Dm.background800, p.Dm.text700, p.Dm.text500, p.Dm.primaryFont, p.Dm.text100, p.Dm.primary500, p.Dm.text700, p.Dm.text500, p.Dm.background500);
            var u = e(5030);
            const x = l.lazy((() => Promise.all([e.e(8764), e.e(2791)]).then(e.bind(e, 22791)).then((t => ({
                    default: t.SketchPicker
                }))))),
                h = t => {
                    const {
                        onChange: n,
                        position: e = "left",
                        showUndo: o,
                        disabled: s,
                        enableTransparency: a = !0,
                        defaultColor: c,
                        selectedColor: m,
                        colorFormat: p,
                        debounce: h = 0,
                        size: j = 35
                    } = t, [b, v] = (0, l.useState)(!1), f = (0, l.useRef)();

                    function w(t, e) {
                        null === e || void 0 === e || e.stopPropagation();
                        let o = "";
                        if (t && "object" === typeof t) {
                            let n = Math.round(255 * (t.rgb.a || 1)).toString(16);
                            1 == n.length && (n = "0" + n), o = t.hex + n, "rgb" === p ? o = "rgba(".concat(t.rgb.r, ",").concat(t.rgb.g, ",").concat(t.rgb.b, ",").concat(t.rgb.a, ")") : "hsl" === p && (o = "hsla(".concat(t.hsl.h, ",").concat(t.hsl.s, "%,").concat(t.hsl.l, "%,").concat(t.hsl.a, ")"))
                        }
                        "string" === typeof t && (o = t), null === n || void 0 === n || n(o)
                    }
                    return (0, u.jsxs)(d, {
                        children: [o && m && (0, u.jsx)(i.Z, {
                            size: 20,
                            className: "undo",
                            title: "Restore to default",
                            onClick: () => w(c || "")
                        }), (0, u.jsx)(r.J, {
                            open: b,
                            contentElm: (0, u.jsx)(g, {
                                children: (0, u.jsx)(l.Suspense, {
                                    fallback: (0, u.jsx)(u.Fragment, {}),
                                    children: (0, u.jsx)(x, {
                                        color: m,
                                        onChange: w,
                                        onChangeComplete: w,
                                        disableAlpha: !a
                                    })
                                })
                            }),
                            onOpenChange: t => {
                                s || v(t)
                            },
                            side: e,
                            children: (0, u.jsx)("div", {
                                className: "selected-color ".concat(m && m.length ? "" : "none"),
                                title: m ? "Click to change" : "Default color",
                                style: {
                                    backgroundColor: m,
                                    "--size": "".concat(j, "px")
                                },
                                ref: f
                            })
                        })]
                    })
                }
        },
        49790: (t, n, e) => {
            e.d(n, {
                l: () => d
            });
            var o, s, a = e(51889),
                i = e(77104),
                l = e(13736),
                r = e(18744),
                c = e(27579);
            const m = (0, r.default)(i.GI)(o || (o = (0, l.Z)(["\n\t", "\n"])), (() => (0, r.css)(s || (s = (0, l.Z)(["\n\t\tdiv.", " {\n\t\t\twidth: 520px;\n\t\t}\n\n\t\t.", " {\n\t\t\tpadding-left: 10px;\n\t\t\tpadding-right: 10px;\n\t\t}\n\n\t\tdiv.", " {\n\t\t\tfont-size: 16px;\n\t\t\tfont-style: normal;\n\t\t\tfont-weight: 400;\n\t\t\tline-height: 1.4;\n\t\t\tpadding-left: 30px;\n\t\t\tpadding-right: 30px;\n\t\t}\n\n\t\tdiv.", " {\n\t\t\tjustify-content: space-between;\n\t\t\tpadding-left: 30px;\n\t\t\tpadding-right: 30px;\n\n\t\t\t.", " {\n\t\t\t\tpadding: 8px 20px;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tfont-style: normal;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\n\t\t\t.transparent {\n\t\t\t\tpadding-left: 0;\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\t\t}\n\t"])), (0, c.N9)("popup-content-wrapper"), (0, c.N9)("popup-title"), (0, c.N9)("popup-content"), (0, c.N9)("popup-buttons"), (0, c.N9)("button"))));
            var p = e(5030);
            const d = t => {
                let {
                    show: n = !1,
                    closeCallback: e = (() => {}),
                    message: o = "",
                    title: s = "Please Confirm",
                    titleRenderer: l,
                    messageRenderer: r,
                    approveCallback: c,
                    approveButtonText: d = "Confirm",
                    cancelButtonText: g = "Cancel",
                    approveButtonProps: u = {},
                    style: x
                } = t;
                return (0, p.jsxs)(m, {
                    show: n,
                    className: "confirmation-popup",
                    closeCallback: e,
                    children: [l || (0, p.jsx)(i.jo, {
                        children: s
                    }), r || (0, p.jsx)(i.pP, {
                        children: o
                    }), (0, p.jsxs)(i.u2, {
                        children: [(0, p.jsx)(a.z, {
                            variant: "transparent",
                            onClick: t => null === e || void 0 === e ? void 0 : e(t),
                            children: g || "Cancel"
                        }), (0, p.jsx)(a.z, { ...u,
                            onClick: t => null === c || void 0 === c ? void 0 : c(t),
                            children: d || "Approve"
                        })]
                    })]
                })
            }
        },
        56699: (t, n, e) => {
            e.d(n, {
                U: () => x
            });
            var o, s, a = e(46942),
                i = e(19601),
                l = e(48730),
                r = e.n(l),
                c = e(27579),
                m = e(13736),
                p = e(18744),
                d = e(36466);
            const g = p.default.div(o || (o = (0, m.Z)(["\n\t", "\n"])), (t => {
                let {
                    size: n
                } = t, e = (null === n || void 0 === n ? void 0 : n.width) || 100, o = (null === n || void 0 === n ? void 0 : n.height) || 100;
                return "number" === typeof e && (e = "".concat(e, "px")), "number" === typeof o && (o = "".concat(o, "px")), (0, p.css)(s || (s = (0, m.Z)(["\n\t\t\tposition: relative;\n\t\t\twidth: ", ";\n\t\t\theight: ", ";\n\t\t\tborder-radius: 5px;\n\t\t\tcolor: var(", ");\n\t\t\tbackground-color: transparent;\n\t\t\tborder: 2px dashed var(", ");\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\n\t\t\t.", " {\n\t\t\t\tposition: absolute;\n\t\t\t\tright: -8px;\n\t\t\t\ttop: -7px;\n\t\t\t\tz-index: 1;\n\t\t\t\tpadding: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\tborder-radius: 50em;\n\t\t\t\twidth: 18px;\n\t\t\t\theight: 18px;\n\t\t\t\tfont-size: 0.8rem;\n\t\t\t\tborder: none;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: 0.2s;\n\t\t\t\tcursor: pointer;\n\t\t\t\tbackground: var(", ");\n\t\t\t\tcolor: var(", ");\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground: var(", ");\n\t\t\t\t\tcolor: var(", ");\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.", " {\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\tbottom: 0;\n\t\t\t\tpadding: 5px 10px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tcolor: var(", ");\n\t\t\t\tbackground-color: var(", ");\n\t\t\t\tborder-radius: inherit;\n\t\t\t\tborder-top-left-radius: 0;\n\t\t\t\tborder-bottom-right-radius: 0;\n\t\t\t}\n\n\t\t\t.", " {\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tbackground-color: var(", ");\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 0;\n\t\t\t\ttop: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tcolor: var(", ");\n\t\t\t\topacity: 0;\n\t\t\t\ttransition: 0.2s;\n\t\t\t\tz-index: 1;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-size: ", "px;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\t.", " {\n\t\t\t\t\topacity: 0.9;\n\t\t\t\t}\n\n\t\t\t\t.", " {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\timg.", " {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tobject-fit: cover;\n\t\t\t\tborder-radius: 5px;\n\t\t\t}\n\n\t\t\t> svg {\n\t\t\t\tfont-size: ", "px;\n\t\t\t}\n\t\t"])), e, o, d.Dm.text500, d.Dm.text500, (0, c.N9)("image-upload-remove-button"), d.Dm.background500, d.Dm.text300, d.Dm.background300, d.Dm.text100, (0, c.N9)("image-upload-label"), d.Dm.white, d.Dm.primary500, (0, c.N9)("image-upload-hover"), d.Dm.background800, d.Dm.text100, parseInt(String(o)) / 2, (0, c.N9)("image-upload-hover"), (0, c.N9)("image-upload-remove-button"), (0, c.N9)("image-upload-image"), parseInt(String(o)) / 2)
            }));
            var u = e(5030);
            const x = t => {
                let {
                    imageUrl: n,
                    onClick: e,
                    onRemove: o,
                    filePlaceholder: s,
                    label: l,
                    children: m,
                    ...p
                } = t;
                return (0, u.jsxs)(g, { ...p,
                    className: r()((0, c.N9)("image-upload"), p.className),
                    children: [m || (n ? (0, u.jsx)("img", {
                        className: (0, c.N9)("image-upload-image"),
                        src: n,
                        alt: "Upload Image"
                    }) : s || (0, u.jsx)(i.k, {})), l && (0, u.jsx)("div", {
                        className: (0, c.N9)("image-upload-label"),
                        children: l
                    }), (0, u.jsx)("span", {
                        className: (0, c.N9)("image-upload-hover"),
                        onClick: e,
                        title: "Upload Image",
                        children: s || (0, u.jsx)(i.k, {})
                    }), o && n && (0, u.jsx)("span", {
                        className: (0, c.N9)("image-upload-remove-button"),
                        onClick: t => {
                            t.stopPropagation(), o(t)
                        },
                        title: "Remove",
                        children: (0, u.jsx)(a.i, {})
                    })]
                })
            }
        },
        60719: (t, n, e) => {
            e.d(n, {
                YE: () => g,
                Ex: () => u,
                ZW: () => x
            });
            var o, s, a = e(48730),
                i = e.n(a),
                l = e(27579),
                r = e(13736),
                c = e(18744),
                m = e(36466);
            const p = c.default.aside(o || (o = (0, r.Z)(["\n  ", "\n"])), (t => (0, c.css)(s || (s = (0, r.Z)(["\n    overflow: hidden;\n    height: 100vh;\n    width: ", "px;\n    color: var(", ");\n    background: var(", ");\n    position: relative;\n    position: sticky;\n    top: 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas: \n      'header'\n      'body'\n      'footer';\n\n    .", " {\n      grid-area: header;\n      max-width: 100%;\n    }\n\n    .", " {\n      grid-area: body;\n      overflow: auto;\n    }\n\n    .", " {\n      grid-area: footer;\n      max-width: 100%;\n      position: relative;\n    }\n  "])), t.width || 256, m.Dm.text500, m.Dm.background700, (0, l.N9)("sidebar-header"), (0, l.N9)("sidebar-body"), (0, l.N9)("sidebar-footer"))));
            var d = e(5030);
            const g = t => {
                    let { ...n
                    } = t;
                    return (0, d.jsx)(p, { ...n,
                        className: i()((0, l.N9)("sidebar"), n.className),
                        children: n.children
                    })
                },
                u = t => {
                    let { ...n
                    } = t;
                    return (0, d.jsx)("div", { ...n,
                        className: i()((0, l.N9)("sidebar-body"), n.className),
                        children: n.children
                    })
                },
                x = t => {
                    let { ...n
                    } = t;
                    return (0, d.jsx)("div", { ...n,
                        className: i()((0, l.N9)("sidebar-footer"), n.className),
                        children: n.children
                    })
                }
        }
    }
]);