import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import AllToys from "../Pages/All Toys/AllToys";
import MyToys from "../Pages/My Toys/MyToys";
import AddToy from "../Pages/Add Toy/AddToy";
import Blog from "../Pages/Blog/Blog";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";


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
          path: '/alltoys',
          element:<AllToys/>
        },
        {
          path: '/mytoys',
          element:<MyToys/>
        },
        {
          path: '/addtoy',
          element:<AddToy/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/addtoy',
          element:<AddToy/>
        },
        {
          path: '/login',
          element: <LogIn/>
        },
        {
          path: '/registration',
          element: <Registration/>
        },
        {
            path:'/toydetails/:id',
            element: <ToyDetails/>,
            loader: ({params}) => fetch(`https://toy-cars-server-seven.vercel.app/alltoys/${params.id}`)
        },
      ]
    },
  ]);

export default router;