/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    import React from 'react'
    import { render } from 'react-dom'

    var Changes = React.createClass({
        
        showStatus: function(){
            if (this.props.data.status === "Error"){
                return (
                        <div className="status error">
                            <span>
                                <svg className="error" fill="#000000" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                </svg>
                            </span>
                            <span>
                                {this.props.data.status}
                            </span>
                        </div>
                        );
                }
            else {
                return (
                        <div className="status available">

                        <svg className="available" fill="#000000" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>

                        {this.props.data.status}
                                
                        </div>
                        );
                }
        },

        render: function(){       
                return (
                         <tr>
                            <td>{this.props.data.projectname}</td>
                            <td>{this.props.data.applicationname}</td>
                            <td className="status">{this.showStatus()}</td>
                        </tr>
                        );
            }
    });

export default Changes