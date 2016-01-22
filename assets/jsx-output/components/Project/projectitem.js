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

var _ApplicationApplicationitemJs = require('../Application/applicationitem.js');

var _ApplicationApplicationitemJs2 = _interopRequireDefault(_ApplicationApplicationitemJs);

var Projects = _react2['default'].createClass({
    displayName: 'Projects',

    componentDidUpdate: function componentDidUpdate() {
        componentHandler.upgradeDom();
    },

    getInitialState: function getInitialState() {
        return {
            application: [],
            countApp: [],
            open: false,
            'class': "application hide",
            onClick: "projectname default",
            newAppForm: "applicationform hide",
            openform: false,
            buttontxt: "New application"
        };
    },

    showApplication: function showApplication() {
        $.ajax({
            url: this.props.serverUrl + "/application",
            dataType: 'json',
            data: { id: this.props.project.projectid },
            success: (function (data) {
                console.log(data.applicationdata, data.count);
                this.setState({
                    application: data.applicationdata,
                    countApp: data.count
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    componentDidMount: function componentDidMount() {
        this.showApplication();
    },

    showAppData: function showAppData() {
        if (this.state.open) {
            this.setState({
                open: false,
                'class': "application hide",
                onClick: "projectname default"
            });
        } else {
            this.setState({
                open: true,
                'class': "application show",
                onClick: "projectname "
            });
        }
    },

    handleClick: function handleClick(e) {
        e.preventDefault();

        var appname = this.refs.appname.value;
        var projectid = this.props.project.projectid;
        var version = this.refs.version.value;
        var user = "Jinhua";

        if (appname !== "") {
            this.addNewApplication({
                applicationname: appname,
                version: version,
                userid: user,
                projectid: projectid
            });
        }
    },

    addNewApplication: function addNewApplication(applidata) {
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/addapplication",
            dataType: 'json',
            type: 'POST',
            data: applidata,
            success: (function (data) {
                if (data.status === "success") {
                    console.log('added gelukt!');
                } else if (data.status === "fail") {
                    console.log("failed");
                }
            }).bind(this),

            error: (function (xhr, status, err, jqXHR) {
                console.error(this.props.url, status, err.toString());
                alert(jqXHR);
            }).bind(this)
        });
    },

    stopPropagation: function stopPropagation(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    },
    render: function render() {

        var applicationData = this.state.application.map((function (application, index) {
            return _react2['default'].createElement(_ApplicationApplicationitemJs2['default'], { app: application, key: index, countdata: index, serverUrl: this.props.serverUrl, state: this.state['class'] });
        }).bind(this));

        return _react2['default'].createElement(
            'tbody',
            null,
            _react2['default'].createElement(
                'tr',
                null,
                _react2['default'].createElement(
                    'td',
                    { onClick: this.showAppData },
                    _react2['default'].createElement(
                        'div',
                        { className: this.state.onClick },
                        this.props.project.projectname
                    )
                ),
                _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: this.state.onClick },
                        this.props.project.editdate
                    )
                ),
                _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'status ' + this.state.onClick },
                        this.state.countApp.length
                    )
                ),
                _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement('div', { className: 'status' })
                ),
                _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'status' },
                        _react2['default'].createElement(
                            'button',
                            { className: 'edit-options',
                                id: this.props.project.projectid },
                            _react2['default'].createElement(
                                'i',
                                { className: 'material-icons' },
                                _react2['default'].createElement(
                                    'svg',
                                    { className: 'edit_icon', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                                    _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                                    _react2['default'].createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
                                )
                            )
                        ),
                        _react2['default'].createElement(
                            'ul',
                            { className: 'mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect ',
                                htmlFor: this.props.project.projectid },
                            _react2['default'].createElement(
                                _reactRouter.Link,
                                { to: '/RecentActivity' },
                                _react2['default'].createElement(
                                    'li',
                                    { className: 'mdl-menu__item' },
                                    'Recent activity'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                { className: 'mdl-menu__item' },
                                _react2['default'].createElement(
                                    _reactRouter.Link,
                                    { to: '/editproject/' + this.props.project.projectid },
                                    'Edit'
                                )
                            ),
                            _react2['default'].createElement(
                                'li',
                                { className: 'mdl-menu__item' },
                                'Delete'
                            )
                        )
                    )
                )
            ),
            _react2['default'].createElement(
                'tr',
                { className: this.state['class'] },
                _react2['default'].createElement(
                    'th',
                    { className: 'mdl-data-table__cell--non-numeric' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'first-detail-data' },
                        'Application'
                    )
                ),
                _react2['default'].createElement(
                    'th',
                    null,
                    'Edited'
                ),
                _react2['default'].createElement(
                    'th',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'status' },
                        'Version'
                    )
                ),
                _react2['default'].createElement(
                    'th',
                    null,
                    _react2['default'].createElement(
                        'div',
                        { className: 'status' },
                        'Status'
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
            ),
            applicationData,
            _react2['default'].createElement(
                'tr',
                { className: this.state['class'] },
                _react2['default'].createElement(
                    'td',
                    null,
                    _react2['default'].createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button add-app', id: this.props.editId },
                        _react2['default'].createElement(
                            'svg',
                            { className: 'add-application-icon', fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                            _react2['default'].createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
                        ),
                        this.state.buttontxt
                    ),
                    _react2['default'].createElement(
                        'ul',
                        { className: 'mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect ',
                            htmlFor: this.props.editId },
                        _react2['default'].createElement(
                            'div',
                            { onClick: this.stopPropagation, className: 'mdl-card add_organisation' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'mdl-card__title mdl-card--expand' },
                                _react2['default'].createElement(
                                    'h5',
                                    null,
                                    ' New Application '
                                )
                            ),
                            _react2['default'].createElement(
                                'div',
                                { className: 'mdl-card__supporting-text' },
                                'Application name ',
                                _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                                    type: 'text',
                                    id: 'appname',
                                    ref: 'appname' }),
                                _react2['default'].createElement('p', null),
                                'Version: ',
                                _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                                    type: 'text',
                                    id: 'version',
                                    ref: 'version' }),
                                _react2['default'].createElement('p', null)
                            ),
                            _react2['default'].createElement(
                                'button',
                                { className: 'mdl-button mdl-js-button',
                                    type: 'submit',
                                    onClick: this.handleClick,
                                    name: 'submit' },
                                'Add Application'
                            )
                        )
                    )
                ),
                _react2['default'].createElement('td', null),
                _react2['default'].createElement('td', null),
                _react2['default'].createElement('td', null),
                _react2['default'].createElement('td', null)
            )
        );
    }
});

exports['default'] = Projects;
module.exports = exports['default'];