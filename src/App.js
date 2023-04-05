import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import React, { useState } from "react";
import Textform from "./components/Textform";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";





function App() {

  const [Mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({

      message: message,
      type: type,
    
    });

    setTimeout(() => {
      
      setAlert(null)

    }, 1500);
  
  };

  const togglegreen =()=>{

    setMode("success");    

  }

  const toggleMode = () => {
    if (Mode === "light") {
    
      setMode("dark");
    
      document.body.style.backgroundColor = `#343a40`;
    
      showAlert("dark mode has been Enabled", "success");
      
    }
     else {
    
      setMode("light");
    
      document.body.style.backgroundColor = `white`;
    
      showAlert("Light mode has been Enabled ", "warning ");
    }
  };

  return (
    <>
    {/* <Router>  */}
      <Navbar about="AboutUs" home="Home" mode={Mode} togglemode={toggleMode} togglegreen={togglegreen} />
      
      <Alert alert ={alert} />

      <div className="container my-3">

      <Textform heading="Enter The Text Below " mode={Mode} />


      {/* <Routes> */}
          {/* <Route path="/about" element = {<About />}/> */}
          
          
        
          {/* <Route path="/" element = {<Textform heading="Enter The Text Below " mode={Mode} />}/> */}
             

         
      {/* </Routes> */}
    
      
       
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
