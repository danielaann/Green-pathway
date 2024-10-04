import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Register() {

  const history=useNavigate();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  async function submit(e) {
    e.preventDefault();

    try{

      await axios.post("http://localhost:3000/register",{
        name,email,password
      })
      .then(res=>{
        if(res.data=="exists"){
          alert('User alredy exists')
        }
        else if(res.data=="notexists"){
          history("/")
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


  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center' style={{ backgroundImage: 'url(https://c8.alamy.com/comp/2G3W1H8/green-hand-written-text-quote-sign-seamless-pattern-illustration-nature-care-lettering-label-background-for-environment-protection-or-eco-friendly-ca-2G3W1H8.jpg)' }}>
      <MDBCard className='m-5' style={{ maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.92)' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='Name' type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value) }} />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='Email' type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value) }} />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='Password' type='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value) }} />
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={submit}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;

