/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    import React from 'react'
    import { render } from 'react-dom'
    import { Router, Route, Link, History } from 'react-router'

    import GreenBox from '../Layout/greenbox.js'
    import BreadcrumbsBox from '../Layout/breadcrumbs.js'
    import DashboardBox from './dashboardbox.js'


var Dashboard = React.createClass({
    render : function(){
        return (
                <div className="dashboard">
                    <GreenBox title={Dashboard.title}/>
                    <DashboardBox serverUrl={this.props.ajaxUrl}/>
                </div>
                );
}
});


Dashboard.title = 'Dashboard'
Dashboard.path = '/dashboard'


export default Dashboard;