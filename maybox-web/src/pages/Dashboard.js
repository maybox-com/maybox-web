import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/DashBoard/Sidebar'
import Navbar from '../components/DashBoard/Navbar'
import Dashboardpage from '../components/DashBoard/Pages/Dashboardpage'
import Personaldetails from '../components/DashBoard/Pages/Personaldetails'
import Delivery from '../components/DashBoard/Pages/Delivery'
import Subscriptionpage from '../components/DashBoard/Pages/Subscriptionpage'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="mt-9 ml-64 p-4">
        <Routes>
          <Route path="/dashboardpage" element={<Dashboardpage />} />
          <Route path="/personaldetails" element={<Personaldetails />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/subscriptionpage" element={<Subscriptionpage />} />
        </Routes>
      </main>
    </div>
  )
}

export default Dashboard
