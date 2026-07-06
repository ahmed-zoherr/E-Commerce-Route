// import { baseURL } from "./../config/index";
import { apiClient } from "./api-client";
export async function getAllCategories() {
  try {
    const options = {
      url: `/categories`,
      method: "GET",
    };
    const response = await apiClient.request(options);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
