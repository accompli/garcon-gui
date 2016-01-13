/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _boxChangesJs = require('./box-changes.js');

var _boxChangesJs2 = _interopRequireDefault(_boxChangesJs);

var _boxProblemsJs = require('./box-problems.js');

var _boxProblemsJs2 = _interopRequireDefault(_boxProblemsJs);

var DashboardBox = _react2['default'].createClass({
    displayName: 'DashboardBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(_boxChangesJs2['default'], null),
            _react2['default'].createElement(_boxProblemsJs2['default'], null)
        );
    }
});

exports['default'] = DashboardBox;
module.exports = exports['default'];