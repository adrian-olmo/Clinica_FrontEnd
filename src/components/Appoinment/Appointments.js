import React, { Component } from "react";
import loginImg from '../../login.svg'
import './Appointments.scss';

export function Appointment(props) {


  return (
    <div className='Appointment'>
      <div className='txtContainer'>
      <div className="image">
        <img src={loginImg} />
      </div>
      <h3>Appoinments</h3>
        <div className="nameApptts">
          <label className="titleApptts">Name:</label>
          <input type="text" className="inputApptts" placeholder="Name"></input>
        </div>
        <br />
        <div className="doctorApptts">
          <label className="titleApptts">Doctor:</label>
          <input type="text" className="inputApptts" placeholder="Doctor"></input>
        </div>
        <br />
        <div className="dateApptts">
          <label className="titleApptts">Date:</label>
          <input type="date" className="inputApptts"></input>
        </div>
        <br />
        <div className="detailApptts">
          <label className="titleApptts">Details:</label>
          <input type="text" className="detailApptts" placeholder="Details" minlength="4" maxlength="100"></input>
        </div>
      </div>

      {/* {privateData} {props.citaObj.date}

        <button onClick={() => cancelAppointment()}>CANCELAR CITA</button> */}
    </div>
  
  );
}