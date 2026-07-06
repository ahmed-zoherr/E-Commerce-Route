// import { createContext, useEffect, useState } from "react";
// import {
//   AddProductsToCart,
//   getProductsToCart,
//   removeProductsFromCart,
//   updateProductsCart,
// } from "../services/cart-ser";
// import { toast } from "react-toastify";

// export const CartContext = createContext([]);
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);
// export default function CartProvider({ children }) {
//   const [cartInfo, setCartInfo] = useState({
//     data: {
//       products: [],
//     },
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [error, setError] = useState(null);
//   async function handleAddingToCart({ id }) {
//     try {
//       setIsLoading(true);
//       const response = await AddProductsToCart({ id });
//       //   console.log(response);
//       if (response.success) {
//         toast.success(response.data.data.message);
//         setCartInfo(response.data.data);
//         setError(null);
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//       setIsError(true);
//       setError(error);
//     }
//   }
//   async function handleGettingCart() {
//     try {
//       setIsLoading(true);
//       const response = await getProductsToCart();
//       console.log("الرد اللي وصل للـ Context من الـ API:", response); // ده أهم سطر
//       //   console.log(response);
//       if (response.success) {
//         setCartInfo(response.data.data);
//         console.log(cartInfo);
//         setError(null);
//         setIsLoading(false);
//       }
//     } catch (error) {
//       console.log("إيرور في الـ Context:", error);
//       setIsLoading(false);
//       setIsError(true);
//       setError(error);
//     }
//   }
//   async function handleRemovingCart({ id }) {
//     try {
//       const result = await Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       });
//       if (result.isConfirmed) {
//         const response = await removeProductsFromCart({ id });
//         console.log(response);
//         const toastId = toast.loading("we are removing the item....");
//         if (response.success) {
//           toast.dismiss(toastId);
//           setCartInfo(response.data.data);
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   async function handleUpdateCart({ id, count }) {
//     try {
//       const response = await updateProductsCart({ id, count });
//       if (response.success) {
//         setCartInfo(response.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     handleGettingCart();
//   }, []);
//   return (
//     <CartContext.Provider
//       value={{
//         cartInfo,
//         setCartInfo,
//         isLoading,
//         isError,
//         error,
//         handleAddingToCart,
//         handleRemovingCart,
//         handleUpdateCart,
//         reFreshCart: handleGettingCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }
