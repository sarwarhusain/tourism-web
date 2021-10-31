import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const VerifyItem = () => {
  const { verifyId } = useParams();
  const [item, setItem] = useState({})
  useEffect(() => {
    fetch(`https://ghastly-flesh-65618.herokuapp.com//services/${verifyId}`)
      .then(res => res.json())
      .then(date => setItem(date))
  }, [])
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold text-yellow-200">Product Name: {item.name}</h2>
      <h2 className="text-2xl font-bold text-yellow-200">Product id: {verifyId}</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default VerifyItem;