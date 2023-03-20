import React from "react";
import reviews from "./data";
import Testimonal from "./Components/Testimonal";
const App = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-200'>
      <div className='text-center flex justify-center items-center flex-col'>
        <h1 className='text-4xl font-bold tracking-wider'>Our Testimonals</h1>
        <div className='bg-violet-400 h-[4px] w-[150px]  '></div>
        <Testimonal reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
