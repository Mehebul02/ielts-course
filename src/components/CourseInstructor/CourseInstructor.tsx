/* eslint-disable @typescript-eslint/no-explicit-any */
import { Data } from '@/types/product';
import Image from 'next/image';
import React from 'react';

interface CourseBannerProps {
  data: Data;
}

const CourseInstructor = ({ data }: CourseBannerProps) => {
  const instructorSection = data?.sections?.find(
    (section) => section.type === 'instructors'
  );

  const instructors = instructorSection?.values || [];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Course Instructor</h2>
      {instructors.map((instructor: any, index:any) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 bg-white rounded-lg border mb-4"
        >
          <Image
            src={instructor?.image}
            alt={instructor?.name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-lg">{instructor?.name}</h3>
            <div
              className="text-sm text-gray-600 space-y-1"
              dangerouslySetInnerHTML={{ __html: instructor?.description }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
