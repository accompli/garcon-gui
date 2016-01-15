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
        return {data: []};
    },
    
    componentDidMount: function(){
        this.loadOrganisationData();
                componentHandler.upgradeDom();
    },
    
    loadOrganisationData: function(){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/organisation",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            data: data.organisationdata
                        })
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },

    stopPropagation: function(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    },

    render : function(){
        return (
                <div className="box">
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
                                
                        <div className="demo-card-square mdl-card">
                            <div className="mdl-card__title mdl-card--expand">
                                <h5> New organisation </h5>
                            </div>
                    
                            <div className="mdl-card__supporting-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                            </div>
                    
                            <div className="mdl-card__actions mdl-card--border">
                                <a className="mdl-button mdl-js-button mdl-js-ripple-effect">
                                    Add organisation
                                </a>
                            </div>
                 
                        </div>
                    </ul>
            
                    <OrganisationCards data={this.state.data} /> 
                </div>
        );
    }
}); 

 export default OrganisationBox
