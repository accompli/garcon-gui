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

var _edituserJs = require('./edituser.js');

var _edituserJs2 = _interopRequireDefault(_edituserJs);

var UsersTable = _react2['default'].createClass({
    displayName: 'UsersTable',

    getInitialState: function getInitialState() {
        return { data: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadUsers();
    },

    loadUsers: function loadUsers() {
        $.ajax({
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

        var countData = this.props.data.length;

        var userData = this.props.data.map(function (user, index) {

            return _react2['default'].createElement(Users, { user: user, key: index, countdata: index });
        });

        return _react2['default'].createElement(
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
                userData
            )
        );
    }
});

var Users = _react2['default'].createClass({
    displayName: 'Users',

    rawMarkup: function rawMarkup() {
        var rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    },

    render: function render() {
        return _react2['default'].createElement(
            'tr',
            null,
            _react2['default'].createElement(
                'td',
                { className: 'mdl-data-table__cell--non-numeric ' },
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
            _react2['default'].createElement(_edituserJs2['default'], { editid: this.props.countdata })
        );
    }
});

exports['default'] = UsersTable;
module.exports = exports['default'];