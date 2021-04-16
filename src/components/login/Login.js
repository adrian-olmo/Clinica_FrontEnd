import React, { Component } from "react";
import { Error } from "./Error";
import { getAuth } from "../../services/ApiDatings";
import "./Login.scss";
import loginImg from '../../login.svg'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, logged: false };
    this.dni = "";
    this.phone = "";
  }

  async submitLogin(e) {
    e.preventDefault();
    if (this.dni === "") alert("Debes rellenar el DNI");
    //[1º] TODO: coger el contenido de email y password

    //[2º] TODO: fetch al backend
    let sasa = await getAuth(this.dni, this.phone);

    //[3º] TODO: si el fetch devuelve token no hago nada
    if (sasa.error) {
      // Si tiene token, muestra error y el usuario no se
      // Y esto automáticamente renderiza de nuevo el componente
      this.setState({ error: true, logged: false });
    }

    //[4º] TODO: si el fetch no devuelve token actualizo el estado del error
    if (sasa.auth) {
      // Si tiene token, quita el error y muestra que el usuario esta logeado
      // Y esto automáticamente renderiza de nuevo el componente
      this.setState({ logged: true, error: false });
    }
  }

  handlerDni(e) {
    this.dni = e.target.value;
  }

  handlerPhone(e) {
    this.phone = e.target.value;
  }

  render() {
    return (
      
      <div className="base-container">
        <br></br><br></br>
        {this.state.error && <Error msg='Credenciales incorrectas' />}
        {this.state.logged && (
          <Error msg='Credenciales correctas, ¡estás logado!' />
        )}
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src = {loginImg}/>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Dni</label>
              <input type="text" name="username" placeholder="dni" onInput={e => this.handlerDni(e)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Phone</label>
              <input type="text" name="password" placeholder="phone" onInput={e => this.handlerPhone(e)} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={e => this.submitLogin(e)}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
