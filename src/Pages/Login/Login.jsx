import { useContext, useState } from "react";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import loginphoto from "../../assets/Images/login-img.png";
import * as yup from "yup";
// import axios from "axios";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { sendDataToLogin } from "../../services/auth-fun";
import { AuthContext } from "../../context/Auth.context";
import { faTruck } from "@fortawesome/free-regular-svg-icons";
// import { meta } from "@eslint/js";
// import { baseURL } from "../../config";

export default function Login() {
  const { token, setToken } = useContext(AuthContext);
  const [isCorrectData, setisCorrectData] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  // const usernameregex = /^ [a - z0 -9_ -]{ 3, 15}$/;

  // ✅ Correct schema & keys
  const validationSchema = yup.object({
    email: yup.string().required("email is required").email("email is invalid"),

    password: yup.string().required("password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",

      password: "",

      rememberMe: false,
    },
    validationSchema,
    onSubmit: handleSignin,
  });
  //todo فاصل ....
  function HandleCHange(e) {
    setisCorrectData("");
    formik.handleChange(e);
  }
  async function handleSignin(values) {
    try {
      const response = await sendDataToLogin(values);
      // console.log(option);
      if (response.success) {
        console.log(response);
        toast.success("welcome back ");
        setToken(response.data.data.token);
        if (values.rememberMe) {
          localStorage.setItem("token", response.data.data.token);
        } else {
          sessionStorage.setItem("token", response.data.data.token);
        }
      }
      // يعني لو قيمة ال succes ب true
      setTimeout(() => {
        navigate(from);
      }, 3000);
    } catch (error) {
      setisCorrectData(error.message);
      console.dir(error);
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex flex-col items-center justify-start pt-12 md:pt-20 pb-12 px-4">
      {/* الكارت الرئيسي */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            <span className="text-primary-500">Fresh</span>Cart
          </h1>
          <h2 className="text-xl font-bold text-gray-800 mt-4">
            Welcome Back!
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Sign in to continue your fresh shopping experience
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <button className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <FontAwesomeIcon
              icon={faGoogle}
              className="text-red-500 text-base"
            />
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-600 text-base"
            />
            Continue with Facebook
          </button>
        </div>

        <div className="flex items-center gap-3 my-1">
          <hr className="flex-1 border-gray-200" />
          <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">
            Or continue with email
          </span>
          <hr className="flex-1 border-gray-200" />
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 gap-2 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all duration-200 bg-gray-50/50">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-400 text-sm"
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={HandleCHange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                className="flex-1 py-2.5 text-sm outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-0.5">
                *{formik.errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                to="/forgetpassword"
                className="text-sm text-primary-500 font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 gap-2 focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 transition-all duration-200 bg-gray-50/50">
              <FontAwesomeIcon
                icon={faLock}
                className="text-gray-400 text-sm"
              />
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={HandleCHange}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
                className="flex-1 py-2.5 text-sm outline-none bg-transparent text-gray-800 placeholder-gray-400"
              />
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={faEyeSlash} className="text-sm" />
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-0.5">
                *{formik.errors.password}
              </p>
            )}
            {isCorrectData && (
              <p className="text-red-500 text-xs mt-0.5">*{isCorrectData}</p>
            )}
          </div>

          <div className="flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              id="keepSigned"
              name="rememberMe"
              value={formik.values.rememberMe}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-4 h-4 accent-primary-500 cursor-pointer rounded"
            />
            <label
              htmlFor="keepSigned"
              className="text-sm text-gray-600 cursor-pointer select-none"
            >
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg shadow-sm hover:shadow transition-all duration-200 mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          New to FreshCart?{" "}
          <Link
            to="/signup"
            className="text-primary-500 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>

        <hr className="border-gray-100" />

        <div className="flex items-center justify-between text-xs text-gray-400 px-2">
          <span className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faTruck}
              className="text-primary-400 text-sm"
            />
            Free Delivery
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faShieldHalved}
              className="text-primary-400 text-sm"
            />
            Secure Payment
          </span>
          <span className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-primary-400 text-sm"
            />
            24/7 Support
          </span>
        </div>
      </div>
    </div>
  );
}
