/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 import React from 'react'
 import { render } from 'react-dom'

import ChangesTable from './changes/changes-table-list.js'
import ProblemsTable from './problems/problems-table-list.js'
import Changes from './changes/changes.js'
import Problems from './problems/problems.js'

var DashboardBox = React.createClass({
    getInitialState: function() {
        return {
            changesdata: [],
            problemsdata: []
        };
    },
    
    componentDidMount: function(){
        this.loadDashboardData();
    },
    
    loadDashboardData: function(){
        $.ajax({
            url: this.props.serverUrl+"/dashboardinfo",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            changesdata: data.dashboardchanges,
                            problemsdata: data.dashboardproblems
                        });
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    render : function(){
        
        var changes = this.state.changesdata.map(function(changes, index) {
            return (
                    <Changes data={changes} key={index} countData={index}>
                    </Changes>
            );
            
        }); 

        
        var problems = this.state.problemsdata.map(function(problems, index) {
            
                return (
                        <Problems data={problems} key={index}>
                        </Problems>
                );
        });
                            
        return (
                <div className="box">
                    <div className="tablebox changes">
                        <div className="table-title">
                            Recent changes
                        </div>
                        <ChangesTable changesDiv={changes} />
                    </div>
            
                    <div className="tablebox problems">
                        <div className="table-title">
                            Problems
                        </div>
                        <ProblemsTable problemsDiv={problems} />
                    </div>
                </div>
        );
    }
}); 

 export default DashboardBox