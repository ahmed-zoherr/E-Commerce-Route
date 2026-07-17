import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/Product-ser";

export default function useProducts(page = 1, limit = 8) {
  const { data, isLoading, error, isError, isFetched } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => getAllProducts({ page, limit }),
    staleTime: 5000,
    keepPreviousData: true,
  });

  return {
    products: data?.data.data.data,
    metadata: data?.data.data.metadata,
    isError,
    error,
    isLoading,
    isFetched,
  };
}
