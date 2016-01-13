/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react'
import { Router, Route, Link } from 'react-router'

var EditUserBox = React.createClass({

    render: function(){
//        console.log(this.props.data[this.props.dataId]);
//        var naam = this.props.data[this.props.dataId].username;
        return (
                                <div className = "usersbox">
                <div className="loginBox">
                    <div className="edituserbox">
                         <div className="demo-card-square mdl-card mdl-shadow--2dp">
                            <div className="mdl-cardbox">
                            Hallo, {this.props.dataId}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                );
    }
});


 export default EditUserBox
