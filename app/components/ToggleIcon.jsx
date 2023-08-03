"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useThemeContext } from "../context/theme";

const ToggleIcon = () => {
  const { theme, setTheme } = useThemeContext();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      {theme === "dark" ? (
        <MdLightMode
          onClick={toggleTheme}
          className="text-3xl cursor-pointer"
        />
      ) : (
        <MdDarkMode onClick={toggleTheme} className="text-3xl cursor-pointer" />
      )}
    </div>
  );
};

export default ToggleIcon;
