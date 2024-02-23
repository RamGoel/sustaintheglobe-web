import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "../login";
import SignupPage from "../signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import OnboardingPage from "../onboarding";
import ProfilePage from "../profile";
import { initFirebaseApp } from "../../utils/firebase";
import FeedPage from "../feed";
import DashboardPage from "../dashboard";
import TaskPage from "../tasks";
import ActionLoader from "../../components/action-loader";
import { useLoaderStore } from "../../store/loader.store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/onboarding",
        element: <OnboardingPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/feed",
        element: <FeedPage />,
    },
    {
        path: "/tasks",
        element: <TaskPage />,
    },
]);
const Router = () => {
    const { loader } = useLoaderStore();
    const app = initFirebaseApp()
    return (
        <div className="w-full md:w-1/3 mx-auto">
            <ToastContainer />
            {loader ? <ActionLoader /> : null}
            <RouterProvider router={router} />
        </div>
    )
}

export default Router