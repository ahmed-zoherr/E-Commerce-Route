import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/Product-ser";

export default function useProducts() {
  const { data, isLoading, error, isError, isFetched } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 5000,
  });
  return {
    products: data?.data.data.data,
    isError,
    error,
    isLoading,
    isFetched,
  };
}
