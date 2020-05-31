import React from "react";
import { MenuItem, MenuList } from "@material-ui/core";
import Money from "@material-ui/icons/Money";
import Accessibility from "@material-ui/icons/Accessibility";
import Assessment from "@material-ui/icons/Assessment";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Announcement from "@material-ui/icons/Announcement";
import Description from "@material-ui/icons/Description";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Store from "@material-ui/icons/Store";
import CreditCard from "@material-ui/icons/CreditCard";
import MoneyOff from "@material-ui/icons/MoneyOff";
import HowToReg from "@material-ui/icons/HowToReg";
import { Link } from "react-router-dom";

import "./styles/toolbarStyle.scss";

const categories = [
  {
    name: "Przychody",
    icon: <Money className="IconButton" />,
    link: "/incoms",
  },
  {
    name: "Wydatki",
    icon: <MoneyOff className="IconButton" />,
    link: "/outgoes",
  },
  {
    name: "Ewidencje",
    icon: <Accessibility className="IconButton" />,
    link: "/records",
  },
  {
    name: "Kadromierz",
    icon: <Assessment className="IconButton" />,
    link: "/staff",
  },
  {
    name: "Rejestr",
    icon: <HowToReg className="IconButton" />,
    link: "/registry",
  },
  {
    name: "Terminarz",
    icon: <CalendarToday className="IconButton" />,
    link: "/timetable",
  },
  {
    name: "Zgłoszenia",
    icon: <Announcement className="IconButton" />,
    link: "/notification",
  },
  {
    name: "Generowanie faktur",
    icon: <Description className="IconButton" />,
    link: "/fv",
  },
  {
    name: "Kontrachenci",
    icon: <ShoppingCart className="IconButton" />,
    link: "/contractors",
  },
  {
    name: "zamówienia",
    icon: <Store className="IconButton" />,
    link: "/orders",
  },
  {
    name: "Przeływy gotówki",
    icon: <CreditCard className="IconButton" />,
    link: "/cashflow",
  },
];

function routesList(props) {
  return (
    <MenuList>
      {categories.map((items) => (
        <MenuItem
          component={Link}
          onClick={props.handleDrawerClose}
          to={items.link}
          className="menuButton"
        >
          {items.icon}
          <div>{items.name}</div>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default routesList;
