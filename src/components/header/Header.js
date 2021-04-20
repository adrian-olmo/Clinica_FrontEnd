import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgDC from '../../imgDC.png'
import './Header.scss';

export function Header(props) {

    return (
        <div className="homeCtnr">
            <div className="headerCntr">
                <div className="logoCntr">
                    <Link to="/">
                        <div className="logoBox">
                            <img className="imgDC" src={imgDC} />
                        </div>
                    </Link>

                </div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <Link class="navbar-brand" to="/">Home</Link>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/dashboard">DashBoard</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/login">Sing In</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/register">Sing Up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}