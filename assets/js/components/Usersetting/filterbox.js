/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'

var FilterBox = React.createClass({
    render : function (){
        return (
                <div className = "filterbox">
                    <div className="filter search">
                        <div className="searchbox">
                                <svg className="search_icon filtericons" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                        <input className="searchform" type="search"  id="search" placeholder="Filter by name"/>
                        </div>
                    </div>
            
                    <div className="sort">
                        <div className="filter sortbox">
                            <div className = "sortbox_text">
                                Sort by Recently Edited
                                <div className="sort_arrows">
                                    <svg className="dropup_icon filtericons" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 14l5-5 5 5z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>

                                    <svg className="dropdown_icon filtericons" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 10l5 5 5-5z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                );
    }
});

 export default FilterBox