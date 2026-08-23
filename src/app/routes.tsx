import { createHashRouter, Navigate } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Reservation } from "./pages/Reservation";
import { Boutique } from "./pages/Boutique";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { Admin } from "./pages/Admin";

export const router = createHashRouter([
  {
    path: "/admin-zara",
    element: <Admin />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "reservation", element: <Reservation /> },
      { path: "boutique", element: <Boutique /> },
      { path: "contact", element: <Contact /> },
      { path: "legal", element: <Legal /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
