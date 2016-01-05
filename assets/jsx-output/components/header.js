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

var Header = _react2['default'].createClass({
    displayName: 'Header',

    logout: function logout() {
        localStorage.removeItem('profile');
        location.reload();
    },

    render: function render() {

        var firstName = this.props.status;

        if (firstName === 'Login') {
            return _react2['default'].createElement(
                'div',
                { className: 'mdl-layout__header-row' },
                _react2['default'].createElement(
                    'div',
                    { className: 'garconlogo' },
                    _react2['default'].createElement(
                        'a',
                        { href: 'login.html' },
                        _react2['default'].createElement('img', { className: 'image', src: 'assets/img/logo.png', alt: 'garcon-logo' })
                    )
                ),
                _react2['default'].createElement('div', { className: 'mdl-layout-spacer' }),
                _react2['default'].createElement(
                    'div',
                    { className: 'navigation login_button' },
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '' },
                        _react2['default'].createElement(
                            'span',
                            null,
                            _react2['default'].createElement(
                                'svg',
                                { id: 'icon_login', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                                _react2['default'].createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' }),
                                _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                            )
                        ),
                        _react2['default'].createElement(
                            'span',
                            { className: 'login_text' },
                            this.props.status,
                            ' '
                        )
                    )
                )
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: 'mdl-layout__header-row' },
                _react2['default'].createElement(
                    'div',
                    { className: 'garconlogo' },
                    _react2['default'].createElement(
                        'a',
                        { href: 'login.html' },
                        _react2['default'].createElement('img', { className: 'image', src: 'assets/img/logo.png', alt: 'garcon-logo' })
                    )
                ),
                _react2['default'].createElement('div', { className: 'mdl-layout-spacer' }),
                _react2['default'].createElement(
                    'div',
                    { className: 'navigation menu' },
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/dashboard' },
                        'Dashboard'
                    ),
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/organisations' },
                        'Organisations'
                    ),
                    _react2['default'].createElement(
                        'a',
                        { id: 'settings' },
                        'Settings',
                        _react2['default'].createElement(
                            'span',
                            null,
                            _react2['default'].createElement(
                                'svg',
                                { id: 'arrow_dropdown', fill: '#000000', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                                _react2['default'].createElement('path', { d: 'M7 10l5 5 5-5z' }),
                                _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                            )
                        )
                    )
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'mdl-menu mdl-js-menu navigation tabmenu_item', htmlFor: 'settings' },
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item' },
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/usersettings' },
                            'Users'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item' },
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/systemsettings' },
                            'System'
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { id: 'btn-login', className: 'navigation login_button' },
                    _react2['default'].createElement(
                        'a',
                        null,
                        _react2['default'].createElement(
                            'span',
                            null,
                            _react2['default'].createElement('img', { src: this.props.photo, id: 'icon_login' })
                        ),
                        _react2['default'].createElement(
                            'span',
                            { className: 'login_text' },
                            this.props.status,
                            ' '
                        )
                    )
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'mdl-menu mdl-js-menu navigation tabmenu_item', htmlFor: 'btn-login' },
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item' },
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/editprofile' },
                            'Edit profile'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item' },
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/', onClick: this.logout },
                            'Logout'
                        )
                    )
                )
            );
        }
    }
});

Header.title = 'Header';
Header.path = '/header';

exports['default'] = Header;
module.exports = exports['default'];