import { apiClient } from "./api-client";

export async function AddProductsToCart({ id }) {
  try {
    const options = {
      url: "/cart",
      method: "POST",
      data: {
        productId: id,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function removeProductsFromCart({ id }) {
  try {
    const options = {
      url: `/cart/${id}`,
      method: "DELETE",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function getProductsToCart() {
  try {
    const options = {
      url: "/cart",
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function updateProductsCart({ id, count }) {
  try {
    const options = {
      url: `/cart/${id}`,
      method: "PUT",
      data: {
        count,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
