import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const storedEmail = "";
  const storedPassword = "";

  const generateToken = (): string => {
    return Math.random().toString(36).substr(2); // Random string as "token"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (email === storedEmail && password === storedPassword) {
      const token = generateToken(); // Only generate token on valid login

      // Store token in localStorage
      localStorage.setItem("authToken", token);

      // Redirect user to the protected route
      navigate("/collection");
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email} // Bind to state variable email
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            className="text-black"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password} // Bind to state variable password
            onChange={(e) => setPassword(e.target.value)} // Update state on change
            className="text-black"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignIn;
