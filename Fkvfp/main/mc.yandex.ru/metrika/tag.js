(function () {
  try {
    (function () {
      function Ve(a, c, b, d) {
        var e = this;
        return E(window, "c.i", function () {
          function f(C, M, Q) {
            e[M] = ql(k, l, Q || p, M, C);
          }
          function g(C, M) {
            var Q = Pd(k, l, "", C)(k, l);
            Q && (U(Q.then) ? Q.then(Hb(h)(M)) : h(Q, M));
            return Q;
          }
          function h(C, M) {
            C && (U(C) ? m.push(C) : M && m.push(C[M]));
          }
          var k = window;
          (!k || (isNaN(a) && !a)) && We();
          var l = rl(a, Xe, c, b, d),
            m = [],
            p = [dh, Pd, eh];
          p.unshift(sl);
          var r = u(P, g),
            t = A(P, Tb),
            q = O(l);
          l.id || pb(k, q, "Invalid Metrika id: " + l.id);
          var y = gc.o("counters", {});
          if (y[q])
            return pb(k, q, "Duplicate counter " + q + " initialization"), y[q];
          y[q] = e;
          gc.C("counters", y);
          gc.Pa("counter", e);
          z(function (C) {
            C(k, l);
          }, Ye);
          tl(k, l);
          ib(k, { ea: q, name: "counter", data: l });
          g(ul);
          g(vl);
          z(r, Qd);
          g(wl);
          t.push(xl);
          g(yl);
          f(zl(k, l), "hit");
          f(Al(k, l), "params");
          q = g(Bl, Ta({ unsubscribe: 1 }));
          e.trackHash = Pd(k, l, "", n(q, Ta({ Qj: 1 })));
          f(Rd(k, l), "reachGoal");
          g(Cl);
          q = g(Dl, Ta({ Dd: 1 }));
          f(n(q, Ta({ Zi: 1 })), "notBounce");
          f(El(k, l), "firstPartyParams");
          f(G([k, l], Fl), "firstPartyParamsHashed");
          f(n(q, Ta({ hc: 1 })), "accurateTrackBounce");
          g(Gl);
          q = g(Hl, Ta({ Dd: 1 }));
          f(n(q, Ta({ Lh: 1 })), "extLink");
          f(n(q, Ta({ dh: 1 })), "addFileExtension");
          f(n(q, Ta({ file: 1 })), "file");
          f(n(q, Ta({ kd: 1 })), "trackLinks");
          f(Il(k, l), "userParams");
          f(Jl(k, l, m), "destruct", [dh, eh]);
          f(Kl(k, l), "setUserID");
          e.getClientID = g(Ll) || B;
          g(Ml);
          f(Nl(k, l), "clickmap");
          f(Ol(k, l), "enableAll");
          g(Pl);
          g(Ql);
          t.push(Rl);
          Ib(k, G([k, t, r, 1, "a.i"], fh));
          g(Sl);
          Tl(k);
          z(function (C) {
            var M = C[0];
            f((0, C[1])(k, l), M);
          }, zc);
          z(r, cb);
        })();
      }
      function Ul(a, c) {
        function b() {
          r.hidden
            ? x(k.style, Xc(["top", "right", "left", "background"], "initial"))
            : x(k.style, Xc(["top", "right", "left"], "0"), {
                background: "rgba(0, 0, 0, .3)",
              });
          y.parentNode || (t.appendChild(p), t.appendChild(y));
          r.hidden = !r.hidden;
          t.hidden = !t.hidden;
          q.hidden = !q.hidden;
        }
        function d(Q) {
          var ta = g();
          x(ta.style, hc("2px", "18px"), Ac, {
            left: "15px",
            top: "7px",
            background: "#2f3747",
            borderRadius: "2px",
          });
          ta.style.transform = "rotate(" + Q + "deg)";
          return ta;
        }
        function e(Q, ta, za, Ub, Yc) {
          var Sd = g();
          x(Sd.style, hc(ta + "px", za + "px"), Ac, {
            left: Q + "px",
            bottom: 0,
            background: Ub,
            borderTopLeftRadius: Yc,
          });
          return Sd;
        }
        var f = Za(a);
        if (!f) return B;
        var g = v("div", f),
          h = v("iframe", f),
          k = g();
        k.classList.add("__ym_wv_ign");
        x(k.style, gh, {
          bottom: "0",
          width: "100%",
          maxWidth: "initial",
          zIndex: "999999999",
        });
        var l = k.attachShadow ? k.attachShadow({ mode: "open" }) : k,
          m = g();
        x(m.style, hc("24px"), Ac, Ze, {
          top: "12px",
          right: "10px",
          background: "#3367dc",
          overflow: "hidden",
        });
        var p = g();
        x(
          p.style,
          {
            border: "2px solid transparent",
            animation: "__ym_wv_ign-spinner-animation 1s 0.21s infinite linear",
          },
          Ze,
          Ac,
          hc("48px"),
          Xc(["top", "left"], "calc(50% - 24px)"),
          Xc(["borderTopColor", "borderLeftColor"], "#fc0")
        );
        f = f("style");
        f.textContent =
          "@keyframes __ym_wv_ign-spinner-animation {to {transform: rotate(360deg);}}";
        p.appendChild(f);
        var r = g();
        r.id = "__ym_wv_ign__opener";
        x(r.style, hc("46px", "48px"), gh, {
          right: "0",
          bottom: "60px",
          cursor: "pointer",
          background: "#fff",
          borderRadius: "16px 0 0 16px",
          boxShadow:
            "0px 0px 1px rgba(67, 68, 69, 0.3), 0px 1px 2px rgba(67, 68, 69, 0.3)",
        });
        var t = g();
        x(t.style, Ac, Xc(["top", "right", "bottom"], "0"), {
          width: "600px",
          background: "#fff",
        });
        var q = g();
        q.id = "__ym_wv_ign__closer";
        x(q.style, hc("32px"), Ac, Ze, {
          top: "12px",
          right: "612px",
          cursor: "pointer",
          background: "#fff",
        });
        f = h();
        f.src = "https://metrika.yandex.ru/widget/iframe-check";
        var y = h();
        x(y.style, hc("100%"), { border: "none" });
        y.src = "https://metrika.yandex.ru/widget/dashboard?id=" + c;
        t.hidden = !0;
        q.hidden = !0;
        q.appendChild(d(45));
        q.appendChild(d(-45));
        t.appendChild(f);
        m.appendChild(
          e(
            0,
            8,
            9,
            "linear-gradient(0deg, #ff324f, #ff324f), linear-gradient(158.67deg, #ff455c 12.6%, #ff1139 96.76%)"
          )
        );
        m.appendChild(e(8, 9, 16, "#04acff", "3px"));
        m.appendChild(e(17, 7, 24, "#ffdd13"));
        r.appendChild(m);
        l.appendChild(t);
        l.appendChild(q);
        var C = ["click", "touchstart"];
        h = ia(a);
        m = a.document.body;
        l = [
          h.D(r, C, b),
          h.D(q, C, b),
          h.D(
            f,
            ["load"],
            G([ja, [D(t.removeChild, t, f), D(l.appendChild, l, r)]], z)
          ),
          h.D(y, ["load"], D(t.removeChild, t, p)),
          D(m.removeChild, m, k),
        ];
        var M = G([ja, l], z);
        l.push(
          h.D(a, ["securitypolicyviolation"], function (Q) {
            (Q = n(Q, "blockedURI")) &&
              0 <= Q.indexOf("https://metrika.yandex.ru") &&
              M();
          })
        );
        m.appendChild(k);
        return M;
      }
      function Xc(a, c) {
        return N(
          function (b, d) {
            b[d] = c;
            return b;
          },
          {},
          a
        );
      }
      function hc(a, c) {
        var b;
        return (b = {}), (b.width = a), (b.height = c || a), b;
      }
      function Vl(a, c, b, d) {
        d = n(d, "target");
        (d = Vb("button,input", a, d)) &&
          "submit" === d.type &&
          (d = hh(a, d)) &&
          (b.push(d), Y(a, G([!1, a, c, b, d], ih), 300));
      }
      function ih(a, c, b, d, e) {
        var f = Jb(c)(e, d),
          g = -1 !== f;
        if (a || g)
          g && d.splice(f, 1),
            (a = jh(c, e)),
            (a = "?" + Zc(a)),
            (d = G(
              [c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."],
              kh
            )),
            Rd(c, b, "form", d)(a);
      }
      function kh(a, c, b) {
        return Wl(a, c).then(function (d) {
          d && Bb(a, c, b)();
        });
      }
      function xl(a, c) {
        var b = Xl(a),
          d = wa(a, "r", c),
          e = E(a, "rts.p");
        return na(
          a,
          c,
          D(
            N,
            null,
            function (f, g) {
              var h = { id: g.yh, da: g.da };
              h = d(
                {
                  ba: { fa: g.oj },
                  J: Aa(g.lh),
                  G: g.aa,
                  V: { Yb: g.Yb },
                  Ra: { eb: g.eb },
                },
                h
              )["catch"](e);
              return f.then(v(h, P));
            },
            K.resolve(""),
            b
          )
        )["catch"](e);
      }
      function Yl(a, c, b, d) {
        var e;
        if ((a = Ea(a, b))) {
          var f = d.data;
          b = "" + b.id;
          var g = d.sended || [];
          d.sended || (d.sended = g);
          H(b, g) ||
            !a.params ||
            (d.counter && "" + d.counter !== b) ||
            (a.params(f),
            g.push(b),
            d.parent && c.rg(((e = {}), (e.type = "params"), (e.data = f), e)));
        }
      }
      function Zl(a) {
        var c = B,
          b = null,
          d = a.length;
        if (0 !== a.length && a[0]) {
          var e = a.slice(-1)[0];
          U(e) && ((c = e), (d = a.length + -1));
          var f = a.slice(-2)[0];
          U(f) && ((c = f), (b = e), (d = a.length + -2));
          d = a.slice(0, d);
          return { Ah: b, hb: c, aa: 1 === d.length ? a[0] : Bc(d) };
        }
      }
      function $l(a) {
        a = am(a);
        return bm[a] || a;
      }
      function cm(a) {
        a = lh(a);
        return dm[a] || "ru";
      }
      function Sl(a, c) {
        var b = mh(a),
          d = O(c),
          e = b[d];
        e || ((e = {}), (b[d] = e));
        e.Ei = !0;
        if ((b = e.wg)) (d = nh(a)), z(d, b);
      }
      function em(a, c) {
        var b = "" + c,
          d = { id: 1, da: "0" },
          e = fm(b);
        e
          ? (d.id = e)
          : -1 === b.indexOf(":")
          ? ((b = Fa(b)), (d.id = b))
          : ((b = b.split(":")),
            (e = b[1]),
            (d.id = Fa(b[0])),
            (d.da = $e(e) ? "1" : "0"));
        return [Ea(a, d), d];
      }
      function gm(a, c) {
        $c[a] || ($c[a] = []);
        $c[a].push(c);
      }
      function hm(a, c, b, d) {
        var e = c.J;
        if (b.dk || !e) d();
        else {
          var f = Td(a),
            g = Cc(a, "");
          d = u(function () {
            var q = oh(f);
            q = "" + q + im(q, g);
            e.C("gdpr", q);
            Ud(c, "gdpr", q);
          }, d);
          if (3 === b.id) d();
          else {
            var h = L(a),
              k = h.o("f1");
            if (k) k(d);
            else if (
              ((k = (k = oh(f)) ? A(v(Vd, n), k.split(",")) : []), ph(k))
            )
              d();
            else {
              var l = Wd(a),
                m = T(a);
              var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname)
                ? {
                    url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                    Sf: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(
                      " "
                    ),
                  }
                : void 0;
              var r =
                (l = l || !!p) &&
                (-1 !== m.href.indexOf("yagdprcheck=1") || g.o("yaGdprCheck"));
              m = g.o("gdpr");
              g.o("yandex_login")
                ? (k.push("13"), g.C("gdpr", Dc, 525600))
                : l
                ? H(m, Wb)
                  ? m === af
                    ? k.push("12")
                    : k.push("3")
                  : bf(a) || ad(a)
                  ? k.push("17")
                  : jm(a) && k.push("28")
                : k.push("14");
              var t = v(f, km);
              ph(k)
                ? (z(t, k), d())
                : (Xd.push(d),
                  h.C("f1", function (q, y) {
                    var C = 0;
                    if (y) {
                      var M = jb(a, y) || "";
                      C += M.length;
                    }
                    Xd.push(q);
                    1e6 >= C && Xd.push(q);
                  }),
                  (0, cf[0])(a)
                    .then(V("params.eu"))
                    .then(function (q) {
                      if (q || r) {
                        g.C("gdpr_popup", af);
                        lm(a, b);
                        if (db(a)) return mm(a, t, b);
                        var y = qh(a, f);
                        if (y)
                          return (
                            (q = nm(a, t, y, b, p)), q.then(G([a, b], om)), q
                          );
                      }
                      q || t("8");
                      return K.resolve({ value: Dc, Zd: !0 });
                    })
                    .then(function (q) {
                      g.vc("gdpr_popup");
                      if (q) {
                        var y = q.value;
                        q = q.Zd;
                        H(y, Wb) && g.C("gdpr", y, q ? void 0 : 525600);
                      }
                      y = ic(Xd, ja);
                      jc(a, y, 20)(Ua(E(a, "gdr"), B));
                      h.C("f1", ja);
                    })
                    ["catch"](E(a, "gdp.a")));
            }
          }
        }
      }
      function om(a, c) {
        if (Wd(a)) {
          var b = Td(a),
            d = Ea(a, c);
          d = d && d.params;
          b = A(v(pm, n), df(b));
          d && b.length && d("gdpr", X(Boolean, b));
        }
      }
      function mm(a, c, b) {
        var d = Yd(a, b);
        return new K(function (e) {
          var f;
          if (d) {
            var g = d.$,
              h = u(v("4", c), v(null, e)),
              k = Y(a, h, 2e3, "gdp.f.t");
            d.rg(((f = {}), (f.type = "isYandex"), f))
              .then(function (l) {
                l.isYandex
                  ? (c("5"),
                    g.D(
                      ua(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ef),
                      function (m) {
                        e({ value: rh(m[1].type) });
                      }
                    ))
                  : (c("6"), e(null));
              })
              ["catch"](h)
              .then(G([a, k], ka));
          } else e({ value: af, Zd: !0 });
        });
      }
      function lm(a, c) {
        var b = Yd(a, c);
        b &&
          b.$.D(["isYandex"], function () {
            var d;
            return (d = { type: "isYandex" }), (d.isYandex = Wd(a)), d;
          });
        return b;
      }
      function nm(a, c, b, d, e) {
        var f =
          void 0 === e
            ? { url: "https://yastatic.net/s3/gdpr/popup/v2/", Sf: qm }
            : e;
        e = f.url;
        f = rm(a, f.Sf, d.ek);
        var g = Yd(a, d);
        if (!g) return K.resolve({ value: Dc, Zd: !0 });
        var h = Ec(a, { src: "" + e + f + "_inversed_buttons.js" });
        return new K(function (k, l) {
          h
            ? (c("7"),
              (h.onerror = function () {
                var m;
                c("9");
                g.qg(((m = {}), (m.type = "GDPR-ok-view-default"), m));
                k(null);
              }),
              (h.onload = function () {
                c("10");
                b.D(
                  ua(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ef),
                  function (m) {
                    var p;
                    m = m.type;
                    g.qg(((p = {}), (p.type = m), p));
                    k({ value: rh(m) });
                  }
                );
              }))
            : (c("9"), l(Oa("gdp.e")));
        });
      }
      function rm(a, c, b) {
        a = b || lh(a);
        return H(a, c) ? a : "en";
      }
      function rh(a) {
        if (H(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return Dc;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return H(a, Wb) ? a : Dc;
      }
      function sh(a, c, b) {
        var d = n(a, "AppMetricaInitializer"),
          e = n(d, "init");
        if (e)
          try {
            D(e, d)(jb(a, c));
          } catch (f) {}
        else th = Y(a, G([a, c, 2 * b], sh), b, "ai.d");
        return function () {
          return ka(a, th);
        };
      }
      function Fl(a, c, b) {
        var d,
          e,
          f = Ea(a, c);
        f &&
          (qb(b)
            ? Ka(ba(b))
              ? (a = uh(b)) &&
                Ka(a) &&
                f.params(((d = {}), (d.__ym = ((e = {}), (e.fpmh = a), e)), d))
              : Bb(a, c, "First party params error. Empty object.")()
            : Bb(a, c, "First party params error. Not an object.")());
      }
      function uh(a) {
        a = Ba(a);
        return N(
          function (c, b) {
            var d = b[0],
              e = b[1],
              f = qb(e);
            if (!Ia(e) && !f) return c;
            e = f ? uh(e) : e;
            Ka(e) && c.push([d, e]);
            return c;
          },
          [],
          a
        );
      }
      function vh(a, c, b) {
        void 0 === b && (b = 0);
        c = Ba(c);
        c = N(
          function (d, e) {
            var f = e[0],
              g = e[1],
              h = qb(g);
            if (!Ia(g) && !h) return d;
            h
              ? (g = vh(a, g, b + 1))
              : b || "yandex_cid" !== f
              ? ("phone_number" === f
                  ? (g = sm(g))
                  : "email" === f && (g = tm(g)),
                (g = wh(a, g)))
              : (g = K.resolve(g));
            d.push(
              g.then(function (k) {
                return [f, k];
              })
            );
            return d;
          },
          [],
          c
        );
        return K.all(c);
      }
      function tm(a) {
        var c = rb(a).toLowerCase().split("@"),
          b = c[0];
        c = c[1];
        if (!c) return a;
        c = c.replace("googlemail.com", "gmail.com");
        xh(c) && (c = "yandex.ru");
        "yandex.ru" === c
          ? (b = b.replace(ff, "-"))
          : "gmail.com" === c && (b = b.replace(ff, ""));
        a = gf(b, "+");
        -1 !== a && (b = b.slice(0, a));
        return b + "@" + c;
      }
      function sm(a) {
        a = Kb(a);
        return "8" === a[0] ? "7" + a.slice(1) : a;
      }
      function wh(a, c) {
        return new K(function (b, d) {
          var e = new a.TextEncoder().encode(c);
          a.crypto.subtle.digest("SHA-256", e).then(function (f) {
            f = new a.Blob([f], { type: "application/octet-binary" });
            var g = new a.FileReader();
            g.onload = function (h) {
              h = n(h, "target.result");
              var k = (h || "").indexOf(",");
              -1 !== k ? b(h.substring(k + 1)) : d(Fc("fpm.i"));
            };
            g.readAsDataURL(f);
          }, d);
        });
      }
      function um(a) {
        var c = n(a, "speechSynthesis.getVoices");
        if (!c) return "";
        a = D(c, a.speechSynthesis);
        return kc(function (b) {
          return A(v(b, n), vm);
        }, a());
      }
      function wm(a, c, b) {
        return I("x", A(u(P, va("concat", "" + a), v(b, n)), c));
      }
      function xm(a, c) {
        var b = c.ph;
        if (!zm(a, b)) return "";
        var d = [];
        a: {
          var e = Am(a, b);
          try {
            var f = G(e, u)()();
            break a;
          } catch (C) {
            if ("ccf" === C.message) {
              f = null;
              break a;
            }
            eb(C);
          }
          f = void 0;
        }
        if (Pa(f)) var g = "";
        else
          try {
            g = f.toDataURL();
          } catch (C) {
            g = "";
          }
        (f = g) && d.push(f);
        var h = b.getContextAttributes();
        try {
          var k = Ja(b.getSupportedExtensions, "getSupportedExtensions")
            ? b.getSupportedExtensions() || []
            : [];
        } catch (C) {
          k = [];
        }
        k = I(";", k);
        f = hf(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
        e = hf(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
        g = b.getParameter(b.ALPHA_BITS);
        h = h && h.antialias ? "yes" : "no";
        var l = b.getParameter(b.BLUE_BITS),
          m = b.getParameter(b.DEPTH_BITS),
          p = b.getParameter(b.GREEN_BITS),
          r =
            b.getExtension("EXT_texture_filter_anisotropic") ||
            b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
            b.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (r) {
          var t = b.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          0 === t && (t = 2);
        }
        t = {
          zk: k,
          "webgl aliased line width range": f,
          "webgl aliased point size range": e,
          "webgl alpha bits": g,
          "webgl antialiasing": h,
          "webgl blue bits": l,
          "webgl depth bits": m,
          "webgl green bits": p,
          "webgl max anisotropy": r ? t : null,
          "webgl max combined texture image units": b.getParameter(
            b.MAX_COMBINED_TEXTURE_IMAGE_UNITS
          ),
          "webgl max cube map texture size": b.getParameter(
            b.MAX_CUBE_MAP_TEXTURE_SIZE
          ),
          "webgl max fragment uniform vectors": b.getParameter(
            b.MAX_FRAGMENT_UNIFORM_VECTORS
          ),
          "webgl max render buffer size": b.getParameter(
            b.MAX_RENDERBUFFER_SIZE
          ),
          "webgl max texture image units": b.getParameter(
            b.MAX_TEXTURE_IMAGE_UNITS
          ),
          "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
          "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
          "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
          "webgl max vertex texture image units": b.getParameter(
            b.MAX_VERTEX_TEXTURE_IMAGE_UNITS
          ),
          "webgl max vertex uniform vectors": b.getParameter(
            b.MAX_VERTEX_UNIFORM_VECTORS
          ),
          "webgl max viewport dims": hf(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
          "webgl red bits": b.getParameter(b.RED_BITS),
          "webgl renderer": b.getParameter(b.RENDERER),
          "webgl shading language version": b.getParameter(
            b.SHADING_LANGUAGE_VERSION
          ),
          "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
          "webgl vendor": b.getParameter(b.VENDOR),
          "webgl version": b.getParameter(b.VERSION),
        };
        jf(d, t, ": ");
        a: {
          try {
            var q = b.getExtension("WEBGL_debug_renderer_info");
            if (q) {
              var y = {
                "webgl unmasked vendor": b.getParameter(
                  q.UNMASKED_VENDOR_WEBGL
                ),
                "webgl unmasked renderer": b.getParameter(
                  q.UNMASKED_RENDERER_WEBGL
                ),
              };
              break a;
            }
          } catch (C) {}
          y = {};
        }
        jf(d, y);
        if (!b.getShaderPrecisionFormat) return I("~", d);
        jf(d, Bm(b));
        return I("~", d);
      }
      function jf(a, c, b) {
        void 0 === b && (b = ":");
        z(function (d) {
          return a.push("" + d[0] + b + d[1]);
        }, Ba(c));
      }
      function Cm(a, c, b, d) {
        c = d.o("cc");
        d = G(["cc", ""], d.C);
        if (c) {
          var e = c.split("&");
          c = e[0];
          if ((e = (e = e[1]) && Fa(e)) && 1440 < ea(a)(kb) - e) return d();
          b.C("cc", c);
        } else la(0)(c) || d();
      }
      function Dm(a, c, b, d) {
        return na(a, c, function (e) {
          if ("0" === n(e, "settings.pcs") && !bd(a))
            if (((e = d.o("zzlc")), W(e) || Pa(e) || "na" === e)) {
              e = "ru";
              var f = kf(a, 68),
                g = lf(a, 79);
              if (f || g) e = "md";
              if ((f = Za(a))) {
                var h = f("iframe");
                x(h.style, {
                  display: "none",
                  width: "1px",
                  height: "1px",
                  visibility: "hidden",
                });
                h.src =
                  "https://mc.yandex." + e + yh("L21ldHJpa2EvenpsYy5odG1s");
                if ((e = Xb(a))) {
                  e.appendChild(h);
                  var k = 0,
                    l = ia(a).D(
                      a,
                      ["message"],
                      E(a, "zz.m", function (m) {
                        (m = n(m, "data")) &&
                          m.substr &&
                          "__ym__zz" === m.substr(0, 8) &&
                          (lc(h),
                          (m = m.substr(8)),
                          d.C("zzlc", m),
                          b.C("zzlc", m),
                          l(),
                          ka(a, k));
                      })
                    );
                  k = Y(a, u(l, v(h, lc)), 3e3);
                }
              }
            } else b.C("zzlc", e);
        });
      }
      function Em(a, c, b) {
        var d, e;
        c = $a(v(a, n), Fm);
        c = W(c) ? null : n(a, c);
        if (
          n(a, "navigator.onLine") &&
          c &&
          c &&
          n(c, "prototype.constructor.name")
        ) {
          var f = new c(((d = {}), (d.iceServers = []), d));
          a = n(f, "createDataChannel");
          U(a) &&
            (D(a, f, "y.metrika")(),
            (a = n(f, "createOffer")),
            U(a) &&
              !a.length &&
              ((a = D(a, f)()),
              (d = n(a, "then")),
              U(d) &&
                D(d, a, function (g) {
                  var h = n(f, "setLocalDescription");
                  U(h) && D(h, f, g, B, B)();
                })(),
              x(
                f,
                ((e = {}),
                (e.onicecandidate = function () {
                  var g,
                    h = n(f, "close");
                  if (U(h)) {
                    h = D(h, f);
                    try {
                      var k =
                        (g = n(f, "localDescription.sdp")) &&
                        g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/);
                    } catch (l) {
                      f.onicecandidate = B;
                      "closed" !== f.iceConnectionState && h();
                      return;
                    }
                    k && 0 < k.length && ((g = mc(k[1])), b.C("pp", g));
                    f.onicecandidate = B;
                    h();
                  }
                }),
                e)
              )));
        }
      }
      function Gm(a, c, b) {
        var d,
          e = cd(a, c);
        if (e) {
          e.$.D(["gpu-get"], function () {
            var h;
            return (h = {}), (h.type = "gpu-get"), (h.pu = b.o("pu")), h;
          });
          var f = n(a, "opener");
          if (f) {
            var g = Y(a, G([a, c, b], zh), 200, "pu.m");
            e.He(f, ((d = {}), (d.type = "gpu-get"), d), function (h, k) {
              var l = n(k, "pu");
              l && (ka(a, g), b.C("pu", l));
            });
          } else zh(a, c, b);
        }
      }
      function zh(a, c, b) {
        var d = n(a, "location.host");
        a = Zd(a, c);
        b.C("pu", "" + mc(d) + a);
      }
      function Ah(a, c, b) {
        c = Cc(a, void 0, c);
        c = Bh(a, c.o("phc_settings") || "");
        var d = n(c, "clientId"),
          e = n(c, "orderId"),
          f = n(c, "service_id"),
          g = n(c, "phones") || [];
        return d && e && g
          ? Hm(a, b.pc, { Eg: Im })
              .eg(g)
              .then(function (h) {
                return Jm(b, { Jb: d, Ub: e, vg: f }, h.oa, g, h.xa);
              })
              ["catch"](function () {})
          : K.resolve();
      }
      function Im(a, c, b) {
        a = Km(b.ad);
        if ("href" === b.Ee) {
          var d = b.yb;
          c = d.href;
          b = c.replace(a, b.cb);
          if (c !== b) return (d.href = b), !0;
        } else if (
          (a =
            null === (d = b.yb.textContent) || void 0 === d
              ? void 0
              : d.replace(a, b.cb)) &&
          a !== b.yb.textContent
        )
          return (b.yb.textContent = a), !0;
        return !1;
      }
      function Jm(a, c, b, d, e) {
        var f;
        c.Jb &&
          c.Ub &&
          ((c.Jb === a.Jb && c.Ub === a.Ub) || x(a, c, { oa: {}, lb: !0 }),
          0 < e && Ma(a.xa, [e]),
          z(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = +(a.oa[l] && a.oa[l][g] ? a.oa[l][g] : 0);
            x(a.oa, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, d),
          z(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = 1 + (a.oa[l] ? a.oa[l][g] : 0);
            x(a.oa, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, b),
          a.Pf &&
            (a.lb || b.length) &&
            ((c = Ea(a.l, a.pc)) &&
              c.params(
                "__ym",
                "phc",
                ((f = {}),
                (f.clientId = a.Jb),
                (f.orderId = a.Ub),
                (f.service_id = a.vg),
                (f.phones = a.oa),
                (f.performance = a.xa),
                f)
              ),
            (a.lb = !1)));
      }
      function Lm(a) {
        a = Za(a);
        if (!a) return "";
        a = a("video");
        try {
          var c = va("canPlayType", a),
            b = kc(function (d) {
              return A(u(P, va("concat", d + "; codecs=")), Mm);
            }, Ch);
          return A(c, [].concat(Ch, b));
        } catch (d) {
          return "canPlayType";
        }
      }
      function Nm(a) {
        var c = n(a, "matchMedia");
        if (c && Ca("matchMedia", c)) {
          var b = va("matchMedia", a);
          return N(
            function (d, e) {
              d[e] = b("(" + e + ")");
              return d;
            },
            {},
            Om
          );
        }
      }
      function Bm(a) {
        return N(
          function (c, b) {
            var d = b[0],
              e = b[1];
            c[d + " precision"] = n(e, "precision") || "n";
            c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
            c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
            return c;
          },
          {},
          [
            [
              "webgl vertex shader high float",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT),
            ],
            [
              "webgl vertex shader medium",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT),
            ],
            [
              "webgl vertex shader low float",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT),
            ],
            [
              "webgl fragment shader high float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT),
            ],
            [
              "webgl fragment shader medium float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT),
            ],
            [
              "webgl fragment shader low float",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT),
            ],
            [
              "webgl vertex shader high int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT),
            ],
            [
              "webgl vertex shader medium int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT),
            ],
            [
              "webgl vertex shader low int",
              a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT),
            ],
            [
              "webgl fragment shader high int",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT),
            ],
            [
              "webgl fragment shader medium int",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT),
            ],
            [
              "webgl fragment shader low int precision",
              a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT),
            ],
          ]
        );
      }
      function Am(a, c) {
        return [
          function () {
            var b = c.createBuffer();
            (b && c.getParameter && Ca("getParameter", c.getParameter)) || mf();
            c.bindBuffer(c.ARRAY_BUFFER, b);
            var d = new a.Float32Array(Pm);
            c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
            b.Ni = 3;
            b.$i = 3;
            d = c.createProgram();
            var e = c.createShader(c.VERTEX_SHADER);
            (d && e) || mf();
            return { Ce: d, bk: e, ak: b };
          },
          function (b) {
            var d = b.Ce,
              e = b.bk;
            c.shaderSource(
              e,
              "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
            );
            c.compileShader(e);
            c.attachShader(d, e);
            (d = c.createShader(c.FRAGMENT_SHADER)) || mf();
            return x(b, { Yh: d });
          },
          function (b) {
            var d = b.Ce,
              e = b.Yh;
            c.shaderSource(
              e,
              "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
            );
            c.compileShader(e);
            c.attachShader(d, e);
            c.linkProgram(d);
            c.useProgram(d);
            return b;
          },
          function (b) {
            var d = b.Ce;
            b = b.ak;
            d.$j = c.getAttribLocation(d, "attrVertex");
            d.bj = c.getUniformLocation(d, "uniformOffset");
            c.enableVertexAttribArray(d.Zk);
            c.vertexAttribPointer(d.$j, b.Ni, c.FLOAT, !1, 0, 0);
            c.uniform2f(d.bj, 1, 1);
            c.drawArrays(c.TRIANGLE_STRIP, 0, b.$i);
            return c.canvas;
          },
        ];
      }
      function zm(a, c) {
        if (!U(a.Float32Array)) return !1;
        var b = n(c, "canvas");
        if (!b || !Ca("toDataUrl", b.toDataURL)) return !1;
        try {
          c.createBuffer();
        } catch (d) {
          return !1;
        }
        return !0;
      }
      function hf(a, c) {
        c.clearColor(0, 0, 0, 1);
        c.enable(c.DEPTH_TEST);
        c.depthFunc(c.LEQUAL);
        c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
        return "[" + n(a, "0") + ", " + n(a, "1") + "]";
      }
      function Qm(a) {
        try {
          var c = Ka(a) ? a : [];
          return I(",", [
            a.name,
            a.description,
            u(oa, Gc(Boolean), fb(Rm), dd(","))(c),
          ]);
        } catch (b) {
          return "";
        }
      }
      function Rm(a) {
        return I(",", [a.description, a.suffixes, a.type]);
      }
      function Sm(a, c, b) {
        function d(r) {
          return function () {
            var t = b.o("scip", "") + r;
            b.C("scip", t);
          };
        }
        var e,
          f = ed(a, "ci");
        f = Cb(a, f);
        var g = nf(a),
          h = ea(a)(kb),
          k = ["sync.cook.int"],
          l = Dh(g.o("sci"));
        if (!l || 1440 < h - l) {
          b.C("scip", "0");
          var m = d("a"),
            p = Hc(a, c);
          return f(
            {
              ba: { Ba: k, Cb: 1500, nd: !0 },
              G: ((e = {}), (e.duid = p), (e.hid = "" + Yb(a)), e),
            },
            ["https://an.yandex.ru/sync_cookie"]
          )
            .then(function (r) {
              r = n(r.cd, "CookieMatchUrls");
              fa(r) || (r = []);
              Ka(r) ? d("1")() : m();
              var t = ed(a, "c"),
                q = Cb(a, t);
              r = A(function (y, C) {
                var M = "" + y + (nc(y, "?") ? "&" : "?") + "duid=" + p;
                return q({ ba: { Ba: k, Cb: 1500 } }, ["https://" + M]).then(
                  B,
                  u(d("b"), d("" + C))
                );
              }, X(Ia, r));
              return K.all(r);
            }, m)
            .then(function () {
              var r = b.o("scip");
              !r || nc(r, "a") || nc(r, "b") || (g.C("sci", h), d("2")());
            }, B);
        }
        return K.resolve();
      }
      function Eh(a) {
        return {
          ca: function (c, b) {
            if (!c.J) return b();
            var d = L(a).o("fid");
            !Fh && d && (Ud(c, "fid", d), (Fh = !0));
            return b();
          },
        };
      }
      function Tm(a, c) {
        var b = a.document;
        if (H(b.readyState, ["interactive", "complete"])) Ib(a, c);
        else {
          var d = ia(a),
            e = d.D,
            f = d.dc,
            g = function () {
              f(b, ["DOMContentLoaded"], g);
              f(a, ["load"], g);
              c();
            };
          e(b, ["DOMContentLoaded"], g);
          e(a, ["load"], g);
        }
      }
      function of(a) {
        return {
          ca: function (c, b) {
            var d = c.J;
            if (d) {
              var e = L(a).o("adBlockEnabled");
              e && d.C("adb", e);
            }
            b();
          },
        };
      }
      function Um(a) {
        var c = E(a, "i.clch", Vm);
        ia(a).D(a.document, ["click"], D(c, null, a), { passive: !1 });
        return function (b) {
          var d = pa.Ta,
            e = a.Ya[pa.Kb],
            f = !!e._informer;
          e._informer = x({ domain: "informer.yandex.ru" }, b);
          f || Ec(a, { src: d + "//informer.yandex.ru/metrika/informer.js" });
        };
      }
      function Ic(a, c) {
        return {
          ca: function (b, d) {
            pf(b)
              ? d()
              : na(a, c, function (e) {
                  var f;
                  if ((e = n(e, "settings.hittoken")))
                    (e = ((f = {}), (f.hittoken = e), f)),
                      (b.G = x(b.G || {}, e));
                  d();
                });
          },
        };
      }
      function Wm(a, c) {
        var b = Qa(a);
        if ("" === b.o("cc")) {
          var d = v("cc", b.C);
          d(0);
          var e = ea(a),
            f = L(a);
          f = u(
            V(Ta({ cd: 1 }) + ".c"),
            fd(function (g) {
              d(g + "&" + e(kb));
            }),
            v("cc", f.C)
          );
          wa(
            a,
            "6",
            c
          )({ ba: { nd: !0, Ng: !1 } }, ["https://mc.yandex.md/cc"])
            .then(f)
            ["catch"](
              u(
                fd(function () {
                  var g = e(kb);
                  b.C("cc", "&" + g);
                }),
                E(a, "cc")
              )
            );
        }
      }
      function $d(a, c) {
        if (!c) return !1;
        var b = T(a);
        return new RegExp(c).test("" + b.pathname + b.hash + b.search);
      }
      function Xm(a, c) {
        return na(a, c, function (b) {
          var d = n(b, "settings.dr");
          return { Fh: Ym(a, d), isEnabled: n(b, "settings.auto_goals") };
        });
      }
      function Zm(a, c, b, d, e) {
        b = qf(a.document.body, b);
        d = qf(a.document.body, d);
        H(e.target, [b, d]) && rf(a, c);
      }
      function Gh(a, c, b, d) {
        (b = $m(a, d, b)) && rf(a, c, b);
      }
      function Hh(a, c) {
        var b = Ih(a, c);
        return an(a, b);
      }
      function Ih(a, c) {
        var b = qf(a.document.body, c);
        return b ? bn(a, b) : "";
      }
      function rf(a, c, b) {
        if ((c = Ea(a, c)))
          (a = Bc(["dr", b || "" + Ra(a, 10, 99)])), c.params(Bc(["__ym", a]));
      }
      function qf(a, c) {
        var b = null;
        try {
          b = c ? Jc(c, a) : b;
        } catch (d) {}
        return b;
      }
      function Jh(a) {
        a = oa(yh(a));
        return A(function (c) {
          c = c.charCodeAt(0).toString(2);
          return Kh("0", 8, c);
        }, a);
      }
      function bn(a, c) {
        if (!c) return "";
        var b = [],
          d = n(a, "document");
        sf(a, c, function (e) {
          if (e.nodeType === d.TEXT_NODE) var f = e.textContent;
          else
            e instanceof a.HTMLImageElement
              ? (f = e.alt)
              : e instanceof a.HTMLInputElement && (f = e.value);
          (f = f && f.trim()) && b.push(f);
        });
        return 0 === b.length ? "" : b.join(" ");
      }
      function cn(a, c, b) {
        a = xa(b);
        b = a[1];
        "track" === a[0] && c({ version: "0", xc: b });
      }
      function dn(a, c, b) {
        if (b) {
          var d = b.version;
          (b = n(en, d + "." + b.xc)) &&
            ((c && H(b, fn)) || a("ym-" + b + "-" + d));
        }
      }
      function ae(a, c, b) {
        return function (d) {
          var e,
            f,
            g = Ea(c, b);
          g &&
            gn(a, d, c) &&
            ((g = D(g.params, g)),
            (d = tf(a, d, "goods")) &&
              g &&
              g(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e)));
        };
      }
      function hn(a, c, b, d) {
        var e, f;
        var g = n(d, "ecommerce") || {};
        var h = n(d, "event") || "";
        g = (h = Lh[h]) ? tf(h, g, "items") : void 0;
        if (!g)
          a: {
            g = d;
            !fa(d) && be(a, Ka(d)) && (g = xa(g));
            if (fa(g) && ((h = Lh[g[1]]), "event" === g[0] && h)) {
              g = tf(h, g[2], "items");
              break a;
            }
            g = void 0;
          }
        if ((d = g || jn(d)))
          ib(a, { ea: c, name: "ecommerce", data: d }),
            b &&
              b(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e));
      }
      function jn(a) {
        var c = n(a, "ecommerce") || {};
        a = X(oc(kn), ba(c));
        a = N(
          function (b, d) {
            b[d] = c[d];
            return b;
          },
          {},
          a
        );
        return ba(a).length ? a : void 0;
      }
      function gn(a, c, b) {
        var d = !1,
          e = "";
        if (!qb(c)) return pb(b, "", "Ecommerce data should be an object"), d;
        var f = c.goods;
        switch (a) {
          case "detail":
          case "add":
          case "remove":
            fa(f) && f.length
              ? (d = uf(function (g) {
                  return qb(g) && (Ia(g.id) || be(b, g.id) || Ia(g.name));
                }, f)) ||
                (e =
                  "All items in 'goods' should be objects and contain 'id' or 'name' field")
              : (e = "Ecommerce data should contain 'goods' non-empty array");
            break;
          case "purchase":
            be(b, c.id) || Ia(c.id)
              ? (d = !0)
              : (e =
                  "Purchase object should contain string or number 'id' field");
        }
        pb(b, "", e);
        return d;
      }
      function tf(a, c, b) {
        var d, e;
        if (c) {
          var f = c.purchase || c;
          c = ba(f);
          var g = f[b];
          if (g) {
            var h =
              ((d = {}), (d[a] = ((e = {}), (e.products = A(ln, g)), e)), d);
            1 < c.length &&
              (h[a].actionField = N(
                function (k, l) {
                  if (l === b) return k;
                  if ("currency" === l) return (h.currencyCode = f.currency), k;
                  k[vf[l] || l] = f[l];
                  return k;
                },
                {},
                c
              ));
            return h;
          }
        }
      }
      function ln(a) {
        var c = {};
        z(function (b) {
          var d = vf[b] || b;
          -1 !== b.indexOf("item_category")
            ? ((d = vf.item_category),
              (c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]))
            : (c[d] = a[b]);
        }, ba(a));
        return c;
      }
      function qh(a, c, b) {
        void 0 === b && (b = P);
        var d = gd(a);
        b(d);
        var e = v(d, mn);
        ce(a, c, function (f) {
          f.wa.D(e);
        });
        return d;
      }
      function mn(a, c) {
        var b = n(c, "ymetrikaEvent");
        b && a.O(n(b, "type"), b);
      }
      function ce(a, c, b, d) {
        void 0 === b && (b = B);
        void 0 === d && (d = !1);
        var e = hd(a);
        if (c && U(c.push)) {
          var f = c.push;
          c.push = function () {
            var g = xa(arguments),
              h = g[0];
            d && e.O(h);
            g = f.apply(c, g);
            d || e.O(h);
            return g;
          };
          a = {
            wa: e,
            unsubscribe: function () {
              c.push = f;
            },
          };
          b(a);
          z(e.O, c);
          return a;
        }
      }
      function Td(a) {
        a = L(a);
        var c = a.o("dataLayer", []);
        a.C("dataLayer", c);
        return c;
      }
      function km(a, c) {
        var b, d;
        a.push(((b = {}), (b.ymetrikaEvent = ((d = {}), (d.type = c), d)), b));
      }
      function nn(a, c, b) {
        var d,
          e = Mh(a, c),
          f = T(a);
        f = de(f.protocol + "//" + f.hostname + f.pathname);
        c = Zd(a, c);
        var g = "";
        do g += Ra(a);
        while (g.length < c.length);
        g = g.slice(0, c.length);
        a = "";
        for (var h = 0; h < c.length; h += 1)
          a += (c.charCodeAt(h) + g.charCodeAt(h) - 96) % 10;
        c = [g, a];
        a = c[0];
        c = c[1];
        return ((d = {}),
        (d.mf =
          "https://adstat.yandex.ru/track?service=metrika&id=" +
          c +
          "&mask=" +
          a +
          "&ref=" +
          f),
        (d.rt = "https://" + e + ".mc.yandex.ru/watch/3/1?browser-info=rt:1"),
        d)[b];
      }
      function on(a, c, b, d) {
        a = n(d, "data");
        if (Ia(a)) {
          var e = a.split("*");
          a = e[0];
          var f = e[1];
          e = e[2];
          "sc.frame" === a
            ? d.source.postMessage("sc.images*" + c, "*")
            : "sc.image" === a && f === c && b(e);
        }
      }
      function pn(a, c) {
        var b = Qa(a),
          d = "wv2rf:" + O(c),
          e = c.kc,
          f = ee(a),
          g = b.o(d),
          h = c.Tj;
        return W(f) || Pa(g)
          ? ya(function (k, l) {
              na(a, c, function (m) {
                var p = n(m, "settings.webvisor.forms");
                p = !n(m, "settings.x3") && p;
                f = ee(a) || n(m, "settings.eu");
                b.C(d, id(p));
                l({ kc: e, Nf: !!f, cg: p, Gg: h });
              });
            })
          : wf({ kc: e, Nf: f, cg: !!Fa(g), Gg: h });
      }
      function qn() {
        var a = N(
          function (c, b) {
            c[b[0]] = { ud: 0, mh: 1 / b[1] };
            return c;
          },
          {},
          [
            ["blur", 0.0034],
            ["change", 0.0155],
            ["click", 0.01095],
            ["deviceRotation", 2e-4],
            ["focus", 0.0061],
            ["mousemove", 0.5132],
            ["scroll", 0.4795],
            ["selection", 0.0109],
            ["touchcancel", 2e-4],
            ["touchend", 0.0265],
            ["touchforcechange", 0.0233],
            ["touchmove", 0.1442],
            ["touchstart", 0.027],
            ["zoom", 0.0014],
          ]
        );
        return {
          fh: function (c) {
            if (c.length)
              return {
                type: "activity",
                data: N(
                  function (b, d) {
                    var e = a[d];
                    return Math.round(b + e.ud * e.mh);
                  },
                  0,
                  ba(a)
                ),
              };
          },
          cj: function (c) {
            c && (c = a[c.data.type]) && (c.ud += 1);
          },
        };
      }
      function rn(a) {
        if (a.type && a.event)
          switch (a.type) {
            case "page":
              var c = a.data,
                b = c.Ga,
                d = c.hd,
                e = c.content;
              delete c.Ga;
              delete c.hd;
              delete c.content;
              c = {
                type: "page",
                data: { M: a.M || 0, content: e, Ga: b, hd: d, Z: c },
              };
              a.L && (c.L = a.L);
              return c;
            case "event":
              a: {
                c = {
                  type: "event",
                  L: a.L,
                  data: { M: a.M, type: a.event, Z: {} },
                };
                b = x({}, a.data);
                switch (a.event) {
                  case "zoom":
                    c.data.Z = {
                      Og: { x: 0, y: 0, level: 0 },
                      Qg: b,
                      duration: 1,
                    };
                    break;
                  case "keystroke":
                    c.data.Z = b.Oc;
                    break;
                  case "deviceRotation":
                  case "resize":
                    c.data.Z = b;
                    break;
                  case "windowfocus":
                  case "windowblur":
                  case "focus":
                    c.data.target = b.target;
                    c.data.Z = null;
                    break;
                  case "touchmove":
                  case "touchstart":
                  case "touchend":
                  case "touchcancel":
                  case "touchforcechange":
                  case "scroll":
                  case "change":
                  case "click":
                  case "mousemove":
                  case "mousedown":
                  case "mouseup":
                  case "selection":
                  case "stylechange":
                    c.data.target = b.target;
                    delete b.target;
                    c.data.Z = b;
                    break;
                  case "srcset":
                    a = {
                      type: "mutation",
                      L: a.L,
                      data: {
                        M: a.M,
                        Z: {
                          Ja: [
                            {
                              sd: [
                                {
                                  id: b.target,
                                  Ib: { src: { Sc: "", n: b.value, r: !1 } },
                                  Da: 0,
                                },
                              ],
                            },
                          ],
                          index: 0,
                        },
                      },
                    };
                    break a;
                }
                a = c;
              }
              break;
            case "mutation":
              return sn(a);
          }
        return a;
      }
      function sn(a) {
        var c = x({}, a.data),
          b = [];
        switch (a.event) {
          case "tc":
            b = [
              {
                d: [{ id: c.target, sc: { Sc: "", n: c.value }, Da: c.index }],
              },
            ];
            break;
          case "ac":
            b = [
              {
                sd: [
                  {
                    id: c.target,
                    Ib: N(
                      function (d, e) {
                        var f = e[1];
                        d[e[0]] = { Sc: "", n: f, r: ma(f) };
                        return d;
                      },
                      {},
                      Ba(c.attributes)
                    ),
                    Da: c.index,
                  },
                ],
              },
            ];
            break;
          case "re":
            b = [
              {
                af: A(function (d) {
                  return { id: d, Da: c.index };
                }, c.na),
              },
            ];
            break;
          case "ad":
            b = [
              {
                df: A(function (d) {
                  return {
                    id: d.id,
                    Wf: d.name,
                    Xf: d.Vf,
                    qe: d.parent,
                    ue: d.xe,
                    ke: d.next,
                    Ib: d.attributes,
                    Da: c.index,
                    sc: d.content,
                    Va: d.hidden,
                  };
                }, c.na),
              },
            ];
        }
        return {
          type: "mutation",
          L: a.L,
          data: { M: a.M, Z: { Ja: b, index: c.index } },
        };
      }
      function tn(a) {
        return {
          $h: function () {
            var c = a.document.querySelector("base[href]");
            return c ? c.getAttribute("href") : null;
          },
          bi: function () {
            if (a.document.doctype) {
              var c = x(
                  { name: "html", publicId: "", systemId: "" },
                  a.document.doctype
                ),
                b = c.publicId,
                d = c.systemId;
              return (
                "<!DOCTYPE " +
                I("", [
                  c.name,
                  b ? ' PUBLIC "' + b + '"' : "",
                  !b && d ? " SYSTEM" : "",
                  d ? ' "' + d + '"' : "",
                ]) +
                ">"
              );
            }
            return null;
          },
          oi: function () {
            try {
              if (!a.sessionStorage) return null;
              var c = a.sessionStorage.getItem("__vw_tab_guid"),
                b = !1;
              try {
                var d = a.opener ? a.opener.sessionStorage : null;
                b = !!d && c === d.getItem("__vw_tab_guid");
              } catch (e) {
                b = !0;
              }
              if (!c || b)
                (c = Nh()), a.sessionStorage.setItem("__vw_tab_guid", c);
              return c;
            } catch (e) {
              return null;
            }
          },
        };
      }
      function un(a, c, b) {
        var d = gd(a),
          e = ia(a),
          f = db(a),
          g = c.Nd(),
          h = !n(a, "postMessage") || (f && !n(a, "parent.postMessage")),
          k = v(d, P);
        if (h) {
          if (!g)
            return (
              Y(a, D(d.O, d, "i", { ua: !1 }), 10), { Md: k, og: B, stop: B }
            );
          eb(Oa());
        }
        d.D(["sr"], function (t) {
          var q,
            y = Oh(a, t.source);
          y &&
            xf(
              a,
              t.source,
              ((q = {}), (q.type = "\u043d"), (q.frameId = c.sa().Y(y)), q)
            );
        });
        d.D(["sd"], function (t) {
          var q = t.data;
          t = t.source;
          (a === t || Oh(a, t)) && d.O("sdr", { data: q.data, M: q.frameId });
        });
        if (f && !g) {
          var l = !1,
            m = 0,
            p = function () {
              var t;
              xf(a, a.parent, ((t = {}), (t.type = "sr"), t));
              m = Y(a, p, 100, "if.i");
            };
          p();
          var r = function (t) {
            d.ia(["\u043d"], r);
            ka(a, m);
            var q = Kc(a, t.origin).host;
            l ||
              t.source !== a.parent ||
              !t.data.frameId ||
              ("about:blank" !== T(a).host && !H(q, b)) ||
              ((l = !0), d.O("i", { M: t.data.frameId, ua: !0 }));
          };
          d.D(["\u043d"], r);
          Y(
            a,
            function () {
              d.ia(["\u043d"], r);
              ka(a, m);
              l || ((l = !0), d.O("i", { ua: !1 }));
            },
            2e3,
            "if.r"
          );
        }
        e = e.D(a, ["message"], function (t) {
          var q = Db(a, t.data);
          q &&
            q.type &&
            H(q.type, vn) &&
            d.O(q.type, { data: q, source: t.source, origin: t.origin });
        });
        return {
          Md: k,
          og: function (t) {
            var q;
            return xf(
              a,
              a.parent,
              ((q = {}), (q.frameId = c.Nd()), (q.data = t), (q.type = "sd"), q)
            );
          },
          stop: e,
        };
      }
      function Oh(a, c) {
        try {
          return $a(
            u(V("contentWindow"), la(c)),
            oa(a.document.querySelectorAll("iframe"))
          );
        } catch (b) {
          return null;
        }
      }
      function xf(a, c, b) {
        a = jb(a, b);
        c.postMessage(a, "*");
      }
      function Nh() {
        return (
          Zb() +
          Zb() +
          "-" +
          Zb() +
          "-" +
          Zb() +
          "-" +
          Zb() +
          "-" +
          Zb() +
          Zb() +
          Zb()
        );
      }
      function Zb() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function wn(a, c) {
        if (Ia(c)) return c;
        var b = a.textContent;
        if (Ia(b)) return b;
        b = a.data;
        if (Ia(b)) return b;
        b = a.nodeValue;
        return Ia(b) ? b : "";
      }
      function xn(a, c, b, d, e) {
        void 0 === d && (d = {});
        void 0 === e && (e = Ga(c));
        var f = x(
          N(
            function (h, k) {
              h[k.name] = k.value;
              return h;
            },
            {},
            oa(c.attributes)
          ),
          d
        );
        x(f, yn(c, e, f));
        var g =
          (d = N(
            function (h, k) {
              var l = k[0],
                m = fe(a, c, l, k[1], b, e),
                p = m.value;
              ma(p) ? delete f[l] : (f[l] = p);
              return h || m.rb;
            },
            !1,
            Ba(f)
          )) && jd(c);
        g && ((f.width = g.width), (f.height = g.height));
        return { rb: d, ih: f };
      }
      function yn(a, c, b) {
        var d = {};
        yf(a)
          ? (d.value = a.value || b.value)
          : "IMG" !== c || b.src || (d.src = "");
        return d;
      }
      function fe(a, c, b, d, e, f) {
        void 0 === f && (f = Ga(c));
        var g = { rb: !1, value: d };
        if (yf(c))
          "value" === b
            ? !ma(d) &&
              "" !== d &&
              ((b = e.Nf),
              (f = e.cg),
              (e = kd(a, c)),
              f
                ? ((b = ld(a, c, b)),
                  (a = b.Yd),
                  (c = b.Id),
                  (b = b.ub),
                  (g.rb = !c && (e || a)))
                : ((g.rb = e), (b = !ge(c))),
              b || e) &&
              (g.value = I("", A(v("\u2022", P), ("" + d).split(""))))
            : "checked" === b &&
              H((c.getAttribute("type") || "").toLowerCase(), zn)
            ? (g.value = c.checked ? "checked" : null)
            : An.test(b) && zf(a, c) && (g.value = null);
        else if ("IMG" === f && "src" === b)
          (e = kd(a, c))
            ? ((g.rb = e),
              (g.value =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="))
            : (g.value =
                (c.getAttribute("srcset") ? c.currentSrc : "") || c.src);
        else if ("A" === f && "href" === b) g.value = d ? "#" : "";
        else if (
          H(b, ["srcset", "integrity", "crossorigin", "password"]) ||
          (2 < b.length && 0 === gf(b, "on")) ||
          ("IFRAME" === f && "src" === b) ||
          ("SCRIPT" === f && H(b, ["src", "type"]))
        )
          g.value = null;
        return g;
      }
      function Af(a, c, b, d) {
        void 0 === d && (d = "wv2");
        return {
          H: function (e, f) {
            return E(a, d + "." + b + "." + f, e, void 0, c);
          },
        };
      }
      function Bn(a, c, b, d, e) {
        function f() {
          k && k.stop();
        }
        if (!c.Eb) return K.resolve(B);
        var g = wa(a, "4", c),
          h = { J: Aa() };
        b = new Cn(a, b, function (l, m, p) {
          if (!g) return K.resolve();
          m = "wv-data=" + Ph(l, !0);
          for (var r = l.length, t = 0, q = 255, y = 255, C, M, Q; r; ) {
            C = 21 < r ? 21 : r;
            r -= C;
            do
              (M = "string" === typeof l ? l.charCodeAt(t) : l[t]),
                (t += 1),
                255 < M && ((Q = M >> 8), (M &= 255), (M ^= Q)),
                (q += M),
                (y += q);
            while (--C);
            q = (q & 255) + (q >> 8);
            y = (y & 255) + (y >> 8);
          }
          l = (((q & 255) + (q >> 8)) << 8) | ((y & 255) + (y >> 8));
          return g(
            x({}, h, {
              ba: { fa: m },
              G: { "wv-check": "" + (65535 === l ? 0 : l), "wv-type": "0" },
            }),
            c,
            p
          )["catch"](E(a, "m.n.m.s"));
        });
        var k = Dn(a, b, d, e);
        return na(a, c, function (l) {
          l && L(a).C("isEU", n(l, "settings.eu"));
          L(a).o("oo") || (k && Qh(a, l) && k.start());
          return f;
        });
      }
      function Dn(a, c, b, d) {
        var e = a.document,
          f = [],
          g = ia(a),
          h = ":submit" + Math.random(),
          k = [],
          l = D(c.flush, c),
          m = ha(function (t, q) {
            E(a, "hfv." + t, function () {
              try {
                var y = q.type;
              } catch (C) {
                return;
              }
              y = H(y, d);
              c.push(q, { type: t });
              y && l();
            })();
          }),
          p = E(a, "sfv", function () {
            var t = b(a),
              q = En(a);
            z(function (y) {
              f.push(g.D(y.target, [y.event], m(y.type)));
            }, t);
            z(function (y) {
              f.push(
                g.D(
                  y.target,
                  [y.event],
                  E(a, "hff." + y.type + "." + y.event, function (C) {
                    z(ya({ l: a, qa: C, flush: l }), y.N);
                  })
                )
              );
            }, q);
            k = Rh(a, "form", e);
            e.attachEvent &&
              ((t = Rh(a, "form *", e)),
              z(function (y) {
                f.push(g.D(y, ["submit"], m("form")));
              }, k),
              z(function (y) {
                Bf(y) && f.push(g.D(y, ["change"], m("formInput")));
              }, t));
            z(function (y) {
              var C = y.submit;
              if (U(C) || ("object" === typeof C && Fn.test("" + C)))
                (y[h] = C),
                  (y.submit = E(a, "fv", function () {
                    var M = { target: y, type: "submit" };
                    m("document")(M);
                    return y[h]();
                  }));
            }, k);
          }),
          r = E(a, "ufv", function () {
            z(ja, f);
            z(function (t) {
              t && (t.submit = t[h]);
            }, k);
            c.flush();
          });
        return { start: p, stop: r };
      }
      function Gn(a, c) {
        var b = X(function (e) {
            return 0 < e.N.length;
          }, c),
          d = Sh({ target: a.document, type: "document" });
        return A(u(P, d, Hn(a)), b);
      }
      function Th(a, c) {
        var b = a.l,
          d = [],
          e = c.form;
        if (!c[Sa] && e) {
          var f = e.elements;
          e = e.length;
          for (var g = 0; g < e; g += 1) {
            var h = f[g];
            he(h) && !h[Sa] && Ma(d, pc(b, h));
          }
        } else Ma(d, pc(b, c));
        return d;
      }
      function Cf(a) {
        if (md) {
          md = !1;
          var c = sb(a.l),
            b = [];
          gb(a.l, b, 15) ? (a = []) : (S(b, c), (a = b));
          return a;
        }
      }
      function Uh(a) {
        if (!md) {
          md = !0;
          a = sb(a.l);
          var c = [];
          Lb(c, 14);
          S(c, a);
          return c;
        }
      }
      function In(a, c, b) {
        var d = c[Sa];
        if (d) {
          a: {
            var e = sb(a),
              f = c[Sa];
            if (0 < f) {
              var g = [];
              c = Df(a, c);
              var h = qc[f],
                k = c[0] + "x" + c[1],
                l = c[2] + "x" + c[3];
              if (k !== h.$f) {
                h.$f = k;
                if (gb(a, g, 9)) {
                  a = [];
                  break a;
                }
                S(g, e);
                S(g, f);
                S(g, c[0]);
                S(g, c[1]);
              }
              if (l !== h.size) {
                h.size = l;
                if (gb(a, g, 10)) {
                  a = [];
                  break a;
                }
                S(g, e);
                S(g, f);
                S(g, c[2]);
                S(g, c[3]);
              }
              if (g.length) {
                a = g;
                break a;
              }
            }
            a = [];
          }
          Ma(b, a);
        }
        return d;
      }
      function ld(a, c, b) {
        void 0 === b && (b = !1);
        if ("button" === c.getAttribute("type"))
          return { ub: !1, Id: !1, Yd: !1 };
        var d = ge(c),
          e = Ef(c);
        a = Ff(a, c) || (b && e);
        return { ub: !(d || !a), Id: d, Yd: e };
      }
      function Ff(a, c) {
        return zf(a, c) || nd(a, c) ? !0 : kd(a, c);
      }
      function Ef(a) {
        if (!a) return !1;
        var c = a.placeholder,
          b = a.type;
        a = X(Vh, [a.className, a.id, a.name]);
        return (b && H(b, Jn)) || Na(Va(Kn), a) || (Vh(c) && Ln.test(c));
      }
      function Vh(a) {
        return !!(a && 2 < a.length);
      }
      function yf(a) {
        try {
          var c = Ga(a);
          if (H(c, Gf)) {
            if ("INPUT" === c) {
              var b = a.type;
              return !b || H(b.toLocaleLowerCase(), Mn);
            }
            return !0;
          }
        } catch (d) {}
        return !1;
      }
      function Wh(a, c) {
        return c && rc("(ym-disable-submit|-metrika-noform)", c);
      }
      function ge(a) {
        return a && rc("ym-record-keys", a);
      }
      function Nn(a, c) {
        return I(
          "",
          A(function (b) {
            return a.isNaN(b)
              ? On.test(b)
                ? ((b = b.toUpperCase() === b ? Pn : Qn),
                  String.fromCharCode(Ra(a, b[0], b[1])))
                : b
              : "" + Ra(a, 0, 9);
          }, c.split(""))
        );
      }
      function kd(a, c) {
        if (ma(c)) return !1;
        if (Hf(c)) {
          var b = c.parentNode;
          return (ma(b) ? 0 : 11 === b.nodeType) ? !1 : kd(a, c.parentNode);
        }
        if (Rn.test(c.className)) return !0;
        b = Xh(a);
        if (!b) return !1;
        var d = b.call(c, ".ym-hide-content *");
        return d &&
          (Sn.test(c.className) ||
            b.call(c, ".ym-hide-content .ym-show-content *"))
          ? !1
          : d;
      }
      function Qh(a, c) {
        var b = $b(a),
          d = b.o("visorc");
        H(d, ["w", "b"]) || (d = "");
        (Yh(a) && Zh(a, ie, "visorc") && !Tn.test(tb(a) || "")) || (d = "b");
        var e = n(c, "settings.webvisor.recp");
        if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
        d || (d = (L(a).o("hitId") % 1e4) / 1e4 < e ? "w" : "b");
        b.C("visorc", d, 30);
        return "w" === d;
      }
      function $h(a) {
        return !!$a(function (c) {
          return H(c.type, ["articleInfo", "publishersHeader"]);
        }, a);
      }
      function ai(a) {
        var c = If(a).isEnabled,
          b = !1;
        try {
          b =
            (b = 2 === new a.Blob(["\u00e4"]).size) &&
            2 === new a.Blob([new a.Uint8Array([1, 2])]).size;
        } catch (d) {}
        return uf(Boolean, [
          !c,
          b,
          a.Uint8Array,
          n(a, "Uint8Array.prototype.slice"),
        ]);
      }
      function Jf(a, c) {
        var b = c[1][3],
          d = 0,
          e = new a.Uint8Array(c[0]);
        return ic([b], function (f, g) {
          if (!f) return e;
          f[0](a, f[2], e, d);
          d += f[1];
          g.push(f[3]);
          return e;
        });
      }
      function je(a, c, b) {
        a = c(b);
        c = [B, 0, 0];
        var d = [0, c, c, void 0];
        return ic(a, function (e, f) {
          var g = e[0],
            h = e[1],
            k = e[2];
          if (0 === g) return k(d, h), d;
          if (void 0 === h || null === h) return d;
          var l = g >> 3;
          if (g & 1)
            sc(d, lb(l)), (h = k(h)), l & 2 && sc(d, lb(h[1])), sc(d, h);
          else if (g & 4)
            for (g = h.length - 1; 0 <= g; ) {
              var m = k(h[g]);
              m.push([0, 0, Kf]);
              m.push([0, lb(l), sc]);
              m.unshift([0, 0, Lf]);
              f.push.apply(f, m);
              --g;
            }
          else if (g & 2) {
            k = e[2];
            var p = e[3],
              r = e[4],
              t = e[5],
              q = ba(h);
            for (g = q.length - 1; 0 <= g; )
              (m = q[g]),
                (m = [
                  [0, 0, Lf],
                  [r, h[m], t],
                  [k, m, p],
                  [0, 0, Kf],
                  [0, lb(l), sc],
                ]),
                f.push.apply(f, m),
                --g;
          } else
            (m = k(h)),
              m.push([0, 0, Kf]),
              m.push([0, lb(l), sc]),
              m.unshift([0, 0, Lf]),
              f.push.apply(f, m);
          return d;
        });
      }
      function Lf(a) {
        var c = a[1],
          b = a[0],
          d = a[2];
        a[3]
          ? ((a[0] = a[3][0]),
            (a[1] = a[3][1]),
            (a[2] = a[3][2]),
            (a[3] = a[3][3]))
          : ((a[0] = 0), (a[1] = [B, 0, 0]), (a[2] = a[1]));
        sc(a, lb(b));
        b && ((a[2][3] = c[3]), (a[2] = d), (a[0] += b));
      }
      function Kf(a) {
        a[3] = [a[0], a[1], a[2], a[3]];
        a[1] = [B, 0, 0];
        a[2] = a[1];
        a[0] = 0;
      }
      function sc(a, c) {
        a[0] += c[1];
        a[2][3] = c;
        a[2] = c;
      }
      function Mf(a) {
        return [
          [385, a.bh, lb],
          [336, a.rj, Un],
          [272, a.gh, Vn],
          [208, a.event, Wn],
          [144, a.Vi, Xn],
          [80, a.page, Yn],
        ];
      }
      function Zn(a) {
        return [
          [321, a.end, Mb],
          [273, a.uh, $n],
          [193, a.page, J],
          [144, a.data, Mf],
          [65, a.L, J],
        ];
      }
      function bi(a) {
        return [[84, a.buffer, Zn]];
      }
      function ao(a) {
        return [
          [129, a.position, J],
          [81, a.name, R],
        ];
      }
      function bo(a) {
        return [[81, a.name, R]];
      }
      function co(a) {
        return [[81, a.name, R]];
      }
      function Vn(a) {
        return [
          [593, a.Xj, R],
          [532, a.wj, ao],
          [449, a.gf, J],
          [401, a.qj, R],
          [340, a.Lj, bo],
          [276, a.jh, co],
          [209, a.mj, R],
          [145, a.nj, R],
          [65, a.id, lb],
        ];
      }
      function eo(a) {
        return [
          [513, a.gf, J],
          [489, a.Si, od],
          [385, a.La, J],
          [321, a.height, J],
          [257, a.width, J],
          [193, a.y, J],
          [129, a.x, J],
          [65, a.id, lb],
        ];
      }
      function Un(a) {
        return [
          [129, a.La, J],
          [84, a.hh, eo],
        ];
      }
      function fo(a) {
        return [[81, a.hash, R]];
      }
      function go(a) {
        return [
          [209, a.stack, R],
          [145, a.Kh, R],
          [81, a.code, R],
        ];
      }
      function ho(a) {
        return [
          [193, a.orientation, J],
          [129, a.height, J],
          [65, a.width, J],
        ];
      }
      function io(a) {
        return [[84, a.Oc, jo]];
      }
      function jo(a) {
        return [
          [273, a.Pc, R],
          [193, a.Of, Mb],
          [145, a.key, R],
          [65, a.id, J],
        ];
      }
      function ko(a) {
        return [
          [145, a.value, R],
          [81, a.Ok, R],
        ];
      }
      function lo(a) {
        return [
          [149, a.Hb, R],
          [81, a.method, R],
        ];
      }
      function mo(a) {
        return [
          [257, a.wb, J],
          [193, a.xb, J],
          [129, a.height, J],
          [65, a.width, J],
        ];
      }
      function no(a) {
        return [
          [144, a.Qg, ci],
          [80, a.Og, ci],
        ];
      }
      function ci(a) {
        return [
          [193, a.y, J],
          [129, a.x, J],
          [105, a.level, od],
        ];
      }
      function oo(a) {
        return [[84, a.touches, po]];
      }
      function po(a) {
        return [
          [297, a.force, od],
          [233, a.y, od],
          [169, a.x, od],
          [81, a.id, R],
        ];
      }
      function qo(a) {
        return [
          [193, a.hidden, Mb],
          [129, a.checked, Mb],
          [81, a.value, R],
        ];
      }
      function ro(a) {
        return [
          [257, a.nf, J],
          [193, a.xg, J],
          [129, a.end, J],
          [65, a.start, J],
        ];
      }
      function so() {
        return [];
      }
      function to(a) {
        return [
          [193, a.page, Mb],
          [129, a.y, J],
          [65, a.x, J],
        ];
      }
      function uo(a) {
        return [
          [129, a.y, J],
          [65, a.x, J],
        ];
      }
      function vo(a) {
        return [[84, a.Ja, wo]];
      }
      function wo(a) {
        return [
          [257, a.index, J],
          [209, a.pe, R],
          [145, a.style, R],
          [65, a.target, J],
        ];
      }
      function Wn(a) {
        return [
          [1168, a.Ej, vo],
          [1104, a.Bi, fo],
          [1040, a.Oh, go],
          [976, a.Dh, ho],
          [912, a.Pi, io],
          [848, a.tj, mo],
          [784, a.fk, no],
          [720, a.Pk, ko],
          [656, a.Lk, lo],
          [592, a.Mj, oo],
          [528, a.qh, qo],
          [464, a.zj, ro],
          [400, a.ck, so],
          [336, a.xj, to],
          [272, a.Ti, uo],
          [193, a.M, ke],
          [129, a.target, ke],
          [65, a.type, lb],
        ];
      }
      function Xn(a) {
        return [
          [257, a.M, ke],
          [208, a.Z, xo],
          [129, a.L, J],
          [65, a.target, J],
        ];
      }
      function xo(a) {
        return [
          [148, a.Ja, yo],
          [65, a.index, J],
        ];
      }
      function yo(a) {
        return [
          [276, a.d, zo],
          [212, a.sd, Ao],
          [148, a.df, Bo],
          [84, a.af, Co],
        ];
      }
      function zo(a) {
        return [
          [193, a.Da, J],
          [144, a.sc, di],
          [65, a.id, J],
        ];
      }
      function Ao(a) {
        return [
          [193, a.Da, J],
          [146, a.Ib, 81, R, 144, di],
          [65, a.id, J],
        ];
      }
      function di(a) {
        return [
          [193, a.r, Mb],
          [145, a.n, R],
          [81, a.Sc, R],
        ];
      }
      function Bo(a) {
        return [
          [641, a.Va, Mb],
          [577, a.Da, J],
          [513, a.ke, J],
          [465, a.sc, R],
          [402, a.Ib, 81, R, 145, R],
          [321, a.ue, J],
          [273, a.Xf, R],
          [193, a.qe, J],
          [145, a.Wf, R],
          [65, a.id, J],
        ];
      }
      function Co(a) {
        return [
          [321, a.Da, J],
          [257, a.qe, J],
          [193, a.ke, J],
          [129, a.ue, J],
          [65, a.id, J],
        ];
      }
      function Yn(a) {
        return [
          [321, a.Ga, Do],
          [273, a.hd, R],
          [193, a.M, ke],
          [148, a.content, Eo],
          [80, a.Z, Fo],
        ];
      }
      function Eo(a) {
        return [
          [513, a.hidden, Mb],
          [449, a.xe, J],
          [385, a.next, J],
          [337, a.content, R],
          [257, a.parent, J],
          [210, a.attributes, 81, R, 145, R],
          [145, a.name, R],
          [65, a.id, J],
        ];
      }
      function Fo(a) {
        return [
          [724, a.Hk, Go],
          [656, a.location, Ho],
          [592, a.viewport, ei],
          [528, a.screen, ei],
          [449, a.Hf, Mb],
          [401, a.ef, R],
          [337, a.referrer, R],
          [273, a.Hg, R],
          [209, a.bf, R],
          [145, a.title, R],
          [81, a.doctype, R],
        ];
      }
      function Go(a) {
        return [
          [133, a.scroll, J],
          [65, a.target, J],
        ];
      }
      function Ho(a) {
        return [
          [209, a.path, R],
          [145, a.protocol, R],
          [81, a.host, R],
        ];
      }
      function ei(a) {
        return [
          [129, a.height, J],
          [65, a.width, J],
        ];
      }
      function R(a) {
        var c = Io({}, a, [], 0);
        return c ? [Jo, c, a] : [fi, 0, 0];
      }
      function $n(a) {
        return [Ko, a.length, a];
      }
      function Mb(a) {
        return [fi, 1, a ? 1 : 0];
      }
      function Do(a) {
        a = gi(a);
        var c = a[0],
          b = a[1],
          d = ((b >>> 28) | (c << 4)) >>> 0;
        c >>>= 24;
        return [
          hi,
          0 === c
            ? 0 === d
              ? 16384 > b
                ? 128 > b
                  ? 1
                  : 2
                : 2097152 > b
                ? 3
                : 4
              : 16384 > d
              ? 128 > d
                ? 5
                : 6
              : 2097152 > d
              ? 7
              : 8
            : 128 > c
            ? 9
            : 10,
          a,
        ];
      }
      function od(a) {
        return [Lo, 4, a];
      }
      function ke(a) {
        return lb(((a << 1) ^ (a >> 31)) >>> 0);
      }
      function J(a) {
        return 0 > a ? [hi, 10, gi(a)] : lb(a);
      }
      function lb(a) {
        return [
          Mo,
          128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5,
          a,
        ];
      }
      function Mo(a, c, b, d) {
        for (a = c; 127 < a; ) (b[d++] = (a & 127) | 128), (a >>>= 7);
        b[d] = a;
      }
      function fi(a, c, b, d) {
        b[d] = c;
      }
      function Ko(a, c, b, d) {
        for (a = 0; a < c.length; ++a) b[d + a] = c[a];
      }
      function ii(a) {
        return function (c, b, d, e) {
          for (var f, g = 0, h = 0; h < b.length; ++h)
            if (((c = b.charCodeAt(h)), 128 > c)) a ? (g += 1) : (d[e++] = c);
            else {
              if (2048 > c) {
                if (a) {
                  g += 2;
                  continue;
                }
                d[e++] = (c >> 6) | 192;
              } else {
                if (
                  55296 === (c & 64512) &&
                  56320 === ((f = b.charCodeAt(h + 1)) & 64512)
                ) {
                  if (a) {
                    g += 4;
                    continue;
                  }
                  c = 65536 + ((c & 1023) << 10) + (f & 1023);
                  ++h;
                  d[e++] = (c >> 18) | 240;
                  d[e++] = ((c >> 12) & 63) | 128;
                } else {
                  if (a) {
                    g += 3;
                    continue;
                  }
                  d[e++] = (c >> 12) | 224;
                }
                d[e++] = ((c >> 6) & 63) | 128;
              }
              d[e++] = (c & 63) | 128;
            }
          return a ? g : e;
        };
      }
      function Lo(a, c, b, d) {
        return No(a)(a, c, b, d);
      }
      function Oo(a, c, b, d) {
        var e = 0 > c ? 1 : 0;
        e && (c = -c);
        if (0 === c) pd(0 < 1 / c ? 0 : 2147483648, b, d);
        else if (a.isNaN(c)) pd(2143289344, b, d);
        else if (3.4028234663852886e38 < c)
          pd(((e << 31) | 2139095040) >>> 0, b, d);
        else if (1.1754943508222875e-38 > c)
          pd(((e << 31) | a.Math.round(c / 1.401298464324817e-45)) >>> 0, b, d);
        else {
          var f = a.Math.floor(a.Math.log(c) / Math.LN2);
          pd(
            ((e << 31) |
              ((f + 127) << 23) |
              (Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607)) >>>
              0,
            b,
            d
          );
        }
      }
      function pd(a, c, b) {
        c[b] = a & 255;
        c[b + 1] = (a >>> 8) & 255;
        c[b + 2] = (a >>> 16) & 255;
        c[b + 3] = a >>> 24;
      }
      function hi(a, c, b, d) {
        a = c[0];
        for (c = c[1]; a; )
          (b[d++] = (c & 127) | 128),
            (c = ((c >>> 7) | (a << 25)) >>> 0),
            (a >>>= 7);
        for (; 127 < c; ) (b[d++] = (c & 127) | 128), (c >>>= 7);
        b[d++] = c;
      }
      function gi(a) {
        if (!a) return [0, 0];
        var c = 0 > a;
        c && (a = -a);
        var b = a >>> 0;
        a = ((a - b) / 4294967296) >>> 0;
        c &&
          ((a = ~a >>> 0),
          (b = ~b >>> 0),
          4294967295 < ++b && ((b = 0), 4294967295 < ++a && (a = 0)));
        return [a, b];
      }
      function le(a) {
        return fa(a)
          ? A(le, a)
          : ma(a) || "object" !== typeof a
          ? a
          : N(
              function (c, b) {
                var d = b[0],
                  e = b[1],
                  f = Po[d];
                W(f) && (f = d);
                e = H(f, Qo) ? e : le(e);
                f ? (c[f] = e) : (c[d] = e);
                return c;
              },
              {},
              Ba(a)
            );
      }
      function Nf(a, c, b) {
        return function (d, e, f) {
          var g;
          d = x({ J: Aa() }, d);
          d.G || (d.G = {});
          var h = d.G;
          h.wmode = "0";
          h["wv-part"] = "" + f;
          h["wv-hit"] = h["wv-hit"] || "" + Yb(a);
          h["page-url"] = h["page-url"] || a.location.href;
          h.rn = h.rn || "" + Ra(a);
          if (!h["wv-type"]) {
            f = d.Na || {};
            var k = f.hf,
              l = "4",
              m = "2";
            f.Mf && ((l = "5"), (m = "3"));
            h["wv-type"] = k ? l : m;
          }
          h = {
            Ra: { eb: "webvisor/" + e.id },
            ba: x(d.ba, {
              Wb: ((g = {}), (g["Content-Type"] = "text/plain"), g),
              Lg: "POST",
            }),
            G: h,
          };
          e = Ma(Of(a, "wv", e), b);
          return me(a, c, e)(x(d, h));
        };
      }
      function Ro(a, c) {
        return na(a, c, function (b) {
          var d = L(a);
          O(c);
          if (!d.o("dSync", !1))
            return (
              d.C("dSync", !0),
              ji(a, b, {
                ib: c,
                Zc: "s",
                de: "ds",
                Gj: function (e, f, g) {
                  var h = e.cd;
                  e = e.host;
                  if (n(h, "settings")) return eb(Oa("ds.e"));
                  f = f(Z) - g;
                  g = e[1];
                  var k, l;
                  h = Aa(((k = {}), (k.di = h), (k.dit = f), (k.dip = g), k));
                  k = ((l = {}), (l["page-url"] = T(a).href), l);
                  return wa(
                    a,
                    "S",
                    ki
                  )({ J: h, G: k }, ki)["catch"](E(a, "ds.rs"));
                },
              })
            );
        });
      }
      function ji(a, c, b) {
        var d = b.ib,
          e = ea(a),
          f = So(a, c.userData, d),
          g = To(a);
        return g.length
          ? Uo(a, e, f, c, b).then(function () {
              return Vo(a, g, f, e, b);
            }, B)
          : K.resolve();
      }
      function To(a) {
        var c = qd(a);
        a = u(Pf, oc(["iPhone", "iPad"]))(a);
        return c ? Wo : a ? Xo : [];
      }
      function Vo(a, c, b, d, e) {
        var f = e.Gj,
          g = void 0 === f ? B : f,
          h = e.de,
          k = d(Z);
        return Yo(
          a,
          c,
          e
        )(
          Ua(
            function (l) {
              z(function (m) {
                m && ne(a, h + ".s", m);
              }, l);
              l = d(kb);
              b.C(h, l);
            },
            function (l) {
              b.C(h, d(kb));
              g(l, d, k);
            }
          )
        );
      }
      function Uo(a, c, b, d, e) {
        var f = e.de,
          g = e.ib;
        return new K(function (h, k) {
          var l = b.o(f, 0);
          l = parseInt("" + l, 10);
          return 60 >= c(kb) - l
            ? k()
            : Zo(a)
            ? h(void 0)
            : li(d)
            ? k()
            : h($o(a, g));
        });
      }
      function Yo(a, c, b) {
        var d = b.Zc,
          e = b.data,
          f = wa(a, d, b.ib);
        a = x({}, mi);
        e && x(a.G, e);
        return ap(
          A(function (g) {
            return bp(
              f(
                x({ ba: { Ng: !1, vj: !0 } }, mi),
                A(function (h) {
                  var k = h[1],
                    l = h[2];
                  h = I(
                    "",
                    A(function (m) {
                      return String.fromCharCode(m.charCodeAt(0) + 10);
                    }, h[0].split(""))
                  );
                  return (
                    "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + cp[d]
                  );
                }, g)
              ).then(function (h) {
                return x({}, h, { host: g[h.Jg] });
              })
            );
          }, c)
        );
      }
      function So(a, c, b) {
        var d = c || {},
          e = wa(a, "u", b),
          f = Qa(a);
        return {
          o: function (g, h) {
            return W(d[g]) ? f.o(g, h) : d[g];
          },
          C: function (g, h) {
            var k,
              l = "" + h;
            d[g] = l;
            f.C(g, l);
            return e(
              { G: ((k = {}), (k.key = g), (k.value = l), k) },
              [pa.Ta + "//" + tc + "/user_storage_set"],
              {}
            )["catch"](E(a, "u.d.s.s"));
          },
        };
      }
      function dp(a, c) {
        try {
          var b = c.origin;
        } catch (e) {}
        if (b) {
          var d = Na(u(Va, ya(b)), [
            /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/,
            /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/,
          ]);
          if (
            N(
              function (e, f) {
                return e || f(b);
              },
              !1,
              ep
            ) ||
            d
          )
            (d = Db(a, c.data)),
              "appendremote" === n(d, "action") && fp(a, c, d);
        }
      }
      function ni(a, c) {
        var b,
          d,
          e,
          f,
          g = c.data;
        g = void 0 === g ? "" : g;
        var h = c.id;
        h = void 0 === h ? "" : h;
        var k = L(a),
          l = {};
        l.getCachedTags = oi;
        l.form =
          ((b = {}),
          (b.closest = v(a, hh)),
          (b.select = gp),
          (b.getData = v(a, jh)),
          b);
        l.button =
          ((d = {}),
          (d.closest = v(a, pi)),
          (d.select = qi),
          (d.getData = v(a, ri)),
          d);
        l.phone = ((e = {}), (e.hidePhones = G([a, null, [g]], si)), e);
        l.status = ((f = {}), (f.checkStatus = G([a, Fa(h)], hp)), f);
        k.C("_u", l);
        b = c.lang;
        b = void 0 === b ? "" : b;
        d = c.appVersion;
        d = void 0 === d ? "" : d;
        e = c.fileId;
        e = void 0 === e ? "" : e;
        f = c.beta;
        f = void 0 === f ? !1 : f;
        d = I(".", u(fb(u(P, Fa)), Gc(Boolean))(d.split(".")));
        H(e, ip) && H(b, ["ru", "en", "tr"])
          ? ((b =
              (f
                ? "https://s3.mds.yandex.net/internal-metrika-betas"
                : "https://yastatic.net/s3/metrika") +
              (d ? "/" + d : "") +
              "/form-selector/" +
              (e + "_" + b + ".js")),
            (b = ti(b) ? b : ""))
          : (b = "");
        b && Ec(a, { src: b });
      }
      function jp(a, c) {
        var b = Za(a);
        if (b) {
          b = b("div");
          var d = Xb(a);
          if (d) {
            b.innerHTML =
              '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
            var e = b.firstChild;
            e.onload = function () {
              Ec(e.contentWindow, { src: c });
            };
            a._ym__remoteIframeEl = e;
            d.appendChild(b);
            b.removeChild(e);
            var f = null;
            b.attachShadow
              ? (f = b.attachShadow({ mode: "open" }))
              : b.createShadowRoot
              ? (f = b.createShadowRoot())
              : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
            f
              ? f.appendChild(e)
              : (d.appendChild(e), (a._ym__remoteIframeContainer = e));
          }
        }
      }
      function hp(a) {
        var c,
          b = ui(a);
        a = L(a).o("getCounters", rd)();
        a = A(V("id"), a);
        return (c = { id: b }), (c.counterFound = !!b && H(b, a)), c;
      }
      function si(a, c, b) {
        var d;
        c = vi(a, c, { Eg: kp, Xi: ((d = {}), (d.href = !0), d) });
        b = X(
          Boolean,
          A(function (f) {
            return "*" === f ? f : Kb(f);
          }, b)
        );
        var e = A(u(P, va("concat", [""]), lp("reverse"), ja), b);
        b = hd(a);
        d = wi(a, b, 1e3);
        c = D(c.eg, c, e, !1);
        d.D(c);
        mp(a, b);
        xi(a, b);
        c();
      }
      function kp(a, c, b) {
        var d = Za(a),
          e = b.yb,
          f = b.ad,
          g = e.parentNode,
          h = e.textContent;
        if ("text" === b.Ee && h && d && g) {
          b = d("small");
          yi(b);
          var k = h.split(""),
            l = zi(h).length;
          z(
            va("appendChild", b),
            N(
              function (m, p) {
                var r = m.na,
                  t = m.Mg,
                  q = d("small");
                q.innerHTML = p;
                var y = np.test(p);
                yi(q);
                y && (q.style.opacity = "" + (l - t - 1) / l);
                r.push(q);
                return { na: r, Mg: t + (y ? 1 : 0) };
              },
              { na: [], Mg: 0 },
              k
            ).na
          );
          op(a, c, b, f);
          g.insertBefore(b, e);
          e.textContent = "";
          return !0;
        }
        return !1;
      }
      function op(a, c, b, d) {
        function e() {
          z(v(["style", "opacity", ""], Bc), oa(b.childNodes));
          if (c) {
            var k = Ea(a, c);
            k && k.extLink("tel:" + d, {});
          }
          g();
          h();
        }
        var f = ia(a),
          g = B,
          h = B;
        g = f.D(b, ["mouseenter"], function (k) {
          if (k.target === b) {
            var l = Y(a, e, 200, "ph.h.e");
            (h || B)();
            h = f.D(b, ["mouseleave"], function (m) {
              m.target === b && ka(a, l);
            });
          }
        });
      }
      function xi(a, c) {
        ac(a)(
          Ua(B, function () {
            var b,
              d = a.document.body,
              e =
                ((b = {}),
                (b.attributes = !0),
                (b.childList = !0),
                (b.subtree = !0),
                b);
            Ca("MutationObserver", a.MutationObserver) &&
              new MutationObserver(c.O).observe(d, e);
          })
        );
      }
      function mp(a, c) {
        return ia(a).D(a, ["load"], c.O);
      }
      function vi(a, c, b) {
        function d(k) {
          var l;
          return f(a, c, k)
            ? null === (l = h[k.ad]) || void 0 === l
              ? void 0
              : l.ld
            : null;
        }
        var e,
          f = b.Eg;
        b = b.Xi;
        var g = void 0 === b ? ((e = {}), (e.href = !0), (e.text = !0), e) : b,
          h;
        return {
          eg: function (k) {
            return new K(function (l, m) {
              (k && k.length) || m();
              h = Ai()(k);
              ac(a)(
                Ua(v({ oa: [], xa: 0 }, l), function () {
                  var p = ea(a),
                    r = p(Z),
                    t = g.href ? pp(a, h) : [],
                    q = g.text ? Bi(a, h) : [];
                  l({ oa: X(fa, X(Boolean, A(d, t.concat(q)))), xa: p(Z) - r });
                })
              );
            });
          },
        };
      }
      function pp(a, c) {
        var b = a.document.body;
        if (!b) return [];
        var d = Ci(c);
        return N(
          function (e, f) {
            var g = n(f, "href");
            try {
              var h = decodeURI(g || "");
            } catch (p) {
              h = "";
            }
            if ("tel:" === h.slice(0, 4)) {
              var k = (d.exec(h) || [])[0],
                l = k ? Kb(k) : "",
                m = c[l];
              W(m) ||
                (!l && "*" !== m.ld[0]) ||
                (e.push({
                  Ee: "href",
                  yb: f,
                  ad: l,
                  cb: Di(k, c[l].cb),
                  Ij: g,
                }),
                (g = Kb(h.slice(4))),
                (l = Ai()([l ? m.ld : [g, ""]])),
                e.push.apply(e, Bi(a, l, f)));
            }
            return e;
          },
          [],
          oa(b.querySelectorAll("a"))
        );
      }
      function Bi(a, c, b) {
        void 0 === b && (b = a.document.body);
        if (!b) return [];
        var d = [],
          e = Ci(c);
        sf(
          a,
          b,
          function (f) {
            if (
              f !== b &&
              "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()
            ) {
              var g = X(Boolean, e.exec(f.textContent || "") || []);
              z(function (h) {
                var k = Kb(h);
                W(c[k]) ||
                  d.push({
                    Ee: "text",
                    yb: f,
                    ad: k,
                    cb: Di(h, c[k].cb),
                    Ij: f.textContent || "",
                  });
              }, g);
            }
          },
          function (f) {
            return e.test(f.textContent || "") ? 1 : 0;
          },
          a.NodeFilter.SHOW_TEXT
        );
        return d;
      }
      function Ai() {
        return sd(function (a, c) {
          var b = A(Kb, c),
            d = b[0];
          b = b[1];
          a[d] = { cb: b, ld: c };
          var e = Ei(d);
          e !== d && (a[e] = { cb: Ei(b), ld: c });
          return a;
        }, {});
      }
      function Di(a, c) {
        for (
          var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0;
          g < a.length && !(f >= e.length);
          g += 1
        ) {
          var h = d[g];
          "0" <= h && "9" >= h ? (b.push(e[f]), (f += 1)) : b.push(d[g]);
        }
        return I("", b) + c.slice(f + 1);
      }
      function Ei(a) {
        var c = { 7: "8", 8: "7" };
        return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a;
      }
      function Ci(a) {
        return new RegExp("(?:" + I("|", A(Fi, ba(a))) + ")");
      }
      function Gi(a, c, b, d) {
        if (c) {
          var e = [];
          c &&
            (a.document.documentElement.contains(c)
              ? sf(a, c, va("push", e), d)
              : Ma(e, Hi(a, c, d)));
          z(b, e);
        }
      }
      function sf(a, c, b, d, e) {
        function f(g) {
          return U(d)
            ? d(g)
              ? a.NodeFilter.FILTER_ACCEPT
              : a.NodeFilter.FILTER_REJECT
            : a.NodeFilter.FILTER_ACCEPT;
        }
        void 0 === e && (e = -1);
        if (U(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Hf(c)))
          for (
            c = a.document.createTreeWalker(
              c,
              e,
              d ? { acceptNode: f } : null,
              !1
            );
            c.nextNode() && !1 !== b(c.currentNode);

          );
      }
      function Hi(a, c, b) {
        var d = [],
          e = u(P, va("push", d));
        U(b)
          ? ((b = b(c)), (ma(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c))
          : e(c);
        if (c.childNodes && 0 < c.childNodes.length) {
          c = c.childNodes;
          b = 0;
          for (var f = c.length; b < f; b += 1) {
            var g = Hi(a, c[b]);
            z(e, g);
          }
        }
        return d;
      }
      function jh(a, c, b) {
        return Ii(a, c, ["i", "n", "p"], void 0, b);
      }
      function qp(a) {
        return {
          ca: function (c, b) {
            L(a).o("oo") || b();
          },
        };
      }
      function rp(a, c) {
        try {
          var b = c[0];
          var d = b[1];
        } catch (e) {
          return function () {
            return K.resolve();
          };
        }
        return function (e) {
          var f,
            g =
              ((f = {}),
              (f["browser-info"] = sp),
              (f["page-url"] = a.location && "" + a.location.href),
              f);
          return d && (e = jb(a, e))
            ? d(tp, { Xb: g, Ba: [], fa: "site-info=" + de(e) })["catch"](B)
            : K.resolve();
        };
      }
      function up(a, c, b) {
        if (b && ((b = pi(a, b)), (b = ri(a, b)))) {
          b = "?" + Zc(b);
          var d = Bb(
            a,
            c,
            "Button goal. Counter " + c.id + ". Button: " + b + "."
          );
          Rd(a, c, "btn", d)(b);
        }
      }
      function vp(a, c) {
        var b;
        a(((b = {}), (b.clickmap = W(c) ? !0 : c), b));
      }
      function wp(a, c, b, d, e) {
        var f;
        c = {
          J: Aa(),
          G: ((f = {}), (f["page-url"] = c), (f["pointer-click"] = b), f),
        };
        d(c, e)["catch"](E(a, "c.s.c"));
      }
      function xp(a, c, b, d, e) {
        if (td(a, "ymDisabledClickmap") || !c || !c.element) return !1;
        a = Ga(c.element);
        if (
          (e && !e(c.element, a)) ||
          (H(c.button, [2, 3]) && "A" !== a) ||
          Na(la(a), d)
        )
          return !1;
        d = c.element;
        if (c && b) {
          if (50 > c.time - b.time) return !1;
          e = Math.abs(b.position.x - c.position.x);
          a = Math.abs(b.position.y - c.position.y);
          c = c.time - b.time;
          if (b.element === d && 2 > e && 2 > a && 1e3 > c) return !1;
        }
        for (; d; ) {
          if (yp(d)) return !1;
          d = d.parentElement;
        }
        return !0;
      }
      function zp(a, c) {
        var b = null;
        try {
          if ((b = c.target || c.srcElement))
            !b.ownerDocument && b.documentElement
              ? (b = b.documentElement)
              : b.ownerDocument !== a.document && (b = null);
        } catch (d) {}
        return b;
      }
      function Ap(a) {
        var c = a.which;
        a = a.button;
        return c || void 0 === a
          ? c
          : 1 === a || 3 === a
          ? 1
          : 2 === a
          ? 3
          : 4 === a
          ? 2
          : 0;
      }
      function Ji(a, c) {
        var b = Xb(a),
          d = Qf(a);
        return {
          x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
          y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0,
        };
      }
      function Bp(a, c) {
        if (a.Rj()) {
          var b = Ki(c);
          if (b && !rc("ym-disable-tracklink", b)) {
            var d = a.l,
              e = a.zh,
              f = a.ib,
              g = a.sender,
              h = a.Ph,
              k = f.Bc,
              l = b.href,
              m = rb(
                b && b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, "")
              );
            m = l === m ? "" : m;
            if (rc("ym-external-link", b))
              oe(d, f, { url: l, Qb: !0, title: m, sender: g });
            else {
              k = k ? Kc(d, k).hostname : T(d).hostname;
              h = RegExp("\\.(" + I("|", A(Cp, h)) + ")$", "i");
              var p = b.protocol + "//" + b.hostname + b.pathname;
              h = Li.test(p) || Li.test(l) || h.test(l) || h.test(p);
              b = b.hostname;
              pe(k) === pe(b)
                ? h
                  ? oe(d, f, { url: l, Lc: !0, title: m, sender: g })
                  : m && e.C("il", rb(m).slice(0, 100))
                : (l && Dp.test(l)) ||
                  oe(d, f, {
                    url: l,
                    Qc: !0,
                    Qb: !0,
                    Lc: h,
                    title: m,
                    sender: g,
                  });
            }
          }
        }
      }
      function oe(a, c, b, d) {
        var e,
          f = Aa();
        b.Lc && f.C("dl", "1");
        b.Qb && f.C("ln", "1");
        f = {
          J: f,
          V: { title: b.title, Qc: !!b.Qc, aa: b.aa },
          G:
            ((e = {}),
            (e["page-url"] = b.url),
            (e["page-ref"] = c.Bc || T(a).href),
            e),
        };
        e = "Link";
        b.Lc
          ? (e = b.Qb ? "Ext link - File" : "File")
          : b.Qb && (e = "Ext link");
        c = b
          .sender(f, c)
          .then(d || B)
          .then(Bb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b));
        return Lc(a, "cl.p.s", c, b.hb || B, b.l);
      }
      function Ep(a, c) {
        var b,
          d,
          e =
            ((b = {}), (b.string = !0), (b.object = !0), (b["boolean"] = c), b)[
              typeof c
            ] || !1;
        a(((d = {}), (d.trackLinks = e), d));
      }
      function Fp(a, c, b, d) {
        var e = T(a),
          f = e.hostname;
        e = e.href;
        if ((c = ud(c).url)) (a = Kc(a, c)), (f = a.hostname), (e = a.href);
        return [d + "://" + f + "/" + b, e || ""];
      }
      function Mi(a) {
        return (a.split(":")[1] || "")
          .replace(/^\/*/, "")
          .replace(/^www\./, "")
          .split("/")[0];
      }
      function qe(a, c) {
        return function (b) {
          Ni(a, c, b);
        };
      }
      function Gp(a, c) {
        Rf(a)(function (b) {
          delete b[c];
        });
      }
      function Ni(a, c, b) {
        Rf(a)(function (d) {
          d[c] = x(d[c] || {}, b);
        });
      }
      function Rf(a) {
        a = L(a);
        var c = a.o("dsjf") || ya({});
        a.Pa("dsjf", c);
        return c;
      }
      function Lc(a, c, b, d, e) {
        var f = G([a, d, e], Sf);
        return b.then(f, function (g) {
          f();
          ne(a, c, g);
        });
      }
      function Oi(a, c) {
        L(a).C("dce:" + c, !0);
        var b = L(a).o("dclq:" + c);
        b &&
          (z(function (d) {
            var e = d[0];
            d = d[1];
            ja.apply(void 0, ua([vd(a, c)[e]], d));
          }, b),
          b.splice(0, b.length));
      }
      function Bb(a, c, b, d) {
        return Tf(c)
          ? B
          : v(G(ua([a, O(c)], d ? [b + ". Params:", d] : [b]), pb), ja);
      }
      function pb() {
        var a = xa(arguments),
          c = a.slice(2);
        vd(a[0], a[1]).log.apply(pb, c);
      }
      function If(a) {
        var c = "1" === $b(a).o("debug"),
          b = -1 < T(a).href.indexOf("_ym_debug=1");
        a = a._ym_debug;
        return { zi: c, Ii: a || b, isEnabled: Na(Boolean, [c, a, b]) };
      }
      function Hp(a, c) {
        return {
          log: Mc(a, "log", c, B),
          warn: Mc(a, "log", c, B),
          error: Mc(a, "log", c, B),
        };
      }
      function na(a, c, b) {
        a = O(c);
        return Pi()(Ip(a)).then(b);
      }
      function Jp(a, c, b) {
        c = O(c);
        var d = Uf(a);
        b = x({ Rh: d(Z) }, b);
        ib(a, { ea: c, name: "counterSettings", data: { Vk: b } });
        return Pi()(Kp(c, b));
      }
      function Kp(a, c) {
        return function (b) {
          var d = b[a];
          d
            ? ((d.sj = c), (d.hg = !0), d.gg ? d.gg(c) : (d.ab = K.resolve(c)))
            : (b[a] = { ab: K.resolve(c), sj: c, hg: !0 });
        };
      }
      function Eb(a) {
        return A(function (c) {
          return !c || H(c, a) ? c : 0;
        }, bc);
      }
      function Qi(a) {
        return !ad(a) && Ri(a);
      }
      function Vf(a) {
        return Za(a) ? v(a, Lp) : !1;
      }
      function Ri(a) {
        var c = n(a, "navigator.sendBeacon");
        return c && Ca("sendBeacon", c)
          ? G([a, D(c, n(a, "navigator"))], Mp)
          : !1;
      }
      function Mp(a, c, b, d) {
        return new K(function (e, f) {
          if (!n(a, "navigator.onLine")) return f();
          var g = x(d.Xb, { "force-urlencoded": 1 });
          g = b + "?" + Zc(g) + (d.fa ? "&" + d.fa : "");
          return 2e3 < g.length ? f(Oa("sb.tlq")) : c(g) ? e("") : f();
        });
      }
      function Lp(a, c, b) {
        return new K(function (d, e) {
          var f,
            g,
            h = "_ymjsp" + Ra(a),
            k = x(((f = {}), (f.callback = h), f), b.Xb),
            l = G([a, h], Np);
          a[h] = function (p) {
            try {
              l(), lc(m), d(p);
            } catch (r) {
              e(r);
            }
          };
          k.wmode = "5";
          var m = Ec(a, ((g = {}), (g.src = Si(c, b, k)), g));
          if (!m) return l(), e(Fc("jp.s"));
          f = v(m, lc);
          f = u(f, v(Oa(b.Ba), e));
          g = re(a, f, b.Cb || 1e4);
          g = G([a, g], ka);
          m.onload = g;
          m.onerror = u(l, g, f);
        });
      }
      function Np(a, c) {
        try {
          delete a[c];
        } catch (b) {
          a[c] = void 0;
        }
      }
      function wd(a) {
        var c = Za(a);
        return c ? G([a, c], Op) : !1;
      }
      function Op(a, c, b, d) {
        return new K(function (e, f) {
          var g = Xb(a),
            h = c("img"),
            k = u(v(h, lc), v(Oa(d.Ba), f)),
            l = re(a, k, d.Cb || 3e3);
          h.onerror = k;
          h.onload = u(v(h, lc), v(null, e), G([a, l], ka));
          k = x({}, d.Xb);
          delete k.wmode;
          h.src = Si(b, d, k);
          xd(a) &&
            (x(h.style, {
              position: "absolute",
              visibility: "hidden",
              width: "0px",
              height: "0px",
            }),
            g.appendChild(h));
        });
      }
      function Nb(a) {
        var c;
        if ((c = n(a, "XMLHttpRequest")))
          if ((c = "withCredentials" in new a.XMLHttpRequest())) {
            a: {
              if (
                Pp.test(a.location.host) &&
                a.opera &&
                U(a.opera.version) &&
                ((c = a.opera.version()),
                "string" === typeof c && "12" === c.split(".")[0])
              ) {
                c = !0;
                break a;
              }
              c = !1;
            }
            c = !c;
          }
        return c ? v(a, Qp) : !1;
      }
      function Qp(a, c, b) {
        var d,
          e = new a.XMLHttpRequest(),
          f = b.fa,
          g = x(b.nd ? ((d = {}), (d.wmode = "7"), d) : {}, b.Xb);
        return new K(function (h, k) {
          e.open(b.Lg || "GET", c + "?" + Zc(g), !0);
          e.withCredentials = !1 !== b.Ng;
          b.Cb && (e.timeout = b.Cb);
          Ti(
            Ba,
            fb(function (m) {
              e.setRequestHeader(m[0], m[1]);
            })
          )(b.Wb);
          var l = G([a, e, Oa(b.Ba), b.nd, b.vj, h, k], Rp);
          e.onreadystatechange = l;
          try {
            e.send(f);
          } catch (m) {}
        });
      }
      function Rp(a, c, b, d, e, f, g, h) {
        if (4 === c.readyState)
          if ((200 === c.status || e || g(b), e))
            200 === c.status
              ? f(c.responseText)
              : g(
                  Fc(
                    "http." +
                      c.status +
                      ".st." +
                      c.statusText +
                      ".rt." +
                      ("" + c.responseText).substring(0, 50)
                  )
                );
          else {
            e = null;
            if (d)
              try {
                (e = Db(a, c.responseText)) || g(b);
              } catch (k) {
                g(b);
              }
            f(e);
          }
        return h;
      }
      function Si(a, c, b) {
        (b = Zc(b)) && (a += "?" + b);
        c.fa && (a += (b ? "&" : "?") + c.fa);
        return a;
      }
      function Sp(a, c, b) {
        var d = A(uc, Ob[c] || Fb);
        z(function (e) {
          return d.unshift(e);
        }, Wf);
        return A(u(yd([a, b]), ja), d);
      }
      function Ui(a, c) {
        var b = T(a),
          d = b.href,
          e = b.host,
          f = -1;
        if (!Ia(c) || W(c)) return d;
        b = c.replace(Vi, "");
        if (-1 !== b.search(Tp)) return b;
        var g = b.charAt(0);
        if (
          ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
          ("#" === g && ((f = d.search(/#/)), -1 === f))
        )
          return d + b;
        if (-1 !== f) return d.substr(0, f) + b;
        if ("/" === g) {
          if (((f = d.indexOf(e)), -1 !== f))
            return d.substr(0, f + e.length) + b;
        } else return (d = d.split("/")), (d[d.length - 1] = b), I("/", d);
        return "";
      }
      function Xf() {
        return function (a, c) {
          return {
            ca: function (b, d) {
              var e,
                f = b.J,
                g = b.fb,
                h = b.G,
                k = b.ba;
              k = void 0 === k ? {} : k;
              if (f && h) {
                var l = ea(a);
                f.ac("rqnl", 1);
                for (var m = zd(a), p = 1; m[p]; ) p += 1;
                b.V || (b.V = {});
                b.V.Yb = p;
                m[p] =
                  ((e = {}),
                  (e.protocol = pa.Ta),
                  (e.host = tc),
                  (e.resource = "watch"),
                  (e.postParams = k.fa),
                  (e.time = l(Z)),
                  (e.counterType = c.da),
                  (e.params = h),
                  (e.browserInfo = f.l()),
                  (e.counterId = c.id),
                  (e.ghid = Yb(a)),
                  e);
                g && (g.ac("rqnl", 1), (m[p].telemetry = g.l()));
                Yf(a);
              }
              d();
            },
            Aa: function (b, d) {
              Wi(a, b);
              d();
            },
          };
        };
      }
      function Wi(a, c) {
        var b = zd(a);
        c.J && !Pa(b) && c.V && (delete b[c.V.Yb], Yf(a));
      }
      function Yf(a) {
        var c = zd(a);
        Qa(a).C("retryReqs", c);
      }
      function Zf(a, c) {
        return {
          ca: function (b, d) {
            var e = b.J;
            if (e && (!c || c.pg)) {
              var f = a.document.title;
              b.V && b.V.title && (f = b.V.title);
              var g = cc("getElementsByTagName", a.document);
              "string" !== typeof f &&
                g &&
                ((f = g("title")), (f = (f = n(f, "0.innerHtml")) ? f : ""));
              f = f.slice(0, pa.Vg);
              e.C("t", f);
            }
            d();
          },
        };
      }
      function Pb(a) {
        void 0 === a && (a = Up);
        return function (c, b) {
          return {
            ca: function (d, e) {
              var f = d.J,
                g = d.G;
              f &&
                g &&
                z(function (h) {
                  var k = se[h],
                    l = "bi",
                    m = f;
                  k || ((k = $f[h]), (l = "tel"), (m = Ud(d)));
                  k && ((k = F(l + ":" + h, k, null)(c, b, d)), m.ac(h, k));
                }, a);
              e();
            },
          };
        };
      }
      function Vp(a) {
        if (ad(a)) return null;
        var c = Wp(a),
          b = c.bg;
        W(b) &&
          ((c.bg = null),
          Xp(a).then(function (d) {
            c.bg = d;
          }));
        return b ? 1 : null;
      }
      function Yp(a, c, b) {
        c = O(c);
        a = Xi(a);
        b = b.G;
        if ((void 0 === b ? {} : b).nohit) return null;
        var d = (b = null);
        n(a, "getEntriesByType") &&
          (d = n(a.getEntriesByType("navigation"), "0")) &&
          (b = Zp);
        if (!b) {
          var e = n(a, "timing");
          e && ((b = $p), (d = e));
        }
        if (!b) return null;
        a = aq(a, d, b);
        c = bq(c);
        return (c = cq(c, a)) && I(",", c);
      }
      function cq(a, c) {
        var b = a.length
          ? A(function (d, e) {
              var f = c[e];
              return f === d ? null : f;
            }, a)
          : c;
        a.length = 0;
        z(u(P, va("push", a)), c);
        return X(la(null), b).length === a.length ? null : b;
      }
      function aq(a, c, b) {
        return A(function (d) {
          var e = d[0],
            f = d[1];
          if (U(e)) return e(a, c) || null;
          if (U(f)) return null;
          var g = !(!c[e] || !c[f]);
          !g &&
            2 === d.length &&
            (g = 0 === c[e] && 0 === c[f]) &&
            ((g = d[1]), (g = !(Yi[d[0]] || Yi[g])));
          return g
            ? ((d = Math.round(c[e]) - Math.round(c[f])),
              0 > d || 36e5 < d ? null : d)
            : 1 === d.length && c[e]
            ? Math.round(c[e])
            : null;
        }, b);
      }
      function te(a, c) {
        return {
          ca: function (b, d) {
            var e = Zi(c);
            e = G([b, e, d], dq);
            eq(a, c, e);
          },
          Aa: function (b, d) {
            var e = b.J,
              f = Zi(c);
            if (e) {
              var g = f.ta;
              f.uf === e && g && (z(ja, g), (f.ta = null));
            }
            d();
          },
        };
      }
      function dq(a, c, b) {
        var d = a.J;
        d ? (pf(a) ? ((c.uf = d), b()) : c.ta ? c.ta.push(b) : b()) : b();
      }
      function pf(a) {
        return (a = a.J) && a.o("pv") && !a.o("ar");
      }
      function eq(a, c, b) {
        if (ag(a) && db(a)) {
          var d = fq(c);
          if (!d.Ki) {
            d.Ki = !0;
            c = cd(a, c);
            if (!c) {
              b();
              return;
            }
            d.ta = [];
            var e = function () {
              d.ta && (z(ja, d.ta), (d.ta = null));
            };
            Y(a, e, 3e3);
            c.$.D(["initToChild"], e);
          }
          d.ta ? d.ta.push(b) : b();
        } else b();
      }
      function Ph(a, c) {
        void 0 === c && (c = !1);
        for (var b = a.length, d = b - (b % 3), e = [], f = 0; f < d; f += 3) {
          var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
          e.push(
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 18) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 12) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              (g >> 6) & 63
            ],
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
              g & 63
            ]
          );
        }
        switch (b - d) {
          case 1:
            b = a[d] << 4;
            e.push(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                (b >> 6) & 63
              ],
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                b & 63
              ],
              "=",
              "="
            );
            break;
          case 2:
            (b = (a[d] << 10) + (a[d + 1] << 2)),
              e.push(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 12) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  (b >> 6) & 63
                ],
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[
                  b & 63
                ],
                "="
              );
        }
        e = e.join("");
        return c ? $i(e, !0) : e;
      }
      function yh(a, c) {
        void 0 === c && (c = !1);
        var b = a,
          d = "",
          e = 0;
        if (!b) return "";
        for (c && (b = $i(b)); b.length % 4; ) b += "=";
        do {
          var f =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            h =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              ),
            k =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                b.charAt(e++)
              );
          if (0 > f || 0 > g || 0 > h || 0 > k) return "";
          var l = (f << 18) | (g << 12) | (h << 6) | k;
          f = (l >> 16) & 255;
          g = (l >> 8) & 255;
          l &= 255;
          d =
            64 === h
              ? d + String.fromCharCode(f)
              : 64 === k
              ? d + String.fromCharCode(f, g)
              : d + String.fromCharCode(f, g, l);
        } while (e < b.length);
        return d;
      }
      function $i(a, c) {
        void 0 === c && (c = !1);
        return a
          ? a.replace(c ? /[+/=]/g : /[-*_]/g, function (b) {
              return gq[b] || b;
            })
          : "";
      }
      function hq(a, c, b, d, e, f, g, h) {
        var k = b.o(f);
        ma(k) && (b.C(f, g), e(a, c, b, d), (k = b.o(f, g)));
        W(h) || h.ac(f, "" + k);
        return k;
      }
      function iq(a, c) {
        if (xd(a)) {
          var b = tb(a).match(jq);
          if (b && b.length) return b[1] === c;
        }
        return !1;
      }
      function Mc(a, c, b, d) {
        return function () {
          var e = xa(arguments);
          ib(a, { ea: b, name: "log", data: { Hb: e, type: c } });
          return d.apply(void 0, e);
        };
      }
      function ri(a, c, b) {
        var d = Ga(c);
        return d && Ii(a, c, X(Boolean, ["p", kq[d], "c"]), qi, b);
      }
      function pi(a, c) {
        var b = Vb(bg, a, c);
        if (!b) {
          var d = Vb("div", a, c);
          d && (ub(bg + ",div", d).length || (b = d));
        }
        return b;
      }
      function Ii(a, c, b, d, e) {
        return N(
          function (f, g) {
            var h = null;
            g in aj
              ? (h = c.getAttribute && c.getAttribute(aj[g]))
              : g in Nc &&
                (h =
                  "p" === g
                    ? Nc[g](a, c, e)
                    : "c" === g
                    ? Nc[g](a, c, d)
                    : Nc[g](a, c));
            h &&
              ((h = h.slice(0, bj[g] || 100)), (f[g] = cg[g] ? "" + mc(h) : h));
            return f;
          },
          {},
          b
        );
      }
      function Rh(a, c, b) {
        if (Ad(a)) return oa(b.querySelectorAll(c));
        var d = cj(c.split(" "), b);
        return X(function (e, f) {
          return Jb(a)(e, d) === f;
        }, d);
      }
      function cj(a, c) {
        var b = ua(a),
          d = b.shift();
        if (!d) return [];
        d = c.getElementsByTagName(d);
        return b.length ? kc(v(b, cj), oa(d)) : oa(d);
      }
      function Jc(a, c) {
        if (c.querySelector) return c.querySelector(a);
        var b = ub(a, c);
        return b && b.length ? b[0] : null;
      }
      function ub(a, c) {
        if (!c) return [];
        var b = c.querySelectorAll(a);
        return b ? oa(b) : [];
      }
      function Ki(a) {
        var c = null;
        try {
          c = a.target || a.srcElement;
        } catch (b) {}
        if (c) {
          3 === c.nodeType && (c = c.parentNode);
          for (
            a = c && c.nodeName && ("" + c.nodeName).toLowerCase();
            n(c, "parentNode.nodeName") &&
            (("a" !== a && "area" !== a) ||
              (!c.href && !c.getAttribute("xlink:href")));

          )
            a =
              (c = c.parentNode) &&
              c.nodeName &&
              ("" + c.nodeName).toLowerCase();
          return c.href ? c : null;
        }
        return null;
      }
      function Ec(a, c) {
        var b = a.document,
          d = x({ type: "text/javascript", charset: "utf-8", async: !0 }, c),
          e = Za(a);
        if (e) {
          var f = e("script");
          Ti(
            Ba,
            fb(function (l) {
              var m = l[0];
              l = l[1];
              "async" === m && l ? (f.async = !0) : (f[m] = l);
            })
          )(d);
          try {
            var g = cc("getElementsByTagName", b),
              h = g("head")[0];
            if (!h) {
              var k = g("html")[0];
              h = e("head");
              k && k.appendChild(h);
            }
            h.insertBefore(f, h.firstChild);
            return f;
          } catch (l) {}
        }
      }
      function lq(a, c, b) {
        var d = dj(c);
        H(b, d.vb) || d.vb.push(b);
        if (Pa(d.mb)) {
          b = Za(a);
          if (!b) return null;
          b = b("iframe");
          x(b.style, {
            display: "none",
            width: "1px",
            height: "1px",
            visibility: "hidden",
          });
          b.src = c;
          a = Xb(a);
          if (!a) return null;
          a.appendChild(b);
          d.mb = b;
        } else
          (a = n(d.mb, "contentWindow")) && a.postMessage("frameReinit", "*");
        return d.mb;
      }
      function mq(a, c) {
        var b = fa(a) ? a : [a];
        c = c || document;
        if (c.querySelectorAll) {
          var d = I(
            ", ",
            A(function (e) {
              return "." + e;
            }, b)
          );
          return oa(c.querySelectorAll(d));
        }
        if (c.getElementsByClassName)
          return kc(u(va("getElementsByClassName", c), oa), b);
        d = c.getElementsByTagName("*");
        b = "(" + I("|", b) + ")";
        return X(v(b, rc), oa(d));
      }
      function dg(a, c, b) {
        for (
          var d = "", e = oi(), f = Ga(c) || "*";
          c && c.parentNode && !H(f, ["BODY", "HTML"]);

        )
          (d += e[f] || "*"),
            (d += ej(a, c, b) || ""),
            (c = c.parentElement),
            (f = Ga(c) || "*");
        return rb(d, 128);
      }
      function ej(a, c, b) {
        if ((a = ue(a, c))) {
          a = a.childNodes;
          for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
            if (d === (a[f] && a[f].nodeName)) {
              if (c === a[f]) return e;
              (b && a[f] === b) || (e += 1);
            }
        }
        return 0;
      }
      function ue(a, c) {
        var b = n(a, "document");
        if (!c || c === b.documentElement) return null;
        if (c === vc(a)) return b.documentElement;
        b = null;
        try {
          b = c.parentNode;
        } catch (d) {}
        return b;
      }
      function Df(a, c) {
        var b = eg(a, c),
          d = b.left;
        b = b.top;
        var e = ve(a, c);
        return [d, b, e[0], e[1]];
      }
      function ve(a, c) {
        var b = n(a, "document");
        if (c === vc(a) || c === b.documentElement) {
          b = Xb(a);
          var d = Bd(a);
          return [
            Math.max(b.scrollWidth, d[0]),
            Math.max(b.scrollHeight, d[1]),
          ];
        }
        return (b = jd(c))
          ? [b.width, b.height]
          : [c.offsetWidth, c.offsetHeight];
      }
      function eg(a, c) {
        var b = c,
          d = n(a, "document"),
          e = Ga(b);
        if (
          !b ||
          !b.ownerDocument ||
          "PARAM" === e ||
          b === vc(a) ||
          b === d.documentElement
        )
          return { left: 0, top: 0 };
        if ((d = b.getBoundingClientRect && jd(b)))
          return (
            (b = Qf(a)),
            { left: Math.round(d.left + b.x), top: Math.round(d.top + b.y) }
          );
        for (e = d = 0; b; )
          (d += b.offsetLeft), (e += b.offsetTop), (b = b.offsetParent);
        return { left: d, top: e };
      }
      function Vb(a, c, b) {
        if (!(c && c.Element && c.Element.prototype && c.document && b))
          return null;
        if (
          c.Element.prototype.closest &&
          Ca("closest", c.Element.prototype.closest) &&
          b.closest
        )
          return b.closest(a);
        var d = Xh(c);
        if (d) {
          for (; b && 1 === b.nodeType && !d.call(b, a); )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        if (Ad(c)) {
          for (
            a = oa((c.document || c.ownerDocument).querySelectorAll(a));
            b && 1 === b.nodeType && -1 === Jb(c)(b, a);

          )
            b = b.parentElement || b.parentNode;
          return b && 1 === b.nodeType ? b : null;
        }
        return null;
      }
      function Ad(a) {
        return !(
          !Ca("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) ||
          !a.document.querySelectorAll
        );
      }
      function fj(a) {
        return we(a) && !Na(la(a.type), nq)
          ? xe(a)
            ? !a.checked
            : !a.value
          : oq(a)
          ? !a.value
          : pq(a)
          ? 0 > a.selectedIndex
          : !0;
      }
      function Ga(a) {
        if (a)
          try {
            var c = a.nodeName;
            if (Ia(c)) return c;
            c = a.tagName;
            if (Ia(c)) return c;
          } catch (b) {}
      }
      function gj(a, c) {
        var b = a.document.getElementsByTagName("form");
        return Jb(a)(c, oa(b));
      }
      function qq(a, c, b) {
        b = cc("dispatchEvent", b || a.document);
        var d = null,
          e = n(a, "Event.prototype.constructor");
        if (
          e &&
          (Ca("(Event|Object|constructor)", e) ||
            (ye(a) && "[object Event]" === "" + e))
        )
          try {
            d = new a.Event(c);
          } catch (f) {
            if ((a = cc("createEvent", n(a, "document"))) && U(a)) {
              try {
                d = a(c);
              } catch (g) {}
              d && d.initEvent && d.initEvent(c, !1, !1);
            }
          }
        d && b(d);
      }
      function jd(a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect();
        } catch (c) {
          return "object" === typeof c &&
            null !== c &&
            16389 === (c.Yf && c.Yf & 65535)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null;
        }
      }
      function Qf(a) {
        var c = vc(a),
          b = n(a, "document");
        return {
          x:
            a.pageXOffset ||
            (b.documentElement && b.documentElement.scrollLeft) ||
            (c && c.scrollLeft) ||
            0,
          y:
            a.pageYOffset ||
            (b.documentElement && b.documentElement.scrollTop) ||
            (c && c.scrollTop) ||
            0,
        };
      }
      function Bd(a) {
        var c = fg(a);
        if (c) {
          var b = c[2];
          return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)];
        }
        c = Xb(a);
        return [
          n(c, "clientWidth") || a.innerWidth,
          n(c, "clientHeight") || a.innerHeight,
        ];
      }
      function fg(a) {
        var c = n(a, "visualViewport.width"),
          b = n(a, "visualViewport.height");
        a = n(a, "visualViewport.scale");
        return ma(c) || ma(b) ? null : [Math.floor(c), Math.floor(b), a];
      }
      function Xb(a) {
        var c = n(a, "document") || {},
          b = c.documentElement;
        return "CSS1Compat" === c.compatMode ? b : vc(a) || b;
      }
      function vc(a) {
        a = n(a, "document");
        try {
          return a.getElementsByTagName("body")[0];
        } catch (c) {
          return null;
        }
      }
      function rc(a, c) {
        try {
          return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(c.className);
        } catch (b) {
          return !1;
        }
      }
      function wc(a) {
        var c;
        try {
          if ((c = a.target || a.srcElement))
            !c.ownerDocument && c.documentElement
              ? (c = c.documentElement)
              : c.ownerDocument !== document && (c = null);
        } catch (b) {}
        return c;
      }
      function lc(a) {
        var c = a && a.parentNode;
        c && c.removeChild(a);
      }
      function Qb(a) {
        return a ? a.innerText || "" : "";
      }
      function Hf(a) {
        if (ma(a)) return !1;
        a = a.nodeType;
        return 3 === a || 8 === a;
      }
      function rq(a, c) {
        if (a["disableYaCounter" + c.id]) {
          var b = O(c);
          delete L(a).o("counters", {})[b];
          eb(Oa("oo.e"));
        }
      }
      function Ea(a, c) {
        var b = L(a).o("counters", {}),
          d = O(c);
        return b[d];
      }
      function hj(a, c) {
        var b = cd(a, c),
          d = [],
          e = [];
        if (!b) return null;
        var f = G([a, b.He], sq),
          g = v(f, tq);
        b.$.D(["initToParent"], function (h) {
          g(d, b.children[h[1].counterId]);
        }).D(["parentConnect"], function (h) {
          g(e, b.Fa[h[1].counterId]);
        });
        return {
          $: b.$,
          Tk: function (h, k) {
            return new K(function (l, m) {
              b.He(h, k, function (p, r) {
                l([p, r]);
              });
              Y(a, v(Oa(), m), 5100, "is.o");
            });
          },
          qg: function (h) {
            var k = { ug: [], Se: [], data: h };
            d.push(k);
            return f(b.children, k, h);
          },
          rg: function (h) {
            var k = { ug: [], Se: [], data: h };
            e.push(k);
            return f(b.Fa, k, h);
          },
        };
      }
      function tq(a, c, b) {
        c = X(function (d) {
          return !H(b.info.counterId, d.Se);
        }, c);
        z(function (d) {
          var e;
          b.info.counterId &&
            a(((e = {}), (e[b.info.counterId] = b), e), d, d.data);
        }, c);
      }
      function sq(a, c, b, d, e) {
        return new K(function (f, g) {
          var h = ba(b),
            k = u(d.resolve ? d.resolve : P, fd(f)),
            l = u(d.reject ? d.reject : P, fd(g));
          d.resolve = k;
          d.reject = l;
          z(function (m) {
            var p;
            d.Se.push(+m);
            var r = b[m],
              t = Y(a, v(Oa(), l), 5100, "is.m");
            c(
              r.window,
              x(e, ((p = {}), (p.toCounter = Fa(m)), p)),
              function (q, y) {
                ka(a, t);
                d.ug.push(m);
                d.resolve && d.resolve(y);
              }
            );
          }, h);
        })["catch"](E(a, "if.b"));
      }
      function uq(a, c) {
        var b = Cd(a);
        c.D(["initToParent"], function (d) {
          var e = d[0];
          d = d[1];
          window.window &&
            (b.children[d.counterId] = { info: d, window: e.source });
        })
          .D(["initToChild"], function (d) {
            var e = d[0];
            d = d[1];
            e.source === a.parent && c.O("parentConnect", [e, d]);
          })
          .D(["parentConnect"], function (d) {
            var e = d[1];
            e.counterId &&
              (b.Fa[e.counterId] = { info: e, window: d[0].source });
          });
      }
      function vq(a) {
        if (Ca("MutationObserver", a.MutationObserver)) {
          var c = Cd(a).children,
            b = new a.MutationObserver(function () {
              z(function (d) {
                c[d].window.window || delete c[d];
              }, ba(c));
            });
          ac(a)(
            Ua(B, function () {
              b.observe(a.document.body, { subtree: !0, childList: !0 });
            })
          );
        }
      }
      function wq(a, c) {
        return function (b, d) {
          var e,
            f = { uc: ea(a)(Z), key: a.Math.random(), dir: 0 };
          b.length &&
            ((f.uc = Fa(b[0])), (f.key = parseFloat(b[1])), (f.dir = Fa(b[2])));
          x(d, c);
          var g =
            ((e = { data: d }),
            (e.__yminfo = I(":", ["__yminfo", f.uc, f.key, f.dir])),
            e);
          return { Z: f, zg: jb(a, g) || "" };
        };
      }
      function ac(a, c) {
        function b(e) {
          n(c, d) ? e() : Y(a, v(e, b), 100);
        }
        void 0 === c && (c = a);
        var d = (c.nodeType ? "contentWindow." : "") + "document.body";
        return ya(function (e, f) {
          b(f);
        });
      }
      function Hc(a, c) {
        var b = c.ee,
          d = b || "uid";
        b = b ? a.location.hostname : void 0;
        var e = $b(a),
          f = Qa(a),
          g = ea(a),
          h = g(ze),
          k = ij(a, c),
          l = k[0];
        k = k[1];
        var m = e.o("d");
        jj(a, c);
        var p = !1;
        !k && l && ((k = l), (p = !0));
        if (!k) (k = I("", [g(ze), Ra(a)])), (p = !0);
        else if (!m || 15768e3 < h - Fa(m)) p = !0;
        p && !c.sb && (e.C(d, k, 525600, b), e.C("d", "" + h, 525600, b));
        f.C(d, k);
        return k;
      }
      function xq(a, c) {
        return !c.sb && jj(a, c);
      }
      function ij(a, c) {
        var b = Qa(a),
          d = $b(a),
          e = c.ee || "uid";
        return [b.o(e), d.o(e)];
      }
      function nf(a, c, b) {
        void 0 === c && (c = "");
        void 0 === b && (b = "_ym");
        var d = "" + b + c + "_";
        return {
          Xd: yq(a),
          o: function (e, f) {
            var g = kj(a, "" + d + e);
            return Pa(g) && !W(f) ? f : g;
          },
          C: function (e, f) {
            lj(a, "" + d + e, f);
            return this;
          },
          vc: function (e) {
            mj(a, "" + d + e);
            return this;
          },
        };
      }
      function lj(a, c, b) {
        var d = gg(a);
        a = jb(a, b);
        if (!Pa(a))
          try {
            d.setItem(c, a);
          } catch (e) {}
      }
      function kj(a, c) {
        var b = gg(a);
        try {
          return Db(a, b.getItem(c));
        } catch (d) {}
        return null;
      }
      function mj(a, c) {
        var b = gg(a);
        try {
          b.removeItem(c);
        } catch (d) {}
      }
      function gg(a) {
        try {
          return a.localStorage;
        } catch (c) {}
        return null;
      }
      function jb(a, c, b) {
        try {
          return a.JSON.stringify(c, null, b);
        } catch (d) {
          return null;
        }
      }
      function Yh(a, c, b) {
        hg(a, "metrika_enabled", "1", 0, c, b, !0);
        var d = nj(a);
        (d = d && d.metrika_enabled) && oj(a, "metrika_enabled", c, b, !0);
        return !!d;
      }
      function hg(a, c, b, d, e, f, g) {
        void 0 === g && (g = !1);
        if (Zh(a, ie, c)) {
          var h = c + "=" + encodeURIComponent(b) + ";";
          h += "" + zq(a);
          if (d) {
            var k = new Date();
            k.setTime(k.getTime() + 6e4 * d);
            h += "expires=" + k.toUTCString() + ";";
          }
          e && ((d = e.replace(Aq, "")), (h += "domain=" + d + ";"));
          try {
            (a.document.cookie = h + ("path=" + (f || "/"))),
              g || (pj(a)[c] = b);
          } catch (l) {}
        }
      }
      function ie(a, c) {
        var b = pj(a);
        return b ? b[c] || null : null;
      }
      function nj(a) {
        try {
          var c = a.document.cookie;
          if (!ma(c)) {
            var b = {};
            z(function (d) {
              d = d.split("=");
              var e = d[1];
              b[rb(d[0])] = rb(qj(e));
            }, (c || "").split(";"));
            return b;
          }
        } catch (d) {}
        return null;
      }
      function Zh(a, c, b) {
        return !ig.length || H(b, jg)
          ? !0
          : N(
              function (d, e) {
                return d && e(a, c, b);
              },
              !0,
              ig
            );
      }
      function rb(a, c) {
        if (a) {
          var b = rj ? rj.call(a) : ("" + a).replace(Vi, "");
          return c && b.length > c ? b.substring(0, c) : b;
        }
        return "";
      }
      function T(a) {
        return N(
          function (c, b) {
            var d = n(a, "location." + b);
            c[b] = d ? "" + d : "";
            return c;
          },
          {},
          Bq
        );
      }
      function xh(a) {
        var c = a.match(sj);
        if (c) {
          a = c[1];
          if ((c = c[2])) return H(c, kg) ? c : !1;
          if (a) return kg[0];
        }
        return !1;
      }
      function Yb(a) {
        var c = L(a),
          b = c.o("hitId");
        b || ((b = Ra(a)), c.C("hitId", b));
        return b;
      }
      function Ud(a, c, b) {
        void 0 === b && (b = null);
        a.fb || (a.fb = tj());
        c && a.fb.ac(c, b);
        return a.fb;
      }
      function lg(a) {
        return {
          ca: function (c, b) {
            var d = a.document,
              e = c.J;
            if (e && mg(a)) {
              var f = ia(a),
                g = function (h) {
                  mg(a) || (f.dc(d, uj, g), b());
                  return h;
                };
              f.D(d, uj, g);
              e.C("pr", "1");
            } else b();
          },
        };
      }
      function Wa(a, c, b) {
        return function (d, e) {
          var f = Ma(Of(a, "w", e), b);
          return me(a, c, f)(d);
        };
      }
      function me(a, c, b) {
        var d = Cb(a, c);
        return function (e) {
          return vj(b, e, !0)
            .then(function () {
              var f = e.Ra || {},
                g = f.Ci,
                h = void 0 === g ? "" : g;
              g = f.eb;
              var k = void 0 === g ? "" : g;
              f = f.Gk;
              f = void 0 === f ? [Cq(a, k)] : f;
              f = A(function (l) {
                return pa.Ta + "//" + ("" + h + l || tc) + "/" + k;
              }, f);
              return d(e, f);
            })
            .then(function (f) {
              var g = f.cd;
              f = f.Jg;
              e.uj = g;
              e.Sk = f;
              return vj(b, e).then(v(g, P));
            });
        };
      }
      function Cq(a, c) {
        return (
          N(
            function (b, d) {
              return b || d(a, c);
            },
            void 0,
            wj
          ) || tc
        );
      }
      function vj(a, c, b) {
        void 0 === b && (b = !1);
        return new K(function (d, e) {
          function f(k, l) {
            l();
            d();
          }
          var g = a.slice();
          g.push({ ca: f, Aa: f });
          var h = ic(g, function (k, l) {
            var m = b ? k.ca : k.Aa;
            if (m)
              try {
                m(c, l);
              } catch (p) {
                h(Dq), e(p);
              }
            else l();
          });
          h(xj);
        });
      }
      function Ib(a, c, b) {
        var d = b || "as";
        if (a.postMessage && !a.attachEvent) {
          b = ia(a);
          var e = "__ym__promise_" + Ra(a) + "_" + Ra(a),
            f = B;
          d = E(a, d, function (g) {
            try {
              var h = g.data;
            } catch (k) {
              return;
            }
            h === e && (f(), g.stopPropagation && g.stopPropagation(), c());
          });
          f = b.D(a, ["message"], d);
          a.postMessage(e, "*");
        } else Y(a, c, 0, d);
      }
      function fh(a, c, b, d, e) {
        void 0 === d && (d = 1);
        void 0 === e && (e = "itc");
        c = ic(c, b);
        jc(a, c, d)(Ua(E(a, e), B));
      }
      function jc(a, c, b, d) {
        void 0 === b && (b = 1);
        void 0 === d && (d = yj);
        ng = Infinity === b;
        return ya(function (e, f) {
          function g() {
            try {
              var k = c(d(a, b));
              h = h.concat(k);
            } catch (l) {
              return e(l);
            }
            c(Eq);
            if (c(Dd)) return f(h), zj(a);
            ng ? (c(d(a, 1e4)), f(h), zj(a)) : Y(a, g, 100);
          }
          var h = [];
          Fq(g);
        });
      }
      function zj(a) {
        if (og.length) {
          var c = og.shift();
          ng ? c() : Y(a, c, 100);
        } else pg = !1;
      }
      function Fq(a) {
        pg ? og.push(a) : ((pg = !0), a());
      }
      function wf(a) {
        return ya(function (c, b) {
          b(a);
        });
      }
      function bp(a) {
        return ya(function (c, b) {
          a.then(b, c);
        });
      }
      function Gq(a) {
        var c = [],
          b = 0;
        return ya(function (d, e) {
          z(function (f, g) {
            f(
              Ua(d, function (h) {
                try {
                  (c[g] = h), (b += 1), b === a.length && e(c);
                } catch (k) {
                  d(k);
                }
              })
            );
          }, a);
        });
      }
      function ap(a) {
        var c = [],
          b = !1;
        return ya(function (d, e) {
          function f(g) {
            c.push(g) === a.length && d(c);
          }
          z(function (g) {
            g(
              Ua(f, function (h) {
                if (!b)
                  try {
                    e(h), (b = !0);
                  } catch (k) {
                    f(k);
                  }
              })
            );
          }, a);
        });
      }
      function Ua(a, c) {
        return function (b) {
          return b(a, c);
        };
      }
      function ic(a, c) {
        void 0 === c && (c = P);
        return ya({ Wa: a, $d: c, Me: !1, va: 0 });
      }
      function xj(a) {
        function c() {
          function d() {
            b = !0;
            a.va += 1;
          }
          b = !1;
          a.$d(a.Wa[a.va], function () {
            d();
          });
          b || ((a.va += 1), (d = D(xj, null, a)));
        }
        for (var b = !0; !Dd(a) && b; ) c();
      }
      function yj(a, c) {
        return function (b) {
          var d = ea(a),
            e = d(Z);
          return Aj(function (f, g) {
            d(Z) - e >= c && g(Bj);
          })(b);
        };
      }
      function Ae(a, c) {
        return function (b) {
          var d = ea(a),
            e = d(Z);
          return Be(function (f) {
            d(Z) - e >= c && Bj(f);
          })(b);
        };
      }
      function Be(a) {
        return function (c) {
          for (var b; c.Wa.length && !Dd(c); )
            (b = c.Wa.pop()), (b = c.$d(b, c.Wa)), a(c);
          return b;
        };
      }
      function Hq(a) {
        Dd(a) && eb(Fc("i"));
        var c = a.$d(a.Wa[a.va]);
        a.va += 1;
        return c;
      }
      function Eq(a) {
        a.Me = !1;
      }
      function Bj(a) {
        a.Me = !0;
      }
      function Dq(a) {
        a.va = a.Wa.length;
      }
      function Dd(a) {
        return a.Me || a.Wa.length <= a.va;
      }
      function Cb(a, c) {
        return function (b, d) {
          return Cj(a, c, d, b);
        };
      }
      function Cj(a, c, b, d, e, f) {
        var g;
        void 0 === e && (e = 0);
        void 0 === f && (f = 0);
        var h = x({ Ba: [] }, d.ba),
          k = c[f],
          l = k[0];
        k = k[1];
        var m = x({}, d.G),
          p = ea(a);
        d.J && (m["browser-info"] = Aa(d.J.l()).C("st", p(ze)).Ha());
        !m.t && (p = d.fb) && (p.C("ti", l), (m.t = p.Ha()));
        p = b[e];
        (h.Wb && h.Wb["Content-Type"]) ||
          !h.fa ||
          ((h.Wb = x(
            {},
            h.Wb,
            ((g = {}),
            (g["Content-Type"] = "application/x-www-form-urlencoded"),
            g)
          )),
          (h.fa = "site-info=" + de(h.fa)));
        h.Lg = h.fa ? "POST" : "GET";
        h.Xb = m;
        h.Ba.push(l);
        x(d.ba, h);
        g = "" + p + (d.Na && d.Na.Yi ? "/1" : "");
        var r = 0;
        r = Iq(a, g, h);
        return k(g, h)
          .then(function (t) {
            ib(a, { name: "requestSuccess", data: { body: t, requestId: r } });
            return { cd: t, Jg: e };
          })
          ["catch"](function (t) {
            ib(a, { name: "requestFail", data: { error: t, requestId: r } });
            var q = f + 1 >= c.length,
              y = e + 1 >= b.length;
            q && y && eb(t);
            return Cj(a, c, b, d, !y && q ? e + 1 : e, q ? 0 : f + 1);
          });
      }
      function Iq(a, c, b) {
        var d = Ra(a);
        ib(a, { name: "request", data: { url: c, requestId: d, Uk: b } });
        return d;
      }
      function Zc(a) {
        return a
          ? u(
              Ba,
              sd(function (c, b) {
                var d = b[0],
                  e = b[1];
                W(e) || ma(e) || c.push(d + "=" + de(e));
                return c;
              }, []),
              dd("&")
            )(a)
          : "";
      }
      function Jq(a) {
        return a
          ? u(
              fb(function (c) {
                c = c.split("=");
                var b = c[1];
                return [c[0], ma(b) ? void 0 : qj(b)];
              }),
              sd(function (c, b) {
                c[b[0]] = b[1];
                return c;
              }, {})
            )(a.split("&"))
          : {};
      }
      function qj(a) {
        var c = "";
        try {
          c = decodeURIComponent(a);
        } catch (b) {}
        return c;
      }
      function de(a) {
        try {
          return encodeURIComponent(a);
        } catch (c) {}
        a = I(
          "",
          X(function (c) {
            return 55296 >= c.charCodeAt(0);
          }, a.split(""))
        );
        return encodeURIComponent(a);
      }
      function sb(a) {
        a = ea(a);
        return Math.round(a(qg) / 50);
      }
      function qg(a) {
        var c = a.xa,
          b = c[1];
        a = c[0] && b ? b() : Z(a) - a.Di;
        return Math.round(a);
      }
      function ze(a) {
        return Math.round(Z(a) / 1e3);
      }
      function kb(a) {
        return Math.floor(Z(a) / 1e3 / 60);
      }
      function Z(a) {
        var c = a.Ue;
        return 0 !== c ? c : rg(a.l, a.xa);
      }
      function Uf(a) {
        var c = ia(a),
          b = Dj(a),
          d = { l: a, Ue: 0, xa: b, Di: rg(a, b) },
          e = b[1];
        (b[0] && e) ||
          c.D(a, ["beforeunload", "unload"], function () {
            0 === d.Ue && (d.Ue = rg(a, d.xa));
          });
        return ya(d);
      }
      function Kq(a) {
        return (10 > a ? "0" : "") + a;
      }
      function wi(a, c, b) {
        function d() {
          f = 0;
          g && ((g = !1), (f = Y(a, d, b)), e.O(h));
        }
        var e = hd(a),
          f,
          g = !1,
          h;
        c.D(function (k) {
          g = !0;
          h = k;
          f || d();
          return B;
        });
        return e;
      }
      function Lq(a, c) {
        return a.clearInterval(c);
      }
      function Mq(a, c, b, d) {
        return a.setInterval(E(a, "i.err." + (d || "def"), c), b);
      }
      function Y(a, c, b, d) {
        return re(a, E(a, "d.err." + (d || "def"), c), b);
      }
      function gd(a) {
        var c = {};
        return {
          D: function (b, d) {
            z(function (e) {
              n(c, e) || (c[e] = hd(a));
              c[e].D(d);
            }, b);
            return this;
          },
          ia: function (b, d) {
            z(function (e) {
              n(c, e) && c[e].ia(d);
            }, b);
            return this;
          },
          O: function (b, d) {
            return n(c, b) ? E(a, "e." + d, c[b].O)(d) : [];
          },
        };
      }
      function hd(a) {
        var c = [],
          b = {};
        b.Kk = c;
        b.D = u(va("push", c), v(b, P));
        b.ia = u(Hb(Jb(a))(c), Hb(va("splice", c))(1), v(b, P));
        b.O = u(P, Hb(ja), Nq(c));
        return b;
      }
      function F(a, c, b) {
        return function () {
          return E(arguments[0], a, c, b).apply(this, arguments);
        };
      }
      function E(a, c, b, d, e) {
        var f = eb,
          g = b || f;
        return function () {
          var h = d;
          try {
            h = g.apply(e || null, arguments);
          } catch (k) {
            ne(a, c, k);
          }
          return h;
        };
      }
      function rg(a, c) {
        var b = c || Dj(a),
          d = b[0];
        b = b[1];
        return !isNaN(d) && U(b)
          ? Math.round(b() + d)
          : a.Date.now
          ? a.Date.now()
          : new a.Date().getTime();
      }
      function Dj(a) {
        a = Xi(a);
        var c = n(a, "timing.navigationStart"),
          b = n(a, "now");
        b && (b = D(b, a));
        return [c, b];
      }
      function Xi(a) {
        return n(a, "performance") || n(a, "webkitPerformance");
      }
      function ne(a, c, b) {
        var d = "u.a.e",
          e = "";
        b &&
          ("object" === typeof b
            ? ((d = b.message),
              (e =
                ("string" === typeof b.stack &&
                  b.stack.replace(/\n/g, "\\n")) ||
                "n.s.e.s"))
            : (d = "" + b));
        Oq(d) ||
          Na(u(va("indexOf", d), la(-1), Rb), Pq) ||
          (Qq(d) && 0.1 <= a.Math.random()) ||
          z(u(P, yd(["jserrs", d, c, e]), ja), Ej);
      }
      function We() {
        var a = xa(arguments);
        return eb(Oa(a));
      }
      function Oa(a) {
        var c = "";
        fa(a) ? (c = I(".", a)) : Ia(a) && (c = a);
        return Fc("err.kn(" + pa.gb + ")" + c);
      }
      function Rq(a) {
        this.message = a;
      }
      function ib(a, c) {
        var b = c.ea;
        if (b) {
          var d = b.split(":");
          b = d[1];
          d = Fj(Dh(d[0]));
          if ("1" === b || d) return;
        }
        b = Sq(a);
        1e3 === b.length && b.shift();
        b.push(c);
      }
      function Gj(a, c, b, d, e) {
        var f = a.addEventListener && a.removeEventListener,
          g = !f && a.attachEvent && a.detachEvent;
        if (f || g)
          if (
            ((e = e
              ? f
                ? "removeEventListener"
                : "detachEvent"
              : f
              ? "addEventListener"
              : "attachEvent"),
            f)
          )
            a[e](c, b, d);
          else a[e]("on" + c, b);
      }
      function Of(a, c, b) {
        return A(u(uc, yd([a, b]), ja), Hj[c] || []);
      }
      function Ij(a, c, b, d) {
        a[c] || (a[c] = []);
        b && !ma(d) && Jj(a[c], b, d);
      }
      function Jj(a, c, b) {
        for (var d = [c, b], e = -1e4, f = 0; f < a.length; f += 1) {
          var g = a[f],
            h = g[0];
          g = g[1];
          if (b === g && h === c) return;
          if (b < g && b >= e) {
            a.splice(f, 0, d);
            return;
          }
          e = g;
        }
        a.push(d);
      }
      function Oc(a) {
        z(function (c) {
          var b = c[1];
          Xe[c[0]] = { ja: b.ja, Xa: b.Xa };
        }, Ba(a));
      }
      function rl(a, c, b, d, e) {
        var f = "object" === typeof a ? a : { id: a, da: d, oc: e, aa: b };
        a = N(
          function (g, h) {
            var k = h[1],
              l = k.Xa;
            k = f[k.ja];
            g[h[0]] = l ? l(k) : k;
            return g;
          },
          {},
          Ba(c)
        );
        Kj(a, a.aa || {});
        return a;
      }
      function Tq(a, c) {
        return N(
          function (b, d) {
            b[c[d[0]].ja] = d[1];
            return b;
          },
          {},
          Ba(a)
        );
      }
      function Lj(a) {
        a = O(a);
        return dc[a] && dc[a].Oj;
      }
      function Kj(a, c) {
        var b = O(a),
          d = n(c, "__ym.turbo_page"),
          e = n(c, "__ym.turbo_page_id");
        dc[b] || (dc[b] = {});
        if (d || e) (dc[b].Oj = d), (dc[b].Pj = e);
      }
      function Mj(a) {
        return (
          Ce(a) || qd(a) || /mobile/i.test(tb(a)) || !W(n(a, "orientation"))
        );
      }
      function kf(a, c) {
        if (Ed(a) && c) {
          var b = tb(a).match(Uq);
          if (b && b.length) return +b[1] >= c;
        }
        return !1;
      }
      function lf(a, c) {
        var b = tb(a);
        return b && (b = b.match(Vq)) && 1 < b.length ? Fa(b[1]) >= c : !1;
      }
      function mg(a) {
        return H(
          "prerender",
          A(v(n(a, "document"), n), [
            "webkitVisibilityState",
            "visibilityState",
          ])
        );
      }
      function Ra(a, c, b) {
        var d = W(b);
        W(c) && d
          ? ((d = 1), (c = 1073741824))
          : d
          ? (d = 1)
          : ((d = c), (c = b));
        return a.Math.floor(a.Math.random() * (c - d)) + d;
      }
      function Dh(a) {
        try {
          return parseInt(a, 10);
        } catch (c) {
          return null;
        }
      }
      function be(a, c) {
        return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === sg(c);
      }
      function Wq(a) {
        for (var c = [], b = a.length - 1; 0 <= b; --b)
          c[a.length - 1 - b] = a[b];
        return c;
      }
      function Ma(a, c) {
        z(u(P, va("push", a)), c);
        return a;
      }
      function tg(a, c) {
        return Array.prototype.sort.call(c, a);
      }
      function oa(a) {
        return a
          ? fa(a)
            ? a
            : De
            ? De(a)
            : "number" === typeof a.length && 0 <= a.length
            ? Nj(a)
            : []
          : [];
      }
      function ug(a, c, b) {
        return b ? a : c;
      }
      function Xq(a, c) {
        if (!Ed(a)) return !0;
        try {
          c.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
            throw 1;
          });
        } catch (b) {
          return !1;
        }
        return !0;
      }
      function Yq(a, c) {
        for (var b = "", d = 0; d < c; d += 1) b += a;
        return b;
      }
      function Zq(a, c) {
        for (var b = 0; b < c.length; b += 1)
          if (a.call(c, c[b], b)) return c[b];
      }
      function Oj(a) {
        return W(a)
          ? []
          : Fd(
              function (c, b) {
                c.push([b, a[b]]);
                return c;
              },
              [],
              Pj(a)
            );
      }
      function $q(a, c) {
        return Fd(
          function (b, d, e) {
            d = a(d, e);
            return b.concat(fa(d) ? d : [d]);
          },
          [],
          c
        );
      }
      function Qj(a, c) {
        return Fd(
          function (b, d, e) {
            b.push(a(d, e));
            return b;
          },
          [],
          c
        );
      }
      function ar() {
        var a = xa(arguments),
          c = a[0];
        for (a = a.slice(1); a.length; ) {
          var b = a.shift(),
            d;
          for (d in b) td(b, d) && (c[d] = b[d]);
          td(b, "toString") && (c.toString = b.toString);
        }
        return c;
      }
      function Pj(a) {
        var c = [],
          b;
        for (b in a) td(a, b) && c.push(b);
        return c;
      }
      function br(a, c) {
        return 1 <= Rj(la(a), c).length;
      }
      function Rj(a, c) {
        return Fd(
          function (b, d, e) {
            a(d, e) && b.push(d);
            return b;
          },
          [],
          c
        );
      }
      function fa(a) {
        if (Gd) return Gd(a);
        (Gd = Ja(Array.isArray, "isArray")) || (Gd = cr);
        return Gd(a);
      }
      function Sf(a, c, b) {
        try {
          if (U(c)) {
            var d = xa(arguments).slice(3);
            ma(b) ? c.apply(void 0, d) : D.apply(void 0, ua([c, b], d))();
          }
        } catch (e) {
          re(a, v(e, eb), 0);
        }
      }
      function eb(a) {
        throw a;
      }
      function re(a, c, b) {
        return cc("setTimeout", a)(c, b);
      }
      function ka(a, c) {
        return cc("clearTimeout", a)(c);
      }
      function rd() {
        return [];
      }
      function xc() {
        return {};
      }
      function cc(a, c) {
        var b = n(c, a),
          d = n(c, "constructor.prototype." + a) || b;
        try {
          if (d && d.apply)
            return function () {
              return d.apply(c, arguments);
            };
        } catch (e) {
          return b;
        }
        return d;
      }
      function vb(a, c) {
        return function () {
          var b = xa(arguments),
            d = b[0];
          b = b.slice(1);
          var e = L(d),
            f = e.o("m923", {}),
            g = n(f, a);
          g || ((g = w(c)), (f[a] = g), e.C("m923", f));
          return g.apply(void 0, ua([d], b));
        };
      }
      function Bc(a, c) {
        void 0 === c && (c = {});
        if (!a || 1 > a.length) return c;
        N(
          function (b, d, e) {
            if (e === a.length - 1) return b;
            e === a.length - 2 ? (b[d] = a[e + 1]) : b[d] || (b[d] = {});
            return b[d];
          },
          c,
          a
        );
        return c;
      }
      function n(a, c) {
        return a
          ? N(
              function (b, d) {
                if (ma(b)) return b;
                try {
                  return b[d];
                } catch (e) {}
                return null;
              },
              a,
              c.split(".")
            )
          : null;
      }
      function ec(a) {
        a = a.Ya = a.Ya || {};
        var c = (a._metrika = a._metrika || {});
        return {
          Pa: function (b, d) {
            vg.call(c, b) || (c[b] = d);
            return this;
          },
          C: function (b, d) {
            c[b] = d;
            return this;
          },
          o: function (b, d) {
            var e = c[b];
            return vg.call(c, b) || W(d) ? e : d;
          },
        };
      }
      function td(a, c) {
        return ma(a) ? !1 : vg.call(a, c);
      }
      function w(a, c) {
        var b = [],
          d = [];
        var e = c ? c : P;
        return function () {
          var f = xa(arguments),
            g = e.apply(void 0, f),
            h = Sj(g, d);
          if (-1 !== h) return b[h];
          f = a.apply(void 0, f);
          b.push(f);
          d.push(g);
          return f;
        };
      }
      function Jb(a) {
        if (wg) return wg;
        var c = !1;
        try {
          c = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (d) {}
        var b =
          a.Array &&
          a.Array.prototype &&
          Ja(a.Array.prototype.indexOf, "indexOf");
        return (wg = a =
          c && b
            ? function (d, e) {
                return b.call(e, d);
              }
            : dr);
      }
      function dr(a, c) {
        for (var b = 0; b < c.length; b += 1) if (c[b] === a) return b;
        return -1;
      }
      function ja(a, c) {
        return c ? a(c) : a();
      }
      function u() {
        var a = xa(arguments),
          c = a.shift();
        return function () {
          var b = c.apply(void 0, arguments);
          return N(Tj, b, a);
        };
      }
      function sd(a, c) {
        return G([a, c], N);
      }
      function Va(a) {
        return va("test", a);
      }
      function va(a, c) {
        return D(c[a], c);
      }
      function v(a, c) {
        return G([a], c);
      }
      function G(a, c) {
        return D.apply(void 0, ua([c, null], a));
      }
      function er() {
        var a = xa(arguments),
          c = a[0],
          b = a[1],
          d = a.slice(2);
        return function () {
          var e = ua(d, xa(arguments));
          if (Function.prototype.call)
            return Function.prototype.call.apply(c, ua([b], e));
          if (b) {
            for (var f = "_b"; b[f]; ) f += "_" + f.length;
            b[f] = c;
            e = b[f] && Uj(f, e, b);
            delete b[f];
            return e;
          }
          return Uj(c, e);
        };
      }
      function Uj(a, c, b) {
        void 0 === c && (c = []);
        b = b || {};
        var d = c.length,
          e = a;
        U(e) && ((e = "d"), (b[e] = a));
        var f;
        d
          ? 1 === d
            ? (f = b[e](c[0]))
            : 2 === d
            ? (f = b[e](c[0], c[1]))
            : 3 === d
            ? (f = b[e](c[0], c[1], c[2]))
            : 4 === d && (f = b[e](c[0], c[1], c[2], c[3]))
          : (f = b[e]());
        return f;
      }
      function qb(a) {
        return !Pa(a) && !W(a) && "[object Object]" === sg(a);
      }
      function ma(a) {
        return W(a) || Pa(a);
      }
      function U(a) {
        return "function" === typeof a;
      }
      function Hb(a) {
        return function (c) {
          return function (b) {
            return a(b, c);
          };
        };
      }
      function ha(a) {
        return function (c) {
          return function (b) {
            return a(c, b);
          };
        };
      }
      function Tj(a, c) {
        return c(a);
      }
      function fr(a, c) {
        for (var b = "", d = 0; d < c.length; d += 1)
          b += "" + (d ? a : "") + c[d];
        return b;
      }
      function Cp(a) {
        return a
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(ff, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}");
      }
      function nc(a, c) {
        return !(!a || -1 === gf(a, c));
      }
      function gf(a, c) {
        if (Vj) var b = Vj.call(a, c);
        else
          a: {
            b = 0;
            for (var d = a.length - c.length, e = 0; e < a.length; e += 1) {
              b = a[e] === c[b] ? b + 1 : 0;
              if (b === c.length) {
                b = e - c.length + 1;
                break a;
              }
              if (!b && e > d) break;
            }
            b = -1;
          }
        return b;
      }
      function Ia(a) {
        return "string" === typeof a;
      }
      function sg(a) {
        return Object.prototype.toString.call(a);
      }
      function xa(a) {
        if (De)
          try {
            return De(a);
          } catch (c) {}
        return Nj(a);
      }
      function Nj(a) {
        for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
        return b;
      }
      function xg(a, c) {
        xg =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (b, d) {
              b.__proto__ = d;
            }) ||
          function (b, d) {
            for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
          };
        return xg(a, c);
      }
      function Fd(a, c, b) {
        for (var d = 0, e = b.length; d < e; ) (c = a(c, b[d], d)), (d += 1);
        return c;
      }
      function Ja(a, c) {
        return Ca(c, a) && a;
      }
      function Ca(a, c) {
        var b = Ee(a, c);
        c && !b && yg.push([a, c]);
        return b;
      }
      function Ee(a, c) {
        if (!c || "function" !== typeof c) return !1;
        try {
          var b = "" + c;
        } catch (h) {
          return !1;
        }
        var d = b.length;
        if (d > 35 + a.length) return !1;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
          f =
            "[native code]"[f] === b[g] || (7 === f && "-" === b[g])
              ? f + 1
              : 0;
          if (12 === f) return !0;
          if (!f && g > e) break;
        }
        return !1;
      }
      function B() {}
      function Rb(a) {
        return !a;
      }
      function wb(a, c) {
        return c;
      }
      function P(a) {
        return a;
      }
      function Ha(a, c) {
        function b() {
          this.constructor = a;
        }
        xg(a, c);
        a.prototype =
          null === c
            ? Object.create(c)
            : ((b.prototype = c.prototype), new b());
      }
      function ua() {
        for (var a = 0, c = 0, b = arguments.length; c < b; c++)
          a += arguments[c].length;
        a = Array(a);
        var d = 0;
        for (c = 0; c < b; c++)
          for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++)
            a[d] = e[f];
        return a;
      }
      function gr() {}
      function hr(a, c) {
        return function () {
          a.apply(c, arguments);
        };
      }
      function Da(a) {
        if (!(this instanceof Da))
          throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.Ia = 0;
        this.Ze = !1;
        this.Sa = void 0;
        this.Fb = [];
        Wj(a, this);
      }
      function Xj(a, c) {
        for (; 3 === a.Ia; ) a = a.Sa;
        0 === a.Ia
          ? a.Fb.push(c)
          : ((a.Ze = !0),
            Da.$e(function () {
              var b = 1 === a.Ia ? c.dj : c.hj;
              if (null === b) (1 === a.Ia ? zg : Hd)(c.ab, a.Sa);
              else {
                try {
                  var d = b(a.Sa);
                } catch (e) {
                  Hd(c.ab, e);
                  return;
                }
                zg(c.ab, d);
              }
            }));
      }
      function zg(a, c) {
        try {
          if (c === a)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (c && ("object" === typeof c || "function" === typeof c)) {
            var b = c.then;
            if (c instanceof Da) {
              a.Ia = 3;
              a.Sa = c;
              Ag(a);
              return;
            }
            if ("function" === typeof b) {
              Wj(hr(b, c), a);
              return;
            }
          }
          a.Ia = 1;
          a.Sa = c;
          Ag(a);
        } catch (d) {
          Hd(a, d);
        }
      }
      function Hd(a, c) {
        a.Ia = 2;
        a.Sa = c;
        Ag(a);
      }
      function Ag(a) {
        2 === a.Ia &&
          0 === a.Fb.length &&
          Da.$e(function () {
            a.Ze || Da.ah(a.Sa);
          });
        for (var c = 0, b = a.Fb.length; c < b; c++) Xj(a, a.Fb[c]);
        a.Fb = null;
      }
      function ir(a, c, b) {
        this.dj = "function" === typeof a ? a : null;
        this.hj = "function" === typeof c ? c : null;
        this.ab = b;
      }
      function Wj(a, c) {
        var b = !1;
        try {
          a(
            function (d) {
              b || ((b = !0), zg(c, d));
            },
            function (d) {
              b || ((b = !0), Hd(c, d));
            }
          );
        } catch (d) {
          b || ((b = !0), Hd(c, d));
        }
      }
      function oj(a, c, b, d, e) {
        void 0 === e && (e = !1);
        return hg(a, c, "", -100, b, d, e);
      }
      function Cc(a, c, b) {
        void 0 === c && (c = "_ym_");
        void 0 === b && (b = "");
        var d = jr(a),
          e = 1 === (d || "").split(".").length ? d : "." + d,
          f = b ? "_" + b : "";
        return {
          vc: function (g, h, k) {
            oj(a, "" + c + g + f, h || e, k);
            return this;
          },
          o: function (g) {
            return ie(a, "" + c + g + f);
          },
          C: function (g, h, k, l, m) {
            hg(a, "" + c + g + f, h, k, l || e, m);
            return this;
          },
        };
      }
      function Db(a, c) {
        if (!c) return null;
        try {
          return a.JSON.parse(c);
        } catch (b) {
          return null;
        }
      }
      function mc(a) {
        a = "" + a;
        for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
          (c ^= a.charCodeAt(d)),
            (c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24));
        return c >>> 0;
      }
      function mb(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += a[3] * c[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += a[2] * c[3];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[2] += a[3] * c[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += a[1] * c[3];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += a[2] * c[2];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[1] += a[3] * c[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
        b[0] &= 65535;
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
      }
      function fc(a, c) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
        var b = [0, 0, 0, 0];
        b[3] += a[3] + c[3];
        b[2] += b[3] >>> 16;
        b[3] &= 65535;
        b[2] += a[2] + c[2];
        b[1] += b[2] >>> 16;
        b[2] &= 65535;
        b[1] += a[1] + c[1];
        b[0] += b[1] >>> 16;
        b[1] &= 65535;
        b[0] += a[0] + c[0];
        b[0] &= 65535;
        return [(b[0] << 16) | b[1], (b[2] << 16) | b[3]];
      }
      function Pc(a, c) {
        c %= 64;
        if (32 === c) return [a[1], a[0]];
        if (32 > c)
          return [
            (a[0] << c) | (a[1] >>> (32 - c)),
            (a[1] << c) | (a[0] >>> (32 - c)),
          ];
        c -= 32;
        return [
          (a[1] << c) | (a[0] >>> (32 - c)),
          (a[0] << c) | (a[1] >>> (32 - c)),
        ];
      }
      function hb(a, c) {
        c %= 64;
        return 0 === c
          ? a
          : 32 > c
          ? [(a[0] << c) | (a[1] >>> (32 - c)), a[1] << c]
          : [a[1] << (c - 32), 0];
      }
      function qa(a, c) {
        return [a[0] ^ c[0], a[1] ^ c[1]];
      }
      function Yj(a) {
        a = qa(a, [0, a[0] >>> 1]);
        a = mb(a, [4283543511, 3981806797]);
        a = qa(a, [0, a[0] >>> 1]);
        a = mb(a, [3301882366, 444984403]);
        return (a = qa(a, [0, a[0] >>> 1]));
      }
      function kr(a, c) {
        void 0 === c && (c = 210);
        var b = a || "",
          d = c || 0,
          e = b.length - (b.length % 16);
        d = { R: [0, d], T: [0, d] };
        for (var f = 0; f < e; f += 16) {
          var g = d,
            h = [
              (a.charCodeAt(f + 4) & 255) |
                ((a.charCodeAt(f + 5) & 255) << 8) |
                ((a.charCodeAt(f + 6) & 255) << 16) |
                ((a.charCodeAt(f + 7) & 255) << 24),
              (a.charCodeAt(f) & 255) |
                ((a.charCodeAt(f + 1) & 255) << 8) |
                ((a.charCodeAt(f + 2) & 255) << 16) |
                ((a.charCodeAt(f + 3) & 255) << 24),
            ],
            k = [
              (a.charCodeAt(f + 12) & 255) |
                ((a.charCodeAt(f + 13) & 255) << 8) |
                ((a.charCodeAt(f + 14) & 255) << 16) |
                ((a.charCodeAt(f + 15) & 255) << 24),
              (a.charCodeAt(f + 8) & 255) |
                ((a.charCodeAt(f + 9) & 255) << 8) |
                ((a.charCodeAt(f + 10) & 255) << 16) |
                ((a.charCodeAt(f + 11) & 255) << 24),
            ];
          h = mb(h, Fe);
          h = Pc(h, 31);
          h = mb(h, Ge);
          g.R = qa(g.R, h);
          g.R = Pc(g.R, 27);
          g.R = fc(g.R, g.T);
          g.R = fc(mb(g.R, [0, 5]), [0, 1390208809]);
          k = mb(k, Ge);
          k = Pc(k, 33);
          k = mb(k, Fe);
          g.T = qa(g.T, k);
          g.T = Pc(g.T, 31);
          g.T = fc(g.T, g.R);
          g.T = fc(mb(g.T, [0, 5]), [0, 944331445]);
        }
        e = b.length % 16;
        f = b.length - e;
        g = [0, 0];
        h = [0, 0];
        switch (e) {
          case 15:
            h = qa(h, hb([0, b.charCodeAt(f + 14)], 48));
          case 14:
            h = qa(h, hb([0, b.charCodeAt(f + 13)], 40));
          case 13:
            h = qa(h, hb([0, b.charCodeAt(f + 12)], 32));
          case 12:
            h = qa(h, hb([0, b.charCodeAt(f + 11)], 24));
          case 11:
            h = qa(h, hb([0, b.charCodeAt(f + 10)], 16));
          case 10:
            h = qa(h, hb([0, b.charCodeAt(f + 9)], 8));
          case 9:
            (h = qa(h, [0, b.charCodeAt(f + 8)])),
              (h = mb(h, Ge)),
              (h = Pc(h, 33)),
              (h = mb(h, Fe)),
              (d.T = qa(d.T, h));
          case 8:
            g = qa(g, hb([0, b.charCodeAt(f + 7)], 56));
          case 7:
            g = qa(g, hb([0, b.charCodeAt(f + 6)], 48));
          case 6:
            g = qa(g, hb([0, b.charCodeAt(f + 5)], 40));
          case 5:
            g = qa(g, hb([0, b.charCodeAt(f + 4)], 32));
          case 4:
            g = qa(g, hb([0, b.charCodeAt(f + 3)], 24));
          case 3:
            g = qa(g, hb([0, b.charCodeAt(f + 2)], 16));
          case 2:
            g = qa(g, hb([0, b.charCodeAt(f + 1)], 8));
          case 1:
            (g = qa(g, [0, b.charCodeAt(f)])),
              (g = mb(g, Fe)),
              (g = Pc(g, 31)),
              (g = mb(g, Ge)),
              (d.R = qa(d.R, g));
        }
        d.R = qa(d.R, [0, b.length]);
        d.T = qa(d.T, [0, b.length]);
        d.R = fc(d.R, d.T);
        d.T = fc(d.T, d.R);
        d.R = Yj(d.R);
        d.T = Yj(d.T);
        d.R = fc(d.R, d.T);
        d.T = fc(d.T, d.R);
        return (
          ("00000000" + (d.R[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d.R[1] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d.T[0] >>> 0).toString(16)).slice(-8) +
          ("00000000" + (d.T[1] >>> 0).toString(16)).slice(-8)
        );
      }
      function Zj(a) {
        return (a = T(a).hash.split("#")[1]) ? a.split("?")[0] : "";
      }
      function lr(a, c) {
        var b = Zj(a);
        ak = Mq(
          a,
          function () {
            var d = Zj(a);
            d !== b && (c(), (b = d));
          },
          200,
          "t.h"
        );
        return D(Lq, null, a, ak);
      }
      function mr(a, c, b) {
        var d,
          e,
          f = c.da,
          g = c.We,
          h = c.Bc,
          k = L(a),
          l = Aa(((d = {}), (d.wh = "1"), (d.pv = "1"), d));
        $e(f) && a.$g && a.$g.gk && l.C("ad", "1");
        g && l.C("ut", "1");
        f = k.o("lastReferrer");
        d = T(a).href;
        h = {
          G: ((e = {}), (e["page-url"] = h || d), (e["page-ref"] = f), e),
          J: l,
        };
        b(h, c)["catch"](E(a, "g.s"));
        k.C("lastReferrer", d);
      }
      function Kc(a, c) {
        var b = nr(a);
        return b
          ? ((b.href = c),
            {
              protocol: b.protocol,
              host: b.host,
              port: b.port,
              hostname: b.hostname,
              hash: b.hash,
              search: b.search,
              query: b.search.replace(/^\?/, ""),
              pathname: b.pathname || "/",
              path: (b.pathname || "/") + b.search,
              href: b.href,
            })
          : {};
      }
      function or(a, c, b) {
        function d() {
          Bg[q] = !0;
          f(!1);
          c();
        }
        function e() {
          ka(a, He[q]);
          if (Bg[q]) f(!1);
          else {
            var C = Math.max(0, b - (m ? p : p + h(Z) - r));
            C ? (He[q] = Y(a, d, C, "u.t.d.c")) : d();
          }
        }
        function f(C) {
          z(function (M) {
            var Q = M[0],
              ta = M[1];
            M = M[2];
            C ? t.D(Q, ta, M) : t.dc(Q, ta, M);
          }, y);
        }
        var g = v(!1, f);
        if (ye(a)) return { id: Y(a, c, b, "u.t.d"), lf: g };
        var h = ea(a),
          k = !1,
          l = !1,
          m = !0,
          p = 0,
          r = h(Z),
          t = ia(a),
          q = bk;
        bk += 1;
        He[q] = 0;
        var y = [
          [
            a,
            ["blur"],
            function () {
              m = k = l = !0;
              p += h(Z) - r;
              r = h(Z);
              e();
            },
          ],
          [
            a,
            ["focus"],
            function () {
              k || l || (p = 0);
              r = h(Z);
              k = l = !0;
              m = !1;
              e();
            },
          ],
          [
            a.document,
            ["click", "mousemove", "keydown", "scroll"],
            function () {
              l || ((k = !0), (m = !1), (l = !0), e());
            },
          ],
        ];
        f(!0);
        e();
        return { id: q, lf: g };
      }
      function Pd(a, c, b, d) {
        return function () {
          if (Ea(a, c)) {
            var e = xa(arguments);
            return d.apply(void 0, e);
          }
        };
      }
      function sl(a, c, b, d) {
        var e = ck[b];
        return e
          ? function () {
              var f = xa(arguments);
              try {
                var g = d.apply(void 0, f);
                var h = L(a);
                h.Pa("mt", {});
                var k = h.o("mt"),
                  l = k[e];
                k[e] = l ? l + 1 : 1;
              } catch (m) {
                eb(m);
              }
              return g;
            }
          : d;
      }
      function Id(a, c, b) {
        var d = c.getAttribute("itemtype");
        b = ub('[itemprop~="' + b + '"]', c);
        return d
          ? X(function (e) {
              return e.parentNode && Vb("[itemtype]", a, e.parentNode) === c;
            }, b)
          : b;
      }
      function ab(a, c, b) {
        return (a = Id(a, c, b)) && a.length ? a[0] : null;
      }
      function Xa(a) {
        if (!a) return "";
        a = fa(a) ? a : [a];
        return a.length ? a[0].getAttribute("content") || Qb(a[0]) : "";
      }
      function dk(a) {
        return a
          ? a.attributes && a.getAttribute("datetime")
            ? a.getAttribute("datetime")
            : Xa(a)
          : "";
      }
      function nd(a, c, b) {
        a =
          c &&
          (nc(c.className, "ym-disable-keys") ||
            nc(c.className, "-metrika-nokeys"));
        return b && c
          ? a || !!mq(["ym-disable-keys", "-metrika-nokeys"], c).length
          : a;
      }
      function zf(a, c) {
        return we(c)
          ? "password" === c.type ||
              (c.name && H(c.name.toLowerCase(), ek)) ||
              (c.id && H(c.id.toLowerCase(), ek))
          : !1;
      }
      function fk(a, c) {
        var b = Math.max(0, Math.min(c, 65535));
        Ma(a, [b >> 8, b & 255]);
      }
      function Lb(a, c) {
        Ma(a, [c & 255]);
      }
      function gb(a, c, b) {
        return -1 !== Jb(a)(b, pr) ? (Lb(c, b), !1) : !0;
      }
      function S(a, c) {
        for (var b = Math.max(0, c | 0); 127 < b; )
          Ma(a, [(b & 127) | 128]), (b >>= 7);
        Ma(a, [b]);
      }
      function Cg(a, c) {
        S(a, c.length);
        for (var b = 0; b < c.length; b += 1) S(a, c.charCodeAt(b));
      }
      function Dg(a, c) {
        var b = c;
        255 < b.length && (b = b.substr(0, 255));
        a.push(b.length);
        for (var d = 0; d < b.length; d += 1) fk(a, b.charCodeAt(d));
      }
      function qr(a, c) {
        var b = [];
        if (gb(a, b, 27)) return [];
        S(b, c);
        return b;
      }
      function rr(a, c) {
        var b = Ga(c);
        if (!b) return (c[Sa] = -1), null;
        var d = +c[Sa];
        if (!isFinite(d) || 0 >= d) return null;
        if (c.attributes)
          for (var e = c; e; ) {
            if (e.attributes.pk) return null;
            e = e.parentElement;
          }
        e = 64;
        var f = ue(a, c),
          g = f && f[Sa] ? f[Sa] : 0;
        0 > g && (g = 0);
        b = (b || "").toUpperCase();
        var h = sr()[b];
        h || (e |= 2);
        var k = ej(a, c);
        k || (e |= 4);
        var l = Df(a, c);
        (f = f ? Df(a, f) : null) &&
          l[0] === f[0] &&
          l[1] === f[1] &&
          l[2] === f[2] &&
          l[3] === f[3] &&
          (e |= 8);
        qc[d].$f = l[0] + "x" + l[1];
        qc[d].size = l[2] + "x" + l[3];
        c.id && "string" === typeof c.id && (e |= 32);
        f = [];
        if (gb(a, f, 1)) return null;
        S(f, d);
        Lb(f, e);
        S(f, g);
        h ? Lb(f, h) : Dg(f, b);
        k && S(f, k);
        e & 8 || (S(f, l[0]), S(f, l[1]), S(f, l[2]), S(f, l[3]));
        e & 32 && Dg(f, c.id);
        Lb(f, 0);
        return f;
      }
      function tr(a, c) {
        var b = c[Sa];
        if (!b || 0 > b || !Bf(c) || !c.form || Wh(a, c.form)) return [];
        var d = gj(a, c.form);
        if (0 > d) return [];
        if (we(c)) {
          var e = {
            text: 0,
            color: 0,
            uc: 0,
            yk: 0,
            "datetime-local": 0,
            email: 0,
            Yf: 0,
            Rk: 0,
            search: 0,
            Xk: 0,
            time: 0,
            url: 0,
            month: 0,
            $k: 0,
            password: 2,
            Qk: 3,
            vk: 4,
            file: 6,
            image: 7,
          };
          e = e[c.type];
        } else {
          e = { lk: 1, mk: 5 };
          var f = Ga(c);
          e = W(f) ? "" : e[f];
        }
        if ("number" !== typeof e) return [];
        f = -1;
        for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
          if (g[k].name === c.name) {
            if (g[k] === c) {
              f = l;
              break;
            }
            l += 1;
          }
        if (0 > f) return [];
        g = [];
        if (gb(a, g, 7)) return [];
        S(g, b);
        S(g, d);
        S(g, e);
        Cg(g, c.name || "");
        S(g, f);
        return g;
      }
      function ur(a, c, b) {
        var d = gj(a, b);
        if (0 > d) return [];
        var e = b.elements,
          f = e.length;
        b = [];
        for (var g = 0; g < f; g += 1)
          if (!fj(e[g])) {
            var h = e[g][Sa];
            h && 0 < h && b.push(h);
          }
        e = [];
        if (gb(a, e, 11)) return [];
        S(e, c);
        S(e, d);
        S(e, b.length);
        for (a = 0; a < b.length; a += 1) S(e, b[a]);
        return e;
      }
      function pc(a, c, b) {
        void 0 === b && (b = []);
        for (var d = []; c && !In(a, c, b); c = ue(a, c)) d.push(c);
        z(function (e) {
          qc.yd += 1;
          var f = qc.yd;
          e[Sa] = f;
          qc[f] = {};
          f = rr(a, e);
          e = tr(a, e);
          f && e && (Ma(b, f), Ma(b, e));
        }, vr(d));
        return b;
      }
      function wr(a) {
        var c = a.qa;
        if (!md || (c && !c.fromElement)) return Uh(a);
      }
      function xr(a) {
        var c = a.qa;
        if (c && !c.toElement) return Cf(a);
      }
      function gk(a) {
        var c = wc(a.qa);
        if (c && he(c)) {
          var b = Th(a, c);
          var d = sb(a.l),
            e = [];
          gb(a.l, e, 17) ? (a = []) : (S(e, d), S(e, c[Sa]), (a = e));
          return ua(b, a);
        }
      }
      function hk(a) {
        var c = a.l,
          b = a.qa.target;
        if (b && he(b)) {
          c = pc(c, b);
          var d = sb(a.l),
            e = [];
          gb(a.l, e, 18) ? (a = []) : (S(e, d), S(e, b[Sa]), (a = e));
          return ua(c, a);
        }
      }
      function ik(a) {
        var c = a.l,
          b = wc(a.qa);
        if (!b || zf(c, b) || nd(c, b)) return [];
        if (Bf(b)) {
          var d = L(c).o("isEU"),
            e = ld(c, b, d),
            f = e.ub;
          d = e.Yd;
          e = e.Id;
          if (xe(b)) var g = b.checked;
          else (g = b.value), (g = f ? I("", jk(g.split(""))) : g);
          c = pc(c, b);
          f = sb(a.l);
          d = d && !e;
          e = [];
          gb(a.l, e, 39)
            ? (a = [])
            : (S(e, f),
              S(e, b[Sa]),
              Dg(e, String(g)),
              Lb(e, d ? 1 : 0),
              (a = e));
          return ua(c, a);
        }
      }
      function Ie(a) {
        var c = a.l,
          b = a.qa,
          d = wc(b);
        if (!d || "SCROLLBAR" === d.nodeName) return [];
        var e = [],
          f = v(e, Ma);
        d && he(d) ? f(Th(a, d)) : f(pc(c, d));
        var g = Ji(c, b);
        a = sb(a.l);
        f = b.type;
        var h = [g.x, g.y];
        g = b.which;
        b = b.button;
        var k;
        var l = ve(c, d);
        var m = l[0];
        for (l = l[1]; d && (!m || !l); )
          if ((d = ue(c, d))) (l = ve(c, d)), (m = l[0]), (l = l[1]);
        d
          ? ((m = d[Sa]),
            !m || 0 > m
              ? (c = [])
              : (l = ((k = {}),
                (k.mousemove = 2),
                (k.click = 32),
                (k.dblclick = 33),
                (k.mousedown = 4),
                (k.mouseup = 30),
                (k.touch = 12),
                k)[f])
              ? ((k = []),
                (d = eg(c, d)),
                gb(c, k, l)
                  ? (c = [])
                  : (S(k, a),
                    S(k, m),
                    S(k, Math.max(0, h[0] - d.left)),
                    S(k, Math.max(0, h[1] - d.top)),
                    /^mouse(up|down)|click$/.test(f) &&
                      ((c = g || b),
                      Lb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
                    (c = k)))
              : (c = []))
          : (c = []);
        return ua(e, c);
      }
      function yr(a) {
        var c = null,
          b = a.l,
          d = b.document;
        if (b.getSelection) {
          d = void 0;
          try {
            d = b.getSelection();
          } catch (g) {
            return [];
          }
          if (Pa(d)) return [];
          var e = "" + d;
          c = d.anchorNode;
        } else
          d.selection &&
            d.selection.createRange &&
            ((d = d.selection.createRange()),
            (e = d.text),
            (c = d.parentElement()));
        if ("string" !== typeof e) return [];
        try {
          for (; c && 1 !== c.nodeType; ) c = c.parentNode;
        } catch (g) {
          return [];
        }
        if (!c) return [];
        d = ld(b, c).ub || nd(b, c, !0);
        c = c.getElementsByTagName("*");
        for (var f = 0; f < c.length && !d; )
          (d = c[f]), (d = ld(b, d).ub || nd(b, d, !0)), (f += 1);
        if (e !== Eg)
          return (
            (Eg = e),
            (d = d ? I("", jk(e.split(""))) : e),
            (e = sb(a.l)),
            0 === d.length
              ? (d = b = "")
              : 100 >= d.length
              ? ((b = d), (d = ""))
              : 200 >= d.length
              ? ((b = d.substr(0, 100)), (d = d.substr(100)))
              : ((b = d.substr(0, 97)), (d = d.substr(d.length - 97))),
            (c = []),
            gb(a.l, c, 29) ? (a = []) : (S(c, e), Cg(c, b), Cg(c, d), (a = c)),
            a
          );
      }
      function zr(a) {
        return ua(Ie(a), yr(a) || []);
      }
      function kk(a) {
        return (
          (a.shiftKey ? 2 : 0) |
          (a.ctrlKey ? 4 : 0) |
          (a.altKey ? 1 : 0) |
          (a.metaKey ? 8 : 0) |
          (a.ctrlKey || a.altKey ? 16 : 0)
        );
      }
      function lk(a) {
        var c = [];
        Fg ||
          ((Fg = !0),
          Eg && c.push.apply(c, qr(a.l, sb(a.l))),
          Ib(
            a.l,
            function () {
              Fg = !1;
            },
            "fv.c"
          ));
        return c;
      }
      function mk(a, c, b, d) {
        var e = wc(c);
        if (!e || Ff(a, e)) return [];
        var f = ge(e),
          g = Ef(e);
        c = ld(a, e).ub;
        var h = L(a);
        if (!f && ((g && h.o("isEU")) || nd(a, e))) a = [];
        else {
          f = pc(a, e);
          h = sb(a);
          g = [];
          if (gb(a, g, 38)) a = [];
          else {
            S(g, h);
            fk(g, b);
            Lb(g, d);
            a = e[Sa];
            if (!a || 0 > a) a = 0;
            S(g, a);
            Lb(g, c ? 1 : 0);
            a = g;
          }
          a = ua(f, a);
        }
        return a;
      }
      function Ar(a) {
        var c = a.l,
          b = a.qa,
          d = b.keyCode,
          e = kk(b),
          f = [],
          g = v(f, Ma);
        if (
          {
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1,
          }[d] ||
          (112 <= d && 123 >= d) ||
          (96 <= d && 105 >= d) ||
          e & 16
        )
          19 === d && 4 === (e & -17) && (d = 144),
            g(mk(c, b, d, e | 16)),
            (Gg = !1),
            Ib(
              c,
              function () {
                Gg = !0;
              },
              "fv.kd"
            ),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(lk(a));
        return f;
      }
      function Br(a) {
        var c = a.l;
        a = a.qa;
        var b = [];
        Gg &&
          !Hg &&
          0 !== a.which &&
          (b.push.apply(b, mk(c, a, a.charCode || a.keyCode, kk(a))),
          (Hg = !0),
          Ib(
            c,
            function () {
              Hg = !1;
            },
            "fv.kp"
          ));
        return b;
      }
      function nk(a) {
        var c = a.l,
          b = wc(a.qa);
        if (!b || Wh(c, b)) return [];
        var d = [];
        if ("FORM" === b.nodeName) {
          for (var e = b.elements, f = 0; f < e.length; f += 1)
            fj(e[f]) || d.push.apply(d, pc(c, e[f]));
          d.push.apply(d, ur(c, sb(a.l), b));
        }
        return d;
      }
      function Cr(a) {
        var c = a.flush;
        a = wc(a.qa);
        "BODY" === Ga(a) && c();
      }
      function Vm(a, c) {
        var b,
          d = wc(c),
          e = pa.Kb,
          f = ec(a);
        if (d && rc("ym-advanced-informer", d)) {
          var g = f.o("ifc", 0) + 1;
          f.C("ifc", g);
          g = d.getAttribute("data-lang");
          var h = Fa(d.getAttribute("data-cid") || "");
          if (h || 0 === h)
            (e = n(a, "Ya." + e + ".informer"))
              ? e(((b = {}), (b.i = d), (b.id = h), (b.lang = g), b))
              : f.C("ib", !0),
              (b = c || window.event),
              b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
        }
      }
      function eh(a, c, b, d) {
        return function () {
          var e = Ea(a, c),
            f = xa(arguments);
          d.apply(void 0, f);
          return e;
        };
      }
      function dh(a, c, b, d) {
        return E(a, "cm." + b, d);
      }
      function ql(a, c, b, d, e) {
        return b.length && e
          ? G(
              N(
                function (f, g, h) {
                  return b[h] ? f.concat(G([a, c, d], g)) : f;
                },
                [],
                b
              ),
              u
            )()(e)
          : e;
      }
      var Qc = {
          construct: "Metrika2",
          callbackPostfix: "2",
          version: "hbzj7lpjz3smdgzs1sf0c",
          host: "mc.yandex.ru",
        },
        yg = [],
        De = Ja(Array.from, "from"),
        ff = /\./g,
        Vj = Ja(String.prototype.indexOf, "indexOf"),
        ok = Ja(Array.prototype.join, "join"),
        I = ok
          ? function (a, c) {
              return ok.call(c, a);
            }
          : fr,
        la = ha(function (a, c) {
          return a === c;
        }),
        fd = ha(function (a, c) {
          a(c);
          return c;
        }),
        dd = ha(I),
        ya = ha(Tj),
        Pa = la(null),
        W = la(void 0),
        pk = Ja(Function.prototype.bind, "bind"),
        D = pk
          ? function () {
              var a = xa(arguments);
              return pk.apply(a[0], ua([a[1]], a.slice(2)));
            }
          : er,
        yd = ha(G),
        lp = ha(va),
        qk = Ja(Array.prototype.reduce, "reduce"),
        N = qk
          ? function (a, c, b) {
              return qk.call(b, a, c);
            }
          : Fd,
        Ti = u,
        Dr = u(P, ja),
        wg,
        Sj = Jb(window),
        Er = Hb(Sj),
        vg = Object.prototype.hasOwnProperty,
        L = w(ec),
        V = Hb(n),
        Ka = V("length"),
        uf = Array.prototype.every
          ? function (a, c) {
              return Array.prototype.every.call(c, a);
            }
          : function (a, c) {
              return N(
                function (b, d) {
                  return b ? a(d) : !1;
                },
                !0,
                c
              );
            },
        Gd,
        cr = u(sg, la("[object Array]")),
        Fr = u(Oj, v(V("1"), Qj)),
        rk = Ja(Array.prototype.filter, "filter"),
        X = rk
          ? function (a, c) {
              return rk.call(c, a);
            }
          : Rj,
        Gc = ha(X),
        $a = Ca("find", Array.prototype.find)
          ? function (a, c) {
              return Array.prototype.find.call(c, a);
            }
          : Zq,
        H = Array.prototype.includes
          ? function (a, c) {
              return Array.prototype.includes.call(c, a);
            }
          : br,
        oc = Hb(H),
        sk = w(function (a) {
          a = n(a, "navigator") || {};
          var c = n(a, "userAgent") || "";
          return { Lf: -1 < (n(a, "vendor") || "").indexOf("Apple"), Kg: c };
        }),
        tb = w(V("navigator.userAgent")),
        Ed = w(function (a) {
          var c = n(a, "document.documentElement.style");
          a = n(a, "InstallTrigger");
          return !(!(c && "MozAppearance" in c) || ma(a));
        }),
        tk = Ja(Array.prototype.map, "map"),
        A =
          tk && Xq(window, Array.prototype.map)
            ? function (a, c) {
                return c && 0 < c.length ? tk.call(c, a) : [];
              }
            : Qj,
        z = A,
        kc = Array.prototype.flatMap
          ? function (a, c) {
              return Array.prototype.flatMap.call(c, a);
            }
          : $q,
        fb = ha(A),
        Nq = Hb(A),
        Na = ug(
          function (a, c) {
            return Array.prototype.some.call(c, a);
          },
          function (a, c) {
            for (var b = 0; b < c.length; b += 1)
              if (b in c && a.call(c, c[b], b)) return !0;
            return !1;
          },
          Ca("some", Array.prototype.some)
        ),
        Je = w(Jb),
        uc = V("0"),
        Gr = ha(tg),
        uk = Ja(Array.prototype.reverse, "reverse"),
        vr = uk
          ? function (a) {
              return uk.call(a);
            }
          : Wq,
        vk = Hb(parseInt),
        Fa = vk(10),
        Ig = vk(2),
        Ba = Object.entries
          ? function (a) {
              return a ? Object.entries(a) : [];
            }
          : Oj,
        ba = Object.keys ? Object.keys : Pj,
        Hr = Object.values ? Object.values : Fr,
        x = Object.assign || ar,
        Sh = ha(function (a, c) {
          return x({}, a, c);
        }),
        bd = w(u(V("String.fromCharCode"), v("fromCharCode", Ca), Rb)),
        Ce = w(u(tb, Va(/ipad|iphone|ipod/i))),
        Pf = w(function (a) {
          return n(a, "navigator.platform") || "";
        }),
        Ir =
          "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi".split(
            " "
          ),
        bf = w(function (a) {
          var c = sk(a);
          a = c.Lf;
          c = c.Kg;
          var b = va("indexOf", c);
          b = Na(u(b, la(-1), Rb), Ir);
          var d =
            /YaBrowser\/[\d.]+\sSA\/3|CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/;
          return (
            a && ((!/Safari/.test(c) && /Mobile/.test(c)) || d.test(c) || b)
          );
        }),
        xd = w(function (a) {
          a = sk(a);
          var c = a.Kg;
          return a.Lf && !c.match("CriOS");
        }),
        Jr = Va(
          /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
        ),
        Kr = Va(/; wv\)/),
        ad = w(function (a) {
          a = tb(a);
          return Kr(a) || Jr(a);
        }),
        Lr = /Chrome\/(\d+)\./,
        Mr = w(function (a) {
          return (a = (n(a, "navigator.userAgent") || "").match(Lr)) && a.length
            ? 76 <= Fa(a[1])
            : !1;
        }),
        qd = w(function (a) {
          var c = (tb(a) || "").toLowerCase();
          a = Pf(a);
          return !(
            -1 === c.indexOf("android") ||
            -1 === c.indexOf(c, "mobile") ||
            !/^android|linux armv/i.test(a)
          );
        }),
        Nr =
          "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
            " "
          ),
        Or = w(function (a) {
          var c = n(a, "navigator.connection.type");
          if (W(c)) return null;
          a = Je(a)(c, Nr);
          return -1 === a ? c : "" + a;
        }),
        ye = w(u(V("document.addEventListener"), Rb)),
        wk = w(function (a) {
          var c = n(a, "navigator") || {};
          return N(
            function (b, d) {
              return b || n(c, d);
            },
            "",
            ["language", "userLanguage", "browserLanguage", "systemLanguage"]
          );
        }),
        lh = w(function (a) {
          var c = n(a, "navigator") || {};
          a = wk(a);
          Ia(a) || ((a = ""), (c = n(c, "languages.0")), Ia(c) && (a = c));
          return a.toLowerCase().split("-")[0];
        }),
        db = w(function (a) {
          var c = !1;
          try {
            c = a.top !== a;
          } catch (b) {}
          return c;
        }),
        Pr = w(function (a) {
          var c = !1;
          try {
            c = a.top.contentWindow;
          } catch (b) {}
          return c;
        }),
        Qr = w(function (a) {
          var c = !1;
          try {
            c = a.navigator.javaEnabled();
          } catch (b) {}
          return c;
        }),
        Rr = w(function (a) {
          var c =
              "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
                " "
              ),
            b = n(a, "external");
          b =
            -1 !==
            (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
          var d = n(a, "document.documentElement"),
            e = ["selenium", "webdriver", "driver"];
          return !!(
            Na(v(a, n), [
              "_selenium",
              "callSelenium",
              "_Selenium_IDE_Recorder",
            ]) ||
            Na(v(n(a, "document"), n), c) ||
            b ||
            (d && Na(D(d.getAttribute, d), e))
          );
        }),
        Sr = w(function (a) {
          return !!(
            Na(v(a, n), ["_phantom", "__nightmare", "callPhantom"]) ||
            /(PhantomJS)|(HeadlessChrome)/.test(tb(a)) ||
            n(a, "navigator.webdriver") ||
            (n(a, "isChrome") && !n(a, "chrome"))
          );
        }),
        Tr = w(function (a) {
          return uf(v(a, n), ["ia_document.shareURL", "ia_document.referrer"]);
        }),
        Ur = w(function (a) {
          a = n(a, "navigator.plugins");
          return !!(a && Ka(a) && Na(u(V("name"), Va(/Chrome PDF Viewer/)), a));
        }),
        Vr = new RegExp(
          I(
            "|",
            "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
              ";"
            )
          ).replace(/[./]/g, "\\$&")
        ),
        jm = w(u(V("navigator.userAgent"), Va(Vr))),
        Jd = w(function (a) {
          var c = tb(a) || "",
            b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
          b = b ? [+b[1], +b[2]] : [0, 0];
          c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
          return 14 <= (c ? +c[1] : 0)
            ? !0
            : (Ce(a) || 10 < b[0] || (10 === b[0] && 13 <= b[1])) && xd(a);
        }),
        Vq = /Edg\/(\d+)\./,
        Uq = /Firefox\/([0-9]+)/,
        ag = w(function (a) {
          return Jd(a) || kf(a, 68) || lf(a, 79);
        }),
        Wr = Qc.construct,
        tc = Qc.host,
        Jg = ye(window),
        pa = {
          Xg: 24226447,
          Rg: 26302566,
          Zg: 51533966,
          hk: 65446441,
          Ta: "https:",
          gb: "923",
          Kb: Wr,
          Wg: Jg ? 512 : 2048,
          Ug: Jg ? 512 : 2048,
          Vg: Jg ? 100 : 400,
          ik: 100,
          jk: "noindex",
        },
        dc = {},
        O = w(function (a) {
          return a.id + ":" + a.da;
        }),
        $e = la("1"),
        xb = {
          id: "id",
          We: "ut",
          da: "type",
          ee: "ldc",
          sb: "nck",
          Bc: "url",
          Xh: "referrer",
        },
        Xr = /^\d+$/,
        Rc = {
          id: function (a) {
            a = "" + (a || "0");
            Xr.test(a) || (a = "0");
            try {
              var c = Fa(a);
            } catch (b) {
              c = 0;
            }
            return c;
          },
          da: function (a) {
            return "" + (a || 0 === a ? a : "0");
          },
          sb: Boolean,
          We: Boolean,
        };
      xb.oc = "defer";
      Rc.oc = Boolean;
      xb.aa = "params";
      Rc.aa = function (a) {
        return qb(a) || fa(a) ? a : null;
      };
      xb.Ve = "userParams";
      xb.hc = "accurateTrackBounce";
      xb.Fg = "triggerEvent";
      Rc.Fg = Boolean;
      xb.pg = "sendTitle";
      Rc.pg = function (a) {
        return !!a || W(a);
      };
      xb.Re = "trackHash";
      Rc.Re = Boolean;
      xb.vh = "clickmap";
      xb.kd = "trackLinks";
      xb.Gh = "enableAll";
      var Xe = N(
          function (a, c) {
            var b = c[0];
            a[b] = { ja: c[1], Xa: Rc[b] };
            return a;
          },
          {},
          Ba(xb)
        ),
        xk = ha(function (a, c) {
          var b = c || {};
          return {
            l: v(b, P),
            o: function (d, e) {
              var f = b[d];
              return W(f) && !W(e) ? e : f;
            },
            C: function (d, e) {
              b[d] = e;
              return this;
            },
            ac: function (d, e) {
              return "" === e || ma(e) ? this : this.C(d, e);
            },
            Ha: v(b, a),
          };
        }),
        Aa = xk(function (a) {
          var c = "";
          a = N(
            function (b, d) {
              var e = d[0],
                f = "" + e + ":" + d[1];
              "t" === e ? (c = f) : b.push(f);
              return b;
            },
            [],
            Ba(a)
          );
          c && a.push(c);
          return I(":", a);
        }),
        Kg,
        Hj =
          ((Kg = {}),
          (Kg.w = [
            [
              function (a, c) {
                return {
                  ca: function (b, d) {
                    var e,
                      f = b.G;
                    f =
                      ((e = {}),
                      (e["page-url"] = (f && f["page-url"]) || ""),
                      (e.charset = "utf-8"),
                      e);
                    "0" !== c.da && (f["cnt-class"] = c.da);
                    b.J || (b.J = Aa());
                    e = b.J;
                    var g = b.ba;
                    f = {
                      Ra: { eb: "watch/" + c.id },
                      ba: x(void 0 === g ? {} : g, {
                        nd: !(!e.o("pv") || e.o("ar") || e.o("wh")),
                      }),
                      G: x(b.G || {}, f),
                    };
                    x(b, f);
                    d();
                  },
                };
              },
              1,
            ],
          ]),
          Kg),
        yk = v(Hj, Ij),
        Yr = w(function (a) {
          var c = !1;
          if (!a.addEventListener) return c;
          try {
            var b = Object.defineProperty({}, "passive", {
              get: function () {
                c = !0;
                return 1;
              },
            });
            a.addEventListener("test", B, b);
          } catch (d) {}
          return c;
        }),
        Zr = ha(function (a, c) {
          return a ? x({ capture: !0, passive: !0 }, c || {}) : !!c;
        }),
        ia = w(function (a) {
          a = Yr(a);
          var c = Zr(a),
            b = {};
          return x(b, {
            D: function (d, e, f, g) {
              z(function (h) {
                var k = c(g);
                Gj(d, h, f, k, !1);
              }, e);
              return D(b.dc, b, d, e, f, g);
            },
            dc: function (d, e, f, g) {
              z(function (h) {
                var k = c(g);
                Gj(d, h, f, k, !0);
              }, e);
            },
          });
        }),
        Fj = oc([26812653]),
        Tf = w(u(V("id"), Fj), O),
        Sq = vb("debuggerEvents", rd),
        Pq = [
          "http.0.st..rt.",
          "network error occurred",
          "send beacon",
          "Content Security Policy",
          "DOM Exception 18",
        ],
        Kd,
        Fc = (function (a) {
          return function (c) {
            if (Kd) return new Kd(c);
            if (Ca("Error", a.Error)) return (Kd = a.Error), new a.Error(c);
            Kd = Rq;
            return new Kd(c);
          };
        })(window),
        Qq = Va(/^http./),
        Oq = Va(/^err.kn/),
        Ej = [],
        ea = w(Uf),
        $r = setTimeout;
      Da.prototype["catch"] = function (a) {
        return this.then(null, a);
      };
      Da.prototype.then = function (a, c) {
        var b = new this.constructor(gr);
        Xj(this, new ir(a, c, b));
        return b;
      };
      Da.prototype["finally"] = function (a) {
        var c = this.constructor;
        return this.then(
          function (b) {
            return c.resolve(a()).then(function () {
              return b;
            });
          },
          function (b) {
            return c.resolve(a()).then(function () {
              return c.reject(b);
            });
          }
        );
      };
      Da.all = function (a) {
        return new Da(function (c, b) {
          function d(h, k) {
            try {
              if (k && ("object" === typeof k || "function" === typeof k)) {
                var l = k.then;
                if ("function" === typeof l) {
                  l.call(
                    k,
                    function (m) {
                      d(h, m);
                    },
                    b
                  );
                  return;
                }
              }
              e[h] = k;
              0 === --f && c(e);
            } catch (m) {
              b(m);
            }
          }
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.all accepts an array"));
          var e = Array.prototype.slice.call(a);
          if (0 === e.length) return c([]);
          for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g]);
        });
      };
      Da.resolve = function (a) {
        return a && "object" === typeof a && a.constructor === Da
          ? a
          : new Da(function (c) {
              c(a);
            });
      };
      Da.reject = function (a) {
        return new Da(function (c, b) {
          b(a);
        });
      };
      Da.race = function (a) {
        return new Da(function (c, b) {
          if (!a || "undefined" === typeof a.length)
            return b(new TypeError("Promise.race accepts an array"));
          for (var d = 0, e = a.length; d < e; d++) Da.resolve(a[d]).then(c, b);
        });
      };
      Da.$e =
        ("function" === typeof setImmediate &&
          function (a) {
            setImmediate(a);
          }) ||
        function (a) {
          $r(a, 0);
        };
      Da.ah = function (a) {
        "undefined" !== typeof console &&
          console &&
          console.warn("Possible Unhandled Promise Rejection:", a);
      };
      var K = window.Promise,
        as = Ja(K, "Promise"),
        zk = Ja(n(K, "resolve"), "resolve"),
        Ak = Ja(n(K, "reject"), "reject"),
        Bk = Ja(n(K, "all"), "all");
      if (H(!1, [as, zk, Ak, Bk])) K = Da;
      else {
        var Ke = function (a) {
          return new Promise(a);
        };
        Ke.resolve = D(zk, K);
        Ke.reject = D(Ak, K);
        Ke.all = D(Bk, K);
        K = Ke;
      }
      var Aj = ha(function (a, c) {
          for (var b = []; !Dd(c); ) {
            var d = Hq(c);
            a(d, function (e) {
              return e(c);
            });
            b.push(d);
          }
          return b;
        }),
        Lg = ha(function (a, c) {
          return ya(function (b, d) {
            return c(b, function (e) {
              try {
                d(a(e));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        Le = ha(function (a, c) {
          return ya(function (b, d) {
            return c(b, function (e) {
              try {
                a(e)(Ua(b, d));
              } catch (f) {
                b(f);
              }
            });
          });
        }),
        og = [],
        pg = !1,
        ng = !1,
        wj = [],
        uj = ["webkitvisibilitychange", "visibilitychange"],
        tj = xk(function (a) {
          a = Ba(a);
          return I(
            "",
            A(function (c) {
              var b = c[0];
              c = c[1];
              return Pa(c) ? "" : b + "(" + c + ")";
            }, a)
          );
        }),
        Ck =
          "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
            " "
          ),
        Dp = /^ *(data|javascript):/i,
        Li = new RegExp(
          I("", [
            "\\.(" +
              I(
                "|",
                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                  " "
                )
              ) +
              ")$",
          ]),
          "i"
        ),
        La,
        ck =
          ((La = {}),
          (La.hit = "h"),
          (La.params = "p"),
          (La.reachGoal = "g"),
          (La.userParams = "up"),
          (La.trackHash = "th"),
          (La.accurateTrackBounce = "atb"),
          (La.notBounce = "nb"),
          (La.addFileExtension = "fe"),
          (La.extLink = "el"),
          (La.file = "fc"),
          (La.trackLinks = "tl"),
          (La.destruct = "d"),
          (La.setUserID = "ui"),
          (La.getClientID = "ci"),
          (La.clickmap = "cm"),
          (La.enableAll = "ea"),
          La),
        Bq = "hash host hostname href pathname port protocol search".split(" "),
        kg =
          "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(
            " "
          ),
        sj = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
        am = w(function (a) {
          a = T(a).hostname.split(".");
          return a[a.length - 1];
        }),
        Dk = w(function (a) {
          return (
            -1 !==
            T(a).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          );
        }),
        pe = w(function (a) {
          return (a ? a.replace(/^www\./, "") : "").toLowerCase();
        }),
        bs =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Wd = w(function (a) {
          a = T(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(bs));
          return c;
        }),
        cs =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Zo = w(function (a) {
          a = T(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(cs));
          return c;
        }),
        ds = w(function (a) {
          a = T(a).hostname;
          var c = !1;
          a && (c = -1 !== a.search(sj));
          return c;
        }),
        Ek = u(T, V("protocol"), la("https:")),
        zq = w(function (a) {
          return Mr(a) && Ek(a) ? "SameSite=None;Secure;" : "";
        }),
        Vi = /^\s+|\s+$/g,
        rj = Ja(String.prototype.trim, "trim"),
        Fk = ha(function (a, c) {
          return c.replace(a, "");
        }),
        zi = Fk(/\s/g),
        Kb = Fk(/\D/g),
        jg = ["metrika_enabled"],
        ig = [],
        pj = vb("gsc", nj),
        Aq = /:\d+$/,
        jr = w(function (a) {
          var c = (T(a).host || "").split(".");
          return 1 === c.length
            ? c[0]
            : N(
                function (b, d, e) {
                  e += 1;
                  2 <= e &&
                    !b &&
                    ((e = I(".", c.slice(-e))), Yh(a, e) && (b = e));
                  return b;
                },
                "",
                c
              );
        }),
        $b = w(Cc),
        yq = w(function (a) {
          lj(a, "_ymBRC", "1");
          var c = "1" !== kj(a, "_ymBRC");
          c || mj(a, "_ymBRC");
          return c;
        }),
        Qa = w(nf),
        Sc = w(nf, function (a, c, b) {
          return "" + c + b;
        }),
        jj = vb("r", function (a, c) {
          var b = ij(a, c),
            d = b[0];
          return !b[1] && d;
        }),
        Cd = w(function () {
          return { Fa: {}, pending: {}, children: {} };
        }),
        Mg = V("postMessage"),
        es = F("s.f", function (a, c, b, d, e) {
          c = c(d);
          var f = Cd(a),
            g = I(":", [c.Z.uc, c.Z.key]);
          if (Mg(b)) {
            f.pending[g] = e;
            try {
              b.postMessage(c.zg, "*");
            } catch (h) {
              delete f.pending[g];
              return;
            }
            Y(
              a,
              function () {
                delete f.pending[g];
              },
              5e3,
              "if.s"
            );
          }
        }),
        fs = F("s.fh", function (a, c, b, d, e, f) {
          var g = null,
            h = null,
            k = Cd(a),
            l = null;
          try {
            (g = Db(a, f.data)), (h = g.__yminfo), (l = g.data);
          } catch (m) {
            return;
          }
          if (
            !ma(h) &&
            h.substring &&
            "__yminfo" === h.substring(0, 8) &&
            !ma(l) &&
            ((g = h.split(":")), 4 === g.length)
          )
            if (
              ((h = c.id),
              (c = g[1]),
              (a = g[2]),
              (g = g[3]),
              !fa(l) && l.type && "0" === g && l.counterId)
            ) {
              if (!l.toCounter || l.toCounter == h) {
                k = null;
                try {
                  k = f.source;
                } catch (m) {}
                !Pa(k) &&
                  Mg(k) &&
                  ((f = d.O(l.type, [f, l])),
                  (e = A(u(P, Sh(e)), f.concat([{}]))),
                  (l = b([c, a, l.counterId], e)),
                  k.postMessage(l.zg, "*"));
              }
            } else
              g === "" + h &&
                fa(l) &&
                X(function (m) {
                  return !(!m.hid || !m.counterId);
                }, l).length === l.length &&
                (b = k.pending[I(":", [c, a])]) &&
                b.apply(null, [f].concat(l));
        }),
        cd = w(function (a, c) {
          var b,
            d = cc("getElementsByTagName", n(a, "document")),
            e = Cd(a),
            f = Mg(a),
            g = gd(a),
            h = ia(a);
          if (!d || !f) return null;
          d = d.call(a.document, "iframe");
          f = ((b = {}), (b.counterId = c.id), (b.hid = "" + Yb(a)), b);
          ag(a) && (f.duid = Hc(a, c));
          uq(a, g);
          vq(a);
          b = wq(a, f);
          var k = G([a, v([], b)], es);
          z(function (l) {
            var m = null;
            try {
              m = l.contentWindow;
            } catch (p) {}
            m &&
              k(m, { type: "initToChild" }, function (p, r) {
                g.O("initToParent", [p, r]);
              });
          }, d);
          db(a) &&
            k(a.parent, { type: "initToParent" }, function (l, m) {
              g.O("parentConnect", [l, m]);
            });
          h.D(a, ["message"], G([a, c, b, g, f], fs));
          return { $: g, Fa: e.Fa, children: e.children, He: k };
        }, u(wb, O)),
        Yd = w(hj, u(wb, O)),
        gs = F("pa.plgn", function (a, c) {
          var b = Yd(a, c);
          b &&
            b.$.D(
              ["pluginInfo"],
              E(a, "c.plgn", function () {
                var d = L(a);
                d.C("cmc", d.o("cmc", 0) + 1);
                return Tq(c, Xe);
              })
            );
        }),
        Gb = G([1, null], ug),
        id = G([1, 0], ug),
        yb,
        yc,
        vf =
          ((yb = {}),
          (yb.transaction_id = "id"),
          (yb.item_id = "id"),
          (yb.item_name = "name"),
          (yb.item_brand = "brand"),
          (yb.promotion_name = "coupon"),
          (yb.index = "position"),
          (yb.item_variant = "variant"),
          (yb.value = "revenue"),
          (yb.item_category = "category"),
          yb),
        Lh =
          ((yc = {}),
          (yc.view_item = "detail"),
          (yc.add_to_cart = "add"),
          (yc.remove_from_cart = "remove"),
          (yc.begin_checkout = "checkout"),
          (yc.purchase = "purchase"),
          yc),
        kn = "currencyCode add delete remove purchase checkout detail".split(
          " "
        ),
        nb,
        bb,
        bm =
          ((nb = {}),
          (nb.am = "com.am"),
          (nb.tr = "com.tr"),
          (nb.ge = "com.ge"),
          (nb.il = "co.il"),
          (nb["\u0440\u0444"] = "ru"),
          (nb["xn--p1ai"] = "ru"),
          (nb["\u0443\u043a\u0440"] = "ua"),
          (nb["xn--j1amh"] = "ua"),
          (nb["\u0431\u0435\u043b"] = "by"),
          (nb["xn--90ais"] = "by"),
          nb),
        Gk = {
          "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
          "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
          "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/,
        },
        dm =
          ((bb = {}),
          (bb.ka = "ge"),
          (bb.ro = "md"),
          (bb.tg = "tj"),
          (bb.tk = "tm"),
          (bb.et = "ee"),
          (bb.hy = "com.am"),
          (bb.he = "co.li"),
          (bb.ky = "kg"),
          (bb.uk = "ua"),
          (bb.be = "by"),
          (bb.tr = "com.tr"),
          (bb.kk = "kz"),
          bb),
        Me = ha(function (a, c) {
          return L(c).o(a, null);
        }),
        hs = w(function () {
          var a = 0;
          return function () {
            return (a += 1);
          };
        }),
        is = u(O, hs, ja),
        $f = {
          mc: function (a) {
            a = ec(a).o("mt", {});
            a = Ba(a);
            return a.length
              ? N(
                  function (c, b, d) {
                    return "" + c + (d ? "-" : "") + b[0] + "-" + b[1];
                  },
                  "",
                  a
                )
              : null;
          },
          clc: function (a) {
            var c = L(a).o("cls", { lc: 0, x: 0, y: 0 }),
              b = c.lc,
              d = c.x;
            c = c.y;
            return b
              ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b)
              : b + "-" + d + "-" + c;
          },
          rqnt: function (a, c, b) {
            a = b.G;
            return !a || a.nohit ? null : is(c);
          },
        };
      x(
        $f,
        (function () {
          var a = {};
          a.oo = Me("oo");
          a.pmc = Me("cmc");
          a.lt = function (c) {
            var b = ec(c).o("lt", null);
            return b ? c.Math.round(100 * b) : b;
          };
          a.yu = function (c) {
            var b = T(c);
            return H(b.hostname, ["dzen.ru", "ya.ru"])
              ? (Cc(c, "").o("yandexuid") || "").substring(0, 25)
              : null;
          };
          a.re = u(xq, Gb);
          a.aw = function (c) {
            c = $a(u(ma, Rb), [
              c.document.hidden,
              c.document.msHidden,
              c.document.webkitHidden,
            ]);
            return ma(c) ? null : id(!c);
          };
          a.ifc = function (c) {
            return ec(c).o("ifc");
          };
          a.ifb = function (c) {
            return ec(c).o("ifb");
          };
          a.ecs = function (c) {
            return ec(c).o("ecs");
          };
          a.csi = Me("scip");
          return a;
        })()
      );
      var js = ba($f),
        ks = w(function (a) {
          a = n(a, "document") || {};
          return ("" + (a.characterSet || a.charset || "")).toLowerCase();
        }),
        Za = w(u(V("document"), v("createElement", cc))),
        Xh = w(function (a) {
          var c = n(a, "Element.prototype");
          return c
            ? (a = $a(
                function (b) {
                  return Ca(b, c[b]);
                },
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ]
              ))
              ? c[a]
              : null
            : null;
        }),
        ls = la("INPUT"),
        we = u(Ga, ls),
        ms = la("TEXTAREA"),
        oq = u(Ga, ms),
        ns = la("SELECT"),
        pq = u(Ga, ns),
        xe = u(V("type"), Va(/^(checkbox|radio)$/)),
        Bf = u(Ga, Va(/^INPUT|SELECT|TEXTAREA$/)),
        he = u(Ga, Va(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
        Gf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
        nq = ["submit", "image", "hidden"],
        oi = w(function () {
          for (var a = 59, c = {}, b = 0; b < Ck.length; b += 1)
            (c[Ck[b]] = String.fromCharCode(a)), (a += 1);
          return c;
        }),
        dj = w(function (a) {
          return { Bk: a, mb: null, vb: [] };
        }),
        bj = {},
        cg = {};
      bj.p = 500;
      var aj = { i: "id", n: "name", h: "href", ty: "type" };
      cg.h = !0;
      cg.c = !0;
      var Nc = {};
      Nc.p = dg;
      Nc.c = function (a, c, b) {
        (a = rb(n(c, "textContent"))) &&
          b &&
          ((b = b(c)),
          b.length && Na(u(V("textContent"), rb, la(a)), b) && (a = ""));
        we(c) && (a = rb((c.getAttribute && c.getAttribute("value")) || a));
        return a;
      };
      var Tc,
        bg =
          "button," +
          A(
            function (a) {
              return 'input[type="' + a + '"]';
            },
            ["button", "submit", "reset", "file"]
          ).join(",") +
          ",a",
        qi = v(bg, ub),
        kq =
          ((Tc = {}),
          (Tc.A = "h"),
          (Tc.BUTTON = "i"),
          (Tc.DIV = "i"),
          (Tc.INPUT = "ty"),
          Tc),
        Ld = w(function (a, c) {
          var b = n(a, "console"),
            d = n(b, "log");
          d = Ee("log", d) ? D(d, b) : B;
          var e = n(b, "warn");
          e = Ee("warn", e) ? D(e, b) : d;
          var f = n(b, "error");
          b = Ee("error", f) ? D(f, b) : d;
          return {
            log: Mc(a, "log", c, d),
            error: Mc(a, "error", c, b),
            warn: Mc(a, "warn", c, e),
          };
        }),
        os = F("p.cd", function (a, c) {
          if (qd(a) || Ce(a)) {
            var b = Qa(a);
            if (ma(b.o("jn"))) {
              b.C("jn", !1);
              var d = a.wk || xd(a) ? function () {} : /./,
                e = Ld(a, O(c));
              d.toString = function () {
                b.C("jn", !0);
                return "Yandex.Metrika counter is initialized";
              };
              e.log("%c%s", "color: inherit", d);
            }
          }
        }),
        jq = /([0-9\\.]+) Safari/,
        ps = /\sYptp\/\d\.(\d+)\s/,
        Hk = w(function (a) {
          var c;
          a: {
            if ((c = tb(a)) && (c = ps.exec(c)) && 1 < c.length) {
              c = Fa(c[1]);
              break a;
            }
            c = 0;
          }
          return (50 <= c && 99 >= c) || lf(a, 79) ? !1 : !Jd(a) || bf(a);
        }),
        Ik =
          "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
            ";"
          ),
        qs = w(function (a) {
          a = Za(a)("canvas");
          var c = n(a, "getContext");
          if (!c) return null;
          try {
            var b = D(c, a)("2d");
            b.font = "72px mmmmmmmmmmlli";
            var d = b.measureText("mmmmmmmmmmlli").width;
            return function (e) {
              b.font = "72px " + e;
              return b.measureText("mmmmmmmmmmlli").width === d;
            };
          } catch (e) {
            return null;
          }
        }),
        Jk = Ja(String.prototype.repeat, "repeat"),
        rs = Jk
          ? function (a, c) {
              return Jk.call(a, c);
            }
          : Yq,
        Kh = v(!0, function (a, c, b, d) {
          b = c.length && (b - d.length) / c.length;
          if (0 >= b) return d;
          c = rs(c, b);
          return a ? c + d : d + c;
        }),
        Fe = [2277735313, 289559509],
        Ge = [1291169091, 658871167],
        gq = { "*": "+", "-": "/", nk: "=", "+": "*", "/": "-", "=": "_" },
        ss = w(
          u(
            ea,
            ya(function (a) {
              return -new a.l.Date().getTimezoneOffset();
            })
          )
        ),
        ts = u(
          ea,
          ya(function (a) {
            a = new a.l.Date();
            return I(
              "",
              A(Kq, [
                a.getFullYear(),
                a.getMonth() + 1,
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds(),
              ])
            );
          })
        ),
        us = u(ea, ya(ze)),
        Kk = w(
          u(
            ea,
            ya(function (a) {
              return a.xa[0];
            })
          )
        ),
        fq = w(xc, O),
        Zi = w(function () {
          return { uf: null, ta: [] };
        }, O),
        vs = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
        ws = w(function (a, c) {
          var b = $b(a),
            d = T(a).search.match(vs);
          return d && 2 <= d.length
            ? ((d = d[2]), c.sb || b.C("turbo_uid", d), d)
            : (b = b.o("turbo_uid"))
            ? b
            : "";
        }),
        $p = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart", "navigationStart"],
          ["redirectEnd", "redirectStart"],
          [
            function (a, c) {
              return n(c, "redirectCount") || n(a, "navigation.redirectCount");
            },
          ],
          ["domInteractive", "domLoading"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete", "navigationStart"],
          ["loadEventStart", "navigationStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart", "navigationStart"],
        ],
        ob,
        Zp = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart"],
          ["redirectEnd", "redirectStart"],
          ["redirectCount"],
          ["domInteractive", "responseEnd"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete"],
          ["loadEventStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart"],
        ],
        Yi =
          ((ob = {}),
          (ob.responseEnd = 1),
          (ob.domInteractive = 1),
          (ob.domContentLoadedEventStart = 1),
          (ob.domContentLoadedEventEnd = 1),
          (ob.domComplete = 1),
          (ob.loadEventStart = 1),
          (ob.loadEventEnd = 1),
          (ob.unloadEventStart = 1),
          (ob.unloadEventEnd = 1),
          (ob.secureConnectionStart = 1),
          ob),
        bq = w(rd),
        Wp = w(xc),
        Xp = w(function (a) {
          var c = n(a, "webkitRequestFileSystem");
          if (U(c) && !qd(a))
            return new K(D(c, a, 0, 0))
              .then(function () {
                var d = n(a, "navigator.storage") || {};
                return d.estimate ? d.estimate() : {};
              })
              .then(function (d) {
                return (d = d.quota) && 12e7 > d ? !0 : !1;
              })
              ["catch"](v(!0, P));
          if (Ed(a))
            return (c = n(a, "navigator.serviceWorker")), K.resolve(W(c));
          c = n(a, "openDatabase");
          if (xd(a) && U(c)) {
            var b = !1;
            try {
              c(null, null, null, null);
            } catch (d) {
              b = !0;
            }
            return K.resolve(b);
          }
          return K.resolve(
            !n(a, "indexedDB") &&
              (n(a, "PointerEvent") || n(a, "MSPointerEvent"))
          );
        }),
        xs = w(function (a) {
          return U(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
        }),
        Lk = /\/$/,
        ys = w(xc),
        Zd = w(
          function (a, c) {
            if (!ag(a) || !db(a)) return Hc(a, c);
            var b = cd(a, c);
            return b && b.Fa[c.id]
              ? b.Fa[c.id].info.duid || Hc(a, c)
              : Hc(a, c);
          },
          function (a, c) {
            return "{" + c.ee + c.sb;
          }
        ),
        da,
        zs = w(function (a) {
          a = L(a);
          var c = a.o("counterNum", 0) + 1;
          a.C("counterNum", c);
          return c;
        }, u(wb, O)),
        se =
          ((da = {}),
          (da.vf = v(Qc.version, P)),
          (da.nt = Or),
          (da.fp = function (a, c, b) {
            if (b.G && b.G.nohit) return null;
            c = O(c);
            b = ys(a);
            if (b[c]) return null;
            a: {
              var d = Kk(a),
                e = n(a, "performance.getEntriesByType");
              if (U(e)) {
                if (
                  ((a = X(
                    u(P, V("name"), la("first-contentful-paint")),
                    e.call(a.performance, "paint")
                  )),
                  a.length)
                ) {
                  a = a[0].startTime;
                  break a;
                }
              } else {
                e = n(a, "chrome.loadTimes");
                if (
                  U(e) &&
                  ((e = e.call(a.chrome)), (e = n(e, "firstPaintTime")), d && e)
                ) {
                  a = 1e3 * e - d;
                  break a;
                }
                if ((a = n(a, "performance.timing.msFirstPaint"))) {
                  a -= d;
                  break a;
                }
              }
              a = void 0;
            }
            return a ? ((b[c] = a), Math.round(a)) : null;
          }),
          (da.fu = function (a, c, b) {
            var d = b.G;
            if (!d) return null;
            c = (n(a, "document.referrer") || "").replace(Lk, "");
            b = (d["page-ref"] || "").replace(Lk, "");
            d = d["page-url"];
            a = T(a).href !== d;
            c = c !== b;
            b = 0;
            a && c ? (b = 3) : c ? (b = 1) : a && (b = 2);
            return b;
          }),
          (da.en = ks),
          (da.la = wk),
          (da.ut = function (a, c, b) {
            var d = b.V;
            b = b.G;
            d = d && d.Qc;
            b && (ds(a) || c.We || d) && (b.ut = "noindex");
            return null;
          }),
          (da.v = v(pa.gb, P)),
          (da.cn = zs),
          (da.dp = function (a) {
            var c = L(a),
              b = c.o("bt", {});
            if (W(c.o("bt"))) {
              var d = n(a, "navigator.getBattery");
              try {
                b.p = d && d.call(a.navigator);
              } catch (e) {}
              c.C("bt", b);
              b.p &&
                b.p.then &&
                b.p.then(
                  E(a, "bi:dp.p", function (e) {
                    b.Zj = n(e, "charging") && 0 === n(e, "chargingTime");
                  })
                );
            }
            return id(b.Zj);
          }),
          (da.ls = w(function (a, c) {
            var b = Sc(a, c.id),
              d = ea(a),
              e = b.o("lsid");
            return +e ? e : ((d = Ra(a, 0, d(Z))), b.C("lsid", d), d);
          }, wb)),
          (da.hid = Yb),
          (da.phid = function (a, c) {
            if (!db(a)) return null;
            var b = cd(a, c);
            if (!b) return null;
            var d = ba(b.Fa);
            return d.length ? b.Fa[d[0]].info.hid : null;
          }),
          (da.z = ss),
          (da.i = ts),
          (da.et = us),
          (da.c = u(V("navigator.cookieEnabled"), Gb)),
          (da.rn = u(P, Ra)),
          (da.rqn = function (a, c, b) {
            b = b.G;
            if (!b || b.nohit) return null;
            c = O(c);
            a = Sc(a, c);
            c = (a.o("reqNum", 0) || 0) + 1;
            a.C("reqNum", c);
            if (a.o("reqNum") === c) return c;
            a.vc("reqNum");
            return null;
          }),
          (da.u = Zd),
          (da.tp = u(wb, Lj, Gb)),
          (da.tpid = u(wb, function (a) {
            a = O(a);
            return (dc[a] && dc[a].Pj) || null;
          })),
          (da.w = function (a) {
            a = Bd(a);
            return a[0] + "x" + a[1];
          }),
          (da.s = function (a) {
            var c = n(a, "screen");
            if (c) {
              a = n(c, "width");
              var b = n(c, "height");
              c = n(c, "colorDepth") || n(c, "pixelDepth");
              return I("x", [a, b, c]);
            }
            return null;
          }),
          (da.sk = V("devicePixelRatio")),
          (da.ifr = u(db, Gb)),
          (da.j = u(Qr, Gb)),
          (da.sti = function (a) {
            return db(a) ? (Pr(a) ? "1" : null) : null;
          }),
          da),
        Mk = (function () {
          var a,
            c = {},
            b = {};
          c.bu = xs;
          c.pri = Vp;
          c.wv = v(2, P);
          b.we = function (d, e) {
            return Gb(e.Eb);
          };
          c.ds = Yp;
          b.co = function (d) {
            return id(L(d).o("jn"));
          };
          c.td = ws;
          x(
            c,
            ((a = {}),
            (a.iss = u(Rr, Gb)),
            (a.hdl = u(Sr, Gb)),
            (a.iia = u(Tr, Gb)),
            (a.cpf = u(Ur, Gb)),
            (a.ntf = w(function (d) {
              a: switch (n(d, "Notification.permission")) {
                case "denied":
                  d = !1;
                  break a;
                case "granted":
                  d = !0;
                  break a;
                default:
                  d = null;
              }
              return Pa(d) ? null : d ? 2 : 1;
            })),
            (a.eu = Me("isEU")),
            (a.ns = Kk),
            (a.np = function (d) {
              if (Ra(d, 0, 100)) d = null;
              else {
                d = rb(Pf(d), 100);
                for (var e = [], f = 0; f < d.length; f++) {
                  var g = d.charCodeAt(f);
                  128 > g
                    ? e.push(g)
                    : (127 < g && 2048 > g
                        ? e.push((g >> 6) | 192)
                        : (e.push((g >> 12) | 224),
                          e.push(((g >> 6) & 63) | 128)),
                      e.push((g & 63) | 128));
                }
                d = Ph(e);
              }
              return d;
            }),
            a)
          );
          return { Ch: c, eh: b };
        })(),
        As = Mk.eh;
      x(se, Mk.Ch);
      var Bs = ba(se);
      x(se, As);
      var Up = Bs.concat(js),
        zd = vb("retryReqs", function (a) {
          return Qa(a).o("retryReqs", {});
        }),
        Xl = F("g.r", function (a) {
          var c = ea(a),
            b = zd(a),
            d = c(Z),
            e = Yb(a);
          return N(
            function (f, g) {
              var h = g[0],
                k = g[1];
              k &&
                !k.d &&
                k.ghid &&
                k.ghid !== e &&
                k.time &&
                500 < d - k.time &&
                k.time + 864e5 > d &&
                2 >= k.browserInfo.rqnl &&
                ((k.d = 1),
                f.push({
                  protocol: k.protocol,
                  host: k.host,
                  eb: k.resource,
                  oj: k.postParams,
                  aa: k.params,
                  lh: k.browserInfo,
                  fb: k.telemetry,
                  Dk: k.ghid,
                  time: k.time,
                  Yb: Fa(h),
                  yh: k.counterId,
                  da: k.counterType,
                }));
              return f;
            },
            [],
            Ba(b)
          );
        }),
        Tp = /^[a-z][\w.+-]+:/i,
        Nk = w(rd),
        Ng,
        Fb = [
          [lg, 1],
          [te, 2],
          [Pb(), 3],
          [Zf, 4],
        ],
        Wf = [],
        zb = v(Fb, Jj);
      zb(function (a, c) {
        return {
          Aa: function (b, d) {
            var e = Ea(a, c);
            e = e && e.userParams;
            var f = (b.V || {}).Ve;
            e && f && e(f);
            d();
          },
        };
      }, 0);
      zb(Xf(), 100);
      var Ob = ((Ng = {}), (Ng.h = Fb), Ng),
        aa = v(Ob, Ij);
      Ob["2"] = Fb;
      zb(function (a, c) {
        return {
          ca: function (b, d) {
            var e = (b.V || {}).aa,
              f = b.ba;
            f = void 0 === f ? {} : f;
            if (e && (Kj(c, e), !f.fa && b.J && b.G)) {
              var g = jb(a, e),
                h = Nk(a),
                k = b.J.o("pv");
              g &&
                !b.G.nohit &&
                (ib(a, { ea: O(c), name: "params", data: { Yk: e } }),
                k
                  ? encodeURIComponent(g).length > pa.Ug
                    ? h.push([b.J, e])
                    : (b.G["site-info"] = g)
                  : ((f.fa = g),
                    (b.ba = f),
                    b.Na || (b.Na = {}),
                    (b.Na.Yi = !0)));
            }
            d();
          },
          Aa: function (b, d) {
            var e = Nk(a),
              f = Ea(a, c),
              g = f && f.params;
            g &&
              ((f = X(u(uc, la(b.J)), e)),
              z(function (h) {
                g(h[1]);
                h = Je(a)(h, e);
                e.splice(h, 1);
              }, f));
            d();
          },
        };
      }, -1);
      Ob["1"] = X(u(uc, la(Zf), Rb), Fb);
      zb(function (a) {
        return {
          ca: function (c, b) {
            var d = c.G;
            if (!c.J || !d) return b();
            var e = d["page-ref"],
              f = d["page-url"];
            e && f !== e ? (d["page-ref"] = Ui(a, e)) : delete d["page-ref"];
            d["page-url"] = Ui(a, f).slice(0, pa.Wg);
            return b();
          },
        };
      }, -100);
      Ob.a = Fb;
      Ob.g = Fb;
      aa("r", te, 1);
      aa(
        "r",
        (function () {
          return function (a) {
            return {
              ca: function (c, b) {
                var d = c.J,
                  e = void 0 === d ? Aa() : d,
                  f = c.fb,
                  g = c.V.Yb,
                  h = zd(a);
                d = e.o("rqnl", 0) + 1;
                e.C("rqnl", d);
                var k = (e = n(h, I(".", [g, "browserInfo"])));
                e && (e.rqnl = d);
                f &&
                  (f.C("rqnl", d), (f = n(h, I(".", [g, "telemetry"])))) &&
                  ((f.rqnl = d), (k = k || e));
                k && Yf(a);
                b();
              },
              Aa: function (c, b) {
                Wi(a, c);
                b();
              },
            };
          };
        })(),
        2
      );
      Ob.t = Fb;
      aa("n", lg, 1);
      aa("n", te, 2);
      aa("n", Pb(), 3);
      aa("n", Xf(), 100);
      aa("m", Pb(["u", "v", "vf"]), 1);
      aa("m", Xf(), 2);
      var Pp = /[^a-z0-9.:-]/,
        Og,
        bc = [],
        Pg = {};
      bc.push(Qi, 0, Nb, Vf, wd);
      var Ok = [Nb];
      Ok.push(Vf);
      var Pk = Eb(Ok),
        Uc = Eb([wd]),
        Cs = Eb([Qi, wd]),
        Ne = Eb([0, Nb, Vf, wd]),
        ra = ((Og = {}), (Og.h = Pk), Og);
      ra.m = Cs;
      ra["2"] = bc;
      ra.t = bc;
      ra.a = Ne;
      ra.n = bc;
      ra.r = Ne;
      ra["1"] = Ne;
      ra.g = Ne;
      var ed = w(function (a, c) {
          var b = Pg["*"] ? Pg["*"] : c && Pg[c];
          b || (b = c ? ra[c] || [] : bc);
          b = N(
            function (d, e, f) {
              (e = e && e(a)) && d.push([f, e]);
              return d;
            },
            [],
            b
          );
          b.length || We();
          return b;
        }, wb),
        Qg,
        Ds = D(K.reject, K, Oa()),
        sa = ((Qg = {}), (Qg.h = Wa), Qg);
      sa.a = Wa;
      sa.n = Wa;
      sa["1"] = Wa;
      sa.g = Wa;
      sa["2"] = Wa;
      sa.r = Wa;
      sa.m = function (a, c, b) {
        return function (d, e) {
          var f,
            g = d.G;
          g = ((f = {}), (f["page-url"] = (g && g["page-url"]) || ""), f);
          f = x(d, { G: x(d.G || {}, g), Ra: { eb: "clmap/" + e.id } });
          g = Ma(Of(a, "cm", e), b);
          return me(a, c, g)(f)["catch"](E(a, "c.m"));
        };
      };
      sa.t = Wa;
      var wa = F(
          "g.sen",
          function (a, c, b) {
            var d = ed(a, c);
            b = b ? Sp(a, c, b) : [];
            var e = sa[c],
              f = e ? e(a, d, b) : Wa(a, d, b);
            return function () {
              var g = xa(arguments),
                h = g[0];
              g = g.slice(1);
              var k = h.ba;
              h = x(h, { ba: x(void 0 === k ? {} : k, { Ba: [c] }) });
              return f.apply(void 0, ua([h], g));
            };
          },
          Ds
        ),
        Ip = ha(function (a, c) {
          if (!c[a]) {
            var b,
              d = new K(function (e) {
                b = e;
              });
            c[a] = { gg: b, ab: d, hg: !1 };
          }
          return c[a].ab;
        }),
        Pi = w(u(xc, ya)),
        li = u(V("settings.pcs"), la("1")),
        Es = F("dc.init", function (a, c) {
          function b(k) {
            for (var l = [], m = 1; m < arguments.length; m++)
              l[m - 1] = arguments[m];
            L(a).o("dce:" + c, !1) && e[k].apply(e, l);
            L(a)
              .o("dclq:" + c)
              .push([k, l]);
          }
          var d = T(a),
            e = Ld(a, c);
          L(a).Pa("dclq:" + c, []);
          var f = $b(a),
            g = If(a),
            h = g.Ii;
          g = g.zi;
          h && !g && f.C("debug", "1", void 0, d.host);
          return h || g
            ? { log: v("log", b), warn: v("warn", b), error: v("error", b) }
            : Hp(a, c);
        }),
        vd = w(Es, wb),
        tl = F("p.dc", function (a, c) {
          var b = O(c);
          Oi(a, "");
          Oi(a, b);
        }),
        wl = E(window, "h.p", function (a, c) {
          var b,
            d,
            e = wa(a, "h", c),
            f = c.Bc || "" + T(a).href,
            g = c.Xh || a.document.referrer,
            h = {
              J: Aa(((b = {}), (b.pv = 1), b)),
              G: ((d = {}), (d["page-url"] = f), (d["page-ref"] = g), d),
              V: {},
            };
          h.V.aa = c.aa;
          h.V.Ve = c.Ve;
          c.oc && h.G && (h.G.nohit = "1");
          return e(h, c)
            .then(function (k) {
              k &&
                (c.oc ||
                  Bb(
                    a,
                    c,
                    "PageView. Counter " +
                      c.id +
                      ". URL: " +
                      f +
                      ". Referrer: " +
                      g,
                    c.aa
                  )(),
                Ib(a, G([a, c, k], Jp)));
            })
            ["catch"](E(a, "h.g.s"));
        }),
        ud = w(xc, O),
        zl = F("p.ar", function (a, c) {
          var b = wa(a, "a", c);
          return function (d, e, f, g, h, k) {
            var l,
              m,
              p = { G: {}, J: Aa(((l = {}), (l.pv = 1), (l.ar = 1), l)) };
            if (d)
              return (
                (e = qb(e)
                  ? {
                      title: e.title,
                      dg: e.referer,
                      aa: e.params,
                      hb: e.callback,
                      l: e.ctx,
                    }
                  : { title: e, dg: f, aa: g, hb: h, l: k }),
                (f = ud(c)),
                f.url !== d && ((f.ref = f.url), (f.url = d)),
                (d = d || T(a).href),
                (f = e.dg || f.ref || a.document.referrer),
                (g = Bb(
                  a,
                  c,
                  "PageView. Counter " +
                    c.id +
                    ". URL: " +
                    d +
                    ". Referrer: " +
                    f,
                  e.aa
                )),
                (h = x(p.V || {}, { aa: e.aa, title: e.title })),
                (p = b(
                  x(p, {
                    V: h,
                    G: x(
                      p.G || {},
                      ((m = {}), (m["page-url"] = d), (m["page-ref"] = f), m)
                    ),
                  }),
                  c
                ).then(g)),
                Lc(a, "p.ar.s", p, e.hb || B, e.l)
              );
          };
        }),
        Oe = ha(function (a, c) {
          var b = {};
          Rf(a)(function (d) {
            b = d[c] || {};
          });
          return b;
        }),
        Fs = F("c.c.cc", function (a) {
          var c = L(a),
            b = u(Oe(a), function (d) {
              var e;
              return x(
                {},
                d,
                ((e = {}),
                (e.oldCode = !!a.ya_cid),
                (e.clickmap = !!d.clickmap),
                e)
              );
            });
          return E(a, "g.c.cc", u(D(c.o, c, "counters", {}), ba, fb(b)));
        }),
        vl = F("gt.c.rs", function (a, c) {
          var b,
            d = O(c),
            e = c.id,
            f = c.da,
            g = c.vh,
            h = c.Eb,
            k = c.Re,
            l = G([a, d], Gp);
          Ni(
            a,
            d,
            ((b = {}),
            (b.id = e),
            (b.type = +f),
            (b.clickmap = g),
            (b.webvisor = !!h),
            (b.trackHash = !!k),
            b)
          );
          return l;
        }),
        ak,
        Bl = F("th.e", function (a, c) {
          function b() {
            f ||
              (h = td(a, "onhashchange")
                ? ia(a).D(a, ["hashchange"], g)
                : lr(a, g));
          }
          var d = wa(a, "t", c),
            e = qe(a, O(c)),
            f = !1,
            g = E(a, "h.h.ch", D(mr, null, a, c, d)),
            h = B;
          c.Re && (b(), (f = !0));
          return {
            Qj: E(a, "tr.hs.h", function (k) {
              var l;
              k ? b() : h();
              f = !!k;
              e(((l = {}), (l.trackHash = f), l));
            }),
            unsubscribe: h,
          };
        }),
        nr = w(function (a) {
          if ((a = Za(a))) return a("a");
        }),
        bk = 1,
        Bg = {},
        He = {},
        Dl = F("nb.p", function (a, c) {
          function b(C) {
            k() ||
              ((C = "number" === typeof C ? C : 15e3),
              (C = or(a, d(!1), C)),
              (t = C.id),
              (y = C.lf),
              l());
          }
          function d(C) {
            return function (M) {
              var Q, ta, za;
              void 0 === M &&
                (M = ((Q = {}), (Q.ctx = {}), (Q.callback = B), Q));
              if (C || (!r && !h.Xd)) {
                r = !0;
                l();
                t &&
                  ((Q = t),
                  ye(a) ? ka(a, Q) : ((Bg[Q] = !0), ka(a, He[Q] || 0)));
                var Ub = m(Z);
                Q = (Fa(h.o("lastHit")) || 0) < Ub - 18e5;
                var Yc = 0.1 > Math.random();
                h.C("lastHit", Ub);
                Ub = Aa(
                  ((ta = {}), (ta.nb = "1"), (ta.cl = q), (ta.ar = "1"), ta)
                );
                ta = ud(c);
                ta = {
                  G: ((za = {}), (za["page-url"] = ta.url || T(a).href), za),
                  J: Ub,
                  V: { force: C },
                };
                za = Ld(a, O(c)).warn;
                !M.callback && M.ctx && za('"callback" argument missing');
                (za = C || Q || Yc) ||
                  ((za = a.location.href),
                  (Q = a.document.referrer),
                  (za = !(za && Q ? Mi(za) === Mi(Q) : !za && !Q)));
                if (za)
                  return (za = f(ta, c)), Lc(a, "l.o.l", za, M.callback, M.ctx);
              }
              return null;
            };
          }
          var e,
            f = wa(a, "n", c),
            g = O(c),
            h = Sc(a, c.id),
            k = v(v(g, Oe(a)), u(ja, V("accurateTrackBounce"))),
            l = v(((e = {}), (e.accurateTrackBounce = !0), e), qe(a, g)),
            m = ea(a),
            p = m(Z),
            r = !1,
            t = 0,
            q = 0,
            y;
          na(a, c, function (C) {
            q = C.Rh - p;
          });
          c.hc && b(c.hc);
          return { Zi: d(!0), hc: b, Dd: y };
        }),
        Rg = [
          "yandex_metrika_callback" + Qc.callbackPostfix,
          "yandex_metrika_callbacks" + Qc.callbackPostfix,
        ],
        Gs = F("cb.i", function (a) {
          var c = Rg[0],
            b = Rg[1];
          if (U(a[c])) a[c]();
          "object" === typeof a[b] &&
            z(function (d, e) {
              a[b][e] = null;
              Sf(a, d);
            }, a[b]);
          z(function (d) {
            try {
              delete a[d];
            } catch (e) {
              a[d] = void 0;
            }
          }, Rg);
        }),
        Qk = { Ek: Va(/[/&=?#]/) },
        Rd = F("go.in", function (a, c, b, d) {
          void 0 === b && (b = "goal");
          return function (e, f, g, h) {
            var k, l;
            if (!e || (Qk[b] && Qk[b](e))) return null;
            var m = f,
              p = g || B;
            U(f) && ((p = f), (m = void 0), (h = g));
            var r = Bb(
                a,
                c,
                "Reach goal. Counter: " + c.id + ". Goal id: " + e,
                m
              ),
              t = "goal" === b;
            f = wa(a, "g", c);
            var q = Fp(a, c, e, b);
            g = q[0];
            q = q[1];
            m = f(
              {
                V: { aa: m },
                J: Aa(((k = {}), (k.ar = 1), k)),
                G: ((l = {}), (l["page-url"] = g), (l["page-ref"] = q), l),
              },
              c
            ).then(function () {
              t && r();
              ib(a, { ea: O(c), name: "event", data: { $b: b, name: e } });
              d && d();
            });
            return Lc(a, "g.s", m, p, h);
          };
        }),
        Hs = ha(function (a, c) {
          Ia(c) ? a.push(c) : z(u(P, va("push", a)), c);
        }),
        Hl = F("cl.p", function (a, c) {
          function b(m, p, r, t) {
            void 0 === t && (t = {});
            r
              ? oe(a, c, {
                  url: r,
                  Qb: !0,
                  Lc: m,
                  Qc: p,
                  sender: d,
                  l: t.ctx,
                  hb: t.callback,
                  title: t.title,
                  aa: t.params,
                })
              : f.warn("Empty link");
          }
          var d = wa(a, "2", c),
            e = [],
            f = Ld(a, O(c)),
            g = O(c),
            h = E(a, "s.s.tr", v(qe(a, g), Ep));
          g = {
            l: a,
            ib: c,
            Ph: e,
            sender: d,
            globalStorage: L(a),
            zh: Sc(a, c.id),
            Fk: Yb(a),
            Rj: v(v(g, Oe(a)), u(ja, V("trackLinks"))),
          };
          g = E(a, "cl.p.c", v(g, Bp));
          g = ia(a).D(a, ["click"], g);
          c.kd && h(c.kd);
          var k = E(a, "file.clc", G([!0, !1], b)),
            l = E(a, "e.l.l.clc", G([!1, !0], b));
          e = E(a, "add.f.e.clc", Hs(e));
          return { file: k, Lh: l, dh: e, kd: h, Dd: g };
        }),
        yp = ha(rc)("(ym-disable-clickmap|ym-clickmap-ignore)"),
        Ml = F("clm.p", function (a, c) {
          if (bd(a)) return B;
          var b = wa(a, "m", c),
            d = O(c),
            e = ea(a),
            f = e(Z),
            g = v(v(d, Oe(a)), u(ja, V("clickmap"))),
            h,
            k = null;
          d = E(a, "clm.p.c", function (l) {
            var m = g();
            if (m) {
              var p = L(a),
                r = p.o("cls", { lc: 0, x: 0, y: 0 });
              p.C("cls", {
                lc: r.lc + 1,
                x: r.x + l.clientX,
                y: r.y + l.clientY,
              });
              p = "object" === typeof m ? m : {};
              r = p.filter;
              m = p.isTrackHash || !1;
              var t = A(function (y) {
                return ("" + y).toUpperCase();
              }, p.ignoreTags || []);
              W(h) && (h = p.quota || null);
              var q = !!p.quota;
              l = {
                element: zp(a, l),
                position: Ji(a, l),
                button: Ap(l),
                time: e(Z),
              };
              p = T(a).href;
              if (xp(a, l, k, t, r)) {
                if (q) {
                  if (!h) return;
                  --h;
                }
                t = ve(a, l.element);
                r = t[0];
                t = t[1];
                q = eg(a, l.element);
                r = [
                  "rn",
                  Ra(a),
                  "x",
                  Math.floor((65535 * (l.position.x - q.left)) / (r || 1)),
                  "y",
                  Math.floor((65535 * (l.position.y - q.top)) / (t || 1)),
                  "t",
                  Math.floor((l.time - f) / 100),
                  "p",
                  dg(a, l.element),
                  "X",
                  l.position.x,
                  "Y",
                  l.position.y,
                ];
                r = I(":", r);
                m && (r += ":wh:1");
                wp(a, p, r, b, c);
                k = l;
              }
            }
          });
          return ia(a).D(n(a, "document"), ["click"], d);
        }),
        Ta = u(ba, uc),
        Nl = F("c.m.p", function (a, c) {
          var b = O(c);
          return v(qe(a, b), vp);
        }),
        Ol = F("e.a.p", function (a, c) {
          var b = Ea(a, c);
          b = G(
            [
              u(P, ya(!0)),
              X(
                Boolean,
                A(v(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"])
              ),
            ],
            A
          );
          c.Gh && b();
          return b;
        }),
        Ql = F("s.f.i", function (a, c) {
          return na(a, c, function (b) {
            if (
              n(b, "settings.button_goals") ||
              -1 !== T(a).href.indexOf("yagoalsbuttons=1")
            )
              ia(a).D(
                a,
                ["click"],
                E(a, "c.t.c", u(V("target"), G([a, c], Pd(a, c, "", up))))
              ),
                Bb(a, c, "Button goal. Counter " + c.id + ". Init.")();
          });
        }),
        Tb = [],
        cb = [],
        Qd = [],
        zc = [],
        Ye = [],
        Rk = [],
        sp = "ar:1:pv:1:v:" + pa.gb + ":vf:" + Qc.version,
        tp = pa.Ta + "//" + tc + "/watch/" + pa.Rg,
        hh = v("form", Vb),
        gp = v("form", ub),
        Fi = w(function (a) {
          return I("[^\\d<>]*", a.split(""));
        }),
        Km = w(function (a) {
          return new RegExp(Fi(a), "g");
        }),
        np = /\S/,
        yi = v(
          [
            "style",
            "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit",
          ],
          Bc
        ),
        Sk = w(function (a) {
          a = T(a);
          a = Jq(a.search.substring(1));
          a["_ym_status-check"] = a["_ym_status-check"] || "";
          a._ym_lang = a._ym_lang || "ru";
          return a;
        }),
        ui = u(Sk, V("_ym_status-check"), Fa),
        Is = u(Sk, V("_ym_lang")),
        ti = Va(
          /^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/
        ),
        ip = ["form", "button", "phone", "status"],
        Sg = [],
        fp = w(
          function (a, c, b) {
            z(u(yd([a, c, b]), ja), Sg);
            b.inline
              ? ni(a, b)
              : b.resource &&
                ti(b.resource) &&
                ((a._ym__postMessageEvent = c),
                (a._ym__inpageMode = b.inpageMode),
                (a._ym__initMessage = b.initMessage),
                jp(a, b.resource));
          },
          function (a, c, b) {
            return b.id;
          }
        ),
        ep = [],
        cf = [],
        Js = F("p.fh", function (a, c) {
          var b, d;
          void 0 === c && (c = !0);
          var e = Qa(a),
            f = ea(a),
            g = e.o("wasSynced"),
            h = { id: 3, da: "0" };
          return c && g && g.time + 864e5 > f(Z)
            ? K.resolve(g)
            : wa(
                a,
                "f",
                h
              )(
                {
                  J: Aa(((b = {}), (b.pv = 1), b)),
                  G:
                    ((d = {}),
                    (d["page-url"] = T(a).href),
                    (d["page-ref"] = a.document.referrer),
                    d),
                },
                h
              )
                .then(function (k) {
                  var l;
                  k =
                    ((l = {}),
                    (l.time = f(Z)),
                    (l.params = n(k, "settings")),
                    (l.bkParams = n(k, "userData")),
                    l);
                  e.C("wasSynced", k);
                  return k;
                })
                ["catch"](E(a, "f.h"));
        }),
        Ks = ha(function (a, c) {
          0 === parseFloat(n(c, "settings.c_recp")) &&
            (a.fe.C("ymoo" + a.ea, a.Dg(kb)),
            a.zd && a.zd.destruct && a.zd.destruct());
        }),
        Wo = [
          [
            ["'(-$&$&$'", 30102, 0],
            ["'(-$&$&$'", 29009, 0],
          ],
          [
            ["oWdZ[nc[jh_YW$Yec", 30103, 1],
            ["oWdZ[nc[jh_YW$Yec", 29010, 1],
          ],
        ],
        Xo = [
          [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
          [["oWdZ[nc[jh_YW$Yec", 29010, 1]],
        ],
        mi = { G: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        ki = { id: 42822899, da: "0" },
        Pe,
        cp = ((Pe = {}), (Pe.s = "p"), (Pe["8"] = "i"), Pe),
        $o = vb("csp", function (a, c) {
          return wa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"]);
        }),
        Qe = "et w v z i u vf".split(" ");
      Qe.push("we");
      var Po = {
          L: "stamp",
          M: "frameId",
          Z: "meta",
          ef: "base",
          Hf: "hasBase",
          bf: "address",
          Hg: "ua",
          xe: "prev",
          Vf: "namespace",
          Oc: "keystrokes",
          Of: "isMeta",
          Pc: "modifier",
          xb: "pageWidth",
          wb: "pageHeight",
          xg: "startNode",
          nf: "endNode",
          Og: "zoomFrom",
          Qg: "zoomTo",
          level: "level",
          duration: "duration",
          Da: "i",
          Sc: "o",
          n: "n",
          r: "r",
          sc: "ct",
          Ib: "at",
          Wf: "nm",
          Xf: "ns",
          qe: "pa",
          ue: "pr",
          ke: "nx",
          Va: "h",
          Ja: "changes",
          af: "a",
          df: "b",
          sd: "c",
          pe: "op",
        },
        Qo = ["attributes", "attrs"],
        Re = (function () {
          function a(c) {
            this.l = c;
          }
          a.prototype.Ha = function (c) {
            var b = le(c);
            c = A(D(this.Oa, this), b);
            return wf(
              jb(
                this.l,
                A(function (d, e) {
                  var f;
                  return x({}, b[e], ((f = {}), (f.data = d), f));
                }, c)
              )
            );
          };
          a.prototype.Oa = function (c) {
            var b = c.data;
            "string" !== typeof b && (b = jb(this.l, le(c.data)));
            return b;
          };
          a.prototype.Ua = function (c) {
            return encodeURIComponent(c).length;
          };
          a.prototype.gd = function (c, b) {
            for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
              e.push(c.slice(f * d, d * (f + 1)));
            return e;
          };
          a.prototype.isEnabled = function () {
            return !!this.l.JSON;
          };
          return a;
        })(),
        No = w(function (a) {
          function c(f, g, h, k) {
            d[0] = g;
            h[k] = e[3];
            h[k + 1] = e[2];
            h[k + 2] = e[1];
            h[k + 3] = e[0];
          }
          function b(f, g, h, k) {
            d[0] = g;
            h[k] = e[0];
            h[k + 1] = e[1];
            h[k + 2] = e[2];
            h[k + 3] = e[3];
          }
          if (
            "undefined" === typeof a.Float32Array ||
            "undefined" === typeof a.Uint8Array
          )
            return Oo;
          var d = new Float32Array([-0]),
            e = new Uint8Array(d.buffer);
          return 128 === e[3] ? b : c;
        }),
        Jo = ii(!1),
        Io = ii(!0),
        Ls = {
          Lj: "topics",
          qj: "publicationDate",
          nj: "pageUrlCanonical",
          Xj: "updateDate",
          jh: "authors",
          gh: "articleInfo",
          wj: "rubric",
          rj: "publishersHeader",
          La: "involvedTime",
          mj: "pageTitle",
          Si: "maxScrolled",
          gf: "chars",
          hh: "articleMeta",
        },
        Ms = (function () {
          function a(c) {
            this.l = c;
            this.Rb = u(
              Ba,
              sd(function (b, d) {
                b[d[1]] = d[0];
                return b;
              }, {})
            )(Ls);
          }
          a.prototype.Bg = function (c) {
            var b,
              d = this.ve(c.data);
            return {
              L: ea(this.l)(qg),
              data: ((b = {}), (b[this.Rb[c.type]] = d), b),
            };
          };
          a.prototype.ve = function (c) {
            var b = this;
            return fa(c)
              ? A(D(this.ve, this), c)
              : qb(c)
              ? u(
                  Ba,
                  sd(function (d, e) {
                    var f = e[0];
                    d[b.Rb[f] || f] = b.ve(e[1]);
                    return d;
                  }, {})
                )(c)
              : c;
          };
          a.prototype.Oa = function (c) {
            return je(this.l, Mf, this.Bg(c))(Be(B));
          };
          a.prototype.Ua = function (c) {
            return c[0];
          };
          a.prototype.gd = function (c) {
            return [c];
          };
          a.prototype.Ha = function (c) {
            var b = this;
            c = je(this.l, bi, { buffer: A(D(this.Bg, this), c) });
            return jc(
              this.l,
              c,
              20,
              Ae
            )(
              Le(function (d) {
                d = Jf(b.l, d.slice(-4));
                return jc(b.l, d, 20, Ae);
              })
            )(
              Lg(function (d) {
                return d[d.length - 1];
              })
            );
          };
          a.prototype.isEnabled = function () {
            return ai(this.l);
          };
          return a;
        })(),
        Tk = (function () {
          function a(c, b, d) {
            this.kf = 0;
            this.te = 1;
            this.od = 5e3;
            this.l = c;
            this.ya = b;
            this.Ie = d;
          }
          a.prototype.fd = function () {
            this.kf = Y(
              this.l,
              u(D(this.flush, this), D(this.fd, this)),
              this.od,
              "b.f"
            );
          };
          a.prototype.send = function (c, b) {
            var d = this.Ie(c, b || [], this.te);
            this.te += 1;
            return d;
          };
          a.prototype.push = function () {};
          a.prototype.flush = function () {};
          return a;
        })(),
        Tg,
        Ug =
          ((Tg = (function (a) {
            function c(b, d, e, f) {
              void 0 === f && (f = 0);
              d = a.call(this, b, d, e) || this;
              d.Qe = 0;
              d.Gb = 0;
              d.Pe = 0;
              d.buffer = [];
              d.od = 2e3;
              d.$ = gd(b);
              d.fd();
              d.Pe = f;
              return d;
            }
            Ha(c, a);
            c.prototype.zf = function (b) {
              return X(Boolean, this.$.O("ag", b));
            };
            c.prototype.yf = function (b, d) {
              var e = this;
              b(
                Ua(E(this.l, "wv2.b.st"), function (f) {
                  e.send(f, d);
                })
              );
            };
            c.prototype.Dj = function (b, d) {
              var e = this;
              ka(this.l, this.kf);
              var f = Math.ceil(this.ya.Ua(d) / 63e4),
                g = this.ya.gd(d, f);
              z(function (h, k) {
                var l,
                  m = x(
                    {},
                    b,
                    ((l = {}),
                    (l.data = h),
                    (l.partNum = k + 1),
                    (l.end = k + 1 === f),
                    l)
                  );
                l = e.ya.Ha([m], !1);
                e.yf(l, [m]);
              }, g);
              this.fd();
            };
            c.prototype.send = function (b, d) {
              var e = this;
              this.$.O("se", d);
              return a.prototype.send.call(this, b, d).then(P, function () {
                e.$.O("see", d);
              });
            };
            c.Ld = function (b, d, e, f, g) {
              c.qd["" + b + d] ||
                (this.qd[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
              return this.qd[d];
            };
            c.prototype.Mi = function () {
              return this.Pe && this.Qe >= this.Pe;
            };
            c.prototype.push = function (b) {
              var d = this;
              if (!this.Mi()) {
                this.$.O("p", b);
                var e = this.ya.Oa(b),
                  f = this.ya.Ua(e);
                7e5 < f
                  ? this.Dj(b, e)
                  : ((e = this.zf(this.buffer.concat([b]))),
                    (e = N(
                      function (g, h) {
                        return g + d.ya.Ua(d.ya.Oa(h));
                      },
                      0,
                      e
                    )),
                    this.Gb + e + f >= 7e5 * 0.7 && this.flush(),
                    this.buffer.push(b),
                    (this.Gb += f));
              }
            };
            c.prototype.D = function (b, d) {
              this.$.D([b], d);
            };
            c.prototype.ia = function (b, d) {
              this.$.ia([b], d);
            };
            c.prototype.flush = function () {
              var b = this.buffer.concat(this.zf(this.buffer));
              if (b.length) {
                this.buffer = [];
                this.Qe += this.Gb;
                this.Gb = 0;
                var d = this.ya.Ha(b);
                this.yf(d, b);
              }
            };
            return c;
          })(Tk)),
          (Tg.qd = {}),
          Tg),
        Md,
        Vg = ((Md = {}), (Md[1] = 500), (Md[2] = 500), (Md[3] = 0), Md),
        Wg = (function () {
          function a(c, b) {
            var d,
              e = this;
            this.id = "a";
            this.Wd = !1;
            this.Mb = {};
            this.zb = {
              "schema.org":
                "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                  " "
                ),
              Zf: ["article"],
            };
            this.Te = ((d = {}), (d.Answer = 3), (d.Review = 2), d);
            this.xh = w(function (f, g) {
              pb(
                e.l,
                e.ea,
                "Warning: content has only " +
                  g.chars +
                  " chars. Required " +
                  Vg[g.type],
                g
              );
            });
            this.l = c;
            this.root = Xb(c);
            this.ea = b;
          }
          a.prototype.Ka = function (c) {
            return c.element;
          };
          a.prototype.Af = function (c, b) {
            var d = this,
              e;
            E(this.l, "P.s." + b, function () {
              e = d.Mb[b].call(d, c);
            })();
            return e;
          };
          a.prototype.pj = function (c) {
            var b = x({}, c);
            this.Wd &&
              !b.id &&
              H(c.type, [3, 2]) &&
              ((c = I(", ", A(V("name"), b.authors || []))),
              (b.pageTitle = c + ": " + b.pageTitle));
            b.pageTitle || (b.pageTitle = this.ri(b.nc));
            b.pageUrlCanonical ||
              ((c = b.id),
              (b.pageUrlCanonical = (
                "string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)
              )
                ? b.id
                : this.mi()));
            b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
            return b;
          };
          a.prototype.Ca = function (c) {
            var b = this,
              d = {},
              e = this.Ka(c);
            if (!e) return null;
            d.type = c.type;
            z(function (g) {
              d[g] = b.Af(c, g);
            }, ba(this.Mb));
            var f = ea(this.l);
            d.stamp = f(qg);
            d.element = c.element;
            d.nc = e;
            d = this.pj(d);
            d.id = d.id ? mc(d.id) : 1;
            d.update = function (g) {
              return b.Ka(c) ? b.Af(c, g) : void 0;
            };
            return d;
          };
          a.prototype.ri = function (c) {
            for (var b = 1; 5 >= b; b += 1) {
              var d = Xa(Jc("h" + b, c));
              if (d) return d;
            }
          };
          a.prototype.mi = function () {
            var c = Jc('[rel="canonical"]', this.root);
            if (c) return c.href;
          };
          a.prototype.Ff = function () {
            return 1;
          };
          a.prototype.Ac = function () {
            return [];
          };
          a.prototype.Qh = function () {
            var c = this,
              b = this.Ac(),
              d = 1;
            return N(
              function (e, f) {
                var g = c.Ca({ element: f, type: c.Ff(f) }) || [];
                fa(g) || (g = [g]);
                g = N(
                  function (h, k) {
                    var l = h.values,
                      m = h.If;
                    k && k.chars > Vg[k.type] && !H(k.id, m)
                      ? (l.push(k), m.push(k.id))
                      : k && k.chars <= Vg[k.type] && c.xh(k.id, k);
                    return { values: l, If: m };
                  },
                  { values: [], If: A(V("id"), e) },
                  g
                ).values;
                return e.concat(
                  A(function (h) {
                    var k;
                    h = x(
                      ((k = { index: d, sg: !1 }), (k.involvedTime = 0), k),
                      h
                    );
                    d += 1;
                    return h;
                  }, g)
                );
              },
              [],
              b
            );
          };
          return a;
        })(),
        Uk = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "j";
            d.Wd = !0;
            d.jf = I(",", [
              'script[type="application/ld+json"]',
              'script[type="application/json+ld"]',
              'script[type="ld+json"]',
              'script[type="json+ld"]',
            ]);
            d.Mb =
              ((b = {}),
              (b.id = function (e) {
                var f = e.data["@id"];
                e = e.data.mainEntity || e.data.mainEntityOfPage;
                !f && e && (f = e["@id"]);
                return f;
              }),
              (b.chars = function (e) {
                return "string" === typeof e.data.text
                  ? e.data.text.length
                  : Qb(this.Ka(e)).length;
              }),
              (b.authors = function (e) {
                var f = [];
                f = f.concat(this.zc(e.data, "author"));
                f = f.concat(this.zc(e.data.mainEntity, "author"));
                return f.concat(this.zc(e.data.mainEntityOfPage, "author"));
              }),
              (b.pageTitle = function (e) {
                var f = e.data.headline || "";
                e.data.qk && (f += " " + e.data.alternativeHeadline);
                "" === f &&
                  (e.data.name
                    ? (f = e.data.name)
                    : e.data.itemReviewed && (f = e.data.itemReviewed));
                3 === e.type &&
                  e.data.parentItem &&
                  (f = e.data.parentItem.text);
                return f;
              }),
              (b.updateDate = function (e) {
                return e.data.dateModified || "";
              }),
              (b.publicationDate = function (e) {
                return e.data.datePublished || "";
              }),
              (b.pageUrlCanonical = function (e) {
                return e.data.url;
              }),
              (b.topics = function (e) {
                return this.zc(e.data, "about", ["name", "alternateName"]);
              }),
              (b.rubric = function (e) {
                var f = this,
                  g = this.Ka(e);
                e = X(
                  Boolean,
                  A(function (h) {
                    if ((h = Db(f.l, Qb(h)))) {
                      var k = f.Bf(h);
                      if (k)
                        return N(
                          function (l, m) {
                            return l
                              ? l
                              : "BreadcrumbList" === m["@type"]
                              ? m
                              : l;
                          },
                          null,
                          k
                        );
                      if ("BreadcrumbList" === h["@type"]) return h;
                    }
                    return null;
                  }, [e.element].concat(
                    ub(
                      this.jf,
                      document.body === g ? document.documentElement : g
                    )
                  ))
                );
                return e.length && ((e = e[0].itemListElement), fa(e))
                  ? X(
                      Boolean,
                      A(function (h) {
                        return h.item && !f.l.isNaN(h.position)
                          ? {
                              name: h.item.name || h.name,
                              position: h.position,
                            }
                          : null;
                      }, e)
                    )
                  : [];
              }),
              b);
            return d;
          }
          Ha(c, a);
          c.prototype.zc = function (b, d, e) {
            void 0 === e && (e = ["name"]);
            if (!b || !b[d]) return [];
            b = fa(b[d]) ? b[d] : [b[d]];
            b = X(
              P,
              A(function (f) {
                return f
                  ? "string" === typeof f
                    ? f
                    : N(
                        function (g, h) {
                          return g || "" + f[h];
                        },
                        "",
                        e
                      )
                  : null;
              }, b)
            );
            return A(function (f) {
              var g;
              return (g = {}), (g.name = f), g;
            }, b);
          };
          c.prototype.Ka = function (b) {
            var d = b.element,
              e = b.data["@id"],
              f = b.data.url;
            b = null;
            f && "string" === typeof f && (b = this.tf(f));
            !b && e && "string" === typeof e && (b = this.tf(e));
            b ||
              ((b = e = d.parentNode),
              !Vb("head", this.l, d) && e && 0 !== Qb(e).length) ||
              (b = this.l.document.body);
            return b;
          };
          c.prototype.tf = function (b) {
            try {
              var d = Kc(this.l, b).hash;
              if (d) {
                var e = Jc(d, this.l.document.body);
                if (e) return e;
              }
            } catch (f) {}
            return null;
          };
          c.prototype.se = function (b) {
            return this.Te[b["@type"]] || 1;
          };
          c.prototype.Ca = function (b) {
            var d = this,
              e = b.element;
            if (
              !b.data &&
              ((b.data = Db(this.l, Qb(e))),
              !b.data ||
                (!/schema\.org/.test(b.data["@context"]) && !fa(b.data)))
            )
              return null;
            var f = this.Bf(b.data);
            if (f)
              return A(function (h) {
                if (!H(h["@type"], d.zb["schema.org"])) return null;
                h = { element: e, data: h, type: d.se(h) };
                return a.prototype.Ca.call(d, h);
              }, f);
            if ("QAPage" === b.data["@type"]) {
              var g = b.data.mainEntity || b.data.mainEntityOfPage;
              if (!g) return null;
            }
            "Question" === b.data["@type"] && (g = b.data);
            return g
              ? ((b = kc(v(g, n), ["acceptedAnswer", "suggestedAnswer"])),
                A(function (h) {
                  var k;
                  if (!h || !H(h["@type"], d.zb["schema.org"])) return null;
                  h = {
                    element: e,
                    type: d.se(h),
                    data: x(((k = {}), (k.parentItem = g), k), h),
                  };
                  return a.prototype.Ca.call(d, h);
                }, b))
              : H(b.data["@type"], this.zb["schema.org"])
              ? a.prototype.Ca.call(this, x(b, { type: this.se(b.data) }))
              : null;
          };
          c.prototype.Ac = function () {
            return ub(this.jf, this.root);
          };
          c.prototype.Bf = function (b) {
            return (fa(b) && b) || (b && fa(b["@graph"]) && b["@graph"]);
          };
          return c;
        })(Wg),
        Xg = (function (a) {
          function c() {
            var b,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "s";
            d.Wd = !0;
            d.Uj = va(
              "exec",
              new RegExp("schema.org\\/(" + I("|", ba(d.Te)) + ")$")
            );
            d.Mb =
              ((b = {}),
              (b.id = function (e) {
                e = e.element;
                var f = ab(this.l, e, "identifier");
                return f
                  ? Xa(f)
                  : (f = ab(this.l, e, "mainEntityOfPage")) &&
                    f.getAttribute("itemid")
                  ? f.getAttribute("itemid")
                  : null;
              }),
              (b.chars = function (e) {
                var f = 0;
                e = e.element;
                for (
                  var g = [
                      "articleBody",
                      "reviewBody",
                      "recipeInstructions",
                      "description",
                      "text",
                    ],
                    h = 0;
                  h < g.length;
                  h += 1
                ) {
                  var k = ab(this.l, e, g[h]);
                  if (k) {
                    f = Xa(k).length;
                    break;
                  }
                }
                e = Qb(e);
                0 === f && e && (f += e.length);
                return f;
              }),
              (b.topics = function (e) {
                var f = this,
                  g = Id(this.l, e.element, "about");
                return A(function (h) {
                  var k = { name: Xa(h) };
                  if ((g = ab(f.l, h, "name"))) k.name = Xa(g);
                  return k;
                }, g);
              }),
              (b.rubric = function (e) {
                var f = this;
                (e = Jc(
                  '[itemtype$="schema.org/BreadcrumbList"]',
                  e.element
                )) ||
                  (e = Jc(
                    '[itemtype$="schema.org/BreadcrumbList"]',
                    this.root
                  ));
                return e
                  ? A(function (g) {
                      return {
                        name: Xa(ab(f.l, g, "name")),
                        position: Xa(ab(f.l, g, "position")),
                      };
                    }, Id(this.l, e, "itemListElement"))
                  : [];
              }),
              (b.updateDate = function (e) {
                return (e = ab(this.l, e.element, "dateModified")) ? dk(e) : "";
              }),
              (b.publicationDate = function (e) {
                return (e = ab(this.l, e.element, "datePublished"))
                  ? dk(e)
                  : "";
              }),
              (b.pageUrlCanonical = function (e) {
                e = Id(this.l, e.element, "url");
                if (e.length) {
                  var f = e[0];
                  return f.href ? f.href : Xa(e);
                }
                return null;
              }),
              (b.pageTitle = function (e) {
                var f = "",
                  g = e.element,
                  h = ab(this.l, g, "headline");
                h && (f += Xa(h));
                (h = ab(this.l, g, "alternativeHeadline")) &&
                  (f += " " + Xa(h));
                "" === f &&
                  ((h = ab(this.l, g, "name")) ||
                    (h = ab(this.l, g, "itemReviewed")),
                  h && (f += Xa(h)));
                3 === e.type &&
                  (e = Vb('[itemtype$="schema.org/Question"]', this.l, g)) &&
                  (e = ab(this.l, e, "text")) &&
                  (f += Xa(e));
                return f;
              }),
              (b.authors = function (e) {
                var f = this;
                e = Id(this.l, e.element, "author");
                return A(function (g) {
                  var h,
                    k = ((h = {}), (h.name = ""), h);
                  /.+schema.org\/(Person|Organization)/.test(
                    g.getAttribute("itemtype") || ""
                  ) &&
                    (h = ab(f.l, g, "name")) &&
                    (k.name = Xa(h));
                  k.name ||
                    (k.name =
                      g.getAttribute("content") ||
                      Qb(g) ||
                      g.getAttribute("href"));
                  return k;
                }, e);
              }),
              b);
            return d;
          }
          Ha(c, a);
          c.prototype.Ff = function (b) {
            b = b.getAttribute("itemtype") || "";
            return (b = this.Uj(b)) ? this.Te[b[1]] : 1;
          };
          c.prototype.Ca = function (b) {
            return b.element && Qb(b.element).length
              ? a.prototype.Ca.call(this, b)
              : null;
          };
          c.prototype.Ac = function () {
            var b = I(
              ",",
              A(function (d) {
                return '[itemtype$="schema.org/' + d + '"]';
              }, this.zb["schema.org"])
            );
            return ub(b, this.root);
          };
          return c;
        })(Wg),
        Vk = (function (a) {
          function c(b, d) {
            var e,
              f = a.call(this, b, d) || this;
            f.id = "o";
            f.Mb =
              ((e = {}),
              (e.chars = function (g) {
                g = this.Ka(g);
                return Qb(g).length;
              }),
              (e.authors = function (g) {
                return this.Kd(g.data.author);
              }),
              (e.pageTitle = function (g) {
                return this.Gc(g.data.title) || "";
              }),
              (e.updateDate = function (g) {
                return this.Gc(g.data.modified_time);
              }),
              (e.publicationDate = function (g) {
                return this.Gc(g.data.published_time);
              }),
              (e.pageUrlCanonical = function (g) {
                return this.Gc(g.data.url);
              }),
              (e.rubric = function (g) {
                return this.Kd(g.data.section);
              }),
              (e.topics = function (g) {
                return this.Kd(g.data.tag);
              }),
              e);
            f.Hh = new RegExp("^(og:)?((" + I("|", f.zb.Zf) + "):)?");
            return f;
          }
          Ha(c, a);
          c.prototype.Kd = function (b) {
            var d;
            return b
              ? fa(b)
                ? A(function (e) {
                    var f;
                    return (f = {}), (f.name = e), f;
                  }, b)
                : [((d = {}), (d.name = b), d)]
              : [];
          };
          c.prototype.Gc = function (b) {
            return fa(b) ? (b.length ? b[0] : null) : b;
          };
          c.prototype.Ac = function () {
            var b = ub('meta[property="og:type"]', this.l.document.body);
            return [this.l.document.head].concat(b);
          };
          c.prototype.ei = function (b) {
            var d = this,
              e = b.element,
              f = {},
              g = this.Ka(b);
            e = ub("meta[property]", e === this.l.document.head ? e : g);
            if (e.length)
              z(function (h) {
                try {
                  if (
                    h.parentNode === g ||
                    h.parentNode === d.l.document.head
                  ) {
                    var k = h.getAttribute("property").replace(d.Hh, ""),
                      l = Xa(h);
                    f[k]
                      ? fa(f[k])
                        ? f[k].push(l)
                        : (f[k] = [f[k], l])
                      : (f[k] = l);
                  }
                } catch (m) {
                  ne(d.l, "og.ed", m);
                }
              }, e);
            else return null;
            return H(f.type, this.zb.Zf) ? x(b, { data: f }) : null;
          };
          c.prototype.Ka = function (b) {
            b = b.element;
            var d = this.l.document;
            return b === d.head ? d.body : b.parentNode;
          };
          c.prototype.Ca = function (b) {
            return (b = this.ei(b)) ? a.prototype.Ca.call(this, b) : null;
          };
          return c;
        })(Wg),
        Wk =
          "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
            " "
          ),
        Ns =
          "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(
            " "
          ),
        Os = (function () {
          function a(c, b, d, e) {
            this.Mc = !1;
            this.Z = {};
            this.scroll = { x: 0, y: 0 };
            this.La = this.Tf = 0;
            this.ie = this.ag = "";
            this.ha = [];
            this.Qa = 0;
            this.Db = { Va: 0, Xe: 0 };
            this.Sg = Ns;
            this.buffer = d;
            this.fc = D(this.fc, this);
            this.Cc = D(this.Cc, this);
            this.Tc = D(this.Tc, this);
            this.l = c;
            this.ea = e;
            this.$b = b;
            this.ae = "pai" + b.id;
            this.Nb();
            this.qf = ia(this.l);
            this.time = ea(this.l);
            this.Ig();
            this.Rd = L(this.l);
          }
          a.prototype.start = function () {
            var c = this;
            if (!this.Mc) {
              this.buffer.D("ag", this.Cc);
              this.buffer.D("se", this.Tc);
              this.Fj();
              var b = this.Rd.o(this.ae, []),
                d = !b.length;
              b.push(D(this.Oi, this));
              this.Rd.Pa(this.ae, b);
              d && this.jg();
              var e = function (f, g) {
                return (f.Fe || 0) <= (g.Fe || 0) ? g : f;
              };
              ia(this.l).D(this.l, ["click"], function (f) {
                if (c.ha.length) {
                  f = Ki(f);
                  var g = T(c.l).hostname,
                    h;
                  if ((h = f)) h = pe(f.hostname) === pe(g);
                  h &&
                    ((f = N(e, c.ha[0], c.ha).id),
                    (g = Yb(c.l)),
                    Sc(c.l, c.ea.split(":")[0]).C("pai", f + "-" + g));
                }
              });
              this.fc({ type: "page", target: this.l });
            }
          };
          a.prototype.stop = function () {
            this.buffer.ia("se", this.Tc);
            this.buffer.ia("ag", this.Cc);
            this.Vj();
            this.Mc = !0;
          };
          a.prototype.Qf = function (c) {
            return Vb("html", this.l, c) !== this.l.document.documentElement;
          };
          a.prototype.jg = function () {
            var c = this;
            E(this.l, "p.ic" + this.$b.id, function () {
              if (!c.Mc) {
                var b = c.Rd.o(c.ae),
                  d = c.$b.Qh();
                z(function (e) {
                  var f = A(function (g) {
                    return x({}, g);
                  }, d);
                  U(e) && e(f);
                }, b);
                c.Qa = Y(c.l, D(c.jg, c), 1e3, "p");
              }
            })();
          };
          a.prototype.Oi = function (c) {
            this.Mc || (this.Wj(c), this.Yj(), this.Aj());
          };
          a.prototype.fc = function (c) {
            var b = this;
            E(this.l, "p.ec." + this.$b.id, function () {
              try {
                var d = c.type;
                var e = c.target;
              } catch (l) {
                return;
              }
              var f = "page" === d;
              if ("scroll" === d || f) {
                var g = [
                  b.l,
                  b.l.document,
                  b.l.document.documentElement,
                  vc(b.l),
                ];
                H(e, g) && b.Nb();
              }
              ("resize" === d || f) && b.Ig();
              d = b.time(Z);
              var h = Math.min(d - b.Tf, 5e3);
              b.La += Math.round(h);
              b.Tf = d;
              if (b.Z && b.scroll && b.Db) {
                var k = b.Db.Va * b.Db.Xe;
                b.ha = A(function (l) {
                  var m = x({}, l),
                    p = b.Z[m.id],
                    r = jd(l.nc);
                  if (!p || b.Qf(m.element) || !r) return m;
                  l = b.l.Math;
                  p = l.max((b.scroll.y + b.Db.Va - p.y) / p.height, 0);
                  var t = r.height * r.width;
                  r = b.nh(r);
                  m.Fe = r / k;
                  m.visibility = r / t;
                  if (0.9 <= m.visibility || 0.1 <= m.Fe) m.involvedTime += h;
                  m.maxScrolled = l.round(1e4 * p) / 1e4;
                  return m;
                }, b.ha);
                ib(b.l, {
                  name: "publishers",
                  ea: b.ea,
                  data: { La: b.La, ha: b.ha },
                });
              }
            })();
          };
          a.prototype.nh = function (c) {
            var b = c.top,
              d = c.bottom,
              e = c.left,
              f = this.Db,
              g = f.Xe;
            f = f.Va;
            var h = this.l.Math;
            c = h.min(h.max(c.right, 0), g) - h.min(h.max(e, 0), g);
            return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c;
          };
          a.prototype.Wj = function (c) {
            var b = A(function (d) {
              return d.id;
            }, this.ha);
            this.ha = this.ha.concat(
              X(function (d) {
                return !H(d.id, b);
              }, c)
            );
          };
          a.prototype.Ig = function () {
            var c = fg(this.l) || Bd(this.l);
            this.Db = { Xe: c[0], Va: c[1] };
          };
          a.prototype.Yj = function () {
            var c = this;
            E(this.l, "p.um." + this.$b.id, function () {
              var b = [];
              c.Nb();
              c.Z = N(
                function (d, e) {
                  var f;
                  if (c.Qf(e.element)) b.push(e), delete d[e.id];
                  else {
                    var g =
                      ((f = {}),
                      (f.id = e.id),
                      (f.involvedTime = Math.max(e.involvedTime, 0)),
                      (f.maxScrolled = e.maxScrolled || 0),
                      (f.chars = e.update ? e.update("chars") || 0 : 0),
                      f);
                    e.nc &&
                      (f = jd(e.nc)) &&
                      ((g.x = Math.max(Math.round(f.left) + c.scroll.x, 0)),
                      (g.y = Math.max(Math.round(f.top) + c.scroll.y, 0)),
                      (g.width = Math.round(f.width)),
                      (g.height = Math.round(f.height)));
                    d[e.id] = g;
                  }
                  return d;
                },
                {},
                c.ha
              );
              z(function (d) {
                d = Je(c.l)(d, c.ha);
                c.ha.splice(d, 1);
              }, b);
            })();
          };
          a.prototype.Tc = function () {
            this.ag = this.ie;
          };
          a.prototype.Cc = function () {
            var c,
              b,
              d = A(v(this.Z, n), ba(this.Z));
            return d.length && ((this.ie = jb(this.l, d)), this.ag !== this.ie)
              ? ((c = {}),
                (c.type = "publishersHeader"),
                (c.data =
                  ((b = {}),
                  (b.articleMeta = d || []),
                  (b.involvedTime = this.La),
                  b)),
                c)
              : null;
          };
          a.prototype.Aj = function () {
            var c = this;
            if (this.ha.length) {
              var b = X(function (d) {
                return !d.sg;
              }, this.ha);
              z(function (d) {
                var e,
                  f = N(
                    function (g, h) {
                      d[h] && (g[h] = d[h]);
                      return g;
                    },
                    {},
                    c.Sg
                  );
                c.buffer.push(
                  ((e = {}),
                  (e.type = "articleInfo"),
                  (e.stamp = f.stamp),
                  (e.data = f),
                  e)
                );
                d.sg = !0;
              }, b);
              b.length &&
                pb(this.l, this.ea, "Publisher content info found: ", b);
            }
          };
          a.prototype.Fj = function () {
            this.qf.D(this.l, Wk, this.fc);
          };
          a.prototype.Vj = function () {
            this.qf.dc(this.l, Wk, this.fc);
          };
          a.prototype.Nb = function () {
            this.scroll = {
              x:
                this.l.pageXOffset ||
                n(this.l, "document.documentElement.scrollLeft") ||
                0,
              y:
                this.l.pageYOffset ||
                n(this.l, "document.documentElement.scrollLeft") ||
                0,
            };
          };
          return a;
        })(),
        Nd = {};
      Uk && (Nd.json_ld = Uk);
      Xg && ((Nd.schema = Xg), (Nd.microdata = Xg));
      Vk && (Nd.opengraph = Vk);
      var Ps = F("p.p", function (a, c) {
          function b(l, m, p) {
            var r = x({}, k);
            r.ba.fa = l;
            r.Na.hf = $h(m);
            return e(x({}, r), c, p)["catch"](E(a, "s.ww.p"));
          }
          if (!Ca("querySelectorAll", a.document.querySelectorAll))
            return K.resolve();
          var d = [new Re(a)];
          d.unshift(new Ms(a));
          var e = wa(a, "p", c),
            f = $a(function (l) {
              return l.isEnabled();
            }, d);
          d = Aa();
          var g = Sc(a, c.id),
            h = g.o("pai");
          h && (g.vc("pai"), d.C("pai", h));
          var k = { G: {}, J: d, Na: { Mf: !(f instanceof Re) }, ba: {} };
          return na(
            a,
            c,
            E(a, "ps.s", function (l) {
              if ((l = n(l, "settings.publisher.schema"))) {
                l = Lj(c) ? "microdata" : l;
                var m = Nd[l];
                if (m && f) {
                  var p = O(c),
                    r = Ug.Ld(p, "e", b, f, a);
                  m = new m(a, p);
                  new Os(a, m, r, p).start();
                  pb(a, p, 'Publishers analytics schema "' + l + '"');
                }
              }
            })
          );
        }),
        Qs = (function () {
          function a(c, b) {
            this.l = c;
            this.ai = b;
          }
          a.prototype.Ha = function (c) {
            return wf(kc(D(this.Oa, this), c));
          };
          a.prototype.Oa = function (c, b) {
            var d = this,
              e = [],
              f = this.ai(this.l, b && b.type, c.type);
            f &&
              (e = kc(function (g) {
                return g({ l: d.l, qa: c }) || [];
              }, f));
            return e;
          };
          a.prototype.Ua = function (c) {
            return c.length;
          };
          a.prototype.gd = function (c) {
            return [c];
          };
          a.prototype.isEnabled = function () {
            return !0;
          };
          return a;
        })(),
        Cn = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.buffer = [];
            b.Tg = 7500;
            b.od = 3e4;
            b.fd();
            return b;
          }
          Ha(c, a);
          c.prototype.push = function (b, d) {
            var e = this.ya.Oa(b, d);
            Ma(this.buffer, e);
            this.ya.Ua(this.buffer) > this.Tg && this.flush();
          };
          c.prototype.flush = function () {
            var b = this.buffer;
            b.length && (this.send(b), (this.buffer = []));
          };
          return c;
        })(Tk),
        Tn = /opera mini/i,
        Xk =
          "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(
            " "
          ),
        Jn = ["email", "tel"],
        Rn = /ym-hide-content/,
        Sn = /ym-show-content/,
        On = /^[\w\u0410-\u042f\u0430-\u044f]$/,
        Pn = [65, 90],
        Qn = [97, 122],
        Mn =
          "color radio checkbox date datetime-local email month number password range search tel text time url week".split(
            " "
          ),
        Kn = new RegExp("(" + I("|", Xk) + ")", "i"),
        ek = ["password", "passwd", "pswd"],
        Ln = new RegExp(
          "(" +
            I(
              "|",
              Xk.concat(
                "\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                  " "
                )
              )
            ) +
            ")",
          "i"
        ),
        Sa = "metrikaId_" + Math.random(),
        qc = { yd: 0 },
        sr = w(function () {
          var a;
          return (
            (a = {}),
            (a.A = 1),
            (a.ABBR = 2),
            (a.ACRONYM = 3),
            (a.ADDRESS = 4),
            (a.APPLET = 5),
            (a.AREA = 6),
            (a.B = 7),
            (a.BASE = 8),
            (a.BASEFONT = 9),
            (a.BDO = 10),
            (a.BIG = 11),
            (a.BLOCKQUOTE = 12),
            (a.BODY = 13),
            (a.BR = 14),
            (a.BUTTON = 15),
            (a.CAPTION = 16),
            (a.CENTER = 17),
            (a.CITE = 18),
            (a.CODE = 19),
            (a.COL = 20),
            (a.COLGROUP = 21),
            (a.DD = 22),
            (a.DEL = 23),
            (a.DFN = 24),
            (a.DIR = 25),
            (a.DIV = 26),
            (a.DL = 27),
            (a.DT = 28),
            (a.EM = 29),
            (a.FIELDSET = 30),
            (a.FONT = 31),
            (a.FORM = 32),
            (a.FRAME = 33),
            (a.FRAMESET = 34),
            (a.H1 = 35),
            (a.H2 = 36),
            (a.H3 = 37),
            (a.H4 = 38),
            (a.H5 = 39),
            (a.H6 = 40),
            (a.HEAD = 41),
            (a.HR = 42),
            (a.HTML = 43),
            (a.I = 44),
            (a.IFRAME = 45),
            (a.IMG = 46),
            (a.INPUT = 47),
            (a.INS = 48),
            (a.ISINDEX = 49),
            (a.KBD = 50),
            (a.LABEL = 51),
            (a.LEGEND = 52),
            (a.LI = 53),
            (a.LINK = 54),
            (a.MAP = 55),
            (a.MENU = 56),
            (a.META = 57),
            (a.NOFRAMES = 58),
            (a.NOSCRIPT = 59),
            (a.OBJECT = 60),
            (a.OL = 61),
            (a.OPTGROUP = 62),
            (a.OPTION = 63),
            (a.P = 64),
            (a.PARAM = 65),
            (a.PRE = 66),
            (a.Q = 67),
            (a.S = 68),
            (a.SAMP = 69),
            (a.SCRIPT = 70),
            (a.SELECT = 71),
            (a.SMALL = 72),
            (a.SPAN = 73),
            (a.STRIKE = 74),
            (a.STRONG = 75),
            (a.STYLE = 76),
            (a.SUB = 77),
            (a.SUP = 78),
            (a.TABLE = 79),
            (a.TBODY = 80),
            (a.TD = 81),
            (a.TEXTAREA = 82),
            (a.TFOOT = 83),
            (a.TH = 84),
            (a.THEAD = 85),
            (a.TITLE = 86),
            (a.TR = 87),
            (a.TT = 88),
            (a.U = 89),
            (a.UL = 90),
            (a.VAR = 91),
            (a.NOINDEX = 100),
            a
          );
        }),
        pr = [17, 18, 38, 32, 39, 15, 11, 7, 1],
        Rs = (function () {
          var a =
            "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
              " "
            );
          return {
            Ck: new RegExp("(" + I("|", a) + ")", "i"),
            Nk: new RegExp(
              "(" +
                I(
                  "|",
                  a.concat(
                    "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                      ";"
                    )
                  )
                ) +
                ")",
              "i"
            ),
            Ak: /ym-record-keys/i,
            aj: "\u2022",
            Mk: 88,
          };
        })(),
        jk = fb(v(Rs.aj, P)),
        md = !0,
        Eg = "",
        Fg = !1,
        Gg = !0,
        Hg = !1,
        Hn = ha(function (a, c) {
          var b = G([a, "efv." + c.event], E);
          c.N = A(u(P, b), c.N);
          return c;
        }),
        Yk = w(function (a) {
          var c = [],
            b = [],
            d = [];
          a.document.attachEvent &&
            !a.opera &&
            (c.push(Cf), b.push(wr), b.push(xr));
          a.document.addEventListener ? c.push(hk) : (b.push(gk), d.push(hk));
          c = ua(
            [
              { target: a, type: "window", event: "beforeunload", N: [B] },
              { target: a, type: "window", event: "unload", N: [B] },
              { event: "click", N: [Ie] },
              { event: "dblclick", N: [Ie] },
              { event: "mousedown", N: [Ie] },
              { event: "mouseup", N: [zr] },
              { event: "keydown", N: [Ar] },
              { event: "keypress", N: [Br] },
              { event: "copy", N: [lk] },
              { event: "blur", N: c },
              { event: "focusin", N: b },
              { event: "focusout", N: d },
            ],
            !a.document.attachEvent || a.opera
              ? [
                  { target: a, type: "window", event: "focus", N: [Uh] },
                  { target: a, type: "window", event: "blur", N: [Cf] },
                ]
              : [],
            a.document.addEventListener
              ? [
                  { event: "focus", N: [gk] },
                  { event: "change", N: [ik] },
                  { event: "submit", N: [nk] },
                ]
              : [
                  { type: "formInput", event: "change", N: [ik] },
                  { type: "form", event: "submit", N: [nk] },
                ]
          );
          return Gn(a, c);
        }),
        En = w(function (a) {
          return ua(
            vc(a)
              ? [{ target: a, type: "document", event: "mouseleave", N: [Cr] }]
              : []
          );
        }),
        Ss = ["submit", "beforeunload", "unload"],
        Ts = w(function (a, c) {
          var b = c(a);
          return N(
            function (d, e) {
              d[e.type + ":" + e.event] = e.N;
              return d;
            },
            {},
            b
          );
        }),
        Us = v(Yk, function (a, c, b, d) {
          return Ts(c, a)[b + ":" + d] || [];
        }),
        Fn = /^\s*function submit\(\)/,
        Vs = F("fw.p", function (a, c) {
          var b;
          if (!(b = c.Eh || !c.Eb)) {
            var d = L(a),
              e = !1;
            b = d.o("hitParam", {});
            var f = O(c);
            b[f] && ((d = d.o("counters", {})), (e = !(!$e(c.da) || d[f])));
            b[f] = 1;
            b = e;
          }
          if (b) return K.resolve(B);
          b = new Qs(a, Us);
          return Bn(a, c, b, Yk, Ss);
        }),
        Ya = (function () {
          function a(c, b, d) {
            this.Qi = "wv2.c";
            this.Tb = [];
            this.ma = [];
            this.l = c;
            this.K = Af(c, this, d, this.Qi);
            this.F = b;
            this.jb = this.F.hi();
            this.start = this.K.H(this.start, "st");
            this.stop = this.K.H(this.stop, "sp");
          }
          a.prototype.start = function () {
            var c = this;
            this.Tb = A(function (b) {
              var d = b[0],
                e = b[2];
              b = D(c.K.H(b[1], d[0]), c);
              return c.jb.D(e || c.l, d, b);
            }, this.ma);
          };
          a.prototype.stop = function () {
            z(ja, this.Tb);
          };
          a.prototype.Y = function (c) {
            return this.F.sa().Y(c);
          };
          return a;
        })(),
        zn = ["checkbox", "radio"],
        An = /pwd|value|password/i,
        Yg = V("location.href"),
        Ws = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ra = { elements: [], attributes: [] };
            d.index = 0;
            d.le = d.K.H(d.le, "o");
            d.Ad = d.K.H(d.Ad, "io");
            d.pd = d.K.H(d.pd, "ao");
            d.Ae = d.K.H(d.Ae, "a");
            d.ye = d.K.H(d.ye, "at");
            d.Be = d.K.H(d.Be, "r");
            d.ze = d.K.H(d.ze, "c");
            d.wa = new b.MutationObserver(d.le);
            return d;
          }
          Ha(c, a);
          c.prototype.start = function () {
            this.wa.observe(this.l.document.documentElement, {
              attributes: !0,
              characterData: !0,
              childList: !0,
              subtree: !0,
              attributeOldValue: !0,
              characterDataOldValue: !0,
            });
          };
          c.prototype.stop = function () {
            this.wa.disconnect();
          };
          c.prototype.pd = function (b) {
            var d = b.target;
            b = b.attributeName;
            var e = this.ra.elements.indexOf(d);
            -1 === e &&
              ((e = this.ra.elements.push(d) - 1),
              (this.ra.attributes[e] = {}));
            this.ra.attributes[e] || (this.ra.attributes[e] = {});
            e = this.ra.attributes[e];
            var f = d.getAttribute(b);
            e[b] = fe(this.l, d, b, f, this.F.Ec()).value;
          };
          c.prototype.Ad = function (b) {
            function d(k) {
              var l = Jb(e.l)(k, f);
              return -1 === l
                ? (f.push(k), (k = { Hd: {} }), g.push(k), k)
                : g[l];
            }
            var e = this,
              f = [],
              g = [];
            z(function (k) {
              var l = k.attributeName,
                m = k.removedNodes,
                p = k.oldValue,
                r = k.target,
                t = k.nextSibling,
                q = k.previousSibling;
              switch (k.type) {
                case "attributes":
                  e.pd(k);
                  var y = d(r);
                  y.Hd[l] || (y.Hd[l] = fe(e.l, r, l, p, e.F.Ec()).value);
                  break;
                case "childList":
                  m &&
                    z(function (C) {
                      y = d(C);
                      y.wf ||
                        x(y, { wf: r, Vh: t ? t : void 0, Wh: q ? q : void 0 });
                    }, oa(m));
                  break;
                case "characterData":
                  (y = d(r)), y.xf || (y.xf = p);
              }
            }, b);
            var h = this.F.sa();
            z(function (k, l) {
              h.Je(k, g[l]);
            }, f);
          };
          c.prototype.le = function (b) {
            var d = this;
            if (Yg(this.l)) {
              var e = this.F.L();
              this.Ad(b);
              z(function (f) {
                var g = f.addedNodes,
                  h = f.removedNodes,
                  k = f.target;
                switch (f.type) {
                  case "childList":
                    h && h.length && d.Be(oa(h), e);
                    g && g.length && d.Ae(oa(g), e);
                    break;
                  case "characterData":
                    d.ze(k, e);
                }
              }, b);
              this.ye(e);
            } else this.stop();
          };
          c.prototype.ye = function (b) {
            var d = this;
            z(function (e, f) {
              var g = d.Dc();
              d.F.X(
                "mutation",
                { index: g, attributes: d.ra.attributes[f], target: d.Y(e) },
                "ac",
                b
              );
            }, this.ra.elements);
            this.ra.elements = [];
            this.ra.attributes = [];
          };
          c.prototype.Ae = function (b, d) {
            var e = this,
              f = this.Dc();
            this.F.sa().Ic({
              na: b,
              ed: function (g) {
                g = A(function (h) {
                  h = x({}, h);
                  delete h.node;
                  return h;
                }, g);
                e.F.X("mutation", { index: f, na: g }, "ad", d);
              },
            });
          };
          c.prototype.Be = function (b, d) {
            var e = this,
              f = this.Dc(),
              g = this.F.sa(),
              h = A(function (k) {
                var l = g.removeNode(k);
                Gi(e.l, k, function (m) {
                  g.removeNode(m);
                });
                return l;
              }, b);
            this.F.X("mutation", { index: f, na: h }, "re", d);
          };
          c.prototype.ze = function (b, d) {
            var e = this.Dc();
            this.F.X(
              "mutation",
              { value: b.textContent, target: this.Y(b), index: e },
              "tc",
              d
            );
          };
          c.prototype.Dc = function () {
            var b = this.index;
            this.index += 1;
            return b;
          };
          return c;
        })(Ya),
        Xs = (function () {
          function a(c, b) {
            var d = this;
            this.yc = [];
            this.kb = [];
            this.je = 1;
            this.Qa = 0;
            this.tb = {};
            this.Kc = {};
            this.Td = function (f) {
              return d.kb.length ? H(f, d.kb) : !1;
            };
            this.removeNode = function (f) {
              var g = d.Y(f),
                h = Ga(f);
              if (h)
                return (
                  (h = "NR:" + h.toLowerCase()),
                  d.Td(h) && d.$.O(h, { data: { node: f, id: g } }),
                  g
                );
            };
            this.pb = function (f) {
              var g = Ga(f);
              if (g) {
                var h = f.__ym_indexer;
                h ||
                  ((h = d.je),
                  (f.__ym_indexer = h),
                  (d.je += 1),
                  (g = "NA:" + g.toLowerCase()),
                  d.Td(g) && d.$.O(g, { data: { node: f, id: h } }));
                return h;
              }
              return null;
            };
            this.l = c;
            var e = Af(c, this, "i");
            this.$ = gd(c);
            this.options = b;
            this.start = e.H(this.start, "st");
            this.stop = e.H(this.stop, "sp");
            this.Y = e.H(this.Y, "i");
            this.Je = e.H(this.Je, "o");
            this.Ic = e.H(this.Ic, "a");
            this.removeNode = e.H(this.removeNode, "r");
            this.ga = e.H(this.ga, "s");
          }
          a.prototype.Je = function (c, b) {
            var d = this.pb(c);
            Pa(d) || (this.Kc[d] && this.Y(c), (this.Kc[d] = b));
          };
          a.prototype.D = function (c, b, d) {
            c = "" + b + c;
            this.kb.push(c);
            this.Td(c) || this.kb.push(c);
            this.$.D([c], d);
          };
          a.prototype.ia = function (c, b, d) {
            var e = "" + b + c;
            this.kb = X(function (f) {
              return f !== e;
            }, this.kb);
            this.$.ia([e], d);
          };
          a.prototype.start = function () {
            this.Qa = Y(this.l, u(D(this.ga, this, !1), this.start), 50, "i.s");
          };
          a.prototype.stop = function () {
            this.flush();
            ka(this.l, this.Qa);
            this.yc = [];
          };
          a.prototype.Ic = function (c) {
            var b = this,
              d = [],
              e = 0,
              f = { ed: c.ed, result: [], Jc: 0, na: d };
            this.yc.push(f);
            z(function (g) {
              Gi(b.l, g, function (h) {
                var k = b.pb(h);
                Pa(k) ||
                  (d.push(h),
                  b.tb[k] && b.Y(h),
                  (b.tb[k] = { node: h, event: f, Sj: e }),
                  (e += 1));
              });
            }, c.na);
          };
          a.prototype.Y = function (c) {
            if (c === this.l) return 0;
            var b = this.pb(c),
              d = this.tb[b],
              e = this.Zh(b),
              f = e.wf,
              g = e.Hd,
              h = e.xf,
              k = e.Vh,
              l = e.Wh;
            if (d) {
              e = d.event;
              d = d.Sj;
              var m = this.l.document.documentElement === c;
              k = k || c.nextSibling;
              var p = l || c.previousSibling;
              l = !m && k ? this.pb(k) : null;
              p = !m && p ? this.pb(p) : null;
              m = this.l;
              k = this.options;
              f = this.pb(f || c.parentNode || c.parentElement) || 0;
              var r = g,
                t = void 0;
              void 0 === p && (p = null);
              void 0 === l && (l = null);
              void 0 === r && (r = {});
              void 0 === t && (t = Ga(c));
              if (W(t)) c = void 0;
              else {
                g = {
                  id: b,
                  xe: p !== f ? p : null,
                  next: l !== f ? l : null,
                  parent: f,
                  name: t.toLowerCase(),
                  node: c,
                };
                if (Hf(c)) {
                  if (((h = wn(c, h)), (g.attributes = {}), (g.content = h)))
                    if ((c = kd(m, c)))
                      (g.content = "" !== h.trim() ? Nn(m, h) : h),
                        (g.hidden = c);
                } else
                  (h = xn(m, c, k, r, t)),
                    (m = h.rb),
                    (g.attributes = h.ih),
                    m && (g.hidden = m),
                    c.namespaceURI &&
                      nc(c.namespaceURI, "svg") &&
                      (g.Vf = c.namespaceURI);
                c = g;
              }
              if (W(c)) return;
              delete this.tb[b];
              e.result[d] = c;
              e.Jc += 1;
              e.na.length === e.Jc && e.ed(e.result);
            }
            return b;
          };
          a.prototype.flush = function () {
            this.ga(!0);
          };
          a.prototype.ga = function (c) {
            var b = this;
            if (Yg(this.l)) {
              var d = ba(this.tb);
              d = A(function (e) {
                return b.tb[e].node;
              }, d);
              d = ic(d, this.Y);
              c = c ? Aj(B) : yj(this.l, 20);
              d(c);
              this.yc = X(function (e) {
                return e.Jc !== e.result.length;
              }, this.yc);
            }
          };
          a.prototype.Zh = function (c) {
            if (Pa(c)) return {};
            var b = this.Kc[c];
            return b ? (delete this.Kc[c], b) : {};
          };
          return a;
        })(),
        Ys = ["input", "change", "keyup", "paste", "cut"],
        Zs = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.inputs = {};
            b.Cd = !1;
            b.Uc = b.K.H(b.Uc, "ii");
            b.Vc = b.K.H(b.Vc, "ir");
            b.$c = b.K.H(b.$c, "ri");
            b.md = b.K.H(b.md, "ur");
            b.Sd = b.K.H(b.Sd, "ce");
            b.Hc = b.K.H(b.Hc, "vc");
            return b;
          }
          Ha(c, a);
          c.prototype.start = function () {
            var b = this,
              d = this.F.sa();
            this.Cd = this.rh();
            z(function (e) {
              e = e.toLowerCase();
              d.D(e, "NA:", D(b.Uc, b));
              d.D(e, "NR:", D(b.Vc, b));
            }, Gf);
            this.Tb = [
              this.jb.D(this.l.document, Ys, D(this.Sd, this)),
              function () {
                z(function (e) {
                  e = e.toLowerCase();
                  d.ia(e, "NA:", b.Uc);
                  d.ia(e, "NR:", b.Vc);
                }, Gf);
                z(b.md, ba(b.inputs));
              },
            ];
          };
          c.prototype.md = function (b) {
            if (this.Cd) {
              var d = this.inputs[b];
              d &&
                ((b = d.kj),
                (d = d.element),
                b && this.l.Object.defineProperty(d, this.Fc(d), b));
            }
          };
          c.prototype.Vc = function (b) {
            b && this.md(b.data.id);
          };
          c.prototype.Uc = function (b) {
            b && ((b = b.data), this.$c(b.node, b.id));
          };
          c.prototype.Fc = function (b) {
            return xe(b) ? "checked" : "value";
          };
          c.prototype.Sd = function (b) {
            if ((b = b.target)) {
              var d = this.Fc(b);
              this.Hc(b[d], b);
            }
          };
          c.prototype.Hc = function (b, d) {
            var e = this.Y(d),
              f = this.inputs[e];
            if (!f && ((f = this.$c(f, e)), !f)) return;
            e = f.th;
            var g = f.value,
              h = this.Fc(d);
            (b && !H(typeof b, ["string", "boolean", "number"])) ||
              b === g ||
              ((g = fe(this.l, d, h, b, this.F.Ec()).value),
              e
                ? this.F.X(
                    "event",
                    { target: this.Y(d), checked: !!b },
                    "change"
                  )
                : ((e = ge(d)),
                  (h = Ef(d)),
                  this.F.X(
                    "event",
                    { value: g, hidden: h && !e, target: this.Y(d) },
                    "change"
                  )),
              (f.value = b));
          };
          c.prototype.$c = function (b, d) {
            var e = this;
            if (
              !yf(b) ||
              "__ym_input_override_test" === b.getAttribute("class") ||
              this.inputs[d]
            )
              return null;
            var f = xe(b),
              g = this.Fc(b),
              h = { element: b, th: f, value: b[g] };
            this.inputs[d] = h;
            this.Cd &&
              Ib(this.l, function () {
                var k =
                    e.l.Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(b),
                      g
                    ) || {},
                  l = e.l.Object.getOwnPropertyDescriptor(b, g) || {},
                  m = x({}, k, l);
                if (Ca("((set)?(\\s?" + g + ")?)?", m.set)) {
                  try {
                    e.l.Object.defineProperty(
                      b,
                      g,
                      x({}, m, {
                        configurable: !0,
                        set: function (p) {
                          e.Hc(p, this);
                          return m.set.call(this, p);
                        },
                      })
                    );
                  } catch (p) {}
                  h.kj = m;
                }
              });
            return h;
          };
          c.prototype.rh = function () {
            var b = !0,
              d = Za(this.l)("input");
            try {
              d = Za(this.l)("input");
              d.value = "INPUT_VALUE";
              d.style.setProperty("display", "none", "important");
              d.setAttribute("type", "text");
              d.setAttribute("class", "__ym_input_override_test");
              var e =
                  this.l.Object.getOwnPropertyDescriptor(
                    Object.getPrototypeOf(d),
                    "value"
                  ) || {},
                f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {},
                g = x({}, e, f);
              this.l.Object.defineProperty(
                d,
                "value",
                x({}, g, {
                  configurable: !0,
                  set: function (h) {
                    return g.set.call(d, h);
                  },
                })
              );
              "INPUT_VALUE" !== d.value && (b = !1);
              d.value = "INPUT_TEST";
              "INPUT_TEST" !== d.value && (b = !1);
            } catch (h) {
              b = !1;
            }
            return b;
          };
          return c;
        })(Ya),
        $s = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.$a = { width: 0, height: 0, wb: 0, xb: 0, orientation: 0 };
            b.ma.push([["resize"], b.ij]);
            b.ma.push([["orientationchange"], b.gj]);
            return b;
          }
          Ha(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.mg();
          };
          c.prototype.ij = function () {
            var b = this.Qd();
            this.Ai(b) && ((this.$a = b), this.ng(b));
          };
          c.prototype.gj = function () {
            var b = this.Qd();
            this.$a.orientation !== b.orientation &&
              ((this.$a = b), this.Bj(b));
          };
          c.prototype.Rf = function (b) {
            return !b.height || !b.width || !b.xb || !b.wb;
          };
          c.prototype.Ai = function (b) {
            return b.height !== this.$a.height || b.width !== this.$a.width;
          };
          c.prototype.Qd = function () {
            var b = this.F.ob(),
              d = Bd(this.l),
              e = d[0];
            d = d[1];
            b = b.Pd();
            return {
              width: e,
              height: d,
              xb: b ? b.scrollWidth : 0,
              wb: b ? b.scrollHeight : 0,
              orientation: this.F.ob().ji(),
            };
          };
          c.prototype.Bj = function (b) {
            var d;
            void 0 === d && (d = this.F.L());
            this.F.X(
              "event",
              { width: b.width, height: b.height, orientation: b.orientation },
              "deviceRotation",
              d
            );
          };
          c.prototype.ng = function (b, d) {
            void 0 === d && (d = this.F.L());
            this.F.X(
              "event",
              { width: b.width, height: b.height, xb: b.xb, wb: b.wb },
              "resize",
              d
            );
          };
          c.prototype.mg = function () {
            var b = this.Qd();
            this.Rf(b)
              ? Y(this.l, D(this.mg, this), 300)
              : (this.Rf(this.$a) && (this.$a = b), this.ng(b, 0));
          };
          return c;
        })(Ya),
        Se = (function () {
          function a(c) {
            this.index = 0;
            this.Bb = {};
            this.l = c;
          }
          a.prototype.rc = function (c, b, d) {
            void 0 === d && (d = {});
            var e = ea(this.l),
              f = this.index;
            this.index += 1;
            this.Bb[f] = { Qa: 0, Zb: !1, Th: c, Hb: [], ce: e(Z) };
            var g = this;
            return function () {
              var h = xa(arguments),
                k = d.lb && !g.Bb[f].Zb,
                l = g.Bb[f];
              ka(g.l, l.Qa);
              l.Hb = h;
              l.Zb = !0;
              var m = e(Z);
              if (k || m - l.ce >= b) c.apply(void 0, h), (l.ce = m);
              l.Qa = Y(
                g.l,
                function () {
                  k || (c.apply(void 0, h), (l.ce = e(Z)));
                  l.Zb = !1;
                  l.Hb = [];
                },
                b,
                "th"
              );
            };
          };
          a.prototype.flush = function () {
            var c = this;
            z(function (b) {
              var d = c.Bb[b],
                e = d.Qa,
                f = d.Th,
                g = d.Hb;
              d.Zb && ((c.Bb[b].Zb = !1), f.apply(void 0, g), ka(c.l, e));
            }, ba(this.Bb));
          };
          return a;
        })(),
        at = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Cg = [];
            d.Ye = { x: 0, y: 0 };
            d.za = new Se(b);
            d.Yc = d.K.H(d.Yc, "o");
            d.ma.push([["scroll"], d.jj]);
            return d;
          }
          Ha(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.F.X(
              "event",
              {
                x: Math.max(this.l.scrollX, 0),
                y: Math.max(this.l.scrollY, 0),
                page: !0,
                target: -1,
              },
              "scroll",
              0
            );
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.za.flush();
          };
          c.prototype.jj = function (b) {
            if (this.F.ob().Kf()) this.Yc(b);
            else {
              var d = b.target,
                e = X(function (f) {
                  return f[0] === d;
                }, this.Cg).pop();
              e
                ? (e = e[1])
                : ((e = this.za.rc(D(this.Yc, this), 100, { lb: !0 })),
                  this.Cg.push([d, e]));
              e(b);
            }
          };
          c.prototype.Yc = function (b) {
            var d = this.F.ob().Pd();
            b = b.target;
            var e = this.Nb(b);
            d = Na(la(b), [d, this.l, this.l.document]);
            var f = Math.max(e.left, 0);
            e = Math.max(e.top, 0);
            if (d) {
              if (this.Ye.x === f && this.Ye.y === e) return;
              this.Ye = { x: f, y: e };
            }
            this.F.X(
              "event",
              { x: f, y: e, page: d, target: d ? -1 : this.Y(b) },
              "scroll"
            );
          };
          c.prototype.Nb = function (b) {
            var d = { left: 0, top: 0 };
            if (!b) return d;
            if (b.window === b)
              return { top: b.scrollY || 0, left: b.scrollX || 0 };
            var e = b.ownerDocument || b,
              f = b.documentElement,
              g = e.defaultView || e.parentWindow,
              h = e.body;
            return b !== e || ((b = this.F.ob().Pd()), b)
              ? H(b, [f, h])
                ? {
                    top: b.scrollTop || g.scrollY,
                    left: b.scrollLeft || g.scrollX,
                  }
                : { top: b.scrollTop || 0, left: b.scrollLeft || 0 }
              : d;
          };
          return c;
        })(Ya),
        bt = ["mousemove", "mousedown", "mouseup", "click"],
        ct = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.ma.push([bt, d.fj]);
            d.za = new Se(b);
            d.Rc = d.K.H(d.Rc, "n");
            d.Jj = d.K.H(d.za.rc(D(d.Rc, d), 100), "t");
            return d;
          }
          Ha(c, a);
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.za.flush();
          };
          c.prototype.fj = function (b) {
            var d = null;
            try {
              d = b.type;
            } catch (e) {
              return;
            }
            "mousemove" === d ? this.Jj(b) : this.Rc(b);
          };
          c.prototype.Rc = function (b) {
            var d = b.type,
              e = b.clientX;
            e = void 0 === e ? null : e;
            var f = b.clientY;
            f = void 0 === f ? null : f;
            b = b.target || this.l.document.elementFromPoint(e, f);
            this.F.X("event", { x: e || 0, y: f || 0, target: this.Y(b) }, d);
          };
          return c;
        })(Ya),
        dt = ["focus", "blur"],
        et = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ma.push([dt, b.Uh]);
            return b;
          }
          Ha(c, a);
          c.prototype.Uh = function (b) {
            var d = b.target;
            b = b.type;
            this.F.X(
              "event",
              {
                target: this.Y(
                  d === this.l ? this.l.document.documentElement : d
                ),
              },
              b
            );
          };
          return c;
        })(Ya),
        ft = w(function (a) {
          var c = Ja(a.getSelection, "getSelection");
          return c ? D(c, a) : B;
        }),
        gt = u(ft, ja),
        ht = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
        it = /text|search|password|tel|url/,
        jt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Ud = !1;
            b.ma.push([ht, b.xi]);
            return b;
          }
          Ha(c, a);
          c.prototype.xi = function (b) {
            var d = this.F,
              e = b.type,
              f = b.which;
            b = b.target;
            if ("mousemove" !== e || 1 === f)
              (e = "select" === e ? this.ni(b) : this.li()) && e.start !== e.end
                ? ((this.Ud = !0), d.X("event", e, "selection"))
                : this.Ud &&
                  ((this.Ud = !1),
                  d.X("event", { start: 0, end: 0 }, "selection"));
          };
          c.prototype.li = function () {
            var b = gt(this.l);
            if (b && 0 < b.rangeCount) {
              b = b.getRangeAt(0) || this.l.document.createRange();
              var d = this.Y(b.startContainer),
                e = this.Y(b.endContainer);
              if (!W(d) && !W(e))
                return { start: b.startOffset, end: b.endOffset, xg: d, nf: e };
            }
          };
          c.prototype.ni = function (b) {
            if (it.test(b.type || "")) {
              var d = this.Y(b);
              if (!W(d))
                return {
                  start: b.selectionStart,
                  end: b.selectionEnd,
                  target: d,
                };
            }
          };
          return c;
        })(Ya),
        kt = { focus: "windowfocus", blur: "windowblur" },
        lt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.visibility = null;
            W(b.l.document.hidden)
              ? W(b.l.document.msHidden)
                ? W(b.l.document.webkitHidden) ||
                  (b.visibility = {
                    hidden: "webkitHidden",
                    event: "webkitvisibilitychange",
                  })
                : (b.visibility = {
                    hidden: "msHidden",
                    event: "msvisibilitychange",
                  })
              : (b.visibility = {
                  hidden: "hidden",
                  event: "visibilitychange",
                });
            b.handleEvent = b.K.H(b.handleEvent, "e");
            return b;
          }
          Ha(c, a);
          c.prototype.start = function () {
            this.Tb = [
              this.jb.D(
                this.l,
                this.visibility ? [this.visibility.event] : ["focus", "blur"],
                D(this.handleEvent, this)
              ),
            ];
          };
          c.prototype.handleEvent = function (b) {
            this.F.X(
              "event",
              {},
              kt[
                this.visibility
                  ? this.l.document[this.visibility.hidden]
                    ? "blur"
                    : "focus"
                  : b.type
              ]
            );
          };
          return c;
        })(Ya),
        mt = [
          "touchmove",
          "touchstart",
          "touchend",
          "touchcancel",
          "touchforcechange",
        ],
        nt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.jd = {};
            d.scrolling = !1;
            d.kg = 0;
            d.ma.push([["scroll"], d.yj, d.l.document]);
            d.ma.push([mt, d.Nj, d.l.document]);
            d.za = new Se(b);
            d.Sb = d.K.H(d.Sb, "nh");
            d.Kj = d.K.H(
              d.za.rc(d.Sb, d.F.ob().Kf() ? 0 : 50, { lb: !0 }),
              "th"
            );
            return d;
          }
          Ha(c, a);
          c.prototype.yj = function () {
            var b = this;
            this.scrolling = !0;
            ka(this.l, this.kg);
            this.kg = Y(
              this.l,
              function () {
                b.scrolling = !1;
              },
              150
            );
          };
          c.prototype.Nj = function (b) {
            var d = this,
              e = "touchcancel" === b.type || "touchend" === b.type;
            b.changedTouches &&
              0 < b.changedTouches.length &&
              z(function (f) {
                var g = d.si(f);
                f.__ym_touch_id = g;
                e && delete d.jd[f.identifier];
              }, oa(b.changedTouches));
            "touchmove" === b.type
              ? this.scrolling
                ? this.Sb(b)
                : this.Kj(b, this.F.L())
              : this.Sb(b);
          };
          c.prototype.si = function (b) {
            this.jd[b.identifier] || (this.jd[b.identifier] = Nh());
            return this.jd[b.identifier];
          };
          c.prototype.Sb = function (b, d) {
            void 0 === d && (d = this.F.L());
            var e = b.type,
              f = A(function (g) {
                return {
                  id: g.__ym_touch_id,
                  x: Math.round(g.clientX),
                  y: Math.round(g.clientY),
                  force: g.force,
                };
              }, oa(b.changedTouches));
            0 < f.length &&
              this.F.X("event", { touches: f, target: this.Y(b.target) }, e, d);
          };
          return c;
        })(Ya),
        ot = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.ma.push([["load"], b.ej, b.l.document]);
            return b;
          }
          Ha(c, a);
          c.prototype.ej = function (b) {
            b = b.target;
            "IMG" === Ga(b) &&
              b.getAttribute("srcset") &&
              this.F.X(
                "event",
                { target: this.Y(b), value: b.currentSrc },
                "srcset"
              );
          };
          return c;
        })(Ya),
        pt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.Pg = 1;
            d.za = new Se(b);
            d.jc = d.K.H(d.jc, "z");
            return d;
          }
          Ha(c, a);
          c.prototype.start = function () {
            if (this.Gf()) {
              a.prototype.start.call(this);
              this.jc();
              var b = this.jb.D(
                n(this.l, "visualViewport"),
                ["resize"],
                this.za.rc(this.jc, 10)
              );
              this.Tb.push(b);
            }
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            this.za.flush();
          };
          c.prototype.jc = function () {
            var b = this.Gf();
            b && b !== this.Pg && ((this.Pg = b), this.Cj(b));
          };
          c.prototype.Gf = function () {
            var b = fg(this.l);
            return b ? b[2] : null;
          };
          c.prototype.Cj = function (b) {
            var d = Qf(this.l);
            this.F.X("event", { x: d.x, y: d.y, level: b }, "zoom");
          };
          return c;
        })(Ya),
        Od,
        Te = {
          91: "super",
          93: "super",
          224: "super",
          18: "alt",
          17: "ctrl",
          16: "shift",
          9: "tab",
          8: "backspace",
          46: "delete",
        },
        Zk = { super: 1, xk: 2, alt: 3, shift: 4, Wk: 5, delete: 6, rk: 6 },
        qt = [4, 9, 8, 32, 37, 38, 39, 40, 46],
        $k =
          ((Od = {}),
          (Od["1"] = {
            91: "&#8984;",
            93: "&#8984;",
            224: "&#8984;",
            18: "&#8997;",
            17: "&#8963;",
            16: "&#8679;",
            9: "&#8677;",
            8: "&#9003;",
            46: "&#9003;",
          }),
          (Od["2"] = {
            91: "&#xff;",
            93: "&#xff;",
            224: "&#xff;",
            18: "Alt",
            17: "Ctrl",
            16: "Shift",
            9: "Tab",
            8: "Backspace",
            46: "Delete",
          }),
          (Od.Ui = {
            32: "SPACEBAR",
            37: "&larr;",
            38: "&uarr;",
            39: "&rarr;",
            40: "&darr;",
            13: "Enter",
          }),
          Od),
        rt = /flash/,
        st = /ym-disable-keys/,
        tt = /^&#/,
        ut = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.qb = {};
            d.Ma = 0;
            d.Ea = [];
            d.Ag = [];
            d.wc = 0;
            d.fg = 0;
            d.ma.push([["keydown"], d.ui]);
            d.ma.push([["keyup"], d.vi]);
            d.Yg =
              -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac")
                ? "1"
                : "2";
            d.Nc = d.K.H(d.Nc, "v");
            d.Fd = d.K.H(d.Fd, "ec");
            d.dd = d.K.H(d.dd, "sk");
            d.Od = d.K.H(d.Od, "gk");
            d.Ke = d.K.H(d.Ke, "sc");
            d.ic = d.K.H(d.ic, "cc");
            d.reset = d.K.H(d.reset, "r");
            d.bd = d.K.H(d.bd, "rs");
            return d;
          }
          Ha(c, a);
          c.prototype.ui = function (b) {
            if (this.Nc(b) && !this.Li(b)) {
              var d = b.keyCode;
              b.repeat ||
                this.qb[d] ||
                ((this.qb[b.keyCode] = !0),
                Te[b.keyCode] && !this.Ma
                  ? ((this.Ma += 1), this.Ke(b), this.reset(300))
                  : this.Ma
                  ? (this.oh(), this.De(b), this.Fd())
                  : (this.reset(), this.De(b)));
            }
          };
          c.prototype.vi = function (b) {
            if (this.Nc(b)) {
              var d = b.keyCode,
                e = Te[b.keyCode];
              this.qb[b.keyCode] && (this.qb[d] = !1);
              e && this.Ma && ((this.Ma = 0), (this.qb = {}));
              1 === this.Ea.length &&
                ((b = this.Ea[0]),
                H(b.keyCode, qt) && (this.dd([b], !0), this.reset()));
              this.Ea = X(u(la(d), Rb), this.Ea);
              ka(this.l, this.wc);
            }
          };
          c.prototype.Nc = function (b) {
            var d = this.l.document.activeElement;
            b = b.target;
            return !Na(Boolean, [
              d &&
                "OBJECT" === d.nodeName &&
                rt.test(d.getAttribute("type") || ""),
              "INPUT" === b.nodeName &&
                "password" === b.getAttribute("type") &&
                st.test(b.className),
            ]);
          };
          c.prototype.Fd = function () {
            this.Ag = this.Ea.slice(0);
            ka(this.l, this.wc);
            this.wc = Y(this.l, v(this.Ag, D(this.dd, this)), 0, "e.c");
          };
          c.prototype.dd = function (b, d) {
            void 0 === d && (d = !1);
            if (1 < b.length || d) {
              var e = this.Od(b);
              this.F.X("event", { Oc: e }, "keystroke");
            }
          };
          c.prototype.Od = function (b) {
            var d = this;
            b = A(function (e) {
              e = e.keyCode;
              var f = Te[e],
                g = d.ii(e);
              return { id: e, key: g, Of: !!f && tt.test(g), Pc: f };
            }, b);
            return tg(function (e, f) {
              return (Zk[e.Pc] || 100) - (Zk[f.Pc] || 100);
            }, b);
          };
          c.prototype.ii = function (b) {
            return $k[this.Yg][b] || $k.Ui[b] || String.fromCharCode(b);
          };
          c.prototype.De = function (b) {
            H(b, this.Ea) || this.Ea.push(b);
          };
          c.prototype.Ke = function (b) {
            this.De(b);
            this.ic();
          };
          c.prototype.ic = function () {
            this.Ma ? Y(this.l, this.ic, 100) : (this.Ea = []);
          };
          c.prototype.oh = function () {
            ka(this.l, this.fg);
          };
          c.prototype.reset = function (b) {
            b ? (this.fg = Y(this.l, D(this.bd, this), b)) : this.bd();
          };
          c.prototype.bd = function () {
            this.Ma = 0;
            this.Ea = [];
            this.qb = {};
            ka(this.l, this.wc);
          };
          c.prototype.Li = function (b) {
            return b.target && "INPUT" === b.target.nodeName
              ? b.shiftKey || 32 === b.keyCode || "shift" === Te[b.keyCode]
              : !1;
          };
          return c;
        })(Ya),
        vn = ["sr", "sd", "\u043d"],
        vt = /allow-same-origin/,
        wt = (function (a) {
          function c(b, d, e) {
            d = a.call(this, b, d, e) || this;
            d.bc = [];
            d.Jd = {};
            d.me = d.K.H(d.me, "fi");
            d.ne = d.K.H(d.ne, "sd");
            d.oe = d.K.H(d.oe, "src");
            d.wa = new b.MutationObserver(d.oe);
            return d;
          }
          Ha(c, a);
          c.prototype.start = function () {
            a.prototype.start.call(this);
            this.F.Ec().kc && this.F.sa().D("iframe", "NA:", D(this.me, this));
            this.F.Cf().Md().D(["sdr"], D(this.ne, this));
          };
          c.prototype.stop = function () {
            a.prototype.stop.call(this);
            z(function (b) {
              b.F.stop();
            }, this.bc);
          };
          c.prototype.oe = function (b) {
            var d = b.pop().target;
            if (
              (b = $a(function (f) {
                return f.Jf === d;
              }, this.bc))
            ) {
              this.bc = X(function (f) {
                return f.Jf !== d;
              }, this.bc);
              var e = b.F.Nd();
              try {
                b.F.stop();
              } catch (f) {}
              this.qc(d, e);
            }
          };
          c.prototype.me = function (b) {
            if (b) {
              var d = b.data.node;
              this.wa.observe(d, { attributes: !0, attributeFilter: ["src"] });
              this.qc(d, b.data.id);
            }
          };
          c.prototype.qc = function (b, d) {
            var e = this;
            this.Hi(b) &&
              ac(
                this.l,
                b
              )(
                Ua(B, function () {
                  var f = e.F.qc(b.contentWindow, d);
                  e.bc.push({ F: f, Jf: b });
                })
              );
          };
          c.prototype.ne = function (b) {
            var d = this,
              e = b.M;
            b = b.data;
            this.Jd[e] || (this.Jd[e] = { data: [] });
            var f = this.Jd[e];
            f.data = f.data.concat(b);
            this.l.isNaN(f.Bd) &&
              z(function (g) {
                "page" === g.type && (f.Bd = g.data.Ga - d.F.Df());
              }, f.data);
            this.l.isNaN(f.Bd) ||
              (this.F.ga(
                A(function (g) {
                  g.L += f.Bd;
                  g.L = d.l.Math.max(0, g.L);
                  return g;
                }, f.data)
              ),
              (f.data = []));
          };
          c.prototype.Hi = function (b) {
            var d = b.getAttribute("src"),
              e = b.getAttribute("sandbox");
            return b.getAttribute("_ym_ignore") ||
              (e && !e.match(vt)) ||
              (d &&
                "about:blank" !== d &&
                (d = Kc(this.l, d).host) &&
                T(this.l).host !== d)
              ? !1
              : n(b, "contentWindow.location.href");
          };
          return c;
        })(Ya),
        xt = (function (a) {
          function c(b, d, e) {
            b = a.call(this, b, d, e) || this;
            b.Ge = b.K.H(b.Ge, "ps");
            return b;
          }
          Ha(c, a);
          c.prototype.start = function () {
            this.F.sa().Ic({
              na: [this.l.document.documentElement],
              ed: this.Ge,
            });
          };
          c.prototype.Ge = function (b) {
            var d = this.F.ki(),
              e = d.$h(),
              f = T(this.l),
              g = f.host,
              h = f.protocol;
            f = f.pathname;
            var k = Bd(this.l),
              l = k[0];
            k = k[1];
            this.F.X(
              "page",
              {
                content: A(function (m) {
                  m = x({}, m);
                  delete m.node;
                  return m;
                }, b),
                ef: e || "",
                Hf: !!e,
                viewport: { width: l, height: k },
                title: this.l.document.title,
                doctype: d.bi() || "",
                bf: this.l.location.href,
                Hg: this.l.navigator.userAgent,
                referrer: this.l.document.referrer,
                screen: {
                  width: this.l.screen.width,
                  height: this.l.screen.height,
                },
                location: { host: g, protocol: h, path: f },
                Ga: this.F.Df(),
                hd: d.oi(),
              },
              "page",
              0
            );
          };
          return c;
        })(Ya),
        yt = ["addRule", "removeRule", "insertRule", "deleteRule"],
        Zg = [
          [
            (function (a) {
              function c(b, d, e) {
                b = a.call(this, b, d, e) || this;
                b.bb = {};
                b.cc = {};
                b.cf = 0;
                b.Wc = b.K.H(b.Wc, "a");
                b.Ab = b.K.H(b.Ab, "sr");
                b.Xc = b.K.H(b.Xc, "r");
                b.ga = b.K.H(b.ga, "d");
                return b;
              }
              Ha(c, a);
              c.prototype.start = function () {
                var b = this.F.sa();
                b.D("style", "NA:", this.Wc);
                b.D("style", "NR:", this.Xc);
                this.ga();
              };
              c.prototype.stop = function () {
                var b = this;
                a.prototype.stop.call(this);
                var d = this.F.sa();
                d.ia("style", "NA:", this.Wc);
                d.ia("style", "NR:", this.Xc);
                this.ga();
                ka(this.l, this.cf);
                z(function (e) {
                  b.bb[e].sheet && b.ig(b.bb[e].sheet);
                }, ba(this.bb));
                this.bb = {};
              };
              c.prototype.ga = function () {
                var b = this;
                z(function (d) {
                  var e = d[0];
                  d = d[1];
                  if (d.length) {
                    for (
                      var f = [], g = d[0].L, h = [], k = 0;
                      k < d.length;
                      k += 1
                    ) {
                      var l = d[k],
                        m = l.L;
                      delete l.L;
                      m <= g + 50 ? f.push(l) : (h.push(f), (g = m), (f = [l]));
                    }
                    f.length && h.push(f);
                    h.length &&
                      z(function (p) {
                        b.F.X(
                          "event",
                          { target: Fa(e), Ja: p },
                          "stylechange",
                          g
                        );
                      }, h);
                    delete b.cc[e];
                  }
                }, Ba(this.cc));
                this.cf = Y(this.l, this.ga, 100);
              };
              c.prototype.Ab = function (b, d, e, f, g) {
                void 0 === f && (f = "");
                void 0 === g && (g = -1);
                this.cc[b] || (this.cc[b] = []);
                this.cc[b].push({ pe: d, style: f, index: g, L: e });
              };
              c.prototype.lj = function (b, d) {
                var e = this,
                  f = b.addRule,
                  g = b.removeRule,
                  h = b.insertRule,
                  k = b.deleteRule;
                U(f) &&
                  (b.addRule = function (l, m, p) {
                    e.Ab(d, "a", e.F.L(), l + "{" + m + "}", p);
                    return f.call(b, l, m, p);
                  });
                U(g) &&
                  (b.removeRule = function (l) {
                    e.Ab(d, "r", e.F.L(), "", l);
                    return g.call(b, l);
                  });
                U(h) &&
                  (b.insertRule = function (l, m) {
                    e.Ab(d, "a", e.F.L(), l, m);
                    return h.call(b, l, m);
                  });
                U(k) &&
                  (b.deleteRule = function (l) {
                    e.Ab(d, "r", e.F.L(), "", l);
                    return k.call(b, l);
                  });
              };
              c.prototype.ig = function (b) {
                var d = this;
                z(function (e) {
                  var f = d.l.CSSStyleSheet.prototype[e];
                  U(f) && (b[e] = D(f, b));
                }, yt);
              };
              c.prototype.Mh = function (b) {
                try {
                  return b.cssRules || b.rules;
                } catch (d) {
                  return null;
                }
              };
              c.prototype.Wc = function (b) {
                var d = b.data;
                b = d.id;
                d = d.node;
                if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                  var e = d.sheet,
                    f = this.Mh(e);
                  if (f && f.length) {
                    for (var g = [], h = 0; h < f.length; h += 1)
                      g.push({ style: f[h].cssText, index: h, pe: "a" });
                    this.F.X("event", { Ja: g, target: b }, "stylechange");
                  }
                  this.lj(e, b);
                  this.bb[b] = d;
                }
              };
              c.prototype.Xc = function (b) {
                b = b.data.id;
                var d = this.bb[b];
                d && (delete this.bb[b], d.sheet && this.ig(d.sheet));
              };
              return c;
            })(Ya),
            "ss",
          ],
          [Zs, "in"],
          [Ws, "mu"],
          [$s, "r"],
          [at, "sc"],
          [ct, "mo"],
          [et, "f"],
          [jt, "se"],
          [lt, "wf"],
          [nt, "t"],
          [ot, "src"],
          [pt, "z"],
          [ut, "ks"],
        ];
      Zg.push([wt, "if"]);
      Zg.push([xt, "pa"]);
      var zt = w(function (a) {
          var c = a.document;
          return {
            Pd: function () {
              if (c.scrollingElement) return c.scrollingElement;
              var b =
                0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
              return n(c, "documentElement.scrollHeight") >=
                n(c, "body.scrollHeight")
                ? b
                : null;
            },
            ji: function () {
              var b = a.screen;
              if (!b) return 0;
              var d = $a(v(b, n), [
                "orientation",
                "mozOrientation",
                "msOrientation",
              ]);
              return n(b, d + ".angle") || 0;
            },
            Jk: v(a, db),
            Kf: v(a, qd),
            Ik: v(a, Ce),
          };
        }),
        At = (function () {
          function a(c, b) {
            var d = this;
            this.Pb = 0;
            this.tc = [];
            this.Ob = null;
            this.ua = this.ec = this.yg = !1;
            this.Ga = 0;
            this.ki = function () {
              return d.page;
            };
            this.Nd = function () {
              return d.Pb;
            };
            this.Df = function () {
              return d.Ga;
            };
            this.hi = function () {
              return d.jb;
            };
            this.Cf = function () {
              return d.Ob;
            };
            this.sa = function () {
              return d.Vd;
            };
            this.L = function () {
              return d.Oe ? d.l.Math.max(d.Oe(Z) - d.Ga, 0) : 0;
            };
            this.Ec = function () {
              return d.options;
            };
            this.ob = function () {
              return d.kh;
            };
            this.X = function (f, g, h, k) {
              void 0 === k && (k = d.L());
              f = d.gi(f, g, h, k);
              d.ga(f);
            };
            this.gi = function (f, g, h, k) {
              void 0 === k && (k = d.L());
              return { type: f, data: g, L: k, M: d.Pb, event: h };
            };
            this.ga = function (f) {
              f = fa(f) ? f : [f];
              d.yg && !d.ec
                ? d.ua
                  ? ((f = A(function (g) {
                      return g.M ? g : x(g, { M: d.Pb });
                    }, f)),
                    d.Cf().og(f))
                  : (z(function (g) {
                      ib(d.l, { name: "webvisorData", data: g });
                    }, f),
                    (f = A(rn, f)),
                    d.Ie(f))
                : (d.tc = d.tc.concat(f));
            };
            this.l = c;
            var e = Af(c, this, "R");
            this.Le = e.H(this.Le, "s");
            this.ga = e.H(this.ga, "sd");
            e = L(c);
            e.o("wv2e") && We();
            e.C("wv2e", !0);
            this.options = b;
            this.jb = ia(c);
            this.Vd = new Xs(this.l, b);
            this.kh = zt(c);
            this.ff = A(function (f) {
              return new f[0](c, d, f[1]);
            }, Zg);
            this.Fi();
            this.page = tn(this.l);
            this.Le();
          }
          a.prototype.start = function (c) {
            this.yg = !0;
            this.Ie = c;
            this.lg();
          };
          a.prototype.stop = function () {
            Yg(this.l) &&
              (z(function (c) {
                return c.stop();
              }, this.ff),
              this.Vd.stop(),
              this.Ob && this.Ob.stop(),
              this.ua || this.X("event", {}, "eof"));
          };
          a.prototype.qc = function (c, b) {
            var d = new a(c, x({}, this.options, { M: b }));
            d.start(B);
            return d;
          };
          a.prototype.Fi = function () {
            var c = this;
            this.ua = !!this.options.M;
            this.Pb = this.options.M || 0;
            this.ec = !this.ua;
            var b = this.options.Gg || [];
            b.push(T(this.l).host);
            this.Ob = un(this.l, this, b);
            b = this.Ob.Md();
            db(this.l)
              ? this.ec &&
                b.D(["i"], function (d) {
                  c.ua = d.ua;
                  c.ec = !1;
                  d.M && (c.Pb = d.M);
                  c.lg();
                })
              : (this.ec = this.ua = !1);
          };
          a.prototype.lg = function () {
            var c = this.tc.splice(0, this.tc.length);
            this.ga(c);
          };
          a.prototype.Le = function () {
            this.Oe = Uf(this.l);
            this.Ga = this.Oe(Z);
            z(function (c) {
              c.start();
            }, this.ff);
            this.Vd.start();
          };
          return a;
        })(),
        ca,
        Bt =
          ((ca = {}),
          (ca.mousemove = 0),
          (ca.mouseup = 1),
          (ca.mousedown = 2),
          (ca.click = 3),
          (ca.scroll = 4),
          (ca.windowblur = 5),
          (ca.windowfocus = 6),
          (ca.focus = 7),
          (ca.blur = 8),
          (ca.eof = 9),
          (ca.selection = 10),
          (ca.change = 11),
          (ca.input = 12),
          (ca.touchmove = 13),
          (ca.touchstart = 14),
          (ca.touchend = 15),
          (ca.touchcancel = 16),
          (ca.touchforcechange = 17),
          (ca.canvasMethod = 18),
          (ca.canvasProperty = 19),
          (ca.zoom = 20),
          (ca.resize = 21),
          (ca.mediaMethod = 22),
          (ca.mediaProperty = 23),
          (ca.keystroke = 24),
          (ca.deviceRotation = 25),
          (ca.fatalError = 26),
          (ca.hashchange = 27),
          (ca.stylechange = 28),
          ca),
        $g = ha(function (a, c) {
          var b;
          return (b = {}), (b[Ta(a)] = c), b;
        }),
        Ct = (function () {
          function a(c) {
            var b;
            this.isSync = !1;
            this.Lb = [];
            this.rf = [];
            this.l = c;
            this.Rb =
              ((b = {}),
              (b.event = D(this.Ih, this)),
              (b.page = $g({ page: 1 })),
              (b.mutation = $g({ Vi: 1 })),
              (b.activity = $g({ bh: 1 })),
              b);
            this.rf = [
              [["scroll"], { xj: 1 }],
              [["selection"], { zj: 1 }],
              [["change", "input"], { qh: 1 }],
              [["keystroke"], { Pi: 1 }, { Oc: 1 }],
              [["zoom"], { fk: 1 }],
              [["resize"], { tj: 1 }],
              [
                ["windowfocus", "windowblur", "focus", "blur", "eof"],
                { ck: 1 },
              ],
              [["mousemove", "mouseup", "mousedown", "click"], { Ti: 1 }],
              [["deviceRotation"], { Dh: 1 }],
              [["fatalError"], { Oh: 1 }],
              [
                [
                  "touchmove",
                  "touchstart",
                  "touchend",
                  "touchcancel",
                  "touchforcechange",
                ],
                { Mj: 1 },
                { touches: 1 },
                { touches: 1 },
              ],
              [["hashchange"], { Bi: 1 }],
              [["stylechange"], { Ej: 1 }, { Ja: 1 }, { Ja: 1 }],
            ];
          }
          a.prototype.Ih = function (c) {
            var b,
              d,
              e = c.type,
              f = $a(u(uc, v(e, H)), this.rf);
            f || eb(Fc("vem." + e));
            "eof" === e && (this.isSync = !0);
            var g = f[1],
              h = f[2];
            f = f[3];
            var k = c.Z;
            return {
              event:
                ((b = { type: Bt[e], target: c.target, M: c.M }),
                (b[Ta(g)] = h
                  ? ((d = {}), (d[Ta(h)] = f ? k[Ta(f)] : k), d)
                  : k),
                b),
            };
          };
          a.prototype.Ha = function (c, b) {
            var d = this;
            void 0 === b && (b = !1);
            var e = ic(c, function (h) {
                var k = !W(h.partNum);
                return {
                  data: k ? void 0 : d.Rb[h.type](h.data),
                  uh: k ? h.data : void 0,
                  page: h.partNum,
                  end: h.end,
                  L: h.L,
                };
              }),
              f = this.isSync || b ? Infinity : 10;
            e = jc(this.l, e, f);
            var g = [e];
            this.Lb.push(e);
            return e(
              Le(function (h) {
                h = je(d.l, bi, { buffer: h });
                h = jc(d.l, h, f, Ae);
                g.push(h);
                d.Lb.push(h);
                return h;
              })
            )(
              Le(function (h) {
                h = Jf(d.l, h.slice(-4));
                h = jc(d.l, h, f, Ae);
                g.push(h);
                d.Lb.push(h);
                return h;
              })
            )(
              Lg(function (h) {
                h = h[h.length - 1];
                z(function (k) {
                  k = Je(d.l)(k, d.Lb);
                  d.Lb.splice(k, 1);
                }, g);
                return h;
              })
            );
          };
          a.prototype.Oa = function (c) {
            return je(this.l, Mf, this.Rb[c.type](c.data))(Be(B));
          };
          a.prototype.Ua = function (c) {
            return c[0];
          };
          a.prototype.gd = function (c, b) {
            for (
              var d = Jf(this.l, c)(Be(B)),
                e = Math.ceil(d.length / b),
                f = [],
                g = 0;
              g < b;
              g += 1
            )
              f.push(d.slice(g * e, e * (g + 1)));
            return f;
          };
          a.prototype.isEnabled = function () {
            return ai(this.l);
          };
          return a;
        })(),
        Dt = (function () {
          return function (a, c, b, d) {
            var e = this;
            this.rd = this.Vb = !1;
            this.Za = [];
            this.Uf = [];
            this.pf = [];
            this.send = function (f, g, h, k) {
              f = e.sender(f, e.pc, g);
              h && k && f.then(h, k);
              return f;
            };
            this.Ne = function (f, g, h, k) {
              return new K(function (l, m) {
                f.push([g, h, l, m, k]);
              });
            };
            this.yi = function () {
              e.Za = tg(function (h, k) {
                return h[4].partNum - k[4].partNum;
              }, e.Za);
              var f = N(
                  function (h, k, l) {
                    k = k[4];
                    return h && l + 1 === k.partNum;
                  },
                  !0,
                  e.Za
                ),
                g = !!e.Za[e.Za.length - 1][4].end;
              return f && g;
            };
            this.Gd = function (f) {
              fh(
                e.l,
                f.slice(),
                function (g) {
                  e.send(g[0], g[1], g[2], g[3]);
                },
                20,
                "s.w2.sf.fes"
              );
              f.splice(0, f.length);
            };
            this.Sh = function () {
              e.rd || ((e.rd = !0), e.Gd(e.Uf), e.Gd(e.pf));
            };
            this.sh = function (f) {
              return N(
                function (g, h) {
                  var k = "page" === h.type && !h.M,
                    l = "eof" === h.data.type,
                    m = k && !!h.partNum;
                  return { xd: g.xd || m, wd: g.wd || k, vd: g.vd || l };
                },
                { wd: !1, vd: !1, xd: !1 },
                f
              );
            };
            this.wi = function (f, g, h, k) {
              k
                ? ((f = e.Ne(e.Za, f, g, h[0])),
                  e.yi() && (e.Gd(e.Za), (e.Vb = !0)))
                : ((e.Vb = !0), (f = e.send(f, g)));
              return f;
            };
            this.ti = function (f) {
              var g;
              return e.Ji
                ? ((g = {}),
                  (g["wv-type"] = Na(function (h) {
                    return "eof" === n(h, "data.type");
                  }, f)
                    ? "2"
                    : "8"),
                  g)
                : {};
            };
            this.Ef = function (f, g, h) {
              g = {
                G: e.ti(h),
                J: Aa(),
                ba: { fa: g },
                Na: { hf: !f && $h(h), Mf: e.Gi },
              };
              f && g.J.C("bt", 1);
              return g;
            };
            this.Jh = function (f, g, h) {
              f = e.Ef(!1, f, g);
              return e.Vb ? e.send(f, h) : e.Ne(e.pf, f, h, g);
            };
            this.Wi = function (f, g, h) {
              f = e.Ef(!0, f, g);
              if (e.Vb) return e.send(f, h);
              var k = e.sh(g),
                l = k.wd,
                m = k.vd;
              k = k.xd;
              var p;
              l && (p = e.wi(f, h, g, k));
              e.rd
                ? l || (p = e.send(f, h))
                : (l || (p = e.Ne(e.Uf, f, h, g)), (e.Vb || m) && e.Sh());
              return p;
            };
            this.Ji = d;
            this.l = a;
            this.Gi = b;
            this.sender = wa(a, "W", c);
            this.pc = c;
          };
        })(),
        Et = w(
          function (a) {
            var c = L(a),
              b = c.o("isEU");
            if (W(b)) {
              var d = Fa(ie(a, "is_gdpr") || "");
              if (H(d, [0, 1])) c.C("isEU", d), (b = !!d);
              else if (((a = Qa(a).o("wasSynced")), (a = n(a, "params.eu"))))
                c.C("isEU", a), (b = !!a);
            }
            return b;
          },
          function (a) {
            return L(a).o("isEU");
          }
        ),
        ee = F("i.e", Et),
        Ft = F("w2", function (a, c) {
          function b() {
            h = !0;
          }
          var d = L(a),
            e = O(c);
          if (
            !c.Eb ||
            bd(a) ||
            !a.MutationObserver ||
            !Ca("Element", a.Element)
          )
            return B;
          Ca("MutationObserver", a.MutationObserver) ||
            vd(a, e).warn(
              "MutationObserver is overriden, webvisor is not guaranteed to work in this environment"
            );
          var f = ya(function (k, l) {
              na(a, c, l)["catch"](k);
            }),
            g = ac(a)(Le(G([a, c], pn)))(
              Lg(function (k) {
                return new At(a, k);
              })
            ),
            h = !1;
          Gq([g, f])(
            Ua(E(a, "wv2.R.c"), function (k) {
              var l = k[0];
              k = k[1];
              if (!h) {
                b = function () {
                  h || ((h = !0), l && l.stop());
                };
                var m = d.o("wv2Counter");
                if (!Qh(a, k) || m) b();
                else if (
                  (ia(a).D(a, ["beforeunload", "unload"], b),
                  d.C("wv2Counter", e),
                  d.C("stopRecorder", b),
                  (k = [new Re(a)]),
                  k.unshift(new Ct(a)),
                  (k = $a(function (q) {
                    return q.isEnabled();
                  }, k)))
                ) {
                  m = new Dt(a, c, !(k instanceof Re), 0);
                  var p = Ug.Ld(e, "m", D(m.Wi, m), k, a),
                    r = Ug.Ld(e, "e", D(m.Jh, m), k, a);
                  k = qn();
                  m = k.cj;
                  r.D("ag", k.fh);
                  r.D("p", m);
                  p.D("see", function (q) {
                    var y = !1;
                    z(function (C) {
                      "page" === C.type && (y = !0);
                    }, q);
                    y &&
                      (h ||
                        r.push({
                          type: "event",
                          data: {
                            type: "fatalError",
                            Z: {
                              code: "invalid-snapshot",
                              Kh: "p.s.f",
                              stack: "",
                            },
                          },
                        }),
                      b());
                  });
                  var t = fb(function (q) {
                    "eof" === n(q, "data.type")
                      ? (r.push(q), p.push(q), r.flush(), p.flush())
                      : ("event" === q.type ? r : p).push(q);
                  });
                  Y(a, b, 864e5);
                  Ib(a, function () {
                    ib(a, { ea: e, name: "webvisor", data: { version: 2 } });
                    l.start(t);
                  });
                }
              }
            })
          );
          return function () {
            return b();
          };
        }),
        al = w(xc, O),
        Mh = u(Zd, mc),
        bl = pa.Ta + "//" + tc + "/metrika",
        cl = bl + "/metrika_match.html",
        dl = tc.split("."),
        Gt = dl.pop(),
        el = I(".", dl),
        fl = B,
        Ht = vb("isp.stat", function (a, c) {
          return new K(function (b, d) {
            if (lq(a, cl, "isp")) {
              var e = function (f) {
                ("1" === f ? b : d)();
                fl();
                f = dj(cl);
                H("isp", f.vb) &&
                  ((f.vb = X(u(la("isp"), Rb), f.vb)),
                  f.vb.length || (lc(f.mb), (f.mb = null)));
              };
              fl = ia(a).D(a, ["message"], G([a, c, e], on));
              Y(a, e, 1500);
            } else d();
          });
        }),
        It = vb("isp", function (a, c) {
          na(a, c, function (b) {
            var d = $a(
              function (g) {
                return n(b, "settings." + g);
              },
              ["rt", "mf"]
            );
            if (d && Jd(a)) {
              var e = li(b) && !Wd(a),
                f = al(c);
              x(f, { Zc: d, status: e ? 3 : 4 });
              if (!e)
                return (
                  (d = nn(a, c, d)),
                  (e = function (g) {
                    f.status = g;
                  }),
                  Ht(a, d).then(v(1, e))["catch"](v(2, e))
                );
            }
          })["catch"](E(a, "l.isp"));
        }),
        Ue = F("dl.w", function (a, c, b) {
          var d = 0;
          ce(a, a[c], b) ||
            (d = Y(
              a,
              function () {
                Ue(a, c, b);
              },
              1e3,
              "ec.dl"
            ));
          return function () {
            return ka(a, d);
          };
        }),
        Jt = F("p.e", function (a, c) {
          var b = Ea(a, c);
          if (b) {
            var d = L(a);
            b = D(b.params, b);
            var e = E(a, "h.ee", G([a, O(c), b], hn)),
              f,
              g = function (k) {
                f = k;
                k.wa.D(e);
              };
            if (c.Ed) return d.C("ecs", 0), Ue(a, c.Ed, g);
            var h = na(a, c, function (k) {
              k = n(k, "settings.ecommerce");
              d.C("ecs", 1);
              return k ? Ue(a, k, g) : B;
            });
            return function () {
              h.then(function (k) {
                k();
                f && f.unsubscribe();
              });
            };
          }
        }),
        gl = F("fbq.o", function (a, c, b) {
          var d = n(a, "fbq");
          if (d && d.callMethod) {
            var e = function () {
              var g = xa(arguments),
                h = d.apply(void 0, g);
              c(g);
              return h;
            };
            x(e, d);
            b && z(c, b);
            a.fbq = e;
          } else var f = Y(a, G([a, c, ua(oa(d && d.queue))], gl), 1e3, "fbq.d");
          return D(ka, null, a, f);
        }),
        Kt = F("ecm.a", v("add", ae)),
        Lt = F("ecm.r", v("remove", ae)),
        Mt = F("ecm.d", v("detail", ae)),
        Nt = F("ecm.p", v("purchase", ae)),
        Vc,
        Ab,
        Wc,
        ah =
          ((Vc = {}),
          (Vc.add_to_wishlist = "add-to-wishlist"),
          (Vc.begin_checkout = "begin-checkout"),
          (Vc.generate_lead = "submit-lead"),
          (Vc.add_payment_info = "add-payment-info"),
          Vc),
        bh =
          ((Ab = {}),
          (Ab.AddToCart = "add-to-cart"),
          (Ab.Lead = "submit-lead"),
          (Ab.InitiateCheckout = "begin-checkout"),
          (Ab.Purchase = "purchase"),
          (Ab.CompleteRegistration = "register"),
          (Ab.Contact = "submit-contact"),
          (Ab.AddPaymentInfo = "add-payment-info"),
          (Ab.AddToWishlist = "add-to-wishlist"),
          (Ab.Subscribe = "subscribe"),
          Ab),
        en =
          ((Wc = {}),
          (Wc["1"] = ah),
          (Wc["2"] = ah),
          (Wc["3"] = ah),
          (Wc["0"] = bh),
          Wc),
        fn = [bh.AddToCart, bh.Purchase],
        Ot = ha(function (a, c) {
          var b = n(c, "ecommerce"),
            d = n(c, "event") || "";
          if (!(b = b && d && { version: "3", xc: d }))
            a: {
              if (fa(c) || Ka(c))
                if (((b = xa(c)), (d = b[1]), "event" === b[0] && d)) {
                  b = { version: "2", xc: d };
                  break a;
                }
              b = void 0;
            }
          b ||
            (b = (b = n(c, "ecommerce")) && {
              version: "1",
              xc: I(",", ba(b)),
            });
          b && a(b);
        }),
        Pt = F("ag.e", function (a, c) {
          var b = [],
            d = E(a, "ag.s", G([ja, b], z));
          "0" === c.da &&
            na(a, c, function (e) {
              if (
                n(e, "settings.auto_goals") &&
                Ea(a, c) &&
                (e = Rd(a, c, "autogoal"))
              ) {
                e = G([e, c.Ed], dn);
                var f = Ot(e);
                e = G([a, e], cn);
                b.push(gl(a, e));
                b.push(
                  Ue(a, "dataLayer", function (g) {
                    g.wa.D(f);
                  })
                );
              }
            });
          return d;
        }),
        Qt = /[^\d.,]/g,
        Rt = /[.,]$/,
        an = F("ep.pp", function (a, c) {
          if (!c) return 0;
          a: {
            var b = c.replace(Qt, "").replace(Rt, "");
            var d = "0" === b[b.length - 1];
            for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
              var f = b[e - 1];
              if (H(f, [",", "."])) {
                d = f;
                break a;
              }
            }
            d = "";
          }
          b = d ? c.split(d) : [c];
          d = d ? b[1] : "00";
          b = parseFloat(Kb(b[0]) + "." + Kb(d));
          d = Math.pow(10, 8) - 0.01;
          a.isNaN(b)
            ? (b = 0)
            : ((b = a.Math.min(b, d)), (b = a.Math.max(b, 0)));
          return b;
        }),
        St = [
          [["EUR", "\u20ac"], "978"],
          [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"],
          [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"],
          [
            "\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(
              " "
            ),
            "398",
          ],
          [["GBP", "\u00a3", "UKL"], "826"],
          [
            "RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(
              " "
            ),
            "643",
          ],
        ],
        Tt = w(function (a) {
          return new RegExp(a.join("|"), "i");
        }),
        Ut = F("ep.cp", function (a) {
          if (!a) return "643";
          var c = zi(a);
          return (a = $a(function (b) {
            return Tt(b[0]).test(c);
          }, St))
            ? a[1]
            : "643";
        }),
        Vt = w(function () {
          function a() {
            var k = h + "0",
              l = h + "1";
            f[k]
              ? f[l]
                ? ((h = h.slice(0, -1)), --g)
                : ((e[l] = b(8)), (f[l] = 1))
              : ((e[k] = b(8)), (f[k] = 1));
          }
          function c() {
            var k = h + "1";
            f[h + "0"]
              ? f[k]
                ? ((h = h.slice(0, -1)), --g)
                : ((h += "1"), (f[h] = 1))
              : ((h += "0"), (f[h] = 1));
          }
          function b(k) {
            void 0 === k && (k = 1);
            var l = d.slice(g, g + k);
            g += k;
            return l;
          }
          for (
            var d = Jh(
                "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
              ).join(""),
              e = {},
              f = {},
              g = 1,
              h = "";
            g < d.length - 1;

          )
            ("0" === b() ? c : a)();
          return e;
        }),
        Ym = F("ep.dec", function (a, c) {
          if (!c || bd(a)) return [];
          var b = Jh(c),
            d = b[1],
            e = b[2],
            f = b.slice(3);
          if (2 !== Ig(b[0])) return [];
          b = Vt();
          f = f.join("");
          e = Ig(d + e);
          var g = "";
          d = "";
          for (var h = 0; d.length < e && f[h]; )
            (g += f[h]),
              b[g] && ((d += String.fromCharCode(Ig(b[g]))), (g = "")),
              (h += 1);
          b = "";
          for (f = 0; f < d.length; )
            (e = d.charCodeAt(f)),
              128 > e
                ? ((b += String.fromCharCode(e)), f++)
                : 191 < e && 224 > e
                ? ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(((e & 31) << 6) | (g & 63))),
                  (f += 2))
                : ((g = d.charCodeAt(f + 1)),
                  (b += String.fromCharCode(
                    ((e & 15) << 12) |
                      ((g & 63) << 6) |
                      (d.charCodeAt(f + 2) & 63)
                  )),
                  (f += 3));
          d = Db(a, b);
          return fa(d) ? d : [];
        }),
        $m = F("ep.ent", function (a, c, b) {
          a = "" + Ra(a, 10, 99);
          b = "" + 100 * c + b + a;
          if (16 < Ka(b)) return "";
          b = Kh("0", 16, b);
          c = b.slice(0, 8);
          b = b.slice(-8);
          c = (+c ^ 92844).toString(35);
          b = (+b ^ 92844).toString(35);
          return "" + c + "z" + b;
        }),
        hl = u(Ih, Ut),
        il = F("ep.ctp", function (a, c, b, d) {
          var e = hl(a, b),
            f = Hh(a, d);
          Gh(a, c, e, f);
          Ca("MutationObserver", a.MutationObserver) &&
            new a.MutationObserver(function () {
              var g = hl(a, b),
                h = Hh(a, d);
              if (e !== g || f !== h) (e = g), (f = h), Gh(a, c, e, f);
            }).observe(a.document.body, {
              attributes: !0,
              childList: !0,
              subtree: !0,
              characterData: !0,
            });
        }),
        Wt = F("ep.chp", function (a, c, b, d, e) {
          b && rf(a, c);
          return d || e
            ? ia(a).D(
                a.document,
                ["click"],
                E(a, "ep.chp.cl", G([a, c, d, e], Zm))
              )
            : B;
        }),
        $t = F("ep.i", function (a, c) {
          return Ad(a)
            ? Xm(a, c).then(function (b) {
                var d = b.Fh,
                  e = d[0],
                  f = d[1],
                  g = d[2],
                  h = d[3],
                  k = d[4],
                  l = d[5],
                  m = d[6],
                  p = d[7],
                  r = d[8],
                  t = d[9],
                  q = d[10],
                  y = d[11],
                  C = d[12],
                  M = d[13],
                  Q = d[14],
                  ta = d[15];
                if (!b.isEnabled) return K.resolve(B);
                var za = $d(a, e),
                  Ub = $d(a, h),
                  Yc = $d(a, m),
                  Sd = $d(a, r),
                  Xt = "" + e + f + g === "" + h + k + l;
                return new K(function (Yt, Zt) {
                  ac(a)(
                    Ua(Zt, function () {
                      za && il(a, c, f, g, q, y, C);
                      Ub && !Xt && il(a, c, k, l, M, Q, ta);
                      Yt(Wt(a, c, Yc || Sd, p, t));
                    })
                  );
                });
              })
            : K.resolve(B);
        }),
        Fm = [
          "RTCPeerConnection",
          "mozRTCPeerConnection",
          "webkitRTCPeerConnection",
        ],
        au = F("cc.i", function (a, c) {
          var b = G([a, c], Wm);
          b = G([a, b, 300, void 0], Y);
          na(a, c, b);
        }),
        jl = {},
        bu = F("exps.int", function (a, c) {
          return function (b, d, e) {
            var f, g;
            void 0 === d && (d = B);
            if (b && 0 < b.length) {
              var h = wa(a, "e", c),
                k = ud(c).url;
              b = h(
                {
                  J: Aa(((f = {}), (f.ex = 1), (f.ar = 1), f)),
                  G:
                    ((g = {}),
                    (g["page-url"] = k || T(a).href),
                    (g.exp = b),
                    g),
                },
                c
              );
              return Lc(a, "exps.s", b, d, e);
            }
          };
        }),
        cu = v("9-d5ve+.r%7", P),
        du = F("ad", function (a, c) {
          if (!c.sb) {
            var b = L(a);
            if (!b.o("adBlockEnabled")) {
              var d = function (m) {
                  H(m, ["2", "1"]) && b.C("adBlockEnabled", m);
                },
                e = $b(a),
                f = e.o("isad");
              if (f) d(f);
              else {
                var g = v("adStatus", b.C),
                  h = function (m) {
                    m = m ? "1" : "2";
                    d(m);
                    g("complete");
                    e.C("isad", m, 1200);
                    return m;
                  },
                  k = wa(a, "adb", c);
                if (!b.o("adStatus")) {
                  g("process");
                  var l = "metrika/a" + cu().replace(/[^a-v]+/g, "") + "t.gif";
                  Tm(a, function () {
                    return k({ Ra: { eb: l } })
                      .then(v(!1, h))
                      ["catch"](v(!0, h));
                  });
                }
              }
            }
          }
        }),
        eu = F("pr.p", function (a, c) {
          var b, d;
          if (mg(a)) {
            var e = wa(a, "5", c),
              f = Aa(((b = {}), (b.pq = 1), (b.ar = 1), b));
            e(
              {
                J: f,
                G:
                  ((d = {}),
                  (d["page-url"] = T(a).href),
                  (d["page-ref"] = n(a, "document.referrer") || ""),
                  d),
              },
              c
            )["catch"](E(a, "pr.p.s"));
          }
        }),
        Fh = !1,
        fu = F("fid", function (a) {
          var c,
            b = B;
          if (!U(a.PerformanceObserver)) return b;
          var d = L(a);
          if (d.o("fido")) return b;
          d.C("fido", !0);
          var e = new a.PerformanceObserver(
            E(a, "fid", function (f) {
              f = f.getEntries()[0];
              d.C("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
              b();
            })
          );
          b = function () {
            return e.disconnect();
          };
          try {
            e.observe(
              ((c = {}), (c.type = "first-input"), (c.buffered = !0), c)
            );
          } catch (f) {}
          return b;
        }),
        kl = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1,
        },
        gu = w(function () {
          return N(
            function (a, c) {
              var b = mc(c + "/tag.js");
              kl[b] || (a[b] = 1);
              return a;
            },
            {},
            [
              "mc.yandex.ru",
              "mc.yandex.com",
              "cdn.jsdelivr.net/npm/yandex-metrica-watch",
            ]
          );
        }),
        hu = F("p.sci", function (a, c) {
          var b = L(a);
          return b.o("scip")
            ? K.resolve()
            : na(a, c, P).then(function (d) {
                d = n(d, "settings.ins");
                return !b.o("scip") && d ? Sm(a, c, b) : null;
              }, E(a, "ins.cs"));
        }),
        iu = F(
          "lt.p",
          vb("lt.p", function (a) {
            var c;
            if (Ca("PerformanceObserver", a.PerformanceObserver)) {
              var b = 0,
                d = new a.PerformanceObserver(
                  E(a, "lt.o", function (e) {
                    e &&
                      e.getEntries &&
                      ((e = e.getEntries()),
                      (b = N(
                        function (f, g) {
                          return f + g.duration;
                        },
                        b,
                        e
                      )),
                      ec(a).C("lt", b));
                  })
                );
              try {
                d.observe(
                  ((c = {}), (c.type = "longtask"), (c.buffered = !0), c)
                );
              } catch (e) {
                return B;
              }
              return function () {
                return d.disconnect();
              };
            }
            return B;
          })
        ),
        ju = w(u(V("performance.memory.jsHeapSizeLimit"), va("concat", ""))),
        ku = ["availWidth", "availHeight", "availTop"],
        lu =
          "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(
            " "
          ),
        mu = ["webgl", "experimental-webgl"],
        Pm = [-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0],
        mf = v(Oa("ccf"), eb),
        Om =
          "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(
            ";"
          ),
        Ch =
          "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(
            " "
          ),
        Mm = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
        ll = w(function (a) {
          return bd(a) || !Ad(a);
        }),
        Hm = w(vi),
        Bh = w(Db, wb),
        nu = F("phc.p", function (a, c) {
          return ll(a)
            ? B
            : na(a, c, function (b) {
                var d = c.id,
                  e = Cc(a, void 0, d),
                  f = e.o("phc_settings") || "";
                if ((b = n(b, "settings.phchange"))) {
                  var g = jb(a, b) || "";
                  g !== f && e.C("phc_settings", g);
                } else f && (b = Bh(a, f));
                e = n(b, "clientId");
                f = n(b, "orderId");
                b = n(b, "phones") || [];
                e &&
                  f &&
                  b.length &&
                  ((f = {
                    Jb: "",
                    Ub: "",
                    vg: 0,
                    oa: {},
                    xa: [],
                    Pf: !1,
                    lb: !0,
                    l: a,
                    pc: c,
                  }),
                  x(f, { Pf: !0 }),
                  Ah(a, d, f),
                  (b = hd(a)),
                  (e = wi(a, b, 1e3)),
                  (d = D(Ah, null, a, d, f)),
                  e.D(d),
                  xi(a, b));
              });
        }),
        ch = w(
          function (a, c) {
            var b = L(a),
              d = Qa(a),
              e = [],
              f = G([a, c, b, d], hq);
            ad(a) || iq(a, "14.1") || e.push(G([Em, "pp", ""], f));
            var g = Hk(a) && !kf(a, 68);
            g || e.push(G([Gm, "pu", ""], f));
            g ||
              d.Xd ||
              Jd(a) ||
              (e.push(G([Dm, "zzlc", "na"], f)), e.push(G([Cm, "cc", ""], f)));
            return e.length
              ? {
                  Aa: function (h, k) {
                    if (0 === b.o("isEU"))
                      try {
                        z(Dr, e);
                      } catch (l) {}
                    k();
                  },
                  ca: function (h, k) {
                    var l = h.J;
                    if (l && 0 === b.o("isEU"))
                      try {
                        z(ya(l), e);
                      } catch (m) {}
                    k();
                  },
                }
              : {};
          },
          function (a, c) {
            return O(c);
          }
        ),
        ou = u(function (a) {
          a = n(a, "navigator.plugins") || [];
          return Ka(a)
            ? u(
                oa,
                Gc(Boolean),
                Gr(function (c, b) {
                  return c.name > b.name ? 1 : 2;
                }),
                fb(Qm)
              )(a)
            : "";
        }, dd(",")),
        pu = (function (a) {
          return function (c) {
            var b = Za(c);
            if (!b) return "";
            b = b("canvas");
            var d = [],
              e = a(),
              f = e.Nh;
            e = e.Bh;
            try {
              var g = va("getContext", b);
              d = A(u(P, g), e);
            } catch (h) {
              return "";
            }
            return (g = $a(P, d)) ? f(c, { canvas: b, ph: g }) : "";
          };
        })(function () {
          return { Bh: mu, Nh: xm };
        }),
        vm = ["name", "lang", "localService", "voiceURI", "default"],
        ml = w(function (a) {
          return (
            n(a, "crypto.subtle.digest") &&
            n(a, "TextEncoder") &&
            n(a, "FileReader") &&
            n(a, "Blob")
          );
        }),
        El = F("fpm", function (a, c) {
          if (!Ek(a)) return B;
          var b = O(c);
          if (!ml(a)) return pb(a, b, "Not supported"), B;
          var d = Ea(a, c);
          return d
            ? function (e) {
                return new K(function (f, g) {
                  return qb(e)
                    ? ba(e).length
                      ? f(
                          vh(a, e).then(function (h) {
                            var k, l;
                            h &&
                              h.length &&
                              d.params(
                                ((k = {}),
                                (k.__ym = ((l = {}), (l.fpp = h), l)),
                                k)
                              );
                          }, B)
                        )
                      : g(Oa("fpm.l"))
                    : g(Oa("fpm.o"));
                })["catch"](E(a, "fpm.en"));
              }
            : B;
        }),
        qu = Va(/[a-z\u0430-\u044f,.]/gi),
        ru = F("ice", function (a, c, b) {
          var d = Ea(a, c);
          if (d) {
            var e = n(b, "target");
            if (e && ((c = n(e, "value")), (c = rb(c)) && !(100 <= Ka(c)))) {
              b = Kb(c);
              var f = 0 < c.indexOf("@"),
                g = "tel" === n(e, "type") || (!f && Ka(b));
              if (f || g) {
                if (g) {
                  if (qu(c)) return;
                  g = c[0];
                  var h = b[0];
                  if (g !== h && "+" !== g) return;
                  var k = c[1];
                  if ("+" === g && k !== h) return;
                  c = c[Ka(c) - 1];
                  g = b[Ka(b) - 1];
                  if (c !== g) return;
                  c = b;
                }
                b = f ? 5 : 11;
                g = f ? 100 : 16;
                Ka(c) < b ||
                  Ka(c) > g ||
                  wh(a, c).then(function (l) {
                    var m,
                      p,
                      r,
                      t = dg(a, e);
                    d.params(
                      ((m = {}),
                      (m.__ym =
                        ((p = {}),
                        (p.fi = tj(
                          ((r = {}), (r.a = f ? 1 : 0), (r.b = t), (r.c = l), r)
                        ).Ha()),
                        p)),
                      m)
                    );
                  }, E(a, "ice.s"));
              }
            }
          }
        }),
        su = ["text", "email", "tel"],
        tu = ["cc-", "name", "shipping"],
        uu = F("icei", function (a, c) {
          return (
            Ad(a) &&
            ml(a) &&
            ac(a)(
              Ua(
                B,
                G(
                  [
                    a,
                    c,
                    function (b) {
                      var d = n(b, "settings.cf");
                      b = ee(a) || n(b, "settings.eu");
                      if (d && !b) {
                        var e = ia(a);
                        d = ub("input", a.document.body);
                        z(function (f) {
                          Ff(a, f) ||
                            !H(f.type, su) ||
                            Na(P, A(v(f.autocomplete, nc), tu)) ||
                            e.D(f, ["blur"], G([a, c], ru));
                        }, oa(d));
                      }
                    },
                  ],
                  na
                )
              )
            )
          );
        }),
        vu = vb("gic", uu),
        th,
        wu = F("p.ai", function (a, c) {
          return new K(function (b) {
            (ad(a) || bf(a)) &&
              b(
                na(a, c, function (d) {
                  var e;
                  return (d = n(d, "settings.sbp"))
                    ? sh(a, x({}, d, ((e = {}), (e.c = c.id), e)), 10)
                    : B;
                })
              );
            b(B);
          });
        }),
        Wb = ["0", "1", "2", "3"],
        Dc = Wb[0],
        af = Wb[1],
        xu = Wb[2],
        ef = A(u(P, va("concat", "GDPR-ok-view-detailed-")), Wb),
        Vd = ua(
          "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(
            " "
          ),
          ef,
          ["28", "29", "30"]
        ),
        yu = "3 13 14 15 16 17 28".split(" "),
        df = u(fb(V("ymetrikaEvent.type")), Gc(oc(Vd))),
        qm = "ru en et fi lt lv pl fr no sr".split(" "),
        Sb,
        pm =
          ((Sb = {}),
          (Sb["GDPR-ok"] = "ok"),
          (Sb["GDPR-ok-view-default"] = "ok-default"),
          (Sb["GDPR-ok-view-detailed"] = "ok-detailed"),
          (Sb["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
          (Sb["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
          (Sb["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics"),
          (Sb["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
          Sb),
        Xd = [],
        oh = u(df, fb(Er(Vd)), dd(",")),
        ph = u(Gc(oc(Vd)), Ka, Boolean),
        im = w(function (a, c) {
          var b = c.o("gdpr");
          return H(b, Wb) ? "-" + b : "";
        }),
        $c = {},
        mh = w(xc),
        fm = u(va("exec", /counterID=(\d+)/), V("1")),
        nh = ha(function (a, c) {
          var b = mh(a),
            d = oa(c),
            e = d[0],
            f = d[1],
            g = d.slice(2);
          if (f) {
            d = em(a, e);
            var h = d[0],
              k = d[1];
            d = O(k);
            b[d] || (b[d] = {});
            b = b[d];
            c.sf ||
              ($c[f] &&
                N(
                  function (l, m) {
                    return l || !!m(a, k, g, h);
                  },
                  !1,
                  $c[f]
                )) ||
              ("init" === f
                ? ((c.sf = !0),
                  h
                    ? pb(
                        a,
                        "" + e,
                        "Duplicate counter " + e + " initialization"
                      )
                    : (a["yaCounter" + k.id] = new a.Ya[pa.Kb](x({}, g[0], k))))
                : h && h[f] && b.Ei
                ? (h[f].apply(h, g), (c.sf = !0))
                : ((d = b.wg),
                  d || ((d = []), (b.wg = d)),
                  d.push(ua([e, f], g))));
          }
        }),
        zu = vb("is", function (a) {
          var c = -1 < T(a).href.indexOf("_ym_debug=200500"),
            b = $b(a),
            d = b.o("debug_build") === pa.gb;
          if (c || d)
            return (
              b.C("debug_build", pa.gb), Ec(a, { src: bl + "/tag_debug.js" })
            );
        });
      "function" == typeof Promise && Promise.resolve();
      var nl = w(rd),
        Au = w(function () {
          var a = N(
            function (c, b) {
              "ru" !== b && (c[b] = el + "." + b);
              return c;
            },
            {},
            kg
          );
          z(function (c) {
            a[c] = c;
          }, ba(Gk));
          return a;
        }),
        Bu = w(function (a) {
          var c = T(a).hostname;
          return (
            (a = $a(function (b) {
              return b[1].test(c);
            }, Ba(Gk))) && a[0]
          );
        }),
        Cu = ha(function (a, c) {
          var b = cm(c),
            d = [Bu(c) || $l(c)];
          Dk(c) && d.push(b);
          var e = ea(c);
          b = Qa(c);
          var f = b.o("synced", {});
          d = X(function (g) {
            if (a[g]) {
              var h = (f[g] || 1) + 1440 < e(kb);
              h && delete f[g];
              return h;
            }
          }, d);
          b.C("synced", f);
          return A(function (g) {
            return { Hj: a[g], Ri: g };
          }, d);
        }),
        ol = (function (a, c) {
          return function (b, d) {
            var e = O(d);
            e = Au(e);
            var f = Cu(e);
            return Jd(b) || Ed(b)
              ? {}
              : {
                  ca: function (g, h) {
                    var k = g.J,
                      l = L(b),
                      m = Dk(b),
                      p = db(b);
                    k = !(k && k.o("pv"));
                    if (!m || p || k) return h();
                    m = f(b);
                    if (!m.length) return h();
                    if (l.o("startSync")) nl(b).push(h);
                    else {
                      l.C("startSync", !0);
                      l = G([b, m, B], a);
                      m = cf[0];
                      if (!m) return h();
                      m(b)
                        .then(l)
                        .then(h, u(fd(h), E(b, c)))
                        ["catch"](B);
                    }
                  },
                };
          };
        })(function (a, c) {
          var b = ea(a),
            d = L(a),
            e = Qa(a),
            f = ed(a, "c"),
            g = Cb(a, f);
          return N(
            function (h, k) {
              function l() {
                var r = e.o("synced");
                d.C("startSync", !1);
                r && ((r[k.Ri] = p), e.C("synced", r));
                z(ja, nl(a));
              }
              var m = g({ ba: { Ba: ["sync.cook"], Cb: 1500 } }, [
                  pa.Ta + "//" + k.Hj + "/sync_cookie_image_check",
                ]),
                p;
              m.then(function () {
                p = b(kb);
                l();
              })["catch"](function () {
                p = b(kb) - 1435;
                l();
              });
              m = v(m, P);
              return h.then(m);
            },
            K.resolve(""),
            c
          )["catch"](E(a, "ctl"));
        }, "sy.c"),
        Du = ["ecommerce", "user_id", "fpp"],
        Al = F("pa.int", function (a, c) {
          return function () {
            var b,
              d,
              e = xa(arguments),
              f = Zl(e);
            if (!f) return null;
            e = f.Ah;
            var g = f.aa;
            f = f.hb;
            if (!qb(g) && !fa(g)) return null;
            var h = wa(a, "1", c),
              k = ud(c).url,
              l = n(g, "__ym.user_id"),
              m = ba(g),
              p = H("__ymu", m),
              r = H("__ym", m) && l;
            m = !Tf(c);
            var t = g;
            t.__ym &&
              ((t = x({}, g)),
              (t.__ym = N(
                function (q, y) {
                  var C = n(g, "__ym." + y);
                  C && (q[y] = C);
                  return q;
                },
                {},
                Du
              )),
              ba(t.__ym).length || delete t.__ym,
              (m = !!ba(t).length));
            l = Bb(
              a,
              c,
              r
                ? "Set user id " + l
                : (p ? "User p" : "P") + "arams. Counter " + c.id,
              r ? void 0 : JSON.stringify(t)
            );
            h = h(
              {
                V: { aa: g },
                J: Aa(((b = {}), (b.pa = 1), (b.ar = 1), b)),
                G: ((d = {}), (d["page-url"] = k || T(a).href), d),
              },
              c
            ).then(m ? l : B);
            return Lc(a, "p.s", h, f, e);
          };
        }),
        Gl = F("y.p", function (a, c) {
          var b = hj(a, c);
          if (b) {
            var d = Td(a),
              e = G([a, b, c], Yl);
            qh(a, d, function (f) {
              f.D(["params"], e);
            });
            b.$.D(["params"], u(V("1"), e));
          }
        }),
        Rl = F("cs.init", function (a, c) {
          var b,
            d = ui(a);
          d &&
            c.id === d &&
            "0" === c.da &&
            ((d =
              ((b = {}),
              (b.lang = Is(a)),
              (b.fileId = "status"),
              (b.id = "" + c.id),
              b)),
            Y(a, G([a, d], ni), 0, "cs"));
        }),
        Il = F("up.int", function (a, c) {
          return E(a, "up.c", function (b, d, e) {
            var f,
              g = Ea(a, c),
              h = vd(a, O(c)).warn;
            g
              ? qb(b)
                ? ((b = ((f = {}), (f.__ymu = b), f)),
                  (f = g.params) && f(b, d || B, e))
                : h("Wrong user params")
              : h("No counter instance found");
          });
        }),
        Cl = F("trigger.in", function (a, c) {
          c.Fg && Ib(a, G([a, "yacounter" + c.id + "inited"], qq), "t.i");
        }),
        Jl = F("destruct.e", function (a, c, b) {
          return function () {
            var d = L(a),
              e = c.id;
            z(function (f, g) {
              return U(f) && E(a, "dest.fr." + g, f)();
            }, b);
            delete d.o("counters")[O(c)];
            delete a["yaCounter" + e];
          };
        }),
        Kl = F("suid.int", function (a, c) {
          return function (b, d, e) {
            if (Ia(b) || be(a, b)) {
              var f = Ea(a, c);
              b = Bc(["__ym", "user_id", b]);
              f.params(b, d || B, e);
            } else Ld(a, O(c)).error("Incorrect user ID");
          };
        }),
        Ll = F("guid.int", function (a, c) {
          return function (b) {
            var d = Hc(a, c);
            b && Sf(a, b, null, d);
            return d;
          };
        }),
        Wl = w(function (a, c) {
          return na(a, c, V("settings.form_goals"));
        }, wb),
        Eu = v(!0, ih),
        Pl = F("s.f.i", function (a, c) {
          var b = [];
          ia(a).D(a, ["click"], E(a, "s.f.c", G([a, c, b], Vl)));
          ia(a).D(
            a,
            ["submit"],
            E(a, "s.f.e", u(V("target"), G([a, c, b], Eu)))
          );
          kh(a, c, "Form goal. Counter " + c.id + ". Init.");
        }),
        Fu = /[\*\.\?\(\)]/g,
        Gu = w(function (a, c, b) {
          try {
            var d = b.replace("\\s", " ").replace(Fu, "");
            vd(a, "").warn(
              'Function "' +
                d +
                '" has been overriden, this may cause issues with Metrika counter'
            );
          } catch (e) {}
        }, wb),
        Tl = F("r.nn", function (a) {
          If(a).isEnabled &&
            ce(a, yg, function (c) {
              c.wa.D(function (b) {
                Gu(a, b[1], b[0]);
                yg.splice(100);
              });
            });
        }),
        Ac = { position: "absolute" },
        gh = { position: "fixed" },
        Ze = { borderRadius: "50%" },
        Hu = u(V("settings.sm"), la(1)),
        ul = vb("siteStatistics", function (a, c) {
          return (
            !Mj(a) &&
            ac(a)(
              Ua(
                B,
                G(
                  [
                    a,
                    c,
                    function (b) {
                      return Hu(b) ? Ul(a, c.id) : B;
                    },
                  ],
                  na
                )
              )
            )
          );
        }),
        yl = F("phc.h", function (a, c) {
          return Mj(a) || ll(a)
            ? null
            : na(a, c, function (b) {
                if (!n(b, "settings.phchange")) {
                  var d = Cc(a, "").o("yaHidePhones");
                  d = d ? Db(a, d) : "";
                  (b = n(b, "settings.phhide") || d) && si(a, c, b);
                }
              });
        }),
        gc = L(window);
      gc.Pa("hitParam", {});
      gc.Pa("lastReferrer", window.location.href);
      gc.Pa("getCounters", Fs(window));
      ra.er = Uc;
      (function (a) {
        try {
          var c = ed(a, "er"),
            b = rp(a, c);
          Ej.push(function (d, e, f, g) {
            var h, k, l, m, p;
            0.01 >= a.Math.random() ||
              b(
                ((h = {}),
                (h[d] =
                  ((k = {}),
                  (k[pa.gb] =
                    ((l = {}),
                    (l[e] =
                      ((m = {}),
                      (m[f] = g
                        ? ((p = {}), (p[a.location.href] = g), p)
                        : a.location.href),
                      m)),
                    l)),
                  k)),
                h)
              );
          });
        } catch (d) {}
      })(window);
      (function () {
        Ye.push(rq);
        Wf.unshift(qp);
        Sg.push(function (a) {
          var c = void 0;
          void 0 === c && (c = !0);
          L(a).C("oo", c);
        });
      })();
      (function () {
        var a;
        cf.push(Js);
        sa.f = Wa;
        x(ra, ((a = {}), (a.f = Pk), a));
        aa("f", Pb(), 1);
        aa("f", Zf, 2);
      })();
      Ye.push(function (a, c) {
        var b = { ea: O(c), zd: Ea(a, c), Dg: ea(a), fe: Qa(a) },
          d = b.Dg(kb);
        if (!b.fe.Xd) {
          var e = b.fe.o("ymoo" + b.ea);
          if (e && 30 > d - e)
            (b = b.ea), delete L(a).o("counters", {})[b], eb(Oa("uws"));
          else na(a, c, Ks(b))["catch"](E(a, "d.f"));
        }
      });
      (function () {
        var a,
          c,
          b = Eb([Nb]);
        x(ra, ((a = {}), (a.s = b), (a.S = b), (a.u = Uc), a));
        x(sa, ((c = {}), (c.s = Cb), (c.S = Wa), (c.u = Cb), c));
        aa("s");
        aa("u");
        aa("S", Pb(["v", "hid", "u", "vf", "rn"]), 1);
        cb.push(F("s", Ro));
      })();
      sa["8"] = Cb;
      ra["8"] = [Ri];
      cb.push(function (a, c) {
        return na(a, c, function (b) {
          var d,
            e = n(b, "settings.sbp");
          return (
            e &&
            ji(a, b, {
              ib: c,
              Zc: "8",
              data: x({}, e, ((d = {}), (d.c = c.id), d)),
              de: "cs",
            })
          );
        });
      });
      aa("p", Pb(Qe), 1);
      sa.p = Nf;
      ra.p = Eb([0, Nb]);
      Tb.push(Ps);
      Oc({
        Eb: { ja: "webvisor", Xa: Boolean },
        Eh: { ja: "disableFormAnalytics", Xa: Boolean },
      });
      aa("4", Pb(Qe), 1);
      sa["4"] = Nf;
      ra["4"] = Eb([0, Nb, wd]);
      Tb.push(Vs);
      (function () {
        aa("W", Pb(Qe), 1);
        ra.W = Eb([0, Nb]);
        sa.W = Nf;
        Tb.push(Ft);
        Oc({ Eb: { ja: "webvisor" } });
        Oc({
          Tj: { ja: "trustedDomains" },
          kc: { ja: "childIframe", Xa: Boolean },
        });
        Sg.push(function (a) {
          L(a).o("stopRecorder", B)();
        });
        yk("wv");
      })();
      cb.push(It);
      aa("pi");
      sa.pi = Cb;
      ra.pi = Uc;
      yk(
        "w",
        function (a, c) {
          return {
            ca: function (b, d) {
              if (b.J) {
                var e = al(c),
                  f = e.status;
                "rt" === e.Zc &&
                  f &&
                  (b.J.C("rt", f),
                  b.Ra || (b.Ra = {}),
                  (b.Ra.Ci = 1 === f ? Mh(a, c) + "." : ""));
              }
              d();
            },
          };
        },
        2
      );
      (function () {
        cb.push(Jt);
        Oc({
          Ed: {
            ja: "ecommerce",
            Xa: function (a) {
              if (a) return !0 === a ? "dataLayer" : "" + a;
            },
          },
        });
        sa["1"] || (sa["1"] = Wa);
      })();
      zc.push(["ecommerceAdd", Kt]);
      zc.push(["ecommerceRemove", Lt]);
      zc.push(["ecommerceDetail", Mt]);
      zc.push(["ecommercePurchase", Nt]);
      cb.push(Pt);
      cb.push($t);
      ra["6"] = Eb([0, Nb]);
      sa["6"] = Cb;
      cb.push(au);
      zb(Ic, 20);
      aa("f", Ic, 20);
      aa("n", Ic, 20);
      aa("1", Ic, 20);
      aa("d", Ic, 20);
      aa("5", Ic, 20);
      zb(function (a, c) {
        return {
          ca: function (b, d) {
            var e = b.G,
              f = b.J;
            !jl[c.id] &&
              f.o("pv") &&
              c.exp &&
              !e.nohit &&
              ((e.exp = c.exp), (jl[c.id] = !0));
            d();
          },
        };
      }, -99);
      zc.push(["experiments", bu]);
      Ob.e = Fb;
      sa.e = Wa;
      ra.e = bc;
      Oc({ exp: { ja: "experiments" } });
      ck.experiments = "ex";
      cb.push(gs);
      (function () {
        Rk.push(function () {
          window.Ya[pa.Kb].informer = Um(window);
        });
      })();
      zb(of, 6);
      aa("1", of, 6);
      aa("adb");
      aa("n", of, 4);
      ra.adb = Uc;
      sa.adb = me;
      Qd.push(du);
      ra["5"] = bc;
      sa["5"] = Wa;
      Ob["5"] = X(u(uc, oc([lg, te]), Rb), Fb);
      cb.push(eu);
      zb(Eh, 7);
      aa("n", Eh, 6);
      Tb.push(fu);
      sa.d = Wa;
      aa("d", Pb(["hid", "u", "v", "vf"]), 1);
      ra.d = Uc;
      aa(
        "n",
        function (a, c) {
          return {
            Aa: function (b, d) {
              if (!b.V || !b.V.force) {
                var e = 0.002,
                  f = c.id === pa.Xg ? 1 : 0.002,
                  g,
                  h,
                  k,
                  l,
                  m;
                void 0 === e && (e = 1);
                void 0 === f && (f = 1);
                var p = a.performance;
                if (
                  p &&
                  U(p.getEntriesByType) &&
                  ((e = Math.random() > e), (f = Math.random() > f), !e || !f)
                ) {
                  p = a.performance.getEntriesByType("resource");
                  for (
                    var r = {}, t = {}, q = {}, y = gu(a), C = 0;
                    C < p.length;
                    C += 1
                  ) {
                    var M = p[C],
                      Q = M.name.replace(/^https?:\/\//, "").split("?")[0],
                      ta = mc(Q),
                      za =
                        ((g = {}),
                        (g.dns = Math.round(
                          M.domainLookupEnd - M.domainLookupStart
                        )),
                        (g.tcp = Math.round(M.connectEnd - M.connectStart)),
                        (g.duration = Math.round(M.duration)),
                        (g.response = Math.round(
                          M.responseEnd - M.requestStart
                        )),
                        g);
                    "script" !== M.initiatorType ||
                      e ||
                      (t[Q] = x(
                        za,
                        ((h = {}),
                        (h.name = M.name),
                        (h.decodedBodySize = M.decodedBodySize),
                        h)
                      ));
                    (!kl[ta] && !y[ta]) ||
                      r[Q] ||
                      f ||
                      (r[Q] = x(
                        za,
                        ((k = {}), (k.pages = a.location.href), k)
                      ));
                  }
                  ba(r).length && (q.timings8 = r);
                  ba(t).length && (q.scripts = t);
                  if (ba(q).length)
                    wa(
                      a,
                      "d",
                      c
                    )(
                      {
                        J: Aa(((l = {}), (l.ar = "1"), (l.pv = "1"), l)),
                        ba: { fa: jb(a, q) || void 0 },
                        G:
                          ((m = {}),
                          (m["page-url"] = a.location && "" + a.location.href),
                          m),
                      },
                      { id: pa.Zg, da: "0" }
                    )["catch"](E(a, "r.tim.ng2"));
                }
              }
              d();
            },
          };
        },
        7
      );
      ra.ci = Eb([Nb]);
      Tb.push(hu);
      cb.push(iu);
      Tb.push(os);
      cb.push(nu);
      zb(ch, 8);
      aa("f", ch, 3);
      aa("n", ch, 5);
      Qd.push(
        (function (a) {
          return F("fip", function (c) {
            if (!Hk(c) || Ed(c)) {
              var b = Qa(c);
              if (!b.o("fip")) {
                var d = u(
                  fb(
                    u(function (e, f) {
                      return F("fip." + f, e)(c);
                    }, D(kr, null))
                  ),
                  dd("-")
                )(a);
                b.C("fip", d);
              }
            }
          });
        })([
          pu,
          ou,
          function (a) {
            var c = n(a, "ApplePaySession"),
              b = T(a).protocol;
            a = c && "https:" === b && !db(a) ? c : void 0;
            c = "";
            if (!a) return c;
            try {
              c = "" + a.canMakePayments();
              b = "";
              var d = a.supportsVersion;
              if (U(d))
                for (var e = 1; 20 >= e; e += 1)
                  b += d.call(a, e) ? "" + e : "0";
              return b + c;
            } catch (f) {
              return c;
            }
          },
          function (a) {
            a = n(a, "navigator") || {};
            return a.doNotTrack || a.msDoNotTrack || "unknown";
          },
          function (a) {
            if ((a = qs(a)))
              try {
                for (var c = [], b = 0; b < Ik.length; b += 1) {
                  var d = a(Ik[b]);
                  c.push(d);
                }
                var e = c;
              } catch (f) {
                e = [];
              }
            else e = [];
            return e ? I("x", e) : "";
          },
          function (a) {
            var c = void 0;
            void 0 === c && (c = lu);
            var b = n(a, "navigator") || {};
            c = A(v(b, n), c);
            c = I("x", c);
            try {
              var d = n(a, "navigator.getGamepads");
              var e = (Ja(d, "getGamepads") && a.navigator.getGamepads()) || [];
            } catch (f) {
              e = [];
            }
            return c + "x" + Ka(e);
          },
          ju,
          function (a) {
            a = n(a, "screen") || {};
            return I("x", A(v(a, n), ku));
          },
          function (a) {
            return I("x", um(a) || []);
          },
          function (a) {
            a = Lm(a);
            return fa(a) ? I("x", a) : a;
          },
          function (a) {
            return (a = Nm(a))
              ? u(
                  Hr,
                  Gc(P),
                  fb(G(["", ["matches", "media"]], wm)),
                  v("x", I)
                )(a)
              : "";
          },
        ])
      );
      zb(function (a) {
        return {
          ca: function (c, b) {
            var d = c.J,
              e = Qa(a).o("fip");
            e && d && (d.C("fip", e), Ud(c, "fip", id(e)));
            b();
          },
        };
      }, 9);
      aa(
        "h",
        function (a) {
          return {
            Aa: function (c, b) {
              var d = c.uj;
              pf(c) && d && L(a).C("isEU", n(d, "settings.eu"));
              b();
            },
          };
        },
        3
      );
      Qd.push(ee);
      Tb.push(vu);
      cb.push(wu);
      Oc({ dk: { ja: "yaDisableGDPR" }, ek: { ja: "yaGDPRLang" } });
      Wf.push(function (a, c) {
        return {
          ca: function (b, d) {
            hm(a, b, c, d);
          },
        };
      });
      jg.push("gdpr", "gdpr_popup");
      ig.push(function (a, c) {
        var b = Td(a);
        b = df(b);
        if (X(oc(yu), b).length) return !0;
        b = c(a, "gdpr");
        return H(b, [Dc, xu]);
      });
      wj.push(function (a) {
        var c = n(a, "document.referrer");
        if (c) return (a = Kc(a, c).host), (a = xh(a)), el + "." + (a || Gt);
      });
      (function () {
        jg.push("_ym_debug_build");
        gm("init", function (a, c) {
          var b = "1" === c.da,
            d = Tf(c);
          return db(a) || b || d || !zu(a) ? !1 : !0;
        });
      })();
      zb(ol, 5);
      aa("1", ol, 6);
      ra.c = Uc;
      sa.c = Cb;
      (function (a) {
        var c = L(a);
        c.o("i") || (c.C("i", !0), ia(a).D(a, ["message"], v(a, dp)));
      })(window);
      if (window.Ya && Ve) {
        var pl = pa.Kb;
        window.Ya[pl] = Ve;
        Gs(window);
        var Iu = window.Ya[pl];
        z(u(yd([window]), ja), Rk);
        Iu.counters = gc.o("getCounters");
      }
      (function (a) {
        var c = n(a, "ym");
        if (c) {
          var b = n(c, "a");
          b || ((c.a = []), (b = c.a));
          var d = nh(a);
          ce(
            a,
            b,
            function (e) {
              e.wa.D(d);
            },
            !0
          );
        }
      })(window);
    })();
  } catch (Ve) {}
}.call(this));
