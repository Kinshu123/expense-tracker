// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styled from "styled-components";

// const PaymentForm = () => {
//     const [amount, setAmount] = useState('');
//     const [recipientName, setRecipientName] = useState('');
//     const [reminderDate, setReminderDate] = useState('');
//     const [reminderTime, setReminderTime] = useState('12:00'); // Initialize with a default time value
// // State for reminder time
//     const navigate = useNavigate();
  
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           // Combine reminderDate and reminderTime into separate date and time values
//           const reminderDateValue = new Date(reminderDate);
//           const reminderTimeValue = new Date(`1970-01-01T${reminderTime}`);
      
//           // Adjust reminderTime to India Standard Time (IST)
//           reminderTimeValue.setHours(reminderTimeValue.getHours() + 5); // Add 5 hours to convert from UTC to IST
//           reminderTimeValue.setMinutes(reminderTimeValue.getMinutes() + 30); // Add 30 minutes to adjust for India's 30-minute offset
      
//           // Create ISO strings for the individual date and time values
//           const reminderDateISOString = reminderDateValue.toISOString();
//           const reminderTimeISOString = reminderTimeValue.toISOString();
      
//           await axios.post('http://localhost:3001/api/payments', { amount, recipientName, reminderDate: reminderDateISOString, reminderTime: reminderTimeISOString });
//           navigate('/payment-list');
//         } catch (error) {
//           console.error('Error creating payment:', error);
//         }
//       };
      
  

//     return (
//         <PaymentFormStyled>
//           <div id="payment-form" className="payment-form container">
//             <div className="form">
//               <h2>Add Payment</h2>
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   placeholder="Amount"
//                   required
//                 />
//                 <input
//                   type="text"
//                   value={recipientName}
//                   onChange={(e) => setRecipientName(e.target.value)}
//                   placeholder="Recipient Name"
//                   required
//                 />
//                 <input
//                   type="date"
//                   value={reminderDate}
//                   onChange={(e) => setReminderDate(e.target.value)}
//                   placeholder="Reminder Date"
//                 />
//                 <input
//                   type="time"
//                   value={reminderTime}
//                   onChange={(e) => setReminderTime(e.target.value)}
//                   placeholder="Reminder Time"
//                 />
//                 <button type="submit">Add Payment</button>
//               </form>
//             </div>
//           </div>
//         </PaymentFormStyled>
//       );
//     }      

// const PaymentFormStyled = styled.div`
//   /* Your CSS styles for PaymentForm component */
//   .payment-form.container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//   }

//   .payment-form.container .form {
//     width: 400px;
//     background-color: #fcf6f9;
//     border: 2px solid #fff;
//     border-radius: 20px;
//     padding: 2rem;
//     box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }

//   .payment-form.container .form h2 {
//     margin-bottom: 1rem;
//     text-align: center;
//   }

//   .payment-form.container .form form {
//     display: flex;
//     flex-direction: column;
//   }

//   .payment-form.container .form form input {
//     margin-bottom: 1rem;
//     padding: 0.8rem;
//     border: 2px solid #ccc;
//     border-radius: 5px;
//     font-size: 1rem;
//   }

//   .payment-form.container .form form button {
//     padding: 0.8rem;
//     border: none;
//     border-radius: 5px;
//     background-color: #222260;
//     color: #fff;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }

//   .payment-form.container .form form button:hover {
//     background-color: #1a183b;
//   }
// `;

// export default PaymentForm;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('12:00');
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reminderDateValue = new Date(reminderDate);
      const reminderTimeValue = new Date(`1970-01-01T${reminderTime}`);
      reminderTimeValue.setHours(reminderTimeValue.getHours() + 5);
      reminderTimeValue.setMinutes(reminderTimeValue.getMinutes() + 30);
      const reminderDateISOString = reminderDateValue.toISOString();
      const reminderTimeISOString = reminderTimeValue.toISOString();

      const user = JSON.parse(localStorage.getItem('user'));
      
      await axios.post('http://localhost:3001/api/payments', {
        amount,
        recipientName,
        reminderDate: reminderDateISOString,
        reminderTime: reminderTimeISOString,
        userEmail: user.email
      });
      setShowNotification(true);
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
    navigate('/dashboard/payment');
    // Clear form fields
    setAmount('');
    setRecipientName('');
    setReminderDate('');
    setReminderTime('12:00');
  };
  return (
    <PaymentFormStyled>
      <div className="payment-form container">
        <div className="form">
          <h2>Add Payment</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
            />
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Recipient Name"
              required
            />
            <input
              type="date"
              value={reminderDate}
              onChange={(e) => setReminderDate(e.target.value)}
              placeholder="Reminder Date"
            />
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              placeholder="Reminder Time"
            />
            <button type="submit">Add Payment</button>
          </form>
        </div>
      </div>
      {showNotification && (
        <NotificationPopup>
          <div className="notification-content">
            <p>You will be notified on the specified date and time.</p>
            <button onClick={handleNotificationClose}>Close</button>
          </div>
        </NotificationPopup>
      )}
    </PaymentFormStyled>
  );
};

const PaymentFormStyled = styled.div`
//   /* Your CSS styles for PaymentForm component */
  .payment-form.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .payment-form.container .form {
    width: 400px;
    background-color: #fcf6f9;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .payment-form.container .form h2 {
    margin-bottom: 1rem;
    text-align: center;
  }

  .payment-form.container .form form {
    display: flex;
    flex-direction: column;
  }

  .payment-form.container .form form input {
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .payment-form.container .form form button {
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    background-color: #222260;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .payment-form.container .form form button:hover {
    background-color: #1a183b;
  }
`;


const NotificationPopup = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  z-index: 9999;
  width: 100%;
  max-width: 500px; /* Adjust the maximum width as needed */
`;


export default PaymentForm;
