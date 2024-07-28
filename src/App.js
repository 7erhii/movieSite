// Core
import { useEffect } from "react";

// Style
import "./global.css";

// Components
import RootLayout from "./layout";
import MainScreen from "./components/mainScreen";

function App() {
  useEffect(() => {
    const applyTheme = (theme) => {
      document.body.classList.remove("dark", "light");
      document.body.classList.add(theme);
      localStorage.setItem("react-movie-theme", theme);
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      applyTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    const savedTheme =
      localStorage.getItem("react-movie-theme") ||
      (mediaQuery.matches ? "dark" : "light");
    applyTheme(savedTheme);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  const theme =
    localStorage.getItem("react-movie-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  const isDarkMode = theme === "dark";

  return (
    <div className={isDarkMode ? "text-white" : "text-black"}>
      <RootLayout>
        {/* <h1 dark>Welcome to React Movie App</h1> */}
        <MainScreen />
      </RootLayout>
    </div>
  );
}

export default App;
