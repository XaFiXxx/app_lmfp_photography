import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import des pages
import Login from "./pages/connections/login/login";
import Register from "./pages/connections/register/register";

// Import du Header
import Header from "./templates/header";

function App() {
  return (
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
  );
}

export default App;
