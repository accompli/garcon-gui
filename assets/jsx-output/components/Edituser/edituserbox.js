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

var EditUserBox = _react2['default'].createClass({
    displayName: 'EditUserBox',

    editUser: function editUser() {
        console.log("Geklikt op edit knop");

        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/editusers",
            dataType: 'json',
            type: 'POST',
            data: editdata,
            succes: function succes(data) {
                if (data.status === "success") {
                    console.log("Done with edit!");
                } else {
                    console.log("Failed with edit...");
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

        var oldUsername = this.refs.username.value;
        var oldEmail = this.refs.email.value;
        var oldPhoto = this.refs.photo.value;

        console.log(oldUsername + " " + oldEmail);

        if (oldUsername && oldEmail !== "") {
            this.editUser({
                username: oldUsername,
                email: oldEmail,
                photo: oldPhoto
            });
        }
    },

    render: function render() {

        var username = this.props.data[this.props.dataId].username;
        var email = this.props.data[this.props.dataId].email;
        var photo = this.props.data[this.props.dataId].photo;

        return _react2['default'].createElement(
            'div',
            { className: 'usersbox' },
            _react2['default'].createElement(
                'div',
                { className: 'loginBox' },
                _react2['default'].createElement(
                    'div',
                    { className: 'edituserbox' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'demo-card-square mdl-card mdl-shadow--2dp' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'mdl-cardbox' },
                            'Username: ',
                            _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                                type: 'text',
                                id: 'username',
                                ref: 'username',
                                defaultValue: username,
                                placeholder: username }),
                            _react2['default'].createElement('p', null),
                            'E-mail: ',
                            _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                                type: 'text',
                                id: 'email',
                                ref: 'email',
                                defaultValue: email,
                                placeholder: email }),
                            _react2['default'].createElement('p', null),
                            'Photo source: ',
                            _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                                type: 'text',
                                id: 'email',
                                ref: 'photo',
                                defaultValue: photo,
                                placeholder: photo }),
                            _react2['default'].createElement('p', null),
                            _react2['default'].createElement(
                                'button',
                                { className: 'mdl-button mdl-js-button',
                                    type: 'submit',
                                    onClick: this.handleSubmit,
                                    name: 'submit' },
                                'Edit'
                            )
                        )
                    )
                )
            )
        );
    }
});

exports['default'] = EditUserBox;
module.exports = exports['default'];