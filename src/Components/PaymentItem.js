import React from 'react';
import styled from 'styled-components';

const PaymentItem = ({ id, amount, recipientName, reminderDate, reminderTime, deleteItem }) => {
  return (
    <PaymentItemStyled>
      <div className="payment-item">
        <div className="payment-details">
          <h3>{recipientName}</h3>
          <p>Amount: ${amount}</p>
          <p>Date: {reminderDate}</p>
          <p>Time: {reminderTime}</p>
        </div>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </div>
    </PaymentItemStyled>
  );
};

const PaymentItemStyled = styled.div`
  .payment-item {
    background-color: #fcf6f9;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .payment-details {
    flex: 1;
  }

  button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default PaymentItem;
