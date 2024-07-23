// src/components/AddOrder.js
import { db, collection, addDoc } from '../firebase';
import { useState } from 'react';

const AddOrder = () => {
    const [order, setOrder] = useState({
        user_id: "user_id",  // Replace with actual user_id
        subscription_id: "subscription_id",  // Replace with actual subscription_id
        order_date: new Date(),
        shipping_date: null,
        delivery_date: null,
        status: 'Pending',
        total_amount: 0.00
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "Orders"), order);
            console.log('Order added successfully');
        } catch (error) {
            console.error('Error adding order: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Add Order</button>
        </form>
    );
};

export default AddOrder;
