webpackJsonp([2],{

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(388);
	
	var _Calendar = __webpack_require__(648);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Calendar2.default);

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Calendar = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(632);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Calendar = exports.Calendar = function Calendar(props) {
	  return _react2.default.createElement(
	    'div',
	    { id: 'main' },
	    _react2.default.createElement(
	      _Card.Card,
	      { className: 'main-card' },
	      'hello calendar'
	    )
	  );
	};
	
	exports.default = Calendar;

/***/ },

/***/ 649:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function loginReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'NOT LOGGED IN';
	  var action = arguments[1];
	
	  switch (action.type) {
	    default:
	      return state;
	  }
	}
	
	exports.default = loginReducer;

/***/ }

});
//# sourceMappingURL=2.login.5e0116153b16df67bf5c.js.map