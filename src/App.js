import "./App.css";
import { AppointmentCard } from "./components/appoinmentCard/AppointmentCard";
import { Login } from "./container/Form/Login";
import { Register } from "./container/Form/Register";
import { AppointmentList } from "./container/AppointmentsList/AppointementList";
import { Appointment } from "./components/Appoinment/Appointments"

function App() {
  /* const userLoggedRole = "client"; // TODO: traer info del padre */
  return (
    <div className='App'>
      {/* <AppointmentsList role={userLoggedRole}></AppointmentsList> */}
      {/* <AppointmentCard></AppointmentCard> */}
      {<Login></Login>}
      <Register></Register>
      <Appointment></Appointment>
      
      <AppointmentList>
        <AppointmentCard></AppointmentCard>
      </AppointmentList>
    </div>
  );
}

export default App;
