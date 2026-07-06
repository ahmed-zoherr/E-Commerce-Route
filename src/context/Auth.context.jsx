import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../services/auth-fun";

export const AuthContext = createContext([]);
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token"),
  );
  const [isAuthentected, setIsAuthentected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo")),
  );
  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        const response = await verifyToken();
        console.log("الريسبونس أهو يا ريس:", response);
        console.dir(response);
        console.log(response);
        if (response.success) {
          console.log(response.data.data.decoded);

          setIsLoading(false);
          setIsAuthentected(true);
          setUserInfo(response.data.data.decoded);
          localStorage.setItem(
            "userInfo",
            JSON.stringify(response.data.data.decoded),
          );
        }
      } catch (error) {
        setIsLoading(false);
        // alert("الـ catch اشتغلت اهي يا بطل!");
        console.dir(error);
        console.error("🚨 قفشته غصب عن المتصفح:", error);
        //* دي الطريقة الوحيدة لما الكونسول يهنج كدا
      }
    };
    checkAuth();
  }, [token]);

  function Logout() {
    setToken(null);
    setUserInfo(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    sessionStorage.removeItem("token");
  }
  return (
    <AuthContext.Provider
      value={{ token, setToken, Logout, isAuthentected, userInfo, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
