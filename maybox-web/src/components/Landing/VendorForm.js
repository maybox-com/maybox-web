import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from '../Layout/Footer';
import { db } from '../../firebase/firebase'
import toast, { Toaster } from "react-hot-toast";

const VendorForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    productCategory: '',
    productDescription: '',
    partnershipInterest: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await db.collection('vendors').add({
        ...formData,
        timestamp: new Date(),
      });
      toast.success("Application submitted successfully!");
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        website: '',
        productCategory: '',
        productDescription: '',
        partnershipInterest: '',
        additionalComments: '',
      });
    } catch (error) {
      console.error("Error adding document: ", error);
     toast.error("Error submitting form, please try again.");
    }
  };

  return (
    <>
  <Navbar />
<section class="bg-white font-neueEinstellung">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    
<Toaster position="top-center" reverseOrder={false} />
    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="max-w-xl mt-8 lg:max-w-3xl">
        <h1 class="mt-6 text-2xl font-playtip font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Vendors Application
        </h1>

        <p class="mt-4 leading-relaxed text-gray-500">
          At Maybox, we’re passionate about delivering curated beauty experiences. We’re always looking for exciting brands to collaborate with and bring more value to our customers.
        </p>

         <form action="#" class="mt-8 grid grid-cols-6 gap-6">
  <div class="col-span-6">
    <label for="CompanyName" class="block text-sm font-medium text-gray-700">
      Company/Brand/Vendor Name (Required)
    </label>
    <input
      type="text"
      id="CompanyName"
      name="company_name"
      required
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
  </div>

  <div class="col-span-6 sm:col-span-3">
    <label for="ContactPerson" class="block text-sm font-medium text-gray-700">
      Contact Person (Required)
    </label>
    <input
      type="text"
      id="ContactPerson"
      name="contact_person"
      required
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
  </div>

 
  <div class="col-span-6 sm:col-span-3">
    <label for="Email" class="block text-sm font-medium text-gray-700">
      Email Address (Required)
    </label>
    <input
      type="email"
      id="Email"
      name="email"
      required
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
  </div>


  <div class="col-span-6 sm:col-span-3">
    <label for="Phone" class="block text-sm font-medium text-gray-700">
      Phone Number (Optional)
    </label>
    <input
      type="tel"
      id="Phone"
      name="phone"
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
  </div>

  <div class="col-span-6 sm:col-span-3">
    <label for="Website" class="block text-sm font-medium text-gray-700">
      Website or Social Media Links (Optional)
    </label>
    <input
      type="url"
      id="Website"
      name="website"
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    />
  </div>


  <div class="col-span-6">
    <label for="ProductCategory" class="block text-sm font-medium text-gray-700">
      Product Category (Required)
    </label>
    <select
      id="ProductCategory"
      name="product_category"
      required
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    >
      <option value="">Select Category</option>
      <option value="Skincare">Skincare</option>
      <option value="Haircare">Haircare</option>
      <option value="Makeup">Makeup</option>
      <option value="Other">Other</option>
    </select>
  </div>


  <div class="col-span-6">
    <label for="ProductDescription" class="block text-sm font-medium text-gray-700">
      Product Description (Required)
    </label>
    <textarea
      id="ProductDescription"
      name="product_description"
      required
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    ></textarea>
  </div>


  <div class="col-span-6">
    <label for="PartnershipInterest" class="block text-sm font-medium text-gray-700">
      Partnership Interest (Required)
    </label>
    <select
      id="PartnershipInterest"
      name="partnership_interest"
      required
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    >
      <option value="">Select Interest</option>
      <option value="Product Inclusion">Product Inclusion</option>
      <option value="Sponsored Promotion">Sponsored Promotion</option>
      <option value="Exclusive Collaboration">Exclusive Collaboration</option>
    </select>
  </div>


  <div class="col-span-6">
    <label for="AdditionalComments" class="block text-sm font-medium text-gray-700">
      Additional Comments or Questions (Optional)
    </label>
    <textarea
      id="AdditionalComments"
      name="additional_comments"
      class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
    ></textarea>
  </div>


  <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
    <button
      type="submit"
      class="inline-block shrink-0 rounded-md border bg-[#FBA013] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
    >
      Submit
    </button>
  </div>
</form>
      </div>
    </main>
  </div>
</section>
<Footer />
    </>

  );
};

export default VendorForm;
