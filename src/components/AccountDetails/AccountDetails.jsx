import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faShield,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

export default function AccountDetails() {
  const { userInfo } = useContext(AuthContext);

  return (
    <div className="px-6">
      {/* هيدر */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">Account Details</h1>
        <p className="text-sm text-gray-400 mt-0.5">
          Manage your personal information
        </p>
      </div>

      {/* البروفايل */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4">
        <div className="flex items-center gap-5 mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-2xl flex-shrink-0">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {userInfo?.name ?? "—"}
            </h2>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-600 capitalize">
              {userInfo?.role ?? "user"}
            </span>
          </div>
        </div>

        {/* الفيلدز */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400">
                <FontAwesomeIcon icon={faUser} className="text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Full Name</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">
                  {userInfo?.name ?? "—"}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-200 transition-all">
              <FontAwesomeIcon icon={faPen} className="text-xs" />
            </button>
          </div>

          {/* <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email Address</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">—</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-200 transition-all">
              <FontAwesomeIcon icon={faPen} className="text-xs" />
            </button>
          </div> */}

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400">
                <FontAwesomeIcon icon={faShield} className="text-sm" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Role</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5 capitalize">
                  {userInfo?.role ?? "—"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
