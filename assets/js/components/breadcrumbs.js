/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'

var Breadcrumbs = React.createClass({
    render: function(){
        return (
                <div className="breandcrumbs">
                    <ul className="breadcrumbs-list">
                        {this.props.routes.map((item, index) =>
                            <li key={index}>
                                <Link
                                  onlyActiveOnIndex={true}
                                  activeClassName="breadcrumb-active"
                                  to={item.path || ''} > 
                                  {item.component.title}
                                </Link>
                              {(index + 1) < depth && '\u2192'}
                            </li>
                        )}
                    </ul>
                </div>
                );
    }
});


export default Breadcrumbs;