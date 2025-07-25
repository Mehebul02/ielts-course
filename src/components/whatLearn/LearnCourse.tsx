import { Data } from '@/types/product';
import React from 'react';

interface LearnCourseProps {
  data: Data;
}

const LearnCourse = ({ data }: LearnCourseProps) => {
  const learnCourseSection = data?.sections?.find(
    (section) => section.type === 'pointers'
  );

  const learn = learnCourseSection?.values || [];

  // Split data into two columns
  const mid = Math.ceil(learn.length / 2);
  const firstColumn = learn.slice(0, mid);
  const secondColumn = learn.slice(mid);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-black">
        {learnCourseSection?.name || 'কোর্সটি করে যা শিখবেন'}
      </h2>
      <div className="grid md:grid-cols-2 gap-6 border p-6 rounded-lg bg-white shadow-md">
        {/* First Column */}
        <div className="space-y-4">
          {firstColumn.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2"
                style={{ backgroundColor: item.color || '#22c55e' }} // default green
              ></div>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          {secondColumn.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2"
                style={{ backgroundColor: item.color || '#22c55e' }}
              ></div>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnCourse;
