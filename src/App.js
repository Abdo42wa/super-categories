import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import {Container} from 'react-bootstrap'
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <div className="App">
    <Container>
      <HomeScreen/>
      {/* <Login /> */}

      </Container>
    </div>
  );
}

export default App;
