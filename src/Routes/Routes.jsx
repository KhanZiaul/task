import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import FoodDetails from "../Pages/Home/FoodDetails/FoodDetails";

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
        }
      ]
    },
  ]);

  export default router;