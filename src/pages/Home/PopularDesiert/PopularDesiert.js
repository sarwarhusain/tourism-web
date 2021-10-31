import React from 'react';
import { Link } from 'react-router-dom';
import './PopularDesiert.css'
const PopularDesiert = ({ populardesiert }) => {
  // const {consultant} =props;
  const { _id, name, price, img } = populardesiert;
  return (
    <div className="">
      <div className="container mx-auto service pb-3">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">

            <div className="delivery flex flex-wrap-m-4">
              <div className="lg:w-full md:w-1/2 p-3 ">
                <div className="block relative h-48 rounded overflow-hidden">
                  <img alt="" className="object-cover object-center w-full h-full block" src={img} />
                </div>
                <div className="mt-4">

                  <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                  <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinejoin="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg></span>

                  <p className="mt-1">${price}</p>
                </div>
                <Link to={`/item/${_id}`}><button className="text-indigo-500 inline-flex items-center lg:font-bold md:mb-2 lg:mb-0 bg-yellow-400 p-2 rounded-3xl">Place Order
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};




export default PopularDesiert;