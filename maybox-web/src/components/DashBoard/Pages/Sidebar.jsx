import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, CreditCard, Truck, X, LogOut } from 'react-feather';

const navItems = [
  { icon: Home, label: "Home", href: "/dashboardpage" },
  { icon: User, label: "Personal Details", href: "/personaldetails" },
  { icon: CreditCard, label: "Subscription", href: "/subscription" },
  { icon: Truck, label: "Delivery Details", href: "/deliverydetails" },
  { icon: LogOut, label: "Sign out", href: "/" },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 font-neueEinstellung bg-white shadow-md transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex font-neueEinstellung items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button
          className="p-1 rounded-md lg:hidden hover:bg-gray-100"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center  px-4 py-2 ${
              item.label === "Sign out" 
                ? "text-red-600  hover:bg-gray-100 hover:text-red-700 mt-10" 
                : "text-gray-600 hover:bg-gray-100  hover:text-gray-800"
            } ${
              location.pathname === item.href ? "bg-gray-100 text-gray-800" : ""
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            <item.icon className="h-5 w-5 mr-2" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;