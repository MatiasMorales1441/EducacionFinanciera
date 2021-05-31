import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';
import Login_asesor from './paginas/Login_asesor';
import Login_cliente from './paginas/Login_cliente';
import Reg_asesor from './paginas/Reg_asesor';
import Reg_cliente from './paginas/Reg_cliente';
import Inicio from './paginas/Inicio';
import ComInt from './paginas/ComInt';
import MetodoIngreso from './paginas/MetodoIngreso';
import RegExitoso from './paginas/RegExitoso';
import {Button} from '@material-ui/core';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route  exact path="/"> 
          <Inicio/>
        </Route>
        <Route  exact path="/ComInt"> 
          <ComInt/>
        </Route>
        <Route  exact path="/Login_asesor"> 
          <Login_asesor/>
        </Route>
        <Route  exact path="/Login_cliente"> 
          <Login_cliente/>
        </Route>
        <Route  exact path="/MetodoIngreso"> 
          <MetodoIngreso/>
        </Route>
        <Route  exact path="/Reg_asesor"> 
          <Reg_asesor/>
        </Route>
        <Route exact path="/Reg_cliente"> 
          <Reg_cliente/>
        </Route>
        <Route exact path="/RegExitoso"> 
          <RegExitoso/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
