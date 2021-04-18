import React, { Component } from "react";
import loginImg from '../../login.svg'
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
        <img src={loginImg} />
      </div>
      <h3>Appointment Card</h3>
        <div className="nameApptts">
          <label className="titleApptts">Name:</label>
          <span className="spanApptts">{props.citaObj.nombre}</span>
        </div>
        <br />
        <div className="doctorApptts">
          <label className="titleApptts">Doctor:</label>
          <span className="spanApptts">{props.citaObj.doctor}</span>
        </div>
        <br />
        <div className="dateApptts">
          <label className="titleApptts">Date:</label>
          <span className="spanApptts">{props.citaObj.fecha}</span>
        </div>
        <br />
        <div className="detailApptts">
          <label className="titleApptts">Details:</label>
          <span className="spanApptts">{props.citaObj.detalle}</span>
        </div>
      </div>

      {/* {privateData} {props.citaObj.date}

        <button onClick={() => cancelAppointment()}>CANCELAR CITA</button> */}
    </div>
  
  );
}
