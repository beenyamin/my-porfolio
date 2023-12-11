import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Project/Project";
import Contact from "../Pages/Contact/Contact";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/project",
          element:<Project></Project>
        },
        {
          path: "/contact",
          element:<Contact></Contact>
        },

    ]
    },
  ]);

  export default routes ;