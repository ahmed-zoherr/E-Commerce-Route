import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/category-ser";

export default function useCategories() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  return {
    categories: data?.data.data.data,
    isLoading,
    error,
    isError,
  };
}
