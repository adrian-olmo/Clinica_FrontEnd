import { useEffect, useState } from "react";
import { AppointmentCard } from "../../components/appoinmentCard/AppointmentCard";
import { getDating } from "../../services/ApiDatings";
import './AppointmentList.scss'

export function AppointmentList(props) {
  const userLoggedRole = props.role; // TODO: traer info del padre

  const [citas, setCitas] = useState([])

  useEffect(async () => {
    let token = localStorage.getItem('token');
    const resultado = await getDating(token);
    console.log(resultado);
    setCitas(resultado);
  }, [])

  return (
    <div className="divG">
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
