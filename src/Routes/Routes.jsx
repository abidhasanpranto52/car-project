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
import PrivateRoute from "./PricvateRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/toydetails/:id",
        element: <PrivateRoute><ToyDetails/></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toydetails/${params.id}`),
      },
      {
        path: "/updatetoy/:id",
        element: <PrivateRoute><UpdateToy/></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toydetails/${params.id}`),
      },
    ],
  },
]);

export default router;
