import { useContext } from "react";
import { ThemeContext } from "../App";

function Home() {
  function themeStyle(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }
  return (
    <div>
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={themeStyle(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}
export default Home;
