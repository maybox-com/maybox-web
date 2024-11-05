import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
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
  const navigate = useNavigate(); // Initialize navigate

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
      navigate("/your-next-page"); // Redirect after successful sign-up
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
      navigate("/dashboard"); 
    } catch (e) {
      console.error("Google Sign-In Error: ", e);
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
          {/* Form header */}
          <div className="">
            <div className="icon">
              {/* Your SVG icon here */}
            </div>
            <h2 className="mt-10 text-2xl font-medium leading-9 tracking-tight text-gray-900 pb-2">
              Get Started
            </h2>
          </div>
          <p className="text-sm text-gray-500">
            Sign up to get started with your journey
          </p>

          {/* Sign-up form */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
           
          </form>

          <div className="mt-4">
            <p className="text-center text-sm text-gray-500">Or sign up with</p>
            <button
              onClick={handleGoogleSignup}
              className="flex items-center gap-1 justify-center mt-2 w-full bg-white border border-gray-300 rounded-xl px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-50"
            >
              {/* Google Sign-In button and SVG */}
              Sign up with Google
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link to="/signin" className="text-gray-700 underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
