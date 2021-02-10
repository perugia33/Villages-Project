import logo from './logo.svg';
import './App.css';
import  TourList from './TourList' ;
import  Welcome from './Welcome' ;
import  InfoRequest from './InfoRequest';
import  ClientList from  './ClientList';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="App">
      <div class="flex-container">
        <h1 class="logo"><a href="#">Quaint Villages Tours</a></h1>
        <ul class="navigation">
          <li>
            <Link to= "/"> Home </Link>
          </li>

          <li>
            <Link to= "/tours">Village Tours</Link>
          </li>
          <li>
            <Link to= "/request">Request Info</Link>
          </li> 
          <li>
          <Link to= "/confirm">Confirm</Link>
          </li>
         

        </ul>  
      </div>
      <Route path= '/' exact component = {Welcome}/>
      <Route path= '/tours' component = {TourList}/>
      <Route path= '/request' component = {InfoRequest}/>
      <Route path= '/confirm' component = {ClientList}/>
     
    </div>
  </Router>
  );
}

export default App;
