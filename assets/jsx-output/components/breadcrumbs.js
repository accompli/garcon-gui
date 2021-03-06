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

var Breadcrumbs = _react2["default"].createClass({
    displayName: "Breadcrumbs",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "breandcrumbs" },
            _react2["default"].createElement(
                "ul",
                { className: "breadcrumbs-list" },
                this.props.routes.map(function (item, index) {
                    return _react2["default"].createElement(
                        "li",
                        { key: index },
                        _react2["default"].createElement(
                            Link,
                            {
                                onlyActiveOnIndex: true,
                                activeClassName: "breadcrumb-active",
                                to: item.path || '' },
                            item.component.title
                        ),
                        index + 1 < depth && "→"
                    );
                })
            )
        );
    }
});

exports["default"] = Breadcrumbs;
module.exports = exports["default"];