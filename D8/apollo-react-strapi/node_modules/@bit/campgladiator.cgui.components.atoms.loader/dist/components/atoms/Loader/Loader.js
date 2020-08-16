"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mods = _interopRequireDefault(require("../../../utilities/mods"));

require("./Loader.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Loader = function Loader(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'loading' : _ref$label,
      white = _ref.white,
      gray = _ref.gray,
      dark = _ref.dark,
      secondary = _ref.secondary,
      primary = _ref.primary,
      disabled = _ref.disabled,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "white", "gray", "dark", "secondary", "primary", "disabled", "className"]);

  return _react.default.createElement("figure", _extends({
    className: (0, _mods.default)('cg-loader', {
      white: white,
      gray: gray,
      dark: dark,
      secondary: secondary,
      primary: primary,
      disabled: disabled
    }, className),
    role: "alert",
    "aria-live": "assertive",
    "aria-label": label
  }, props), _react.default.createElement("div", {
    className: "cg-loader__dot",
    key: 1
  }), _react.default.createElement("div", {
    className: "cg-loader__dot",
    key: 2
  }), _react.default.createElement("div", {
    className: "cg-loader__dot",
    key: 3
  }));
};

Loader.propTypes = {
  label: _propTypes.default.string,
  white: _propTypes.default.bool,
  gray: _propTypes.default.bool,
  dark: _propTypes.default.bool,
  secondary: _propTypes.default.bool,
  primary: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string
};
var _default = Loader;
exports.default = _default;

//# sourceMappingURL=Loader.js.map