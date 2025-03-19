import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import { Link } from "react-router-dom"; // En üste taşıdık!
import "./App.css";  // CSS dosyasını ekledik!


function App() {
  return (
    <Router>
      <div>
        <h1>e-sipariş</h1>

        <Link to="/login">
          <button>Giriş Yap</button>
        </Link>

        <Link to="/register">
          <button>Kayıt Ol</button>
        </Link>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
