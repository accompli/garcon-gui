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

var EditOrganisationBox = _react2['default'].createClass({
    displayName: 'EditOrganisationBox',

    editOrganisation: function editOrganisation(orgnisationdata) {
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/editorganisation",
            dataType: 'json',
            type: 'POST',
            data: organisationdata,
            success: (function (data) {
                if (data.status === "success") {
                    console.log('done with edit!');
                    this.context.history.pushState(null, '/organisation');
                } else if (data.status === "fail") {
                    console.log("Failed with edit...");
                }
            }).bind(this),
            error: (function (xhr, status, err, jqXHR) {
                console.error(this.props.url, status, err.toString());
                alert(jqXHR);
            }).bind(this)
        });
    },

    contextTypes: {
        history: _react2['default'].PropTypes.object.isRequired
    },

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var oldName = this.refs.orgname.value;
        var oldLogo = this.refs.orglogo.value;
        var orgId = this.refs.orgid.value;

        if (oldName !== "") {
            this.editOrganisation({
                organisationname: oldName,
                logo: oldLogo,
                orgid: orgId
            });
        }
    },

    render: function render() {

        var name = this.props.data[this.props.countdata].orgname;
        var logo = this.props.data[this.props.countdata].orgphoto;
        var id = this.props.orgId;

        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(
                'div',
                { className: 'loginBox' },
                _react2['default'].createElement(
                    'div',
                    { className: 'edituserbox' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'demo-card-square mdl-card mdl-shadow--2dp' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'mdl-cardbox' },
                            'Organisation name: ',
                            _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                                type: 'text',
                                id: 'orgname',
                                ref: 'name',
                                defaultValue: name,
                                placeholder: name }),
                            _react2['default'].createElement('p', null),
                            'Logo: ',
                            _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                                type: 'text',
                                id: 'logo',
                                ref: 'logo',
                                defaultValue: logo,
                                placeholder: logo }),
                            _react2['default'].createElement('p', null),
                            _react2['default'].createElement('input', { type: 'hidden',
                                id: 'id',
                                ref: 'id',
                                value: this.props.orgid }),
                            _react2['default'].createElement(
                                'button',
                                { className: 'mdl-button mdl-js-button',
                                    type: 'submit',
                                    onClick: this.handleSubmit,
                                    name: 'submit' },
                                'Edit'
                            )
                        )
                    )
                )
            )
        );
    }
});

exports['default'] = EditOrganisationBox;
module.exports = exports['default'];