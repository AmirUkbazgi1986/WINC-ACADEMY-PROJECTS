import React from "react";
import ReactDOM from "react-dom/client";
import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
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

    children: [
      {
        path: "/",
        element: <EventsPage />,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
        loader: postLoader,
        // action: addComment,
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
