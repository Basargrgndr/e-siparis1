import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import "./Register.css"; // <-- CSS dosyasını import ediyoruz

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert("Kayıt başarılı! Kullanıcı: " + userCredential.user.email);
    } catch (err) {
      alert("Kayıt başarısız: " + err.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Create an account</h2>
      <form onSubmit={handleRegister}>
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

        <button type="submit">Kayıt Ol</button>

        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
