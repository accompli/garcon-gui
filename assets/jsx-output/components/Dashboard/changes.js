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

    rawMarkup: function rawMarkup() {
        var rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    },

    showStatus: function showStatus() {
        if (this.props.row.status === "Error") {
            return _react2['default'].createElement(
                'div',
                { className: 'status error' },
                this.props.row.status
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: 'status available' },
                this.props.row.status
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
                this.props.row.projectname
            ),
            _react2['default'].createElement(
                'td',
                null,
                this.props.row.applicationname
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