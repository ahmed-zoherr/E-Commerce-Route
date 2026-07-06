// useGetUserOrders.js
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import { getUserOrders } from "../services/order-ser";

export function useGetUserOrders() {
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo?.id;

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userOrders", userId],
    queryFn: () => getUserOrders({ userId }),
    enabled: !!userId,
  });

  return {
    orders: orders?.data.data,
    isLoading,
    isError,
  };
}
