import { useContext } from "react";
import { useTheme, useToggle } from "../ThemeContext";

function Home() {
  const darkTheme = useTheme();
  const toggleTheme = useToggle();
  function themeStyle(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }
  return (
    <div style={themeStyle(darkTheme)}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      Class Theme
    </div>
  );
}
export default Home;
