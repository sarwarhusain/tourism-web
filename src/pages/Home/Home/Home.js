import React from 'react';
import Banner from '../Banner/Banner';
import FixedProducts from '../FixedProducts/FixedProducts';
import PopularDesierts from '../PopularDesierts/PopularDesierts';
import RemainingFood from '../RemainingFood/RemainingFood';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RemainingFood></RemainingFood>
      <PopularDesierts></PopularDesierts>
      <FixedProducts></FixedProducts>
    </div>
  );
};

export default Home;