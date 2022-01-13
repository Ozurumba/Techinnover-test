import React from 'react';
import shape from "../image/Shape.svg"
const footer = () => {
  return (
    <div className='footer container-fluid reveal animate__animated animate__fadeInUpBig animate__slower	3s'>
        <footer className="row py-5 my-5 copy">
            <div className="foota col-md-4 ">
            <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            
            </a>
            <p className="text-muted"><img src={shape} alt="" /></p>
            <small className='smalls '>Copy
                   Radiohead is the first global music<br/> streaming service with high fidelity sound, <br/> hi-def video quality, along with expertly curated <br/> playlists and original content<br/>  making it a trusted source for music and culture.
            </small>
            </div>
            <div className="col-md-2   ">
                
                <h5 className='section1 pb-4'>Get Started</h5>
             
               
                <ul className="nav flex-column ">
                    <li className="nav-item mb-2 "><a href="https://github.com/" className="nav-link p-0 text-muted " ><p style={{ color:"white", fontSize:"20px", fontWeight: "bolder"  }}>Get Started</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px", fontWeight: "bolder"  }}>Playlist Import </p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px", fontWeight: "bolder" }}>Supported Devices</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px", fontWeight: "bolder"  }}>Get Support</p></a></li>
                </ul>
              
            </div>
            <div className="col-md-2  ">
                <h5 className='section2 pb-4'>Discover</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px", fontWeight: "bolder"  }}>About</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px", fontWeight: "bolder" }}>Magazine</p></a></li>
                </ul>
            </div>
            <div className="col-md-2 ">
                <h5 className=' section3 pb-4'>Account</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px", fontWeight: "bolder"  }}>Sign Up</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px", fontWeight: "bolder" }}>Redeem Voucher</p></a></li>
                    <li className="nav-item mb-2 "><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px", fontWeight: "bolder"  }}>Redeem Giftcard</p></a></li>
                    <li className="nav-item mb-2 "><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px", fontWeight: "bolder"  }}>Manage Account</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px", fontWeight: "bolder" }}>Store</p></a></li>
                </ul>
            </div>
            <div className="col-md-2">
                <h5 className='  section4 pb-4' >Company</h5>
                <ul className="nav flex-column ">
                    <li className="nav-item mb-2 "><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px", fontWeight: "bolder"}}>Partners</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px", fontWeight: "bolder"}}>Features</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white", fontSize:"20px", fontWeight: "bolder" }}>Carreers</p></a></li>
                    <li className="nav-item mb-2"><a href="https://github.com/" className="nav-link p-0 text-muted"><p style={{ color:"white" , fontSize:"20px", fontWeight: "bolder" }}>Price</p></a></li>
                </ul>
            </div>
        </footer>
    </div>
  );
}

export default footer;
