import {
  faCartShopping,
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import photoreview from "../../assets/Images/review-author.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { sendDataToSignUp } from "../../services/auth-fun";
import { checkPasswordStrength } from "../../utils/validation";

export default function Signup() {
  const [isExistError, setIsExisitError] = useState(null);
  const navigate = useNavigate();
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  // const usernameregex = /^ [a - z0 -9_ -]{ 3, 15}$/;

  // ✅ Correct schema & keys
  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required").email("email is invalid"),
    phone: yup
      .string()
      .required("phone is required")
      .matches(phoneRegex, "phone number is invalid"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        passwordRegex,
        "password must be 8+ chars with upper, lower, number & special",
      ),
    rePassword: yup
      .string()
      .required("re password is required")
      .oneOf([yup.ref("password")], "password should be the same"),
    terms: yup.boolean().oneOf([true], "You must accept terms"),
  });
  async function handleSignup(values) {
    try {
      const response = await sendDataToSignUp(values);
      if (response.success) {
        toast.success("welcome to our e-commerce😘");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      setIsExisitError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  const passwordFeedback = checkPasswordStrength(formik.values.password);

  return (
    <>
      <MetaData
        title="Sign Up - Fresh Cart"
        description="Create a new Fresh Cart account to start shopping fresh groceries and products with ease."
      />
      <main className="min-h-screen flex items-start justify-center p-6 pt-16 bg-gray-50">
        <div className="w-full max-w-2xl">
          {/* الشعار فوق الكارت */}
          <div className="flex items-center justify-center gap-2 mb-6 text-2xl font-bold text-gray-900">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-primary-500"
            />
            FreshCart
          </div>

          <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
            {/* شريط علوي ملون */}
            <div className="h-1.5 bg-primary-500"></div>

            <div className="p-8 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Create your account
                </h2>
                <p className="mt-2 text-gray-500">
                  Start shopping fresh products today.
                </p>
              </div>

              <div className="div-btn flex gap-2">
                <button className="btn flex items-center justify-center gap-3 w-full bg-transparent border border-gray-200 hover:bg-gray-50 transition-colors">
                  <FontAwesomeIcon
                    className="text-xl text-red-500"
                    icon={faGoogle}
                  />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 w-full btn bg-transparent border border-gray-200 hover:bg-gray-50 transition-colors">
                  <FontAwesomeIcon
                    className="text-xl text-blue-500"
                    icon={faFacebook}
                  />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>

              <div className="devide-div mt-6 bg-gray-200 h-px w-full relative">
                <span className="absolute left-1/2 top-1/2 -translate-1/2 bg-white px-4 text-sm text-gray-400">
                  or
                </span>
              </div>

              <form
                className="mt-6 space-y-4"
                action=""
                onSubmit={formik.handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="name flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name*
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="phone flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone*
                    </label>
                    <input
                      className="form-control"
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="email flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs">
                      {formik.errors.email}
                    </p>
                  )}
                  {isExistError ? (
                    <p className="text-red-500 text-xs">{isExistError}</p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="password flex flex-col gap-1.5">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password*
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.password}
                      </p>
                    )}
                    {formik.values.password && (
                      <div className="password-strenth flex items-center gap-2">
                        <div className="bar rounded-lg overflow-hidden bg-gray-200 h-1 w-full">
                          <div
                            className={`progres ${passwordFeedback.width} ${passwordFeedback.background} h-full`}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="rePassword flex flex-col gap-1.5">
                    <label
                      htmlFor="rePassword"
                      className="text-sm font-medium text-gray-700"
                    >
                      Confirm*
                    </label>
                    <input
                      name="rePassword"
                      value={formik.values.rePassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="form-control"
                      type="password"
                      id="Confirm Password"
                    />
                    {formik.touched.rePassword && formik.errors.rePassword && (
                      <p className="text-red-500 text-xs">
                        {formik.errors.rePassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="terms pt-1">
                  <div className="flex items-center gap-2">
                    <input
                      className="form-control accent-primary-500 size-3.5"
                      type="checkbox"
                      name="terms"
                      id="terms"
                      value={formik.values.terms}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree the{" "}
                      <Link
                        className="text-primary-600 font-medium hover:underline"
                        to={`/terms`}
                      >
                        terms of services
                      </Link>
                    </label>
                  </div>
                  {formik.touched.terms && formik.errors.terms && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.terms}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn text-white bg-primary-600 hover:bg-primary-700 flex items-center gap-1.5 mt-2 w-full justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span>Create My Account</span>
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  className="text-primary-600 font-medium hover:underline"
                  to={`/login`}
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
