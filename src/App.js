import "./App.css";
import { AppointmentCard } from "./components/appoinmentCard/AppointmentCard";
import { AppointmentList } from "./container/AppointmentsList/AppointementList";

function App() {
  /* const userLoggedRole = "client"; // TODO: traer info del padre */
  return (
    <div className='App'>
      {/* <AppointmentsList role={userLoggedRole}></AppointmentsList> */}
      {/* <AppointmentCard></AppointmentCard> */}
      <AppointmentList>
        <AppointmentCard></AppointmentCard>
      </AppointmentList>
    </div>
  );
}

export default App;
