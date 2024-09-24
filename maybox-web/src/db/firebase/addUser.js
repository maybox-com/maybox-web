import {React,useState} from 'react';
import { db } from './firebase'
import {collection,addDoc,Timestamp, setDoc, doc} from 'firebase/firestore'



const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = await addDoc(collection(db, 'users'), {
        name,
        email,
        password,
        address,
        phone_number: phoneNumber,
        created: Timestamp.now()
      });

      await setDoc(doc(db, `users/${userRef.id}/preferences`, 'preferenceId'), {
        category: 'wellness',
        preferences: 'example'
      });

      alert('User and preferences added successfully');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }};

  addUser('John Doe', 'john.doe@example.com', 'securepassword123', '+1234567890', '123 Main St');