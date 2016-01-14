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

var ChangesTable = _react2['default'].createClass({
    displayName: 'ChangesTable',

    getInitialState: function getInitialState() {
        return { changesData: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadRecentChanges();
    },

    loadRecentChanges: function loadRecentChanges() {
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/recentchanges",
            dataType: 'json',
            success: (function (data) {
                this.setState({
                    changesData: data.userdata
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    render: function render() {
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
                        { className: 'mdl-data-table__cell--non-numeric' },
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
                        'Status'
                    )
                )
            ),
            _react2['default'].createElement('tbody', null)
        );
    }
});

exports['default'] = ChangesTable;
module.exports = exports['default'];