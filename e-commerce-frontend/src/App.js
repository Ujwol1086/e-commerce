import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from "./pages/auth/Create";
import Login from "./pages/auth/Login";
import { Toaster } from "react-hot-toast";
import CreateProduct from "./pages/dashboard/product/CreateProduct";
import ListProduct from "./pages/dashboard/product/ListProduct";
import DashboardLayout from "./layout/DashboardLayout";
import UpdateProduct from "./pages/dashboard/product/UpdateProduct";
import Home from "./pages/index";
import SingleProduct from "./pages/product/SingleProduct";
import ListOrder from "./pages/dashboard/order/ListOrder";
import Cart from "./pages/cart";
import MainLayout from "./layout/MainLayout";
import CartProvider from "./context/CartProvider";


function App()
{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/product/:id",
          element: <SingleProduct />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    },
    {
      path: "/auth",
      children: [
        {
          path: "create",
          element: <Create />
        },
        {
          path: "login",
          element: <Login />
        },
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "addProduct",
          element: <CreateProduct />
        },
        {
          path: "listProduct",
          element: <ListProduct />
        },
        {
          path: "updateProduct/:id",
          element: <UpdateProduct />
        },
        {
          path: "listOrder",
          element: <ListOrder />
        }
      ]
    }
  ]);
  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </CartProvider>
    </>
  );
}

export default App;
