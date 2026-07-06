import {
  faCcAmex,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faCircleInfo,
  faInfo,
  faLock,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { href, Link, useNavigate } from "react-router";
import * as yup from "yup";
// import { CartContext } from "./../../context/Cart.context";
import { createOrders } from "../../services/payment-ser";
import { toast } from "react-toastify";
import { useGetCart } from "../../Hooks/useGetCart";
import Loading from "../../components/Loading/Loading";
import { useQueryClient } from "@tanstack/react-query";
import CheckoutSkelton from "../../components/Skelton/CheckoutSkelton";

export default function Checkout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { cart, isLoading } = useGetCart();
  console.log(cart);

  const cartId = cart?.cartId;
  const totalCartPrice = cart?.data.totalCartPrice;
  const products = cart?.data.products;
  console.log(cart);

  const validationSchema = yup.object({
    paymentMethod: yup.string().required("paymentMethod is required"),
    shippingAddress: yup.object({
      details: yup.string().required("details is required"),
      phone: yup
        .string()
        .required("phone is required")
        .matches(/^(\+2)?01[0125][0-9]{8}$/, "phone number is not valid"),
      city: yup.string().required("city is required"),
    }),
  });
  async function handleCreatingOrder(values) {
    // console.log(values);
    try {
      const response = await createOrders({
        cartId,
        shippingAddress: values.shippingAddress,
        paymentMethod: values.paymentMethod,
      });
      if (response.success) {
        console.log(response);

        if (response.data.data.session) {
          toast.loading(
            "you will be directly to stripe to complete your payment",
          );
          setTimeout(() => {
            location.href = response.data.data.session.url;
          }, 3000);
          return; // "اقطع" تنفيذ أي حاجة تانية في الفانكشن دي
          // console.log(response.data.session.url);
        } else {
          toast.success("your order is done ");
          queryClient.setQueryData(["cart"], {
            data: {
              products: [],
              totalCartPrice: 0,
            },
          });
          setTimeout(() => {
            navigate("/order");
          }, 3000);
        }
        // setCartInfo({
        //   numOfCartItems: 0,
        //   data: {
        //     products: [],
        //     totalCartPrice: 0,
        //   },
        // });
        // todo دي لما كنا شغالين بالكونتيكست
      }
    } catch (error) {
      console.error("الإيرور الكامل:", error);
      toast.error("Error creating order");
    }
  }
  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handleCreatingOrder,
  });
  if (isLoading) {
    return <CheckoutSkelton />;
  }
  return (
    <>
      <section>
        <div className="container max-w-5xl py-6 px-4">
          <h2 className="font-semibold text-2xl mb-6">Check Out</h2>
          <form onSubmit={formik.handleSubmit} action="">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="payment-method lg:col-span-8">
                <div className="payment-options bg-white p-6 shadow-sm rounded-lg mb-6">
                  <h2 className="text-xl mb-6 font-semibold">Payment Method</h2>

                  <div>
                    <label
                      htmlFor="cod"
                      className={`${formik.values.paymentMethod === "cod" ? "bg-primary-100/50 border-primary-500" : "border-gray-200 bg-white"} rounded-2xl mb-4 border hover:border-primary-600 hover:duration-500 hover:transition-colors py-4 cursor-pointer flex items-center w-full gap-2`}
                    >
                      <input
                        type="radio"
                        name="payment-methodd"
                        value={`cod`}
                        onChange={() => {
                          formik.setFieldValue("paymentMethod", "cod");
                        }}
                        id="cod"
                        checked={formik.values.paymentMethod === "cod"}
                        className="ml-3 size-4 shrink-0"
                      />
                      <div className="w-full px-3 min-w-0">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <FontAwesomeIcon
                              icon={faMoneyBill1Wave}
                              className="text-2xl text-primary-600 shrink-0"
                            />
                            <div className="text-div min-w-0">
                              <h3 className="font-semibold">
                                {" "}
                                cash on delivery
                              </h3>
                              <p className="text-gray-600 text-sm">
                                pay when ypur order arrive
                              </p>
                            </div>
                          </div>
                          <span className="text-primary-600 text-sm sm:text-base whitespace-nowrap">
                            no extra charge
                          </span>
                        </div>
                        {formik.values.paymentMethod === "cod" && (
                          <div className="sm:ml-5 border border-primary-600/50 bg-primary-100/80 rounded-lg flex gap-1 mt-3 items-center p-2">
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="text-primary-600 shrink-0"
                            />
                            <p className="text-primary-600 text-sm">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing.
                            </p>
                          </div>
                        )}
                      </div>
                    </label>
                    <label
                      htmlFor="online"
                      className={`${formik.values.paymentMethod === "online" ? "bg-primary-100/50 border-primary-500" : "border-gray-200 bg-white"} rounded-2xl border hover:border-primary-600 hover:duration-500 hover:transition-colors py-4 cursor-pointer flex items-center w-full gap-2`}
                    >
                      <input
                        type="radio"
                        name="payment-methodd"
                        value={`online`}
                        checked={formik.values.paymentMethod === "online"}
                        onChange={(e) => {
                          formik.setFieldValue("paymentMethod", e.target.value);
                        }}
                        id="online"
                        className="ml-3 size-4 shrink-0"
                      />
                      <div className="w-full px-3 min-w-0">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <FontAwesomeIcon
                              icon={faCreditCard}
                              className="text-primary-600 text-2xl shrink-0"
                            />
                            <div className="text-div min-w-0">
                              <h3 className="font-semibold"> cash online</h3>
                              <p className="text-gray-600 text-sm">
                                pay when ypur order arrive
                              </p>
                            </div>
                          </div>
                          <span className="text-primary-600 text-sm sm:text-base whitespace-nowrap">
                            Recommended
                          </span>
                        </div>
                        {formik.values.paymentMethod === "online" && (
                          <div className="sm:ml-5 border border-blue-600/50 bg-blue-50 rounded-lg flex gap-1 mt-3 items-center p-2">
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="text-blue-600 shrink-0"
                            />
                            <p className="text-blue-600/80 text-sm">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing.
                            </p>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
                <div className="shipping-addres bg-white p-6 shadow-sm rounded-lg">
                  <h2 className="capitalize text-xl font-semibold mb-6">
                    shipping addres
                  </h2>
                  <div className="addres">
                    <label htmlFor="addresDetails" className="flex flex-col">
                      addres details*
                    </label>
                    <textarea
                      className="form-control w-full"
                      name="shippingAddress.details"
                      value={formik.values.shippingAddress.details}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      id="addresDetails"
                      placeholder="enter your full addres details"
                    ></textarea>
                    {formik.errors.shippingAddress?.details &&
                      formik.touched.shippingAddress?.details && (
                        <p className="text-red-500">
                          {formik.errors.shippingAddress?.details}
                        </p>
                      )}
                    <div className="mt-3 flex flex-col sm:flex-row gap-3 *:grow">
                      <div className="phone-num flex flex-col">
                        <label htmlFor="phone">phone Number*</label>
                        <input
                          name="shippingAddress.phone"
                          value={formik.values.shippingAddress.phone}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="tel"
                          placeholder="01064551605"
                          id="phone"
                          className="form-control"
                        />
                        {formik.errors.shippingAddress?.phone &&
                          formik.touched.shippingAddress?.phone && (
                            <p className="text-red-500">
                              {formik.errors.shippingAddress?.phone}
                            </p>
                          )}
                      </div>
                      <div className="city-info flex flex-col">
                        <label htmlFor="city">city*</label>
                        <input
                          name="shippingAddress.city"
                          value={formik.values.shippingAddress.city}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="text"
                          placeholder="sadat city"
                          id="city"
                          className="form-control"
                        />
                        {formik.errors.shippingAddress?.city &&
                          formik.touched.shippingAddress?.city && (
                            <p className="text-red-500">
                              {formik.errors.shippingAddress?.city}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-sammary lg:col-span-4">
                <h2 className="text-2xl font-semibold mb-5">Order Sammary</h2>
                <div className="cart-items max-h-48 p-3 space-y-2.5 overflow-auto border-b border-gray-500/20 pb-3">
                  {products?.map((product) => (
                    <Link
                      to={`/products/${product.product.id}`}
                      key={product._id}
                      className="item flex items-center gap-2"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <img
                          className="w-12 object-cover rounded shrink-0"
                          src={product.product.imageCover}
                          alt=""
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm truncate">
                            {product.product.title}
                          </span>
                          <span className="text-sx text-gray-500">
                            q: {product.count}
                          </span>
                        </div>
                      </div>
                      <span className="ms-auto text-sm shrink-0">
                        {product.price}EGP
                      </span>
                    </Link>
                  ))}
                </div>
                <ul className="*:flex *:justify-between *:items-center py-3.5 space-y-3">
                  <li>
                    <span>subtotal</span>
                    <span>{totalCartPrice}</span>
                  </li>
                  <li>
                    <span>tax</span>
                    <span>{Math.trunc(totalCartPrice * 0.14)} </span>
                  </li>
                  <li>
                    <span>shipping</span>
                    <span>70</span>
                  </li>
                  <li className="font-semibold border-t border-gray-500/20 pt-2.5">
                    <span>Total</span>
                    <span>
                      {Math.trunc(totalCartPrice * 0.14 + 70 + totalCartPrice)}
                    </span>
                  </li>
                </ul>
                <div className="div-btns">
                  <button
                    type="submit"
                    className="btn bg-primary-600 text-white w-full flex justify-center items-center gap-2"
                  >
                    <span>Proced to payment</span>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                  <Link
                    to={`/cart`}
                    className="btn text-gray-600/80 border border-gray-500/30 mt-2 bg-white w-full flex justify-center items-center gap-2"
                  >
                    <FontAwesomeIcon
                      className="text-black"
                      icon={faArrowLeftLong}
                    />
                    <span>previous step</span>
                  </Link>
                </div>
                <div className="last-div py-3">
                  <h3 className="text-gray-500">secure checkout</h3>
                  <p className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon
                      className="text-primary-600"
                      icon={faLock}
                    />
                    your payment information is secure
                  </p>
                  <div className="flex items-center mt-4 gap-2 flex-wrap">
                    <FontAwesomeIcon
                      icon={faCcVisa}
                      className="text-2xl text-blue-700"
                    />
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="text-2xl text-red-500"
                    />
                    <FontAwesomeIcon
                      icon={faCcAmex}
                      className="text-2xl text-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={faCcPaypal}
                      className="text-2xl text-blue-800"
                    />
                    <FontAwesomeIcon
                      icon={faCcApplePay}
                      className="text-2xl text-gray-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
