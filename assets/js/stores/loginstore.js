/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import Reflux from 'reflux'
import $ from 'jquery'
import LoginActions from '../actions/loginactions'

var LoginStore = Reflux.createStore({
    listenables: [LoginActions],
    profileData: [],
    sourceUrl: "http://garcon-server.jinhua.choffice.nl/profile",
    
    init: function() {
        this.fetchProfile();
    },
    
    fetchProfile: function() {
        $.ajax({
            url: this.sourceUrl,
            dataType: 'json',
            jsonCallback: 'jsonGarconFeed',
            type: 'GET',
            cache: false,
            context: this,
            success: function(data){
                console.log('fetch gelukt!');
            }
        });
    }
});

module.exports = LoginStore;