import { useEffect, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    // 1. تركيب المراقبين في مرحلة الـ Mounting
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // 2. الـ Cleanup Function اللي بتشتغل في مرحلة الـ Unmounting
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // * Mounting Phase Only
  return {
    isOnline,
  };
  //todo دا اهم سطر لان القيمة دي اللي انتا محتاج تمررها برا الكاستوم هوك ...ِشبه الفاليو كدا في الكونتيسكت
}
