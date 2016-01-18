/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  
 import React from 'react'
 import { render } from 'react-dom'
 import { Router, Route, Link, History } from 'react-router'
    
//var ProjectItem = React.createClass({
//    
//    render: function(){
//        
//    var projectData = this.props.projectdata.map(function(project, index) {
//            return (
//                    <ProjectButton project={project} key={index} orgid={this.props.orgid}>
//                    </ProjectButton>
//                    );
//        }.bind(this));
//        
//            return ( <div>
//                    {projectData}
//                    </div>
//                    );
//    }
//});

var ProjectButton = React.createClass({
    
    handleSubmit: function(){
//        console.log(this.props.orgid);
//        console.log(this.props.orgname);
        },
    
    render: function(){
        return (
                <Link to={`/project/${this.props.orgid}/${this.props.orgname}`}>
                   <button className="mdl-button mdl-js-button card_button"
                        type="submit"
                        onClick={this.handleSubmit}
                        name="submit"
                        value={this.props.orgid}>View projects
                   </button>             
                </Link>
                );
    
    }
});

 export default ProjectButton
