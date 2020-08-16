"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ThemeProvider = _interopRequireWildcard(require("../src/ThemeProvider"));

var _Button = _interopRequireDefault(require("../src/Button"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

describe('<ThemeProvider>', function () {
  var Foo = (0, _ThemeProvider.createBootstrapComponent)(
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Foo, _React$Component);

    function Foo() {
      _classCallCheck(this, Foo);

      return _possibleConstructorReturn(this, _getPrototypeOf(Foo).apply(this, arguments));
    }

    _createClass(Foo, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("p", {
          className: "".concat(this.props.bsPrefix, " ").concat(this.props.bsPrefix, "-bar")
        });
      }
    }]);

    return Foo;
  }(_react.default.Component), 'foo');
  it('should use HOC value', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(Foo, null)));
    wrapper.assertSingle('p.foo');
  });
  it('should provide bsPrefix overrides', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ThemeProvider.default, {
      prefixes: {
        btn: 'my-btn',
        foo: 'global-foo'
      }
    }, _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
      variant: "primary"
    }, "My label"), _react.default.createElement(Foo, null))));
    wrapper.assertSingle('button.my-btn.my-btn-primary');
    wrapper.assertSingle('p.global-foo');
  });
  it('should use prop bsPrefix first', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ThemeProvider.default, {
      prefixes: {
        foo: 'global-foo'
      }
    }, _react.default.createElement("div", null, _react.default.createElement(Foo, {
      bsPrefix: "my-foo"
    }))));
    wrapper.assertSingle('p.my-foo');
  });
  it('should forward ref', function () {
    var _ref;

    var wrapper = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(Foo, {
      bsPrefix: "my-foo",
      ref: function ref(r) {
        return _ref = r;
      }
    })));
    expect(_ref).to.equal(wrapper.find('Foo').instance());
  });
});

//# sourceMappingURL=ThemeProviderSpec.js.map