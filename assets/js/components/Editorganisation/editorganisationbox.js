/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react'
import { Router, Route, Link, History, Navigation } from 'react-router'

var EditOrganisationBox = React.createClass({
    
    editOrganisation : function(organisationdata){
        $.ajax({
            url: this.props.serverUrl+"/editorganisations",
            dataType: 'json',
            type: 'POST',
            data: organisationdata,
            success:
                    function(data){
                        if (data.status === "success"){
                            console.log('done with edit!');
                            this.context.history.pushState(null, '/organisation');
                        }
                        else if (data.status === "fail"){
                            console.log("Failed with edit...");
                        }
                    }.bind(this),     
            error:
                    function(xhr, status, err, jqXHR){
                        console.error(this.props.url, status, err.toString());
                         alert( jqXHR);
                    }.bind(this)
        });
                                   
    },
    
    contextTypes: {
        history: React.PropTypes.object.isRequired,
    },
    
    handleSubmit : function(e){
        e.preventDefault();
        
        var oldName = this.refs.name.value;
        var oldLogo = this.refs.logo.value;
        var orgId = this.refs.id.value;
        
        if (oldName !== ""){
            this.editOrganisation({
                organisationname: oldName,
                logo: oldLogo,
                orgid: orgId
            });
        }        
    },
    
    render: function(){
       
        var name = this.props.data[this.props.countdata].orgname;
        var logo = this.props.data[this.props.countdata].orgphoto;
        var id = this.props.orgId;
        
        return (
                <div className = "box">
                    <div className="loginBox">
                        <div className="edituserbox">
                            <div className="demo-card-square mdl-card mdl-shadow--2dp">
                               <div className="mdl-cardbox">
                               
                                    Organisation name: <input  className="mdl-textfield__input"
                                    type="text"
                                    id="orgname"
                                    ref="name"
                                    defaultValue={name}
                                    placeholder={name}/>
                                <p></p>
                                    Logo: <input  className="mdl-textfield__input"
                                    type="text"
                                    id="logo"
                                    ref="logo"
                                    defaultValue={logo}
                                    placeholder={logo}/>
                                <p></p>
                        
                                <input  type="hidden"
                                        id="id"
                                        ref="id"
                                        value={this.props.countdata} />
                        
                                <button className="mdl-button mdl-js-button"
                                        type="submit"
                                        onClick={this.handleSubmit}
                                        name="submit">Edit
                                </button>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
});


 export default EditOrganisationBox

