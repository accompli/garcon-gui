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

var _myprofileJs = require('./myprofile.js');

var _myprofileJs2 = _interopRequireDefault(_myprofileJs);

var _greenboxJs = require('../greenbox.js');

var _greenboxJs2 = _interopRequireDefault(_greenboxJs);

var AccountSetting = _react2['default'].createClass({
    displayName: 'AccountSetting',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'myprofilebox' },
            _react2['default'].createElement(_greenboxJs2['default'], { title: AccountSetting.title }),
            _react2['default'].createElement(_myprofileJs2['default'], null)
        );
    }
});

AccountSetting.title = 'Accountsetting';
AccountSetting.path = '/accountsetting';

exports['default'] = AccountSetting;
module.exports = exports['default'];