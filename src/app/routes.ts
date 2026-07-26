import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Reservation } from "./pages/Reservation";
import { Boutique } from "./pages/Boutique";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "reservation", Component: Reservation },
      { path: "boutique", Component: Boutique },
      { path: "contact", Component: Contact },
    ],
  },
]);
