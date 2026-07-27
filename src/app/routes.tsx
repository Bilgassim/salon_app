import { createHashRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Reservation } from "./pages/Reservation";
import { Boutique } from "./pages/Boutique";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "reservation", element: <Reservation /> },
      { path: "boutique", element: <Boutique /> },
      { path: "contact", element: <Contact /> },
      { path: "admin-zara", element: <Admin /> },
    ],
  },
  // Route de secours placée à l'extérieur pour plus de clarté
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
