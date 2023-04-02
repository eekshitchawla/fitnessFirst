import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./screens/Navbar/Navbar.js";
import BodyMain from "./screens/BodyMain/BodyMain.js";
import Footer from "./screens/Footer/Footer.js";
import Login from "./screens/Login/Login.js";
import Signup from "./screens/Signup/Signup.js";
import BMI from "./screens/BMI/BMI.js";
import MyCart from "./screens/MyCart/MyCart.js";
import DietPlan from "./screens/DietPlan/DietPlan.js";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BodyMain />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/bmi",
      element: <BMI />,
    },
    {
      path: "/mycart",
      element: <MyCart />,
    },
    {
      path: "/dietPlan",
      element: <DietPlan />,
    },

  ]);


  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
