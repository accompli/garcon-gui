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

var _reactRouter = require('react-router');

var ApplicationItem = _react2['default'].createClass({
    displayName: 'ApplicationItem',

    showAppStatus: function showAppStatus() {
        if (this.props.app.appstatus === "Error") {
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
                    this.props.app.appstatus
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
                this.props.app.appstatus
            );
        }
    },

    render: function render() {
        return _react2['default'].createElement(
            'tr',
            { className: this.props.state },
            _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'first-detail-data' },
                    this.props.app.appname
                )
            ),
            _react2['default'].createElement(
                'td',
                null,
                this.props.app.editdate
            ),
            _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'status' },
                    this.props.app.version
                )
            ),
            _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'status' },
                    this.showAppStatus()
                )
            ),
            _react2['default'].createElement(
                'td',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'status' },
                    _react2['default'].createElement(
                        'button',
                        { className: 'edit-options app-edit',
                            id: this.props.app.appid },
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
                            htmlFor: this.props.app.appid },
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
                )
            ),
            _react2['default'].createElement(
                'tr',
                null,
                _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button add-app' },
                        _react2['default'].createElement(
                            'svg',
                            { className: 'add-application-icon', fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                            _react2['default'].createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
                        ),
                        'New application'
                    )
                )
            )
        );
    }
});

exports['default'] = ApplicationItem;
module.exports = exports['default'];