import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles"; // Use MUI's ThemeProvider
import { darkTheme, lightTheme } from "./Theme"; // Custom themes
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  // State to toggle between light and dark themes
  const [isDarkThemeOn, setIsDarkThemeOn] = useState<boolean>(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkThemeOn((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkThemeOn ? darkTheme : lightTheme}>
      <Box
        width="100vw"
        height="100vh"
        bgcolor={isDarkThemeOn ? "grey.900" : "grey.100"}
      >
        <BrowserRouter>
          {/* Header */}
          <Header isDarkThemeOn={isDarkThemeOn} toggleTheme={toggleTheme} />

          {/* Body */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            {/* Add your routes here */}
          </Routes>

          {/* Footer (Optional) */}
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
