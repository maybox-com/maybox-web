import React, { useState } from "react";
import "../../assets/styles/SignUp.css";
import Image2 from "../../assets/images/Image.jpg";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created with UID: ", user.uid);

      const userRef = await addDoc(collection(db, "users"), {
        name: name,
        emailAddress: email,
        key: password,
        address: address,
        cell_number: phoneNumber,
        created: Timestamp.now(),
      });
      console.log("User data added to Firestore with ID: ", userRef.id);

      alert("User and preferences added successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google Sign-In successful, user:", user);

      const userRef = await addDoc(collection(db, "users"), {
        name: user.displayName,
        emailAddress: user.email,
        address: "Google Account User",
        created: Timestamp.now(),
      });
      console.log("Google user data added to Firestore with ID: ", userRef.id);

      alert("Google Sign-In successful");
    } catch (e) {
      console.error("Google Sign-In Error: ", e);
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Left side: large image */}
      <div className="relative w-1/2  hidden lg:block">
        <img
          src={Image2}
          alt="Sign In"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side: sign-up form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 mb-5">
        <div className="w-full max-w-xs mb-20 overflow-y-auto h-full">
          <div className="text-center">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
            </div>
            <h2 className="mt-10 text-2xl font-regular leading-9 tracking-tight text-gray-900">
              Be a member
            </h2>
          </div>
          {/* Sign-up form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name<span className="customRed edit2">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number<span className="customRed edit2">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  placeholder="+1 555 555 5555"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="Address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address<span className="customRed edit2">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="Address"
                  name="address"
                  type="text"
                  required
                  placeholder="123 Maple Street
Springfield, IL 62701
USA"
                  autoComplete="Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
             <div class="mt-2">
            <p class="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" class="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" class="text-gray-700 underline"> privacy policy </a>.
            </p>
          </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-xl edit3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-4">
            <p className="text-center text-sm text-gray-500">Or sign up with</p>
            <button
              onClick={handleGoogleSignup}
              className="flex items-center gap-1 justify-center mt-2 w-full bg-white border border-gray-300 rounded-xl px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-50"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                style={{ display: "block", width: "17px", height: "17px" }}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
              Sign up with Google
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to="/signin"
              className="font-semibold leading-6 text-gray-900"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
