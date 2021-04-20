import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Componentes y Contenedores
import Login from "./container/Form/Login";
import Register from "./container/Form/Register";
import { Home } from "./container/Home"
import { Dashboard } from "./container/Dashboard";
import { Appointment } from "./components/Appoinment/Appointments"
import { AppointmentList } from "./container/AppointmentsList/AppointementList"
import { AppointmentCard } from "./components/appoinmentCard/AppointmentCard"
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
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/Appointment">
            <Appointment></Appointment>
          </Route>

          <Route path="/AppointmentList">
            <AppointmentList>
              <AppointmentCard></AppointmentCard>
            </AppointmentList>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      {/*  <Dashboard></Dashboard> */}
    </div >
  );
}

export default App;
