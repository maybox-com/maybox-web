import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email!");
      return;
    }

    try {
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: new Date(),
      });

      toast.success("Locked in, stay tuned 🥳");
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error adding email: ", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="flex flex-col font-neueEinstellung mt-10 items-center gap-6">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-4xl font-semibold">Stay in touch</h2>
      <p className="text-center text-gray-600">
        Join our email list to get all the latest{" "}
        <span className="font-bold">maybox</span> news and first access to
        offers right to your inbox
      </p>

      <form onSubmit={handleSubmit} className="flex  items-center">
        <input
          type="email"
          className="border border-gray-300 py-2 px-4 rounded-l-lg w-64"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          data-ripple-light="true"
          className="py-3 px-6  bg-[#FBA013] text-white text-xs font-neueEinstellung hover:opacity-90 transition-all"
        >
          Join today
        </button>
      </form>
    </div>
  );
}
