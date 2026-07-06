import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlus,
  faTrash,
  faPhone,
  faCity,
  faHouse,
  faFileLines,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  useGetAddresses,
  useAddAddress,
  useRemoveAddress,
} from "../../Hooks/useAdress";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  details: Yup.string().required("Details are required"),
  phone: Yup.string()
    .matches(/^(\+2)?01[0125][0-9]{8}$/, "Phone number is not valid")
    .required("Phone is required"),
  city: Yup.string().required("City is required"),
});

export default function Addresses() {
  const [showForm, setShowForm] = useState(false);
  const { addresses, isLoading } = useGetAddresses();
  const { addNewAddress, isPending } = useAddAddress();
  const { deleteAddress } = useRemoveAddress();

  const formik = useFormik({
    initialValues: { name: "", details: "", phone: "", city: "" },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      addNewAddress(values, {
        onSuccess: () => {
          resetForm();
          setShowForm(false);
        },
      });
    },
  });

  return (
    <div className="px-4 md:px-6">
      {/* هيدر */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-800">My Addresses</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {addresses?.length ?? 0} saved addresses
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
        >
          <FontAwesomeIcon icon={showForm ? faXmark : faPlus} />
          {showForm ? "Cancel" : "Add Address"}
        </button>
      </div>

      {/* فورم الإضافة */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mb-5">
          <h2 className="text-base font-bold text-gray-800 mb-4">
            New Address
          </h2>
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* الاسم */}
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-1.5">
                <FontAwesomeIcon icon={faHouse} className="text-green-500" />
                Address Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. Home, Work"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 transition-colors"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-xs text-red-500 mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* التليفون */}
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-1.5">
                <FontAwesomeIcon icon={faPhone} className="text-green-500" />
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="01xxxxxxxxx"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 transition-colors"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-xs text-red-500 mt-1">
                  {formik.errors.phone}
                </p>
              )}
            </div>

            {/* المدينة */}
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-1.5">
                <FontAwesomeIcon icon={faCity} className="text-green-500" />
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="e.g. Cairo"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 transition-colors"
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-xs text-red-500 mt-1">
                  {formik.errors.city}
                </p>
              )}
            </div>

            {/* التفاصيل */}
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-1.5">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-green-500"
                />
                Details
              </label>
              <input
                type="text"
                name="details"
                placeholder="Street, building, floor..."
                value={formik.values.details}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-400 transition-colors"
              />
              {formik.touched.details && formik.errors.details && (
                <p className="text-xs text-red-500 mt-1">
                  {formik.errors.details}
                </p>
              )}
            </div>

            {/* زرار السيف */}
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={isPending}
                className="bg-green-500 hover:bg-green-600 disabled:opacity-60 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
              >
                {isPending ? "Saving..." : "Save Address"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* قايمة العناوين */}
      {isLoading && <p className="text-sm text-gray-400">Loading...</p>}

      {!isLoading && addresses?.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 p-10 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center mb-3">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-yellow-400 text-xl"
            />
          </div>
          <h3 className="text-base font-bold text-gray-700 mb-1">
            No addresses yet
          </h3>
          <p className="text-sm text-gray-400">
            Add your first delivery address to get started.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {addresses?.map((address) => (
          <div
            key={address._id}
            className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm flex items-start justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-yellow-500"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  {address.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {address.details}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <FontAwesomeIcon icon={faCity} className="text-green-400" />
                    {address.city}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-green-400"
                    />
                    {address.phone}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => deleteAddress({ id: address._id })}
              className="w-8 h-8 flex items-center justify-center rounded-xl border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all flex-shrink-0"
            >
              <FontAwesomeIcon icon={faTrash} className="text-xs" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
