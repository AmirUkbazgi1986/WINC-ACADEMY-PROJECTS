import React from "react";
import ReactDOM from "react-dom/client";

import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
import { Contact } from "./pages/Contact";
import { Provider } from "./components/ui/provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./layouts.jsx/Root";
import { postListLoader, postLoader } from "./loaders/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <EventPage />,
    loader: postListLoader,
    hydrateFallbackElement: (
      <div style={{ padding: "2rem" }}>Loading page...</div>
    ),

    children: [
      {
        path: "/",
        element: <EventsPage />,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
        loader: postLoader,
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
