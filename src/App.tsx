import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadImage from "./components/UploadImage";
import UserProfile from "./components/UserProfile";
import DataIntegrityChecks from "./components/DataIntegrityChecks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checks" element={<DataIntegrityChecks />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/" element={<UploadImage />} />
      </Routes>
    </Router>
  );
}

export default App;
