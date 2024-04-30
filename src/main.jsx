import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Content1 from "./components/contents/content1.jsx";
import Content2 from "./components/contents/content2.jsx";
import Content3 from "./components/contents/content3.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "a",
        element: <Content1 />,
      },
      {
        path: "b",
        element: <Content2 />,
      },
      {
        path: "c",
        element: <Content3 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
