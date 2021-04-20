import React, { Component } from "react";
import schedule from '../../schedule.svg'
import './AppointmentCard.scss';


export function AppointmentCard(props) {
  /*  const userLoggedRole = props.role; // TODO: traer info del padre

  const cancelAppointment = () => {};

  if (userLoggedRole == "admin") {
    const privateData = <span>{props.citaObj.status} </span>;
  } else {
    const privateData = <span></span>;
  } */

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

      {/* {privateData} {props.citaObj.date}

        <button onClick={() => cancelAppointment()}>CANCELAR CITA</button> */}
    </div>

  );
}
