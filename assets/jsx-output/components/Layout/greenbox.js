/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var GreenBox = _react2["default"].createClass({
    displayName: "GreenBox",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "block green" },
            _react2["default"].createElement(
                "div",
                { className: "block_text" },
                this.props.title
            )
        );
    }
});

exports["default"] = GreenBox;
module.exports = exports["default"];