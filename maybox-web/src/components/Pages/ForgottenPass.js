import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(0); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); 

  
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(
          "Password reset email sent successfully. Please check your inbox."
        );
        setTimer(120); 
        setIsButtonDisabled(true); 
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };


  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsButtonDisabled(false); 
    }

    return () => clearInterval(interval); 
  }, [timer]);

  return (
    <div className="flex justify-center items-center mt-28 flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="font-bold font-playtip text-4xl text-center mb-5">
        Forgot Your Password?
      </h2>
      <form
        onSubmit={handleForgotPassword}
        className="flex flex-col justify-center items-center w-full"
      >
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-xs p-5 bg-white rounded-lg font-neueEinstellung self-start">
            <label
              className="block text-gray-700 text-xl font-medium mb-2"
              htmlFor="unique-input"
            >
              Enter your email address
            </label>
            <input
              className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:shadow-lg hover:border-blue-300 bg-gray-100"
              placeholder="Email address here"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
            <button
              type="submit"
              className="submit-button mt-4 flex rounded-xl edit3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={isButtonDisabled}
            >
              {timer > 0 ? `Resend in ${timer}s` : "Send Reset Email"} 
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
