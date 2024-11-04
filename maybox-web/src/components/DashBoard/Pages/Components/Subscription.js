import React, { useState } from 'react';
import { CreditCard, CheckCircle, XCircle, X } from 'react-feather';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { ProfileProvider } from '../ProfileContext';

function Subscription() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    { name: 'Basic', price: '$9.99/mo', features: ['10 projects', 'Basic analytics', 'Email support'] },
    { name: 'Pro', price: '$19.99/mo', features: ['Unlimited projects', 'Advanced analytics', '24/7 support'] },
    { name: 'Enterprise', price: '$49.99/mo', features: ['Unlimited projects', 'Custom analytics', 'Dedicated account manager'] },
  ];

  return (
    <ProfileProvider>
    <div className="relative flex h-screen font-neueEinstellung bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6">Subscription</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-[#FBA013] mr-2" />
                <h3 className="text-lg font-semibold">Current Plan: Pro</h3>
              </div>
              <p className="text-gray-600 mb-4">Your subscription renews on July 1, 2023</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FBA013] bg-opacity-10 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Plan Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#FBA013] mr-2" />
                      Unlimited projects
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#FBA013] mr-2" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-[#FBA013] mr-2" />
                      24/7 support
                    </li>
                  </ul>
                </div>
                <div className="bg-[#FBA013] bg-opacity-10 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Payment Information:</h4>
                  <p className="text-gray-600">Card ending in 1234</p>
                  <p className="text-gray-600">Expires 12/2024</p>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button 
                  className="bg-[#FBA013] text-white px-4 py-2 rounded-md hover:bg-[#E69012] transition-colors"
                  onClick={() => setIsModalOpen(true)}
                >
                  Upgrade Plan
                </button>
                <button className="text-red-500 hover:text-red-600 transition-colors">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
                      Upgrade Your Plan
                    </h3>
                    <div className="mt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {plans.map((plan) => (
                          <div key={plan.name} className="border rounded-lg p-4">
                            <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
                            <p className="text-2xl font-bold mb-4">{plan.price}</p>
                            <ul className="space-y-2">
                              {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <CheckCircle className="h-4 w-4 text-[#FBA013] mr-2 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <button className="mt-4 w-full bg-[#FBA013] text-white px-4 py-2 rounded-md hover:bg-[#E69012] transition-colors">
                              Select {plan.name}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#FBA013] text-base font-medium text-white hover:bg-[#E69012] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FBA013] sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </ProfileProvider>
  );
}

export default Subscription;