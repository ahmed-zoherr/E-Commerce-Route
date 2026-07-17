import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Checkout from "./Pages/Checkout/Checkout";
import Favourites from "./Pages/Favourites/Favourites";
import WishList from "./Pages/WishList/WishList";
import Orders from "./Pages/Orders/Orders";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Cart from "./Pages/Cart/Cart";
import Signup from "./Pages/Signup/Signup";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import SeacrhProducts from "./Pages/SeacrhProducts/SeacrhProducts";
import Categories from "./Pages/Categories/Categories";
import Brands from "./Pages/Brands/Brands";
import Notfound from "./Pages/Notfound/Notfound";
import { ToastContainer, toast } from "react-toastify";
// import ProductsProvider from "./context/Product.Context";
// import CategoryProvider from "./context/Categories.context";
import AuthProvider from "./context/Auth.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import CartProvider from "./context/Cart.context";
import AccountLayout from "./components/AccountLayout/AccountLayout";
import OfflineScreen from "./components/OfflineScreen/OfflineScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "./../node_modules/@tanstack/react-query-devtools/src/index";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./components/DashBoard/DashBoard";
import AddressDetails from "./components/AddressDetails/AddressDetails";
import AccountDetails from "./components/AccountDetails/AccountDetails";
import CheckoutSkelton from "./components/Skelton/CheckoutSkelton";
import CartSkelton from "./components/Skelton/CartSkelton";
import WishlistSkelton from "./components/Skelton/WishlistSkelton";
import DashboardSkelton from "./components/Skelton/DashboardSkelton";
import OrdersSkelton from "./components/Skelton/OrdersSkelton";
import InfoPage from "./components/InfoPage/InfoPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute skeleton={<WishlistSkelton />}>
              <WishList />
            </ProtectedRoute>
          ),
        },
        {
          path: "order",
          element: (
            <ProtectedRoute skeleton={<OrdersSkelton />}>
              <Orders />
            </ProtectedRoute>
          ),
        },

        {
          path: "login",
          element: <Login />,
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute skeleton={<CheckoutSkelton />}>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "info/:pageName",
          element: <InfoPage />,
        },

        {
          path: "account",
          element: (
            <ProtectedRoute skeleton={<DashboardSkelton />}>
              <AccountLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <DashBoard />,
            },
            {
              path: "addrress",
              element: <AddressDetails />,
            },
            {
              path: "account-details",
              element: <AccountDetails />,
            },
          ],
        },

        {
          path: "cart",
          element: (
            <ProtectedRoute skeleton={<CartSkelton />}>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "signup",
          element: <Signup />,
        },

        {
          //  path:"productsdetails",
          //  ?
          path: "products/:id",
          element: <ProductDetails />,
        },

        {
          path: "*",
          element: <Notfound />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5000,
        gcTime: 10000,
        refetchInterval: 5000,
        refetchIntervalInBackground: false,
        retry: 3,
        retryDelay: 5000,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OfflineScreen>
          <AuthProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </AuthProvider>
        </OfflineScreen>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
