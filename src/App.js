import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import {Container} from 'react-bootstrap'
import HomeScreen from './pages/HomeScreen';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'

import RegisterScreen from './pages/RegisterScreen';

function App() {
  return (
    <div className="App">
    {/* everything is inside router */}
    <Router>
      <Switch>
        <Route path='/' exact component={HomeScreen}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={RegisterScreen}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
