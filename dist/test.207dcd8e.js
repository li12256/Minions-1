// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"test.js":[function(require,module,exports) {

var string = '\n*{box-sizing: border-box;margin:0;padding: 0;}\n*::before,*::after{box-sizing: border-box;}\nbody{\n    background:radial-gradient(ellipse at center, rgba(206,220,231,1) 0%,rgba(89,106,114,1) 100%);\n    min-height: 100vh;\n}\n.mark{\n  position: relative;\n}\n.belly{\n    position:absolute;\n    left: 50%;\n    margin-left: -100px;\n    top: 200px;\n    width: 200px;\n    height: 350px;\n    border-radius: 100px 100px 60px 60px;\n    background:-webkit-radial-gradient(center, ellipse cover, rgba(254,252,234,1) 0%,rgba(250,224,42,1) 100%);\n}\n.eyebrow{\n    border: 1px solid black;\n    position: absolute;\n    left: 50%;\n    top: 300px;\n    width: 200px;\n    height: 15px;\n    margin-left: -100px;\n    background: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%);\n}\n.thread{\nborder: 1px solid black;\nwidth: 200px;\nheight: 2px;\ntop: 5px;\nbackground: black;\nposition: absolute;\nmargin-left: -1px;\n}\n.hairs .hair1{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px; \n    z-index: 10; \n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n    left: 50%;\n    top: 180px;\n    transform: rotate(15deg);\n}\n.hairs .hair2{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 175px;\n    z-index: 1;\n    transform: rotate(35deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.hairs .hair3{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 190px;\n    z-index: 1;\n    transform: rotate(15deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.hairs .hair4{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 195px;\n    z-index: 1;\n    transform: rotate(15deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.hairs .hair5{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 185px;\n    z-index: 1;\n    transform: rotate(10deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.hairs .hair6{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 185px;\n    z-index: 1;\n    transform: rotate(5deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.hairs .hair7{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 175px;\n    z-index: 1;\n    transform: rotate(-10deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.hairs .hair8{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 180px;\n    z-index: 1;\n    transform: rotate(-25deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.hairs .hair9{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 190px;\n    z-index: 1;\n    transform: rotate(-30deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.hairs .hair10{\n    position: absolute;\n    left: 50%;\n    border: 1px solid black;\n    width: 10px;\n    height: 30px;\n    margin-left: -5px;\n    top: 185px;\n    z-index: 1;\n    transform: rotate(-45deg);\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 50px 0 0 0;\n}\n.eye{\n    position:absolute;\n    left: 50%;\n    top: 260px;\n    border: 10px solid  #abaeaf ;\n    width: 80px;\n    height:80px;\n    margin-left: -45px;\n    border-radius: 50%; \n}\n.eye .yan{\n    position: absolute;\n    left: 50%;\n    width: 60px;\n    height: 60px;\n    margin-left: -30px;\n    top: 0px;\n    border-radius: 50%;\n    animation-name: wave;\n\t\tanimation-duration: 2s;\n\t\tanimation-iteration-count: infinite;\n        z-index: 11;\n}\n@keyframes wave {\n    0% {background-color: transparent;}\n    90% {background-color: transparent;}\n    100%{background-color:  #fdf04c;}\n\n}\n.eye.left{\n    transform: translateX(-40px);\n   \n    \n}\n.eye.right{\n    transform: translateX(50px);\n  \n}\n\n.eye.left .inward1{\n    position: absolute;\n    left: 50%;\n    top:-2px;\n    width: 65px;\n    height:65px;\n    margin-left: -32.5px;\n    border-radius: 60%;\n    background:rgba(254,252,234,1);\n}\n.eye.left .inward2{\n    position: absolute;\n    left: 50%;\n    top:20px;\n    width: 25px;\n    height:25px;\n    margin-left: -12.5px;\n    border-radius: 50%;\n    background:#8a7b1d;\n}\n.eye.left .inward3{\n    position: absolute;\n    left: 50%;\n    top:27px;\n    width: 10px;\n    height:10px;\n    margin-left: -5px;\n    border-radius: 50%;\n    background:black;\n}\n.eye.right .inward3{\n    position: absolute;\n    left: 50%;\n    top:27px;\n    width: 10px;\n    height:10px;\n    margin-left: -5px;\n    border-radius: 50%;\n    background:black;\n}\n.eye.right .inward2{\n    position: absolute;\n    left: 50%;\n    top:19px;\n    width: 25px;\n    height:25px;\n    margin-left: -12.5px;\n    border-radius: 50%;\n    background:#8a7b1d;\n}\n.eye.right .inward1{\n    position: absolute;\n    left: 50%;\n    top:-2px;\n    width: 65px;\n    height:65px;\n    margin-left: -32.5px;\n    border-radius: 50%;\n    background:rgba(254,252,234,1);\n}\n.mouth{\n    border-radius: 0 0 100px 100px;\n    position: absolute;\n    left:50%;\n    top:380px;\n    width:80px;\n    height:30px;\n    margin-left: -40px;\n    background:#D54747;\n    transform: rotate(-7deg);\n    animation-name: x;\n\t\tanimation-duration: 2s;\n\t\tanimation-iteration-count: infinite;\n}\n@keyframes x {\n    0%{height: 0};\n    30%{height: 5px};\n    50%{height: 40px};\n    66%{height: 10px};\n    100%{height: 0px;}\n    \n}\n.mouth .tooth1{\n   border: 1px solid blue;\n    position: absolute;\n    left: 50%;\n    width: 15px;\n    height: 10px;\n    background:white;\n    border-radius: 0 0 50px 50px;\n}\n.mouth .tooth4{\n    border: 1px solid blue;\n    position: absolute;\n    left: 30%;\n    width: 15px;\n    height: 10px;\n    background:white;\n    border-radius: 0 0 50px 50px;\n    \n}\n.mouth .tooth3{\n    border: 1px solid blue;\n    position: absolute;\n    left: 10%;\n    width: 15px;\n    height: 10px;\n    background:white;\n    border-radius: 0 0 50px 50px;\n}\n.mouth .tooth2{\n    border: 1px solid blue;\n    position: absolute;\n    left: 70%;\n    width: 15px;\n    height: 10px;\n    background:white;\n    border-radius: 0 0 50px 50px;\n}\n\n.leg{\n    position: absolute;\n    left:50%;\n    height: 100px;\n    width: 20px;\n    margin-left: -50px;\n   top: 401px;\n   border-right: transparent;\n   border-radius: 100px 0 50px 50px;\n   background:rgba(250,224,42,1);\n   transform: rotate(15deg)\n}\n.leg.left{\n    transform:translateX(150px) rotate(-22deg);\n}\n.leg.right{\n    transform:translateX(-68px) rotate(20deg);\n    border-radius: 0 100px 50px 50px;\n}\n.leg.left .fist1{\n    position: absolute;\n    width:20px;\n    height: 20px;\n   top: 95px;\nborder-radius: 0 0 100px 100px;\nbackground: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%)\n}.leg.right .fist2{\n    position: absolute;\n    width:20px;\n    height: 20px;\n   top: 95px;\nborder-radius: 0 0 100px 100px;\nbackground: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%)\n}\n.foot{\n    position:relative;\n    left: 50%;\n    width: 28px;\n    height: 24px;\n    margin-left: -15px;\n    top:548px;\n    background:linear-gradient(to left,#619fdd, #4883b8 );\n}\n.foot.left{\n    transform: translateX(-40px);\n}\n.foot.right{\n    transform: translateX(40px);\n    top: 525px\n}\n.foot.left .jiao1{\n    height:20px;\n    width: 30px;\n    background: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%);\n    position:absolute; \n    border-bottom-right-radius:100%;\n    border-bottom-left-radius: 40%;\n     border-top-left-radius:100%;\n     border-bottom: 5px inset black;\n     top: 24px;\n     left: -8px\n}\n.foot.right .jiao2{\n    height:20px;\n    width: 30px;\n    background: -webkit-radial-gradient(center, ellipse cover, rgba(144,144,144,1) 0%,rgba(8,8,8,1) 100%);\n    position:absolute; \n    border-bottom-left-radius:100%;\n    border-bottom-right-radius: 40%;\n     border-top-right-radius:100%;\n     border-bottom: 5px inset black;\n     top: 24px;\n     left: 8px\n}\n.clothing .arm{\n    position:absolute;\n    left: 50%;\n    top: 420px;\n    width: 100px;\n    height: 60px;\n    margin-left: -50px;\n    background:linear-gradient(to left,#619fdd, #4883b8 );\n}\n.clothing .arm .fang3{\n    border: 1px solid black;\n    width: 35px ;\n    height: 35px;\n    position: absolute;\n    left: 50%;\n    margin-left: -17.5px;\n    top: 10px;\n    border-radius: 0 0 10px 10px;\n    background:linear-gradient(to left,#619fdd, #4883b8 );\n}\n.clothing .hand{\n   border: 1px solid black;\n    position: absolute;\n    left:50%;\n    top: 360px;\n    width: 20px;\n    height: 90px;\n    margin-left: -25px;\n    border-radius: 100px 0 0 0;\n        background:linear-gradient(to left,#619fdd, #4883b8 );\n}\n.clothing .hand.left{\n    transform:translateX(-55px) rotate(-50deg);\n    border-right: transparent;\n}\n.clothing .hand.right{\n    transform:translateX(84px) rotate(50deg);\n    border-radius: 0 100px 0 0;\n    border-left: transparent; \n}\n.clothing .hand.left .fang1{\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    left: 50%;\n    margin-left: -5px;\n    top: 75px;\n    border-radius: 50%;\n    background: black;\n    \n}\n.clothing .hand.right .fang2{\n   background: black;\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    left: 50%;\n    margin-left: -5px;\n    top: 75px;\n    border-radius: 50%;\n    \n}\n.clothing .skirt{\n    width: 200px;\n    height: 70px;\n    position: absolute;\n    left: 50%;\n    top: 480px;\n    margin-left: -100px;\n    border-radius: 0 0 60px 60px;\n    background:linear-gradient(to left,#619fdd, #4883b8 );\n}\n.clothing .skirt.left .fang5{\n    border:1px solid black;\n    width: 40px;\n    height: 35px;\n    position: absolute;\n    border-left: transparent;\n    border-bottom: transparent;\n    border-radius: 0 0 50px 0;\n    z-index: 2;\n}\n.clothing .skirt.right .fang6{\n    border:1px solid black;\n    width: 40px;\n    height: 35px;\n    left: 155px;\n    position: absolute;\n    border-right: transparent;\n    border-bottom: transparent;\n    border-radius: 0 0 0 50px;\n}\n    ';
var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
demo2.innerText = string.substr(0, n);
demo.innerHTML = string.substr(0, n);
var n = 1;
var time = 300;
var run = function run() {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id);
        return;
    }
    demo.innerHTML = string.substr(0, n);
    demo2.innerText = string.substr(0, n);
    demo2.scrollTop = demo2.scrollHeight;
};
var pause = function pause() {
    return setInterval(run, time);
};
var id = pause();

var slow = function slow() {
    window.clearInterval(id);
};

var normal = function normal() {
    slow();
    time = 50;
    id = pause();
};

var fast = function fast() {
    slow();
    time = 0;
    id = pause();
};
btnStop.onclick = slow;
btnPlay.onclick = function () {
    id = pause();
};
btnNormal.onclick = normal;
btnFast.onclick = fast;
},{}],"..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59590' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.207dcd8e.map