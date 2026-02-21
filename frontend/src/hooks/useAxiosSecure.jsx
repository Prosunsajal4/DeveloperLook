import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user, logOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {

      const requestInterceptor = axiosInstance.interceptors.request.use(
        async (config) => {
          try {
            const token = await user.getIdToken();
            config.headers.Authorization = `Bearer ${token}`;
          } catch (error) {
            console.error("Error getting ID token:", error);
          }
          return config;
        }
      );


      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            logOut()
              .then(() => {
                console.log("Logged out successfully.");
              })
              .catch(console.error);
            navigate("/login");
          }
          return Promise.reject(err);
        }
      );


      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, logOut, navigate]);

  return axiosInstance;
};
export default useAxiosSecure;