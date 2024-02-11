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

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    axios
      .get(`http://localhost:8001/check/${direct}/${email}`)
      .then((response) => {
        const exists = response.data.exists;
        if (exists) {
          toast.success("Logged in!", {
            autoClose:5000,
            onClose: () => {
              navigate(`/${direct}`);
            },
          });
        } else {
            toast.warning("Registartion not completed!", {
                autoClose:5000,
                onClose: () => {
                  navigate("/login_main/ forcompanies");
                },
              });
        }
      })
      .catch((error) => {
        console.error("Error checking email:", error);
      });
  };

  //   const handleClick =(e)=> {
  //     e.preventDefault();
  //     axios.get(`http://localhost:8001/checkemail/${email}`)
  //     .then((response)=>{
  //         toast.success('Logged in!',{
  //             onClose:()=>{
  //                 navigate("/company_home")
  //             },
  //         });
  //     })
  //     .catch((error)=>{
  //         toast.warning('not a user yet!',{
  //             onClose:()=>{
  //                 navigate("/company_home")
  //             }
  //         })
  //     });

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
            <input type="password" placeholder="Password" />
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
