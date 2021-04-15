import React, { Component } from "react";
import { Error } from "./Error";
import { getAuth } from "../../services/ApiDatings";
import "./Login.css";

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
      <div className='wrapper fadeInDown'>
        {this.state.error && <Error msg='Credenciales incorrectas' />}
        {this.state.logged && (
          <Error msg='Credenciales correctas, ¡estás logado!' />
        )}

        <div className='formContent'>
          <h2>Sing In</h2>
          <div className='fadeIn first'>
            <img src='' className='icon' />
          </div>

          <form>
            <input type='text' onInput={e => this.handlerDni(e)} />
            <input type='text' onInput={e => this.handlerPhone(e)} />
            <br></br>
            <button onClick={e => this.submitLogin(e)}>Enviar</button>
          </form>
          <br></br>
        </div>
      </div>
    );
  }
}
