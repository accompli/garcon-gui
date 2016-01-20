/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'
 import { Router, Route, Link, History } from 'react-router'
 
 import OrganisationCards from './organisationcards.js'
 
var OrganisationBox = React.createClass({
    
    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    componentDidMount: function(){
        this.loadOrganisationData();
    },
    
    loadOrganisationData: function(){
        $.ajax({
            url: this.props.serverUrl+"/organisation",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            data: data.organisationdata
                        });
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    
    reload: function(){
        this.loadOrganisationData();
    },
    
    stopPropagation: function(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    },
    
    handleSubmit: function(e){
        e.preventDefault();
        
        var name = this.refs.orgname.value;
        var logo = this.refs.orglogo.value;
        
        if (name !== ""){
            this.addNewOrganisation({
                name: name,
                logo: logo
            });
        }      
    },
    
    addNewOrganisation: function(newuser){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/addorganisation",
            dataType: 'json',
            type: 'POST',
            data: newuser,
            success:
                    function(data){ 
                        if (data.status === "success"){
                            this.loadOrganisationData();
                            console.log('new user added complete');
                        }
                        else if (data.status === "fail"){
                            console.log("failed");
                        }
                    }.bind(this),
                    
            error:
                    function(xhr, status, err, jqXHR){
                        console.error(this.props.url, status, err.toString());
                         alert( jqXHR);
                    }.bind(this)
        });
    },
    
    render : function(){

        return (
                <div className="box">
                    
                    <OrganisationCards data={this.state.data} reload={this.reload} serverUrl={this.props.serverUrl} /> 
                                    
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
                                <h5> New organisation </h5>
                            </div>
                    
                            <div className="mdl-card__supporting-text">
                                Organisation name <input className="mdl-textfield__input"
                                    type="text"
                                    id="name"
                                    ref="orgname"/>
                                <p></p>
                                Organisation logo url: <input  className="mdl-textfield__input"
                                    type="text"
                                    id="logo"
                                    ref="orglogo"/>
                                <p></p>
                            </div>

                    <button className="mdl-button mdl-js-button"
                        type="submit"
                        onClick={this.handleSubmit}
                        name="submit">Add Organisation
                    </button>      

                        </div>
                    </ul>
            
                </div>
        );
    }
}); 

 export default OrganisationBox
