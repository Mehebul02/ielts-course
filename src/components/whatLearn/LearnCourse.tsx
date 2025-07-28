/* eslint-disable @typescript-eslint/no-explicit-any */
import { Data } from '@/types/product';
import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { MdCheck } from 'react-icons/md';

interface LearnCourseProps {
  data: Data;
}

const LearnCourse = ({ data }: LearnCourseProps) => {
  const learnCourseSection = data?.sections?.find(
    (section) => section.type === 'pointers'
  );

  const learn = learnCourseSection?.values || [];

  return (
    <div className='mt-6 lg:mt-4'>
      <h2 className="text-xl font-bold mb-4 text-black">
        {learnCourseSection?.name || 'কোর্সটি করে যা শিখবেন'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 border p-6 rounded-lg bg-white shadow-md">
        {learn.map((item: any) => (
          <div key={item.id} className="grid grid-cols-[20px_1fr] gap-2">
           <MdCheck className="text-[#548af7] mt-1 text-[18px] " />
            <p className="text-sm text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnCourse;
