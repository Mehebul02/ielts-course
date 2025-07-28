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

