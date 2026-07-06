// import { createContext, useEffect, useState } from "react";
// import { getAllProducts } from "../services/Product-ser";
// import { useQuery } from "@tanstack/react-query";
// import { getAllProducts } from "../services/Product-ser";
// const [products, setProducts] = useState([]);
// const [isLoading, setIsLoading] = useState(true);
// const [isError, setIsError] = useState(false);
// const [error, setError] = useState(null);

// async function fetchProducts() {
//   try {
//     setIsLoading(true);
//     const response = await getAllProducts();
//     if (response.success) {
//       console.log(response);

//       setIsLoading(false);
//       setProducts(response.data.data.data);
//     }
//   } catch (error) {
//     setIsError(true);
//     setIsLoading(false);
//     setError(error);
//   }
// }
// useEffect(() => {
//   fetchProducts();
// }, []);

// export const ProductsContext = createContext([]);
// export default function ProductsProvider({ children }) {
//   //   const [featuredProduct, setFeaturedProducts] = useState([]);
//   // todo هنعدل بقي نخليها برودكتس علطول

//   return (
//     <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
//   );
// }
//todo
//? الهدف من الليلة دي ان اجيب مكان واحد بس اعمل في ريكويست لكل المنتجات اي حد بقا عايز اي حاجة ينادي علي الكونتيكست
