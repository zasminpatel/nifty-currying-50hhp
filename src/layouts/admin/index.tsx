import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { styled } from "@mui/material/styles";
import ThemeSettings from "../../components/ThemeSettings";
// import ThemeSettings from "src/components/ThemeSettings";
interface FrontLayoutProps {
  children?: ReactNode;
}
const MainContent = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow-y: auto;
        overflow-x: hidden;
`
);
const FrontLayout: FC<FrontLayoutProps> = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <MainContent>
        <Outlet />
        <ThemeSettings />
      </MainContent>
    </>
  );
};
export default FrontLayout;
