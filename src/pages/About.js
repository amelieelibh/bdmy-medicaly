import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPowerOff,
  faCertificate,
  faLeaf,
  faWrench,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import AboutPage from "./About.styled";
import { ReactComponent as MedicineIllustration } from "../assets/illustrations/medicine.svg";
import { ReactComponent as WorldIllustration } from "../assets/illustrations/world.svg";

import KardiaImg from "../assets/about/kardia.png";
import ReactImage from "../assets/about/react_native_icon.png";
import Web3Image from "../assets/about/web3js.jpg";
import JavascriptImage from "../assets/about/js_icon.png";
import NodeImage from "../assets/about/nodejs_icon.png";
import MongoImage from "../assets/about/mongodb_programming_icon.png";


const About = () => {
  return (
    <AboutPage>
      {/* <Container className="jumbotron text-center">
                <h1>Medikeep</h1>
                <p>A Decentralised Platform </p>
            </Container> */}

      <Container id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <br />
            <br />
            <h2>Medicaly</h2>
            <br />
            <h4>
              Una <b>Plataforma Descentralizada</b> para el control de tu historial
              clinico y recetas medicas utilizando la tecnologia blockchain.
            </h4>
            <br />
            <p>
              Accede a recetas medicas al instante. 
              No necesitas preocuparte por tu historial clinico.
              <br /> Assuming it as a legally compliant activity, medical
              history can never be framed
            </p>
            <br />
            {/* <button className="btn btn-default btn-lg">Get in Touch</button> */}
          </div>
          <div className="col-sm-4 py-3">
            <span className="glyphicon mt-2">
              <MedicineIllustration className="company_logo w-100" />
            </span>
          </div>
        </div>
      </Container>

      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon ">
              <WorldIllustration className="company_logo w-100" />
            </span>
          </div>
          <div className="col-sm-8 p-5">
            <center>
              <h2>Porque elegir la descentralizacion ?</h2>
              <br />
              <h3 className="why-description">
                {" "}
                Disponible siempre, desde la blockchain
                <br /> Inclusive si tu hospital elimina tu registro
              </h3>
              <br />
            </center>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="services" className="container-fluid text-center">
          <h2>Features</h2>
          {/* <h4>What we offer</h4> */}
          <br />
          <div className="row">
            <div className="col-sm-4">
              <FontAwesomeIcon
                icon={faPowerOff}
                className="featureIcons fa-3x"
              />
              <h4>UPTIME</h4>
              {/* <br /> */}
              <p>System is always up!</p>
            </div>
            <div className="col-sm-4">
              <FontAwesomeIcon icon={faHeart} className="featureIcons fa-3x" />
              <h4>DECENTRALISED</h4>
              {/* <br /> */}
              <p>Data not Centered</p>
            </div>
            <div className="col-sm-4">
              <FontAwesomeIcon icon={faLock} className="featureIcons fa-3x" />
              <h4>SECURED</h4>
              {/* <br /> */}
              <p>Highly Secured</p>
            </div>
          </div>
          <br />
          <br />
          <div className="row ">
            <div className="col-sm-4">
              <FontAwesomeIcon icon={faLeaf} className="featureIcons fa-3x" />
              <h4>AUTHENTICITY</h4>
              {/* <br /> */}
              <p>Authenticated Data</p>
            </div>
            <div className="col-sm-4">
              <FontAwesomeIcon
                icon={faCertificate}
                className="featureIcons fa-3x"
              />
              <h4>CERTIFIED</h4>
              {/* <br /> */}
              <p>Need to be Certified</p>
            </div>
            <div className="col-sm-4">
              <FontAwesomeIcon icon={faWrench} className="featureIcons fa-3x" />
              <h4 style={{ color: "#303030" }}>ACCESSBILITY</h4>
              {/* <br /> */}
              <p>User Friendly</p>
            </div>
          </div>
        </div>

        <div id="services" className="container-fluid text-center">
          <h2>Tech Stack</h2>
          <div className="row text-center">
            <div className=" col-sm-4 my-4">
              <img
                src={KardiaImg}
                width="100px"
                height="100px"
                alt="Ethereum"
              />
              <br />
              <br />
              <h4 style={{ color: "#303030" }}>KardiaChain</h4>
            </div>
            <div className=" col-sm-4 my-4">
              <img src={ReactImage} width="100px" height="100px" alt="react" />
              <br />
              <br />
              <h4 style={{ color: "#303030" }}>React js</h4>
            </div>
            <div className=" col-sm-4 my-4">
              <img src={Web3Image} width="100px" height="100px" alt="web3" />
              <br />
              <br />
              <h4 style={{ color: "#303030" }}>Web3.js</h4>
            </div>
          </div>
          <div className="row text-center slideanim">
            <div className=" col-sm-4 my-4">
              <img
                src={JavascriptImage}
                width="100px"
                height="100px"
                alt="Javascript"
              />
              <br />
              <br />
              <h4 style={{ color: "#303030" }}>Javascript</h4>
            </div>
            <div className="col-sm-4 my-4">
              <img src={NodeImage} width="100px" height="100px" alt="Node js" />
              <h4 style={{ color: "#303030" }}>Nodejs</h4>
              <br />
              <br />
            </div>
            <div className=" col-sm-4 my-4">
              <img
                src={MongoImage}
                width="100px"
                height="100px"
                alt="MongoDB"
              />
              <br />
              <br />
              <h4 style={{ color: "#303030" }}>MongoDB</h4>
            </div>
          </div>
        </div>
      </div>

        <footer className="container-fluid p-2 text-center">
        <p>
          {" "}
          <a
            href="/"
            title="Contribute to Medblock"
            rel="noreferrer"
            target="_blank"
          >
            Medicaly
          </a>
        </p>
      </footer>
    </AboutPage>
  );
};
export default About;
