import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('/api/payments-list')
      .then(response => {
        setPayments(response.data);
      })
      .catch(error => {
        console.error('Error fetching payments:', error);
      });
  }, []);

  return (
    <div>
      <h2>Payments</h2>
      <ul>
        {payments.map(payment => (
          <li key={payment._id}>
            Amount: ${payment.amount}, Recipient: {payment.recipientName}, Reminder Date: {payment.reminderDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
