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

var _projecttableJs = require('./projecttable.js');

var _projecttableJs2 = _interopRequireDefault(_projecttableJs);

var ProjectBox = _react2['default'].createClass({
    displayName: 'ProjectBox',

    getInitialState: function getInitialState() {
        return {
            data: []
        };
    },

    componentDidMount: function componentDidMount() {
        this.loadProjects();
    },

    loadProjects: function loadProjects() {
        $.ajax({
            url: this.props.serverUrl + "/projects",
            dataType: 'json',
            data: { orgid: this.props.orgid },
            success: (function (data) {
                console.log(data.projectdata, data.status);
                this.setState({
                    data: data.projectdata
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    addNewProject: function addNewProject(newproject) {

        $.ajax({
            url: this.props.serverUrl + "/addproject",
            dataType: 'json',
            type: 'POST',
            data: newproject,
            success: (function (data) {
                if (data.status === "success") {
                    this.loadProjects();
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

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var projectname = this.refs.projectname.value;
        var id = this.props.orgid;

        if (projectname !== "") {
            this.addNewProject({
                name: projectname,
                id: id
            });
        }
    },

    render: function render() {

        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(
                'div',
                null,
                'Hier komen de filters ...'
            ),
            _react2['default'].createElement(_projecttableJs2['default'], { data: this.state.data, serverUrl: this.props.serverUrl }),
            _react2['default'].createElement(
                'button',
                { className: 'mdl-button mdl-js-button add_user',
                    type: '',
                    name: 'submit',
                    id: 'neworganisation' },
                _react2['default'].createElement(
                    'svg',
                    { className: 'add_icon', fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                    _react2['default'].createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
                )
            ),
            _react2['default'].createElement(
                'ul',
                { className: 'mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect ',
                    htmlFor: 'neworganisation' },
                _react2['default'].createElement(
                    'div',
                    { onClick: this.stopPropagation, className: 'mdl-card add_organisation' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'mdl-card__title mdl-card--expand' },
                        _react2['default'].createElement(
                            'h5',
                            null,
                            ' New project '
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mdl-card__supporting-text' },
                        'Project name ',
                        _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                            type: 'text',
                            id: 'name',
                            ref: 'projectname' }),
                        _react2['default'].createElement('p', null)
                    ),
                    _react2['default'].createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button',
                            type: 'submit',
                            onClick: this.handleSubmit,
                            name: 'submit' },
                        'Add Project'
                    )
                )
            )
        );
    }
});

exports['default'] = ProjectBox;
module.exports = exports['default'];