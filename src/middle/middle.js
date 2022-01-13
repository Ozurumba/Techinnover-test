import React from 'react';
import BlackBerry from "../image/BlackBerry.svg"
import station from "../image/station.svg"
import tiktok from "../image/tiktok.svg"
import redbull from "../image/redbull.svg"
import senne from "../image/senne.svg"
const middle = () => {
  return (
    <div className="container-fluid middle hide animate__animated animate__fadeInUpBig animate__slower	3s">
            <div className="row ">
            <div className="col station" style={{ marginLeft: "190px",marginTop:"35px", }}><img  alt="" src={station} style={{ height:"20px" }}/></div>
                <div className="col blackberry" style={{  marginTop:"35px"}}><img  alt="" src={BlackBerry} style={{ height:"20px" }} /></div>
                <div className="col tiktok" style={{marginTop:"35px" }}><img  alt="" src={tiktok} style={{ height:"15px" }}/></div>
                <div className="col redbull" style={{marginTop:"35px" }}><img  alt="" src={redbull} style={{ height:"20px" }}/></div>
                <div className="col senne"  style={{marginTop:"35px",marginRight:"190px" }} ><img  alt="" src={senne}style={{ height:"20px" }} /></div>
            
            </div>
    </div>
  );
}

export default middle;
