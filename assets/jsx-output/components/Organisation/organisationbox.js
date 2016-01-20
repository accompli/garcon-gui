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

var _organisationcardsJs = require('./organisationcards.js');

var _organisationcardsJs2 = _interopRequireDefault(_organisationcardsJs);

var OrganisationBox = _react2['default'].createClass({
    displayName: 'OrganisationBox',

    componentDidUpdate: function componentDidUpdate() {
        componentHandler.upgradeDom();
    },

    getInitialState: function getInitialState() {
        return {
            data: []
        };
    },

    componentDidMount: function componentDidMount() {
        this.loadOrganisationData();
    },

    loadOrganisationData: function loadOrganisationData() {
        $.ajax({
            url: this.props.serverUrl + "/organisation",
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

    reload: function reload() {
        this.loadOrganisationData();
    },

    stopPropagation: function stopPropagation(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    },

    handleSubmit: function handleSubmit(e) {
        e.preventDefault();

        var name = this.refs.orgname.value;
        var logo = this.refs.orglogo.value;

        if (name !== "") {
            this.addNewOrganisation({
                name: name,
                logo: logo
            });
        }
    },

    addNewOrganisation: function addNewOrganisation(newuser) {
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/addorganisation",
            dataType: 'json',
            type: 'POST',
            data: newuser,
            success: (function (data) {
                if (data.status === "success") {
                    console.log('new user added complete');
                } else if (data.status === "fail") {
                    console.log("failed");
                }
            }).bind(this),

            error: (function (xhr, status, err, jqXHR) {
                console.error(this.props.url, status, err.toString());
                alert(jqXHR);
            }).bind(this)
        });

        this.loadOrganisationData();
    },

    render: function render() {

        return _react2['default'].createElement(
            'div',
            { className: 'box' },
            _react2['default'].createElement(_organisationcardsJs2['default'], { data: this.state.data, reload: this.reload, serverUrl: this.props.serverUrl }),
            _react2['default'].createElement(
                'button',
                { className: 'mdl-button mdl-js-button add_user',
                    type: '',
                    name: 'submit',
                    id: 'neworganisation' },
                _react2['default'].createElement(
                    'svg',
                    { className: 'add_icon', fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                    _react2['default'].createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
                )
            ),
            _react2['default'].createElement(
                'ul',
                { className: 'mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect ',
                    htmlFor: 'neworganisation' },
                _react2['default'].createElement(
                    'div',
                    { onClick: this.stopPropagation, className: 'mdl-card add_organisation' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'mdl-card__title mdl-card--expand' },
                        _react2['default'].createElement(
                            'h5',
                            null,
                            ' New organisation '
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mdl-card__supporting-text' },
                        'Organisation name ',
                        _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                            type: 'text',
                            id: 'name',
                            ref: 'orgname' }),
                        _react2['default'].createElement('p', null),
                        'Organisation logo url: ',
                        _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                            type: 'text',
                            id: 'logo',
                            ref: 'orglogo' }),
                        _react2['default'].createElement('p', null)
                    ),
                    _react2['default'].createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button',
                            type: 'submit',
                            onClick: this.handleSubmit,
                            name: 'submit' },
                        'Add Organisation'
                    )
                )
            )
        );
    }
});

exports['default'] = OrganisationBox;
module.exports = exports['default'];