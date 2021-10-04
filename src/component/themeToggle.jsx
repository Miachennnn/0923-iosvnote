import React, { useContext } from "react";
import { folderContext } from "../context/folderContext";

const ThemeToggle = () => {
  const { dark, setDark } = useContext(folderContext);
  const handleClick = () => {
    setDark(dark ? false : true);
  };

  return (
    <div className="switch">
      <input type="checkbox" id="themeToggle" onClick={handleClick} />
      <label htmlFor="themeToggle" />
    </div>
  );
};

export default ThemeToggle;
