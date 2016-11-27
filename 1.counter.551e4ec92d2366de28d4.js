webpackJsonp([1],{

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(386);
	
	var _counter = __webpack_require__(641);
	
	var _Counter = __webpack_require__(642);
	
	var _Counter2 = _interopRequireDefault(_Counter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*  Object of action creators (can also be function that returns object).
	    Keys will be passed as props to presentational components. Here we are
	    implementing our wrapper around increment; the component doesn't care   */
	
	var mapDispatchToProps = {
	    increment: function increment() {
	        return (0, _counter.increment)(1);
	    },
	    doubleAsync: _counter.doubleAsync,
	    triple: function triple() {
	        return _counter.triple;
	    },
	    click: function click() {
	        return _counter.click;
	    }
	};
	
	/*  This is a container component. Notice it does not contain any JSX,
	    nor does it import React. This component is **only** responsible for
	    wiring in the actions and state necessary to render a presentational
	    component - in this case, the counter:   */
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        count: state.counter.count,
	        clicks: state.counter.clicks
	    };
	};
	
	/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
	
	    import { createSelector } from 'reselect'
	    const counter = (state) => state.counter
	    const tripleCount = createSelector(counter, (count) => count * 3)
	    const mapStateToProps = (state) => ({
	      counter: tripleCount(state)
	    })
	
	    Selectors can compute derived data, allowing Redux to store the minimal possible state.
	    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
	    Selectors are composable. They can be used as input to other selectors.
	    https://github.com/reactjs/reselect    */
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Counter2.default);

/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.doubleAsync = exports.triple = exports.click = exports.COUNTER_TRIPLE = exports.COUNTER_CLICK = exports.COUNTER_INCREMENT = undefined;
	exports.increment = increment;
	
	var _redux = __webpack_require__(202);
	
	// ------------------------------------
	// Constants
	// ------------------------------------
	var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';
	var COUNTER_CLICK = exports.COUNTER_CLICK = 'COUNTER_CLICK';
	var COUNTER_TRIPLE = exports.COUNTER_TRIPLE = 'COUNTER_TRIPLE';
	
	// ------------------------------------
	// Actions
	// ------------------------------------
	function increment() {
	  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
	  return {
	    type: COUNTER_INCREMENT,
	    payload: value
	  };
	}
	
	var click = exports.click = {
	  type: COUNTER_CLICK
	};
	
	var triple = exports.triple = {
	  type: COUNTER_TRIPLE
	};
	
	/*  This is a thunk, meaning it is a function that immediately
	    returns a function for lazy evaluation. It is incredibly useful for
	    creating async actions, especially when combined with redux-thunk!
	
	    NOTE: This is solely for demonstration purposes. In a real application,
	    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
	    reducer take care of this logic.  */
	
	var doubleAsync = exports.doubleAsync = function doubleAsync() {
	  return function (dispatch, getState) {
	    setTimeout(function () {
	      dispatch(increment(getState().counter.count));
	      console.log('hi');
	    }, 200);
	  };
	};
	
	var actions = exports.actions = {
	  increment: increment,
	  click: click,
	  doubleAsync: doubleAsync,
	  triple: triple
	};
	
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	// const ACTION_HANDLERS = {
	//   [COUNTER_INCREMENT] : (state, action) => state + action.payload,
	//   [COUNTER_CLICK]     : (state, action) => state + action.payload
	// }
	
	// ------------------------------------
	// Reducer
	// ------------------------------------
	function countReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case COUNTER_INCREMENT:
	      return state + action.payload;
	    case COUNTER_TRIPLE:
	      return state * 3;
	    default:
	      return state;
	  }
	}
	
	function clickReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case COUNTER_CLICK:
	      return state + 1;
	    default:
	      return state;
	  }
	}
	
	var counterReducer = (0, _redux.combineReducers)({
	  count: countReducer,
	  clicks: clickReducer
	});
	
	exports.default = counterReducer;

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Counter = undefined;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Counter = exports.Counter = function Counter(props) {
	  return _react2.default.createElement(
	    'div',
	    { style: { margin: '0 auto' } },
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Counter: ',
	      props.count,
	      ', Clicks: ',
	      props.clicks
	    ),
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: function onClick() {
	          props.increment();
	          props.click();
	        } },
	      'Increment'
	    ),
	    ' ',
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: function onClick() {
	          props.doubleAsync();
	          props.click();
	        } },
	      'Double (Async)'
	    ),
	    ' ',
	    _react2.default.createElement(
	      'button',
	      { className: 'btn btn-default', onClick: function onClick() {
	          props.triple();
	          props.click();
	        } },
	      'Triple'
	    )
	  );
	};
	
	Counter.propTypes = {
	  count: _react2.default.PropTypes.number.isRequired,
	  clicks: _react2.default.PropTypes.number.isRequired,
	  doubleAsync: _react2.default.PropTypes.func.isRequired,
	  increment: _react2.default.PropTypes.func.isRequired,
	  click: _react2.default.PropTypes.func.isRequired,
	  triple: _react2.default.PropTypes.func.isRequired
	};
	
	exports.default = Counter;

/***/ }

});
//# sourceMappingURL=1.counter.551e4ec92d2366de28d4.js.map