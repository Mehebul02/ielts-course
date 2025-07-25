/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Data } from '@/types/product';

interface CourseBannerProps {
  data: Data;
}



const CourseFeatures = ({ data }: CourseBannerProps) => {
  const featuresSection = data?.sections?.find(
    (section) => section.type === 'features'
  );

  const features = featuresSection?.values || [];

  return (
    <div className="  rounded-lg">
      <h2 className="text-xl font-bold mb-6 ">{featuresSection?.name}</h2>
      <div className="grid md:grid-cols-2 gap-2 bg-[#111827] rounded-2xl">
        {features.map((feature: any) => (
          <Card key={feature.id} className="bg-[#111827] border-none shadow-none">
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-2">
               
                  <div className="w-10 h-10 rounded-full flex items-center justify-center ">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
              
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{feature.subtitle}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default CourseFeatures



// const CourseFeatures = ({ data }: CourseBannerProps) => {
//   const featuresSection = data?.sections?.find(
//     (section) => section.type === 'features'
//   );

//   const features = featuresSection?.values || [];

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">কোর্সটি যেভাবে সাজানো হয়েছে</h2>
//       <div className="grid md:grid-cols-2 gap-4 bg-[#111827]">
//         {features.map((feature) => (
//           <Card key={feature.id} className="bg-[#111827] border-none">
//             <CardContent className="p-4">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-10 h-10 rounded-full flex items-center justify-center ">
//                   <Image
//                     src={feature.icon}
//                     alt={feature.title}
//                     width={30}
//                     height={30}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <h3 className="font-semibold">{feature.title}</h3>
//               </div>
//               <p className="text-sm text-gray-600">{feature.subtitle}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseFeatures;



// import { Card, CardContent } from "@/components/ui/card"
// import { Play, FileText, BookOpen, Mic } from "lucide-react"