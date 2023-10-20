import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "../PrivateRoute/PrivateRoute";
import AddProduct from "../pages/AddProduct/AddProduct";
import Product from "../pages/Product/Product";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ProductUpdate from "../pages/ProductUpdate/ProductUpdate";


const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
     {
        path:"/",
        element:<Home></Home>
     },
     {
        path:"/login",
        element:<Login></Login>
     },
     {
        path:"/register",
        element:<Register></Register>
     },
     {
        path:"/addProduct",
        element:<PrivateRouter> <AddProduct></AddProduct> </PrivateRouter>
     },
     {
        path:"/product/:id",
        element:<Product></Product>,
        loader: () => fetch('/brand.json')
        
     },
     {
        path:"/productDetails/:id",
        element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
        loader: ({params}) => 
        fetch(`https://automotive-store-server.vercel.app/automotive/${params.id}`)
     },
     {
       path:"/updateProduct/:id",
       element:<PrivateRouter><ProductUpdate></ProductUpdate></PrivateRouter>,
       loader: ({params}) => 
       fetch(`https://automotive-store-server.vercel.app/automotive/${params.id}`)
     },
     {
        path:"/cart",
        element:<PrivateRouter><Cart></Cart></PrivateRouter>,
        loader: () => fetch('https://automotive-store-server.vercel.app/cart')
     }

    ]
}])

export default router;

