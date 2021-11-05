import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import FrontLayout from "./layouts/front";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
import AppLayout from "./layouts/app";
// import HomePage from "./pages/front/Home";
// import AboutUsPage from "./pages/front/AboutUs";

// import DashboardPage from "./pages/admin/Dashboard";
import SuspenseLoader from "./components/SuspenseLoader";

const Loader = (Component) => (props) => (
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);
const LoginPage = Loader(lazy(() => import("./pages/auth/Login")));
const RegisterPage = Loader(lazy(() => import("./pages/auth/Register")));

// const HomePage = Loader(lazy(() => import("./pages/front/Home")));
//const AboutUsPage = Loader(lazy(() => import("./pages/front/AboutUs")));
const HomePage = Loader(
  lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("./pages/front/Home")), 3000);
    });
  })
);
const AboutUsPage = Loader(
  lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("./pages/front/AboutUs")));
    });
  })
);
const Status404Page = Loader(
  lazy(() => import("./pages/front/Status/Status404"))
);
const StatusComingSoonPage = Loader(
  lazy(() => import("./pages/front/Status/StatusComingSoon"))
);
const StatusAdmin404Page = Loader(
  lazy(() => import("./pages/admin/Status/Status404"))
);
const DashboardPage = Loader(lazy(() => import("./pages/admin/Dashboard")));
const SettingPage = Loader(lazy(() => import("./pages/admin/Setting")));
const ProfilePage = Loader(lazy(() => import("./pages/admin/Profile")));
const routes = [
  {
    path: "app",
    element: <AppLayout />,
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
        path: "setting",
        element: <SettingPage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      },
      {
        path: "404",
        element: <StatusAdmin404Page />
      },
      {
        path: "*",
        element: <Navigate to="/app/404" replace />
      }
    ]
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/admin/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "setting",
        element: <SettingPage />
      },
      {
        path: "404",
        element: <StatusAdmin404Page />
      },
      {
        path: "*",
        element: <Navigate to="/admin/404" replace />
      }
    ]
  },
  {
    path: "login",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <LoginPage />
      }
    ]
  },
  {
    path: "register",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <RegisterPage />
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
