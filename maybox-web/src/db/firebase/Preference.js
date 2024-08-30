import React, { useState } from 'react';
import { db, serverTimestamp } from '../db/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Preferences = () => {
  const [userId, setUserId] = useState('');
  const [beautyPreferences, setBeautyPreferences] = useState('');
  const [wellnessPreferences, setWellnessPreferences] = useState('');
  const [selfcarePreferences, setSelfcarePreferences] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'preferences'), {
        user_id: userId,
        beauty_preferences: beautyPreferences,
        wellness_preferences: wellnessPreferences,
        selfcare_preferences: selfcarePreferences,
        updated_at: serverTimestamp(),
      });

      alert('Preferences added successfully');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  
};

export default Preferences;
