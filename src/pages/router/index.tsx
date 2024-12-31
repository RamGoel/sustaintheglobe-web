import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "../profile";
import ActionLoader from "../../components/action-loader";
import { useLoaderStore } from "../../store/loader.store";
import HomePage from "../home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);
const Router = () => {
  const { loader } = useLoaderStore();
  return (
    <div className="w-11/12 md:w-1/4 mx-auto">
      <ToastContainer />
      {loader ? <ActionLoader /> : null}
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
