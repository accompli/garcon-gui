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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _LayoutBackgroundDeploymentTextJs = require('../Layout/background-deployment-text.js');

var _LayoutBackgroundDeploymentTextJs2 = _interopRequireDefault(_LayoutBackgroundDeploymentTextJs);

var _loginboxJs = require('./loginbox.js');

var _loginboxJs2 = _interopRequireDefault(_loginboxJs);

var Login = _react2['default'].createClass({
    displayName: 'Login',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_LayoutBackgroundDeploymentTextJs2['default'], null),
            _react2['default'].createElement(
                'div',
                { className: 'white_block' },
                _react2['default'].createElement(
                    'div',
                    { className: 'loginbox' },
                    _react2['default'].createElement(_loginboxJs2['default'], { serverUrl: this.props.ajaxUrl })
                )
            )
        );
    }
});

Login.title = 'Login';
Login.path = '/login';

exports['default'] = Login;
module.exports = exports['default'];