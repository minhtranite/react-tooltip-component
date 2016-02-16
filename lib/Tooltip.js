'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var Tooltip = (function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    var _this = this;

    _classCallCheck(this, Tooltip);

    _get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).apply(this, arguments);

    this.componentDidMount = function () {
      _this.container = _this.props.container || document.body;
      _this.componentEl = _reactDom2['default'].findDOMNode(_this);
      _this.tooltipEl = document.createElement('div');

      var tooltipArrowEl = document.createElement('div');
      tooltipArrowEl.className = 'tooltip-arrow';

      var tooltipContentEl = document.createElement('div');
      tooltipContentEl.className = 'tooltip-inner';
      tooltipContentEl.textContent = _this.props.title;

      _this.tooltipEl.appendChild(tooltipArrowEl);
      _this.tooltipEl.appendChild(tooltipContentEl);
      _this.tooltipEl.className = 'tooltip ' + _this.props.position;
      _this.container.appendChild(_this.tooltipEl);
      _this.resetTooltip();

      _this.componentEl.addEventListener(_this.props.fixed ? 'mouseenter' : 'mousemove', _this.handleMouseMove);
      _this.componentEl.addEventListener('mouseleave', _this.handleMouseOut);
    };

    this.componentDidUpdate = function () {
      _this.tooltipEl.className = 'tooltip ' + _this.props.position;
      _this.tooltipEl.childNodes[1].textContent = _this.props.title;
    };

    this.componentWillUnmount = function () {
      _this.componentEl.removeEventListener(_this.props.fixed ? 'mouseenter' : 'mousemove', _this.handleMouseMove);
      _this.componentEl.removeEventListener('mouseleave', _this.handleMouseOut);
      _this.container.removeChild(_this.tooltipEl);
    };

    this.resetTooltip = function () {
      _this.tooltipEl.style.transition = 'opacity 0.4s';
      _this.tooltipEl.style.left = '-500px';
      _this.tooltipEl.style.top = '-500px';
      _this.tooltipEl.style.opacity = 0;
    };

    this.handleMouseMove = function (e) {
      if (_this.props.title === '') {
        return;
      }

      var tooltipPosition = _this.getTooltipPosition(e);
      var tooltipOffset = _this.getTooltipOffset();

      _this.tooltipEl.style.left = tooltipPosition.x + tooltipOffset.x + 'px';
      _this.tooltipEl.style.top = tooltipPosition.y + tooltipOffset.y + 'px';
      _this.tooltipEl.style.opacity = 1;
    };

    this.handleMouseOut = function () {
      _this.resetTooltip();
    };

    this.getTooltipPosition = function (e) {
      var pointX = undefined;
      var pointY = undefined;
      var bodyRect = document.body.getBoundingClientRect();
      var containerRect = _this.container.getBoundingClientRect();
      var containerOffsetX = containerRect.left - bodyRect.left;
      var containerOffsetY = containerRect.top - bodyRect.top;
      if (_this.props.fixed) {
        var componentRect = _this.componentEl.getBoundingClientRect();
        var componentOffsetX = componentRect.left - containerOffsetX;
        var componentOffsetY = componentRect.top - containerOffsetY;
        var componentWidth = _this.componentEl.offsetWidth;
        var componentHeight = _this.componentEl.offsetHeight;
        var cOffsetX = 0;
        var cOffsetY = 0;
        switch (_this.props.position) {
          case 'top':
            cOffsetX = componentWidth / 2;
            cOffsetY = 0;
            break;
          case 'right':
            cOffsetX = componentWidth;
            cOffsetY = componentHeight / 2;
            break;
          case 'bottom':
            cOffsetX = componentWidth / 2;
            cOffsetY = componentHeight;
            break;
          case 'left':
            cOffsetX = 0;
            cOffsetY = componentHeight / 2;
            break;
        }
        pointX = componentOffsetX + cOffsetX + (window.scrollX || window.pageXOffset);
        pointY = componentOffsetY + cOffsetY + (window.scrollY || window.pageYOffset);
      } else {
        var clientX = e.clientX;
        var clientY = e.clientY;
        pointX = clientX - containerOffsetX + (window.scrollX || window.pageXOffset);
        pointY = clientY - containerOffsetY + (window.scrollY || window.pageYOffset);
      }
      return {
        x: pointX,
        y: pointY
      };
    };

    this.getTooltipOffset = function () {
      var tooltipW = _this.tooltipEl.offsetWidth;
      var tooltipH = _this.tooltipEl.offsetHeight;
      var offsetX = 0;
      var offsetY = 0;
      switch (_this.props.position) {
        case 'top':
          offsetX = -(tooltipW / 2);
          offsetY = -(tooltipH + Number(_this.props.space));
          break;
        case 'right':
          offsetX = Number(_this.props.space);
          offsetY = -(tooltipH / 2);
          break;
        case 'bottom':
          offsetX = -(tooltipW / 2);
          offsetY = Number(_this.props.space);
          break;
        case 'left':
          offsetX = -(tooltipW + Number(_this.props.space));
          offsetY = -(tooltipH / 2);
          break;
      }
      return {
        x: offsetX,
        y: offsetY
      };
    };
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }], [{
    key: 'propTypes',
    value: {
      container: _react2['default'].PropTypes.any,
      children: _react2['default'].PropTypes.node.isRequired,
      title: _react2['default'].PropTypes.string.isRequired,
      position: _react2['default'].PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
      fixed: _react2['default'].PropTypes.bool,
      space: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number])
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      container: document.body,
      position: 'top',
      fixed: true,
      space: 5
    },
    enumerable: true
  }]);

  return Tooltip;
})(_react2['default'].Component);

exports['default'] = Tooltip;
module.exports = exports['default'];