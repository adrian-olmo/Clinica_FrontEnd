import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

export function Footer(props){

    return(
        <div className="homeCtnr">
            <div className="headerCntr">
                <div className="footerCntr">
                    <div className="cntFooter">
                        <div className="boxIcons">
                            <div className="icon1"><a  href="" ><i class="fab fa-github fa-2x"></i></a></div>
                            <div className="icon1"><a  href="" ><i class="fab fa-instagram fa-2x"></i></a></div>
                            <div className="icon1"><a  href="" ><i class="fab fa-facebook fa-2x"></i></a></div>
                        </div>
                        <div className="boxDR">
                            <p className="reserved">All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}