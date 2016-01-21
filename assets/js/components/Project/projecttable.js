/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 
 import Projects from './projectitem.js'
 
var ProjectTable = React.createClass({

    render: function (){
        
        var projectData = this.props.data.map(function(project, index) {
                return (
                        <Projects project={project} key={index} serverUrl={this.props.serverUrl}>
                        </Projects>
                        );
        }.bind(this));
    
        return (
                <div className="projecttable">
                    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                        <thead>               
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Project</th>
                                <th>Edited</th>
                                <th><div className="status">Applications</div></th>
                                <th><div className="status">Status</div></th>
                                <th><div className="edit">Edit</div></th>
                        
                            </tr>
                        </thead>
                
                        <tbody>
                            {projectData}
                        </tbody>     
                    </table>
                </div>
                );
    }
});

 export default ProjectTable