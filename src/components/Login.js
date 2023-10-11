import { useNavigate, useLocation } from "react-router";
import { useState, useContext } from "react";
//import UseAuth from "./hooks/useAuth";

import axios from "axios";
import useAuth from "./useAuth";

export default function Login () {  
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/linkpage";
  const { auth, setAuth } = useAuth();
  const [name, setName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [error, setError] = useState("");

  const API = axios.create({
    baseURL: "https://dummyjson.com",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", {
        username:name,
        password:password,
      }).then((res) => {
        if (res?.data.firstName) {
         console.log("-jkjkjhhkjh-",res?.data);
          localStorage.setItem("token",res?.data.token)
          window.location.reload();
        } else {
          console.log("incorrect submission");
          setError(res.message);
        }
      });
    } catch (err) {
      if (!err?.response) {
        setError("no server response");
      } else {
        setError("registeration failed");
      }
    }
  };

  return (
    <div>

        <div className="container">
            <h1>Login</h1>
        <div>
  <input type="text" className="input-box" placeholder="Name" aria-label="Name" 
  onChange={(e)=>setName(e.target.value)} value={name} style={{borderColor:"rgba(12, 206, 245, 0.71)"}}/>
</div>

<div style={{marginTop:"1.5rem"}}>
  <input type="text" className="input-box" placeholder="Password" aria-label="Password"
  onChange={(e)=>setPassword(e.target.value)} value={password} style={{borderColor:"rgba(12, 206, 245, 0.71)"}}/>
</div>
      <form 
      
    onSubmit={handleSubmit}>{/*code for login form*/}
      </form>
      <div style={{marginTop:"1.5rem"}}>
      <button style={{backgroundColor:"rgba(12, 206, 245, 0.71)"}} onClick={handleSubmit}>Login</button>
      </div>
      </div>

    </div>
  );
};
