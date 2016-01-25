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

var _organisationProjectBtnJs = require('./organisation-project-btn.js');

var _organisationProjectBtnJs2 = _interopRequireDefault(_organisationProjectBtnJs);

var OrganisationItem = _react2['default'].createClass({
    displayName: 'OrganisationItem',

    countProjects: function countProjects(data) {

        $.ajax({
            url: this.props.serverUrl + "/projects",
            dataType: 'json',
            data: data,
            success: (function (data) {
                this.setState({
                    project: data.projectdata
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    getInitialState: function getInitialState() {
        return {
            project: [],
            status: []
        };
    },

    componentDidMount: function componentDidMount() {
        this.countProjects({ orgid: this.props.org.organisationid });
    },

    deleteOrganisation: function deleteOrganisation() {
        $.ajax({
            url: this.props.serverUrl + "/deleteorg",
            dataType: 'json',
            data: { orgid: this.props.org.organisationid },
            success: (function (data) {
                if (data.status === "success") {
                    this.props.reload();
                } else if (data.status === "fail") {}
            }).bind(this),
            error: (function (xhr, status, err, jqXHR) {
                console.error(this.props.url, status, err.toString());
                alert(jqXHR);
            }).bind(this)
        });
    },

    Projects: function Projects() {
        var projectLength = this.state.project.length;

        if (projectLength > 0) {
            return _react2['default'].createElement(
                'div',
                { className: 'card_projects' },
                'Projects: ',
                this.state.project.length
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: 'card_projects' },
                'No projects'
            );
        }
    },

    loadStatus: function loadStatus() {

        $.ajax({
            url: this.props.serverUrl + "/applicationstatus",
            dataType: 'json',
            data: { orgid: this.props.org.organisationid },
            success: (function (data) {
                this.setState({
                    status: data.status
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });

        if (this.state.status === "Error") {
            return _react2['default'].createElement(
                'div',
                { className: 'status error' },
                _react2['default'].createElement(
                    'span',
                    null,
                    _react2['default'].createElement(
                        'svg',
                        { className: 'error', fill: '#000000', height: '20', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                        _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                        _react2['default'].createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })
                    )
                ),
                _react2['default'].createElement(
                    'span',
                    null,
                    'Error'
                )
            );
        } else if (this.state.status === "Available") {
            return _react2['default'].createElement(
                'div',
                { className: 'status available' },
                _react2['default'].createElement(
                    'svg',
                    { className: 'available', fill: '#000000', height: '20', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                    _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                    _react2['default'].createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
                ),
                'Available'
            );
        } else {
            return _react2['default'].createElement(
                'div',
                null,
                'No status'
            );
        }
    },

    render: function render() {

        return _react2['default'].createElement(
            'div',
            { className: 'mdl-card mdl-shadow--2dp cards ' },
            _react2['default'].createElement('div', { className: 'status_bar ' + this.state.status }),
            _react2['default'].createElement(
                'div',
                { className: 'status' },
                _react2['default'].createElement(
                    'button',
                    { className: 'edit-options',
                        id: this.props.org.organisationid },
                    _react2['default'].createElement(
                        'i',
                        { className: 'material-icons' },
                        _react2['default'].createElement(
                            'svg',
                            { className: 'edit_icon card', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                            _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                            _react2['default'].createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
                        )
                    )
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect',
                        htmlFor: this.props.org.organisationid },
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item' },
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/editorganisation/' + this.props.org.organisationid + '/' + this.props.countdata },
                            'Edit'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item', onClick: this.deleteOrganisation },
                        ' Delete'
                    )
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'card_data' },
                _react2['default'].createElement(
                    'div',
                    { className: 'orglogo' },
                    _react2['default'].createElement('img', { src: this.props.org.orgphoto })
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'card_title' },
                    this.props.org.orgname
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'card_updatedate' },
                    this.props.org.orgdate
                ),
                _react2['default'].createElement(_organisationProjectBtnJs2['default'], { orgid: this.props.org.organisationid, orgname: this.props.org.orgname, projects: this.state.project })
            ),
            _react2['default'].createElement(
                'div',
                { className: 'mdl-card__actions mdl-card--border detailinfo' },
                this.Projects(),
                _react2['default'].createElement(
                    'div',
                    { className: 'card_project_status' },
                    this.loadStatus()
                )
            )
        );
    }
});

exports['default'] = OrganisationItem;
module.exports = exports['default'];