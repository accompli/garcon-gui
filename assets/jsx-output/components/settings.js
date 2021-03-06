/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var Settings = _react2['default'].createClass({
    displayName: 'Settings',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'settings' },
            _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/usersettings' },
                ' User settings '
            ),
            _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/systemsettings' },
                ' System settings '
            )
        );
    }
});