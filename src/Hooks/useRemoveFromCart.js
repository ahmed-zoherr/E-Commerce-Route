// useRemoveFromCart.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProductsFromCart } from "../services/cart-ser";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export function useRemoveFromCart() {
  const queryClient = useQueryClient();
  const { mutate: removeFromCart } = useMutation({
    mutationFn: async ({ id }) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) return removeProductsFromCart({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return { removeFromCart, removeProductsFromCart };
}
