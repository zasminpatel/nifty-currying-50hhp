import { NavLink, matchPath, useLocation } from "react-router-dom";
export default function Register() {
  return (
    <>
      Register<NavLink to="/login">login</NavLink>
    </>
  );
}
