import { apiClient } from "./api-client";

export async function addProductToWishlist({ productId }) {
  try {
    const options = {
      url: `/wishlist`,
      method: "POST",
      data: {
        productId: productId,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function getProductToWishlist() {
  try {
    const options = {
      url: `/wishlist`,
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
