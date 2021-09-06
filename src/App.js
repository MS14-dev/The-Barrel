
import {Component} from 'react'
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom'
import axios from 'axios';
import './css/bootstrap.min.css'

import Menu from './components/Menu';
import Home from './pages/HomePage';

class App extends Component {
  
  render(){
    return (
      <BrowserRouter>
       <Menu/>
       <br/>
       <br/>
       <Switch>
         <Route component={Home} exact={true} path="/" />
       </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
