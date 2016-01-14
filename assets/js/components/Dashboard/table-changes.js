/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import { render } from 'react-dom'
 
var ChangesTable = React.createClass({
     getInitialState: function() {
        return {changesData: []};
    },
    
    componentDidMount: function(){
        this.loadRecentChanges();
    },
    
    loadRecentChanges: function(){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/recentchanges",
            dataType: 'json',
            success: function(data) {
                        this.setState({
                            changesData: data.userdata
                        })
                        
            }.bind(this),
            error:  function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                    }.bind(this)
        });
    },
    
    render : function(){
        return (
                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp dashboardtable">
                <thead>               
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Project</th>
                                <th>Application</th>
                                <th>Status</th>
                        
                            </tr>
                    
                </thead>
                        <tbody>
                            
                        </tbody>     
                    </table>
                )
    }
});

 export default ChangesTable

