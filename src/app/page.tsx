import { fetchProductData } from "@/lib/api";
import CoursePage from "@/pages/Courses";

export default async function Home({
  searchParams = {},
}: {
  params?: never;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  try {
    const lang = Array.isArray(searchParams.lang) 
      ? searchParams.lang[0] 
      : searchParams.lang || "en";
    
    const data = await fetchProductData(lang);
    return <CoursePage data={data} />;
    
  } catch (error) {
    console.error("Failed to load course data:", error);
    return <div>Error loading course content</div>;
  }
}