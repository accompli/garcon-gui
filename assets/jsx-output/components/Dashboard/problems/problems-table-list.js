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

var ProblemsTable = _react2['default'].createClass({
    displayName: 'ProblemsTable',

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
                this.props.problemsDiv
            )
        );
    }
});

exports['default'] = ProblemsTable;
module.exports = exports['default'];