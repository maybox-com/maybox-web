import React from 'react'
import Sidebar from '../components/DashBoard/Sidebar'
import Navbar from '../components/DashBoard/Navbar'

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
      <Sidebar/>
      <main className='mt-9'>
        <h2>Welcome, <span className='text-orange-700'>Joe👋</span></h2>
      </main>
    </div>
  )
}

export default Dashboard
