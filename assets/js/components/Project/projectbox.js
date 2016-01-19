/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'

 import ProjectTable from './projecttable.js'

var ProjectBox = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    componentDidMount: function(){
        this.loadProjects();
    },
    
    loadProjects: function(){
        $.ajax({
            url: this.props.serverUrl+"/projects",
            dataType: 'json',
            data: {orgid: this.props.orgid},
            success: function(data) {
                console.log(data.projectdata, data.status);
                        this.setState({
                            data: data.projectdata
                        });
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    render : function(){
        
        return (
                <div className = "box">
                    <div>Hier komen de filters ...</div>
                    <ProjectTable data={this.state.data}/>
                </div>
                );
    }
});

 export default ProjectBox


