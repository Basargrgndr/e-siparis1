import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import "./Login.css"; // <-- CSS dosyasını import ediyoruz

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("Giriş başarılı! Hoşgeldin, " + userCredential.user.email);
    } catch (err) {
      alert("Giriş başarısız: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome back, sign in to continue.</h2>
      <form onSubmit={handleLogin}>
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Giriş Yap</button>

        <p>
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
