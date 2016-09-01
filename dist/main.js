(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames")) : factory(root["React"], root["classnames"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UploadContainer = undefined;
	
	var _UploadContainer = __webpack_require__(6);
	
	var _UploadContainer2 = _interopRequireDefault(_UploadContainer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var UploadContainer = exports.UploadContainer = _UploadContainer2.default;
	
	exports.default = UploadContainer;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrapper":"button--wrapper","groupWrapper":"button--groupWrapper","flexItem":"button--flexItem","btn":"button--btn","blue":"button--blue","narrow":"button--narrow","green":"button--green","grey":"button--grey","raised":"button--raised"};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _createClass = function () {
	   function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	         var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	   }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	   };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _button = __webpack_require__(1);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	   if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	   }
	}
	
	function _possibleConstructorReturn(self, call) {
	   if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	   }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	   if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	   }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ChooseFileButton = function (_React$Component) {
	   _inherits(ChooseFileButton, _React$Component);
	
	   function ChooseFileButton(props, context) {
	      _classCallCheck(this, ChooseFileButton);
	
	      var _this = _possibleConstructorReturn(this, (ChooseFileButton.__proto__ || Object.getPrototypeOf(ChooseFileButton)).call(this, props, context));
	
	      _this.state = {
	         value: ''
	      };
	      _this.handleChange = _this.handleChange.bind(_this);
	      return _this;
	   }
	
	   _createClass(ChooseFileButton, [{
	      key: 'handleChange',
	      value: function handleChange(e) {
	         this.setState({
	            value: e.target.value.split(/(\\|\/)/g).pop()
	         });
	         if (this.props.onChange) {
	            this.props.onChange(e);
	         }
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         var flexItem = (0, _classnames2.default)(_button2.default.flexItem);
	
	         return _react2.default.DOM.input({
	            type: 'file',
	            name: this.props.name,
	            className: { flexItem: flexItem },
	            onChange: this.handleChange,
	            disabled: this.props.disabled,
	            accept: this.props.accept
	         });
	      }
	   }]);
	
	   return ChooseFileButton;
	}(_react2.default.Component);
	
	exports.default = ChooseFileButton;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _extends = Object.assign || function (target) {
	   for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	         if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	         }
	      }
	   }return target;
	};
	
	var _createClass = function () {
	   function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	         var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	   }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	   };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _button = __webpack_require__(1);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	   if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	   }
	}
	
	function _possibleConstructorReturn(self, call) {
	   if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	   }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	   if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	   }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var UploadButton = function (_React$Component) {
	   _inherits(UploadButton, _React$Component);
	
	   function UploadButton() {
	      _classCallCheck(this, UploadButton);
	
	      return _possibleConstructorReturn(this, (UploadButton.__proto__ || Object.getPrototypeOf(UploadButton)).apply(this, arguments));
	   }
	
	   _createClass(UploadButton, [{
	      key: 'render',
	      value: function render() {
	         // let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
	         console.log(this.props);
	
	         return _react2.default.createElement('button', _extends({ className: (0, _classnames2.default)(_button2.default.btn, _button2.default.raised, _button2.default.flexItem) }, this.props));
	      }
	   }]);
	
	   return UploadButton;
	}(_react2.default.Component);
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	
	exports.default = UploadButton;
	UploadButton.propTypes = {};
	
	/**
	 * Defaults
	 * @type {Object}
	 */
	UploadButton.defaultProps = {};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _createClass = function () {
	   function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	         var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	   }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	   };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _button = __webpack_require__(1);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _UploadButton = __webpack_require__(5);
	
	var _UploadButton2 = _interopRequireDefault(_UploadButton);
	
	var _ChooseFileButton = __webpack_require__(4);
	
	var _ChooseFileButton2 = _interopRequireDefault(_ChooseFileButton);
	
	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	   if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	   }
	}
	
	function _possibleConstructorReturn(self, call) {
	   if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	   }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	   if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	   }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	// import ImagePreview from './ImagePreview.jsx';
	
	var UploadContainer = function (_React$Component) {
	   _inherits(UploadContainer, _React$Component);
	
	   function UploadContainer() {
	      _classCallCheck(this, UploadContainer);
	
	      return _possibleConstructorReturn(this, (UploadContainer.__proto__ || Object.getPrototypeOf(UploadContainer)).apply(this, arguments));
	   }
	
	   _createClass(UploadContainer, [{
	      key: 'handleChange',
	      value: function handleChange(event) {
	         console.log('Selected file:', event.target.files[0]);
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         return _react2.default.createElement('section', { className: (0, _classnames2.default)(_button2.default.wrapper) }, _react2.default.createElement('section', { className: (0, _classnames2.default)(_button2.default.groupWrapper) }, _react2.default.createElement('form', { className: (0, _classnames2.default)(_button2.default.flexContainer) }, _react2.default.createElement(_ChooseFileButton2.default, { name: 'MyImage',
	            accept: '.png, .gif, .jpg, .jpeg',
	            placeholder: 'Choose File',
	            onChange: this.handleChange.bind(this) }), _react2.default.createElement(_UploadButton2.default, null, 'Upload'))));
	      }
	   }]);
	
	   return UploadContainer;
	}(_react2.default.Component);
	
	exports.default = UploadContainer;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=main.js.map