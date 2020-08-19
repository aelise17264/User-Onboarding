import React from 'react'

function User({ user }) {
  if (!user) {
    return <h3>Working fetching your information...</h3>
  }

  return (
    <div className='cardContainer'>
       <h2>First Name: {user.name}</h2>
        <h3>Email: {user.email}</h3>
            <h3>Password: {user.password} </h3>
            <h3>Terms and Services: {user.terms} </h3>
        </div>
  
  )
}

export default User