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

var _reactRouter = require('react-router');

var _greenboxJs = require('../greenbox.js');

var _greenboxJs2 = _interopRequireDefault(_greenboxJs);

var Dashboard = _react2['default'].createClass({
    displayName: 'Dashboard',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'dashboard' },
            _react2['default'].createElement(_greenboxJs2['default'], { title: Dashboard.title }),
            _react2['default'].createElement(BreadcrumbsBox, null)
        );
    }
});

var BreadcrumbsBox = _react2['default'].createClass({
    displayName: 'BreadcrumbsBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'block white' },
            _react2['default'].createElement(BreadcrumbsList, null)
        );
    }
});

var BreadcrumbsList = _react2['default'].createClass({
    displayName: 'BreadcrumbsList',

    render: function render() {
        return _react2['default'].createElement('div', { className: 'breadcrumbs' });
    }
});

Dashboard.title = 'Dashboard';
Dashboard.path = '/dashboard';

exports['default'] = Dashboard;
module.exports = exports['default'];