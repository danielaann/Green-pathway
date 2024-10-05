import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css';
import Calcu from './component/CarbonFootprint.jsx';
// import PhoneSignin from './component/signing.jsx';
import { BrowserRouter} from 'react-router-dom';
import Router from './Navigation/Router.js';
import Quiz from './Pages/Quiz.js';

ReactDOM.render(
  <>
    {/* <BrowserRouter>
      <Router/>
    </BrowserRouter> */}
    
    <Quiz/>
  </>,document.getElementById("root")
);

