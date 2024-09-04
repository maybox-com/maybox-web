import React, { useState } from 'react';
import '../../assets/styles/SignIn.css'; 
import Image from '../../assets/images/Login.png';
import { auth } from '../../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in as:', userCredential.user.email);
    } catch (error) {
      console.error('Login failed:', error.message);
  
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Left side: large image */}
      <div className="relative w-1/2 hidden lg:block">
        <img
          src={Image} 
          alt="Sign In"
          className="object-cover"
        />
      </div>

      {/* Right side: sign-in form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 mb-40">
        <div className="w-full max-w-xs"> {/* Set max width to xs for more compact size */}
          <div className="text-center">
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

            </div>
            <h2 className="mt-10 text-2xl font-regular leading-9 tracking-tight text-gray-900">
              Sign In to your account
            </h2>
          </div>

          {/* Sign-in form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            
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
                Sign in
              </button>
            </div>
          </form>

          <button className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/signup" className="text-indigo-600">Sign Up here</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
