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

var _applicationitemJs = require('./applicationitem.js');

var _applicationitemJs2 = _interopRequireDefault(_applicationitemJs);

var Application = _react2['default'].createClass({
    displayName: 'Application',

    render: function render() {

        var applicationData = this.props.data.map((function (application, index) {
            return _react2['default'].createElement(_applicationitemJs2['default'], { app: application, key: index, countdata: index, serverUrl: this.props.serverUrl });
        }).bind(this));

        return _react2['default'].createElement(
            'tr',
            null,
            applicationData
        );
    }
});

exports['default'] = Application;
module.exports = exports['default'];