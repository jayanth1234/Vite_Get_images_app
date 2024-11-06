import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle">
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" onClick={toggleDarkTheme} />
        ) : (
          <BsFillMoonFill className="toggle-icon" onClick={toggleDarkTheme} />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
