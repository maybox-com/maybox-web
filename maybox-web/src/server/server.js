const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { admin, db } = require('../firebase/firebaseAdmin'); // Ensure this path is correct

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = 'sk_test_74e6de7422e3d37130dfed36a75cd53d682f6b9c';

app.post('/verify-payment', async (req, res) => {
  const { reference } = req.body;

  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${SECRET_KEY}`,
      },
    });

    console.log('Payment verification response:', response.data); // Log response data

    if (response.data.status === 'success') {
      await db.collection('subscriptions').add({
        reference,
        status: response.data.data.status,
        amount: response.data.data.amount,
        customer: response.data.data.customer,
        date: new Date(),
      });

      res.json({ status: 'success', data: response.data.data });
    } else {
      res.json({ status: 'error', message: 'Payment verification failed' });
    }
  } catch (error) {
    console.error('Payment verification error:', error); // Log error details
    res.json({ status: 'error', message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
