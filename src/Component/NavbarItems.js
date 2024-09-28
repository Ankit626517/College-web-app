import * as Icons from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { PiStudentBold } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { MdSavedSearch } from "react-icons/md";
export const navItems = [
    {
      id: 1,
      title: "HOME",
      path: "./",
      cName: "nav-item", 
      icon:<ImProfile />
    },
    {
      id: 2,
      title: "▼ABOUT",
      path: "./",
      cName: "nav-item",
      
    },
    {
      id: 3,
      title: "ACADEMICS",
      path: "./Academics",
      cName: "nav-item",
      icon:<Icons.FaBookReader />
    },
    {
      id: 4,
      title: "DEPARTMENTS",
      path: "./Departments",
      cName: "nav-item",
      icon:<Icons.FaRegBuilding />
    },
    {
      id: 5,
      title: "STUDENT",
      path: "./Student",
      cName: "nav-item",
      icon:<PiStudentBold />
    },
     {
      id: 6,
      title: "EXAMINATION",
      path: "./Examination",
      cName: "nav-item",
      icon:<Icons.FaBook />
    }, 
    {
      id: 7,
      title: "PLACEMENT",
      path: "./Placement",
      cName: "nav-item",
      icon:<IoPeopleOutline />
    },
    {
      id: 8,
      title: "RESOURCE",
      path: "./Resources",
      cName: "nav-item",
      icon:<GrResources />
    }, 
    {
      id: 9,
      title: "RESEARCH",
      path: "./Research",
      cName: "nav-item",
      icon:<MdSavedSearch />
    },{
      id: 10,
      title: "IQAC",
      path: "./Iqac",
      cName: "nav-item",
      icon:<Icons.FaChartLine />
    },

  ];
  
  export const AboutDropdown = [
    {
      id: 1,
      title: "Profile",
      path: "./Profile",
      cName: "navbar_Dropdown_main_box_item",
    },
    {
      id: 2,
      title: "Legacy",
      path: "./lagacy",
      cName: "navbar_Dropdown_main_box_item",
    },
    {
      id: 3,
      title: "Vision & Mission",
      path: "./Vision&Mission",
      cName: "navbar_Dropdown_main_box_item",
    },
    {
      id: 4,
      title: "RSET MileStones",
      path: "./RSETMileStones",
      cName: "navbar_Dropdown_main_box_item",
    },
    {
      id: 5,
      title: "RSET Organogram",
      path: "./RSET Organogram",
      cName: "navbar_Dropdown_main_box_item",
    },
    {
      id: 6,
      title: "Governance",
      path: "./Governance",
      cName: "navbar_Dropdown_main_box_item",
    },
    {
      id: 7,
      title: "Official",
      path: "./Officials",
      cName: "navbar_Dropdown_main_box_item",
    },
  ];