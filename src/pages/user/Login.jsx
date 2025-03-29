import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMesssage] = useState("");
  // const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation("");
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    // console.log(data);
    try {
      const response = await loginUser(data).unwrap();
      console.log(response);
      // destructuring the response
      const { token, user } = response;
      dispatch(setUser({ user }));
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      setMesssage(error?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-16">
      <h2 className="text-2xl text-center font-semibold pt-5">Please Login</h2>
      <form className="space-y-5 max-w-sm mx-auto pt-8" onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          placeholder="Enter your email.."
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
        />
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          placeholder="Enter your password.."
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
        />

        {message && <p className="text-red-500">{message}</p>}
        <button
          disabled={loginLoading}
          className={`w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md ${
            loginLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loginLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="my-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-red-700 underline">
          Register
        </Link>{" "}
        here
      </p>
    </div>
  );
};

export default Login;
