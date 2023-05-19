import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Banner from "../Pages/Home/Banner/Banner";
import Home from "../Pages/Home/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
    },
  ]);

export default router;