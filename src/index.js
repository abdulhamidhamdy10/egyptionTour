import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App" ;
import AllCairoPage from "./CairoPage/AllCairoPage";
import AllAlexPage from "./AlexPAge/AllAlexPage";
import AllAswanPage from "./AswanPage/AllAswanPage";
import AllLuxorPage from "./LuxorPage/AllLuxorPage";
import AllBookingTravel from "./Bookingtravel/AllBookingTravel";


import AllValidation from "./ValidationPage/AllValidation";
import Table from "./TablePage/Table";
import { CartProvider } from "react-use-cart";
// import Yourbooking from "./YourBooking/Yourbooking";

const router = createBrowserRouter([

  {
    path: "/",
    element:   <App/>,
  },
  {
    path: "/AllCairoPage",
    element: <AllCairoPage/>,
  },
  {
    path: "/AllAlexPage",
    element: <AllAlexPage/>,
  },
  {
    path: "/AllAswanPage",
    element: <AllAswanPage/>,
  },
  {
    path: "/AllLuxorPage",
    element: <AllLuxorPage/>,
  },
  {
    path: "/AllBookingTravel",
    element: <AllBookingTravel/>,
  },
  {
    path: "/Table",
    element: <Table/>,
  },
  {
    path: "/AllValidation",
    element: <AllValidation/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
  <RouterProvider router={router} />
  </CartProvider>
);


