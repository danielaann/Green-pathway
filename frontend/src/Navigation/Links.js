import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


const Links=()=>{
    <>
    <Link exact path='/'>Home</Link>
    <Link exact path='/landing'>Home</Link>
    <Link path='/login'>Login</Link>
    <Link path='/register'>Register</Link>
    </>
}
export default Links;
