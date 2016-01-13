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
            'Hier komt tabel'
        );
    }
});

exports['default'] = Changes;
module.exports = exports['default'];