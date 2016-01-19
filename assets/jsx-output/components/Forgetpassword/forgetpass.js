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

var _LayoutBackgroundDeploymentTextJs = require('../Layout/background-deployment-text.js');

var _LayoutBackgroundDeploymentTextJs2 = _interopRequireDefault(_LayoutBackgroundDeploymentTextJs);

var Forgetpass = _react2['default'].createClass({
    displayName: 'Forgetpass',

    getInitialState: function getInitialState() {
        return {
            invalidmessage: ''
        };
    },

    handleResetSubmit: function handleResetSubmit(email) {
        var that = this;

        that.setState({
            message: ''
        }),

        //Submit to the server
        $.ajax({
            url: this.props.ajaxUrl + "/email",
            dataType: 'json',
            type: 'POST',
            data: email,
            success: function success(data) {
                if (data.status === "success") {
                    //location.href="user_settings.php";
                    var sendMessage = "Thank you. Please make sure you check your inbox for our confirmation.";
                    that.setState({
                        message: sendMessage
                    });
                    console.log('Gelukt');
                } else if (data.status === "fail") {
                    console.log(data.message);
                    var errormessage = "Wrong email";
                    console.log(errormessage);
                    that.setState({
                        message: data.message
                    });
                }
            },
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    render: function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(_LayoutBackgroundDeploymentTextJs2['default'], null),
            _react2['default'].createElement(
                'div',
                { className: 'white_block' },
                _react2['default'].createElement(
                    'div',
                    { className: 'resetBox' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'demo-card-square mdl-card mdl-shadow--2dp' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'mdl-cardbox' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'head' },
                                'Reset password'
                            ),
                            _react2['default'].createElement(EmailForm, { onResetSubmit: this.handleResetSubmit,
                                foo: this.state.message })
                        )
                    )
                )
            )
        );
    }
});

var EmailForm = _react2['default'].createClass({
    displayName: 'EmailForm',

    getInitialState: function getInitialState() {
        return {
            email: ''
        };
    },

    handleEmailChange: function handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    },

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var email = this.state.email.trim();

        if (!email) {
            this.setState({
                errormessage: 'Empty email'
            });

            return;
        }

        //Empty form & errormessage
        this.setState({
            email: '',
            errormessage: ''
        });

        //Send request to the server
        this.props.onResetSubmit({
            email: email
        });
    },

    render: function render() {
        return _react2['default'].createElement(
            'form',
            { className: 'emailForm', onSubmit: this.handleSubmit },
            _react2['default'].createElement(
                'div',
                { className: 'errormsg-box' },
                this.props.foo
            ),
            _react2['default'].createElement(
                'div',
                { className: 'errormsg-box' },
                this.state.errormessage
            ),
            _react2['default'].createElement(
                'div',
                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                    type: 'text',
                    value: this.state.email,
                    onChange: this.handleEmailChange,
                    id: 'email' }),
                _react2['default'].createElement(
                    'label',
                    { className: 'mdl-textfield__label', htmlFor: 'email' },
                    'E-mail adress',
                    _react2['default'].createElement(
                        'span',
                        { className: 'form_icon' },
                        _react2['default'].createElement(
                            'svg',
                            { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                            _react2['default'].createElement('path', { d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' }),
                            _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                        )
                    )
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'forget_pwd' },
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        _reactRouter.Link,
                        { to: '/' },
                        'Back to login'
                    )
                ),
                _react2['default'].createElement(
                    'button',
                    { className: 'mdl-button mdl-js-button login',
                        type: 'submit',
                        name: 'submit' },
                    'RESET'
                )
            )
        );
    }
});

Forgetpass.title = 'Forget password';
Forgetpass.path = '/forgetpass';

exports['default'] = Forgetpass;
module.exports = exports['default'];