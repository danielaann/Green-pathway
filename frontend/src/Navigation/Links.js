import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


const Links=()=>{
    <>
    <Link exact path='/'>Home</Link>
    <Link path='/landing'>Start</Link>
    <Link path='/login'>Login</Link>
    <Link path='/register'>Register</Link>
    <Link path='/footprint'>Calculator</Link>
    <Link path='/quiz'>Quiz</Link>
    <Link path='/quiz1'>Quiz1</Link>
    <Link path='/quiz2'>Quiz2</Link>
    <Link path='/quiz3'>Quiz3</Link>
    <Link path='/quiz4'>Quiz4</Link>
    <Link path='/create'>CreatePost</Link>
    <Link path='/post/:id'>SinglePost</Link>
    <Link path='/post'>Post</Link>
    </>
}
export default Links;
