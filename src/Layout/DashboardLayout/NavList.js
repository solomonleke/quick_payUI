import { MdDashboard, MdNotifications, MdOutlineAnalytics } from "react-icons/md";
import { RiSettings2Fill } from "react-icons/ri";
import { IoIosCreate } from "react-icons/io";
import { TbPlugConnected } from "react-icons/tb";
import { FaMoneyBillAlt, FaWallet } from "react-icons/fa";
import { BiCaretDown,BiCaretUp } from "react-icons/bi";
import { isActive } from "../../Authentication";
import { useState } from "react";
import { BsLightbulbFill } from "react-icons/bs";
export const NavList = (location) => {

  // const [Open, setOpen] = useState(false);

  let Open = false

  let List = [
    {
      name: "dashboard",
      icon: <MdDashboard />,
      link: "/dashboard",
      active: isActive(location, "/dashboard"),
      display: true,
    
    },

    {
      name: "my accounts",
      icon: <MdOutlineAnalytics />,
      downIcon:  <BiCaretDown/>,
      upIcon:  <BiCaretUp/>,
      link: "#",
      onClick: "",
      active: isActive(location, "/dashboard/myAccount"),
      display: true,
      children: [
        {
          name: "profile",
          icon: <MdOutlineAnalytics />,
          link: "/dashboard/profile",
          active: isActive(location, "/dashboard/profile"),
          display: true,
        },
        {
          name: "meter details",
          icon: <MdOutlineAnalytics />,
          link: "/dashboard/meter details",
          active: isActive(location, "/dashboard/meter details"),
          display: true,
        },
        {
          name: "electricity details",
          icon: <MdOutlineAnalytics />,
          link: "/dashboard/electricity details",
          active: isActive(location, "/dashboard/electricity details"),
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
      active: isActive(location, "/dashboard/postpaid"),
      display: true,
      children: [
        {
          name: "profile",
          icon: <MdOutlineAnalytics />,
          link: "/dashboard/profile",
          active: isActive(location, "/dashboard/profile"),
          display: true,
        },
        {
          name: "consumption",
          icon: <MdOutlineAnalytics />,
          link: "/dashboard/consumption",
          active: isActive(location, "/dashboard/consumption"),
          display: true,
        },
        {
          name: "payment",
          icon: <MdOutlineAnalytics />,
          link: "/dashboard/payment",
          active: isActive(location, "/dashboard/payment"),
          display: true,
        },
        {
          name: "payment history",
          icon: <MdOutlineAnalytics />,
          link: "/dashboard/payment-history",
          active: isActive(location, "/dashboard/payment-history"),
          display: true,
        },
        {
          name: "download/View Bill",
          icon: <MdOutlineAnalytics />,
          link: "/dashboard/download-view-bill",
          active: isActive(location, "/dashboard/download-view-bill"),
          display: true,
        },
        

      ]

      
    },


    {
      name: "pay bills",
      icon: <FaMoneyBillAlt />,
      link: "/dashboard/pay-bills",
      active: isActive(location, "/dashboard/pay-bills"),
      display: true,
    },
    {
      name: "fund wallet",
      icon: <FaWallet />,
      link: "/dashboard/fund-wallet",
      active: isActive(location, "/dashboard/fund-wallet"),
      display: true,
    },
    {
      name: "create support ticket",
      icon: <IoIosCreate />,
      link: "/dashboard/create-support-ticket",
      active: isActive(location, "/dashboard/create-support-ticket"),
      display: true,
    },
    {
      name: "new connection request",
      icon: <TbPlugConnected />,
      link: "/dashboard/new-connection-request",
      active: isActive(location, "/dashboard/new-connection-request"),
      display: true,
    },
    {
      name: "settings",
      icon: <RiSettings2Fill />,
      link: "/dashboard/settings",
      active: isActive(location, "/dashboard/settings"),
      display: true,
    },
  ];

  return List;
};
