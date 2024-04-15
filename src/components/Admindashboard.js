import React from 'react'

function Admindashboard() {
  return (
    
    
    // <div>
    //     <h3>Welcome To Admin DashBoard </h3>
      <div style={{ display: 'flex', flexDirection: 'column',height:"100rem", width: '200px', backgroundColor: '#f0f0f0'}}>
      <h2>ADMIN</h2>
      <a href="/Adminaddmenu" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>ADD MENU</a>
      <a href="#" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>VIEW MENU</a>
      <a href="#" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>VIEW ORDERS</a>
      <a href="#" style={{ padding: '10px', textDecoration: 'none', color: 'black' }}>USERS</a>
   <div className='main'><h3>Welcome To AdminDashBoard</h3>
    </div>
     </div>
  )
}

export default Admindashboard
