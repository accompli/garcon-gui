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

var ProfilePhoto = _react2['default'].createClass({
    displayName: 'ProfilePhoto',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'photobox' },
            _react2['default'].createElement(
                'div',
                { className: 'titel photo' },
                'Profile photo'
            ),
            _react2['default'].createElement(
                'div',
                { className: 'photoframe' },
                _react2['default'].createElement(
                    'div',
                    { className: 'setphoto' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'phototxt' },
                        'Drag your profile photo in here'
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'defaultpic' },
                        _react2['default'].createElement(
                            'svg',
                            { className: 'insertphoto', height: '50', viewBox: '0 0 24 24', width: '48', xmlns: 'http://www.w3.org/2000/svg' },
                            _react2['default'].createElement('path', { d: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' }),
                            _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                        )
                    ),
                    _react2['default'].createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button blue' },
                        'Or browse...'
                    )
                )
            )
        );
    }
});

exports['default'] = ProfilePhoto;
module.exports = exports['default'];