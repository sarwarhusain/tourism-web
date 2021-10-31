import React, { useEffect, useState } from 'react';
import PopularDesiert from '../PopularDesiert/PopularDesiert';
import './PopularDesierts.css'
const PopularDesierts = () => {
  const [populardesierts, setPopulardesierts] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(rse => rse.json())
      .then(data => setPopulardesierts(data));
  }, [])
  return (
    <div>
      <div class="text-center mb-20">
        <h1 class="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mb-4 text-yellow-600">Popular Desierts</h1>

        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>
      <div className="delivery-container">
        {
          populardesierts.slice(0, 6).map(populardesiert => <PopularDesiert
            key={populardesiert.id}
            populardesiert={populardesiert}
          ></PopularDesiert>)
        }
      </div>
    </div>
  );
};

export default PopularDesierts;