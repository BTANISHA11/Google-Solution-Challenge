// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import Emergency from './screens/Emergency';

import Volunteer from './screens/Volunteer';
import Contact from './screens/Contact';
import Training from './screens/Training';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/emergency" element = {<Emergency/>}/>
          <Route exact path = "/volunteer" element = {<Volunteer/>}/>
          <Route exact path = "/training" element = {<Training/>}/>
          <Route exact path = "/contact" element = {<Contact/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
