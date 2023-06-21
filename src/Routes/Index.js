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
                <Route path="/portal/dashboard" element={<Dashboard/>} />
                <Route path="/portal/pay-bills" element={<PayBills/>} />
                <Route path="/portal/my-account/profile" element={<Profile/>} />
            </Routes>

        </BrowserRouter>
    )
}
