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

var _organisationProjectBtnJs = require('./organisation-project-btn.js');

var _organisationProjectBtnJs2 = _interopRequireDefault(_organisationProjectBtnJs);

var OrganisationItem = _react2['default'].createClass({
    displayName: 'OrganisationItem',

    render: function render() {

        return _react2['default'].createElement(
            'div',
            { className: 'mdl-card mdl-shadow--2dp cards ' },
            _react2['default'].createElement('div', { className: 'status_bar' }),
            _react2['default'].createElement(
                'div',
                { className: 'status' },
                _react2['default'].createElement(
                    'button',
                    { className: 'edit-options',
                        id: this.props.org.organisationid },
                    _react2['default'].createElement(
                        'i',
                        { className: 'material-icons' },
                        _react2['default'].createElement(
                            'svg',
                            { className: 'edit_icon card', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                            _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                            _react2['default'].createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
                        )
                    )
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect',
                        htmlFor: this.props.org.organisationid },
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item' },
                        'Edit'
                    ),
                    _react2['default'].createElement(
                        'li',
                        { className: 'mdl-menu__item' },
                        ' Delete'
                    )
                )
            ),
            _react2['default'].createElement(
                'div',
                { className: 'card_data' },
                _react2['default'].createElement('img', { className: 'orglogo', src: this.props.org.orgphoto }),
                _react2['default'].createElement(
                    'div',
                    { className: 'card_title' },
                    this.props.org.orgname
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'card_updatedate' },
                    this.props.org.orgdate
                ),
                _react2['default'].createElement(_organisationProjectBtnJs2['default'], { projectdata: this.props.projectdata, orgid: this.props.org.organisationid, orgname: this.props.org.orgname })
            ),
            _react2['default'].createElement(
                'div',
                { className: 'mdl-card__actions mdl-card--border detailinfo' },
                _react2['default'].createElement(
                    'div',
                    { className: 'card_projects' },
                    'Aantal projecten'
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'card_project_status' },
                    'Available'
                )
            )
        );
    }
});

exports['default'] = OrganisationItem;
module.exports = exports['default'];