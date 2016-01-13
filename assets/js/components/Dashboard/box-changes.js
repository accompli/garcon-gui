/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'
 
 import ChangesTable from './table-changes'
 
var Changes = React.createClass({
    render : function(){
        return (
                <div className="tablebox changes">
                    <div className="table-title">
                        Recent changes
                    </div>
            
                    <ChangesTable />
                </div>
                )
    }
});

 export default Changes