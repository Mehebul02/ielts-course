import React from 'react';
import { Button } from '../ui/button';

const CTA = () => {
    return (
        <div className='bg-white p-4 rounded text-black mt-4'>
            <h1 className='text-3xl font-medium font-sans'>৳1000</h1>

           
      <Button
        className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg text-[18px] lg:w-full mt-4 p-6 cursor-pointer"
        onClick={() => console.log("Enroll clicked")}
      >
        Enroll
      </Button>
    
        </div>
    );
};

export default CTA;