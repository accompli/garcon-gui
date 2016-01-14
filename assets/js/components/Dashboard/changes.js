/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    import React from 'react'
    import { render } from 'react-dom'

var Changes = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString());
        return { __html: rawMarkup };
    },
    
    showStatus: function(){
        if (this.props.row.status === "Error"){
            return (
                    <div className="status error">{this.props.row.status}</div>
                    );
            }
        else {
            return (
                    <div className="status available">{this.props.row.status}</div>
                    );
            }
    },
    
    render: function(){
        return (
                 <tr>
                    <td>{this.props.row.projectname}</td>
                    <td>{this.props.row.applicationname}</td>
                    <td className="status">{this.showStatus()}</td>
                </tr>
                );
    }
});

    export default Changes