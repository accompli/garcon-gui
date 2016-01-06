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

var FilterBox = _react2["default"].createClass({
    displayName: "FilterBox",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "filterbox" },
            _react2["default"].createElement(
                "div",
                { className: "filter search" },
                _react2["default"].createElement(
                    "div",
                    { className: "searchbox" },
                    _react2["default"].createElement(
                        "svg",
                        { className: "search_icon filtericons", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
                        _react2["default"].createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                        _react2["default"].createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
                    ),
                    _react2["default"].createElement("input", { className: "searchform", type: "search", id: "search", placeholder: "Filter by name" })
                )
            ),
            _react2["default"].createElement(
                "div",
                { className: "sort" },
                _react2["default"].createElement(
                    "div",
                    { className: "filter sortbox" },
                    _react2["default"].createElement(
                        "div",
                        { className: "sortbox_text" },
                        "Sort by Recently Edited",
                        _react2["default"].createElement(
                            "div",
                            { className: "sort_arrows" },
                            _react2["default"].createElement(
                                "svg",
                                { className: "dropup_icon filtericons", fill: "#000000", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
                                _react2["default"].createElement("path", { d: "M7 14l5-5 5 5z" }),
                                _react2["default"].createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
                            ),
                            _react2["default"].createElement(
                                "svg",
                                { className: "dropdown_icon filtericons", fill: "#000000", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
                                _react2["default"].createElement("path", { d: "M7 10l5 5 5-5z" }),
                                _react2["default"].createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
                            )
                        )
                    )
                )
            )
        );
    }
});

exports["default"] = FilterBox;
module.exports = exports["default"];