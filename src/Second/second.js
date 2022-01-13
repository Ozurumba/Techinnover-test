import React from 'react';
import Rectangle from "../image/Rectangle.svg"

const second = () => {
  return (
    <div className="container-fluid second animate__animated animate__fadeInUpBig animate__slower	3s">
			<div className="row">
				<div className="col-md-6 ">
                    <h3 className='radiohead'> Why radiohead? </h3>
                    <h3 className='world'> 
                        <img src={Rectangle} className='rectangle'  alt="" /> A world of music in your pocket.
                    </h3>
                    <h2 className='world33'>
                         Find new loves and old favourites from over 56 <br/> million tracks.
                    </h2>
                   
                       
                    
                    <h3 className='deezer'> 
                      <img src={Rectangle} className='rectangle' alt=""/>   Craft your collection. 
                    </h3>
                    <h3 className='premium'>
                    Create playlists from millions of tracks and take<br/> them with you wherever you go.
                    </h3>
                </div>
				<div className="col-md-6">
                    <h3 className='world2'> 
                        <img src={Rectangle} className='rectangle' alt="" />   Made for you. 
                    </h3>
                    <h3 className='world3'>
                    Flow gets to know what you like and what you don't.<br/> Discover your personal soundtrack..
                    </h3>
                   
                      
                    
                    <h3 className='deezers'> 
                      <img src={Rectangle} className='rectangle' alt=""/>  Why wifi? No problem 
                    </h3>
                    <h3 className='premiums'>
                        With Deezer Premium, you don't need to be <br/>
                        connected to enjoy your favourite tracks.
                    </h3>

                </div>
			</div>
		</div>
  );
}

export default second;
