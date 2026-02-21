import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import AdminRoute from "./AdminRoute";
import BookCourierSpinner from "../components/Shared/BookCourierSpinner";

const Home = lazy(() => import("../pages/News/NewsFeed"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const Login = lazy(() => import("../pages/Login/Login"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const ManageUsers = lazy(() => import("../pages/Dashboard/Admin/ManageUsers"));
const Profile = lazy(() => import("../pages/Dashboard/Common/Profile"));
const Statistics = lazy(() => import("../pages/Dashboard/Common/Statistics"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const MyInventory = lazy(() => import("../pages/Dashboard/Seller/MyInventory"));
const ManageOrders = lazy(
  () => import("../pages/Dashboard/Seller/ManageOrders"),
);
const PaymentSuccess = lazy(() => import("../pages/Payment/PaymentSuccess"));
const SellerRequests = lazy(
  () => import("../pages/Dashboard/Admin/SellerRequests"),
);
const Books = null;
const ManageAllOrders = lazy(
  () => import("../pages/Dashboard/Admin/ManageAllOrders"),
);
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const HelpSupport = lazy(() => import("../pages/HelpSupport/HelpSupport"));
const PrivacyTerms = lazy(() => import("../pages/PrivacyTerms/PrivacyTerms"));
const NewsFeed = lazy(() => import("../pages/News/NewsFeed"));
const NewsDetails = lazy(() => import("../pages/News/NewsDetails"));

const RouteLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <div className="text-center">
      <BookCourierSpinner size={64} />
      <p className="text-gray-600 dark:text-gray-400 font-medium mt-4">
        Loading page...
      </p>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/news/:id",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <NewsDetails />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <HelpSupport />
          </Suspense>
        ),
      },
      {
        path: "/privacy-terms",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <PrivacyTerms />
          </Suspense>
        ),
      },
      {
        path: "/news",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <NewsFeed />
          </Suspense>
        ),
      },
      {
        path: "/news/:id",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <NewsDetails />
          </Suspense>
        ),
      },
      {
        path: "/payment-success",
        element: (
          <Suspense fallback={<RouteLoader />}>
            <PaymentSuccess />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<RouteLoader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<RouteLoader />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Suspense fallback={<RouteLoader />}>
          <DashboardLayout />
        </Suspense>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Suspense fallback={<RouteLoader />}>
              <Statistics />
            </Suspense>
          </PrivateRoute>
        ),
      },
      
      {
        path: "my-inventory",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <Suspense fallback={<RouteLoader />}>
                <MyInventory />
              </Suspense>
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Suspense fallback={<RouteLoader />}>
                <ManageUsers />
              </Suspense>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "seller-requests",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Suspense fallback={<RouteLoader />}>
                <SellerRequests />
              </Suspense>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin-orders",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Suspense fallback={<RouteLoader />}>
                <ManageAllOrders />
              </Suspense>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Suspense fallback={<RouteLoader />}>
              <Profile />
            </Suspense>
          </PrivateRoute>
        ),
      },
      
      {
        path: "manage-orders",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <Suspense fallback={<RouteLoader />}>
                <ManageOrders />
              </Suspense>
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      
    ],
  },
]);
