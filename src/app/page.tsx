import { fetchProductData } from "@/lib/api";
import CoursePage from "@/pages/Courses";



export default async function IELTSCoursePage() {

  const data = await fetchProductData();

  return <CoursePage data={data} />;
}
