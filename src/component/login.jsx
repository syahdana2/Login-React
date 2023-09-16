import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div>
      <h1 className="form-login">Form Login</h1>
      <div className="login-container">
        <h1 className="login">Tugas Pertemuan ketiga</h1>
        <form>
          <div className="form-group">
            <label className="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Masukkan Username"
            />
          </div>
          <div className="form-group">
            <label className="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan Password"
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <div className="checkbox">
              <input type="checkbox" />Remember Me
          </div>
        </form>
        <button className="cancel-button" type="submit">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Login;
