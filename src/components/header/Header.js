import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgDC from '../../imgDC.png'
import './Header.scss';
import { useEffect, useState } from 'react'

export function Header(props) {


    let [isLogged, setIsLogged] = useState();
    useEffect(() => {
        if (localStorage.getItem('token')) { setIsLogged(true) }
        else { setIsLogged(false) }
    }, [])

    const cerrarsesion = () => {
        localStorage.clear('token');
        setIsLogged(false);
    }

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
                                    {isLogged && <li class="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/dashboard">Citas Pendientes</Link>
                                    </li>}

                                    {isLogged && <li class="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/Appointment">Citas Nuevas</Link>
                                    </li>}
                                    {!isLogged && <li class="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/login">Iniciar Sesion</Link>
                                    </li>}
                                    {!isLogged && <li class="nav-item">
                                        <Link class="nav-link" to="/register">Registrarse</Link>
                                    </li>}
                                    {isLogged && <li class="nav-item">
                                        <Link onClick={cerrarsesion} class="nav-link" to="/">Cerrar Sesion</Link>
                                    </li>}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}