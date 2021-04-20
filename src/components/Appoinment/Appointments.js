import React, { Component } from "react";
import loginImg from '../../login.svg'
import { postDating } from "../../services/ApiDatings";
import './Appointments.scss';

export class Appointment extends React.Component {
  constructor(userID, doctor, date, detail) {
    super(userID, doctor, date, detail);
    this.userID = "";
    this.doctor = "";
    this.date = "";
    this.detail = "";
  }

  createDate = async e => {
    await postDating(this.userID, this.doctor, this.date, this.detail)
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
            <input type="text" className="detailApptts" placeholder="Details" minlength="4" maxlength="100" onInput={e => this.handlerDetail(e)} />
          </div>
        </div>

        {/* {privateData} {props.citaObj.date} */}

        <button onClick={e => this.createDate(e)}>CREAR CITA</button>
      </div>

    );
  }

}