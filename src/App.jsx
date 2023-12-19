import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  // Props
  const footerText = "Customise Your Product Now"
  // State
  const [getNavbar, SetNavbar] = useState("");
  const changeNavbar = () => {
    SetNavbar("Contact");
  };

  return (
    <>
    <Navbar navbarValue={getNavbar}/>
    <button onClick={changeNavbar}>Click</button>
    <Footer footerText={footerText}/>
    </>
  );
}

export default App;
