/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _actionsLoginactions = require('../actions/loginactions');

var _actionsLoginactions2 = _interopRequireDefault(_actionsLoginactions);

var LoginStore = _reflux2['default'].createStore({
    listenables: [_actionsLoginactions2['default']],
    profileData: [],
    sourceUrl: "http://garcon-server.jinhua.choffice.nl/profile",

    init: function init() {
        this.fetchProfile();
    },

    fetchProfile: function fetchProfile() {
        _jquery2['default'].ajax({
            url: this.sourceUrl,
            dataType: 'json',
            jsonCallback: 'jsonGarconFeed',
            type: 'GET',
            cache: false,
            context: this,
            success: function success(data) {
                console.log('fetch gelukt!');
            }
        });
    }
});

module.exports = LoginStore;