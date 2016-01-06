/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

var MyProfile = React.createClass({
    displayName: 'MyProfile',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'myprofilebox' },
            React.createElement(GreenBox, null),
            React.createElement(MyProfileBox, null)
        );
    }
});

MyProfile.title = 'Account settings';
MyProfile.path = '/accountsettings';