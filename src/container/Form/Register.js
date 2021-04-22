//Import React Components
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//Import Services
import { postRegister } from "../../services/ApiDatings";
import { EmptyData, Error } from "./Error";

//Import Styles 
import loginImg from '../../login.svg'
import './Form.scss'

class Register extends React.Component {

  constructor(dni, name, lastName, phone, history) {
    super(dni, name, lastName, phone, history);
    this.state = {
      empty: false,
      dniValid: false,
      nameValid: false,
      lastnameValid: false,
      phoneValid: false
    };
    this.dni = "";
    this.name = "";
    this.lastName = "";
    this.phone = "";
  }


  submitRegister = async () => {

    if (this.dni === "" ||
      this.name === "" ||
      this.lastName === "" ||
      this.phone === "") {
      alert('Debe rellenar los campos con (*)')

    }

     const data = await postRegister(this.dni, this.name, this.lastName, this.phone);
    console.log(data);

    if (data.error) {
      this.setState({ error: true })
    } else {
      this.props.history.push('/Login');
    } 
    if (this.state.dniValid && this.state.nameValid && this.state.lastnameValid && this.state.phoneValid) {
      const data = await postRegister(this.dni, this.name, this.lastName, this.phone);
      console.log(data);
      if (data.error) {
        this.setState({ error: true })
      } else {
        this.props.history.push('/login');
      }

    } else {
      console.log('JODETE');
    }

  };
  handlerDni(e) {
    if (e.target.value === '') {
      this.setState({ empty: false })
    } else {
      this.dni = e.target.value;
      this.setState({ dniValid: true })
    }
  }

  handlerName(e) {
    if (e.target.value === '') {
      this.setState({ empty: false })
    } else {
      this.name = e.target.value;
      this.setState({ nameValid: true })
    }

  }

  handlerLastName(e) {
    if (e.target.value === '') {
      this.setState({ empty: false })
    } else {
      this.lastName = e.target.value;
      this.setState({ lastnameValid: true })
    }
  }

  handlerPhone(e) {
    if (e.target.value === '') {
      this.setState({ empty: false })
    } else {
      this.phone = e.target.value;
      this.setState({ phoneValid: true })
    }
  }


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <br />
        {this.state && <EmptyData msg='Debe rellenar los campos con (*)' />}
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
              {/* {!this.state.dniValid && <EmptyData msg='Hay campos vacios' />} */}
            </div>
            <div className="form-group">
              <label htmlFor="email">Name*</label>
              <input type="text" name="email" placeholder="name" onInput={e => this.handlerName(e)} />
              {/* {!this.state.nameValid && <EmptyData msg='Hay campos vacios' />} */}
            </div>
            <div className="form-group">
              <label htmlFor="password">Last Name*</label>
              <input type="text" name="password" placeholder="last name" onInput={e => this.handlerLastName(e)} />
              {/* {!this.state.lastnameValid && <EmptyData msg='Hay campos vacios' />} */}
            </div>
            <div className="form-group">
              <label htmlFor="password">Phone*</label>
              <input type="text" name="password" placeholder="phone" onInput={e => this.handlerPhone(e)} />
              {/* {!this.state.dniValid && <EmptyData msg='Hay campos vacios' />} */}
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