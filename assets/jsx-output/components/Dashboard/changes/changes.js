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

    showStatus: function showStatus() {
        if (this.props.data.status === "Error") {
            return _react2['default'].createElement(
                'div',
                { className: 'status error' },
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'svg',
                        { className: 'error', fill: '#000000', height: '20', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                        _react2['default'].createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })
                    )
                ),
                _react2['default'].createElement(
                    'span',
                    null,
                    this.props.data.status
                )
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: 'status available' },
                _react2['default'].createElement(
                    'svg',
                    { className: 'available', fill: '#000000', height: '20', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                    _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                    _react2['default'].createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
                ),
                this.props.data.status
            );
        }
    },

    render: function render() {
        return _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
                'td',
                null,
                this.props.data.projectname
            ),
            _react2['default'].createElement(
                'td',
                null,
                this.props.data.applicationname
            ),
            _react2['default'].createElement(
                'td',
                { className: 'status' },
                this.showStatus()
            )
        );
    }
});

exports['default'] = Changes;
module.exports = exports['default'];