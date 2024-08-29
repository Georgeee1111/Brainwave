import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "../home/App.jsx";
import LoginPage from "../loginpage/LoginPage.jsx";
import SignUpPage from "../signuppage/SignUpPage.jsx";
import NotFound from "../components/generalComponents/NotFound.jsx";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Display NoutFound page when the URL does not exist */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
