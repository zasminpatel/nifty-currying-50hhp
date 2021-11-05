import React, { FC, ReactNode } from "react";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { Button, ListSubheader, Box, List } from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import MailIcon from "@mui/icons-material/Mail";
import PeopleIcon from "@mui/icons-material/People";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useDispatch, useSelector } from "react-redux";
import { closeAction } from "../../actions/appSetting";
import Drawer from "./styled/Drawer";
import DrawerHeader from "./styled/DrawerHeader";
import SidebarMenuItem from "./SidebarMenuItem";
const Sidebar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isAppSidebarOpen = useSelector(
    (state) => state.appSetting.isAppSidebarOpen
  );
  const handleDrawerClose = () => {
    dispatch(closeAction());
  };

  const appMenuItems = [
    {
      name: "Dashboard",
      link: "/app/dashboard",
      Icon: DashboardIcon
    },
    {
      name: "Setting",
      link: "/app/setting",
      Icon: SettingsIcon
    },
    {
      name: "Users",
      Icon: PeopleIcon,
      items: [
        {
          name: "user list",
          link: "/app/setting",
          Icon: SettingsIcon
        },
        {
          name: "add new users",
          link: "/app/setting",
          Icon: SettingsIcon
        }
      ]
    },
    {
      name: "Nested Pages",
      Icon: MailIcon,
      items: [
        {
          name: "Level 2"
        },
        {
          name: "Level 2",
          items: [
            {
              name: "Level 3"
            },
            {
              name: "Level 3"
            }
          ]
        }
      ]
    }
  ];
  return (
    <>
      <Drawer variant="permanent" open={isAppSidebarOpen}>
        <Scrollbars autoHide>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List component="nav" disablePadding>
            {appMenuItems.map((item, index) => (
              <SidebarMenuItem {...item} key={index} />
            ))}
          </List>
        </Scrollbars>
      </Drawer>
    </>
  );
};
export default Sidebar;
