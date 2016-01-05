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

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _storesLoginstore = require('../stores/loginstore');

var _storesLoginstore2 = _interopRequireDefault(_storesLoginstore);

var _actionsLoginactions = require('../actions/loginactions');

var _actionsLoginactions2 = _interopRequireDefault(_actionsLoginactions);

var Dashboard = _react2['default'].createClass({
    displayName: 'Dashboard',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'dashboard' },
            _react2['default'].createElement(GreenBox, null),
            _react2['default'].createElement(BreadcrumbsBox, null)
        );
    }
});

var GreenBox = _react2['default'].createClass({
    displayName: 'GreenBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'block green' },
            _react2['default'].createElement(
                'div',
                { className: 'block_text' },
                'Dashboard'
            )
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

    mixins: [_reflux2['default'].connect(_storesLoginstore2['default'], 'loginstore')],

    render: function render() {
        return _react2['default'].createElement('div', { className: 'breadcrumbs' });
    }
});

Dashboard.title = 'Dashboard';
Dashboard.path = '/dashboard';

exports['default'] = Dashboard;
module.exports = exports['default'];