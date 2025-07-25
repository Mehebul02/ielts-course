export const fetchProductData = async (lang = "en") => {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch product data");
  return res.json();
};



// export const fetchProductData = async (slug: string, lang = 'en') => {
//   const res = await fetch(
//     `https://api.10minuteschool.com/discovery-service/api/v1/products/${slug}?lang=${lang}`,
//     {
//       headers: {
//         'X-TENMS-SOURCE-PLATFORM': 'web',
//         Accept: 'application/json',
//       },
//       next: {
//         revalidate: 60 * 60 // ISR: every 1 hour
//       }
//     }
//   );
//   if (!res.ok) throw new Error("Failed to fetch product");
//   return res.json();
// };
