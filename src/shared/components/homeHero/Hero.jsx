import React from 'react';
import hero from '../../../assets/images/banner-img.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container flex flex-col-reverse text-center lg:flex-row lg:justify-evenly items-center">
      <div className="">
        <h1 className="font-serif lg:text-2xl text-2xl">Welcome to Mbao Zetu</h1>
        <Link to="/shop">
          <button className="border hover:scale-105 transition-transform ease-in-out bg-[rgba(95,88,50,0.8)] text-white mt-2 p-2 border-gray-200 shadow-lg rounded-lg font-serif w-40">
            View Furniture
          </button>
        </Link>
      </div>

      <div className="lg:w-auto md:w-auto sm:w-auto">
        <img src={hero} alt="hero.jpg" className='w-[600px]'/>
      </div>
    </div>
  );
};

export default Hero;
