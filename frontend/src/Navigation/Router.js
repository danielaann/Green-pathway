import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes} from 'react-router-dom';
import Links from '../Navigation/Links';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Start from '../Pages/LoadIn';
import SelectQuiz from '../quizes/SelectQuiz';
import Quiz from '../quizes/Quiz';
import Quiz2 from '../quizes/Quiz2';
import Quiz3 from '../quizes/Quiz3';
import Quiz4 from '../quizes/Quiz4';
import Calcu from '../component/CarbonFootprint';


const Router=()=>{
    return (<>
    <Links/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/landing' element={<Start/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/footprint' element={<Calcu/>}/>
        <Route path='/quiz' element={<SelectQuiz/>}/>
        <Route path='/quiz1' element={<Quiz/>}/>
        <Route path='/quiz2' element={<Quiz2/>}/>
        <Route path='/quiz3' element={<Quiz3/>}/>
        <Route path='/quiz4' element={<Quiz4/>}/>
    </Routes>
    </> )
}


export default Router;
