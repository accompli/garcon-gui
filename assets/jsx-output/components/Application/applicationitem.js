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

var ApplicationItem = _react2['default'].createClass({
    displayName: 'ApplicationItem',

    render: function render() {
        return _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
                'td',
                null,
                this.props.app.appname
            ),
            _react2['default'].createElement(
                'td',
                null,
                this.props.app.date
            )
        );
    }
});

exports['default'] = ApplicationItem;
module.exports = exports['default'];