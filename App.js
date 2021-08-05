import React from 'react';
import {Home} from './Home';
import {Listar} from './Listar';
import {Visualizar}from '../../../Desktop/front end base/pages/Visualizar';
import { Cadastrar } from './Cadastrar';
import {Editar} from './Editar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route  exact  path="/" component={Home} />
          <Route  exact  path="/listar" component={Listar} />
          <Route  exact  path="/visualizar/:id" component={Visualizar} />
          <Route  exact  path="/cadastrar" component={Cadastrar} />
          <Route  exact  path="/editar/:id" component={Editar} />
        </Switch>
      </Router>
     </div>
  );
}

export default App;
