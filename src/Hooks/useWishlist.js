import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProductToWishlist,
  getProductToWishlist,
  removeProductFromWishlist,
} from "../services/wishlist-ser";
import { toast } from "react-toastify";

export function useAddWishlist() {
  const queryClient = useQueryClient();

  // سيبنا الاسم mutate زي ما هو من غير تغيير
  const { mutate, isLoading, isError } = useMutation({
    // الفانكشن دي مستنية تستلم الـ id لما اليوزر يدوس على الزرار
    mutationFn: (productId) => {
      // هنا هتشوف الداتا الحقيقية
      return addProductToWishlist({ productId });
    },
    onSuccess: () => {
      console.log("العملية نجحت، والرد من السيرفر هو:", data);
      return queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  return { mutate, isLoading, isError, addProductToWishlist };
}
export function useGetWishlist() {
  const {
    data: wishlist,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["wishlistproducts"],
    queryFn: getProductToWishlist,
  });
  //   console.log(wishlist);
  //   console.log(wishlist?.data.data.data);

  return {
    wishlist: wishlist?.data.data.data,
    isError,
    isLoading,
  };
}

export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();

  const { mutate: removeFromWishlist, isPending } = useMutation({
    mutationFn: removeProductFromWishlist,
    onMutate: () => {
      const toastId = toast.loading("Removing from wishlist...", {
        className: "!bg-white !text-gray-900",
        progressClassName: "!bg-gray-900",
      });
      return { toastId };
    },
    onSuccess: (response, variables, context) => {
      toast.update(context.toastId, {
        render: "Item removed from wishlist",
        type: "default", // استخدمنا default عشان نمنع ظهور الأيقونة الخضراء الافتراضية
        isLoading: false,
        autoClose: 2000,
        className: "!bg-white !text-gray-900 !border !border-gray-200",
        progressClassName: "!bg-gray-900",
      });
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (error, variables, context) => {
      toast.update(context.toastId, {
        render: "Failed to remove item",
        type: "error",
        isLoading: false,
        autoClose: 2000,
        className: "!bg-white !text-gray-900 !border !border-gray-200",
        progressClassName: "!bg-red-500",
      });
    },
  });

  return { removeFromWishlist, isPending };
}
