import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgDC from '../../src/imgDC.png';
import dent2 from '../../src/dent2.jpeg'
import dent3 from '../../src/dent3.jpeg'
import dnt1 from '../../src/dnt1.jpeg'

export function Home(props) {

    return (
        <div className="homeCtnr">
            <div className="mainCntr">
                <div className="mainHome">
                    <div className="cntText">
                        <p className="textHome"> Bienvenido a la clinica dental, desde aqui podra registrarse, iniciar sesion, crear citas y ver tus citas </p>
                    </div>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={ dnt1 } class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                                <img src={ dent3 } class="d-block w-100" alt="..."></img>
                            </div>
                            <div class="carousel-item">
                                <img src={ dent2 } class="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}