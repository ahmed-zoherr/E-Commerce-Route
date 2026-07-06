// useGetCart.js
import { useQuery } from "@tanstack/react-query";
import { getProductsToCart } from "../services/cart-ser";

export function useGetCart() {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cart"],
    queryFn: getProductsToCart,
    // الشرط ده هو اللي هيحل المشكلة:
    enabled: !!token,
  });
  console.log(data);
  console.log("cart raw:", data); // شوف الداتا الخام هنا

  return { cart: data?.data.data, isLoading, isError, token };
}
