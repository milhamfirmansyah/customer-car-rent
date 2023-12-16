import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FilterCar from './FilterCar';
import CarList from './CarList';

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarList />
    </>
  );
}

export default page;
