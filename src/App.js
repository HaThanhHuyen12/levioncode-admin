import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import HomePage from "./pages/HomePage/index";
import Management from "./pages/Management/index"
import User from "./components/User"
import { ThemeProvider, createTheme } from '@mui/material';
function App() {
  const defaultThemeMaterial = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={defaultThemeMaterial}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Management" element={<Management />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
