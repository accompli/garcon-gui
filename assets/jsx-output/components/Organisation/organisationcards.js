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

var _organisationitem = require('./organisationitem');

var _organisationitem2 = _interopRequireDefault(_organisationitem);

var OrganisationCards = _react2['default'].createClass({
    displayName: 'OrganisationCards',

    propTypes: {
        data: _react2['default'].PropTypes.array.isRequired
    },

    render: function render() {

        var organisationData = this.props.data.map((function (organisation, index) {
            return _react2['default'].createElement(_organisationitem2['default'], { org: organisation, key: index });
        }).bind(this));

        return _react2['default'].createElement(
            'div',
            { className: 'cardslist' },
            organisationData
        );
    }
});

exports['default'] = OrganisationCards;
module.exports = exports['default'];