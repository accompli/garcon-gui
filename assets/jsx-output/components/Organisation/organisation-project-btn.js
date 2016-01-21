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

var ProjectButton = _react2['default'].createClass({
  displayName: 'ProjectButton',

  render: function render() {

    return _react2['default'].createElement(
      _reactRouter.Link,
      { to: '/project/' + this.props.orgid + '/' + this.props.orgname },
      _react2['default'].createElement(
        'button',
        { className: 'mdl-button mdl-js-button card_button',
          type: 'submit',
          onClick: this.handleSubmit,
          name: 'submit',
          value: this.props.orgid },
        'View Details'
      )
    );
  }
});

exports['default'] = ProjectButton;
module.exports = exports['default'];