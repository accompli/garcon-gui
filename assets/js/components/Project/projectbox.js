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
    
    addNewProject: function(){
        
    },
    
    stopPropagation: function(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    },
    
    handleSubmit: function(e){
        e.preventDefault();
        
        var projectname = this.refs.projectname.value;
        var id = this.props.orgid;
        
        if (projectname !== ""){
            this.addNewProject({
                name: projectname,
                id: id
            });
        }      
    },
    
    render : function(){
        
        return (
                <div className = "box">
                    <div>Hier komen de filters ...</div>
            
                    <ProjectTable data={this.state.data}/>
                
                    <button className = "mdl-button mdl-js-button add_user"
                                    type=""
                                    name="submit"
                                    id="neworganisation">
                            <svg className="add_icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            </svg>
                    
                    </button>
            
                    <ul className="mdl-menu mdl-menu--top-right mdl-js-menu mdl-js-ripple-effect "
                        htmlFor="neworganisation">
                                
                        <div onClick={this.stopPropagation} className="mdl-card add_organisation">
                            <div className="mdl-card__title mdl-card--expand">
                                <h5> New project </h5>
                            </div>
                    
                            <div className="mdl-card__supporting-text">
                                Project name <input className="mdl-textfield__input"
                                    type="text"
                                    id="name"
                                    ref="orgname"/>
                                <p></p>
                            </div>

                    <button className="mdl-button mdl-js-button"
                        type="submit"
                        onClick={this.handleSubmit}
                        name="submit">Add Project
                    </button>      

                        </div>
                    </ul>
                </div>
                );
    }
});

 export default ProjectBox


