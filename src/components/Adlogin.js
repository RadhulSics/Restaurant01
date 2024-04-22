import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Adlogin() {
  const navigate=useNavigate()
  const [form,setForm]=useState({
    username:"",
    password: ""
  })

  const HandleChange=(e)=>{
    setForm({...form,[e.target.name]: e.target.value})
  }
  
  const SubmitData=(e)=>{
    e.preventDefault();
    if(form.username==="admin@gmail.com" && form.password==="admin123"){
        alert("login successfully")
        console.log(form);
    navigate('/Admindashboard')
    }
    else{
        alert("invalid username and password")
    }
    
 
  }
  return (
    <div class="adloginmaindiv">
    <div className="admin_login">
      <form onSubmit={SubmitData}>
        <h3>ADMIN LOGIN</h3>
        <table cellPadding={"4px"} cellSpacing={"4px"}>
          <tr>
            <td>Username:</td>
            <td>
              <input
                type="text"
                name='username'
                className="form-control"
                onChange={HandleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                type="password"
                name='password'
                className="form-control"
                onChange={HandleChange}
                required
              />
            </td>
          </tr>
        </table>
        <button className="btn btn-primary">Login</button><br/>
       
      </form>
    </div>
  </div>
  )
}

export default Adlogin