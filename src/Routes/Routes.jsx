import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import FoodDetails from "../Pages/Home/FoodDetails/FoodDetails";
import OrderSummary from "../Pages/OrderSummary/OrderSummary";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/foodDetails/:id',
            element:<FoodDetails></FoodDetails>
        },
        {
            path:'orderSummary',
            element:<OrderSummary></OrderSummary>
        }
      ]
    },
  ]);

  export default router;