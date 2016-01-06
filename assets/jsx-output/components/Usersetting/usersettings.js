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

var _history = require('history');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _greenboxJs = require('../greenbox.js');

var _greenboxJs2 = _interopRequireDefault(_greenboxJs);

var Usersettings = _react2['default'].createClass({
    displayName: 'Usersettings',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'usersettings' },
            _react2['default'].createElement(_greenboxJs2['default'], { title: Usersettings.title }),
            _react2['default'].createElement(BreadcrumbsBox, null),
            _react2['default'].createElement(UsersBox, null)
        );
    }
});

var BreadcrumbsBox = _react2['default'].createClass({
    displayName: 'BreadcrumbsBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'block white' },
            _react2['default'].createElement(BreadcrumbsList, null)
        );
    }
});

var BreadcrumbsList = _react2['default'].createClass({
    displayName: 'BreadcrumbsList',

    render: function render() {
        return _react2['default'].createElement('div', { className: 'breadcrumbs' });
    }
});

var UsersBox = _react2['default'].createClass({
    displayName: 'UsersBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'usersbox' },
            _react2['default'].createElement(FilterBox, null),
            _react2['default'].createElement(UsersBoard, null)
        );
    }
});

var FilterBox = _react2['default'].createClass({
    displayName: 'FilterBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'filterbox' },
            _react2['default'].createElement(
                'div',
                { className: 'filter search' },
                _react2['default'].createElement(
                    'div',
                    { className: 'searchbox' },
                    _react2['default'].createElement(
                        'svg',
                        { className: 'search_icon filtericons', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                        _react2['default'].createElement('path', { d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' }),
                        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                    ),
                    _react2['default'].createElement('input', { className: 'searchform', type: 'search', id: 'search', placeholder: 'Filter by name' })
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'sort' },
                _react2['default'].createElement(
                    'div',
                    { className: 'filter sortbox' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'sortbox_text' },
                        'Sort by Recently Edited',
                        _react2['default'].createElement(
                            'div',
                            { className: 'sort_arrows' },
                            _react2['default'].createElement(
                                'svg',
                                { className: 'dropup_icon filtericons', fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                                _react2['default'].createElement('path', { d: 'M7 14l5-5 5 5z' }),
                                _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                            ),
                            _react2['default'].createElement(
                                'svg',
                                { className: 'dropdown_icon filtericons', fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                                _react2['default'].createElement('path', { d: 'M7 10l5 5 5-5z' }),
                                _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                            )
                        )
                    )
                )
            )
        );
    }
});

var UsersBoard = _react2['default'].createClass({
    displayName: 'UsersBoard',

    getInitialState: function getInitialState() {
        return { data: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadUsers();
    },

    loadUsers: function loadUsers() {
        _jquery2['default'].ajax({
            url: "http://garcon-server.jinhua.choffice.nl/users",
            dataType: 'json',
            success: (function (data) {
                this.setState({
                    data: data.userdata
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'list users' },
            _react2['default'].createElement(UsersList, { data: this.state.data }),
            _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/newuser' },
                _react2['default'].createElement(
                    'button',
                    { className: 'mdl-button mdl-js-button add_user',
                        type: '',
                        name: 'submit' },
                    _react2['default'].createElement(
                        'svg',
                        { className: 'add_icon', fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                        _react2['default'].createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
                    )
                )
            )
        );
    }
});

var UsersList = _react2['default'].createClass({
    displayName: 'UsersList',

    propTypes: {
        data: _react2['default'].PropTypes.array.isRequired
    },

    render: function render() {
        var userData = this.props.data.map(function (user, index) {
            //                                   console.log(user)                
            return _react2['default'].createElement(Users, { user: user, key: index });
        });

        return _react2['default'].createElement(
            'div',
            { className: 'usersList' },
            userData
        );
    }
});

var Users = _react2['default'].createClass({
    displayName: 'Users',

    rawMarkup: function rawMarkup() {
        var rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    },

    showEdit: function showEdit() {
        console.log("cliked");
    },

    render: function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'table',
                { className: 'mdl-data-table mdl-js-data-table mdl-shadow--2dp' },
                _react2['default'].createElement(
                    'thead',
                    null,
                    _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                            'th',
                            { className: 'mdl-data-table__cell--non-numeric' },
                            'Photo'
                        ),
                        _react2['default'].createElement(
                            'th',
                            null,
                            'Username'
                        ),
                        _react2['default'].createElement(
                            'th',
                            null,
                            'E-mail'
                        ),
                        _react2['default'].createElement(
                            'th',
                            null,
                            'Projects'
                        ),
                        _react2['default'].createElement(
                            'th',
                            null,
                            'Edit'
                        )
                    )
                ),
                _react2['default'].createElement(
                    'tbody',
                    null,
                    _react2['default'].createElement(
                        'tr',
                        null,
                        _react2['default'].createElement(
                            'td',
                            { className: 'mdl-data-table__cell--non-numeric' },
                            _react2['default'].createElement('img', { src: this.props.user.photo, id: 'usericons' })
                        ),
                        _react2['default'].createElement(
                            'td',
                            null,
                            this.props.user.username
                        ),
                        _react2['default'].createElement(
                            'td',
                            null,
                            this.props.user.email
                        ),
                        _react2['default'].createElement(
                            'td',
                            null,
                            this.props.user.projects
                        ),
                        _react2['default'].createElement('td', null)
                    )
                )
            )
        );
    }
});

Usersettings.title = 'Users';
Usersettings.path = '/usersettings';

exports['default'] = Usersettings;
module.exports = exports['default'];