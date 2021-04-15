import React, { Component } from "react";
import { Error } from "./Error";
import { postRegister } from "../../services/ApiDatings";

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
      <div className='wrapper fadeInDown'>
        {/* {this.state.error && <Error msg='Nombre incorrecto' />}
        {this.state.logged && <Error msg='Nombre correcto' />} */}

        <div className='formContent'>
          <h2>Sing Up</h2>
          <div className='fadeIn first'>
            <img src='' className='icon' />
          </div>

          <input type='text' onInput={e => this.handlerDni(e)} />
          <input type='text' onInput={e => this.handlerName(e)} />
          <input type='text' onInput={e => this.handlerLastName(e)} />
          <input type='text' onInput={e => this.handlerPhone(e)} />
          <input type='text' onInput={e => this.handlerHistory(e)} />
          <br></br>
          <button onClick={this.submitRegister}>Register</button>
          <br></br>
        </div>
      </div>
    );
  }
}
