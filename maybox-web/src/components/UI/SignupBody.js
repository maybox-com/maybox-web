import React, { useState } from "react";
import "../../assets/styles/SignUp.css";
import Image2 from "../../assets/images/Image.jpg";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User created with UID: ', user.uid);

      const userRef = await addDoc(collection(db, 'users'), {
        name: name,
        emailAddress: email,
        key: password,
        address: address,
        cell_number: phoneNumber,
        created: Timestamp.now()
      });
      console.log('User data added to Firestore with ID: ', userRef.id);

      alert('User and preferences added successfully');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Left side: large image */}
      <div className="relative w-1/2 hidden lg:block">
        <img src={Image2} alt="Sign In" className="object-cover w-full h-full" />
      </div>

      {/* Right side: sign-up form */}
      <div className="w-full lg:w-1/2 flex div1 items-center justify-center p-6 lg:p-12 mb-5 mr-40">
        <div className="w-full max-w-xs mb-20 overflow-y-auto h-full">
          <div className="">
            <div className="icon ">
            <svg width="35" height="35" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_231_793)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z" fill="url(#paint0_linear_231_793)"/> </g> <defs> <linearGradient id="paint0_linear_231_793" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color=""/> <stop offset="1" stop-color=""/> </linearGradient> <clipPath id="clip0_231_793"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
            </div>
            <h2 className="mt-10 text-2xl font-medium leading-9 tracking-tight text-gray-900 pb-2">
              Get Started
            </h2>
          </div>
          <p className="text-sm text-gray-500">Sign up to get started with your journey</p>
          {/* Sign-up form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name<span className='customRed edit2'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder='John Doe'
                  autoComplete="name"
                  className="block w-full inputfield rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address<span className='customRed edit2'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='hello@johndoe.com'
                  autoComplete="email"
                  className="block inputfield w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password<span className='customRed edit2'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='***********'
                  autoComplete="current-password"
                  className="block inputfield w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number<span className='customRed edit2'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  placeholder='+1 555 555 5555'
                  autoComplete="tel"
                  className="block w-full inputfield rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
              <div className='mb-5'>
              <label htmlFor="Address" className="block text-sm font-medium leading-6 text-gray-900">
                Address<span className='customRed edit2'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="Address"
                  name="address"
                  type="text"
                  required
                  placeholder='123 Maple Street
Springfield, IL 62701
USA'
                  autoComplete="Name"
                  className="block inputfield w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex text-center w-full bg-customOrangeDark justirfy-center rounded-xl edit3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <button className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link to="/signin" className="text-indigo-600">
              Sign In here
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
