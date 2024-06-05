import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/user/CreateUser";
import Layouts from "./layouts/Layouts";
import ReadUser from "./components/user/ReadUser";
import UpdateUser from "./components/user/UpdateUser";
import About from "./components/user/About";
import Services from "./components/user/Services";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <ReadUser />,
      },
      {
        path: "/addUser",
        element: <CreateUser />,
      },
      {
        path: "/edit/:id",
        element: <UpdateUser />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <NavBar />
      <CreateUser /> */}
    </>
  );
};

export default App;
