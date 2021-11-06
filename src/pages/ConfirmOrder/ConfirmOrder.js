import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmOrder = () => {
  return (
    <div>
      <h2>Your Order is Confirm</h2>
      <Link to="/home"><button>Go Back</button></Link>
    </div>
  );
};

export default ConfirmOrder;