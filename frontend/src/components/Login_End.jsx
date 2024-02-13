import React from "react";
import "../css/Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Login_End(props) {
  const user = props.user;
  const eimg = props.eimg;
  const userimg = props.userimg;
  const passimg = props.passimg;
  const mainimg = props.image;
  var direct = "";
  if (user == "Company Name") {
    direct = "company_home";
  } else {
    direct = "seeker_home";
  }
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleChangee = (e) => {
    setPass(e.target.value);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .get(`https://job-vista.onrender.com/check/${direct}/${email}/${pass}`)
      .then((response) => {
        const exists = response.data.exists;
        if (exists) {
          toast.success("Logged in!", {
            autoClose:3000,
            onClose: () => {
              navigate(`/${direct}`);
            },
          });
        } else {
            toast.warning("Invalid User!", {
                autoClose:3000,
                onClose: () => {
                },
              });
        }
      })
      .catch((error) => {
        console.error("Error checking email:", error);
      });
  };
  return (
    <>
    <ToastContainer></ToastContainer>
      <div
        className="main"
        style={{
          backgroundImage: `url(${mainimg})`,
          boxShadow: "2px 3px 5px grey",
        }}
      >
        <div className="form">
          <h3 style={{ color: "black", fontSize: "1.2rem" }}>
            {props.tagline}
          </h3>
          <div>
            <input type="text" placeholder={user} />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email_address"
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="password" placeholder="Password"onChange={handleChangee} />
          </div>
          <button className="btn-register" type="submit" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login_End;
