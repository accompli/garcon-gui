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

var _tableChanges = require('./table-changes');

var _tableChanges2 = _interopRequireDefault(_tableChanges);

var Changes = _react2['default'].createClass({
    displayName: 'Changes',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'tablebox changes' },
            _react2['default'].createElement(
                'div',
                { className: 'table-title' },
                'Recent changes'
            ),
            _react2['default'].createElement(_tableChanges2['default'], null)
        );
    }
});

exports['default'] = Changes;
module.exports = exports['default'];