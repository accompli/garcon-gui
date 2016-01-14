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

var Newuser = _react2['default'].createClass({
    displayName: 'Newuser',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'dashboard' },
            _react2['default'].createElement(GreenBox, null),
            _react2['default'].createElement(BreadcrumbsBox, null),
            _react2['default'].createElement(NewUser, null)
        );
    }
});

var GreenBox = _react2['default'].createClass({
    displayName: 'GreenBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'block green' },
            _react2['default'].createElement(
                'div',
                { className: 'block_text' },
                'Create new user'
            )
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

var NewUser = _react2['default'].createClass({
    displayName: 'NewUser',

    addNewUser: function addNewUser(newuser) {
        //console.log(newuser);
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/users",
            dataType: 'json',
            type: 'POST',
            data: newuser,
            success: function success(data) {
                if (data.status === "success") {
                    console.log('new user added complete');
                } else if (data.status === "fail") {
                    console.log("failed");
                }
            },

            error: (function (xhr, status, err, jqXHR) {
                console.error(this.props.url, status, err.toString());
                alert(jqXHR);
            }).bind(this)
        });
    },

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var newusername = this.refs.username.value;
        var newemail = this.refs.email.value;

        if (newusername && newemail !== "") {
            this.addNewUser({
                username: newusername,
                email: newemail
            });
        }
    },

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(
                'div',
                { className: 'loginBox' },
                _react2['default'].createElement(
                    'div',
                    { className: 'demo-card-square mdl-card mdl-shadow--2dp' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'mdl-cardbox' },
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/usersettings' },
                            ' Terug-btn '
                        ),
                        _react2['default'].createElement(
                            'h5',
                            null,
                            'Add new user '
                        ),
                        'Username: ',
                        _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                            type: 'text',
                            id: 'username',
                            ref: 'username' }),
                        _react2['default'].createElement('p', null),
                        'E-mail: ',
                        _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                            type: 'text',
                            id: 'email',
                            ref: 'email' }),
                        _react2['default'].createElement('p', null),
                        _react2['default'].createElement(
                            'button',
                            { className: 'mdl-button mdl-js-button',
                                type: 'submit',
                                onClick: this.handleSubmit,
                                name: 'submit' },
                            'Add user'
                        )
                    )
                )
            )
        );
    }
});

Newuser.title = 'Create new user';
Newuser.path = '/newuser';

exports['default'] = Newuser;
module.exports = exports['default'];