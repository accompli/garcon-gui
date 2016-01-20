/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
  import React from 'react'
  import { render } from 'react-dom'
  
  import OrganisationItem from './organisationitem.js'
  
var OrganisationCards = React.createClass({
    
    reload: function(){
        this.props.reload();
    },
    
    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },
    
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    
    render: function(){
        
        var organisationData = this.props.data.map(function(organisation, index) {
            return (
                    <OrganisationItem org={organisation} key={index} countdata={index} reload={this.reload} serverUrl={this.props.serverUrl}>
                    </OrganisationItem>
                    );
        }.bind(this));
        
//        var projectData = this.state.projectdata.map(function(project, index) {
//            return (
//                    <ProjectItem project={project} key={index} >
//                    </ProjectItem>
//                    );
//        }.bind(this));

        return ( 
                <div className="cardslist">
                    {organisationData}
                </div>
                );
    }
});

 export default OrganisationCards