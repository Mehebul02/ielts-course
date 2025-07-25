import CourseBanner from "@/components/banner/CourseBanner";
import CourseInstructor from "@/components/CourseInstructor/CourseInstructor";
import { Data } from "@/types/product";

interface CourseBannerProps {
  data: Data;
}

const ProductPage = ({ data }: CourseBannerProps) => {
    return (
        <div>
          <CourseBanner data={data}/>
          <CourseInstructor data={data}/>
        </div>
    );
};

export default ProductPage;