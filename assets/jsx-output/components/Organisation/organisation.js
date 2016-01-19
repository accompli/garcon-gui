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

var _LayoutGreenboxJs = require('../Layout/greenbox.js');

var _LayoutGreenboxJs2 = _interopRequireDefault(_LayoutGreenboxJs);

var _LayoutBreadcrumbsJs = require('../Layout/breadcrumbs.js');

var _LayoutBreadcrumbsJs2 = _interopRequireDefault(_LayoutBreadcrumbsJs);

var _organisationboxJs = require('./organisationbox.js');

var _organisationboxJs2 = _interopRequireDefault(_organisationboxJs);

var Organisation = _react2['default'].createClass({
    displayName: 'Organisation',

    render: function render() {
        console.log(this.props.route);
        return _react2['default'].createElement(
            'div',
            { className: 'organisation' },
            _react2['default'].createElement(_LayoutGreenboxJs2['default'], { title: Organisation.title }),
            _react2['default'].createElement(_LayoutBreadcrumbsJs2['default'], null),
            _react2['default'].createElement(_organisationboxJs2['default'], { serverUrl: this.props.ajaxUrl })
        );
    }
});

Organisation.title = 'Organisations';
Organisation.path = '/organisation';

exports['default'] = Organisation;
module.exports = exports['default'];