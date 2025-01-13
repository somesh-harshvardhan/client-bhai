import { IoIosApps } from "react-icons/io";
import { MdAddBox } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import clsx from "clsx";
import { Link, useLocation } from "react-router";

export const Navigation = () => {
  const location = useLocation();

  return (
    <div className=" fixed bottom-10 w-[90%] left-1/2 -translate-x-1/2">
      <nav className=" flex justify-around items-center bg-[rgba(20,20,20,.85)] rounded-full px-3 py-4">
        <Link
          to={"/create-art"}
          className={clsx(" text-base flex flex-col items-center", {
            "text-white": location.pathname !== "/create-art",
            " text-blue-500": location.pathname === "/create-art",
          })}
        >
          <MdAddBox size={26} />
          <span className=" text-xs">Create Art</span>
        </Link>
        <Link
          to={"/ai-store"}
          className={clsx(" text-base flex flex-col items-center", {
            "text-white": location.pathname !== "/ai-store",
            " text-blue-500": location.pathname === "/ai-store",
          })}
        >
          <IoIosApps size={26} />
          <span className=" text-xs">Ai Store</span>
        </Link>
        <Link
          to={"/profile"}
          className={clsx(" text-base flex flex-col items-center", {
            "text-white": location.pathname !== "/profile",
            " text-blue-500": location.pathname === "/profile",
          })}
        >
          <FaUser size={22} />
          <span className=" text-xs">Profile</span>
        </Link>
      </nav>
    </div>
  );
};
