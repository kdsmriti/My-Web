import "./App.css";
import Header from "./Components/Header";
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";
import React from "react";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Tracking from "./Components/Pages/Tracking";
import Franchise from "./Components/Pages/Franchise";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import Blogs from "./Components/Pages/Blogs";
import Layout from "./Components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Home />
          </div>
        )
      },
      {
        path: "/services",
        element: (
          <div>
            <Services />
          </div>
        )
      },
      {
        path: "/tracking",
        element: (
          <div>
            <Tracking />
          </div>
        )
      },
      {
        path: "/franchise",
        element: (
          <div>
            <Franchise />
          </div>
        )
      },
      {
        path: "/aboutus",
        element: (
          <div>
            <AboutUs />
          </div>
        )
      },
      {
        path: "/contactus",
        element: (
          <div>
            <ContactUs />
          </div>
        )
      },
      {
        path: "/blogs",
        element: (
          <div>
            <Blogs />
          </div>
        )
      }
    ]
  }
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
