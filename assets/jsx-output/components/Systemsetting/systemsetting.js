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

var _LayoutGreenboxJs = require('../Layout/greenbox.js');

var _LayoutGreenboxJs2 = _interopRequireDefault(_LayoutGreenboxJs);

var _LayoutBreadcrumbsJs = require('../Layout/breadcrumbs.js');

var _LayoutBreadcrumbsJs2 = _interopRequireDefault(_LayoutBreadcrumbsJs);

var _systemsettingboxJs = require('./systemsettingbox.js');

var _systemsettingboxJs2 = _interopRequireDefault(_systemsettingboxJs);

var SystemSetting = _react2['default'].createClass({
    displayName: 'SystemSetting',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'systemsetting' },
            _react2['default'].createElement(_LayoutGreenboxJs2['default'], { title: SystemSetting.title }),
            _react2['default'].createElement(_LayoutBreadcrumbsJs2['default'], null),
            _react2['default'].createElement(_systemsettingboxJs2['default'], null)
        );
    }
});

SystemSetting.title = 'System setting';
SystemSetting.path = '/systemsetting';

exports['default'] = SystemSetting;
module.exports = exports['default'];