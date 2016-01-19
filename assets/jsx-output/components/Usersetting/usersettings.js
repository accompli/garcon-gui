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

var _reactRouter = require('react-router');

var _history = require('history');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _LayoutGreenboxJs = require('../Layout/greenbox.js');

var _LayoutGreenboxJs2 = _interopRequireDefault(_LayoutGreenboxJs);

var _usersboxJs = require('./usersbox.js');

var _usersboxJs2 = _interopRequireDefault(_usersboxJs);

var _LayoutBreadcrumbsJs = require('../Layout/breadcrumbs.js');

var _LayoutBreadcrumbsJs2 = _interopRequireDefault(_LayoutBreadcrumbsJs);

var Usersettings = _react2['default'].createClass({
    displayName: 'Usersettings',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'usersettings' },
            _react2['default'].createElement(_LayoutGreenboxJs2['default'], { title: Usersettings.title }),
            _react2['default'].createElement(_LayoutBreadcrumbsJs2['default'], null),
            _react2['default'].createElement(_usersboxJs2['default'], { serverUrl: this.props.ajaxUrl })
        );
    }
});

Usersettings.title = 'Users';
Usersettings.path = '/usersettings';

exports['default'] = Usersettings;
module.exports = exports['default'];