"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _finderjs = require("finderjs");

var Finder = _interopRequireWildcard(_finderjs);

var _v = require("uuid/v4");

var uuidv4 = _interopRequireWildcard(_v);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
    container: undefined,
    data: [],
    options: {
        className: "",
        createItemContent: function createItemContent(config, item) {
            return "<span />";
        }
    }
};

var ReactFinder = function (_Component) {
    _inherits(ReactFinder, _Component);

    function ReactFinder(props) {
        _classCallCheck(this, ReactFinder);

        var _this = _possibleConstructorReturn(this, (ReactFinder.__proto__ || Object.getPrototypeOf(ReactFinder)).call(this, props));

        _this.state = {
            componentId: uuidv4()
        };
        return _this;
    }

    _createClass(ReactFinder, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //this.node = this.getDOMNode();
            //this.renderFinderContent();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            //this.renderFinderContent();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", {
                className: this.props.className,
                dangerouslySetInnerHTML: {
                    __html: "<div id=\"" + this.state.componentId + "\"></div>"
                }
            });
        }
    }]);

    return ReactFinder;
}(Component);

;

ReactFinder.defaultProps = defaultProps;
exports.default = ReactFinder;