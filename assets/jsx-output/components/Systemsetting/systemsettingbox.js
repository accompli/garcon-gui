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

var SystemSettingsBox = _react2["default"].createClass({
    displayName: "SystemSettingsBox",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "box" },
            _react2["default"].createElement(
                "div",
                { className: "mdl-card mdl-shadow--2dp systemcard" },
                _react2["default"].createElement(
                    "div",
                    { className: "system" },
                    _react2["default"].createElement(
                        "div",
                        { className: "titel" },
                        "Visual settings"
                    ),
                    _react2["default"].createElement(
                        "div",
                        { className: "middle" },
                        _react2["default"].createElement(
                            "div",
                            { className: "setlogo" },
                            _react2["default"].createElement(
                                "div",
                                { className: "systxt" },
                                "Drag your logo here"
                            ),
                            _react2["default"].createElement(
                                "div",
                                { className: "defaultpic" },
                                _react2["default"].createElement(
                                    "svg",
                                    { className: "insertphoto", height: "48", viewBox: "0 0 24 24", width: "48", xmlns: "http://www.w3.org/2000/svg" },
                                    _react2["default"].createElement("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" }),
                                    _react2["default"].createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
                                )
                            ),
                            _react2["default"].createElement(
                                "button",
                                { className: "mdl-button mdl-js-button blue" },
                                "Or browse..."
                            )
                        ),
                        _react2["default"].createElement(
                            "div",
                            { className: "colorpickbox" },
                            " Brandcolor"
                        )
                    ),
                    _react2["default"].createElement(
                        "div",
                        { className: "foot" },
                        _react2["default"].createElement(
                            "span",
                            { className: "left" },
                            _react2["default"].createElement(
                                "a",
                                { href: "" },
                                "Restore original settings"
                            )
                        ),
                        _react2["default"].createElement(
                            "span",
                            { className: "right" },
                            _react2["default"].createElement(
                                "button",
                                { className: "mdl-button mdl-js-button" },
                                "Save settings"
                            )
                        )
                    )
                )
            )
        );
    }
});

exports["default"] = SystemSettingsBox;
module.exports = exports["default"];