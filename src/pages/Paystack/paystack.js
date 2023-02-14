import PaystackController from "./paystackController";
import AccountHeader from "../Account page/header/accountHeader";
import Footer from "../../footer/footer";

export default function Paystack(){
    return(
        <>
        <AccountHeader />
        <PaystackController />
        <Footer />
        </>
    )
}