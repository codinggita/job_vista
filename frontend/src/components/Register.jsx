import React, { useState } from "react";
import "../css/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register(props) {
  const [newCompany, setNewCompany] = useState({
    company_name: "",
    email_address: "",
    phone_number: "",
    password: "",
  });
  var userr;

  const navigate = useNavigate();
  if(props.user=="Company Name"){
    userr='companyname';
  }
  else{
    userr='seekername';
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios
      .post(`https://job-vista.onrender.com/${userr}`, newCompany)
      .then((response) => {
        toast.success("user registered!", {
          autoClose: 5000,
          onClose: () => {
            if (props.user === "Company Name") {
              navigate("/company_home");
            } else {
              navigate("/seeker_home");
            }
          },
        });
      })
      .catch((error) => {
        toast.warning("User already registered!",{
            autoClose: 5000,
            onClose: () => {
              if (props.user === "Company Name") {
                navigate("/login_main/ forcompaniess");
              } else {
                navigate("/login_main/forseekerss");
              }
            },
          });
      });
};

return (
  <>
   <ToastContainer/>
    <div className="main" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="form">
        <h3 style={{ color: "black", fontSize: "1.2rem" }}>{props.tagline}</h3>
        <div>
          <input
            type="text"
            name="company_name"
            placeholder={props.user}
            value={newCompany.company_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email_address"
            value={newCompany.email_address}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            name="phone_number"
            value={newCompany.phone_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={newCompany.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn-register" type="submit" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  </>
);
}

export default Register;
