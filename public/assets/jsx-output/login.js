/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

var LoginBox = React.createClass({
    displayName: 'LoginBox',

    getInitialState: function getInitialState() {
        return {
            invalidmessage: ''
        };
    },

    handleInlogSubmit: function handleInlogSubmit(username) {
        var that = this;

        //Submit to the server
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: username,
            success: function success(data) {
                if (data.status === "success") {
                    location.href = "user_settings.php";
                    console.log('Gelukt');
                } else if (data.status === "fail") {
                    console.log(data.message);
                    var errormessage = "Wrong username input";
                    console.log(errormessage);
                    that.setState({
                        invalidmessage: data.message
                    });
                }
            },
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    render: function render() {
        return React.createElement(
            'div',
            { className: 'loginBox' },
            React.createElement(
                'div',
                { className: 'demo-card-square mdl-card mdl-shadow--2dp' },
                React.createElement(
                    'div',
                    { className: 'mdl-card' },
                    React.createElement(
                        'div',
                        { className: 'head' },
                        'Login'
                    ),
                    React.createElement(LoginForm, { onInlogSubmit: this.handleInlogSubmit,
                        foo: this.state.invalidmessage })
                )
            )
        );
    }
});

var LoginForm = React.createClass({
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
                errormessage: 'No username or password'
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

    render: function render() {
        return React.createElement(
            'form',
            { className: 'inlogForm', onSubmit: this.handleSubmit },
            React.createElement(
                'div',
                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                React.createElement('input', { className: 'mdl-textfield__input',
                    type: 'text',
                    value: this.state.username,
                    onChange: this.handleUsernameChange,
                    id: 'username' }),
                React.createElement(
                    'label',
                    { className: 'mdl-textfield__label', htmlFor: 'username' },
                    'Username',
                    React.createElement(
                        'span',
                        { className: 'form_icon' },
                        React.createElement(
                            'svg',
                            { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' }),
                            React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                React.createElement('input', { className: 'mdl-textfield__input',
                    type: 'password',
                    value: this.state.password,
                    onChange: this.handlePasswordChange,
                    id: 'password' }),
                React.createElement(
                    'label',
                    { className: 'mdl-textfield__label', htmlFor: 'password' },
                    'Password',
                    React.createElement(
                        'span',
                        { className: 'form_icon' },
                        React.createElement(
                            'svg',
                            { height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                            React.createElement('path', { d: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6-5.1c1.71 0 3.1 1.39 3.1 3.1v2H9V6h-.1c0-1.71 1.39-3.1 3.1-3.1zM18 20H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' })
                        )
                    )
                )
            ),
            this.props.foo,
            this.state.errormessage,
            React.createElement(
                'label',
                { className: 'mdl-checkbox mdl-js-checkbox', htmlFor: 'checkbox-signin' },
                React.createElement('input', { className: 'mdl-checkbox__input',
                    id: 'checkbox-signin',
                    type: 'checkbox' }),
                React.createElement(
                    'span',
                    { className: 'mdl-checkbox__label' },
                    ' Keep me signed in '
                )
            ),
            React.createElement(
                'div',
                { className: 'forget_pwd' },
                React.createElement(
                    'span',
                    null,
                    React.createElement(
                        'a',
                        { href: '#' },
                        'Forgot your password?'
                    )
                ),
                React.createElement(
                    'button',
                    { className: 'mdl-button mdl-js-button login',
                        type: 'submit',
                        name: 'submit' },
                    'Login'
                )
            )
        );
    }
});

var LoginTest = React.createClass({
    displayName: 'LoginTest',

    render: function render() {
        return React.createElement(
            'h2',
            null,
            'Test'
        );
    }
});

ReactDOM.render(React.createElement(LoginBox, { url: 'http://garcon-server.jinhua.choffice.nl/login' }), document.getElementById('login_block'));