import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
interface AuthLayoutProps {
  children?: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default AuthLayout;
