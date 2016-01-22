/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 import React from 'react'
 import { render } from 'react-dom'
 import { Router, Route, Link, History } from 'react-router'


 import ApplicationItem from './applicationitem.js'

var Application = React.createClass({
    
    render : function(){
        
        var applicationData = this.props.data.map(function(application, index) {
            return (
                    <ApplicationItem app={application} key={index} countdata={index}serverUrl={this.props.serverUrl}>
                    </ApplicationItem>
                    );
        }.bind(this));
        
        
        return (
                    <tr>
               {applicationData}
                    </tr>
                );
    }
});


export default Application;