import React, { useState } from 'react';
import { Truck, CreditCard, Activity } from 'react-feather';
import Sidebar from '../Pages/Sidebar';
import Header from '../Pages/Header';
import { ProfileProvider } from './ProfileContext';

function Card({ title, value, description, icon: Icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      <div className="text-3xl font-semibold">{value}</div>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
}

function Dashboardpage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ProfileProvider>
    <div className="flex h-screen font-neueEinstellung bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card
    title="Current Subscription"
    value="Standard Plan"
    description="Expires on Oct 15, 2024. Upgrade for more benefits!"
    icon={CreditCard} // Use an appropriate subscription icon
  />
  <Card
    title="Total Deliveries"
    value="12"
    description="Enjoyed your beauty boxes so far!"
    icon={Truck} // Use an appropriate delivery icon
  />
  <Card
    title="Active Deliveries"
    value="1"
    description="Track your package on its way!"
    icon={Activity} // Use an appropriate tracking icon
  />
</div>
          </div>
        </main>
      </div>
    </div>
    </ProfileProvider>
  );
}

export default Dashboardpage;