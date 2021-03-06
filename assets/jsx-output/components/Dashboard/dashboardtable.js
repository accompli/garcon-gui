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

var _changesJs = require('./changes.js');

var _changesJs2 = _interopRequireDefault(_changesJs);

var _problemsJs = require('./problems.js');

var _problemsJs2 = _interopRequireDefault(_problemsJs);

var Table = _react2['default'].createClass({
    displayName: 'Table',

    getInitialState: function getInitialState() {
        return { data: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadDashboardData();
    },

    loadDashboardData: function loadDashboardData() {
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/dashboardinfo",
            dataType: 'json',
            success: (function (data) {
                console.log(data.dashboarddata);
                this.setState({
                    data: data.dashboarddata
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    render: function render() {
        var datas = this.state.data.map(function (dashboard, index) {

            if (dashboard.status === "error") {
                return _react2['default'].createElement(_problemsJs2['default'], { row: dashboard, key: index, countdata: index });
            } else {
                return _react2['default'].createElement(_changesJs2['default'], { row: dashboard, key: index, countdata: index });
            }
        });

        return _react2['default'].createElement(
            'table',
            { className: 'mdl-data-table mdl-js-data-table mdl-shadow--2dp dashboardtable' },
            _react2['default'].createElement(
                'thead',
                null,
                _react2['default'].createElement(
                    'tr',
                    null,
                    _react2['default'].createElement(
                        'th',
                        null,
                        'Project'
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        'Application'
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        _react2['default'].createElement(
                            'div',
                            { className: 'status' },
                            'Status'
                        )
                    )
                )
            ),
            _react2['default'].createElement(
                'tbody',
                null,
                datas
            )
        );
    }
});

exports['default'] = Table;
module.exports = exports['default'];