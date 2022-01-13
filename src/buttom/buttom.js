import React from 'react';
import path from "../image/path3.svg"
import path4 from "../image/path4.svg"
import shape4 from "../image/instagram.png"
const buttom = () => {
  return (
    <div className='container-fluid' >
        <div className='row'>
            <div className='buttom text-center'>
                <img alt="" src={shape4} className='buttom2' />
                <img alt="" src={path4} className='buttom3' />
                <img alt="" src={path} className='buttom1' />
            </div>
        </div>
    </div>
  );
}

export default buttom;
