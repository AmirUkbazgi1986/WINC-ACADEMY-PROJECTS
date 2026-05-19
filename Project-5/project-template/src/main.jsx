import React from "react";
import ReactDOM from "react-dom/client";

import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
import { Contact } from "./pages/Contact";
import { Provider } from "./components/ui/provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <EventsPage />,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider
        router={router}
        fallbackElement={<p>Loading application...</p>}
      />
    </Provider>
  </React.StrictMode>,
);
