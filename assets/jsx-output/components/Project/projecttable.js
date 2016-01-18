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

var ProjectTable = _react2["default"].createClass({
    displayName: "ProjectTable",

    render: function render() {
        return _react2["default"].createElement(
            "div",
            { className: "projecttable" },
            _react2["default"].createElement(
                "table",
                { className: "mdl-data-table mdl-js-data-table mdl-shadow--2dp" },
                _react2["default"].createElement(
                    "thead",
                    null,
                    _react2["default"].createElement(
                        "tr",
                        null,
                        _react2["default"].createElement(
                            "th",
                            { className: "mdl-data-table__cell--non-numeric" },
                            "Project"
                        ),
                        _react2["default"].createElement(
                            "th",
                            null,
                            "Edited"
                        ),
                        _react2["default"].createElement(
                            "th",
                            null,
                            _react2["default"].createElement(
                                "div",
                                { className: "status" },
                                "Applications"
                            )
                        ),
                        _react2["default"].createElement(
                            "th",
                            null,
                            _react2["default"].createElement(
                                "div",
                                { className: "status" },
                                "Status"
                            )
                        ),
                        _react2["default"].createElement(
                            "th",
                            null,
                            _react2["default"].createElement(
                                "div",
                                { className: "edit" },
                                "Edit"
                            )
                        )
                    )
                ),
                _react2["default"].createElement("tbody", null)
            )
        );
    }
});

exports["default"] = ProjectTable;
module.exports = exports["default"];