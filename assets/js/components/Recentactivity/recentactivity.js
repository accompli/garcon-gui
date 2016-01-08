/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { Router, Route, Link } from 'react-router'

import GreenBox from '../Layout/greenbox.js'
import BreadcrumbsBox from '../Layout/breadcrumbs.js'

var RecentActivity = React.createClass({
    
    render: function(){
        return (
                    <div className="recentactivity">
                        <GreenBox title={RecentActivity.title} />
                        <BreadcrumbsBox />
                    </div>
                );
    }
});

RecentActivity.title = 'Recent activity';
RecentActivity.path = '/recentactivity';

 export default RecentActivity