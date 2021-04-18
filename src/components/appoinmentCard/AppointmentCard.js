import "./Cards.scss";

export function AppointmentCard(props) {
  /*  const userLoggedRole = props.role; // TODO: traer info del padre

  const cancelAppointment = () => {};

  if (userLoggedRole == "admin") {
    const privateData = <span>{props.citaObj.status} </span>;
  } else {
    const privateData = <span></span>;
  } */

  return (
    <div className="container">
		<div className="content">
			<div className="cards">
				<div className="cardGroup">
					<label><b>Nombre: </b></label>
          <span>{props.citaObj.nombre}</span>
				</div>
				<div className="cardGroup">
					<label><b>Doctor: </b></label>
          <span>{props.citaObj.doctor}</span>
				</div>
				<div className="cardGroup">
					<label><b>Fecha: </b></label>
          <span>{props.citaObj.fecha}</span>
				</div>
				<div className="cardGroup">
					<label><b>Detalle: </b></label>
          <span>{props.citaObj.detalle}</span>
				</div>
			</div>

			<div className="footer"></div>
		</div>
	</div>
  );
}
