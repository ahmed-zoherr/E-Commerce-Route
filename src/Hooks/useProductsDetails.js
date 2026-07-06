import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/Product-ser";
// import { data } from "react-router";

// 1. هنا بنستقبل الـ id جوه أوبجكت (Destructuring)
export function useProductDetails({ id }) {
  const {
    data: productDetails,
    isLoading,
    error,
    isError,
  } = useQuery({
    // 2. الـ queryKey بيفضل زي ما هو أو ممكن تحط الـ id جوه أوبجكت برضه
    queryKey: ["productDetails", id],

    // 3. هنا بنصلح الإيرور الأحمر: لازم ندي للـ queryFn دالة بتجيب الداتا
    // بفرض إنك عندك دالة اسمها getProduct مثلاً بتكلم الباك إند
    queryFn: () => getProductById({ id }),
    select: (data) => data.data.data.data,
  });
  console.log(productDetails);

  return { productDetails, isLoading, error, isError };
}
