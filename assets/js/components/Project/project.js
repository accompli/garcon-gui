/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'

 import GreenBox from '../Layout/greenbox.js'
 import BreadcrumbsBox from '../Layout/breadcrumbs.js'
 import ProjectBox from './projectbox.js'

var Project = React.createClass({
    render : function(){
        return (
                <div className="project">
                    <GreenBox title={this.props.params.orgname}/>
                    <BreadcrumbsBox />
                    <ProjectBox orgid={this.props.params.orgid}/>
                    
                </div>
                );
    }
});

Project.path = '/project/:orgid/:orgname'

 export default Project;
