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

var _projecttableJs = require('./projecttable.js');

var _projecttableJs2 = _interopRequireDefault(_projecttableJs);

var ProjectBox = _react2['default'].createClass({
    displayName: 'ProjectBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(
                'div',
                null,
                'Hier komen de filters ...'
            ),
            _react2['default'].createElement(_projecttableJs2['default'], null)
        );
    }
});

exports['default'] = ProjectBox;
module.exports = exports['default'];