// useAddToCart.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddProductsToCart } from "../services/cart-ser";
import { toast } from "react-toastify";

export function useAddToCart() {
  const queryClient = useQueryClient();
  const { mutate: addToCart } = useMutation({
    mutationFn: ({ id }) => AddProductsToCart({ id }),
    onSuccess: (response) => {
      toast.success(response.data.data.message);
      console.log(response);

      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { addToCart };
}
