import { apiClient } from "./api-client";

export async function getLoggedUserAddresses() {
  try {
    const options = {
      url: "/addresses",
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function addAddress({ name, details, phone, city }) {
  try {
    const options = {
      url: "/addresses",
      method: "POST",
      data: { name, details, phone, city },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function removeAddress({ id }) {
  try {
    const options = {
      url: `/addresses/${id}`,
      method: "DELETE",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
