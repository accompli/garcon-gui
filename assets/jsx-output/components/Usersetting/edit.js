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

var _reactRouter = require('react-router');

var Edit = _react2['default'].createClass({
    displayName: 'Edit',

    showEdit: function showEdit() {},

    render: function render() {
        console.log(this.props);

        return _react2['default'].createElement(
            'td',
            null,
            _react2['default'].createElement(
                'button',
                { className: 'edit-options',
                    id: this.props.editid },
                _react2['default'].createElement(
                    'i',
                    { className: 'material-icons' },
                    _react2['default'].createElement(
                        'svg',
                        { className: 'edit_icon', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                        _react2['default'].createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
                    )
                )
            ),
            _react2['default'].createElement(
                'ul',
                { className: 'mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect ',
                    htmlFor: this.props.editid },
                _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/RecentActivity' },
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item' },
                        'Recent activity'
                    )
                ),
                _react2['default'].createElement(
                    'li',
                    { className: 'mdl-menu__item' },
                    'Edit'
                ),
                _react2['default'].createElement(
                    'li',
                    { className: 'mdl-menu__item' },
                    'Delete'
                )
            )
        );
    }
});

exports['default'] = Edit;
module.exports = exports['default'];