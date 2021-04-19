import React, { Component } from "react";
import { Error } from "./Error";
import { postRegister } from "../../services/ApiDatings";
import loginImg from '../../login.svg'
import './Form.scss'
import { Link } from "react-router-dom";

export class Register extends React.Component {
  constructor(dni, name, lastName, phone, history) {
    super(dni, name, lastName, phone, history);
    this.state = {};
    this.dni = "";
    this.name = "";
    this.lastName = "";
    this.phone = "";
    this.history = "";
  }

  submitRegister = async e => {
    await postRegister(this.dni, this.name, this.lastName, this.phone, this.history);
    console.log(this.dni);
  };

  handlerDni(e) {
    this.dni = e.target.value;
  }

  handlerName(e) {
    this.name = e.target.value;
  }

  handlerLastName(e) {
    this.lastName = e.target.value;
  }

  handlerPhone(e) {
    this.dni = e.target.value;
  }

  handlerHistory(e) {
    this.history = e.target.value;
  }


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <br></br>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Dni</label>
              <input type="text" name="username" placeholder="dni" onInput={e => this.handlerDni(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Name</label>
              <input type="text" name="email" placeholder="name" onInput={e => this.handlerName(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Last Name</label>
              <input type="text" name="password" placeholder="last name" onInput={e => this.handlerLastName(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Phone</label>
              <Link>
                <input type="text" name="password" placeholder="phone" onInput={e => this.handlerPhone(e)} />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
