import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgDC from '../../src/imgDC.png';
import './Home.scss';

export function Home(props) {

    return (


        <div className="homeCtnr">
            <div className="headerCntr">
                <div className="logoCntr">
                    <div className="logoBox">
                        <img className="imgDC" src={imgDC} />
                    </div>
                </div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <Link class="navbar-brand" to="/home">Home</Link>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link" aria-current="page" to='/dashboard'>Dashboard</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" aria-current="page" to='/login'>Sing In</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to='/singup'>Sing Up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="mainCntr">
                <div>

                </div>
            </div>
            <div className="footerCntr">
                <div className="cntFooter">
                    <div className="boxIcons">
                        <div className="icon1"><a href="" ><i class="fab fa-github fa-2x"></i></a></div>
                        <div className="icon1"><a href="" ><i class="fab fa-instagram fa-2x"></i></a></div>
                        <div className="icon1"><a href="" ><i class="fab fa-facebook fa-2x"></i></a></div>
                    </div>
                    <div className="boxDR">
                        <p className="reserved">All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}