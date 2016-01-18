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

var _LayoutGreenboxJs = require('../Layout/greenbox.js');

var _LayoutGreenboxJs2 = _interopRequireDefault(_LayoutGreenboxJs);

var _LayoutBreadcrumbsJs = require('../Layout/breadcrumbs.js');

var _LayoutBreadcrumbsJs2 = _interopRequireDefault(_LayoutBreadcrumbsJs);

var _projectboxJs = require('./projectbox.js');

var _projectboxJs2 = _interopRequireDefault(_projectboxJs);

var Project = _react2['default'].createClass({
    displayName: 'Project',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'project' },
            _react2['default'].createElement(_LayoutGreenboxJs2['default'], { title: this.props.params.orgname }),
            _react2['default'].createElement(_LayoutBreadcrumbsJs2['default'], null),
            _react2['default'].createElement(_projectboxJs2['default'], { orgid: this.props.params.orgid })
        );
    }
});

Project.path = '/project/:orgid/:orgname';

exports['default'] = Project;
module.exports = exports['default'];