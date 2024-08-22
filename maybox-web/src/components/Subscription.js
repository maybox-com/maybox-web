import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { db } from '../firebase/firebase'; // Import db from your firebase config file
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

const Subscription = () => {
  const publicKey = 'pk_test_8a3bca43c99bc647f3d22aeb79bc9ce01a93de42'; // Replace with your Paystack public key
  const amount = 5000 * 100; // Replace with your plan amount in kobo (e.g., 5000 NGN)

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSuccess = async (response) => {
    const { reference } = response;
    console.log('Payment response:', response); // Log payment response

    try {
      // Verify payment on your backend server
      const verificationResponse = await fetch('/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reference }),
      });

      const verificationData = await verificationResponse.json();
      console.log('Payment verification response:', verificationData); // Log verification data

      if (verificationData.status === 'success') {
        // Save subscription details to Firebase
        try {
          await addDoc(collection(db, 'subscriptions'), {
            name,
            email,
            reference,
            date: new Date(),
          });
          alert('Thanks for subscribing!');
        } catch (e) {
          console.error('Error adding document to Firestore: ', e); // Log Firestore error
          alert('Error saving subscription details.');
        }
      } else {
        alert('Payment verification failed.');
      }
    } catch (error) {
      console.error('Error verifying payment: ', error); // Log verification error
      alert('Error verifying payment.');
    }
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: 'Subscribe Now',
    onSuccess: handleSuccess,
    onClose: () => alert('Wait! Don\'t leave :('),
  };

  return (
    <div>
      <h2>Subscribe to Our Service</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <PaystackButton {...componentProps} />
      </form>
    </div>
  );
};

export default Subscription;