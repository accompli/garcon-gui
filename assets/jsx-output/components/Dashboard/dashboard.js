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

var _LayoutGreenboxJs = require('../Layout/greenbox.js');

var _LayoutGreenboxJs2 = _interopRequireDefault(_LayoutGreenboxJs);

var _LayoutBreadcrumbsJs = require('../Layout/breadcrumbs.js');

var _LayoutBreadcrumbsJs2 = _interopRequireDefault(_LayoutBreadcrumbsJs);

var _dashboardboxJs = require('./dashboardbox.js');

var _dashboardboxJs2 = _interopRequireDefault(_dashboardboxJs);

var Dashboard = _react2['default'].createClass({
    displayName: 'Dashboard',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'dashboard' },
            _react2['default'].createElement(_LayoutGreenboxJs2['default'], { title: Dashboard.title }),
            _react2['default'].createElement(_dashboardboxJs2['default'], null)
        );
    }
});

Dashboard.title = 'Dashboard';
Dashboard.path = '/dashboard';

exports['default'] = Dashboard;
module.exports = exports['default'];