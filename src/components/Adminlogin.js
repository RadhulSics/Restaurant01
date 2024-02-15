import React, { useState } from 'react'

function Adminlogin() {
    const [Form,setForm]=useState({
        Username:"",
       
        Password:""
       
    })
    const[errors,setErrors]=useState({
        passwordmissmatch:"",
    });
    
  
    const HandleClickFunction=(e)=>{
        setForm({...Form,[e.target.name]:e.target.value});
      };
    //   if(e.target.name === "password" || e.target.name === "Confirmpassword"){
    //     setErrors(true);
    //   }
    //   else(
    //     set
    //   )
    
   
      const handleSubmit = (e) => {
        e.preventDefault()
        
        alert("login successfully")

    }
    // if(Form.Password !== Form.ConfirmPassword){
    //     setErrors({
    //         passwordmissmatch:"password do not match",
    //     });
    // return;
    // }
    
  return (
    // <div class=" Adminloginmaindiv ">
    <div class="main1">
        <form onSubmit={handleSubmit}>
       <h1>Adminlogin</h1>
      Username:
      <input type='text'placeholder='enter your username' name='Username' onChange={HandleClickFunction}required></input><br/><br/>
       
      
      Password:
      <input type='password' placeholder='enter your password' name='Password' value={Form.password} onChange={HandleClickFunction}required></input><br/><br/>
      <button type="button" class="btn btn-primary" onClick={handleSubmit}>Login</button>     
      </form>
        
      
    </div>
    // </div>
  )
}

export default Adminlogin

