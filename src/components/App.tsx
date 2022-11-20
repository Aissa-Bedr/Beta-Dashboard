import React, { FC, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BoolProps } from "../dist/types/app";
import Dashboard from "./app/pages/dashboard/Dashboard";
import Settings from "./app/pages/settings/Settings";

/**
 * @version 1.0
 * @By Aissa Bedr
 * @start 10/24/2022
 * @end undefined
 */

const App: FC = () => {
  const [themeMode, setThemeMode] = useState<BoolProps>(
    JSON.parse(`${localStorage.getItem("themeMode")}`) || false
  );

  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(themeMode));
    if (themeMode) {
      document.body.classList.add("dark");
      document.body.classList.add("bg-darkBlue");
    }
    if (!themeMode) {
      document.body.classList.remove("dark");
      document.body.classList.remove("bg-darkBlue");
    }
  }, [themeMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="settings"
          element={
            <Settings themeMode={themeMode} setThemeMode={setThemeMode} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
