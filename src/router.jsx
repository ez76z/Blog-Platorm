import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import Post from "./pages/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add", element: <AddPost /> },
      { path: "/post/:id", element: <Post /> },
    ],
  },
]);
