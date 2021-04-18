import { AppointmentCard } from "../../components/appoinmentCard/AppointmentCard";

export function AppointmentList(props) {
  const userLoggedRole = props.role; // TODO: traer info del padre

  const citas = [
    {
      nombre: "Adrian",
      doctor: "Fernando",
      fecha: "2021-04-15",
      detalle: "Detalle1",
    },
    {
      nombre: "Carlos",
      doctor: "Mariano",
      fecha: "2021-04-18",
      detalle: "Detalle2",
    },
    {
      nombre: "Carlos",
      doctor: "Mariano",
      fecha: "2021-04-18",
      detalle: "Detalle2",
    }
  ];

  return (
    <div>
      {citas.map(cita => (
        <AppointmentCard citaObj={cita} role={userLoggedRole} />
      ))}
    </div>
    /*  <div>
      {citas.map(cita => (
        <AppointmentCard>{cita}</AppointmentCard>
      ))}
    </div> */
  );
}

export default AppointmentList;
