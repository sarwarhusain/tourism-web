import React from 'react';
import { Link } from 'react-router-dom';

const FixedProducts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gray-100">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/Y8ncHC0/Eq-it-na-pizza-margherita-sep2005-sml.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Chess Pizza Recipie</h1>
            <p className="mb-8 leading-relaxed">Pizza is a dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients</p>
            <div className="flex w-full md:justify-start justify-center items-end">

              <Link to="/login"><button className="inline-flex text-white bg-green-400  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Procced to Order <svg className="w-8 h-8 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg></button></Link>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
            <div className="flex lg:flex-row md:flex-col">

              <button className="inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <span className="ml-4 flex items-start flex-col leading-none">

                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-yellow-100">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/HdS8gnV/photo-1571091718767-18b5b1457add.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">American Recipies</h1>
            <p className="mb-8 leading-relaxed">A hamburger is a food, typically considered a sandwich, consisting of one or more cooked patties—usually ground meat</p>
            <div className="flex w-full md:justify-start justify-center items-end">

              <Link to="/login"><button className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" > Procced to Order <svg className="w-8 h-8  ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg></button></Link>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
            <div className="flex lg:flex-row md:flex-col">
              <button className="inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <span className="ml-4 flex items-start flex-col leading-none">

                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-blue-200">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/0Fxj72T/vegetable-soup-500x375.jpg" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Vagitable Recipie</h1>
            <p className="mb-8 leading-relaxed">Soup is a primarily liquid food, generally served warm or hot, that is made by combining ingredients of meat or vegetables with stock, milk</p>
            <div className="flex w-full md:justify-start justify-center items-end">

              <Link to="/login"><button className="inline-flex text-white bg-green-400  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Procced to Order <svg className="w-8 h-8 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg></button></Link>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
            <div className="flex lg:flex-row md:flex-col">

              <button className="inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <span className="ml-4 flex items-start flex-col leading-none">

                </span>
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default FixedProducts;

