import React from "react";
import play1 from "../image/play1.svg"
import play2 from "../image/play2.svg"
const play = () => {
	return (
		<div className="container-fluid play animate__animated animate__fadeInUpBigv animate__slower	3s">
			<div className="row">
				<div className="col-md-7">
                    <h2 className="hand" > Hand-picked playlists </h2>
                    <small className="stream">
                        Stream guest playlists curated by the artists you love. <br/>
                        <p className="stream"> Also, check out our original playlists.</p>  
                        <p className="streams">hand-picked by our team of experts.</p>
                    </small>
                    <h6 className="discovers cursor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 15 24" fill="none">
                        <path d="M3.36016 23.5C2.65189 23.5 1.94311 23.2396 1.38933 22.7158C0.244659 21.6313 0.199012 19.8271 1.28701 18.6861L7.68656 11.9801L1.29353 5.32047C0.20152 4.18347 0.241649 2.37926 1.38332 1.29074C2.52548 0.202217 4.3358 0.242699 5.4278 1.3802L13.7069 10.0029C14.7623 11.1024 14.7643 12.8342 13.7134 13.9372L5.43482 22.6139C4.87152 23.2021 4.1176 23.5 3.36016 23.5Z" fill="#7971E9"/>
                        </svg>
                        &nbsp;
                        Discover Radioheat.
                    </h6>
                </div>
				<div className="col-md-5 hide">
                    <img  src={ play1} className="one imgs" style={{ borderRadius:"35px" }} alt="" />
                    <img  src={ play2} className="two imgs" style={{ borderRadius:"35px" }} alt=""/>
                </div>
			</div>
		</div>
	);
};

export default play;
