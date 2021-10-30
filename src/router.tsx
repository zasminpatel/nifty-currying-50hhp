import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
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
const Status404Page = Loader(
  lazy(() => import("./pages/front/Status/Status404"))
);
const StatusComingSoonPage = Loader(
  lazy(() => import("./pages/front/Status/StatusComingSoon"))
);

const DashboardPage = Loader(lazy(() => import("./pages/admin/Dashboard")));

const routes = [
  {
    path: "app",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/app/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "about",
        element: <AboutUsPage />
      },
      {
        path: "*",
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
      },
      {
        path: "404",
        element: <Status404Page />
      },
      {
        path: "coming-soon",
        element: <StatusComingSoonPage />
      },
      {
        path: "*",
        element: <Navigate to="/404" replace />
      }
    ]
  }
];
export default routes;
