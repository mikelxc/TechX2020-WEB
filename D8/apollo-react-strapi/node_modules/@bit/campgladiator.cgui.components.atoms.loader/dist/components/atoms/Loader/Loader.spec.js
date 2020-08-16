"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Loader = _interopRequireDefault(require("./Loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Loader />', function () {
  it('renders without crashing', function () {
    expect(function () {
      return (0, _enzyme.shallow)(_react.default.createElement(_Loader.default, null));
    }).not.toThrow();
  });
});

//# sourceMappingURL=Loader.spec.js.map