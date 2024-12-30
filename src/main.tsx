import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { CookiesBannerLayout } from "./components/CookiesBannerLayout.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CookiesBannerLayout />}>
          <Route index element={<div>Home page</div>} />{" "}
          <Route path="/test" element={<div>Test page</div>} />
          <Route path="/info/cookies" element={<div>Cookies info page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
