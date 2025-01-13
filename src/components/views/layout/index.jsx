import { Outlet } from "react-router";
import { Navigation } from "../navigation";

export const Layout = () => {
  return (
    <div className=" h-screen">
      <Outlet />
      <Navigation />
    </div>
  );
};
