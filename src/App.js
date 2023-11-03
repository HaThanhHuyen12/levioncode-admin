import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import HomePage from "./pages/HomePage/index";
import Management from "./pages/Management/index"
import User from "./components/User"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Management" element={<Management />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
