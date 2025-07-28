import ProductDescription from './CourseDescription';
import { Data } from '@/types/product';
import { Star } from 'lucide-react';

interface CourseBannerProps {
  data: Data;
}

const CourseBanner = ({ data }: CourseBannerProps) => {
  return (
    <div className="bg-slate-900 text-white px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
          <div className="w-full">
            <h1 className="text-sm sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              {data?.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">৪৮২ জন ছাত্র-ছাত্রী এই কোর্সে ভর্তি হয়েছে</span>
            </div>
            <ProductDescription html={data?.description ?? ''} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
