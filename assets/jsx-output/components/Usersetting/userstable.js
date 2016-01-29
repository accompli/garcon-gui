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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _editJs = require('./edit.js');

var _editJs2 = _interopRequireDefault(_editJs);

var UsersTable = _react2['default'].createClass({
    displayName: 'UsersTable',

    componentDidUpdate: function componentDidUpdate() {
        componentHandler.upgradeDom();
    },

    getInitialState: function getInitialState() {
        return { data: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadUsers();
    },

    loadUsers: function loadUsers() {
        _jquery2['default'].ajax({
            url: this.props.serverUrl + "/users",
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

    refreshUsers: function refreshUsers() {
        this.loadUsers();
    },

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'list users' },
            _react2['default'].createElement(UsersList, { refreshUsersList: this.refreshUsers, data: this.state.data, serverUrl: this.props.serverUrl }),
            _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/newuser' },
                _react2['default'].createElement(
                    'button',
                    { className: 'mdl-button mdl-js-button add_user',
                        type: '',
                        name: 'submit',
                        id: 'addnewuser' },
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

    refreshList: function refreshList() {
        this.props.refreshUsersList();
    },

    render: function render() {

        var countData = this.props.data.length;

        var userData = this.props.data.map((function (user, index) {
            return _react2['default'].createElement(Users, { refreshList: this.refreshList, user: user, key: index, countdata: index, serverUrl: this.props.serverUrl });
        }).bind(this));

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
                        _react2['default'].createElement(
                            'div',
                            { className: 'status' },
                            'Projects'
                        )
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        _react2['default'].createElement(
                            'div',
                            { className: 'edit' },
                            'Edit'
                        )
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

    deleteUser: function deleteUser() {

        _jquery2['default'].ajax({
            url: this.props.serverUrl + "/deleteuser",
            dataType: 'json',
            type: 'POST',
            data: { userid: this.props.user.userid },
            success: (function (data) {
                this.props.refreshList();
                if (data.status === "success") {} else if (data.status === "fail") {
                    console.log("Failed with edit...");
                }
            }).bind(this),
            error: (function (xhr, status, err, jqXHR) {
                console.error(this.props.url, status, err.toString());
                alert(jqXHR);
            }).bind(this)
        });
    },

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
                _react2['default'].createElement(
                    'div',
                    { className: 'status' },
                    this.props.user.projects
                )
            ),
            _react2['default'].createElement(_editJs2['default'], { 'delete': this.deleteUser, userid: this.props.countdata, username: this.props.user.username, email: this.props.user.email })
        );
    }
});

exports['default'] = UsersTable;
module.exports = exports['default'];