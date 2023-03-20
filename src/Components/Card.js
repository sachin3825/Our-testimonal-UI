import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({ reviews }) {
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7em] z-[2] mx-auto'>
        <img
          className='aspect-square rounded-full w-[140px] h-[140px] z-[10]'
          src={reviews.image}
        />
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[8px] z-[-1]'></div>
      </div>
      <div className='text-center mt-7 '>
        <p className=' text-2xl font-bold capitalize leading-10 tracking-wider '>
          {reviews.name}
        </p>
      </div>
      <div className='text-center  text-violet-300 uppercase text-sm'>
        <p>{reviews.job}</p>
      </div>
      <div className='text-violet-400 mx-auto mt-6'>
        <FaQuoteLeft />
      </div>
      <div className='text-center mt-4 text-slate-500'>{reviews.text}</div>
      <div className='text-violet-400 mx-auto mt-6'>
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
