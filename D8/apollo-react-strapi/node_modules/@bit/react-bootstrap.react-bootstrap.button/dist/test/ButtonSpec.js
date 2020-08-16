"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = _interopRequireDefault(require("../src/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Button>', function () {
  it('Should output a button', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, null, "Title")).find('button').should.have.length(1);
  });
  it('Should have type=button by default', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, null, "Title")).find('button').getDOMNode().getAttribute('type').should.equal('button');
  });
  it('Should show the type if passed one', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      type: "submit"
    }, "Title")).find('button').getDOMNode().getAttribute('type').should.equal('submit');
  });
  it('should forward refs to the button', function () {
    var ref = _react.default.createRef();

    (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_Button.default, {
      ref: ref
    }, "Yo")));
    ref.current.tagName.should.equal('BUTTON');
    (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_Button.default, {
      ref: ref,
      href: "a"
    }, "Yo")));
    ref.current.tagName.should.equal('A');
  });
  it('Should output an anchor if called with a href', function () {
    var href = '/url';
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      href: href
    }, "Title")).assertSingle("a[href=\"".concat(href, "\"]"));
  });
  it('Should call onClick callback', function (done) {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      onClick: function onClick() {
        return done();
      }
    }, "Title")).simulate('click');
  });
  it('Should be disabled', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      disabled: true
    }, "Title")).assertSingle("button[disabled]");
  });
  it('Should be disabled link', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      disabled: true,
      href: "#"
    }, "Title")).assertSingle("a.disabled");
  });
  it('Should have block class', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      block: true
    }, "Title")).assertSingle(".btn-block");
  });
  it('Should apply variant class', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      variant: "danger"
    }, "Title")).assertSingle(".btn-danger");
  });
  it('Should have size class', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      size: "lg"
    }, "Title")).assertSingle(".btn-lg");
  });
  it('Should honour additional classes passed in, adding not overriding', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      className: "bob",
      variant: "danger"
    }, "Title")).assertSingle(".bob.btn-danger");
  });
  it('Should default to variant="primary"', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, null, "Title")).assertSingle(".btn-primary");
  });
  it('Should be active', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      active: true
    }, "Title")).assertSingle(".active");
  });
  it('Should allow a custom prefix', function () {
    (0, _enzyme.mount)(_react.default.createElement(_Button.default, {
      bsPrefix: "my-btn",
      variant: "danger"
    }, "Title")).assertSingle(".my-btn.my-btn-danger");
  });
});

//# sourceMappingURL=ButtonSpec.js.map