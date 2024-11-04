import React, { useState } from 'react';
import { Truck, MapPin, Clock, Package, X } from 'react-feather';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { ProfileProvider } from '../ProfileContext';


function DeliveryDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState('');

  const toggleTrackModal = () => setIsTrackModalOpen(!isTrackModalOpen);
  const toggleAddressModal = () => setIsAddressModalOpen(!isAddressModalOpen);

  return (
    <ProfileProvider>
    <div className="flex h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6">Delivery Details</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Truck className="h-6 w-6 text-[#FBA013] mr-2" />
                <h3 className="text-lg font-semibold">Current Delivery</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Shipping Address:</h4>
                  <div className="flex items-start mb-2">
                    <MapPin className="h-5 w-5 text-[#FBA013] mr-2 mt-1" />
                    <p className="text-gray-600">
                      John Doe<br />
                      123 Main St<br />
                      Anytown, ST 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Estimated Delivery:</h4>
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-[#FBA013] mr-2" />
                    <p className="text-gray-600">June 15, 2023</p>
                  </div>
                  <h4 className="font-semibold mb-2 mt-4">Tracking Number:</h4>
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-[#FBA013] mr-2" />
                    <p className="text-gray-600">1Z999AA1123456789</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Delivery Status:</h4>
                <div className="bg-[#FBA013] bg-opacity-10 text-gray-800 p-3 rounded-md">
                  Your package is in transit and will be delivered soon.
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={toggleTrackModal}
                  className="bg-[#FBA013] text-white px-4 py-2 rounded-md hover:bg-[#E69012] transition-colors"
                >
                  Track Package
                </button>
                <button
                  onClick={toggleAddressModal}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Change Delivery Address
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Track Package Modal */}
        {isTrackModalOpen && (
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tracking Progress</h3>
                  <button onClick={toggleTrackModal} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Delivery Progress</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-[#FBA013] h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <p className="text-gray-600">Estimated arrival: June 15, 2023</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Change Delivery Address Modal */}
        {isAddressModalOpen && (
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Change Delivery Address</h3>
                  <button onClick={toggleAddressModal} className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <form className="p-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <label htmlFor="new-address" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">New Address</label>
                  <input
                    type="text"
                    id="new-address"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Enter new delivery address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                  />
                  <div className="flex justify-end space-x-2 mt-4">
                    <button
                      onClick={toggleAddressModal}
                      type="button"
                      className="text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm px-5 py-2.5"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="text-white bg-[#FBA013] rounded-lg text-sm px-5 py-2.5 hover:bg-[#E69012]"
                    >
                      Save New Address
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </ProfileProvider>
  );
}

export default DeliveryDetails;
