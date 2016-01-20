'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../css/main.css');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

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

var _componentsOrganisationOrganisationJs = require('./components/Organisation/organisation.js');

var _componentsOrganisationOrganisationJs2 = _interopRequireDefault(_componentsOrganisationOrganisationJs);

var _componentsLayoutHeaderJs = require('./components/Layout/header.js');

var _componentsLayoutHeaderJs2 = _interopRequireDefault(_componentsLayoutHeaderJs);

var _componentsAccountsettingAccountsettingJs = require('./components/Accountsetting/accountsetting.js');

var _componentsAccountsettingAccountsettingJs2 = _interopRequireDefault(_componentsAccountsettingAccountsettingJs);

var _componentsSystemsettingSystemsettingJs = require('./components/Systemsetting/systemsetting.js');

var _componentsSystemsettingSystemsettingJs2 = _interopRequireDefault(_componentsSystemsettingSystemsettingJs);

var _componentsRecentactivityRecentactivityJs = require('./components/Recentactivity/recentactivity.js');

var _componentsRecentactivityRecentactivityJs2 = _interopRequireDefault(_componentsRecentactivityRecentactivityJs);

var _componentsEdituserEdituserJs = require('./components/Edituser/edituser.js');

var _componentsEdituserEdituserJs2 = _interopRequireDefault(_componentsEdituserEdituserJs);

var _componentsProjectProjectJs = require('./components/Project/project.js');

var _componentsProjectProjectJs2 = _interopRequireDefault(_componentsProjectProjectJs);

var _componentsEditorganisationEditorganisationJs = require('./components/Editorganisation/editorganisation.js');

var _componentsEditorganisationEditorganisationJs2 = _interopRequireDefault(_componentsEditorganisationEditorganisationJs);

var App = _react2['default'].createClass({
    displayName: 'App',

    componentDidUpdate: function componentDidUpdate() {
        componentHandler.upgradeDom();
    },

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
                    _react2['default'].cloneElement(this.props.children, { ajaxUrl: "http://garcon-server.jinhua.choffice.nl" })
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
        _react2['default'].createElement(_reactRouter.Route, { name: 'Edit user', path: _componentsEdituserEdituserJs2['default'].path, component: _componentsEdituserEdituserJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Create user', path: _componentsNewuserJs2['default'].path, component: _componentsNewuserJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Organisation', path: _componentsOrganisationOrganisationJs2['default'].path, component: _componentsOrganisationOrganisationJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Project', path: _componentsProjectProjectJs2['default'].path, component: _componentsProjectProjectJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Edit organisation', path: _componentsEditorganisationEditorganisationJs2['default'].path, component: _componentsEditorganisationEditorganisationJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Account setting', path: _componentsAccountsettingAccountsettingJs2['default'].path, component: _componentsAccountsettingAccountsettingJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'System setting', path: _componentsSystemsettingSystemsettingJs2['default'].path, component: _componentsSystemsettingSystemsettingJs2['default'] })
    )
), document.getElementById("content"));