import React, { useEffect } from 'react';

const MyOrders = () => {


  const email = sessionStorage.getItem('email');

  useEffect(() => {
    fetch(`https://ghastly-flesh-65618.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>This is Orders</h2>
    </div>
  )
}

export default MyOrders;