import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
    <div className='text-2xl'>Dashboard</div>
     <Link to='/login' className='m-2'>
     Login
      </Link>
      <Link to='/signup'>
       signup
     </Link>
    </>

  )
}

export default Dashboard;