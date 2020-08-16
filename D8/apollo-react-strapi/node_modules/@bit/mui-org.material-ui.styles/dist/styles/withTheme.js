"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/styles");

var _defaultTheme = _interopRequireDefault(require("./defaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withTheme = (0, _styles.withThemeCreator)({
  defaultTheme: _defaultTheme.default
});
var _default = withTheme;
exports.default = _default;

//# sourceMappingURL=withTheme.js.map