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

var _componentsForgetpassJs = require('./components/forgetpass.js');

var _componentsForgetpassJs2 = _interopRequireDefault(_componentsForgetpassJs);

var _componentsLoginJs = require('./components/login.js');

var _componentsLoginJs2 = _interopRequireDefault(_componentsLoginJs);

var _componentsDashboardJs = require('./components/dashboard.js');

var _componentsDashboardJs2 = _interopRequireDefault(_componentsDashboardJs);

var _componentsUsersettingsJs = require('./components/usersettings.js');

var _componentsUsersettingsJs2 = _interopRequireDefault(_componentsUsersettingsJs);

var _componentsNewuserJs = require('./components/newuser.js');

var _componentsNewuserJs2 = _interopRequireDefault(_componentsNewuserJs);

var _componentsOrganisationsJs = require('./components/organisations.js');

var _componentsOrganisationsJs2 = _interopRequireDefault(_componentsOrganisationsJs);

var _componentsHeaderJs = require('./components/header.js');

var _componentsHeaderJs2 = _interopRequireDefault(_componentsHeaderJs);

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

    //    onUpdate: function(){
    //            this.setState({
    //                status: 'Jinhua'
    //            });
    //        },

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
                    _react2['default'].createElement(_componentsHeaderJs2['default'], { status: this.state.status,
                        photo: this.state.photo })
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'breadcrumbs-list' },
                    this.props.routes.map(function (item, index) {
                        return _react2['default'].createElement(
                            'li',
                            { key: index },
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                {
                                    onlyActiveOnIndex: true,
                                    activeClassName: 'breadcrumb-active',
                                    to: item.path || '' },
                                item.component.title
                            ),
                            index + 1 < depth && '→'
                        );
                    })
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

App.path = '/';
App.title = 'Home';

_reactDom2['default'].render(_react2['default'].createElement(
    _reactRouter.Router,
    null,
    _react2['default'].createElement(
        _reactRouter.Route,
        { path: App.path, name: 'App', component: App },
        _react2['default'].createElement(_reactRouter.IndexRoute, { name: 'Login', component: _componentsLoginJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Forgetpass', path: _componentsForgetpassJs2['default'].path, component: _componentsForgetpassJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Dashboard', path: _componentsDashboardJs2['default'].path, component: _componentsDashboardJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Usersettings', path: _componentsUsersettingsJs2['default'].path, component: _componentsUsersettingsJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Create user', path: _componentsNewuserJs2['default'].path, component: _componentsNewuserJs2['default'] }),
        _react2['default'].createElement(_reactRouter.Route, { name: 'Organisations', path: _componentsOrganisationsJs2['default'].path, component: _componentsOrganisationsJs2['default'] })
    )
), document.getElementById("content"));