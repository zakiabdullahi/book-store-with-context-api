import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import CreateBookPage from "./pages/CreateBookPage.jsx";
import { BookProvider } from "./Contexts/BookContext.jsx";
import Books from "./pages/Books.jsx";
import EditBookPage from "./pages/EditBookPage.jsx";
import { DarkModeProvider } from "./Contexts/DarkModeContext.jsx";

const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/create-book",
        element: <CreateBookPage />,
      },
      {
        path: "/edit/:id",
        element: <EditBookPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookProvider>
      <DarkModeProvider>
        <RouterProvider router={routerProvider}>
          <App />
        </RouterProvider>
      </DarkModeProvider>
    </BookProvider>
  </React.StrictMode>
);
