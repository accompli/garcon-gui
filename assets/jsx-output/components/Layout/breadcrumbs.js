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

var BreadcrumbsBox = _react2["default"].createClass({
    displayName: "BreadcrumbsBox",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "block white" },
            _react2["default"].createElement(BreadcrumbsList, null)
        );
    }
});

var BreadcrumbsList = _react2["default"].createClass({
    displayName: "BreadcrumbsList",

    render: function render() {

        return _react2["default"].createElement("div", { className: "breadcrumbs" });
    }
});

exports["default"] = BreadcrumbsBox;
module.exports = exports["default"];