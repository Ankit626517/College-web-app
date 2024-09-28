import React from "react";
import "./HomeMain.css";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeFirstBlock() {
  return (
    <>
      <div className="HomeFirstBlock">
        <div className="HomeFirstBlock_box1" >
          <span>RAJAGIRI </span>
          <h2>COLLEGE OF ENGINEERING & TECHNOLOGY</h2>
          <p>
            RSET(Autonomous) is a premier educational institution offering
            excellence in engineering education and research. The University
            Grants Commission has granted autonomous status to RSET from 2020
            onwards. The parent university of RSET (Autonomous) is A. P. J Abdul
            Kalam Technologiçal University, Trivandrum, Kerala. RSET is approved
            by the All India Council for Technical Education, New Delhi.
          </p>
        </div>
        <div className=" HomeFirstBlock_box2">
          
        <Link className="HomeFirstBlock_box2_Link">  <Icons.FaFacebook /> </Link> 
        <Link className="HomeFirstBlock_box2_Link" > <Icons.FaInstagram /> </Link>
        <Link className="HomeFirstBlock_box2_Link"> <Icons.FaLinkedin /></Link>
        <Link className="HomeFirstBlock_box2_Link" ><Icons.FaYoutubeSquare /></Link>
           <Link className="HomeFirstBlock_box2_Link"> <Icons.FaTwitter /></Link>
          
        </div>
      </div>
    </>
  );
}

export default HomeFirstBlock;
