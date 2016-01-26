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

var ProfileInformation = _react2['default'].createClass({
    displayName: 'ProfileInformation',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: 'personalbox' },
            _react2['default'].createElement(
                'div',
                { className: 'titel information' },
                'Personal information'
            ),
            _react2['default'].createElement(
                'div',
                { className: 'informationform' },
                _react2['default'].createElement(
                    'div',
                    { className: 'personalform' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                        _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                            type: 'text',
                            id: 'name' }),
                        _react2['default'].createElement(
                            'label',
                            { className: 'mdl-textfield__label', htmlFor: 'name' },
                            'Name'
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label' },
                        _react2['default'].createElement('input', { className: 'mdl-textfield__input',
                            type: 'text',
                            id: 'mail' }),
                        _react2['default'].createElement(
                            'label',
                            { className: 'mdl-textfield__label', htmlFor: 'mail' },
                            'E-mail adress'
                        )
                    )
                ),
                _react2['default'].createElement(
                    'label',
                    { className: 'mdl-checkbox mdl-js-checkbox showemail', htmlFor: 'checkbox-signin' },
                    _react2['default'].createElement('input', { className: 'mdl-checkbox__input',
                        id: 'checkbox-signin',
                        type: 'checkbox',
                        defaultChecked: 'defaultChecked' }),
                    _react2['default'].createElement(
                        'span',
                        { className: 'mdl-checkbox__label' },
                        ' Don\'t show my e-mail to other users'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'rightbtn' },
                    _react2['default'].createElement(
                        'button',
                        { className: 'mdl-button mdl-js-button' },
                        'Save settings'
                    )
                )
            )
        );
    }
});

exports['default'] = ProfileInformation;
module.exports = exports['default'];