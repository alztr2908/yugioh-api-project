import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();
export const ToggleTheme = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useToggle = () => {
  return useContext(ToggleTheme);
};

export function ThemeContextProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ToggleTheme.Provider value={toggleTheme}>
        {children}
      </ToggleTheme.Provider>
    </ThemeContext.Provider>
  );
}
