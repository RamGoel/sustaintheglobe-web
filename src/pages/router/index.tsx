import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "../login";
import SignupPage from "../signup";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import OnboardingPage from "../onboarding";

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
]);
const Router = () => {

    return (
        <div>
            <ToastContainer />
            <RouterProvider router={router} />
        </div>
    )
}

export default Router