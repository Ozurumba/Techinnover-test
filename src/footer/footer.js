import React from 'react';
import shape from "../image/Shape.svg"
const footer = () => {
  return (
    <div className='footer container-fluid reveal animate__animated animate__fadeInUpBig animate__slower	3s'>
        <footer className="row py-5 my-5 copy">
            <div className="col-md-4 ">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            
            </a>
            <p className="text-muted"><img src={shape} alt="" /></p>
            <small className='smalls '>Copy
                   Radiohead is the first global music<br/> streaming service with high fidelity sound, <br/> hi-def video quality, along with expertly curated <br/> playlists and original content<br/>  making it a trusted source for music and culture.
            </small>
            </div>
            <div className="col-md-2   ">
                
                <h5 className='section1 '>Get Started</h5>
             
               
                <ul className="nav flex-column ">
                    <li className="nav-item mb-2 "><a href="https://github.com/" className="nav-link p-0 text-muted " ><p style={{ color:"white", fontSize:"20px"  }}> Started</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px"  }}>Playlist Import </p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px" }}>Supported Devices</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px"  }}>Get Support</p></a></li>
                </ul>
              
            </div>
            <div className="col-md-2  ">
                <h5 className='section2'>Discover</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px"  }}>About</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px" }}>Magazine</p></a></li>
                </ul>
            </div>
            <div className="col-md-2 ">
                <h5 className=' section3'>Account</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px"  }}>Sign Up</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px" }}>Redeem Voucher</p></a></li>
                    <li className="nav-item mb-2 "><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px"  }}>Redeem Giftcard</p></a></li>
                    <li className="nav-item mb-2 "><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px"  }}>Manage Account</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px" }}>Store</p></a></li>
                </ul>
            </div>
            <div className="col-md-2">
                <h5 className='  section4' >Company</h5>
                <ul className="nav flex-column ">
                    <li className="nav-item mb-2 "><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px"}}>Partners</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px"}}>Features</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px" }}>Carreers</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px" }}>Price</p></a></li>
                </ul>
            </div>
        </footer>
    </div>
  );
}

export default footer;
