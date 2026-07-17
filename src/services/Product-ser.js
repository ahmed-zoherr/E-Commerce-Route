import { apiClient } from "./api-client";
export async function getAllProducts({
  page,
  limit,
  keyword,
  priceGreaterThan,
  priceLessThan,
  sortedBy,
  category,
  brand,
} = {}) {
  try {
    const options = {
      url: `/products?${page ? `page=${page}` : ""}${
        limit ? `&limit=${limit}` : ""
      }${keyword ? `&keyword=${keyword}` : ""}${
        priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""
      }${priceLessThan ? `&price[lte]=${priceLessThan}` : ""}${
        sortedBy ? `&sort=${sortedBy}` : ""
      }${category ? `&category[in]=${category}` : ""}${
        brand ? `&brand=${brand}` : ""
      }`,
      method: "GET",
    };
    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getProductById({ id }) {
  try {
    const options = {
      // ?
      //todo url: `/products/${params.id}`,
      // todo متخيل الجنون اللي عملته ومع ذلك نفع عادي اللعبة لعبة داتا وديستراكتينج
      url: `/products/${id}`,
      method: "GET",
    };
    const response = await apiClient.request(options);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
}
