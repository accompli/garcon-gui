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

var MyProfileBox = _react2["default"].createClass({
    displayName: "MyProfileBox",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "myprofilebox" },
            "Hello"
        );
    }
});

exports["default"] = MyProfileBox;
module.exports = exports["default"];