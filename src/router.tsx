import { Suspense, lazy } from "react";
import FrontLayout from "./layouts/front";
import AdminLayout from "./layouts/admin";

// import HomePage from "./pages/front/Home";
// import AboutUsPage from "./pages/front/AboutUs";

// import DashboardPage from "./pages/admin/Dashboard";
import SuspenseLoader from "./components/SuspenseLoader";

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);
const HomePage = Loader(lazy(() => import("./pages/front/Home")));
const AboutUsPage = Loader(lazy(() => import("./pages/front/AboutUs")));

const DashboardPage = Loader(lazy(() => import("./pages/admin/Dashboard")));

const routes = [
  {
    path: "app",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "about",
        element: <AboutUsPage />
      }
    ]
  },
  {
    path: "",
    element: <FrontLayout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutUsPage />
      }
    ]
  }
];
export default routes;
