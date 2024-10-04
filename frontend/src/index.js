import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css';
// import Calcu from './component/CarbonFootprint.jsx';
// import PhoneSignin from './component/signing.jsx';
import { BrowserRouter} from 'react-router-dom';
import Router1 from './Navigation/Router';
// import Quiz from './Pages/Quiz.js';
import Home from './Pages/Home.js';
import Login from '../src/Pages/Login.jsx';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Router1/>
    </BrowserRouter>

    {/* <PhoneSignin/> */}
    {/* <App/> */}
    {/* <Tempapp/>
    <EnergyDashboard/> */}
  </>,document.getElementById("root")
);

