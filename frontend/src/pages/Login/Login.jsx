import { Link, Navigate, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import BookCourierSpinner from "../../components/Shared/BookCourierSpinner";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { saveOrUpdateUser } from "../../utils";
import { useState } from "react";
import {
  FaUserShield,
  FaUserTie,
  FaUser,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useQueryClient } from "@tanstack/react-query";
import ForgotPasswordModal from "../../components/Modal/ForgotPasswordModal";

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const queryClient = useQueryClient();

  const from = location.state || "/";


  const demoCredentials = {
    admin: {
      email: "admin@newshub.com",
      password: "Admin@123",
      icon: FaUserShield,
      label: "Admin",
      color: "from-red-500 to-pink-500",
    },
    seller: {
      email: "seller@newshub.com",
      password: "Seller@123",
      icon: FaUserTie,
      label: "Seller",
      color: "from-amber-500 to-orange-500",
    },
    customer: {
      email: "customer@newshub.com",
      password: "Customer@123",
      icon: FaUser,
      label: "Customer",
      color: "from-emerald-500 to-teal-500",
    },
  };

  if (loading) return <BookCourierSpinner />;
  if (user) return <Navigate to={from} replace={true} />;

  const fillDemoCredentials = (role) => {
    setEmail(demoCredentials[role].email);
    setPassword(demoCredentials[role].password);
    toast.success(`${demoCredentials[role].label} credentials filled!`);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const emailValue = form.email.value;
    const passwordValue = form.password.value;

    try {

      const { user } = await signIn(emailValue, passwordValue);

      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });


      queryClient.invalidateQueries({ queryKey: ["role", user?.email] });

      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };


  const handleGoogleSignIn = async () => {
    try {

      const { user } = await signInWithGoogle();

      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });


      queryClient.invalidateQueries({ queryKey: ["role", user?.email] });

      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error(err?.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex flex-col w-full max-w-md p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl m-4">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📰</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome Back!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Sign in to access your account
          </p>
        </div>

        {}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">
            Quick Demo Login:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(demoCredentials).map(([role, data]) => (
              <button
                key={role}
                onClick={() => fillDemoCredentials(role)}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl bg-gradient-to-br ${data.color} text-white text-xs font-medium hover:shadow-lg hover:scale-105 transition-all duration-200`}
              >
                <data.icon className="text-lg" />
                {data.label}
              </button>
            ))}
          </div>
        </div>

        {}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter Your Email Here"
                className="w-full px-4 py-3 border-2 rounded-xl border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border-2 rounded-xl border-gray-200 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              onClick={() => setShowForgotPasswordModal(true)}
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            {loading ? <BookCourierSpinner size={24} /> : "Sign In"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          <p className="px-4 text-sm text-gray-400">or continue with</p>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center gap-3 w-full py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <FcGoogle size={24} />
          <span className="font-medium text-gray-700 dark:text-gray-200">
            Continue with Google
          </span>
        </button>

        <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            state={from}
            to="/signup"
            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>

      {}
      <ForgotPasswordModal
        isOpen={showForgotPasswordModal}
        onClose={() => setShowForgotPasswordModal(false)}
      />
    </div>
  );
};

export default Login;