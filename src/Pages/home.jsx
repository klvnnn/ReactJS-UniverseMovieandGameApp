import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function Home (){
      // Props
    const footerText = "Customise Your Product Now";

    return(
        <>
        <Navbar/>
        <Footer footerText={footerText}/>
        </>
    )
}

export default Home;