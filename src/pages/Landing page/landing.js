import LandingContent from "./content/landingContent";
import LandingHeader from "./header/landingHeader";
import Footer from "../../footer/footer";

export default function LandingPage(){
    return(
        <>
            <LandingHeader />
            <LandingContent />
            <Footer /> 
        </>
    )
}