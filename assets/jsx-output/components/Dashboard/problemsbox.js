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

var Problems = _react2['default'].createClass({
    displayName: 'Problems',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'tablebox problems' },
            _react2['default'].createElement(
                'div',
                { className: 'table-title' },
                'Problems'
            ),
            'Hier komt tabel'
        );
    }
});

exports['default'] = Problems;
module.exports = exports['default'];