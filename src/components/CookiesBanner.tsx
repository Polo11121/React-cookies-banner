import { useState } from "react";
import { Link } from "react-router";
import { deleteCookie } from "../lib/cookiesHelper";

type CookieBannerProps = {
  onAllow: () => void;
  onDecline: () => void;
  cookiesAllowed: boolean | null;
};

export const CookiesBanner = ({
  onAllow,
  onDecline,
  cookiesAllowed,
}: CookieBannerProps) => {
  const [isOpen, setIsOpen] = useState(cookiesAllowed === null);

  return isOpen ? (
    <div className="my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0  flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4   bg-gray-700 rounded-lg shadow text-white">
      <div className="text-center">
        <Link to="/info/cookies">
          <p>
            We use <span className="font-bold text-sky-400">cookies</span> on
            our site.
          </p>
        </Link>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            deleteCookie("_ga");
            deleteCookie(
              `_ga_${import.meta.env.VITE_GA_MEASUREMENT_ID.split("-")[1]}`
            );
            setIsOpen(false);
            onDecline();
          }}
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
        >
          Decline
        </button>
        <button
          onClick={() => {
            setIsOpen(false);
            onAllow();
          }}
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  ) : (
    <img
      onClick={() => setIsOpen(true)}
      src="/cookie.svg"
      alt=""
      className="w-10 h-10 fixed bottom-5 left-5 cursor-pointer"
    />
  );
};
