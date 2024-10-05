import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Routes} from 'react-router-dom';
import Links from '../Navigation/Links';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Start from '../Pages/LoadIn';
// import Category from '../Pages/Category';


const Router=()=>{
    return (<>
    <Links/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/landing' element={<Start/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    </> )
}


export default Router;
