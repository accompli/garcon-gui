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

var _filterboxJs = require('./filterbox.js');

var _filterboxJs2 = _interopRequireDefault(_filterboxJs);

var _userstableJs = require('./userstable.js');

var _userstableJs2 = _interopRequireDefault(_userstableJs);

var UsersBox = _react2['default'].createClass({
    displayName: 'UsersBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'usersbox' },
            _react2['default'].createElement(_filterboxJs2['default'], null),
            _react2['default'].createElement(_userstableJs2['default'], null)
        );
    }
});

exports['default'] = UsersBox;
module.exports = exports['default'];