// import { createContext, useEffect, useState } from "react";
// import { getAllCategories } from "../services/category-ser";

// export const CategoryContext = createContext([]);
// export default function CategoryProvider({ children }) {
//   const [categories, setCategories] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   async function fetchCategories() {
//     try {
//       setIsLoading(true);

//       const response = await getAllCategories();
//       console.log(response);
//       if (response.success) {
//         // setCategories(response.data.data.data);
//         setCategories(response.data.data.data);
//         setIsLoading(false);
//       }
//     } catch (error) {
//       setIsLoading(false);
//       setIsError(true);
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchCategories();
//   }, []);
//   return (
//     <CategoryContext.Provider value={{ categories, isLoading, isError }}>
//       {children}
//     </CategoryContext.Provider>
//   );
// }
