// ProfileContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: ''
  });

  useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
    
        const userDocRef = doc(db, 'users', user.uid); 
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserDetails({
            fullName: userData.fullName || '',
            email: userData.email || user.email, 
            phoneNumber: userData.phoneNumber || '',
            address: userData.address || ''
          });
          setProfilePicture(userData.profilePicture || '');

          
          localStorage.setItem('userDetails', JSON.stringify(userData));
          localStorage.setItem('profilePicture', userData.profilePicture || '');
        }
      } else {
      
        setUserDetails({ fullName: '', email: '', phoneNumber: '', address: '' });
        setProfilePicture(null);
        localStorage.removeItem('userDetails');
        localStorage.removeItem('profilePicture');
      }
    });

    return () => unsubscribe();
  }, []);

  const updateProfilePicture = (newPicture) => {
    setProfilePicture(newPicture);
    localStorage.setItem('profilePicture', newPicture);
    
  };

  const updateUserDetails = (details) => {
    setUserDetails(details);
    localStorage.setItem('userDetails', JSON.stringify(details));
    
  };

  return (
    <ProfileContext.Provider value={{ profilePicture, updateProfilePicture, userDetails, updateUserDetails }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
