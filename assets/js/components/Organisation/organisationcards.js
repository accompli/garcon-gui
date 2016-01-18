/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
  import React from 'react'
  import { render } from 'react-dom'
  
  import OrganisationItem from './organisationitem.js'
  
var OrganisationCards = React.createClass({
    
    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },
    
    getInitialState: function() {
        return {
            projectdata: []
        };
    },
    
    componentDidMount: function(){
        this.loadProjectData();
//        this.loadProjectData();
    },

    loadProjectData: function(){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/projects",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            projectdata: data.projectdata
                        });
            }.bind(this),
            
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
      
    render: function(){
        
        var organisationData = this.props.data.map(function(organisation, index) {
            return (
                    <OrganisationItem org={organisation} key={index} projectdata={this.state.projectdata} >
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