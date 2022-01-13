import React from 'react';
import Last from "../image/last.svg"
import drake from "../image/drake.svg"
import eminem from "../image/eminem.svg"
import smoke from "../image/smoke.svg"
import starboy from "../image/starboy.svg"
import susam from "../image/susam.svg"

const part = () => {
  return (
    <div className='container-fluid part animate__animated animate__fadeInUpBig animate__slower	3s'>
      <div className='row'>
          <div className='col-md-7 hide reveal' >
          <img alt="" src={starboy} className='imgs starboy 'style={{ borderRadius:"10px" }} />
          <img alt="" src={drake} className='imgs drake' style={{ borderRadius:"10px" }}/>
          <img alt="" src={susam} className='imgs susam'style={{ borderRadius:"10px" }} />
          <br/>
          <img alt="" src={eminem} className='imgs eminem'style={{ borderRadius:"10px" }} />
          <img alt="" src={smoke} className='imgs smoke' style={{ borderRadius:"10px" }}/>
          <img alt="" src={Last} className='imgs last' style={{ borderRadius:"10px" }}/>
          </div>
          <div className='col-md-5 reveal'>
            <h1 className='music'>The music you love</h1>
            <br/>
            <small className='small'>
            With over 60 million tracks and tons of exclusive<br/> interviews and videos, TIDAL is here to bring you 
            <br/>closer to the artists you listen to.
            </small><br/>
          
             <h6 className='more cursor'>
             <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 15 24" fill="none">
                        <path d="M3.36016 23.5C2.65189 23.5 1.94311 23.2396 1.38933 22.7158C0.244659 21.6313 0.199012 19.8271 1.28701 18.6861L7.68656 11.9801L1.29353 5.32047C0.20152 4.18347 0.241649 2.37926 1.38332 1.29074C2.52548 0.202217 4.3358 0.242699 5.4278 1.3802L13.7069 10.0029C14.7623 11.1024 14.7643 12.8342 13.7134 13.9372L5.43482 22.6139C4.87152 23.2021 4.1176 23.5 3.36016 23.5Z" fill="#7971E9"/>
                </svg>  &nbsp; More Featured Content
              
               
              </h6>
        </div>  
          
         
      </div>
    </div>
  );
}

export default part;
