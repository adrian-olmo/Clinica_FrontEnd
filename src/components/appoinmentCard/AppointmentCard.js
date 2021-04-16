import "./cardStyle.css";

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
        <span>Nombre: {props.citaObj.nombre}</span>
        <br />
        <span>Doctor: {props.citaObj.doctor}</span>
        <br />
        <span>Fecha: {props.citaObj.fecha}</span>
        <br />
        <span>Detalle: {props.citaObj.detalle}</span>
      </div>

      {/* {privateData} {props.citaObj.date}

        <button onClick={() => cancelAppointment()}>CANCELAR CITA</button> */}
    </div>
  );
}
