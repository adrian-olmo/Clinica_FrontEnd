import "./App.css";
import { AppointmentCard } from "./components/appoinmentCard/AppointmentCard";
import { Login } from "./container/Form/Login";
import { Register } from "./container/Form/Register";
import { AppointmentList } from "./container/AppointmentsList/AppointementList";
import { Appointment } from "./components/Appoinment/Appointments";
import { Home } from "./container/Home"
import { Dashboard } from "./container/Dashboard";

function App() {
  /* const userLoggedRole = "client"; // TODO: traer info del padre */
  return (
    <div className='App'>
      <Home></Home>
      {/* <AppointmentsList role={userLoggedRole}></AppointmentsList> */}
      {/* <AppointmentCard></AppointmentCard> */}
      {<Login></Login>}
      <Register></Register>
      <Appointment></Appointment>
      
      <AppointmentList>
        <AppointmentCard></AppointmentCard>
      </AppointmentList>
     {/*  <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
