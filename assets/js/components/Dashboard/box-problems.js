/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'
 
 import ProblemsTable from './table-problems'
 
var Problems = React.createClass({
    render : function(){
        return (
                <div className="tablebox problems">
                    <div className="table-title">
                        Problems
                    </div>
                    
                    <ProblemsTable />
                </div>
                )
    }
});

 export default Problems
