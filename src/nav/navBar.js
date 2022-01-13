import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import shape from "../image/Shape.svg"
import {Navbar,Container,Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
function navBar() {
  return (
//     <div  >
//         <nav className='navbar navbar-expand-lg ' style={{backgroundColor:"#293942" }}>
   

//       <a className="navbar-brand" style={{ marginLeft:"10%" }} >
//         <img alt="" src={shape} alt="" />
//       </a>

// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//   <ul className="navbar-nav">
//       <div className="col-md-4 nav" style={{ marginRight:"10%" }} >
//       <li className="nav-item" ><a href="#" className="nav-link contact">Contact</a></li>
//         <li className="nav-item" ><a href="#" className="nav-link plan">Plans</a></li>
//         <li className="nav-item" ><a href="#" className="nav-link blog">Blog</a></li>
//         <button type="button" className="btn btn me-2 signIn" id="" style={{ width:"120px" }}>Sign In</button>
//         <button type="button" className="btn btn signUp" >Sign Up</button>
//       </div>
//       </ul>
//       </div>
//     </nav>
//   </div>
<Navbar collapseOnSelect expand="lg"  variant="white"  style={{backgroundColor:"#293942"}}>
  <Container >
  <Navbar.Brand href="https://github.com"> 
         <img alt="" src={shape} className='radio radios' />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ backgroundColor:'white'}}  />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="me-auto d-flex">
      <Nav.Link href="#features" className=" contact">Contact</Nav.Link>
      <Nav.Link href="#pricing"  className=" plan">Plans</Nav.Link>
      <Nav.Link href="#features"  className=" blog">Blog</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="#memes">
      <button type="button" className="btn btn   signIn" >Sign In</button>
      </Nav.Link>
      <Nav.Link href="#memes">
      <button type="button" className="btn btn   signUp" >Sign Up</button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default navBar;
