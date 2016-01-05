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

var Test = _react2["default"].createClass({
    displayName: "Test",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "about" },
            "This is about page :)Troll :D:D:D Hai",
            _react2["default"].createElement(
                "div",
                { className: "garconlogo" },
                _react2["default"].createElement(
                    "a",
                    { href: "login.html" },
                    _react2["default"].createElement("img", { className: "image", src: 'assets/img/logo.png', alt: "garcon-logo" })
                )
            )
        );
    }
});

exports["default"] = Test;
module.exports = exports["default"];