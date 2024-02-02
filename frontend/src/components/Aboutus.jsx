import React from "react";
import "../css/Aboutus.css";
import Seeker_Story from "./Seeker_Story";
function Aboutus() {
  return (
    <>
      <div className="about-main">
        <h1 style={{textAlign:"center", fontSize:'2rem'}}>About Us</h1>
        <div className="mission">
          <p>
            Welcome to Job Vista, where we believe that the right job can
            transform lives and elevate companies to new heights. Our platform
            is not just a space for job listings; it's a dynamic community that
            connects ambitious professionals with forward-thinking employers,
            creating a synergy that propels careers and businesses forward.<br/><br/>1.
            Empowering Connections: We go beyond traditional job matching. We
            foster meaningful connections by understanding the unique qualities
            of both job seekers and employers. Our platform is designed to
            create relationships that extend beyond the resume.<br/><br/>2. Innovation
            in Job Search: Expect more than just job listings. Our innovative
            features, intuitive search capabilities, and personalized
            recommendations ensure that every job seeker discovers opportunities
            tailored to their skills and aspirations.<br/><br/>3. Elevating Employer
            Branding: For companies, we are more than a job posting platform. We
            provide a space to showcase your brand, culture, and values. Our
            goal is to help you attract top-tier talent and build a team that
            aligns with your vision.
          </p>
          <img
            src="https://img.freepik.com/free-photo/3d-render-code-testing-functional-test-usability_107791-16607.jpg?w=1060&t=st=1706852849~exp=1706853449~hmac=c732a9725982d69d759ec6efa1fd5406ed678f360fe9c21d638e022ac61e5113"
            alt=""
          />
        </div>
        <div className="seeker-storyy">
        <Seeker_Story/>
        </div>
        <div className="company-join">
          <img src="" alt="" />
          <h3> company hired:200+</h3>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
