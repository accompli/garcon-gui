/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'

 import Changes from './box-changes.js'
 import Problems from './box-problems.js'
 
var DashboardBox = React.createClass({
    render : function(){
        return (
                <div className="box">
                    <Changes />
                    <Problems />
                </div>
                )
    }
});

 export default DashboardBox