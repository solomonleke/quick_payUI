import LandingContent from "./content/landingContent";
import LandingHeader from "./header/landingHeader";
import Footer from "../../footer/footer";
import { jwtDecode } from "jwt-decode";

export default function LandingPage(){

    const token = sessionStorage.getItem("token")

    // console.log("token", token)
    // console.log("token decoded", jwtDecode(token))

    // if (jwtDecode(token).exp * 1000 <= Date.now()) {
    //     alert("Session has expired")
    //     // Logout()
    // } 
    
    return(
        <>
            <LandingHeader />
            <LandingContent />
            <Footer /> 
        </>
    )
}