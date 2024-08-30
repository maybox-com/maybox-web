import React, { useState } from 'react';
import '../assets/styles/SignUp.css'; // Updated import
import Image2 from '../assets/images/Image.jpg';
import { Link } from 'react-router-dom';

export default function Signup() {
  // Component code remains the same
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Left side: large image */}
      <div className="relative w-1/2 hidden lg:block">
        <img
          src={Image2} 
          alt="Sign In"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side: sign-in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 mb-5">
        <div className="w-full max-w-xs mb-20 overflow-y-auto h-full"> {/* Set height and overflow */}
          <div className="text-center">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
              </svg>
            </div>
            <h2 className="mt-10 text-2xl font-regular leading-9 tracking-tight text-gray-900">
              Be a member
            </h2>
          </div>

          {/* Sign-in form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className='mb-5'>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name<span className='customRed edit2'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder='John Doe'
                  autoComplete="Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number<span className='customRed edit2'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="n"
                  type="text"
                  required
                  placeholder='+234709034567'
                  autoComplete="Phone number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>






            <div className='mb-5'>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl edit3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          <button className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to="/signin" className="text-indigo-600">Sign In here</Link>
          </button>
        </div>
      </div>
    </div>
  );
}