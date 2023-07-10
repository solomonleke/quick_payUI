import React, { useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import Header from '../../Components/Header'

export default function CreateSupportTicket() {
  const OnlineUSerDetails = JSON.parse(localStorage.getItem("user"))
  const [state, setstate] = useState();

  return (
    <MainLayout>
    <Seo title='Create Support Ticket'/>
    <Header title={"create support ticket"} mt='32px' />

    </MainLayout>
  )
}
