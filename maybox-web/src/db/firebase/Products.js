// src/components/AddProduct.js
import { db, collection, addDoc, serverTimestamp } from '../firebase';

// Function to add a product to Firestore
const addProduct = async (product) => {
  const { name, description, category, price, stockQuantity } = product;

  if (!name || !description || !category || !price || !stockQuantity) {
    console.error('All fields are required');
    return;
  }

  if (isNaN(price) || isNaN(stockQuantity)) {
    console.error('Price and Stock Quantity must be numbers');
    return;
  }

  try {
    await addDoc(collection(db, 'Products'), {
      name,
      description,
      category,
      price: parseFloat(price),
      stock_quantity: parseInt(stockQuantity, 10),
      created_at: serverTimestamp()
    });
    console.log('Product added successfully');
  } catch (error) {
    console.error('Error adding product: ', error);
  }
};

export default addProduct;
