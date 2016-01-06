/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react'

import GreenBox from '../Layout/greenbox.js'
import BreadcrumbsBox from '../Layout/breadcrumbs.js'
import SystemSettingBox from './systemsettingbox.js'

var SystemSetting = React.createClass({
    render: function(){
        return (
                <div className="systemsetting">
                    <GreenBox title={SystemSetting.title}/>
                    <BreadcrumbsBox />
                </div>
                );
    }
});

SystemSetting.title = 'System setting';
SystemSetting.path = '/systemsetting';

export default SystemSetting;