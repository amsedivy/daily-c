module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _server = __webpack_require__(2);

var _app = __webpack_require__(4);

var _app2 = _interopRequireDefault(_app);

var _template = __webpack_require__(14);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8081;
var server = new _express2.default();

server.use('/assets', _express2.default.static('assets'));

server.get('/', function (req, res) {
  var appString = (0, _server.renderToString)(_app2.default);

  res.send((0, _template2.default)({
    body: appString,
    title: 'daily-c'
  }));
});

server.listen(port);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var router = new _express2.default.Router();

  router.get('/', function (req, res) {
    res.render('/view/index', {
      html: _server2.default.renderToString(React.createElement(_browser2.default, null))
    });
  });

  return router;
};

var _nodeFetch = __webpack_require__(5);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _server = __webpack_require__(2);

var _server2 = _interopRequireDefault(_server);

var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _browser = __webpack_require__(6);

var _browser2 = _interopRequireDefault(_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = _nodeFetch2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = __webpack_require__(8);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined') {
  _reactDom2.default.render(_react2.default.createElement(_index2.default, null), document.getElementById('root'));
} /* global document */

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _conductor = __webpack_require__(9);

var _conductor2 = _interopRequireDefault(_conductor);

var _instrument = __webpack_require__(12);

var _instrument2 = _interopRequireDefault(_instrument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.props = props;
    return _this;
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      var ensemble = _conductor2.default.streams;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'build out views here (seed designs folder)'
        ),
        ensemble.map(function (inst) {
          return _react2.default.createElement(_instrument2.default, { id: inst.id, section: inst.startPoint });
        })
      );
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** this will be the manager of the playback streams */


var _indeterminanceManager = __webpack_require__(10);

var _indeterminanceManager2 = _interopRequireDefault(_indeterminanceManager);

var _playbackStream = __webpack_require__(11);

var _playbackStream2 = _interopRequireDefault(_playbackStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chanceMngr = new _indeterminanceManager2.default();
var streams = [];
var instance = null;

var Conudctor = function () {
  function Conudctor() {
    _classCallCheck(this, Conudctor);

    if (!instance) {
      instance = this;
      var numStreams = chanceMngr.numStreams;

      for (var i = 0; i < numStreams; i += 1) {
        var stream = new _playbackStream2.default();
        streams.push(stream);
      }
    }

    return this;
  }

  _createClass(Conudctor, [{
    key: 'handlePartComplete',
    value: function handlePartComplete(evt) {
      console.log(evt);
    }
  }, {
    key: 'streams',
    get: function get() {
      return [].concat(streams);
    }
  }]);

  return Conudctor;
}();

exports.default = new Conudctor();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** this will be a class to manage the different streams of playback
 telling an individual stream to repeat, rest, or advance */

var state = {};
var instance = null;

var PlaybackManager = function () {
  function PlaybackManager() {
    _classCallCheck(this, PlaybackManager);

    if (!instance) {
      instance = this;
    }

    state.numStreams = Math.floor(Math.random() * 4) + 6;
    return this;
  }

  // stub of example function to determine choice


  _createClass(PlaybackManager, [{
    key: 'nextAction',
    value: function nextAction(maxReps) {
      var percent = Math.floor(Math.random() * 100) + 1;
      var action = 'rest';
      if (percent <= 50) {
        action = percent <= 35 && !maxReps ? 'repeat' : 'advance';
      } else {
        action = percent <= 85 ? 'rest' : 'skip';
      }

      return action;
    }

    // just statics for now until we set up singleton values

  }, {
    key: 'numStreams',
    get: function get() {
      return state.numStreams;
    }
  }]);

  return PlaybackManager;
}();

exports.default = PlaybackManager;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlaybackStream = function () {
  function PlaybackStream(id) {
    _classCallCheck(this, PlaybackStream);

    this.id = id;
    this.beginAt = Math.floor(Math.random() * 5) + 1;
  }

  _createClass(PlaybackStream, [{
    key: "startPoint",
    get: function get() {
      return this.beginAt;
    }
  }]);

  return PlaybackStream;
}();

exports.default = PlaybackStream;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Instrument = function (_React$Component) {
  _inherits(Instrument, _React$Component);

  function Instrument(props) {
    _classCallCheck(this, Instrument);

    var _this = _possibleConstructorReturn(this, (Instrument.__proto__ || Object.getPrototypeOf(Instrument)).call(this, props));

    _this.props = props;
    _this.id = props.id;
    return _this;
  }

  _createClass(Instrument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'section no.' + this.props.section
      );
    }
  }]);

  return Instrument;
}(_react2.default.Component);

exports.default = Instrument;


Instrument.propTypes = {
  section: _propTypes2.default.number,
  id: _propTypes2.default.string
};

Instrument.defaultProps = {
  section: 0,
  id: String(Math.floor(Math.random() * 100))
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var body = _ref.body,
      title = _ref.title;

  return "\n    <!DOCTYPE html>\n      <html>\n        <head>\n          <title>" + title + "</title>\n          <link rel=\"stylesheet\" href=\"/assets/index.css\" />\n        </head>\n        <body>\n          <div id=\"root\">" + body + "</div>\n        </body>\n        <script src=\"/assets/bundle.js\"></script>\n      </html>";
};

/***/ })
/******/ ]);