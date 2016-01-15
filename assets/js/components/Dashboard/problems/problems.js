/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    import React from 'react'
    import { render } from 'react-dom'

    var Problems= React.createClass({
        
        render: function(){
            return (
                     <tr>
                        <td>{this.props.data.projectname}</td>
                        <td>{this.props.data.applicationname}</td>
                        <td className="status"> <div className="status error">
                        <span>
                        <svg className="error" fill="#000000" height="20" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        </span>
                <span>
                        {this.props.data.status}
                        </span></div></td>
                    </tr>
                    );
        }
    });

export default Problems
