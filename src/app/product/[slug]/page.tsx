import { fetchProductData } from "@/lib/api";
import ProductPage from "./ProductPage";

export default async function Product({ params }: { params: { slug: string } }) {
  const data = await fetchProductData(params.slug, "en"); 
  const courseData = data.data; 

  return <ProductPage data={courseData} />;
}
