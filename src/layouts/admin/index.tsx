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
      <div style={{ paddingTop: 10 }}>
        <Outlet />
      </div>
    </>
  );
};
export default FrontLayout;
