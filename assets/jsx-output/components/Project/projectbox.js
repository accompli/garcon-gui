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

    render: function render() {

        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(
                'div',
                null,
                'Hier komen de filters ...'
            ),
            _react2['default'].createElement(_projecttableJs2['default'], { data: this.state.data })
        );
    }
});

exports['default'] = ProjectBox;
module.exports = exports['default'];