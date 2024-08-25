import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext"; // Importez le AuthProvider

// Import des pages
import Login from "./pages/connections/login/login";
import Register from "./pages/connections/register/register";

// Import du Header
import Header from "./templates/header";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Ajoutez le Header ici */}
          <Header />

          {/* Routes pour Login et Register */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
