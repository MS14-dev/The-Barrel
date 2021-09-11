
import {Component} from 'react'
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom'
import axios from 'axios';
import './css/bootstrap.min.css'

import Menu from './components/Menu';
import Home from './pages/HomePage';
import Alcohol from './pages/AlcoholPage'

class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
         <Menu/>
         <br/>
         <br/>
        <Switch>
         <Route component={Home}  path="/The-Barrel" />
         <Route component={Home} exact={true} path="/" />
         <Route component={Alcohol} exact={true} path="/alcohols" />
       </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
