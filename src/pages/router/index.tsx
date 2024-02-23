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
import LeaderBoard from "../leaderboard"

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
        path: "/leaderboard",
        element: <LeaderBoard />,
    },
]);
const Router = () => {

    const app = initFirebaseApp()
    return (
        <div>
            <ToastContainer />
            <RouterProvider router={router} />
        </div>
    )
}

export default Router