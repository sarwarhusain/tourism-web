import React, { useEffect, useState } from 'react';
import PopularDesiert from '../PopularDesiert/PopularDesiert';
import './PopularDesierts.css'
const PopularDesierts = () => {
  const [populardesierts, setPopulardesierts] = useState([])
  useEffect(() => {
    fetch('https://ghastly-flesh-65618.herokuapp.com//services')
      .then(rse => rse.json())
      .then(data => setPopulardesierts(data));
  }, [])
  return (
    <div>
      <div className="text-center mb-20">
        <h1 className="lg:text-5xl sm:text-3xl text-5xl font-bold title-font mb-4 text-yellow-600">Popular Desierts</h1>

        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>
      <div className="delivery-container">
        {
          populardesierts.slice(0, 12).map(populardesiert => <PopularDesiert
            key={populardesiert._id}
            populardesiert={populardesiert}
          ></PopularDesiert>)
        }
      </div>
    </div>
  );
};

export default PopularDesierts;