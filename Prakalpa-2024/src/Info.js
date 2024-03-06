import React from "react";
import "./Info.css";
import softwareImage from "./assets/soft.jpg";
import hardwareImage from "./assets/hardware.jpg";
import paperPresentationImage from "./assets/pp.png";
import date from "./assets/date.png";
import venue from "./assets/venue1.png";
import win from "./assets/cashprize-removebg-preview.png";

const When = () => {
  return (
    <div className="card2" style={{ padding: '0', border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}>
      {/* <h2 className="info-heading">When</h2> */}
      <div className="card-content">
      <img
        src={date}
        alt="Date"
        className="card-image1"
      />
        {/* Content for Software Competition
        <p style={{ color: "#ff1493", fontWeight: "bold", fontSize: "1.5rem" }}>
          Date: 3rd April 2024
        </p> */}
      </div>
    </div>
    
  );
};

const Where = () => {
  return (
    <div className="card2" style={{ padding: '0', border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}>
      {/* <h2 className="info-heading">Where</h2> */}
      <div className="card-content">
      <img
        src={venue}
        alt="Venue"
        className="card-image1"
      />
        {/* Content for Software Competition
        <p style={{ color: "#ff1493", fontWeight: "bold", fontSize: "1.5rem" }}>
          Venue: K J Somaiya College of Engineering
        </p> */}
      </div>
    </div>
    
  );
};

const Win = () => {
  return (
    <div className="card2" style={{ padding: '0', border: 'none', backgroundColor: 'transparent', boxShadow: 'none' }}>
      {/* <h2 className="info-heading">Win</h2> */}
      <div className="card-content">
      <img
        src={win}
        alt="Win"
        className="card-image1"
      />
        {/* Content for Software Competition
        <p style={{ color: "#ff1493", fontWeight: "bold", fontSize: "1.5rem" }}>
          Cash Prizes worth Rs.60,000/-
        </p> */}
      </div>
    </div>
    
  );
};

const SoftwareCompetition = () => {
  return (
    <div className="card2">
      <h2 className="info-heading">Software Project</h2>
      <img
        src={softwareImage}
        alt="Software Project"
        className="card-image"
      />
      <div className="card-content">
        {/* Content for Software Competition */}
        <h4>
        Registration Fees: Rs.1000/-
        </h4>
        {/* <ul>
          <li><b>1st: ₹8000/-</b></li>
          <li><b>2nd: ₹4000/-</b></li>
        </ul> */}
        {/* <h4>
        Category 1- 11th/12th/FY/SY/TY: Rs.400/-
        </h4>
        <h4>
        Category 2- LY/ M.Tech: Rs.700/-
        </h4> */}
        <h4>
        A maximum of 4 students are allowed in a team.
        </h4>
        <h4>
        Same group with multiple entries in either project categories is not permitted.
        </h4>
      </div>
      <button className="header-button btn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0jT31F39RiH998Ry9IPxLsszqdmhPrp6Uo35GxpWr7TQYw/viewform">
                REGISTER NOW
              </a>
            </button>
    </div>
  );
};

const HardwareCompetition = () => {
  return (
    <div className="card2">
      <h2 className="info-heading">Hardware Project</h2>
      <img
        src={hardwareImage}
        alt="Hardware Project"
        className="card-image"
      />
      <div className="card-content">
      <h4>
        Registration Fees: Rs.1000/-
        </h4>
        {/* <ul>
          <li><b>1st: ₹8000/-</b></li>
          <li><b>2nd: ₹4000/-</b></li>
        </ul> */}
        {/* <h4>
        Category 1- 11th/12th/FY/SY/TY: Rs.400/-
        </h4>
        <h4>
        Category 2- LY/ M.Tech: Rs.700/-
        </h4> */}
        <h4>
        A maximum of 4 students are allowed in a group.
        </h4>
        <h4>
        Same group with multiple entries in either project categories is not permitted.
        </h4>
      </div>
      <button className="header-button btn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0jT31F39RiH998Ry9IPxLsszqdmhPrp6Uo35GxpWr7TQYw/viewform">
              REGISTER NOW
              </a>
            </button>
    </div>
  );
};

const PaperPresentation = () => {
  return (
    <div className="card2">
      <h2 className="info-heading">Paper Presentation</h2>
      <img
        src={paperPresentationImage}
        alt="Paper Presentation"
        className="card-image"
      />
      <div className="card-content">
      <h4>
        Registration Fees: Rs.1000/-
        </h4>
        {/* <ul>
          <li><b>1st: ₹8000/-</b></li>
          <li><b>2nd: ₹4000/-</b></li>
        </ul> */}
        {/* <h4>
        Category 1- 11th/12th/FY/SY/TY: Rs.400/-
        </h4>
        <h4>
        Category 2- LY/ M.Tech: Rs.700/-
        </h4> */}
        <h4>
        A maximum of 4 students are allowed in a group.
        </h4>
        {/* <h4>
        Same group with multiple entries in either project categories is not permitted.
        </h4> */}
      </div>
      <button className="header-button btn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0jT31F39RiH998Ry9IPxLsszqdmhPrp6Uo35GxpWr7TQYw/viewform">
              REGISTER NOW
              </a>
            </button>
    </div>
  );
};

const CompetitionContainer = () => {
  return (
    <div className="competitions-container">
      <When />
      <Where />
      <Win />
      <SoftwareCompetition />
      <HardwareCompetition />
      <PaperPresentation />
    </div>
  );
};

export { When,Where, Win, SoftwareCompetition, HardwareCompetition, PaperPresentation, CompetitionContainer };
