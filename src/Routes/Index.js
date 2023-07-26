import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/Landing page/landing'
import AccountPage from '../pages/Account page/account'
import VendorWallet from '../pages/Vendor wallet/main'
import Login from '../auth/main'
import Receipt from '../success/main'
import Invoice from '../receipt/receipt'
import Confirmation from '../pages/Confirmation/main'
import Paystack from '../pages/Paystack/paystack'
import Dashboard from '../pages/DashboardPortal/Dashboard'
import PayBills from '../pages/DashboardPortal/PayBills'
import Profile from '../pages/DashboardPortal/Profile'
import CustomerLogin from '../auth/CustomerLogin'
import CustomerSignUp from '../auth/customerSignUp'
import VendorSignUp from '../auth/VendorSignUp'
import MeterDetails from '../pages/DashboardPortal/MeterDetails'
import ElectricityDetails from '../pages/DashboardPortal/ElectrictyDetails'
import FundWallet from '../pages/DashboardPortal/FundWallet'
import CreateSupportTicket from '../pages/DashboardPortal/CreateSupportTicket'
import NewConnectionRequest from '../pages/DashboardPortal/NewConnectionRequest'
import Settings from '../pages/DashboardPortal/Settings'
import ProtectedRoutes from './ProtectedRoutes'
import Consumption from '../pages/DashboardPortal/PostpaidPages/Consumption'
import Payment from '../pages/DashboardPortal/PostpaidPages/Payment'
import PaymentHistory from '../pages/DashboardPortal/PostpaidPages/PaymentHistory'
import DownloadBills from '../pages/DashboardPortal/PostpaidPages/DownloadBills'
import PrepaidTransaction from '../pages/DashboardPortal/PrepaidPages/PrepaidTransaction'
import PostpaidRoutes from './PostpaidRoutes'
import PrepaidRoutes from './PrepaidRoutes'
import BuyToken from '../pages/DashboardPortal/PrepaidPages/BuyToken'
import OtpPop from '../Components/OtpPop'

export default function IndexRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/details" element={<AccountPage />} />
                <Route path="/vendor" element={<VendorWallet />} />
                <Route path="/checkout" element={<Receipt />} />
                <Route path="/receipt" element={<Invoice />} />
                <Route path="/confirm" element={<Confirmation />} />
                <Route path="/paystack" element={<Paystack />} />
                {/* auth pages */}
                <Route path="/Login" element={<Login />} />
                <Route path="/cus-login" element={<CustomerLogin />} />
                <Route path="/cus-signUp" element={<CustomerSignUp />} />
                <Route path="/vendor-signUp" element={<VendorSignUp />} />
            

                {/* Dashboard */}
                <Route element={<ProtectedRoutes />}>
                    <Route path="/portal/dashboard" element={<Dashboard />} />
                    <Route path="/portal/fund-wallet" element={<FundWallet />} />
                    <Route path="/portal/create-support-ticket" element={<CreateSupportTicket />} />
                    <Route path="/portal/new-connection-request" element={<NewConnectionRequest />} />
                    <Route path="/portal/settings" element={<Settings />} />
                    <Route path="/portal/my-account/profile" element={<Profile />} />
                    <Route path="/portal/my-account/meter-details" element={<MeterDetails />} />
                    <Route path="/portal/my-account/electricity-details" element={<ElectricityDetails />} />
                    <Route element={<PostpaidRoutes />}>
                        <Route path="/portal/postpaid/consumption" element={<Consumption />} />
                        <Route path="/portal/postpaid/payment" element={<Payment />} />
                        <Route path="/portal/postpaid/payment-history" element={<PaymentHistory />} />
                        <Route path="/portal/pay-bills" element={<PayBills />} />
                        <Route path="/portal/postpaid/download-bill" element={<DownloadBills />} />
                    </Route>

                    <Route element={<PrepaidRoutes />}>
                        <Route path="/portal/buy-token" element={<BuyToken />} />
                        <Route path="/portal/prepaid/prepaid-transaction" element={<PrepaidTransaction />} />
                    </Route>

                </Route>

            </Routes>

        </BrowserRouter>
    )
}
