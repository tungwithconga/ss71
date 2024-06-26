import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducers/Bt8Reducer";
import { RootState, AppDispatch } from "../../store/store";

interface Bt8Props {
  onLoginSuccess: () => void;
}

export default function Bt8({ onLoginSuccess }: Bt8Props) {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state: RootState) => state.loginReducer);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password }));
      if (user.isAuthenticated) {
        onLoginSuccess();
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "5px", width: "100%", maxWidth: "320px", margin: "auto", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px", textAlign: "center" }}>Login</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "16px" }} onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label htmlFor="email" style={{ display: "block", fontWeight: "500" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <div>
          <label htmlFor="password" style={{ display: "block", fontWeight: "500" }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
        </div>
        <button
          type="submit"
          style={{ width: "100%", backgroundColor: "#1E90FF", color: "white", padding: "12px", borderRadius: "4px", cursor: "pointer", border: "none", textAlign: "center" }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
