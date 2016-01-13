/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { Router, Route, Link } from 'react-router'

import GreenBox from '../Layout/greenbox.js'
import BreadcrumbsBox from '../Layout/breadcrumbs.js'
import EditUserBox from './edituserbox.js'

var EditUser = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function(){
        this.loadUsers();
    },
    
    loadUsers: function(){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/users",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            data: data.userdata
                        });
                        
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    render: function(){
        console.log(this.props.params.user)
        
        return (
                    <div className="edituser">
                        <GreenBox title={EditUser.title} />
                        <BreadcrumbsBox />
                        <EditUserBox dataId={this.props.params.user} data={this.state.data}/>
                    </div>
                );
    }
});

EditUser.title = 'Edit user';
EditUser.path = '/edituser/:user';

 export default EditUser
