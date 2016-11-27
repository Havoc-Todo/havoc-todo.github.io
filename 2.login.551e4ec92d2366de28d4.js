webpackJsonp([2],{

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactRedux = __webpack_require__(386);
	
	__webpack_require__(645);
	
	var _Login = __webpack_require__(646);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = {};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return {};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login2.default);

/***/ },

/***/ 645:
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

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Login = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(629);
	
	var _TextField = __webpack_require__(572);
	
	var _TextField2 = _interopRequireDefault(_TextField);
	
	var _RaisedButton = __webpack_require__(621);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	var _FlatButton = __webpack_require__(511);
	
	var _FlatButton2 = _interopRequireDefault(_FlatButton);
	
	var _FontIcon = __webpack_require__(494);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var iconStyles = {
	  color: 'gray',
	  fontSize: '150px'
	};
	
	var cardStyle = {
	  width: '400px'
	};
	
	var cardContainerStyle = {
	  display: 'flex',
	  flexDirection: 'column',
	  justifyContent: 'center',
	  alignItems: 'center'
	};
	
	var Login = exports.Login = function Login(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'page-center' },
	    _react2.default.createElement(
	      _Card.Card,
	      { style: cardStyle, containerStyle: cardContainerStyle },
	      _react2.default.createElement(
	        _FontIcon2.default,
	        { className: 'material-icons', style: iconStyles },
	        'account_circle'
	      ),
	      _react2.default.createElement(_TextField2.default, {
	        hintText: 'Username',
	        floatingLabelText: 'Username' }),
	      _react2.default.createElement(_TextField2.default, {
	        hintText: 'Password Field',
	        floatingLabelText: 'Password',
	        type: 'password' }),
	      _react2.default.createElement(_RaisedButton2.default, { label: 'Log In', primary: true }),
	      _react2.default.createElement(
	        _Card.CardActions,
	        null,
	        _react2.default.createElement(_FlatButton2.default, { label: 'Register' })
	      )
	    )
	  );
	};
	
	Login.propTypes = {};
	
	exports.default = Login;

/***/ }

});
//# sourceMappingURL=2.login.551e4ec92d2366de28d4.js.map