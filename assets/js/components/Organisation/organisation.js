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
import OrganisationBox from './organisationbox.js'

var Organisation = React.createClass({
    
    render : function(){
        console.log(this.props.route)
        return (
                <div className="organisation">
                    <GreenBox title={Organisation.title}/>
                    <BreadcrumbsBox />
                    <OrganisationBox serverUrl={this.props.ajaxUrl} />
                </div>
                );
    }
});

Organisation.title = 'Organisations'
Organisation.path = '/organisation'


export default Organisation;