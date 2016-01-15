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

var ChangesTable = _react2['default'].createClass({
    displayName: 'ChangesTable',

    getInitialState: function getInitialState() {
        return { data: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadRecentChanges();
    },

    loadRecentChanges: function loadRecentChanges() {
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/dashoardinfo",
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

        var changes = this.state.data.map(function (change, index) {

            return _react2['default'].createElement(_changesJs2['default'], { row: change, key: index, countdata: index });
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
                changes
            )
        );
    }
});

exports['default'] = ChangesTable;
module.exports = exports['default'];