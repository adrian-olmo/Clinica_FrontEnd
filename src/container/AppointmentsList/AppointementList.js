import { useEffect, useState } from "react";
import { AppointmentCard } from "../../components/appoinmentCard/AppointmentCard";
import { getDating } from "../../services/ApiDatings";
import './AppointmentList.scss'

export function AppointmentList(props) {

  const [citas, setCitas] = useState([]);
  const [citasVacias, setCitasVacias] = useState(false);

  useEffect(async () => {
    let token = localStorage.getItem('token');
    const resultado = await getDating(token);
    if (resultado === false) setCitasVacias(true)
    else {
      setCitasVacias(false);
      setCitas(resultado);
    }

  }, [])

  return (
    <>

      <div className="divG">
        {!citasVacias && citas.map(cita => (
          <AppointmentCard citaObj={cita} />
        ))}
        {citasVacias && <div><br /><br /><h1>No tiene citas activas</h1></div>}
      </div>
    </>
  );
}

export default AppointmentList;
