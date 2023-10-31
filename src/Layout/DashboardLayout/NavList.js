import { MdDashboard, MdNotifications, MdOutlineAnalytics, MdToken } from "react-icons/md";
import { RiSettings2Fill } from "react-icons/ri";
import { IoIosCreate } from "react-icons/io";
import { TbPlugConnected } from "react-icons/tb";
import { FaMoneyBillAlt, FaWallet } from "react-icons/fa";
import { BiCaretDown,BiCaretUp } from "react-icons/bi";
import { isActive, isPostpaidUser, isPrepaidUser } from "../../Authentication";
import { useState } from "react";
import { BsLightbulbFill } from "react-icons/bs";
export const NavList = (location,OnlineUSerDetails) => {

  // const [Open, setOpen] = useState(false);

  let Open = false

  let List = [
    {
      name: "dashboard",
      icon: <MdDashboard />,
      link: "/portal/dashboard",
      active: isActive(location, "/portal/dashboard"),
      display: true,
    
    },

    {
      name: "my accounts",
      icon: <MdOutlineAnalytics />,
      downIcon:  <BiCaretDown/>,
      upIcon:  <BiCaretUp/>,
      link: "#",
      onClick: "",
      active: isActive(location, "/portal/myAccount"),
      display: true,
      children: [
        {
          name: "profile",
          icon: <MdOutlineAnalytics />,
          link: "/portal/my-account/profile",
          active: isActive(location, "/portal/my-account/profile"),
          display: true,
        },
        {
          name: "meter details",
          icon: <MdOutlineAnalytics />,
          link: "/portal/my-account/meter-details",
          active: isActive(location, "/portal/my-account/meter details"),
          display: true,
        },
        {
          name: "electricity details",
          icon: <MdOutlineAnalytics />,
          link: "/portal/my-account/electricity-details",
          active: isActive(location, "/portal/my-account/electricity details"),
          display: true,
        },

      ]

      
    },
    {
      name: "Postpaid",
      icon: <BsLightbulbFill />,
      downIcon:  <BiCaretDown/>,
      upIcon:  <BiCaretUp/>,
      link: "#",
      onClick: "",
      active: isActive(location, "/portal/postpaid"),
      display: isPostpaidUser(OnlineUSerDetails),
      children: [
     
        {
          name: "consumption",
          icon: <MdOutlineAnalytics />,
          link: "/portal/postpaid/consumption",
          active: isActive(location, "/portal/postpaid/consumption"),
          display: true,
        },
        {
          name: "payment",
          icon: <MdOutlineAnalytics />,
          link: "/portal/postpaid/payment",
          active: isActive(location, "/portal/postpaid/payment"),
          display: true,
        },
        {
          name: "payment history",
          icon: <MdOutlineAnalytics />,
          link: "/portal/postpaid/payment-history",
          active: isActive(location, "/portal/postpaid/payment-history"),
          display: true,
        },
        {
          name: "download/View Bill",
          icon: <MdOutlineAnalytics />,
          link: "/portal/postpaid/download-bill",
          active: isActive(location, "/portal/postpaid/download-bill"),
          display: true,
        },
        

      ]

      
    },
    {
      name: "Prepaid",
      icon: <BsLightbulbFill />,
      downIcon:  <BiCaretDown/>,
      upIcon:  <BiCaretUp/>,
      link: "#",
      onClick: "",
      active: isActive(location, "/portal/prepaid"),
      display: isPrepaidUser(OnlineUSerDetails),
      children: [
     
        {
          name: "Prepaid Transaction",
          icon: <MdOutlineAnalytics />,
          link: "/portal/prepaid/prepaid-transaction",
          active: isActive(location, "/portal/prepaid/prepaid-transaction"),
          display: true,
        },
     
       

      ]

      
    },


    {
      name: "pay bills",
      icon: <FaMoneyBillAlt />,
      link: "/portal/pay-bills",
      active: isActive(location, "/portal/pay-bills"),
      display: isPostpaidUser(OnlineUSerDetails),
    },
    {
      name: "buy token",
      icon: <MdToken />,
      link: "/portal/buy-token",
      active: isActive(location, "/portal/buy-token"),
      display: isPrepaidUser(OnlineUSerDetails),
    },
    {
      name: "fund wallet",
      icon: <FaWallet />,
      link: "/portal/fund-wallet",
      active: isActive(location, "/portal/fund-wallet"),
      display: true,
    },
    {
      name: "create support ticket",
      icon: <IoIosCreate />,
      link: "/portal/create-support-ticket",
      active: isActive(location, "/portal/create-support-ticket"),
      display: true,
    },
    {
      name: "new connection request",
      icon: <TbPlugConnected />,
      link: "/portal/new-connection-request",
      active: isActive(location, "/portal/new-connection-request"),
      display: true,
    },
    {
      name: "settings",
      icon: <RiSettings2Fill />,
      link: "/portal/settings",
      active: isActive(location, "/portal/settings"),
      display: true,
    },
  ];

  return List;
};
