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

var Background = _react2["default"].createClass({
    displayName: "Background",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { id: "bot" },
            _react2["default"].createElement(
                "div",
                { className: "green-white-background" },
                _react2["default"].createElement(
                    "div",
                    { className: "deployment_txt" },
                    "Deployment made easy"
                ),
                _react2["default"].createElement("div", { className: "top" })
            )
        );
    }
});

exports["default"] = Background;
module.exports = exports["default"];