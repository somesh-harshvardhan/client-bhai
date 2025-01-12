import { Navigation } from "../navigation";

export const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen">
      {children}
      <Navigation />
    </div>
  );
};
