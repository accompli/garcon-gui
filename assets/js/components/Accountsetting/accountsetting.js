/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'

import MyProfileBox from './myprofile.js'
import GreenBox from '../Layout/greenbox.js'
import BreadcrumbsBox from '../Layout/breadcrumbs.js'

var AccountSetting = React.createClass({
    render: function(){
        return (
                <div className="myprofilebox">
                    <GreenBox title={AccountSetting.title}/>
                    <BreadcrumbsBox />
                    <MyProfileBox />
                </div>
                );
    }
});

AccountSetting.title = 'Accountsetting';
AccountSetting.path = '/accountsetting';

export default AccountSetting;