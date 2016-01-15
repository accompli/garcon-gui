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
        return {data: []};
    },
    
    componentDidMount: function(){
        this.loadDashboardData();
    },
    
    loadDashboardData: function(){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/dashboardinfo",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            data: data.dashboarddata
                        })
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    render : function(){
        
        var changes = this.state.data.map(function(dashboarddata, index) {
            return (
                    <Changes data={dashboarddata} key={index} countData={index}>
                    </Changes>
            );
            
        }); 

        
        var problems = this.state.data.map(function(dashboarddata, index) {
            
            if(dashboarddata.status === "Error") {
                return (
                        <Problems data={dashboarddata} key={index}>
                        </Problems>
                );
            }
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