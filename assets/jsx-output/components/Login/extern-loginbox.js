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

var ExternLoginBox = _react2["default"].createClass({
    displayName: "ExternLoginBox",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "externLoginBox" },
            _react2["default"].createElement(
                "div",
                { className: "mdl-extern_login" },
                _react2["default"].createElement(
                    "button",
                    { className: "ext_login_button github" },
                    "Login with Github"
                ),
                _react2["default"].createElement(
                    "button",
                    { className: "ext_login_button google" },
                    "Login with Google"
                )
            )
        );
    }
});

exports["default"] = ExternLoginBox;
module.exports = exports["default"];