import React, { useState } from 'react';
import { db, serverTimestamp } from '../db/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';


const Subs = async (userId, planType, startDate, endDate, status) => {
  try {
    const docRef = await addDoc(collection(db, 'subscriptions'), {
      user_id: userId,
      plan_type: planType,
      start_date: Timestamp.fromDate(new Date(startDate)),
      end_date: Timestamp.fromDate(new Date(endDate)),
      status: status,
      created_at: Timestamp.now()
    });
    console.log('Subscription added with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding subscription: ', e);
  }
};


export default Subs