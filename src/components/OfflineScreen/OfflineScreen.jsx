import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSignal,
  faGlobe,
  faRotateRight,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useOnlineStatus } from "../../Hooks/useOnlineStatus";
import MetaData from "../MetaData/MetaData";
export default function OfflineScreen({ children }) {
  const { isOnline } = useOnlineStatus();

  if (isOnline) {
    return children;
  }
  return (
    <>
      <MetaData
        title="You're Offline - Fresh Cart"
        description="It looks like you're offline. Please check your internet connection and try again."
      />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl border border-gray-100 p-8 w-full max-w-sm text-center">
          {/* WiFi Icon */}
          <div className="flex justify-center mb-6 ">
            <div className="relative">
              <FontAwesomeIcon
                icon={faWifi}
                className="text-red-500 text-6xl"
                beatFade
              />
              <FontAwesomeIcon
                icon={faRotateRight}
                spin
                className="absolute -top-1 -right-3 text-red-500 text-xl bg-white rounded-full"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Connection Lost
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Oops! It looks like you've lost your internet connection. Don't
            worry, we'll help you get back online.
          </p>

          {/* Status */}
          <div className="bg-gray-50 rounded-2xl px-4 mb-6 divide-y divide-gray-100">
            <div className="flex items-center justify-between py-2">
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <FontAwesomeIcon icon={faSignal} />
                Network Status:
              </span>
              <span className="text-sm font-medium text-red-500">Offline</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="flex items-center gap-2 text-sm text-gray-400">
                <FontAwesomeIcon icon={faGlobe} />
                Last Checked:
              </span>
              <span className="text-sm font-medium text-gray-600">
                9:46:23 PM
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="w-full py-3.5 bg-green-500 text-white font-semibold rounded-2xl flex items-center justify-center gap-2 mb-6">
            <FontAwesomeIcon icon={faRotateRight} />
            Try Again
          </button>

          {/* Quick Fixes */}
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Quick Fixes:
            </p>
            <ul className="space-y-2.5">
              {[
                { icon: faWifi, text: "Check your WiFi connection" },
                {
                  icon: faLocationArrow,
                  text: "Try moving closer to your router",
                },
                {
                  icon: faRotateRight,
                  text: "Restart your router or mobile data",
                },
                {
                  icon: faPhone,
                  text: "Contact your internet provider if the issue persists",
                },
              ].map((fix, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-500"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 flex-shrink-0">
                    <FontAwesomeIcon icon={fix.icon} className="text-xs" />
                  </span>
                  {fix.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <p className="mt-6 text-xs text-gray-300 flex items-center justify-center gap-1.5">
            <FontAwesomeIcon icon={faRotateRight} />
            Auto-checking connection every 30 seconds
          </p>
        </div>
      </div>
    </>
  );
}
