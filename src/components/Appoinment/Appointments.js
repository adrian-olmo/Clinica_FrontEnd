import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import loginImg from '../../login.svg'
import { postDating } from "../../services/ApiDatings";
import { Header } from "../header/Header";
import './Appointments.scss';

class Appointment extends React.Component {
  constructor(userID, doctor, date, detail) {
    super(userID, doctor, date, detail);
    this.userID = "";
    this.doctor = "";
    this.date = "";
    this.detail = "";
  }

  createDate = async e => {
    await postDating(this.userID, this.doctor, this.date, this.detail)
    this.props.history.push('/dashboard')
  }

  handlerUserID(e) {
    this.userID = e.target.value;
  }
  handlerDoctor(e) {
    this.doctor = e.target.value;
  }
  handlerDate(e) {
    this.date = e.target.value;
  }
  handlerDetail(e) {
    this.detail = e.target.value;
  }

  render() {
    return (
      <>
        <Header />
        <div className='Appointment' >
          <div className='txtContainer'>
            <div className="image">
              <img src={loginImg} />
            </div>
            <h3>Cita Nueva</h3>
            <div className="nameApptts">
              <label className="titleApptts">DNI Usuario:</label>
              <input type="text" className="inputApptts" placeholder="DNI" onInput={e => this.handlerUserID(e)} />
            </div>
            <br />
            <div className="doctorApptts">
              <label className="titleApptts">ID Doctor:</label>
              <input type="text" className="inputApptts" placeholder="ID Doctor" onInput={e => this.handlerDoctor(e)} />
            </div>
            <br />
            <div className="dateApptts">
              <label className="titleApptts">Date:</label>
              <input type="date" className="inputApptts" onInput={e => this.handlerDate(e)} />
            </div>
            <br />
            <div className="detailApptts">
              <label className="titleApptts">Details:</label>
              <input type="text" className="inputDetail" placeholder="Details" minlength="4" maxlength="100" onInput={e => this.handlerDetail(e)} />
            </div>
            <button className="crtDate" onClick={e => this.createDate(e)}>CREAR CITA</button>
          </div>
        </div>
      </>


    );
  }

}

export default withRouter(Appointment);