import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../taj.css"; 

export default function SignInForm({ setIsSignedIn}) {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email === "admin@example.com" && login.password === "1234") {
      setMessage("Signed in successfully!");
      setIsSignedIn(true);
      navigate("/book");
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={login.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
