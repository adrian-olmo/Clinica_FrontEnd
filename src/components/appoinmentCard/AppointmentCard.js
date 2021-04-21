import React, { Component } from "react";
import schedule from '../../schedule.svg'
import './AppointmentCard.scss';


export function AppointmentCard(props) {

  return (
    <div className='AppointmentCard'>
      <div className='txtContainer'>
        <div className="image">
          <img className="schedule" src={schedule} />
        </div>
        <h3>Detalle Cita</h3>
        <div className="nameApptts">
          <label className="titleApptts">DNI Paciente:</label>
          <span className="spanApptts">{props.citaObj.userID}</span>
        </div>
        <br />
        <div className="doctorApptts">
          <label className="titleApptts">Doctor:</label>
          <span className="spanApptts">{props.citaObj.doctorID}</span>
        </div>
        <br />
        <div className="dateApptts">
          <label className="titleApptts">Date:</label>
          <span className="spanApptts">{props.citaObj.date}</span>
        </div>
        <br />
        <div className="detailApptts">
          <label className="titleApptts">Details:</label>
          <span className="spanApptts">{props.citaObj.detail}</span>
        </div>
      </div>
    </div>

  );
}
