import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { account } from '../apprwriteconfig';
import { MdArrowBack } from "react-icons/md";
import { useAuth } from '../utils/AuthContext';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert("Invalid credentials");
    } else {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);  // Use the login function from AuthContext
      navigate('/');  // Redirect after successful login
    } catch (error) {
      console.error("Login error:", error);
      setError("Email or password is incorrect");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <img src="../img/bkgrd.png" alt="" style={{ height: 650, width: 500 }} />
      </div>
      <div className="text-start">
        <h1 className="text-3xl pt-12">Sign in to yourLIBRARY</h1>
        <p style={{ paddingTop: 10, color: "gray" }}>
          Don't have an account?
          <span className="text-primary" style={{ textDecoration: 'underline' }}>
            <Link to="/signup">Create now</Link>
          </span>
        </p>
        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <br />Email <br />
          <input
            required
            type="email"
            placeholder="example@gmail.com"
            className="border border-slate-500 rounded-md text-sm p-2"
            style={{ width: 350, backgroundColor: '#F7FAFC' }}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          Password <br />
          <input
            required
            type="password"
            className="border border-slate-500 rounded-md text-sm p-2"
            style={{ width: 350, backgroundColor: '#F7FAFC' }}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          /><br />
          <br />
          <input
            type="submit"
            value="Login"
            className="p-2 rounded-lg cursor-pointer hover:bg-primary"
            style={{ width: 350, backgroundColor: "#E1651F" }}
          />
        <div className="flex w-52 p-4 "><Link to='/'>Back
      <MdArrowBack />
        </Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


