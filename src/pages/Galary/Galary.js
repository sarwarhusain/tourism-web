import React from 'react';

const Galary = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl title-font lg:w-1/3 lg:mb-0 mb-4 font-bold text-yellow-500">Food Gallery</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base font-semi-bold ">Food Gallery catering is a local, woman-owned, boutique catering company based in Minneapolis. Our principles have decades of restaurant and catering industry experience and we bring our knowledge, passion, skill, and creativity to every event we have the honor and opportunity to be a part of.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/2927823/pexels-photo-2927823.jpeg?cs=srgb&dl=pexels-andrea-udosic-2927823.jpg&fm=jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/HtVQqGX/image.png" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/km2S18s/image.png" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/Y3yyrZv/image.png" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/Mfnw28z/image.png" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/q1mh7rx/image.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galary;

// https://i.ibb.co/0Z1Q2cp/image.png




