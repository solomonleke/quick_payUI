import Footer from "../footer/footer";
import AccountHeader from "../pages/Account page/header/accountHeader";
import Success from "./content";


export default function Receipt(){
    return(
        <div>
            <AccountHeader />
            <Success />
            <Footer />
        </div>
        
    )
}