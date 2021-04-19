import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


//Componentes y Contenedores
import { Login } from "./container/Form/Login";
import { Register } from "./container/Form/Register";
import { Home } from "./container/Home"
import { Dashboard } from "./container/Dashboard";


function App() {
  /* const userLoggedRole = "client"; // TODO: traer info del padre */
  return (
    <BrowserRouter>
      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/singup'>
        <Register />
      </Route>


      <Route path='/dashboard'>
        <Dashboard />
      </Route>
    </BrowserRouter>


  );
}

export default App;
