/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import { render } from 'react-dom'
 
 
import Changes from './changes.js'
 
var ChangesTable = React.createClass({
     getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function(){
        this.loadRecentChanges();
    },
    
    loadRecentChanges: function(){
        $.ajax({
            url: "http://garcon-server.jinhua.choffice.nl/recentchanges",
            dataType: 'json',
            success: function(data) {
                console.log(data.dashboarddata)
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
        
        var changes = this.state.data.map(function(change, index) {
            
            return (
                    <Changes row={change} key={index} countdata={index}>
                    
                    </Changes>
                    
                    );
        })
        
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
                            {changes}
                        </tbody>     
                    </table>
                )
    }
});

 export default ChangesTable

