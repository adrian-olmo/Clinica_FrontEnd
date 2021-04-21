import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Componentes y Contenedores
import Login from "./container/Form/Login";
import Register from "./container/Form/Register";
import { Home } from "./container/Home"
import { Dashboard } from "./container/Dashboard";
import Appointment from "./components/Appoinment/Appointments"
import { AppointmentList } from "./container/AppointmentsList/AppointementList"
import { AppointmentCard } from "./components/appoinmentCard/AppointmentCard"
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";


function App() {

  return (
    <div className='App'>

      <BrowserRouter>

        <Header />

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
            <Appointment />
          </Route>

          <Route path="/AppointmentList">
            <AppointmentList>
              <AppointmentCard />
            </AppointmentList>
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>

    </div >
  );
}

export default App;
