// useUpdateCart.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductsCart } from "../services/cart-ser";

export function useUpdateCart() {
  const queryClient = useQueryClient();
  const { mutate: updateCart, isPending } = useMutation({
    mutationFn: ({ id, count }) => updateProductsCart({ id, count }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { updateCart, isPending };
}
