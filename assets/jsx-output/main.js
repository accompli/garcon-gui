'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../css/main.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _history = require('history');

var _componentsForgetpasswordForgetpassJs = require('./components/Forgetpassword/forgetpass.js');

var _componentsForgetpasswordForgetpassJs2 = _interopRequireDefault(_componentsForgetpasswordForgetpassJs);

var _componentsLoginLoginJs = require('./components/Login/login.js');

var _componentsLoginLoginJs2 = _interopRequireDefault(_componentsLoginLoginJs);

var _componentsDashboardDashboardJs = require('./components/Dashboard/dashboard.js');

var _componentsDashboardDashboardJs2 = _interopRequireDefault(_componentsDashboardDashboardJs);

var _componentsUsersettingUsersettingsJs = require('./components/Usersetting/usersettings.js');

var _componentsUsersettingUsersettingsJs2 = _interopRequireDefault(_componentsUsersettingUsersettingsJs);

var _componentsNewuserJs = require('./components/newuser.js');

var _componentsNewuserJs2 = _interopRequireDefault(_componentsNewuserJs);

var _componentsOrganisationsOrganisationsJs = require('./components/Organisations/organisations.js');

var _componentsOrganisationsOrganisationsJs2 = _interopRequireDefault(_componentsOrganisationsOrganisationsJs);

var _componentsLayoutHeaderJs = require('./components/Layout/header.js');

var _componentsLayoutHeaderJs2 = _interopRequireDefault(_componentsLayoutHeaderJs);

var _componentsAccountsettingAccountsettingJs = require('./components/Accountsetting/accountsetting.js');

var _componentsAccountsettingAccountsettingJs2 = _interopRequireDefault(_componentsAccountsettingAccountsettingJs);

var _componentsSystemsettingSystemsettingJs = require('./components/Systemsetting/systemsetting.js');

var _componentsSystemsettingSystemsettingJs2 = _interopRequireDefault(_componentsSystemsettingSystemsettingJs);

var _componentsRecentactivityRecentactivityJs = require('./components/Recentactivity/recentactivity.js');

var _componentsRecentactivityRecentactivityJs2 = _interopRequireDefault(_componentsRecentactivityRecentactivityJs);

var history = (0, _history.useBasename)(_history.createHistory)({
    basename: '/breadcrumbs'
});

var App = _react2['default'].createClass({
    displayName: 'App',

    getInitialState: function getInitialState() {

        if (localStorage.getItem('profile') === null) {

            return {
                status: 'Login'
            };
        } else {
            var profileArrayObject = JSON.parse(localStorage.getItem('profile'));
            //var firstName = profile.firstname;

            //FOR LOOP KAN WEG! gebruik bij usersboard
            for (var i = 0; i < profileArrayObject.length; i++) {
                var profileObject = profileArrayObject[i];
                console.log("Name: " + profileObject.firstname);
            }

            return {
                status: profileObject.firstname + " " + profileObject.lastname,
                photo: profileObject.profilepic
            };
        }
    },

    render: function render() {
        var depth = this.props.routes.length;

        return _react2['default'].createElement(
            'div',
            { className: 'app' },
            _react2['default'].createElement(
                'div',
                { className: 'mdl-layout mdl-js-layout mdl-layout--fixed-header' },
                _react2['default'].createElement(
                    'div',
                    { className: 'no_login_header' },
                    _react2['default'].createElement(_componentsLayoutHeaderJs2['default'], { status: this.state.status,
                        photo: this.state.photo })
                ),
                _react2['default'].createElement(
                    'main',
                    { className: 'mdl-layout__content' },
                    _react2['default'].cloneElement(this.props.children, { onUpdate: this.onUpdate })
                )
            )
        );
    }
});

function requireAuth() {

    if (localStorage.getItem('profile') === null) {
        this.context.history.pushState(null, '/login');
    }
}

App.path = '/';
App.title = 'Home';

_reactDom2['default'].render(_react2['default'].createElement(
    _reactRouter.Router,
    null,
    _react2['default'].createElement(
        _reactRouter.Route,
        { path: App.path, name: 'App', component: App },
        _react2['default'].createElement(_reactRouter.IndexRoute, { name: 'Dashboard', component: _componentsDashboardDashboardJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Forgetpass', path: _componentsForgetpasswordForgetpassJs2['default'].path, component: _componentsForgetpasswordForgetpassJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Login', path: _componentsLoginLoginJs2['default'].path, component: _componentsLoginLoginJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Usersettings', path: _componentsUsersettingUsersettingsJs2['default'].path, component: _componentsUsersettingUsersettingsJs2['default'], onEnter: requireAuth }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Recent activity', path: _componentsRecentactivityRecentactivityJs2['default'].path, component: _componentsRecentactivityRecentactivityJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Create user', path: _componentsNewuserJs2['default'].path, component: _componentsNewuserJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Organisations', path: _componentsOrganisationsOrganisationsJs2['default'].path, component: _componentsOrganisationsOrganisationsJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Account setting', path: _componentsAccountsettingAccountsettingJs2['default'].path, component: _componentsAccountsettingAccountsettingJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'System setting', path: _componentsSystemsettingSystemsettingJs2['default'].path, component: _componentsSystemsettingSystemsettingJs2['default'] })
    )
), document.getElementById("content"));