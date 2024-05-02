import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") navigate("/about");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center p-[50px]">
      <div className="">
        <h2 className="p-[10px] font-bold text-xl">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="p-[10px]">
            {/* <label htmlFor="email">
                        <div className="">Email</div>
                    </label> */}
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded p-[10px]"
            />
          </div>
          <div className="p-[10px]">
            {/* <label htmlFor="email">
                    <div className="">Password</div>
                    </label> */}
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded p-[10px]"
            />
          </div>
          <button className="bg-green-600 p-[10px] rounded" type="submit">
            Login
          </button>
        </form>
        <p className="p-[20px] font-bold"> Want to Signup?</p>
        <button className="bg-green-600 p-[10px] rounded">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
