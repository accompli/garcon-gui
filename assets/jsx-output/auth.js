/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsLoginJs = require('./components/login.js');

var _componentsLoginJs2 = _interopRequireDefault(_componentsLoginJs);

module.exports = {
  login: function login(data, cb) {
    var _this = this;

    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }

    Request(data, function (res) {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (cb) cb(true);
        _this.onChange(true);
      } else {
        if (cb) cb(false);
        _this.onChange(false);
      }
    });
  },

  getToken: function getToken() {
    return localStorage.token;
  },

  logout: function logout(cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn: function loggedIn() {
    return !!localStorage.token;
  },

  onChange: function onChange() {}

};