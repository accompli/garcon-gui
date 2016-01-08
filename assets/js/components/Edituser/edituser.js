/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { Router, Route, Link } from 'react-router'

import GreenBox from '../Layout/greenbox.js'
import BreadcrumbsBox from '../Layout/breadcrumbs.js'

var EditUser = React.createClass({
    
    render: function(){
        return (
                    <div className="edituser">
                        <GreenBox title={EditUser.title} />
                        <BreadcrumbsBox />
                    </div>
                );
    }
});

EditUser.title = 'Edit user';
EditUser.path = '/edituser/:user';

 export default EditUser

http://localhost:8080/#/EditUser/${this.props.editid}?_k=dd5mla

http://localhost:8080/#/EditUser/${this.props.editid}?_k=1kp17z