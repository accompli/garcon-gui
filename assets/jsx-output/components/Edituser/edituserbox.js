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

var EditUserBox = _react2['default'].createClass({
    displayName: 'EditUserBox',

    render: function render() {
        //        console.log(this.props.data[this.props.dataId]);
        //        var naam = this.props.data[this.props.dataId].username;
        return _react2['default'].createElement(
            'div',
            { className: 'usersbox' },
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
                            'Hallo, ',
                            this.props.dataId
                        )
                    )
                )
            )
        );
    }
});

exports['default'] = EditUserBox;
module.exports = exports['default'];