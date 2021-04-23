import { useEffect, useState } from "react";
import { AppointmentCard } from "../../components/appoinmentCard/AppointmentCard";
import { Header } from "../../components/header/Header";
import { getDating } from "../../services/ApiDatings";
import './AppointmentList.scss'

export function AppointmentList(props) {

  const [citas, setCitas] = useState([])

  useEffect(async () => {
    let token = localStorage.getItem('token');
    const resultado = await getDating(token);
    setCitas(resultado);
  }, [])

  return (
    <>
      <Header />
      <div className="divG">
        {citas.map(cita => (
          <AppointmentCard citaObj={cita} />
        ))}
      </div>
    </>
  );
}

export default AppointmentList;
