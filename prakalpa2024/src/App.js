import React from "react";
import "./App.css";
import Card from "./Card";
import iotImage from "./assets/iot.jpg";
import dsaImage from "./assets/dsa.jpg";
import aimlImage from "./assets/aiml.jpg";
import cyberImage from "./assets/cyber.jpg";
import bacImage from "./assets/bac.jpg";
import avImage from "./assets/av.jpg";
import gameDevImage from "./assets/gamedev.jpg";
import renewImage from "./assets/renew.jpg";
import wtImage from "./assets/wt.jpg";
import roboImage from "./assets/robo.jpg";
import prakalpaImage from "./assets/prakalpa.png";
import infoImage from "./assets/info-prakalpa.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CompetitionContainer } from "./Info";

const App = () => {
  return (
    <div>
      <div className="hero-page">
        {" "}
        {/* Navbar */}
        <Navbar />
        {/* Header */}
        <section id="home">
          <header className="header">
            <br></br>
            <img
              src={prakalpaImage}
              alt="Prakalpa"
              className="prakalpa-hero-img"
            />
            <img src={infoImage} alt="information" className="info-img" />
            <br></br>
            {/* <h1 className="highlighted-text1">Prakalpa '24</h1> */}
            {/* <p className="edition">15th Edition</p>
            <h1 className="highlighted-text">TechXpo</h1>
            <h3 className="extra-info">
              NATIONAL LEVEL WORKING MODELPROJECT COMPETITION
            </h3>
            <p className="tagline">From Blueprint to Breakthrough</p> */}
            <button className="header-button btn">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0jT31F39RiH998Ry9IPxLsszqdmhPrp6Uo35GxpWr7TQYw/viewform">
              REGISTER NOW
              </a>
            </button>
            <br></br>
            <button className="header-button btn">
              <a href="https://drive.google.com/file/d/1MGSF2Ox13HWuJ-GngFUWocE1z1jScye2/view">
              INFORMATION BROCHURE 
              </a>
            </button>
          </header>
        </section>
      </div>

      {/* Software Edition */}
      <section id="software-section">
        <h2 className="body-h2">Themes</h2>

        {/* Data Science and Analytics */}
        <Card
          title="Data Science And Analytics"
          content="Data scientists aim to discover hidden patterns, correlations, and trends in data to inform business decisions, build predictive models, and generate actionable insights. Analytics involves the systematic computational analysis of data or statistics, focused on discovering meaningful patterns and making data-driven decisions."
          image={dsaImage}
          imagePosition="right"
        />
        {/* Artificial Intelligence and Machine Learning */}
        <Card
          title="Artificial Intelligence and Machine Learning"
          content="Artificial Intelligence refers to the development of computer systems that can perform tasks requiring human intelligence. Machine Learning, a subset of AI, focuses on developing algorithms and statistical models that enable computers to perform tasks without being explicitly programmed."
          image={aimlImage}
          imagePosition="left"
        />
        {/* Cybersecurity and Data Privacy */}
        <Card
          title="Cybersecurity and Data Privacy"
          content="Cybersecurity involves protecting computer systems, networks, and data from theft, damage, unauthorized access, or other cyber threats. Data privacy is the protection of personal information from unauthorized access or misuse."
          image={cyberImage}
          imagePosition="right"
        />
        {/* Blockchain and Cryptocurrency */}
        <Card
          title="Blockchain and Cryptocurrency"
          content="Blockchain is a decentralized digital ledger technology recording transactions securely. Cryptocurrency is a type of digital currency using cryptography for security and operates on a decentralized network based on blockchain technology."
          image={bacImage}
          imagePosition="left"
        />
        <Card
          title="Game Development"
          content="Game development involves the process of creating video games. It includes the design, development, testing, and release of games for various platforms. Game developers use programming languages, game engines, and design principles to bring interactive and entertaining experiences to players."
          image={gameDevImage}
          imagePosition="right"
        />
      </section>

      {/* Hardware Edition */}
      <section id="hardware-section">
        {/* <h2 className="body-h2">Hardware Project</h2> */}
        {/* Internet of Things (IoT) */}
        <Card
          title="Internet of Things (IoT)"
          content="IoT refers to the network of interconnected physical devices, vehicles, appliances, and other objects embedded with sensors, software, and network connectivity, allowing them to collect and exchange data. These devices collect data through various sensors, process the information, and often share it with other connected devices to make intelligent decisions or trigger specific actions."
          image={iotImage}
          imagePosition="left"
        />
        {/* Autonomous Vehicles */}
        <Card
          title="Autonomous Vehicles"
          content="Autonomous vehicles, also known as self-driving cars or driverless vehicles, are a cutting-edge technological innovation in the transportation industry. These vehicles are equipped with advanced sensors, cameras, radar, lidar, and artificial intelligence algorithms that enable them to navigate, interpret their surroundings, and make driving decisions without human intervention."
          image={avImage}
          imagePosition="right"
        />
        {/* Wearable Technology */}
        <Card
          title="Wearable Technology"
          content="Wearable technology refers to electronic devices that can be worn on the body, often as accessories or clothing, to provide various functionalities beyond traditional uses. These devices are designed to enhance user experiences, monitor health and fitness, and seamlessly integrate technology into everyday life. Common examples of wearable technology include smartwatches, fitness trackers, augmented reality glasses, and smart clothing."
          image={wtImage}
          imagePosition="left"
        />
        {/* Robotics and Automation */}
        <Card
          title="Robotics and Automation"
          content="Robotics and automation are technological fields focused on the development and implementation of systems that can perform tasks autonomously or semi-autonomously, often with the aim of improving efficiency, precision, and productivity across various industries."
          image={roboImage}
          imagePosition="right"
        />
        {/* Renewable Energy Technology */}
        <Card
          title="Renewable Energy Technology"
          content="Renewable energy technology refers to innovative systems and devices designed to harness and convert naturally occurring, replenishable resources into usable energy. The primary goal is to generate power while minimizing environmental impact and reducing reliance on finite fossil fuels."
          image={renewImage}
          imagePosition="left"
        />
      </section>

      {/* <section id="paper-section">
        <h2 className="body-h2">Paper Presentation</h2>
        <Card
          title="Open Innovation"
          content="Unleash your creativity and explore boundless possibilities with Open Innovation. Embrace the freedom to innovate and bring your boldest ideas to life. "
          image={openinno}
          imagePosition="left"
        />
      </section> */}

      <section id="info-section">
        <h2 className="body-h2">Competitions</h2>
        <CompetitionContainer />
      </section>

      <Footer />
    </div>
  );
};

export default App;
