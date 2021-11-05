import React, { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DrawerHeader from "./styled/DrawerHeader";

interface AppLayoutProps {
  children?: ReactNode;
}
const AppLayout: FC<AppLayoutProps> = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};
export default AppLayout;
