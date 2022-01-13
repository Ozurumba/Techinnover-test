import React from 'react';

import Apple from "../image/apple.svg"
import Google from "../image/google.svg"
import Bg_cover from "../image/bg_cover_re.png"

const body = () => {
  return (
    <div className='body container-fluid' style={{ backgroundImage: `url(${Bg_cover})`,
    width: '100vw',
    height: '80vh'
    }}>
        <div className='row'>
            <div className='col-md-5'>
                <div className=''>
                    <h2  className='discover animate__animated animate__fadeInUpBig animate__slower	3s' >
                        Discover, search and
                        play any song featuring voice control.
                    </h2>
                </div>
                <div className='mobile-try-btn'>
                   <button type="button" className="try trys">Try for free</button> 
                </div>
                <div>
                <img  className="google googles " src={Google} alt=""/>
                    <img  className="apple  apples"  src={Apple} alt="" />
                    
                </div>
           </div>
        </div>

</div>

  );
}

export default body;
