
import {Component} from 'react'
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom'
import axios from 'axios';
import './css/bootstrap.min.css'

import Menu from './components/Menu';
import Home from './pages/HomePage';
import Alcohol from './pages/AlcoholPage'
import About from './pages/AboutPage';
import Dynamic from './pages/DynamicPage'
import NonAlcohol from './pages/NonAlcoholPage'


class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
         <Menu/>
         <br/>
         <br/>
        <Switch>
         <Route component={Home}  path="/The-Barrel" />
         <Route component={About}  path="/about" />
         <Route component={Home} exact={true} path="/" />
         <Route component={Alcohol} exact={true} path="/alcohols" />
         <Route component={NonAlcohol} exact={true} path="/non-alcohols" />
         <Route render={(props) => { return ( <Dynamic {...props } /> )}}  path="/:dynamic" />
       </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
