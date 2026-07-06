import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProductToWishlist,
  getProductToWishlist,
} from "../services/wishlist-ser";

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
