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
    id: 0,
  },
  {
    name: "Wydatki",
    icon: <MoneyOff className="IconButton" />,
    link: "/outgoes",
    id: 1,
  },
  {
    name: "Ewidencje",
    icon: <Accessibility className="IconButton" />,
    link: "/records",
    id: 2,
  },
  {
    name: "Kadromierz",
    icon: <Assessment className="IconButton" />,
    link: "/staff",
    id: 3,
  },
  {
    name: "Rejestr",
    icon: <HowToReg className="IconButton" />,
    link: "/registry",
    id: 4,
  },
  {
    name: "Terminarz",
    icon: <CalendarToday className="IconButton" />,
    link: "/timetable",
    id: 5,
  },
  {
    name: "Zgłoszenia",
    icon: <Announcement className="IconButton" />,
    link: "/notification",
    id: 6,
  },
  {
    name: "Generowanie faktur",
    icon: <Description className="IconButton" />,
    link: "/fv",
    id: 7,
  },
  {
    name: "Kontrachenci",
    icon: <ShoppingCart className="IconButton" />,
    link: "/contractors",
    id: 8,
  },
  {
    name: "zamówienia",
    icon: <Store className="IconButton" />,
    link: "/orders",
    id: 9,
  },
  {
    name: "Przeływy gotówki",
    icon: <CreditCard className="IconButton" />,
    link: "/cashflow",
    id: 10,
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
          key={items.id}
        >
          {items.icon}
          <div>{items.name}</div>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default routesList;
