import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfileProvider } from '../components/DashBoard/Pages/ProfileContext';
import Dashboardpage from '../components/DashBoard/Pages/Dashboardpage';
import Personaldetails from '../components/DashBoard/Pages/Components/Personaldetails';
import Subscription from '../components/DashBoard/Pages/Components/Subscription';
import DeliveryDetails from '../components/DashBoard/Pages/Components/Deliverydetails';
import NotFound from '../components/DashBoard/Pages/Components/NotFound';




function DashBoard() {
  return (
    <ProfileProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Dashboardpage />} />
          <Route path="/personaldetails" element={<Personaldetails />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/deliverydetails" element={<DeliveryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    </ProfileProvider>
  );
}

export default DashBoard;