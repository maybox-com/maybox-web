import { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";
import "../../assets/styles/waitlist.css";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email!");
      return;
    }

    setLoading(true);

    try {
      const q = query(collection(db, "waitlist"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast.error("This email is already on the waitlist!");
        setLoading(false); // Stop loading
        return;
      }

      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: new Date(),
      });

      toast.success("Locked in, stay tuned 🥳");
      setEmail("");
    } catch (error) {
      console.error("Error adding email: ", error);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-[#FCF5EB] container2 p-40 border rounded-xl flex-col font-neueEinstellung mt-10 items-center px-6 gap-6">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-5xl text-center pt-1 font-semibold">Step into the future <br></br>of beauty: <span className="may">maybox</span> + <span className="you">you</span></h2>
      <p className="text-center text-gray-600 ">
        Don't miss out! Join our waitlist and be the first to know about Maybox <br></br>
        drops, exclusive deals, and insider beauty tips—delivered
        right to your inbox.
      </p>
      
      <div className="relative w-full">
        <div className="relative top-60">
        {[...Array(12)].map((_, index) => (
          <svg
            key={index}
            className={`absolute svg left-1`}
            style={{ bottom: `${index * 50}px` }}
            width="60"
            height="40"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_221_10)">
              <path d="M0 0H100C155.228 0 200 44.7715 200 100V200H100C44.7715 200 0 155.228 0 100V0Z" fill="url(#paint0_linear_221_10)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_221_10" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white"/>
              </linearGradient>
              <clipPath id="clip0_221_10">
                <rect width="200" height="200" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        ))}
        </div>
       
        
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
          <input
            type="email"
            className="border border-gray-300 py-2 px-4 rounded-l-lg rounded-r-xl w-64"
            placeholder="johndoe@gmail.com"
            value={email}
            autoComplete="true"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            data-ripple-light="true"
            className={`py-3 px-12 bg-[#FBA013] border rounded-xl mr-5 text-white text-xs font-neueEinstellung hover:opacity-90 transition-all ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Processing" : "Join today →"}
          </button>
        </form>
      </div>
    </div>
  );
}
