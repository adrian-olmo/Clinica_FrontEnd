//Import React Components
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//Import Services
import { postRegister } from "../../services/ApiDatings";
import { Error } from "./Error";

//Import Styles 
import loginImg from '../../login.svg'
import './Form.scss'

class Register extends React.Component {

  constructor(dni, name, lastName, phone, history) {
    super(dni, name, lastName, phone, history);
    this.state = { error: false };
    this.dni = "";
    this.name = "";
    this.lastName = "";
    this.phone = "";
  }



  submitRegister = async () => {

    const data = await postRegister(this.dni, this.name, this.lastName, this.phone);
    console.log(data);

    if (data.error) {
      this.setState({ error: true })
    } else {
      this.props.history.push('/login');
    }
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
    this.phone = e.target.value;
  }


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <br /><br />
        {this.state.error && <Error msg='El DNI ya esta registrado' />}
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Dni*</label>
              <input type="text" name="username" placeholder="dni" onInput={e => this.handlerDni(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Name*</label>
              <input type="text" name="email" placeholder="name" onInput={e => this.handlerName(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Last Name*</label>
              <input type="text" name="password" placeholder="last name" onInput={e => this.handlerLastName(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Phone*</label>
              <input type="text" name="password" placeholder="phone" onInput={e => this.handlerPhone(e)} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={e => this.submitRegister(e)}>
            Register
          </button>
        </div>
      </div>
    );
  }
}


export default withRouter(Register);