/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'
 import { Router, Route, Link, History } from 'react-router'




var ApplicationItem = React.createClass({
    
    render : function(){
        return (
                <tr>
                <td>{this.props.app.appname}</td>
                <td>{this.props.app.date}</td>
                </tr>
            );
    }
});


export default ApplicationItem;
