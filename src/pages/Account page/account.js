import AccountContent from "./content/accountContent";
import AccountHeader from "./header/accountHeader";
import Footer from "../../footer/footer";

export default function AccountPage(){
    return(
        <>
            <AccountHeader />
            <AccountContent />
            <Footer /> 
        </>
    )
}