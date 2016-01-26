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

var _profileinformationJs = require('./profileinformation.js');

var _profileinformationJs2 = _interopRequireDefault(_profileinformationJs);

var _profilephotoJs = require('./profilephoto.js');

var _profilephotoJs2 = _interopRequireDefault(_profilephotoJs);

var MyProfileBox = _react2['default'].createClass({
    displayName: 'MyProfileBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(
                'div',
                { className: 'profile' },
                _react2['default'].createElement(
                    'div',
                    { className: 'mdl-card profilecards profilephoto' },
                    _react2['default'].createElement(_profilephotoJs2['default'], null)
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'mdl-card profilecards profiledata' },
                    _react2['default'].createElement(_profileinformationJs2['default'], null)
                )
            )
        );
    }
});

exports['default'] = MyProfileBox;
module.exports = exports['default'];