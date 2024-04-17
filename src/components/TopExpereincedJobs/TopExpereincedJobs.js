import React from "react";
import Surge from "../../assets/static/images/Rectangle 1461.png";
import Rectangle from "../../assets/static/images/Rectangle 1462.png";
import Steric from "../../assets/static/images/Rectangle 1463.png";
import Hen from "../../assets/static/images/Rectangle 1465.png";
import TopExperiencedCard from "./TopExperiencedCard";

const TopExpereincedJobs = () => {
  const CardData = [
    {
      id: 1,
      img: Rectangle,
      tittle: "Senior Full-Stack Software Engineer-React/Node.js",
      description: "Envision Technologies Inc.",
      location: "United Kingdom",
      degree: "Degree in IT",
      salary: "100,000-120,000/Yearly",
    },
    {
      id: 2,
      img: Surge,
      tittle: "Full-Time Content Creator",
      description: "Envision Technologies Inc.",
      location: "United Kingdom",
      degree: "Degree in IT",
      salary: "100,000-120,000/Yearly",
    },
    {
      id: 3,
      img: Hen,
      tittle: "Senior Technical Specialist-Service Now",
      description: "Envision Technologies Inc.",
      location: "United Kingdom",
      degree: "Degree in IT",
      salary: "100,000-120,000/Yearly",
    },
    {
      id: 4,
      img: Steric,
      tittle: "Trainee Project Coordinator-Part time",
      description: "Envision Technologies Inc.",
      location: "United Kingdom",
      degree: "Degree in IT",
      salary: "100,000-120,000/Yearly",
    },
  ];

  return (
    <div className="container">
      <h3 className="feature-text">Feature Jobs</h3>
      <h2 className="Students-tittle">Top Experienced Jobs</h2>
      <TopExperiencedCard CardData={CardData} />
    </div>
  );
};

export default TopExpereincedJobs;
