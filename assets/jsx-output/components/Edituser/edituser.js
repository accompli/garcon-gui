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

var _LayoutGreenboxJs = require('../Layout/greenbox.js');

var _LayoutGreenboxJs2 = _interopRequireDefault(_LayoutGreenboxJs);

var _LayoutBreadcrumbsJs = require('../Layout/breadcrumbs.js');

var _LayoutBreadcrumbsJs2 = _interopRequireDefault(_LayoutBreadcrumbsJs);

var _edituserboxJs = require('./edituserbox.js');

var _edituserboxJs2 = _interopRequireDefault(_edituserboxJs);

var EditUser = _react2['default'].createClass({
    displayName: 'EditUser',

    loadUsers: function loadUsers() {

        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/users",
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

    getInitialState: function getInitialState() {
        return { data: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadUsers();
        //        setInterval(this.loadUsers.bind(this), 2000);
    },

    render: function render() {
        if (this.state.data.length === 0) {
            return _react2['default'].createElement(
                'div',
                { className: 'loadingbox' },
                'Loading...'
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: 'edituser' },
                _react2['default'].createElement(_LayoutGreenboxJs2['default'], { title: EditUser.title }),
                _react2['default'].createElement(_LayoutBreadcrumbsJs2['default'], null),
                _react2['default'].createElement(_edituserboxJs2['default'], { dataId: this.props.params.user, data: this.state.data })
            );
        }
    }

});

EditUser.title = "Edit user";
EditUser.path = '/edituser/:user';

exports['default'] = EditUser;
module.exports = exports['default'];