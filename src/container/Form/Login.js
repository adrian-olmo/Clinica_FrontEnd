import React from "react";
import { withRouter } from "react-router-dom";

//Import Services & Error Message
import { Error, Acces, EmptyData } from "./Error";
import { getAuth } from "../../services/ApiDatings";

//Import Icon & Styles
import "./Form.scss";
import loginImg from '../../login.svg'
import { Header } from "../../components/header/Header";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, logged: false, empty: false };
    this.dni = "";
    this.phone = "";
  }

  async submitLogin(e) {
    e.preventDefault();
    if (this.dni === "" || this.phone === "") {
      this.setState({ empty: true })
      this.setState({ error: false })
    }
    else {
      this.setState({ error: false })
      this.setState({ empty: false })
      let credentials = await getAuth(this.dni, this.phone);
      if (credentials.error) {
        this.setState({ error: true, logged: false });
      }

      if (credentials.auth) {
        this.setState({ logged: true, error: false });
        localStorage.setItem('token', credentials.auth)
        this.props.history.push('/dashboard');


      }


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
      <>
        <Header />
        <div className="base-container">
          <br /><br />


          <div className="header">Login</div>
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
                <label htmlFor="password">Phone*</label>
                <input type="text" name="password" placeholder="phone" onInput={e => this.handlerPhone(e)} />
              </div>
            </div>
          </div>
          <div className="footer">
            {this.state.error === true && <Error msg='Credenciales incorrectas' />}
            {this.state.empty === true && <EmptyData msg='Debe rellenar los campos obligatorios(*)' />}
            <button type="button" className="btn" onClick={e => this.submitLogin(e)}>
              Login
          </button>
          </div>
        </div>
      </>

    );
  }
}


export default withRouter(Login);