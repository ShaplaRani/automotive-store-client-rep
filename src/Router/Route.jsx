import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "../PrivateRoute/PrivateRoute";
import AddProduct from "../pages/AddProduct/AddProduct";


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
     }

    ]
}])

export default router;
