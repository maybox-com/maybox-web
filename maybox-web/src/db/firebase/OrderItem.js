import React from 'react'
import {db,collection,addDoc,Timestamp, setDoc, doc} from 'firebase/firestore'


const addOrderItem = async (orderId, productId, quantity, price) => {
  try {
    const orderItem = {
      product_id: productId,
      quantity: parseInt(quantity, 10),
      price: parseFloat(price),
      created_at: serverTimestamp(),
    };

    const orderRef = doc(db, 'Orders', orderId);
    await addDoc(collection(orderRef, 'Order_Items'), orderItem);

    console.log('Order item added successfully');
  } catch (error) {
    console.error('Error adding order item: ', error);
  }
};




export default addOrderItem
