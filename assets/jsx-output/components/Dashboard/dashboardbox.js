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

var _changesChangesTableListJs = require('./changes/changes-table-list.js');

var _changesChangesTableListJs2 = _interopRequireDefault(_changesChangesTableListJs);

var _problemsProblemsTableListJs = require('./problems/problems-table-list.js');

var _problemsProblemsTableListJs2 = _interopRequireDefault(_problemsProblemsTableListJs);

var _changesChangesJs = require('./changes/changes.js');

var _changesChangesJs2 = _interopRequireDefault(_changesChangesJs);

var _problemsProblemsJs = require('./problems/problems.js');

var _problemsProblemsJs2 = _interopRequireDefault(_problemsProblemsJs);

var DashboardBox = _react2['default'].createClass({
    displayName: 'DashboardBox',

    getInitialState: function getInitialState() {
        return {
            changesdata: [],
            problemsdata: []
        };
    },

    componentDidMount: function componentDidMount() {
        this.loadDashboardData();
    },

    loadDashboardData: function loadDashboardData() {
        $.ajax({
            url: this.props.serverUrl + "/dashboardinfo",
            dataType: 'json',
            success: (function (data) {
                this.setState({
                    changesdata: data.dashboardchanges,
                    problemsdata: data.dashboardproblems
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    render: function render() {

        var changes = this.state.changesdata.map(function (changes, index) {
            return _react2['default'].createElement(_changesChangesJs2['default'], { data: changes, key: index, countData: index });
        });

        var problems = this.state.problemsdata.map(function (problems, index) {

            return _react2['default'].createElement(_problemsProblemsJs2['default'], { data: problems, key: index });
        });

        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(
                'div',
                { className: 'tablebox changes' },
                _react2['default'].createElement(
                    'div',
                    { className: 'table-title' },
                    'Recent changes'
                ),
                _react2['default'].createElement(_changesChangesTableListJs2['default'], { changesDiv: changes })
            ),
            _react2['default'].createElement(
                'div',
                { className: 'tablebox problems' },
                _react2['default'].createElement(
                    'div',
                    { className: 'table-title' },
                    'Problems'
                ),
                _react2['default'].createElement(_problemsProblemsTableListJs2['default'], { problemsDiv: problems })
            )
        );
    }
});

exports['default'] = DashboardBox;
module.exports = exports['default'];