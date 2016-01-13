/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import React from 'react'
 import { render } from 'react-dom'
 
var ProblemsTable = React.createClass({
    render : function(){
        return (
                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>               
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Project</th>
                                <th>Application</th>
                                <th>Status</th>
                        
                            </tr>
                    
                </thead>
                        <tbody>
                        data
                        </tbody>     
                    </table>
                )
    }
});

 export default ProblemsTable
