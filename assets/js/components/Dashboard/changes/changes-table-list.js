/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    import React from 'react'
    import { render } from 'react-dom'

    
    var ChangesTable = React.createClass({
        
        render: function() {
            return (
                        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp dashboardtable">
                            <thead>               
                                        <tr>
                                            <th>Project</th>
                                            <th>Application</th>
                                            <th><div className="status">Status</div></th>
                                        </tr>

                            </thead>
                            <tbody>
                                {this.props.changesDiv}
                            </tbody>     
                        </table>
            );
        }
    });

    export default ChangesTable