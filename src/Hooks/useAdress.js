import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getLoggedUserAddresses,
  addAddress,
  removeAddress,
} from "../services/address-details-ser";
import { toast } from "react-toastify";

export function useGetAddresses() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["addresses"],
    queryFn: getLoggedUserAddresses,
  });
  return {
    addresses: data?.data.data.data,
    isLoading,
    isError,
  };
}

export function useAddAddress() {
  const queryClient = useQueryClient();
  const { mutate: addNewAddress, isPending } = useMutation({
    mutationFn: ({ name, details, phone, city }) =>
      addAddress({ name, details, phone, city }),
    onSuccess: () => {
      toast.success("Address added successfully!");
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
    onError: () => {
      toast.error("Something went wrong, please try again.");
    },
  });
  return { addNewAddress, isPending };
}

export function useRemoveAddress() {
  const queryClient = useQueryClient();
  const { mutate: deleteAddress } = useMutation({
    mutationFn: ({ id }) => removeAddress({ id }),
    onSuccess: () => {
      toast.success("Address removed!");
      queryClient.invalidateQueries({ queryKey: ["addresses"] });
    },
  });
  return { deleteAddress };
}
