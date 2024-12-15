import React, { useState } from "react";
import "./SignupLogin.css";

function SignUpLogin() {
  const [activeTab, setActiveTab] = useState("login"); // "login" or "signup"

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`tab ${activeTab === "signup" ? "active" : ""}`}
          onClick={() => setActiveTab("signup")}
        >
          Sign Up
        </button>
      </div>

      <div className="form-container">
        {activeTab === "login" ? (
          <form className="form">
            <h2>Login</h2>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        ) : (
          <form className="form">
            <h2>Sign Up</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="form-button">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUpLogin;
