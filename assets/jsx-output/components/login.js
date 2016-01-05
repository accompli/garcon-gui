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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var Login = _react2['default'].createClass({
    displayName: 'Login',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(Background, null),
            _react2['default'].createElement(
                'div',
                { className: 'white_block' },
                _react2['default'].createElement(
                    'div',
                    { className: 'loginbox' },
                    _react2['default'].createElement(LoginBox, null)
                )
            )
        );
    }
});

var Background = _react2['default'].createClass({
    displayName: 'Background',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { id: 'bot' },
            _react2['default'].createElement(
                'div',
                { className: 'green-white-background' },
                _react2['default'].createElement(
                    'div',
                    { className: 'deployment_txt' },
                    'Deployment made easy'
                ),
                _react2['default'].createElement('div', { className: 'top' })
            )
        );
    }
});

//        var firstName = 'jinhua';
//        var lastName = 'Than';
//        localStorage.profile = {firstname:firstName, lastname:lastName}
//       
//        this.context.history.pushState(null, '/dashboard');
//        location.reload();

var LoginBox = _react2['default'].createClass({
    displayName: 'LoginBox',

    update: function update(token) {
        _jquery2['default'].ajax({
            url: "http://garcon-server.jinhua.choffice.nl/profile",
            dataType: 'json',
            type: 'GET',
            data: token,
            success: (function (data) {
                if (data.status === "success") {

                    var profile = [];

                    if (localStorage.profile) {
                        profile.JSON.parse(localStorage.profile);
                    }

                    profile.push({ firstname: data.firstname, lastname: data.lastname, profilepic: data.profilepicture });
                    localStorage.profile = JSON.stringify(profile);

                    this.context.history.pushState(null, '/dashboard');
                    location.reload();
                } else if (data.status === "fail") {
                    console.log(data);
                    console.log(data.message);
                }
            }).bind(this),

            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    contextTypes: {
        history: _react2['default'].PropTypes.object.isRequired
    },

    getInitialState: function getInitialState() {
        return {
            invalidmessage: ''
        };
    },

    handleInlogSubmit: function handleInlogSubmit(username) {

        var that = this;

        //Submit to the server
        _jquery2['default'].ajax({
            mixins: [_reactRouter.Router.Navigation],
            url: "http://garcon-server.jinhua.choffice.nl/login",
            dataType: 'json',
            type: 'POST',
            data: username,
            success: (function (data) {
                if (data.status === "success") {
                    var myToken = data.token;
                    //                            console.log("mijn token :" +myToken)
                    this.update({ token: myToken });
                } else if (data.status === "fail") {
                    that.setState({
                        invalidmessage: data.message
                    });
                }
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'loginBox' },
            _react2['default'].createElement(
                'div',
                { className: 'demo-card-square mdl-card mdl-shadow--2dp' },
                _react2['default'].createElement(
                    'div',
                    { className: 'mdl-cardbox' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'head' },
                        'Login ',
                        this.props.data
                    ),
                    _react2['default'].createElement(LoginForm, { onInlogSubmit: this.handleInlogSubmit,
                        notification: this.state.invalidmessage }),
                    _react2['default'].createElement(ExternLoginBox, null)
                )
            )
        );
    }
});

var LoginForm = _react2['default'].createClass({
    displayName: 'LoginForm',

    getInitialState: function getInitialState() {
        return {
            username: '',
            password: ''
        };
    },

    handleUsernameChange: function handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    },

    handlePasswordChange: function handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    },

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var username = this.state.username.trim();
        var password = this.state.password.trim();

        if (!username || !password) {
            this.setState({
                errormessage: 'Empty username or password'
            });

            return;
        }

        //Empty form & errormessage
        this.setState({
            username: '',
            password: '',
            errormessage: ''
        });

        //Send request to the server
        this.props.onInlogSubmit({
            username: username,
            password: password
        });
    },

    destorayLocalstorage: function destorayLocalstorage() {
        window.localStorage.removeItem('profile');
    },

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'loginForm' },
            _react2['default'].createElement(
                'form',
                { className: 'inlogForm', onSubmit: this.handleSubmit },
                _react2['default'].createElement(
                    'div',
                    { className: 'errormsg-box' },
                    this.props.notification
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
                        value: this.state.username,
                        onChange: this.handleUsernameChange,
                        id: 'username' }),
                    _react2['default'].createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'username' },
                        'Username',
                        _react2['default'].createElement(
                            'span',
                            { className: 'form_icon' },
                            _react2['default'].createElement(
                                'svg',
                                { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                                _react2['default'].createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' }),
                                _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                            )
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                    _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                        type: 'password',
                        value: this.state.password,
                        onChange: this.handlePasswordChange,
                        id: 'password' }),
                    _react2['default'].createElement(
                        'label',
                        { className: 'mdl-textfield__label', htmlFor: 'password' },
                        'Password',
                        _react2['default'].createElement(
                            'span',
                            { className: 'form_icon' },
                            _react2['default'].createElement(
                                'svg',
                                { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                                _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                                _react2['default'].createElement('path', { d: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-5.1c1.71 0 3.1 1.39 3.1 3.1v2H9V6h-.1c0-1.71 1.39-3.1 3.1-3.1zM18 20H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' })
                            )
                        )
                    )
                ),
                _react2['default'].createElement(
                    'label',
                    { className: 'mdl-checkbox mdl-js-checkbox', htmlFor: 'checkbox-signin' },
                    _react2['default'].createElement('input', { className: 'mdl-checkbox__input',
                        id: 'checkbox-signin',
                        type: 'checkbox',
                        defaultChecked: 'defaultChecked',
                        onCheckChange: this.destorayLocalstorage }),
                    _react2['default'].createElement(
                        'span',
                        { className: 'mdl-checkbox__label' },
                        ' Keep me signed in '
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
                            { to: '/forgetpass' },
                            'Forgot your password?'
                        )
                    ),
                    _react2['default'].createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button login',
                            type: 'submit',
                            name: 'submit' },
                        'Login'
                    )
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'circle' },
                'OR'
            ),
            _react2['default'].createElement('hr', null)
        );
    }
});

var ExternLoginBox = _react2['default'].createClass({
    displayName: 'ExternLoginBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'externLoginBox' },
            _react2['default'].createElement(
                'div',
                { className: 'mdl-extern_login' },
                _react2['default'].createElement(
                    'button',
                    { className: 'ext_login_button github' },
                    'Login with Github'
                ),
                _react2['default'].createElement(
                    'button',
                    { className: 'ext_login_button google' },
                    'Login with Google'
                )
            )
        );
    }
});

Login.title = 'Login';
Login.path = '/login';

exports['default'] = Login;
module.exports = exports['default'];