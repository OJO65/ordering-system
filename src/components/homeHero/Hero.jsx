import React from 'react';
import hero from '../../assets/images/banner-img.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container justify-evenly gap-5 md:flex-row flex-col-reverse items-center flex p-2">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-2xl">Welcome to Mbao Zetu</h1>
        <Link to="/shop"><button className="border mt-2 p-2 border-gray-200 shadow-lg rounded-lg font-serif w-40">
          View Furniture
        </button>
        </Link>
      </div>

      <div className="w-[400px] md:w-[550px]">
        <img src={hero} alt="hero.jpg" />
      </div>
    </div>
  );
};

export default Hero;
