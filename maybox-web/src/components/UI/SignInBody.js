import React, { useState } from "react";
import "../../assets/styles/SignIn.css";
import Image from "../../assets/images/Login.png";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast, { Toaster } from "react-hot-toast";
import SigninGoogle from "../Auth/SigninGoogle";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success(`Logged in as ${userCredential.user.email}`);
      console.log("Logged in as:", userCredential.user.email);
    } catch (error) {
      toast.error(" User not found!");
      console.error("Login failed:", error.message);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex maindiv flex-col lg:flex-row min-h-screen overflow-hidden p-10 mt-2">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Image section */}
      <div className="relative img w-full lg:w-1/2 order-1 lg:order-none">
        <img src={Image} alt="Sign In" className="object-cover w-full h-auto p-10" />
      </div>

      {/* Form section */}
      <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 mb-40 order-none lg:order-1"
        ref={formRef}
        variants={formVariants}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
      >
        <div className="w-full max-w-xs">
          <div className="text-center">
            <div className="icon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <h2 className="mt-10 text-2xl font-regular leading-9 tracking-tight text-gray-900">
              Sign In to your account
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address<span className="customRed edit2">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="hello@johndoe.com"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password<span className="customRed edit2">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="***********"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 -1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex bg-customOrangeDark w-full justify-center rounded-xl edit3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <SigninGoogle />
            </div>
          </form>
          <button className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link to="/signup" className="font-bold text-customOrangeDark">
              Sign Up here
            </Link> 
          </button>
           <Link to="/resetpassword" className=" text-customOrangeDark">
            Forgotten password ?
            </Link>
        </div>
      </motion.div>
    </div>
  );
}
