import "./App.css";
import { AppointmentCard } from "./components/appoinmentCard/AppointmentCard";
import { Login } from "./container/Form/Login";
import { Register } from "./container/Form/Register";
import { AppointmentList } from "./container/AppointmentsList/AppointementList";
import { Appointment } from "./components/Appoinment/Appointments";
import { Home } from "./container/Home"
import { Dashboard } from "./container/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  /* const userLoggedRole = "client"; // TODO: traer info del padre */
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
            {/* <AppointmentsList role={userLoggedRole}></AppointmentsList> */}
            {/* <AppointmentCard></AppointmentCard> */}
          <Route path="/Login">
            {<Login></Login>}
          </Route>
          <Route path="/Register">
            <Register></Register>
          </Route>
          <Route path="/Appointment"> 
            <Appointment></Appointment>
          </Route>
          <Route path="/AppointmentList">
            <AppointmentList>
              <AppointmentCard></AppointmentCard>
            </AppointmentList>
          </Route>  
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
     {/*  <Dashboard></Dashboard> */}
    </div>
  );
}

export default App;
