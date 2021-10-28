import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
interface FrontLayoutProps {
  children?: ReactNode;
}

const FrontLayout: FC<FrontLayoutProps> = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default FrontLayout;
