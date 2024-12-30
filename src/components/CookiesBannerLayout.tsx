import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";
import { Link, Outlet } from "react-router";
import { CookiesBanner } from "./CookiesBanner";

export const CookiesBannerLayout = () => {
  const [cookieConsent, setCookieConsent] = useState(() =>
    getLocalStorage("cookie_consent", null)
  );

  useEffect(() => {
    if (cookieConsent === null) return;
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
      ad_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <>
      <div className="flex gap-4 mb-2">
        <Link to="/">Go to home page</Link>
        <Link to="/test">Go to test page</Link>
      </div>
      <Outlet />
      <CookiesBanner
        cookiesAllowed={cookieConsent}
        onAllow={() => setCookieConsent(true)}
        onDecline={() => setCookieConsent(false)}
      />
    </>
  );
};
