import NavBar from "../src/nav/navBar"
import Body from "../src/body/body"
import Middle from "./middle/middle";
import Part from "../src/part/part"
import Play from "../src/Play/Play"
import "./App.css"
import Second from "../src/Second/second";
import Footer from "../src/footer/footer"
import Buttom from "../src/buttom/buttom"



function App() {

  const divStyle= {
    overflowX: 'hidden',
    
  };
  
  return (
  
    <div style={divStyle} >
     <NavBar/>
     <Body/>
    <Middle/>
    <Part/>
    <Play className="mb-8"/>
    <Second/>
    <Footer/>
    <Buttom/>
    </div>
  );
}

export default App;
