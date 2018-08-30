
// ==UserScript==
// @name        Flix
// @version     Barracuda-3.0.6
// @namespace   @XOR
// @description User script for downloading subtitles and audio from Netflix
// @author      XOR / mod by Barracuda
// @include     https://www.netflix.com/*
// @icon        data:image/png;base64,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
// @grant       none
// @run-at      document-start
// @noframes
// ==/UserScript==
/* jshint ignore:start */
!(function() {
    'use strict';
    var $jscomp = $jscomp || {};
    $jscomp.scope = {};
    $jscomp.ASSUME_ES5 = !1;
    $jscomp.ASSUME_NO_NATIVE_MAP = !1;
    $jscomp.ASSUME_NO_NATIVE_SET = !1;
    $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, d) {
        a != Array.prototype && a != Object.prototype && (a[b] = d.value)
    };
    $jscomp.getGlobal = function(a) {
        return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
    };
    $jscomp.global = $jscomp.getGlobal(this);
    $jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
    $jscomp.initSymbol = function() {
        $jscomp.initSymbol = function() {};
        $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
    };
    $jscomp.Symbol = function() {
        var a = 0;
        return function(b) {
            return $jscomp.SYMBOL_PREFIX + (b || "") + a++
        }
    }();
    $jscomp.initSymbolIterator = function() {
        $jscomp.initSymbol();
        var a = $jscomp.global.Symbol.iterator;
        a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return $jscomp.arrayIterator(this)
            }
        });
        $jscomp.initSymbolIterator = function() {}
    };
    $jscomp.arrayIterator = function(a) {
        var b = 0;
        return $jscomp.iteratorPrototype(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    };
    $jscomp.iteratorPrototype = function(a) {
        $jscomp.initSymbolIterator();
        a = {
            next: a
        };
        a[$jscomp.global.Symbol.iterator] = function() {
            return this
        };
        return a
    };
    $jscomp.makeIterator = function(a) {
        $jscomp.initSymbolIterator();
        $jscomp.initSymbol();
        $jscomp.initSymbolIterator();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : $jscomp.arrayIterator(a)
    };
    $jscomp.polyfill = function(a, b, d, f) {
        if (b) {
            d = $jscomp.global;
            a = a.split(".");
            for (f = 0; f < a.length - 1; f++) {
                var e = a[f];
                e in d || (d[e] = {});
                d = d[e]
            }
            a = a[a.length - 1];
            f = d[a];
            b = b(f);
            b != f && null != b && $jscomp.defineProperty(d, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    $jscomp.FORCE_POLYFILL_PROMISE = !1;
    $jscomp.polyfill("Promise", function(a) {
        function b() {
            this.batch_ = null
        }

        function d(a) {
            return a instanceof e ? a : new e(function(b, r) {
                b(a)
            })
        }
        if (a && !$jscomp.FORCE_POLYFILL_PROMISE) return a;
        b.prototype.asyncExecute = function(a) {
            null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_());
            this.batch_.push(a);
            return this
        };
        b.prototype.asyncExecuteBatch_ = function() {
            var a = this;
            this.asyncExecuteFunction(function() {
                a.executeBatch_()
            })
        };
        var f = $jscomp.global.setTimeout;
        b.prototype.asyncExecuteFunction = function(a) {
            f(a,
                0)
        };
        b.prototype.executeBatch_ = function() {
            for (; this.batch_ && this.batch_.length;) {
                var a = this.batch_;
                this.batch_ = [];
                for (var b = 0; b < a.length; ++b) {
                    var d = a[b];
                    a[b] = null;
                    try {
                        d()
                    } catch (D) {
                        this.asyncThrow_(D)
                    }
                }
            }
            this.batch_ = null
        };
        b.prototype.asyncThrow_ = function(a) {
            this.asyncExecuteFunction(function() {
                throw a;
            })
        };
        var e = function(a) {
            this.state_ = 0;
            this.result_ = void 0;
            this.onSettledCallbacks_ = [];
            var b = this.createResolveAndReject_();
            try {
                a(b.resolve, b.reject)
            } catch (w) {
                b.reject(w)
            }
        };
        e.prototype.createResolveAndReject_ =
            function() {
                function a(a) {
                    return function(r) {
                        d || (d = !0, a.call(b, r))
                    }
                }
                var b = this,
                    d = !1;
                return {
                    resolve: a(this.resolveTo_),
                    reject: a(this.reject_)
                }
            };
        e.prototype.resolveTo_ = function(a) {
            if (a === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
            else if (a instanceof e) this.settleSameAsPromise_(a);
            else {
                a: switch (typeof a) {
                    case "object":
                        var b = null != a;
                        break a;
                    case "function":
                        b = !0;
                        break a;
                    default:
                        b = !1
                }
                b ? this.resolveToNonPromiseObj_(a) : this.fulfill_(a)
            }
        };
        e.prototype.resolveToNonPromiseObj_ = function(a) {
            var b =
                void 0;
            try {
                b = a.then
            } catch (w) {
                this.reject_(w);
                return
            }
            "function" == typeof b ? this.settleSameAsThenable_(b, a) : this.fulfill_(a)
        };
        e.prototype.reject_ = function(a) {
            this.settle_(2, a)
        };
        e.prototype.fulfill_ = function(a) {
            this.settle_(1, a)
        };
        e.prototype.settle_ = function(a, b) {
            if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.state_);
            this.state_ = a;
            this.result_ = b;
            this.executeOnSettledCallbacks_()
        };
        e.prototype.executeOnSettledCallbacks_ = function() {
            if (null != this.onSettledCallbacks_) {
                for (var a =
                        0; a < this.onSettledCallbacks_.length; ++a) t.asyncExecute(this.onSettledCallbacks_[a]);
                this.onSettledCallbacks_ = null
            }
        };
        var t = new b;
        e.prototype.settleSameAsPromise_ = function(a) {
            var b = this.createResolveAndReject_();
            a.callWhenSettled_(b.resolve, b.reject)
        };
        e.prototype.settleSameAsThenable_ = function(a, b) {
            var d = this.createResolveAndReject_();
            try {
                a.call(b, d.resolve, d.reject)
            } catch (D) {
                d.reject(D)
            }
        };
        e.prototype.then = function(a, b) {
            function d(a, b) {
                return "function" == typeof a ? function(b) {
                        try {
                            f(a(b))
                        } catch (z) {
                            r(z)
                        }
                    } :
                    b
            }
            var f, r, I = new e(function(a, b) {
                f = a;
                r = b
            });
            this.callWhenSettled_(d(a, f), d(b, r));
            return I
        };
        e.prototype.catch = function(a) {
            return this.then(void 0, a)
        };
        e.prototype.callWhenSettled_ = function(a, b) {
            function d() {
                switch (e.state_) {
                    case 1:
                        a(e.result_);
                        break;
                    case 2:
                        b(e.result_);
                        break;
                    default:
                        throw Error("Unexpected state: " + e.state_);
                }
            }
            var e = this;
            null == this.onSettledCallbacks_ ? t.asyncExecute(d) : this.onSettledCallbacks_.push(d)
        };
        e.resolve = d;
        e.reject = function(a) {
            return new e(function(b, d) {
                d(a)
            })
        };
        e.race = function(a) {
            return new e(function(b,
                e) {
                for (var f = $jscomp.makeIterator(a), r = f.next(); !r.done; r = f.next()) d(r.value).callWhenSettled_(b, e)
            })
        };
        e.all = function(a) {
            var b = $jscomp.makeIterator(a),
                f = b.next();
            return f.done ? d([]) : new e(function(a, e) {
                function r(b) {
                    return function(d) {
                        t[b] = d;
                        w--;
                        0 == w && a(t)
                    }
                }
                var t = [],
                    w = 0;
                do t.push(void 0), w++, d(f.value).callWhenSettled_(r(t.length - 1), e), f = b.next(); while (!f.done)
            })
        };
        return e
    }, "es6", "es3");
    $jscomp.polyfill("Promise.prototype.finally", function(a) {
        return a ? a : function(a) {
            return this.then(function(b) {
                return Promise.resolve(a()).then(function() {
                    return b
                })
            }, function(b) {
                return Promise.resolve(a()).then(function() {
                    throw b;
                })
            })
        }
    }, "es9", "es3");
    $jscomp.underscoreProtoCanBeSet = function() {
        var a = {
                a: !0
            },
            b = {};
        try {
            return b.__proto__ = a, b.a
        } catch (d) {}
        return !1
    };
    $jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null;
    $jscomp.generator = {};
    $jscomp.generator.ensureIteratorResultIsObject_ = function(a) {
        if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object");
    };
    $jscomp.generator.Context = function() {
        this.isRunning_ = !1;
        this.yieldAllIterator_ = null;
        this.yieldResult = void 0;
        this.nextAddress = 1;
        this.finallyAddress_ = this.catchAddress_ = 0;
        this.finallyContexts_ = this.abruptCompletion_ = null
    };
    $jscomp.generator.Context.prototype.start_ = function() {
        if (this.isRunning_) throw new TypeError("Generator is already running");
        this.isRunning_ = !0
    };
    $jscomp.generator.Context.prototype.stop_ = function() {
        this.isRunning_ = !1
    };
    $jscomp.generator.Context.prototype.jumpToErrorHandler_ = function() {
        this.nextAddress = this.catchAddress_ || this.finallyAddress_
    };
    $jscomp.generator.Context.prototype.next_ = function(a) {
        this.yieldResult = a
    };
    $jscomp.generator.Context.prototype.throw_ = function(a) {
        this.abruptCompletion_ = {
            exception: a,
            isException: !0
        };
        this.jumpToErrorHandler_()
    };
    $jscomp.generator.Context.prototype.return = function(a) {
        this.abruptCompletion_ = {
            return: a
        };
        this.nextAddress = this.finallyAddress_
    };
    $jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function(a) {
        this.abruptCompletion_ = {
            jumpTo: a
        };
        this.nextAddress = this.finallyAddress_
    };
    $jscomp.generator.Context.prototype.yield = function(a, b) {
        this.nextAddress = b;
        return {
            value: a
        }
    };
    $jscomp.generator.Context.prototype.yieldAll = function(a, b) {
        a = $jscomp.makeIterator(a);
        var d = a.next();
        $jscomp.generator.ensureIteratorResultIsObject_(d);
        if (d.done) this.yieldResult = d.value, this.nextAddress = b;
        else return this.yieldAllIterator_ = a, this.yield(d.value, b)
    };
    $jscomp.generator.Context.prototype.jumpTo = function(a) {
        this.nextAddress = a
    };
    $jscomp.generator.Context.prototype.jumpToEnd = function() {
        this.nextAddress = 0
    };
    $jscomp.generator.Context.prototype.setCatchFinallyBlocks = function(a, b) {
        this.catchAddress_ = a;
        void 0 != b && (this.finallyAddress_ = b)
    };
    $jscomp.generator.Context.prototype.setFinallyBlock = function(a) {
        this.catchAddress_ = 0;
        this.finallyAddress_ = a || 0
    };
    $jscomp.generator.Context.prototype.leaveTryBlock = function(a, b) {
        this.nextAddress = a;
        this.catchAddress_ = b || 0
    };
    $jscomp.generator.Context.prototype.enterCatchBlock = function(a) {
        this.catchAddress_ = a || 0;
        a = this.abruptCompletion_.exception;
        this.abruptCompletion_ = null;
        return a
    };
    $jscomp.generator.Context.prototype.enterFinallyBlock = function(a, b, d) {
        d ? this.finallyContexts_[d] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
        this.catchAddress_ = a || 0;
        this.finallyAddress_ = b || 0
    };
    $jscomp.generator.Context.prototype.leaveFinallyBlock = function(a, b) {
        b = this.finallyContexts_.splice(b || 0)[0];
        if (b = this.abruptCompletion_ = this.abruptCompletion_ || b) {
            if (b.isException) return this.jumpToErrorHandler_();
            void 0 != b.jumpTo && this.finallyAddress_ < b.jumpTo ? (this.nextAddress = b.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_
        } else this.nextAddress = a
    };
    $jscomp.generator.Context.prototype.forIn = function(a) {
        return new $jscomp.generator.Context.PropertyIterator(a)
    };
    $jscomp.generator.Context.PropertyIterator = function(a) {
        this.object_ = a;
        this.properties_ = [];
        for (var b in a) this.properties_.push(b);
        this.properties_.reverse()
    };
    $jscomp.generator.Context.PropertyIterator.prototype.getNext = function() {
        for (; 0 < this.properties_.length;) {
            var a = this.properties_.pop();
            if (a in this.object_) return a
        }
        return null
    };
    $jscomp.generator.Engine_ = function(a) {
        this.context_ = new $jscomp.generator.Context;
        this.program_ = a
    };
    $jscomp.generator.Engine_.prototype.next_ = function(a) {
        this.context_.start_();
        if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
        this.context_.next_(a);
        return this.nextStep_()
    };
    $jscomp.generator.Engine_.prototype.return_ = function(a) {
        this.context_.start_();
        var b = this.context_.yieldAllIterator_;
        if (b) return this.yieldAllStep_("return" in b ? b["return"] : function(a) {
            return {
                value: a,
                done: !0
            }
        }, a, this.context_.return);
        this.context_.return(a);
        return this.nextStep_()
    };
    $jscomp.generator.Engine_.prototype.throw_ = function(a) {
        this.context_.start_();
        if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
        this.context_.throw_(a);
        return this.nextStep_()
    };
    $jscomp.generator.Engine_.prototype.yieldAllStep_ = function(a, b, d) {
        try {
            var f = a.call(this.context_.yieldAllIterator_, b);
            $jscomp.generator.ensureIteratorResultIsObject_(f);
            if (!f.done) return this.context_.stop_(), f;
            var e = f.value
        } catch (t) {
            return this.context_.yieldAllIterator_ = null, this.context_.throw_(t), this.nextStep_()
        }
        this.context_.yieldAllIterator_ = null;
        d.call(this.context_, e);
        return this.nextStep_()
    };
    $jscomp.generator.Engine_.prototype.nextStep_ = function() {
        for (; this.context_.nextAddress;) try {
            var a = this.program_(this.context_);
            if (a) return this.context_.stop_(), {
                value: a.value,
                done: !1
            }
        } catch (b) {
            this.context_.yieldResult = void 0, this.context_.throw_(b)
        }
        this.context_.stop_();
        if (this.context_.abruptCompletion_) {
            a = this.context_.abruptCompletion_;
            this.context_.abruptCompletion_ = null;
            if (a.isException) throw a.exception;
            return {
                value: a.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    $jscomp.generator.Generator_ = function(a) {
        this.next = function(b) {
            return a.next_(b)
        };
        this.throw = function(b) {
            return a.throw_(b)
        };
        this.return = function(b) {
            return a.return_(b)
        };
        $jscomp.initSymbolIterator();
        $jscomp.initSymbol();
        $jscomp.initSymbolIterator();
        this[Symbol.iterator] = function() {
            return this
        }
    };
    $jscomp.generator.createGenerator = function(a, b) {
        b = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
        $jscomp.setPrototypeOf && $jscomp.setPrototypeOf(b, a.prototype);
        return b
    };
    $jscomp.asyncExecutePromiseGenerator = function(a) {
        function b(b) {
            return a.next(b)
        }

        function d(b) {
            return a.throw(b)
        }
        return new Promise(function(f, e) {
            function t(a) {
                a.done ? f(a.value) : Promise.resolve(a.value).then(b, d).then(t, e)
            }
            t(a.next())
        })
    };
    $jscomp.asyncExecutePromiseGeneratorFunction = function(a) {
        return $jscomp.asyncExecutePromiseGenerator(a())
    };
    $jscomp.asyncExecutePromiseGeneratorProgram = function(a) {
        return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))
    };
    $jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    };
    $jscomp.inherits = function(a, b) {
        a.prototype = $jscomp.objectCreate(b.prototype);
        a.prototype.constructor = a;
        if ($jscomp.setPrototypeOf) {
            var d = $jscomp.setPrototypeOf;
            d(a, b)
        } else
            for (d in b)
                if ("prototype" != d)
                    if (Object.defineProperties) {
                        var f = Object.getOwnPropertyDescriptor(b, d);
                        f && Object.defineProperty(a, d, f)
                    } else a[d] = b[d];
        a.superClass_ = b.prototype
    };
    $jscomp.arrayFromIterator = function(a) {
        for (var b, d = []; !(b = a.next()).done;) d.push(b.value);
        return d
    };
    $jscomp.arrayFromIterable = function(a) {
        return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a))
    };
    (function(a, b) {
        function d() {
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(a) {
                return p ? a.return(p) : a.return(new Promise(function(a, c) {
                    var b = indexedDB.open("netflix.player");
                    b.onerror = function(a) {
                        c(new F("Erro ao abrir BD", this.result))
                    };
                    b.onsuccess = function(b) {
                        b = b.target.result;
                        try {
                            var g = b.transaction(["namedatapairs"]).objectStore("namedatapairs").get("mslstore");
                            g.onerror = function(a) {
                                c(new F("Erro ao obter objeto do BD", this.result))
                            };
                            g.onsuccess = function(b) {
                                p = b.target.result.data;
                                p.sequencenumber = JSON.parse(atob(p.masterTokenJSON.tokendata)).sequencenumber;
                                a(p)
                            }
                        } catch (k) {
                            c(new F("Erro ao iniciar transa\u00e7\u00e3o", k))
                        }
                    }
                }))
            })
        }

        function f(a, b) {
            var c = {
                headers: {
                    "Content-Type": "text/plain"
                },
                credentials: "include"
            };
            Object.keys(b || {}).forEach(function(a) {
                "headers" === a ? Object.keys(headers).forEach(function(a) {
                    return c.headers[a] = b.headers[a]
                }) : c[a] = b[a]
            });
            c.method = "POST";
            return fetch(a, c).then(function(a) {
                return a.text()
            })
        }

        function e(a) {
            var b;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(c) {
                if (1 ==
                    c.nextAddress) return c.yield(crypto.subtle.sign({
                    name: "HMAC"
                }, p.hmacKey, M.encode(a)).then(function(a) {
                    return new Uint8Array(a)
                }), 2);
                b = c.yieldResult;
                return c.return(A.fromByteArray(b))
            })
        }

        function t(a) {
            var b = new Uint8Array(a);
            for (--a; 0 <= a; --a) b[a] = 256 * Math.random();
            return b
        }

        function r(a) {
            var b, c, d;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(g) {
                if (1 == g.nextAddress) return b = t(16), c = {
                    keyid: p.esn + "_" + p.sequencenumber,
                    sha256: "AA==",
                    iv: A.fromByteArray(b)
                }, g.yield(crypto.subtle.encrypt({
                    name: "AES-CBC",
                    iv: b
                }, p.encryptionKey, M.encode(a)).then(function(a) {
                    return new Uint8Array(a)
                }), 2);
                d = g.yieldResult;
                c.ciphertext = A.fromByteArray(d);
                return g.return(JSON.stringify(c))
            })
        }

        function I() {
            var a;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(b) {
                if (1 == b.nextAddress) return b.yield(crypto.subtle.exportKey("spki", p.keyxPublicKey).then(function(a) {
                    return new Uint8Array(a)
                }), 2);
                a = b.yieldResult;
                return b.return(A.fromByteArray(a))
            })
        }

        function w(a) {
            var b, c, d, h, l, k, q;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(g) {
                if (1 ==
                    g.nextAddress) return b = Math.random() * Math.pow(2, 52), d = c = {
                    sender: p.esn,
                    capabilities: {
                        languages: [],
                        compressionalgos: a && (Array.isArray(a) ? a : [a]) || []
                    },
                    renewable: !0,
                    messageid: b
                }, g.yield(I(), 2);
                d.keyrequestdata = [{
                    scheme: "ASYMMETRIC_WRAPPED",
                    keydata: {
                        publickey: g.yieldResult,
                        mechanism: "JWK_RSA",
                        keypairid: "rsaKeypairId"
                    }
                }];
                if (p.userList && p.userList.length) {
                    h = [];
                    l = $jscomp.makeIterator(p.userList[0].serviceTokenJSONList);
                    for (k = l.next(); !k.done; k = l.next()) q = k.value, h.push(q);
                    c.useridtoken = p.userList[0].userIdTokenJSON;
                    c.servicetokens = h
                }
                c.userauthdata = {
                    scheme: "NETFLIXID",
                    authdata: {}
                };
                return g.return({
                    id: b,
                    header: JSON.stringify(c)
                })
            })
        }

        function D(a) {
            var b, c, d, h, l, k, q, N, m, x, f, u;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(g) {
                switch (g.nextAddress) {
                    case 1:
                        return g.yield(w(), 2);
                    case 2:
                        return b = g.yieldResult, g.yield(r(b.header), 3);
                    case 3:
                        return c = g.yieldResult, d = p.masterTokenJSON, h = btoa(c), g.yield(e(c), 4);
                    case 4:
                        return l = {
                                mastertoken: d,
                                headerdata: h,
                                signature: g.yieldResult
                            }, k = '[{},{"headers":{},"path":"/cbp/cadmium-13","payload":{"data":"' +
                            JSON.stringify(a).replace(/"/g, '\\"') + '"},"query":""}]', q = A.fromByteArray(X.compress(k)), N = {
                                messageid: b.id,
                                data: q,
                                compressionalgo: "LZW",
                                sequencenumber: 1,
                                endofmsg: !0
                            }, g.yield(r(JSON.stringify(N)), 5);
                    case 5:
                        return m = g.yieldResult, x = btoa(m), g.yield(e(m), 6);
                    case 6:
                        return f = {
                            payload: x,
                            signature: g.yieldResult
                        }, u = JSON.stringify(l) + JSON.stringify(f), g.return(u)
                }
            })
        }

        function T(a) {
            var b, c, e, h;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(g) {
                switch (g.nextAddress) {
                    case 1:
                        return g.yield(d(), 2);
                    case 2:
                        return b = {
                            method: "manifest",
                            lookupType: "PREPARE",
                            viewableIds: Array.isArray(a) ? a : [a],
                            profiles: "playready-h264bpl30-dash playready-h264mpl30-dash heaac-2-dash ddplus-2.0-dash ddplus-atmos-dash ddplus-5.1-dash dd-5.1-elem dfxp-ls-sdh ddplus-5.1hq-dash dd-pp-5.1-dash dd-sq-atmos-5.1-dash dd-5.1-m2ts heaac-sbr-2-dash webvtt-lssdh-ios8".split(" "),
                            drmSystem: "widevine",
                            appId: "14673889385265",
                            sessionParams: {
                                pinCapableClient: !1,
                                uiplaycontext: "null"
                            },
                            sessionId: "14673889385265",
                            trackId: 0,
                            flavor: "PRE_FETCH",
                            secureUrls: !0,
                            supportPreviewContent: !0,
                            forceClearStreams: !1,
                            languages: ["en-US"],
                            clientVersion: "4.0004.899.011",
                            uiVersion: "akira",
                            showAllSubDubTracks: !0,
                        }, g.yield(D(b), 3);
                    case 3:
                        return c = g.yieldResult, g.yield(f(Y.manifest, {
                            body: c
                        }), 4);
                    case 4:
                        return e = g.yieldResult, g.yield(W(U(e)), 5);
                    case 5:
                        return h = g.yieldResult, g.return(h)
                }
            })
        }

        function W(a) {
            var b, c, d, h, l, k, q, e, m;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(g) {
                switch (g.nextAddress) {
                    case 1:
                        b = "", c = $jscomp.makeIterator(a), d = c.next();
                    case 2:
                        if (d.done) {
                            g.jumpTo(4);
                            break
                        }
                        h = d.value;
                        l = JSON.parse(atob(h));
                        k = A.toByteArray(l.iv);
                        q = A.toByteArray(l.ciphertext);
                        return g.yield(crypto.subtle.decrypt({
                            name: "AES-CBC",
                            iv: k
                        }, p.encryptionKey, q).then(function(a) {
                            return new Uint8Array(a)
                        }), 5);
                    case 5:
                        e = g.yieldResult;
                        m = JSON.parse((new TextDecoder).decode(e));
                        b += atob(m.data);
                        d = c.next();
                        g.jumpTo(2);
                        break;
                    case 4:
                        return b = JSON.parse(b)[1].payload.data, b = atob(b), g.return(JSON.parse(b))
                }
            })
        }

        function U(a) {
            for (var b = [], c = a.indexOf('payload":"'), d; ~c;) c += 10, d = a.indexOf('"', c), b.push(a.slice(c, d)), c = a.indexOf('payload":"', d);
            return b
        }

        function V(a) {
            return new Promise(function(b) {
                setTimeout(b, a)
            })
        }

        function E(a, b) {
            if (a) {
                var c = a;
                Array.isArray(c) ?
                    c = !0 : (c = Object.prototype.toString.call(c), c = "[object HTMLCollection]" === c || "[object NodeList]" === c ? !0 : !1);
                c || (a = [a]);
                for (c = a.length - 1; 0 <= c; --c) a[c].style.display = b
            }
        }

        function z(a) {
            E(a, "none")
        }

        function n(a, b) {
            b = void 0 === b ? document : b;
            return b.querySelector(a)
        }

        function O(a, b) {
            b = void 0 === b ? document : b;
            return b.querySelectorAll(a)
        }

        function C(a, b) {
            a = "" + a;
            return "0".repeat(Math.max(0, b - a.length)) + a
        }

        function Z(a) {
            var b = function(a) {
                    var b = Math.round(~~a.substr(-8, 7) / 1E4);
                    a = ~~a.slice(0, -8);
                    var c = a % 60,
                        g = Math.floor(a /
                            60 % 60);
                    return C(Math.floor(a / 3600), 2) + ":" + C(g, 2) + ":" + C(c, 2) + "," + C(b, 3)
                },
                c = (new DOMParser).parseFromString(a, "text/xml"),
                d = [];
            a = c.getElementsByTagName("style");
            for (var h = a.length - 1; 0 <= h; --h) {
                var l = a[h];
                "italic" === l.getAttribute("tts:fontStyle") && d.push(l.getAttribute("xml:id"))
            }
            a = function(a, b) {
                return ~d.indexOf(b.getAttribute("style")) ? "<i>" + a + "</i>" : a
            };
            h = /<\/i>\n<i>/g;
            c = c.getElementsByTagName("p");
            l = c.length;
            for (var k = [], q = 0, e = 0, m; q < l;) {
                for (var x = c[q++], f = x.childNodes, u = f.length, y = "", p = 0; p < u; ++p) {
                    var n =
                        f[p];
                    "br" === n.tagName ? y += "\n" : n.textContent && (y = "span" === n.tagName ? y + a(n.textContent, n) : y + n.textContent)
                }
                y && (f = b(x.getAttribute("begin")), u = b(x.getAttribute("end")), y = a(y, x), f === m ? k[e - 1] += "\n" + y.replace(h, "\n") : k[e] = ++e + "\n" + f + " --\x3e " + u + "\n" + y.replace(h, "\n"), m = f)
            }
            k.push("");
            return k.join("\n\n")
        }

        function aa(a) {
            if ((a = n(".video-title > div") || n(".player-status") || n(".video-title > h4")) && 1 < a.children.length) {
                var b = a.children,
                    c = /(\d+):.+?(\d+)$/.exec(b[1].textContent);
                if (c) return b[0].textContent +
                    ".S" + C(c[1], 2) + "E" + C(c[2], 2)
            }
            return a && a.textContent || ""
        }

        function ba(a, b) {
            var c = URL.createObjectURL(a);
            a = document.createElement("a");
            a.style.display = "none";
            a.download = b;
            a.href = c;
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(function() {
                return URL.revokeObjectURL(c)
            }, 1E4)
        }

        function ca(a, b) {
            for (var c = 0, g = a.length; c < g; ++c) a[c].addEventListener("click", b)
        }

        function P(a, b) {
            return b.includes(a) ? a : b[0]
        }

        function Q(a, b) {
            for (var c = "pt-BR" === navigator.language ? "For\u00e7ada" : "Forced", g = 0, d = a.length; g <
                d; ++g) {
                var l = a[g],
                    k = l.bcp47;
                if (k) {
                    b[k] || (b[k] = {});
                    k = b[k];
                    var q = l.downloadables;
                    if ("AUDIO" === l.type) {
                        l = "ASSISTIVE" === l.trackType ? "-ad" : "";
                        for (var e = q.length - 1; 0 <= e; --e) {
                            var m = q[e],
                                f = m.contentProfile + l,
                                n = m.id.split(";")[1];
                            m = {
                                bitrate: m.bitrate,
                                type: "AUDIO",
                                text: m.bitrate + "kbps",
                                downloadUrl: m.urls[n]
                            };
                            if (!k[f]) k[f] = [];
                            else if (k[f][0].bitrate < m.bitrate) {
                                k[f].unshift(m);
                                continue
                            }
                            k[f].push(m)
                        }
                    } else "TEXT" === l.type && q && (e = q[0], q = e.contentProfile, f = e.id.split(";")[1], k[q] || (k[q] = []), m = "CLOSEDCAPTIONS" === l.trackType ?
                        " [CC]" : "", l = {
                            isForced: l.isForced,
                            type: "SUBTITLES",
                            isCC: "" !== m,
                            text: l.isForced ? c + m : "Normal" + m,
                            downloadUrl: e.urls[f]
                        }, l.isForced ? k[q].push(l) : k[q].unshift(l))
                }
            }
        }

        function da(a) {
            var c = {};
            if (!1 === a.success) throw new J(a.result.data.cause.value.result.errorDisplayMessage, a.result.data.cause.value);
            var d = a.result.viewables[0];
            Q(d.audioTracks, c);
            Q(d.textTracks, c);
            var e = {
                    "ddplus-atmos-dash": 0,
                    "ddplus-atmos-dash-ad": 1,
                    "dd-5.1-elem": 2,
                    "dd-5.1-elem-ad": 3,
                    "ddplus-5.1-dash": 4,
                    "ddplus-5.1-dash-ad": 5,
                    "ddplus-2.0-dash": 6,
                    "ddplus-2.0-dash-ad": 7,
                    "heaac-2-dash": 8,
                    "heaac-2-dash-ad": 9,
                    "dfxp-ls-sdh": 10
                },
                h = Object.keys(c),
                l = {
                    "ddplus-5.1hq-dash": "E-AC-3 DD+ 5.1:",
                    "ddplus-atmos-dash": "E-AC-3 5.1 ATMOS:",
                    "dd-sq-atmos-5.1-dash": "E-AC-3 DD+ 5.1 ATMOS:",
                    "dd-sq-atmos-5.1-dash": "E-AC-3 DD+ 5.1 ATMOS:",
                    "dd-5.1-elem": "AC-3 DD 5.1:",
                    "ddplus-5.1-dash": "E-AC-3 DD+ 5.1:",
                    "ddplus-2.0-dash": "E-AC-3 DD+ 2.0:",
                    "heaac-2-dash": "AAC 2.0:",
                    "heaac-sbr-2-dash": "AAC 2.0",
                    "dfxp-ls-sdh": "pt-BR" === navigator.language ? "Legendas:" : "Subtitles:",
                    "webvtt-lssdh-ios8": "pt-BR" === navigator.language ? "Legendas:" : "Subtitles (webvtt):"
                };
            Object.keys(l).forEach(function(a) {
                a.startsWith("dfxp") || (l[a + "-ad"] = l[a].replace(":", " [AD]:"))
            });
            a = document.createElement("section");
            a.id = "flix-manifest";
            a.setAttribute("data-movieid",
                d.movieId);
            a.innerHTML = '\n        <div class="flix-middle">\n          <div class="flix-select">\n          <select name="flix-lang" id="flix-lang">\n            ' + h.map(function(a) {
                    return '<option value="' + a + '">' + a + "</option>"
                }).join("") + '\n          </select>\n          </div>\n          <div class="flix-select">\n          <select name="flix-subtitle-type" id="flix-subtitle-type">\n            <option value="SRT">SRT</option>\n            <option value="DFXP">Original (DFXP/WEBVTT)</option>\n          </select>\n          </div>\n          <div class="flix-select">\n          <select name="flix-charset" id="flix-charset">\n            <option value="UTF8">UTF-8</option>\n            <option value="UTF8B">UTF-8 BOM</option>\n            <option value="ANSI">ANSI</option>\n          </select>\n          </div>\n        </div>\n        ' +
                h.map(function(a) {
                    return '<div data-lang="' + a + '" class="flix-content">\n        ' + Object.keys(c[a]).sort(function(a, b) {
                        return e[a] - e[b]
                    }).map(function(b) {
                        return "<ul><li>" + l[b] + "</li>\n          " + c[a][b].map(function(a) {
                            return '<li><a data-type="' + a.type + '" ' + ("SUBTITLES" === a.type ? 'data-isforced="' + a.isForced + '" data-iscc="' + a.isCC + '"' : "") + ' href="' + a.downloadUrl + '">' + a.text + "</a></li>"
                        }).join("") + "\n          </ul>"
                    }).join("") + "\n        </div>\n        "
                }).join("") + "\n        ";
            var k = n("#flix-lang",
                    a),
                q = n("#flix-subtitle-type", a),
                f = n("#flix-charset", a),
                m = O(".flix-content", a),
                x = Object.create(null),
                p = aa() || "subtitle";
            ca(O('a[data-type="SUBTITLES"]', a), function(a) {
                a.preventDefault();
                var c = "true" === this.getAttribute("data-iscc"),
                    d = "true" === this.getAttribute("data-isforced"),
                    g = k.value,
                    l = f.value,
                    h = q.value;
                fetch(this.href).then(function(a) {
                    if (!a.ok) throw Error(a.statusText);
                    return "DFXP" === h ? a.blob() : a.text()
                }).then(function(a) {
                    if (a instanceof Blob) {
                        var b = a;
                        a = "dfxp"
                    } else {
                        a = Z(a);
                        a = a.replace(/(\r)?\n/g,
                            "\r\n");
                        b = [];
                        switch (l.toUpperCase()) {
                            case "ANSI":
                                for (var h = new Uint8Array(a.length), k = 0, q = a.length; k < q; ++k) {
                                    var e = a.charCodeAt(k);
                                    h[k] = 256 > e ? e : 37
                                }
                                b.push(h);
                                break;
                            case "UTF8B":
                                b.push("\ufeff");
                            default:
                                b.push(a)
                        }
                        b = new Blob(b, {
                            type: "application/octet-stream"
                        });
                        a = "srt"
                    }
                    ba(b, "" + p + (c ? ".[CC]" : "") + "." + g + (d ? ".forced" : "") + "." + a)
                }).catch(b.error)
            });
            q.addEventListener("change", function() {
                f.disabled = "DFXP" === this.value ? "disabled" : "";
                localStorage.setItem("flix-subtitle-type", this.value)
            });
            f.addEventListener("change",
                function() {
                    localStorage.setItem("flix-charset", this.value)
                });
            k.value = localStorage.getItem("flix-lang") || "en";
            for (d = m.length - 1; 0 <= d; --d) h = m[d], x[h.getAttribute("data-lang")] = h, h.style.display = "none";
            if (d = x[k.value]) d.style.display = "";
            k.addEventListener("change", function() {
                localStorage.setItem("flix-lang", this.value);
                z(m);
                x[this.value].style.display = ""
            });
            q.value = P(localStorage.getItem("flix-subtitle-type"), ["SRT", "DFXP"]);
            f.value = P(localStorage.getItem("flix-charset"), ["UTF8", "UTF8B", "ANSI"]);
            d = new Event("change");
            q.dispatchEvent(d);
            f.dispatchEvent(d);
            return a
        }

        function G(a) {
            return "none" === a.style.display
        }

        function ea() {
            var a, d, e, f, h, l, k;
            return $jscomp.asyncExecutePromiseGeneratorProgram(function(c) {
                switch (c.nextAddress) {
                    case 1:
                        if (!G(v)) return z(v), c.return();
                        if (!G(H)) return R.pause(), E(v, ""), c.return();
                        a = /^\/watch\/(\d{4,})$/.exec(location.pathname);
                        c.setCatchFinallyBlocks(2);
                        if (!a) {
                            c.jumpTo(4);
                            break
                        }
                        R.pause();
                        d = a[1];
                        if (B.getAttribute("data-movieid") === d) return E(v, ""), c.return();
                        B.remove();
                        E(v, "");
                        E(H, "");
                        e = n(".VideoContainer div").id;
                        return c.yield(T([parseInt(e)]), 5);
                    case 5:
                        f = c.yieldResult, B = da(f), K.appendChild(B);
                    case 4:
                        c.leaveTryBlock(3);
                        break;
                    case 2:
                        h = c.enterCatchBlock(), b.error(h), l = document.createElement("section"), l.setAttribute("data-movieid", "0"), l.id = "flix-manifest", k = document.createElement("div"), k.className = "flix-error", k.textContent = h.message, l.appendChild(k), B = l, K.appendChild(B);
                    case 3:
                        z(H), c.jumpToEnd()
                }
            })
        }

        function fa() {
            document.body.addEventListener("keydown", function(a) {
                G(v) || a.stopPropagation();
                a.altKey && a.shiftKey && 78 === a.which && ea()
            }, !0);
            document.body.addEventListener("keydown", function(a) {
                27 !== a.which || G(v) || (z(v), a.stopPropagation())
            }, !0)
        }

        function ha() {
            var a = document.createElement("div");
            a.id = "flix-overlay";
            a.style.display = "none";
            a.innerHTML = '\n        <div id="flix-dialog">\n            <div class="flix-header">\n                <div class="text" title="' + L + " v" + S + '"><img src="' + ia + '"></img>' + L + ' <span class="small-text">v' + S + '</span></div>\n                <div class="small-text author">by ' +
                ja + '</div>\n            </div>\n            <hr>\n            <div id="flix-loading" style="display: none"><div class="flix-bar"></div></div>\n            <span id="flix-dialog-close" title="' + ("pt-BR" === navigator.language ? "Fechar" : "Close") + '">\u00d7</span>\n            <section data-movieid="-1" id="flix-manifest"></section>\n        </div>\n        ';
            document.body.appendChild(a);
            v = n.id("flix-overlay");
            H = n.id("flix-loading");
            B = n.id("flix-manifest");
            K = n.id("flix-dialog");
            n.id("flix-dialog-close").addEventListener("click",
                function() {
                    z(v)
                })
        }
        if (a.top === a.self) {
            a = b.info.script;
            var L = a.name,
                S = a.version;
            a = b.info.scriptMetaStr;
            var ja = /@author\s*(.+)/.exec(a)[1],
                ia = /@icon\s*(.+)/.exec(a)[1],
                ka = "[" + L + "]";
            ["log", "error"].forEach(function(a) {
                b[a] = function(b) {
                    for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
                    console[a].apply(null, [ka].concat($jscomp.arrayFromIterable(c)))
                }
            });
            b.log("Loading...");
            var Y = {
                    manifest: "https://www.netflix.com/api/msl/NFCDCH-LX/cadmium/manifest"
                },
                A = function() {
                    function a(a, c, d) {
                        for (var e = [],
                                g = c; g < d; g += 3) c = (a[g] << 16) + (a[g + 1] << 8) + a[g + 2], e.push(b[c >> 18 & 63] + b[c >> 12 & 63] + b[c >> 6 & 63] + b[c & 63]);
                        return e.join("")
                    }
                    for (var b = [], d = [], e = 0; 64 > e; ++e) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [e], d["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(e)] = e;
                    d[45] = 62;
                    d[95] = 63;
                    return {
                        toByteArray: function(a) {
                            var b;
                            var c = b = a.length;
                            if (0 < c % 4) throw Error("Invalid string. Length must be a multiple of 4");
                            c = "=" === a[c - 2] ? 2 : "=" === a[c - 1] ? 1 : 0;
                            var e = new Uint8Array(3 *
                                b / 4 - c);
                            var g = 0 < c ? b - 4 : b;
                            var f = 0;
                            for (b = 0; b < g; b += 4) {
                                var h = d[a.charCodeAt(b)] << 18 | d[a.charCodeAt(b + 1)] << 12 | d[a.charCodeAt(b + 2)] << 6 | d[a.charCodeAt(b + 3)];
                                e[f++] = h >> 16 & 255;
                                e[f++] = h >> 8 & 255;
                                e[f++] = h & 255
                            }
                            2 === c ? (h = d[a.charCodeAt(b)] << 2 | d[a.charCodeAt(b + 1)] >> 4, e[f++] = h & 255) : 1 === c && (h = d[a.charCodeAt(b)] << 10 | d[a.charCodeAt(b + 1)] << 4 | d[a.charCodeAt(b + 2)] >> 2, e[f++] = h >> 8 & 255, e[f++] = h & 255);
                            return e
                        },
                        fromByteArray: function(c) {
                            for (var d = c.length, e = d % 3, g = "", f = [], h = 0, n = d - e; h < n; h += 16383) f.push(a(c, h, h + 16383 > n ? n : h + 16383));
                            1 === e ? (c = c[d - 1], g += b[c >> 2], g += b[c << 4 & 63], g += "==") : 2 === e && (c = (c[d - 2] << 8) + c[d - 1], g += b[c >> 10], g += b[c >> 4 & 63], g += b[c << 2 & 63], g += "=");
                            f.push(g);
                            return f.join("")
                        }
                    }
                }(),
                F = function(a, b) {
                    a = Error.call(this, a);
                    this.message = a.message;
                    "stack" in a && (this.stack = a.stack);
                    this._error = b
                };
            $jscomp.inherits(F, Error);
            $jscomp.global.Object.defineProperties(F.prototype, {
                error: {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this._error
                    }
                }
            });
            var p, X = function() {
                    function a(a, b) {
                        var c = b || a.length;
                        return a.reduce(function(a,
                            b, d) {
                            return d < c ? a + String.fromCharCode(b) : a
                        }, "")
                    }
                    for (var b = Object.create(null), d = 0; 256 > d; ++d) b[String.fromCharCode(d)] = d;
                    var e = new TextEncoder;
                    return {
                        compress: function(c) {
                            function d(a, b) {
                                for (; 0 < b;) {
                                    if (p >= g.length) return !1;
                                    var c = a;
                                    if (b > u) c >>>= b - u, g[p] |= c & 255, b -= u, u = 8, ++p;
                                    else {
                                        c <<= u - b;
                                        c &= 255;
                                        c >>>= 8 - u;
                                        g[p] |= c & 255;
                                        u -= b;
                                        0 === u && (u = 8, ++p);
                                        break
                                    }
                                }
                                return !0
                            }
                            c = e.encode(c);
                            var g = new Uint8Array(c.length),
                                f = Object.create(null),
                                h = c.length,
                                m = [];
                            for (n in b) f[n] = b[n];
                            var n = 256;
                            var p = 0,
                                u;
                            var r = u = 8;
                            for (var t = 0; t < h; ++t) {
                                var v =
                                    c[t];
                                m.push(v);
                                var w = a(m);
                                if (!f[w]) {
                                    m = a(m, m.length - 1);
                                    if (!d(f[m], r)) return null;
                                    0 !== n >> r && ++r;
                                    f[w] = n++;
                                    m = [v]
                                }
                            }
                            return 0 < m.length && !d(f[a(m)], r) ? null : g.subarray(0, 8 > u ? p + 1 : p)
                        }
                    }
                }(),
                M = new TextEncoder;
            n.id = function(a, b) {
                b = void 0 === b ? document : b;
                return b.getElementById(a)
            };
            n.waitDOM = function() {
                return new Promise(function(a) {
                    "loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a)
                })
            };
            var R = function() {
                    return {
                        pause: function() {
                            var a;
                            return $jscomp.asyncExecutePromiseGeneratorProgram(function(b) {
                                if (1 ==
                                    b.nextAddress) return b.yield(V(1500), 2);
                                (a = n(".button-nfplayerPause") || n(".icon-player-pause")) && a.click();
                                b.jumpToEnd()
                            })
                        }
                    }
                }(),
                J = function(a, b) {
                    a = Error.call(this, a);
                    this.message = a.message;
                    "stack" in a && (this.stack = a.stack);
                    this.name = "ManifestError";
                    this._cause = b
                };
            $jscomp.inherits(J, Error);
            $jscomp.global.Object.defineProperties(J.prototype, {
                cause: {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this._cause
                    }
                }
            });
            var v, H, B, K;
            (function() {
                return $jscomp.asyncExecutePromiseGeneratorProgram(function(a) {
                    if (1 ==
                        a.nextAddress) {
                        var b = document.createElement("style");
                        b.textContent = '\n    @font-face {\n    font-family: \'eu-bold\';\n    font-weight: normal;\n    font-style: normal;\n    src: url(\'//flixscript.github.io/font/eu.woff2\') format(\'woff2\');\n}\n#flix-overlay {\n    background-color: rgba(46, 46, 46, .9);\n    margin: 0;\n    padding: 0;\n    border: 0;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    overflow: hidden;\n    z-index: 3000;\n}\n#flix-dialog {\n    font-family: "eu-bold";\n    font-size: 16px;\n    background: none repeat scroll 0 0 padding-box #242223;\n    box-shadow: 0 0 10px #000;\n    box-sizing: border-box;\n    color: #fff;\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    margin: -150px 0px 0px -330px;\n    padding: 7px;\n    width: 580px;\n    height: 320px;\n    display: flex;\n    flex-direction: column;\n    line-height: 1;\n}\n#flix-dialog section, .flix-content ul {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n#flix-dialog hr {\n    margin-left: 0;\n    margin-right: 0;\n    border: 0;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(256, 245, 254, 0.75), rgba(0, 0, 0, 0));\n    height: 1px;\n}\n\n.flix-header {\n    display: flex;\n    line-height: 32px;\n    margin: 5px 5px 0;\n}\n\n.flix-header img {\n    margin-right: 6px;\n    height: 26px;\n    width: 26px;\n    vertical-align: sub;\n}\n\n.flix-header .text {\n    font-size: 23px;\n    color: #bd0c0c;\n    flex-grow: 1;\n    text-align: center;\n}\n.flix-header .small-text {\n    font-size: 9px;\n    color: #746D6D;\n    vertical-align: middle;\n}\n\n.flix-header .author {\n    text-align: right;\n}\n\n#flix-dialog-close {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    line-height: 12px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.flix-middle {\n    display: flex;\n    justify-content: center;\n}\n\n#flix-dialog label {\n    line-height: 22px;\n    font-size: 13px;\n}\n\n#flix-dialog select {\n    background-color: #272525;\n    border: 1px solid #120202;\n    border-radius: 3px;\n    color: #fff;\n    cursor: pointer;\n    margin-left: 3px;\n    font-family: "eu-bold";\n    font-size: 12px;\n    outline: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    padding: 3px 24px;\n}\n\n#flix-dialog select:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n}\n\n.flix-select {\n    position: relative;\n}\n\n.flix-select:after {\n    content: ">";\n    color: #FFF;\n    -webkit-transform: rotate(90deg);\n    -moz-transform: rotate(90deg);\n    transform: rotate(90deg);\n    right: 11px;\n    top: 5px;\n    font-size: 11px;\n    position: absolute;\n}\n\n#flix-dialog a {\n    color: #b7a8a8;\n    text-decoration: none;\n}\n\n#flix-dialog a:hover {\n    color: #e93e30;\n}\n\n.flix-content {\n    margin: 24px 0 0 48px;\n}\n.flix-content ul, .flix-content li {\n    list-style: none;\n}\n.flix-content ul {\n    display: flex;\n    flex-direction: row;\n    margin-top: 10px;\n}\n.flix-content li:first-child {\n    width: 150px;\n}\n.flix-content li {\n    margin-left: 3px;\n}\n.flix-content li:not(:nth-child(1)) + li:before {\n    content: " | ";\n}\n.flix-item {\n    margin-top: 5px;\n}\n#flix-loading {\n  position: relative;\n  margin-bottom: 5px;\n  width: 100%;\n  height: 12px;\n  background-color: #3b3a38;\n  border-radius: 4px;\n}\n.flix-bar {\n  content: "";\n  display: inline;\n  position: absolute;\n  width: 0;\n  height: 100%;\n  left: 50%;\n  text-align: center;\n  background-color: #e9250a;\n  border-radius: 4px;\n  animation: floading 4s linear infinite;\n}\n@keyframes floading {\n    from {\n        left: 50%;\n        width: 0;\n    }\n    to {\n        left: 0;\n        width: 100%;\n    }\n}\n\n.flix-error {\n    text-align: center;\n    line-height: 30px;\n    background-color: brown;\n}';
                        b.type = "text/css";
                        (document.head || document.documentElement).appendChild(b);
                        return a.yield(n.waitDOM(), 2)
                    }
                    ha();
                    fa();
                    a.jumpToEnd()
                })
            })()
        }
    })(window, "undefined" !== typeof GM && GM || {
        info: GM_info
    });
}).call(window);
/* jshint ignore:end */
