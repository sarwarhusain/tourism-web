import React from 'react';

const Banner = () => {
  return (
    <div>
      <section className="bg-white body-font mx-40 my-40 bg-opacity-40 lg:w-5/6">

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">On the first:</h1>
            <p className="mb-8 leading-relaxed">Soup noodles, borscht, hodgepodge, cream cheese soup with mushrooms.</p>

            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">On the second:</h1>
            <p className="mb-8 leading-relaxed">Pork chop, eggplant pasta, salmon steak, Thai chicken, baked potatoes, risotto.</p>
            <div className="flex w-full md:justify-start justify-center items-end">

              <h2 className=" text-4xl font-bold pb-1 text-yellow-700">Order Before 15:00am</h2>
            </div>

            <div className="flex lg:flex-row md:flex-col">
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/XYNYYmt/food-1050813-1920-1.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;


