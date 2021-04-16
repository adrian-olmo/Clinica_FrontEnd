import "./App.css";
import { AppointmentCard } from "./components/appoinmentCard/AppointmentCard";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { AppointmentList } from "./container/AppointmentsList/AppointementList";

function App() {
  /* const userLoggedRole = "client"; // TODO: traer info del padre */
  return (
    <div className='App'>
      {/* <AppointmentsList role={userLoggedRole}></AppointmentsList> */}
      {/* <AppointmentCard></AppointmentCard> */}
      {<Login></Login>}
      <Register></Register>
      
      <AppointmentList>
        <AppointmentCard></AppointmentCard>
      </AppointmentList>
    </div>
  );
}

export default App;
