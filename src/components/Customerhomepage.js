import React from 'react'

function Customerhomepage() {
  const userid=localStorage.getItem('userid')
  console.log("userid",userid);
  return (
    <div>
        <h1>Welcome to the Customer Home Page</h1>
    </div>
  )
}

 
export default Customerhomepage
