import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
      <div className="App">  
        {/* <Navbar /> */}
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
