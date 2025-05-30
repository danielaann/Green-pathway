import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import img1 from '../Images/ecooo.png';
import Register from './Register';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

function Login(){
  
  const history=useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function submit(e) {
    e.preventDefault();

    try{

      await axios.post("http://localhost:3000/api/users/login",{
        email,password
      })
      .then(res=>{
        if(res.data=="exists"){
          history("/")
        }
        else if(res.data=="notexists"){
          alert("User is not Registered")
        }
      })
      .catch(e=>{
        alert("Wrong details")
        console.log(e);
      })

    }catch(e){
      console.log(e)
    }
    
  }


  const img2="https://static.vecteezy.com/system/resources/previews/028/271/229/non_2x/pair-of-footprints-made-by-green-leaves-eco-friendly-vector.jpg";
    
    return<>
    <section class="vh-100" style={{backgroundImage:"url('https://t4.ftcdn.net/jpg/02/03/46/83/360_F_203468368_hm1ckLwwhUNUviajDwNm3x0tbVKDgTJD.jpg')"}}>
  <div class="container py-5 h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius: "3rem", border:'4px', backgroundColor:'rgba(0, 0, 0, 0.6)'}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src={img1} alt="login form" class="img-fluid" style={{paddingTop:'80px', paddingLeft:'60px',height:'550px'}}/>
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-white">

                <form action='POST'>

                  <div class="d-flex align-items-center mb-3 pb-1">
                  <img src={img2} alt="login form" class="img-fluid" style={{borderRadius:'20%', width:'75px', height:'80px'}}/>
                    <span class="h1 fw-bold mb-0">Green Pathways</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px;"}}>Sign into your account</h5>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="email" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button" onClick={submit}>Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81;"}}>Don't have an account? <a href="./register"style={{color: "#393f81;"}}>Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
}

export default Login;