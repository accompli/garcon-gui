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

var _reactRouter = require('react-router');

var _LayoutGreenboxJs = require('../Layout/greenbox.js');

var _LayoutGreenboxJs2 = _interopRequireDefault(_LayoutGreenboxJs);

var _LayoutBreadcrumbsJs = require('../Layout/breadcrumbs.js');

var _LayoutBreadcrumbsJs2 = _interopRequireDefault(_LayoutBreadcrumbsJs);

var _editorganisationboxJs = require('./editorganisationbox.js');

var _editorganisationboxJs2 = _interopRequireDefault(_editorganisationboxJs);

var EditOrganisation = _react2['default'].createClass({
    displayName: 'EditOrganisation',

    loadOrganisations: function loadOrganisations() {
        $.ajax({
            url: this.props.ajaxUrl + "/organisation",
            dataType: 'json',
            success: (function (data) {
                this.setState({
                    data: data.organisationdata
                });
            }).bind(this),
            error: (function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }).bind(this)
        });
    },

    getInitialState: function getInitialState() {
        return { data: [] };
    },

    componentDidMount: function componentDidMount() {
        this.loadOrganisations();
    },

    render: function render() {

        if (this.state.data.length === 0) {
            return _react2['default'].createElement(
                'div',
                { className: 'editorganisation' },
                _react2['default'].createElement(_LayoutGreenboxJs2['default'], { title: EditOrganisation.title }),
                _react2['default'].createElement(_LayoutBreadcrumbsJs2['default'], null),
                _react2['default'].createElement(
                    'div',
                    { className: 'box' },
                    _react2['default'].createElement('div', { id: 'p2', className: 'mdl-progress mdl-js-progress mdl-progress__indeterminate' }),
                    _react2['default'].createElement(
                        'h2',
                        null,
                        'Loading....'
                    )
                )
            );
        } else {
            return _react2['default'].createElement(
                'div',
                { className: 'editorganisation' },
                _react2['default'].createElement(_LayoutGreenboxJs2['default'], { title: EditOrganisation.title }),
                _react2['default'].createElement(_LayoutBreadcrumbsJs2['default'], null),
                _react2['default'].createElement(_editorganisationboxJs2['default'], { orgId: this.props.params.orgid, data: this.state.data, countdata: this.props.params.countdata })
            );
        }
    }

});

EditOrganisation.title = "Edit organisation";
EditOrganisation.path = '/editorganisation/:orgid/:countdata';

exports['default'] = EditOrganisation;
module.exports = exports['default'];