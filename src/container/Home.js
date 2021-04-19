import React, { Component } from "react";
import imgDC from '../../src/imgDC.png'
import './Home.scss';

export function Home(props){

    return(
        <div className="homeCtnr">
            <div className="headerCntr">
                <div className="logoCntr">
                    <div className="logoBox">
                        <img className="imgDC" src={imgDC} />
                    </div>
                </div>
                <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand" href="#">Navbar</a>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
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
    )
}