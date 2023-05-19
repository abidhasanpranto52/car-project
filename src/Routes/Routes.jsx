import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/login',
          element: <LogIn/>
        }
        ,{
          path: '/registration',
          element: <Registration/>
        }
      ]
    },
  ]);

export default router;